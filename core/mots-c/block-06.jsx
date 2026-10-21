import { useState, useRef, useEffect } from "react";

function FormIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      <rect x="20" y="18" width="240" height="224" rx="14" fill="rgba(0,0,0,0.04)" />
      <rect x="16" y="14" width="240" height="224" rx="14" fill="#FFFFFF" />
      <text x="36" y="52" fill="#1a1a1a" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">Legal First Name</text>
      <text x="152" y="52" fill="#1a1a1a" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">Legal Last Name</text>
      <rect x="36" y="60" width="104" height="26" rx="4" fill="#F3F1EC" />
      <rect x="150" y="60" width="94" height="26" rx="4" fill="#F3F1EC" />
      <line x1="36" y1="100" x2="244" y2="100" stroke="#E8E4DE" strokeWidth="1" />
      <text x="36" y="124" fill="#1a1a1a" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">Email Address</text>
      <rect x="36" y="132" width="208" height="26" rx="4" fill="#F3F1EC" />
      <line x1="36" y1="172" x2="244" y2="172" stroke="#E8E4DE" strokeWidth="1" />
      <text x="36" y="192" fill="#B5B0A6" fontSize="9" fontFamily="DM Sans, sans-serif">Make sure to use a unique email address</text>
      <text x="36" y="220" fill="#C5C0B6" fontSize="11" fontFamily="DM Sans, sans-serif">Date of Birth</text>
      <path d="M166 210L178 220L166 230Z" fill="#245C3A" />
      <rect x="188" y="208" width="48" height="26" rx="13" fill="#245C3A" />
      <text x="212" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="500" fontFamily="DM Sans, sans-serif">You</text>
    </svg>
  );
}

function ProviderIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      <rect x="30" y="14" width="116" height="232" rx="18" fill="#1C1C1E" />
      <rect x="34" y="22" width="108" height="216" rx="14" fill="#245C3A" />
      <circle cx="88" cy="110" r="36" fill="#558E8D" />
      <circle cx="88" cy="98" r="14" fill="#B8BBB8" />
      <path d="M68 122C68 114 76 108 88 108C100 108 108 114 108 122" fill="#B8BBB8" />
      <rect x="44" y="196" width="88" height="28" rx="7" fill="rgba(0,0,0,0.35)" />
      <rect x="52" y="205" width="14" height="10" rx="2" fill="white" />
      <circle cx="59" cy="210" r="2.5" fill="#245C3A" />
      <text x="72" y="214" fill="white" fontSize="9" fontWeight="500" fontFamily="DM Sans, sans-serif">Video Visit</text>
      <rect x="138" y="6" width="116" height="240" rx="18" fill="#1C1C1E" />
      <rect x="142" y="14" width="108" height="224" rx="14" fill="#FAFAF7" />
      <rect x="174" y="16" width="44" height="12" rx="6" fill="#1C1C1E" />
      <text x="154" y="26" fill="#1a1a1a" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">9:41</text>
      <text x="196" y="46" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontFamily="DM Sans, sans-serif">New Messages</text>
      <text x="196" y="62" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="600" fontFamily="DM Sans, sans-serif">Your Provider</text>
      <rect x="150" y="72" width="92" height="28" rx="6" fill="#EDF5EE" />
      <text x="196" y="84" textAnchor="middle" fill="#333" fontSize="6" fontFamily="DM Sans, sans-serif">Your medical intake</text>
      <text x="196" y="93" textAnchor="middle" fill="#333" fontSize="6" fontFamily="DM Sans, sans-serif">has been reviewed.</text>
      <rect x="150" y="106" width="92" height="28" rx="6" fill="#EDF5EE" />
      <text x="196" y="118" textAnchor="middle" fill="#333" fontSize="6" fontFamily="DM Sans, sans-serif">You have been approved</text>
      <text x="196" y="127" textAnchor="middle" fill="#333" fontSize="6" fontFamily="DM Sans, sans-serif">for treatment.</text>
      <rect x="150" y="140" width="92" height="34" rx="6" fill="#EDF5EE" />
      <text x="196" y="152" textAnchor="middle" fill="#333" fontSize="6" fontFamily="DM Sans, sans-serif">Log into the patient portal</text>
      <text x="196" y="161" textAnchor="middle" fill="#333" fontSize="6" fontFamily="DM Sans, sans-serif">to view your personalized</text>
      <text x="196" y="170" textAnchor="middle" fill="#333" fontSize="6" fontFamily="DM Sans, sans-serif">treatment plan.</text>
      <rect x="164" y="182" width="64" height="22" rx="6" fill="#245C3A" />
      <text x="196" y="197" textAnchor="middle" fill="white" fontSize="9" fontWeight="500" fontFamily="DM Sans, sans-serif">Log in</text>
      <text x="196" y="220" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontWeight="600" fontFamily="DM Sans, sans-serif">Provider Review</text>
    </svg>
  );
}

function PackageIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      {/* Bag top fold — solid fill */}
      <path d="M80 60L90 44H190L200 60Z" fill="#D9BA7A" />

      {/* Bag body — solid fill instead of linearGradient */}
      <path d="M80 60H200L194 244H86L80 60Z" fill="#CDA968" />
      <line x1="80" y1="60" x2="200" y2="60" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />

      {/* Creases */}
      <line x1="100" y1="60" x2="96" y2="244" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <line x1="180" y1="60" x2="184" y2="244" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />

      {/* Label */}
      <rect x="106" y="105" width="68" height="54" rx="6" fill="#FFFBF5" opacity="0.9" />
      <text x="140" y="133" textAnchor="middle" fill="#245C3A" fontSize="17" fontWeight="600" fontFamily="Georgia, serif" fontStyle="italic">Athos</text>
      <rect x="118" y="141" width="44" height="4" rx="2" fill="#B8BBB8" />
      <rect x="124" y="149" width="32" height="3" rx="1.5" fill="#D5D1CA" />

      {/* Tape seal */}
      <rect x="132" y="36" width="16" height="38" rx="2" fill="#245C3A" opacity="0.85" />

      {/* Checkmark badge */}
      <circle cx="208" cy="40" r="20" fill="#245C3A" />
      <path d="M198 40L205 47L219 33" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScrollDots({ count, active }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginTop: "24px",
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === active ? "24px" : "8px",
            height: "8px",
            borderRadius: "4px",
            backgroundColor: i === active ? "#FFFFFF" : "rgba(255,255,255,0.3)",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

function StepCard({ step, index, illustration, mobile }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          backgroundColor: "#558E8D",
          border: "3px solid #16625F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          marginBottom: "-19px",
        }}
      >
        <span
          style={{
            fontFamily: "Canela, 'Noe Display', 'Saol Display', Georgia, serif",
            fontSize: "19px",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          {index + 1}
        </span>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#EDE9E2",
          borderRadius: "20px",
          padding: mobile ? "28px 12px 12px" : "36px 16px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          overflow: "hidden",
        }}
      >
        {illustration}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          padding: "0 8px",
        }}
      >
        <h3
          style={{
            fontFamily: "Telegraf, 'DM Sans', sans-serif",
            fontSize: mobile ? "17px" : "18px",
            fontWeight: 600,
            color: "#FFFFFF",
            marginBottom: "6px",
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: mobile ? "14px" : "15px",
            lineHeight: "1.6",
            color: "rgba(255, 255, 255, 0.65)",
            fontWeight: 400,
          }}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function Block() {
  const sectionTitle = "How Athos Works";

  const sectionSubtitle = "Get started with no insurance required.";

  const steps = [
      {
        title: "Medical Forms",
        description: "Share your medical details — takes less than 5 minutes",
      },
      {
        title: "Get Your Personalized Treatment Plan",
        description: "Your healthcare provider will determine if treatment is right for you",
      },
      {
        title: "Receive Medication",
        description: "If prescribed, medication and supplies mailed straight to your door",
      },
    ];

  const illustrations = [
    <FormIllustration key="form" />,
    <ProviderIllustration key="provider" />,
    <PackageIllustration key="package" />,
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.firstElementChild?.offsetWidth || 1;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, steps.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "64px",
        paddingBottom: "64px",
        backgroundColor: "#16625F",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "Canela, 'Noe Display', 'Saol Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 600,
              color: "#FFFFFF",
              marginBottom: "12px",
            }}
          >
            {sectionTitle}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 2.5vw, 18px)",
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "460px",
              margin: "0 auto",
            }}
          >
            {sectionSubtitle}
          </p>
        </div>

        {/* Desktop Grid */}
        <div
          className="hiw-desktop-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              illustration={illustrations[index]}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="hiw-mobile-carousel" style={{ display: "none" }}>
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingBottom: "4px",
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  minWidth: "80vw",
                  maxWidth: "80vw",
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                }}
              >
                <StepCard
                  step={step}
                  index={index}
                  illustration={illustrations[index]}
                  mobile
                />
              </div>
            ))}
          </div>
          <ScrollDots count={steps.length} active={activeIndex} />
        </div>
      </div>

      <style>{`
        .hiw-mobile-carousel > div::-webkit-scrollbar { display: none; }
        @media (max-width: 767px) {
          .hiw-desktop-grid { display: none !important; }
          .hiw-mobile-carousel { display: block !important; }
        }
        @media (min-width: 768px) {
          .hiw-desktop-grid { display: grid !important; }
          .hiw-mobile-carousel { display: none !important; }
        }
      `}</style>
    </div>
  );
}