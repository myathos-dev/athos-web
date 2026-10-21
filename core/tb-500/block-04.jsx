import { useState } from "react";

// ── BENEFIT ICONS ─────────────────────────────────────────────────────────────

const BenefitIcons = {
  systemic: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#245C3A" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 2" />
      <path d="M12 3V7" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M12 17V21" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M3 12H7" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M17 12H21" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M5.6 5.6L8.2 8.2" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M15.8 15.8L18.4 18.4" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M5.6 18.4L8.2 15.8" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M15.8 8.2L18.4 5.6" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  actin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 12L8 8L12 12L16 8L20 12" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16L8 12L12 16L16 12L20 16" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <circle cx="12" cy="12" r="1.5" fill="#245C3A" opacity="0.25" />
    </svg>
  ),
  flexibility: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 18C6 18 8 12 12 12C16 12 18 6 18 6" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 6C6 6 8 12 12 12C16 12 18 18 18 18" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" stroke="#245C3A" strokeWidth="1.3" opacity="0.4" />
    </svg>
  ),
  heart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 20C12 20 4 14 4 9C4 6.5 6 4.5 8.5 4.5C10 4.5 11.5 5.5 12 6.5C12.5 5.5 14 4.5 15.5 4.5C18 4.5 20 6.5 20 9C20 14 12 20 12 20Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13L12 17" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <path d="M10 15H14" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
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
  vessel: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 12C4 12 8 6 12 6C16 6 20 12 20 12C20 12 16 18 12 18C8 18 4 12 4 12Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="#245C3A" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1" fill="#245C3A" opacity="0.3" />
    </svg>
  ),
  scar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M9 8V16" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
      <path d="M15 8V16" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
      <path d="M9 11H15" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 14H15" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
};

// ── BLEND VECTOR ILLUSTRATIONS ────────────────────────────────────────────────

const BlendIllustrations = {
  systemic: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      {/* Body outline */}
      <ellipse cx="40" cy="40" rx="28" ry="36" stroke="#245C3A" strokeWidth="1.8" />
      {/* Core */}
      <circle cx="40" cy="40" r="8" stroke="#245C3A" strokeWidth="1.4" strokeDasharray="4 3" />
      <circle cx="40" cy="40" r="2.5" fill="#245C3A" opacity="0.25" />
      {/* Radiating repair signals */}
      <path d="M40 32L40 18" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M40 48L40 62" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M32 40L18 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M48 40L62 40" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M34 34L24 24" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M46 46L56 56" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M34 46L24 56" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M46 34L56 24" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      {/* Signal dots at endpoints */}
      <circle cx="40" cy="18" r="2" fill="#245C3A" opacity="0.3" />
      <circle cx="40" cy="62" r="2" fill="#245C3A" opacity="0.3" />
      <circle cx="18" cy="40" r="2" fill="#245C3A" opacity="0.3" />
      <circle cx="62" cy="40" r="2" fill="#245C3A" opacity="0.3" />
      <circle cx="24" cy="24" r="1.5" fill="#245C3A" opacity="0.2" />
      <circle cx="56" cy="56" r="1.5" fill="#245C3A" opacity="0.2" />
      <circle cx="24" cy="56" r="1.5" fill="#245C3A" opacity="0.2" />
      <circle cx="56" cy="24" r="1.5" fill="#245C3A" opacity="0.2" />
    </svg>
  ),
  recovery: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M40 8L16 20V40C16 56 26 68 40 72C54 68 64 56 64 40V20L40 8Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 24C32 24 32 34 40 38C48 42 48 52 48 52" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M48 24C48 24 48 34 40 38C32 42 32 52 32 52" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M34 30H46" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M34 46H46" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M38 38H42" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
      <path d="M40 36V40" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  vitality: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M24 40C24 34 28 28 34 28C38 28 40 32 40 36C40 32 42 28 46 28C52 28 56 34 56 40C56 46 52 52 46 52C42 52 40 48 40 44C40 48 38 52 34 52C28 52 24 46 24 40Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 40H28L32 32L36 48L40 36L44 44L48 38L52 40H70" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M40 16V10" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.3" />
      <path d="M34 18L32 12" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
      <path d="M46 18L48 12" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
      <path d="M28 22L24 18" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
      <path d="M52 22L56 18" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
    </svg>
  ),
};

