import { useState, useCallback, useEffect, useMemo, useRef } from "react";

const PR = "rgb(36, 92, 58)";
const BRAND = "Athos";
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const AC = "#37B8D3";

const MONTHLY = { motsc: 230, nad: 170, "cjc-ipa": 160, glo: 190, klow: 199, "semax-selank": 165 };
const MED_NAMES = { motsc: "MOTS-c", nad: "NAD+", "cjc-ipa": "CJC-1295 / Ipamorelin", glo: "GLO Blend", klow: "KLOW Blend", "semax-selank": "Semax / Selank" };
const ORBIT_SLUGS = { motsc: "mots-c", nad: "nad", "cjc-ipa": "cjc-ipamorelin", glo: "glo", klow: "klow", "semax-selank": "sermorelin" };

const PEP_TYPE = { motsc: "blend", nad: "product", "cjc-ipa": "blend", glo: "single", klow: "single", "semax-selank": "product" };

const BT = [
  { max: 30, label: "Optimization", color: "#86EFAC", range: "25–29.9" },
  { max: 35, label: "First-line", color: "#4ADE80", range: "30–34.9" },
  { max: 40, label: "High Priority", color: "#16A34A", range: "35–39.9" },
  { max: 999, label: "High Priority", color: "#166534", range: "≥40" },
];

const RL = { injection: "Subcutaneous injection", troche: "Sublingual troche", capsule: "Oral capsule", nasal: "Nasal spray", cream: "Topical cream" };

const PROTO = {
  motsc: [{ p: "Starter", d: "200–400 mcg", f: "Daily SubQ", t: "Wk 1–4" }, { p: "Escalation", d: "400–800 mcg", f: "Daily SubQ", t: "Wk 5–8" }, { p: "Maintenance", d: "800–1,000 mcg", f: "Daily SubQ", t: "Wk 9–12" }],
  "cjc-ipa": [{ p: "Starter", d: "100 mcg CJC + 200 mcg Ipa", f: "Daily SubQ before bed", t: "Wk 1–4" }, { p: "Standard", d: "200 mcg CJC + 300 mcg Ipa", f: "Daily SubQ before bed", t: "Wk 5–12" }],
  glo: [{ p: "Loading", d: "0.3 ml daily", f: "Once daily SubQ", t: "Wk 1–4" }, { p: "Maintenance", d: "0.2 ml daily", f: "Once daily SubQ", t: "Wk 5–12" }],
  klow: [{ p: "Loading", d: "0.3 ml daily", f: "Once daily SubQ", t: "Wk 1–4" }, { p: "Maintenance", d: "0.2 ml daily", f: "Once daily SubQ", t: "Wk 5–8" }],
  "semax-selank": [{ p: "Daily", d: "0.1–0.2 ml each", f: "Once daily SubQ", t: "4–8 weeks on, 2–4 off" }],
  "semax-selank-troche": [{ p: "Daily", d: "1 troche sublingual", f: "Once daily AM", t: "Ongoing — 30 day supply" }],
  injection: [{ p: "Starter", d: "50 mg", f: "2–3x/wk SubQ", t: "Wk 1–2" }, { p: "Escalation", d: "100 mg", f: "2–3x/wk SubQ", t: "Wk 3–4" }, { p: "Maintenance", d: "100 mg", f: "2–3x/wk SubQ", t: "Ongoing" }],
  oral: [{ p: "Daily", d: "200–400 mg", f: "Once daily", t: "Ongoing" }],
  nasal: [{ p: "Daily", d: "30 mg/spray", f: "Once daily AM", t: "Ongoing" }],
  cream: [{ p: "Daily", d: "Thin layer", f: "Once daily", t: "Ongoing" }],
};
const getProto = (pep, rt) => {
  if (pep === "semax-selank" && rt === "troche") return PROTO["semax-selank-troche"];
  return PROTO[pep] || (rt === "troche" || rt === "capsule" ? PROTO.oral : PROTO[rt]) || PROTO.injection;
};

const CYCLE = {
  motsc: "Cycle: 8–12 weeks on, 4 weeks off. Morning dosing, 30–60 min before fasted exercise.",
  "cjc-ipa": "Cycle: 12–16 weeks on, 4 weeks off. Evening dosing before bed maximizes natural GH pulse.",
  glo: "Cycle: 8–12 weeks on, 4 weeks off. Quad-stack peptide blend targeting collagen, repair, and telomere maintenance.",
  klow: "Cycle: 8–12 weeks, 4-week washout. 503A compounded — highest-tier anti-inflammatory and tissue repair.",
  "semax-selank": "Cycle: 4–8 weeks on, 2–4 weeks off. Nootropic stack for cognitive enhancement and anxiolysis.",
};

