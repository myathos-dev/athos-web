import { useState, useCallback, useEffect } from "react";

const PR = "rgb(36, 92, 58)";
const BRAND = "Athos";
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";

const PEPTIDES = {
  "bpc-157": {
    name: "BPC-157",
    cls: "Gastric pentadecapeptide",
    desc: "Most established, widest evidence base",
    routes: ["injection", "oral", "nasal"],
    cost: 170,
  },
  "tb-500": {
    name: "TB-500",
    cls: "Synthetic Thymosin Beta-4",
    desc: "Systemic tissue repair, weight-adjusted dosing",
    routes: ["injection"],
    cost: 150,
  },
  wolverine: {
    name: "Wolverine Blend",
    cls: "BPC-157 + TB-500 synergistic stack",
    desc: "Local + systemic healing, best combined value",
    routes: ["injection", "oral"],
    cost: 180,
  },
  bodhi: {
    name: "Bodhi Blend",
    cls: "Semax / Selank / BPC-157 / KPV",
    desc: "Neuro-recovery + anti-inflammatory quad stack",
    routes: ["injection"],
    cost: 190,
  },
};

const PT = [
  { label: "Maintenance", color: "#86EFAC", desc: "Ongoing wellness" },
  { label: "Standard", color: "#4ADE80", desc: "Moderate recovery" },
  { label: "Accelerated", color: "#16A34A", desc: "Active injury" },
  { label: "Intensive", color: "#166534", desc: "Acute / post-surgical" },
];

const rec = (route, prior) => {
  if (route !== "injection") return "bpc-157";
  if (prior === "bpc-157") return "wolverine";
  if (prior === "tb-500") return "wolverine";
  if (prior === "combo") return "bpc-157";
  return "bpc-157";
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
const CapSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <rect x="14" y="16" width="20" height="16" rx="8" fill={PR} opacity=".15" stroke={PR} strokeWidth="1.5" />
    <line x1="24" y1="16" x2="24" y2="32" stroke={PR} strokeWidth="1.5" />
    <rect x="24" y="16" width="10" height="16" rx="8" fill={PR} opacity=".3" />
  </svg>
);
const NasSVG = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
    <rect x="20" y="8" width="8" height="28" rx="4" fill={PR} opacity=".12" stroke={PR} strokeWidth="1.5" />
    <rect x="18" y="6" width="12" height="6" rx="3" fill={PR} opacity=".25" stroke={PR} strokeWidth="1.5" />
    <circle cx="24" cy="10" r="1.5" fill={PR} opacity=".5" />
    <path d="M22 36L24 42L26 36" fill={PR} opacity=".4" />
    <line x1="20" y1="18" x2="28" y2="18" stroke={PR} opacity=".2" strokeWidth="1" />
    <line x1="20" y1="22" x2="28" y2="22" stroke={PR} opacity=".2" strokeWidth="1" />
    <line x1="20" y1="26" x2="28" y2="26" stroke={PR} opacity=".2" strokeWidth="1" />
  </svg>
);

const ROUTE_META = {
  injection: { icon: <SyrSVG />, label: "Injection", sub: "SubQ, 1–2x daily" },
  oral:      { icon: <CapSVG />, label: "Oral",      sub: "Daily capsule" },
  nasal:     { icon: <NasSVG />, label: "Nasal",     sub: "Daily spray" },
};

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

