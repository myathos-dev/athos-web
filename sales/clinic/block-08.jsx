
var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var ROWS = [
  { label: "Pharmacy sources", current: "1", athos: "11" },
  { label: "Backorder protection", current: "None", athos: "Auto-routing to next source" },
  { label: "Avg fulfillment", current: "1–3 weeks", athos: "48 hours" },
  { label: "Cold chain", current: "Inconsistent", athos: "Standard on every order" },
  { label: "Monthly fee", current: "Varies", athos: "$0" },
  { label: "Per-item cost", current: "Varies", athos: "$7.50 fulfillment" },
  { label: "Buying power", current: "Your volume alone", athos: "3M+ scripts network" },
  { label: "Price matching", current: "N/A", athos: "Within 10% or saves 10%" },
  { label: "Ordering", current: "Phone / fax / email", athos: "Online portal with tracking" },
  { label: "Onboarding", current: "N/A", athos: "$2,500 (compared to $20,000+)" },
];

export default function Block() {
  var subhead = "Side by side. Every metric that matters.";

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 120px)" }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: PR, textTransform: "uppercase", marginBottom: 20 }}>THE COMPARISON</p>
          <h2 style={{ fontFamily: FB, fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0f0f0f", marginBottom: 12 }}>
            Your current pharmacy vs Athos{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>Clinic.</em>
          </h2>
          <p style={{ fontFamily: FB, fontSize: "clamp(15px, 1.3vw, 17px)", fontWeight: 400, color: "#555" }}>{subhead}</p>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {/* Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ padding: "16px 0", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "#999", textTransform: "uppercase", paddingLeft: 4, display: "none" }} className="md:block" />
            <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "#dc2626", textTransform: "uppercase", display: "none" }} className="md:block">Your current setup</div>
            <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: PR, textTransform: "uppercase", display: "none" }} className="md:block">Athos Clinic</div>
          </div>

          {/* Rows */}
          {ROWS.map(function(row, i) {
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3" style={{ padding: "16px 0", borderBottom: "1px solid rgba(0,0,0,0.06)", alignItems: "center" }}>
                <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "#333", paddingLeft: 4, marginBottom: 8 }} className="md:mb-0">{row.label}</div>
                <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "#999", marginBottom: 4 }} className="md:mb-0">
                  <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: "#dc2626", letterSpacing: "0.04em", textTransform: "uppercase", marginRight: 8 }} className="md:hidden">CURRENT: </span>
                  {row.current}
                </div>
                <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "#111" }}>
                  <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: PR, letterSpacing: "0.04em", textTransform: "uppercase", marginRight: 8 }} className="md:hidden">ATHOS: </span>
                  {row.athos}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}