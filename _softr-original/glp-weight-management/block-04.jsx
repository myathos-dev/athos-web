import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useState } from "react";
import { useTextSetting, useLongTextSetting, useImageSetting, useNavigationSetting } from "@/lib/editable-settings";

// ── SVG ICONS: Add-ins (compact) ──────────────────────────────────────────────

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

// ── SVG MOLECULES: Fixed — lines stop at circle perimeter ─────────────────────

const MoleculeSVGs = {
  semaglutide: () => (
    <svg width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Backbone chain — ends at last node, does NOT extend into receptor */}
      <path d="M30 90 L65 60 L100 90 L135 60 L170 90" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Peptide nodes */}
      <circle cx="30" cy="90" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="65" cy="60" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="100" cy="90" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="135" cy="60" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="170" cy="90" r="4" fill="#245C3A" opacity="0.3" />
      {/* Branch to GLP-1 — stops at circle edge (222 - 20 = 202) */}
      <path d="M170 90 L202 90" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      {/* GLP-1 receptor circle */}
      <circle cx="222" cy="90" r="20" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="222" y="94" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="600">GLP-1</text>
      {/* Fatty acid side chain */}
      <path d="M100 90 L100 130 L120 140" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="120" cy="140" r="3" fill="#245C3A" opacity="0.2" />
      {/* Label */}
      <text x="130" y="172" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="500" opacity="0.6">Single-receptor agonist</text>
    </svg>
  ),

  tirzepatide: () => (
    <svg width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Backbone chain */}
      <path d="M25 90 L55 65 L85 90 L115 65 L145 90" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Peptide nodes */}
      <circle cx="25" cy="90" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="55" cy="65" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="85" cy="90" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="115" cy="65" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="145" cy="90" r="4" fill="#245C3A" opacity="0.3" />
      {/* Branch to GLP-1 — computed edge stop point */}
      <path d="M145 90 L202 59" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      {/* Branch to GIP — computed edge stop point */}
      <path d="M145 90 L202 121" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      {/* GLP-1 receptor */}
      <circle cx="220" cy="50" r="20" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="220" y="54" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="600">GLP-1</text>
      {/* GIP receptor */}
      <circle cx="220" cy="130" r="20" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="220" y="134" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="600">GIP</text>
      {/* Side chain */}
      <path d="M85 90 L85 125 L65 135" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="65" cy="135" r="3" fill="#245C3A" opacity="0.2" />
      {/* Label */}
      <text x="130" y="172" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="500" opacity="0.6">Dual-receptor agonist</text>
    </svg>
  ),

  retatrutide: () => (
    <svg width="260" height="190" viewBox="0 0 260 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Backbone chain */}
      <path d="M20 95 L50 73 L80 95 L110 73 L140 95" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Peptide nodes */}
      <circle cx="20" cy="95" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="50" cy="73" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="80" cy="95" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="110" cy="73" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="140" cy="95" r="4" fill="#245C3A" opacity="0.3" />
      {/* Branch to GLP-1 — stops at circle perimeter */}
      <path d="M140 95 L206 49" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      {/* Branch to GIP — stops at circle perimeter (222-20=202) */}
      <path d="M140 95 L202 95" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      {/* Branch to GCG — stops at circle perimeter */}
      <path d="M140 95 L206 141" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      {/* GLP-1 receptor */}
      <circle cx="222" cy="38" r="20" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="222" y="42" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="600">GLP-1</text>
      {/* GIP receptor */}
      <circle cx="222" cy="95" r="20" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="222" y="99" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="600">GIP</text>
      {/* GCG receptor */}
      <circle cx="222" cy="152" r="20" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="222" y="156" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="600">GCG</text>
      {/* Label */}
      <text x="130" y="185" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="500" opacity="0.6">Triple-receptor agonist</text>
    </svg>
  ),
};

// ── GLP DATA ──────────────────────────────────────────────────────────────────

