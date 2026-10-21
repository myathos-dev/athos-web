
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const PR = "#245C3A";

const AUDIENCES = [
  {
    title: "Med Spas & Clinics",
    desc: "Add a high-margin peptide line. Zero inventory. Zero overhead.",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
  },
  {
    title: "Chiropractors & PTs",
    desc: "Your patients ask about peptides. Now you have an answer.",
    img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&q=80",
  },
  {
    title: "Personal Trainers",
    desc: "The conversation is already happening. Own it.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
  },
  {
    title: "Influencers & Creators",
    desc: "Turn followers into patients. 100–200% margins, not 10% commissions.",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80",
  },
  {
    title: "Wellness & Longevity Brands",
    desc: "Layer prescriber-backed peptides into your product line.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
  },
  {
    title: "Health Apps & Platforms",
    desc: "API-first. Plug telehealth directly into your stack.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
  },
];

const PILLARS = [
  {
    eyebrow: "01 — BRAND OWNERSHIP",
    title: "Your brand.\nYour margins.",
    stat: "100–200%",
    statLabel: "margin per order vs 10% affiliate commission",
    body: "Every order through your portal builds your brand, your data, your equity. You are not driving traffic to someone else's valuation.",
    dark: false,
  },
  {
    eyebrow: "02 — DONE FOR YOU",
    title: "Truly plug\n& play.",
    stat: "Zero",
    statLabel: "staff, licenses, or overhead required to launch",
    body: "No pharmacy contracts. No vendor negotiations. No hiring. You promote. We operate the entire clinical and fulfillment stack.",
    dark: false,
  },
  {
    eyebrow: "03 — THE INFRASTRUCTURE",
    title: "The advantage\nothers don't have.",
    stat: "3M+",
    statLabel: "patient visits processed on the platform",
    body: "200+ healthcare partners. 50-state physician coverage. 503A/503B compounding network. Enterprise-grade infrastructure already running at scale. You plug into it.",
    dark: true,
  },
];

export default function Block() {
  const headline = "If you have patients, clients, or an audience — you have everything you need.";

  return (
    <div>
      {/* ═══ TOP — Who It's For ═══ */}
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div
          className="container"
          style={{
            paddingTop: "clamp(64px, 10vw, 96px)",
            paddingBottom: "clamp(48px, 6vw, 64px)",
          }}
        >
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
            BUILT FOR OPERATORS
          </p>
          <h2
            style={{
              fontFamily: FB,
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#0f0f0f",
              marginBottom: 16,
              maxWidth: 700,
            }}
          >
            {headline}
          </h2>
          <p
            style={{
              fontFamily: FB,
              fontSize: 15,
              fontWeight: 400,
              color: "#888",
              marginBottom: 40,
            }}
          >
            If you have an audience that trusts you — in health, wellness, fitness, or longevity — you have everything you need.
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div
          style={{
            overflow: "hidden",
            paddingBottom: "clamp(48px, 8vw, 80px)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingLeft: "max(24px, calc((100vw - 1200px) / 2))",
              paddingRight: 24,
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {AUDIENCES.map((a, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 auto",
                  width: "clamp(220px, 22vw, 260px)",
                  scrollSnapAlign: "start",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    borderRadius: 12,
                    overflow: "hidden",
                    marginBottom: 14,
                    backgroundColor: "#f3f3f3",
                  }}
                >
                  <img
                    src={a.img}
                    alt={a.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#111",
                    letterSpacing: "-0.01em",
                    marginBottom: 4,
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#888",
                    lineHeight: 1.45,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ BOTTOM — Why Athos (3 Pillars) ═══ */}
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div
          className="container"
          style={{
            paddingTop: "clamp(48px, 6vw, 64px)",
            paddingBottom: "clamp(64px, 10vw, 120px)",
          }}
        >
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
            WHY ATHOS ENTERPRISE
          </p>
          <h2
            style={{
              fontFamily: FB,
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#0f0f0f",
              marginBottom: 48,
              maxWidth: 800,
            }}
          >
            Built to{" "}
            <em
              style={{
                fontFamily: FH,
                fontStyle: "italic",
                fontWeight: 400,
                color: PR,
              }}
            >
              outcompete
            </em>{" "}
            Hims, Hers, Ro, and every brand with a bigger budget.
          </h2>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: pillar.dark ? "#16625F" : "#fff",
                  borderRadius: 12,
                  border: pillar.dark ? "none" : "1px solid rgba(0,0,0,0.06)",
                  padding: "clamp(28px, 3.5vw, 40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  minHeight: 340,
                }}
              >
                {/* Eyebrow */}
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    color: pillar.dark ? "rgba(255,255,255,0.5)" : "#999",
                    textTransform: "uppercase",
                  }}
                >
                  {pillar.eyebrow}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: FB,
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    color: pillar.dark ? "#fff" : "#111",
                    whiteSpace: "pre-line",
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: pillar.dark ? "rgba(255,255,255,0.6)" : "#666",
                  }}
                >
                  {pillar.body}
                </p>

                {/* Stat */}
                <div style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      fontFamily: FB,
                      fontSize: "clamp(32px, 4vw, 42px)",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      color: pillar.dark ? "#fff" : "#111",
                      marginBottom: 4,
                    }}
                  >
                    {pillar.stat}
                  </div>
                  <p
                    style={{
                      fontFamily: FB,
                      fontSize: 12,
                      fontWeight: 500,
                      color: pillar.dark ? "rgba(255,255,255,0.45)" : "#aaa",
                      lineHeight: 1.4,
                    }}
                  >
                    {pillar.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}