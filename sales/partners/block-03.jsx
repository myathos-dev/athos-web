import { useState } from "react";

const ToolIcons = {
  TrackingLink: () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6 8L8 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M7.5 4.5L9.5 2.5C10.3 1.7 11.7 1.7 12.5 2.5C13.3 3.3 13.3 4.7 12.5 5.5L10.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M4.5 7.5L2.5 9.5C1.7 10.3 1.7 11.7 2.5 12.5C3.3 13.3 4.7 13.3 5.5 12.5L7.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>),
  PromoCode: () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="4" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M5 4V11" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.4" /><circle cx="8.5" cy="7.5" r="1" fill="currentColor" opacity="0.3" /><path d="M1 6.5H5" stroke="currentColor" strokeWidth="1" opacity="0.3" /></svg>),
  Flyer: () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M4.5 4H9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" /><path d="M4.5 6.5H8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" /><path d="M4.5 9H7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" /></svg>),
  Report: () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="2" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M5 9V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M7 9V5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M9 9V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>),
  Contact: () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" /><path d="M3 12C3 9.8 4.8 8 7 8C9.2 8 11 9.8 11 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>),
  CoBrand: () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4.5V9.5" stroke="currentColor" strokeWidth="0.8" opacity="0.3" /></svg>),
};

const CategoryIllustrations = {
  influencers: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <circle cx="120" cy="60" r="16" stroke="#245C3A" strokeWidth="2" />
      <circle cx="120" cy="56" r="5" stroke="#245C3A" strokeWidth="1.5" opacity="0.6" />
      <path d="M113 66C113 63 116 61 120 61C124 61 127 63 127 66" stroke="#245C3A" strokeWidth="1.5" opacity="0.6" />
      <circle cx="60" cy="35" r="8" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="180" cy="35" r="8" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="50" cy="80" r="8" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="190" cy="80" r="8" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="80" cy="105" r="8" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="160" cy="105" r="8" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="120" cy="115" r="8" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <path d="M108 50L66 39" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M132 50L174 39" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M106 65L56 76" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M134 65L184 76" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M112 74L86 100" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M128 74L154 100" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M120 76L120 107" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <circle cx="60" cy="35" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="180" cy="35" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="50" cy="80" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="190" cy="80" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="80" cy="105" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="160" cy="105" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="120" cy="115" r="3" fill="#245C3A" opacity="0.15" />
    </svg>
  ),
  gymOwners: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <rect x="95" y="20" width="50" height="40" rx="4" stroke="#245C3A" strokeWidth="2" opacity="0.6" />
      <path d="M105 35H135" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M105 42H125" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <rect x="110" y="24" width="20" height="3" rx="1" fill="#245C3A" opacity="0.15" />
      <path d="M108 60L70 85" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
      <path d="M120 60L120 90" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
      <path d="M132 60L170 85" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
      <path d="M100 60L50 95" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
      <path d="M140 60L190 95" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
      <circle cx="70" cy="90" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="120" cy="95" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="170" cy="90" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="50" cy="100" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="190" cy="100" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="70" cy="90" r="4" fill="#245C3A" opacity="0.12" />
      <circle cx="120" cy="95" r="4" fill="#245C3A" opacity="0.12" />
      <circle cx="170" cy="90" r="4" fill="#245C3A" opacity="0.12" />
      <circle cx="50" cy="100" r="4" fill="#245C3A" opacity="0.12" />
      <circle cx="190" cy="100" r="4" fill="#245C3A" opacity="0.12" />
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Members become patients</text>
    </svg>
  ),
  chiropractors: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <rect x="96" y="15" width="48" height="48" rx="6" stroke="#245C3A" strokeWidth="2" opacity="0.5" />
      <path d="M120 28L120 52" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M109 40L131 40" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M96 75L60 90" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M110 70L80 95" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M120 68L120 100" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M130 70L160 95" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M144 75L180 90" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <circle cx="60" cy="95" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="80" cy="100" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="120" cy="105" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="160" cy="100" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="180" cy="95" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="60" cy="95" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="80" cy="100" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="120" cy="105" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="160" cy="100" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="180" cy="95" r="3.5" fill="#245C3A" opacity="0.12" />
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Clinical trust drives conversion</text>
    </svg>
  ),
  personalTrainers: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <circle cx="120" cy="40" r="14" stroke="#245C3A" strokeWidth="2" />
      <circle cx="120" cy="36" r="4.5" stroke="#245C3A" strokeWidth="1.5" opacity="0.6" />
      <path d="M113 47C113 44.5 116 43 120 43C124 43 127 44.5 127 47" stroke="#245C3A" strokeWidth="1.5" opacity="0.6" />
      <path d="M120 54L120 72" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M120 72L90 95" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M120 72L150 95" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M120 72L120 100" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M120 72L60 100" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M120 72L180 100" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <circle cx="90" cy="100" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="150" cy="100" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="120" cy="105" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="60" cy="105" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="180" cy="105" r="9" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="90" cy="100" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="150" cy="100" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="120" cy="105" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="60" cy="105" r="3.5" fill="#245C3A" opacity="0.12" />
      <circle cx="180" cy="105" r="3.5" fill="#245C3A" opacity="0.12" />
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">1:1 trust converts at the highest rate</text>
    </svg>
  ),
  medSpas: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <rect x="90" y="18" width="60" height="36" rx="4" stroke="#245C3A" strokeWidth="2" opacity="0.5" />
      <circle cx="110" cy="30" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="120" cy="30" r="3" fill="#245C3A" opacity="0.15" />
      <circle cx="130" cy="30" r="3" fill="#245C3A" opacity="0.15" />
      <path d="M100 42H140" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M120 54L120 70" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M120 70L80 90" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M120 70L160 90" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <path d="M120 70L120 95" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
      <circle cx="80" cy="95" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="120" cy="100" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="160" cy="95" r="10" stroke="#245C3A" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="80" cy="95" r="4" fill="#245C3A" opacity="0.12" />
      <circle cx="120" cy="100" r="4" fill="#245C3A" opacity="0.12" />
      <circle cx="160" cy="95" r="4" fill="#245C3A" opacity="0.12" />
      <path d="M75 105C72 108 72 112 80 112C88 112 88 108 85 105" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <path d="M155 105C152 108 152 112 160 112C168 112 168 108 165 105" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Existing wellness clients convert fast</text>
    </svg>
  ),
};

