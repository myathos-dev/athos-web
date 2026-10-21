import { useState, useCallback, useEffect } from "react";

const PR = "rgb(36, 92, 58)";
const BRAND = "Athos";
const FH = "'DM Serif Display', 'Noe Display', 'Saol Display', Georgia, serif";
const FB = "'DM Sans', system-ui, sans-serif";

const CV_UP = "M 0 260 C 50 250 100 235 158 210 C 217 180 275 140 333 100 C 367 78 392 65 450 55";
const CVC_UP = "M 0 260 C 50 250, 100 235, 158 210 C 217 180, 275 140, 333 100 C 367 78, 392 65, 450 55";
const FP_UP = CVC_UP + " L 450 320 L 0 320 Z";

const ENERGY_MAP = { low: 65, "below-avg": 50, average: 35, "above-avg": 20 };
const ENERGY_MULT = { moderate: 0.6, significant: 0.8, maximum: 1.0 };
const VITALITY_MAP = { "much-older": 20, older: 15, "slightly-older": 10, "my-age": 7 };
const VITALITY_MULT = { moderate: 0.6, significant: 0.8, maximum: 1.0 };

const GOAL_OPTIONS = [
  { id: "energy", label: "More energy and physical performance", peptide: "mots-c" },
  { id: "younger", label: "Feel younger and more vital", peptide: "nad+" },
  { id: "metabolic", label: "Improve metabolic function", peptide: "mots-c" },
  { id: "aging", label: "Slow biological aging and cellular repair", peptide: "nad+" },
];

const ENERGY_OPTIONS = [
  ["low", "Low — I fatigue easily and rarely exercise"],
  ["below-avg", "Below Average — I exercise but lack stamina"],
  ["average", "Average — Moderately active, want more"],
  ["above-avg", "Above Average — Active, want to optimize"],
];

const VITALITY_OPTIONS = [
  ["much-older", "I feel 10+ years older than my age"],
  ["older", "I feel noticeably older than my age"],
  ["slightly-older", "I feel slightly older than I should"],
  ["my-age", "I feel my age, but want to feel younger"],
];

const INTENSITY_OPTIONS = [
  ["moderate", "Moderate — Noticeable improvement in daily life"],
  ["significant", "Significant — Measurable gains in performance and vitality"],
  ["maximum", "Maximum — Peak optimization across all markers"],
];

