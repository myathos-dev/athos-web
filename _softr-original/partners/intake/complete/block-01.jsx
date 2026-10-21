import { useTextSetting, useLongTextSetting, useImageSetting, useNavigationSetting } from "@/lib/editable-settings";
import { NavigationAction } from "@/components/navigation-action";
import { Button } from "@/components/ui/button";

export default function Block() {
  const eyebrow = useTextSetting({
    name: "eyebrow",
    label: "Eyebrow text",
    initialValue: "ONBOARDING COMPLETE! ",
  });
  const headline = useTextSetting({
    name: "headline",
    label: "Headline",
    initialValue: "Please allow up to 48 hours for review.",
  });
  const description = useLongTextSetting({
    name: "description",
    label: "Description",
    initialValue: "We will review your information and have our team prepare your promo code. Please check your email for updates. Welcome to Athos.",
  });
  const primaryCtaText = useTextSetting({
    name: "primary-cta-text",
    label: "Primary CTA text",
    initialValue: "Learn More",
  });
  const primaryCtaLink = useNavigationSetting({
    name: "primary-cta-link",
    label: "Primary CTA link",
    initialValue: {
      action: "OPEN_PAGE",
      destination: "/",
      openIn: "SELF",
    },
  });
  const lifestyleImage = useImageSetting({
    name: "lifestyle-image",
    label: "Lifestyle image",
    initialValue: {
      src: "https://replicate.delivery/xezq/3glqwnqFSzLIBZIsPWohUAIG7w1yFXUK0Ynfgsf5bfMUibusA/out-0.webp",
      alt: "Modern home interior with natural light",
    },
  });

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
                <Button
                  asChild
                  size="lg"
                  className="text-white font-semibold px-10 py-6 text-base rounded-md"
                  style={{ backgroundColor: "#245C3A" }}
                >
                  <NavigationAction navigation={primaryCtaLink}>
                    {primaryCtaText}
                  </NavigationAction>
                </Button>
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
