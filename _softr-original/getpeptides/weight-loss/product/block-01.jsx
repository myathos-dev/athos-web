import { useState, useCallback, useEffect } from "react";

const PR = "rgb(36, 92, 58)";
const BRAND = "Athos";
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";

const MEDS = {
  semaglutide: { name: "Semaglutide", cls: "GLP-1 agonist", desc: "Most established, widest options", routes: ["injection", "tablet", "lozenge", "capsule", "liquid"] },
  tirzepatide: { name: "Tirzepatide", cls: "Dual GIP/GLP-1 agonist", desc: "Strongest weight loss evidence", routes: ["injection", "tablet"] },
  retatrutide: { name: "Retatrutide", cls: "Triple agonist (GLP-1/GIP/GCG)", desc: "Newest, highest efficacy data", routes: ["injection"] },
};

const DT = [
  { max: 30, label: "Starter", color: "#86EFAC", range: "27–29.9" },
  { max: 35, label: "Standard", color: "#4ADE80", range: "30–34.9" },
  { max: 40, label: "Accelerated", color: "#16A34A", range: "35–39.9" },
  { max: 999, label: "Maximum", color: "#166534", range: "≥40" },
];

const ROUTE_LABELS = { injection: "Weekly injection", tablet: "Daily dissolving tablet", lozenge: "Sublingual lozenge", capsule: "Oral capsule", liquid: "Oral solution" };
const rec = (b, p) => { if (p === "semaglutide") return "tirzepatide"; if (p === "tirzepatide") return "retatrutide"; if (b >= 35) return "tirzepatide"; return "semaglutide"; };

const MICRO_START = { semaglutide: 45, tirzepatide: 70, retatrutide: 55 };
const STD_START = { semaglutide: 90, tirzepatide: 140, retatrutide: 110 };

const ADDON_PREVIEW = {
  semaglutide: ["B12", "B6", "NAD+", "Glycine"],
  tirzepatide: ["B12", "B6", "NAD+", "Glycine", "Niacinamide"],
  retatrutide: ["B12"],
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
const LozSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <path d="M24 10L38 24L24 38L10 24Z" fill={PR} opacity=".12" stroke={PR} strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="5" fill={PR} opacity=".2" />
  </svg>
);
const CapSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="24" rx="12" ry="7" fill={PR} opacity=".1" stroke={PR} strokeWidth="1.5" />
    <path d="M12 24v0c0 3.87 5.37 7 12 7s12-3.13 12-7" stroke={PR} strokeWidth="1.5" opacity=".3" />
    <path d="M12 24v0c0-3.87 5.37-7 12-7s12 3.13 12 7" stroke={PR} strokeWidth="1.5" />
    <line x1="24" y1="17" x2="24" y2="31" stroke={PR} strokeWidth="1.5" opacity=".25" />
  </svg>
);

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

/* ── Module-level shared UI ── */

const LH = ({ showBack, onBack, prog }) => (
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

const RouteCard = ({ icon, label, sub, badge, sel, onClick }) => (
  <div
    onClick={onClick}
    style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "16px 6px", borderRadius: 12, border: `2px solid ${sel ? PR : "hsl(0 0% 90%)"}`, backgroundColor: sel ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s", textAlign: "center", position: "relative" }}
  >
    <span style={{ position: "absolute", top: -9, fontSize: 10, fontWeight: 600, color: PR, backgroundColor: "hsl(140 30% 94%)", padding: "1px 7px", borderRadius: 9999, border: `1px solid ${PR}30`, fontFamily: FB }}>{badge}</span>
    {icon}
    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: sel ? PR : "hsl(0 0% 8.5%)", lineHeight: 1.2 }}>{label}</span>
    <span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 50%)" }}>{sub}</span>
  </div>
);

