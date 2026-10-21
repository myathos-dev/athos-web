import { useState, useRef, useEffect } from "react";
import { useTextSetting, useLongTextSetting, useImageSetting } from "@/lib/editable-settings";

/* ═══════════════════════════════════════════════
   TOKENS
   ═══════════════════════════════════════════════ */
const PR = "#245C3A";
const PD = "#1a4d2e";
const TL = "#16625F";
const FH = "'DM Serif Display', Georgia, serif";
const FB = "'DM Sans', system-ui, sans-serif";

/* ═══════════════════════════════════════════════
   NAV SECTIONS
   ═══════════════════════════════════════════════ */
const SECTIONS = [
  { id: "pain", label: "What's Declining" },
  { id: "solution", label: "Two Systems" },
  { id: "explore", label: "Explore" },
  { id: "trust", label: "Why Athos" },
];

/* ═══════════════════════════════════════════════
   INDIVIDUAL COMPOUNDS
   ═══════════════════════════════════════════════ */
const SINGLE_COMPOUNDS = {
  nad: {
    eyebrow: "MULTI-FORMAT  |  CELLULAR ENERGY",
    name: "NAD+",
    headline: "The Fuel Your\nMitochondria Need.",
    desc: "NAD+ is the cofactor every cell requires to convert food into energy, activate sirtuins for DNA repair, and regulate cellular aging. Levels decline approximately 50% by age 50. Available as injectable, oral, and nasal spray.",
    tag: "Cellular Energy",
    receptors: [
      { name: "Sirtuin", label: "DNA repair + aging" },
      { name: "Mito", label: "ATP production" },
    ],
    strip: [
      { label: "Injectable", sub: "Highest bioavailability" },
      { label: "Oral", sub: "Troche + Capsule" },
      { label: "Nasal Spray", sub: "Fast absorption" },
    ],
    overviewItems: [
      { label: "Sirtuin Activation", sub: "DNA Repair + Fat Metabolism" },
      { label: "Mitochondrial Energy", sub: "ATP Production" },
      { label: "Cellular Aging", sub: "NAD+/NADH Ratio" },
    ],
    benefits: [
      { title: "Sirtuin Activator", desc: "NAD+ is required for all seven sirtuin enzymes to function — the master regulators of DNA repair, inflammation, fat metabolism, and cellular stress response." },
      { title: "Mitochondrial Cofactor", desc: "Your mitochondria cannot produce ATP without NAD+. Declining levels directly reduce cellular energy output across every organ system." },
      { title: "Three Delivery Formats", desc: "Injectable for highest bioavailability (500mg–2000mg vials). Sublingual troche and oral capsule for daily convenience (200–400mg). Nasal spray for fast mucosal absorption." },
      { title: "Broadest Source Network", desc: "Available from Kaduceus, Hallandale, Empower, DiRx, GrandAve, Wells, and ThePharmacyHub. The widest sourcing flexibility in the catalog." },
    ],
    formatInfo: [
      { format: "Injectable", note: "Subcutaneous. 500mg, 1000mg, and 2000mg vials. Lyophilized options available. Highest bioavailability.", sources: "Kaduceus, DiRx, Hallandale, Empower" },
      { format: "Oral", note: "Sublingual troche (200/300/400mg x30) and capsule (200mg x30). Daily dosing. Combo formulas available with B12 or Sermorelin.", sources: "Hallandale" },
      { format: "Nasal Spray", note: "100mg/ml and 300mg/ml sprays. Fast mucosal absorption. No injection required.", sources: "Hallandale, GrandAve, ThePharmacyHub" },
    ],
  },
  motsc: {
    eyebrow: "BLEND-ONLY  |  MITOCHONDRIAL PEPTIDE",
    name: "MOTS-C",
    headline: "The Exercise\nMimetic.",
    desc: "MOTS-C is a mitochondrial-derived peptide that activates AMPK — the same metabolic switch triggered by exercise. It increases cellular energy expenditure and fat oxidation without appetite suppression. Available through multiple named blends.",
    tag: "Metabolic Activation",
    receptors: [
      { name: "AMPK", label: "Metabolic switch" },
      { name: "Mito", label: "Energy expenditure" },
    ],
    strip: [
      { label: "AMPK Activation", sub: "Exercise Mimetic" },
      { label: "Fat Oxidation", sub: "Cellular Level" },
      { label: "Energy Expenditure", sub: "Mitochondrial" },
    ],
    overviewItems: [
      { label: "AMPK Activation", sub: "Exercise Mimetic" },
      { label: "Fat Oxidation", sub: "Cellular Level" },
      { label: "Energy Expenditure", sub: "Mitochondrial" },
    ],
    benefits: [
      { title: "Exercise Mimetic", desc: "MOTS-C levels increase up to 11.9x in skeletal muscle during exercise. Injectable supplementation activates the same AMPK pathway without requiring the exercise stimulus." },
      { title: "No Appetite Suppression", desc: "Works through metabolic activation, not hunger reduction. Fundamentally different from GLP-1 — burns stored energy rather than reducing intake." },
      { title: "Mitochondrial Origin", desc: "One of the few peptides encoded by mitochondrial DNA rather than nuclear DNA. Directly tied to mitochondrial health and output." },
      { title: "Available Through 5 Blends", desc: "Empress (longevity + hormonal), Lucid (cognitive + metabolic), Adonix (fat loss), Inferno (maximum burn), and Kali (fat loss + GI protection)." },
    ],
    nudgeToBlends: true,
  },
};

