import { useState } from "react";

const BenefitIcons = {
  exercise: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 14L8 10L12 14L16 8L20 12" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8H20V11" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  glucose: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M8 12H16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 8V16" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      <path d="M9 9L15 15" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
    </svg>
  ),
  muscle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12C5 8 7 5 10 5C12 5 13 6.5 13 8" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 12C19 8 17 5 14 5C12 5 11 6.5 11 8" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 12C5 16 7 19 10 19C12 19 13 17.5 13 16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 12C19 16 17 19 14 19C12 19 11 17.5 11 16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  liver: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 10C5 6 8 4 12 4C16 4 20 6 20 10C20 14 18 18 15 19C13 19.6 11 19.6 9 19C6 18 5 14 5 10Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V12" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M12 12C10 13 8 13 6 12" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
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
  energy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L5 14H11L10 22L18 10H12L13 2Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  fat: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 2 8 8 8 13C8 17 10 20 12 21C14 20 16 17 16 13C16 8 12 2 12 2Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14C11 14.8 10 16 10.5 17.5C11 19 12 19 12 19C12 19 13 19 13.5 17.5C14 16 13 14.8 12 14Z" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  nucleus: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#245C3A" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="#245C3A" strokeWidth="1.3" opacity="0.5" />
      <circle cx="12" cy="12" r="1.5" fill="#245C3A" opacity="0.3" />
      <path d="M12 3V7" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M12 17V21" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M3 12H7" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M17 12H21" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
};

const BlendIllustrations = {
  fatLoss: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M40 8C40 8 24 28 24 46C24 58 31 68 40 72C49 68 56 58 56 46C56 28 40 8 40 8Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="40" cy="48" rx="12" ry="8" stroke="#245C3A" strokeWidth="1.4" strokeDasharray="4 3" />
      <path d="M32 48C34 44 36 46 38 44C40 46 42 44 44 46C46 44 48 46 48 48" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <circle cx="22" cy="36" r="1.5" fill="#245C3A" opacity="0.3" /><circle cx="58" cy="36" r="1.5" fill="#245C3A" opacity="0.3" />
    </svg>
  ),
  recovery: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M40 8L16 20V40C16 56 26 68 40 72C54 68 64 56 64 40V20L40 8Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 24C32 24 32 34 40 38C48 42 48 52 48 52" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M48 24C48 24 48 34 40 38C32 42 32 52 32 52" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M38 38H42" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
      <path d="M40 36V40" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  cognitive: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M40 14C28 14 20 22 20 30C16 32 13 37 13 42C13 47 16 52 20 54C20 62 28 68 40 68C52 68 60 62 60 54C64 52 67 47 67 42C67 37 64 32 60 30C60 22 52 14 40 14Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 14V68" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
      <circle cx="64" cy="28" r="2" fill="#245C3A" opacity="0.3" /><circle cx="72" cy="30" r="1.5" fill="#245C3A" opacity="0.25" />
    </svg>
  ),
  vitality: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M24 40C24 34 28 28 34 28C38 28 40 32 40 36C40 32 42 28 46 28C52 28 56 34 56 40C56 46 52 52 46 52C42 52 40 48 40 44C40 48 38 52 34 52C28 52 24 46 24 40Z" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 40H28L32 32L36 48L40 36L44 44L48 38L52 40H70" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  ),
};

