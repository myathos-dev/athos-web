import { useState } from "react";

// ── BENEFIT ICONS ─────────────────────────────────────────────────────────────

const BenefitIcons = {
  energy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L5 14H11L10 22L18 10H12L13 2Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dna: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 4C7 4 7 8 12 10C17 12 17 16 17 16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 4C17 4 17 8 12 10C7 12 7 16 7 16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 20V16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 20V16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 4V3" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 4V3" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 7H16" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M8 13H16" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  ),
  brain: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4C9 4 7 6 7 8.5C5.5 9 4.5 10.5 4.5 12C4.5 13.5 5.5 15 7 15.5C7 18 9 20 12 20C15 20 17 18 17 15.5C18.5 15 19.5 13.5 19.5 12C19.5 10.5 18.5 9 17 8.5C17 6 15 4 12 4Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V20" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  metabolism: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M12 8V12L15 14" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16L10 14" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
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
  cell: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#245C3A" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="#245C3A" strokeWidth="1.3" opacity="0.5" />
      <circle cx="12" cy="12" r="1.5" fill="#245C3A" opacity="0.3" />
    </svg>
  ),
  shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L5 7V13C5 19.05 8.84 22.74 12 24" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3L19 7V13C19 19.05 15.16 22.74 12 24" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12.5L11 14.5L15 10.5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  clock: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M12 7V12L15.5 15.5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ── MECHANISM DIAGRAM ─────────────────────────────────────────────────────────

const MechanismDiagram = () => (
  <div className="relative">
    <p className="text-center text-xs mb-6" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>
      HOW NAD+ WORKS INSIDE YOUR CELLS
    </p>

    <div className="flex flex-col items-center mb-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
        <BenefitIcons.syringe />
      </div>
      <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>Injectable NAD+</p>
      <p className="text-xs mb-3" style={{ color: "#888" }}>Near-complete absorption, bypasses the gut</p>

      <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
        <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="rounded-lg px-5 py-3 mt-2 mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)" }}>
        <p className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Your Cells</p>
        <p className="text-xs text-center mt-1" style={{ color: "#888" }}>Taken up by tissues within ~2 hours</p>
      </div>
    </div>

    <div className="relative" style={{ height: "60px" }}>
      <svg width="100%" height="100%" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none" className="absolute inset-0">
        <path d="M150 0 L150 10" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 Q150 35 80 55 L80 60" stroke="#245C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 Q150 35 220 55 L220 60" stroke="#245C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-4 px-8">
      <div className="flex justify-center">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#245C3A" strokeWidth="1.8" strokeDasharray="4 3" />
          <circle cx="40" cy="40" r="16" stroke="#245C3A" strokeWidth="1.2" opacity="0.3" />
          <text x="40" y="37" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">ENERGY</text>
          <text x="40" y="48" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">SHUTTLE</text>
        </svg>
      </div>
      <div className="flex justify-center">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#245C3A" strokeWidth="1.8" strokeDasharray="4 3" />
          <circle cx="40" cy="40" r="16" stroke="#245C3A" strokeWidth="1.2" opacity="0.3" />
          <text x="40" y="37" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">REPAIR</text>
          <text x="40" y="48" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">FUEL</text>
        </svg>
      </div>
    </div>

    <div className="relative" style={{ height: "60px" }}>
      <svg width="100%" height="100%" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none" className="absolute inset-0">
        <path d="M80 0 L80 10 Q80 30 50 50 L50 60" stroke="#245C3A" strokeWidth="1.2" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.6" />
        <path d="M80 0 L80 10 Q80 25 110 35 Q130 42 150 48 L150 60" stroke="#245C3A" strokeWidth="1.2" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.6" />
        <path d="M220 0 L220 10 Q220 30 250 50 L250 60" stroke="#245C3A" strokeWidth="1.2" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.6" />
      </svg>
    </div>

    <div className="grid grid-cols-3 gap-3">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Energy Production</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Converts nutrients into usable energy for every cell in your body
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Brain & Nerve Support</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Powers the neurons that control focus, clarity, and mental processing speed
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>DNA Repair</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Fuels the enzymes that fix damaged DNA and protect against accelerated aging
        </p>
      </div>
    </div>
  </div>
);

// ── NAD+ DECLINE CHART ────────────────────────────────────────────────────────