/* ── Blend data (MOTS-c + CJC/Ipa) ── */
const mkB = (id, sku, nm, comp, ben, tip) => ({ id, sku, nm, comp, ben, tip });
const BLENDS = {
  motsc: [
    mkB("standalone", "MOTSC-10mg_5ml-STANDALONE", "Standalone", "MOTS-c only", "Pure metabolic peptide — no secondary compounds", "Standalone MOTS-c 2mg/mL 5ml. Ideal if you want the metabolic benefits without additional peptides."),
    mkB("adonix", "MOTSC-10mg_5ml-ADNX", "Adonix", "Tesamorelin · Ipamorelin · AOD-9604", "Metabolic drive and fat mobilization", "GH release + targeted lipolysis with MOTS-c AMPK activation."),
    mkB("empress", "MOTSC-10mg_5ml-EMPR", "Empress", "BPC-157 · GHK-Cu · Kisspeptin-10", "Tissue repair and hormonal balance", "Tissue healing + collagen remodeling + endocrine signaling with MOTS-c support."),
    mkB("lucid", "MOTSC-10mg_5ml-LUCD", "Lucid", "Semax · Selank · Tesamorelin", "Cognitive clarity and neuroprotection", "Nootropic peptides + metabolic enhancement for cognitive and metabolic optimization."),
    mkB("kali", "MOTSC-10mg_5ml-KALI", "Kali", "BPC-157 · 5-Amino-1MQ · Tesamorelin", "Recovery and fat metabolism", "Tissue repair + fat-cell energy regulation with MOTS-c as metabolic backbone."),
    mkB("inferno", "MOTSC-10mg_5ml-INFR", "Inferno", "AOD-9604 · CJC-1295 · Ipamorelin", "Maximum fat loss and GH secretion", "Aggressive lipolysis + sustained GH release amplified by MOTS-c AMPK activation."),
  ],
  "cjc-ipa": [
    mkB("prometheus", "PROMETHEUS-CJC6IPA12_5ml-INJ", "Prometheus", "CJC-1295 · Ipamorelin", "Classic GH secretagogue stack", "Sustained GH release for lean mass, recovery, and sleep. The foundational stack."),
    mkB("atlas", "ATLAS-CJC12IPA24TESA2IGF02_5ml-INJ", "Atlas", "CJC-1295 · Ipamorelin · Tesamorelin · IGF-LR3", "Maximum GH + metabolic support", "Full spectrum GH stack with visceral fat targeting and IGF-1 amplification."),
    mkB("hypnos", "HYPNOS-DSIP1SEL1CJC12IPA24_5ml-INJ", "Hypnos", "DSIP · Selank · CJC-1295 · Ipamorelin", "Sleep optimization + GH release", "Deep sleep peptides paired with GH secretagogues for nocturnal recovery."),
    mkB("apex", "APEX-TESA2CJC12IPA24BPC2_5ml-INJ", "Apex", "Tesamorelin · CJC-1295 · Ipamorelin · BPC-157", "GH release + tissue repair", "Multi-vector GH stack with BPC-157 for accelerated recovery."),
    mkB("inferno-cjc", "INFERNO-AOD2CJC12IPA2MOTS2_5ml-INJ", "Inferno", "AOD-9604 · CJC-1295 · Ipamorelin · MOTS-C", "Fat loss + metabolic + GH", "Aggressive lipolysis with CJC/Ipa GH base and MOTS-c metabolic activation."),
  ],
};

