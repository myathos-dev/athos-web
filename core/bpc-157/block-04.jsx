import { useState } from "react";

// ── BENEFIT ICONS ─────────────────────────────────────────────────────────────

const BenefitIcons = {
  tissue: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 12C4 8 7 4 12 4C17 4 20 8 20 12" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 12C4 16 7 20 12 20C17 20 20 16 20 12" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 8L16 16" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <path d="M16 8L8 16" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <circle cx="12" cy="12" r="2" fill="#245C3A" opacity="0.25" />
    </svg>
  ),
  gut: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 4C8 4 4 6 4 10C4 14 8 14 8 18C8 20 10 22 12 22" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 4C16 4 20 6 20 10C20 14 16 14 16 18C16 20 14 22 12 22" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 10H14" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M10 14H14" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  ),
  antiInflam: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L5 7V13C5 19.05 8.84 22.74 12 24" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3L19 7V13C19 19.05 15.16 22.74 12 24" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13H15" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  brain: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4C9 4 7 6 7 8.5C5.5 9 4.5 10.5 4.5 12C4.5 13.5 5.5 15 7 15.5C7 18 9 20 12 20C15 20 17 18 17 15.5C18.5 15 19.5 13.5 19.5 12C19.5 10.5 18.5 9 17 8.5C17 6 15 4 12 4Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V20" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
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
  capsule: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="8" y="3" width="8" height="18" rx="4" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M8 12H16" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M10 7H14" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M10 17H14" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  spray: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="10" width="6" height="12" rx="1.5" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M10 10V7C10 5.5 11 4 12 4C13 4 14 5.5 14 7V10" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 4L8 2" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M12 4L6 3" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
      <path d="M12 4L7 5" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
    </svg>
  ),
  vessel: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 12C4 12 8 6 12 6C16 6 20 12 20 12C20 12 16 18 12 18C8 18 4 12 4 12Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="#245C3A" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1" fill="#245C3A" opacity="0.3" />
    </svg>
  ),
  growth: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 20L8 14L12 16L16 10L20 6" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6H20V10" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="16" r="2" stroke="#245C3A" strokeWidth="1.2" opacity="0.35" />
    </svg>
  ),
  gaba: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 12H8L10 8L12 16L14 10L16 14L18 12H20" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="#245C3A" strokeWidth="1.2" opacity="0.2" />
    </svg>
  ),
};

// ── MECHANISM DIAGRAM ─────────────────────────────────────────────────────────

const MechanismDiagram = () => (
  <div className="relative">
    <p className="text-center text-xs mb-6" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>
      MASTER REPAIR SIGNALING PATHWAY
    </p>

    <div className="flex flex-col items-center mb-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
        <BenefitIcons.tissue />
      </div>
      <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>BPC-157 Administered</p>
      <p className="text-xs mb-3" style={{ color: "#888" }}>Injectable, oral, or nasal</p>

      <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
        <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="rounded-lg px-5 py-3 mt-2 mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)" }}>
        <p className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Target Tissue</p>
        <p className="text-xs text-center mt-1" style={{ color: "#888" }}>Gut, muscle, tendon, or CNS</p>
      </div>
    </div>

    <div className="flex justify-center" style={{ height: "40px" }}>
      <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
        <path d="M10 0L10 34" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 30L10 36L14 30" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    <div className="flex justify-center mb-4 mt-2">
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <circle cx="45" cy="45" r="42" stroke="#245C3A" strokeWidth="1.8" strokeDasharray="4 3" />
        <circle cx="45" cy="45" r="18" stroke="#245C3A" strokeWidth="1.2" opacity="0.3" />
        <text x="45" y="42" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">MASTER</text>
        <text x="45" y="53" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">REPAIR</text>
      </svg>
    </div>

    <div className="relative" style={{ height: "60px" }}>
      <svg width="100%" height="100%" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none" className="absolute inset-0">
        <path d="M150 0 L150 10" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 Q150 35 50 50 L50 60" stroke="#245C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 L150 60" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M150 10 Q150 35 250 50 L250 60" stroke="#245C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>

    <div className="grid grid-cols-3 gap-3">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>New Blood Vessels</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Stimulates angiogenesis to deliver blood flow to damaged tissue
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Cell Migration</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Activates repair cells to move toward the injury site and rebuild
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Nervous System Balance</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Modulates GABA receptors to calm overstimulation and reduce neuroinflammation
        </p>
      </div>
    </div>
  </div>
);

// ── ROUTE DATA ────────────────────────────────────────────────────────────────

