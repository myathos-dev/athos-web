import { useState, useRef, useEffect } from "react";

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
  { id: "pain", label: "Why You Plateau" },
  { id: "solution", label: "How MOTS-C Works" },
  { id: "explore", label: "Explore" },
  { id: "trust", label: "Why Athos" },
];

/* ═══════════════════════════════════════════════
   COMPOUNDS
   ═══════════════════════════════════════════════ */
const COMPOUNDS = {
  adonix: {
    eyebrow: "INJECTABLE  |  PEPTIDE BLEND",
    name: "Adonix",
    headline: "Metabolic Acceleration\n+ Fat Loss.",
    desc: "MOTS-C activates AMPK — the same metabolic switch triggered by exercise — while Tesamorelin and Ipamorelin trigger natural growth hormone release to mobilize stubborn fat. AOD-9604 targets fat cell destruction without affecting blood sugar. One injection, daily AM fasted.",
    tag: "Balanced Recomp",
    compounds: ["MOTS-C", "Tesamorelin", "AOD-9604", "Ipamorelin"],
    receptors: [
      { name: "AMPK", label: "Metabolic switch" },
      { name: "GH", label: "Fat mobilization" },
      { name: "AOD", label: "Fat destruction" },
    ],
    strip: [
      { label: "AMPK Activation", sub: "MOTS-C" },
      { label: "Fat Mobilization", sub: "AOD-9604" },
      { label: "GH Pulse", sub: "Tesamorelin + Ipa" },
    ],
    benefits: [
      { title: "Exercise Mimetic", desc: "MOTS-C levels increase up to 11.9x in skeletal muscle during exercise. Injectable supplementation activates the same pathway — AMPK — with 100% bioavailability." },
      { title: "Pulsatile GH Release", desc: "Tesamorelin + Ipamorelin trigger natural growth hormone pulses that mobilize stubborn visceral fat while preserving lean muscle mass." },
      { title: "No Appetite Suppression", desc: "Works through metabolic activation, not hunger reduction. Fundamentally different from GLP-1 — burns stored energy rather than reducing intake." },
      { title: "Lean Body Recomposition", desc: "AOD-9604 isolates the fat-burning fragment of growth hormone — targets fat destruction without blood sugar impact or GH side effects." },
    ],
  },
  inferno: {
    eyebrow: "INJECTABLE  |  PEPTIDE BLEND",
    name: "Inferno",
    headline: "Maximum Metabolic\nBurn.",
    desc: "The most aggressive fat-burning blend. MOTS-C and AOD-9604 handle cellular fat oxidation while CJC-1295 provides sustained growth hormone release — longer elevation than Tesamorelin's pulse, better for patients who plateau on shorter-acting secretagogues.",
    tag: "Maximum Burn",
    compounds: ["MOTS-C", "CJC-1295", "AOD-9604", "Ipamorelin"],
    receptors: [
      { name: "AMPK", label: "Metabolic switch" },
      { name: "GH", label: "Sustained release" },
      { name: "AOD", label: "Fat destruction" },
    ],
    strip: [
      { label: "AMPK Activation", sub: "MOTS-C" },
      { label: "Sustained GH", sub: "CJC-1295" },
      { label: "Fat Mobilization", sub: "AOD-9604" },
    ],
    benefits: [
      { title: "Intensive Fat Loss", desc: "Maximum metabolic burn with sustained growth hormone support for prolonged fat mobilization. The most aggressive blend in the fitness catalog." },
      { title: "CJC-1295 Extended Release", desc: "Provides sustained GH elevation vs Tesamorelin's pulsatile release — longer fat-mobilization window, better for patients who plateau on shorter-acting secretagogues." },
      { title: "No Appetite Suppression", desc: "Works through cellular energy expenditure, not hunger signals. No GI side effects common with GLP-1." },
      { title: "100% Bioavailability", desc: "Single subcutaneous injection. No digestive degradation, no first-pass liver metabolism. Full therapeutic dose reaches target tissue." },
    ],
    differentiator: "Adonix uses Tesamorelin for pulsatile GH release. Inferno uses CJC-1295 for sustained elevation — better for patients who plateau on shorter-acting GH secretagogues.",
  },
  kali: {
    eyebrow: "INJECTABLE  |  PEPTIDE BLEND",
    name: "Kali",
    headline: "Fat Loss\n+ Recovery.",
    desc: "MOTS-C for mitochondrial fat burning, BPC-157 for systemic anti-inflammatory repair, and 5-Amino-1MQ to boost intracellular NAD+. A different philosophy — metabolic repair and fat burning, not pure mobilization. Ideal for patients transitioning off GLP-1 or with gut sensitivity.",
    tag: "Fat Loss + Repair",
    compounds: ["MOTS-C", "BPC-157", "5-Amino-1MQ", "Tesamorelin"],
    receptors: [
      { name: "AMPK", label: "Metabolic switch" },
      { name: "BPC", label: "GI repair" },
      { name: "NAD+", label: "NNMT inhibition" },
    ],
    strip: [
      { label: "AMPK Activation", sub: "MOTS-C" },
      { label: "GI Protection", sub: "BPC-157" },
      { label: "NAD+ Boost", sub: "5-Amino-1MQ" },
    ],
    benefits: [
      { title: "Dual Metabolic Attack", desc: "MOTS-C activates AMPK while 5-Amino-1MQ blocks NNMT to boost intracellular NAD+ — two angles on metabolic sluggishness from different cellular mechanisms." },
      { title: "Built-In GI Protection", desc: "BPC-157 provides systemic anti-inflammatory repair. Ideal if transitioning from GLP-1 or with gut sensitivity — addresses both fat loss and the damage that got you here." },
      { title: "No Appetite Suppression", desc: "Fat loss through metabolic activation, not hunger reduction. No nausea, no GI disruption from the fat-loss compounds themselves." },
      { title: "Cross-Category Repair", desc: "BPC-157 connects Kali to the Recovery category. 5-Amino-1MQ connects it to the Longevity category via NAD+ restoration. Fat loss plus systemic repair in one vial." },
    ],
    crossCategory: true,
  },
};