/* ── NAD+ products ── */
const mkN = (sku, rt, conc, vol, mg, note) => ({ sku, rt, conc, vol, mg, note });
const NADS = [
  mkN("NAD-500mg_5ml-INJ", "injection", "100mg/mL", "5ml", 500, "Starter — 5 doses at 100mg"),
  mkN("NAD-1000mg_5ml-INJ", "injection", "200mg/mL", "5ml", 1000, "Standard — 10 doses at 100mg"),
  mkN("NAD-1000mg_10ml-INJ", "injection", "100mg/mL", "10ml", 1000, "Large volume — 10 doses at 100mg"),
  mkN("NAD-1000mg_1vial-LYOINJ", "injection", "1000mg/vial", "1 vial", 1000, "Lyophilized — reconstitute before use"),
  mkN("NAD-2000mg_10ml-INJ", "injection", "200mg/mL", "10ml", 2000, "High dose — 20 doses at 100mg"),
  mkN("NAD-6000mg_30ct-TROCHE200", "troche", "200mg", "30ct", 6000, "200mg daily — 30 day supply"),
  mkN("NAD-9000mg_30ct-TROCHE300", "troche", "300mg", "30ct", 9000, "300mg daily — 30 day supply"),
  mkN("NAD-12000mg_30ct-TROCHE400", "troche", "400mg", "30ct", 12000, "400mg daily — 30 day supply"),
  mkN("NAD-6000mg_30ct-CAP200", "capsule", "200mg", "30ct", 6000, "NAD+ 200mg daily — 30 day supply"),
  mkN("NADMETHCAFF-200mg_30ct-CAP", "capsule", "200mg + B12", "30ct", 6000, "NAD+ with B12 and Caffeine — energy blend"),
  mkN("NAD-750mg_15ml-NASALPUMP", "nasal", "50mg/mL", "15ml", 750, "Standard spray — ~25 doses"),
  mkN("NAD-1500mg_15ml-NASAL", "nasal", "100mg/mL", "15ml", 1500, "Double strength — 30 day supply"),
  mkN("NAD-CREAM30ml-TOP", "cream", "10%", "30ml", 3000, "NAD+ cream — transdermal"),
  mkN("NAD-GLOW-CLEODERM", "cream", "100mg/gm", "30gm", 3000, "Cellular renewal cream — daily application"),
];

/* ── Sermorelin / GHRP-2 products (under semax-selank key) ── */
const SERM_PRODUCTS = [
  { sku: "SEMAX-5mg_5ml-KALM", rt: "injection", conc: "1/1 mg/mL", vol: "5ml", mg: 10, note: "Semax + Selank nootropic stack", comp: "Semax · Selank" },
  { sku: "SERMGHRP2-12mg12mg_30ct-TROCHE", rt: "troche", conc: "400/400mcg", vol: "30ct", mg: 24, note: "Low dose — 30 day supply" },
  { sku: "SERMGHRP2-15mg15mg_30ct-TROCHE", rt: "troche", conc: "500/500mcg", vol: "30ct", mg: 30, note: "Standard dose — 30 day supply" },
  { sku: "SERMGHRP2-18mg18mg_30ct-TROCHE", rt: "troche", conc: "600/600mcg", vol: "30ct", mg: 36, note: "Enhanced dose — 30 day supply" },
  { sku: "SERMGHRP2-24mg24mg_30ct-TROCHE", rt: "troche", conc: "800/800mcg", vol: "30ct", mg: 48, note: "Maximum dose — 30 day supply" },
];

/* Product lookup by peptide key */
const PRODUCT_LISTS = { nad: NADS, "semax-selank": SERM_PRODUCTS };

/* ── Single-product peptides ── */
const SINGLES = {
  glo: { sku: "FOUNTAINYOUTH-GHK50BPC10TB10EPIT10_5ml-INJ", conc: "10/2/2/2 mg/mL", vol: "5ml", mg: 80, note: "GHK-Cu + BPC-157 + TB-500 + Epitalon quad stack", comp: "GHK-Cu · BPC-157 · TB-500 · Epitalon" },
  klow: { sku: "KLOW-80mg_5ml-INJ", conc: "10/2/2/2 mg/mL", vol: "5ml", mg: 80, note: "BPC-157 + TB-500 + GHK-Cu + KPV 503A compound", comp: "BPC-157 · TB-500 · GHK-Cu · KPV" },
};

const DR = {
  injection: [500, 2000],
  troche: [6000, 12000],
  capsule: [6000, 6000],
  nasal: [750, 1500],
  cream: [3000, 3000],
};

const GOAL_MAP = { "cellular-energy": "Cellular energy", cognitive: "Cognitive clarity", metabolic: "Metabolic optimization", "anti-aging": "Anti-aging", recovery: "Recovery and repair", longevity: "Longevity" };
const goalLabel = c => (c.subType && GOAL_MAP[c.subType]) || (c.peptide === "motsc" ? "Metabolic optimization" : "Cellular energy and longevity");

