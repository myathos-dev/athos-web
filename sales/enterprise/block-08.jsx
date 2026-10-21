import { useState, useMemo } from "react";

var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var DEFAULT_AOV = 199;
var DEFAULT_MARKUP = 2.75;
var REV_SHARE = 0.50;
var WL_MONTHLY = 500;

function fmt(n) {
  return n >= 1000 ? "$" + Math.round(n).toLocaleString() : "$" + Math.round(n);
}

export default function Block() {
  var subhead = "Adjust the inputs. See what each tier generates. The math does the talking.";

  var _tier = useState("black");
  var tier = _tier[0];
  var setTier = _tier[1];

  var _patients = useState(50);
  var patients = _patients[0];
  var setPatients = _patients[1];

  var _aov = useState(DEFAULT_AOV);
  var aov = _aov[0];
  var setAov = _aov[1];

  var calc = useMemo(function() {
    var gross = patients * aov;
    var pharmPerOrder = aov / DEFAULT_MARKUP;
    var blackNet = gross * REV_SHARE;
    var whiteNet = gross - (patients * pharmPerOrder) - WL_MONTHLY;
    var isWhite = tier === "white";
    var revenue = isWhite ? gross : gross;
    var costs = isWhite ? (patients * pharmPerOrder) + WL_MONTHLY : gross - blackNet;
    var net = isWhite ? whiteNet : blackNet;
    var annual = net * 12;

    var breakeven = Math.ceil(WL_MONTHLY / ((aov * REV_SHARE) - pharmPerOrder));
    if (breakeven < 0 || !isFinite(breakeven)) breakeven = 999;
    var wlAdvantage = whiteNet - blackNet;

    return { revenue: revenue, costs: costs, net: net, annual: annual, breakeven: breakeven, wlAdvantage: wlAdvantage, blackNet: blackNet, whiteNet: whiteNet };
  }, [tier, patients, aov]);

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <div
        className="container"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: FB,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: PR,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            MODEL YOUR REVENUE
          </p>
          <h2
            style={{
              fontFamily: FB,
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0f0f0f",
              marginBottom: 12,
            }}
          >
            See what the numbers{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>look like.</em>
          </h2>
          <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, color: "#555", maxWidth: 500 }}>
            {subhead}
          </p>
        </div>

        {/* Calculator */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            border: "1px solid rgba(0,0,0,0.06)",
            overflow: "hidden",
          }}
        >
          <div className="content grid md:grid-cols-2">
            {/* ── Left: Inputs ── */}
            <div
              style={{
                padding: "clamp(28px, 4vw, 44px)",
                borderRight: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Tier Toggle */}
              <div style={{ marginBottom: 36 }}>
                <label style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#333", display: "block", marginBottom: 10, letterSpacing: "0.02em" }}>
                  Select tier
                </label>
                <div style={{ display: "flex", gap: 0, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { id: "black", label: "Black Label" },
                    { id: "white", label: "White Label" },
                  ].map(function(t) {
                    var isActive = tier === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={function() { setTier(t.id); }}
                        style={{
                          flex: 1,
                          fontFamily: FB,
                          fontSize: 14,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? "#fff" : "#555",
                          backgroundColor: isActive ? PR : "transparent",
                          padding: "12px 20px",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 200ms ease",
                        }}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
                <p style={{ fontFamily: FB, fontSize: 12, color: "#aaa", marginTop: 8 }}>
                  {tier === "black" ? "$0 upfront · 40–60% rev share" : "$10,000 onboarding · $500/mo · you keep the spread"}
                </p>
              </div>

              {/* Patient Slider */}
              <div style={{ marginBottom: 36 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                  <label style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#333", letterSpacing: "0.02em" }}>
                    Monthly patients
                  </label>
                  <span style={{ fontFamily: FB, fontSize: 20, fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>
                    {patients}
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={patients}
                  onChange={function(e) { setPatients(Number(e.target.value)); }}
                  style={{
                    width: "100%",
                    height: 6,
                    borderRadius: 3,
                    appearance: "none",
                    background: "linear-gradient(to right, " + PR + " " + ((patients - 10) / 490 * 100) + "%, rgba(0,0,0,0.06) " + ((patients - 10) / 490 * 100) + "%)",
                    outline: "none",
                    cursor: "pointer",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <span style={{ fontFamily: FB, fontSize: 11, color: "#ccc" }}>10</span>
                  <span style={{ fontFamily: FB, fontSize: 11, color: "#ccc" }}>500</span>
                </div>
              </div>

              {/* AOV Input */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                  <label style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#333", letterSpacing: "0.02em" }}>
                    Avg order value
                  </label>
                </div>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontFamily: FB, fontSize: 15, fontWeight: 600, color: "#888" }}>$</span>
                  <input
                    type="number"
                    min={50}
                    max={1000}
                    value={aov}
                    onChange={function(e) { setAov(Number(e.target.value) || DEFAULT_AOV); }}
                    style={{
                      width: "100%",
                      fontFamily: FB,
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111",
                      padding: "12px 14px 12px 28px",
                      borderRadius: 10,
                      border: "1px solid rgba(0,0,0,0.1)",
                      outline: "none",
                      backgroundColor: "#FAFAF8",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <p style={{ fontFamily: FB, fontSize: 11, color: "#bbb", marginTop: 6 }}>
                  Avg markup: {DEFAULT_MARKUP}x · Rev share: {Math.round(REV_SHARE * 100)}%
                </p>
              </div>
            </div>

            {/* ── Right: Outputs ── */}
            <div
              style={{
                padding: "clamp(28px, 4vw, 44px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Output Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
                {[
                  { label: "Monthly gross", value: fmt(calc.revenue) },
                  { label: "Monthly costs", value: fmt(calc.costs) },
                  { label: "Monthly net", value: fmt(calc.net), highlight: true },
                  { label: "Annualized", value: fmt(calc.annual), highlight: true },
                ].map(function(o, i) {
                  return (
                    <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 16 }}>
                      <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "#999", textTransform: "uppercase", marginBottom: 6 }}>
                        {o.label}
                      </div>
                      <div style={{
                        fontFamily: FB,
                        fontSize: "clamp(28px, 3.5vw, 40px)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: o.highlight ? PR : "#111",
                      }}>
                        {o.value}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Break-even Insight */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: 10,
                  backgroundColor: calc.wlAdvantage > 0 && tier === "white"
                    ? "rgba(36,92,58,0.04)"
                    : "rgba(0,0,0,0.02)",
                  border: calc.wlAdvantage > 0 && tier === "white"
                    ? "1px solid rgba(36,92,58,0.12)"
                    : "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {tier === "black" ? (
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "#555", lineHeight: 1.55, margin: 0 }}>
                    At <strong style={{ color: "#111" }}>{patients} patients/mo</strong>, Black Label nets{" "}
                    <strong style={{ color: PR }}>{fmt(calc.blackNet)}/mo</strong>.
                    White Label would net <strong style={{ color: "#111" }}>{fmt(calc.whiteNet)}/mo</strong>.
                    {calc.wlAdvantage > 0
                      ? " Switch to White Label to earn " + fmt(calc.wlAdvantage) + " more per month."
                      : " Black Label is the better model at this volume."}
                  </p>
                ) : (
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "#555", lineHeight: 1.55, margin: 0 }}>
                    At <strong style={{ color: "#111" }}>{patients} patients/mo</strong>, White Label nets{" "}
                    <strong style={{ color: PR }}>{fmt(calc.whiteNet)}/mo</strong>.
                    Black Label would net <strong style={{ color: "#111" }}>{fmt(calc.blackNet)}/mo</strong>.
                    {calc.wlAdvantage > 0
                      ? " You're earning " + fmt(calc.wlAdvantage) + " more per month on White Label."
                      : " Consider starting with Black Label at this volume."}
                  </p>
                )}
              </div>

              {/* Break-even line */}
              <p style={{ fontFamily: FB, fontSize: 12, color: "#aaa", marginTop: 12, textAlign: "center" }}>
                White Label outearns Black Label at ~{calc.breakeven} patients/mo.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "#999", textAlign: "center", marginTop: 24, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Black Label is free to start. White Label pays for itself at ~25 patients/month. Most partners start Black Label and upgrade when volume justifies ownership.
        </p>
      </div>
    </div>
  );
}