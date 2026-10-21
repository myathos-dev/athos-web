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
    { id: "pain", label: "What's Slowing Down" },
    { id: "solution", label: "Two Peptides" },
    { id: "explore", label: "Explore" },
    { id: "trust", label: "Why Athos" },
];

/* ═══════════════════════════════════════════════
   INDIVIDUAL COMPOUNDS
   ═══════════════════════════════════════════════ */
const SINGLE_COMPOUNDS = {
    semax: {
        eyebrow: "INJECTABLE + NASAL  |  FOCUS + MEMORY",
        name: "Semax",
        headline: "Sharper Focus.\nFaster Processing.",
        desc: "Semax increases BDNF — the growth factor your brain needs to form new connections, retain information, and process faster. It's neuroprotective under stress and available as an injectable or nasal spray. No injection required with the nasal format.",
        tag: "Focus + Memory",
        receptors: [
            { name: "BDNF", label: "Growth factor" },
            { name: "Neuro", label: "Protection" },
        ],
        strip: [
            { label: "Focus + Memory", sub: "BDNF Enhancement" },
            { label: "Processing Speed", sub: "Cognitive" },
            { label: "Neuroprotection", sub: "Stress Resilience" },
        ],
        overviewItems: [
            { label: "Increases BDNF", sub: "The growth factor for new neural connections" },
            { label: "Sharpens Focus", sub: "Processing speed + working memory" },
            { label: "Protects Under Stress", sub: "Neuroprotective during cognitive demand" },
        ],
        benefits: [
            { title: "Increases BDNF", desc: "BDNF is the growth factor your neurons need to form new connections and maintain existing ones. Semax directly increases its production — supporting learning, memory, and cognitive processing speed." },
            { title: "Two Formats — Including No-Needle", desc: "Injectable for highest bioavailability. Nasal spray for fast absorption without an injection. Same compound, two delivery options." },
            { title: "Neuroprotective", desc: "Supports neuronal survival under stress — cognitive, physical, and emotional. Your brain's performance under pressure depends on neurons that can handle load without degrading." },
            { title: "Pairs With Selank", desc: "Semax accelerates. Selank stabilizes. Most patients use both — Semax for speed and focus, Selank for calm clarity. Kalm combines them in one injectable vial." },
        ],
    },
    selank: {
        eyebrow: "INJECTABLE + NASAL  |  CALM CLARITY",
        name: "Selank",
        headline: "Anxiety Down.\nClarity Up.",
        desc: "Selank reduces anxiety without sedation — you stay sharp, not drowsy. It enhances your brain's calming signals while improving emotional regulation and focus under pressure. Available as injectable or nasal spray.",
        tag: "Calm Clarity",
        receptors: [
            { name: "GABA", label: "Calming signal" },
            { name: "Focus", label: "Under pressure" },
        ],
        strip: [
            { label: "Anti-Anxiety", sub: "Without Sedation" },
            { label: "Stress Resilience", sub: "Stay Sharp" },
            { label: "Emotional Regulation", sub: "Stability" },
        ],
        overviewItems: [
            { label: "Calms Without Sedating", sub: "Anti-anxiety that keeps you sharp" },
            { label: "Focus Under Pressure", sub: "Stress resilience without drowsiness" },
            { label: "Emotional Regulation", sub: "Stable mood, clearer thinking" },
        ],
        benefits: [
            { title: "Anti-Anxiety Without Drowsiness", desc: "Most anti-anxiety compounds make you drowsy. Selank enhances your brain's calming signals (GABA) without sedation — you feel calmer and think clearer, not slower." },
            { title: "Two Formats — Including No-Needle", desc: "Injectable for highest bioavailability. Nasal spray for fast absorption without an injection. Same compound, two delivery options." },
            { title: "Focus Under Pressure", desc: "Stress fragments attention. Selank stabilizes your cognitive baseline so focus doesn't degrade under pressure — whether that's a deadline, a difficult conversation, or decision fatigue." },
            { title: "Pairs With Semax", desc: "Selank stabilizes. Semax accelerates. Most patients use both — Selank for calm, Semax for speed. Kalm combines them in one injectable vial." },
        ],
        nudgeToKalm: true,
    },
};

/* ═══════════════════════════════════════════════
   BLEND COMPOUNDS
   ═══════════════════════════════════════════════ */
