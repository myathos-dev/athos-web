import { useState, useCallback, useEffect, useMemo, useRef } from "react";

const PR = "rgb(36, 92, 58)";
const BRAND = "Athos";
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";

const MONTHLY = { "bpc-157": 170, "tb-500": 150, wolverine: 180, bodhi: 190 };
const MED_NAMES = { "bpc-157": "BPC-157", "tb-500": "TB-500", wolverine: "Wolverine Blend", bodhi: "Bodhi Blend" };
const ORBIT_SLUGS = { "bpc-157": "bpc-157", "tb-500": "tb-500", wolverine: "wolverine", bodhi: "bpc-157" };

const RL = {
  injection: "Subcutaneous injection",
  oral: "Oral capsule",
  nasal: "Nasal spray",
};

/* ── Dose Tiers ── */
const DT = [
  { max: 8, label: "Starter", color: "#86EFAC", range: "5mg" },
  { max: 12, label: "Standard", color: "#4ADE80", range: "10mg" },
  { max: 14, label: "Full Protocol", color: "#16A34A", range: "10–15mg" },
  { max: 999, label: "Extended", color: "#166534", range: "15mg" },
];
const DR = {
  "bpc-157": { injection: [5, 15] },
};

/* ── Protocols ── */
const PROTO = {
  "bpc-157": {
    injection: [
      { p: "Starter", d: "200–250 mcg", f: "1–2x daily SubQ", t: "Wk 1–2" },
      { p: "Standard", d: "250–500 mcg", f: "1–2x daily SubQ", t: "Wk 3–8" },
      { p: "Acute Injury", d: "500–1,000 mcg", f: "2–3x daily SubQ", t: "Up to 12 wk" },
    ],
    oral: [
      { p: "Standard", d: "500 mcg", f: "Once daily", t: "Ongoing" },
      { p: "Acute", d: "500 mcg", f: "Twice daily", t: "Up to 8 wk" },
    ],
    nasal: [
      { p: "Standard", d: "1 mg (2 sprays)", f: "Once daily", t: "Ongoing" },
      { p: "Acute", d: "1 mg (2 sprays)", f: "Twice daily", t: "Up to 8 wk" },
    ],
  },
  "tb-500": {
    injection: [
      { p: "Loading", d: "4–6 mg/week", f: "2x/week SubQ", t: "Wk 1–4" },
      { p: "Maintenance", d: "2–2.5 mg/week", f: "1–2x/week SubQ", t: "Wk 5–8+" },
    ],
  },
  wolverine: {
    injection: [
      { p: "Standard", d: "500 mcg BPC + 750 mcg TB", f: "Once daily SubQ", t: "Wk 1–8" },
      { p: "Loading (Acute)", d: "1 mg BPC + 1 mg TB", f: "Once daily SubQ", t: "Wk 1–4, then taper" },
    ],
    oral: [
      { p: "Standard", d: "500/500 mcg BPC+TB", f: "Once daily", t: "Ongoing" },
      { p: "Acute", d: "500/500 mcg BPC+TB", f: "Twice daily", t: "Up to 8 wk" },
    ],
  },
  bodhi: {
    injection: [
      { p: "Loading", d: "0.3 ml daily", f: "Once daily SubQ", t: "Wk 1–4" },
      { p: "Maintenance", d: "0.2 ml daily", f: "Once daily SubQ", t: "Wk 5–8+" },
    ],
  },
};
const getProto = (pep, rt) => {
  if (PROTO[pep]?.[rt]) return PROTO[pep][rt];
  if (PROTO[pep]?.injection) return PROTO[pep].injection;
  return PROTO["bpc-157"].injection;
};

/* ── Cycle info per peptide ── */
const CYCLE = {
  "bpc-157": "Cycle: 4–8 weeks on, 2–4 weeks off. Acute injuries: up to 12 weeks continuous. No tapering required.",
  "tb-500": "Cycle: 4–8 weeks, followed by 30-day washout. Max continuous use 90 days. Weight-adjusted dosing — heavier patients require proportionally higher mg.",
  wolverine: "Max continuous use: 90 days followed by 30-day washout. Reconstitute with 3.0 ml bacteriostatic water for accurate draw volumes. Rotate injection sites daily.",
  bodhi: "Cycle: 4–8 weeks on, 2–4 weeks off. Multi-peptide stack — Semax and Selank support neuro-recovery while BPC-157 and KPV address systemic inflammation.",
};