const glpData = {
  semaglutide: {
    name: "Semaglutide",
    tag: "GLP-1",
    tagColor: "rgba(36, 92, 58, 0.1)",
    oneLiner: "Single-receptor agonist targeting appetite and satiety.",
    formats: ["Injectable", "Oral", "Liquid"],
    mechanism:
      "A long-acting GLP-1 receptor agonist that mimics a natural gut hormone. It targets brain regions that regulate appetite, slows gastric emptying, and signals satiety — helping patients manage caloric intake and metabolic health.",
    benefits: [
      "Clinically proven 15–17% average body weight reduction",
      "Once-weekly dosing for sustained appetite control",
      "Improves glycemic markers and cardiovascular risk factors",
    ],
  },
  tirzepatide: {
    name: "Tirzepatide",
    tag: "GLP-1 + GIP",
    tagColor: "rgba(36, 92, 58, 0.1)",
    oneLiner: "Dual-receptor agonist for enhanced metabolic regulation.",
    formats: ["Injectable", "Oral"],
    mechanism:
      "A dual-action agonist targeting both GLP-1 and GIP receptors. While GLP-1 drives satiety and digestion, GIP enhances insulin sensitivity and fat metabolism — delivering a synergistic approach to weight management.",
    benefits: [
      "Up to 22.5% body weight reduction in clinical trials",
      "Superior insulin sensitivity via dual-pathway activation",
      "Enhanced fat metabolism beyond appetite suppression alone",
    ],
  },
  retatrutide: {
    name: "Retatrutide",
    tag: "GLP-1 + GIP + GCG",
    tagColor: "rgba(36, 92, 58, 0.1)",
    oneLiner: "Triple-receptor agonist — the latest frontier in metabolic therapy.",
    formats: ["Injectable"],
    mechanism:
      "A triple-hormone receptor agonist targeting GLP-1, GIP, and Glucagon pathways. By adding GCG to the dual-action profile, it regulates appetite and insulin while stimulating energy expenditure — a three-pronged approach to metabolic health.",
    benefits: [
      "Phase 2 data: up to 24.2% weight reduction at 48 weeks",
      "Only triple-agonist to activate energy expenditure via glucagon",
      "Comprehensive metabolic coverage across 3 distinct pathways",
    ],
  },
};

const allFormats = ["Injectable", "Oral", "Liquid"];

// ── FORMAT ICON SVGs ──────────────────────────────────────────────────────────

