import { useState, useCallback } from "react";

export default function TeleformCategorySelector() {
  const [step, setStep] = useState(1);
  const [displayedStep, setDisplayedStep] = useState(1);
  const [animState, setAnimState] = useState("idle");
  const [direction, setDirection] = useState("forward");

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAudience, setSelectedAudience] = useState(null);
  const [sliderPatients, setSliderPatients] = useState(100);

  const brandName = "Athos";
  const ACCENT = "rgb(36, 92, 58)";

  const categories = [
    {
      id: "influencer",
      label: "Influencer / Content Creator",
      description: "Social media, YouTube, podcasts, newsletters",
      gradient: "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)",
      gradientColors: { from: "#67D9CB", to: "#2FA7C8" },
      stat: {
        rate: 0.20,
        rateLabel: "20%",
        perPatient: "$30",
        body: "/mo earning potential with",
        contextLine: "from your audience",
        detail: "Your audience already trusts your recommendations. A single Story or Reel drives sign-ups from followers actively looking for clinical-grade solutions. One post keeps paying every month.",
        sliderMin: 50,
        sliderMax: 2000,
        sliderStep: 50,
        sliderDefault: 500,
      },
    },
    {
      id: "gym_owner",
      label: "Gym / Studio Owner",
      description: "CrossFit, Pilates, yoga, boutique fitness",
      gradient: "linear-gradient(to right, #3DBDD1, #16625F)",
      gradientColors: { from: "#3DBDD1", to: "#16625F" },
      stat: {
        rate: 0.30,
        rateLabel: "30%",
        perPatient: "$45",
        body: "/mo earning potential with",
        contextLine: "from your member base",
        detail: "Your members already invest in their health monthly. A flyer at the front desk and a QR code in the locker room turn existing conversations into recurring revenue.",
        sliderMin: 10,
        sliderMax: 500,
        sliderStep: 10,
        sliderDefault: 150,
      },
    },
    {
      id: "chiropractor",
      label: "Chiropractor / Clinical Practice",
      description: "Chiropractic, PT, functional medicine",
      gradient: "linear-gradient(to right, #558E8D, #16625F)",
      gradientColors: { from: "#558E8D", to: "#16625F" },
      stat: {
        rate: 0.30,
        rateLabel: "30%",
        perPatient: "$45",
        body: "/mo earning potential with",
        contextLine: "from existing patient relationships",
        detail: "Your patients come to you for pain, recovery, and mobility. When you mention peptide therapy can complement their adjustments, they listen. Clinical trust drives the highest conversion.",
        sliderMin: 10,
        sliderMax: 300,
        sliderStep: 10,
        sliderDefault: 100,
      },
    },
    {
      id: "personal_trainer",
      label: "Personal Trainer / Coach",
      description: "1:1 coaching, online training, bootcamps",
      gradient: "linear-gradient(to right, #67D9CB, #558E8D)",
      gradientColors: { from: "#67D9CB", to: "#558E8D" },
      stat: {
        rate: 0.20,
        rateLabel: "20%",
        perPatient: "$30",
        body: "/mo earning potential with",
        contextLine: "across your client base",
        detail: "You know your clients goals, injuries, and frustrations better than anyone. 1:1 trust produces the highest conversion rate of any partner type. A trainer with 20 clients can realistically convert 10+ in 60 days.",
        sliderMin: 5,
        sliderMax: 200,
        sliderStep: 5,
        sliderDefault: 100,
      },
    },
    {
      id: "med_spa",
      label: "Med Spa / Wellness Center",
      description: "Aesthetics, IV therapy, wellness clinics",
      gradient: "linear-gradient(to right, #3DBDD1, #558E8D)",
      gradientColors: { from: "#3DBDD1", to: "#558E8D" },
      stat: {
        rate: 0.30,
        rateLabel: "30%",
        perPatient: "$45",
        body: "/mo earning potential with",
        contextLine: "from existing wellness clientele",
        detail: "Your clients already pay for aesthetic and wellness treatments monthly. Peptide therapy, weight loss, and hormone optimization are natural extensions of what they already buy from you.",
        sliderMin: 20,
        sliderMax: 500,
        sliderStep: 20,
        sliderDefault: 500,
      },
    },
    {
      id: "find_fit",
      label: "Help me find my fit",
      description: "Answer a few questions and we will match you",
    },
  ];

  const audienceTypes = [
    { id: "social_audience", label: "I have a social media following", matchTo: "influencer" },
    { id: "physical_location", label: "I have a physical location with members or clients", matchTo: "gym_owner" },
    { id: "clinical_patients", label: "I have existing patients in a clinical setting", matchTo: "chiropractor" },
    { id: "one_on_one", label: "I train or coach clients 1:1", matchTo: "personal_trainer" },
    { id: "wellness_clients", label: "I run a wellness or aesthetics practice", matchTo: "med_spa" },
  ];

  const formatMoney = (val) => {
    if (val >= 1000000) return "$" + (val / 1000000).toFixed(1) + "M";
    return "$" + val.toLocaleString();
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

  const isBuilderFlow = selectedCategory === "find_fit";
  const activeCategory = categories.find((c) => c.id === selectedCategory);

  const getMatchedCategory = () => {
    if (!selectedAudience) return null;
    const match = audienceTypes.find((a) => a.id === selectedAudience);
    if (!match) return null;
    return categories.find((c) => c.id === match.matchTo);
  };

  const matchedCategory = getMatchedCategory();
  const resolvedCategory = isBuilderFlow ? matchedCategory : activeCategory;
  const activeStat = resolvedCategory?.stat;
  const activeGradient = resolvedCategory?.gradient || "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)";
  const activeColors = resolvedCategory?.gradientColors || { from: "#67D9CB", to: "#2FA7C8" };
  const dynamicEarnings = activeStat ? formatMoney(sliderPatients * 150 * activeStat.rate) : "$0";

  const getProgressPercent = () => {
    if (!isBuilderFlow) return displayedStep === 1 ? 0 : 50;
    if (displayedStep === 10) return 33;
    if (displayedStep === 12) return 66;
    return 0;
  };

  const storeAndFinish = () => {
    const cat = resolvedCategory;
    if (!cat) return;
    const payload = {
      category: cat.id,
      label: cat.label,
      flow: isBuilderFlow ? "builder" : "direct",
      audience: selectedAudience || null,
      patients: sliderPatients,
      timestamp: Date.now(),
    };
    try { sessionStorage.setItem("athos_partner", JSON.stringify(payload)); } catch (e) { /* silent */ }
    window.location.href = "/partners/intake";
  };

  const handleStep1Continue = () => {
    if (selectedCategory === "find_fit") {
      goForward(10);
    } else {
      if (activeCategory?.stat) setSliderPatients(activeCategory.stat.sliderDefault);
      goForward(2);
    }
  };

  const handleAudienceContinue = () => {
    if (matchedCategory?.stat) setSliderPatients(matchedCategory.stat.sliderDefault);
    goForward(12);
  };

  const showStatScreen = (displayedStep === 2 && !isBuilderFlow && activeCategory?.stat) || (displayedStep === 12 && matchedCategory?.stat);
  const statCat = displayedStep === 2 ? activeCategory : matchedCategory;
  const statBackStep = displayedStep === 2 ? 1 : 10;

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      <style>{[
        "*{box-sizing:border-box;margin:0;padding:0}",
        "@keyframes slideInFromRight{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}",
        "@keyframes slideOutToLeft{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}",
        "@keyframes slideInFromLeft{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}",
        "@keyframes slideOutToRight{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}",
        ".step-enter-forward{animation:slideInFromRight .4s cubic-bezier(.16,1,.3,1) forwards}",
        ".step-exit-forward{animation:slideOutToLeft .3s cubic-bezier(.7,0,.84,0) forwards}",
        ".step-enter-backward{animation:slideInFromLeft .4s cubic-bezier(.16,1,.3,1) forwards}",
        ".step-exit-backward{animation:slideOutToRight .3s cubic-bezier(.7,0,.84,0) forwards}",
        ".step-idle{opacity:1;transform:translateX(0)}",
        "@keyframes gradientSpin{from{transform:translateX(-50%) translateY(-50%) scale(4) rotate(0deg)}to{transform:translateX(-50%) translateY(-50%) scale(4) rotate(360deg)}}",
        "@keyframes contentFadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}",
        ".stat-fade{opacity:0;animation:contentFadeUp .8s cubic-bezier(.16,1,.3,1) forwards}",
        ".stat-fade-back{animation-delay:.1s}.stat-fade-1{animation-delay:.3s}.stat-fade-2{animation-delay:.5s}.stat-fade-3{animation-delay:.7s}.stat-fade-4{animation-delay:.9s}",
        "@keyframes bgFadeIn{from{opacity:0}to{opacity:.5}}",
        ".bg-glow-fade{opacity:0;animation:bgFadeIn 1.5s cubic-bezier(.16,1,.3,1) .2s forwards}",
        "input[type=range]{height:6px;border-radius:3px;-webkit-appearance:none;appearance:none;background:rgba(255,255,255,0.12);outline:none}",
        "input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#FFF;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.3)}",
        "input[type=range]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#FFF;cursor:pointer;border:none;box-shadow:0 2px 8px rgba(0,0,0,0.3)}",
      ].join("")}</style>

      <div className={getTransitionClass()} style={{ width: "100%", minHeight: "100vh" }}>

        {displayedStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
            <header style={{ position: "sticky", top: 0, zIndex: 10, maxWidth: 520, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF", borderBottom: "1px solid hsl(0 0% 90%)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>
                <span style={{ fontSize: 26, fontWeight: 600, color: ACCENT, letterSpacing: "-0.02em", fontFamily: "'DM Serif Display', serif" }}>{brandName}</span>
              </div>
              <div style={{ padding: "0 20px 16px" }}>
                <div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}>
                  <div style={{ width: getProgressPercent() + "%", height: "100%", borderRadius: 9999, backgroundColor: ACCENT, transition: "width 0.4s ease" }} />
                </div>
              </div>
            </header>
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", color: "hsl(0 0% 8.5%)", marginBottom: 6, fontFamily: "'DM Serif Display', serif" }}>What type of partner are you?</h1>
              <p style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>This helps us tailor your onboarding and earning projections</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {categories.map((c) => (
                  <li key={c.id}>
                    <label onClick={() => { setSelectedCategory(c.id); setSelectedAudience(null); }} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: "2px solid " + (selectedCategory === c.id ? ACCENT : "hsl(0 0% 90%)"), backgroundColor: selectedCategory === c.id ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", color: "hsl(0 0% 8.5%)", cursor: "pointer", transition: "all 0.2s" }}>
                      <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: "2px solid " + (selectedCategory === c.id ? ACCENT : "hsl(0 0% 90%)"), backgroundColor: selectedCategory === c.id ? ACCENT : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                        {selectedCategory === c.id && <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4, fontFamily: "'DM Sans', sans-serif" }}>{c.label}</span>
                        {c.description && <span style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.4, color: "hsl(0 0% 45%)", fontFamily: "'DM Sans', sans-serif" }}>{c.description}</span>}
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </main>
            <footer style={{ position: "sticky", bottom: 0, maxWidth: 520, width: "100%", margin: "auto auto 0", padding: "16px 20px", backgroundColor: "#FFFFFF", borderTop: "1px solid hsl(0 0% 90%)" }}>
              <button onClick={handleStep1Continue} disabled={!selectedCategory} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: "24px", padding: 16, borderRadius: 12, border: "none", backgroundColor: selectedCategory ? ACCENT : "hsl(0 0% 96.5%)", color: selectedCategory ? "#FFFFFF" : "hsl(0 0% 45%)", cursor: selectedCategory ? "pointer" : "not-allowed", transition: "background-color 0.3s, color 0.3s" }}>
                Continue <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </footer>
          </div>
        )}

        {showStatScreen && statCat && (
          <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#000" }}>
            {/* Animated background */}
            <div className="bg-glow-fade" style={{ position: "absolute", inset: 0, height: "100%", width: "100%", overflow: "hidden", pointerEvents: "none" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", pointerEvents: "none", filter: "blur(60px)" }}>
                <div style={{ position: "absolute", transform: "translate(-50%, -50%) scale(0.75)", width: "100vw", height: "100vh", minWidth: 1000, borderRadius: 9999, overflow: "hidden" }}>
                  <div style={{ position: "absolute", height: "100%", width: "100%", transformOrigin: "center", background: "conic-gradient(from 0deg, " + activeColors.from + ", #000, " + activeColors.to + ", #000, " + activeColors.from + ", #000, " + activeColors.to + ")", willChange: "transform", animation: "gradientSpin 12s linear infinite" }} />
                </div>
              </div>
            </div>

            {/* Dark header */}
            <header className="stat-fade stat-fade-back" style={{ position: "relative", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", width: "100%", maxWidth: 520, margin: "0 auto" }}>
              <div style={{ position: "absolute", left: 20 }}>
                <button onClick={() => goBackward(statBackStep)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent", color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", lineHeight: 1, fontFamily: "'DM Sans', sans-serif" }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg> Back
                </button>
              </div>
              <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "#FFF", fontFamily: "'DM Serif Display', serif" }}>{brandName}</span>
            </header>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px 40px", width: "100%", maxWidth: 520, margin: "0 auto" }}>
              <h1 className="stat-fade stat-fade-1" style={{ fontSize: "clamp(48px, 10vw, 84px)", fontWeight: 600, lineHeight: "78px", letterSpacing: "-0.04em", marginLeft: -2, marginBottom: 12, backgroundImage: activeGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontFamily: "'DM Serif Display', serif" }}>{dynamicEarnings}</h1>
              <p className="stat-fade stat-fade-2" style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", color: "#FFF", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
                {statCat.stat.body}{" "}<span style={{ backgroundImage: activeGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>{sliderPatients.toLocaleString()} active patients</span>{" "}{statCat.stat.contextLine}
              </p>
              <p className="stat-fade stat-fade-3" style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.5)", marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>{statCat.stat.detail}</p>

              {/* Earnings slider — inlined to prevent remount */}
              <div className="stat-fade stat-fade-4" style={{ width: "100%", borderRadius: 16, padding: "24px 20px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>Active patients</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#FFF", fontFamily: "'DM Sans', sans-serif" }}>{sliderPatients.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={statCat.stat.sliderMin}
                  max={statCat.stat.sliderMax}
                  step={statCat.stat.sliderStep}
                  value={sliderPatients}
                  onChange={(e) => setSliderPatients(Number(e.target.value))}
                  style={{ width: "100%", accentColor: activeColors.from, cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>{statCat.stat.sliderMin}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>{statCat.stat.sliderMax.toLocaleString()}</span>
                </div>
                <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
                  <div style={{ flex: 1, padding: "12px 16px", borderRadius: 10, backgroundColor: "rgba(255,255,255,0.06)" }}>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>Net rev/patient</p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: "#FFF", fontFamily: "'DM Sans', sans-serif" }}>$150/mo</p>
                  </div>
                  <div style={{ flex: 1, padding: "12px 16px", borderRadius: 10, backgroundColor: "rgba(255,255,255,0.06)" }}>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>Your rate</p>
                    <p style={{ fontSize: 16, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", backgroundImage: activeGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>{statCat.stat.rateLabel}</p>
                  </div>
                  <div style={{ flex: 1, padding: "12px 16px", borderRadius: 10, backgroundColor: "rgba(255,255,255,0.06)" }}>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>Per patient</p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: "#FFF", fontFamily: "'DM Sans', sans-serif" }}>{statCat.stat.perPatient}/mo</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 28 }}>
                <button className="stat-fade stat-fade-4" onClick={storeAndFinish} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, padding: 16, borderRadius: 12, border: "none", backgroundColor: ACCENT, color: "#FFF", cursor: "pointer" }}>
                  Become a Partner <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {displayedStep === 10 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
            <header style={{ position: "sticky", top: 0, zIndex: 10, maxWidth: 520, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF", borderBottom: "1px solid hsl(0 0% 90%)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>
                <button onClick={() => goBackward(1)} style={{ position: "absolute", left: 20, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid hsl(0 0% 90%)", backgroundColor: "transparent", color: "hsl(0 0% 8.5%)", fontSize: 14, fontWeight: 500, cursor: "pointer", lineHeight: 1, fontFamily: "'DM Sans', sans-serif" }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg> Back
                </button>
                <span style={{ fontSize: 26, fontWeight: 600, color: ACCENT, letterSpacing: "-0.02em", fontFamily: "'DM Serif Display', serif" }}>{brandName}</span>
              </div>
              <div style={{ padding: "0 20px 16px" }}>
                <div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}>
                  <div style={{ width: getProgressPercent() + "%", height: "100%", borderRadius: 9999, backgroundColor: ACCENT, transition: "width 0.4s ease" }} />
                </div>
              </div>
            </header>
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", color: "hsl(0 0% 8.5%)", marginBottom: 6, fontFamily: "'DM Serif Display', serif" }}>What best describes your audience?</h1>
              <p style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>We will match you with the right earning projection</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {audienceTypes.map((a) => (
                  <li key={a.id}>
                    <label onClick={() => setSelectedAudience(a.id)} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: "2px solid " + (selectedAudience === a.id ? ACCENT : "hsl(0 0% 90%)"), backgroundColor: selectedAudience === a.id ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", color: "hsl(0 0% 8.5%)", cursor: "pointer", transition: "all 0.2s" }}>
                      <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: "2px solid " + (selectedAudience === a.id ? ACCENT : "hsl(0 0% 90%)"), backgroundColor: selectedAudience === a.id ? ACCENT : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                        {selectedAudience === a.id && <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                      </span>
                      <span style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4, fontFamily: "'DM Sans', sans-serif" }}>{a.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </main>
            <footer style={{ position: "sticky", bottom: 0, maxWidth: 520, width: "100%", margin: "auto auto 0", padding: "16px 20px", backgroundColor: "#FFFFFF", borderTop: "1px solid hsl(0 0% 90%)" }}>
              <button onClick={handleAudienceContinue} disabled={!selectedAudience} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: "24px", padding: 16, borderRadius: 12, border: "none", backgroundColor: selectedAudience ? ACCENT : "hsl(0 0% 96.5%)", color: selectedAudience ? "#FFFFFF" : "hsl(0 0% 45%)", cursor: selectedAudience ? "pointer" : "not-allowed", transition: "background-color 0.3s, color 0.3s" }}>
                Continue <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </footer>
          </div>
        )}

      </div>
    </div>
  );
}