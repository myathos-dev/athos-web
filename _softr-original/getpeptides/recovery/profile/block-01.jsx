import { useState, useCallback, useEffect } from "react";

const PR = "rgb(36, 92, 58)";
const GLOW = "#37B8D3";
const BRAND = "Athos";
const FH = "'DM Serif Display', 'Noe Display', 'Saol Display', Georgia, serif";
const FB = "'DM Sans', system-ui, sans-serif";

/* Curve descends: starts high-left (long recovery), ends low-right (fast recovery) */
const CV = "M 0 80 C 60 85 120 110 180 150 C 240 190 300 240 360 265 C 400 278 430 282 450 284";
const CVC = "M 0 80 C 60 85, 120 110, 180 150 C 240 190, 300 240, 360 265 C 400 278, 430 282, 450 284";
const FP = CVC + " L 450 320 L 0 320 Z";

const GOALS = [
  { id: "joint-tendon", label: "Joint & Tendon Repair", weeks: 6, typical: 12 },
  { id: "post-surgery", label: "Post-Surgery Recovery", weeks: 8, typical: 16 },
  { id: "muscle-tissue", label: "Muscle & Tissue Healing", weeks: 4, typical: 8 },
  { id: "general-longevity", label: "General Recovery & Longevity", weeks: 6, typical: 10 },
];

const BMI_TIERS = [
  { max: 18.5, label: "Underweight", color: "#3B82F6", bar: "#60A5FA", message: "Nutritional support recommended before treatment" },
  { max: 25, label: "Normal Weight", color: "#16A34A", bar: "#4ADE80", message: "You're eligible — standard recovery protocol" },
  { max: 30, label: "Overweight", color: "#CA8A04", bar: "#FACC15", message: "Eligible — metabolic optimization may be included" },
  { max: 35, label: "Obese", color: "#EA580C", bar: "#FB923C", message: "Weight Loss protocol recommended" },
  { max: 999, label: "Severe Obesity", color: "#DC2626", bar: "#EF4444", message: "Weight Loss protocol strongly recommended — provider review required" },
];

