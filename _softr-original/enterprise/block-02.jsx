import { useState } from "react";
import { useTextSetting } from "@/lib/editable-settings";

const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const PR = "#245C3A";

const MARQUEE_ITEMS = [
  "1,884 compounded SKUs",
  "224 unique compounds",
  "12 clinical categories",
  "Licensed physicians — all 50 states",
  "2.5–3x partner margins",
  "503A/503B network",
  "3M+ patient visits processed",
  "52-minute avg response",
  "Hormone therapy · Sexual health · Peptides · Weight loss",
  "Dermatology · Thyroid · Neuro · Vitamins",
  "LegitScript corporate partner",
  "Stripe-verified processing",
];

const TABS = [
  { id: "brand", label: "Your brand. Your revenue." },
  { id: "built", label: "Everything is built." },
  { id: "catalog", label: "The catalog." },
];

const CATEGORIES = [
  { name: "Hormone Therapy", count: 619 },
  { name: "Sexual Health", count: 237 },
  { name: "Peptides & Longevity", count: 195 },
  { name: "Weight Loss", count: 169 },
  { name: "Dermatology & Hair", count: 132 },
  { name: "Vitamins & Nutrients", count: 130 },
  { name: "Supplies", count: 117 },
  { name: "Thyroid", count: 115 },
  { name: "Neuro & Behavioral", count: 88 },
  { name: "Pain & Recovery", count: 34 },
  { name: "Metabolic Support", count: 21 },
  { name: "Other", count: 27 },
];

/* ── Mockup Components ── */

