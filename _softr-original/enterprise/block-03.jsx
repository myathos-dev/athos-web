import { useTextSetting, useImageSetting } from "@/lib/editable-settings";

const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const PR = "#245C3A";

const MARKET_STATS = [
  { value: "$8.4B", desc: "Peptide therapeutics market by 2028" },
  { value: "340%", desc: "Increase in peptide-related searches since 2022" },
  { value: "76%", desc: "Patient reorder rate within 60 days" },
];

const BARRIERS = [
  {
    num: "01",
    label: "COMPLIANCE",
    title: "The compliance maze stops everyone.",
    body: "FDA-registered pharmacies, licensed physicians, HIPAA-compliant technology, ongoing legal monitoring. All built. You never touch a single form.",
    solved: "All handled",
  },
  {
    num: "02",
    label: "MEDICAL",
    title: "You don't have a medical license.",
    body: "You do not need one. Our physician network handles every prescription in all 50 states. You market your brand. They handle the medicine.",
    solved: "50-state coverage",
  },
  {
    num: "03",
    label: "COST",
    title: "Building from scratch costs $500K+.",
    body: "Years of build time and millions in capital — or use our infrastructure and start generating revenue in 72 hours. The entire stack is already live.",
    solved: "Live in 72 hours",
  },
];

/* ── Barrier Illustrations ── */

function ComplianceIllustration() {
  return (
    <svg style={{ width: "100%", height: "auto" }} viewBox="0 0 200 120" fill="none">
      {/* Regulatory web */}
      <circle cx="100" cy="55" r="18" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <circle cx="60" cy="35" r="10" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
      <circle cx="140" cy="35" r="10" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
      <circle cx="55" cy="75" r="10" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
      <circle cx="145" cy="75" r="10" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
      {/* Connecting lines */}
      <path d="M68 40L85 48" stroke="#ef4444" strokeWidth="1" opacity="0.15" />
      <path d="M132 40L115 48" stroke="#ef4444" strokeWidth="1" opacity="0.15" />
      <path d="M63 69L87 63" stroke="#ef4444" strokeWidth="1" opacity="0.15" />
      <path d="M137 69L113 63" stroke="#ef4444" strokeWidth="1" opacity="0.15" />
      {/* Labels */}
      <text x="60" y="38" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="600" opacity="0.5">FDA</text>
      <text x="140" y="38" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="600" opacity="0.5">HIPAA</text>
      <text x="55" y="78" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="600" opacity="0.5">State</text>
      <text x="145" y="78" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="600" opacity="0.5">DEA</text>
      {/* Blocked X */}
      <path d="M93 48L107 62M107 48L93 62" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      {/* Bottom label */}
      <text x="100" y="105" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="700" opacity="0.5">BLOCKED</text>
    </svg>
  );
}

function MedicalIllustration() {
  return (
    <svg style={{ width: "100%", height: "auto" }} viewBox="0 0 200 120" fill="none">
      {/* Rx pad */}
      <rect x="55" y="15" width="90" height="70" rx="6" stroke={PR} strokeWidth="1.5" opacity="0.4" />
      <rect x="55" y="15" width="90" height="18" rx="6" fill={PR} opacity="0.06" />
      {/* Rx header */}
      <text x="72" y="28" fill={PR} fontSize="10" fontWeight="700" opacity="0.6">Rx</text>
      <text x="90" y="28" fill={PR} fontSize="7" fontWeight="500" opacity="0.35">Dr. Network, MD</text>
      {/* Lines */}
      <rect x="65" y="42" width="50" height="4" rx="2" fill={PR} opacity="0.08" />
      <rect x="65" y="52" width="70" height="4" rx="2" fill={PR} opacity="0.06" />
      <rect x="65" y="62" width="40" height="4" rx="2" fill={PR} opacity="0.06" />
      {/* Approved badge */}
      <circle cx="130" cy="55" r="10" fill={PR} opacity="0.12" />
      <path d="M125 55L128 58L135 51" stroke={PR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* 50 states label */}
      <rect x="60" y="95" width="80" height="16" rx="8" fill={PR} opacity="0.08" />
      <text x="100" y="106" textAnchor="middle" fill={PR} fontSize="7" fontWeight="700" opacity="0.6">ALL 50 STATES</text>
    </svg>
  );
}

function CostIllustration() {
  return (
    <svg style={{ width: "100%", height: "auto" }} viewBox="0 0 200 120" fill="none">
      {/* Build alone bar */}
      <rect x="30" y="25" width="60" height="60" rx="4" fill="#ef4444" opacity="0.06" />
      <rect x="30" y="25" width="60" height="60" rx="4" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
      <text x="60" y="52" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="800" opacity="0.5">$500K+</text>
      <text x="60" y="66" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="500" opacity="0.4">12–18 months</text>
      {/* Strikethrough */}
      <path d="M30 55L90 55" stroke="#ef4444" strokeWidth="1.5" opacity="0.4" />
      {/* Arrow */}
      <path d="M100 55L118 55" stroke={PR} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M114 50L120 55L114 60" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      {/* With Athos bar */}
      <rect x="125" y="35" width="55" height="40" rx="4" fill={PR} opacity="0.08" />
      <rect x="125" y="35" width="55" height="40" rx="4" stroke={PR} strokeWidth="1.5" opacity="0.4" />
      <text x="152" y="55" textAnchor="middle" fill={PR} fontSize="12" fontWeight="800" opacity="0.7">72h</text>
      <text x="152" y="66" textAnchor="middle" fill={PR} fontSize="6" fontWeight="500" opacity="0.5">already live</text>
      {/* Labels */}
      <text x="60" y="100" textAnchor="middle" fill="#999" fontSize="7" fontWeight="500">Build alone</text>
      <text x="152" y="100" textAnchor="middle" fill={PR} fontSize="7" fontWeight="600">With Athos</text>
    </svg>
  );
}

