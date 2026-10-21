import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useState } from "react";
import { useTextSetting, useLongTextSetting, useImageSetting, useNavigationSetting } from "@/lib/editable-settings";

// ── BENEFIT ICONS ─────────────────────────────────────────────────────────────

const BenefitIcons = {
  noNeedle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 3L17 5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 7L15 12" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.5 4.5L16.5 7.5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 8L13.5 13L12 14.5C11 15.5 9.5 15.5 8.5 14.5L7 13C6 12 6 10.5 7 9.5L8.5 8Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18L6.8 16.2" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 3L21 21" stroke="#245C3A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  storage: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="5" width="14" height="14" rx="2.5" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M5 10H19" stroke="#245C3A" strokeWidth="1.6" />
      <circle cx="12" cy="16" r="1.5" stroke="#245C3A" strokeWidth="1.4" />
    </svg>
  ),
  heart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 21S4 16 4 10C4 7.24 6.24 5 9 5C10.4 5 11.78 5.65 12 6.87C12.22 5.65 13.6 5 15 5C17.76 5 20 7.24 20 10C20 16 12 21 12 21Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scale: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3V21" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 8L12 5L19 8" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21H16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  tablet: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="7" width="12" height="10" rx="5" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M6 12H18" stroke="#245C3A" strokeWidth="1.6" />
    </svg>
  ),
  troche: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="10" r="6" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M10 16V19" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M12 16V20" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M14 16V19" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  liquid: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 2H15V7L18 12C18.8 13.5 18 16.5 15 17H9C6 16.5 5.2 13.5 6 12L9 7V2Z" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13.5C7.5 12.5 9.5 12.8 11 13.5C12.5 14.2 14 13.8 15.5 13" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M9 2H15" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  stomach: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 5C5 5 4 8 4 10C4 14 6 16 8 18C9 19 10 20 12 20C14 20 16 19 17 17C18 15 20 13 20 10C20 7 18 5 16 5" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 5H16" stroke="#245C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 11H16" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" strokeDasharray="2 2" />
    </svg>
  ),
  mouth: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="8" ry="6" stroke="#245C3A" strokeWidth="1.6" />
      <path d="M7 12C8 14 10 15 12 15C14 15 16 14 17 12" stroke="#245C3A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 12V15" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
};

// ── ABSORPTION DIAGRAM (HTML + SVG hybrid) ────────────────────────────────────

const AbsorptionDiagram = () => (
  <div className="relative" style={{ minHeight: "340px" }}>
    <p className="text-center text-xs mb-6" style={{ color: "#245C3A", fontWeight: 600, letterSpacing: "0.03em" }}>
      TWO ROUTES, ONE TARGET
    </p>

    <div className="grid grid-cols-3 gap-4 items-start">
      {/* LEFT: Tablet Path */}
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
          <BenefitIcons.tablet />
        </div>
        <p className="text-xs mb-3" style={{ color: "#245C3A", fontWeight: 600 }}>TABLET</p>

        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="rounded-lg p-3 mt-2 mb-3 w-full" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.1)" }}>
          <p className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}>Stomach</p>
          <p className="text-xs mt-1" style={{ color: "#666" }}>Protected from acid</p>
          <p className="text-xs" style={{ color: "#999" }}>Passes through lining</p>
        </div>

        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="rounded-md px-3 py-2 mt-2 w-full" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
          <p className="text-xs" style={{ color: "#245C3A", fontWeight: 500 }}>Bloodstream</p>
        </div>
      </div>

      {/* CENTER: GLP-1 Target */}
      <div className="flex flex-col items-center justify-center pt-16">
        <div className="w-full flex items-center justify-center mb-4" style={{ minHeight: "40px" }}>
          <div style={{ borderTop: "2px dashed rgba(36,92,58,0.2)", width: "100%" }} />
        </div>

        <div className="relative">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="42" stroke="#245C3A" strokeWidth="2" strokeDasharray="5 4" />
            <circle cx="50" cy="50" r="20" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
            <circle cx="50" cy="50" r="5" fill="#245C3A" opacity="0.2" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs" style={{ color: "#245C3A", fontWeight: 700 }}>GLP-1</p>
            <p style={{ color: "#245C3A", fontWeight: 500, fontSize: "9px", opacity: 0.6 }}>Receptor</p>
          </div>
        </div>

        <div className="mt-4 text-center space-y-1">
          <p className="text-xs" style={{ color: "#888" }}>Slows gastric emptying</p>
          <p className="text-xs" style={{ color: "#888" }}>Signals satiety to brain</p>
          <p className="text-xs" style={{ color: "#888" }}>Regulates insulin</p>
        </div>

        <div className="w-full flex items-center justify-center mt-4" style={{ minHeight: "40px" }}>
          <div style={{ borderTop: "2px dashed rgba(36,92,58,0.2)", width: "100%" }} />
        </div>
      </div>

      {/* RIGHT: Troche Path */}
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
          <BenefitIcons.troche />
        </div>
        <p className="text-xs mb-3" style={{ color: "#245C3A", fontWeight: 600 }}>TROCHE</p>

        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="rounded-lg p-3 mt-2 mb-3 w-full" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.1)" }}>
          <p className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}>Under Tongue</p>
          <p className="text-xs mt-1" style={{ color: "#666" }}>Absorbed directly</p>
          <p className="text-xs" style={{ color: "#999" }}>Skips stomach & liver</p>
        </div>

        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <path d="M10 0L10 24" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 20L10 26L14 20" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="rounded-md px-3 py-2 mt-2 w-full" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
          <p className="text-xs" style={{ color: "#245C3A", fontWeight: 500 }}>Bloodstream</p>
        </div>
      </div>
    </div>
  </div>
);

