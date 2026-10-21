import { useTextSetting, useLongTextSetting, useImageSetting } from "@/lib/editable-settings";
import { useState, useRef, useEffect } from "react";

/* ═══════════════════════════════════════════════
   CATEGORY ILLUSTRATIONS (SVG line art)
   ═══════════════════════════════════════════════ */
const Illustrations = {
  weightloss: () => (
    <svg width="100%" height="auto" viewBox="0 0 520 200" fill="none" style={{ maxWidth: 520 }}>
      <path d="M60 100L110 65L160 100L210 65L260 100" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="100" r="5" fill="#245C3A" opacity="0.25" /><circle cx="110" cy="65" r="5" fill="#245C3A" opacity="0.25" />
      <circle cx="160" cy="100" r="5" fill="#245C3A" opacity="0.25" /><circle cx="210" cy="65" r="5" fill="#245C3A" opacity="0.25" />
      <circle cx="260" cy="100" r="5" fill="#245C3A" opacity="0.25" />
      <path d="M260 100L310 68" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M260 100L310 100" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M260 100L310 132" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="340" cy="58" r="24" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="340" y="62" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="600">GLP-1</text>
      <circle cx="340" cy="100" r="24" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="340" y="104" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="600">GIP</text>
      <circle cx="340" cy="142" r="24" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="340" y="146" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="600">GCG</text>
      <path d="M160 100L160 140L140 152" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <circle cx="140" cy="152" r="3" fill="#245C3A" opacity="0.15" />
      <text x="410" y="62" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Appetite</text>
      <text x="410" y="104" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Insulin</text>
      <text x="410" y="146" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Energy</text>
    </svg>
  ),
  fitness: () => (
    <svg width="100%" height="auto" viewBox="0 0 520 180" fill="none" style={{ maxWidth: 520 }}>
      <path d="M80 90L120 55L160 90L200 55L240 90" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="80" cy="90" r="5" fill="#245C3A" opacity="0.25" /><circle cx="120" cy="55" r="5" fill="#245C3A" opacity="0.25" />
      <circle cx="160" cy="90" r="5" fill="#245C3A" opacity="0.25" /><circle cx="200" cy="55" r="5" fill="#245C3A" opacity="0.25" />
      <circle cx="240" cy="90" r="5" fill="#245C3A" opacity="0.25" />
      <path d="M240 90L290 90" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="320" cy="90" r="26" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="320" y="86" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="700">AMPK</text>
      <text x="320" y="98" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.5">activated</text>
      <path d="M346 90L380 90" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.3" />
      <path d="M375 84L383 90L375 96" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <text x="430" y="86" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Fat oxidation</text>
      <text x="430" y="98" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">+ recomposition</text>
    </svg>
  ),
  longevity: () => (
    <svg width="100%" height="auto" viewBox="0 0 520 180" fill="none" style={{ maxWidth: 520 }}>
      <ellipse cx="200" cy="90" rx="70" ry="40" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <ellipse cx="200" cy="90" rx="35" ry="20" stroke="#245C3A" strokeWidth="1.5" opacity="0.35" />
      <circle cx="200" cy="90" r="8" fill="#245C3A" opacity="0.12" />
      <text x="200" y="94" textAnchor="middle" fill="#245C3A" fontSize="11" fontWeight="700">NAD+</text>
      <path d="M130 90L100 60" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M270 90L300 60" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M130 90L100 120" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M270 90L300 120" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="100" cy="60" r="4" fill="#245C3A" opacity="0.15" /><circle cx="300" cy="60" r="4" fill="#245C3A" opacity="0.15" />
      <circle cx="100" cy="120" r="4" fill="#245C3A" opacity="0.15" /><circle cx="300" cy="120" r="4" fill="#245C3A" opacity="0.15" />
      <text x="88" y="52" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.4">DNA repair</text>
      <text x="300" y="52" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.4">Sirtuins</text>
      <text x="82" y="132" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.4">ATP</text>
      <text x="300" y="132" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.4">Telomeres</text>
      <rect x="370" y="55" width="80" height="70" rx="8" stroke="#245C3A" strokeWidth="1.3" opacity="0.15" />
      <text x="410" y="75" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.4">6 formats</text>
      <text x="410" y="88" textAnchor="middle" fill="#245C3A" fontSize="7" opacity="0.3">Injectable</text>
      <text x="410" y="98" textAnchor="middle" fill="#245C3A" fontSize="7" opacity="0.3">Oral / Nasal</text>
      <text x="410" y="108" textAnchor="middle" fill="#245C3A" fontSize="7" opacity="0.3">Topical / Troche</text>
    </svg>
  ),
  recovery: () => (
    <svg width="100%" height="auto" viewBox="0 0 520 180" fill="none" style={{ maxWidth: 520 }}>
      <circle cx="160" cy="80" r="32" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="160" y="76" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="700">BPC</text>
      <text x="160" y="88" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">157</text>
      <circle cx="280" cy="80" r="32" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="280" y="76" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="700">TB</text>
      <text x="280" y="88" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">500</text>
      <path d="M192 80L248 80" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="220" cy="80" r="4" fill="#245C3A" opacity="0.15" />
      <path d="M220 112L220 140" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <path d="M214 134L220 142L226 134" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
      <text x="220" y="160" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="600" opacity="0.45">VALKYR</text>
      <text x="400" y="76" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.4">Growth factors</text>
      <text x="400" y="92" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.4">Cell migration</text>
      <path d="M312 80L380 80" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" opacity="0.2" />
    </svg>
  ),
  cognitive: () => (
    <svg width="100%" height="auto" viewBox="0 0 520 180" fill="none" style={{ maxWidth: 520 }}>
      <circle cx="150" cy="80" r="28" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="150" y="76" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">Semax</text>
      <text x="150" y="88" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.5">BDNF</text>
      <circle cx="260" cy="80" r="28" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="260" y="76" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="700">Selank</text>
      <text x="260" y="88" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.5">GABA</text>
      <path d="M178 80L232 80" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="205" cy="80" r="4" fill="#245C3A" opacity="0.12" />
      <path d="M205 108L205 130" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <circle cx="205" cy="148" r="16" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
      <text x="205" y="152" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.45">LUCID</text>
      <text x="370" y="72" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.4">Focus + memory</text>
      <text x="370" y="88" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.4">Anxiolytic calm</text>
      <path d="M288 80L350 80" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" opacity="0.2" />
    </svg>
  ),
};

