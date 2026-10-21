import { useState, useCallback } from "react";

export default function TeleformCategorySelector() {
  const [step, setStep] = useState(1);
  const [displayedStep, setDisplayedStep] = useState(1);
  const [animState, setAnimState] = useState("idle");
  const [direction, setDirection] = useState("forward");

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedPrimary, setSelectedPrimary] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const brandName = "Athos";
  const ACCENT = "rgb(36, 92, 58)";
  const GRADIENT = "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)";

  const programs = [
    {
      id: "weight_loss",
      label: "Weight Loss",
      description: "GLP-1 medications — semaglutide, tirzepatide, retatrutide",
      gradient: "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)",
      gradientColors: { from: "#67D9CB", to: "#2FA7C8" },
      stat: {
        number: "83%",
        body: "of patients report",
        highlight: "that GLP-1 medication helped them lose weight",
        detail: "Semaglutide, tirzepatide, and retatrutide can support your metabolism and make it easier to manage sustained weight loss.",
        branchUrl: "/getpeptides/weight-loss",
      },
    },
    {
      id: "recovery",
      label: "Recovery",
      description: "Peptide therapy — BPC-157, TB-500",
      gradient: "linear-gradient(to right, #3DBDD1, #16625F)",
      gradientColors: { from: "#3DBDD1", to: "#16625F" },
      stat: {
        number: "91%",
        body: "of patients report",
        highlight: "that BPC-157 and TB-500 accelerate recovery",
        detail: "Targeted peptide protocols can reduce healing time and support tissue repair at the cellular level.",
        branchUrl: "/getpeptides/recovery",
      },
    },
    {
      id: "longevity",
      label: "Longevity",
      description: "Cellular optimization — NAD+, MOTS-c",
      gradient: "linear-gradient(to right, #558E8D, #16625F)",
      gradientColors: { from: "#558E8D", to: "#16625F" },
      stat: {
        number: "92%",
        body: "of patients report",
        highlight: "that NAD+ and MOTS-c protocols improved how they feel",
        detail: "Longevity peptides can restore energy, improve cellular health, and support long-term vitality.",
        branchUrl: "/getpeptides/longevity",
      },
    },
    { id: "build_protocol", label: "Help me build a protocol", description: "Answer a few questions and we will match you" },
  ];

  const goals = [
    { id: "lose_weight", label: "Lose weight" },
    { id: "recover_faster", label: "Recover faster" },
    { id: "energy_longevity", label: "Boost energy and longevity" },
    { id: "focus_cognition", label: "Sharpen focus and cognition" },
  ];

  const primaryOptions = {
    lose_weight: [
      { id: "semaglutide", label: "Proven and simple — just getting started", description: "GLP-1 that curbs appetite and regulates blood sugar", route: "/getpeptides/weight-loss" },
      { id: "tirzepatide", label: "Stronger dual-action results", description: "Dual GIP/GLP-1 receptor agonist — strongest clinical weight loss results", route: "/getpeptides/weight-loss" },
      { id: "retatrutide", label: "Most aggressive GLP-1 protocol", description: "Triple agonist targeting GLP-1, GIP, and glucagon receptors", route: "/getpeptides/weight-loss" },
      { id: "mots_c_fat", label: "Peptide-driven fat burning", description: "MOTS-c blends activate fat oxidation at the cellular level — no GLP-1", route: "/getpeptides/longevity" },
    ],
    recover_faster: [
      { id: "wolverine", label: "Injury or post-surgical healing", description: "BPC-157 + TB-500 dual-peptide recovery blend", route: "/getpeptides/recovery" },
      { id: "bpc157", label: "Chronic joint or tissue inflammation", description: "BPC-157 — systemic healing and GI support", route: "/getpeptides/recovery" },
      { id: "tb500", label: "General tissue repair and recovery", description: "TB-500 — cell migration and anti-inflammatory repair", route: "/getpeptides/recovery" },
    ],
    energy_longevity: [
      { id: "nad", label: "Cellular energy and anti-aging", description: "NAD+ — mitochondrial support and cellular restoration", route: "/getpeptides/longevity" },
      { id: "mots_c", label: "Metabolic acceleration", description: "MOTS-c blends — AMPK activation and fat oxidation", route: "/getpeptides/longevity" },
      { id: "empress", label: "Hormonal balance and vitality", description: "Empress blend — metabolic, hormonal, collagen, and libido support for women", route: "/getpeptides/longevity" },
    ],
    focus_cognition: [
      { id: "lucid", label: "Cognitive performance and clarity", description: "Lucid blend — Semax, Selank, MOTS-c, and Tesofensine for focus", route: "/getpeptides/longevity" },
    ],
  };

  const primaryStats = {
    semaglutide: { number: "83%", body: "of patients report", highlight: "that GLP-1 medication helped them lose weight", detail: "Semaglutide can support your metabolism and make it easier to manage sustained weight loss.", gradient: "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)", gradientColors: { from: "#67D9CB", to: "#2FA7C8" } },
    tirzepatide: { number: "87%", body: "of patients report", highlight: "stronger results with dual-agonist therapy", detail: "Tirzepatide targets both GLP-1 and GIP receptors for stronger appetite control and metabolic improvement.", gradient: "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)", gradientColors: { from: "#67D9CB", to: "#2FA7C8" } },
    retatrutide: { number: "89%", body: "of patients report", highlight: "accelerated fat loss with triple-receptor activation", detail: "Retatrutide is the most aggressive GLP-1 protocol, targeting three receptor pathways simultaneously.", gradient: "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)", gradientColors: { from: "#67D9CB", to: "#2FA7C8" } },
    mots_c_fat: { number: "90%", body: "of patients report", highlight: "measurable fat loss with MOTS-c peptide protocols", detail: "MOTS-c activates AMPK pathways to accelerate fat oxidation — a GLP-1 alternative for metabolic fat loss.", gradient: "linear-gradient(to right, #558E8D, #16625F)", gradientColors: { from: "#558E8D", to: "#16625F" } },
    wolverine: { number: "91%", body: "of patients report", highlight: "that BPC-157 and TB-500 accelerate recovery", detail: "The Wolverine blend combines two peptides for comprehensive tissue repair and systemic healing.", gradient: "linear-gradient(to right, #3DBDD1, #16625F)", gradientColors: { from: "#3DBDD1", to: "#16625F" } },
    bpc157: { number: "88%", body: "of patients report", highlight: "reduced inflammation within 30 days", detail: "BPC-157 supports gut healing, reduces systemic inflammation, and accelerates tissue repair.", gradient: "linear-gradient(to right, #3DBDD1, #16625F)", gradientColors: { from: "#3DBDD1", to: "#16625F" } },
    tb500: { number: "86%", body: "of patients report", highlight: "improved tissue repair and mobility", detail: "TB-500 promotes cell migration and reduces chronic inflammation for systemic recovery.", gradient: "linear-gradient(to right, #3DBDD1, #16625F)", gradientColors: { from: "#3DBDD1", to: "#16625F" } },
    nad: { number: "92%", body: "of patients report", highlight: "improved energy and cellular health", detail: "NAD+ restores mitochondrial function, supports DNA repair, and improves sustained energy.", gradient: "linear-gradient(to right, #558E8D, #16625F)", gradientColors: { from: "#558E8D", to: "#16625F" } },
    mots_c: { number: "90%", body: "of patients report", highlight: "measurable metabolic improvement within 60 days", detail: "MOTS-c activates AMPK pathways to accelerate fat oxidation and metabolic efficiency.", gradient: "linear-gradient(to right, #558E8D, #16625F)", gradientColors: { from: "#558E8D", to: "#16625F" } },
    empress: { number: "87%", body: "of women report", highlight: "improved vitality and hormonal balance within 60 days", detail: "The Empress blend combines MOTS-c, BPC-157, GHK-Cu, and Kisspeptin for comprehensive women's wellness.", gradient: "linear-gradient(to right, #558E8D, #16625F)", gradientColors: { from: "#558E8D", to: "#16625F" } },
    lucid: { number: "89%", body: "of patients report", highlight: "improved focus and mental clarity", detail: "The Lucid blend combines Semax, Selank, MOTS-c, and Tesofensine for peak cognitive performance.", gradient: "linear-gradient(to right, #558E8D, #16625F)", gradientColors: { from: "#558E8D", to: "#16625F" } },
  };

  const addOnOptions = {
    semaglutide: [
      { id: "mots_addon", label: "MOTS-c Blend", description: "AMPK activation and fat oxidation acceleration", tags: ["Fat Burn", "Metabolic"], concern: "Accelerate fat burning" },
      { id: "nad_addon", label: "NAD+", description: "Mitochondrial and cellular energy support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "bpc_oral_addon", label: "BPC-157 Oral", description: "GI protection and gut healing", tags: ["GI Protection"], concern: "Nausea or GI sensitivity" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery", "Joints"], concern: "Joint pain or injury" },
    ],
    tirzepatide: [
      { id: "mots_addon", label: "MOTS-c Blend", description: "AMPK activation and fat oxidation acceleration", tags: ["Fat Burn", "Metabolic"], concern: "Accelerate fat burning" },
      { id: "nad_addon", label: "NAD+", description: "Mitochondrial and cellular energy support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "bpc_oral_addon", label: "BPC-157 Oral", description: "GI protection and gut healing", tags: ["GI Protection"], concern: "Nausea or GI sensitivity" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery", "Joints"], concern: "Joint pain or injury" },
    ],
    retatrutide: [
      { id: "mots_addon", label: "MOTS-c Blend", description: "AMPK activation and fat oxidation acceleration", tags: ["Fat Burn", "Metabolic"], concern: "Accelerate fat burning" },
      { id: "nad_addon", label: "NAD+", description: "Mitochondrial and cellular energy support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "bpc_oral_addon", label: "BPC-157 Oral", description: "GI protection and gut healing", tags: ["GI Protection"], concern: "Nausea or GI sensitivity" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery", "Joints"], concern: "Joint pain or injury" },
    ],
    mots_c_fat: [
      { id: "glp1_addon", label: "Semaglutide", description: "GLP-1 for appetite control and steady weight loss", tags: ["Weight Loss", "Appetite"], concern: "Also want appetite suppression" },
      { id: "nad_addon", label: "NAD+", description: "Mitochondrial and cellular energy support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "bpc_oral_addon", label: "BPC-157 Oral", description: "GI protection and gut healing", tags: ["GI Protection"], concern: "Digestive sensitivity" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery", "Joints"], concern: "Joint pain or injury" },
    ],
    wolverine: [
      { id: "glp1_addon", label: "Semaglutide", description: "GLP-1 for appetite control and weight loss", tags: ["Weight Loss"], concern: "Also want to lose weight" },
      { id: "nad_addon", label: "NAD+", description: "Cellular energy and mitochondrial support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "mots_addon", label: "MOTS-c Blend", description: "Metabolic acceleration and fat oxidation", tags: ["Metabolic", "Fat Burn"], concern: "Accelerate metabolism" },
    ],
    bpc157: [
      { id: "glp1_addon", label: "Semaglutide", description: "GLP-1 for appetite control and weight loss", tags: ["Weight Loss"], concern: "Also want to lose weight" },
      { id: "nad_addon", label: "NAD+", description: "Cellular energy and mitochondrial support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "mots_addon", label: "MOTS-c Blend", description: "Metabolic acceleration and fat oxidation", tags: ["Metabolic", "Fat Burn"], concern: "Accelerate metabolism" },
    ],
    tb500: [
      { id: "glp1_addon", label: "Semaglutide", description: "GLP-1 for appetite control and weight loss", tags: ["Weight Loss"], concern: "Also want to lose weight" },
      { id: "nad_addon", label: "NAD+", description: "Cellular energy and mitochondrial support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "mots_addon", label: "MOTS-c Blend", description: "Metabolic acceleration and fat oxidation", tags: ["Metabolic", "Fat Burn"], concern: "Accelerate metabolism" },
    ],
    nad: [
      { id: "glp1_addon", label: "Tirzepatide", description: "Dual GIP/GLP-1 receptor agonist for weight loss", tags: ["Weight Loss"], concern: "Also want to lose weight" },
      { id: "mots_addon", label: "MOTS-c Blend", description: "Dual AMPK activation for metabolic synergy", tags: ["Metabolic", "Fat Burn"], concern: "Accelerate metabolism" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery"], concern: "Recovery or injury needs" },
    ],
    mots_c: [
      { id: "glp1_addon", label: "Tirzepatide", description: "Dual GIP/GLP-1 receptor agonist for weight loss", tags: ["Weight Loss"], concern: "Also want to lose weight" },
      { id: "nad_addon", label: "NAD+", description: "Dual AMPK and mitochondrial support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery"], concern: "Recovery or injury needs" },
    ],
    empress: [
      { id: "glp1_addon", label: "Tirzepatide", description: "Dual GIP/GLP-1 receptor agonist for weight loss", tags: ["Weight Loss"], concern: "Also want to lose weight" },
      { id: "nad_addon", label: "NAD+", description: "Cellular energy and mitochondrial support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery"], concern: "Recovery or injury needs" },
    ],
    lucid: [
      { id: "nad_addon", label: "NAD+", description: "Cellular energy and mitochondrial support", tags: ["Energy", "Longevity"], concern: "Low energy or fatigue" },
      { id: "glp1_addon", label: "Tirzepatide", description: "Dual GIP/GLP-1 receptor agonist for weight loss", tags: ["Weight Loss"], concern: "Also want to lose weight" },
      { id: "wolverine_addon", label: "Wolverine Blend", description: "BPC-157 + TB-500 for tissue repair", tags: ["Recovery"], concern: "Recovery or injury needs" },
    ],
  };

  const navigateTo = useCallback((newStep, dir) => {
    if (animState !== "idle") return;
    setDirection(dir);
    setAnimState("exit");
    setTimeout(() => {
      setDisplayedStep(newStep);
      setStep(newStep);
      setTimeout(() => {
        setAnimState("enter");
        setTimeout(() => setAnimState("idle"), 400);
      }, 50);
    }, 300);
  }, [animState]);

  const goForward = (s) => navigateTo(s, "forward");
  const goBackward = (s) => navigateTo(s, "backward");

  const getTransitionClass = () => {
    if (animState === "enter") return direction === "forward" ? "step-enter-forward" : "step-enter-backward";
    if (animState === "exit") return direction === "forward" ? "step-exit-forward" : "step-exit-backward";
    return "step-idle";
  };

  const isBuilderFlow = selectedProgram === "build_protocol";
  const activeProgram = programs.find((p) => p.id === selectedProgram);
  const activeStat = isBuilderFlow ? (selectedPrimary ? primaryStats[selectedPrimary] : null) : activeProgram?.stat || null;
  const activeGradient = activeStat?.gradient || activeProgram?.gradient || GRADIENT;
  const activeColors = activeStat?.gradientColors || activeProgram?.gradientColors || { from: "#67D9CB", to: "#2FA7C8" };
  const activePrimaryOption = selectedGoal && selectedPrimary ? (primaryOptions[selectedGoal] || []).find((p) => p.id === selectedPrimary) : null;
  const activeAddOns = selectedPrimary ? addOnOptions[selectedPrimary] || [] : [];
  const checkedAddOns = activeAddOns.filter((a) => selectedAddOns.includes(a.id));

  const getProgressPercent = () => {
    if (!isBuilderFlow) return displayedStep === 1 ? 0 : 50;
    if (displayedStep === 10) return 0;
    if (displayedStep === 11) return 33;
    if (displayedStep === 13) return 66;
    return 0;
  };

  const toggleAddOn = (id) => {
    if (id === "none") { setSelectedAddOns([]); return; }
    setSelectedAddOns((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : prev.filter((a) => a !== "none").concat(id));
  };

  const writeSessionAndRoute = () => {
    const primary = activePrimaryOption;
    if (!primary) return;
    const payload = {
      primary: { id: primary.id, label: primary.label, description: primary.description, route: primary.route, variant: primary.variant || null },
      addOns: checkedAddOns.map((a) => ({ id: a.id, label: a.label, description: a.description, tags: a.tags, selected: true })),
      goal: selectedGoal,
      timestamp: Date.now(),
    };
    try { sessionStorage.setItem("athos_protocol", JSON.stringify(payload)); } catch (e) { /* silent */ }
    window.location.href = primary.route;
  };

  const handleStep1Continue = () => {
    if (selectedProgram === "build_protocol") { goForward(10); } else { goForward(2); }
  };

  const handleGoalContinue = () => {
    if (selectedGoal === "focus_cognition") {
      setSelectedPrimary("lucid");
      goForward(12);
    } else { goForward(11); }
  };

  const handlePrimaryContinue = () => goForward(12);
  const handleStatContinue = () => goForward(13);

  const handleAddOnContinue = () => {
    if (checkedAddOns.length > 0) { goForward(14); } else { writeSessionAndRoute(); }
  };

  const Arrow = () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>);
  const BackIcon = () => (<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>);
  const CheckIcon = ({ color = "white", size = 14 }) => (<svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>);

  const LightHeader = ({ showBack, onBack, progress }) => (
    <header style={{ position: "sticky", top: 0, zIndex: 10, maxWidth: 520, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF", borderBottom: "1px solid hsl(0 0% 90%)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>
        {showBack && (
          <button onClick={onBack} style={{ position: "absolute", left: 20, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid hsl(0 0% 90%)", backgroundColor: "transparent", color: "hsl(0 0% 8.5%)", fontSize: 14, fontWeight: 500, cursor: "pointer", lineHeight: 1, fontFamily: "'DM Sans', sans-serif" }}>
            <BackIcon /> Back
          </button>
        )}
        <span style={{ fontSize: 26, fontWeight: 600, color: ACCENT, letterSpacing: "-0.02em", fontFamily: "'DM Serif Display', serif" }}>{brandName}</span>
      </div>
      {progress !== undefined && (
        <div style={{ padding: "0 20px 16px" }}>
          <div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", borderRadius: 9999, backgroundColor: ACCENT, transition: "width 0.4s ease" }} />
          </div>
        </div>
      )}
    </header>
  );

  const DarkHeader = ({ onBack }) => (
    <header className="stat-fade stat-fade-back" style={{ position: "relative", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", width: "100%", maxWidth: 520, margin: "0 auto" }}>
      <div style={{ position: "absolute", left: 20 }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent", color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", lineHeight: 1, fontFamily: "'DM Sans', sans-serif" }}>
          <BackIcon /> Back
        </button>
      </div>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "#FFF", fontFamily: "'DM Serif Display', serif" }}>{brandName}</span>
    </header>
  );

  const AnimatedBg = () => (
    <div className="bg-glow-fade" style={{ position: "absolute", inset: 0, height: "100%", width: "100%", overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", pointerEvents: "none", filter: "blur(60px)" }}>
        <div style={{ position: "absolute", transform: "translate(-50%, -50%) scale(0.75)", width: "100vw", height: "100vh", minWidth: 1000, borderRadius: 9999, overflow: "hidden" }}>
          <div style={{ position: "absolute", height: "100%", width: "100%", transformOrigin: "center", background: `conic-gradient(from 0deg, ${activeColors.from}, #000, ${activeColors.to}, #000, ${activeColors.from}, #000, ${activeColors.to})`, willChange: "transform", animation: "gradientSpin 12s linear infinite" }} />
        </div>
      </div>
    </div>
  );

  const LightFooter = ({ onClick, disabled }) => (
    <footer style={{ position: "sticky", bottom: 0, maxWidth: 520, width: "100%", margin: "auto auto 0", padding: "16px 20px", backgroundColor: "#FFFFFF", borderTop: "1px solid hsl(0 0% 90%)" }}>
      <button onClick={onClick} disabled={disabled} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: "24px", padding: 16, borderRadius: 12, border: "none", backgroundColor: !disabled ? ACCENT : "hsl(0 0% 96.5%)", color: !disabled ? "#FFFFFF" : "hsl(0 0% 45%)", cursor: !disabled ? "pointer" : "not-allowed", transition: "background-color 0.3s, color 0.3s" }}>
        Continue <Arrow />
      </button>
    </footer>
  );

  const DarkCTA = ({ onClick, className, label }) => (
    <button className={className} onClick={onClick} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, padding: 16, borderRadius: 12, border: "none", backgroundColor: ACCENT, color: "#FFF", cursor: "pointer", marginTop: "auto" }}>
      {label || "Continue"} <Arrow />
    </button>
  );

  const SelectCard = ({ selected, onClick, label, description }) => (
    <li>
      <label onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${selected ? ACCENT : "hsl(0 0% 90%)"}`, backgroundColor: selected ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", color: "hsl(0 0% 8.5%)", cursor: "pointer", transition: "all 0.2s" }}>
        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${selected ? ACCENT : "hsl(0 0% 90%)"}`, backgroundColor: selected ? ACCENT : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
          {selected && <CheckIcon />}
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4, fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
          {description && <span style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.4, color: "hsl(0 0% 45%)", fontFamily: "'DM Sans', sans-serif" }}>{description}</span>}
        </div>
      </label>
    </li>
  );

  const MultiSelectCard = ({ checked, onClick, label }) => (
    <li>
      <label onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${checked ? ACCENT : "hsl(0 0% 90%)"}`, backgroundColor: checked ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", color: "hsl(0 0% 8.5%)", cursor: "pointer", transition: "all 0.2s" }}>
        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 6, border: `2px solid ${checked ? ACCENT : "hsl(0 0% 90%)"}`, backgroundColor: checked ? ACCENT : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
          {checked && <CheckIcon />}
        </span>
        <span style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4, fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
      </label>
    </li>
  );

  const AddOnCard = ({ item, checked, onToggle, readOnly }) => (
    <div onClick={readOnly ? undefined : onToggle} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${checked ? ACCENT : "rgba(255,255,255,0.12)"}`, backgroundColor: checked ? "rgba(36,92,58,0.15)" : "rgba(255,255,255,0.05)", cursor: readOnly ? "default" : "pointer", transition: "all 0.2s" }}>
      <span style={{ flexShrink: 0, width: 22, height: 22, marginTop: 2, borderRadius: 6, border: `2px solid ${checked ? ACCENT : "rgba(255,255,255,0.25)"}`, backgroundColor: checked ? ACCENT : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
        {checked && <CheckIcon size={12} />}
      </span>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontSize: 17, fontWeight: 500, color: "#FFF", fontFamily: "'DM Sans', sans-serif" }}>{item.label}</span>
        <span style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>{item.description}</span>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {item.tags.map((t) => (
            <span key={t} style={{ fontSize: 12, fontWeight: 500, padding: "3px 10px", borderRadius: 9999, backgroundColor: "rgba(255,255,255,0.08)", color: activeColors.from, fontFamily: "'DM Sans', sans-serif" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const LightScreen = ({ showBack, onBack, progress, title, subtitle, children, footerClick, footerDisabled }) => (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <LightHeader showBack={showBack} onBack={onBack} progress={progress} />
      <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
        <h1 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", color: "hsl(0 0% 8.5%)", marginBottom: 6, fontFamily: "'DM Serif Display', serif" }}>{title}</h1>
        <p style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>{subtitle}</p>
        {children}
      </main>
      <LightFooter onClick={footerClick} disabled={footerDisabled} />
    </div>
  );

  const OptionList = ({ children }) => (
    <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>{children}</ul>
  );

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes slideInFromRight{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
        @keyframes slideOutToLeft{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}
        @keyframes slideInFromLeft{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}
        @keyframes slideOutToRight{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}
        .step-enter-forward{animation:slideInFromRight .4s cubic-bezier(.16,1,.3,1) forwards}
        .step-exit-forward{animation:slideOutToLeft .3s cubic-bezier(.7,0,.84,0) forwards}
        .step-enter-backward{animation:slideInFromLeft .4s cubic-bezier(.16,1,.3,1) forwards}
        .step-exit-backward{animation:slideOutToRight .3s cubic-bezier(.7,0,.84,0) forwards}
        .step-idle{opacity:1;transform:translateX(0)}
        @keyframes gradientSpin{from{transform:translateX(-50%) translateY(-50%) scale(4) rotate(0deg)}to{transform:translateX(-50%) translateY(-50%) scale(4) rotate(360deg)}}
        @keyframes contentFadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .stat-fade{opacity:0;animation:contentFadeUp .8s cubic-bezier(.16,1,.3,1) forwards}
        .stat-fade-back{animation-delay:.1s}.stat-fade-1{animation-delay:.3s}.stat-fade-2{animation-delay:.5s}.stat-fade-3{animation-delay:.7s}.stat-fade-4{animation-delay:.9s}
        @keyframes bgFadeIn{from{opacity:0}to{opacity:.5}}
        .bg-glow-fade{opacity:0;animation:bgFadeIn 1.5s cubic-bezier(.16,1,.3,1) .2s forwards}
      `}</style>

      <div className={getTransitionClass()} style={{ width: "100%", minHeight: "100vh" }}>

        {displayedStep === 1 && (
          <LightScreen showBack={false} progress={getProgressPercent()} title="What is your primary health goal?" subtitle="This helps us match you with the right protocol" footerClick={handleStep1Continue} footerDisabled={!selectedProgram}>
            <OptionList>
              {programs.map((p) => (
                <SelectCard key={p.id} selected={selectedProgram === p.id} onClick={() => { setSelectedProgram(p.id); setSelectedGoal(null); setSelectedPrimary(null); setSelectedAddOns([]); }} label={p.label} description={p.description} />
              ))}
            </OptionList>
          </LightScreen>
        )}

        {displayedStep === 2 && !isBuilderFlow && activeProgram?.stat && (
          <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#000" }}>
            <AnimatedBg />
            <DarkHeader onBack={() => goBackward(1)} />
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px 40px", width: "100%", maxWidth: 520, margin: "0 auto" }}>
              <h1 className="stat-fade stat-fade-1" style={{ fontSize: 84, fontWeight: 600, lineHeight: "78px", letterSpacing: "-0.04em", marginLeft: -2, marginBottom: 12, backgroundImage: activeGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontFamily: "'DM Serif Display', serif" }}>{activeProgram.stat.number}</h1>
              <p className="stat-fade stat-fade-2" style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", color: "#FFF", marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
                {activeProgram.stat.body}{" "}<span style={{ backgroundImage: activeGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>{activeProgram.stat.highlight}</span>
              </p>
              <p className="stat-fade stat-fade-3" style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.5)", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>{activeProgram.stat.detail}</p>
              <DarkCTA className="stat-fade stat-fade-4" onClick={() => { window.location.href = activeProgram.stat.branchUrl; }} label="Get Started" />
            </div>
          </div>
        )}

        {displayedStep === 10 && (
          <LightScreen showBack onBack={() => goBackward(1)} progress={getProgressPercent()} title="What do you want to accomplish?" subtitle="Select the goal that matters most right now" footerClick={handleGoalContinue} footerDisabled={!selectedGoal}>
            <OptionList>
              {goals.map((g) => (
                <SelectCard key={g.id} selected={selectedGoal === g.id} onClick={() => { setSelectedGoal(g.id); setSelectedPrimary(null); setSelectedAddOns([]); }} label={g.label} />
              ))}
            </OptionList>
          </LightScreen>
        )}

        {displayedStep === 11 && selectedGoal && (
          <LightScreen showBack onBack={() => goBackward(10)} progress={getProgressPercent()} title="Which approach fits you best?" subtitle="We will match you with the right protocol" footerClick={handlePrimaryContinue} footerDisabled={!selectedPrimary}>
            <OptionList>
              {(primaryOptions[selectedGoal] || []).map((p) => (
                <SelectCard key={p.id} selected={selectedPrimary === p.id} onClick={() => { setSelectedPrimary(p.id); setSelectedAddOns([]); }} label={p.label} description={p.description} />
              ))}
            </OptionList>
          </LightScreen>
        )}

        {displayedStep === 12 && activeStat && (
          <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#000" }}>
            <AnimatedBg />
            <DarkHeader onBack={() => { if (selectedGoal === "focus_cognition") { goBackward(10); } else { goBackward(11); } }} />
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px 40px", width: "100%", maxWidth: 520, margin: "0 auto" }}>
              <h1 className="stat-fade stat-fade-1" style={{ fontSize: 84, fontWeight: 600, lineHeight: "78px", letterSpacing: "-0.04em", marginLeft: -2, marginBottom: 12, backgroundImage: activeGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontFamily: "'DM Serif Display', serif" }}>{activeStat.number}</h1>
              <p className="stat-fade stat-fade-2" style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", color: "#FFF", marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
                {activeStat.body}{" "}<span style={{ backgroundImage: activeGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>{activeStat.highlight}</span>
              </p>
              <p className="stat-fade stat-fade-3" style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.5)", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>{activeStat.detail}</p>
              <DarkCTA className="stat-fade stat-fade-4" onClick={handleStatContinue} label="Continue" />
            </div>
          </div>
        )}

        {displayedStep === 13 && selectedPrimary && (
          <LightScreen showBack onBack={() => goBackward(12)} progress={getProgressPercent()} title="Do you have any secondary concerns?" subtitle="Select all that apply, or skip to continue" footerClick={handleAddOnContinue} footerDisabled={false}>
            <OptionList>
              <MultiSelectCard checked={selectedAddOns.length === 0} onClick={() => setSelectedAddOns([])} label="None — keep it simple" />
              {activeAddOns.map((a) => (
                <MultiSelectCard key={a.id} checked={selectedAddOns.includes(a.id)} onClick={() => toggleAddOn(a.id)} label={a.concern} />
              ))}
            </OptionList>
          </LightScreen>
        )}

        {displayedStep === 14 && activePrimaryOption && checkedAddOns.length > 0 && (
          <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#000" }}>
            <AnimatedBg />
            <DarkHeader onBack={() => goBackward(13)} />
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px 40px", width: "100%", maxWidth: 520, margin: "0 auto" }}>
              <h1 className="stat-fade stat-fade-1" style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", color: "#FFF", marginBottom: 4, fontFamily: "'DM Serif Display', serif" }}>Your protocol</h1>
              <p className="stat-fade stat-fade-1" style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.5)", marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>
                You will proceed to your <span style={{ color: "#FFF", fontWeight: 500 }}>{activePrimaryOption.label.split("—")[0].trim()}</span> intake
              </p>

              <div className="stat-fade stat-fade-2" style={{ padding: 16, borderRadius: 12, border: `2px solid ${ACCENT}`, backgroundColor: "rgba(36,92,58,0.15)", marginBottom: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: activeColors.from, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>Primary</div>
                <div style={{ fontSize: 17, fontWeight: 500, color: "#FFF", marginBottom: 4, fontFamily: "'DM Sans', sans-serif" }}>{activePrimaryOption.label}</div>
                <div style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>{activePrimaryOption.description}</div>
              </div>

              <div className="stat-fade stat-fade-3" style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)", marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>Select add-ons at checkout</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {checkedAddOns.map((a) => (
                    <AddOnCard key={a.id} item={a} checked={true} readOnly />
                  ))}
                </div>
              </div>

              <DarkCTA className="stat-fade stat-fade-4" onClick={writeSessionAndRoute} label="Get Started" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}