const routeDetails = {
  injectable: {
    tagline: "The systemic fixer for injuries",
    rows: [
      { label: "Delivery", value: "Subcutaneous injection — abdomen or near the injury site" },
      { label: "Bioavailability", value: "100% — direct entry into the bloodstream" },
      { label: "Primary target", value: "Tendons, ligaments, joints, and muscle tissue" },
      { label: "How it works", value: "Highest concentration delivered directly to the site of damage via bloodstream" },
      { label: "Dosing", value: "Once daily" },
      { label: "Best for", value: "Nagging injuries, torn ligaments, chronic joint inflammation, athletic recovery" },
      { label: "Experience", value: "A quick daily pinch. Standard for athletes and those seeking rapid structural repair." },
    ],
  },
  oral: {
    tagline: "The gold standard for gut health",
    rows: [
      { label: "Delivery", value: "Capsule or liquid — taken like a daily vitamin" },
      { label: "Bioavailability", value: "High — uniquely acid-stable, survives the digestive process intact" },
      { label: "Primary target", value: "Gastrointestinal tract lining" },
      { label: "How it works", value: "Spends more time in the GI tract, acting as a local bandage for the digestive lining while still providing systemic anti-inflammatory benefits" },
      { label: "Dosing", value: "Once daily" },
      { label: "Best for", value: "Leaky gut, IBS, stomach ulcers, gut-brain axis support, systemic wellness" },
      { label: "Experience", value: "Non-invasive, easy to add to a morning routine. Preferred for digestive-first goals." },
    ],
  },
  nasal: {
    tagline: "The neural shield for the brain",
    rows: [
      { label: "Delivery", value: "Intranasal spray — one spray per nostril" },
      { label: "Bioavailability", value: "High (targeted) — nasal mucosa provides a direct pathway to the brain" },
      { label: "Primary target", value: "Central nervous system" },
      { label: "How it works", value: "Bypasses the blood-brain barrier to reduce neuroinflammation and support cognitive recovery directly" },
      { label: "Dosing", value: "Once daily" },
      { label: "Best for", value: "Brain fog, neuroprotection, cognitive recovery, chronic stress" },
      { label: "Experience", value: "Portable, painless. Targets the CNS more effectively than injection or capsule." },
    ],
  },
};

const comparisonRows = [
  { label: "Delivery", injectable: "Injection", oral: "Capsule", nasal: "Nasal spray" },
  { label: "Bioavailability", injectable: "100%", oral: "High (acid-stable)", nasal: "High (targeted)" },
  { label: "Primary target", injectable: "Muscles, tendons, joints", oral: "GI tract lining", nasal: "Central nervous system" },
  { label: "Best for", injectable: "Structural injuries", oral: "Gut healing", nasal: "Brain fog, neuro" },
  { label: "Dosing", injectable: "Once daily", oral: "Once daily", nasal: "Once daily" },
  { label: "Bypasses BBB", injectable: "No", oral: "No", nasal: "Yes" },
];

