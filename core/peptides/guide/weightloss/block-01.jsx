import { useState, useRef, useEffect } from "react";

/* ═══════════════════════════════════════════════
   TOKENS
   ═══════════════════════════════════════════════ */
const PR = "#245C3A";
const PD = "#1a4d2e";
const TL = "#16625F";
const FH = "'DM Serif Display', Georgia, serif";
const FB = "'DM Sans', system-ui, sans-serif";

/* ═══════════════════════════════════════════════
   NAV SECTIONS
   ═══════════════════════════════════════════════ */
const SECTIONS = [
  { id: "pain", label: "Why Diets Fail" },
  { id: "solution", label: "What Works" },
  { id: "explore", label: "Explore" },
  { id: "trust", label: "Why Athos" },
];

/* ═══════════════════════════════════════════════
   GLP-1 COMPOUNDS
   ═══════════════════════════════════════════════ */
const GLP_COMPOUNDS = {
  sema: {
    eyebrow: "PROVEN  |  GLP-1 INJECTABLE",
    name: "Semaglutide",
    headline: "The Most Studied\nWeight Loss Compound.",
    desc: "This compounded GLP-1 injectable works by reducing your appetite, slowing digestion, and helping your body manage blood sugar — the same proven pathway behind the most prescribed weight loss treatments in the world.",
    tag: "GLP-1",
    receptors: [{ name: "GLP-1", label: "Appetite + Digestion + Blood Sugar" }],
    strip: [
      { label: "Reduced Hunger", sub: "GLP-1" },
      { label: "Slower Digestion", sub: "GLP-1" },
      { label: "Steadier Blood Sugar", sub: "GLP-1" },
    ],
    benefits: [
      { title: "Most Clinically Studied", desc: "Over 10 years of clinical evidence. The standard other compounds are measured against." },
      { title: "Once a Week", desc: "A single injection each week. Stays active for approximately 7 days." },
      { title: "15–17% Average Weight Loss", desc: "Clinically proven weight reduction at 68 weeks." },
      { title: "Widest Format Options", desc: "Injectable, oral tablet, sublingual troche, and liquid suspension." },
    ],
    comparison: {
      headers: ["GLP-1", "Dual-Action", "Triple-Action"],
      highlight: 0,
      rows: [
        ["1 (GLP-1)", "2", "3"],
        ["15–17%", "20.2%", "28.7%"],
        ["68 weeks", "72 weeks", "68 weeks"],
        ["Weekly", "Weekly", "Weekly"],
        ["10+", "3+", "Phase 3"],
      ],
      labels: ["Pathways", "Avg. weight loss", "Trial duration", "Dosing", "Years of data"],
    },
    timeline: [
      { wk: "Weeks 1–4", pct: "1–3%", note: "Dose gradually increases. Appetite noticeably decreases." },
      { wk: "Weeks 4–12", pct: "4–7%", note: "Steady weight loss begins. Cravings reduce significantly." },
      { wk: "Weeks 12–24", pct: "8–12%", note: "Noticeable change. Clothes fit differently." },
      { wk: "Weeks 24–68", pct: "12–17%", note: "Peak results. Blood markers typically improve." },
    ],
  },
  tirz: {
    eyebrow: "ADVANCED  |  DUAL-ACTION INJECTABLE",
    name: "Tirzepatide",
    headline: "Two Hormones.\nOne Weekly Dose.",
    desc: "This compounded dual-action injectable mimics two hormones at once — GLP-1 and GIP — to reduce cravings, slow digestion, and improve how your body handles blood sugar. 47% greater weight loss than semaglutide in head-to-head trials.",
    tag: "GLP-1 + GIP",
    receptors: [{ name: "GLP-1", label: "Appetite + Digestion" }, { name: "GIP", label: "Insulin + Fat" }],
    strip: [
      { label: "Reduces Cravings", sub: "GLP-1 + GIP" },
      { label: "Slows Digestion", sub: "GLP-1" },
      { label: "Blood Sugar Control", sub: "GLP-1 + GIP" },
    ],
    benefits: [
      { title: "Dual-Action Formula", desc: "Targets both GLP-1 and GIP — working together for stronger results than either pathway alone." },
      { title: "Once a Week", desc: "A single injection each week. Peaks at 48 hours, active for ~5 days." },
      { title: "20.2% Average Weight Loss", desc: "SURMOUNT-5 head-to-head trial. Published in the New England Journal of Medicine, 2025." },
      { title: "Cardiovascular Benefits", desc: "Improvements in blood pressure, triglycerides, LDL cholesterol, and A1c reductions up to 2.7%." },
    ],
    comparison: {
      headers: ["Dual-Action", "GLP-1", "Triple-Action"],
      highlight: 0,
      rows: [
        ["2 (GLP-1 + GIP)", "1", "3"],
        ["20.2%", "15–17%", "28.7%"],
        ["72 weeks", "68 weeks", "68 weeks"],
        ["Weekly", "Weekly", "Weekly"],
        ["3+", "10+", "Phase 3"],
      ],
      labels: ["Pathways", "Avg. weight loss", "Trial duration", "Dosing", "Years of data"],
    },
    timeline: [
      { wk: "Weeks 1–4", pct: "2–4%", note: "Dose titrates up. Appetite decreases. Mild GI side effects common and temporary." },
      { wk: "Weeks 4–12", pct: "5–9%", note: "Food noise quiets significantly. Energy often improves." },
      { wk: "Weeks 12–24", pct: "10–15%", note: "Significant change. Cholesterol and BP markers improve." },
      { wk: "Weeks 24–72", pct: "16–20%", note: "Dual-action sustains progress through typical plateaus." },
    ],
  },
  reta: {
    eyebrow: "NEWEST  |  TRIPLE-ACTION INJECTABLE",
    name: "Retatrutide",
    headline: "Three Hormones.\nOne Weekly Dose.",
    desc: "The first compound that also increases resting calorie burn — targeting GLP-1, GIP, and Glucagon pathways simultaneously. Average loss of ~71 lbs in Phase 3 trials with 86% liver fat reduction.",
    tag: "GLP-1 + GIP + GCG",
    receptors: [{ name: "GLP-1", label: "Appetite" }, { name: "GIP", label: "Insulin + Fat" }, { name: "GCG", label: "Calorie Burn" }],
    strip: [
      { label: "Appetite Control", sub: "GLP-1" },
      { label: "Fat & Insulin", sub: "GIP" },
      { label: "Calorie Burn", sub: "Glucagon" },
    ],
    benefits: [
      { title: "Triple-Action Formula", desc: "The only compound that targets all three metabolic pathways — appetite, fat processing, and calorie burn." },
      { title: "Once a Week", desc: "A single injection each week. Stays active for approximately 6 days." },
      { title: "28.7% Average Weight Loss", desc: "TRIUMPH-4 Phase 3 trial. The highest weight reduction recorded for any compound." },
      { title: "86% Liver Fat Reduction", desc: "Many participants cleared excess liver fat entirely." },
    ],
    comparison: {
      headers: ["Triple-Action", "GLP-1", "Dual-Action"],
      highlight: 0,
      rows: [
        ["3 (GLP-1+GIP+GCG)", "1", "2"],
        ["28.7%", "15–17%", "20.2%"],
        ["68 weeks", "68 weeks", "72 weeks"],
        ["Weekly", "Weekly", "Weekly"],
        ["Phase 3", "10+", "3+"],
      ],
      labels: ["Pathways", "Avg. weight loss", "Trial duration", "Dosing", "Years of data"],
    },
    timeline: [
      { wk: "Weeks 1–4", pct: "2–4%", note: "Dose titrates. Appetite drops noticeably." },
      { wk: "Weeks 4–12", pct: "6–10%", note: "Metabolic burn kicks in. Energy often improves." },
      { wk: "Weeks 12–24", pct: "12–18%", note: "Significant results. Liver markers improve." },
      { wk: "Weeks 24–68", pct: "20–29%", note: "Peak results. Glucagon pathway pushes past plateaus." },
    ],
  },
};