/* ── Orbit ── */
const ORBIT_BASE = "https://onboard.myorbithealth.com/form/athos-wellness";
function buildNotes(d) { const l = d.selectedProduct?.label || "Unknown"; const pr = d.priorPeptides === "none" ? "No prior peptide use" : `Prior: ${d.priorPeptides}`; const micro = d.microDose ? "\nMICRO-DOSE PROTOCOL — BILLING EVERY 2 MONTHS" : ""; return `Patient requests: ${l}\nOther info: ${pr}, BMI ${d.bmi || "?"}, Goal: ${goalLabel(d)}${micro}`; }
function buildScript(st, notes) { const s = st.replace(/\\/g, "\\\\").replace(/'/g, "\\'"); const n = notes.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n"); return `<script>(function(){function tp(){if(typeof answers==='undefined'||typeof showStep==='undefined'||typeof STEPS==='undefined'){setTimeout(tp,200);return}var ni=STEPS.findIndex(function(s){return s.id.indexOf('note')!==-1});var nid=STEPS[ni]?STEPS[ni].id:'patient-notes';answers['state']='${s}';answers[nid]='${n}';var _o=showStep;window.showStep=function(n){_o(n);if(n===ni){setTimeout(function(){var ta=document.querySelector('.step.active textarea');if(ta){ta.value=answers[nid];ta.dispatchEvent(new Event('input',{bubbles:true}))}},300)}};showStep(3)}tp()})()\x3c/script>`; }

function OrbitIntake({ med, sd }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !sd) return; const slug = ORBIT_SLUGS[med] || med; const url = `${ORBIT_BASE}/${slug}`; const sc = buildScript(sd.state || "", buildNotes(sd));
    fetch(url).then(r => r.text()).then(html => { let m = html; const bt = `<base href="${url}">`; m = m.includes("<head>") ? m.replace("<head>", "<head>" + bt) : bt + m; m = m.includes("</body>") ? m.replace("</body>", sc + "\n</body>") : m + sc; const f = document.createElement("iframe"); f.style.cssText = "width:100%;min-height:100vh;border:none;display:block;"; f.srcdoc = m; ref.current.innerHTML = ""; ref.current.appendChild(f); })
      .catch(err => { if (ref.current) ref.current.innerHTML = `<div style="text-align:center;padding:40px;font-family:system-ui"><p style="font-size:16px;font-weight:600;color:#333">Unable to load intake form</p><p style="font-size:14px;color:#888;margin:8px 0 20px">${err.message}</p><a href="${url}" target="_blank" style="color:${PR}">Open in new tab →</a></div>`; });
  }, [med, sd]);
  return <div ref={ref} style={{ width: "100%", minHeight: "100vh" }}><div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, fontFamily: FB, gap: 12 }}><div style={{ width: 32, height: 32, border: "3px solid hsl(0 0% 90%)", borderTopColor: PR, borderRadius: "50%", animation: "tfSp .8s linear infinite" }} /><p style={{ fontSize: 14, color: "hsl(0 0% 50%)" }}>Loading health intake…</p><style>{`@keyframes tfSp{to{transform:rotate(360deg)}}`}</style></div></div>;
}

