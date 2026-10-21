import { useTextSetting, useLongTextSetting, useImageSetting, useArraySetting } from "@/lib/editable-settings";
import { Syringe, Layers, Dna } from "lucide-react";

export default function Block() {
  const heading = useTextSetting({
    name: "heading",
    label: "Heading",
    initialValue: "TB-500 Finds the Damage.",
  });

  const subtitle = useTextSetting({
    name: "subtitle",
    label: "Subtitle",
    initialValue:
      "A synthetic form of Thymosin Beta-4, TB-500 circulates systemically to locate inflammation, recruit cells to injury sites, and rebuild tissue — regardless of where it's injected. Available standalone or in two precision blends.",
  });

  const image = useImageSetting({
    name: "lifestyle-image",
    label: "Lifestyle Image",
    initialValue: {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      alt: "Lifestyle photo",
    },
  });

  const features = useArraySetting({
    name: "features",
    label: "Features",
    schema: {
      title: { type: "text", label: "Title", initialValue: "Feature Title" },
      description: {
        type: "longText",
        label: "Description",
        initialValue: "Feature description",
      },
      icon: { type: "text", label: "Icon Type", initialValue: "syringe" },
    },
    initialValue: [
      {
        title: "TB-500 Standalone — Systemic Repair, 1–2x Per Week",
        description:
          "100% bioavailability via subcutaneous injection. At just 43 amino acids, TB-500 crosses biological barriers easily and circulates body-wide — sequestering actin to drive cell migration, stimulating angiogenesis in nutrient-starved tendons and cartilage, and reducing inflammation without restricting connective tissue flexibility.",
        icon: "syringe",
      },
      {
        title: "Valkyr / Wolverine Blend — BPC-157 + TB-500",
        description:
          "The gold standard for injury recovery. BPC-157 handles localized structural repair — upregulating VEGFR2 at the wound site and restoring gut mucosal lining. TB-500 handles the systemic work — recruiting cells from across the body and preventing restrictive scar tissue formation. Local precision plus full-body reach.",
        icon: "layers",
      },
      {
        title: "Samson & Delilah — GHK-Cu / CJC / Ipamorelin / TB-500",
        description:
          "A total vitality stack. TB-500's systemic tissue repair combines with GHK-Cu's collagen synthesis, plus CJC-1295 and Ipamorelin's growth hormone release for coordinated anti-aging across skin, joints, muscle, and metabolic function. One protocol, four mechanisms.",
        icon: "dna",
      },
    ],
  });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "syringe":
        return <Syringe className="w-8 h-8" strokeWidth={1.5} />;
      case "layers":
        return <Layers className="w-8 h-8" strokeWidth={1.5} />;
      case "dna":
        return <Dna className="w-8 h-8" strokeWidth={1.5} />;
      default:
        return <Syringe className="w-8 h-8" strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container py-28 px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="order-1 md:order-1">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-[32px]"
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-2 md:order-2 flex flex-col justify-center max-w-[520px]">
            <h2
              className="text-4xl md:text-5xl font-semibold mb-4 leading-tight max-w-sm"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#16625F",
              }}
            >
              {heading}
            </h2>
            <p
              className="text-lg mb-12"
              style={{ color: "rgba(36, 92, 58, 0.7)" }}
            >
              {subtitle}
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div
                    className="flex-shrink-0 mt-1"
                    style={{ color: "#245C3A" }}
                  >
                    {getIcon(feature.icon)}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#1a4d2e" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}