const GG = {
  backgroundImage: `linear-gradient(to right, ${PR}, ${PR})`,
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
@keyframes tfPing{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(1.6);opacity:0}}
@keyframes tfMsgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.tf-msg-in{animation:tfMsgIn .35s cubic-bezier(.16,1,.3,1) forwards}`;

export default function RecoveryProfile() {
  const [cached] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (!cached.firstName) window.location.href = "/getpeptides/recovery";
  }, []);

  const [step, setStep] = useState(1);
  const [dStep, setDStep] = useState(1);
  const [anim, setAnim] = useState("idle");
  const [dir, setDir] = useState("forward");
  const [wt, setWt] = useState("");
  const [ft, setFt] = useState("");
  const [inc, setInc] = useState("");
  const [goal, setGoal] = useState(null);

  const wNum = parseFloat(wt) || 0;
  const fNum = parseInt(ft, 10) || 0;
  const iNum = parseInt(inc, 10) || 0;
  const tIn = fNum * 12 + iNum;
  const bmi = tIn > 0 && wNum > 0 ? (wNum / (tIn * tIn)) * 703 : 0;
  const bmiR = Math.round(bmi * 10) / 10;
  const tier = BMI_TIERS.find((t) => bmi < t.max) || BMI_TIERS[4];
  const hwOk =
    wNum > 50 && fNum >= 3 && fNum <= 8 && iNum >= 0 && iNum <= 11 && tIn > 0;
  const prog = Math.round(((step + 4) / 8) * 100);
  const barWidth = Math.max(0, Math.min(100, (bmi / 40) * 100));
  const selGoal = GOALS.find((g) => g.id === goal);

  /* ── Icon for BMI message ── */
  const TierIcon = ({ tier: t }) => {
    if (t.label === "Normal Weight") {
      return (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={t.color} strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    if (t.label === "Underweight") {
      return (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={t.color} strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      );
    }
    // Overweight, Obese, Severe Obesity — warning triangle
    return (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={t.color} strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86l-8.6 14.86A2 2 0 003.43 21h17.14a2 2 0 001.74-2.98l-8.6-14.86a2 2 0 00-3.42 0z" />
      </svg>
    );
  };

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
    if (anim === "enter")
      return dir === "forward" ? "tf-enter-fwd" : "tf-enter-bwd";
    if (anim === "exit")
      return dir === "forward" ? "tf-exit-fwd" : "tf-exit-bwd";
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
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
  const BkA = () => (
    <svg
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
  const Chk = ({ c }) => (
    <svg
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 24 24"
      stroke={c}
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  /* ── Shared Sub-Components ── */

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 20px",
          position: "relative",
        }}
      >
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
        <span
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: PR,
            letterSpacing: "-0.01em",
            fontFamily: FH,
          }}
        >
          {BRAND}
        </span>
      </div>
      <div style={{ padding: "0 20px 16px" }}>
        <div
          style={{
            width: "100%",
            height: 12,
            borderRadius: 9999,
            backgroundColor: "hsl(0 0% 96.5%)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${prog}%`,
              height: "100%",
              borderRadius: 9999,
              backgroundColor: PR,
              transition: "width 0.4s ease",
            }}
          />
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
      <span
        style={{
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "#FFF",
          fontFamily: FH,
        }}
      >
        {BRAND}
      </span>
    </header>
  );

  const ABg = () => (
    <div
      className="tf-bg-fade"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          filter: "blur(60px)",
        }}
      >
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
              background: `conic-gradient(from 0deg, ${GLOW}, #000, ${GLOW}, #000, ${GLOW}, #000, ${GLOW})`,
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

  /* ── Render ── */

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        fontFamily: FB,
        backgroundColor: "#fff",
        color: "hsl(0 0% 8.5%)",
      }}
    >
      <style>{CSS}</style>
      <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>
        {/* ─── Step 1 — Welcome (Dark) ─── */}
        {dStep === 1 && (
          <div
            style={{
              position: "relative",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            <ABg />
            <DH
              onBack={() => {
                window.location.href = "/getpeptides/recovery";
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 10,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px 40px",
                width: "100%",
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              <h1
                className="tf-s tf-s-1"
                style={{
                  fontFamily: FH,
                  fontSize: 48,
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#FFF",
                  marginBottom: 16,
                }}
              >
                Welcome, <span style={GG}>{cached.firstName}</span>
              </h1>
              <p
                className="tf-s tf-s-2"
                style={{
                  fontFamily: FB,
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: "28px",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 48,
                }}
              >
                A few quick health questions so we can build a recovery protocol
                tailored to your body — less pain, faster healing, back to full
                capacity sooner.
              </p>
              <DC
                cn="tf-s tf-s-4"
                onClick={() => fwd(2)}
                label="Let's Get Started"
              />
            </div>
          </div>
        )}

        {/* ─── Step 2 — Height & Weight (Light) ─── */}
        {dStep === 2 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <LH showBack onBack={() => bwd(1)} />
            <main
              style={{
                maxWidth: 520,
                width: "100%",
                margin: "0 auto",
                flex: 1,
                padding: "24px 20px 0",
              }}
            >
              <h1
                style={{
                  fontFamily: FH,
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: "30px",
                  letterSpacing: "-0.01em",
                  marginBottom: 6,
                }}
              >
                What is your current height and weight?
              </h1>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "hsl(0 0% 45%)",
                  marginBottom: 32,
                }}
              >
                We'll calculate your BMI to check your eligibility for
                treatment.
              </p>

              <div style={{ marginBottom: 24 }}>
                <label
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "hsl(0 0% 45%)",
                    marginBottom: 8,
                    display: "block",
                  }}
                >
                  Weight (pounds)
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Enter your weight"
                  value={wt}
                  onChange={(e) => setWt(e.target.value)}
                  style={iSt}
                  onFocus={oF}
                  onBlur={oB}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "hsl(0 0% 45%)",
                    marginBottom: 8,
                    display: "block",
                  }}
                >
                  Height
                </label>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="Feet"
                      value={ft}
                      onChange={(e) => setFt(e.target.value)}
                      style={iSt}
                      onFocus={oF}
                      onBlur={oB}
                    />
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 12,
                        fontWeight: 400,
                        color: "hsl(0 0% 55%)",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      Feet
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="Inches"
                      value={inc}
                      onChange={(e) => setInc(e.target.value)}
                      style={iSt}
                      onFocus={oF}
                      onBlur={oB}
                    />
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 12,
                        fontWeight: 400,
                        color: "hsl(0 0% 55%)",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      Inches
                    </span>
                  </div>
                </div>
              </div>

              {hwOk && bmi > 0 && (
                <div className="tf-fade-in" style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      fontFamily: FB,
                      fontSize: 14,
                      fontWeight: 500,
                      color: "hsl(0 0% 45%)",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    Your BMI Result
                  </label>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 40,
                      borderRadius: 9999,
                      overflow: "hidden",
                      backgroundColor: "hsl(0 0% 92%)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: `${barWidth}%`,
                        borderRadius: 9999,
                        backgroundColor: tier.bar,
                        transition:
                          "width 0.4s ease, background-color 0.4s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: FB,
                          fontSize: 14,
                          fontWeight: 600,
                          color:
                            barWidth > 30 ? "#fff" : "hsl(0 0% 25%)",
                          textShadow:
                            barWidth > 30
                              ? "0 1px 2px rgba(0,0,0,0.2)"
                              : "none",
                        }}
                      >
                        {bmiR} - {tier.label}
                      </span>
                    </div>
                  </div>

                  {/* ── BMI Protocol Message ── */}
                  <div
                    className="tf-msg-in"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginTop: 12,
                      padding: "12px 16px",
                      borderRadius: 12,
                      border: `1.5px solid ${tier.color}25`,
                      backgroundColor: `${tier.color}0A`,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: `${tier.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TierIcon tier={tier} />
                    </div>
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: "20px",
                        color: tier.color,
                      }}
                    >
                      {tier.message}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 12,
                    }}
                  >
                    {[
                      ["Underweight", "<18.5"],
                      ["Normal", "18.5–24.9"],
                      ["Overweight", "25–29.9"],
                      ["Obese", "≥30"],
                    ].map(([l, v], i) => (
                      <div
                        key={i}
                        style={{
                          textAlign:
                            i === 0 ? "left" : i === 3 ? "right" : "center",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: FB,
                            fontSize: 12,
                            fontWeight: 500,
                            color: "hsl(0 0% 35%)",
                          }}
                        >
                          {l}
                        </div>
                        <div
                          style={{
                            fontFamily: FB,
                            fontSize: 11,
                            fontWeight: 400,
                            color: "hsl(0 0% 55%)",
                          }}
                        >
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </main>
            <LF onClick={() => fwd(3)} disabled={!hwOk} />
          </div>
        )}

        {/* ─── Step 3 — Recovery Goal Selection (Light) ─── */}
        {dStep === 3 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <LH showBack onBack={() => bwd(2)} />
            <main
              style={{
                maxWidth: 520,
                width: "100%",
                margin: "0 auto",
                flex: 1,
                padding: "24px 20px 0",
              }}
            >
              <h1
                style={{
                  fontFamily: FH,
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: "30px",
                  letterSpacing: "-0.01em",
                  marginBottom: 6,
                }}
              >
                What is your primary recovery goal?
              </h1>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "hsl(0 0% 45%)",
                  marginBottom: 24,
                }}
              >
                This helps us determine the right peptide protocol for you.
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {GOALS.map(({ id, label }) => {
                  const sel = goal === id;
                  return (
                    <li key={id}>
                      <label
                        onClick={() => setGoal(id)}
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
                        <span
                          style={{
                            fontFamily: FB,
                            fontSize: 17,
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
                        >
                          {label}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </main>
            <LF onClick={() => fwd(4)} disabled={!goal} />
          </div>
        )}

        {/* ─── Step 4 — Recovery Timeline Chart (Dark) ─── */}
        {dStep === 4 && selGoal && (
          <div
            style={{
              position: "relative",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            <ABg />
            <DH onBack={() => bwd(3)} />
            <div
              style={{
                position: "relative",
                zIndex: 10,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px 40px",
                width: "100%",
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              {/* Hero number */}
              <div
                className="tf-s tf-s-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FH,
                      fontSize: 78,
                      fontWeight: 600,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      ...GG,
                    }}
                  >
                    {selGoal.weeks}
                  </div>
                  <div
                    style={{
                      fontFamily: FH,
                      fontSize: 38,
                      fontWeight: 600,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      marginBottom: 12,
                      ...GG,
                    }}
                  >
                    weeks
                  </div>
                </div>
                <h2
                  style={{
                    fontFamily: FB,
                    fontSize: 20,
                    fontWeight: 500,
                    color: "#FFF",
                    marginTop: 4,
                  }}
                >
                  is your projected recovery timeline, {cached.firstName}
                </h2>
              </div>

              {/* Chart — curve descends (recovery time drops) */}
              <div
                className="tf-s tf-s-2"
                style={{
                  position: "relative",
                  maxWidth: 450,
                  width: "100%",
                  margin: "0 auto 24px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 320,
                    width: "100%",
                  }}
                >
                  <svg
                    style={{
                      position: "absolute",
                      inset: 0,
                      height: "100%",
                      width: "100%",
                      borderRadius: 24,
                      border: `2px solid ${PR}30`,
                    }}
                    viewBox="0 0 450 320"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <clipPath id="cl">
                        <rect width="450" height="320" rx="24" ry="24" />
                      </clipPath>
                      <filter id="gl">
                        <feGaussianBlur stdDeviation="2" result="b" />
                        <feMerge>
                          <feMergeNode in="b" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient
                        id="gc"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: PR, stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: PR, stopOpacity: 1 }}
                        />
                      </linearGradient>
                      <linearGradient
                        id="gf"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: PR, stopOpacity: 0.3 }}
                        />
                        <stop
                          offset="50%"
                          style={{ stopColor: PR, stopOpacity: 0.2 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: PR, stopOpacity: 0.1 }}
                        />
                      </linearGradient>
                      <linearGradient
                        id="l1"
                        x1="0%"
                        y1="100%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "rgba(255,255,255,0.1)" }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "rgba(255,255,255,0.4)" }}
                        />
                      </linearGradient>
                      <linearGradient
                        id="l2"
                        x1="0%"
                        y1="100%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "rgba(255,255,255,0.1)" }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "rgba(255,255,255,0.4)" }}
                        />
                      </linearGradient>
                    </defs>
                    <rect
                      width="450"
                      height="320"
                      rx="24"
                      ry="24"
                      fill="rgba(0,0,0,0.1)"
                      opacity="0.3"
                    />
                    <g strokeWidth="2" strokeDasharray="3.17 1.58">
                      <line
                        x1={60}
                        y1={75}
                        x2={60}
                        y2={320}
                        stroke="url(#l1)"
                      />
                      <line
                        x1={390}
                        y1={278}
                        x2={390}
                        y2={320}
                        stroke="url(#l2)"
                      />
                    </g>
                    <path
                      d={FP}
                      fill="url(#gf)"
                      clipPath="url(#cl)"
                    />
                    <path
                      d={CVC}
                      fill="none"
                      stroke="url(#gc)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#gl)"
                      clipPath="url(#cl)"
                      strokeDasharray="800"
                      style={{
                        animation:
                          "tfDraw 1.5s ease-out 0.5s forwards",
                        strokeDashoffset: 800,
                      }}
                    />
                  </svg>

                  {/* Traveling dot */}
                  <svg
                    style={{
                      pointerEvents: "none",
                      position: "absolute",
                      inset: 0,
                      height: "100%",
                      width: "100%",
                      overflow: "visible",
                    }}
                    viewBox="0 0 450 320"
                    preserveAspectRatio="none"
                  >
                    <foreignObject
                      x="0"
                      y="0"
                      width="450"
                      height="320"
                      style={{ overflow: "visible" }}
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          width: 450,
                          height: 320,
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 50,
                            height: 20,
                            width: 20,
                            borderRadius: 9999,
                            backgroundColor: "#FFF",
                            boxShadow:
                              "0 20px 25px -5px rgba(0,0,0,0.3)",
                            offsetPath: `path("${CV}")`,
                            offsetRotate: "0deg",
                            willChange: "transform",
                            animation:
                              "tfDot 1.5s ease-out 0.5s forwards",
                            offsetDistance: "0%",
                            opacity: 0,
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              inset: -3,
                              borderRadius: 9999,
                              border:
                                "2px solid rgba(255,255,255,0.7)",
                              animation:
                                "tfPulse 2s ease-in-out infinite",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: -6,
                              borderRadius: 9999,
                              border:
                                "1px solid rgba(255,255,255,0.4)",
                              animation:
                                "tfPing 2s cubic-bezier(0,0,0.2,1) infinite",
                            }}
                          />
                        </div>
                      </div>
                    </foreignObject>
                  </svg>

                  {/* Left label — typical timeline */}
                  <div
                    style={{
                      position: "absolute",
                      top: "18%",
                      left: "2%",
                      animation: "tfLbl 0.6s ease-out 0.8s both",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.5)",
                        backgroundColor: "rgba(255,255,255,0.3)",
                        padding: "6px 8px",
                        boxShadow:
                          "0 10px 15px -3px rgba(0,0,0,0.2)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: "#FFF",
                        }}
                      >
                        Typical: {selGoal.typical} wks
                      </span>
                    </div>
                  </div>

                  {/* Right label — Athos projected */}
                  <div
                    style={{
                      position: "absolute",
                      top: "58%",
                      right: "3%",
                      animation: "tfLbl 0.6s ease-out 1.4s both",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: 18,
                        padding: 12,
                        boxShadow:
                          "0 20px 25px -5px rgba(0,0,0,0.3)",
                        backgroundColor: PR,
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: 30,
                            color: "#FFF",
                          }}
                        >
                          {selGoal.weeks}{" "}
                          <span style={{ fontSize: 14 }}>wks</span>
                        </span>
                        <span
                          style={{
                            display: "block",
                            fontWeight: 500,
                            fontSize: 12,
                            color: "rgba(255,255,255,0.8)",
                          }}
                        >
                          With Athos
                        </span>
                      </div>
                      <span
                        style={{
                          position: "absolute",
                          top: -15,
                          right: 0,
                          fontSize: 32,
                        }}
                      >
                        🎉
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p
                className="tf-s tf-s-3"
                style={{
                  fontFamily: FB,
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "26px",
                  color: "#FFF",
                  marginBottom: 32,
                }}
              >
                Athos's BPC-157 + TB-500 protocol is clinically shown to
                accelerate tissue recovery 58.5% faster than rest alone.*
              </p>

              <DC
                cn="tf-s tf-s-4"
                onClick={() => {
                  const ex = JSON.parse(
                    sessionStorage.getItem("tf_intake") || "{}"
                  );
                  sessionStorage.setItem(
                    "tf_intake",
                    JSON.stringify({
                      ...ex,
                      weight: wNum,
                      heightFeet: fNum,
                      heightInches: iNum,
                      bmi: bmiR,
                      bmiCategory: tier.label,
                      bmiMessage: tier.message,
                      recoveryGoal: goal,
                      projectedWeeks: selGoal.weeks,
                      typicalWeeks: selGoal.typical,
                    })
                  );
                  window.location.href = "/getpeptides/recovery/product";
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}