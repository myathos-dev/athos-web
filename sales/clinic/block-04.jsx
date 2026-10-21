import { useState } from "react";

var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var STEPS = [
  {
    num: "1",
    tab: "Access the Portal",
    title: "Onboard in 48 hours.",
    body: "Provide your MD's NPI and DEA license for each state you ship to. Your MDs keep writing scripts the same way. The portal routes orders across 11 pharmacies for fastest fulfillment.",
    detail: "$2,500 onboarding. Portal access within 48 hours of signing.",
  },
  {
    num: "2",
    tab: "Place Orders",
    title: "Select compound. Best source found.",
    body: "Select compound, concentration, quantity. The system identifies the best source by availability, price, and ship time. Cold chain standard on every order.",
    detail: "Automated routing across 11 pharmacy sources.",
  },
  {
    num: "3",
    tab: "Shipped to Patient",
    title: "Direct-to-patient. Cold shipped. Tracked.",
    body: "Your patient gets their medication on time. You get confirmation. No follow-up calls to the pharmacy. No chasing tracking numbers. No excuses.",
    detail: "$7.50 per item fulfilled. No monthly fee.",
  },
];

function PortalMockup() {
  return (
    <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", backgroundColor: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", backgroundColor: "#f9f9f9", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ff5f57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#28ca41" }} />
        </div>
        <div style={{ flex: 1, backgroundColor: "#f0f0f0", borderRadius: 6, padding: "4px 12px", fontFamily: FB, fontSize: 11, color: "#999", fontWeight: 500 }}>clinic.athoswellness.com/orders</div>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontFamily: FB, fontSize: 13, fontWeight: 700, color: "#111" }}>New Order</span>
          <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: PR, backgroundColor: PR + "12", padding: "2px 8px", borderRadius: 9999 }}>COLD SHIP</span>
        </div>
        {[
          { label: "Compound", value: "Semaglutide 2.5mg/ml" },
          { label: "Quantity", value: "1 vial" },
          { label: "Best source", value: "Available — 48hr ship" },
          { label: "Ship to", value: "Patient — Tampa, FL" },
        ].map(function(row, i) {
          return (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
              <span style={{ fontFamily: FB, fontSize: 12, color: "#888" }}>{row.label}</span>
              <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#333" }}>{row.value}</span>
            </div>
          );
        })}
        <div style={{ marginTop: 14, padding: "12px", borderRadius: 8, backgroundColor: PR, textAlign: "center" }}>
          <span style={{ fontFamily: FB, fontSize: 13, fontWeight: 600, color: "#fff" }}>Place Order — $7.50 fulfillment</span>
        </div>
      </div>
    </div>
  );
}

export default function Block() {
  var _active = useState(0);
  var active = _active[0];
  var setActive = _active[1];

  var subhead = "Three steps. No white label. No platform fees. Just a better pharmacy.";

  var step = STEPS[active];

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 96px)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontFamily: FB, fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#0f0f0f", marginBottom: 12 }}>
            Portal. Order. Shipped to{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>patient.</em>
          </h2>
          <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, color: "#888", maxWidth: 500, margin: "0 auto" }}>{subhead}</p>
        </div>

        <div style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: 48, justifyContent: "center", flexWrap: "wrap" }}>
          {STEPS.map(function(s, i) {
            var isActive = active === i;
            return (
              <button key={i} onClick={function() { setActive(i); }}
                style={{ fontFamily: FB, fontSize: 14, fontWeight: isActive ? 600 : 400, color: isActive ? "#111" : "#999", padding: "14px 28px", background: "none", border: "none", borderBottom: isActive ? "2px solid " + PR : "2px solid transparent", cursor: "pointer", transition: "all 200ms ease", marginBottom: -1 }}>
                {s.num} — {s.tab}
              </button>
            );
          })}
        </div>

        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div style={{ paddingTop: 8 }}>
            <h3 style={{ fontFamily: FB, fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0f0f0f", marginBottom: 20 }}>{step.title}</h3>
            <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "#555", marginBottom: 24, maxWidth: 460 }}>{step.body}</p>
            <div style={{ padding: "12px 16px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
              <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 600, color: PR, margin: 0 }}>{step.detail}</p>
            </div>
          </div>
          <div><PortalMockup /></div>
        </div>
      </div>
    </div>
  );
}