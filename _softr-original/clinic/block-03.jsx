import { useTextSetting } from "@/lib/editable-settings";

var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var SOLUTIONS = [
  {
    num: "01",
    title: "Redundancy.",
    body: "11 pharmacy sources. 503A and 503B compounding. If one is out, the next one fills. Automatic routing. Your patients never wait because your vendor has a problem.",
  },
  {
    num: "02",
    title: "Buying power.",
    body: "3M+ prescriptions written on this network. That volume unlocks pricing, priority, and availability your single pharmacy cannot match.",
  },
  {
    num: "03",
    title: "Price match.",
    body: "Our network usually matches your current pricing within 10% — or saves you up to 10% depending on compound and source. No surprises.",
  },
];

export default function Block() {
  var body = useTextSetting({
    name: "body",
    label: "Body Text",
    initialValue: "Athos operates an 11-pharmacy supply chain built on 3M+ scripts of buying power. When one source is backordered, the system routes to another. Your patients get their medication. You never have the conversation about delays again.",
  });

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 96px)" }}>
        <div style={{ maxWidth: 700, marginBottom: 48 }}>
          <p style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: PR, textTransform: "uppercase", marginBottom: 20 }}>THE FIX</p>
          <h2 style={{ fontFamily: FB, fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0f0f0f", marginBottom: 20 }}>
            11 pharmacies. One portal.{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: PR }}>Never</em> run out again.
          </h2>
          <p style={{ fontFamily: FB, fontSize: "clamp(15px, 1.3vw, 17px)", fontWeight: 400, lineHeight: 1.65, color: "#555" }}>{body}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
          {SOLUTIONS.map(function(s, i) {
            return (
              <div key={i} style={{ padding: "clamp(24px, 3vw, 36px)", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", backgroundColor: "#FAFAF8", display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ fontFamily: FB, fontSize: 12, color: "#bbb" }}>{s.num}</span>
                <h3 style={{ fontFamily: FB, fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#111" }}>{s.title}</h3>
                <p style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#666" }}>{s.body}</p>
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill={PR} opacity="0.1" /><path d="M5 8L7 10L11 6" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span style={{ fontFamily: FB, fontSize: 13, fontWeight: 600, color: PR }}>{["11 sources active", "3M+ scripts volume", "±10% price match"][i]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