/* ── CSS ── */
const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
@keyframes tfSIR{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}@keyframes tfSOL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}@keyframes tfSIL{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}@keyframes tfSOR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}.tf-ef{animation:tfSIR .4s cubic-bezier(.16,1,.3,1) forwards}.tf-xf{animation:tfSOL .3s cubic-bezier(.7,0,.84,0) forwards}.tf-eb{animation:tfSIL .4s cubic-bezier(.16,1,.3,1) forwards}.tf-xb{animation:tfSOR .3s cubic-bezier(.7,0,.84,0) forwards}.tf-idle{opacity:1;transform:translateX(0)}@keyframes tfFI{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.tf-fi{animation:tfFI .4s cubic-bezier(.16,1,.3,1) forwards}@keyframes tfFtI{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.tf-fta{animation:tfFtI .35s cubic-bezier(.16,1,.3,1) forwards}`;

/* ── Icons ── */
const Arr = () => <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>;
const BkA = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>;
const Chk = ({ c }) => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
const Tip = ({ text }) => { const [s, setS] = useState(false); return (<span style={{ position: "relative", display: "inline-flex", marginLeft: 6, cursor: "pointer", verticalAlign: "middle" }} onMouseEnter={() => setS(true)} onMouseLeave={() => setS(false)} onClick={e => { e.stopPropagation(); setS(!s) }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(0 0% 65%)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>{s && <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", width: 240, padding: "10px 12px", borderRadius: 10, backgroundColor: "hsl(0 0% 15%)", color: "#fff", fontSize: 13, fontWeight: 400, lineHeight: "18px", fontFamily: FB, boxShadow: "0 8px 24px rgba(0,0,0,.2)", zIndex: 100 }}>{text}<div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid hsl(0 0% 15%)" }} /></div>}</span>); };

/* ── Shared UI ── */
const LH = ({ showBack, onBack }) => (<header style={{ position: "sticky", top: 0, zIndex: 10, maxWidth: 520, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", backgroundColor: "#fff", borderBottom: "1px solid hsl(0 0% 90%)" }}><div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>{showBack && <button onClick={onBack} style={{ position: "absolute", left: 20, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid hsl(0 0% 90%)", backgroundColor: "transparent", color: "hsl(0 0% 8.5%)", fontSize: 14, fontWeight: 400, cursor: "pointer", lineHeight: 1, fontFamily: FB }}><BkA /> Back</button>}<span style={{ fontSize: 28, fontWeight: 600, color: PR, letterSpacing: "-0.01em", fontFamily: FH }}>{BRAND}</span></div><div style={{ padding: "0 20px 16px" }}><div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}><div style={{ width: "77%", height: "100%", borderRadius: 9999, backgroundColor: PR, transition: "width .4s ease" }} /></div></div></header>);
const LF = ({ onClick, disabled, label }) => (<footer className="tf-fta" style={{ position: "sticky", bottom: 0, maxWidth: 520, width: "100%", margin: "auto auto 0", padding: "16px 20px", backgroundColor: "#fff", borderTop: "1px solid hsl(0 0% 90%)" }}><button onClick={onClick} disabled={disabled} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: FB, fontSize: 16, fontWeight: 500, lineHeight: "24px", padding: 16, borderRadius: 12, border: "none", backgroundColor: !disabled ? PR : "hsl(0 0% 96.5%)", color: !disabled ? "#fff" : "hsl(0 0% 55%)", cursor: !disabled ? "pointer" : "not-allowed", transition: "background-color .3s, color .3s" }}>{label || "Continue"} <Arr /></button></footer>);
const SR = ({ l, v }) => (<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid hsl(0 0% 93%)" }}><span style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 45%)" }}>{l}</span><span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{v}</span></div>);

const DoseMeter = ({ bmi, selMg, isBMI, effRt }) => {
  const range = isBMI ? [25, 45] : (DR[effRt] || [0, 100]);
  const tiers = BT;
  if (!isBMI && range[0] === range[1]) return null;
  let meterVal, meterTier;
  if (isBMI) {
    const raw = ((Math.max(25, Math.min(45, bmi)) - 25) / 20) * 100;
    meterVal = Math.max(8, Math.min(92, raw));
    meterTier = tiers.find(t => bmi < t.max) || tiers[3];
  } else if (selMg !== null && range[1] > range[0]) {
    const raw = ((selMg - range[0]) / (range[1] - range[0])) * 100;
    meterVal = Math.max(8, Math.min(92, raw));
    meterTier = raw < 25 ? tiers[0] : raw < 50 ? tiers[1] : raw < 75 ? tiers[2] : tiers[3];
  } else {
    meterVal = 8; meterTier = tiers[0];
  }
  return (<div style={{ marginBottom: 20 }}>
    <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "flex", alignItems: "center" }}>
      {isBMI ? "BMI-Indexed Dosing Intensity" : "Selected Strength"}<Tip text={isBMI ? "Endogenous MOTS-c levels are inversely correlated with BMI. Higher BMI = lower baseline = strongest benefit." : "Reflects the strength of your selected product relative to the full range for this route."} /></div>
    <div style={{ position: "relative", width: "100%", height: 36, borderRadius: 9999, overflow: "visible", display: "flex" }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 9999, overflow: "hidden", display: "flex" }}>{tiers.map((d, i) => <div key={i} style={{ flex: 1, backgroundColor: d.color }} />)}</div>
      <div style={{ position: "absolute", left: `${meterVal}%`, top: 0, transform: "translateX(-50%)", height: "100%", display: "flex", alignItems: "center", zIndex: 2, transition: "left .4s cubic-bezier(.16,1,.3,1)" }}>
        <div style={{ padding: "3px 10px", borderRadius: 9999, backgroundColor: meterTier.color, color: meterTier.color === "#86EFAC" || meterTier.color === "#4ADE80" ? "hsl(0 0% 15%)" : "#fff", fontFamily: FB, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.2)", border: "2px solid #fff" }}>{meterTier.label}</div></div></div>
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>{tiers.map((d, i) => <div key={i} style={{ flex: 1, textAlign: i === 0 ? "left" : i === 3 ? "right" : "center" }}><span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)" }}>{d.range}</span></div>)}</div>
  </div>);
};

const ProtoCard = ({ proto, route }) => (<div style={{ marginBottom: 20, borderRadius: 12, border: "1px solid hsl(0 0% 90%)", overflow: "hidden" }}>
  <div style={{ padding: "12px 16px", backgroundColor: `${PR}08`, borderBottom: "1px solid hsl(0 0% 90%)" }}><span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 20%)" }}>Dosing Protocol — {RL[route] || route}</span></div>
  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FB, fontSize: 13 }}><thead><tr style={{ backgroundColor: "hsl(0 0% 97%)" }}>{["Phase", "Dose", "Frequency", "Duration"].map(h => <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontWeight: 500, color: "hsl(0 0% 45%)", borderBottom: "1px solid hsl(0 0% 93%)" }}>{h}</th>)}</tr></thead>
    <tbody>{proto.map((r, i) => <tr key={i}><td style={{ padding: "10px 12px", fontWeight: 600, color: PR, borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.p}</td><td style={{ padding: "10px 12px", color: "hsl(0 0% 20%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.d}</td><td style={{ padding: "10px 12px", color: "hsl(0 0% 35%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.f}</td><td style={{ padding: "10px 12px", color: "hsl(0 0% 35%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.t}</td></tr>)}</tbody></table>
  <div style={{ padding: "10px 12px", backgroundColor: "hsl(0 0% 98%)", borderTop: "1px solid hsl(0 0% 93%)" }}><p style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 50%)", lineHeight: "16px", margin: 0 }}>Morning dosing recommended. Your provider adjusts based on clinical response.</p></div></div>);

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export default function LongevityProductInfo() {
  const [cached] = useState(() => { try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; } });
  useEffect(() => { if (!cached.peptide || !cached.effectiveRoute) window.location.href = "/getpeptides/longevity/product"; }, []);

  const bmi = cached.bmi || 30;
  const pep = cached.peptide || "nad";
  const effRt = cached.effectiveRoute || "injection";
  const isFirst = cached.priorPeptides === "none";
  const moPrice = MONTHLY[pep] || 170;
  const isMicro = cached.microDose === true && effRt === "injection";
  const displayPrice = isMicro ? Math.round(moPrice / 2) : moPrice;
  const pepType = PEP_TYPE[pep] || "product";
  const isBlend = pepType === "blend";
  const isSingle = pepType === "single";
  const isBMI = pep === "motsc";

  const [step, setStep] = useState(1), [dStep, setDStep] = useState(1), [anim, setAnim] = useState("idle"), [dir, setDir] = useState("forward");
  const [selId, setSelId] = useState(null), [showOrbit, setShowOrbit] = useState(false);

  /* Build item list based on peptide type */
  const items = useMemo(() => {
    if (isBlend) return BLENDS[pep] || [];
    if (isSingle) { const s = SINGLES[pep]; return s ? [s] : []; }
    return (PRODUCT_LISTS[pep] || []).filter(p => p.rt === effRt).sort((a, b) => a.mg - b.mg);
  }, [pep, effRt, isBlend, isSingle]);

  const sel = useMemo(() => {
    if (isBlend) return items.find(x => x.id === selId) || null;
    if (isSingle) return items[0] || null;
    return items.find(x => x.sku === selId) || null;
  }, [items, selId, isBlend, isSingle]);

  const recId = useMemo(() => {
    if (!items.length) return null;
    if (isSingle) return items[0].sku;
    if (isBlend) return isFirst ? items[0].id : items[0].id;
    return isFirst ? items[0].sku : items[Math.floor(items.length / 2)]?.sku;
  }, [items, isFirst, isBlend, isSingle]);

  /* Auto-select when only 1 item available */
  useEffect(() => {
    if (items.length === 1 && !selId) setSelId(isSingle ? items[0].sku : (isBlend ? items[0].id : items[0].sku));
  }, [items, selId, isSingle, isBlend]);

  const nav = useCallback((s, d) => { if (anim !== "idle") return; setDir(d); setAnim("exit"); setTimeout(() => { setDStep(s); setStep(s); setTimeout(() => { setAnim("enter"); setTimeout(() => setAnim("idle"), 400); }, 50); }, 300); }, [anim]);
  const fwd = s => nav(s, "forward"), bwd = s => nav(s, "backward");
  const tc = () => { if (anim === "enter") return dir === "forward" ? "tf-ef" : "tf-eb"; if (anim === "exit") return dir === "forward" ? "tf-xf" : "tf-xb"; return "tf-idle"; };

  const save = () => {
    try {
      const d = JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
      d.monthlyPrice = moPrice;
      d.displayPrice = displayPrice;
      if (sel) {
        if (isBlend) {
          d.selectedProduct = { label: `${MED_NAMES[pep]} — ${sel.nm} Blend (5ml)`, sku: sel.sku, blend: sel.id, components: sel.comp };
        } else if (isSingle) {
          d.selectedProduct = { label: `${MED_NAMES[pep]} ${sel.conc} ${sel.vol} (${sel.mg}mg)`, sku: sel.sku, conc: sel.conc, vol: sel.vol, mg: sel.mg, components: sel.comp };
        } else {
          d.selectedProduct = { label: `NAD+ ${sel.conc} ${sel.vol} (${sel.mg}mg)`, sku: sel.sku, conc: sel.conc, vol: sel.vol, mg: sel.mg };
        }
      }
      sessionStorage.setItem("tf_intake", JSON.stringify(d));
    } catch (e) { console.error(e); }
    setShowOrbit(true);
  };

  const orbitSD = useMemo(() => { if (!showOrbit) return null; try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; } }, [showOrbit]);
  if (showOrbit) return <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#fff" }}><style>{CSS}</style><OrbitIntake med={pep} sd={orbitSD} /></div>;

  const gl = goalLabel(cached);
  const proto = getProto(pep, effRt);
  const cycleText = CYCLE[pep] || null;
  const canSelect = isSingle || selId;

  const rs = a => ({ display: "flex", alignItems: "flex-start", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${a ? PR : "hsl(0 0% 90%)"}`, backgroundColor: a ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s" });
  const ds = a => ({ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${a ? PR : "hsl(0 0% 85%)"}`, backgroundColor: a ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 });

  return (<div style={{ overflow: "hidden", position: "relative", fontFamily: FB, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}><style>{CSS}</style>
    <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>

      {/* ── STEP 1: Select ── */}
      {dStep === 1 && (<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <LH showBack onBack={() => { window.location.href = "/getpeptides/longevity/product"; }} />
        <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
            <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", margin: 0 }}>
              {isBlend ? "Choose your blend" : isSingle ? "Your protocol" : "Choose your strength"}
            </h1>
            <span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>${displayPrice}<span style={{ fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)" }}>/mo</span>{isMicro && <span style={{ fontSize: 11, fontWeight: 500, color: "hsl(0 0% 45%)" }}>*</span>}</span>
          </div>
          <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 4 }}>
            {MED_NAMES[pep]} — {RL[effRt] || "Subcutaneous injection"}
          </p>
          <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "hsl(0 0% 55%)", marginBottom: 20, lineHeight: "18px" }}>
            {isBlend ? `All blends deliver the same ${MED_NAMES[pep]} base. Secondary peptides target different systems.`
              : isSingle ? `One formulation available for ${MED_NAMES[pep]}.`
                : isFirst ? "Starting with a lower strength allows your body to acclimate."
                  : "All available strengths shown. Select based on your protocol phase."}
          </p>

          {isBMI && <DoseMeter bmi={bmi} selMg={null} isBMI effRt={effRt} />}
          {!isBlend && <ProtoCard proto={proto} route={effRt} />}
          {!isBlend && !isBMI && <DoseMeter bmi={bmi} selMg={sel?.mg || null} isBMI={false} effRt={effRt} />}

          <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", marginBottom: 10 }}>
            {isSingle ? `Included with your $${displayPrice}/mo subscription` : `All options included with your $${displayPrice}/mo subscription`}{isMicro && "*"}
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
            {items.map(item => {
              const key = isBlend ? item.id : item.sku;
              const a = isSingle ? true : selId === key;
              const rec = key === recId;
              return (
                <li key={key}><label onClick={() => { if (!isSingle) setSelId(key); }} style={rs(a)}>
                  <span style={ds(a)}>{a && <Chk c="#fff" />}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: FB, fontSize: 16, fontWeight: 600, color: "hsl(0 0% 8.5%)", lineHeight: 1.3 }}>
                        {isBlend ? item.nm : isSingle ? `${item.conc} — ${item.vol}` : `${item.conc} — ${item.vol}`}
                      </span>
                      {rec && !isSingle && <span style={{ fontSize: 10, fontWeight: 600, color: PR, backgroundColor: `${PR}15`, padding: "2px 7px", borderRadius: 9999, fontFamily: FB }}>{isFirst ? "Recommended starter" : "Recommended"}</span>}
                      <Tip text={isBlend ? item.tip : item.note} />
                    </div>
                    {isBlend && <div style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: PR, marginTop: 3, lineHeight: "16px" }}>{item.comp}</div>}
                    <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "hsl(0 0% 45%)", marginTop: 4 }}>{isBlend ? item.ben : item.note}</div>
                    {!isBlend && item.mg > 0 && <div style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)", marginTop: 2 }}>{item.mg} mg total</div>}
                    {isSingle && item.comp && <div style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: PR, marginTop: 4 }}>{item.comp}</div>}
                  </div>
                </label></li>);
            })}
          </ul>

          {cycleText && <div style={{ marginTop: 20, padding: "12px 16px", borderRadius: 12, border: "1px solid hsl(0 0% 90%)", backgroundColor: "hsl(0 0% 98%)" }}><p style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: "hsl(0 0% 40%)", lineHeight: "17px", margin: 0 }}>{cycleText}</p></div>}
          <p style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 16, lineHeight: "16px", marginBottom: isMicro ? 4 : 24 }}>Your provider may adjust selection based on your clinical profile and treatment goals.</p>
          {isMicro && <p style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 50%)", lineHeight: "15px", marginBottom: 24 }}>*Billed every 2 months</p>}
        </main>
        <LF onClick={() => fwd(2)} disabled={!canSelect} label="Review selection" />
      </div>)}

      {/* ── STEP 2: Review ── */}
      {dStep === 2 && sel && (<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <LH showBack onBack={() => bwd(1)} />
        <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
          <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>Your treatment selection</h1>
          {isMicro && <span style={{ display: "inline-block", fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: AC, padding: "2px 8px", borderRadius: 9999, fontFamily: FB, marginBottom: 8 }}>MICRODOSING</span>}
          <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>Review before continuing to health intake</p>

          <div className="tf-fi" style={{ padding: 20, borderRadius: 12, border: `1px solid ${PR}25`, backgroundColor: "hsl(140 30% 97%)", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontFamily: FH, fontSize: 22, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{isBlend ? `${MED_NAMES[pep]} — ${sel.nm}` : MED_NAMES[pep]}</span>
              <div style={{ textAlign: "right" }}><span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>${displayPrice}{isMicro && <span style={{ fontSize: 11, fontWeight: 500 }}>*</span>}</span><span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "hsl(0 0% 50%)", display: "block" }}>per month</span></div>
            </div>
            <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: PR, backgroundColor: `${PR}12`, padding: "3px 10px", borderRadius: 9999, display: "inline-block", marginBottom: 16 }}>{RL[effRt] || "Subcutaneous injection"}</span>

            {isBlend ? (
              <>
                <SR l="Blend" v={sel.nm} />
                <SR l="Components" v={sel.comp} />
                <SR l="Primary goal" v={gl} />
                <SR l="Your BMI" v={String(bmi)} />
              </>
            ) : (
              <>
                <SR l="Concentration" v={sel.conc} />
                <SR l="Volume" v={sel.vol} />
                {sel.mg > 0 && <SR l="Total medication" v={`${sel.mg} mg`} />}
                {sel.comp && <SR l="Components" v={sel.comp} />}
                <SR l="Primary goal" v={gl} />
                <SR l="Your BMI" v={String(bmi)} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0 0" }}>
                  <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 45%)" }}>Supply</span>
                  <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{sel.note}</span>
                </div>
              </>
            )}
          </div>

          {isBMI && <DoseMeter bmi={bmi} selMg={null} isBMI effRt={effRt} />}
          {!isBMI && !isBlend && <DoseMeter bmi={bmi} selMg={sel.mg} isBMI={false} effRt={effRt} />}
          <ProtoCard proto={proto} route={effRt} />

          {cycleText && <div style={{ marginBottom: 16, padding: "12px 16px", borderRadius: 12, border: "1px solid hsl(0 0% 90%)", backgroundColor: "hsl(0 0% 98%)" }}><p style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: "hsl(0 0% 40%)", lineHeight: "17px", margin: 0 }}>{cycleText}</p></div>}

          <p style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 55%)", lineHeight: "18px", marginBottom: isMicro ? 4 : 24 }}>
            Dosing starts conservatively and adjusts based on tolerance and clinical response. Your provider will confirm the final protocol based on your complete health history.
          </p>
          {isMicro && <p style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 50%)", lineHeight: "15px", marginBottom: 24 }}>*Billed every 2 months</p>}
        </main>
        <LF onClick={save} disabled={false} label="Continue to health intake" />
      </div>)}

    </div>
    </div>
  );
}