/* ═══════════════════════════════════════════════
   BLEND COMPOUNDS
   ═══════════════════════════════════════════════ */
const BLEND_COMPOUNDS = {
  foy: {
    eyebrow: "INJECTABLE  |  4-COMPOUND BLEND",
    name: "Fountain of Youth",
    headline: "Four Compounds.\nOne Longevity Protocol.",
    desc: "The most comprehensive longevity blend in the catalog. GHK-Cu anchors tissue remodeling at 50mg total. BPC-157 and TB-500 — the Wolverine Stack — handle repair and regeneration. Epitalon supports telomere maintenance. All four in a single vial, 30 dose days.",
    tag: "Full Longevity",
    compounds: ["GHK-Cu", "BPC-157", "TB-500", "Epitalon"],
    receptors: [
      { name: "GHK", label: "Tissue" },
      { name: "BPC", label: "Repair" },
      { name: "TB", label: "Regen" },
      { name: "Epit", label: "Telomere" },
    ],
    strip: [
      { label: "Tissue Remodeling", sub: "GHK-Cu" },
      { label: "Repair + Regeneration", sub: "BPC + TB" },
      { label: "Telomere Support", sub: "Epitalon" },
    ],
    benefits: [
      { title: "GHK-Cu Anchor", desc: "Highest concentration compound at 10mg/ml (50mg total). Drives collagen synthesis, tissue remodeling, and systemic anti-inflammatory activity." },
      { title: "Built-In Recovery Stack", desc: "BPC-157 + TB-500 — the same dual-action pair in Valkyr — included for anti-inflammatory repair and angiogenesis. Recovery and longevity in one vial." },
      { title: "Exclusive Telomere Support", desc: "Epitalon stimulates telomerase production for telomere maintenance. Only available in this blend and as a standalone burst protocol." },
      { title: "30 Dose Days Per Vial", desc: "Single injectable protocol covering four longevity pathways. No juggling multiple vials or schedules." },
    ],
  },
  empress: {
    eyebrow: "INJECTABLE  |  MULTI-CATEGORY BLEND",
    name: "Empress",
    headline: "Longevity. Metabolism.\nHormonal Health.",
    desc: "The only blend that crosses three categories in a single vial. GHK-Cu for tissue and skin remodeling. MOTS-C for AMPK-driven metabolic activation. BPC-157 for systemic repair. Kisspeptin-10 for hormonal signaling and libido support. 30 dose days.",
    tag: "Multi-Category",
    compounds: ["MOTS-C", "BPC-157", "GHK-Cu", "Kisspeptin-10"],
    receptors: [
      { name: "GHK", label: "Tissue" },
      { name: "MOTS", label: "AMPK" },
      { name: "BPC", label: "Repair" },
      { name: "Kiss", label: "Hormonal" },
    ],
    strip: [
      { label: "Tissue Remodeling", sub: "GHK-Cu" },
      { label: "Metabolic Activation", sub: "MOTS-C" },
      { label: "Hormonal Signaling", sub: "Kisspeptin" },
    ],
    benefits: [
      { title: "Three Categories, One Vial", desc: "Longevity (GHK-Cu), metabolism (MOTS-C), and sexual health (Kisspeptin-10) — covered simultaneously. No other blend spans this range." },
      { title: "GHK-Cu Anchor", desc: "Same 50mg total tissue remodeling concentration as Fountain of Youth. The backbone of both longevity protocols." },
      { title: "AMPK Activation", desc: "MOTS-C activates the same metabolic switch triggered by exercise — increasing cellular energy expenditure without appetite suppression." },
      { title: "Exclusive Hormonal Support", desc: "Kisspeptin-10 supports GnRH signaling, libido, and hormonal balance. Only available in this blend and as a standalone." },
    ],
  },
  lucid: {
    eyebrow: "INJECTABLE  |  COGNITIVE + METABOLIC BLEND",
    name: "Lucid",
    headline: "Sharper Mind.\nFaster Metabolism.",
    desc: "Semax and Selank for cognitive clarity and focus. MOTS-C for AMPK-driven metabolic activation. Tesamorelin for growth hormone release. The only blend that pairs nootropic peptides with metabolic support — mental and physical performance in a single vial. 30 dose days.",
    tag: "Cognitive + Metabolic",
    compounds: ["Semax", "Selank", "MOTS-C", "Tesamorelin"],
    receptors: [
      { name: "Semax", label: "Focus" },
      { name: "Selank", label: "Clarity" },
      { name: "MOTS", label: "AMPK" },
      { name: "Tesa", label: "GH" },
    ],
    strip: [
      { label: "Cognitive Enhancement", sub: "Semax + Selank" },
      { label: "Metabolic Activation", sub: "MOTS-C" },
      { label: "Growth Hormone", sub: "Tesamorelin" },
    ],
    benefits: [
      { title: "Nootropic Foundation", desc: "Semax enhances BDNF and cognitive processing. Selank modulates GABA for anxiolytic clarity. Together they cover focus, memory, and stress resilience." },
      { title: "MOTS-C Metabolic Layer", desc: "AMPK activation increases cellular energy — not just in muscle, but in brain tissue. Cognitive performance and metabolic health share the same energy substrate." },
      { title: "Tesamorelin GH Release", desc: "Pulsatile growth hormone release supports recovery, body composition, and neuroprotective pathways. Complements the cognitive and metabolic stack." },
      { title: "30 Dose Days Per Vial", desc: "Four compounds, one injection protocol. Mental clarity and metabolic activation without stacking separate vials." },
    ],
  },
};

