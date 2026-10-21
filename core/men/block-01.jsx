import { useState, useEffect, useRef } from "react";

var GOALS = [
  { key: "fitness", word: "Fitness.", outcome: "Build the body you're working for.", href: "/men/fitness" },
  { key: "weight", word: "Weight Loss.", outcome: "Drop fat without losing muscle.", href: "/men/lose-weight" },
  { key: "performance", word: "Performance.", outcome: "Operate at your peak.", href: "/men/enhance-performance" },
  { key: "longevity", word: "Longevity.", outcome: "Engineer the next 40 years.", href: "/men/live-longer" },
  { key: "recovery", word: "Recovery.", outcome: "Train hard. Recover harder.", href: "/men/recover-faster" },
];

export default function Block() {
  var headlineStatic = "Your Solution For";
  var subhead = "Modern men's healthcare. Clear. Simple. Effective.";
  var ctaText = "Get Started";
  var ctaLink = { destination: "/men/assessment", openIn: "SELF" };
  var trustLine = "195 Protocols  |  10 Partner Pharmacies  |  503A Compliant";

  var heroImg = { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", alt: "Man" };
  var t1 = { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&q=80", alt: "Prometheus vial" };
  var t2 = { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&q=80", alt: "Tirzepatide vial" };
  var t3 = { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&q=80", alt: "Samson vial" };
  var t4 = { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&q=80", alt: "GLO vial" };
  var t5 = { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&q=80", alt: "KLOW vial" };
  var tImgs = [t1, t2, t3, t4, t5];

  var wordState = useState(0);
  var wordIdx = wordState[0]; var setWordIdx = wordState[1];

  useEffect(function() {
    var id = setInterval(function() { setWordIdx(function(i) { return (i + 1) % GOALS.length; }); }, 3200);
    return function() { clearInterval(id); };
  }, []);

  /* Floating product style — drop shadow + slight tilt */
  var floatStyle = function(size, rot) {
    return {
      width: size,
      height: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.18))",
      transform: "rotate(" + (rot || -3) + "deg)",
      transition: "transform 300ms ease",
    };
  };

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container py-12 md:py-20 lg:py-24">
        <div className="content" style={{ maxWidth: 994, margin: "0 auto" }}>

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
            <div>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(40px, 5.5vw, 65px)",
                fontWeight: 400, lineHeight: 1.1, color: "#16625F", marginBottom: 4,
              }}>
                {headlineStatic}
              </h2>
              <div style={{ height: "1.35em", overflow: "hidden", position: "relative", marginBottom: 24 }}>
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(40px, 5.5vw, 65px)",
                  fontWeight: 400,
                  transform: "translateY(" + (-wordIdx * 1.35) + "em)",
                  transition: "transform 700ms cubic-bezier(0.65, 0, 0.35, 1)",
                }}>
                  {GOALS.map(function(g) {
                    return <div key={g.key} style={{ height: "1.35em", lineHeight: "1.35em", color: "#37B8D3" }}>{g.word}</div>;
                  })}
                </div>
              </div>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 17, lineHeight: 1.6, color: "#555", marginBottom: 32, maxWidth: 420 }}>
                {subhead}
              </p>
              <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined} className="inline-flex items-center justify-center font-semibold px-8 py-5 text-base rounded-lg" style={{ backgroundColor: "#245C3A", color: "#fff" }}>{ctaText}</a>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 13, color: "#888", marginTop: 32, fontWeight: 500 }}>
                {trustLine}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img src={heroImg.src} alt={heroImg.alt} className="w-full h-auto object-cover" style={{ aspectRatio: "4/3" }} />
            </div>
          </div>

          {/* Goal tiles — 2 large + 3 small, product images FLOATING inside */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {GOALS.slice(0, 2).map(function(g, i) {
              return (
                <a key={g.key} href={g.href}>
                  <div
                    className="rounded-2xl cursor-pointer transition-all duration-200 h-full"
                    style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", position: "relative", overflow: "visible", padding: "28px 24px", minHeight: 140 }}
                    onMouseEnter={function(e) { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)"; var img = e.currentTarget.querySelector("img"); if(img) img.style.transform = "rotate(-6deg) translateY(-4px)"; }}
                    onMouseLeave={function(e) { e.currentTarget.style.boxShadow = "none"; var img = e.currentTarget.querySelector("img"); if(img) img.style.transform = "rotate(-3deg)"; }}
                  >
                    <div style={{ maxWidth: "55%" }}>
                      <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 500, color: "#16625F", marginBottom: 6 }}>
                        {g.word.replace(".", "")}
                      </p>
                      <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 14, color: "#888", lineHeight: 1.5 }}>
                        {g.outcome}
                      </p>
                    </div>
                    <img
                      src={tImgs[i] ? tImgs[i].src : ""}
                      alt={tImgs[i] ? tImgs[i].alt : ""}
                      style={Object.assign({}, floatStyle(90, -3), { position: "absolute", right: 24, top: "50%", marginTop: -55 })}
                    />
                    <span style={{ position: "absolute", right: 16, bottom: 16, fontSize: 18, color: "#ccc" }}>›</span>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {GOALS.slice(2).map(function(g, i) {
              return (
                <a key={g.key} href={g.href}>
                  <div
                    className="rounded-2xl cursor-pointer transition-all duration-200 h-full"
                    style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", position: "relative", padding: "20px 20px 16px", textAlign: "center" }}
                    onMouseEnter={function(e) { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)"; var img = e.currentTarget.querySelector("img"); if(img) img.style.transform = "rotate(-6deg) translateY(-6px)"; }}
                    onMouseLeave={function(e) { e.currentTarget.style.boxShadow = "none"; var img = e.currentTarget.querySelector("img"); if(img) img.style.transform = "rotate(-3deg)"; }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 16, fontWeight: 500, color: "#16625F", textAlign: "left" }}>
                        {g.word.replace(".", "")}
                      </p>
                      <span style={{ fontSize: 18, color: "#ccc" }}>›</span>
                    </div>
                    <div className="flex justify-center py-2">
                      <img
                        src={tImgs[i + 2] ? tImgs[i + 2].src : ""}
                        alt={tImgs[i + 2] ? tImgs[i + 2].alt : ""}
                        style={floatStyle(80, -5)}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
