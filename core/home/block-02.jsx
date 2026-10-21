"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";

const ScaleIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#16625F"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ maxWidth: "100%", height: "auto" }}
  >
    <path d="M12 3v17" />
    <path d="M2 7h4l3 6H5L2 7Z" />
    <path d="M15 7h4l3 6h-4l-3-6Z" />
    <path d="M6 20h12" />
    <path d="M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#16625F"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ maxWidth: "100%", height: "auto" }}
  >
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 0 1 12 6.006a5 5 0 0 1 7.5 6.566Z" />
    <path d="M5 12h2l2-3 3 6 2-3h2" />
  </svg>
);

const HourglassIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#16625F"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ maxWidth: "100%", height: "auto" }}
  >
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
  </svg>
);

const services = [
  {
    title: "Weight Management",
    icon: ScaleIcon,
    link: { destination: "/getpeptides/weight-loss" },
  },
  {
    title: "Recovery",
    icon: HeartPulseIcon,
    link: { destination: "/getpeptides/recovery" },
  },
  {
    title: "Longevity",
    icon: HourglassIcon,
    link: { destination: "/getpeptides/longevity" },
  },
];

export default function Block() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.scrollWidth / services.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, services.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <style>{`
        .services-scroll-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .services-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .services-card {
          min-width: 0;
        }

        .services-dots {
          display: none;
        }

        @media (max-width: 767px) {
          .services-scroll-container {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -ms-overflow-style: none;
            scrollbar-width: none;
            gap: 12px;
            padding: 0 7.5vw;
          }

          .services-card {
            min-width: 85vw;
            flex-shrink: 0;
            scroll-snap-align: center;
          }

          .services-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 20px;
          }
        }
      `}</style>

      <section style={{ backgroundColor: "#f5f2ed", padding: "64px 24px" }}>
        <div className="services-scroll-container" ref={scrollRef}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div className="services-card" key={index}>
                <a className="block group"
                  style={{ textDecoration: "none" }} href={service.link.destination} target={service.link.openIn === "NEW_TAB" ? "_blank" : undefined}>
                  <div
                    style={{
                      backgroundColor: "#e0f5f9",
                      borderRadius: "60px",
                      padding: "14px 28px 14px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      minHeight: "80px",
                    }}
                    className="group-hover:shadow-lg group-hover:-translate-y-1"
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "#000000",
                        flex: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </span>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#16625F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile dot indicators */}
        <div className="services-dots">
          {services.map((_, index) => (
            <div
              key={index}
              style={{
                width: activeIndex === index ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  activeIndex === index ? "#16625F" : "#B8BBB8",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}