/* ═══════════════════════════════════════════════
   SESSION
   ═══════════════════════════════════════════════ */
const routeToTeleform = () => {
  try {
    const ex = JSON.parse(sessionStorage.getItem("peptide_guide") || "{}");
    sessionStorage.setItem("peptide_guide", JSON.stringify({ ...ex, selectedCategory: "longevity", timestamp: Date.now() }));
  } catch (e) { /* silent */ }
  window.location.href = "/getpeptides/longevity";
};

/* ═══════════════════════════════════════════════
   ABSORPTION DIAGRAM
   ═══════════════════════════════════════════════ */
const AbsorptionDiagram = ({ receptors, isBlend }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0", width: "100%" }}>
    <p style={{ fontSize: 12, fontWeight: 600, color: PR, letterSpacing: "0.04em", marginBottom: 16, fontFamily: FB, textAlign: "center" }}>
      {isBlend ? `ONE INJECTION → ${receptors.length} PATHWAYS` : `DELIVERY → ${receptors.length} TARGET${receptors.length > 1 ? "S" : ""}`}
    </p>
    <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
      <path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div style={{ padding: "10px 24px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)", margin: "8px 0" }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: PR, fontFamily: FB, textAlign: "center" }}>Bloodstream</p>
      <p style={{ fontSize: 11, color: "#888", fontFamily: FB, textAlign: "center", marginTop: 2 }}>
        {isBlend ? "All compounds absorb simultaneously" : "Subcutaneous absorption"}
      </p>
    </div>
    <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
      <path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
      {receptors.map((r, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ display: "block" }}>
            <circle cx="32" cy="32" r="30" stroke={PR} strokeWidth="1.8" strokeDasharray="4 3" />
            <text x="32" y="35" textAnchor="middle" fill={PR} fontSize="10" fontWeight="700">{r.name}</text>
          </svg>
          <p style={{ fontSize: 11, color: "#888", fontFamily: FB, marginTop: 4 }}>{r.label}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   PRODUCT BLOCK
   ═══════════════════════════════════════════════ */
const ProductBlock = ({ data, productSrc, isBlend }) => {
  const [subTab, setSubTab] = useState("overview");
  const subTabs = [{ key: "overview", label: "Overview" }, { key: "how", label: "How It Works" }];

  return (
    <div className="py-12 md:py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="text-sm tracking-wide mb-4" style={{ color: TL, fontWeight: 500, letterSpacing: "0.05em" }}>{data.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl mb-5 leading-tight whitespace-pre-line" style={{ color: PD, fontFamily: FH }}>{data.headline}</h2>
            <p className="text-base mb-8" style={{ color: "#4A4A4A", lineHeight: 1.7, maxWidth: 520 }}>{data.desc}</p>

            <div className="grid grid-cols-3 gap-2 mb-8">
              {data.strip.map((s, i) => (
                <div key={i} className="rounded-lg p-3 flex flex-col items-center text-center" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                  <p className="text-xs" style={{ color: PD, fontWeight: 600 }}>{s.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#999" }}>{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={PR} strokeWidth="1.5" /><path d="M9 12L11 14L15 10" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 2 }}>{b.title}</p>
                    <p className="text-sm" style={{ color: "#666", lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* NAD+ format details */}
            {data.formatInfo && (
              <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p className="text-sm mb-3" style={{ color: PD, fontWeight: 600 }}>Format Details</p>
                <div className="space-y-3">
                  {data.formatInfo.map((f, i) => (
                    <div key={i}>
                      <p className="text-sm" style={{ color: PD, fontWeight: 500 }}>{f.format}</p>
                      <p className="text-xs" style={{ color: "#666", lineHeight: 1.5 }}>{f.note}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#aaa" }}>{f.sources}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MOTS-C nudge to blends */}
            {data.nudgeToBlends && (
              <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 4 }}>MOTS-C is available through blends</p>
                <p className="text-xs" style={{ color: "#666", lineHeight: 1.5, marginBottom: 8 }}>No standalone MOTS-C SKU exists. It's paired with supporting compounds in named blends — each targeting a different combination of pathways.</p>
                <div className="flex flex-wrap gap-2">
                  {["Empress", "Lucid", "Adonix", "Inferno", "Kali"].map((b, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontWeight: 500 }}>{b}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Blend compound chips */}
            {isBlend && data.compounds && (
              <div className="flex flex-wrap gap-2">
                {data.compounds.map((c, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontWeight: 500 }}>{c}</span>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>
            <div className="flex gap-2 mb-6">
              {subTabs.map((s) => (
                <button key={s.key} onClick={() => setSubTab(s.key)} className="text-xs px-4 py-2 rounded-full transition-all duration-200"
                  style={{ backgroundColor: subTab === s.key ? PR : "rgba(36,92,58,0.08)", color: subTab === s.key ? "#fff" : PR, fontWeight: 500, border: "none", cursor: "pointer" }}>
                  {s.label}
                </button>
              ))}
            </div>

            {subTab === "overview" && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(36,92,58,0.1)" }}>
                <img src={productSrc} alt={data.name} className="w-full h-auto object-cover" style={{ maxHeight: 280 }} />
                <div className="p-6" style={{ backgroundColor: "#FAFAF8" }}>
                  <h3 className="text-lg mb-3" style={{ color: PD, fontWeight: 600 }}>What It Does</h3>
                  <div className="space-y-3">
                    {(data.overviewItems || data.strip).map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.08)" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10" stroke={PR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <div>
                          <p className="text-sm" style={{ color: PD, fontWeight: 600 }}>{s.label}</p>
                          <p className="text-xs" style={{ color: "#888" }}>{s.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {subTab === "how" && (
              <div className="rounded-lg p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.1)" }}>
                <h3 className="text-lg mb-2" style={{ color: PD, fontWeight: 600 }}>How Your Body Uses It</h3>
                <p className="text-sm mb-4" style={{ color: "#666", lineHeight: 1.6 }}>
                  {isBlend
                    ? `After subcutaneous injection, all ${data.compounds.length} compounds enter your bloodstream simultaneously. Each targets a different pathway — working in parallel for comprehensive coverage.`
                    : data.nudgeToBlends
                    ? "After subcutaneous injection via a blend, MOTS-C enters your bloodstream and targets skeletal muscle within 1–2 hours. It activates AMPK — the same enzyme pathway triggered by exercise — increasing cellular energy expenditure and fat oxidation."
                    : "NAD+ delivery varies by format. Injectable provides the highest bioavailability — direct entry to the bloodstream. Sublingual troches absorb through mucosal tissue under the tongue. Nasal spray enters through the nasal mucosa for fast systemic uptake. All formats ultimately increase intracellular NAD+ levels."
                  }
                </p>
                <AbsorptionDiagram receptors={data.receptors} isBlend={isBlend} />
                <div className="mt-6 space-y-3">
                  {data.strip.map((s, i) => (
                    <div key={i} className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                      <p className="text-sm mb-1" style={{ color: PR, fontWeight: 600 }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "#666" }}>Driven by {s.sub}</p>
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
};

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export default function Block() {
  const [activeNav, setActiveNav] = useState("pain");
  const [path, setPath] = useState(null);
  const [singleCompound, setSingleCompound] = useState("nad");
  const [blendCompound, setBlendCompound] = useState("foy");
  const [showTooltip, setShowTooltip] = useState(false);
  const navRef = useRef(null);

  const sectionRefs = { pain: useRef(null), solution: useRef(null), explore: useRef(null), trust: useRef(null) };

  const pageTitle = useTextSetting({ name: "page-title", label: "Page title", initialValue: "Longevity Guide" });
  const pageSubtitle = useLongTextSetting({ name: "page-subtitle", label: "Subtitle", initialValue: "What declines, what restores it, and how to build a longevity protocol that fits your biology." });
  const heroImage = useImageSetting({ name: "hero-image", label: "Hero Image", initialValue: { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Longevity guide" } });
  const productImage = useImageSetting({ name: "product-image", label: "Product Lifestyle Photo", initialValue: { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Longevity lifestyle" } });

  const singleKeys = Object.keys(SINGLE_COMPOUNDS);
  const blendKeys = Object.keys(BLEND_COMPOUNDS);
  const activeSingle = SINGLE_COMPOUNDS[singleCompound];
  const activeBlend = BLEND_COMPOUNDS[blendCompound];

  useEffect(() => {
    const entries = Object.entries(sectionRefs);
    const obs = new IntersectionObserver((observed) => {
      observed.forEach((e) => { if (e.isIntersecting) { const m = entries.find(([, r]) => r.current === e.target); if (m) setActiveNav(m[0]); } });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    entries.forEach(([, ref]) => { if (ref.current) obs.observe(ref.current); });
    return () => obs.disconnect();
  }, [path]);

  useEffect(() => {
    const nav = navRef.current; if (!nav) return;
    const pill = nav.querySelector(`[data-nav="${activeNav}"]`); if (!pill) return;
    const nR = nav.getBoundingClientRect(), pR = pill.getBoundingClientRect();
    nav.scrollTo({ left: nav.scrollLeft + pR.left - nR.left - (nR.width / 2) + (pR.width / 2), behavior: "smooth" });
  }, [activeNav]);

  const scrollTo = (id) => { const el = sectionRefs[id]?.current; if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };

  const ContinueButton = ({ nextId, label }) => (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <button onClick={() => nextId === "teleform" ? routeToTeleform() : scrollTo(nextId)} style={{
        padding: "14px 32px", borderRadius: 10, border: `1.5px solid ${PR}`, backgroundColor: nextId === "teleform" ? PR : "transparent",
        color: nextId === "teleform" ? "#FFF" : PR, fontSize: 15, fontWeight: 500, fontFamily: FB, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s",
      }}>
        {label || "Continue"}
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </button>
    </div>
  );

  const CompoundPills = ({ keys, active, onSelect, data }) => (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 24px" }}>
      <div style={{ display: "flex", gap: 8 }}>
        {keys.map((k) => {
          const on = active === k;
          return (
            <button key={k} onClick={() => onSelect(k)} style={{
              flex: 1, padding: "12px 8px", borderRadius: 12, border: `2px solid ${on ? PR : "rgba(0,0,0,0.06)"}`,
              backgroundColor: on ? "rgba(36,92,58,0.04)" : "#FAFAF8", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontFamily: FB, transition: "all 0.25s",
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: on ? PD : "#666" }}>{data[k].name}</span>
              <span style={{ fontSize: 11, fontWeight: 500, color: on ? PR : "#999" }}>{data[k].tag}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <style>{`.lg-nav::-webkit-scrollbar{display:none}.lg-nav{-ms-overflow-style:none;scrollbar-width:none}`}</style>

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={heroImage.src} alt={heroImage.alt} style={{ width: "100%", height: "auto", minHeight: 300, maxHeight: 460, objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,98,95,0.92) 0%, rgba(22,98,95,0.7) 50%, rgba(22,98,95,0.3) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 40px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12, fontFamily: FB }}>Peptide Wellness Guide</p>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 600, lineHeight: 1.1, color: "#FFF", fontFamily: FH }}>{pageTitle}</h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", marginTop: 16, maxWidth: 520, fontFamily: FB }}>{pageSubtitle}</p>
          </div>
        </div>
      </div>

      {/* STICKY NAV */}
      <div style={{ position: "sticky", top: 0, zIndex: 40, backgroundColor: "rgba(245,242,237,0.97)", borderBottom: "1px solid rgba(36,92,58,0.08)", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
          <div ref={navRef} className="lg-nav" style={{ display: "flex", gap: 6, overflowX: "auto", padding: "10px 0" }}>
            {SECTIONS.map((s) => { const on = activeNav === s.id; return (
              <button key={s.id} data-nav={s.id} onClick={() => scrollTo(s.id)} style={{
                flexShrink: 0, padding: "10px 18px", borderRadius: 9999, border: "none", cursor: "pointer",
                fontFamily: FB, fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", transition: "all 0.25s",
                backgroundColor: on ? PR : "rgba(36,92,58,0.06)", color: on ? "#FFF" : PR,
              }}>{s.label}</button>
            ); })}
          </div>
        </div>
        {path && (
          <div style={{ borderTop: "1px solid rgba(36,92,58,0.06)", backgroundColor: "rgba(245,242,237,0.97)" }}>
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "6px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              {[{ id: "single", label: "Individual Compounds" }, { id: "blend", label: "Longevity Blends" }].map((p) => (
                <button key={p.id} onClick={() => setPath(p.id)} style={{ fontSize: 13, fontWeight: path === p.id ? 600 : 400, color: path === p.id ? PR : "#aaa", background: "none", border: "none", cursor: "pointer", fontFamily: FB, borderBottom: path === p.id ? `2px solid ${PR}` : "2px solid transparent", padding: "8px 4px 6px" }}>{p.label}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SECTION 1: WHAT'S DECLINING */}
      <div ref={sectionRefs.pain} style={{ scrollMarginTop: path ? 110 : 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 0" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You don't notice it until you compare yourself to five years ago.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Aging isn't a disease. It's a signal problem.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Your cells still know how to repair, regenerate, and protect themselves. But the molecules that coordinate those processes — the cofactors, peptides, and enzymes your body produced abundantly at 25 — are quietly declining.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>NAD+ — the cofactor your mitochondria need to produce energy — drops roughly 50% by age 50. Your mitochondria themselves deteriorate, reducing output of MOTS-C — the peptide that activates the same metabolic switch as exercise. Two systems, declining in parallel, compounding each other's loss.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 24 }}>None of this announces itself. You just notice that recovery takes longer, sleep is shallower, energy is lower, metabolism slows, and the gap between how you feel and how you used to feel keeps widening.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[{ stat: "~50%", label: "NAD+ decline by age 50" }, { stat: "↓", label: "MOTS-C output falls as mitochondria age" }].map((s, i) => (
              <div key={i} style={{ borderRadius: 12, padding: 16, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", textAlign: "center" }}>
                <p style={{ fontSize: 22, fontWeight: 600, color: PR, fontFamily: FH, marginBottom: 4 }}>{s.stat}</p>
                <p style={{ fontSize: 12, lineHeight: 1.4, color: "#555", fontFamily: FB }}>{s.label}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB }}>The question isn't whether these systems are declining. It's whether you replace the signals that drive them.</p>
          <ContinueButton nextId="solution" label="Two systems" />
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}><div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", margin: "64px 0" }} /></div>

      {/* SECTION 2: TWO SYSTEMS */}
      <div ref={sectionRefs.solution} style={{ scrollMarginTop: path ? 110 : 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>Two systems. Two compounds your body already makes.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Peptide therapy amplifies signals that are already there — just quieter than they used to be.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              { name: "NAD+", role: "Cellular Energy", desc: "Mitochondrial cofactor. Powers all seven sirtuin enzymes — the master regulators of DNA repair, inflammation, and cellular aging. Without it, your mitochondria cannot produce ATP.", decline: "~50% decline by age 50", formats: "Injectable, troche, capsule, nasal spray" },
              { name: "MOTS-C", role: "Metabolic Activation", desc: "Mitochondrial-derived peptide that activates AMPK — the same metabolic switch triggered by exercise. Increases cellular energy expenditure and fat oxidation without appetite suppression.", decline: "Declines as mitochondria age", formats: "Available through blends (Empress, Lucid, Adonix, Inferno, Kali)" },
            ].map((c, i) => (
              <div key={i} style={{ borderRadius: 12, padding: 24, backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: PR, fontFamily: FB }}>{c.name}</span>
                  <span style={{ fontSize: 11, color: "#999", fontFamily: FB }}>·</span>
                  <span style={{ fontSize: 12, color: "#888", fontFamily: FB }}>{c.role}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB, marginBottom: 10 }}>{c.desc}</p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, color: PR, fontWeight: 600, fontFamily: FB }}>{c.decline}</span>
                  <span style={{ fontSize: 11, color: "#aaa", fontFamily: FB }}>{c.formats}</span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>NAD+ is available as a standalone compound in multiple formats. MOTS-C is available through named blends that pair it with complementary peptides — tissue remodeling, cognitive support, hormonal signaling, or fat loss.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 28 }}>You can start with one, or go broader with a multi-compound longevity protocol.</p>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 16 }}>What's closer to your goal?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { id: "single", title: "I want to target a specific system", desc: "NAD+ for cellular energy (injectable, oral, or nasal) or MOTS-C for metabolic activation (available through blends)." },
              { id: "blend", title: "I want a comprehensive longevity protocol", desc: "Multi-compound blends covering 3–4 pathways in a single injectable vial. Tissue remodeling, repair, telomere support, metabolic activation, cognition, and more. 30 dose days per vial." },
            ].map((opt) => {
              const on = path === opt.id;
              return (
                <div key={opt.id} onClick={() => { setPath(opt.id); setTimeout(() => scrollTo("explore"), 300); }} style={{
                  padding: 20, borderRadius: 12, cursor: "pointer", transition: "all 0.2s",
                  border: `2px solid ${on ? PR : "rgba(0,0,0,0.06)"}`, backgroundColor: on ? "rgba(36,92,58,0.04)" : "#FAFAF8",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${on ? PR : "#ccc"}`, backgroundColor: on ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 }}>
                      {on && <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 600, color: PD, fontFamily: FB }}>{opt.title}</p>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "#666", fontFamily: FB, paddingLeft: 30 }}>{opt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 3: EXPLORE */}
      {path && (
        <div ref={sectionRefs.explore} style={{ scrollMarginTop: 110 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 20px 0" }}>
            <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 48 }} />
          </div>
          {path === "single" && <CompoundPills keys={singleKeys} active={singleCompound} onSelect={setSingleCompound} data={SINGLE_COMPOUNDS} />}
          {path === "blend" && <CompoundPills keys={blendKeys} active={blendCompound} onSelect={setBlendCompound} data={BLEND_COMPOUNDS} />}
          {path === "single" && <ProductBlock key={singleCompound} data={activeSingle} productSrc={productImage.src} isBlend={false} />}
          {path === "blend" && <ProductBlock key={blendCompound} data={activeBlend} productSrc={productImage.src} isBlend={true} />}
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
            <ContinueButton nextId="trust" label="Why patients choose Athos" />
          </div>
        </div>
      )}

      {/* SECTION 4: WHY ATHOS */}
      <div ref={sectionRefs.trust} style={{ scrollMarginTop: path ? 110 : 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 80px" }}>
          <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 64 }} />
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You've done the research. Here's how to start.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Licensed providers. Regulated pharmacies. No gray market.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              { title: "Licensed providers in all 50 states", desc: "Every protocol is prescribed after an individual medical evaluation. No auto-approvals. No templates." },
              { title: "503(A) and FDA-registered 503(B) pharmacies", desc: "All peptides compounded under full regulatory oversight. Kaduceus, GrandAve, Hallandale, Empower, Wells — vetted pharmacy partners only." },
              { title: "More formats than any other platform", desc: "NAD+ in three delivery formats. MOTS-C through five named blends. Three longevity protocols covering tissue, telomeres, metabolism, cognition, and hormonal health. Your provider matches the protocol to your biology." },
            ].map((p, i) => (
              <div key={i} style={{ borderRadius: 12, padding: 24, backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 6 }}>{p.title}</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 16 }}>Three steps</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              { n: "1", t: "Free evaluation", d: "Complete a brief medical intake. Takes about 5 minutes." },
              { n: "2", t: "Provider builds your protocol", d: "A licensed provider prescribes the right compound, format, and dosing for your longevity goals." },
              { n: "3", t: "Medication ships to your door", d: "Compounded by a licensed pharmacy. Delivered with everything you need to start." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FB }}>{s.n}</span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 2 }}>{s.t}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "#666", fontFamily: FB }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 8 }}>Your body still has the machinery.</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: FB }}>It just needs the fuel it stopped producing.</p>
          </div>
          <ContinueButton nextId="teleform" label="Start your free evaluation" />
        </div>
      </div>

      {/* OTHER GUIDES */}
      <div style={{ backgroundColor: "#f5f2ed" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: PR, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8, fontFamily: FB }}>Explore other guides</p>
          <p style={{ fontSize: 15, color: "#888", fontFamily: FB, marginBottom: 24 }}>Longevity is just one thing peptides can do.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Weight Loss", sub: "Semaglutide · Tirzepatide · Retatrutide", href: "/peptides/guide/weightloss" },
              { label: "Recovery", sub: "BPC-157 · TB-500 · Valkyr", href: "/peptides/guide/recovery" },
              { label: "Fitness", sub: "Adonix · Inferno · Kali", href: "/peptides/guide/fitness" },
              { label: "Cognitive", sub: "Semax · Selank · Lucid", href: "/peptides/guide/cognitive" },
            ].map((g, i) => (
              <a key={i} href={g.href} style={{ display: "block", padding: 20, borderRadius: 12, backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.08)", textDecoration: "none", transition: "border-color 0.2s" }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 4 }}>{g.label}</p>
                <p style={{ fontSize: 12, color: "#999", fontFamily: FB, lineHeight: 1.4 }}>{g.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div style={{ borderTop: "1px solid rgba(36,92,58,0.08)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px 24px" }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(36,92,58,0.4)", marginBottom: 12, fontFamily: FB }}>Platform Disclaimer</p>
          <p style={{ fontSize: 11, lineHeight: 1.6, color: "#999", fontFamily: FB }}>Athos is a telehealth platform providing administrative and operational support to licensed physicians. Athos does not provide medical services, employ healthcare providers, compound medications, or influence clinical decisions. All clinical services are delivered by an independent Medical Services Organization. Compounded medications are not FDA-approved. Individual results vary. Payment does not guarantee prescribing. All treatment decisions are made by the prescribing provider. This page is for informational purposes only.</p>
        </div>
      </div>

      {/* CHAT BUBBLE CTA */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        <div style={{ position: "absolute", bottom: "calc(100% + 10px)", right: 0, padding: "8px 16px", borderRadius: 10, backgroundColor: "#FFF", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", border: "1px solid rgba(36,92,58,0.1)", whiteSpace: "nowrap", opacity: showTooltip ? 1 : 0, transform: showTooltip ? "translateY(0)" : "translateY(4px)", transition: "all 0.2s", pointerEvents: "none" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: PD, fontFamily: FB }}>Free Evaluation</p>
        </div>
        <button onClick={routeToTeleform} style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: PR, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(36,92,58,0.3)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
          onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.95)"; }} onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}