// ── WEIGHT LOSS TIMELINE (HTML + SVG hybrid) ──────────────────────────────────

const WeightLossTimeline = () => (
  <div>
    <div className="relative" style={{ height: "200px", marginLeft: "36px", marginRight: "8px" }}>
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between" style={{ transform: "translateX(-36px)", paddingTop: "4px", paddingBottom: "24px" }}>
        {["15%", "10%", "5%", "0%"].map((label) => (
          <span key={label} className="text-xs" style={{ color: "#999", fontSize: "10px" }}>{label}</span>
        ))}
      </div>

      <div className="absolute inset-0" style={{ paddingBottom: "24px" }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{ top: `${(i / 3) * 100}%`, borderTop: i === 3 ? "1.5px solid #245C3A" : "1px solid rgba(36,92,58,0.08)" }}
          />
        ))}
      </div>

      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 400 176" preserveAspectRatio="none" fill="none" style={{ marginBottom: "24px" }}>
        <path d="M0 176 Q50 160 100 140 Q150 110 200 85 Q250 62 300 45 Q350 32 400 22 L400 176 Z" fill="rgba(36,92,58,0.04)" />
        <path d="M0 176 Q50 166 100 150 Q150 128 200 108 Q250 92 300 78 Q350 68 400 58" stroke="#245C3A" strokeWidth="2.5" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d="M0 176 Q50 160 100 140 Q150 110 200 85 Q250 62 300 45 Q350 32 400 22" stroke="#245C3A" strokeWidth="2.5" strokeDasharray="8 4" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <circle cx="400" cy="58" r="4" fill="#245C3A" opacity="0.4" />
        <circle cx="400" cy="22" r="4" fill="#245C3A" />
      </svg>

      <div className="absolute flex flex-col gap-1" style={{ right: "-4px", top: "6px" }}>
        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 700 }}>~15%</span>
      </div>
      <div className="absolute flex flex-col gap-1" style={{ right: "-4px", top: "46px" }}>
        <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600, opacity: 0.7 }}>~13%</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between" style={{ transform: "translateY(20px)" }}>
        {["Wk 0", "Wk 12", "Wk 24", "Wk 36", "Wk 48"].map((label) => (
          <span key={label} className="text-xs" style={{ color: "#999", fontSize: "10px" }}>{label}</span>
        ))}
      </div>
    </div>

    <div className="flex gap-6 mt-8 justify-center">
      <div className="flex items-center gap-2">
        <div style={{ width: "20px", height: "2.5px", backgroundColor: "#245C3A", borderRadius: "2px" }} />
        <span className="text-xs" style={{ color: "#666" }}>Oral semaglutide</span>
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

  const eyebrow = useTextSetting({
    name: "eyebrow",
    label: "Eyebrow Text",
    initialValue: "NEW  |  ORAL SEMAGLUTIDE NOW AVAILABLE",
  });

  const headline = useTextSetting({
    name: "headline",
    label: "Headline",
    initialValue: "Same Compound.\nNo Needles.",
  });

  const description = useLongTextSetting({
    name: "description",
    label: "Description",
    initialValue: "Compounded oral semaglutide — available as tablets or sublingual troches — delivers the same GLP-1 receptor activation without injections. Clinically comparable weight loss of 13–15% at 48 weeks.",
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
      alt: "Oral semaglutide tablets",
    },
  });

  const sections = [
    { key: "overview", label: "Overview" },
    { key: "absorption", label: "How It Works" },
    { key: "timeline", label: "Results Timeline" },
  ];

  const benefits = [
    { icon: BenefitIcons.noNeedle, title: "Non-Invasive", desc: "No injections required. Ideal for those who prefer oral medication." },
    { icon: BenefitIcons.storage, title: "No Refrigeration", desc: "Room-temperature storage. Easier to travel with and maintain." },
    { icon: BenefitIcons.heart, title: "Cardiovascular Protection", desc: "Associated with reduced risk of major adverse cardiovascular events." },
    { icon: BenefitIcons.scale, title: "13–15% Weight Reduction", desc: "Clinical trials show results comparable to injectable at 48 weeks." },
  ];

  const formComparison = [
    { label: "Absorption site", tablet: "Stomach lining", troche: "Oral mucosa" },
    { label: "Bioavailability", tablet: "~1%", troche: "Higher / more consistent" },
    { label: "Timing rules", tablet: "Empty stomach, 30 min wait", troche: "Hold 90s, fewer restrictions" },
    { label: "Delivery tech", tablet: "SNAC pH buffering", troche: "Mucosal diffusion" },
    { label: "First-pass metabolism", tablet: "Yes", troche: "Bypassed" },
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

            {/* Form types */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <BenefitIcons.tablet />
                  <span style={{ color: "#1a4d2e", fontWeight: 600, fontSize: "15px" }}>Tablets</span>
                </div>
                <p className="text-xs" style={{ color: "#666", lineHeight: "1.5" }}>
                  Gastric absorption via SNAC technology. Taken daily on empty stomach.
                </p>
              </div>
              <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <BenefitIcons.troche />
                  <span style={{ color: "#1a4d2e", fontWeight: 600, fontSize: "15px" }}>Troches</span>
                </div>
                <p className="text-xs" style={{ color: "#666", lineHeight: "1.5" }}>
                  Sublingual absorption. Dissolves under tongue, bypasses stomach and liver.
                </p>
              </div>
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

            {/* Also available in Liquid Form */}
            <div
              className="rounded-lg p-4 mb-8 flex items-center gap-3"
              style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.08)" }}>
                <BenefitIcons.liquid />
              </div>
              <div>
                <p className="text-sm" style={{ color: "#1a4d2e", fontWeight: 600 }}>Also available in Liquid Form</p>
                <p className="text-xs" style={{ color: "#666", lineHeight: "1.5" }}>
                  Compounded semaglutide injectable for patients who prefer the original delivery method.
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="text-white hover:opacity-90 shadow-sm px-10 py-6 rounded-md font-semibold"
              style={{ backgroundColor: "#245C3A" }}
            >
              <NavigationAction navigation={ctaLink}>{ctaText}</NavigationAction>
            </Button>
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
                    Tablet vs. Troche Comparison
                  </h3>
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-t-md" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                    <span className="text-xs" style={{ color: "#245C3A", fontWeight: 600 }}></span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Tablet</span>
                    <span className="text-xs text-center" style={{ color: "#245C3A", fontWeight: 600 }}>Troche</span>
                  </div>
                  {formComparison.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-2 py-2.5 px-3"
                      style={{ borderBottom: i < formComparison.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                    >
                      <span className="text-xs" style={{ color: "#1a4d2e", fontWeight: 500 }}>{row.label}</span>
                      <span className="text-xs text-center" style={{ color: "#666" }}>{row.tablet}</span>
                      <span className="text-xs text-center" style={{ color: "#666" }}>{row.troche}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* HOW IT WORKS — rewritten for consumers */}
            {activeSection === "absorption" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                  How Your Body Absorbs It
                </h3>
                <p className="text-sm mb-6" style={{ color: "#666", lineHeight: "1.6" }}>
                  Both forms deliver the same active compound to the same target in your body — they just take different paths to get there.
                </p>

                <AbsorptionDiagram />

                {/* Consumer-friendly explainer cards */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {/* Tablet card */}
                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <BenefitIcons.stomach />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Tablets</p>
                    </div>
                    <p className="text-xs mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                      Absorbed through your stomach
                    </p>
                    <p className="text-xs mb-3" style={{ color: "#666", lineHeight: "1.6" }}>
                      The tablet contains a special ingredient that protects the medication from stomach acid and helps it pass through the stomach lining into your bloodstream.
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex gap-2 items-start">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="7" cy="7" r="6" stroke="#245C3A" strokeWidth="1.2" />
                          <path d="M4.5 7L6 8.5L9.5 5" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs" style={{ color: "#666" }}>Take on an empty stomach</p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="7" cy="7" r="6" stroke="#245C3A" strokeWidth="1.2" />
                          <path d="M4.5 7L6 8.5L9.5 5" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs" style={{ color: "#666" }}>Wait 30 minutes before eating</p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="7" cy="7" r="6" stroke="#245C3A" strokeWidth="1.2" />
                          <path d="M4.5 7L6 8.5L9.5 5" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs" style={{ color: "#666" }}>Small sip of water only</p>
                      </div>
                    </div>
                  </div>

                  {/* Troche card */}
                  <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <BenefitIcons.mouth />
                      <p className="text-sm" style={{ color: "#245C3A", fontWeight: 600 }}>Troches</p>
                    </div>
                    <p className="text-xs mb-2" style={{ color: "#1a4d2e", fontWeight: 600 }}>
                      Absorbed under your tongue
                    </p>
                    <p className="text-xs mb-3" style={{ color: "#666", lineHeight: "1.6" }}>
                      The lozenge dissolves in your mouth and enters your bloodstream directly through the thin tissue under your tongue — skipping the stomach and liver entirely.
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex gap-2 items-start">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="7" cy="7" r="6" stroke="#245C3A" strokeWidth="1.2" />
                          <path d="M4.5 7L6 8.5L9.5 5" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs" style={{ color: "#666" }}>Hold under tongue for 90 seconds</p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="7" cy="7" r="6" stroke="#245C3A" strokeWidth="1.2" />
                          <path d="M4.5 7L6 8.5L9.5 5" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs" style={{ color: "#666" }}>No strict fasting required</p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="7" cy="7" r="6" stroke="#245C3A" strokeWidth="1.2" />
                          <path d="M4.5 7L6 8.5L9.5 5" stroke="#245C3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs" style={{ color: "#666" }}>More consistent absorption</p>
                      </div>
                    </div>
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
                  Oral semaglutide with structured diet and exercise. Data from clinical trials at high-dose oral formulations.
                </p>
                <WeightLossTimeline />
                <div className="mt-8 space-y-3">
                  {[
                    { week: "Weeks 1–4", pct: "1–2%", note: "Dose titration begins. Appetite suppression starts." },
                    { week: "Weeks 4–12", pct: "3–5%", note: "Consistent caloric reduction. Early metabolic changes." },
                    { week: "Weeks 12–24", pct: "7–10%", note: "Significant reduction. Cardiovascular markers improve." },
                    { week: "Weeks 24–48", pct: "13–15%", note: "Peak results with diet and exercise adherence." },
                  ].map((m, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-14 text-center rounded-md py-1" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
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