/* ═══════════════════════════════════════════════
   COMPARISON TABLE DATA
   ═══════════════════════════════════════════════ */
const COMPARISON = {
  headers: ["", "Adonix", "Inferno", "Kali"],
  rows: [
    ["MOTS-C", "✓", "✓", "✓"],
    ["GH mechanism", "Tesamorelin (pulse)", "CJC-1295 (sustained)", "Tesamorelin (pulse)"],
    ["Fat mobilizer", "AOD-9604", "AOD-9604", "—"],
    ["GH secretagogue", "Ipamorelin", "Ipamorelin", "—"],
    ["GI protection", "—", "—", "BPC-157"],
    ["NAD+ boost", "—", "—", "5-Amino-1MQ"],
    ["Best for", "Balanced recomp", "Plateau breaking", "GI-sensitive / GLP-1 transition"],
  ],
};

/* ═══════════════════════════════════════════════
   SESSION
   ═══════════════════════════════════════════════ */
const routeToTeleform = () => {
  try {
    const ex = JSON.parse(sessionStorage.getItem("peptide_guide") || "{}");
    sessionStorage.setItem("peptide_guide", JSON.stringify({ ...ex, selectedCategory: "fitness", timestamp: Date.now() }));
  } catch (e) { /* silent */ }
  window.location.href = "/getpeptides/fitness";
};

/* ═══════════════════════════════════════════════
   ABSORPTION DIAGRAM (MOTS-c specific)
   ═══════════════════════════════════════════════ */