const FormatIcons = {
  Injectable: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M10.5 1.5L12.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5.5 3.5L10.5 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2L12 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4 5L9 10L7.5 11.5C6.5 12.5 5 12.5 4 11.5L2.5 10C1.5 9 1.5 7.5 2.5 6.5L4 5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 13L2.8 11.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Oral: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="3.5" y="4" width="7" height="6" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 7H10.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  Liquid: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5.5 1.5H8.5V5L10.5 8.5C11 9.5 10.5 11.5 8.5 12H5.5C3.5 11.5 3 9.5 3.5 8.5L5.5 5V1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 9C4.5 8.3 6 8.5 7 9C8 9.5 9 9.2 10 8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Block() {
  const [selectedGLP, setSelectedGLP] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const eyebrow = useTextSetting({
    name: "eyebrow",
    label: "Eyebrow Text",
    initialValue: "3 COMPOUNDED GLPS  |  PRESCRIPTION WEIGHT LOSS",
  });

  const headline = useTextSetting({
    name: "headline",
    label: "Headline",
    initialValue: "Three Pathways to Meaningful Weight Loss",
  });

  const ctaText = useTextSetting({
    name: "cta-text",
    label: "CTA Button Text",
    initialValue: "Get Started for \$0",
  });

  const ctaLink = useNavigationSetting({
    name: "cta-link",
    label: "CTA Button Link",
    initialValue: {
      destination: "/sign-up",
      openIn: "SELF",
    },
  });

  const heroImage = useImageSetting({
    name: "hero-image",
    label: "Hero Image",
    initialValue: {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "Pharmaceutical compounding process",
    },
  });

  const handleSelectGLP = (glpKey) => {
    setSelectedGLP(glpKey);
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
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

  const glpKeys = ["semaglutide", "tirzepatide", "retatrutide"];

  const activeGLP = selectedGLP ? glpData[selectedGLP] : null;
  const ActiveMolecule = selectedGLP ? MoleculeSVGs[selectedGLP] : null;

  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* ── LEFT COLUMN ──────────────────────────────── */}
          <div>
            <p
              className="text-sm tracking-wide mb-4"
              style={{ color: "#16625F", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              {eyebrow}
            </p>

            <h1
              className="text-4xl md:text-5xl mb-6 leading-tight"
              style={{ color: "#1a4d2e" }}
            >
              {headline}
            </h1>

            {/* Add-ins box — 3/2 layout */}
            <div
              className="rounded-lg p-5 mb-8"
              style={{ backgroundColor: "rgba(36, 92, 58, 0.04)" }}
            >
              <p
                className="text-xs tracking-wide mb-3"
                style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.04em" }}
              >
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

            {/* GLP Selector */}
            <div className="space-y-3 mb-8">
              {glpKeys.map((key) => {
                const glp = glpData[key];
                const isSelected = selectedGLP === key;
                return (
                  <div
                    key={key}
                    onClick={() => handleSelectGLP(key)}
                    className="rounded-lg p-4 cursor-pointer transition-all duration-200"
                    style={{
                      backgroundColor: isSelected ? "rgba(36, 92, 58, 0.05)" : "rgba(0,0,0,0.02)",
                      borderLeft: "3px solid",
                      borderLeftColor: isSelected ? "#245C3A" : "transparent",
                      borderRight: isSelected ? "none" : "1px solid rgba(0,0,0,0.06)",
                      borderTop: isSelected ? "none" : "1px solid rgba(0,0,0,0.06)",
                      borderBottom: isSelected ? "none" : "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                          style={{ borderColor: isSelected ? "#245C3A" : "#ccc" }}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#245C3A" }} />
                          )}
                        </div>
                        <span className="text-base" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                          {glp.name}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: glp.tagColor, color: "#245C3A", fontWeight: 500 }}
                        >
                          {glp.tag}
                        </span>
                      </div>
                      <div className="text-xs flex items-center gap-1" style={{ color: "#245C3A", fontWeight: 500 }}>
                        More Info
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm" style={{ color: "#666", marginLeft: "26px", lineHeight: "1.5" }}>
                      {glp.oneLiner}
                    </p>
                  </div>
                );
              })}
            </div>

            <Button
              asChild
              size="lg"
              className="text-white hover:opacity-90 shadow-sm px-10 py-6 rounded-md font-semibold"
              style={{ backgroundColor: "#245C3A" }}
            >
              <NavigationAction navigation={ctaLink}>{ctaText}</NavigationAction>
            </Button>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          <div className="relative min-h-[480px]">
            {/* Default: Image */}
            <div
              className="transition-opacity duration-300"
              style={{
                opacity: showInfo ? 0 : 1,
                pointerEvents: showInfo ? "none" : "auto",
                position: showInfo ? "absolute" : "relative",
                inset: 0,
              }}
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Info Panel */}
            <div
              className="transition-opacity duration-300 rounded-lg p-8"
              style={{
                opacity: showInfo ? 1 : 0,
                pointerEvents: showInfo ? "auto" : "none",
                position: showInfo ? "relative" : "absolute",
                inset: 0,
                backgroundColor: "#FAFAF8",
                border: "1px solid rgba(36, 92, 58, 0.1)",
              }}
            >
              {activeGLP && ActiveMolecule && (
                <>
                  <button
                    onClick={handleCloseInfo}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                    style={{ backgroundColor: "rgba(36, 92, 58, 0.08)", border: "none", cursor: "pointer" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </button>

                  {/* Format pills */}
                  <div className="flex gap-2 mb-6">
                    {allFormats.map((format) => {
                      const isAvailable = activeGLP.formats.includes(format);
                      const FormatIcon = FormatIcons[format];
                      return (
                        <div
                          key={format}
                          className="text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                          style={{
                            backgroundColor: isAvailable ? "rgba(36, 92, 58, 0.1)" : "rgba(0,0,0,0.04)",
                            color: isAvailable ? "#245C3A" : "#bbb",
                            fontWeight: 500,
                          }}
                        >
                          <FormatIcon />
                          {format}
                        </div>
                      );
                    })}
                  </div>

                  {/* Molecule SVG */}
                  <div className="flex justify-center mb-6">
                    <ActiveMolecule />
                  </div>

                  <h3 className="text-lg mb-3" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                    How {activeGLP.name} Works
                  </h3>
                  <p className="text-sm mb-5" style={{ color: "#4A4A4A", lineHeight: "1.7" }}>
                    {activeGLP.mechanism}
                  </p>

                  <div className="space-y-2.5">
                    {activeGLP.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="8" cy="8" r="7" stroke="#245C3A" strokeWidth="1.5" />
                          <path d="M5 8L7 10L11 6" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-sm" style={{ color: "#333", lineHeight: "1.5" }}>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {!activeGLP && (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <p className="text-sm" style={{ color: "#999" }}>Select a compound to explore.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
