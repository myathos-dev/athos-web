import { useState, useEffect } from "react";

var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var STATS = [
  { eyebrow: "Scripts written", value: "3M+" },
  { eyebrow: "Pharmacy sources", value: "11" },
  { eyebrow: "Avg fulfillment", value: "48 hrs" },
  { eyebrow: "Monthly fee", value: "$0" },
];

var CHECKS = [
  "11-pharmacy network",
  "$0/month",
  "$7.50/item fulfillment",
  "Cold ship standard",
];

var ROTATING = [
  "delays.",
  "backorders.",
  "excuses.",
  "phone calls.",
  "lost patients.",
];

export default function Block() {
  var _wordIdx = useState(0);
  var wordIdx = _wordIdx[0];
  var setWordIdx = _wordIdx[1];
  var _fading = useState(false);
  var fading = _fading[0];
  var setFading = _fading[1];

  useEffect(function() {
    var interval = setInterval(function() {
      setFading(true);
      setTimeout(function() {
        setWordIdx(function(prev) { return (prev + 1) % ROTATING.length; });
        setFading(false);
      }, 400);
    }, 2800);
    return function() { clearInterval(interval); };
  }, []);

  var logo = {
      src: "https://assets.softr-files.com/applications/9da2c9c4-100f-4a3e-bd8f-4c76ad65641a/assets/c62f37e0-e84b-4e99-8a52-6e2e1ebb3e27.png",
      alt: "Athos",
    };
  var subheadline = "Single-source pharmacies backorder without warning. Fulfillment stretches to weeks. Patients leave. You built the program — one vendor is undermining it. That ends here.";
  var cta1Link = { action: "OPEN_PAGE", destination: "/clinic/signup", openIn: "SELF" };
  var cta2Link = { action: "OPEN_PAGE", destination: "/clinic", openIn: "SELF" };
  var cta3Link = { action: "OPEN_PAGE", destination: "/enterprise", openIn: "SELF" };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container" style={{ paddingTop: "clamp(80px, 12vw, 144px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}>
        <div style={{ maxWidth: 1100 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <img src={logo.src} alt={logo.alt} style={{ height: 24, width: "auto" }} />
            <div style={{ width: 1, height: 20, backgroundColor: "rgba(0,0,0,0.15)" }} />
            <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "#6b7280" }}>Clinic</span>
          </div>

          <h1 style={{ fontFamily: FB, fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.035em", color: "#0f0f0f", marginBottom: 36, maxWidth: 1000 }}>
            Your pharmacy is the
            <br />
            weakest link in your{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>practice.</em>
            <br />
            No more{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR, display: "inline-block", transition: "opacity 400ms ease, transform 400ms ease", opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0)" }}>
              {ROTATING[wordIdx]}
            </em>
          </h1>

          <p style={{ fontFamily: FB, fontSize: "clamp(15px, 1.4vw, 17px)", fontWeight: 400, lineHeight: 1.65, color: "#555", maxWidth: 640, marginBottom: 36 }}>
            {subheadline}
          </p>

          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 24 }}>
            <a href={cta1Link.destination} target={cta1Link.openIn === "NEW_TAB" ? "_blank" : undefined} className="inline-flex items-center justify-center text-white font-semibold px-8 py-6 text-sm rounded-full" style={{ backgroundColor: PR, border: "none" }}>Fix your supply chain →</a>
            <a href={cta2Link.destination} target={cta2Link.openIn === "NEW_TAB" ? "_blank" : undefined} className="inline-flex items-center justify-center font-semibold px-8 py-6 text-sm rounded-full" style={{ backgroundColor: "transparent", color: "#333", border: "1px solid rgba(0,0,0,0.15)" }}>See how it works</a>
            <a style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "#9ca3af", textDecoration: "underline", textUnderlineOffset: 3, cursor: "pointer", padding: "0 8px" }} href={cta3Link.destination} target={cta3Link.openIn === "NEW_TAB" ? "_blank" : undefined}>
              Looking for Telehealth?
            </a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px" }}>
            {CHECKS.map(function(c, i) {
              return (
                <span key={i} style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "#9ca3af", display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ color: PR, fontWeight: 700 }}>✓</span>{c}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "clamp(48px, 8vw, 96px)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          {STATS.map(function(stat, i) {
            return (
              <div key={i} style={{ padding: "clamp(20px, 3vw, 28px)", borderRight: i < STATS.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none" }}>
                <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>{stat.eyebrow}</div>
                <div style={{ fontFamily: FB, fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0f0f0f" }}>{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}