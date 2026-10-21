import { useState } from "react";

// ── BENEFIT ICONS ─────────────────────────────────────────────────────────────

const BenefitIcons = {
  proven: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L5 7V13C5 19.05 8.84 24.74 12 26" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3L19 7V13C19 19.05 15.16 24.74 12 26" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12.5L11 14.5L15 10.5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  calendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M4 10H20" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M8 3V6" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 3V6" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.5" fill="#245C3A" opacity="0.4" />
    </svg>
  ),
  scale: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3V21" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 8L12 5L19 8" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21H16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  track: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M12 4V8" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 16V20" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4 12H8" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 12H20" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#245C3A" opacity="0.3" />
    </svg>
  ),
  syringe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 3L17 5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 7L15 12" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.5 4.5L16.5 7.5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 8L13.5 13L12 14.5C11 15.5 9.5 15.5 8.5 14.5L7 13C6 12 6 10.5 7 9.5L8.5 8Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18L6.8 16.2" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  appetite: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M8 12H16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 8V12" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  digest: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4C12 4 6 7 6 12C6 17 9 20 12 20C15 20 18 17 18 12C18 7 12 4 12 4Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12C9 12 10 14 12 14C14 14 15 12 15 12" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      <path d="M12 14V17" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  sugar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 18L8 10L12 14L16 8L20 12" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="14" r="2" stroke="#245C3A" strokeWidth="1.3" opacity="0.4" />
    </svg>
  ),
};

// ── MINI ICONS (ADD-INS) ──────────────────────────────────────────────────────