function PortalMockup() {
  return (
    <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", backgroundColor: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", backgroundColor: "#f9f9f9", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ff5f57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#28ca41" }} />
        </div>
        <div style={{ flex: 1, backgroundColor: "#f0f0f0", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontFamily: FB, color: "#999", fontWeight: 500 }}>yourbrand.com/portal</div>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: FB, fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 2 }}>YourBrand Wellness</div>
            <div style={{ fontFamily: FB, fontSize: 11, color: "#999" }}>Patient Directory</div>
          </div>
          <div style={{ fontFamily: FB, fontSize: 10, fontWeight: 700, color: PR, backgroundColor: `${PR}12`, padding: "3px 10px", borderRadius: 9999 }}>YOUR BRAND</div>
        </div>
        {[
          { name: "Jane D.", product: "Semaglutide 2.5mg", status: "Approved", color: PR },
          { name: "Michael R.", product: "Testosterone 200mg", status: "Shipped", color: "#555" },
          { name: "Sarah K.", product: "NAD+ 100mg", status: "Pending", color: "#d97706" },
          { name: "Alex T.", product: "BPC-157 5mg", status: "Approved", color: PR },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            <div>
              <div style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#333" }}>{row.name}</div>
              <div style={{ fontFamily: FB, fontSize: 11, color: "#aaa" }}>{row.product}</div>
            </div>
            <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 700, color: row.color }}>{row.status}</span>
          </div>
        ))}
        <div style={{ marginTop: 16, padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(36,92,58,0.04)", border: "1px solid rgba(36,92,58,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: FB, fontSize: 11, color: "#999" }}>Revenue MTD</span>
            <span style={{ fontFamily: FB, fontSize: 13, fontWeight: 700, color: PR }}>▲ 2.8x margin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeleformMockup() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {/* Dark screen */}
      <div style={{ flex: 1, borderRadius: 12, overflow: "hidden", backgroundColor: "#0a0a0a", padding: 20, minHeight: 260 }}>
        <div style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>WELCOME</div>
        <div style={{ fontFamily: FH, fontSize: 20, color: "#fff", lineHeight: 1.2, marginBottom: 8 }}>Hi Sarah,</div>
        <div style={{ fontFamily: FB, fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 20 }}>Let's find the right treatment for your goals.</div>
        <div style={{ width: "100%", height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.08)" }}>
          <div style={{ width: "15%", height: "100%", borderRadius: 3, background: `linear-gradient(90deg, ${PR}, #3DBDD1)` }} />
        </div>
      </div>
      {/* Light screen */}
      <div style={{ flex: 1, borderRadius: 12, overflow: "hidden", backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.08)", padding: 20, minHeight: 260 }}>
        <div style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: PR, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>BMI CALCULATION</div>
        <div style={{ fontFamily: FH, fontSize: 18, color: "#111", marginBottom: 12 }}>Your profile</div>
        <div style={{ marginBottom: 12 }}>
          {["Height", "Weight"].map((label, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <span style={{ fontFamily: FB, fontSize: 12, color: "#888" }}>{label}</span>
              <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#333" }}>{i === 0 ? "5'8\"" : "214 lbs"}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <div style={{ fontFamily: FB, fontSize: 36, fontWeight: 800, color: PR }}>32.5</div>
          <div style={{ fontFamily: FB, fontSize: 11, color: "#999" }}>Your BMI</div>
        </div>
        <div style={{ marginTop: 12, height: 6, borderRadius: 3, backgroundColor: "rgba(36,92,58,0.08)" }}>
          <div style={{ width: "55%", height: "100%", borderRadius: 3, backgroundColor: PR }} />
        </div>
      </div>
    </div>
  );
}

function CatalogGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
      {CATEGORIES.map((cat, i) => (
        <div
          key={i}
          style={{
            padding: "14px 12px",
            borderRadius: 8,
            backgroundColor: i < 4 ? "rgba(36,92,58,0.05)" : "rgba(0,0,0,0.02)",
            border: i < 4 ? "1px solid rgba(36,92,58,0.12)" : "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ fontFamily: FB, fontSize: 20, fontWeight: 800, color: i < 4 ? PR : "#333", letterSpacing: "-0.03em", marginBottom: 2 }}>{cat.count}</div>
          <div style={{ fontFamily: FB, fontSize: 10, fontWeight: 500, color: "#888", lineHeight: 1.3 }}>{cat.name}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Tab Content Data ── */

const TAB_CONTENT = {
  brand: {
    eyebrow: "OWN THE BRAND. KEEP THE MARGIN.",
    headline: "Stop sending patients to someone else's checkout.",
    body: "Every patient you refer to another telehealth company builds their brand, their data, their valuation. With Athos enterprise, the brand is yours. The margin is yours. The patient relationship is yours. 100–200% margin per order vs 10–15% affiliate commission.",
    Mockup: PortalMockup,
  },
  built: {
    eyebrow: "DONE FOR YOU.",
    headline: "Physicians. Pharmacy. Compliance. Intake. Fulfillment. Running.",
    body: "The infrastructure that takes 12–18 months and $500K+ to build is already live. 3M+ patient visits processed. 200+ healthcare partners operating on it right now. Including proprietary teleforms — multi-step clinical intake flows designed like an Apple product, not a medical form. BMI calculation, dose metering, personalized goal charts, and direct checkout.",
    Mockup: TeleformMockup,
  },
  catalog: {
    eyebrow: "THE CATALOG.",
    headline: "Weight loss to hormones to dermatology — every clinical category, covered.",
    body: "This is not a peptide-only platform. The full 503 compounding catalog: 619 hormone therapy SKUs, 237 sexual health, 195 peptides and longevity, 169 weight loss, 132 dermatology, 130 vitamins, 115 thyroid, 88 neuro, and more. Your patients never need to go anywhere else — for anything.",
    Mockup: CatalogGrid,
  },
};

/* ── Main Component ── */

export default function Block() {
  const [activeTab, setActiveTab] = useState("brand");

  const sectionEyebrow = useTextSetting({
    name: "section-eyebrow",
    label: "Section Eyebrow",
    initialValue: "WHY ATHOS ENTERPRISE",
  });

  const content = TAB_CONTENT[activeTab];
  const ActiveMockup = content.Mockup;

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <style>{`
        @keyframes athos-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      <div className="container" style={{ paddingTop: "clamp(48px, 8vw, 96px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}>

        {/* Section Eyebrow */}
        <p
          style={{
            fontFamily: FB,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#999",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          {sectionEyebrow}
        </p>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            marginBottom: 48,
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: FB,
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#111" : "#999",
                  padding: "14px 28px",
                  background: "none",
                  border: "none",
                  borderBottom: isActive ? `2px solid ${PR}` : "2px solid transparent",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  marginBottom: -1,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left — Text */}
          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                fontFamily: FB,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: PR,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {content.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: FB,
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#0f0f0f",
                marginBottom: 20,
                maxWidth: 480,
              }}
            >
              {content.headline}
            </h2>
            <p
              style={{
                fontFamily: FB,
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.65,
                color: "#555",
                maxWidth: 480,
              }}
            >
              {content.body}
            </p>
          </div>

          {/* Right — Mockup */}
          <div>
            <ActiveMockup />
          </div>
        </div>
      </div>

      {/* ── Marquee Ticker ── */}
      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "athos-marquee 45s linear infinite",
          }}
        >
          {[0, 1].map((dup) => (
            <div key={dup} style={{ display: "flex" }}>
              {MARQUEE_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "clamp(16px, 2.5vw, 24px) clamp(24px, 3.5vw, 48px)",
                    fontFamily: FB,
                    fontSize: "clamp(12px, 1.2vw, 14px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "#888",
                    whiteSpace: "nowrap",
                    borderRight: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}