// ── MECHANISM DIAGRAM ─────────────────────────────────────────────────────────

const MechanismDiagram = () => (
  <div className="relative">
    <p className="text-center text-xs mb-6" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>
      HOW TB-500 REPAIRS SYSTEMICALLY
    </p>

    <div className="flex flex-col items-center mb-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
        <BenefitIcons.syringe />
      </div>
      <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>Subcutaneous Injection</p>
      <p className="text-xs mb-3" style={{ color: "#888" }}>100% bioavailable, inject anywhere</p>

      <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
        <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="rounded-lg px-5 py-3 mt-2 mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)" }}>
        <p className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Bloodstream</p>
        <p className="text-xs text-center mt-1" style={{ color: "#888" }}>Circulates systemically to find damage</p>
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
        <text x="45" y="42" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="700">ACTIN</text>
        <text x="45" y="54" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.6">REGULATED</text>
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
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Cell Migration</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Directs repair cells to travel to the injury site and begin rebuilding
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Blood Vessel Growth</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Builds new blood vessels to deliver nutrients to tendons, cartilage, and dead zones
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>Scar Prevention</p>
        <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>
          Reduces restrictive scar tissue and increases connective tissue flexibility
        </p>
      </div>
    </div>
  </div>
);

// ── BLEND DATA ────────────────────────────────────────────────────────────────

const blendData = {
  "tb500": {
    name: "TB-500",
    category: "Systemic Repair",
    illustration: BlendIllustrations.systemic,
    compounds: ["TB-500 (Thymosin Beta-4)"],
    tagline: "Focused systemic repair, cell migration, and joint flexibility",
    rows: [
      { label: "Primary goal", value: "Systemic tissue repair and inflammation reduction throughout the body" },
      { label: "Mechanism", value: "Regulates actin to promote cell migration to injury sites, builds new blood vessels, prevents restrictive scar tissue" },
      { label: "Concentration", value: "2mg/ml per vial (10mg total per 5ml vial)" },
      { label: "Loading dose", value: "4–10mg per week, split into 2 injections, for 4–6 weeks" },
      { label: "Maintenance", value: "2–5mg once per week ongoing" },
      { label: "Best for", value: "General joint stiffness, multiple minor injuries, post-surgery flexibility, connective tissue health" },
    ],
  },
  "valkyr": {
    name: "Valkyr / Wolverine",
    category: "Gold Standard Injury Repair",
    illustration: BlendIllustrations.recovery,
    compounds: ["BPC-157", "TB-500"],
    tagline: "Local structural repair meets systemic cellular reach",
    rows: [
      { label: "Primary goal", value: "Complete injury repair — BPC handles local structural fix, TB-500 handles systemic cellular movement and flexibility" },
      { label: "BPC-157 role", value: "Localized repair — tendons, ligaments, gut lining. Stimulates growth factors and new blood vessels at the damage site" },
      { label: "TB-500 role", value: "Systemic reach — travels through the body to reduce inflammation and direct repair cells to the injury" },
      { label: "Concentration", value: "2mg BPC / 2mg TB per ml" },
      { label: "Typical protocol", value: "0.25–0.5ml daily. At 0.5ml daily, delivers 7mg TB-500 per week (covers high-mass loading) plus strong daily BPC-157" },
      { label: "Best for", value: "Specific injuries, torn ligaments, post-surgery recovery, chronic tendon pain, athletes" },
    ],
  },
  "samson": {
    name: "Samson & Delilah",
    category: "Total Vitality & Anti-Aging",
    illustration: BlendIllustrations.vitality,
    compounds: ["TB-500", "GHK-Cu", "CJC-1295", "Ipamorelin"],
    tagline: "Full-body repair, collagen, and growth hormone in one shot",
    rows: [
      { label: "Primary goal", value: "Comprehensive anti-aging — systemic repair, collagen synthesis, and natural growth hormone release" },
      { label: "TB-500 role", value: "Systemic tissue repair, cell migration, and flexibility restoration" },
      { label: "GHK-Cu role", value: "Boosts collagen production, supports skin health, and promotes wound healing at the structural level" },
      { label: "CJC + Ipamorelin", value: "Triggers sustained natural growth hormone release for fat mobilization, lean muscle protection, and recovery" },
      { label: "Dosing", value: "Per protocol — combines loading and maintenance phases across all compounds" },
      { label: "Best for", value: "Full-body anti-aging, skin and tissue rejuvenation, recovery, longevity-focused protocols" },
    ],
  },
};

