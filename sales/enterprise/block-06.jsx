
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const PR = "#245C3A";

const FEATURES = [
  { label: "Upfront cost", black: "$0", white: "$5,000" },
  { label: "Monthly cost", black: "$0", white: "$500" },
  { label: "Revenue model", black: "40–60% rev share", white: "You keep 100% of the margin (2.5–3x)" },
  { label: "Branding", black: "Athos-branded", white: "Your brand, your domain" },
  { label: "Patient intake forms", black: "Athos-branded teleforms", white: "Custom teleforms — your brand, your copy, your colors" },
  { label: "Checkout", black: "Athos checkout via Orbit", white: "Your Stripe, your checkout via Orbit" },
  { label: "Prescriber network", black: "Included — 50 states", white: "Included — 50 states" },
  { label: "Pharmacy fulfillment", black: "Included — 503A/503B network", white: "Included — 503A/503B network" },
  { label: "Pricing control", black: "May price above MSRP", white: "Full pricing control" },
  { label: "LegitScript", black: "Athos corporate cert", white: "Your corporate certification" },
  { label: "Patient ownership", black: "Shared", white: "100% yours" },
  { label: "Time to launch", black: "Same day", white: "72 hours" },
  { label: "Product catalog", black: "Full 1,884 SKUs", white: "Full 1,884 SKUs" },
];

const TIERS = [
  {
    name: "Black Label",
    cost: "$0 upfront · $0/mo",
    desc: "Add Athos as a product line. Refer patients, retain 40–60% of revenue. Go live same day.",
    param: "black",
    primary: false,
  },
  {
    name: "White Label",
    cost: "$5,000 onboarding · $500/mo (compared to $20,000+ elsewhere)",
    desc: "Your brand, your domain, your Stripe, your patients. Full ownership. Live in 72 hours.",
    param: "white",
    primary: true,
  },
];

export default function Block() {
  var headline = "Black Label vs White Label.";
  var subhead = "Same infrastructure. Different levels of ownership.";
  var cta1Link = {
      action: "OPEN_PAGE",
      destination: "/enterprise/signup?tier=black",
      openIn: "SELF",
    };
  var cta2Link = {
      action: "OPEN_PAGE",
      destination: "/enterprise/signup?tier=white",
      openIn: "SELF",
    };

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
        <div style={{ marginBottom: 56 }}>
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
            TWO MODELS
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
            {headline}
          </h2>
          <p
            style={{
              fontFamily: FB,
              fontSize: "clamp(15px, 1.3vw, 17px)",
              fontWeight: 400,
              color: "#555",
            }}
          >
            {subhead}
          </p>
        </div>

        {/* Feature Matrix */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {/* Column Headers */}
          <div
            className="grid grid-cols-3"
            style={{
              padding: "16px 0",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontFamily: FB,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#999",
                textTransform: "uppercase",
                paddingLeft: 4,
              }}
            />
            <div
              style={{
                fontFamily: FB,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#999",
                textTransform: "uppercase",
              }}
            >
              Black Label
            </div>
            <div
              style={{
                fontFamily: FB,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: PR,
                textTransform: "uppercase",
              }}
            >
              White Label
            </div>
          </div>

          {/* Rows */}
          {FEATURES.map(function(row, i) {
            var same = row.black === row.white;
            return (
              <div
                key={i}
                className="grid grid-cols-3"
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#333",
                    paddingLeft: 4,
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 400,
                    color: same ? "#555" : "#888",
                  }}
                >
                  {row.black}
                </div>
                <div
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: same ? 400 : 500,
                    color: same ? "#555" : "#111",
                  }}
                >
                  {row.white}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tier Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 20, marginTop: 56 }}
        >
          {TIERS.map(function(tier, i) {
            var link = i === 0 ? cta1Link : cta2Link;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  border: tier.primary
                    ? "2px solid " + PR
                    : "1px solid rgba(0,0,0,0.08)",
                  padding: "clamp(28px, 3.5vw, 40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                }}
              >
                {tier.primary && (
                  <div
                    style={{
                      position: "absolute",
                      top: -1,
                      right: 24,
                      fontFamily: FB,
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#fff",
                      backgroundColor: PR,
                      padding: "4px 12px",
                      borderRadius: "0 0 6px 6px",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Most control
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: FB,
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "#111",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: 15,
                    fontWeight: 600,
                    color: PR,
                  }}
                >
                  {tier.cost}
                </p>
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.55,
                    color: "#666",
                  }}
                >
                  {tier.desc}
                </p>
                <div style={{ marginTop: "auto", paddingTop: 8 }}>
                  <a href={link.destination} target={link.openIn === "NEW_TAB" ? "_blank" : undefined}
                    className="inline-flex items-center justify-center font-semibold text-sm rounded-full"
                    style={{
                      display: "block",
                      textAlign: "center",
                      backgroundColor: tier.primary ? PR : "transparent",
                      color: tier.primary ? "#fff" : PR,
                      border: tier.primary
                        ? "none"
                        : "1px solid " + PR,
                      padding: "14px 24px",
                    }}
                  >
                      Apply for {tier.name}
                    </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}