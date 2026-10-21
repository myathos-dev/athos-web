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
  { id: "pain", label: "Why Recovery Stalls" },
  { id: "solution", label: "How Peptides Help" },
  { id: "explore", label: "Explore" },
  { id: "trust", label: "Why Athos" },
];

/* ═══════════════════════════════════════════════
   RECOVERY COMPOUNDS
   ═══════════════════════════════════════════════ */
const COMPOUNDS = {
  bpc: {
    eyebrow: "VERSATILE  |  MULTI-FORMAT PEPTIDE",
    name: "BPC-157",
    headline: "Your Body's Own\nRepair Signal.",
    desc: "BPC-157 is a 15-amino-acid peptide derived from human gastric juice — a repair signal your body already produces. As a compounded peptide, it provides systemic anti-inflammatory and tissue repair support. Available as injectable, nasal spray, or oral capsule.",
    tag: "Anti-Inflammatory",
    receptors: [
      { name: "Repair", label: "Tissue healing" },
      { name: "GI", label: "Gut lining restoration" },
    ],
    strip: [
      { label: "Tissue Repair", sub: "Systemic" },
      { label: "Gut Healing", sub: "GI Lining" },
      { label: "Anti-Inflammatory", sub: "Whole-Body" },
    ],
    benefits: [
      { title: "Derived From Your Own Biology", desc: "A 15-amino-acid sequence found naturally in human gastric juice. Not a foreign substance — an amplified version of a signal your body already sends." },
      { title: "Three Format Options", desc: "Injectable for systemic repair. Nasal spray for CNS-adjacent delivery. Oral capsule for targeted GI healing — commonly cross-prescribed to GLP-1 patients for nausea and gut side effects." },
      { title: "Systemic Anti-Inflammatory", desc: "Supports repair across joints, tendons, ligaments, and soft tissue. Works through multiple inflammatory pathways simultaneously." },
      { title: "Most Versatile Peptide in Catalog", desc: "Appears in 9+ blends across every category — recovery, longevity, fat loss, immune, cognitive. Clinical versatility unmatched by any other single compound." },
    ],
  },
  tb500: {
    eyebrow: "INJECTABLE  |  REGENERATIVE PEPTIDE",
    name: "TB-500",
    headline: "New Blood Vessels.\nNew Tissue.",
    desc: "TB-500 is a fragment of Thymosin Beta-4 — a protein naturally present in every cell of your body. It promotes angiogenesis (new blood vessel formation), cell migration, and tissue regeneration. Injectable only.",
    tag: "Tissue Regeneration",
    receptors: [
      { name: "Angio", label: "New blood vessels" },
      { name: "Cells", label: "Cell migration" },
    ],
    strip: [
      { label: "Angiogenesis", sub: "Blood Vessel Formation" },
      { label: "Cell Migration", sub: "Tissue Sites" },
      { label: "Tissue Remodeling", sub: "Structural Repair" },
    ],
    benefits: [
      { title: "Thymosin Beta-4 Fragment", desc: "The active sequence of a protein your body already produces. Concentrated and delivered subcutaneously for targeted regenerative support." },
      { title: "Promotes Angiogenesis", desc: "Supports the formation of new blood vessels — critical for delivering oxygen and nutrients to injured or recovering tissue." },
      { title: "Accelerates Cell Migration", desc: "Helps repair cells move to damaged sites faster. Supports the body's natural wound-healing sequence." },
      { title: "Pairs With BPC-157", desc: "BPC-157 handles inflammation. TB-500 handles regeneration. Most patients get both through Valkyr — the dual-action blend." },
    ],
    nudgeToValkyr: true,
  },
  valkyr: {
    eyebrow: "INJECTABLE  |  DUAL-ACTION BLEND",
    name: "Valkyr",
    headline: "Two Peptides.\nOne Vial.",
    desc: "You may know this combination as the Wolverine Stack — BPC-157 for anti-inflammatory repair, TB-500 for tissue regeneration and new blood vessel formation. One injection covers both sides of recovery.",
    tag: "BPC + TB-500",
    receptors: [
      { name: "BPC", label: "Anti-inflammatory" },
      { name: "TB-4", label: "Regeneration" },
    ],
    strip: [
      { label: "Anti-Inflammatory", sub: "BPC-157" },
      { label: "Angiogenesis", sub: "TB-500" },
      { label: "Dual Recovery", sub: "Combined" },
    ],
    benefits: [
      { title: "Dual-Action Formula", desc: "BPC-157 suppresses inflammation and accelerates tissue repair. TB-500 builds new blood vessels and migrates repair cells to damaged sites. One vial, both pathways." },
      { title: "Best Value in Recovery", desc: "Two compounds in a single vial — significantly less than purchasing BPC-157 and TB-500 separately." },
      { title: "Flagship Recovery Product", desc: "The most prescribed recovery protocol at Athos. Dual-action coverage is the clinical default for soft tissue, joint, and post-surgical recovery support." },
      { title: "Simplified Dosing", desc: "One vial, one injection protocol. BPC 500mcg/day for 22 days + TB 750mcg twice per week. No juggling multiple vials or schedules." },
    ],
  },
};

