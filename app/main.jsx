import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Every block file in the four section folders. The section folder is not part of the URL:
//   core/men/block-01.jsx            -> /men             (all blocks in order)
//   core/men/block-01.jsx            -> /men/block-01    (one block on its own)
//   sales/clinic/signup/block-01.jsx -> /clinic/signup
//   legal/legal/ccpa/block-01.jsx    -> /legal/ccpa
const FILES = import.meta.glob("../{core,sales,legal,teleforms}/**/block-*.jsx", { eager: true });

const blocks = Object.entries(FILES)
  .map(([path, mod]) => {
    const [section, ...rest] = path.replace(/^\.\.\//, "").replace(/\.jsx$/, "").split("/");
    const rel = rest.join("/");
    return { section, page: "/" + rest.slice(0, -1).join("/"), file: "/" + rel, Component: mod.default };
  })
  .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));

function Index() {
  const sections = ["core", "sales", "legal", "teleforms"];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 32 }}>
      <h1>athos-web</h1>
      {sections.map((s) => (
        <section key={s} style={{ marginBottom: 32 }}>
          <h2>{s}</h2>
          {[...new Set(blocks.filter((b) => b.section === s).map((b) => b.page))].map((p) => (
            <div key={p} style={{ marginBottom: 16 }}>
              <a href={p}><strong>{p}</strong></a>
              <ul>{blocks.filter((b) => b.page === p).map((b) => <li key={b.file}><a href={b.file}>{b.file}</a></li>)}</ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const single = blocks.find((b) => b.file === path);
const page = blocks.filter((b) => b.page === path);
const view = single ? [single] : page;

createRoot(document.getElementById("root")).render(
  view.length ? <>{view.map(({ file, Component }) => <Component key={file} />)}</> : <Index />
);
