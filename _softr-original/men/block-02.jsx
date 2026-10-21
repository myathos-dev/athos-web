import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useTextSetting, useImageSetting, useNavigationSetting } from "@/lib/editable-settings";

var PRODUCTS = [
  { id: "prometheus", name: "Prometheus", tag: "Base GH Stack", desc: "CJC-1295 + Ipamorelin", msrp: 160, micro: 80 },
  { id: "apex", name: "APEX", tag: "Advanced GH", desc: "Tesamorelin + CJC/Ipa + BPC-157", msrp: 190, micro: 95 },
  { id: "atlas", name: "Atlas", tag: "Peak GH + IGF", desc: "CJC/Ipa + Tesamorelin + IGF-LR3", msrp: 199, micro: 100 },
  { id: "sermorelin", name: "Sermorelin/GHRP-2", tag: "Oral GH", desc: "Sermorelin/GHRP-2 Troche", msrp: 165, micro: 83 },
];

var CALLOUTS = ["Lean mass", "IGF-1 axis", "Recovery speed"];

export default function Block() {
  var headline = useTextSetting({ name: "headline", label: "Headline", initialValue: "Fitness" });
  var subhead = useTextSetting({ name: "subhead", label: "Subhead", initialValue: "Build muscle, optimize body composition, and recover faster with science-backed GH secretagogue protocols." });
  var heroNumber = useTextSetting({ name: "hero-number", label: "Hero Number", initialValue: "10x" });
  var heroContext = useTextSetting({ name: "hero-context", label: "Hero Context", initialValue: "GH pulse increase per dose" });
  var citation = useTextSetting({ name: "citation", label: "Citation", initialValue: "Teichman et al., JCEM 2006" });
  var solTitle = useTextSetting({ name: "sol-title", label: "Solutions Title", initialValue: "Fitness Solutions" });
  var ctaText = useTextSetting({ name: "cta-text", label: "CTA Text", initialValue: "Start Fitness Protocol" });
  var ctaLink = useNavigationSetting({ name: "cta-link", label: "CTA Link", initialValue: { destination: "/shop?goal=fitness", openIn: "SELF" } });

  var manImg = useImageSetting({ name: "man-image", label: "Background Person", initialValue: { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=60", alt: "Man training" } });
  var heroProduct = useImageSetting({ name: "hero-product", label: "Hero Product (floating)", initialValue: { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80", alt: "Prometheus vial" } });
  var solProduct = useImageSetting({ name: "sol-product", label: "Solutions Product", initialValue: { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&q=80", alt: "Product showcase" } });

  var selState = useState(null);
  var sel = selState[0]; var setSel = selState[1];

  useEffect(function() {
    var id = "athos-anim-css";
    if (!document.getElementById(id)) {
      var s = document.createElement("style");
      s.id = id;
      s.textContent = "@keyframes athos-float{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-15px) rotate(-5deg)}}.athos-float{animation:athos-float 3s ease-in-out infinite}@keyframes athos-marquee{0%{transform:translate3d(-60px,0,0)}100%{transform:translate3d(60px,0,0)}}.athos-marquee{animation:athos-marquee 16s linear infinite alternate}";
      document.head.appendChild(s);
    }
    return function() { var el = document.getElementById(id); if (el) el.remove(); };
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container py-8 md:py-12">
        <div className="content" style={{ maxWidth: 994, margin: "0 auto" }}>

          <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(160deg, #1a8a7d 0%, #16625F 40%, #245C3A 100%)", position: "relative" }}>

            {/* Giant bg word */}
            <div style={{ position: "absolute", top: -10, left: 0, right: 0, textAlign: "center", pointerEvents: "none", userSelect: "none", overflow: "hidden", lineHeight: 0.85, zIndex: 0 }}>
              <span className="athos-marquee" style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(100px, 16vw, 200px)",
                fontWeight: 400,
                color: "transparent",
                WebkitTextStroke: "1px rgba(249,248,243,0.06)",
              }}>
                Fitness
              </span>
            </div>

            {/* Hero: text left, floating product + man right */}
            <div className="relative" style={{ zIndex: 1 }}>
              <div className="grid md:grid-cols-2 gap-0" style={{ minHeight: 480 }}>

                {/* Left: text */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 400, lineHeight: 1.05, color: "#F9F8F3", marginBottom: 16 }}>
                    {headline}
                  </h2>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 15, lineHeight: 1.65, color: "rgba(249,248,243,0.65)", maxWidth: 340, marginBottom: 32 }}>
                    {subhead}
                  </p>
                  <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(48px, 7vw, 72px)", lineHeight: 0.9, fontWeight: 400, color: "#37B8D3", fontVariantNumeric: "tabular-nums" }}>
                    {heroNumber}
                  </p>
                  <p className="mt-2" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 13, color: "rgba(249,248,243,0.45)" }}>
                    {heroContext}
                  </p>
                </div>

                {/* Right: man bg + floating product center */}
                <div className="relative hidden md:flex items-center justify-center" style={{ overflow: "hidden" }}>
                  {/* Man photo — background layer */}
                  <img src={manImg.src} alt={manImg.alt} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.35, mixBlendMode: "luminosity" }} />

                  {/* Floating product — hero center */}
                  <div className="relative" style={{ zIndex: 3 }}>
                    <img
                      className="athos-float"
                      src={heroProduct.src}
                      alt={heroProduct.alt}
                      style={{
                        width: 160,
                        height: "auto",
                        objectFit: "contain",
                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
                      }}
                    />
                    {/* Glow behind product */}
                    <div style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 200, height: 200,
                      background: "radial-gradient(circle, rgba(55,184,211,0.25) 0%, transparent 70%)",
                      borderRadius: "50%",
                      zIndex: -1,
                    }} />
                  </div>

                  {/* Dotted connector lines — SVG overlay */}
                  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 3 }} viewBox="0 0 400 400" preserveAspectRatio="none">
                    <path d="M200 180 Q320 120 360 80" fill="none" stroke="rgba(249,248,243,0.15)" strokeWidth="1" strokeDasharray="1 3" strokeLinecap="round" />
                    <path d="M200 200 Q330 200 380 210" fill="none" stroke="rgba(249,248,243,0.15)" strokeWidth="1" strokeDasharray="1 3" strokeLinecap="round" />
                    <path d="M200 220 Q120 300 50 330" fill="none" stroke="rgba(249,248,243,0.15)" strokeWidth="1" strokeDasharray="1 3" strokeLinecap="round" />
                  </svg>

                  {/* Callout labels floating around product */}
                  {CALLOUTS.map(function(label, i) {
                    var positions = [
                      { top: "18%", right: "8%", textAlign: "right" },
                      { top: "52%", right: "4%", textAlign: "right" },
                      { bottom: "18%", left: "8%", textAlign: "left" },
                    ];
                    return (
                      <span
                        key={i}
                        style={Object.assign({
                          position: "absolute",
                          fontFamily: "'DM Sans', system-ui, sans-serif",
                          fontSize: 12,
                          color: "rgba(249,248,243,0.5)",
                          fontWeight: 500,
                          letterSpacing: "0.03em",
                          zIndex: 4,
                        }, positions[i])}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Solutions card */}
            <div className="relative mx-6 md:mx-10 mb-8 rounded-2xl" style={{ backgroundColor: "rgba(249,248,243,0.1)", backdropFilter: "blur(8px)", zIndex: 2 }}>

              {/* Solutions hero: centered product with callouts */}
              <div className="relative py-8 flex flex-col items-center" style={{ borderBottom: "1px solid rgba(249,248,243,0.08)" }}>
                <h3 className="mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 20, fontWeight: 600, color: "#F9F8F3" }}>
                  {solTitle}
                </h3>
                <div className="relative">
                  <img
                    className="athos-float"
                    src={solProduct.src}
                    alt={solProduct.alt}
                    style={{
                      width: 120,
                      height: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.25))",
                    }}
                  />
                  {/* Mini callouts around sol product */}
                  <span style={{ position: "absolute", top: "10%", right: -120, fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 11, color: "rgba(249,248,243,0.45)", whiteSpace: "nowrap" }}>More gains, less fat →</span>
                  <span style={{ position: "absolute", bottom: "20%", right: -140, fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 11, color: "rgba(249,248,243,0.45)", whiteSpace: "nowrap" }}>Peak drive + performance →</span>
                  <span style={{ position: "absolute", top: "30%", left: -130, fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 11, color: "rgba(249,248,243,0.45)", whiteSpace: "nowrap" }}>← Feel like your old self</span>
                </div>
              </div>

              {/* Product grid */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {PRODUCTS.map(function(p) {
                    var active = sel === p.id;
                    return (
                      <div
                        key={p.id}
                        onClick={function() { setSel(active ? null : p.id); }}
                        className="rounded-xl p-4 cursor-pointer transition-all duration-150"
                        style={{
                          backgroundColor: active ? "rgba(55,184,211,0.12)" : "rgba(249,248,243,0.06)",
                          border: active ? "2px solid #37B8D3" : "1px solid rgba(249,248,243,0.08)",
                        }}
                      >
                        <p className="mb-1" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 14, fontWeight: 600, color: "#F9F8F3" }}>{p.name}</p>
                        <p className="mb-3" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 11, color: "rgba(249,248,243,0.45)" }}>{p.tag}</p>
                        <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: "#37B8D3", fontWeight: 400 }}>
                          ${p.msrp}<span style={{ fontSize: 11, opacity: 0.5, fontFamily: "'DM Sans', system-ui, sans-serif" }}>/mo</span>
                        </p>
                        {active && (
                          <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(249,248,243,0.08)" }}>
                            <p className="text-xs" style={{ color: "rgba(249,248,243,0.55)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{p.desc}</p>
                            {p.micro && <p className="text-xs mt-1" style={{ color: "#37B8D3" }}>Microdose: ${p.micro}/mo</p>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 11, color: "rgba(249,248,243,0.3)" }}>{citation}</p>
                  <Button asChild className="font-semibold px-6 py-3 text-sm rounded-lg" style={{ backgroundColor: "#37B8D3", color: "#16625F" }}>
                    <NavigationAction navigation={ctaLink}>{ctaText} →</NavigationAction>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}