/* ═══════════════════════════════════════════════
   MOTS-c BLENDS
   ═══════════════════════════════════════════════ */
const BLEND_COMPOUNDS = {
  adonix: {
    eyebrow: "INJECTABLE  |  PEPTIDE BLEND",
    name: "Adonix",
    headline: "Metabolic Acceleration\n+ Fat Loss.",
    desc: "MOTS-c activates AMPK — the same metabolic switch triggered by exercise — while Tesamorelin, Ipamorelin, and AOD-9604 mobilize stubborn fat and protect lean muscle. One injection, daily AM fasted.",
    tag: "MOTS-c Blend",
    compounds: ["MOTS-c", "Tesamorelin", "AOD-9604", "Ipamorelin"],
    strip: [
      { label: "AMPK Activation", sub: "MOTS-c" },
      { label: "Fat Mobilization", sub: "GH Secretagogues" },
      { label: "Muscle Protection", sub: "AOD-9604" },
    ],
    benefits: [
      { title: "Exercise Mimetic", desc: "MOTS-c levels increase up to 11.9x in skeletal muscle during exercise. Injectable supplementation activates the same pathway." },
      { title: "100% Bioavailability", desc: "Subcutaneous injection bypasses digestive degradation. Full therapeutic dose reaches target tissue." },
      { title: "No Appetite Suppression", desc: "Works through metabolic activation, not hunger reduction. Fundamentally different from GLP-1." },
      { title: "Lean Body Recomposition", desc: "Burns stored fat while preserving and supporting lean muscle mass." },
    ],
  },
  inferno: {
    eyebrow: "INJECTABLE  |  PEPTIDE BLEND",
    name: "Inferno",
    headline: "Maximum Metabolic\nBurn.",
    desc: "The most aggressive fat-burning blend. MOTS-c and AOD-9604 handle cellular fat oxidation while CJC-1295 and Ipamorelin provide sustained growth hormone release for prolonged fat mobilization.",
    tag: "MOTS-c Blend",
    compounds: ["MOTS-c", "CJC-1295", "AOD-9604", "Ipamorelin"],
    strip: [
      { label: "Fat Oxidation", sub: "MOTS-c + AOD" },
      { label: "Sustained GH", sub: "CJC-1295" },
      { label: "Recovery", sub: "Ipamorelin" },
    ],
    benefits: [
      { title: "Intensive Fat Loss", desc: "Maximum metabolic burn with sustained growth hormone support for prolonged fat mobilization." },
      { title: "CJC-1295 Extended Release", desc: "Provides sustained GH release vs Tesamorelin's pulse — better for patients who plateau." },
      { title: "No Appetite Suppression", desc: "Works through cellular energy expenditure, not hunger signals." },
      { title: "100% Bioavailability", desc: "Single subcutaneous injection. No digestive degradation." },
    ],
  },
  kali: {
    eyebrow: "INJECTABLE  |  PEPTIDE BLEND",
    name: "Kali",
    headline: "Fat Loss\n+ Recovery.",
    desc: "MOTS-c for mitochondrial fat burning, BPC-157 for systemic anti-inflammatory repair, and 5-Amino-1MQ to boost intracellular NAD+. For patients who want aggressive fat loss with GI protection.",
    tag: "MOTS-c Blend",
    compounds: ["MOTS-c", "BPC-157", "5-Amino-1MQ", "Tesamorelin"],
    strip: [
      { label: "Fat Burning", sub: "MOTS-c" },
      { label: "GI Protection", sub: "BPC-157" },
      { label: "NAD+ Boost", sub: "5-Amino-1MQ" },
    ],
    benefits: [
      { title: "Dual Metabolic Attack", desc: "MOTS-c activates AMPK while 5-Amino-1MQ blocks NNMT to boost NAD+ — two angles on metabolic sluggishness." },
      { title: "Built-In GI Protection", desc: "BPC-157 provides systemic anti-inflammatory repair. Ideal if transitioning from GLP-1 or with gut sensitivity." },
      { title: "No Appetite Suppression", desc: "Fat loss through metabolic activation, not hunger reduction." },
      { title: "100% Bioavailability", desc: "Single subcutaneous injection. No digestive degradation." },
    ],
  },
};

