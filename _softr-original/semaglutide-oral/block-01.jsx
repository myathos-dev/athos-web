import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useTextSetting, useImageSetting, useNavigationSetting } from "@/lib/editable-settings";

export default function Block() {
  const eyebrow = useTextSetting({
    name: "eyebrow",
    label: "Eyebrow Text",
    initialValue: "ORAL SEMAGLUTIDE PRESCRIBED ONLINE",
  });
  const headline = useTextSetting({
    name: "headline",
    label: "Headline",
    initialValue: "Semaglutide Without the Needle",
  });
  const subheadline = useTextSetting({
    name: "subheadline",
    label: "Subheadline",
    initialValue: "Compounded semaglutide troches and capsules — prescribed by a licensed provider, dosed to your body, and delivered to your door.",
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
      alt: "Natural lifestyle scene",
    },
  });
  const productImage = useImageSetting({
    name: "product-image",
    label: "Product Composite",
    initialValue: {
      src: "https://assets.softr-files.com/applications/9da2c9c4-100f-4a3e-bd8f-4c76ad65641a/assets/b7c08fa8-79a2-4119-a96d-563b2fcbbae1.png",
      alt: "Semaglutide troches and capsules",
    },
  });

  return (
    <div className="bg-white">
      <div className="container py-16 md:py-24">
        <div className="content grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-1 md:order-1 pb-7">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={lifestyleImage.src}
                alt={lifestyleImage.alt}
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            {/* Product Overlay */}
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
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 16px 32px rgba(0, 0, 0, 0.3))",
                }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center order-2 md:order-2 space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
                {eyebrow}
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl leading-tight max-w-md"
                style={{ color: "#1a4d2e" }}
              >
                {headline}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                {subheadline}
              </p>
            </div>
            <div className="pt-2">
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
