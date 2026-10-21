import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useTextSetting, useNavigationSetting } from "@/lib/editable-settings";

const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const PR = "#245C3A";

var PRIMARY = [
  {
    name: "Hormone Therapy",
    count: 619,
    compounds: 35,
    highlights: "Testosterone (162), Progesterone (118), DHEA (61), BiEst (41), Anastrozole, Clomiphene, Estradiol, Nandrolone, HCG",
    methods: "Injectable, Oral, Topical, Sublingual, Pellet, Patch",
    desc: "The largest category. TRT, HRT, PCT — every hormone protocol from every major 503 pharmacy.",
  },
  {
    name: "Sexual Health",
    count: 237,
    compounds: 13,
    highlights: "Sildenafil (70), Tadalafil (63), PT-141 (18), Oxytocin (19), TriMix (19), QuadMix (11), Vardenafil (12)",
    methods: "Injectable, Oral, Sublingual, Topical",
    desc: "ED, libido, intimacy. From oral PDE5 inhibitors to injectable TriMix to peptide-based PT-141.",
  },
  {
    name: "Peptides & Longevity",
    count: 195,
    compounds: 49,
    highlights: "Sermorelin (34), GHK-Cu (23), BPC-157 (17), NAD+ (15), HGH (15), Rapamycin (10), Dihexa (8), + 17 proprietary blends",
    methods: "Injectable, Oral, Nasal, Topical, Troche, RDT",
    desc: "The deepest peptide catalog in the market. 17 proprietary blends no one else carries.",
  },
  {
    name: "Weight Loss",
    count: 169,
    compounds: 15,
    highlights: "Tirzepatide (58), Semaglutide (50+), Retatrutide (9), Phentermine (19), Tesofensine, Cagrilintide, AOD-9604",
    methods: "Injectable, Oral, Nasal, Sublingual",
    desc: "GLP-1s in every concentration and route. Plus next-gen compounds most platforms do not carry.",
  },
];

var SECONDARY = [
  { name: "Dermatology & Hair", count: 132, compounds: 18, highlights: "Minoxidil, Finasteride, Dutasteride, GHK-Cu, Tretinoin, Bimatoprost" },
  { name: "Vitamins & Nutrients", count: 130, compounds: 35, highlights: "Glutathione, B-Complex, NAD+, CoQ10, ALA, Amino blends" },
  { name: "Supplies", count: 117, compounds: 11, highlights: "Syringes, needles, bacteriostatic water, sharps, IV kits" },
  { name: "Thyroid", count: 115, compounds: 6, highlights: "Levothyroxine, Liothyronine, T3/T4 combo, Armour, NP Thyroid" },
  { name: "Neuro & Behavioral", count: 88, compounds: 14, highlights: "Ketamine, Naltrexone, Bupropion, Gabapentin, Synapsin" },
  { name: "Pain & Recovery", count: 34, compounds: 6, highlights: "BLT Cream, Ketoprofen, Lidocaine compounds" },
  { name: "Metabolic Support", count: 21, compounds: 10, highlights: "Metformin, Statins, Lisinopril, Telmisartan" },
];

export default function Block() {
  var subhead = useTextSetting({
    name: "subhead",
    label: "Subhead",
    initialValue: "224 compounds. 13 delivery methods. 2.5–3x partner margins. The full 503 compounding catalog — not a subset.",
  });
  var catalogLink = useNavigationSetting({
    name: "catalog-link",
    label: "Full Catalog Link",
    initialValue: {
      action: "OPEN_PAGE",
      destination: "/enterprise/pharmacy-list",
      openIn: "SELF",
    },
  });

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="container"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p
            style={{
              fontFamily: FB,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: PR,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            THE CATALOG
          </p>
          <h2
            style={{
              fontFamily: FB,
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0f0f0f",
              marginBottom: 12,
            }}
          >
            1,884 SKUs across 12 clinical{" "}
            <em
              style={{
                fontFamily: FH,
                fontStyle: "italic",
                fontWeight: 400,
                color: PR,
              }}
            >
              categories.
            </em>
          </h2>
          <p
            style={{
              fontFamily: FB,
              fontSize: "clamp(15px, 1.3vw, 17px)",
              fontWeight: 400,
              color: "#555",
              maxWidth: 640,
            }}
          >
            {subhead}
          </p>
        </div>

        {/* Primary Categories — 2×2 grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 20, marginBottom: 20 }}
        >
          {PRIMARY.map(function(cat, i) {
            return (
              <div
                key={i}
                style={{
                  padding: "clamp(28px, 3.5vw, 40px)",
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.06)",
                  backgroundColor: "#FAFAF8",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {/* Hero number + name */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span
                    style={{
                      fontFamily: FB,
                      fontSize: "clamp(48px, 6vw, 72px)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "#0f0f0f",
                      lineHeight: 1,
                    }}
                  >
                    {cat.count}
                  </span>
                  <span
                    style={{
                      fontFamily: FB,
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#999",
                    }}
                  >
                    SKUs
                  </span>
                </div>

                {/* Category name */}
                <h3
                  style={{
                    fontFamily: FB,
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "#111",
                  }}
                >
                  {cat.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: FB,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.55,
                    color: "#666",
                  }}
                >
                  {cat.desc}
                </p>

                {/* Compounds + Methods */}
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: FB,
                        fontSize: 10,
                        fontWeight: 700,
                        color: PR,
                        backgroundColor: PR + "0f",
                        padding: "3px 8px",
                        borderRadius: 4,
                        letterSpacing: "0.03em",
                        textTransform: "uppercase",
                        flexShrink: 0,
                      }}
                    >
                      {cat.compounds} compounds
                    </span>
                    <div
                      style={{
                        fontFamily: FB,
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#999",
                        lineHeight: 1.4,
                      }}
                    >
                      {cat.methods}
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: FB,
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: "#aaa",
                    }}
                  >
                    {cat.highlights}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Categories — compact grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 12, marginBottom: 48 }}
        >
          {SECONDARY.map(function(cat, i) {
            return (
              <div
                key={i}
                style={{
                  padding: "clamp(16px, 2vw, 24px)",
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.05)",
                  backgroundColor: "#FAFAF8",
                }}
              >
                <div
                  style={{
                    fontFamily: FB,
                    fontSize: "clamp(28px, 3.5vw, 36px)",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    color: "#111",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {cat.count}
                </div>
                <div
                  style={{
                    fontFamily: FB,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#333",
                    marginBottom: 6,
                  }}
                >
                  {cat.name}
                </div>
                <div
                  style={{
                    fontFamily: FB,
                    fontSize: 11,
                    fontWeight: 400,
                    color: "#bbb",
                    lineHeight: 1.4,
                  }}
                >
                  {cat.highlights}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Button
            asChild
            size="lg"
            className="text-white font-semibold px-10 py-6 text-sm rounded-full"
            style={{ backgroundColor: PR, border: "none" }}
          >
            <NavigationAction navigation={catalogLink}>
              View full pharmacy catalog →
            </NavigationAction>
          </Button>
          <p
            style={{
              fontFamily: FB,
              fontSize: 13,
              fontWeight: 400,
              color: "#999",
              textAlign: "center",
              maxWidth: 520,
              lineHeight: 1.55,
            }}
          >
            Enterprise partners choose which categories to activate. Start with peptides and weight loss. Add hormone therapy and sexual health when ready. The infrastructure supports all 12 categories from day one.
          </p>
        </div>
      </div>
    </div>
  );
}