/* ═══════════════════════════════════════════════
   SESSION
   ═══════════════════════════════════════════════ */
const routeToTeleform = () => {
  try {
    const ex = JSON.parse(sessionStorage.getItem("peptide_guide") || "{}");
    sessionStorage.setItem("peptide_guide", JSON.stringify({ ...ex, selectedCategory: "recovery", timestamp: Date.now() }));
  } catch (e) { /* silent */ }
  window.location.href = "/getpeptides/recovery";
};

/* ═══════════════════════════════════════════════
   ABSORPTION DIAGRAM
   ═══════════════════════════════════════════════ */
const AbsorptionDiagram = ({ compound }) => {
  const isValkyr = compound === "valkyr";
  const data = COMPOUNDS[compound];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0", width: "100%" }}>
      <p style={{ fontSize: 12, fontWeight: 600, color: PR, letterSpacing: "0.04em", marginBottom: 16, fontFamily: FB, textAlign: "center" }}>
        {isValkyr ? "ONE INJECTION → TWO PATHWAYS" : `DELIVERY → ${data.receptors.length} TARGET${data.receptors.length > 1 ? "S" : ""}`}
      </p>

      <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
        <path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div style={{ padding: "10px 24px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)", margin: "8px 0" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: PR, fontFamily: FB, textAlign: "center" }}>Bloodstream</p>
        <p style={{ fontSize: 11, color: "#888", fontFamily: FB, textAlign: "center", marginTop: 2 }}>
          {isValkyr ? "Both compounds absorb simultaneously" : "Subcutaneous absorption"}
        </p>
      </div>

      <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
        <path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {isValkyr ? (
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 8 }}>
            {[
              { name: "BPC-157", label: "Anti-inflammatory repair", sub: "Tissue + GI" },
              { name: "TB-500", label: "Tissue regeneration", sub: "Angiogenesis" },
            ].map((node, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ display: "block" }}>
                  <circle cx="36" cy="36" r="33" stroke={PR} strokeWidth="1.8" strokeDasharray="4 3" />
                  <text x="36" y="32" textAnchor="middle" fill={PR} fontSize="9" fontWeight="700">{node.name}</text>
                  <text x="36" y="44" textAnchor="middle" fill="#888" fontSize="7">{node.sub}</text>
                </svg>
                <p style={{ fontSize: 11, color: "#888", fontFamily: FB, marginTop: 4, maxWidth: 100 }}>{node.label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
          {data.receptors.map((r, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ display: "block" }}>
                <circle cx="32" cy="32" r="30" stroke={PR} strokeWidth="1.8" strokeDasharray="4 3" />
                <text x="32" y="35" textAnchor="middle" fill={PR} fontSize="10" fontWeight="700">{r.name}</text>
              </svg>
              <p style={{ fontSize: 11, color: "#888", fontFamily: FB, marginTop: 4 }}>{r.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PRODUCT BLOCK
   ═══════════════════════════════════════════════ */
const ProductBlock = ({ compoundKey, data, productSrc }) => {
  const [subTab, setSubTab] = useState("overview");
  const subTabs = [
    { key: "overview", label: "Overview" },
    { key: "how", label: "How It Works" },
  ];

  return (
    <div className="py-12 md:py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="text-sm tracking-wide mb-4" style={{ color: TL, fontWeight: 500, letterSpacing: "0.05em" }}>{data.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl mb-5 leading-tight whitespace-pre-line" style={{ color: PD, fontFamily: FH }}>{data.headline}</h2>
            <p className="text-base mb-8" style={{ color: "#4A4A4A", lineHeight: 1.7, maxWidth: 520 }}>{data.desc}</p>

            {/* Mechanism strip */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {data.strip.map((s, i) => (
                <div key={i} className="rounded-lg p-3 flex flex-col items-center text-center" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                  <p className="text-xs" style={{ color: PD, fontWeight: 600 }}>{s.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#999" }}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke={PR} strokeWidth="1.5" />
                      <path d="M9 12L11 14L15 10" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 2 }}>{b.title}</p>
                    <p className="text-sm" style={{ color: "#666", lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nudge to Valkyr (TB-500 only) */}
            {data.nudgeToValkyr && (
              <div className="rounded-lg p-5" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 4 }}>Most patients get TB-500 through Valkyr</p>
                <p className="text-xs" style={{ color: "#666", lineHeight: 1.5 }}>Valkyr combines BPC-157 + TB-500 in a single vial — same compounds, simplified protocol, better value.</p>
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
                    {data.strip.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(36,92,58,0.08)" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10" stroke={PR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
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
                  {compoundKey === "valkyr"
                    ? "After subcutaneous injection, both BPC-157 and TB-500 enter your bloodstream simultaneously. BPC-157 targets inflammatory pathways while TB-500 initiates angiogenesis and cell migration — two complementary mechanisms working in parallel."
                    : compoundKey === "bpc"
                    ? "BPC-157 can be delivered via injection (systemic), nasal spray (CNS-adjacent), or oral capsule (GI-targeted). Each format reaches different tissue priorities. Injectable provides the broadest systemic coverage."
                    : "After subcutaneous injection, TB-500 enters your bloodstream and begins promoting angiogenesis — the formation of new blood vessels — and accelerating cell migration to damaged tissue sites."
                  }
                </p>
                <AbsorptionDiagram compound={compoundKey} />
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
  const [activeCompound, setActiveCompound] = useState("valkyr");
  const [showTooltip, setShowTooltip] = useState(false);
  const navRef = useRef(null);

  /* ── Section refs ──────────────────────── */
  const sectionRefs = {
    pain: useRef(null),
    solution: useRef(null),
    explore: useRef(null),
    trust: useRef(null),
  };

  const pageTitle = useTextSetting({ name: "page-title", label: "Page title", initialValue: "Recovery Guide" });
  const pageSubtitle = useLongTextSetting({ name: "page-subtitle", label: "Subtitle", initialValue: "How peptides accelerate healing — from chronic inflammation to post-surgical repair." });
  const heroImage = useImageSetting({ name: "hero-image", label: "Hero Image", initialValue: { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Recovery guide" } });
  const productImage = useImageSetting({ name: "product-image", label: "Product Lifestyle Photo", initialValue: { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Recovery lifestyle" } });

  const compoundKeys = Object.keys(COMPOUNDS);
  const activeData = COMPOUNDS[activeCompound];

  /* ── Scroll-spy via refs ───────────────── */
  useEffect(() => {
    const entries = Object.entries(sectionRefs);
    const obs = new IntersectionObserver((observed) => {
      observed.forEach((e) => {
        if (e.isIntersecting) {
          const match = entries.find(([, ref]) => ref.current === e.target);
          if (match) setActiveNav(match[0]);
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    entries.forEach(([, ref]) => { if (ref.current) obs.observe(ref.current); });
    return () => obs.disconnect();
  }, []);

  /* ── Pill highlight scroll ─────────────── */
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const pill = nav.querySelector(`[data-nav="${activeNav}"]`);
    if (!pill) return;
    const navRect = nav.getBoundingClientRect();
    const pillRect = pill.getBoundingClientRect();
    const offset = pillRect.left - navRect.left - (navRect.width / 2) + (pillRect.width / 2);
    nav.scrollTo({ left: nav.scrollLeft + offset, behavior: "smooth" });
  }, [activeNav]);

  const scrollTo = (id) => {
    const el = sectionRefs[id]?.current;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ── Continue button ───────────────────── */
  const ContinueButton = ({ nextId, label }) => (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <button onClick={() => nextId === "teleform" ? routeToTeleform() : scrollTo(nextId)} style={{
        padding: "14px 32px", borderRadius: 10, border: `1.5px solid ${PR}`,
        backgroundColor: nextId === "teleform" ? PR : "transparent",
        color: nextId === "teleform" ? "#FFF" : PR,
        fontSize: 15, fontWeight: 500, fontFamily: FB, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s",
      }}>
        {label || "Continue"}
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );

  /* ── Compound selector ─────────────────── */
  const CompoundPills = () => (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 24px" }}>
      <div style={{ display: "flex", gap: 8 }}>
        {compoundKeys.map((k) => {
          const on = activeCompound === k;
          return (
            <button key={k} onClick={() => setActiveCompound(k)} style={{
              flex: 1, padding: "12px 8px", borderRadius: 12,
              border: `2px solid ${on ? PR : "rgba(0,0,0,0.06)"}`,
              backgroundColor: on ? "rgba(36,92,58,0.04)" : "#FAFAF8",
              cursor: "pointer", display: "flex", flexDirection: "column",
              alignItems: "center", gap: 4, fontFamily: FB, transition: "all 0.25s",
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: on ? PD : "#666" }}>{COMPOUNDS[k].name}</span>
              <span style={{ fontSize: 11, fontWeight: 500, color: on ? PR : "#999" }}>{COMPOUNDS[k].tag}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <style>{`
        .rg-nav::-webkit-scrollbar{display:none}
        .rg-nav{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>

      {/* ── HERO ─────────────────────────────── */}
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

      {/* ── STICKY NAV ───────────────────────── */}
      <div style={{ position: "sticky", top: 0, zIndex: 40, backgroundColor: "rgba(245,242,237,0.97)", borderBottom: "1px solid rgba(36,92,58,0.08)", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
          <div ref={navRef} className="rg-nav" style={{ display: "flex", gap: 6, overflowX: "auto", padding: "10px 0" }}>
            {SECTIONS.map((s) => {
              const on = activeNav === s.id;
              return (
                <button key={s.id} data-nav={s.id} onClick={() => scrollTo(s.id)} style={{
                  flexShrink: 0, padding: "10px 18px", borderRadius: 9999, border: "none", cursor: "pointer",
                  fontFamily: FB, fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", transition: "all 0.25s",
                  backgroundColor: on ? PR : "rgba(36,92,58,0.06)", color: on ? "#FFF" : PR,
                }}>{s.label}</button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
         SECTION 1: WHY RECOVERY STALLS
         ═══════════════════════════════════════ */}
      <div ref={sectionRefs.pain} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 0" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>Your body knows how to heal. It's just getting quieter.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>The signals slow down before the damage shows up.</p>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>You've had the injury that never quite resolves. The tendon that improves to 80% and stalls. The joint that feels fine until it doesn't. The surgery that healed on the surface but left something lingering underneath.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>This isn't because your body forgot how to repair. It's because the repair signals — the peptides your body produces naturally to manage inflammation and regenerate tissue — decline with age, accumulate damage, and get overwhelmed by chronic stress.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 24 }}>Meanwhile, the standard approach — NSAIDs, rest, ice — manages symptoms without addressing the underlying signaling deficit. Worse, long-term NSAID use damages the gut lining, creating a new problem while masking the original one.</p>

          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 24 }}>
            <p style={{ fontSize: 28, fontWeight: 600, color: PR, fontFamily: FH, marginBottom: 4 }}>65%</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>of adults over 40 report at least one musculoskeletal issue that limits daily activity — most managed with anti-inflammatories that don't resolve the root cause.</p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB }}>If you're stuck in a cycle of partial recovery, the problem isn't effort. It's a weakening signal.</p>
          <ContinueButton nextId="solution" label="How peptides help" />
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", margin: "64px 0" }} />
      </div>

      {/* ═══════════════════════════════════════
         SECTION 2: HOW PEPTIDES HELP
         ═══════════════════════════════════════ */}
      <div ref={sectionRefs.solution} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>Two signals. Two sides of recovery.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>One suppresses inflammation. The other builds new tissue.</p>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Your body produces BPC-157 naturally in your gastric juice — a 15-amino-acid peptide that manages inflammation and tissue repair across your entire system. It also produces Thymosin Beta-4 in every nucleated cell — the protein TB-500 is derived from — which drives angiogenesis, cell migration, and tissue regeneration.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>These aren't foreign chemicals. They're amplified versions of signals your body already sends. One handles the inflammatory side — calming the chronic fire that prevents healing. The other handles the structural side — building new blood vessels and moving repair cells to where they're needed.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Used together, they cover both sides of recovery in a way that NSAIDs, rest, or physical therapy alone cannot.</p>

          {/* Format flexibility callout */}
          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 24 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 6 }}>Multiple delivery formats — matched to your need.</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>BPC-157 is available as injectable (systemic repair), nasal spray (CNS-adjacent), or oral capsule (targeted GI healing). TB-500 is injectable only. Valkyr combines both in a single injectable vial.</p>
          </div>

          {/* Cross-category note */}
          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 24 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 6 }}>BPC-157 appears in 9+ blends across every category.</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>Fountain of Youth (longevity), Empress (longevity), Kali (fat loss), Apex (growth), Sentinel (immune), Bodhi (cognitive) — the most clinically versatile peptide in the catalog.</p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB }}>Below, you can explore each compound individually — or start with Valkyr, the dual-action blend most patients choose.</p>
          <ContinueButton nextId="explore" label="Explore compounds" />
        </div>
      </div>

      {/* ═══════════════════════════════════════
         SECTION 3: EXPLORE
         ═══════════════════════════════════════ */}
      <div ref={sectionRefs.explore} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 20px 0" }}>
          <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 48 }} />
        </div>

        <CompoundPills />

        <ProductBlock key={activeCompound} compoundKey={activeCompound} data={activeData} productSrc={productImage.src} />

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <ContinueButton nextId="trust" label="Why patients choose Athos" />
        </div>
      </div>

      {/* ═══════════════════════════════════════
         SECTION 4: WHY ATHOS
         ═══════════════════════════════════════ */}
      <div ref={sectionRefs.trust} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 80px" }}>
          <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 64 }} />

          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You've found what works. Here's how to start.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Licensed providers. Regulated pharmacies. No gray market.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              { title: "Licensed providers in all 50 states", desc: "Every protocol is prescribed after an individual medical evaluation. No auto-approvals. No templates." },
              { title: "503(A) and FDA-registered 503(B) pharmacies", desc: "All peptides compounded under full regulatory oversight. Kaduceus, GrandAve, Partell, Hometown — vetted pharmacy partners only." },
              { title: "Format flexibility other clinics don't offer", desc: "BPC-157 as injectable, nasal spray, or oral capsule. TB-500 injectable. Valkyr dual-action blend. Your provider matches the format to your specific recovery need." },
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
              { n: "2", t: "Provider builds your protocol", d: "A licensed provider prescribes the right compound, format, and dosing for your recovery need." },
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
            <p style={{ fontSize: 18, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 8 }}>Your body hasn't forgotten how to heal.</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: FB }}>It just needs the signal amplified.</p>
          </div>

          <ContinueButton nextId="teleform" label="Start your free evaluation" />
        </div>
      </div>

      {/* ── OTHER GUIDES ─────────────────────── */}
      <div style={{ backgroundColor: "#f5f2ed" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: PR, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8, fontFamily: FB }}>Explore other guides</p>
          <p style={{ fontSize: 15, color: "#888", fontFamily: FB, marginBottom: 24 }}>Recovery is just one thing peptides can do.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Weight Loss", sub: "Semaglutide · Tirzepatide · Retatrutide", href: "/peptides/guide/weightloss" },
              { label: "Longevity", sub: "NAD+ · GHK-Cu · Epitalon", href: "/peptides/guide/longevity" },
              { label: "Fitness", sub: "Adonix · Inferno · Kali", href: "/peptides/guide/fitness" },
              { label: "Cognitive", sub: "Semax · Selank · Lucid", href: "/peptides/guide/cognitive" },
            ].map((g, i) => (
              <a key={i} href={g.href} style={{
                display: "block", padding: 20, borderRadius: 12, backgroundColor: "#FAFAF8",
                border: "1px solid rgba(36,92,58,0.08)", textDecoration: "none", transition: "border-color 0.2s",
              }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 4 }}>{g.label}</p>
                <p style={{ fontSize: 12, color: "#999", fontFamily: FB, lineHeight: 1.4 }}>{g.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER ───────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(36,92,58,0.08)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px 24px" }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(36,92,58,0.4)", marginBottom: 12, fontFamily: FB }}>Platform Disclaimer</p>
          <p style={{ fontSize: 11, lineHeight: 1.6, color: "#999", fontFamily: FB }}>Athos is a telehealth platform providing administrative and operational support to licensed physicians. Athos does not provide medical services, employ healthcare providers, compound medications, or influence clinical decisions. All clinical services are delivered by an independent Medical Services Organization. Compounded medications are not FDA-approved. Individual results vary. Payment does not guarantee prescribing. All treatment decisions are made by the prescribing provider. This page is for informational purposes only.</p>
        </div>
      </div>

      {/* ── CHAT BUBBLE CTA ──────────────────── */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}
        onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        <div style={{
          position: "absolute", bottom: "calc(100% + 10px)", right: 0, padding: "8px 16px", borderRadius: 10,
          backgroundColor: "#FFF", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", border: "1px solid rgba(36,92,58,0.1)",
          whiteSpace: "nowrap", opacity: showTooltip ? 1 : 0, transform: showTooltip ? "translateY(0)" : "translateY(4px)",
          transition: "all 0.2s", pointerEvents: "none",
        }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: PD, fontFamily: FB }}>Free Evaluation</p>
        </div>
        <button onClick={routeToTeleform} style={{
          width: 56, height: 56, borderRadius: "50%", backgroundColor: PR, border: "none", cursor: "pointer",
          boxShadow: "0 4px 16px rgba(36,92,58,0.3)", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s",
        }}
          onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.95)"; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}