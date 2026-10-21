import { useState } from "react";

var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var FAQS = [
  {
    q: "What do I need to get started?",
    a: "An MD prescriber with active NPI and DEA license numbers valid in each state you want to ship medication to. Multi-state clinics need credentials per state. Plus $2,500 onboarding.",
  },
  {
    q: "Do I keep my existing MDs and clinical workflow?",
    a: "Yes. Your MDs keep prescribing the same way. The portal handles routing and fulfillment. Nothing changes on the clinical side.",
  },
  {
    q: "How fast is onboarding?",
    a: "48 hours from signing to portal access.",
  },
  {
    q: "What if my current pharmacy has better pricing on some items?",
    a: "Our network usually matches within 10% or saves you up to 10% depending on compound and source. You can compare item by item before switching.",
  },
  {
    q: "Do you ship directly to patients?",
    a: "Yes. Direct-to-patient. Cold shipped. Tracked. Your patient receives medication at home.",
  },
  {
    q: "What happens when a compound is backordered?",
    a: "The system routes to the next available source across 11 pharmacies. Your patient does not wait.",
  },
  {
    q: "Is there a minimum volume?",
    a: "No. No minimum order volume. No monthly minimums. You pay $7.50 per item fulfilled.",
  },
  {
    q: "Do I need to change my EMR or prescribing workflow?",
    a: "No. The portal sits alongside your existing systems. Your MDs prescribe as usual.",
  },
  {
    q: "What compounds do you carry?",
    a: "1,884 SKUs across 12 clinical categories. 224 compounds from 503A and 503B compounding networks. If your MDs prescribe it, we can source it.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. $2,500 onboarding. No monthly fee. No lock-in.",
  },
  {
    q: "How is this different from just finding another pharmacy?",
    a: "Another pharmacy is another single point of failure. Athos is an 11-pharmacy network with automated routing, cold chain standard, and the buying power of 3M+ scripts. You are not switching pharmacies. You are upgrading your supply chain.",
  },
];

export default function Block() {
  var _open = useState(-1);
  var open = _open[0];
  var setOpen = _open[1];

  function toggle(i) {
    setOpen(open === i ? -1 : i);
  }

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 120px)" }}>
        <h2 style={{ fontFamily: FB, fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#0f0f0f", textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
          Common{" "}
          <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>Questions</em>
        </h2>

        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {FAQS.map(function(faq, i) {
            var isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <button
                  onClick={function() { toggle(i); }}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 4px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}>
                  <span style={{ fontFamily: FB, fontSize: "clamp(14px, 1.2vw, 15px)", fontWeight: 600, color: "#111", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ fontFamily: FB, fontSize: 20, fontWeight: 600, color: "#bbb", flexShrink: 0, width: 24, textAlign: "center", transition: "transform 200ms ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: isOpen ? 400 : 0, transition: "max-height 300ms ease" }}>
                  <p style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, lineHeight: 1.7, color: "#666", padding: "0 4px 24px", maxWidth: 680 }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}