const BARRIER_ILLUSTRATIONS = [ComplianceIllustration, MedicalIllustration, CostIllustration];

/* ── Main Component ── */

export default function Block() {
  const marketHeadline = useTextSetting({
    name: "market-headline",
    label: "Market Headline",
    initialValue: "The peptide market is",
  });
  const marketBody = useTextSetting({
    name: "market-body",
    label: "Market Body",
    initialValue:
      "Millions of patients are searching for peptides, GLP-1s, and clinical wellness — most of them unsupervised. The operators who build compliant infrastructure now will own this market for the next decade.",
  });
  const barrierBody = useTextSetting({
    name: "barrier-body",
    label: "Barrier Body",
    initialValue:
      "Most operators see the opportunity and spend 12–18 months trying to figure out how to do it legally. Most never launch. We built the entire infrastructure so that step takes days.",
  });
  const img1 = useImageSetting({
    name: "market-image-1",
    label: "Market Image (Large)",
    initialValue: {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      alt: "Wellness lifestyle",
    },
  });
  const img2 = useImageSetting({
    name: "market-image-2",
    label: "Market Image (Small Top)",
    initialValue: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      alt: "Clinical consultation",
    },
  });
  const img3 = useImageSetting({
    name: "market-image-3",
    label: "Market Image (Small Bottom)",
    initialValue: {
      src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
      alt: "Health and fitness",
    },
  });

  return (
    <div>
      {/* ═══ TOP HALF — Market Opportunity (white) ═══ */}
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div
          className="container"
          style={{
            paddingTop: "clamp(64px, 10vw, 120px)",
            paddingBottom: "clamp(48px, 8vw, 80px)",
          }}
        >
          <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — Text + Stats */}
            <div>
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
                THE OPPORTUNITY
              </p>
              <h2
                style={{
                  fontFamily: FB,
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#0f0f0f",
                  marginBottom: 24,
                }}
              >
                {marketHeadline}{" "}
                <em
                  style={{
                    fontFamily: FH,
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: PR,
                  }}
                >
                  exploding.
                </em>
              </h2>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: "clamp(15px, 1.3vw, 17px)",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "#555",
                  marginBottom: 36,
                  maxWidth: 500,
                }}
              >
                {marketBody}
              </p>

              {/* Inline Stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {MARKET_STATS.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 16,
                      padding: "16px 0",
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: "clamp(20px, 2.5vw, 28px)",
                        fontWeight: 800,
                        color: PR,
                        letterSpacing: "-0.03em",
                        minWidth: 80,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#555",
                      }}
                    >
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Closing line */}
              <p
                style={{
                  fontFamily: FB,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#111",
                  lineHeight: 1.55,
                  marginTop: 28,
                  maxWidth: 460,
                }}
              >
                The brands and operators who get in now — with a physician-supervised, compliant platform — will own this space for the next decade.
              </p>
            </div>

            {/* Right — Image Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <img
                  src={img1.src}
                  alt={img1.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
              </div>
              <img
                src={img2.src}
                alt={img2.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
              <img
                src={img3.src}
                alt={img3.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BOTTOM HALF — Barriers (cream) ═══ */}
      <div style={{ backgroundColor: "#f5f2ed" }}>
        <div
          className="container"
          style={{
            paddingTop: "clamp(64px, 10vw, 120px)",
            paddingBottom: "clamp(64px, 10vw, 120px)",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: 56, maxWidth: 700 }}>
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
              WHY MOST NEVER LAUNCH
            </p>
            <h2
              style={{
                fontFamily: FB,
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0f0f0f",
                marginBottom: 20,
              }}
            >
              Getting in is difficult.{" "}
              <em
                style={{
                  fontFamily: FH,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: PR,
                }}
              >
                Until now.
              </em>
            </h2>
            <p
              style={{
                fontFamily: FB,
                fontSize: "clamp(15px, 1.3vw, 17px)",
                fontWeight: 400,
                lineHeight: 1.65,
                color: "#555",
              }}
            >
              {barrierBody}
            </p>
          </div>

          {/* Barrier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
            {BARRIERS.map((barrier, i) => {
              const Illustration = BARRIER_ILLUSTRATIONS[i];
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "clamp(24px, 3vw, 36px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {/* Illustration */}
                  <div style={{ marginBottom: 4 }}>
                    <Illustration />
                  </div>

                  {/* Number + Label */}
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#bbb",
                      }}
                    >
                      {barrier.num}
                    </span>
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        color: "#999",
                        textTransform: "uppercase",
                      }}
                    >
                      {barrier.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: FB,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                      color: "#111",
                    }}
                  >
                    {barrier.title}
                  </h3>

                  {/* Body */}
                  <p
                    style={{
                      fontFamily: FB,
                      fontSize: 14,
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: "#666",
                    }}
                  >
                    {barrier.body}
                  </p>

                  {/* Solved badge */}
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill={PR} opacity="0.1" />
                      <path d="M5 8L7 10L11 6" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 13,
                        fontWeight: 600,
                        color: PR,
                      }}
                    >
                      {barrier.solved}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}