const DeclineChart = () => (
  <div>
    <div className="relative" style={{ height: "200px", marginLeft: "36px", marginRight: "8px" }}>
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between" style={{ transform: "translateX(-36px)", paddingTop: "4px", paddingBottom: "24px" }}>
        {["High", "", "", "Low"].map((label, i) => (
          <span key={i} className="text-xs" style={{ color: "#999", fontSize: "10px" }}>{label}</span>
        ))}
      </div>

      <div className="absolute inset-0" style={{ paddingBottom: "24px" }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="absolute w-full" style={{ top: `${(i / 3) * 100}%`, borderTop: i === 3 ? "1.5px solid #245C3A" : "1px solid rgba(36,92,58,0.08)" }} />
        ))}
      </div>

      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 400 176" preserveAspectRatio="none" fill="none" style={{ marginBottom: "24px" }}>
        <path d="M0 10 Q60 12 120 30 Q180 58 240 96 Q300 134 360 156 L400 166 L400 176 L0 176 Z" fill="rgba(36,92,58,0.04)" />
        <path d="M0 10 Q60 12 120 30 Q180 58 240 96 Q300 134 360 156 L400 166" stroke="#245C3A" strokeWidth="2.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M200 76 Q240 68 280 56 Q340 40 400 34" stroke="#245C3A" strokeWidth="2.5" strokeDasharray="8 4" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <circle cx="200" cy="76" r="4" fill="#245C3A" />
        <circle cx="400" cy="166" r="4" fill="#245C3A" opacity="0.4" />
        <circle cx="400" cy="34" r="4" fill="#245C3A" />
      </svg>

      <div className="absolute" style={{ right: "-4px", top: "10px" }}>
        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 700 }}>With NAD+</span>
      </div>
      <div className="absolute" style={{ right: "-4px", bottom: "28px" }}>
        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600, opacity: 0.7 }}>Without</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between" style={{ transform: "translateY(20px)" }}>
        {["Age 20", "Age 30", "Age 40", "Age 50", "Age 60+"].map((label) => (
          <span key={label} className="text-xs" style={{ color: "#999", fontSize: "10px" }}>{label}</span>
        ))}
      </div>
    </div>

    <div className="flex gap-6 mt-8 justify-center">
      <div className="flex items-center gap-2">
        <div style={{ width: "20px", height: "2.5px", backgroundColor: "#245C3A", borderRadius: "2px" }} />
        <span className="text-xs" style={{ color: "#666" }}>Natural NAD+ levels</span>
      </div>
      <div className="flex items-center gap-2">
        <div style={{ width: "20px", height: "0", borderTop: "2.5px dashed #245C3A" }} />
        <span className="text-xs" style={{ color: "#666" }}>With supplementation</span>
      </div>
    </div>
  </div>
);

// ── PRODUCT FORMAT DATA ───────────────────────────────────────────────────────

const formatDetails = {
  injectable: {
    tagline: "The gold standard for full-body restoration",
    rows: [
      { label: "Delivery", value: "Subcutaneous or intramuscular injection" },
      { label: "Absorption", value: "100% bioavailable" },
      { label: "Peaks in blood", value: "Immediate" },
      { label: "Effects last", value: "3–7 days per dose" },
      { label: "Bypasses gut", value: "Yes" },
      { label: "Best for", value: "Maximum cellular saturation, energy, recovery, metabolic reset" },
      { label: "Experience", value: "Fast-acting. Occasional brief flush sensation if administered quickly." },
    ],
  },
  oral: {
    tagline: "The slow-and-steady daily maintenance routine",
    rows: [
      { label: "Delivery", value: "Capsule or sublingual tablet" },
      { label: "Absorption", value: "Low to moderate — broken down by stomach acid and liver" },
      { label: "Peaks in blood", value: "Hours (indirect, converted to precursors first)" },
      { label: "Effects last", value: "Shorter, requires daily dosing" },
      { label: "Bypasses gut", value: "No" },
      { label: "Best for", value: "Long-term maintenance once saturation is reached through other methods" },
      { label: "Experience", value: "Painless, easy to add to a morning supplement stack. Higher doses needed for equivalent effect." },
    ],
  },
  nasal: {
    tagline: "The direct-to-brain cognitive boost",
    rows: [
      { label: "Delivery", value: "Intranasal spray" },
      { label: "Absorption", value: "High (targeted) — uses nerve pathways to bypass the blood-brain barrier" },
      { label: "Peaks in blood", value: "15–30 minutes" },
      { label: "Effects last", value: "1–3 days" },
      { label: "Bypasses gut", value: "Yes" },
      { label: "Best for", value: "Mental clarity, focus, clearing brain fog, midday cognitive reset" },
      { label: "Experience", value: "Non-invasive, portable. Targets the brain specifically rather than muscles or liver." },
    ],
  },
};

