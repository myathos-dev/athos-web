import { useState } from "react";
import { useTextSetting } from "@/lib/editable-settings";

const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const PR = "#245C3A";

const STEPS = [
  {
    num: "1",
    tab: "Apply & Get Approved",
    title: "Apply and get approved.",
    body: "Tell us about your business. We approve partners in 24–48 hours. Black Label partners go live same day. White Label partners launch in 72 hours.",
    highlight: "Most partners are live within the week.",
  },
  {
    num: "2",
    tab: "Your Brand Goes Live",
    title: "Your brand goes live.",
    body: "Black Label: you get a tracking link and promo code. White Label: your logo, your domain, your intake forms, your checkout. Either way — patients can order within days.",
    highlight: "100% white-label. Your brand owns the relationship.",
  },
  {
    num: "3",
    tab: "Patients Order. You Earn.",
    title: "Patients order. You earn.",
    body: "Patients complete intake. Physicians review and prescribe. Pharmacy compounds and ships. You collect revenue. Every month. Automatically.",
    highlight: "Most partners are generating revenue within their first 90 days.",
  },
];

const TELEFORM_FEATURES = [
  "Personalized by first name from step one",
  "Live BMI calculation with dose-tier matching",
  "Animated goal weight chart",
  "Route selection: injection, oral, sublingual, nasal",
  "Add-on selection with clinical tooltips",
  "Direct checkout integration — no redirect",
  "Customizable per category: weight loss, recovery, longevity",
  "White Label: your brand on every screen",
];

/* ── Dashboard Mockup ── */

function DashboardMockup() {
  var orders = [
    { name: "Jane D.", product: "Semaglutide 2.5mg", status: "Approved", color: PR, time: "2m ago" },
    { name: "Michael R.", product: "Testosterone 200mg", status: "Shipped", color: "#555", time: "14m ago" },
    { name: "Sarah K.", product: "NAD+ 100mg/ml", status: "Approved", color: PR, time: "28m ago" },
    { name: "Alex T.", product: "BPC-157 5mg", status: "Pending", color: "#d97706", time: "41m ago" },
    { name: "Connor M.", product: "Tirzepatide 5mg", status: "Approved", color: PR, time: "1h ago" },
  ];
  return (
    <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", backgroundColor: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", backgroundColor: "#f9f9f9", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ff5f57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#28ca41" }} />
        </div>
        <div style={{ flex: 1, backgroundColor: "#f0f0f0", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontFamily: FB, color: "#999", fontWeight: 500 }}>yourbrand.com/dashboard</div>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontFamily: FB, fontSize: 13, fontWeight: 700, color: "#111" }}>Live Orders</span>
          <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: PR, backgroundColor: `${PR}12`, padding: "2px 8px", borderRadius: 9999 }}>LIVE</span>
        </div>
        {orders.map(function(o, i) {
          return (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.04)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FB, fontSize: 10, fontWeight: 700, color: "#888" }}>{o.name.charAt(0)}</div>
                <div>
                  <div style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#333" }}>{o.name}</div>
                  <div style={{ fontFamily: FB, fontSize: 10, color: "#bbb" }}>{o.product}</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: FB, fontSize: 10, fontWeight: 700, color: o.color }}>{o.status}</div>
                <div style={{ fontFamily: FB, fontSize: 9, color: "#ccc" }}>{o.time}</div>
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: FB, fontSize: 11, color: "#999" }}>Revenue today</span>
          <span style={{ fontFamily: FB, fontSize: 13, fontWeight: 700, color: PR }}>▲ 2.8x avg margin</span>
        </div>
      </div>
    </div>
  );
}

/* ── System Card Visuals ── */