/* ═══════════════════════════════════════════════
   CATEGORY CONTENT
   ═══════════════════════════════════════════════ */
const sections = [
  {
    id: "weightloss", num: "I", title: "Weight Loss", tag: "GLP-1 Agonists", route: "/peptides/guide/weightloss",
    intro: "GLP-1 receptor agonists mimic a natural gut hormone that regulates appetite and satiety. They slow gastric emptying, signal fullness to the brain, and improve insulin sensitivity — making it easier to sustain a caloric deficit without constant hunger.",
    body: "Three compounds are available through Athos, each targeting different receptor combinations. Semaglutide is a single GLP-1 agonist — the most established option with the widest range of delivery formats including injectable, oral, and liquid. Tirzepatide is a dual-agonist targeting both GLP-1 and GIP receptors, producing stronger clinical weight loss results through synergistic metabolic regulation. Retatrutide is a triple-agonist — the newest compound — targeting GLP-1, GIP, and Glucagon receptors simultaneously for the most aggressive metabolic coverage.",
    evidence: "Clinical data shows 15–17% average body weight reduction with semaglutide, up to 22.5% with tirzepatide, and up to 24.2% in Phase 2 retatrutide trials at 48 weeks.",
    products: ["Semaglutide", "Tirzepatide", "Retatrutide"], formats: ["Injectable", "Oral", "Liquid"],
  },
  {
    id: "fitness", num: "II", title: "Fitness & Fat Burning", tag: "MOTS-c Blends", route: "/peptides/guide/fitness",
    intro: "MOTS-c is a mitochondrial-derived peptide that activates AMPK — the same metabolic switch your body triggers during exercise. It drives fat oxidation at the cellular level without appetite suppression, making it a fundamentally different approach from GLP-1 therapy.",
    body: "Athos offers three injectable blends built around MOTS-c, each paired with complementary peptides for a specific performance profile. Adonix combines Tesamorelin, Ipamorelin, AOD-9604, and MOTS-c for broad metabolic acceleration and fat loss. Inferno swaps Tesamorelin for CJC-1295 to maximize GH pulsatility alongside fat oxidation. Kali adds BPC-157 and 5-Amino-1MQ for patients who want aggressive fat loss with GI protection.",
    evidence: "All three blends are injectable-only for 100% bioavailability. Protocol is a single subcutaneous injection, daily, AM fasted. These are not GLP-1 compounds — they work through metabolic activation rather than appetite control.",
    products: ["Adonix", "Inferno", "Kali"], formats: ["Injectable"],
  },
  {
    id: "longevity", num: "III", title: "Longevity & Anti-Aging", tag: "Cellular Optimization", route: "/peptides/guide/longevity",
    intro: "Longevity peptides restore foundational cellular processes that degrade with age — mitochondrial energy production, DNA repair, collagen synthesis, and telomere maintenance. NAD+ levels decline roughly 50% between ages 40 and 60. These protocols aim to reverse that trajectory.",
    body: "NAD+ is the cornerstone — a coenzyme present in every living cell that drives mitochondrial energy and sirtuin activation. Available across six delivery formats: injectable, oral capsule, nasal spray, topical cream, sublingual troche, and rapid dissolve tablet. GHK-Cu is a copper peptide that promotes collagen synthesis, tissue remodeling, and wound healing — available as injectable, facial serum, cream, and scalp foam. Epitalon supports telomere maintenance through burst-cycle protocols. The Empress blend combines MOTS-c, BPC-157, GHK-Cu, and Kisspeptin for women's vitality. Fountain of Youth combines GHK-Cu, BPC-157, TB-500, and Epitalon for comprehensive anti-aging.",
    evidence: "This is the broadest category in the Athos formulary — 15+ NAD+ formulations alone, spanning every delivery method. Most patients start with injectable NAD+ and add complementary compounds based on their provider's assessment.",
    products: ["NAD+", "GHK-Cu", "Epitalon", "Empress", "Fountain of Youth"], formats: ["Injectable", "Oral", "Nasal", "Topical", "Troche", "RDT"],
  },
  {
    id: "recovery", num: "IV", title: "Recovery & Healing", tag: "Repair Peptides", route: "/peptides/guide/recovery",
    intro: "BPC-157 and TB-500 are targeted repair peptides that accelerate healing at the cellular level. They are the most commonly prescribed peptides for injury recovery, post-surgical healing, chronic inflammation, and GI repair.",
    body: "BPC-157 is a 15-amino-acid peptide derived from human gastric juice. It upregulates growth factor expression, promotes angiogenesis, and is systemically anti-inflammatory with a strong GI-protective profile — making it particularly useful for patients experiencing GI side effects from GLP-1 therapy. Available as injectable, oral capsule (for gut-targeted delivery), and nasal spray. TB-500 is a fragment of Thymosin Beta-4 that promotes cell migration and differentiation — the mechanism your body uses to move repair cells to damaged tissue. Injectable only. The Wolverine blend (Valkyr) combines both in a single vial for comprehensive recovery.",
    evidence: "BPC-157 protocol is typically 500mcg daily subcutaneous for 4–8 weeks. TB-500 is 750mcg–2mg subcutaneous 1–2 times per week. Wolverine blend follows the BPC dosing schedule with TB-500 included. All recovery peptides cycle 4–8 weeks on, 30-day washout.",
    products: ["BPC-157", "TB-500", "Wolverine (Valkyr)"], formats: ["Injectable", "Oral", "Nasal"],
  },
  {
    id: "cognitive", num: "V", title: "Cognitive & Focus", tag: "Neuropeptides", route: "/peptides/guide/cognitive",
    intro: "Neuropeptide protocols that sharpen focus, reduce anxiety, and support sustained cognitive performance. These compounds act on BDNF expression and GABA modulation — addressing both the excitatory and inhibitory sides of cognitive function.",
    body: "Semax enhances brain-derived neurotrophic factor (BDNF) expression, supporting neuroplasticity, working memory, and sustained attention. Selank modulates GABA for anxiolytic calm without sedation — reducing mental noise without dulling cognition. Both are available as injectable and nasal spray. The Lucid blend combines Semax and Selank with MOTS-c and Tesamorelin for a full cognitive-plus-metabolic stack. Bodhi pairs Semax and Selank with BPC-157 and KPV for cognitive performance with neuro-inflammatory support. Kalm is the simplest formulation — Semax and Selank only.",
    evidence: "Nasal delivery provides rapid onset for cognitive peptides. Injectable provides more consistent systemic levels. Most patients start with Kalm or standalone Semax/Selank and advance to Lucid or Bodhi based on their response and provider guidance.",
    products: ["Semax", "Selank", "Lucid", "Bodhi", "Kalm"], formats: ["Injectable", "Nasal"],
  },
];