const BLEND_COMPOUNDS = {
    kalm: {
        eyebrow: "INJECTABLE  |  FOCUS + CALM BLEND",
        name: "Kalm",
        headline: "Two Peptides.\nOne Clear Mind.",
        desc: "The entry point. Semax for focus and processing speed. Selank for calm without sedation. Nothing else — just the two core cognitive peptides in one injectable vial. 30 dose days.",
        tag: "Focus + Calm",
        compounds: ["Semax", "Selank"],
        receptors: [
            { name: "BDNF", label: "Focus" },
            { name: "GABA", label: "Calm" },
        ],
        strip: [
            { label: "Focus + Speed", sub: "Semax" },
            { label: "Calm Clarity", sub: "Selank" },
            { label: "No Sedation", sub: "Stay Sharp" },
        ],
        benefits: [
            { title: "Always-Paired Combination", desc: "Semax accelerates cognitive processing. Selank stabilizes it. Every cognitive protocol at Athos starts with both — Kalm is the simplest way to get them together." },
            { title: "Better Value Than Standalone", desc: "Two nasal sprays purchased separately cost more than Kalm. One injectable vial, both peptides, 30 dose days." },
            { title: "Clean Formulation", desc: "No additional compounds — just Semax and Selank. For patients who want cognitive enhancement without metabolic, GI, or hormonal layers." },
            { title: "30 Dose Days Per Vial", desc: "Single injectable protocol. Daily subcutaneous injection. Simple, consistent, repeatable." },
        ],
    },
    bodhi: {
        eyebrow: "INJECTABLE  |  BRAIN + GUT BLEND",
        name: "Bodhi",
        headline: "Clear Mind.\nCalm Gut.",
        desc: "Semax + Selank for cognitive enhancement, plus BPC-157 for gut-brain axis repair and KPV for anti-inflammatory support. For patients whose brain fog has a gut component — 90% of your serotonin is produced in your GI tract. When the gut is inflamed, the brain pays the price.",
        tag: "Brain + Gut",
        compounds: ["Semax", "Selank", "BPC-157", "KPV"],
        receptors: [
            { name: "BDNF", label: "Focus" },
            { name: "GABA", label: "Calm" },
            { name: "BPC", label: "Gut repair" },
            { name: "KPV", label: "Anti-inflam" },
        ],
        strip: [
            { label: "Cognitive Enhancement", sub: "Semax + Selank" },
            { label: "Gut-Brain Repair", sub: "BPC-157" },
            { label: "Anti-Inflammatory", sub: "KPV" },
        ],
        benefits: [
            { title: "The Gut-Brain Connection", desc: "90% of serotonin is produced in your GI tract. BPC-157 repairs gut lining and reduces GI inflammation — improving the raw material supply for the neurotransmitters that drive mood and cognition." },
            { title: "KPV Anti-Inflammatory", desc: "KPV is a tripeptide that targets systemic inflammation — including neuroinflammation. Brain fog often has an inflammatory root. KPV addresses it directly." },
            { title: "Full Cognitive Stack", desc: "Semax + Selank provide the same focus-and-calm foundation as Kalm. BPC-157 and KPV add a repair layer that the simpler blend doesn't cover." },
            { title: "Cross-Category Repair", desc: "BPC-157 is the same compound in Valkyr (Recovery) and Kali (Fitness). KPV appears in Sentinel (Immune). Bodhi applies both to the brain." },
        ],
        crossCategory: true,
    },
    lucid: {
        eyebrow: "INJECTABLE  |  BRAIN + ENERGY BLEND",
        name: "Lucid",
        headline: "Sharper Mind.\nMore Energy.",
        desc: "Semax + Selank for cognitive clarity. MOTS-C for cellular energy — your brain is the most metabolically demanding organ in your body, consuming 20% of all energy at rest. Tesamorelin for growth hormone support and neuroprotection. The highest-performance cognitive blend. 30 dose days.",
        tag: "Brain + Energy",
        compounds: ["Semax", "Selank", "MOTS-C", "Tesamorelin"],
        receptors: [
            { name: "BDNF", label: "Focus" },
            { name: "GABA", label: "Calm" },
            { name: "AMPK", label: "Brain energy" },
            { name: "GH", label: "Neuroprotect" },
        ],
        strip: [
            { label: "Cognitive Enhancement", sub: "Semax + Selank" },
            { label: "Cellular Energy", sub: "MOTS-C" },
            { label: "Neuroprotection", sub: "Tesamorelin" },
        ],
        benefits: [
            { title: "Your Brain Needs Energy", desc: "Your brain consumes 20% of your body's energy at rest. MOTS-C activates AMPK — the same metabolic switch triggered by exercise — increasing cellular ATP production. More energy for neurons means sharper, sustained cognitive performance." },
            { title: "Tesamorelin Neuroprotection", desc: "Growth hormone supports neuronal health, memory consolidation, and neuroprotective pathways. Tesamorelin provides pulsatile GH release that benefits the brain alongside body composition." },
            { title: "Full Cognitive Foundation", desc: "Same Semax + Selank core as Kalm and Bodhi — focus acceleration plus calm stability. The metabolic layer on top is what separates Lucid." },
            { title: "Crosses Into Fitness + Longevity", desc: "MOTS-C is the same compound in Adonix, Inferno, and Kali (Fitness). Lucid also appears on the Longevity guide. One blend, three category applications." },
        ],
        crossCategory: true,
    },
};