function TeleformVisual() {
  return (
    <div style={{ display: "flex", gap: 6, height: 100 }}>
      <div style={{ flex: 1, borderRadius: 8, backgroundColor: "#0a0a0a", padding: "10px 8px", overflow: "hidden" }}>
        <div style={{ fontFamily: FB, fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>WELCOME</div>
        <div style={{ fontFamily: FH, fontSize: 11, color: "#fff", marginBottom: 4 }}>Hi Sarah,</div>
        <div style={{ fontFamily: FB, fontSize: 7, color: "rgba(255,255,255,0.4)" }}>Let's find the right treatment.</div>
        <div style={{ marginTop: 10, height: 3, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.08)" }}>
          <div style={{ width: "20%", height: "100%", borderRadius: 2, backgroundColor: PR }} />
        </div>
      </div>
      <div style={{ flex: 1, borderRadius: 8, backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.06)", padding: "10px 8px", overflow: "hidden" }}>
        <div style={{ fontFamily: FB, fontSize: 7, color: PR, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 6 }}>BMI</div>
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <div style={{ fontFamily: FB, fontSize: 22, fontWeight: 800, color: PR }}>32.5</div>
          <div style={{ fontFamily: FB, fontSize: 7, color: "#999" }}>Your BMI</div>
        </div>
        <div style={{ marginTop: 8, height: 3, borderRadius: 2, backgroundColor: "rgba(36,92,58,0.08)" }}>
          <div style={{ width: "55%", height: "100%", borderRadius: 2, backgroundColor: PR }} />
        </div>
      </div>
      <div style={{ flex: 1, borderRadius: 8, backgroundColor: "#0a0a0a", padding: "10px 8px", overflow: "hidden" }}>
        <div style={{ fontFamily: FB, fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 6 }}>GOAL</div>
        <div style={{ textAlign: "center", marginTop: 6 }}>
          <div style={{ fontFamily: FB, fontSize: 22, fontWeight: 800, color: "#fff" }}>196</div>
          <div style={{ fontFamily: FB, fontSize: 7, color: "rgba(255,255,255,0.4)" }}>lbs target</div>
        </div>
        <div style={{ marginTop: 8, height: 2, background: `linear-gradient(90deg, ${PR}, #3DBDD1)`, borderRadius: 2 }} />
      </div>
    </div>
  );
}

function PharmacyVisual() {
  var sources = ["503A", "503B", "Cold-Chain", "Nationwide", "Auto-Routed", "Compliant"];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <div style={{ fontFamily: FB, fontSize: 8, fontWeight: 700, color: "#fff", backgroundColor: PR, padding: "2px 7px", borderRadius: 4, letterSpacing: "0.04em" }}>503A/503B</div>
        <div style={{ fontFamily: FB, fontSize: 9, color: "#999" }}>Auto-routed</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {sources.map(function(s, i) {
          return (
            <div key={i} style={{ fontFamily: FB, fontSize: 9, fontWeight: 500, color: "#666", backgroundColor: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 6, padding: "5px 10px" }}>{s}</div>
          );
        })}
      </div>
      <div style={{ marginTop: 10, display: "flex", gap: 4 }}>
        {["Rx received", "Routed", "Compounded", "Shipped"].map(function(step, i) {
          return (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ width: "100%", height: 3, borderRadius: 2, backgroundColor: i < 3 ? PR : "rgba(0,0,0,0.06)", marginBottom: 4 }} />
              <div style={{ fontFamily: FB, fontSize: 7, color: i < 3 ? PR : "#ccc", fontWeight: 600 }}>{step}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PhysicianVisual() {
  var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <div style={{ fontFamily: FB, fontSize: 8, fontWeight: 700, color: "#fff", backgroundColor: PR, padding: "2px 7px", borderRadius: 4, letterSpacing: "0.04em" }}>ALL 50 STATES</div>
        <div style={{ fontFamily: FB, fontSize: 9, color: "#999" }}>Async review</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {states.map(function(st, i) {
          return (
            <div key={i} style={{ fontFamily: FB, fontSize: 6, fontWeight: 600, color: PR, backgroundColor: `${PR}0a`, borderRadius: 2, padding: "2px 4px", lineHeight: 1 }}>{st}</div>
          );
        })}
      </div>
      <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ fontFamily: FB, fontSize: 18, fontWeight: 800, color: "#111" }}>52</div>
        <div style={{ fontFamily: FB, fontSize: 9, color: "#999", lineHeight: 1.3 }}>min avg<br />response</div>
      </div>
    </div>
  );
}

function LifecycleVisual() {
  var stages = [
    { label: "Intake", icon: "✓" },
    { label: "Approval", icon: "✓" },
    { label: "Messaging", icon: "✓" },
    { label: "Reorders", icon: "✓" },
    { label: "Compliance", icon: "✓" },
    { label: "Dashboard", icon: "✓" },
  ];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <div style={{ fontFamily: FB, fontSize: 8, fontWeight: 700, color: "#fff", backgroundColor: PR, padding: "2px 7px", borderRadius: 4, letterSpacing: "0.04em" }}>HIPAA</div>
        <div style={{ fontFamily: FB, fontSize: 9, color: "#999" }}>Certified</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {stages.map(function(s, i) {
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 8px", borderRadius: 6, backgroundColor: "rgba(36,92,58,0.03)", border: "1px solid rgba(36,92,58,0.06)" }}>
              <span style={{ fontFamily: FB, fontSize: 9, fontWeight: 900, color: PR }}>{s.icon}</span>
              <span style={{ fontFamily: FB, fontSize: 9, fontWeight: 500, color: "#555" }}>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

var SYSTEMS = [
  {
    num: "01",
    label: "TELEFORMS",
    title: "Proprietary Teleforms",
    body: "Multi-step clinical intake flows designed like a premium app. Alternates between data collection and persuasion screens. BMI calculation, dose metering, goal charts, add-on selection, and direct checkout.",
    Visual: TeleformVisual,
  },
  {
    num: "02",
    label: "PHARMACY",
    title: "Pharmacy Network",
    body: "503A and 503B compounding network. Cold-chain logistics nationwide. Prescriptions auto-route to the correct pharmacy. No sourcing, no vendor management, no inventory.",
    Visual: PharmacyVisual,
  },
  {
    num: "03",
    label: "PHYSICIANS",
    title: "Physician Network",
    body: "Licensed providers in all 50 states. Async review — patients approved in under 52 minutes on average. No scheduling, no phone calls, no clinic bottlenecks.",
    Visual: PhysicianVisual,
  },
  {
    num: "04",
    label: "COMPLIANCE",
    title: "Patient Lifecycle",
    body: "HIPAA-compliant intake, approvals, messaging, reorders, compliance tracking. Full patient lifecycle in one certified system. AI-driven triage. 100K+ monthly visits at scale.",
    Visual: LifecycleVisual,
  },
];

/* ── Main Component ── */

export default function Block() {
  var _activeStep = useState(0);
  var activeStep = _activeStep[0];
  var setActiveStep = _activeStep[1];

  var subhead = useTextSetting({
    name: "subhead",
    label: "How It Works Subhead",
    initialValue: "Three steps. Days, not months. No technical or medical background required.",
  });

  var step = STEPS[activeStep];

  return (
    <div>
      {/* ═══ HOW IT WORKS ═══ */}
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 96px)" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontFamily: FB,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0f0f0f",
              marginBottom: 12,
            }}>
              How it{" "}
              <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>works.</em>
            </h2>
            <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, color: "#888", maxWidth: 500, margin: "0 auto" }}>{subhead}</p>
          </div>

          {/* Step Tabs */}
          <div style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: 48, justifyContent: "center" }}>
            {STEPS.map(function(s, i) {
              var isActive = activeStep === i;
              return (
                <button
                  key={i}
                  onClick={function() { setActiveStep(i); }}
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#111" : "#999",
                    padding: "14px 28px",
                    background: "none",
                    border: "none",
                    borderBottom: isActive ? "2px solid " + PR : "2px solid transparent",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                    marginBottom: -1,
                  }}
                >
                  {s.num} — {s.tab}
                </button>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — Text */}
            <div style={{ paddingTop: 8 }}>
              <h3 style={{
                fontFamily: FB,
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#0f0f0f",
                marginBottom: 20,
              }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "#555", marginBottom: 24, maxWidth: 460 }}>
                {step.body}
              </p>
              {/* Checkmark items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {["No FDA registration or physician network to build", "No legal team or vendor negotiations", "Apply, get approved, go live — in days not months"].map(function(item, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, fontFamily: FB, color: "#555" }}>
                      <span style={{ color: PR, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
              {/* Highlight */}
              <div style={{ padding: "12px 16px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 600, color: PR, margin: 0 }}>
                  {step.highlight}
                </p>
              </div>
            </div>

            {/* Right — Mockup */}
            <div>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ FOUR SYSTEMS ALREADY BUILT ═══ */}
      <div style={{ backgroundColor: "#f5f2ed" }}>
        <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(48px, 8vw, 64px)" }}>

          <p style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: PR, textTransform: "uppercase", marginBottom: 20 }}>
            WHAT YOU PLUG INTO
          </p>
          <h2 style={{
            fontFamily: FB,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#0f0f0f",
            marginBottom: 16,
            maxWidth: 700,
          }}>
            Four essential systems —{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>already built.</em>
          </h2>
          <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#555", marginBottom: 48, maxWidth: 600 }}>
            What took other operators years and millions to build is already live, tested, and waiting for your brand.
          </p>

          {/* 2×2 System Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
            {SYSTEMS.map(function(sys, i) {
              var Visual = sys.Visual;
              return (
                <div key={i} style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.06)",
                  padding: "clamp(24px, 3vw, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}>
                  {/* Visual */}
                  <div style={{ marginBottom: 4 }}>
                    <Visual />
                  </div>
                  {/* Number + Label */}
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FB, fontSize: 12, color: "#bbb" }}>{sys.num}</span>
                    <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", color: "#999", textTransform: "uppercase" }}>{sys.label}</span>
                  </div>
                  {/* Title */}
                  <h3 style={{ fontFamily: FB, fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#111" }}>
                    {sys.title}
                  </h3>
                  {/* Body */}
                  <p style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#666" }}>
                    {sys.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ TELEFORM CALLOUT ═══ */}
      <div style={{ backgroundColor: "#16625F" }}>
        <div className="container" style={{ paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}>
          <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <h3 style={{
                fontFamily: FB,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "#fff",
                marginBottom: 16,
              }}>
                The form{" "}
                <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: "rgba(134,239,172,0.9)" }}>is</em>
                {" "}the product.
              </h3>
              <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "rgba(255,255,255,0.6)", marginBottom: 28, maxWidth: 460 }}>
                Most telehealth platforms hand you a generic form and call it an intake. Athos teleforms are proprietary 8–13 step clinical flows built on one rule: every screen either collects one piece of data or builds confidence to continue. Nothing else exists.
              </p>
              {/* Feature list */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
                {TELEFORM_FEATURES.map(function(f, i) {
                  return (
                    <span key={i} style={{
                      fontFamily: FB,
                      fontSize: 12,
                      fontWeight: 500,
                      color: "rgba(134,239,172,0.8)",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 700 }}>✓</span>
                      {f}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right — Teleform screens */}
            <div style={{ display: "flex", gap: 10 }}>
              {/* Dark welcome */}
              <div style={{ flex: 1, borderRadius: 12, backgroundColor: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)", padding: 16, minHeight: 200 }}>
                <div style={{ fontFamily: FB, fontSize: 8, color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>STEP 1</div>
                <div style={{ fontFamily: FH, fontSize: 16, color: "#fff", marginBottom: 6 }}>Hi Sarah,</div>
                <div style={{ fontFamily: FB, fontSize: 10, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, marginBottom: 16 }}>Let's find the right treatment for your goals.</div>
                <div style={{ height: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.06)" }}>
                  <div style={{ width: "12%", height: "100%", borderRadius: 2, background: "linear-gradient(90deg, #86efac, #3DBDD1)" }} />
                </div>
              </div>
              {/* Light BMI */}
              <div style={{ flex: 1, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.95)", padding: 16, minHeight: 200 }}>
                <div style={{ fontFamily: FB, fontSize: 8, color: PR, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>STEP 5</div>
                <div style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#111", marginBottom: 12 }}>Your profile</div>
                <div style={{ textAlign: "center", margin: "16px 0" }}>
                  <div style={{ fontFamily: FB, fontSize: 32, fontWeight: 800, color: PR }}>32.5</div>
                  <div style={{ fontFamily: FB, fontSize: 9, color: "#999" }}>BMI — Standard tier</div>
                </div>
                <div style={{ height: 4, borderRadius: 2, backgroundColor: "rgba(36,92,58,0.08)" }}>
                  <div style={{ width: "55%", height: "100%", borderRadius: 2, backgroundColor: PR }} />
                </div>
              </div>
              {/* Dark goal */}
              <div style={{ flex: 1, borderRadius: 12, backgroundColor: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)", padding: 16, minHeight: 200 }}>
                <div style={{ fontFamily: FB, fontSize: 8, color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>STEP 7</div>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <div style={{ fontFamily: FB, fontSize: 36, fontWeight: 800, color: "#fff" }}>196</div>
                  <div style={{ fontFamily: FB, fontSize: 9, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>lbs — your goal</div>
                  <div style={{ height: 3, borderRadius: 2, background: "linear-gradient(90deg, #86efac, #3DBDD1)", marginTop: 16 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}