const blendPills = [
  { key: "all", label: "All Blends" },
  { key: "tb500", label: "TB-500" },
  { key: "valkyr", label: "Valkyr" },
  { key: "samson", label: "Samson & Delilah" },
];

const comparisonRows = [
  { label: "Compounds", tb500: "TB-500", valkyr: "BPC-157 + TB-500", samson: "TB + GHK-Cu + CJC + Ipa" },
  { label: "Focus", tb500: "Systemic repair", valkyr: "Injury repair", samson: "Total vitality" },
  { label: "Mechanism", tb500: "Cell migration + flexibility", valkyr: "Local fix + systemic reach", samson: "Repair + collagen + GH" },
  { label: "Dosing", tb500: "1–2× per week", valkyr: "Daily (0.25–0.5ml)", samson: "Per protocol" },
  { label: "Muscle sparing", tb500: "Moderate", valkyr: "High", samson: "High (via GH)" },
  { label: "Best for", tb500: "Joint stiffness", valkyr: "Specific injuries", samson: "Anti-aging" },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Block() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeBlend, setActiveBlend] = useState("all");

  const eyebrow = "SYSTEMIC  |  REPAIR PEPTIDE";

  const headline = "Finds the Damage.\nFixes It Anywhere.";

  const description = "TB-500 is a synthetic version of Thymosin Beta-4, a peptide your body already makes. Unlike most repair compounds, it doesn't need to be injected at the injury site — it circulates through your entire body, finds inflammation, and directs repair cells to rebuild. Available in 3 specialized blends.";

  const ctaText = "Get Started for \$0";

  const ctaLink = {
      destination: "/sign-up",
      openIn: "SELF",
    };

  const heroImageAll = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "TB-500 peptide blends collection",
    };

  const heroImageTB500 = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "TB-500 standalone",
    };

  const heroImageValkyr = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "Valkyr Wolverine blend",
    };

  const heroImageSamson = {
      src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp",
      alt: "Samson and Delilah blend",
    };

  const heroImages = {
    all: heroImageAll,
    tb500: heroImageTB500,
    valkyr: heroImageValkyr,
    samson: heroImageSamson,
  };

  const sections = [
    { key: "overview", label: "Overview" },
    { key: "mechanism", label: "How It Works" },
    { key: "timeline", label: "What to Expect" },
  ];

  const benefits = [
    {
      icon: BenefitIcons.systemic,
      title: "True Systemic Reach",
      desc: "TB-500 circulates through your entire body to find and repair damage — you don't need to inject at the injury site. A 43-amino acid peptide small enough to cross biological barriers.",
    },
    {
      icon: BenefitIcons.actin,
      title: "Cell Migration",
      desc: "Regulates actin — the building blocks of cell structure — to direct repair cells toward the injury site. This accelerates your body's natural reconstruction process.",
    },
    {
      icon: BenefitIcons.flexibility,
      title: "Anti-Inflammatory + Flexibility",
      desc: "Reduces inflammation while increasing the flexibility of connective tissues. Prevents the buildup of restrictive scar tissue after surgery or injury.",
    },
    {
      icon: BenefitIcons.heart,
      title: "Cardiovascular & Neural Repair",
      desc: "Research shows cardioprotective properties following heart stress and support for neural stem cell migration — extending its repair reach beyond muscles and joints.",
    },
  ];

  const handleBlendClick = (key) => {
    if (key === activeBlend && key !== "all") {
      setActiveBlend("all");
    } else {
      setActiveBlend(key);
    }
  };

  const currentImage = heroImages[activeBlend] || heroImages.all;
  const currentBlend = activeBlend !== "all" ? blendData[activeBlend] : null;

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
                { icon: BenefitIcons.actin, label: "Cell Migration", sub: "Actin Regulation" },
                { icon: BenefitIcons.vessel, label: "Blood Vessel Growth", sub: "Angiogenesis" },
                { icon: BenefitIcons.flexibility, label: "Flexibility", sub: "Anti-Scarring" },
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

            {/* Blend categories callout */}
            <div className="rounded-lg p-5 mb-8" style={{ backgroundColor: "rgba(36, 92, 58, 0.04)" }}>
              <p className="text-xs tracking-wide mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.04em" }}>
                AVAILABLE IN 3 SPECIALIZED BLENDS
              </p>
              <div className="space-y-2">
                {[
                  { label: "TB-500 — pure systemic repair, flexibility, and cell migration" },
                  { label: "Valkyr / Wolverine — gold standard injury repair (BPC-157 + TB-500)" },
                  { label: "Samson & Delilah — total vitality with collagen and growth hormone support" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#245C3A", opacity: 0.5 }} />
                    <span className="text-sm" style={{ color: "#333", fontWeight: 450 }}>{item.label}</span>
                  </div>
                ))}
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

            {/* OVERVIEW — Blend Selector */}
            {activeSection === "overview" && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(36,92,58,0.1)" }}>
                {activeBlend === "all" ? (
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "280px" }}
                  />
                ) : (
                  <div>
                    <img
                      src={currentImage.src}
                      alt={currentImage.alt}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: "200px" }}
                    />
                    <div className="flex justify-center py-5" style={{ backgroundColor: "#FAFAF8", borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                      {currentBlend && <currentBlend.illustration />}
                    </div>
                  </div>
                )}

                {/* Blend pills */}
                <div className="flex flex-wrap gap-2 px-6 pt-5 pb-3" style={{ backgroundColor: "#FAFAF8" }}>
                  {blendPills.map((f) => {
                    const isActive = activeBlend === f.key;
                    return (
                      <button
                        key={f.key}
                        onClick={() => handleBlendClick(f.key)}
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
                  {activeBlend === "all" && (
                    <>
                      <h3 className="text-lg mb-4" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                        Compare All 3 Blends
                      </h3>
                      <div className="grid grid-cols-4 gap-2 py-2 px-3 rounded-t-md" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}></span>
                        <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>TB-500</span>
                        <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>Valkyr</span>
                        <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>Samson</span>
                      </div>
                      {comparisonRows.map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-4 gap-2 py-2.5 px-3"
                          style={{ borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                        >
                          <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.label}</span>
                          <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.tb500}</span>
                          <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.valkyr}</span>
                          <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.samson}</span>
                        </div>
                      ))}
                    </>
                  )}

                  {/* SINGLE BLEND — detail view */}
                  {currentBlend && (
                    <>
                      <h3 className="text-lg mb-1" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                        {currentBlend.name}
                      </h3>
                      <p className="text-sm mb-2" style={{ color: "#666" }}>
                        {currentBlend.tagline}
                      </p>
                      <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>
                        {currentBlend.category}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4 mt-2">
                        {currentBlend.compounds.map((c, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor: "rgba(36,92,58,0.08)",
                              color: "#245C3A",
                              fontWeight: 500,
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>

                      {currentBlend.rows.map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-3 gap-3 py-2.5"
                          style={{ borderBottom: i < currentBlend.rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
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
                  How TB-500 Repairs Your Body
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  After injection, TB-500 enters the bloodstream and circulates systemically. It doesn't need to be injected at the injury — it finds inflammation signals anywhere in your body, then activates actin regulation to direct repair.
                </p>

                <MechanismDiagram />

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.actin />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Actin Sequestration</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      TB-500 is a major actin-sequestering protein. Actin is the structural building block of your cells. By regulating it, TB-500 promotes cell migration to the injury site — effectively accelerating your body's natural reconstruction process wherever damage exists.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.vessel />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Angiogenesis</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      Stimulates the growth of entirely new blood vessels. This is critical for areas with poor blood supply — like tendons, ligaments, and cartilage — where injuries heal slowly because nutrients can't reach the damage. TB-500 builds the supply lines.
                    </p>
                  </div>

                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <BenefitIcons.scar />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Connective Tissue Flexibility</p>
                    </div>
                    <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                      Unlike traditional anti-inflammatories, TB-500 reduces inflammation while simultaneously increasing the flexibility of connective tissues. It prevents the buildup of restrictive scar tissue after surgery or injury — restoring range of motion rather than just reducing pain.
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
                  TB-500 follows a loading and maintenance protocol. It needs to saturate your body's tissues before reaching full effect. Dosing is 1–2 times per week — not daily.
                </p>

                <div className="space-y-3">
                  {[
                    { phase: "Early Saturation", time: "Weeks 1–2", note: "Peptide circulates systemically, finding inflammation signals. Early reduction in joint stiffness and discomfort. Improved range of motion in affected areas." },
                    { phase: "Tissue Rebuild", time: "Weeks 2–4", note: "New blood vessel formation begins delivering nutrients to damaged tendons, ligaments, and cartilage. Scar tissue starts softening. Flexibility increases." },
                    { phase: "Loading Complete", time: "Weeks 4–6", note: "Systemic repair measurable. Cell migration to injury sites at full capacity. Joint flexibility and connective tissue health significantly improved." },
                    { phase: "Maintenance", time: "Week 6+", note: "Transition to 1× per week at a lower dose. Sustained repair and flexibility. Effects compound with continued use." },
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

                {/* Loading protocol table */}
                <div className="rounded-lg p-4 mt-6" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                  <p className="text-xs mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>
                    LOADING & MAINTENANCE PROTOCOL
                  </p>
                  <div className="grid grid-cols-4 gap-2 py-2 px-2 rounded-t-md" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                    <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}>Phase</span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Duration</span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Frequency</span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Weekly Dose</span>
                  </div>
                  {[
                    { phase: "Loading", duration: "4–6 weeks", freq: "2× per week", dose: "4–10mg" },
                    { phase: "Maintenance", duration: "Ongoing", freq: "1× per week", dose: "2–5mg" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 gap-2 py-2 px-2"
                      style={{ borderBottom: i === 0 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                    >
                      <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.phase}</span>
                      <span className="text-xs text-center" style={{ color: "#666" }}>{row.duration}</span>
                      <span className="text-xs text-center" style={{ color: "#666" }}>{row.freq}</span>
                      <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.dose}</span>
                    </div>
                  ))}
                </div>

                {/* BMI callout */}
                <div className="rounded-lg p-4 mt-3" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                  <p className="text-xs" style={{ color: "#245C3A", fontWeight: 600, marginBottom: "4px" }}>BMI & Dosing</p>
                  <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>
                    Because TB-500 travels through your entire blood volume, total body mass determines how much peptide is needed to reach saturation. Standard BMI (under 25): 4–5mg per week loading. Higher BMI (over 30) or high muscle mass: 8–10mg per week loading. Higher body mass often correlates with higher systemic inflammation — more work for the peptide.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}