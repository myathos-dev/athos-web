import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useTextSetting, useImageSetting, useNavigationSetting } from "@/lib/editable-settings";

export default function Block() {
  const eyebrow = useTextSetting({
    name: "eyebrow",
    label: "Eyebrow Text",
    initialValue: "PHYSICIAN-PRESCRIBED BPC-157 THERAPY",
  });
  const headline = useTextSetting({
    name: "headline",
    label: "Headline",
    initialValue: "Your Body's Repair Signal",
  });
  const subheadline = useTextSetting({
    name: "subheadline",
    label: "Subheadline",
    initialValue: "BPC-157 accelerates tendon, ligament, and gut repair by upregulating new blood vessel formation — available as injectable, oral, or nasal spray. Prescribed and delivered.",
  });
  const ctaText = useTextSetting({
    name: "cta-text",
    label: "CTA Button Text",
    initialValue: "Claim Free Evaluation",
  });
  const ctaLink = useNavigationSetting({
    name: "cta-link",
    label: "CTA Link",
    initialValue: {
      action: "OPEN_PAGE",
      destination: "/sign-up",
      openIn: "SELF",
    },
  });
  const lifestyleImage = useImageSetting({
    name: "lifestyle-image",
    label: "Lifestyle Photo",
    initialValue: {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      alt: "Recovery and wellness lifestyle scene",
    },
  });
  const productImage = useImageSetting({
    name: "product-image",
    label: "Product Composite",
    initialValue: {
      src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
      alt: "BPC-157 therapy vial",
    },
  });

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
              <Button
                asChild
                size="lg"
                className="text-white font-semibold px-10 py-6 text-base rounded-md"
                style={{ backgroundColor: "#245C3A" }}
              >
                <NavigationAction navigation={ctaLink}>
                  {ctaText}
                </NavigationAction>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
