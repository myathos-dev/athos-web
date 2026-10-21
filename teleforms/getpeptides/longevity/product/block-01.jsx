import { useState, useCallback, useEffect } from "react";

const PR = "rgb(36, 92, 58)";
const BRAND = "Athos";
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const AC = "#37B8D3";

const PEPTIDES = {
  motsc: {
    name: "MOTS-c",
    cls: "Mitochondrial-derived peptide",
    desc: "Metabolic optimization, insulin sensitivity, exercise mimetic",
    routes: ["injection"],
    cost: 230,
    note: "Available as standalone or multi-peptide blends",
  },
  nad: {
    name: "NAD+",
    cls: "Coenzyme — cellular repair",
    desc: "Cellular energy, DNA repair, cognitive clarity, anti-aging",
    routes: ["injection", "troche", "capsule", "nasal", "cream"],
    cost: 170,
    note: "Standalone — multiple delivery formats",
  },
  "cjc-ipa": {
    name: "CJC-1295 / Ipamorelin",
    cls: "Growth hormone secretagogue stack",
    desc: "GH release, lean mass, recovery, sleep quality",
    routes: ["injection"],
    cost: 160,
    note: "Available as standalone blend or multi-peptide stacks",
  },
  glo: {
    name: "GLO Blend",
    cls: "GHK-Cu / BPC-157 / TB-500 / Epitalon",
    desc: "Collagen, tissue repair, telomere support, anti-aging",
    routes: ["injection"],
    cost: 190,
    note: "Fountain of Youth quad stack",
  },
  klow: {
    name: "KLOW Blend",
    cls: "BPC-157 / TB-500 / GHK-Cu / KPV",
    desc: "Deep tissue repair, anti-inflammatory, skin recovery",
    routes: ["injection"],
    cost: 199,
    note: "503A compounded — highest-tier recovery blend",
  },
  "semax-selank": {
    name: "Semax / Selank",
    cls: "Nootropic peptide duo",
    desc: "Cognitive enhancement, focus, anxiolysis, neuroprotection",
    routes: ["injection", "troche"],
    cost: 165,
    note: "Standalone neuro stack",
    trocheName: "Sermorelin / GHRP-2",
    trocheCls: "Growth hormone secretagogue",
    trocheDesc: "GH release, deep sleep, tissue recovery",
    trocheNote: "Oral troches — 4 strength options",
  },
};

/* Route-aware display helpers */
const pepName = (id, rt) => { const p = PEPTIDES[id]; return p && rt === "troche" && p.trocheName ? p.trocheName : p?.name || ""; };
const pepCls  = (id, rt) => { const p = PEPTIDES[id]; return p && rt === "troche" && p.trocheCls  ? p.trocheCls  : p?.cls  || ""; };
const pepDesc = (id, rt) => { const p = PEPTIDES[id]; return p && rt === "troche" && p.trocheDesc ? p.trocheDesc : p?.desc || ""; };
const pepNote = (id, rt) => { const p = PEPTIDES[id]; return p && rt === "troche" && p.trocheNote ? p.trocheNote : p?.note || ""; };

const DT = [
  { max: 30, label: "Metabolic Optimization", color: "#86EFAC", range: "25–29.9" },
  { max: 35, label: "First-line Support", color: "#4ADE80", range: "30–34.9" },
  { max: 40, label: "High Priority", color: "#16A34A", range: "35–39.9" },
  { max: 999, label: "High Priority+", color: "#166534", range: "≥40" },
];

const ROUTE_LABELS = {
  injection: "SubQ injection",
  troche: "Dissolving troche",
  capsule: "Oral capsule",
  nasal: "Nasal spray",
  cream: "Topical cream",
};

const rec = (bmi, prior) => {
  if (prior === "nad") return "motsc";
  if (prior === "motsc") return "nad";
  if (bmi >= 30) return "motsc";
  return "nad";
};