export default function TeleformRecoveryProduct() {
  const [cached] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; }
  });

  useEffect(() => {
    if (!cached.firstName || !cached.recoveryGoal) window.location.href = "/getpeptides/recovery/profile";
  }, []);

  const recoveryIntensity = cached.recoveryIntensity || 1;
  const protocolTier = PT[Math.min(recoveryIntensity, PT.length - 1)];
  const meterW = Math.max(0, Math.min(100, ((recoveryIntensity) / (PT.length - 1)) * 100));

  const [step, setStep] = useState(1);
  const [dStep, setDStep] = useState(1);
  const [anim, setAnim] = useState("idle");
  const [dir, setDir] = useState("forward");
  const [route, setRoute] = useState(null);
  const [prior, setPrior] = useState(null);
  const [peptide, setPeptide] = useState(null);

  const peptidesForRoute = (r) => Object.entries(PEPTIDES).filter(([, p]) => p.routes.includes(r)).map(([k]) => k);
  const availPeptides = route ? peptidesForRoute(route) : [];
  const recMed = rec(route, prior);
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
      d.effectiveRoute = route;
      d.priorPeptides = prior;
      d.peptide = peptide || (availPeptides.length === 1 ? availPeptides[0] : null);
      d.protocolTier = protocolTier.label;
      d.recommendedPeptide = recMed;
      d.monthlyCost = PEPTIDES[peptide]?.cost || null;
      sessionStorage.setItem("tf_intake", JSON.stringify(d));
    } catch (e) { console.error(e); }
    window.location.href = "/getpeptides/recovery/product-info";
  };

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

  const RouteCard = ({ id, icon, label, sub, badge, sel, onClick, disabled }) => (
    <div
      onClick={disabled ? undefined : onClick}
      style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "16px 6px", borderRadius: 12, border: `2px solid ${sel ? PR : "hsl(0 0% 90%)"}`, backgroundColor: sel ? "hsl(140 30% 94%)" : disabled ? "hsl(0 0% 96%)" : "hsl(0 0% 98%)", cursor: disabled ? "default" : "pointer", transition: "all .2s", textAlign: "center", position: "relative", opacity: disabled ? 0.55 : 1 }}
    >
      {badge && (
        <span style={{ position: "absolute", top: -9, fontSize: 10, fontWeight: 600, color: disabled ? "hsl(0 0% 50%)" : PR, backgroundColor: disabled ? "hsl(0 0% 94%)" : "hsl(140 30% 94%)", padding: "1px 7px", borderRadius: 9999, border: `1px solid ${disabled ? "hsl(0 0% 85%)" : PR + "30"}`, fontFamily: FB }}>{badge}</span>
      )}
      {icon}
      <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: sel ? PR : "hsl(0 0% 8.5%)", lineHeight: 1.2 }}>{label}</span>
      <span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 50%)" }}>{sub}</span>
    </div>
  );

  const ProtocolMeter = () => (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "flex", alignItems: "center" }}>
        Your Protocol Intensity
        <Tip text="Based on your recovery goals and injury profile. Your provider confirms the final protocol after reviewing your complete health history." />
      </div>
      <div style={{ position: "relative", width: "100%", height: 36, borderRadius: 9999, overflow: "hidden", display: "flex" }}>
        {PT.map((d, i) => <div key={i} style={{ flex: 1, backgroundColor: d.color }} />)}
        <div style={{ position: "absolute", left: `${meterW}%`, top: 0, transform: "translateX(-50%)", height: "100%", display: "flex", alignItems: "center", zIndex: 2 }}>
          <div style={{ padding: "3px 10px", borderRadius: 9999, backgroundColor: protocolTier.color, color: protocolTier.color === "#86EFAC" || protocolTier.color === "#4ADE80" ? "hsl(0 0% 15%)" : "#fff", fontFamily: FB, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.2)", border: "2px solid #fff" }}>
            {protocolTier.label}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        {PT.map((d, i) => (
          <div key={i} style={{ flex: 1, textAlign: i === 0 ? "left" : i === 3 ? "right" : "center" }}>
            <span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)" }}>{d.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ overflow: "hidden", position: "relative", fontFamily: FB, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}>
      <style>{CSS}</style>
      <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>

        {/* 9a — Route Selection */}
        {dStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { window.location.href = "/getpeptides/recovery/profile"; }} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                How would you prefer to take your peptide?
                <Tip text="Injectable peptides offer the highest bioavailability and fastest absorption. Oral capsules and nasal sprays are available for select peptides." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                Route determines which peptides are available
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <RouteCard
                  id="injection"
                  icon={ROUTE_META.injection.icon}
                  label="Injection"
                  sub="SubQ, 1–2x daily"
                  badge={`${peptidesForRoute("injection").length} peptides`}
                  sel={route === "injection"}
                  onClick={() => { setRoute("injection"); setPeptide(null); }}
                />
                <RouteCard
                  id="oral"
                  icon={ROUTE_META.oral.icon}
                  label="Oral"
                  sub="Daily capsule"
                  badge={`${peptidesForRoute("oral").length} peptides`}
                  sel={route === "oral"}
                  onClick={() => { setRoute("oral"); setPeptide(null); }}
                />
                <RouteCard
                  id="nasal"
                  icon={ROUTE_META.nasal.icon}
                  label="Nasal"
                  sub="Daily spray"
                  badge={`${peptidesForRoute("nasal").length} peptide`}
                  sel={route === "nasal"}
                  onClick={() => { setRoute("nasal"); setPeptide(null); }}
                />
              </div>
              {route && (
                <div className="tf-fi" style={{ marginTop: 16, padding: "10px 14px", borderRadius: 12, backgroundColor: "hsl(0 0% 97%)", border: "1px solid hsl(0 0% 90%)" }}>
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", lineHeight: "18px", margin: 0 }}>
                    {route === "injection" && "All peptides available via subcutaneous injection near the injury site for localized effect, or abdomen for systemic delivery."}
                    {route === "oral" && "BPC-157 and Wolverine Blend available as daily capsules. Ideal for GI-focused recovery and patients who prefer needle-free dosing."}
                    {route === "nasal" && "BPC-157 nasal spray. High bioavailability with simple daily dosing."}
                  </p>
                </div>
              )}
            </main>
            <LF
              onClick={() => fwd(3)}
              disabled={!route}
            />
          </div>
        )}

        {/* 9b — Placeholder (structural parity) */}
        {dStep === 2 && null}

        {/* 9c — Prior Recovery Peptide Experience */}
        {dStep === 3 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(1)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Have you used a recovery peptide before?
                <Tip text="Recovery peptides include BPC-157, TB-500 (Thymosin Beta-4), and combination protocols like the Wolverine Blend." />
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 28 }}>
                This helps us recommend the right starting protocol
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  ["none", "No, this is my first time"],
                  ["bpc-157", "Yes, BPC-157"],
                  ["tb-500", "Yes, TB-500 (Thymosin Beta-4)"],
                  ["combo", "Yes, BPC-157 + TB-500 combination"],
                  ["other", "Yes, another recovery peptide"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <label
                      onClick={() => {
                        setPrior(id);
                        /* Smart auto-set: lock peptide only when 1 option for route */
                        if (availPeptides.length === 1) setPeptide(availPeptides[0]);
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
                /* injection always → step 4 (multiple peptides)
                   non-injection with >1 peptide → step 4
                   non-injection with 1 peptide → skip to product info */
                if (availPeptides.length > 1) fwd(4);
                else saveAndRedirect();
              }}
              disabled={!prior}
              label={availPeptides.length > 1 ? "Continue" : "Continue to product details"}
            />
          </div>
        )}

        {/* 9d — Peptide Selection + Protocol Meter */}
        {dStep === 4 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(3)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Your recommended peptide
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 20 }}>
                Based on your recovery profile and prior experience
              </p>
              <ProtocolMeter />
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {availPeptides.map((id) => {
                  const p = PEPTIDES[id];
                  const isRec = recMed === id;
                  return (
                    <li key={id}>
                      <label
                        onClick={() => setPeptide(id)}
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${peptide === id ? PR : "hsl(0 0% 90%)"}`, backgroundColor: peptide === id ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s" }}
                      >
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${peptide === id ? PR : "hsl(0 0% 85%)"}`, backgroundColor: peptide === id ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {peptide === id && <Chk c="#fff" />}
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{p.name}</span>
                            {isRec && (
                              <span style={{ fontSize: 11, fontWeight: 600, color: PR, backgroundColor: `${PR}15`, padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>
                                Recommended
                              </span>
                            )}
                          </div>
                          <div style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", marginTop: 2 }}>{p.cls}</div>
                          <div style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 1 }}>{p.desc}</div>
                          <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: PR, marginTop: 6 }}>
                            ${p.cost}/mo
                          </div>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
              <p style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 55%)", marginTop: 20, lineHeight: "18px", marginBottom: 24 }}>
                Your provider confirms the final protocol and dosing after reviewing your complete health history.
              </p>
            </main>
            <LF onClick={saveAndRedirect} disabled={!peptide} label="Continue to product details" />
          </div>
        )}

      </div>
    </div>
  );
}