const allTools = ["TrackingLink", "PromoCode", "Flyer", "Report", "Contact", "CoBrand"];

const toolLabels = {
  TrackingLink: "Tracking Link",
  PromoCode: "Promo Code",
  Flyer: "Digital Flyer",
  Report: "Earnings Report",
  Contact: "Dedicated Contact",
  CoBrand: "Co-branded Assets",
};

const categoryData = {
  influencers: {
    name: "Influencers",
    tag: "Social",
    oneLiner: "Large audiences, high impressions, recurring passive income.",
    tools: ["TrackingLink", "PromoCode", "Flyer", "Report", "Contact", "CoBrand"],
    whyTheyConvert: "Your audience already trusts your recommendations on supplements, fitness, and wellness. A single Story or Reel drives sign-ups from followers who are actively looking for clinical-grade solutions. You do not sell — you share a link. The 10% lifetime discount makes it a genuine offer, and the recurring model means one post keeps paying every month.",
    scenarios: [
      { tier: "Micro (5K-25K)", audience: "50 active patients", monthlyPayout: "$1,500/mo at 20%", note: "A single viral post can drive this in 30 days" },
      { tier: "Mid (25K-100K)", audience: "200 active patients", monthlyPayout: "$6,000/mo at 20%", note: "Consistent Story mentions, 2-3x/week" },
      { tier: "Macro (100K-500K)", audience: "500 active patients", monthlyPayout: "$15,000/mo at 20%", note: "Dedicated content + bio link placement" },
      { tier: "Top Tier (500K+)", audience: "2,000 active patients", monthlyPayout: "$60,000/mo at 20%", note: "Multi-platform integration, co-branded campaigns" },
    ],
  },
  gymOwners: {
    name: "Gym Owners",
    tag: "Facility",
    oneLiner: "Built-in community, recurring foot traffic, high-trust environment.",
    tools: ["TrackingLink", "PromoCode", "Flyer", "Report", "Contact", "CoBrand"],
    whyTheyConvert: "Your members already invest in their health monthly. They ask about peptides, weight loss, and recovery in your facility every week. A flyer at the front desk and a QR code in the locker room turn existing conversations into revenue. No selling required — you are answering a question they already have.",
    scenarios: [
      { tier: "Boutique (50-150 members)", audience: "15 active patients", monthlyPayout: "$675/mo at 30%", note: "Flyer at front desk + coach mentions" },
      { tier: "Mid-size (150-500 members)", audience: "50 active patients", monthlyPayout: "$2,250/mo at 30%", note: "QR code in locker room + email blast" },
      { tier: "Large (500-1,500 members)", audience: "150 active patients", monthlyPayout: "$6,750/mo at 30%", note: "Integrated into onboarding + signage" },
      { tier: "Multi-location", audience: "500 active patients", monthlyPayout: "$22,500/mo at 30%", note: "Systemized across all locations" },
    ],
  },
  chiropractors: {
    name: "Chiropractors",
    tag: "Clinical",
    oneLiner: "Clinical authority, existing patient relationships, pain-driven demand.",
    tools: ["TrackingLink", "PromoCode", "Flyer", "Report", "Contact"],
    whyTheyConvert: "Your patients come to you for pain, recovery, and mobility. They trust your clinical judgment. When you mention that BPC-157 or peptide therapy can complement their adjustments, they listen. You are not referring cold traffic — you are referring patients who already trust a provider and are already in a treatment mindset.",
    scenarios: [
      { tier: "Solo practice", audience: "30 active patients", monthlyPayout: "$1,350/mo at 30%", note: "Mention during adjustments + waiting room flyer" },
      { tier: "Group practice (2-5 DCs)", audience: "100 active patients", monthlyPayout: "$4,500/mo at 30%", note: "All providers referring, shared promo code" },
      { tier: "High-volume clinic", audience: "250 active patients", monthlyPayout: "$11,250/mo at 30%", note: "Integrated into intake recommendations" },
    ],
  },
  personalTrainers: {
    name: "Personal Trainers",
    tag: "1:1",
    oneLiner: "Deepest client trust, goal-aligned conversations, highest conversion rate.",
    tools: ["TrackingLink", "PromoCode", "Flyer", "Report", "Contact"],
    whyTheyConvert: "You know your clients goals, injuries, and frustrations better than anyone. When a client hits a plateau or asks about recovery, you have the context to make a relevant recommendation. 1:1 trust produces the highest conversion rate of any partner type. A trainer with 20 clients can realistically convert 10+ in 60 days.",
    scenarios: [
      { tier: "Independent (10-20 clients)", audience: "10 active patients", monthlyPayout: "$300/mo at 20%", note: "Natural conversation during sessions" },
      { tier: "Busy independent (20-40 clients)", audience: "25 active patients", monthlyPayout: "$750/mo at 20%", note: "Promo code in client welcome packet" },
      { tier: "Team/studio (5+ trainers)", audience: "100 active patients", monthlyPayout: "$3,000/mo at 20%", note: "All trainers sharing one partner code" },
    ],
  },
  medSpas: {
    name: "Med Spas",
    tag: "Wellness",
    oneLiner: "Wellness-first clientele, existing spend, seamless upsell.",
    tools: ["TrackingLink", "PromoCode", "Flyer", "Report", "Contact", "CoBrand"],
    whyTheyConvert: "Your clients already pay for aesthetic and wellness treatments monthly. They understand the value of medical-grade interventions. Peptide therapy, weight loss, and hormone optimization are natural extensions of what they already buy from you. A mention during a facial or IV drip converts at a high rate because the trust and spending pattern are already established.",
    scenarios: [
      { tier: "Single location", audience: "40 active patients", monthlyPayout: "$1,800/mo at 30%", note: "Mentioned during treatments + checkout flyer" },
      { tier: "High-volume location", audience: "150 active patients", monthlyPayout: "$6,750/mo at 30%", note: "Integrated into service menu + email campaigns" },
      { tier: "Multi-location", audience: "500 active patients", monthlyPayout: "$22,500/mo at 30%", note: "Systemized across all locations + co-branded content" },
    ],
  },
};