const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
@keyframes tfSIR{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
@keyframes tfSOL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}
@keyframes tfSIL{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}
@keyframes tfSOR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}
.tf-ef{animation:tfSIR .4s cubic-bezier(.16,1,.3,1) forwards}
.tf-xf{animation:tfSOL .3s cubic-bezier(.7,0,.84,0) forwards}
.tf-eb{animation:tfSIL .4s cubic-bezier(.16,1,.3,1) forwards}
.tf-xb{animation:tfSOR .3s cubic-bezier(.7,0,.84,0) forwards}
.tf-idle{opacity:1;transform:translateX(0)}
@keyframes tfFI{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.tf-fi{animation:tfFI .4s cubic-bezier(.16,1,.3,1) forwards}
@keyframes tfFtI{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.tf-fta{animation:tfFtI .35s cubic-bezier(.16,1,.3,1) forwards}`;

const Arr = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
const BkA = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const Chk = ({ c }) => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ── SVG Icons ── */
const SyrSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <rect x="18" y="6" width="12" height="4" rx="1" fill={PR} opacity=".3" />
    <rect x="20" y="10" width="8" height="24" rx="2" fill={PR} opacity=".15" stroke={PR} strokeWidth="1.5" />
    <line x1="20" y1="16" x2="28" y2="16" stroke={PR} opacity=".3" />
    <line x1="20" y1="20" x2="28" y2="20" stroke={PR} opacity=".3" />
    <line x1="20" y1="24" x2="28" y2="24" stroke={PR} opacity=".3" />
    <rect x="22" y="2" width="4" height="4" rx="1" fill={PR} opacity=".5" />
    <path d="M22 34L24 42L26 34" fill={PR} opacity=".6" />
    <line x1="24" y1="34" x2="24" y2="44" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const PilSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <rect x="10" y="16" width="28" height="16" rx="8" fill={PR} opacity=".15" stroke={PR} strokeWidth="1.5" />
    <line x1="24" y1="16" x2="24" y2="32" stroke={PR} strokeWidth="1.5" />
    <rect x="24" y="16" width="14" height="16" rx="8" fill={PR} opacity=".3" />
  </svg>
);
const NasalSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <rect x="19" y="8" width="10" height="26" rx="5" fill={PR} opacity=".12" stroke={PR} strokeWidth="1.5" />
    <rect x="16" y="6" width="16" height="6" rx="3" fill={PR} opacity=".25" stroke={PR} strokeWidth="1.5" />
    <path d="M24 8V4" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="3" r="2" fill={PR} opacity=".4" />
    <path d="M21 34L24 40L27 34" fill={PR} opacity=".5" />
    <line x1="22" y1="18" x2="26" y2="18" stroke={PR} opacity=".3" strokeWidth="1" />
    <line x1="22" y1="22" x2="26" y2="22" stroke={PR} opacity=".3" strokeWidth="1" />
    <line x1="22" y1="26" x2="26" y2="26" stroke={PR} opacity=".3" strokeWidth="1" />
  </svg>
);
const CreamSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <rect x="14" y="18" width="20" height="22" rx="3" fill={PR} opacity=".12" stroke={PR} strokeWidth="1.5" />
    <rect x="16" y="12" width="16" height="8" rx="2" fill={PR} opacity=".25" stroke={PR} strokeWidth="1.5" />
    <rect x="20" y="8" width="8" height="6" rx="2" fill={PR} opacity=".35" stroke={PR} strokeWidth="1.5" />
    <path d="M18 28h12" stroke={PR} opacity=".3" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 32h8" stroke={PR} opacity=".2" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const CapSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="24" rx="12" ry="7" fill={PR} opacity=".1" stroke={PR} strokeWidth="1.5" />
    <ellipse cx="24" cy="24" rx="12" ry="7" fill={PR} opacity=".08" />
    <path d="M12 24v0c0 3.87 5.37 7 12 7s12-3.13 12-7" stroke={PR} strokeWidth="1.5" opacity=".3" />
    <path d="M12 24v0c0-3.87 5.37-7 12-7s12 3.13 12 7" stroke={PR} strokeWidth="1.5" />
    <line x1="24" y1="17" x2="24" y2="31" stroke={PR} strokeWidth="1.5" opacity=".25" />
  </svg>
);
const TrocheSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="12" fill={PR} opacity=".12" stroke={PR} strokeWidth="1.5" />
    <circle cx="24" cy="24" r="5" fill={PR} opacity=".2" />
    <line x1="24" y1="12" x2="24" y2="16" stroke={PR} opacity=".3" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="32" x2="24" y2="36" stroke={PR} opacity=".3" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="24" x2="16" y2="24" stroke={PR} opacity=".3" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="24" x2="36" y2="24" stroke={PR} opacity=".3" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Tooltip ── */
const Tip = ({ text }) => {
  const [s, setS] = useState(false);
  return (
    <span
      style={{ position: "relative", display: "inline-flex", marginLeft: 6, cursor: "pointer", verticalAlign: "middle" }}
      onMouseEnter={() => setS(true)}
      onMouseLeave={() => setS(false)}
      onClick={(e) => { e.stopPropagation(); setS(!s); }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(0 0% 65%)" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      {s && (
        <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", width: 240, padding: "10px 12px", borderRadius: 10, backgroundColor: "hsl(0 0% 15%)", color: "#fff", fontSize: 13, fontWeight: 400, lineHeight: "18px", fontFamily: FB, boxShadow: "0 8px 24px rgba(0,0,0,.2)", zIndex: 100 }}>
          {text}
          <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid hsl(0 0% 15%)" }} />
        </div>
      )}
    </span>
  );
};

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export default function TeleformLongevityProduct() {
  const [cached] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; }
  });

  useEffect(() => {
    if (!cached.firstName || !cached.bmi) window.location.href = "/getpeptides/longevity/profile";
  }, []);

  const bmi = cached.bmi || 30;
  const doseTier = DT.find((t) => bmi < t.max) || DT[3];
  const doseW = Math.max(0, Math.min(100, ((Math.max(25, Math.min(45, bmi)) - 25) / 20) * 100));

  const [step, setStep] = useState(1);
  const [dStep, setDStep] = useState(1);
  const [anim, setAnim] = useState("idle");
  const [dir, setDir] = useState("forward");

  const [route, setRoute] = useState(null);
  const [subType, setSubType] = useState(null);
  const [prior, setPrior] = useState(null);
  const [peptide, setPeptide] = useState(null);
  const [microDose, setMicroDose] = useState(null);

  const effectiveRoute = route === "oral" ? (subType || "troche")
    : route === "other" ? (subType || "nasal")
    : route;

  const isInj = route === "injection";

  const availPeptides = effectiveRoute
    ? Object.entries(PEPTIDES).filter(([, p]) => p.routes.includes(effectiveRoute)).map(([k]) => k)
    : [];

  const injCount = Object.values(PEPTIDES).filter(p => p.routes.includes("injection")).length;

  const recPeptide = rec(bmi, prior);
  const totalSteps = 13;
  const globalStep = 9;
  const prog = Math.round((globalStep / totalSteps) * 100);

  /* ── Navigation ── */
  const nav = useCallback((s, d) => {
    if (anim !== "idle") return;
    setDir(d);
    setAnim("exit");
    setTimeout(() => {
      setDStep(s);
      setStep(s);
      setTimeout(() => {
        setAnim("enter");
        setTimeout(() => setAnim("idle"), 400);
      }, 50);
    }, 300);
  }, [anim]);

  const fwd = (s) => nav(s, "forward");
  const bwd = (s) => nav(s, "backward");

  const tc = () => {
    if (anim === "enter") return dir === "forward" ? "tf-ef" : "tf-eb";
    if (anim === "exit") return dir === "forward" ? "tf-xf" : "tf-xb";
    return "tf-idle";
  };

  /* ── Save & redirect ── */
  const saveAndRedirect = () => {
    try {
      const d = JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
      d.route = route;
      d.effectiveRoute = effectiveRoute;
      d.priorPeptides = prior;
      d.peptide = peptide || (availPeptides.length === 1 ? availPeptides[0] : null);
      d.dosingTier = doseTier.label;
      d.recommendedPeptide = recPeptide;
      const selPep = PEPTIDES[d.peptide];
      d.vialPrice = selPep?.cost || null;
      if (isInj && microDose) {
        d.microDose = true;
        d.billingCycle = "bimonthly";
        d.monthlyCost = selPep ? Math.round(selPep.cost / 2) : null;
        d.displayPrice = d.monthlyCost;
      } else {
        d.microDose = false;
        d.billingCycle = "monthly";
        d.monthlyCost = selPep?.cost || null;
        d.displayPrice = d.monthlyCost;
      }
      if (subType) d.subType = subType;
      sessionStorage.setItem("tf_intake", JSON.stringify(d));
    } catch (e) { console.error(e); }
    window.location.href = "/getpeptides/longevity/product-info";
  };

  /* ── Shared UI ── */
  const LH = ({ showBack, onBack }) => (
    <header style={{ position: "sticky", top: 0, zIndex: 10, maxWidth: 520, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", backgroundColor: "#fff", borderBottom: "1px solid hsl(0 0% 90%)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>
        {showBack && (
          <button onClick={onBack} style={{ position: "absolute", left: 20, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid hsl(0 0% 90%)", backgroundColor: "transparent", color: "hsl(0 0% 8.5%)", fontSize: 14, fontWeight: 400, cursor: "pointer", lineHeight: 1, fontFamily: FB }}>
            <BkA /> Back
          </button>
        )}
        <span style={{ fontSize: 28, fontWeight: 600, color: PR, letterSpacing: "-0.01em", fontFamily: FH }}>{BRAND}</span>
      </div>
      <div style={{ padding: "0 20px 16px" }}>
        <div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}>
          <div style={{ width: `${prog}%`, height: "100%", borderRadius: 9999, backgroundColor: PR, transition: "width .4s ease" }} />
        </div>
      </div>
    </header>
  );

  const LF = ({ onClick, disabled, label }) => (
    <footer className="tf-fta" style={{ position: "sticky", bottom: 0, maxWidth: 520, width: "100%", margin: "auto auto 0", padding: "16px 20px", backgroundColor: "#fff", borderTop: "1px solid hsl(0 0% 90%)" }}>
      <button onClick={onClick} disabled={disabled} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: FB, fontSize: 16, fontWeight: 500, lineHeight: "24px", padding: 16, borderRadius: 12, border: "none", backgroundColor: !disabled ? PR : "hsl(0 0% 96.5%)", color: !disabled ? "#fff" : "hsl(0 0% 55%)", cursor: !disabled ? "pointer" : "not-allowed", transition: "background-color .3s, color .3s" }}>
        {label || "Continue"} <Arr />
      </button>
    </footer>
  );

  const RouteCard = ({ id, icon, label, sub, badge, sel, onClick }) => (
    <div
      onClick={onClick}
      style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "16px 6px", borderRadius: 12, border: `2px solid ${sel ? PR : "hsl(0 0% 90%)"}`, backgroundColor: sel ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s", textAlign: "center", position: "relative" }}
    >
      {badge && (
        <span style={{ position: "absolute", top: -9, fontSize: 10, fontWeight: 600, color: PR, backgroundColor: "hsl(140 30% 94%)", padding: "1px 7px", borderRadius: 9999, border: `1px solid ${PR}30`, fontFamily: FB }}>{badge}</span>
      )}
      {icon}
      <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: sel ? PR : "hsl(0 0% 8.5%)", lineHeight: 1.2 }}>{label}</span>
      <span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 50%)" }}>{sub}</span>
    </div>
  );

  const DoseMeter = () => (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "flex", alignItems: "center" }}>
        MOTS-c Dosing Tier (BMI-based)
        <Tip text="MOTS-c dosing is indexed to BMI. Higher BMI correlates with lower endogenous MOTS-c levels and stronger benefit from supplementation. Your provider confirms the final protocol." />
      </div>
      <div style={{ position: "relative", width: "100%", height: 36, borderRadius: 9999, overflow: "hidden", display: "flex" }}>
        {DT.map((d, i) => <div key={i} style={{ flex: 1, backgroundColor: d.color }} />)}
        <div style={{ position: "absolute", left: `${doseW}%`, top: 0, transform: "translateX(-50%)", height: "100%", display: "flex", alignItems: "center", zIndex: 2 }}>
          <div style={{ padding: "3px 10px", borderRadius: 9999, backgroundColor: doseTier.color, color: doseTier.color === "#86EFAC" || doseTier.color === "#4ADE80" ? "hsl(0 0% 15%)" : "#fff", fontFamily: FB, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.2)", border: "2px solid #fff" }}>
            {doseTier.label}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        {DT.map((d, i) => (
          <div key={i} style={{ flex: 1, textAlign: i === 0 ? "left" : i === 3 ? "right" : "center" }}>
            <span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)" }}>{d.range}</span>
          </div>
        ))}
      </div>
    </div>
  );

  /* ══════════════════════════════════════════════
     RENDER
     ══════════════════════════════════════════════ */
  return (
    <div style={{ overflow: "hidden", position: "relative", fontFamily: FB, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}>
      <style>{CSS}</style>
      <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>

        {/* ───────────────────────────────────────
            9a — Delivery Method Selection
            ─────────────────────────────────────── */}
        {dStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { window.location.href = "/getpeptides/longevity/profile"; }} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                How would you prefer to take your peptide therapy?
                <Tip text="Delivery method determines which peptides are available. Injection unlocks all peptides. Oral and alternative routes offer NAD+ and Sermorelin options." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                Choose based on comfort and lifestyle
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <RouteCard
                  id="injection"
                  icon={<SyrSVG />}
                  label="Injection"
                  sub="SubQ — daily"
                  badge={`${injCount} peptides`}
                  sel={route === "injection"}
                  onClick={() => { setRoute("injection"); setSubType(null); setPeptide(null); }}
                />
                <RouteCard
                  id="oral"
                  icon={<PilSVG />}
                  label="Oral"
                  sub="Troche or capsule"
                  badge="NAD+ & more"
                  sel={route === "oral"}
                  onClick={() => { setRoute("oral"); setSubType(null); setPeptide(null); }}
                />
                <RouteCard
                  id="other"
                  icon={<NasalSVG />}
                  label="Other"
                  sub="Nasal or topical"
                  badge="NAD+"
                  sel={route === "other"}
                  onClick={() => { setRoute("other"); setSubType(null); setPeptide(null); }}
                />
              </div>
              {route && (
                <div className="tf-fi" style={{ marginTop: 16, padding: "10px 14px", borderRadius: 12, backgroundColor: "hsl(0 0% 97%)", border: "1px solid hsl(0 0% 90%)" }}>
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", lineHeight: "18px", margin: 0 }}>
                    {route === "injection" && "All peptides available — MOTS-c blends, NAD+, CJC/Ipamorelin, GLO Blend, KLOW Blend, and Semax/Selank. SubQ with insulin needle."}
                    {route === "oral" && "NAD+ as daily dissolving troche or capsule. Sermorelin/GHRP-2 troches also available."}
                    {route === "other" && "NAD+ as nasal spray (daily) or topical cream (daily application). Non-invasive options."}
                  </p>
                </div>
              )}
            </main>
            <LF
              onClick={() => {
                if (route === "injection") fwd(3);
                else fwd(2);
              }}
              disabled={!route}
            />
          </div>
        )}

        {/* ───────────────────────────────────────
            9b — Sub-type Selection (oral OR other)
            ─────────────────────────────────────── */}
        {dStep === 2 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(1)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              {route === "oral" ? (
                <>
                  <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                    What type of oral delivery?
                    <Tip text="Troches dissolve on the tongue for direct mucosal absorption. Capsules are swallowed for GI absorption. Both are daily dosing." />
                  </h1>
                  <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                    Both are effective — pick your preference
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <RouteCard
                      id="troche"
                      icon={<TrocheSVG />}
                      label="Dissolving Troche"
                      sub="On tongue"
                      badge="NAD+ & Sermorelin"
                      sel={subType === "troche"}
                      onClick={() => { setSubType("troche"); setPeptide(null); }}
                    />
                    <RouteCard
                      id="capsule"
                      icon={<CapSVG />}
                      label="Capsule"
                      sub="Swallowed"
                      badge="NAD+"
                      sel={subType === "capsule"}
                      onClick={() => { setSubType("capsule"); setPeptide("nad"); }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                    Choose your delivery method
                    <Tip text="Nasal spray delivers NAD+ through the nasal mucosa for rapid absorption. Topical cream is applied daily to skin." />
                  </h1>
                  <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                    Both are non-invasive daily options
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <RouteCard
                      id="nasal"
                      icon={<NasalSVG />}
                      label="Nasal Spray"
                      sub="Daily spray"
                      badge="1 option"
                      sel={subType === "nasal"}
                      onClick={() => { setSubType("nasal"); setPeptide("nad"); }}
                    />
                    <RouteCard
                      id="cream"
                      icon={<CreamSVG />}
                      label="Topical Cream"
                      sub="Daily application"
                      badge="2 options"
                      sel={subType === "cream"}
                      onClick={() => { setSubType("cream"); setPeptide("nad"); }}
                    />
                  </div>
                </>
              )}
            </main>
            <LF
              onClick={() => fwd(3)}
              disabled={!subType}
            />
          </div>
        )}

        {/* ───────────────────────────────────────
            9c — Prior Peptide Experience
            ─────────────────────────────────────── */}
        {dStep === 3 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => (route === "oral" || route === "other") ? bwd(2) : bwd(1)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Have you used peptide therapy before?
                <Tip text="Peptide therapies include NAD+ (cellular energy), MOTS-c (metabolic), CJC/Ipamorelin (growth hormone), BPC-157 (tissue repair), GHK-Cu (collagen), and Semax/Selank (cognitive)." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                This helps us recommend the right starting point
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  ["none", "No, this is my first time using peptides"],
                  ["nad", "Yes, NAD+ (injectable, oral, or nasal)"],
                  ["motsc", "Yes, MOTS-c or mitochondrial peptides"],
                  ["gh", "Yes, CJC/Ipamorelin or other GH secretagogues"],
                  ["other", "Yes, other peptides (BPC-157, GHK-Cu, Semax, etc.)"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <label
                      onClick={() => {
                        setPrior(id);
                        if (!isInj && availPeptides.length === 1) setPeptide(availPeptides[0]);
                        else setPeptide(null);
                      }}
                      style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${prior === id ? PR : "hsl(0 0% 90%)"}`, backgroundColor: prior === id ? PR : "hsl(0 0% 98%)", color: prior === id ? "#fff" : "hsl(0 0% 8.5%)", cursor: "pointer", transition: "all .2s" }}
                    >
                      <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${prior === id ? "#fff" : "hsl(0 0% 85%)"}`, backgroundColor: prior === id ? "#fff" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {prior === id && <Chk c={PR} />}
                      </span>
                      <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>{label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </main>
            <LF
              onClick={() => {
                if (isInj) fwd(4);
                else if (availPeptides.length > 1) fwd(4);
                else saveAndRedirect();
              }}
              disabled={!prior}
              label={isInj || availPeptides.length > 1 ? "Continue" : "Continue to product selection"}
            />
          </div>
        )}

        {/* ───────────────────────────────────────
            9d — Peptide Selection
            ─────────────────────────────────────── */}
        {dStep === 4 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(3)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Choose your peptide
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 20 }}>
                {isInj ? `Based on your BMI of ${bmi} and prior experience` : `Available for ${ROUTE_LABELS[effectiveRoute] || effectiveRoute}`}
              </p>

              {isInj && <DoseMeter />}

              {isInj && (
                <div className="tf-fi" style={{ padding: "10px 14px", borderRadius: 12, backgroundColor: "hsl(0 0% 97%)", border: "1px solid hsl(0 0% 90%)", marginBottom: 20 }}>
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", lineHeight: "18px", margin: 0 }}>
                    The dosing meter above applies to MOTS-c only. Other peptides use protocol-based dosing independent of BMI.
                  </p>
                </div>
              )}

              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {availPeptides.map((id) => {
                  const p = PEPTIDES[id];
                  const isRec = isInj && recPeptide === id;
                  return (
                    <li key={id}>
                      <label
                        onClick={() => setPeptide(id)}
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${peptide === id ? PR : "hsl(0 0% 90%)"}`, backgroundColor: peptide === id ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s", position: "relative" }}
                      >
                        {isInj && (
                          <span style={{ position: "absolute", top: -9, right: 12, fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: AC, padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>NEW Microdosing</span>
                        )}
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${peptide === id ? PR : "hsl(0 0% 85%)"}`, backgroundColor: peptide === id ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {peptide === id && <Chk c="#fff" />}
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{pepName(id, effectiveRoute)}</span>
                            {isRec && (
                              <span style={{ fontSize: 11, fontWeight: 600, color: PR, backgroundColor: `${PR}15`, padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>
                                Recommended
                              </span>
                            )}
                          </div>
                          <div style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", marginTop: 2 }}>{pepCls(id, effectiveRoute)}</div>
                          <div style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 1 }}>{pepDesc(id, effectiveRoute)}</div>
                          <div style={{ fontFamily: FB, fontSize: 11, fontStyle: "italic", color: "hsl(0 0% 60%)", marginTop: 4 }}>{pepNote(id, effectiveRoute)}</div>
                          <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: PR, marginTop: 6 }}>
                            {isInj ? (
                              <>From ${Math.round(p.cost / 2)}/mo<span style={{ fontSize: 11, fontWeight: 500 }}>*</span></>
                            ) : (
                              <>${p.cost}/mo</>
                            )}
                          </div>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>

              <p style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 55%)", marginTop: 20, lineHeight: "18px", marginBottom: isInj ? 4 : 24 }}>
                Your provider makes the final protocol decision based on your complete health history. You will choose your specific blend or formulation on the next screen.
              </p>
              {isInj && (
                <p style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 50%)", lineHeight: "15px", marginBottom: 24 }}>
                  *Microdose protocol — billed every 2 months
                </p>
              )}
            </main>
            <LF
              onClick={() => {
                if (isInj) fwd(5);
                else saveAndRedirect();
              }}
              disabled={!peptide}
              label={isInj ? "Continue" : "Continue to product selection"}
            />
          </div>
        )}

        {/* ───────────────────────────────────────
            9e — Dosing Protocol Selection (injection)
            ─────────────────────────────────────── */}
        {dStep === 5 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(4)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Choose your dosing protocol
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                {PEPTIDES[peptide]?.name || "Your peptide"} — {PEPTIDES[peptide]?.cost ? `$${PEPTIDES[peptide].cost} per vial` : ""}
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {/* Microdose option */}
                <li>
                  <label
                    onClick={() => setMicroDose(true)}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${microDose === true ? PR : "hsl(0 0% 90%)"}`, backgroundColor: microDose === true ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s", position: "relative" }}
                  >
                    <span style={{ position: "absolute", top: -9, right: 12, fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: AC, padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>NEW — Trending</span>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${microDose === true ? PR : "hsl(0 0% 85%)"}`, backgroundColor: microDose === true ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {microDose === true && <Chk c="#fff" />}
                    </span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 600, color: "hsl(0 0% 8.5%)", display: "block", lineHeight: 1.3 }}>Microdose Protocol</span>
                      <span style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", display: "block", marginTop: 4, lineHeight: "18px" }}>
                        Lower frequency dosing — one vial lasts 2 months. Ideal for metabolic optimization and longevity-focused protocols.
                      </span>
                      <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: PR, marginTop: 8 }}>
                        ${PEPTIDES[peptide] ? Math.round(PEPTIDES[peptide].cost / 2) : "—"}/mo<span style={{ fontSize: 11, fontWeight: 500 }}>*</span>
                        <span style={{ fontSize: 12, fontWeight: 400, color: "hsl(0 0% 50%)", marginLeft: 8 }}>billed every 2 months</span>
                      </div>
                    </div>
                  </label>
                </li>

                {/* Standard option */}
                <li>
                  <label
                    onClick={() => setMicroDose(false)}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${microDose === false ? PR : "hsl(0 0% 90%)"}`, backgroundColor: microDose === false ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s" }}
                  >
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${microDose === false ? PR : "hsl(0 0% 85%)"}`, backgroundColor: microDose === false ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {microDose === false && <Chk c="#fff" />}
                    </span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 600, color: "hsl(0 0% 8.5%)", display: "block", lineHeight: 1.3 }}>Standard Protocol</span>
                      <span style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", display: "block", marginTop: 4, lineHeight: "18px" }}>
                        Full dosing frequency — one vial per month. Standard clinical dosing schedule.
                      </span>
                      <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: PR, marginTop: 8 }}>
                        ${PEPTIDES[peptide]?.cost || "—"}/mo
                      </div>
                    </div>
                  </label>
                </li>
              </ul>

              <p style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 55%)", marginTop: 20, lineHeight: "18px", marginBottom: 4 }}>
                Your provider will confirm the appropriate protocol based on your complete health profile.
              </p>
              {microDose === true && (
                <p style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 50%)", lineHeight: "15px", marginBottom: 24 }}>
                  *Billed every 2 months
                </p>
              )}
            </main>
            <LF onClick={saveAndRedirect} disabled={microDose === null} label="Continue to product selection" />
          </div>
        )}

      </div>
    </div>
  );
}