
var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var PRICING = [
  { label: "Onboarding", value: "$2,500", detail: "One-time (compared to $20,000+ elsewhere)" },
  { label: "Monthly", value: "$0", detail: "No subscription. No recurring fees." },
  { label: "Platform cost", value: "$7.50", detail: "Per item fulfilled. Cold shipped. Tracked." },
];

export default function Block() {
  var body = "$2,500 one-time onboarding — compared to $20,000+ elsewhere. After that, you pay $7.50 per item fulfilled. That is the entire platform cost. No monthly subscription. No minimum volume. No long-term contract.";

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 120px)" }}>
        <div style={{ maxWidth: 700, marginBottom: 48 }}>
          <p style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: PR, textTransform: "uppercase", marginBottom: 20 }}>PRICING</p>
          <h2 style={{ fontFamily: FB, fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0f0f0f", marginBottom: 20 }}>
            No monthly subscription.
            <br />
            No minimum volume.
            <br />
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>$7.50 per item.</em>
          </h2>
          <p style={{ fontFamily: FB, fontSize: "clamp(15px, 1.3vw, 17px)", fontWeight: 400, lineHeight: 1.65, color: "#555" }}>{body}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20, marginBottom: 40 }}>
          {PRICING.map(function(p, i) {
            return (
              <div key={i} style={{ backgroundColor: "#fff", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", padding: "clamp(28px, 3.5vw, 40px)", textAlign: "center" }}>
                <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#999", marginBottom: 12 }}>{p.label}</div>
                <div style={{ fontFamily: FB, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#0f0f0f", marginBottom: 8 }}>{p.value}</div>
                <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "#888", lineHeight: 1.5 }}>{p.detail}</div>
              </div>
            );
          })}
        </div>

        <p style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "#555", textAlign: "center", maxWidth: 520, margin: "0 auto", lineHeight: 1.55 }}>
          How much are you losing to delays, reorders, and patient churn every month? The onboarding pays for itself with the first week of reliable fulfillment.
        </p>
      </div>
    </div>
  );
}
