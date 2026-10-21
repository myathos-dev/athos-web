import { useTextSetting, useLongTextSetting, useImageSetting, useArraySetting } from "@/lib/editable-settings";
import { Flame, Shield, Zap, Brain, Sparkles } from "lucide-react";

export default function Block() {
  const heading = useTextSetting({
    name: "heading",
    label: "Heading",
    initialValue: "MOTS-c Powers Every Blend. Here's How.",
  });

  const subtitle = useTextSetting({
    name: "subtitle",
    label: "Subtitle",
    initialValue:
      "MOTS-c is the mitochondrial engine inside five precision peptide stacks — each one targeting a different system, all physician-supervised.",
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
      icon: { type: "text", label: "Icon Type", initialValue: "flame" },
    },
    initialValue: [
      {
        title: "Adonix — Visceral Fat Specialist",
        description:
          "Tesamorelin, Ipamorelin, and AOD-9604 mobilize stubborn organ fat. MOTS-c ensures that mobilized fat is actually oxidized for energy in muscle tissue — not just relocated.",
        icon: "flame",
      },
      {
        title: "Empress — Vitality and Repair",
        description:
          "BPC-157 heals tissue, GHK-Cu rebuilds collagen, and Kisspeptin-10 supports hormonal signaling. MOTS-c provides the cellular ATP required to fuel every repair process.",
        icon: "sparkles",
      },
      {
        title: "Inferno — Aggressive Metabolic Shred",
        description:
          "CJC-1295 and Ipamorelin create sustained Growth Hormone elevation. AOD-9604 targets fat cells directly. MOTS-c keeps basal metabolic rate elevated even at rest.",
        icon: "zap",
      },
      {
        title: "Kali — Metabolic Healing",
        description:
          "5-Amino-1MQ inhibits NNMT to boost intracellular NAD+ levels. Tesamorelin mobilizes visceral fat. BPC-157 protects tissues. MOTS-c increases mitochondrial density throughout.",
        icon: "shield",
      },
      {
        title: "Lucid — Cognitive Performance",
        description:
          "Semax elevates BDNF for focus and memory. Selank reduces anxiety without sedation. Tesamorelin increases brain IGF-1. MOTS-c ensures neurons have the ATP for high-level processing.",
        icon: "brain",
      },
    ],
  });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "flame":
        return <Flame className="w-8 h-8" strokeWidth={1.5} />;
      case "sparkles":
        return <Sparkles className="w-8 h-8" strokeWidth={1.5} />;
      case "zap":
        return <Zap className="w-8 h-8" strokeWidth={1.5} />;
      case "shield":
        return <Shield className="w-8 h-8" strokeWidth={1.5} />;
      case "brain":
        return <Brain className="w-8 h-8" strokeWidth={1.5} />;
      default:
        return <Flame className="w-8 h-8" strokeWidth={1.5} />;
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