const comparisonRows = [
  { label: "Delivery", injectable: "Injection", oral: "Capsule", nasal: "Nasal spray" },
  { label: "Absorption", injectable: "100%", oral: "Low–moderate", nasal: "High (targeted)" },
  { label: "Peaks", injectable: "Immediate", oral: "Hours", nasal: "15–30 min" },
  { label: "Effects last", injectable: "3–7 days", oral: "~24 hours", nasal: "1–3 days" },
  { label: "Bypasses gut", injectable: "Yes", oral: "No", nasal: "Yes" },
  { label: "Primary target", injectable: "Full body", oral: "Maintenance", nasal: "Brain" },
];

// ── PRODUCT SELECTOR ──────────────────────────────────────────────────────────

const formatPills = [
  { key: "all", label: "All Formats" },
  { key: "injectable", label: "Injectable" },
  { key: "oral", label: "Oral" },
  { key: "nasal", label: "Nasal" },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Block() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeFormat, setActiveFormat] = useState("all");

  const eyebrow = "CELLULAR  |  NAD+ THERAPY";

  const headline = "The Molecule Behind\nEvery Cell's Energy.";

  const description = "NAD+ is a molecule your body needs to turn food into energy, repair damaged DNA, and keep your brain sharp. Your levels drop by up to 50% between ages 40 and 60. We offer 3 ways to restore it — injectable, oral, and nasal — each designed for a different goal.";

  const ctaText = "Get Started for \$0";

  const ctaLink = {
      destination: "/sign-up",
      openIn: "SELF",
    };

  const heroImageAll = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "NAD+ injectable, oral, and nasal formats",
    };

  const heroImageInjectable = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "NAD+ injectable",
    };

  const heroImageOral = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "NAD+ oral capsules",
    };

  const heroImageNasal = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "NAD+ nasal spray",
    };

  const heroImages = {
    all: heroImageAll,
    injectable: heroImageInjectable,
    oral: heroImageOral,
    nasal: heroImageNasal,
  };

  const sections = [
    { key: "overview", label: "Overview" },
    { key: "mechanism", label: "How It Works" },
    { key: "timeline", label: "What to Expect" },
  ];

  const benefits = [
    {
      icon: BenefitIcons.energy,
      title: "Cellular Energy",
      desc: "NAD+ is the primary molecule your cells use to convert food into usable energy. Replenishing it improves mitochondrial function and reduces chronic fatigue.",
    },
    {
      icon: BenefitIcons.dna,
      title: "DNA Repair & Longevity",
      desc: "Fuels the two enzyme families that fix damaged DNA and regulate aging — without enough NAD+, these repair systems slow down and errors accumulate.",
    },
    {
      icon: BenefitIcons.brain,
      title: "Brain Clarity",
      desc: "Supports the neurons that control focus, processing speed, and mental sharpness. Investigated for reducing brain fog and supporting addiction recovery protocols.",
    },
    {
      icon: BenefitIcons.metabolism,
      title: "Metabolic Support",
      desc: "Clinical data shows NAD+ therapy can lower BMI by ~0.19 kg/m² and increase adiponectin — a hormone that improves how your body breaks down fat.",
    },
  ];

  const handleFormatClick = (key) => {
    if (key === activeFormat && key !== "all") {
      setActiveFormat("all");
    } else {
      setActiveFormat(key);
    }
  };

  const currentImage = heroImages[activeFormat] || heroImages.all;

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

            {/* 3-benefit visual strip */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {[
                { icon: BenefitIcons.energy, label: "Energy Production", sub: "Mitochondria" },
                { icon: BenefitIcons.dna, label: "DNA Repair", sub: "PARPs + Sirtuins" },
                { icon: BenefitIcons.brain, label: "Brain Function", sub: "Neurons" },
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

            {/* 3 formats callout */}
            <div className="rounded-lg p-5 mb-8" style={{ backgroundColor: "rgba(36, 92, 58, 0.04)" }}>
              <p className="text-xs tracking-wide mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.04em" }}>
                3 DELIVERY FORMATS
              </p>
              <div className="space-y-2">
                {[
                  { icon: BenefitIcons.syringe, label: "Injectable — 100% absorption, full-body restoration, lasts 3–7 days" },
                  { icon: BenefitIcons.shield, label: "Oral — daily maintenance capsule, easy to integrate into your routine" },
                  { icon: BenefitIcons.brain, label: "Nasal — direct-to-brain delivery, peaks in 15–30 minutes, targets focus and clarity" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center" style={{ opacity: 0.7 }}>
                        <Icon />
                      </div>
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

            {/* OVERVIEW — Product Selector */}
            {activeSection === "overview" && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(36,92,58,0.1)" }}>
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "280px" }}
                />

                {/* Format pills */}
                <div className="flex gap-2 px-6 pt-5 pb-3" style={{ backgroundColor: "#FAFAF8" }}>
                  {formatPills.map((f) => {
                    const isActive = activeFormat === f.key;
                    return (
                      <button
                        key={f.key}
                        onClick={() => handleFormatClick(f.key)}
                        className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5"
                        style={{
                          backgroundColor: isActive ? "#245C3A" : "rgba(36,92,58,0.08)",
                          color: isActive ? "#fff" : "#245C3A",
                          fontWeight: 500,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {f.label}
                        {isActive && f.key !== "all" && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: "2px" }}>
                            <path d="M3 3L9 9M9 3L3 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="px-6 pb-6" style={{ backgroundColor: "#FAFAF8" }}>
                  {/* ALL — comparison table */}
                  {activeFormat === "all" && (
                    <>
                      <h3 className="text-lg mb-4" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                        Compare All 3 Formats
                      </h3>
                      <div className="grid grid-cols-4 gap-2 py-2 px-3 rounded-t-md" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}></span>
                        <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>Injectable</span>
                        <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>Oral</span>
                        <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>Nasal</span>
                      </div>
                      {comparisonRows.map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-4 gap-2 py-2.5 px-3"
                          style={{ borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                        >
                          <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.label}</span>
                          <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.injectable}</span>
                          <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.oral}</span>
                          <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.nasal}</span>
                        </div>
                      ))}
                    </>
                  )}

                  {/* SINGLE FORMAT — detail view */}
                  {activeFormat !== "all" && formatDetails[activeFormat] && (
                    <>
                      <h3 className="text-lg mb-1" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                        {activeFormat.charAt(0).toUpperCase() + activeFormat.slice(1)}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: "#666" }}>
                        {formatDetails[activeFormat].tagline}
                      </p>
                      {formatDetails[activeFormat].rows.map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-3 gap-3 py-2.5"
                          style={{ borderBottom: i < formatDetails[activeFormat].rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                        >
                          <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.label}</span>
                          <span className="text-xs col-span-2" style={{ color: "#666", lineHeight: "1.5" }}>{row.value}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* HOW IT WORKS */}
            {activeSection === "mechanism" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                  What NAD+ Does Inside Your Cells
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  Once delivered, NAD+ is taken up by your tissues within about 2 hours. Inside your cells, it plays two roles: shuttling energy and fueling your body's built-in repair systems.
                </p>

                <MechanismDiagram />

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.energy />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Energy Shuttle</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      NAD+ carries electrons between reactions inside your mitochondria — the process that turns food into ATP, your cells' energy currency. When NAD+ levels are low, this process slows down and fatigue sets in.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.dna />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Repair Fuel</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      Your body has two families of protective enzymes — one that fixes damaged DNA and one that regulates aging. Both consume NAD+ as fuel. When levels drop, these systems slow down, errors accumulate, and cells age faster.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.brain />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Why Levels Drop With Age</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      As you age, inflammation and oxidative stress increase — forcing your repair enzymes to work overtime and burn through NAD+ faster. By your 40s, levels can be half what they were at 20. Higher body weight accelerates this depletion further.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* WHAT TO EXPECT */}
            {activeSection === "timeline" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                  NAD+ Levels Over Your Lifetime
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  Your body's NAD+ levels decline steadily with age. Supplementation can restore levels and maintain them — the earlier you start, the more you preserve.
                </p>

                <DeclineChart />

                <div className="mt-8 space-y-3">
                  {[
                    { phase: "First 1–2 Doses", time: "Week 1", note: "NAD+ enters your cells within 2 hours. Many people notice improved sleep quality and reduced brain fog within the first few days." },
                    { phase: "Loading Phase", time: "Weeks 1–4", note: "Your body begins rebuilding its NAD+ reserves. Energy levels increase and mental clarity sharpens. Effects last 3–7 days per dose." },
                    { phase: "Optimization", time: "Weeks 4–8", note: "Cellular repair systems are fully fueled. Focus, recovery from exercise, and overall vitality improve measurably." },
                    { phase: "Maintenance", time: "Ongoing", note: "With consistent dosing, NAD+ levels stabilize at a youthful baseline. Dosing frequency adjusts based on your body's needs." },
                  ].map((m, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-16 text-center rounded-md py-1" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}>{m.time}</span>
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: "#1a4d2e", fontWeight: 600 }}>{m.phase}</p>
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