// Runs every block file on its own in Node: bundles it alone with esbuild,
// renders it into a simulated browser (jsdom), runs its effects, and reports pass/fail.
import { build } from "esbuild";
import { JSDOM } from "jsdom";
import { readdirSync, statSync, mkdtempSync, rmSync } from "node:fs";
import { join, relative } from "node:path";
import { tmpdir } from "node:os";
import { pathToFileURL } from "node:url";

const ROOT = new URL("..", import.meta.url).pathname;
const SKIP = new Set(["node_modules", "_softr-original", "app", "scripts", "dist", "template-for-clients", ".git"]);
const files = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) { if (!SKIP.has(n)) walk(p); }
    else if (/^block-.*\.jsx$/.test(n)) files.push(p);
  }
})(ROOT);
files.sort();

const dom = new JSDOM("<!doctype html><html><head></head><body></body></html>", { url: "http://localhost/", pretendToBeVisual: true });
for (const k of ["window", "document", "navigator", "HTMLElement", "Node", "getComputedStyle", "sessionStorage", "localStorage", "requestAnimationFrame", "cancelAnimationFrame", "IntersectionObserver", "ResizeObserver", "MutationObserver"]) {
  if (dom.window[k] === undefined) continue;
  const v = k === "window" ? dom.window : dom.window[k];
  Object.defineProperty(globalThis, k, { value: v, configurable: true, writable: true });
}
globalThis.IntersectionObserver ||= class { observe() {} unobserve() {} disconnect() {} };
globalThis.ResizeObserver ||= class { observe() {} unobserve() {} disconnect() {} };
dom.window.IntersectionObserver ||= globalThis.IntersectionObserver;
dom.window.ResizeObserver ||= globalThis.ResizeObserver;
dom.window.scrollTo = () => {};
// jsdom has no layout/scrolling; real browsers do. Stub them so blocks that scroll can mount.
dom.window.Element.prototype.scrollTo ||= function () {};
dom.window.Element.prototype.scrollBy ||= function () {};
dom.window.Element.prototype.scrollIntoView ||= function () {};
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

const React = await import("react");
const { createRoot } = await import("react-dom/client");
const { act } = React;
const tmp = mkdtempSync(join(ROOT, ".check-"));
let failed = 0;

for (const f of files) {
  const rel = relative(ROOT, f);
  const errors = [];
  const origError = console.error;
  console.error = (...a) => errors.push(a.map(String).join(" ").slice(0, 200));
  try {
    const out = join(tmp, rel.replace(/[\/]/g, "__") + ".mjs");
    await build({ entryPoints: [f], bundle: true, format: "esm", platform: "neutral", outfile: out,
      jsx: "automatic", loader: { ".jsx": "jsx" }, external: ["react", "react-dom", "react/jsx-runtime"], logLevel: "silent",
      mainFields: ["module", "main"] });
    const mod = await import(pathToFileURL(out).href);
    if (typeof mod.default !== "function") throw new Error("no default-exported component");
    // Teleform pages read earlier steps from sessionStorage and redirect back if it's empty.
    // Seed a completed weight-loss intake so each page renders its own content.
    sessionStorage.setItem("tf_intake", JSON.stringify({ state: "FL", telehealthRequired: false, dateOfBirth: "01-01-1990", gender: "male", firstName: "Test", lastName: "User",
      weight: 220, heightFeet: 5, heightInches: 10, bmi: 31.6, bmiCategory: "Obese", weightLossGoal: "21-50", goalWeight: 186,
      route: "injection", effectiveRoute: "injection", priorGLP1: "none", medication: "semaglutide", dosingTier: "Standard", recommendedMed: "semaglutide", microdose: false }));
    const host = document.createElement("div"); document.body.appendChild(host);
    const root = createRoot(host);
    await act(async () => { root.render(React.createElement(mod.default)); });
    await act(async () => { await new Promise((r) => setTimeout(r, 50)); });
    const text = host.textContent.trim().length;
    await act(async () => { root.unmount(); });
    host.remove();
    const real = errors.filter((e) => !/act\(|not wrapped in act|Not implemented: navigation/.test(e));  // jsdom cannot follow page redirects
    if (real.length) throw new Error(real[0]);
    if (!text) throw new Error("rendered nothing");
    console.log(`PASS  ${rel}  (${text} chars rendered)`);
  } catch (e) {
    failed++;
    console.log(`FAIL  ${rel}  ${String(e.message || e).split("\n")[0]}`);
  } finally {
    console.error = origError;
  }
}
rmSync(tmp, { recursive: true, force: true });
console.log(`\n${files.length - failed}/${files.length} files run on their own.`);
process.exit(failed ? 1 : 0);