/* ═══════════════════════════════════════════════
   ADD-IN EXPLORER (sticky, compact, SVG diagrams)
   ═══════════════════════════════════════════════ */
const ADDIN_DETAILS = {
  b12: {
    label: "B12", color: "#2E7D5B",
    headline: "Prevents energy crash during caloric restriction",
    desc: "GLP-1 patients eat less — and absorb less B12 from food. Deficiency causes fatigue, brain fog, and weakness. B12 keeps red blood cell production and nerve function stable while you lose weight.",
    diagram: () => (
      <svg width="220" height="80" viewBox="0 0 220 80" fill="none" style={{ display: "block", margin: "0 auto" }}>
        <circle cx="30" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="30" y="43" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="700">GLP-1</text>
        <path d="M46 40L74 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M70 36L76 40L70 44" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="94" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" fill="rgba(36,92,58,0.06)" />
        <text x="94" y="43" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="700">B12</text>
        <path d="M110 40L138 28" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M110 40L138 52" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <text x="158" y="24" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.7">Energy</text>
        <text x="158" y="34" fill="#888" fontSize="7">Red blood cells</text>
        <text x="158" y="52" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.7">Nerve function</text>
        <text x="158" y="62" fill="#888" fontSize="7">Mental clarity</text>
      </svg>
    ),
  },
  b6: {
    label: "B6", color: "#2E7D5B",
    headline: "Blocks nausea at the brain's nausea center",
    desc: "Vitamin B6 has been used for decades to treat nausea — from pregnancy to chemotherapy. It targets the same neural pathway that GLP-1 medications trigger, reducing the #1 reason patients quit early.",
    diagram: () => (
      <svg width="220" height="80" viewBox="0 0 220 80" fill="none" style={{ display: "block", margin: "0 auto" }}>
        <circle cx="30" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="30" y="43" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="700">GLP-1</text>
        <path d="M46 40L74 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M70 36L76 40L70 44" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="94" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" fill="rgba(36,92,58,0.06)" />
        <text x="94" y="43" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="700">B6</text>
        <path d="M110 40L140 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M136 36L142 40L136 44" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="168" cy="40" r="22" stroke="#245C3A" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.4" />
        <text x="168" y="37" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="600">Nausea</text>
        <text x="168" y="46" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="600">center</text>
        <path d="M155 28L181 52" stroke="#c44" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        <path d="M181 28L155 52" stroke="#c44" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  nad: {
    label: "NAD+", color: "#2E7D5B",
    headline: "Supercharges the cellular engine burning your fat",
    desc: "NAD+ is the cofactor your mitochondria need to convert stored fat into usable energy. Levels decline ~50% by age 50. Adding it directly to your compound supports the metabolic machinery doing the actual work.",
    diagram: () => (
      <svg width="220" height="80" viewBox="0 0 220 80" fill="none" style={{ display: "block", margin: "0 auto" }}>
        <circle cx="30" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="30" y="43" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="700">GLP-1</text>
        <path d="M46 40L74 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M70 36L76 40L70 44" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="94" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" fill="rgba(36,92,58,0.06)" />
        <text x="94" y="43" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="700">NAD+</text>
        <path d="M110 40L140 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M136 36L142 40L136 44" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="178" cy="40" rx="28" ry="16" stroke="#245C3A" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.5" />
        <ellipse cx="178" cy="40" rx="14" ry="8" stroke="#245C3A" strokeWidth="1" opacity="0.3" />
        <text x="178" y="37" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="600" opacity="0.6">Mito</text>
        <text x="178" y="46" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="700">ATP</text>
      </svg>
    ),
  },
  glycine: {
    label: "Glycine", color: "#2E7D5B",
    headline: "Protects lean muscle and improves sleep during weight loss",
    desc: "Glycine activates anabolic pathways that prevent muscle wasting — the #1 side effect patients don't see coming. It also lowers core body temperature before bed, improving deep sleep when your body needs recovery most.",
    diagram: () => (
      <svg width="220" height="80" viewBox="0 0 220 80" fill="none" style={{ display: "block", margin: "0 auto" }}>
        <circle cx="30" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="30" y="43" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="700">GLP-1</text>
        <path d="M46 40L68 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M64 36L70 40L64 44" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="90" cy="40" r="16" stroke="#245C3A" strokeWidth="1.5" fill="rgba(36,92,58,0.06)" />
        <text x="90" y="37" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="700">Gly-</text>
        <text x="90" y="46" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="700">cine</text>
        <path d="M106 34L138 20" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M106 46L138 60" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" />
        <text x="156" y="16" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.7">Muscle</text>
        <text x="156" y="26" fill="#888" fontSize="7">Anabolic pathways</text>
        <text x="156" y="56" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.7">Sleep</text>
        <text x="156" y="66" fill="#888" fontSize="7">Core temp regulation</text>
      </svg>
    ),
  },
  none: {
    label: "None", color: "#999",
    headline: "Clean compound, no extras",
    desc: "The medication alone — no additional vitamins or amino acids. Some patients prefer the simplest formulation. Your provider can always add one later if needed.",
    diagram: () => (
      <svg width="220" height="80" viewBox="0 0 220 80" fill="none" style={{ display: "block", margin: "0 auto" }}>
        <circle cx="110" cy="40" r="24" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="110" y="37" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="700">GLP-1</text>
        <text x="110" y="48" textAnchor="middle" fill="#888" fontSize="7">Pure compound</text>
      </svg>
    ),
  },
};

const ADDIN_KEYS = ["b12", "b6", "nad", "glycine", "none"];

const AddInExplorer = ({ activeAddIn, onSelect }) => {
  const active = ADDIN_DETAILS[activeAddIn];
  const Diagram = active?.diagram;
  return (
    <div style={{ maxWidth: 720, margin: "0 auto 40px", padding: "0 20px" }}>
      <div style={{ position: "sticky", top: 120, zIndex: 30, borderRadius: 12, backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)", padding: activeAddIn ? "20px 24px 32px" : "20px 24px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transition: "padding 0.2s" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: PR, letterSpacing: "0.05em", marginBottom: 12, fontFamily: FB, textAlign: "center" }}>YOUR ADD-IN</p>
        <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap", marginBottom: activeAddIn ? 20 : 0 }}>
          {ADDIN_KEYS.map((k) => {
            const on = activeAddIn === k;
            return (
              <button key={k} onClick={() => onSelect(on ? null : k)} style={{
                padding: "8px 14px", borderRadius: 9999, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: on ? 600 : 450, fontFamily: FB, transition: "all 0.2s",
                backgroundColor: on ? PR : "rgba(36,92,58,0.06)", color: on ? "#FFF" : "#555",
              }}>{ADDIN_DETAILS[k].label}</button>
            );
          })}
        </div>
        {active && activeAddIn && Diagram && (
          <div style={{ overflow: "hidden", padding: "0 8px 16px" }}>
            <Diagram />
            <p style={{ fontSize: 13, fontWeight: 600, color: PD, fontFamily: FB, textAlign: "center", marginTop: 14, marginBottom: 8 }}>{active.headline}</p>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: "#666", fontFamily: FB, textAlign: "center", maxWidth: 400, margin: "0 auto", paddingBottom: 4 }}>{active.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   SESSION
   ═══════════════════════════════════════════════ */
const routeToTeleform = () => {
  try {
    const ex = JSON.parse(sessionStorage.getItem("peptide_guide") || "{}");
    sessionStorage.setItem("peptide_guide", JSON.stringify({ ...ex, selectedCategory: "weightloss", timestamp: Date.now() }));
  } catch (e) { /* silent */ }
  window.location.href = "/getpeptides/weight-loss";
};

/* ═══════════════════════════════════════════════
   ABSORPTION DIAGRAM (parameterized)
   ═══════════════════════════════════════════════ */
const AbsorptionDiagram = ({ receptors, isBlend }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0", width: "100%" }}>
    <p style={{ fontSize: 12, fontWeight: 600, color: PR, letterSpacing: "0.04em", marginBottom: 16, fontFamily: FB, textAlign: "center" }}>
      {isBlend ? "DAILY INJECTION → AMPK ACTIVATION" : `ONE INJECTION, ${receptors.length} TARGET${receptors.length > 1 ? "S" : ""}`}
    </p>
    <svg width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" /><path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    <div style={{ padding: "10px 24px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)", margin: "8px 0" }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: PR, fontFamily: FB, textAlign: "center" }}>{isBlend ? "Skeletal Muscle" : "Bloodstream"}</p>
      <p style={{ fontSize: 11, color: "#888", fontFamily: FB, textAlign: "center", marginTop: 2 }}>{isBlend ? "Primary target tissue" : `Active for ~${receptors.length <= 2 ? "7" : "6"} days`}</p>
    </div>
    <svg width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" /><path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
      {(isBlend ? [{ name: "AMPK", label: "Activated" }] : receptors).map((r, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ display: "block" }}>
            <circle cx="32" cy="32" r="30" stroke={PR} strokeWidth="1.8" strokeDasharray="4 3" />
            <text x="32" y="35" textAnchor="middle" fill={PR} fontSize="10" fontWeight="700">{r.name}</text>
          </svg>
          <p style={{ fontSize: 11, color: "#888", fontFamily: FB, marginTop: 4 }}>{r.label}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   PRODUCT BLOCK (2-column, matches docs 4-8)
   ═══════════════════════════════════════════════ */
const ProductBlock = ({ data, heroSrc, isBlend }) => {
  const [subTab, setSubTab] = useState("overview");
  const subTabs = [{ key: "overview", label: "Overview" }, { key: "how", label: "How It Works" }, ...(data.timeline ? [{ key: "timeline", label: "Results Timeline" }] : [])];

  return (
    <div className="py-12 md:py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="text-sm tracking-wide mb-4" style={{ color: TL, fontWeight: 500, letterSpacing: "0.05em" }}>{data.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl mb-5 leading-tight whitespace-pre-line" style={{ color: PD, fontFamily: FH }}>{data.headline}</h2>
            <p className="text-base mb-8" style={{ color: "#4A4A4A", lineHeight: 1.7, maxWidth: 520 }}>{data.desc}</p>

            {/* Mechanism strip */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {data.strip.map((s, i) => (
                <div key={i} className="rounded-lg p-3 flex flex-col items-center text-center" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                  <p className="text-xs" style={{ color: PD, fontWeight: 600 }}>{s.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#999" }}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={PR} strokeWidth="1.5" /><path d="M9 12L11 14L15 10" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 2 }}>{b.title}</p>
                    <p className="text-sm" style={{ color: "#666", lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Blend compounds (MOTS-c only) */}
            {isBlend && data.compounds && (
              <div className="flex flex-wrap gap-2 mb-4">
                {data.compounds.map((c, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontWeight: 500 }}>{c}</span>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>
            <div className="flex gap-2 mb-6">
              {subTabs.map((s) => (
                <button key={s.key} onClick={() => setSubTab(s.key)} className="text-xs px-4 py-2 rounded-full transition-all duration-200"
                  style={{ backgroundColor: subTab === s.key ? PR : "rgba(36,92,58,0.08)", color: subTab === s.key ? "#fff" : PR, fontWeight: 500, border: "none", cursor: "pointer" }}>{s.label}</button>
              ))}
            </div>

            {subTab === "overview" && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(36,92,58,0.1)" }}>
                <img src={heroSrc} alt={data.name} className="w-full h-auto object-cover" style={{ maxHeight: 280 }} />
                {data.comparison && (
                  <div className="p-6" style={{ backgroundColor: "#FAFAF8" }}>
                    <h3 className="text-lg mb-4" style={{ color: PD, fontWeight: 600 }}>How It Compares</h3>
                    <div style={{ display: "grid", gridTemplateColumns: `1.2fr repeat(${data.comparison.headers.length}, 1fr)`, padding: "10px 12px", backgroundColor: "rgba(36,92,58,0.06)", borderRadius: "6px 6px 0 0" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: PR }}></span>
                      {data.comparison.headers.map((h, i) => (
                        <span key={i} style={{ fontSize: 12, fontWeight: i === data.comparison.highlight ? 700 : 500, color: PR, textAlign: "center", opacity: i === data.comparison.highlight ? 1 : 0.6 }}>{h}</span>
                      ))}
                    </div>
                    {data.comparison.labels.map((label, i) => (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: `1.2fr repeat(${data.comparison.headers.length}, 1fr)`, padding: "10px 12px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                        <span style={{ fontSize: 12, fontWeight: 500, color: PD }}>{label}</span>
                        {data.comparison.rows[i].map((v, j) => (
                          <span key={j} style={{ fontSize: 12, color: j === data.comparison.highlight ? PR : "#999", fontWeight: j === data.comparison.highlight ? 600 : 400, textAlign: "center" }}>{v}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {subTab === "how" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: PD, fontWeight: 600 }}>How Your Body Uses It</h3>
                <p className="text-sm mb-4" style={{ color: "#666", lineHeight: 1.6 }}>{isBlend
                  ? "After subcutaneous injection, each compound enters your bloodstream at 100% bioavailability. MOTS-c targets skeletal muscle within 1–2 hours, activating AMPK."
                  : `After injection, the medication enters your bloodstream and stays active for about a week. It targets ${data.receptors.length === 1 ? "one pathway" : data.receptors.length + " pathways"} that control key functions in your body.`
                }</p>
                <AbsorptionDiagram receptors={data.receptors || []} isBlend={isBlend} />
                <div className="mt-6 space-y-3">
                  {data.strip.map((s, i) => (
                    <div key={i} className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                      <p className="text-sm mb-1" style={{ color: PR, fontWeight: 600 }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "#666" }}>Driven by {s.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {subTab === "timeline" && data.timeline && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: PD, fontWeight: 600 }}>What to Expect</h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: 1.6 }}>Based on clinical trial data. Individual results vary.</p>
                <div className="space-y-3">
                  {data.timeline.map((m, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-16 text-center rounded-md py-1" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                        <span className="text-xs" style={{ color: PR, fontWeight: 600 }}>{m.pct}</span>
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: PD, fontWeight: 600 }}>{m.wk}</p>
                        <p className="text-xs" style={{ color: "#666", lineHeight: 1.5 }}>{m.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export default function Block() {
  const [activeNav, setActiveNav] = useState("pain");
  const [path, setPath] = useState(null); // "glp1" | "mots"
  const [glpCompound, setGlpCompound] = useState("sema");
  const [blendCompound, setBlendCompound] = useState("adonix");
  const [activeAddIn, setActiveAddIn] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const navRef = useRef(null);

  /* ── Section refs (no getElementById) ──── */
  const sectionRefs = { pain: useRef(null), solution: useRef(null), explore: useRef(null), trust: useRef(null) };

  const pageTitle = "Weight Loss Guide";
  const pageSubtitle = "What works, why it works, and what to expect — from your first week to your goal weight.";
  const heroImage = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Weight loss guide" };

  const glpKeys = Object.keys(GLP_COMPOUNDS);
  const blendKeys = Object.keys(BLEND_COMPOUNDS);
  const activeGlp = GLP_COMPOUNDS[glpCompound];
  const activeBlend = BLEND_COMPOUNDS[blendCompound];

  /* ── Scroll-spy via refs ───────────────── */
  useEffect(() => {
    const entries = Object.entries(sectionRefs);
    const obs = new IntersectionObserver((observed) => {
      observed.forEach((e) => {
        if (e.isIntersecting) {
          const match = entries.find(([, ref]) => ref.current === e.target);
          if (match) setActiveNav(match[0]);
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    entries.forEach(([, ref]) => { if (ref.current) obs.observe(ref.current); });
    return () => obs.disconnect();
  }, [path]); // re-observe when path changes so explore section gets tracked

  /* ── Pill highlight scroll (horizontal only, no vertical scroll) ── */
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const pill = nav.querySelector(`[data-nav="${activeNav}"]`);
    if (!pill) return;
    const navRect = nav.getBoundingClientRect();
    const pillRect = pill.getBoundingClientRect();
    const offset = pillRect.left - navRect.left - (navRect.width / 2) + (pillRect.width / 2);
    nav.scrollTo({ left: nav.scrollLeft + offset, behavior: "smooth" });
  }, [activeNav]);

  const scrollTo = (id) => {
    const el = sectionRefs[id]?.current;
    if (!el) return; // guard: section not rendered yet
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ── Continue button (reusable) ────────── */
  const ContinueButton = ({ nextId, label }) => (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <button onClick={() => nextId === "teleform" ? routeToTeleform() : scrollTo(nextId)} style={{
        padding: "14px 32px", borderRadius: 10, border: `1.5px solid ${PR}`, backgroundColor: nextId === "teleform" ? PR : "transparent",
        color: nextId === "teleform" ? "#FFF" : PR, fontSize: 15, fontWeight: 500, fontFamily: FB, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s",
      }}>
        {label || "Continue"}
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </button>
    </div>
  );

  /* ── Compound selector (shared) ─────────── */
  const CompoundPills = ({ keys, active, onSelect, data }) => (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 24px" }}>
      <div style={{ display: "flex", gap: 8 }}>
        {keys.map((k) => {
          const on = active === k;
          return (
            <button key={k} onClick={() => onSelect(k)} style={{
              flex: 1, padding: "12px 8px", borderRadius: 12, border: `2px solid ${on ? PR : "rgba(0,0,0,0.06)"}`,
              backgroundColor: on ? "rgba(36,92,58,0.04)" : "#FAFAF8", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontFamily: FB, transition: "all 0.25s",
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: on ? PD : "#666" }}>{data[k].name}</span>
              <span style={{ fontSize: 11, fontWeight: 500, color: on ? PR : "#999" }}>{data[k].tag}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <style>{`
        .wg-nav::-webkit-scrollbar{display:none}
        .wg-nav{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>

      {/* ── HERO ─────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={heroImage.src} alt={heroImage.alt} style={{ width: "100%", height: "auto", minHeight: 300, maxHeight: 460, objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,98,95,0.92) 0%, rgba(22,98,95,0.7) 50%, rgba(22,98,95,0.3) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 40px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12, fontFamily: FB }}>Peptide Wellness Guide</p>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 600, lineHeight: 1.1, color: "#FFF", fontFamily: FH }}>{pageTitle}</h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", marginTop: 16, maxWidth: 520, fontFamily: FB }}>{pageSubtitle}</p>
          </div>
        </div>
      </div>

      {/* ── STICKY NAV ───────────────────────── */}
      <div style={{ position: "sticky", top: 0, zIndex: 40, backgroundColor: "rgba(245,242,237,0.97)", borderBottom: "1px solid rgba(36,92,58,0.08)", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
          <div ref={navRef} className="wg-nav" style={{ display: "flex", gap: 6, overflowX: "auto", padding: "10px 0" }}>
            {SECTIONS.map((s) => {
              const on = activeNav === s.id;
              return (
                <button key={s.id} data-nav={s.id} onClick={() => scrollTo(s.id)} style={{
                  flexShrink: 0, padding: "10px 18px", borderRadius: 9999, border: "none", cursor: "pointer",
                  fontFamily: FB, fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", transition: "all 0.25s",
                  backgroundColor: on ? PR : "rgba(36,92,58,0.06)", color: on ? "#FFF" : PR,
                }}>{s.label}</button>
              );
            })}
          </div>
        </div>
        {/* Path indicator (after fork) */}
        {path && (
          <div style={{ borderTop: "1px solid rgba(36,92,58,0.06)", backgroundColor: "rgba(245,242,237,0.97)" }}>
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "6px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={() => setPath("glp1")} style={{ fontSize: 13, fontWeight: path === "glp1" ? 600 : 400, color: path === "glp1" ? PR : "#aaa", background: "none", border: "none", cursor: "pointer", fontFamily: FB, borderBottom: path === "glp1" ? `2px solid ${PR}` : "2px solid transparent", padding: "8px 4px 6px" }}>GLP-1 Medications</button>
              <button onClick={() => setPath("mots")} style={{ fontSize: 13, fontWeight: path === "mots" ? 600 : 400, color: path === "mots" ? PR : "#aaa", background: "none", border: "none", cursor: "pointer", fontFamily: FB, borderBottom: path === "mots" ? `2px solid ${PR}` : "2px solid transparent", padding: "8px 4px 6px" }}>Peptide Blends</button>
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════
         SECTION 1: WHY DIETS FAIL
         ═══════════════════════════════════════ */}
      <div ref={sectionRefs.pain} style={{ scrollMarginTop: path ? 110 : 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 0" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You've tried. It's not a discipline problem.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>The biology is working against you.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>When you cut calories, your body fights back. Ghrelin spikes. Leptin drops. Your metabolism slows to conserve energy. The longer you restrict, the harder your body works to put the weight back on.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Your energy crashes. Your mood drops. Your sleep suffers. You lose muscle along with fat — and the muscle doesn't come back as easily. The weight you regain is almost entirely fat, stored more stubbornly than before.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 24 }}>This isn't a character flaw. It's a survival mechanism. Your body interprets caloric restriction as starvation and downregulates everything it can to hold onto stored energy.</p>
          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 24 }}>
            <p style={{ fontSize: 28, fontWeight: 600, color: PR, fontFamily: FH, marginBottom: 4 }}>80%</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>of people who lose weight through diet alone regain it within two years.</p>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB }}>The cycle is familiar: restrict, lose, plateau, regain, try again. If this sounds like your experience, the problem was never willpower. It was a missing signal.</p>
          <ContinueButton nextId="solution" label="What actually works" />
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}><div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", margin: "64px 0" }} /></div>

      {/* ═══════════════════════════════════════
         SECTION 2: WHAT WORKS + FORK
         ═══════════════════════════════════════ */}
      <div ref={sectionRefs.solution} style={{ scrollMarginTop: path ? 110 : 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>What if the problem isn't willpower?</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>It's a missing signal.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Your body produces hormones that tell your brain you're full. Some people don't produce enough, or their brain doesn't respond strongly enough. The result is constant low-grade hunger that no amount of discipline can override long-term.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Modern treatments correct these imbalances — either by replacing the missing appetite signal, or by activating your metabolism at the cellular level so your body burns stored fat more efficiently.</p>

          {/* Add-in integration — contextual, not a list */}
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>
            But the medication is only part of the equation. Caloric restriction — even when it's comfortable — still depletes B12 over time, leading to fatigue. It can disrupt sleep, which Glycine helps regulate. It can trigger nausea in the first few weeks, which Vitamin B6 targets directly at the brain's nausea center. And it increases metabolic demand on your cells, which NAD+ supports at the mitochondrial level.
          </p>

          {/* Differentiator seed — more specific now */}
          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 32 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 6 }}>Every Athos prescription includes your choice of add-in — at no extra cost.</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>
              B12 for energy. B6 for nausea. NAD+ for cellular metabolism. Glycine for sleep and muscle preservation. Or no additives at all. Most clinics charge separately for these or don't offer them.
            </p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 28 }}>There are two clinical approaches. One works through appetite. The other works through metabolism.</p>

          {/* FORK */}
          <h3 style={{ fontSize: 20, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 16 }}>What's closer to your goal?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 0 }}>
            {[
              { id: "glp1", title: "I need to lose significant weight", desc: "Appetite suppression and metabolic regulation through GLP-1 medications. 15–29% average weight loss in clinical trials. Available as injection, oral tablet, or sublingual troche." },
              { id: "mots", title: "I want to get leaner and change my body composition", desc: "Metabolic activation through peptide blends. Burns stored fat while preserving lean muscle. No appetite suppression. Injectable only." },
            ].map((opt) => {
              const on = path === opt.id;
              return (
                <div key={opt.id} onClick={() => { setPath(opt.id); setTimeout(() => scrollTo("explore"), 300); }} style={{
                  padding: 20, borderRadius: 12, cursor: "pointer", transition: "all 0.2s",
                  border: `2px solid ${on ? PR : "rgba(0,0,0,0.06)"}`,
                  backgroundColor: on ? "rgba(36,92,58,0.04)" : "#FAFAF8",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${on ? PR : "#ccc"}`, backgroundColor: on ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 }}>
                      {on && <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 600, color: PD, fontFamily: FB }}>{opt.title}</p>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "#666", fontFamily: FB, paddingLeft: 30 }}>{opt.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Oral semaglutide callout — subtle */}
          {path === "glp1" && (
            <p style={{ fontSize: 13, color: "#888", fontFamily: FB, marginTop: 16, paddingLeft: 30 }}>
              Prefer no needles? Semaglutide is also available as an oral tablet or sublingual troche — same compound, no injection required.
            </p>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════
         SECTION 3: EXPLORE (product blocks)
         ═══════════════════════════════════════ */}
      {path && (
        <div ref={sectionRefs.explore} style={{ scrollMarginTop: 110 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 20px 0" }}>
            <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 48 }} />
          </div>

          {/* Compound pills */}
          {path === "glp1" && <CompoundPills keys={glpKeys} active={glpCompound} onSelect={setGlpCompound} data={GLP_COMPOUNDS} />}
          {path === "mots" && <CompoundPills keys={blendKeys} active={blendCompound} onSelect={setBlendCompound} data={BLEND_COMPOUNDS} />}

          {/* Add-in explorer (GLP-1 only, sticky) */}
          {path === "glp1" && <AddInExplorer activeAddIn={activeAddIn} onSelect={setActiveAddIn} />}

          {/* Product block */}
          {path === "glp1" && <ProductBlock key={glpCompound} data={activeGlp} heroSrc={heroImage.src} isBlend={false} />}
          {path === "mots" && <ProductBlock key={blendCompound} data={activeBlend} heroSrc={heroImage.src} isBlend={true} />}

          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
            <ContinueButton nextId="trust" label="Why patients choose Athos" />
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
         SECTION 4: WHY ATHOS
         ═══════════════════════════════════════ */}
      <div ref={sectionRefs.trust} style={{ scrollMarginTop: path ? 110 : 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 80px" }}>
          <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 64 }} />

          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You've done the hard part.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Here's what happens next.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              { title: "Licensed providers in all 50 states", desc: "Every protocol is prescribed after an individual medical evaluation. No templates. No auto-approvals." },
              { title: "503(A) and FDA-registered 503(B) pharmacies", desc: "All medications compounded under full regulatory oversight. No gray-market sourcing." },
              { title: "Add-ins included, not upsold", desc: "B6 to help with nausea. B12 for energy during caloric restriction. NAD+ for mitochondrial support. Glycine for sleep and muscle preservation. Included at no extra cost — you pick the one that fits." },
            ].map((p, i) => (
              <div key={i} style={{ borderRadius: 12, padding: 24, backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 6 }}>{p.title}</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 16 }}>Three steps</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              { n: "1", t: "Free evaluation", d: "Complete a brief medical intake. Takes about 5 minutes." },
              { n: "2", t: "Provider builds your protocol", d: "A licensed provider prescribes the right compound, dose, and add-in." },
              { n: "3", t: "Medication ships to your door", d: "Compounded by a licensed pharmacy. Delivered with everything you need." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FB }}>{s.n}</span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 2 }}>{s.t}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "#666", fontFamily: FB }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 0 }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 8 }}>You don't need another diet.</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: FB }}>You need the signal your body isn't sending.</p>
          </div>

          {/* Final CTA */}
          <ContinueButton nextId="teleform" label="Start your free evaluation" />
        </div>
      </div>

      {/* ── OTHER GUIDES ─────────────────────── */}
      <div style={{ backgroundColor: "#f5f2ed" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: PR, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8, fontFamily: FB }}>Explore other guides</p>
          <p style={{ fontSize: 15, color: "#888", fontFamily: FB, marginBottom: 24 }}>Weight loss isn't the only thing peptides can do.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Recovery", sub: "BPC-157 · TB-500 · Valkyr", href: "/peptides/guide/recovery" },
              { label: "Longevity", sub: "NAD+ · GHK-Cu · Epitalon", href: "/peptides/guide/longevity" },
              { label: "Fitness", sub: "Adonix · Inferno · Kali", href: "/peptides/guide/fitness" },
              { label: "Cognitive", sub: "Semax · Selank · Lucid", href: "/peptides/guide/cognitive" },
            ].map((g, i) => (
              <a key={i} href={g.href} style={{
                display: "block", padding: 20, borderRadius: 12, backgroundColor: "#FAFAF8",
                border: "1px solid rgba(36,92,58,0.08)", textDecoration: "none", transition: "border-color 0.2s",
              }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 4 }}>{g.label}</p>
                <p style={{ fontSize: 12, color: "#999", fontFamily: FB, lineHeight: 1.4 }}>{g.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER ───────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(36,92,58,0.08)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px 24px" }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(36,92,58,0.4)", marginBottom: 12, fontFamily: FB }}>Platform Disclaimer</p>
          <p style={{ fontSize: 11, lineHeight: 1.6, color: "#999", fontFamily: FB }}>Athos is a telehealth platform providing administrative and operational support to licensed physicians. Athos does not provide medical services, employ healthcare providers, compound medications, or influence clinical decisions. All clinical services are delivered by an independent Medical Services Organization. Compounded medications are not FDA-approved. Individual results vary. Payment does not guarantee prescribing. All treatment decisions are made by the prescribing provider. This page is for informational purposes only.</p>
        </div>
      </div>

      {/* ── CHAT BUBBLE CTA ──────────────────── */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}
        onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {/* Tooltip */}
        <div style={{
          position: "absolute", bottom: "calc(100% + 10px)", right: 0, padding: "8px 16px", borderRadius: 10,
          backgroundColor: "#FFF", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", border: "1px solid rgba(36,92,58,0.1)",
          whiteSpace: "nowrap", opacity: showTooltip ? 1 : 0, transform: showTooltip ? "translateY(0)" : "translateY(4px)",
          transition: "all 0.2s", pointerEvents: "none",
        }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: PD, fontFamily: FB }}>Free Evaluation</p>
        </div>
        {/* Bubble */}
        <button onClick={routeToTeleform} style={{
          width: 56, height: 56, borderRadius: "50%", backgroundColor: PR, border: "none", cursor: "pointer",
          boxShadow: "0 4px 16px rgba(36,92,58,0.3)", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s",
        }}
          onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.95)"; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}