const MechanismDiagram = () => (
  <div className="relative">
    <p className="text-center text-xs mb-6" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>HOW INJECTABLE MOTS-c WORKS IN YOUR BODY</p>
    <div className="flex flex-col items-center mb-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}><BenefitIcons.syringe /></div>
      <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>Subcutaneous Injection</p>
      <p className="text-xs mb-1" style={{ color: "#888" }}>100% bioavailability — no first-pass metabolism</p>
      <p className="text-xs mb-3" style={{ color: "#888" }}>Peaks in plasma within 1–2 hours</p>
      <svg width="20" height="30" viewBox="0 0 20 30" fill="none"><path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" /><path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <div className="rounded-lg px-5 py-3 mt-2 mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)" }}>
        <p className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Skeletal Muscle</p>
        <p className="text-xs text-center mt-1" style={{ color: "#888" }}>Primary target tissue</p>
      </div>
    </div>
    <div className="flex justify-center" style={{ height: "40px" }}>
      <svg width="20" height="40" viewBox="0 0 20 40" fill="none"><path d="M10 0L10 34" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" /><path d="M6 30L10 36L14 30" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
    <div className="flex justify-center mb-4 mt-2">
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <circle cx="45" cy="45" r="42" stroke="#245C3A" strokeWidth="1.8" strokeDasharray="4 3" /><circle cx="45" cy="45" r="18" stroke="#245C3A" strokeWidth="1.2" opacity="0.3" />
        <text x="45" y="42" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="700">AMPK</text>
        <text x="45" y="54" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.6">ACTIVATED</text>
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
      {[{ t: "Energy & Endurance", d: "Boosts mitochondrial output — your cells produce more usable energy" },
        { t: "Fat Browning", d: "Converts storage fat into energy-burning fat, reducing liver fat by up to 80%" },
        { t: "Muscle Protection", d: "Blocks myostatin and supports bone-building cells to preserve lean mass" }].map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>{item.t}</p>
          <p className="text-xs mt-1" style={{ color: "#888", lineHeight: "1.4" }}>{item.d}</p>
        </div>
      ))}
    </div>
  </div>
);

const blendData = {
  adonix: { name: "Adonix", category: "Fat Loss & Body Composition", illustration: BlendIllustrations.fatLoss, compounds: ["MOTS-c", "Tesamorelin", "AOD-9604", "Ipamorelin"], tagline: "Aggressive fat loss with lean muscle protection", synergy: "MOTS-c handles cellular fat burning at the mitochondrial level while Tesamorelin and Ipamorelin trigger natural growth hormone release to mobilize stubborn fat. AOD-9604 targets fat cell destruction without affecting blood sugar.", rows: [
    { label: "Delivery", value: "Single subcutaneous injection, ~every 5 days — 100% bioavailability" },
    { label: "Primary goal", value: "Maximum fat reduction while preserving lean mass" },
    { label: "MOTS-c role", value: "Cellular fat burning via AMPK and mitochondrial activation" },
    { label: "GH compounds", value: "Tesamorelin + Ipamorelin trigger natural growth hormone to mobilize stubborn fat deposits" },
    { label: "AOD-9604", value: "Isolates the fat-burning fragment of growth hormone — targets fat destruction without blood sugar impact" },
    { label: "Best for", value: "Stubborn fat, body recomposition, metabolic reset" },
  ]},
  inferno: { name: "Inferno", category: "Intensive Fat Loss", illustration: BlendIllustrations.fatLoss, compounds: ["MOTS-c", "CJC-1295", "AOD-9604", "Ipamorelin"], tagline: "Maximum metabolic burn with sustained growth hormone support", synergy: "MOTS-c activates AMPK to increase resting energy expenditure while CJC-1295 provides sustained growth hormone release. AOD-9604 adds targeted fat-destruction without metabolic side effects.", rows: [
    { label: "Delivery", value: "Single subcutaneous injection, ~every 5 days — 100% bioavailability" },
    { label: "Primary goal", value: "Aggressive calorie expenditure and fat mobilization" },
    { label: "MOTS-c role", value: "Activates AMPK to increase resting energy expenditure and fat browning" },
    { label: "GH compounds", value: "CJC-1295 + Ipamorelin provide sustained growth hormone release for prolonged fat mobilization" },
    { label: "AOD-9604", value: "Isolates fat-burning effect of growth hormone without blood sugar impact" },
    { label: "Best for", value: "Plateaus, intensive fat loss phases, high metabolic demand" },
  ]},
  kali: { name: "Kali", category: "Fat Loss & Recovery", illustration: BlendIllustrations.recovery, compounds: ["MOTS-c", "BPC-157", "5-Amino-1MQ", "Ipamorelin"], tagline: "Fat loss plus systemic repair and NAD+ restoration", synergy: "MOTS-c drives mitochondrial fat burning while BPC-157 provides systemic anti-inflammatory repair. 5-Amino-1MQ blocks the NNMT enzyme to boost intracellular NAD+ — attacking metabolic sluggishness from two cellular angles.", rows: [
    { label: "Delivery", value: "Single subcutaneous injection, ~every 5 days — 100% bioavailability" },
    { label: "Primary goal", value: "Fat metabolism with anti-inflammatory recovery support" },
    { label: "MOTS-c role", value: "Mitochondrial fat burning and metabolic flexibility" },
    { label: "BPC-157", value: "Systemic anti-inflammatory — accelerates repair of gut lining, tendons, and ligaments" },
    { label: "5-Amino-1MQ", value: "Blocks NNMT enzyme to boost intracellular NAD+ — attacks metabolic sluggishness from a second angle" },
    { label: "Best for", value: "Fat loss with recovery needs, chronic inflammation, metabolic sluggishness" },
  ]},
  empress: { name: "Empress", category: "Hormonal & Vitality", illustration: BlendIllustrations.vitality, compounds: ["MOTS-c", "BPC-157", "GHK-Cu", "Kisspeptin-10"], tagline: "Longevity, hormonal balance, and structural repair", synergy: "MOTS-c provides the physical energy foundation while BPC-157 and GHK-Cu handle systemic repair. Kisspeptin-10 targets the HPG axis to support testosterone and estrogen balance.", rows: [
    { label: "Delivery", value: "Single subcutaneous injection, ~every 5 days — 100% bioavailability" },
    { label: "Primary goal", value: "Comprehensive anti-aging — energy, hormones, skin, and tissue repair" },
    { label: "MOTS-c role", value: "Physical energy foundation and mitochondrial health" },
    { label: "BPC-157 + GHK-Cu", value: "Systemic repair — gut, tendons, collagen synthesis, and skin health" },
    { label: "Kisspeptin-10", value: "Targets the HPG axis — supports testosterone and estrogen balance for vitality" },
    { label: "Best for", value: "Longevity, hormonal support, skin and tissue rejuvenation" },
  ]},
  lucid: { name: "Lucid", category: "Cognitive Focus", illustration: BlendIllustrations.cognitive, compounds: ["MOTS-c", "Semax", "Selank"], tagline: "Physical and mental clarity in a single injection", synergy: "MOTS-c provides the cellular energy (ATP) for high-level neural processing while Semax targets BDNF for learning and memory. Selank regulates anxiety without sedation.", rows: [
    { label: "Delivery", value: "Single subcutaneous injection, ~every 5 days — 100% bioavailability" },
    { label: "Primary goal", value: "Cognitive performance — focus, processing speed, mental clarity" },
    { label: "MOTS-c role", value: "Provides the cellular energy (ATP) that neurons need to perform at high capacity" },
    { label: "Semax", value: "Targets BDNF to support learning, memory, and cognitive processing speed" },
    { label: "Selank", value: "Regulates anxiety and stress response without sedation — sharpens focus under pressure" },
    { label: "Best for", value: "Brain fog, demanding cognitive work, clarity under stress" },
  ]},
};

