import { useTextSetting, useImageSetting } from "@/lib/editable-settings";
import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useNavigationSetting } from "@/lib/editable-settings";

export default function Block() {
  const headline = useTextSetting({
    name: "headline",
    label: "Headline",
    initialValue: "Ready to get started?",
  });

  const bannerText = useTextSetting({
    name: "banner-text",
    label: "Banner Text",
    initialValue:
      "Millions of people are already injecting peptides they bought from unregulated \"research chemical\" sites with zero medical oversight, zero purity verification, and zero dosing guidance — and no branded, doctor-backed platform exists to give them a legitimate alternative.",
  });

  const vialImage = useImageSetting({
    name: "vial-image",
    label: "Vial Image",
    initialValue: {
      src: "https://replicate.delivery/xezq/zVmDRGbSBFbuBdd6VzQEARA5nJAi0ulGKDK65px4SFZaF3lF/out-0.webp",
      alt: "Semaglutide vial",
    },
  });

  const primaryButtonText = useTextSetting({
    name: "primary-button-text",
    label: "Primary button text",
    initialValue: "Get Started",
  });
  const primaryButtonLink = useNavigationSetting({
    name: "primary-button-link",
    label: "Primary button link",
    initialValue: {
      action: "OPEN_PAGE",
      destination: "/sign-up",
      openIn: "SELF",
    },
  });

  return (
    <div
      className="w-full py-6 md:py-8"
      style={{ backgroundColor: "#f5f2ed" }}
    >
      <div className="container">
        <div className="content">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ backgroundColor: "#16625f" }}
          >
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Left column — Text + Button */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                  {headline && (
                    <h2
                      className="text-2xl md:text-3xl tracking-tight font-heading"
                      style={{ color: "#FFFFFF" }}
                    >
                      {headline}
                    </h2>
                  )}

                  {bannerText && (
                    <p
                      className="font-sans m-0 max-w-xl"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                        color: "rgba(255, 255, 255, 0.75)",
                        fontWeight: 400,
                      }}
                    >
                      {bannerText}
                    </p>
                  )}

                  <div className="mt-2">
                    <Button
                      asChild
                      size="lg"
                      className="font-medium"
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "#16625f",
                      }}
                    >
                      <NavigationAction navigation={primaryButtonLink}>
                        {primaryButtonText}
                      </NavigationAction>
                    </Button>
                  </div>
                </div>

                {/* Right column — Vial */}
                <div
                  className="flex-shrink-0 hidden md:block"
                  style={{
                    position: "relative",
                    marginTop: "-24px",
                    marginBottom: "-12px",
                  }}
                >
                  <img
                    src={vialImage.src}
                    alt={vialImage.alt}
                    style={{
                      width: "180px",
                      height: "auto",
                      objectFit: "contain",
                      transform: "rotate(-6deg)",
                      filter:
                        "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
