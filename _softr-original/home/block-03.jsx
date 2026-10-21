import { useTextSetting, useLongTextSetting, useImageSetting, useArraySetting } from "@/lib/editable-settings";
import { ShieldCheck, FlaskConical, UserCheck } from "lucide-react";

export default function Block() {
  const heading = useTextSetting({
    name: "heading",
    label: "Heading",
    initialValue: "Physician-Supervised Peptide Therapy. Finally.",
  });

  const subtitle = useTextSetting({
    name: "subtitle",
    label: "Subtitle",
    initialValue:
      "Millions are injecting peptides from unregulated sources with zero oversight. Athos is the doctor-backed alternative they've been waiting for.",
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
      icon: { type: "text", label: "Icon Type", initialValue: "shield" },
    },
    initialValue: [
      {
        title: "Licensed Providers. Real Decisions.",
        description:
          "Every protocol — BPC-157, ipamorelin, tesamorelin, TB-500 — is reviewed and recomended by a licensed clinician through a proper clinical intake. No chatbots. No auto-approvals.",
        icon: "shield",
      },
      {
        title: "COA-Verified Purity From Vetted Pharmacies",
        description:
          "Every compound ships from vetted U.S. partner pharmacies with full Certificate of Analysis transparency. No research chemical gray market. No guessing what's in the vial.",
        icon: "flask",
      },
      {
        title: "Personalized Dosing and Coordinated Oversight",
        description:
          "Your provider builds your protocol around your labs, history, and goals — then monitors your progress with real check-ins. One platform for weight loss, recovery, and hormone optimization.",
        icon: "user",
      },
    ],
  });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "shield":
        return <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />;
      case "flask":
        return <FlaskConical className="w-8 h-8" strokeWidth={1.5} />;
      case "user":
        return <UserCheck className="w-8 h-8" strokeWidth={1.5} />;
      default:
        return <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container py-20 px-8 md:px-16">
        <div className="content grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="order-1 md:order-1">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-[32px]"
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-2 md:order-2 flex flex-col justify-center">
            <h2
              className="text-4xl md:text-5xl mb-4 leading-tight"
              style={{
                color: "#1B3022",
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 600,
              }}
            >
              {heading}
            </h2>
            <p
              className="font-sans text-lg mb-12"
              style={{ color: "#4B5563" }}
            >
              {subtitle}
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div
                    className="flex-shrink-0 mt-1"
                    style={{ color: "#16625F" }}
                  >
                    {getIcon(feature.icon)}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-sans font-bold text-lg mb-2"
                      style={{ color: "#1B3022" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="font-sans text-base leading-relaxed"
                      style={{ color: "#6B7280" }}
                    >
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