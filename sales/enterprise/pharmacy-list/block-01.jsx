import { useState, useMemo, useRef, useEffect } from "react";

/*
  Data: pass the catalog rows as the `items` prop. Each row is
    { id, fields: { sourceTable, category, compound, description, method, source,
                    pharmacyCost, msrp, markup, wlCost, blend, concentration, volume,
                    totalMgs, doseDays, isProtocolBlend, numPharmacies } }
  (same fields the Softr PHARMACY table provided; sourceTable is "Trending" or "Full Catalog").
  Login: pass the logged-in user as `user` (null = guest view) and an `onLogin` handler.
*/

const FB = "'DM Sans', system-ui, sans-serif";
const FH = "'DM Serif Display', Georgia, serif";

const CAT_COLORS = {
  "Weight Loss": "#245C3A",
  "Longevity": "#16625F",
  "Recovery": "#8B6914",
  "Protocols": "#245C3A",
  "Testosterone": "#6B3A7D",
  "Hormone Therapy": "#6B3A7D",
  "Sexual Health": "#9C4040",
  "Dermatology & Hair": "#2D6B8A",
  "Vitamins & Nutrients": "#4A7C3A",
  "Thyroid": "#7A5C2E",
  "Neuro & Behavioral": "#3D5A80",
  "Metabolic Support": "#5C6B3A",
  "Supplies": "#666",
  "Other": "#888",
};

const PILL_ORDER = [
  "All", "Weight Loss", "Recovery", "Longevity", "Protocols", "Testosterone",
  "Hormone Therapy", "Sexual Health", "Dermatology & Hair", "Vitamins & Nutrients",
  "Thyroid", "Neuro & Behavioral", "Metabolic Support", "Supplies", "Other",
];

const LOADING_MSGS = [
  [0, "Loading pharmacy items..."],
  [500, "Mapping weight loss compounds..."],
  [1000, "Building longevity protocols..."],
  [1500, "Assembling formulary..."],
];

const MSRP_MULT = 2.75;

const HERO_CARDS = [
  { label: "Semaglutide", type: "compound", tag: "GLP-1" },
  { label: "Tirzepatide", type: "compound", tag: "GLP-1" },
  { label: "Retatrutide", type: "compound", tag: "GLP-1" },
  { label: "Sermorelin", type: "compound", tag: "Peptide" },
  { label: "NAD+", type: "compound", tag: "Peptide" },
  { label: "BPC-157", type: "compound", tag: "Peptide" },
  { label: "CJC-1295/Ipamorelin", type: "compound", tag: "Peptide" },
  { label: "GHK-Cu", type: "compound", tag: "Peptide" },
  { label: "Protocol Blends", type: "protocols", tag: "Blends" },
];

const parseCurrency = (v) => {
  if (v == null || v === "") return null;
  const n = typeof v === "number" ? v : parseFloat(String(v).replace(/[$,]/g, ""));
  return isNaN(n) ? null : n;
};

const displayMSRP = (v) => {
  const n = parseCurrency(v);
  if (n == null) return "—";
  return "$" + Math.round(n * MSRP_MULT);
};

const fmtCurrency = (v) => {
  const n = parseCurrency(v);
  if (n == null) return "—";
  return "$" + n.toFixed(2);
};

const parseSource = (s) => {
  if (!s) return { first: "—", count: 0 };
  const parts = String(s).split("|").map((p) => p.trim()).filter(Boolean);
  const unique = [...new Set(parts)];
  return { first: unique[0] || "—", count: unique.length };
};

const getMixIn = (f) => {
  if (f.blend) return f.blend;
  const c = f.compound || "";
  const slash = c.indexOf("/");
  if (slash > 0) return c.substring(slash + 1);
  return "";
};

/* SELECT fields in Softr return {id, label} objects, not strings */
const fieldVal = (v) => {
  if (v == null) return "";
  if (typeof v === "object" && v.label != null) return String(v.label);
  return String(v);
};

const PAGE_SIZE = 50;

