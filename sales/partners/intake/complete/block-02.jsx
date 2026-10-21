import { useState, useRef, useEffect } from "react";

function ReviewIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      {/* Clipboard / Document */}
      <rect x="60" y="20" width="160" height="210" rx="12" fill="#FFFFFF" />
      <rect x="60" y="20" width="160" height="210" rx="12" stroke="#E8E4DE" strokeWidth="1" />
      {/* Clipboard top */}
      <rect x="104" y="12" width="72" height="20" rx="6" fill="#245C3A" />
      <rect x="118" y="17" width="44" height="10" rx="4" fill="#FAFAF7" />
      {/* Header */}
      <text x="140" y="58" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontWeight="600" fontFamily="DM Sans, sans-serif">Application Review</text>
      <line x1="80" y1="66" x2="200" y2="66" stroke="#E8E4DE" strokeWidth="1" />
      {/* Row 1 — checked */}
      <rect x="80" y="78" width="120" height="28" rx="6" fill="#EDF5EE" />
      <circle cx="96" cy="92" r="8" fill="#245C3A" opacity="0.15" />
      <path d="M92 92L95 95L101 89" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="110" y="89" fill="#333" fontSize="8" fontWeight="500" fontFamily="DM Sans, sans-serif">Business Name</text>
      <text x="110" y="99" fill="#999" fontSize="6.5" fontFamily="DM Sans, sans-serif">Verified</text>
      {/* Row 2 — checked */}
      <rect x="80" y="114" width="120" height="28" rx="6" fill="#EDF5EE" />
      <circle cx="96" cy="128" r="8" fill="#245C3A" opacity="0.15" />
      <path d="M92 128L95 131L101 125" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="110" y="125" fill="#333" fontSize="8" fontWeight="500" fontFamily="DM Sans, sans-serif">Contact Info</text>
      <text x="110" y="135" fill="#999" fontSize="6.5" fontFamily="DM Sans, sans-serif">Verified</text>
      {/* Row 3 — checked */}
      <rect x="80" y="150" width="120" height="28" rx="6" fill="#EDF5EE" />
      <circle cx="96" cy="164" r="8" fill="#245C3A" opacity="0.15" />
      <path d="M92 164L95 167L101 161" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="110" y="161" fill="#333" fontSize="8" fontWeight="500" fontFamily="DM Sans, sans-serif">Audience Fit</text>
      <text x="110" y="171" fill="#999" fontSize="6.5" fontFamily="DM Sans, sans-serif">Verified</text>
      {/* Approved badge */}
      <rect x="88" y="190" width="104" height="28" rx="8" fill="#245C3A" />
      <text x="140" y="208" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="DM Sans, sans-serif">Approved</text>
    </svg>
  );
}

function CreateCodeIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      {/* Card background */}
      <rect x="30" y="40" width="220" height="180" rx="14" fill="#FFFFFF" />
      <rect x="30" y="40" width="220" height="180" rx="14" stroke="#E8E4DE" strokeWidth="1" />
      {/* Header */}
      <text x="140" y="72" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontWeight="600" fontFamily="DM Sans, sans-serif">Your Promo Code</text>
      <text x="140" y="86" textAnchor="middle" fill="#999" fontSize="8" fontFamily="DM Sans, sans-serif">Generated just for you</text>
      {/* Code display box */}
      <rect x="54" y="100" width="172" height="48" rx="10" fill="#FAFAF7" stroke="#245C3A" strokeWidth="2" strokeDasharray="6 3" />
      <text x="140" y="131" textAnchor="middle" fill="#245C3A" fontSize="22" fontWeight="700" fontFamily="DM Sans, sans-serif" letterSpacing="3">PARTNER10</text>
      {/* Sparkle indicators */}
      <circle cx="62" cy="108" r="3" fill="#245C3A" opacity="0.2" />
      <circle cx="218" cy="108" r="2.5" fill="#245C3A" opacity="0.15" />
      <circle cx="222" cy="142" r="2" fill="#245C3A" opacity="0.1" />
      {/* Copy button */}
      <rect x="88" y="164" width="104" height="32" rx="8" fill="#245C3A" />
      <text x="140" y="184" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="500" fontFamily="DM Sans, sans-serif">Copy Code</text>
      {/* Small clipboard icon */}
      <rect x="108" y="174" width="10" height="12" rx="2" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      <rect x="106" y="172" width="8" height="3" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

function ShareCodeIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      {/* Center share node */}
      <circle cx="140" cy="120" r="30" fill="#245C3A" />
      <text x="140" y="117" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="600" fontFamily="DM Sans, sans-serif">YOUR</text>
      <text x="140" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="600" fontFamily="DM Sans, sans-serif">CODE</text>
      {/* Connection lines */}
      <line x1="165" y1="100" x2="210" y2="60" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
      <line x1="170" y1="120" x2="220" y2="130" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
      <line x1="160" y1="145" x2="205" y2="190" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
      <line x1="115" y1="100" x2="70" y2="60" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
      <line x1="110" y1="120" x2="60" y2="130" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
      <line x1="120" y1="145" x2="75" y2="190" stroke="#245C3A" strokeWidth="1.5" opacity="0.3" />
      {/* Customer nodes — right */}
      <circle cx="220" cy="52" r="18" fill="#EDF5EE" />
      <circle cx="220" cy="48" r="6" fill="#B8BBB8" />
      <path d="M212 59C212 56 215 53 220 53C225 53 228 56 228 59" fill="#B8BBB8" />
      <circle cx="232" cy="130" r="18" fill="#EDF5EE" />
      <circle cx="232" cy="126" r="6" fill="#B8BBB8" />
      <path d="M224 137C224 134 227 131 232 131C237 131 240 134 240 137" fill="#B8BBB8" />
      <circle cx="215" cy="198" r="18" fill="#EDF5EE" />
      <circle cx="215" cy="194" r="6" fill="#B8BBB8" />
      <path d="M207 205C207 202 210 199 215 199C220 199 223 202 223 205" fill="#B8BBB8" />
      {/* Customer nodes — left */}
      <circle cx="60" cy="52" r="18" fill="#EDF5EE" />
      <circle cx="60" cy="48" r="6" fill="#B8BBB8" />
      <path d="M52 59C52 56 55 53 60 53C65 53 68 56 68 59" fill="#B8BBB8" />
      <circle cx="48" cy="130" r="18" fill="#EDF5EE" />
      <circle cx="48" cy="126" r="6" fill="#B8BBB8" />
      <path d="M40 137C40 134 43 131 48 131C53 131 56 134 56 137" fill="#B8BBB8" />
      <circle cx="65" cy="198" r="18" fill="#EDF5EE" />
      <circle cx="65" cy="194" r="6" fill="#B8BBB8" />
      <path d="M57 205C57 202 60 199 65 199C70 199 73 202 73 205" fill="#B8BBB8" />
      {/* Discount badges on customers */}
      <rect x="202" y="34" width="36" height="14" rx="4" fill="#245C3A" />
      <text x="220" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">10% off</text>
      <rect x="214" y="112" width="36" height="14" rx="4" fill="#245C3A" />
      <text x="232" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">10% off</text>
      <rect x="197" y="180" width="36" height="14" rx="4" fill="#245C3A" />
      <text x="215" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">10% off</text>
      <rect x="42" y="34" width="36" height="14" rx="4" fill="#245C3A" />
      <text x="60" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">10% off</text>
      <rect x="30" y="112" width="36" height="14" rx="4" fill="#245C3A" />
      <text x="48" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">10% off</text>
      <rect x="47" y="180" width="36" height="14" rx="4" fill="#245C3A" />
      <text x="65" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">10% off</text>
      {/* Bottom label */}
      <rect x="80" y="232" width="120" height="22" rx="6" fill="rgba(36,92,58,0.12)" />
      <text x="140" y="247" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="600" fontFamily="DM Sans, sans-serif">Customers save 10% on every order</text>
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
  const sectionTitle = "How Partner Onboarding Works";

  const sectionSubtitle = "Three steps to start earning with Athos.";

  const steps = [
      {
        title: "We Review Your Information",
        description: "Submit your details and our team verifies your profile to ensure a strong partner fit.",
      },
      {
        title: "We Create Your Promo Code",
        description: "Once approved, we generate a unique promo code tied directly to your account.",
      },
      {
        title: "You Share Your Code",
        description: "Customers who use your code get 10% off when they shop — every time.",
      },
    ];

  const illustrations = [
    <ReviewIllustration key="review" />,
    <CreateCodeIllustration key="create" />,
    <ShareCodeIllustration key="share" />,
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
