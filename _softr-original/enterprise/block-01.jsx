import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useTextSetting, useImageSetting, useNavigationSetting } from "@/lib/editable-settings";

const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";
const PR = "#245C3A";

const STATS = [
  { eyebrow: "Patient visits processed", value: "3M+" },
  { eyebrow: "Compounded SKUs", value: "1,884" },
  { eyebrow: "Clinical categories", value: "12" },
  { eyebrow: "Delivery formats", value: "13" },
];

const CHECKS = [
  "No medical license required",
  "No inventory",
  "No pharmacy contracts",
  "Live in days",
];

const ROTATING_WORDS = [
  "strangers.",
  "research labs.",
  "influencers.",
  "WhatsApp groups.",
  "overseas suppliers.",
  "random websites.",
];

export default function Block() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFading(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);
  const logo = useImageSetting({
    name: "logo",
    label: "Brand Logo",
    initialValue: {
      src: "https://assets.softr-files.com/applications/9da2c9c4-100f-4a3e-bd8f-4c76ad65641a/assets/c62f37e0-e84b-4e99-8a52-6e2e1ebb3e27.png",
      alt: "Athos",
    },
  });
  const pageLabel = useTextSetting({
    name: "page-label",
    label: "Page Label",
    initialValue: "Enterprise",
  });
  const subheadline = useTextSetting({
    name: "subheadline",
    label: "Subheadline",
    initialValue:
      "Peptides, GLP-1s, hormones, sexual health, dermatology, thyroid — 12 clinical categories. 2.5–3x margins. Physician-supervised. Pharmacy-fulfilled. Launched under your brand in 72 hours, or under ours the same day.",
  });
  const cta1Text = useTextSetting({
    name: "cta1-text",
    label: "Primary CTA Text",
    initialValue: "Apply for Enterprise",
  });
  const cta1Link = useNavigationSetting({
    name: "cta1-link",
    label: "Primary CTA Link",
    initialValue: {
      action: "OPEN_PAGE",
      destination: "/enterprise/signup",
      openIn: "SELF",
    },
  });
  const cta2Text = useTextSetting({
    name: "cta2-text",
    label: "Secondary CTA Text",
    initialValue: "See How It Works",
  });
  const cta2Link = useNavigationSetting({
    name: "cta2-link",
    label: "Secondary CTA Link",
    initialValue: {
      action: "OPEN_PAGE",
      destination: "/enterprise",
      openIn: "SELF",
    },
  });
  const cta3Link = useNavigationSetting({
    name: "cta3-link",
    label: "Clinic Link",
    initialValue: {
      action: "OPEN_PAGE",
      destination: "/clinic",
      openIn: "SELF",
    },
  });

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* ── Hero ── */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(80px, 12vw, 144px)",
          paddingBottom: "clamp(48px, 8vw, 80px)",
        }}
      >
        <div style={{ maxWidth: 1100 }}>
          {/* Logo | Page Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ height: 24, width: "auto" }}
            />
            <div
              style={{
                width: 1,
                height: 20,
                backgroundColor: "rgba(0,0,0,0.15)",
              }}
            />
            <span
              style={{
                fontFamily: FB,
                fontSize: 14,
                fontWeight: 500,
                color: "#6b7280",
                letterSpacing: "0.01em",
              }}
            >
              {pageLabel}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: FB,
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "#0f0f0f",
              marginBottom: 36,
              maxWidth: 1000,
            }}
          >
            Your patients go home and
            <br />
            order peptides from{" "}
            <em
              style={{
                fontFamily: FH,
                fontStyle: "italic",
                fontWeight: 400,
                color: PR,
                display: "inline-block",
                transition: "opacity 400ms ease, transform 400ms ease",
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(8px)" : "translateY(0)",
              }}
            >
              {ROTATING_WORDS[wordIdx]}
            </em>
            <br />
            That revenue belongs to you.{" "}
            <em
              style={{
                fontFamily: FH,
                fontStyle: "italic",
                fontWeight: 400,
                color: PR,
              }}
            >
              Capture it.
            </em>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: FB,
              fontSize: "clamp(15px, 1.4vw, 17px)",
              fontWeight: 400,
              lineHeight: 1.65,
              color: "#555",
              maxWidth: 640,
              marginBottom: 36,
            }}
          >
            {subheadline}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Button
              asChild
              size="lg"
              className="text-white font-semibold px-8 py-6 text-sm rounded-full"
              style={{ backgroundColor: PR, border: "none" }}
            >
              <NavigationAction navigation={cta1Link}>
                {cta1Text} →
              </NavigationAction>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold px-8 py-6 text-sm rounded-full"
              style={{
                backgroundColor: "transparent",
                color: "#333",
                border: "1px solid rgba(0,0,0,0.15)",
              }}
            >
              <NavigationAction navigation={cta2Link}>
                {cta2Text}
              </NavigationAction>
            </Button>
            <NavigationAction navigation={cta3Link} style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "#9ca3af", textDecoration: "underline", textUnderlineOffset: 3, cursor: "pointer", padding: "0 8px" }}>
              Looking for Clinic?
            </NavigationAction>
          </div>

          {/* Objection Strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px" }}>
            {CHECKS.map((check, i) => (
              <span
                key={i}
                style={{
                  fontFamily: FB,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#9ca3af",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <span style={{ color: PR, fontWeight: 700 }}>✓</span>
                {check}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div className="container" style={{ paddingBottom: "clamp(48px, 8vw, 96px)" }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.08)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "clamp(20px, 3vw, 28px)",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(0,0,0,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: FB,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#999",
                  marginBottom: 8,
                }}
              >
                {stat.eyebrow}
              </div>
              <div
                style={{
                  fontFamily: FB,
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#0f0f0f",
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}