const BMI_TIERS = [
  { max: 18.5, label: "Underweight", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE", bar: "#60A5FA" },
  { max: 25, label: "Normal Weight", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0", bar: "#4ADE80" },
  { max: 30, label: "Overweight", color: "#CA8A04", bg: "#FEFCE8", border: "#FDE68A", bar: "#FACC15" },
  { max: 35, label: "Weight Loss Protocol Recommended", color: "#EA580C", bg: "#FFF7ED", border: "#FED7AA", bar: "#FB923C" },
  { max: 999, label: "Weight Loss Protocol Priority", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA", bar: "#EF4444" },
];

const GG = {
  backgroundImage: "linear-gradient(to right, #67D9CB, #3DBDD1, #2FA7C8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
@keyframes tfSlideInR{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
@keyframes tfSlideOutL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}
@keyframes tfSlideInL{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}
@keyframes tfSlideOutR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}
.tf-enter-fwd{animation:tfSlideInR .4s cubic-bezier(.16,1,.3,1) forwards}
.tf-exit-fwd{animation:tfSlideOutL .3s cubic-bezier(.7,0,.84,0) forwards}
.tf-enter-bwd{animation:tfSlideInL .4s cubic-bezier(.16,1,.3,1) forwards}
.tf-exit-bwd{animation:tfSlideOutR .3s cubic-bezier(.7,0,.84,0) forwards}
.tf-idle{opacity:1;transform:translateX(0)}
@keyframes tfFadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.tf-fade-in{animation:tfFadeIn .4s cubic-bezier(.16,1,.3,1) forwards}
@keyframes tfFooterIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.tf-footer-appear{animation:tfFooterIn .35s cubic-bezier(.16,1,.3,1) forwards}
@keyframes tfSpin{from{transform:translateX(-50%) translateY(-50%) scale(4) rotate(0deg)}to{transform:translateX(-50%) translateY(-50%) scale(4) rotate(360deg)}}
@keyframes tfUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.tf-s{opacity:0;animation:tfUp .8s cubic-bezier(.16,1,.3,1) forwards}
.tf-s-b{animation-delay:.1s}.tf-s-1{animation-delay:.3s}.tf-s-2{animation-delay:.5s}.tf-s-3{animation-delay:.7s}.tf-s-4{animation-delay:.9s}
@keyframes tfBgF{from{opacity:0}to{opacity:.5}}
.tf-bg-fade{opacity:0;animation:tfBgF 1.5s cubic-bezier(.16,1,.3,1) .2s forwards}
@keyframes tfDraw{from{stroke-dashoffset:800}to{stroke-dashoffset:0}}
@keyframes tfDot{from{offset-distance:0%;opacity:0}to{offset-distance:100%;opacity:1}}
@keyframes tfLbl{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes tfPulse{0%,100%{opacity:1}50%{opacity:.5}}
@keyframes tfPing{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(1.6);opacity:0}}`;

export default function TeleformLongevityProfile() {
  const [cached] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
    } catch {
      return {};
    }
  });
  useEffect(() => {
    if (!cached.firstName) window.location.href = "/getpeptides/longevity";
  }, []);

  const [step, setStep] = useState(1);
  const [dStep, setDStep] = useState(1);
  const [anim, setAnim] = useState("idle");
  const [dir, setDir] = useState("forward");
  const [wt, setWt] = useState("");
  const [ft, setFt] = useState("");
  const [inc, setInc] = useState("");
  const [longevityGoal, setLongevityGoal] = useState(null);
  const [selfAssessment, setSelfAssessment] = useState(null);
  const [intensity, setIntensity] = useState(null);
  const [age, setAge] = useState("");

  const wNum = parseFloat(wt) || 0;
  const fNum = parseInt(ft, 10) || 0;
  const iNum = parseInt(inc, 10) || 0;
  const tIn = fNum * 12 + iNum;
  const bmi = tIn > 0 && wNum > 0 ? (wNum / (tIn * tIn)) * 703 : 0;
  const bmiR = Math.round(bmi * 10) / 10;
  const tier = BMI_TIERS.find((t) => bmi < t.max) || BMI_TIERS[4];
  const hwOk = wNum > 50 && fNum >= 3 && fNum <= 8 && iNum >= 0 && iNum <= 11 && tIn > 0;
  const barWidth = Math.max(0, Math.min(100, (bmi / 40) * 100));

  const peptidePath = longevityGoal ? GOAL_OPTIONS.find((o) => o.id === longevityGoal)?.peptide : null;
  const isMots = peptidePath === "mots-c";
  const isNad = peptidePath === "nad+";

  const ageNum = parseInt(age, 10) || 0;
  const ageValid = ageNum >= 18 && ageNum <= 100;

  // MOTS-c: energy improvement %
  const energyBase = ENERGY_MAP[selfAssessment] || 0;
  const energyMult = ENERGY_MULT[intensity] || 0;
  const improvementPct = Math.round(energyBase * energyMult);

  // NAD+: biological age reversal
  const vitalityBase = VITALITY_MAP[selfAssessment] || 0;
  const vitalityMult = VITALITY_MULT[intensity] || 0;
  const yearsReversed = Math.round(vitalityBase * vitalityMult);
  const bioAge = ageValid ? ageNum - yearsReversed : 0;

  const totalSteps = 10;
  const prog = Math.round(((step + 4) / totalSteps) * 100);

  const nav = useCallback(
    (s, d) => {
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
    },
    [anim]
  );
  const fwd = (s) => nav(s, "forward");
  const bwd = (s) => nav(s, "backward");
  const tc = () => {
    if (anim === "enter") return dir === "forward" ? "tf-enter-fwd" : "tf-enter-bwd";
    if (anim === "exit") return dir === "forward" ? "tf-exit-fwd" : "tf-exit-bwd";
    return "tf-idle";
  };

  const oF = (e) => (e.target.style.borderColor = PR);
  const oB = (e) => (e.target.style.borderColor = "hsl(0 0% 90%)");
  const iSt = {
    width: "100%",
    fontFamily: FB,
    fontSize: 18,
    fontWeight: 500,
    padding: 16,
    borderRadius: 12,
    border: "2px solid hsl(0 0% 90%)",
    backgroundColor: "#fff",
    color: "hsl(0 0% 8.5%)",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

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

  const LH = ({ showBack, onBack }) => (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        maxWidth: 520,
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderBottom: "1px solid hsl(0 0% 90%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>
        {showBack && (
          <button
            onClick={onBack}
            style={{
              position: "absolute",
              left: 20,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 9999,
              border: "1px solid hsl(0 0% 90%)",
              backgroundColor: "transparent",
              color: "hsl(0 0% 8.5%)",
              fontSize: 14,
              fontWeight: 400,
              cursor: "pointer",
              lineHeight: 1,
              fontFamily: FB,
            }}
          >
            <BkA /> Back
          </button>
        )}
        <span style={{ fontSize: 28, fontWeight: 600, color: PR, letterSpacing: "-0.01em", fontFamily: FH }}>{BRAND}</span>
      </div>
      <div style={{ padding: "0 20px 16px" }}>
        <div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}>
          <div style={{ width: `${prog}%`, height: "100%", borderRadius: 9999, backgroundColor: PR, transition: "width 0.4s ease" }} />
        </div>
      </div>
    </header>
  );

  const LF = ({ onClick, disabled }) => (
    <footer
      className="tf-footer-appear"
      style={{
        position: "sticky",
        bottom: 0,
        maxWidth: 520,
        width: "100%",
        margin: "auto auto 0",
        padding: "16px 20px",
        backgroundColor: "#fff",
        borderTop: "1px solid hsl(0 0% 90%)",
      }}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          fontFamily: FB,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: "24px",
          padding: 16,
          borderRadius: 12,
          border: "none",
          backgroundColor: !disabled ? PR : "hsl(0 0% 96.5%)",
          color: !disabled ? "#fff" : "hsl(0 0% 55%)",
          cursor: !disabled ? "pointer" : "not-allowed",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        Continue <Arr />
      </button>
    </footer>
  );

  const DH = ({ onBack }) => (
    <header
      className="tf-s tf-s-b"
      style={{
        position: "relative",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 20px",
        width: "100%",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <div style={{ position: "absolute", left: 20 }}>
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 14px",
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.2)",
            backgroundColor: "transparent",
            color: "#FFF",
            fontSize: 14,
            fontWeight: 400,
            cursor: "pointer",
            lineHeight: 1,
            fontFamily: FB,
          }}
        >
          <BkA /> Back
        </button>
      </div>
      <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em", color: "#FFF", fontFamily: FH }}>{BRAND}</span>
    </header>
  );

  const ABg = () => (
    <div className="tf-bg-fade" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", filter: "blur(60px)" }}>
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%) scale(0.75)",
            width: "100vw",
            height: "100vh",
            minWidth: 1000,
            borderRadius: 9999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              transformOrigin: "center",
              background: "conic-gradient(from 0deg, #67D9CB, #000, #3DBDD1, #000, #2FA7C8, #000, #67D9CB)",
              willChange: "transform",
              animation: "tfSpin 12s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );

  const DC = ({ onClick, label, cn }) => (
    <button
      className={cn}
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontFamily: FB,
        fontSize: 16,
        fontWeight: 500,
        padding: 16,
        borderRadius: 12,
        border: "none",
        backgroundColor: PR,
        color: "#FFF",
        cursor: "pointer",
        marginTop: "auto",
      }}
    >
      {label || "Continue"} <Arr />
    </button>
  );

  const RadioList = ({ options, value, onChange }) => (
    <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
      {options.map(([id, label]) => {
        const sel = value === id;
        return (
          <li key={id}>
            <label
              onClick={() => onChange(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: 16,
                borderRadius: 12,
                border: `2px solid ${sel ? PR : "hsl(0 0% 90%)"}`,
                backgroundColor: sel ? PR : "hsl(0 0% 98%)",
                color: sel ? "#fff" : "hsl(0 0% 8.5%)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: `2px solid ${sel ? "#fff" : "hsl(0 0% 85%)"}`,
                  backgroundColor: sel ? "#fff" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                {sel && <Chk c={PR} />}
              </span>
              <span style={{ fontFamily: FB, fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>{label}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );

  // Chart hero values
  const heroNumber = isMots ? improvementPct : bioAge;
  const heroSuffix = isMots ? "%" : "";
  const heroSubtext = isMots
    ? `energy improvement is achievable, ${cached.firstName}`
    : `is your new biological age, ${cached.firstName}`;
  const startLabel = isMots ? "Current Level" : `Current: ${ageNum} yrs`;
  const endNumber = isMots ? `+${improvementPct}` : bioAge;
  const endSuffix = isMots ? "%" : " yrs";
  const endLabel = isMots ? "Target Performance" : "Biological Age";
  const persuasionCopy = isMots
    ? "MOTS-c activates AMPK pathways to restore cellular energy, with measurable improvement in 8–12 weeks.*"
    : `NAD+ restores cellular repair mechanisms linked to aging, with patients reporting feeling ${yearsReversed} years younger within 10–14 weeks.*`;

  // Step 4 disabled logic
  const step4Disabled = isMots
    ? !selfAssessment
    : !selfAssessment || !ageValid;

  return (
    <div style={{ overflow: "hidden", position: "relative", fontFamily: FB, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}>
      <style>{CSS}</style>
      <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>

        {/* ──── STEP 1: WELCOME (DARK) ──── */}
        {dStep === 1 && (
          <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#000" }}>
            <ABg />
            <DH onBack={() => { window.location.href = "/getpeptides/longevity"; }} />
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px 40px", width: "100%", maxWidth: 520, margin: "0 auto" }}>
              <h1 className="tf-s tf-s-1" style={{ fontFamily: FH, fontSize: 48, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#FFF", marginBottom: 16 }}>
                Welcome, <span style={GG}>{cached.firstName}</span>
              </h1>
              <p className="tf-s tf-s-2" style={{ fontFamily: FB, fontSize: 20, fontWeight: 400, lineHeight: "28px", color: "rgba(255,255,255,0.7)", marginBottom: 48 }}>
                Let's get to know you better with a few health questions so we can create a longevity protocol that's perfectly calibrated for you.
              </p>
              <DC cn="tf-s tf-s-4" onClick={() => fwd(2)} label="Let's Get Started" />
            </div>
          </div>
        )}

        {/* ──── STEP 2: HEIGHT & WEIGHT (LIGHT) ──── */}
        {dStep === 2 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(1)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>
                What is your current height and weight?
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 32 }}>
                We'll calculate your BMI to determine your metabolic baseline.
              </p>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "block" }}>Weight (pounds)</label>
                <input type="number" inputMode="numeric" placeholder="Enter your weight" value={wt} onChange={(e) => setWt(e.target.value)} style={iSt} onFocus={oF} onBlur={oB} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "block" }}>Height</label>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <input type="number" inputMode="numeric" placeholder="Feet" value={ft} onChange={(e) => setFt(e.target.value)} style={iSt} onFocus={oF} onBlur={oB} />
                    <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "hsl(0 0% 55%)", marginTop: 4, display: "block" }}>Feet</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <input type="number" inputMode="numeric" placeholder="Inches" value={inc} onChange={(e) => setInc(e.target.value)} style={iSt} onFocus={oF} onBlur={oB} />
                    <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "hsl(0 0% 55%)", marginTop: 4, display: "block" }}>Inches</span>
                  </div>
                </div>
              </div>
              {hwOk && bmi > 0 && (
                <div className="tf-fade-in" style={{ marginBottom: 16 }}>
                  <label style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "block" }}>Your BMI Result</label>
                  <div style={{ position: "relative", width: "100%", height: 40, borderRadius: 9999, overflow: "hidden", backgroundColor: "hsl(0 0% 92%)" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${barWidth}%`, borderRadius: 9999, backgroundColor: tier.bar, transition: "width 0.4s ease, background-color 0.4s ease" }} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: barWidth > 30 ? "#fff" : "hsl(0 0% 25%)", textShadow: barWidth > 30 ? "0 1px 2px rgba(0,0,0,0.2)" : "none" }}>
                        {bmiR} - {tier.label}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                    {[["Underweight", "<18.5"], ["Normal", "18.5–24.9"], ["Overweight", "25–29.9"], ["Protocol Rec.", "≥30"]].map(([l, v], i) => (
                      <div key={i} style={{ textAlign: i === 0 ? "left" : i === 3 ? "right" : "center" }}>
                        <div style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: "hsl(0 0% 35%)" }}>{l}</div>
                        <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 400, color: "hsl(0 0% 55%)" }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </main>
            <LF onClick={() => fwd(3)} disabled={!hwOk} />
          </div>
        )}

        {/* ──── STEP 3: LONGEVITY GOAL (LIGHT) ──── */}
        {dStep === 3 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(2)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>
                What is your primary longevity goal?
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>
                This helps us determine the right protocol for you.
              </p>
              <RadioList
                options={GOAL_OPTIONS.map((o) => [o.id, o.label])}
                value={longevityGoal}
                onChange={(id) => { setLongevityGoal(id); setSelfAssessment(null); setIntensity(null); setAge(""); }}
              />
            </main>
            <LF onClick={() => fwd(4)} disabled={!longevityGoal} />
          </div>
        )}

        {/* ──── STEP 4: SELF-ASSESSMENT (LIGHT) — age input for NAD+ only ──── */}
        {dStep === 4 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(3)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>
                {isMots
                  ? "How would you rate your current energy and athletic performance?"
                  : "How would you describe how you feel relative to your age?"}
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>
                {isMots
                  ? "This helps us calibrate your MOTS-c protocol."
                  : "This helps us calibrate your NAD+ protocol."}
              </p>

              {isNad && (
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "block" }}>Your current age</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={iSt}
                    onFocus={oF}
                    onBlur={oB}
                  />
                  {age && !ageValid && (
                    <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "#DC2626", marginTop: 6, display: "block" }}>
                      Please enter an age between 18 and 100.
                    </span>
                  )}
                </div>
              )}

              <RadioList
                options={isMots ? ENERGY_OPTIONS : VITALITY_OPTIONS}
                value={selfAssessment}
                onChange={setSelfAssessment}
              />
            </main>
            <LF onClick={() => fwd(5)} disabled={step4Disabled} />
          </div>
        )}

        {/* ──── STEP 5: INTENSITY TARGET (LIGHT) ──── */}
        {dStep === 5 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(4)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>
                What level of improvement are you targeting?
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>
                {isMots
                  ? "This determines your MOTS-c dosing protocol intensity."
                  : "This determines your NAD+ dosing protocol intensity."}
              </p>
              <RadioList
                options={INTENSITY_OPTIONS}
                value={intensity}
                onChange={setIntensity}
              />
            </main>
            <LF onClick={() => fwd(6)} disabled={!intensity} />
          </div>
        )}

        {/* ──── STEP 6: RESULTS CHART (DARK) ──── */}
        {dStep === 6 && (
          <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#000" }}>
            <ABg />
            <DH onBack={() => bwd(5)} />
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px 40px", width: "100%", maxWidth: 520, margin: "0 auto" }}>

              {/* Hero Number */}
              <div className="tf-s tf-s-1" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                  <div style={{ fontFamily: FH, fontSize: 78, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.04em", ...GG }}>{heroNumber}</div>
                  {isMots && (
                    <div style={{ fontFamily: FH, fontSize: 38, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 12, ...GG }}>%</div>
                  )}
                  {isNad && (
                    <div style={{ fontFamily: FH, fontSize: 38, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 12, ...GG }}>yrs</div>
                  )}
                </div>
                <h2 style={{ fontFamily: FB, fontSize: 20, fontWeight: 500, color: "#FFF", marginTop: 4 }}>{heroSubtext}</h2>
              </div>

              {/* Ascending Chart */}
              <div className="tf-s tf-s-2" style={{ position: "relative", maxWidth: 450, width: "100%", margin: "0 auto 24px" }}>
                <div style={{ position: "relative", height: 320, width: "100%" }}>
                  <svg
                    style={{ position: "absolute", inset: 0, height: "100%", width: "100%", borderRadius: 24, border: "2px solid rgba(103,217,203,0.19)" }}
                    viewBox="0 0 450 320"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <clipPath id="cl"><rect width="450" height="320" rx="24" ry="24" /></clipPath>
                      <filter id="gl"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                      <linearGradient id="gc" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#67D9CB", stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: "#3DBDD1", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#2FA7C8", stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="gf" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#3DBDD1", stopOpacity: 0.3 }} />
                        <stop offset="50%" style={{ stopColor: "#3DBDD1", stopOpacity: 0.15 }} />
                        <stop offset="100%" style={{ stopColor: "#3DBDD1", stopOpacity: 0.05 }} />
                      </linearGradient>
                      <linearGradient id="l1" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0.1)" }} />
                        <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0.4)" }} />
                      </linearGradient>
                      <linearGradient id="l2" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0.1)" }} />
                        <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0.4)" }} />
                      </linearGradient>
                    </defs>
                    <rect width="450" height="320" rx="24" ry="24" fill="rgba(0,0,0,0.1)" opacity="0.3" />
                    <g strokeWidth="2" strokeDasharray="3.17 1.58">
                      <line x1={112} y1={0} x2={112} y2={260} stroke="url(#l1)" />
                      <line x1={337} y1={0} x2={337} y2={100} stroke="url(#l2)" />
                    </g>
                    <path d={FP_UP} fill="url(#gf)" clipPath="url(#cl)" />
                    <path
                      d={CVC_UP}
                      fill="none"
                      stroke="url(#gc)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#gl)"
                      clipPath="url(#cl)"
                      strokeDasharray="800"
                      style={{ animation: "tfDraw 1.5s ease-out 0.5s forwards", strokeDashoffset: 800 }}
                    />
                  </svg>
                  <svg
                    style={{ pointerEvents: "none", position: "absolute", inset: 0, height: "100%", width: "100%", overflow: "visible" }}
                    viewBox="0 0 450 320"
                    preserveAspectRatio="none"
                  >
                    <foreignObject x="0" y="0" width="450" height="320" style={{ overflow: "visible" }}>
                      <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: 450, height: 320, position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 50,
                            height: 20,
                            width: 20,
                            borderRadius: 9999,
                            backgroundColor: "#FFF",
                            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)",
                            offsetPath: `path("${CV_UP}")`,
                            offsetRotate: "0deg",
                            willChange: "transform",
                            animation: "tfDot 1.5s ease-out 0.5s forwards",
                            offsetDistance: "0%",
                            opacity: 0,
                          }}
                        >
                          <div style={{ position: "absolute", inset: -3, borderRadius: 9999, border: "2px solid rgba(255,255,255,0.7)", animation: "tfPulse 2s ease-in-out infinite" }} />
                          <div style={{ position: "absolute", inset: -6, borderRadius: 9999, border: "1px solid rgba(255,255,255,0.4)", animation: "tfPing 2s cubic-bezier(0,0,0.2,1) infinite" }} />
                        </div>
                      </div>
                    </foreignObject>
                  </svg>

                  {/* Start Label — Bottom Left */}
                  <div style={{ position: "absolute", bottom: "12%", left: "2%", animation: "tfLbl 0.6s ease-out 0.8s both" }}>
                    <div
                      style={{
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.5)",
                        backgroundColor: "rgba(255,255,255,0.3)",
                        padding: "6px 8px",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.2)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <span style={{ fontWeight: 500, fontSize: 14, color: "#FFF" }}>{startLabel}</span>
                    </div>
                  </div>

                  {/* End Label — Top Right */}
                  <div style={{ position: "absolute", top: "5%", right: "3%", animation: "tfLbl 0.6s ease-out 1.4s both" }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: 18,
                        padding: 12,
                        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)",
                        background: "linear-gradient(135deg, #67D9CB, #2FA7C8)",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontWeight: 700, fontSize: 30, color: "#FFF" }}>
                          {endNumber}
                          <span style={{ fontSize: 14 }}>{endSuffix}</span>
                        </span>
                        <span style={{ display: "block", fontWeight: 500, fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{endLabel}</span>
                      </div>
                      <span style={{ position: "absolute", top: -15, right: 0, fontSize: 32 }}>🎉</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="tf-s tf-s-3" style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "26px", color: "#FFF", marginBottom: 32 }}>
                {persuasionCopy}
              </p>

              <DC
                cn="tf-s tf-s-4"
                onClick={() => {
                  const ex = JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
                  const payload = {
                    ...ex,
                    weight: wNum,
                    heightFeet: fNum,
                    heightInches: iNum,
                    bmi: bmiR,
                    bmiCategory: tier.label,
                    longevityGoal,
                    peptidePath,
                    selfAssessment,
                    intensity,
                  };
                  if (isMots) {
                    payload.improvementPercent = improvementPct;
                  } else {
                    payload.chronologicalAge = ageNum;
                    payload.biologicalAgeTarget = bioAge;
                    payload.yearsReversed = yearsReversed;
                  }
                  sessionStorage.setItem("tf_intake", JSON.stringify(payload));
                  window.location.href = "/getpeptides/longevity/product";
                }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}