
export default function Block() {
  const eyebrow = "PHYSICIAN-PRESCRIBED MOTS-C THERAPY";
  const headline = "Exercise in a Peptide";
  const subheadline = "MOTS-c activates your metabolic master switch — improving insulin sensitivity, preserving muscle, and mimicking exercise at the cellular level. Prescribed and delivered.";
  const ctaText = "Claim Free Evaluation";
  const ctaLink = {
      action: "OPEN_PAGE",
      destination: "/sign-up",
      openIn: "SELF",
    };
  const lifestyleImage = {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      alt: "Active lifestyle scene",
    };
  const productImage = {
      src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
      alt: "MOTS-c therapy vial",
    };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-16 md:py-24">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-1 md:order-1">
            <div className="relative pb-7">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={lifestyleImage.src}
                  alt={lifestyleImage.alt}
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "4.4%",
                  width: "45.6%",
                  height: "50.7%",
                }}
              >
                <img
                  src={productImage.src}
                  alt={productImage.alt}
                  className="w-full h-full"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center bottom",
                    filter: "drop-shadow(0 16px 32px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center order-2 md:order-2 space-y-6">
            <div className="space-y-4">
              <p
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: "rgba(36, 92, 58, 0.7)" }}
              >
                {eyebrow}
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{ color: "#1a4d2e" }}
              >
                {headline}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                {subheadline}
              </p>
            </div>
            <div className="pt-4">
              <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined}
                className="inline-flex items-center justify-center text-white font-semibold px-10 py-6 text-base rounded-md"
                style={{ backgroundColor: "#245C3A" }}
              >
                  {ctaText}
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
