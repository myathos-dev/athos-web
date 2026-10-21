
export default function Block() {
  const eyebrow = "ONBOARDING COMPLETE! ";
  const headline = "Please allow up to 48 hours for review.";
  const description = "We will review your information and have our team prepare your promo code. Please check your email for updates. Welcome to Athos.";
  const primaryCtaText = "Learn More";
  const primaryCtaLink = {
      action: "OPEN_PAGE",
      destination: "/",
      openIn: "SELF",
    };
  const lifestyleImage = {
      src: "https://replicate.delivery/xezq/3glqwnqFSzLIBZIsPWohUAIG7w1yFXUK0Ynfgsf5bfMUibusA/out-0.webp",
      alt: "Modern home interior with natural light",
    };

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container py-16 md:py-24 lg:py-28">
        <div className="content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              {eyebrow && (
                <p
                  className="text-sm font-medium tracking-wider uppercase"
                  style={{ color: "rgba(36, 92, 58, 0.7)" }}
                >
                  {eyebrow}
                </p>
              )}
              {headline && (
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl leading-tight"
                  style={{ color: "#1a4d2e" }}
                >
                  {headline}
                </h1>
              )}
              {description && (
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {description}
                </p>
              )}
              <div className="pt-4">
                <a href={primaryCtaLink.destination} target={primaryCtaLink.openIn === "NEW_TAB" ? "_blank" : undefined}
                  className="inline-flex items-center justify-center text-white font-semibold px-10 py-6 text-base rounded-md"
                  style={{ backgroundColor: "#245C3A" }}
                >
                    {primaryCtaText}
                  </a>
              </div>
            </div>

            {/* Right Column: Images */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={lifestyleImage.src}
                  alt={lifestyleImage.alt}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