const MiniIcons = {
  droplet: () => (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
      <path d="M14 3C14 3 6 12.5 6 17.5C6 21.92 9.58 25.5 14 25.5C18.42 25.5 22 21.92 22 17.5C22 12.5 14 3 14 3Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bolt: () => (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
      <path d="M15.5 3L7 16H13.5L12.5 25L21 12H14.5L15.5 3Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: () => (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L5 7V13C5 19.05 8.84 24.74 14 26C19.16 24.74 23 19.05 23 13V7L14 3Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L12.5 16.5L18 11" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hexagon: () => (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L22.5 8V18L14 23L5.5 18V8L14 3Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="13" r="2.5" stroke="#245C3A" strokeWidth="1.6" />
    </svg>
  ),
  moon: () => (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
      <path d="M21.5 15.5C20.43 16.47 19.04 17 17.5 17C13.91 17 11 14.09 11 10.5C11 8.96 11.53 7.57 12.5 6.5C8.41 7.28 5.5 10.85 5.5 15C5.5 19.69 9.31 23.5 14 23.5C18.15 23.5 21.72 20.59 22.5 16.5C22.18 16.2 21.85 15.88 21.5 15.5Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const addinsRow1 = [
  { icon: MiniIcons.droplet, label: "No Additives" },
  { icon: MiniIcons.bolt, label: "Vitamin B12" },
  { icon: MiniIcons.shield, label: "Vitamin B6" },
];

const addinsRow2 = [
  { icon: MiniIcons.hexagon, label: "NAD+" },
  { icon: MiniIcons.moon, label: "Glycine" },
];

// ── ABSORPTION DIAGRAM ────────────────────────────────────────────────────────

const AbsorptionDiagram = () => (
  <div className="relative">
    <p className="text-center text-xs mb-6" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>
      ONE INJECTION, ONE TARGET
    </p>

    <div className="flex flex-col items-center mb-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
        <BenefitIcons.syringe />
      </div>
      <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>Weekly Injection</p>
      <p className="text-xs mb-3" style={{ color: "#888" }}>Under the skin, once a week</p>

      <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
        <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="rounded-lg px-5 py-3 mt-2 mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)" }}>
        <p className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Bloodstream</p>
        <p className="text-xs text-center mt-1" style={{ color: "#888" }}>Stays active for ~7 days</p>
      </div>
    </div>

    <div className="flex justify-center" style={{ height: "40px" }}>
      <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
        <path d="M10 0L10 34" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 30L10 36L14 30" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    <div className="flex justify-center mb-4 mt-2">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" stroke="#245C3A" strokeWidth="1.8" strokeDasharray="4 3" />
        <circle cx="40" cy="40" r="16" stroke="#245C3A" strokeWidth="1.2" opacity="0.3" />
        <text x="40" y="43" textAnchor="middle" fill="#245C3A" fontSize="13" fontWeight="700">GLP-1</text>
      </svg>
    </div>

    <div className="relative" style={{ height: "60px" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 60"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <path d="M150 0 L150 10" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 Q150 35 50 50 L50 60" stroke="#245C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 L150 60" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 Q150 35 250 50 L250 60" stroke="#245C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>

    <div className="grid grid-cols-3 gap-3">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Reduces Hunger</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Signals your brain that you're full so you naturally eat less
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Slows Digestion</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Food moves through your stomach more slowly, keeping you satisfied longer
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Steadier Blood Sugar</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Helps your body manage blood sugar more evenly throughout the day
        </p>
      </div>
    </div>
  </div>
);

// ── WEIGHT LOSS TIMELINE ──────────────────────────────────────────────────────
// Y-axis: 0% at bottom (y=196), 20% at top (y=0)
// Each 1% = 9.8px. So 15% = y=49, 17% = y=29.4
// Curves go from y=196 (0%) downward toward their targets

const WeightLossTimeline = () => (
  <div>
    <div className="relative" style={{ height: "220px", marginLeft: "36px", marginRight: "8px" }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between" style={{ transform: "translateX(-36px)", paddingTop: "4px", paddingBottom: "24px" }}>
        {["20%", "15%", "10%", "5%", "0%"].map((label) => (
          <span key={label} className="text-xs" style={{ color: "#999", fontSize: "10px" }}>{label}</span>
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0" style={{ paddingBottom: "24px" }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{ top: `${(i / 4) * 100}%`, borderTop: i === 4 ? "1.5px solid #245C3A" : "1px solid rgba(36,92,58,0.08)" }}
          />
        ))}
      </div>

      {/* SVG Curves */}
      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 400 196" preserveAspectRatio="none" fill="none" style={{ marginBottom: "24px" }}>
        {/* Shaded area under dashed line (diet+exercise, higher loss) */}
        <path d="M0 196 Q60 188 120 166 Q180 138 240 108 Q300 72 360 46 L400 30 L400 196 Z" fill="rgba(36,92,58,0.04)" />

        {/* Dashed line — compound + diet & exercise (~17% endpoint = y≈30) */}
        <path d="M0 196 Q60 188 120 166 Q180 138 240 108 Q300 72 360 46 L400 30" stroke="#245C3A" strokeWidth="2.5" strokeDasharray="8 4" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />

        {/* Solid line — compound alone (~15% endpoint = y≈49) */}
        <path d="M0 196 Q60 190 120 174 Q180 152 240 126 Q300 98 360 72 L400 49" stroke="#245C3A" strokeWidth="2.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />

        {/* Endpoint dots */}
        <circle cx="400" cy="30" r="4" fill="#245C3A" />
        <circle cx="400" cy="49" r="4" fill="#245C3A" opacity="0.4" />
      </svg>

      {/* Endpoint labels */}
      <div className="absolute" style={{ right: "-4px", top: "4px" }}>
        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 700 }}>~17%</span>
      </div>
      <div className="absolute" style={{ right: "-4px", top: "28px" }}>
        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600, opacity: 0.7 }}>~15%</span>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between" style={{ transform: "translateY(20px)" }}>
        {["Wk 0", "Wk 12", "Wk 24", "Wk 48", "Wk 68"].map((label) => (
          <span key={label} className="text-xs" style={{ color: "#999", fontSize: "10px" }}>{label}</span>
        ))}
      </div>
    </div>

    {/* Legend */}
    <div className="flex gap-6 mt-8 justify-center">
      <div className="flex items-center gap-2">
        <div style={{ width: "20px", height: "2.5px", backgroundColor: "#245C3A", borderRadius: "2px" }} />
        <span className="text-xs" style={{ color: "#666" }}>Compounded GLP-1</span>
      </div>
      <div className="flex items-center gap-2">
        <div style={{ width: "20px", height: "0", borderTop: "2.5px dashed #245C3A" }} />
        <span className="text-xs" style={{ color: "#666" }}>+ Diet and exercise</span>
      </div>
    </div>
  </div>
);

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Block() {
  const [activeSection, setActiveSection] = useState("overview");

  const eyebrow = "PROVEN  |  GLP-1 INJECTABLE";

  const headline = "The Most Studied\nWeight Loss Compound.";

  const description = "This compounded GLP-1 injectable works by reducing your appetite, slowing digestion, and helping your body manage blood sugar — the same proven pathway behind the most prescribed weight loss treatments in the world.";

  const ctaText = "Get Started for \$0";

  const ctaLink = {
      destination: "/sign-up",
      openIn: "SELF",
    };

  const heroImage = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "Compounded GLP-1 injectable",
    };

  const sections = [
    { key: "overview", label: "Overview" },
    { key: "absorption", label: "How It Works" },
    { key: "timeline", label: "Results Timeline" },
  ];

  const benefits = [
    {
      icon: BenefitIcons.proven,
      title: "Most Clinically Studied",
      desc: "More published research and real-world data than any other weight loss compound. Over 10 years of clinical evidence.",
    },
    {
      icon: BenefitIcons.calendar,
      title: "Once a Week",
      desc: "A single injection each week. Stays active in your body for approximately 7 days.",
    },
    {
      icon: BenefitIcons.scale,
      title: "15–17% Average Weight Loss",
      desc: "Clinically proven weight reduction at 68 weeks — the standard other compounds are measured against.",
    },
    {
      icon: BenefitIcons.track,
      title: "Longest Track Record",
      desc: "The most prescribed injectable for weight management worldwide. Providers know it, trust it, and understand exactly how to dose it.",
    },
  ];

  const comparisonData = [
    { label: "Pathways targeted", glp1: "1 (GLP-1)", tirz: "2", reta: "3" },
    { label: "Average weight loss", glp1: "15–17%", tirz: "22.5%", reta: "28.7%" },
    { label: "Trial duration", glp1: "68 weeks", tirz: "72 weeks", reta: "68 weeks" },
    { label: "Dosing", glp1: "Weekly injection", tirz: "Weekly injection", reta: "Weekly injection" },
    { label: "Years of clinical data", glp1: "10+", tirz: "3+", reta: "2+" },
    { label: "Real-world prescriptions", glp1: "Most prescribed", tirz: "Growing", reta: "Limited" },
  ];

  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* ── LEFT COLUMN ── */}
          <div>
            <p className="text-sm tracking-wide mb-4" style={{ color: "#16625F", fontWeight: 500, letterSpacing: "0.05em" }}>
              {eyebrow}
            </p>

            <h1 className="text-4xl md:text-5xl mb-5 leading-tight whitespace-pre-line" style={{ color: "#1a4d2e" }}>
              {headline}
            </h1>

            <p className="text-base mb-8" style={{ color: "#4A4A4A", lineHeight: "1.7", maxWidth: "520px" }}>
              {description}
            </p>

            {/* 3-benefit visual strip — all from GLP-1 */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {[
                { icon: BenefitIcons.appetite, label: "Reduced Hunger", sub: "GLP-1" },
                { icon: BenefitIcons.digest, label: "Slower Digestion", sub: "GLP-1" },
                { icon: BenefitIcons.sugar, label: "Steadier Blood Sugar", sub: "GLP-1" },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="rounded-lg p-3 flex flex-col items-center text-center"
                    style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}
                  >
                    <div className="w-9 h-9 rounded-md flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.08)" }}>
                      <Icon />
                    </div>
                    <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>{p.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#999" }}>{p.sub}</p>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex gap-3.5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "#1a4d2e", fontWeight: 600, marginBottom: "2px" }}>{b.title}</p>
                      <p className="text-sm" style={{ color: "#666", lineHeight: "1.5" }}>{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Add-ins box — 3/2 layout */}
            <div className="rounded-lg p-5 mb-8" style={{ backgroundColor: "rgba(36, 92, 58, 0.04)" }}>
              <p className="text-xs tracking-wide mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.04em" }}>
                INCLUDED ADD-INS AT NO EXTRA COST
              </p>
              <div className="flex gap-5 mb-2">
                {addinsRow1.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-1.5">
                      <Icon />
                      <span className="text-sm" style={{ color: "#333", fontWeight: 450 }}>{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-5">
                {addinsRow2.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-1.5">
                      <Icon />
                      <span className="text-sm" style={{ color: "#333", fontWeight: 450 }}>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined}
              className="inline-flex items-center justify-center text-white hover:opacity-90 shadow-sm px-10 py-6 rounded-md font-semibold"
              style={{ backgroundColor: "#245C3A" }}
            >{ctaText}</a>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div>
            <div className="flex gap-2 mb-6">
              {sections.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActiveSection(s.key)}
                  className="text-xs px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: activeSection === s.key ? "#245C3A" : "rgba(36,92,58,0.08)",
                    color: activeSection === s.key ? "#fff" : "#245C3A",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* OVERVIEW */}
            {activeSection === "overview" && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(36,92,58,0.1)" }}>
                <img src={heroImage.src} alt={heroImage.alt} className="w-full h-auto object-cover" style={{ maxHeight: "280px" }} />
                <div className="p-6" style={{ backgroundColor: "#FAFAF8" }}>
                  <h3 className="text-lg mb-4" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                    How It Compares
                  </h3>
                  <div className="grid grid-cols-4 gap-2 py-2 px-3 rounded-t-md" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                    <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}></span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>GLP-1</span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 500, opacity: 0.6 }}>Dual-Action</span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 500, opacity: 0.6 }}>Triple-Action</span>
                  </div>
                  {comparisonData.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 gap-2 py-2.5 px-3"
                      style={{ borderBottom: i < comparisonData.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                    >
                      <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.label}</span>
                      <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.glp1}</span>
                      <span className="text-xs text-center" style={{ color: "#999" }}>{row.tirz}</span>
                      <span className="text-xs text-center" style={{ color: "#999" }}>{row.reta}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* HOW IT WORKS */}
            {activeSection === "absorption" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                  How Your Body Uses It
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  After injection, the medication enters your bloodstream and stays active for about a week. It targets the GLP-1 receptor — one pathway that controls three key functions in your body.
                </p>

                <AbsorptionDiagram />

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.appetite />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Appetite Control</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      Sends signals to the part of your brain that controls hunger, making you feel satisfied with less food. Most people notice a real difference in cravings within the first 2–3 weeks.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.digest />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Slower Digestion</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      Food moves through your stomach more slowly, so you stay full longer after meals. This naturally reduces how much you eat without requiring willpower or calorie counting.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.sugar />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Steadier Blood Sugar</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      Helps your body manage blood sugar more evenly, reducing the spikes and crashes that trigger hunger and cravings. Especially beneficial if you carry weight around your midsection.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* RESULTS TIMELINE */}
            {activeSection === "timeline" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                  Expected Weight Loss Timeline
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  Based on clinical trial data at the highest approved dose. Results with structured diet and exercise shown as the dashed line.
                </p>

                <WeightLossTimeline />

                <div className="mt-8 space-y-3">
                  {[
                    { week: "Weeks 1–4", pct: "1–3%", note: "Dose gradually increases. Appetite noticeably decreases." },
                    { week: "Weeks 4–12", pct: "4–7%", note: "Steady weight loss begins. Cravings reduce significantly." },
                    { week: "Weeks 12–24", pct: "8–12%", note: "Noticeable change. Clothes fit differently. Energy often improves." },
                    { week: "Weeks 24–48", pct: "12–15%", note: "Significant results. Blood markers typically improve." },
                    { week: "Weeks 48–68", pct: "15–17%", note: "Peak results in clinical trials. Sustained with continued use." },
                  ].map((m, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-16 text-center rounded-md py-1" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}>{m.pct}</span>
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: "#1a4d2e", fontWeight: 600 }}>{m.week}</p>
                        <p className="text-xs" style={{ color: "#666", lineHeight: "1.5" }}>{m.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}