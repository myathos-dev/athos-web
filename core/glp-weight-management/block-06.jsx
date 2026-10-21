import { Stethoscope, MessageCircle, BadgeCheck } from "lucide-react";

export default function Block() {
  const heading = "Overcome Weight Management Roadblocks";

  const subtitle = "Athos offers the support you've been waiting for.";

  const image = {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      alt: "Lifestyle photo",
    };

  const features = [
      {
        title: "Medically Supervised Weight Management Treatments",
        description: "Weight management is personal. Our providers review your history and goals to create a plan that fits your body and lifestyle.",
        icon: "stethoscope",
      },
      {
        title: "Ongoing Provider Support",
        description: "Message your care team anytime and get guidance as you progress — adjustments, check-ins, and answers when you need them.",
        icon: "chat",
      },
      {
        title: "Trusted, Licensed Care",
        description: "Work with licensed clinicians and vetted partner pharmacies for safe, discreet delivery and consistent follow-up.",
        icon: "badge",
      },
    ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "stethoscope":
        return <Stethoscope className="w-8 h-8" strokeWidth={1.5} />;
      case "chat":
        return <MessageCircle className="w-8 h-8" strokeWidth={1.5} />;
      case "badge":
        return <BadgeCheck className="w-8 h-8" strokeWidth={1.5} />;
      default:
        return <Stethoscope className="w-8 h-8" strokeWidth={1.5} />;
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
              className="text-4xl md:text-5xl font-semibold mb-4"
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
