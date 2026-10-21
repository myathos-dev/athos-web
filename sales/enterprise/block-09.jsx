
var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";
var DARK = "#16625F";

var CHECKS = [
  { title: "Own Every Customer Touchpoint", desc: "Patients interact with your brand from discovery to delivery. They become your customers — not ours." },
  { title: "Invisible Infrastructure", desc: "Telehealth platform, physician network, pharmacy routing — all running silently behind your brand." },
  { title: "Yours to Keep", desc: "Patient records, purchase history, contact info — all under your brand, all in your CRM." },
];

var STATS = [
  { value: "1,884", label: "SKUs available", detail: "Across 12 clinical categories" },
  { value: "224", label: "Compounds", detail: "Across 12 clinical categories" },
  { value: "50", label: "States covered", detail: "Licensed physicians nationwide" },
  { value: "3M+", label: "Patient visits", detail: "Processed on the infrastructure" },
];

/* ── Patient Directory Mockup (dark variant) ── */

function DirectoryMockup() {
  var rows = [
    { name: "John D.", product: "Semaglutide .25", status: "Approved", color: "#86efac" },
    { name: "Alice B.", product: "Tirzepatide 5mg", status: "Shipped", color: "rgba(255,255,255,0.4)" },
    { name: "Sarah C.", product: "Sermorelin 3mg", status: "Approved", color: "#86efac" },
    { name: "Connor T.", product: "BPC-157 5mg", status: "Pending", color: "#fbbf24" },
  ];
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Title bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ff5f57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#28ca41" }} />
        </div>
        <div style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "4px 12px", fontFamily: FB, fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>yourbrand.com/dashboard</div>
      </div>
      {/* Sidebar + Content */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: 120, padding: "14px 12px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 12 }}>Workspace</div>
          {["Overview", "Patients", "Prescriptions"].map(function(item, i) {
            return (
              <div key={i} style={{ fontFamily: FB, fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "#fff" : "rgba(255,255,255,0.3)", padding: "6px 0" }}>{item}</div>
            );
          })}
        </div>
        {/* Main content */}
        <div style={{ flex: 1, padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontFamily: FB, fontSize: 13, fontWeight: 700, color: "#fff" }}>Patient Directory</span>
            <span style={{ fontFamily: FB, fontSize: 9, fontWeight: 600, color: "#86efac", letterSpacing: "0.04em", textTransform: "uppercase" }}>LIVE INTAKE FEED</span>
          </div>
          {rows.map(function(r, i) {
            return (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <div>
                  <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>{r.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: FB, fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{r.product}</span>
                  <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 700, color: r.color }}>{r.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Footer strip */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: FB, fontSize: 10, color: "rgba(255,255,255,0.25)" }}>Powered by</span>
        <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>invisible to your patients</span>
      </div>
    </div>
  );
}

/* ── Main Component ── */

export default function Block() {
  var ctaLink = {
      action: "OPEN_PAGE",
      destination: "/enterprise/signup",
      openIn: "SELF",
    };
  var cta2Link = {
      action: "OPEN_PAGE",
      destination: "/enterprise/signup",
      openIn: "SELF",
    };
  var closingBody = "The demand for GLP-1s, peptides, and clinical wellness is accelerating. The window to launch something legitimate is open right now. We take on a limited number of enterprise partners at a time.";

  return (
    <div style={{ backgroundColor: DARK }}>

      {/* ═══ WHITE LABEL PROOF ═══ */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(48px, 8vw, 80px)",
        }}
      >
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(134,239,172,0.7)", textTransform: "uppercase", marginBottom: 20 }}>
              WHITE LABEL
            </p>
            <h2 style={{
              fontFamily: FB,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: 20,
            }}>
              Your patients never hear{" "}
              <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: "rgba(134,239,172,0.9)" }}>our name.</em>
            </h2>
            <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "rgba(255,255,255,0.55)", marginBottom: 32, maxWidth: 460 }}>
              Every touchpoint — portal, intake form, prescription label, email confirmation — carries your brand. We are invisible. That is the product.
            </p>

            {/* Checkpoints */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CHECKS.map(function(c, i) {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      backgroundColor: "rgba(134,239,172,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}>
                      <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 800, color: "#86efac" }}>✓</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: FB, fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{c.title}</div>
                      <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{c.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Mockup */}
          <div>
            <DirectoryMockup />
          </div>
        </div>
      </div>

      {/* ═══ STATS STRIP ═══ */}
      <div className="container" style={{ paddingBottom: "clamp(48px, 8vw, 80px)" }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {STATS.map(function(stat, i) {
            return (
              <div
                key={i}
                style={{
                  padding: "clamp(24px, 3.5vw, 36px)",
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div style={{
                  fontFamily: FB,
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: 4 }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: FB, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ FINAL CTA ═══ */}
      <div className="container" style={{ paddingBottom: "clamp(80px, 12vw, 144px)" }}>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "clamp(48px, 8vw, 96px)",
          }}
        >
          <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — Closing text */}
            <div>
              <h2 style={{
                fontFamily: FB,
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#fff",
                marginBottom: 24,
              }}>
                The operators who build compliant infrastructure now will own this market.
              </h2>
              <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", marginBottom: 16, maxWidth: 520 }}>
                {closingBody}
              </p>
              <p style={{ fontFamily: FB, fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", maxWidth: 520 }}>
                Apply and we will look at your business, your goals, and your timeline. If you are a fit, we will show you exactly how it works.
              </p>
            </div>

            {/* Right — CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
              <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined}
                className="inline-flex items-center justify-center font-semibold text-sm rounded-full"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  color: DARK,
                  border: "none",
                  padding: "16px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                  Apply for Enterprise →
                </a>
              <a href={cta2Link.destination} target={cta2Link.openIn === "NEW_TAB" ? "_blank" : undefined}
                className="inline-flex items-center justify-center font-semibold text-sm rounded-full"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "16px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                  Schedule a Call
                </a>
              <p style={{ fontFamily: FB, fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.6, marginTop: 4 }}>
                Both tiers require an application. The call is 15 minutes. No pitch — just a real conversation about your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}