/* ═══════════════════════════════════════════════
   SESSION + ROUTING
   ═══════════════════════════════════════════════ */
const routeToGuide = (section) => {
  try {
    sessionStorage.setItem("peptide_guide", JSON.stringify({ primaryGoal: section.id, secondaryGoals: [], source: "guide", timestamp: Date.now() }));
  } catch (e) { /* silent */ }
  window.location.href = section.route;
};

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */
export default function Block() {
  const [active, setActive] = useState("weightloss");
  const [fadeKey, setFadeKey] = useState(0);
  const navRef = useRef(null);

  const pageTitle = useTextSetting({ name: "page-title", label: "Page title", initialValue: "Peptide Wellness Guide" });
  const pageSubtitle = useLongTextSetting({ name: "page-subtitle", label: "Subtitle", initialValue: "A clinical overview of five peptide therapy categories — what each compound does, who it is for, and how it is delivered." });
  const heroImage = useImageSetting({ name: "hero-image", label: "Hero Image", initialValue: { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Peptide therapy" } });

  const switchTab = (id) => {
    if (id === active) return;
    setActive(id);
    setFadeKey((k) => k + 1);
    const pill = navRef.current?.querySelector(`[data-tab="${id}"]`);
    if (pill) pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const section = sections.find((s) => s.id === active);
  const Illustration = Illustrations[active];

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <style>{`
        .guide-tabs::-webkit-scrollbar{display:none}
        .guide-tabs{-ms-overflow-style:none;scrollbar-width:none}
        @keyframes guideFadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .guide-fade{animation:guideFadeIn .4s cubic-bezier(.16,1,.3,1) forwards}
      `}</style>

      {/* ═══════════════════════════════════════════
         HERO — image with overlay
         ═══════════════════════════════════════════ */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={heroImage.src} alt={heroImage.alt}
          style={{ width: "100%", height: "auto", minHeight: 320, maxHeight: 480, objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,98,95,0.92) 0%, rgba(22,98,95,0.7) 50%, rgba(22,98,95,0.3) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 40px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: "#FFFFFF" }}>{pageTitle}</h1>
            <p className="text-base mt-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", maxWidth: 560 }}>{pageSubtitle}</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
         TAB NAV — horizontal pills
         ═══════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid rgba(36,92,58,0.08)", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
          <div ref={navRef} className="guide-tabs" style={{ display: "flex", gap: 6, overflowX: "auto", padding: "12px 0" }}>
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  data-tab={s.id}
                  onClick={() => switchTab(s.id)}
                  style={{
                    flexShrink: 0, padding: "8px 18px", borderRadius: 9999, border: "none", cursor: "pointer",
                    fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 500,
                    whiteSpace: "nowrap", transition: "all 0.25s",
                    backgroundColor: isActive ? "#245C3A" : "rgba(36,92,58,0.06)",
                    color: isActive ? "#FFFFFF" : "#245C3A",
                  }}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
         CONTENT — single swappable area
         ═══════════════════════════════════════════ */}
      <div className="container py-12 md:py-16">
        <div className="content" style={{ maxWidth: 720, margin: "0 auto" }}>

          {section && (
            <div key={fadeKey} className="guide-fade">

              {/* Heading */}
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>{section.num}</span>
                <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>{section.title}</h2>
                <span className="text-xs px-2.5 py-1 rounded-full ml-1" style={{ backgroundColor: "rgba(36,92,58,0.1)", color: "#245C3A", fontWeight: 500 }}>{section.tag}</span>
              </div>

              {/* Illustration */}
              <div className="rounded-xl mb-8 py-6 flex justify-center overflow-hidden" style={{ backgroundColor: "rgba(36,92,58,0.03)", border: "1px solid rgba(36,92,58,0.07)" }}>
                <Illustration />
              </div>

              {/* Content */}
              <p className="text-base leading-relaxed text-muted-foreground mb-4">{section.intro}</p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">{section.body}</p>

              {/* Evidence callout */}
              <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "#333" }}>{section.evidence}</p>
              </div>

              {/* Products + formats */}
              <div className="flex flex-wrap gap-2 mb-4">
                {section.products.map((p) => (
                  <span key={p} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A", fontWeight: 500 }}>{p}</span>
                ))}
                <span className="text-xs px-1 py-1.5" style={{ color: "rgba(0,0,0,0.2)" }}>|</span>
                {section.formats.map((f) => (
                  <span key={f} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.04)", color: "#666", fontWeight: 450 }}>{f}</span>
                ))}
              </div>

              {/* Route link */}
              <a href={section.route} onClick={(e) => { e.preventDefault(); routeToGuide(section); }}
                className="inline-flex items-center gap-2 mt-4"
                style={{ padding: "12px 24px", borderRadius: 10, backgroundColor: "#245C3A", color: "#FFFFFF", fontSize: 14, fontWeight: 500, textDecoration: "none", cursor: "pointer" }}>
                {section.title} guide
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
         DISCLAIMER
         ═══════════════════════════════════════════ */}
      <div style={{ borderTop: "1px solid rgba(36,92,58,0.08)" }}>
        <div className="container py-10">
          <div className="content" style={{ maxWidth: 720, margin: "0 auto" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform providing administrative and operational support to licensed physicians and healthcare practitioners. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">All clinical services are delivered by an independent Medical Services Organization operating licensed 503(A) compounding pharmacies and FDA-registered 503(B) outsourcing facilities, with a physician network across all 50 states.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Compounded medications are not FDA-approved. Individual results may vary. Payment does not guarantee prescribing or dispensing of any medication. All treatment decisions are made by the prescribing provider.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}