const INJ_NOTE = "Inject near injury site when possible for localized effect.";

/* ── Products (from CSV) ── */
const mkP = (pep, rt, sku, conc, vol, mg, note) => ({ pep, rt, sku, conc, vol, mg, note });
const PRODUCTS = [
  /* BPC-157 — injection (5 of 8, curated range) */
  mkP("bpc-157", "injection", "BPC157-5mg_1ml-INJ",   "5mg/mL",   "1ml",  5,  "Compact vial — 11 doses at 450mcg"),
  mkP("bpc-157", "injection", "BPC157-10mg_5ml-INJ",   "2mg/mL",   "5ml",  10, "Standard — 22 doses at 450mcg"),
  mkP("bpc-157", "injection", "BPC157-10mg_2ml-INJ",   "5mg/mL",   "2ml",  10, "Concentrated — 22 doses at 450mcg"),
  mkP("bpc-157", "injection", "BPC157-15mg_3ml-INJ",   "5mg/mL",   "3ml",  15, "High-dose — 30 doses at 500mcg"),
  mkP("bpc-157", "injection", "BPC157-15mg_5ml-INJ",   "3mg/mL",   "5ml",  15, "Extended supply — 30 doses at 500mcg"),
  /* BPC-157 — oral */
  mkP("bpc-157", "oral",      "BPC157-500mcg-ORL-HT",  "500mcg",   "44 caps", 22, "500mcg capsule — 44 count"),
  /* BPC-157 — nasal */
  mkP("bpc-157", "nasal",     "BPC157-37.5mg_15ml-NAS","2.5mg/mL", "15ml", 37.5, "Nasal spray — high bioavailability"),
  /* TB-500 — single injectable */
  mkP("tb-500",  "injection", "TB500-10mg_5ml-INJ",    "2mg/mL",   "5ml",  10, "6–7 weeks at 750mcg 2x/week"),
  /* Wolverine — injection + oral */
  mkP("wolverine","injection","VALKYR-BPC10_TB10-INJ",  "2/2 mg/mL","5ml",  20, "10mg BPC-157 + 10mg TB-500 per vial"),
  mkP("wolverine","oral",     "BPC_TB4-500/500-ORL",    "500/500mcg","22 caps",22,"BPC+TB-4 capsule — 22 count"),
  /* Bodhi — single injectable */
  mkP("bodhi",   "injection", "KPV-5mg_5ml-BODHI",     "1/1/2/2 mg/mL","5ml",30,"Semax + Selank + BPC-157 + KPV quad stack"),
];

/* ── Goal labels ── */
const GOAL_MAP = { "tissue-repair": "Tissue repair", "injury-recovery": "Injury recovery", "gi-support": "GI support", "post-surgical": "Post-surgical healing", inflammation: "Inflammation reduction", recovery: "Recovery and repair" };
const goalLabel = c => (c.subType && GOAL_MAP[c.subType]) || "Recovery and repair";

/* ── Orbit ── */
const ORBIT_BASE = "https://onboard.myorbithealth.com/form/athos-wellness";
function buildNotes(d) {
  const l = d.selectedProduct?.label || "Unknown";
  const pr = d.priorPeptides === "none" ? "No prior peptide use" : `Prior: ${d.priorPeptides}`;
  return `Patient requests: ${l}\nOther info: ${pr}, BMI ${d.bmi || "?"}, Goal: ${goalLabel(d)}`;
}
function buildScript(st, notes) {
  const s = st.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  const n = notes.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
  return `<script>(function(){function tp(){if(typeof answers==='undefined'||typeof showStep==='undefined'||typeof STEPS==='undefined'){setTimeout(tp,200);return}var ni=STEPS.findIndex(function(s){return s.id.indexOf('note')!==-1});var nid=STEPS[ni]?STEPS[ni].id:'patient-notes';answers['state']='${s}';answers[nid]='${n}';var _o=showStep;window.showStep=function(n){_o(n);if(n===ni){setTimeout(function(){var ta=document.querySelector('.step.active textarea');if(ta){ta.value=answers[nid];ta.dispatchEvent(new Event('input',{bubbles:true}))}},300)}};showStep(3)}tp()})()\x3c/script>`;
}