const routePills = [
  { key: "all", label: "All Routes" },
  { key: "injectable", label: "Injectable" },
  { key: "oral", label: "Oral" },
  { key: "nasal", label: "Nasal" },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Block() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeRoute, setActiveRoute] = useState("all");

  const eyebrow = "REGENERATIVE  |  BODY PROTECTION PEPTIDE";

  const headline = "Your Body's Built-In\nRepair Signal.";

  const description = "BPC-157 is a 15-amino acid peptide originally discovered in human gastric juice. It accelerates tissue repair, heals the gut lining, reduces systemic inflammation, and supports brain recovery — available as an injectable, capsule, or nasal spray, each targeting a different priority.";

  const ctaText = "Get Started for \$0";

  const ctaLink = {
      destination: "/sign-up",
      openIn: "SELF",
    };

  const heroImageAll = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "BPC-157 injectable, capsule, and nasal spray",
    };

  const heroImageInjectable = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "BPC-157 injectable",
    };

  const heroImageOral = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "BPC-157 oral capsules",
    };

  const heroImageNasal = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "BPC-157 nasal spray",
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
      icon: BenefitIcons.tissue,
      title: "Soft Tissue Repair",
      desc: "Accelerates healing of tendons, ligaments, and muscle by stimulating new blood vessel formation — delivering more blood flow directly to the damaged area.",
    },
    {
      icon: BenefitIcons.gut,
      title: "Gut Health",
      desc: "Uniquely acid-stable — it survives digestion intact. Repairs the mucosal lining of the gut and has shown significant promise for leaky gut, IBD, and stomach ulcers.",
    },
    {
      icon: BenefitIcons.antiInflam,
      title: "Systemic Anti-Inflammatory",
      desc: "Reduces inflammation throughout the body without damaging the gut lining — unlike traditional NSAIDs that can cause the very problems BPC-157 heals.",
    },
    {
      icon: BenefitIcons.brain,
      title: "Neuroprotection",
      desc: "Modulates dopamine and serotonin systems to reduce neuroinflammation. Being studied for brain fog recovery, traumatic brain injuries, and chronic stress.",
    },
  ];

  const handleRouteClick = (key) => {
    if (key === activeRoute && key !== "all") {
      setActiveRoute("all");
    } else {
      setActiveRoute(key);
    }
  };

  const currentImage = heroImages[activeRoute] || heroImages.all;

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

            {/* 3-target visual strip */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {[
                { icon: BenefitIcons.tissue, label: "Tissue Repair", sub: "VEGFR2 / Angiogenesis" },
                { icon: BenefitIcons.gut, label: "Gut Healing", sub: "Acid-Stable Peptide" },
                { icon: BenefitIcons.brain, label: "Neuroprotection", sub: "GABA / Dopamine" },
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

            {/* 3 delivery routes callout */}
            <div className="rounded-lg p-5 mb-8" style={{ backgroundColor: "rgba(36, 92, 58, 0.04)" }}>
              <p className="text-xs tracking-wide mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.04em" }}>
                3 DELIVERY ROUTES
              </p>
              <div className="space-y-2">
                {[
                  { icon: BenefitIcons.syringe, label: "Injectable — 100% bioavailable, systemic repair for joints, tendons, and muscle" },
                  { icon: BenefitIcons.capsule, label: "Oral — acid-stable capsule, gold standard for gut healing and systemic wellness" },
                  { icon: BenefitIcons.spray, label: "Nasal — bypasses the blood-brain barrier, targets brain fog and neuroprotection" },
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

            {/* OVERVIEW — Route Selector */}
            {activeSection === "overview" && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(36,92,58,0.1)" }}>
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "280px" }}
                />

                {/* Route pills */}
                <div className="flex gap-2 px-6 pt-5 pb-3" style={{ backgroundColor: "#FAFAF8" }}>
                  {routePills.map((f) => {
                    const isActive = activeRoute === f.key;
                    return (
                      <button
                        key={f.key}
                        onClick={() => handleRouteClick(f.key)}
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
                  {activeRoute === "all" && (
                    <>
                      <h3 className="text-lg mb-4" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                        Compare All 3 Routes
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

                  {/* SINGLE ROUTE — detail view */}
                  {activeRoute !== "all" && routeDetails[activeRoute] && (
                    <>
                      <h3 className="text-lg mb-1" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                        {activeRoute.charAt(0).toUpperCase() + activeRoute.slice(1)}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: "#666" }}>
                        {routeDetails[activeRoute].tagline}
                      </p>
                      {routeDetails[activeRoute].rows.map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-3 gap-3 py-2.5"
                          style={{ borderBottom: i < routeDetails[activeRoute].rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
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
                  How BPC-157 Repairs Your Body
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  BPC-157 activates a master repair signaling pathway. Depending on the delivery route, it reaches different target tissues — but the core mechanism is the same: it tells your body to build new blood vessels, migrate repair cells to the damage, and rebalance your nervous system.
                </p>

                <MechanismDiagram />

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.vessel />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Nitric Oxide & Blood Vessel Formation</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      BPC-157 regulates nitric oxide production to control blood flow and protect the lining of your blood vessels. It then stimulates angiogenesis — the creation of entirely new blood vessels — to deliver more oxygen and nutrients directly to damaged tissue.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.growth />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Growth Factor & Cell Migration</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      It increases the expression of key growth factors that activate the cell migration pathway — essentially directing your body's repair cells to move toward the injury site and begin rebuilding. This is what makes it effective across tendons, ligaments, muscle, and gut lining.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.gaba />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>GABA & Nervous System Balance</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      BPC-157 modulates GABA receptors to calm an overstimulated nervous system. This contributes to its "calming" effect — reducing neuroinflammation and helping the brain recover from chronic stress, overstimulation, or injury.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* WHAT TO EXPECT */}
            {activeSection === "timeline" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                  What to Expect
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  BPC-157 begins working at the cellular level immediately. Most people notice early changes within days, with significant repair milestones across the first 4 weeks. All 3 routes are dosed once daily.
                </p>

                <div className="space-y-3">
                  {[
                    { phase: "Early Response", time: "Days 1–3", note: "Peptide reaches target tissue and begins nitric oxide modulation. Early inflammation reduction. Many people report reduced pain and improved comfort at injury sites." },
                    { phase: "Repair Activation", time: "Weeks 1–2", note: "New blood vessel formation begins delivering more oxygen to damaged areas. Gut symptoms start easing for oral users. Brain fog begins clearing for nasal users." },
                    { phase: "Visible Recovery", time: "Weeks 2–4", note: "Tendon and muscle repair becomes measurable. Gut lining integrity improves significantly. Systemic inflammation markers drop. Neuroinflammation continues resolving." },
                    { phase: "Sustained Healing", time: "Week 4+", note: "With continued daily dosing, repair compounds. Many people transition to a maintenance dose after the initial healing phase is complete." },
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

                {/* Route-specific expectations */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>
                    ROUTE-SPECIFIC NOTES
                  </p>
                  {[
                    { route: "Injectable", note: "Fastest response for structural injuries. Many athletes report reduced joint pain within 3–5 days." },
                    { route: "Oral", note: "Gut healing is typically noticeable within 7–10 days. Acid stability means it works where other peptides can't." },
                    { route: "Nasal", note: "Cognitive improvements often noticed within the first week. Most effective for brain fog and mental clarity." },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg p-3" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                      <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600, marginBottom: "2px" }}>{item.route}</p>
                      <p className="text-xs" style={{ color: "#666", lineHeight: "1.5" }}>{item.note}</p>
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