const categoryKeys = ["influencers", "gymOwners", "chiropractors", "personalTrainers", "medSpas"];

export default function Block() {
  const [selected, setSelected] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const eyebrow = "ONE PROGRAM  |  5 PARTNER TYPES";
  const headline = "Built for the people your audience trusts.";
  const ctaText = "Become a partner";
  const ctaLink = { destination: "/sign-up", openIn: "SELF" };
  const heroImage = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Therapeutic peptide formulations" };

  const handleSelect = (key) => { setSelected(key); setShowInfo(true); };
  const active = selected ? categoryData[selected] : null;
  const ActiveIllustration = selected ? CategoryIllustrations[selected] : null;

  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-sm tracking-wide mb-4" style={{ color: "#16625F", fontWeight: 500, letterSpacing: "0.05em" }}>{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight whitespace-pre-line" style={{ color: "#1a4d2e" }}>{headline}</h1>

            <div className="rounded-lg p-5 mb-8" style={{ backgroundColor: "rgba(36,92,58,0.04)" }}>
              <p className="text-xs tracking-wide mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.04em" }}>PARTNER TOOLS PROVIDED</p>
              <div className="flex flex-wrap gap-3">
                {allTools.map((t) => { const Icon = ToolIcons[t]; return (
                  <div key={t} className="flex items-center gap-1.5" style={{ color: "#245C3A" }}><Icon /><span className="text-sm" style={{ color: "#333", fontWeight: 450 }}>{toolLabels[t]}</span></div>
                ); })}
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {categoryKeys.map((key) => { const cat = categoryData[key]; const isSelected = selected === key; return (
                <div key={key} onClick={() => handleSelect(key)} className="rounded-lg p-4 cursor-pointer transition-all duration-200"
                  style={{ backgroundColor: isSelected ? "rgba(36,92,58,0.05)" : "rgba(0,0,0,0.02)", borderLeft: "3px solid", borderLeftColor: isSelected ? "#245C3A" : "transparent", borderRight: isSelected ? "none" : "1px solid rgba(0,0,0,0.06)", borderTop: isSelected ? "none" : "1px solid rgba(0,0,0,0.06)", borderBottom: isSelected ? "none" : "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: isSelected ? "#245C3A" : "#ccc" }}>
                        {isSelected && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#245C3A" }} />}
                      </div>
                      <span className="text-base" style={{ color: "#1a4d2e", fontWeight: 600 }}>{cat.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.1)", color: "#245C3A", fontWeight: 500 }}>{cat.tag}</span>
                    </div>
                    <div className="text-xs flex items-center gap-1" style={{ color: "#245C3A", fontWeight: 500 }}>
                      {cat.scenarios.length} tier{cat.scenarios.length !== 1 ? "s" : ""}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: "#666", marginLeft: "26px", lineHeight: "1.5" }}>{cat.oneLiner}</p>
                </div>
              ); })}
            </div>
            <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined} className="inline-flex items-center justify-center text-white hover:opacity-90 shadow-sm px-10 py-6 rounded-md font-semibold" style={{ backgroundColor: "#245C3A" }}>{ctaText}</a>
          </div>

          <div className="relative min-h-[480px]">
            <div className="transition-opacity duration-300" style={{ opacity: showInfo ? 0 : 1, pointerEvents: showInfo ? "none" : "auto", position: showInfo ? "absolute" : "relative", inset: 0 }}>
              <img src={heroImage.src} alt={heroImage.alt} className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>

            <div className="transition-opacity duration-300 rounded-lg p-6" style={{ opacity: showInfo ? 1 : 0, pointerEvents: showInfo ? "auto" : "none", position: showInfo ? "relative" : "absolute", inset: 0, backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
              {active && ActiveIllustration && (<>
                <button onClick={() => setShowInfo(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity" style={{ backgroundColor: "rgba(36,92,58,0.08)", border: "none", cursor: "pointer" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </button>

                <div className="flex gap-2 mb-5 flex-wrap">
                  {allTools.map((tool) => { const isAvailable = active.tools.includes(tool); const TIcon = ToolIcons[tool]; return (
                    <div key={tool} className="text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5" style={{ backgroundColor: isAvailable ? "rgba(36,92,58,0.1)" : "rgba(0,0,0,0.04)", color: isAvailable ? "#245C3A" : "#bbb", fontWeight: 500 }}><TIcon />{toolLabels[tool]}</div>
                  ); })}
                </div>

                <div className="flex justify-center mb-5"><ActiveIllustration /></div>

                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>Why {active.name} Convert</h3>
                <p className="text-sm mb-5" style={{ color: "#4A4A4A", lineHeight: "1.7" }}>{active.whyTheyConvert}</p>

                <p className="text-xs tracking-wide mb-3" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>EARNING SCENARIOS</p>
                <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                  {active.scenarios.map((s, i) => (
                    <div key={i} className="rounded-md p-3" style={{ backgroundColor: "rgba(36,92,58,0.03)", border: "1px solid rgba(36,92,58,0.07)" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 600 }}>{s.tier}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A", fontWeight: 500, fontSize: "10px" }}>{s.monthlyPayout}</span>
                      </div>
                      <p className="text-xs mb-0.5" style={{ color: "#555", lineHeight: "1.5" }}>{s.audience} at $150 avg. net revenue</p>
                      <p className="text-xs" style={{ color: "#999", lineHeight: "1.4" }}>{s.note}</p>
                    </div>
                  ))}
                </div>
              </>)}

              {!active && (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <p className="text-sm" style={{ color: "#999" }}>Select a partner type to explore.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
