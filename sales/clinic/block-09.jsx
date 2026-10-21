
var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";
var DARK = "#16625F";

var STATS = [
  { value: "3M+", label: "Scripts written" },
  { value: "11", label: "Pharmacy sources" },
  { value: "48 hrs", label: "Avg fulfillment" },
  { value: "$0", label: "Monthly fee" },
];

export default function Block() {
  var body = "You have the MD. You have the patients. You have the clinical expertise. The only thing broken is the pharmacy. We fix that — permanently. 11 sources. 3M+ scripts of buying power. $7.50 per item. No monthly fee.";
  var ctaLink = { action: "OPEN_PAGE", destination: "/clinic/signup", openIn: "SELF" };
  var cta2Link = { action: "OPEN_PAGE", destination: "/clinic/signup", openIn: "SELF" };

  return (
    <div style={{ backgroundColor: DARK }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(48px, 8vw, 64px)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "clamp(48px, 8vw, 80px)" }}>
          {STATS.map(function(stat, i) {
            return (
              <div key={i} style={{ padding: "clamp(24px, 3.5vw, 36px)", borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontFamily: FB, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1, marginBottom: 8 }}>{stat.value}</div>
                <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "clamp(80px, 12vw, 144px)" }}>
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 style={{ fontFamily: FB, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", marginBottom: 24 }}>
              This is the last industry contact you will{" "}
              <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: "rgba(134,239,172,0.9)" }}>need.</em>
            </h2>
            <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", maxWidth: 520 }}>{body}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
            <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined} className="inline-flex items-center justify-center font-semibold text-sm rounded-full" style={{ display: "block", textAlign: "center", backgroundColor: "#fff", color: DARK, border: "none", padding: "16px 32px", fontSize: 15, fontWeight: 600 }}>Start onboarding →</a>
            <a href={cta2Link.destination} target={cta2Link.openIn === "NEW_TAB" ? "_blank" : undefined} className="inline-flex items-center justify-center font-semibold text-sm rounded-full" style={{ display: "block", textAlign: "center", backgroundColor: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "16px 32px", fontSize: 15, fontWeight: 600 }}>Book a call</a>
            <p style={{ fontFamily: FB, fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.6, marginTop: 4 }}>
              $2,500 onboarding. No contract. No minimum volume. NPI + DEA required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}