const AbsorptionDiagram = ({ receptors }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0", width: "100%" }}>
    <p style={{ fontSize: 12, fontWeight: 600, color: PR, letterSpacing: "0.04em", marginBottom: 16, fontFamily: FB, textAlign: "center" }}>
      DAILY INJECTION → AMPK ACTIVATION
    </p>
    <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
      <path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div style={{ padding: "10px 24px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.1)", margin: "8px 0" }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: PR, fontFamily: FB, textAlign: "center" }}>Skeletal Muscle</p>
      <p style={{ fontSize: 11, color: "#888", fontFamily: FB, textAlign: "center", marginTop: 2 }}>Primary target tissue</p>
    </div>
    <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
      <path d="M10 0L10 28" stroke={PR} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 24L10 32L14 24" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div style={{ marginTop: 8, marginBottom: 16 }}>
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" style={{ display: "block", margin: "0 auto" }}>
        <circle cx="45" cy="45" r="42" stroke={PR} strokeWidth="1.8" strokeDasharray="4 3" />
        <circle cx="45" cy="45" r="18" stroke={PR} strokeWidth="1.2" opacity="0.3" />
        <text x="45" y="42" textAnchor="middle" fill={PR} fontSize="10" fontWeight="700">AMPK</text>
        <text x="45" y="54" textAnchor="middle" fill={PR} fontSize="8" fontWeight="600" opacity="0.6">ACTIVATED</text>
      </svg>
    </div>
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
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
const ProductBlock = ({ data, productSrc }) => {
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

            {/* Inferno differentiator */}
            {data.differentiator && (
              <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 4 }}>How it differs from Adonix</p>
                <p className="text-xs" style={{ color: "#666", lineHeight: 1.5 }}>{data.differentiator}</p>
              </div>
            )}

            {/* Kali cross-category */}
            {data.crossCategory && (
              <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 4 }}>Crosses into Recovery + Longevity</p>
                <p className="text-xs" style={{ color: "#666", lineHeight: 1.5, marginBottom: 8 }}>BPC-157 connects Kali to the Recovery category — the same compound in Valkyr. 5-Amino-1MQ boosts intracellular NAD+, connecting it to the Longevity category. Fat loss plus systemic repair in one vial.</p>
                <div className="flex flex-wrap gap-2">
                  {["Recovery → BPC-157", "Longevity → NAD+"].map((c, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontWeight: 500 }}>{c}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Compound chips */}
            <div className="flex flex-wrap gap-2">
              {data.compounds.map((c, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontWeight: 500 }}>{c}</span>
              ))}
            </div>
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
                <h3 className="text-lg mb-2" style={{ color: PD, fontWeight: 600 }}>From Injection to Metabolic Shift</h3>
                <p className="text-sm mb-4" style={{ color: "#666", lineHeight: 1.6 }}>
                  After subcutaneous injection, each compound enters your bloodstream at 100% bioavailability — no digestive degradation, no first-pass liver metabolism. MOTS-C targets skeletal muscle within 1–2 hours, activating AMPK while companion compounds act on their respective pathways simultaneously.
                </p>
                <AbsorptionDiagram receptors={data.receptors} />
                <div className="mt-6 space-y-3">
                  {[
                    { title: "AMPK — The Metabolic Master Switch", text: "AMPK is the same switch your body flips during exercise. When activated, it tells your cells to produce more energy, burn stored fat, and improve how they process sugar." },
                    { title: "Fat Browning", text: "MOTS-C promotes conversion of white storage fat into energy-burning brown fat. In Adonix and Inferno, AOD-9604 adds direct fat cell destruction without affecting blood sugar." },
                    { title: "Why Injectable Delivery", text: "Peptides are fragile — oral delivery exposes them to stomach acid and liver metabolism. Subcutaneous injection bypasses both, delivering 100% of each compound directly into circulation." },
                  ].map((card, i) => (
                    <div key={i} className="rounded-lg p-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                      <p className="text-sm mb-1" style={{ color: PR, fontWeight: 600 }}>{card.title}</p>
                      <p className="text-xs" style={{ color: "#666", lineHeight: 1.6 }}>{card.text}</p>
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
  const [activeCompound, setActiveCompound] = useState("adonix");
  const [showTooltip, setShowTooltip] = useState(false);
  const navRef = useRef(null);

  const sectionRefs = { pain: useRef(null), solution: useRef(null), explore: useRef(null), trust: useRef(null) };

  const pageTitle = "Fitness Guide";
  const pageSubtitle = "How MOTS-C peptide blends burn fat, protect muscle, and break through plateaus — without appetite suppression.";
  const heroImage = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Fitness guide" };
  const productImage = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Fitness lifestyle" };

  const compoundKeys = Object.keys(COMPOUNDS);
  const activeData = COMPOUNDS[activeCompound];

  useEffect(() => {
    const entries = Object.entries(sectionRefs);
    const obs = new IntersectionObserver((observed) => {
      observed.forEach((e) => { if (e.isIntersecting) { const m = entries.find(([, r]) => r.current === e.target); if (m) setActiveNav(m[0]); } });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    entries.forEach(([, ref]) => { if (ref.current) obs.observe(ref.current); });
    return () => obs.disconnect();
  }, []);

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

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <style>{`.fg-nav::-webkit-scrollbar{display:none}.fg-nav{-ms-overflow-style:none;scrollbar-width:none}`}</style>

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
          <div ref={navRef} className="fg-nav" style={{ display: "flex", gap: 6, overflowX: "auto", padding: "10px 0" }}>
            {SECTIONS.map((s) => { const on = activeNav === s.id; return (
              <button key={s.id} data-nav={s.id} onClick={() => scrollTo(s.id)} style={{
                flexShrink: 0, padding: "10px 18px", borderRadius: 9999, border: "none", cursor: "pointer",
                fontFamily: FB, fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", transition: "all 0.25s",
                backgroundColor: on ? PR : "rgba(36,92,58,0.06)", color: on ? "#FFF" : PR,
              }}>{s.label}</button>
            ); })}
          </div>
        </div>
      </div>

      {/* SECTION 1: WHY YOU PLATEAU */}
      <div ref={sectionRefs.pain} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 0" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You're doing the work. Your body stopped responding.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>The problem isn't effort. It's a declining signal.</p>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>You're tracking macros. Training 4x a week. Sleeping 7+ hours. And somewhere after 35, the same effort started producing less result. Body composition stalls. Recovery drags. The metabolic machinery that converted your work into visible change is running on a weakening signal.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>That signal is MOTS-C — a mitochondrial peptide your body produces naturally during exercise. It activates AMPK, the enzyme that tells your cells to burn fat, produce energy, and protect lean muscle. Your natural MOTS-C levels increase up to 11.9x during a workout. But your baseline production declines as mitochondrial function deteriorates with age.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 24 }}>The signal that makes your workouts work is getting quieter. More effort, less result, wider gap.</p>

          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 24 }}>
            <p style={{ fontSize: 28, fontWeight: 600, color: PR, fontFamily: FH, marginBottom: 4 }}>11.9×</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>MOTS-C increase in skeletal muscle during exercise — but your baseline production declines with age, blunting the very mechanism that drives your results.</p>
          </div>

          {/* GLP-1 differentiator */}
          <div style={{ borderRadius: 12, padding: 24, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 24 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: PD, fontFamily: FB, marginBottom: 6 }}>This is not appetite suppression.</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>GLP-1 medications reduce appetite. MOTS-C activates metabolism. One makes you eat less. The other makes your cells burn more. Different mechanism, different use case. If you're already eating right and training hard, you don't need less food — you need a louder signal.</p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB }}>Three injectable blends share MOTS-C as their core. What changes is the supporting cast — and which secondary goal matters most to you.</p>
          <ContinueButton nextId="solution" label="How MOTS-C works" />
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}><div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", margin: "64px 0" }} /></div>

      {/* SECTION 2: HOW MOTS-C WORKS */}
      <div ref={sectionRefs.solution} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>One core compound. Three blends. Three different goals.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Every blend starts with MOTS-C. What changes is what surrounds it.</p>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>MOTS-C is a 16-amino-acid peptide encoded by mitochondrial DNA. It activates AMPK — the same metabolic switch your body flips during exercise — increasing cellular energy expenditure, promoting fat oxidation, and blocking myostatin to protect lean muscle. All without appetite suppression.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Each blend pairs MOTS-C with different supporting compounds: growth hormone secretagogues for fat mobilization, BPC-157 for GI repair, NAD+ boosters for metabolic restoration, or a combination. Injectable only — 100% bioavailability, no digestive degradation.</p>

          {/* Comparison table */}
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(36,92,58,0.08)", marginBottom: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "12px 16px", backgroundColor: "rgba(36,92,58,0.06)" }}>
              {COMPARISON.headers.map((h, i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: i === 0 ? 500 : 600, color: PR, textAlign: i === 0 ? "left" : "center" }}>{h}</span>
              ))}
            </div>
            {COMPARISON.rows.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "10px 16px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                {row.map((cell, j) => (
                  <span key={j} style={{ fontSize: 12, color: j === 0 ? PD : (cell === "✓" ? PR : cell === "—" ? "#ccc" : "#666"), fontWeight: j === 0 ? 500 : (cell === "✓" ? 700 : 400), textAlign: j === 0 ? "left" : "center" }}>{cell}</span>
                ))}
              </div>
            ))}
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB }}>Explore each blend below to see the full compound breakdown, mechanism, and who it's built for.</p>
          <ContinueButton nextId="explore" label="Explore blends" />
        </div>
      </div>

      {/* SECTION 3: EXPLORE */}
      <div ref={sectionRefs.explore} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 20px 0" }}>
          <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 48 }} />
        </div>

        {/* Compound pills */}
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 24px" }}>
          <div style={{ display: "flex", gap: 8 }}>
            {compoundKeys.map((k) => {
              const on = activeCompound === k;
              return (
                <button key={k} onClick={() => setActiveCompound(k)} style={{
                  flex: 1, padding: "12px 8px", borderRadius: 12, border: `2px solid ${on ? PR : "rgba(0,0,0,0.06)"}`,
                  backgroundColor: on ? "rgba(36,92,58,0.04)" : "#FAFAF8", cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontFamily: FB, transition: "all 0.25s",
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: on ? PD : "#666" }}>{COMPOUNDS[k].name}</span>
                  <span style={{ fontSize: 11, fontWeight: 500, color: on ? PR : "#999" }}>{COMPOUNDS[k].tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ProductBlock key={activeCompound} data={activeData} productSrc={productImage.src} />

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <ContinueButton nextId="trust" label="Why patients choose Athos" />
        </div>
      </div>

      {/* SECTION 4: WHY ATHOS */}
      <div ref={sectionRefs.trust} style={{ scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 80px" }}>
          <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 64 }} />
          <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You've found the signal. Here's how to start.</h2>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Licensed providers. Regulated pharmacies. No gray market.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              { title: "Licensed providers in all 50 states", desc: "Every protocol is prescribed after an individual medical evaluation. No auto-approvals. No templates." },
              { title: "503(A) and FDA-registered 503(B) pharmacies", desc: "All peptides compounded under full regulatory oversight. Injectable blends sourced from Kaduceus — vetted pharmacy partner." },
              { title: "Three MOTS-C blends, one platform", desc: "Adonix for balanced recomposition. Inferno for aggressive fat loss. Kali for metabolic repair. Your provider matches the blend to your goals, training, and history." },
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
              { n: "2", t: "Provider builds your protocol", d: "A licensed provider prescribes the right blend and dosing based on your goals and training." },
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
            <p style={{ fontSize: 18, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 8 }}>You don't need another diet.</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: FB }}>You need the metabolic signal your body stopped sending.</p>
          </div>
          <ContinueButton nextId="teleform" label="Start your free evaluation" />
        </div>
      </div>

      {/* OTHER GUIDES */}
      <div style={{ backgroundColor: "#f5f2ed" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: PR, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8, fontFamily: FB }}>Explore other guides</p>
          <p style={{ fontSize: 15, color: "#888", fontFamily: FB, marginBottom: 24 }}>Fitness is just one thing peptides can do.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Weight Loss", sub: "Semaglutide · Tirzepatide · Retatrutide", href: "/peptides/guide/weightloss" },
              { label: "Recovery", sub: "BPC-157 · TB-500 · Valkyr", href: "/peptides/guide/recovery" },
              { label: "Longevity", sub: "NAD+ · Fountain of Youth · Empress", href: "/peptides/guide/longevity" },
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