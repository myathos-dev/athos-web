
var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var POINTS = [
  "503A and 503B compounding network",
  "Cold chain shipping on every order",
  "Automated routing by availability and ship time",
  "Price matching within 10% or up to 10% savings",
  "Backorder protection — if one source is out, another fills",
  "48-hour average fulfillment",
];

function NetworkVisual() {
  return (
    <svg style={{ width: "100%", height: "auto" }} viewBox="0 0 400 200" fill="none">
      {/* Center hub */}
      <circle cx="200" cy="100" r="28" stroke={PR} strokeWidth="2" />
      <circle cx="200" cy="100" r="10" fill={PR} opacity="0.12" />
      <text x="200" y="97" textAnchor="middle" fill={PR} fontSize="10" fontWeight="700">YOUR</text>
      <text x="200" y="108" textAnchor="middle" fill={PR} fontSize="8" fontWeight="500">PORTAL</text>
      {/* Pharmacy nodes in a circle */}
      {[0,1,2,3,4,5,6,7,8,9,10].map(function(i) {
        var angle = (i / 11) * Math.PI * 2 - Math.PI / 2;
        var cx = 200 + Math.cos(angle) * 85;
        var cy = 100 + Math.sin(angle) * 78;
        return (
          <g key={i}>
            <path d={"M" + (200 + Math.cos(angle) * 32) + " " + (100 + Math.sin(angle) * 32) + "L" + (cx - Math.cos(angle) * 14) + " " + (cy - Math.sin(angle) * 14)} stroke={PR} strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
            <circle cx={cx} cy={cy} r="12" stroke={PR} strokeWidth="1.3" strokeDasharray="3 3" opacity="0.5" />
            <text x={cx} y={cy + 1} textAnchor="middle" fill={PR} fontSize="6" fontWeight="700" opacity="0.6">503</text>
            <text x={cx} y={cy + 8} textAnchor="middle" fill={PR} fontSize="5" fontWeight="500" opacity="0.4">{i % 2 === 0 ? "A" : "B"}</text>
          </g>
        );
      })}
      <text x="200" y="195" textAnchor="middle" fill={PR} fontSize="9" fontWeight="500" opacity="0.5">11-source compounding network — automated routing</text>
    </svg>
  );
}

export default function Block() {
  var body = "This is not a pharmacy referral. This is an 11-source compounding network with automated routing, cold chain logistics, and the buying power of 3M+ prescriptions. You plug into infrastructure that took years and millions to build.";

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 120px)" }}>
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: PR, textTransform: "uppercase", marginBottom: 20 }}>THE NETWORK</p>
            <h2 style={{ fontFamily: FB, fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0f0f0f", marginBottom: 20 }}>
              The supply chain behind 3 million{" "}
              <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>scripts.</em>
            </h2>
            <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "#555", marginBottom: 32, maxWidth: 480 }}>{body}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {POINTS.map(function(p, i) {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><circle cx="8" cy="8" r="7" fill={PR} opacity="0.1" /><path d="M5 8L7 10L11 6" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "#555" }}>{p}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div style={{ borderRadius: 12, backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", padding: "clamp(24px, 3vw, 40px)" }}>
              <NetworkVisual />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}