const DoseMeter = ({ bmi, doseTier }) => {
  const raw = ((Math.max(27, Math.min(45, bmi)) - 27) / 18) * 100;
  const meterVal = Math.max(8, Math.min(92, raw));
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "flex", alignItems: "center" }}>
        Your Dosing Tier
        <Tip text="Based on your BMI. Your provider confirms the final dosing plan after reviewing your health history." />
      </div>
      <div style={{ position: "relative", width: "100%", height: 36, borderRadius: 9999, overflow: "visible", display: "flex" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: 9999, overflow: "hidden", display: "flex" }}>
          {DT.map((d, i) => <div key={i} style={{ flex: 1, backgroundColor: d.color }} />)}
        </div>
        <div style={{ position: "absolute", left: `${meterVal}%`, top: 0, transform: "translateX(-50%)", height: "100%", display: "flex", alignItems: "center", zIndex: 2, transition: "left .4s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ padding: "3px 10px", borderRadius: 9999, backgroundColor: doseTier.color, color: doseTier.color === "#86EFAC" || doseTier.color === "#4ADE80" ? "hsl(0 0% 15%)" : "#fff", fontFamily: FB, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.2)", border: "2px solid #fff" }}>
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
};

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export default function TeleformWeightlossProduct() {
  const [cached] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; }
  });
  useEffect(() => {
    if (!cached.firstName || !cached.bmi) window.location.href = "/getpeptides/weight-loss/profile";
  }, []);

  const bmi = cached.bmi || 30;
  const doseTier = DT.find((t) => bmi < t.max) || DT[3];

  const [step, setStep] = useState(1);
  const [dStep, setDStep] = useState(1);
  const [anim, setAnim] = useState("idle");
  const [dir, setDir] = useState("forward");
  const [route, setRoute] = useState(null);
  const [oralType, setOralType] = useState(null);
  const [prior, setPrior] = useState(null);
  const [med, setMed] = useState(null);
  const [microdose, setMicrodose] = useState(null);

  const effectiveRoute = route === "oral" ? (oralType || "tablet") : route;
  const availMeds = effectiveRoute
    ? Object.entries(MEDS).filter(([, m]) => m.routes.includes(effectiveRoute)).map(([k]) => k)
    : [];
  const recMed = rec(bmi, prior);
  const totalSteps = 13;
  const globalStep = 9;
  const prog = Math.round((globalStep / totalSteps) * 100);

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

  const saveAndRedirect = () => {
    try {
      const d = JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
      d.route = route;
      d.effectiveRoute = effectiveRoute;
      d.priorGLP1 = prior;
      d.medication = med;
      d.dosingTier = doseTier.label;
      d.recommendedMed = recMed;
      if (oralType) d.oralType = oralType;
      d.microdose = microdose === true;
      sessionStorage.setItem("tf_intake", JSON.stringify(d));
    } catch (e) { console.error(e); }
    window.location.href = "/getpeptides/weight-loss/product-info";
  };

  return (
    <div style={{ overflow: "hidden", position: "relative", fontFamily: FB, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}>
      <style>{CSS}</style>
      <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>

        {/* 9a — Route Selection */}
        {dStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { window.location.href = "/getpeptides/weight-loss/profile"; }} prog={prog} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                How would you prefer to take your medication?
                <Tip text="Each delivery method is equally effective at the prescribed dose. Choose based on comfort and lifestyle." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                Each method is equally effective
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <RouteCard icon={<SyrSVG />} label="Injection" sub="Weekly" badge="3 meds" sel={route === "injection"} onClick={() => { setRoute("injection"); setOralType(null); setMed(null); }} />
                <RouteCard icon={<PilSVG />} label="Oral" sub="Tablet, lozenge, capsule" badge="2 meds" sel={route === "oral"} onClick={() => { setRoute("oral"); setOralType(null); setMed(null); }} />
              </div>
              {route && (
                <div className="tf-fi" style={{ marginTop: 16, padding: "10px 14px", borderRadius: 12, backgroundColor: "hsl(0 0% 97%)", border: "1px solid hsl(0 0% 90%)" }}>
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", lineHeight: "18px", margin: 0 }}>
                    {route === "injection" && "All 3 medications available. Weekly dosing with a small subcutaneous needle."}
                    {route === "oral" && "Dissolving tablets, sublingual lozenges, and capsules available. Semaglutide and Tirzepatide options."}
                  </p>
                </div>
              )}
            </main>
            <LF onClick={() => { if (route === "oral") fwd(2); else fwd(3); }} disabled={!route} />
          </div>
        )}

        {/* 9b — Oral Sub-type */}
        {dStep === 2 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(1)} prog={prog} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                What type of oral medication?
                <Tip text="Dissolving tablets (RDT/ODT) dissolve on the tongue. Sublingual lozenges dissolve under the tongue. Capsules are swallowed with water." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                Pick the format that fits your routine
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <RouteCard icon={<PilSVG />} label="Dissolving Tablet" sub="On tongue" badge="2 meds" sel={oralType === "tablet"} onClick={() => { setOralType("tablet"); setMed(null); }} />
                <RouteCard icon={<LozSVG />} label="Lozenge" sub="Under tongue" badge="Semaglutide" sel={oralType === "lozenge"} onClick={() => { setOralType("lozenge"); setMed(null); }} />
                <RouteCard icon={<CapSVG />} label="Capsule" sub="Swallowed" badge="+ Metformin" sel={oralType === "capsule"} onClick={() => { setOralType("capsule"); setMed(null); }} />
              </div>
              {oralType && (
                <div className="tf-fi" style={{ marginTop: 16, padding: "10px 14px", borderRadius: 12, backgroundColor: "hsl(0 0% 97%)", border: "1px solid hsl(0 0% 90%)" }}>
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", lineHeight: "18px", margin: 0 }}>
                    {oralType === "tablet" && "Semaglutide ODT and Tirzepatide RDT available in multiple strengths. Some include anti-nausea support."}
                    {oralType === "lozenge" && "Semaglutide sublingual lozenge. Dissolves under the tongue for direct mucosal absorption."}
                    {oralType === "capsule" && "Semaglutide + Metformin combination capsules. Six strength options from 3mg to 50mg."}
                  </p>
                </div>
              )}
            </main>
            <LF
              onClick={() => {
                if (oralType === "lozenge") { setMed("semaglutide"); fwd(4); }
                else if (oralType === "capsule") { setMed("semaglutide"); fwd(4); }
                else fwd(3);
              }}
              disabled={!oralType}
            />
          </div>
        )}

        {/* 9c — Prior GLP-1 Experience */}
        {dStep === 3 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => route === "oral" ? bwd(2) : bwd(1)} prog={prog} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Have you taken a GLP-1 medication before?
                <Tip text="GLP-1 receptor agonists include semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro, Zepbound), and liraglutide (Saxenda)." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                This helps us recommend the right starting point
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  ["none", "No, this is my first time"],
                  ["semaglutide", "Yes, Semaglutide (Ozempic / Wegovy)"],
                  ["tirzepatide", "Yes, Tirzepatide (Mounjaro / Zepbound)"],
                  ["other", "Yes, another medication"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <label
                      onClick={() => { setPrior(id); setMed(null); }}
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
            <LF onClick={() => fwd(4)} disabled={!prior} />
          </div>
        )}

        {/* 9d — Medication Selection + Dosing Meter */}
        {dStep === 4 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => {
              if (route === "oral" && (oralType === "lozenge" || oralType === "capsule")) bwd(2);
              else bwd(3);
            }} prog={prog} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Your recommended medication
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 20 }}>
                Based on your BMI of {bmi}
              </p>
              <DoseMeter bmi={bmi} doseTier={doseTier} />
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {availMeds.map((id) => {
                  const m = MEDS[id];
                  const isRec = recMed === id;
                  const addons = effectiveRoute === "injection" ? ADDON_PREVIEW[id] : null;
                  return (
                    <li key={id}>
                      <label
                        onClick={() => setMed(id)}
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${med === id ? PR : "hsl(0 0% 90%)"}`, backgroundColor: med === id ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s", position: "relative" }}
                      >
                        {effectiveRoute === "injection" && (
                          <span style={{ position: "absolute", top: -9, right: 12, fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: "#37B8D3", padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>NEW Microdosing</span>
                        )}
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${med === id ? PR : "hsl(0 0% 85%)"}`, backgroundColor: med === id ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {med === id && <Chk c="#fff" />}
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{m.name}</span>
                            {isRec && (
                              <span style={{ fontSize: 11, fontWeight: 600, color: PR, backgroundColor: `${PR}15`, padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>
                                Recommended
                              </span>
                            )}
                            {addons && (
                              <>
                                <span style={{ fontSize: 10, fontWeight: 600, color: "hsl(0 0% 45%)", backgroundColor: "hsl(0 0% 93%)", padding: "2px 7px", borderRadius: 9999, fontFamily: FB }}>
                                  {addons.length} add-ons
                                </span>
                                <Tip text={`Compounded add-ons included at no extra cost: ${addons.join(" · ")}`} />
                              </>
                            )}
                          </div>
                          <div style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", marginTop: 2 }}>{m.cls}</div>
                          <div style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 1 }}>{m.desc}</div>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
              <p style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 55%)", marginTop: 20, lineHeight: "18px", marginBottom: 24 }}>
                Your provider makes the final dosing decision based on your complete health history.
              </p>
            </main>
            <LF onClick={() => { if (effectiveRoute === "injection") fwd(5); else saveAndRedirect(); }} disabled={!med} label="Continue" />
          </div>
        )}

        {/* 9e — Microdosing Preference (injection only) */}
        {dStep === 5 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(4)} prog={prog} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                How would you like to dose your {MEDS[med]?.name || "medication"}?
                <Tip text="Microdosing uses lower weekly doses for metabolic benefits with fewer side effects. Standard protocol follows the full FDA titration schedule." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                Choose your dosing approach
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <label
                    onClick={() => setMicrodose(false)}
                    style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${microdose === false ? PR : "hsl(0 0% 90%)"}`, backgroundColor: microdose === false ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s" }}
                  >
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${microdose === false ? PR : "hsl(0 0% 85%)"}`, backgroundColor: microdose === false ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                      {microdose === false && <Chk c="#fff" />}
                    </span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>Standard Protocol</span>
                      <div style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", marginTop: 2 }}>Full titration from starter to maintenance dose</div>
                      <div style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 1 }}>Widest product and add-on selection</div>
                      <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: PR, marginTop: 6 }}>Starting at ${STD_START[med] || 90}/mo</div>
                    </div>
                  </label>
                </li>
                <li>
                  <label
                    onClick={() => setMicrodose(true)}
                    style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${microdose === true ? PR : "hsl(0 0% 90%)"}`, backgroundColor: microdose === true ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s", position: "relative" }}
                  >
                    <span style={{ position: "absolute", top: -9, right: 12, fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: "#37B8D3", padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>NEW — Trending</span>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${microdose === true ? PR : "hsl(0 0% 85%)"}`, backgroundColor: microdose === true ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                      {microdose === true && <Chk c="#fff" />}
                    </span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>Microdosing</span>
                      <div style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", marginTop: 2 }}>
                        {med === "semaglutide" && "Low-dose therapy at 0.25–0.5 mg/week"}
                        {med === "tirzepatide" && "Low-dose therapy at 2.5–5 mg/week"}
                        {med === "retatrutide" && "Low-dose therapy at 2 mg/week"}
                      </div>
                      <div style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 1 }}>Metabolic benefits with fewer side effects</div>
                      <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: PR, marginTop: 6 }}>Starting at ${MICRO_START[med] || 90}/mo</div>
                    </div>
                  </label>
                </li>
              </ul>
              {microdose === true && (
                <div className="tf-fi" style={{ marginTop: 16, padding: "10px 14px", borderRadius: 12, backgroundColor: "hsl(140 30% 97%)", border: `1px solid ${PR}25` }}>
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", lineHeight: "18px", margin: 0 }}>
                    Microdosing GLP-1 medications is gaining traction for patients who want metabolic optimization without full-dose titration. Your provider will confirm the right dose for your goals.
                  </p>
                </div>
              )}
            </main>
            <LF onClick={saveAndRedirect} disabled={microdose === null} label="Continue to product selection" />
          </div>
        )}

      </div>
    </div>
  );
}