/* ═══════════════════════════════════════════════
   COMPARISON TABLE
   ═══════════════════════════════════════════════ */
const COMPARISON = {
    headers: ["", "Kalm", "Bodhi", "Lucid"],
    rows: [
        ["Semax", "✓", "✓", "✓"],
        ["Selank", "✓", "✓", "✓"],
        ["BPC-157", "—", "✓", "—"],
        ["KPV", "—", "✓", "—"],
        ["MOTS-C", "—", "—", "✓"],
        ["Tesamorelin", "—", "—", "✓"],
        ["Angle", "Pure focus + calm", "Brain + gut repair", "Brain + energy"],
        ["Best for", "Entry point", "Brain fog, gut issues", "Peak performance"],
    ],
};

/* ═══════════════════════════════════════════════
   SESSION
   ═══════════════════════════════════════════════ */
const routeToTeleform = () => {
    try {
        const ex = JSON.parse(sessionStorage.getItem("peptide_guide") || "{}");
        sessionStorage.setItem("peptide_guide", JSON.stringify({ ...ex, selectedCategory: "cognitive", timestamp: Date.now() }));
    } catch (e) { /* silent */ }
    window.location.href = "/getpeptides/cognitive";
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
                {isBlend ? "All compounds absorb simultaneously" : "Injectable or nasal absorption"}
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

                        {/* Selank nudge to Kalm */}
                        {data.nudgeToKalm && (
                            <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                                <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 4 }}>Most patients pair Selank with Semax</p>
                                <p className="text-xs" style={{ color: "#666", lineHeight: 1.5 }}>Kalm combines both in a single injectable vial — simpler protocol, better value than two standalone nasal sprays.</p>
                            </div>
                        )}

                        {/* Bodhi/Lucid cross-category */}
                        {data.crossCategory && (
                            <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)" }}>
                                <p className="text-sm" style={{ color: PD, fontWeight: 600, marginBottom: 4 }}>Crosses into other categories</p>
                                <p className="text-xs" style={{ color: "#666", lineHeight: 1.5, marginBottom: 8 }}>
                                    {data.compounds.includes("BPC-157")
                                        ? "BPC-157 is the same compound in Valkyr (Recovery) and Kali (Fitness). KPV appears in Sentinel (Immune). Bodhi applies both to the brain."
                                        : "MOTS-C is the same compound in Adonix, Inferno, and Kali (Fitness). Lucid also appears on the Longevity guide. One blend, three category applications."
                                    }
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {(data.compounds.includes("BPC-157")
                                        ? ["Recovery → BPC-157", "Immune → KPV"]
                                        : ["Fitness → MOTS-C", "Longevity → MOTS-C"]
                                    ).map((c, i) => (
                                        <span key={i} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: PR, fontWeight: 500 }}>{c}</span>
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
                                        ? `After subcutaneous injection, all ${data.compounds.length} compounds enter your bloodstream simultaneously. Each targets a different pathway — cognitive, calming, and ${data.compounds.includes("BPC-157") ? "repair" : "metabolic"} systems working in parallel.`
                                        : "Available as injectable (subcutaneous) or nasal spray. Injectable provides the highest bioavailability. Nasal spray absorbs through mucosal tissue for fast uptake — no injection required. Both formats deliver the compound systemically."
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
    const [singleCompound, setSingleCompound] = useState("semax");
    const [blendCompound, setBlendCompound] = useState("kalm");
    const [showTooltip, setShowTooltip] = useState(false);
    const navRef = useRef(null);

    const sectionRefs = { pain: useRef(null), solution: useRef(null), explore: useRef(null), trust: useRef(null) };

    const pageTitle = "Cognitive Guide";
    const pageSubtitle = "How peptides sharpen focus, reduce brain fog, and restore the mental clarity you used to take for granted.";
    const heroImage = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Cognitive guide" };
    const productImage = { src: "https://replicate.delivery/xezq/2odFb62wHs4mA1hKlcDIoGOvPuTEID12s1EbNqUtU4xdG3lF/out-0.webp", alt: "Cognitive lifestyle" };

    const singleKeys = Object.keys(SINGLE_COMPOUNDS);
    const blendKeys = Object.keys(BLEND_COMPOUNDS);

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
            <style>{`.cg-nav::-webkit-scrollbar{display:none}.cg-nav{-ms-overflow-style:none;scrollbar-width:none}`}</style>

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
                    <div ref={navRef} className="cg-nav" style={{ display: "flex", gap: 6, overflowX: "auto", padding: "10px 0" }}>
                        {SECTIONS.map((s) => {
                            const on = activeNav === s.id; return (
                                <button key={s.id} data-nav={s.id} onClick={() => scrollTo(s.id)} style={{
                                    flexShrink: 0, padding: "10px 18px", borderRadius: 9999, border: "none", cursor: "pointer",
                                    fontFamily: FB, fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", transition: "all 0.25s",
                                    backgroundColor: on ? PR : "rgba(36,92,58,0.06)", color: on ? "#FFF" : PR,
                                }}>{s.label}</button>
                            );
                        })}
                    </div>
                </div>
                {path && (
                    <div style={{ borderTop: "1px solid rgba(36,92,58,0.06)", backgroundColor: "rgba(245,242,237,0.97)" }}>
                        <div style={{ maxWidth: 720, margin: "0 auto", padding: "6px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                            {[{ id: "single", label: "Individual Peptides" }, { id: "blend", label: "Cognitive Blends" }].map((p) => (
                                <button key={p.id} onClick={() => setPath(p.id)} style={{ fontSize: 13, fontWeight: path === p.id ? 600 : 400, color: path === p.id ? PR : "#aaa", background: "none", border: "none", cursor: "pointer", fontFamily: FB, borderBottom: path === p.id ? `2px solid ${PR}` : "2px solid transparent", padding: "8px 4px 6px" }}>{p.label}</button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* SECTION 1: WHAT'S SLOWING DOWN */}
            <div ref={sectionRefs.pain} style={{ scrollMarginTop: path ? 110 : 64 }}>
                <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 0" }}>
                    <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You used to think without trying. Now thinking takes effort.</h2>
                    <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>It's not aging. It's a declining signal.</p>

                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>You used to read for hours without losing the thread. Hold complex problems in your head. Switch between tasks without the friction. Somewhere in your 30s, the machinery that made thinking effortless started requiring effort.</p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>Stress compounds the problem. Cortisol degrades BDNF — the growth factor your brain needs to form new connections and maintain existing ones. Anxiety fragments attention. The standard answer is caffeine, then more caffeine, then crashing harder.</p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 24 }}>Brain fog isn't a diagnosis. It's the feeling of a brain running on declining signals — less growth factor for new connections, more noise in the stress response, less energy for the organ that consumes 20% of everything you produce.</p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                        {[
                            { stat: "20%", label: "of your body's energy is consumed by your brain — at rest" },
                            { stat: "↓", label: "BDNF declines with age and chronic stress" },
                        ].map((s, i) => (
                            <div key={i} style={{ borderRadius: 12, padding: 16, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.08)", textAlign: "center" }}>
                                <p style={{ fontSize: 22, fontWeight: 600, color: PR, fontFamily: FH, marginBottom: 4 }}>{s.stat}</p>
                                <p style={{ fontSize: 12, lineHeight: 1.4, color: "#555", fontFamily: FB }}>{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB }}>The solution isn't stimulants. It's restoring the signals that make your brain work the way it used to.</p>
                    <ContinueButton nextId="solution" label="Two peptides" />
                </div>
            </div>

            <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}><div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", margin: "64px 0" }} /></div>

            {/* SECTION 2: TWO PEPTIDES */}
            <div ref={sectionRefs.solution} style={{ scrollMarginTop: path ? 110 : 64 }}>
                <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
                    <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>One accelerates. The other stabilizes.</h2>
                    <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Every cognitive protocol at Athos starts with both.</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                        {[
                            { name: "Semax", role: "The Accelerator", desc: "Increases BDNF — the growth factor for new neural connections. Sharpens focus, processing speed, and memory. Protects neurons under stress. Available as injectable or nasal spray.", color: PR },
                            { name: "Selank", role: "The Stabilizer", desc: "Reduces anxiety without making you drowsy. Enhances your brain's calming signals so focus doesn't fragment under pressure. Emotional regulation without sedation. Available as injectable or nasal spray.", color: PR },
                        ].map((c, i) => (
                            <div key={i} style={{ borderRadius: 12, padding: 24, backgroundColor: "#FAFAF8", border: "1px solid rgba(36,92,58,0.08)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                                    <span style={{ fontSize: 13, fontWeight: 600, color: c.color, fontFamily: FB }}>{c.name}</span>
                                    <span style={{ fontSize: 11, color: "#999", fontFamily: FB }}>·</span>
                                    <span style={{ fontSize: 12, color: "#888", fontFamily: FB }}>{c.role}</span>
                                </div>
                                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", fontFamily: FB }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", fontFamily: FB, marginBottom: 20 }}>You can take each individually — including as a nasal spray with no injection required. Or combine them with supporting compounds in an injectable blend.</p>

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

                    {/* FORK */}
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 16 }}>What's closer to your goal?</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {[
                            { id: "single", title: "I want a specific peptide", desc: "Semax for focus and processing speed, or Selank for calm clarity. Available as injectable or nasal spray — no injection required with the nasal format." },
                            { id: "blend", title: "I want a comprehensive cognitive protocol", desc: "All blends pair Semax + Selank together, plus supporting compounds for gut-brain repair (Bodhi), metabolic energy (Lucid), or pure focus + calm (Kalm). Injectable only." },
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
                    {path === "single" && <ProductBlock key={singleCompound} data={SINGLE_COMPOUNDS[singleCompound]} productSrc={productImage.src} isBlend={false} />}
                    {path === "blend" && <ProductBlock key={blendCompound} data={BLEND_COMPOUNDS[blendCompound]} productSrc={productImage.src} isBlend={true} />}
                    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
                        <ContinueButton nextId="trust" label="Why patients choose Athos" />
                    </div>
                </div>
            )}

            {/* SECTION 4: WHY ATHOS */}
            <div ref={sectionRefs.trust} style={{ scrollMarginTop: path ? 110 : 64 }}>
                <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px 80px" }}>
                    <div style={{ height: 1, backgroundColor: "rgba(36,92,58,0.08)", marginBottom: 64 }} />
                    <h2 style={{ fontSize: 28, fontWeight: 600, color: PD, fontFamily: FH, lineHeight: 1.2, marginBottom: 8 }}>You've found what sharpens the signal. Here's how to start.</h2>
                    <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", fontFamily: FB, marginBottom: 32 }}>Licensed providers. Regulated pharmacies. No gray market.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                        {[
                            { title: "Licensed providers in all 50 states", desc: "Every protocol is prescribed after an individual medical evaluation. No auto-approvals. No templates." },
                            { title: "503(A) and FDA-registered 503(B) pharmacies", desc: "All peptides compounded under full regulatory oversight. Kaduceus and GrandAve — vetted pharmacy partners." },
                            { title: "Injectable and nasal spray options", desc: "Semax and Selank available as nasal spray — no injection required. All blends are injectable for maximum bioavailability. Your provider matches the format to your preference." },
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
                            { n: "2", t: "Provider builds your protocol", d: "A licensed provider prescribes the right peptide, format, and dosing for your cognitive goals." },
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
                        <p style={{ fontSize: 18, fontWeight: 600, color: PD, fontFamily: FH, marginBottom: 8 }}>Your brain hasn't slowed down.</p>
                        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: FB }}>The signals it runs on have.</p>
                    </div>
                    <ContinueButton nextId="teleform" label="Start your free evaluation" />
                </div>
            </div>

            {/* OTHER GUIDES */}
            <div style={{ backgroundColor: "#f5f2ed" }}>
                <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 20px" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: PR, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8, fontFamily: FB }}>Explore other guides</p>
                    <p style={{ fontSize: 15, color: "#888", fontFamily: FB, marginBottom: 24 }}>Cognitive performance is just one thing peptides can do.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[
                            { label: "Weight Loss", sub: "Semaglutide · Tirzepatide · Retatrutide", href: "/peptides/guide/weightloss" },
                            { label: "Recovery", sub: "BPC-157 · TB-500 · Valkyr", href: "/peptides/guide/recovery" },
                            { label: "Longevity", sub: "NAD+ · Fountain of Youth · Empress", href: "/peptides/guide/longevity" },
                            { label: "Fitness", sub: "Adonix · Inferno · Kali", href: "/peptides/guide/fitness" },
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