const blendPills = [
  { key: "all", label: "All Blends" }, { key: "adonix", label: "Adonix" }, { key: "inferno", label: "Inferno" },
  { key: "kali", label: "Kali" }, { key: "empress", label: "Empress" }, { key: "lucid", label: "Lucid" },
];

const comparisonRows = [
  { label: "Delivery", pure: "Single compound injection", blend: "Multiple compounds, single injection" },
  { label: "Bioavailability", pure: "100% (injectable)", blend: "100% for every compound in the stack" },
  { label: "Mechanism", pure: "AMPK + mitochondrial health", blend: "AMPK + GH secretagogues + systemic repair" },
  { label: "Muscle sparing", pure: "Moderate (myostatin block)", blend: "High (myostatin + GH-mediated preservation)" },
  { label: "Fat targeting", pure: "Mitochondrial level only", blend: "Mitochondrial + stubborn fat via GH + AOD-9604" },
  { label: "Recovery", pure: "Stamina-focused", blend: "+ anti-inflammatory, gut/tendon (BPC-157, GHK-Cu)" },
];

export default function Block() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeBlend, setActiveBlend] = useState("all");

  const eyebrow = "INJECTABLE  |  PEPTIDE BLEND";
  const headline = "Your Cells' Built-In\nWorkout Signal.";
  const description = "MOTS-c is a mitochondrial peptide that mimics what happens to your metabolism during exercise — increasing energy output, burning stored fat, and protecting lean muscle. Your natural levels rise 11.9× during a workout. Our injectable blends deliver that same signal at 100% bioavailability, amplified with targeted compounds for your specific goal. One subcutaneous injection, approximately every 5 days.";
  const ctaText = "Get Started for $0";
  const ctaLink = { destination: "/sign-up", openIn: "SELF" };

  const heroImageAll = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "MOTS-c injectable peptide blends collection" };
  const heroImageAdonix = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Adonix injectable blend" };
  const heroImageInferno = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Inferno injectable blend" };
  const heroImageKali = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Kali injectable blend" };
  const heroImageEmpress = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Empress injectable blend" };
  const heroImageLucid = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Lucid injectable blend" };

  const heroImages = { all: heroImageAll, adonix: heroImageAdonix, inferno: heroImageInferno, kali: heroImageKali, empress: heroImageEmpress, lucid: heroImageLucid };
  const sections = [{ key: "overview", label: "Overview" }, { key: "mechanism", label: "How It Works" }, { key: "timeline", label: "What to Expect" }];

  const benefits = [
    { icon: BenefitIcons.exercise, title: "Exercise Mimetic", desc: "MOTS-c levels increase up to 11.9× in skeletal muscle during exercise. Injectable supplementation activates the same pathway — AMPK — with 100% bioavailability, bypassing digestive degradation." },
    { icon: BenefitIcons.glucose, title: "Metabolic Flexibility", desc: "Currently in Phase 2a trials for adults with prediabetes (BMI 27–40). Targets skeletal muscle to improve how your body processes sugar and shifts between fuel sources." },
    { icon: BenefitIcons.muscle, title: "Muscle & Bone Support", desc: "Blocks myostatin — a protein that limits muscle growth. In blends, GH secretagogues amplify lean muscle preservation beyond what MOTS-c achieves alone." },
    { icon: BenefitIcons.liver, title: "80% Liver Fat Reduction", desc: "Preclinical data showed an 80% reduction in liver fat by converting white storage fat into energy-burning brown fat. Injectable delivery ensures the full dose reaches target tissue." },
  ];

  const handleBlendClick = (key) => { setActiveBlend(key === activeBlend && key !== "all" ? "all" : key); };
  const currentImage = heroImages[activeBlend] || heroImages.all;
  const currentBlend = activeBlend !== "all" ? blendData[activeBlend] : null;

  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-sm tracking-wide mb-4" style={{ color: "#16625F", fontWeight: 500, letterSpacing: "0.05em" }}>{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl mb-5 leading-tight whitespace-pre-line" style={{ color: "#1a4d2e" }}>{headline}</h1>
            <p className="text-base mb-8" style={{ color: "#4A4A4A", lineHeight: "1.7", maxWidth: "520px" }}>{description}</p>

            <div className="grid grid-cols-3 gap-2 mb-8">
              {[{ icon: BenefitIcons.syringe, label: "100% Bioavailable", sub: "Injectable Delivery" },
                { icon: BenefitIcons.energy, label: "AMPK Activation", sub: "Exercise Mimetic" },
                { icon: BenefitIcons.muscle, label: "Multi-Pathway", sub: "Synergistic Stack" }].map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="rounded-lg p-3 flex flex-col items-center text-center" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="w-9 h-9 rounded-md flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.08)" }}><Icon /></div>
                    <p className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>{p.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#999" }}>{p.sub}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((b, i) => { const Icon = b.icon; return (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}><Icon /></div>
                  <div>
                    <p className="text-sm" style={{ color: "#1a4d2e", fontWeight: 600, marginBottom: "2px" }}>{b.title}</p>
                    <p className="text-sm" style={{ color: "#666", lineHeight: "1.5" }}>{b.desc}</p>
                  </div>
                </div>
              ); })}
            </div>

            <div className="rounded-lg p-5 mb-8" style={{ backgroundColor: "rgba(36,92,58,0.04)" }}>
              <p className="text-xs tracking-wide mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.04em" }}>5 INJECTABLE BLENDS — ONE SHOT EACH</p>
              <div className="space-y-2">
                {["Adonix — fat loss and body recomposition via GH secretagogues + AOD-9604",
                  "Inferno — intensive metabolic burn with sustained GH release via CJC-1295",
                  "Kali — fat loss with systemic repair (BPC-157) and NAD+ boost (5-Amino-1MQ)",
                  "Empress — hormonal balance via Kisspeptin-10, collagen via GHK-Cu",
                  "Lucid — cognitive clarity via Semax + Selank neuropeptides"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: "#245C3A", opacity: 0.5 }} />
                    <span className="text-sm" style={{ color: "#333", fontWeight: 450 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3" style={{ color: "#888" }}>All blends are injectable-only formulations for maximum bioavailability. Oral and nasal delivery coming soon.</p>
            </div>
            <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined} className="inline-flex items-center justify-center text-white hover:opacity-90 shadow-sm px-10 py-6 rounded-md font-semibold" style={{ backgroundColor: "#245C3A" }}>{ctaText}</a>
          </div>

          <div>
            <div className="flex gap-2 mb-6">
              {sections.map((s) => (
                <button key={s.key} onClick={() => setActiveSection(s.key)} className="text-xs px-4 py-2 rounded-full transition-all duration-200"
                  style={{ backgroundColor: activeSection === s.key ? "#245C3A" : "rgba(36,92,58,0.08)", color: activeSection === s.key ? "#fff" : "#245C3A", fontWeight: 500, border: "none", cursor: "pointer" }}>{s.label}</button>
              ))}
            </div>

            {activeSection === "overview" && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(36,92,58,0.1)" }}>
                {activeBlend === "all" ? (
                  <img src={currentImage.src} alt={currentImage.alt} className="w-full h-auto object-cover" style={{ maxHeight: "280px" }} />
                ) : (
                  <div>
                    <img src={currentImage.src} alt={currentImage.alt} className="w-full h-auto object-cover" style={{ maxHeight: "200px" }} />
                    <div className="flex justify-center py-5" style={{ backgroundColor: "#FAFAF8", borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                      {currentBlend && <currentBlend.illustration />}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 px-6 pt-5 pb-3" style={{ backgroundColor: "#FAFAF8" }}>
                  {blendPills.map((f) => { const isActive = activeBlend === f.key; return (
                    <button key={f.key} onClick={() => handleBlendClick(f.key)} className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5"
                      style={{ backgroundColor: isActive ? "#245C3A" : "rgba(36,92,58,0.08)", color: isActive ? "#fff" : "#245C3A", fontWeight: 500, border: "none", cursor: "pointer" }}>
                      {f.label}
                      {isActive && f.key !== "all" && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: "2px" }}><path d="M3 3L9 9M9 3L3 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>}
                    </button>
                  ); })}
                </div>
                <div className="px-6 pb-6" style={{ backgroundColor: "#FAFAF8" }}>
                  {activeBlend === "all" && (<>
                    <h3 className="text-lg mb-1" style={{ color: "#1a4d2e", fontWeight: 600 }}>Pure MOTS-c vs. Injectable Blend</h3>
                    <p className="text-sm mb-4" style={{ color: "#666" }}>Why a multi-compound injection outperforms a single peptide.</p>
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-t-md" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                      <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}></span>
                      <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 500, opacity: 0.6 }}>Pure MOTS-c</span>
                      <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 700 }}>Injectable Blend</span>
                    </div>
                    {comparisonRows.map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-2 py-2.5 px-3" style={{ borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                        <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.label}</span>
                        <span className="text-xs text-center" style={{ color: "#999" }}>{row.pure}</span>
                        <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>{row.blend}</span>
                      </div>
                    ))}
                  </>)}
                  {currentBlend && (<>
                    <h3 className="text-lg mb-1" style={{ color: "#1a4d2e", fontWeight: 600 }}>{currentBlend.name}</h3>
                    <p className="text-sm mb-2" style={{ color: "#666" }}>{currentBlend.tagline}</p>
                    <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>{currentBlend.category}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3 mt-2">
                      {currentBlend.compounds.map((c, i) => <span key={i} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A", fontWeight: 500 }}>{c}</span>)}
                    </div>
                    <div className="rounded-md p-3 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                      <p className="text-xs mb-1" style={{ color: "#245C3A", fontWeight: 600 }}>Why these compounds together</p>
                      <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>{currentBlend.synergy}</p>
                    </div>
                    {currentBlend.rows.map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-3 py-2.5" style={{ borderBottom: i < currentBlend.rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                        <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.label}</span>
                        <span className="text-xs col-span-2" style={{ color: "#666", lineHeight: "1.5" }}>{row.value}</span>
                      </div>
                    ))}
                  </>)}
                </div>
              </div>
            )}

            {activeSection === "mechanism" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>From Injection to Metabolic Shift</h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>After subcutaneous injection, each compound enters your bloodstream at 100% bioavailability — no digestive degradation, no first-pass liver metabolism. MOTS-c targets skeletal muscle within 1–2 hours, activating AMPK while companion compounds act on their respective pathways simultaneously.</p>
                <MechanismDiagram />
                <div className="mt-6 space-y-3">
                  {[{ icon: BenefitIcons.energy, title: "AMPK — The Metabolic Master Switch", text: "AMPK is the same switch your body flips during exercise. When activated, it tells your cells to produce more energy, burn stored fat, and improve how they process sugar. In blends, GH secretagogues add a second fat-mobilization pathway on top of AMPK." },
                    { icon: BenefitIcons.fat, title: "Fat Browning + Targeted Destruction", text: "MOTS-c promotes conversion of white storage fat into energy-burning brown fat — reducing liver fat by 80% in preclinical studies. In Adonix and Inferno, AOD-9604 adds direct fat cell destruction without affecting blood sugar." },
                    { icon: BenefitIcons.nucleus, title: "Nuclear Translocation", text: "Under metabolic stress, MOTS-c moves from mitochondria into the cell nucleus, directly activating adaptive genes. In people with metabolic syndrome, this process is often impaired. Injectable supplementation restores it at therapeutic concentrations." },
                    { icon: BenefitIcons.syringe, title: "Why Injectable Delivery", text: "Peptides are fragile — oral delivery exposes them to stomach acid and liver metabolism. Subcutaneous injection bypasses both, delivering 100% of each compound directly into circulation at its full therapeutic dose." },
                  ].map((card, i) => { const Icon = card.icon; return (
                    <div key={i} className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                      <div className="flex items-center gap-2 mb-2"><Icon /><p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>{card.title}</p></div>
                      <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>{card.text}</p>
                    </div>
                  ); })}
                </div>
              </div>
            )}

            {activeSection === "timeline" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>What to Expect</h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>One injection every 5 days. Effects build over time as your metabolism responds — here is the typical progression.</p>
                <div className="space-y-3">
                  {[{ phase: "First Injection", time: "Day 1", note: "All compounds reach therapeutic plasma levels within 1–2 hours. AMPK activation begins in skeletal muscle. Some people notice an energy shift within 24–48 hours." },
                    { phase: "Loading Phase", time: "Weeks 1–4", note: "Mitochondrial output increases. Endurance and recovery improve. Fat metabolism shifts toward browning. Blend-specific effects emerge — BPC-157 reduces inflammation, Semax/Selank sharpen focus." },
                    { phase: "Metabolic Shift", time: "Weeks 4–8", note: "Measurable changes in metabolic flexibility. Body composition changes — less stored fat, more preserved lean muscle. Liver markers often improve. Multi-compound synergy reaches full effect." },
                    { phase: "Sustained Effect", time: "Week 8+", note: "With consistent dosing (~every 5 days), effects compound across all pathways. Higher baseline BMI may need a longer saturation phase before peak response." },
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
                <div className="rounded-lg p-4 mt-6" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                  <p className="text-xs" style={{ color: "#245C3A", fontWeight: 600, marginBottom: "4px" }}>BMI & Response Rate</p>
                  <p className="text-xs" style={{ color: "#666", lineHeight: "1.6" }}>MOTS-c levels are inversely correlated with BMI — the higher your body fat, the lower your natural levels. Higher starting BMI may mean a slower initial response and benefit from a longer loading phase. Injectable delivery ensures consistent dosing regardless of digestive variability.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}