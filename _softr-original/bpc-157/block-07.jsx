import { useTextSetting, useLongTextSetting, useImageSetting, useArraySetting } from "@/lib/editable-settings";
import { Syringe, Pill, Wind } from "lucide-react";

export default function Block() {
  const heading = useTextSetting({
    name: "heading",
    label: "Heading",
    initialValue: "Your Body Already Makes BPC-157. It Just Doesn't Make Enough.",
  });

  const subtitle = useTextSetting({
    name: "subtitle",
    label: "Subtitle",
    initialValue:
      "Isolated from human gastric juice, BPC-157 accelerates tissue repair, resolves gut inflammation, and modulates dopaminergic pathways. Athos delivers it three ways — each one clinician-prescribed.",
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
        title: "Injectable — Systemic Repair at Peak Plasma Concentration",
        description:
          "Subcutaneous delivery reaches peak bioavailability fast. Upregulates VEGFR2 to drive angiogenesis — new blood vessel formation at the injury site. Built for tendons, ligaments, muscle tears, and systemic inflammatory conditions.",
        icon: "syringe",
      },
      {
        title: "Oral — The Gold Standard for Gut Restoration",
        description:
          "Remarkably stable in stomach acid. Stays in the GI tract to repair mucosal lining directly — clinically studied for leaky gut, IBD, and gastric ulcers. Protects the gut wall while reducing inflammation, unlike NSAIDs that destroy it.",
        icon: "pill",
      },
      {
        title: "Intranasal — Neuro-Targeted Cognitive Repair",
        description:
          "Bypasses the blood-brain barrier for direct central nervous system delivery. Modulates dopaminergic and serotonergic systems to reduce neuroinflammation — studied for TBI recovery and persistent brain fog.",
        icon: "nasal",
      },
    ],
  });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "syringe":
        return <Syringe className="w-8 h-8" strokeWidth={1.5} />;
      case "pill":
        return <Pill className="w-8 h-8" strokeWidth={1.5} />;
      case "nasal":
        return <Wind className="w-8 h-8" strokeWidth={1.5} />;
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
              className="text-4xl md:text-5xl font-semibold mb-4 leading-tight"
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