export default function Block({ items = [], user = null, onLogin }) {
  const data = { pages: [{ items }] };
  const status = "success";
  const hasNextPage = false;
  const isFetchingNextPage = false;
  const fetchNextPage = () => {};
  const fullAccess = !!user;
  const [activeCat, setActiveCat] = useState("Weight Loss");
  const [viewMode, setViewMode] = useState("trending");
  const [search, setSearch] = useState("");
  const [compoundFilter, setCompoundFilter] = useState("");
  const [page, setPage] = useState(0);
  const [detailItem, setDetailItem] = useState(null);
  const [sellPrice, setSellPrice] = useState("");

  /* Auto-paginate until all records loaded */
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [data, hasNextPage, isFetchingNextPage]);

  const pagesLoading = hasNextPage || isFetchingNextPage;

  const allItems = useMemo(() => {
    if (status !== "success" || !data) return [];
    return data.pages.flatMap((p) => p.items).map((item) => {
      const f = item.fields;
      return {
        id: item.id,
        fields: {
          sourceTable: fieldVal(f.sourceTable),
          category: fieldVal(f.category),
          compound: fieldVal(f.compound),
          description: fieldVal(f.description),
          method: fieldVal(f.method),
          source: fieldVal(f.source),
          pharmacyCost: f.pharmacyCost,
          msrp: f.msrp,
          markup: f.markup,
          wlCost: f.wlCost,
          blend: fieldVal(f.blend),
          concentration: fieldVal(f.concentration),
          volume: fieldVal(f.volume),
          totalMgs: fieldVal(f.totalMgs),
          doseDays: fieldVal(f.doseDays),
          isProtocolBlend: fieldVal(f.isProtocolBlend),
          numPharmacies: fieldVal(f.numPharmacies),
        },
      };
    });
  }, [data, status]);

  const stats = useMemo(() => {
    let trending = 0;
    let full = 0;
    const cats = new Set();
    allItems.forEach((item) => {
      const f = item.fields;
      if (f.sourceTable === "Trending") trending++;
      else full++;
      if (f.category) cats.add(f.category);
    });
    return { trending, full, cats: cats.size };
  }, [allItems]);

  /* Which filters have trending items */
  const hasTrending = useMemo(() => {
    const cats = new Set();
    allItems.forEach((i) => {
      if (i.fields.sourceTable === "Trending") {
        cats.add(i.fields.category);
        cats.add("All");
        if (i.fields.isProtocolBlend === "X") cats.add("Protocols");
        const c = (i.fields.compound || "").toLowerCase();
        const d = (i.fields.description || "").toLowerCase();
        if (c.includes("testosterone") || d.includes("testosterone")) cats.add("Testosterone");
      }
    });
    return cats;
  }, [allItems]);

  /* Category pill click handles viewMode inline — no useEffect needed */

  const filtered = useMemo(() => {
    let items = allItems;
    if (viewMode === "trending") {
      items = items.filter((i) => i.fields.sourceTable === "Trending");
    }
    if (activeCat === "Protocols") {
      items = items.filter((i) => i.fields.isProtocolBlend === "X");
    } else if (activeCat === "Testosterone") {
      items = items.filter((i) => {
        const c = (i.fields.compound || "").toLowerCase();
        const d = (i.fields.description || "").toLowerCase();
        return c.includes("testosterone") || d.includes("testosterone");
      });
    } else if (activeCat !== "All") {
      items = items.filter((i) => i.fields.category === activeCat);
    }
    if (compoundFilter) {
      items = items.filter((i) => i.fields.compound === compoundFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      items = items.filter((i) => {
        const f = i.fields;
        return (
          (f.compound && f.compound.toLowerCase().includes(q)) ||
          (f.description && f.description.toLowerCase().includes(q)) ||
          (f.blend && f.blend.toLowerCase().includes(q))
        );
      });
    }
    /* Trending items first when showing all */
    if (viewMode === "all") {
      items = [...items].sort((a, b) => {
        const aT = a.fields.sourceTable === "Trending" ? 0 : 1;
        const bT = b.fields.sourceTable === "Trending" ? 0 : 1;
        return aT - bT;
      });
    }
    return items;
  }, [allItems, activeCat, viewMode, search, compoundFilter]);

  const compoundOptions = useMemo(() => {
    const counts = {};
    filtered.forEach((i) => {
      const c = i.fields.compound;
      if (c) counts[c] = (counts[c] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [filtered]);

  const needsPagination = filtered.length > PAGE_SIZE;
  const totalPages = needsPagination ? Math.ceil(filtered.length / PAGE_SIZE) : 1;
  const pageItems = needsPagination
    ? filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
    : filtered;

  useEffect(() => {
    setPage(0);
  }, [activeCat, viewMode, search, compoundFilter]);

  const listRef = useRef(null);

  const heroClick = (card) => {
    if (card.type === "protocols") {
      setActiveCat("Protocols");
      setCompoundFilter("");
      setViewMode(hasTrending.has("Protocols") ? "trending" : "all");
    } else {
      setActiveCat("All");
      setCompoundFilter(card.label);
      const compoundHasTrending = allItems.some((i) => i.fields.compound === card.label && i.fields.sourceTable === "Trending");
      setViewMode(compoundHasTrending ? "trending" : "all");
    }
    setSearch("");
    setTimeout(() => {
      if (listRef.current) listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  if (status === "pending" || pagesLoading) {
    const loaded = data?.pages.flatMap((p) => p.items).length || 0;
    const msg = [...LOADING_MSGS].reverse().find(([t]) => loaded >= t)?.[1] || LOADING_MSGS[0][1];
    return (
      <div style={{ fontFamily: FB, textAlign: "center", padding: "80px 20px", color: "#888" }}>
        <div style={{ fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>
          {msg}
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div style={{ fontFamily: FB, textAlign: "center", padding: "80px 20px", color: "#9C4040" }}>
        Error loading catalog data.
      </div>
    );
  }


  /* Pre-compute detail modal values outside JSX */
  const df = detailItem ? detailItem.fields : null;
  const dfCost = df ? parseCurrency(df.pharmacyCost) : null;
  const dfSell = df ? (parseCurrency(sellPrice) || parseCurrency(df.msrp)) : null;
  const dfMargin = (dfCost != null && dfSell != null) ? dfSell - dfCost : null;
  const dfMarginPct = (dfMargin != null && dfSell > 0) ? ((dfMargin / dfSell) * 100) : null;
  const dfSrc = df ? parseSource(df.source) : null;

  return (
    <div style={{ fontFamily: FB, color: "#0f0f0f" }}>
      {/* ─── HEADER ─── */}
      <div style={{ background: "#f5f2ed", padding: "clamp(48px,8vw,80px) 0 0" }}>
        <div className="container">
          <a href="/enterprise" style={{ fontSize: 13, color: "#888", textDecoration: "none", fontWeight: 500, display: "inline-block", marginBottom: 24 }}>
            ← Back to Enterprise
          </a>
          <div className="phc-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            {/* Left: text */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#245C3A", marginBottom: 12 }}>
                Pharmacy Catalog
              </div>
              <h1 style={{ fontFamily: FH, fontSize: "clamp(36px,5vw,56px)", fontWeight: 400, fontStyle: "italic", color: "#0f0f0f", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                The Formulary.
              </h1>
              <p style={{ fontSize: "clamp(15px,1.5vw,17px)", color: "#555", maxWidth: 440, lineHeight: 1.6, margin: 0 }}>
                {stats.trending} trending compounds. {stats.full.toLocaleString()} available on request. Filter by category.
              </p>
              {fullAccess ? (
                <div style={{ marginTop: 16, fontSize: 12, color: "#245C3A", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#245C3A" }} />
                  Clinic View · {user.firstName || user.fullName || "Logged in"}
                </div>
              ) : (
                <button
                  onClick={() => { if (onLogin) { onLogin(); } else { window.location.href = "/login"; } }}
                  style={{
                    marginTop: 16, padding: "8px 20px", borderRadius: 9999,
                    border: "1.5px solid #245C3A", background: "transparent",
                    color: "#245C3A", fontSize: 13, fontWeight: 600, fontFamily: FB,
                    cursor: "pointer",
                  }}
                >
                  Clinic Login →
                </button>
              )}
            </div>
            {/* Right: 3x3 hero cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {HERO_CARDS.map((card) => (
                <button
                  key={card.label}
                  onClick={() => heroClick(card)}
                  style={{
                    padding: "14px 10px",
                    borderRadius: 10,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "#fff",
                    cursor: "pointer",
                    textAlign: "center",
                    fontFamily: FB,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#245C3A"; e.currentTarget.style.background = "rgba(36,92,58,0.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"; e.currentTarget.style.background = "#fff"; }}
                >
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#245C3A", marginBottom: 4 }}>{card.tag}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0f0f0f", lineHeight: 1.2 }}>{card.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ background: "#16625F", padding: "28px 0", marginTop: "clamp(32px,5vw,48px)" }}>
          <div className="container">
            <div className="phc-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
              {[
                [stats.trending, "Trending SKUs"],
                [stats.full.toLocaleString(), "Full Catalog"],
                [stats.cats, "Categories"],
              ].map(([val, label], i) => (
                <div key={i} style={{ textAlign: "center", padding: "0 16px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                  <div style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{val}</div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── STICKY FILTER BAR ─── */}
      <div style={{ position: "sticky", top: 0, zIndex: 20, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 0" }}>
        <div className="container">
          {/* Category pills */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 12, scrollbarWidth: "none" }}>
            {PILL_ORDER.map((cat) => {
              const active = activeCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCat(cat); setCompoundFilter(""); setViewMode(hasTrending.has(cat) ? "trending" : "all"); }}
                  style={{
                    flexShrink: 0, padding: "6px 16px", borderRadius: 9999,
                    border: active ? "1.5px solid #245C3A" : "1px solid rgba(0,0,0,0.12)",
                    background: active ? "#245C3A" : "#fff",
                    color: active ? "#fff" : "#555",
                    fontSize: 12, fontWeight: active ? 600 : 500, fontFamily: FB,
                    cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Controls row */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {/* Trending / All toggle */}
            <div style={{ display: "inline-flex", borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)", overflow: "hidden" }}>
              {["trending", "all"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  style={{
                    padding: "7px 18px", fontSize: 13, fontFamily: FB, border: "none",
                    fontWeight: viewMode === mode ? 600 : 400,
                    background: viewMode === mode ? "#245C3A" : "#fff",
                    color: viewMode === mode ? "#fff" : "#555",
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {mode === "trending" ? "Trending" : "All Items"}
                </button>
              ))}
            </div>

            {/* Compound filter */}
            <select
              value={compoundFilter}
              onChange={(e) => setCompoundFilter(e.target.value)}
              style={{
                padding: "7px 12px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)",
                fontSize: 13, fontFamily: FB, color: compoundFilter ? "#0f0f0f" : "#888",
                background: "#FAFAF8", outline: "none", maxWidth: 200,
              }}
            >
              <option value="">All compounds</option>
              {compoundOptions.map(([name, count]) => (
                <option key={name} value={name}>{name} ({count})</option>
              ))}
            </select>

            {/* Search */}
            <div style={{ position: "relative", flex: 1, minWidth: 180, maxWidth: 280 }}>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "100%", padding: "8px 14px 8px 36px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)", fontSize: 13, fontFamily: FB, outline: "none", background: "#FAFAF8", boxSizing: "border-box" }}
              />
              <svg style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", opacity: 0.35 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </div>

            <div style={{ fontSize: 12, color: "#888", fontWeight: 500, whiteSpace: "nowrap" }}>
              {filtered.length} item{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      {/* ─── TABLE ─── */}
      <div className="container" style={{ padding: "0 0 clamp(48px,8vw,80px)" }} ref={listRef}>
        <div style={{ overflowX: "auto" }}>
          <table className="phc-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: FB }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                {[
                  { label: "Compound", align: "left" },
                  { label: "Mix-In", align: "left", w: 120 },
                  { label: "Method", align: "left", w: 80 },
                  { label: "Conc.", align: "left", w: 80 },
                  { label: "Volume", align: "left", w: 60 },
                  { label: "Total MG", align: "left", w: 70 },
                  ...(fullAccess ? [{ label: "Cost", align: "right", w: 75 }] : []),
                  { label: "MSRP", align: "right", w: 75 },
                  ...(fullAccess ? [{ label: "Markup", align: "right", w: 75 }] : []),
                  ...(fullAccess ? [{ label: "Source", align: "left", w: 90 }] : []),
                ].map((col, ci) => (
                  <th key={ci} style={{ textAlign: col.align, padding: "12px 10px", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#888", width: col.w || "auto", whiteSpace: "nowrap" }}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageItems.length === 0 && (
                <tr><td colSpan={fullAccess ? 10 : 7} style={{ padding: "48px 10px", textAlign: "center", color: "#888", fontSize: 14 }}>No items match your filters.</td></tr>
              )}
              {pageItems.map((item) => {
                const f = item.fields;
                const catColor = CAT_COLORS[f.category] || "#888";
                const mixIn = getMixIn(f);
                const src = fullAccess ? parseSource(f.source) : null;
                return (
                  <tr
                    key={item.id}
                    onClick={() => { setDetailItem(item); setSellPrice(""); }}
                    style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", cursor: "pointer", transition: "background 0.1s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(36,92,58,0.02)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <td style={{ padding: "12px 10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 3, height: 28, borderRadius: 2, background: catColor, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 13, color: "#0f0f0f", lineHeight: 1.3 }}>{f.compound || "—"}</div>
                          <div style={{ fontSize: 11, color: "#999", lineHeight: 1.3, marginTop: 2, maxWidth: 300, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.description || ""}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 10px", fontSize: 12, color: mixIn ? "#245C3A" : "#ccc", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mixIn || "—"}</td>
                    <td style={{ padding: "12px 10px" }}>
                      {f.method && <span style={{ padding: "3px 10px", borderRadius: 6, background: "rgba(0,0,0,0.04)", fontSize: 11, fontWeight: 500, color: "#555", whiteSpace: "nowrap" }}>{f.method}</span>}
                    </td>
                    <td style={{ padding: "12px 10px", fontSize: 12, color: "#555", whiteSpace: "nowrap" }}>{f.concentration || "—"}</td>
                    <td style={{ padding: "12px 10px", fontSize: 12, color: "#555", whiteSpace: "nowrap" }}>{f.volume || "—"}</td>
                    <td style={{ padding: "12px 10px", fontSize: 12, color: "#555", whiteSpace: "nowrap" }}>{f.totalMgs || "—"}</td>
                    {fullAccess && <td style={{ padding: "12px 10px", textAlign: "right", fontVariantNumeric: "tabular-nums", fontSize: 13, color: "#555" }}>{fmtCurrency(f.pharmacyCost)}</td>}
                    <td style={{ padding: "12px 10px", textAlign: "right", fontVariantNumeric: "tabular-nums", fontSize: 13, fontWeight: 600, color: "#0f0f0f" }}>{fullAccess ? fmtCurrency(f.msrp) : displayMSRP(f.msrp)}</td>
                    {fullAccess && <td style={{ padding: "12px 10px", textAlign: "right", fontVariantNumeric: "tabular-nums", fontSize: 13, fontWeight: 600, color: "#245C3A" }}>{fmtCurrency(f.markup)}</td>}
                    {fullAccess && src && <td style={{ padding: "12px 10px", fontSize: 12, color: "#555" }}>{src.first}{src.count > 1 ? <span style={{ color: "#aaa", fontSize: 11, marginLeft: 4 }}>+{src.count - 1}</span> : ""}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {needsPagination && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "24px 0", borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: 16 }}>
            <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid rgba(0,0,0,0.1)", background: "#fff", fontSize: 13, fontFamily: FB, cursor: page === 0 ? "default" : "pointer", opacity: page === 0 ? 0.4 : 1, color: "#555" }}>Prev</button>
            <span style={{ fontSize: 13, color: "#888", fontVariantNumeric: "tabular-nums", padding: "0 8px" }}>{page + 1} of {totalPages}</span>
            <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1} style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid rgba(0,0,0,0.1)", background: "#fff", fontSize: 13, fontFamily: FB, cursor: page >= totalPages - 1 ? "default" : "pointer", opacity: page >= totalPages - 1 ? 0.4 : 1, color: "#555" }}>Next</button>
          </div>
        )}
      </div>

      {/* ─── DETAIL MODAL ─── */}
      {detailItem && df && (
        <div
          onClick={() => setDetailItem(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: 16, padding: "clamp(24px,4vw,36px)", maxWidth: 520, width: "100%", maxHeight: "85vh", overflowY: "auto" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: CAT_COLORS[df.category] || "#888", marginBottom: 4 }}>{df.category}</div>
                <div style={{ fontSize: 20, fontWeight: 600, color: "#0f0f0f" }}>{df.compound}</div>
              </div>
              <button onClick={() => setDetailItem(null)} style={{ background: "none", border: "none", fontSize: 22, color: "#aaa", cursor: "pointer", padding: "0 4px", lineHeight: 1 }}>×</button>
            </div>

            <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginBottom: 20 }}>{df.description}</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px", fontSize: 13, marginBottom: 20 }}>
              {df.method && <div><span style={{ color: "#999", fontSize: 11 }}>Method</span><div style={{ fontWeight: 500 }}>{df.method}</div></div>}
              {df.concentration && <div><span style={{ color: "#999", fontSize: 11 }}>Concentration</span><div style={{ fontWeight: 500 }}>{df.concentration}</div></div>}
              {df.volume && <div><span style={{ color: "#999", fontSize: 11 }}>Volume</span><div style={{ fontWeight: 500 }}>{df.volume}</div></div>}
              {df.totalMgs && <div><span style={{ color: "#999", fontSize: 11 }}>Total MGs</span><div style={{ fontWeight: 500 }}>{df.totalMgs}</div></div>}
              {df.doseDays && <div><span style={{ color: "#999", fontSize: 11 }}>Dose Days</span><div style={{ fontWeight: 500 }}>{df.doseDays}</div></div>}
              {df.blend && <div><span style={{ color: "#999", fontSize: 11 }}>Blend</span><div style={{ fontWeight: 500 }}>{df.blend}</div></div>}
              {fullAccess && dfSrc && df.source && <div><span style={{ color: "#999", fontSize: 11 }}>Source</span><div style={{ fontWeight: 500 }}>{dfSrc.first}{dfSrc.count > 1 ? " +" + (dfSrc.count - 1) : ""}</div></div>}
              {df.isProtocolBlend === "X" && <div><span style={{ color: "#245C3A", fontSize: 12 }}>Protocol Blend</span></div>}
            </div>

            <div style={{ background: "#FAFAF8", borderRadius: 10, padding: 16 }}>
              {fullAccess ? (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#888", marginBottom: 10 }}>Pricing</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#999" }}>Pharmacy Cost</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: "#555" }}>{fmtCurrency(df.pharmacyCost)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#999" }}>MSRP</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: "#0f0f0f" }}>{fmtCurrency(df.msrp)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#999" }}>Markup</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: "#245C3A" }}>{fmtCurrency(df.markup)}</div>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#888", marginBottom: 8 }}>Margin Calculator</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <div>
                        <label style={{ fontSize: 11, color: "#999" }}>Your Sell Price</label>
                        <input
                          type="number"
                          placeholder={fmtCurrency(df.msrp)}
                          value={sellPrice}
                          onChange={(e) => setSellPrice(e.target.value)}
                          style={{ display: "block", width: 110, padding: "6px 10px", borderRadius: 6, border: "1px solid rgba(0,0,0,0.12)", fontSize: 14, fontFamily: FB, marginTop: 4, outline: "none" }}
                        />
                      </div>
                      <div style={{ fontSize: 13, color: "#555", paddingTop: 16 }}>
                        Margin: <span style={{ color: dfMargin != null && dfMargin >= 0 ? "#245C3A" : "#9C4040" }}>{dfMargin != null ? fmtCurrency(dfMargin) : "—"}</span>
                        {dfMarginPct != null && <span style={{ color: "#888", marginLeft: 6 }}>({dfMarginPct.toFixed(1)}%)</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: 11, color: "#999" }}>MSRP</div>
                  <div style={{ fontSize: 22, fontWeight: 600, color: "#0f0f0f" }}>{displayMSRP(df.msrp)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── FOOTER CTA ─── */}
      <div style={{ background: "#f5f2ed", padding: "clamp(48px,8vw,80px) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#245C3A", marginBottom: 12 }}>
            Ready to move forward?
          </div>
          <h2 style={{ fontFamily: FH, fontSize: "clamp(28px,4vw,44px)", fontWeight: 400, fontStyle: "italic", color: "#0f0f0f", margin: "0 0 28px", letterSpacing: "-0.02em" }}>
            Launch your practice.
          </h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/enterprise/signup?tier=black" style={{ padding: "12px 28px", borderRadius: 9999, border: "1.5px solid #245C3A", background: "transparent", color: "#245C3A", fontSize: 14, fontWeight: 600, fontFamily: FB, textDecoration: "none" }}>
              Apply for Black Label
            </a>
            <a href="/enterprise/signup?tier=white" style={{ padding: "12px 28px", borderRadius: 9999, border: "1.5px solid #245C3A", background: "#245C3A", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: FB, textDecoration: "none" }}>
              Apply for White Label
            </a>
          </div>
        </div>
      </div>

      <style>{`
        *::-webkit-scrollbar{width:0;height:0}
        @media(max-width:768px){
          .phc-header{grid-template-columns:1fr!important;gap:24px!important}
          .phc-stats>div{padding:8px 12px!important}
          .phc-table th:nth-child(n+2):nth-child(-n+6),
          .phc-table td:nth-child(n+2):nth-child(-n+6){display:none}
          .phc-table th:nth-child(n+9),.phc-table td:nth-child(n+9){display:none}
          .phc-table{font-size:12px!important}
        }
      `}</style>
    </div>
  );
}