function OrbitIntake({ med, sd }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !sd) return;
    const slug = ORBIT_SLUGS[med] || med;
    const url = `${ORBIT_BASE}/${slug}`;
    const sc = buildScript(sd.state || "", buildNotes(sd));
    fetch(url)
      .then(r => r.text())
      .then(html => {
        let m = html;
        const bt = `<base href="${url}">`;
        m = m.includes("<head>") ? m.replace("<head>", "<head>" + bt) : bt + m;
        m = m.includes("</body>") ? m.replace("</body>", sc + "\n</body>") : m + sc;
        const f = document.createElement("iframe");
        f.style.cssText = "width:100%;min-height:100vh;border:none;display:block;";
        f.srcdoc = m;
        ref.current.innerHTML = "";
        ref.current.appendChild(f);
      })
      .catch(err => {
        if (ref.current)
          ref.current.innerHTML = `<div style="text-align:center;padding:40px;font-family:system-ui"><p style="font-size:16px;font-weight:600;color:#333">Unable to load intake form</p><p style="font-size:14px;color:#888;margin:8px 0 20px">${err.message}</p><a href="${url}" target="_blank" style="color:${PR}">Open in new tab →</a></div>`;
      });
  }, [med, sd]);
  return (
    <div ref={ref} style={{ width: "100%", minHeight: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, fontFamily: FB, gap: 12 }}>
        <div style={{ width: 32, height: 32, border: "3px solid hsl(0 0% 90%)", borderTopColor: PR, borderRadius: "50%", animation: "tfSp .8s linear infinite" }} />
        <p style={{ fontSize: 14, color: "hsl(0 0% 50%)" }}>Loading health intake…</p>
        <style>{`@keyframes tfSp{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  );
}

/* ── CSS ── */
const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
@keyframes tfSIR{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}@keyframes tfSOL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}@keyframes tfSIL{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}@keyframes tfSOR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}.tf-ef{animation:tfSIR .4s cubic-bezier(.16,1,.3,1) forwards}.tf-xf{animation:tfSOL .3s cubic-bezier(.7,0,.84,0) forwards}.tf-eb{animation:tfSIL .4s cubic-bezier(.16,1,.3,1) forwards}.tf-xb{animation:tfSOR .3s cubic-bezier(.7,0,.84,0) forwards}.tf-idle{opacity:1;transform:translateX(0)}@keyframes tfFI{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.tf-fi{animation:tfFI .4s cubic-bezier(.16,1,.3,1) forwards}@keyframes tfFtI{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.tf-fta{animation:tfFtI .35s cubic-bezier(.16,1,.3,1) forwards}`;

/* ── Icons ── */
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

const Tip = ({ text }) => {
  const [s, setS] = useState(false);
  return (
    <span
      style={{ position: "relative", display: "inline-flex", marginLeft: 6, cursor: "pointer", verticalAlign: "middle" }}
      onMouseEnter={() => setS(true)}
      onMouseLeave={() => setS(false)}
      onClick={e => { e.stopPropagation(); setS(!s); }}
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
        <div style={{ width: "77%", height: "100%", borderRadius: 9999, backgroundColor: PR, transition: "width .4s ease" }} />
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

const SR = ({ l, v }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid hsl(0 0% 93%)" }}>
    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 45%)" }}>{l}</span>
    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{v}</span>
  </div>
);

/* ── Dose Meter (only for multi-option peptide+route combos) ── */
const DoseMeter = ({ selMg, pep, rt }) => {
  const range = DR[pep]?.[rt];
  if (!range || range[0] === range[1]) return null;

  const tiers = DT;
  let meterVal, meterTier;
  if (selMg !== null && range[1] > range[0]) {
    const raw = ((selMg - range[0]) / (range[1] - range[0])) * 100;
    meterVal = Math.max(8, Math.min(92, raw));
    meterTier = raw < 25 ? tiers[0] : raw < 50 ? tiers[1] : raw < 75 ? tiers[2] : tiers[3];
  } else {
    meterVal = 8;
    meterTier = tiers[0];
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "flex", alignItems: "center" }}>
        Selected Dosing Intensity
        <Tip text="Reflects the strength of your selected product relative to the full dose range for this medication and route." />
      </div>
      <div style={{ position: "relative", width: "100%", height: 36, borderRadius: 9999, overflow: "visible", display: "flex" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: 9999, overflow: "hidden", display: "flex" }}>
          {tiers.map((d, i) => <div key={i} style={{ flex: 1, backgroundColor: d.color }} />)}
        </div>
        <div style={{ position: "absolute", left: `${meterVal}%`, top: 0, transform: "translateX(-50%)", height: "100%", display: "flex", alignItems: "center", zIndex: 2, transition: "left .4s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ padding: "3px 10px", borderRadius: 9999, backgroundColor: meterTier.color, color: meterTier.color === "#86EFAC" || meterTier.color === "#4ADE80" ? "hsl(0 0% 15%)" : "#fff", fontFamily: FB, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.2)", border: "2px solid #fff" }}>
            {meterTier.label}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        {tiers.map((d, i) => (
          <div key={i} style={{ flex: 1, textAlign: i === 0 ? "left" : i === 3 ? "right" : "center" }}>
            <span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)" }}>{d.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Protocol Card ── */
const ProtoCard = ({ proto, route }) => (
  <div style={{ marginBottom: 20, borderRadius: 12, border: "1px solid hsl(0 0% 90%)", overflow: "hidden" }}>
    <div style={{ padding: "12px 16px", backgroundColor: `${PR}08`, borderBottom: "1px solid hsl(0 0% 90%)" }}>
      <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 20%)" }}>
        Dosing Protocol — {RL[route] || route}
      </span>
    </div>
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FB, fontSize: 13 }}>
      <thead>
        <tr style={{ backgroundColor: "hsl(0 0% 97%)" }}>
          {["Phase", "Dose", "Frequency", "Duration"].map(h => (
            <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontWeight: 500, color: "hsl(0 0% 45%)", borderBottom: "1px solid hsl(0 0% 93%)" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {proto.map((r, i) => (
          <tr key={i}>
            <td style={{ padding: "10px 12px", fontWeight: 600, color: PR, borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.p}</td>
            <td style={{ padding: "10px 12px", color: "hsl(0 0% 20%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.d}</td>
            <td style={{ padding: "10px 12px", color: "hsl(0 0% 35%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.f}</td>
            <td style={{ padding: "10px 12px", color: "hsl(0 0% 35%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.t}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{ padding: "10px 12px", backgroundColor: "hsl(0 0% 98%)", borderTop: "1px solid hsl(0 0% 93%)" }}>
      <p style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 50%)", lineHeight: "16px", margin: 0 }}>
        {route === "injection" ? INJ_NOTE + " Your provider adjusts based on clinical response." : "Your provider adjusts based on clinical response."}
      </p>
    </div>
  </div>
);

/* ── Main Component ── */
export default function RecoveryProductInfo() {
  const [cached] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; }
  });

  useEffect(() => {
    if (!cached.peptide || !cached.effectiveRoute) window.location.href = "/getpeptides/recovery/product";
  }, []);

  const bmi = cached.bmi || 30;
  const pep = cached.peptide || "bpc-157";
  const effRt = cached.effectiveRoute || "injection";
  const isFirst = cached.priorPeptides === "none";
  const moPrice = MONTHLY[pep] || 170;

  const [step, setStep] = useState(1);
  const [dStep, setDStep] = useState(1);
  const [anim, setAnim] = useState("idle");
  const [dir, setDir] = useState("forward");
  const [selSku, setSelSku] = useState(null);
  const [showOrbit, setShowOrbit] = useState(false);

  const items = useMemo(
    () => PRODUCTS.filter(p => p.pep === pep && p.rt === effRt).sort((a, b) => a.mg - b.mg),
    [pep, effRt]
  );

  const isSingle = items.length === 1;
  const sel = useMemo(() => items.find(x => x.sku === selSku) || null, [items, selSku]);
  const showMeter = !isSingle && !!DR[pep]?.[effRt];

  const recSku = useMemo(() => {
    if (!items.length) return null;
    if (isSingle) return items[0].sku;
    if (isFirst) return items[0].sku;
    return items[Math.floor(items.length / 2)]?.sku;
  }, [items, isFirst, isSingle]);

  /* Auto-select single-SKU */
  useEffect(() => {
    if (isSingle && !selSku) setSelSku(items[0].sku);
  }, [isSingle, items, selSku]);

  /* Navigation */
  const nav = useCallback((s, d) => {
    if (anim !== "idle") return;
    setDir(d);
    setAnim("exit");
    setTimeout(() => {
      setDStep(s); setStep(s);
      setTimeout(() => { setAnim("enter"); setTimeout(() => setAnim("idle"), 400); }, 50);
    }, 300);
  }, [anim]);
  const fwd = s => nav(s, "forward");
  const bwd = s => nav(s, "backward");
  const tc = () => {
    if (anim === "enter") return dir === "forward" ? "tf-ef" : "tf-eb";
    if (anim === "exit") return dir === "forward" ? "tf-xf" : "tf-xb";
    return "tf-idle";
  };

  /* Save & launch Orbit */
  const save = () => {
    try {
      const d = JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
      d.monthlyPrice = moPrice;
      if (sel) {
        d.selectedProduct = {
          label: pep === "wolverine"
            ? `Wolverine Blend ${sel.conc} ${sel.vol} (${sel.mg}mg each)`
            : pep === "bodhi"
            ? `Bodhi Blend ${sel.conc} ${sel.vol} (${sel.mg}mg)`
            : `${MED_NAMES[pep]} ${sel.conc} ${sel.vol} (${sel.mg}mg)`,
          sku: sel.sku,
          conc: sel.conc,
          vol: sel.vol,
          mg: sel.mg,
          note: sel.note,
        };
      }
      sessionStorage.setItem("tf_intake", JSON.stringify(d));
    } catch (e) { console.error(e); }
    setShowOrbit(true);
  };

  const orbitSD = useMemo(() => {
    if (!showOrbit) return null;
    try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; }
  }, [showOrbit]);

  if (showOrbit) {
    return (
      <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#fff" }}>
        <style>{CSS}</style>
        <OrbitIntake med={pep} sd={orbitSD} />
      </div>
    );
  }

  const gl = goalLabel(cached);
  const proto = getProto(pep, effRt);
  const cycleText = CYCLE[pep] || CYCLE["bpc-157"];

  const rs = a => ({
    display: "flex", alignItems: "flex-start", gap: 14, padding: 16, borderRadius: 12,
    border: `2px solid ${a ? PR : "hsl(0 0% 90%)"}`,
    backgroundColor: a ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)",
    cursor: "pointer", transition: "all .2s",
  });
  const ds = a => ({
    flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
    border: `2px solid ${a ? PR : "hsl(0 0% 85%)"}`,
    backgroundColor: a ? PR : "transparent",
    display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
  });

  /* Single-SKU: skip step 1, go straight to review */
  const startStep = isSingle ? 2 : 1;
  useEffect(() => {
    if (isSingle && dStep === 1) {
      setDStep(2);
      setStep(2);
    }
  }, [isSingle]);

  return (
    <div style={{ overflow: "hidden", position: "relative", fontFamily: FB, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}>
      <style>{CSS}</style>
      <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>

        {/* ── STEP 1: Select Supply (multi-SKU only — BPC-157 injection) ── */}
        {dStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { window.location.href = "/getpeptides/recovery/product"; }} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              {/* Title + Price */}
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
                <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", margin: 0 }}>
                  Choose your supply
                </h1>
                <span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>
                  ${moPrice}<span style={{ fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)" }}>/mo</span>
                </span>
              </div>

              {/* Subtitle */}
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 4 }}>
                {MED_NAMES[pep]} — {RL[effRt]}
              </p>
              <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "hsl(0 0% 55%)", marginBottom: 20, lineHeight: "18px" }}>
                {isFirst
                  ? "As a first-time patient, we recommend starting with the lowest effective dose."
                  : "All available strengths shown. Select based on your treatment phase."}
              </p>

              {/* Protocol */}
              <ProtoCard proto={proto} route={effRt} />

              {/* Dose meter */}
              {showMeter && <DoseMeter selMg={sel?.mg || null} pep={pep} rt={effRt} />}

              {/* Price banner */}
              <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", marginBottom: 10 }}>
                Included with your ${moPrice}/mo subscription
              </p>

              {/* Radio list */}
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {items.map(item => {
                  const a = selSku === item.sku;
                  const rec = item.sku === recSku;
                  return (
                    <li key={item.sku}>
                      <label onClick={() => setSelSku(item.sku)} style={rs(a)}>
                        <span style={ds(a)}>{a && <Chk c="#fff" />}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontFamily: FB, fontSize: 16, fontWeight: 600, color: "hsl(0 0% 8.5%)", lineHeight: 1.3 }}>
                              {item.conc} — {item.vol}
                            </span>
                            {rec && !isSingle && (
                              <span style={{ fontSize: 10, fontWeight: 600, color: PR, backgroundColor: `${PR}15`, padding: "2px 7px", borderRadius: 9999, fontFamily: FB }}>
                                {isFirst ? "Recommended starter" : "Recommended"}
                              </span>
                            )}
                            <Tip text={item.note} />
                          </div>
                          <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "hsl(0 0% 45%)", marginTop: 4 }}>{item.note}</div>
                          <div style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)", marginTop: 2 }}>{item.mg} mg total</div>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>

              {/* Cycle callout */}
              <div style={{ marginTop: 20, padding: "12px 16px", borderRadius: 12, border: "1px solid hsl(0 0% 90%)", backgroundColor: "hsl(0 0% 98%)" }}>
                <p style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: "hsl(0 0% 40%)", lineHeight: "17px", margin: 0 }}>
                  {cycleText}
                </p>
              </div>

              <p style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 16, lineHeight: "16px", marginBottom: 24 }}>
                Your provider may adjust selection based on your clinical profile, injury type, and treatment goals.
              </p>
            </main>
            <LF onClick={() => fwd(2)} disabled={!selSku} label="Review selection" />
          </div>
        )}

        {/* ── STEP 2: Review ── */}
        {dStep === 2 && sel && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { if (isSingle) window.location.href = "/getpeptides/recovery/product"; else bwd(1); }} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Your recovery protocol
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>
                Review before continuing to health intake
              </p>

              {/* Treatment card */}
              <div className="tf-fi" style={{ padding: 20, borderRadius: 12, border: `1px solid ${PR}25`, backgroundColor: "hsl(140 30% 97%)", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontFamily: FH, fontSize: 22, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>
                    {MED_NAMES[pep]}
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>${moPrice}</span>
                    <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "hsl(0 0% 50%)", display: "block" }}>per month</span>
                  </div>
                </div>
                <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: PR, backgroundColor: `${PR}12`, padding: "3px 10px", borderRadius: 9999, display: "inline-block", marginBottom: 16 }}>
                  {RL[effRt]}
                </span>

                <SR l="Concentration" v={sel.conc} />
                <SR l="Volume" v={sel.vol} />
                <SR l="Total medication" v={pep === "wolverine" ? `${sel.mg} mg each (BPC-157 + TB-500)` : pep === "bodhi" ? `${sel.mg} mg (quad blend)` : `${sel.mg} mg`} />
                <SR l="Primary goal" v={gl} />
                <SR l="Your BMI" v={String(bmi)} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0 0" }}>
                  <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 45%)" }}>Supply</span>
                  <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{sel.note}</span>
                </div>
              </div>

              {/* Dose meter */}
              {showMeter && <DoseMeter selMg={sel.mg} pep={pep} rt={effRt} />}

              {/* Protocol */}
              <ProtoCard proto={proto} route={effRt} />

              {/* Cycle + clinical note */}
              <div style={{ marginBottom: 16, padding: "12px 16px", borderRadius: 12, border: "1px solid hsl(0 0% 90%)", backgroundColor: "hsl(0 0% 98%)" }}>
                <p style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: "hsl(0 0% 40%)", lineHeight: "17px", margin: 0 }}>
                  {cycleText}
                </p>
              </div>

              <p style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 55%)", lineHeight: "18px", marginBottom: 24 }}>
                Dosing starts conservatively and titrates based on tolerance and injury response. Your provider will confirm the final protocol based on your complete health history.
              </p>
            </main>
            <LF onClick={save} disabled={false} label="Continue to health intake" />
          </div>
        )}

      </div>
    </div>
  );
}