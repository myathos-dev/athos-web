import { useState, useRef, useEffect } from "react";

function PromoCodeIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      <rect x="20" y="18" width="240" height="224" rx="14" fill="rgba(0,0,0,0.04)" />
      <rect x="16" y="14" width="240" height="224" rx="14" fill="#FFFFFF" />
      <text x="36" y="48" fill="#1a1a1a" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">Checkout</text>
      <line x1="36" y1="58" x2="244" y2="58" stroke="#E8E4DE" strokeWidth="1" />
      <text x="36" y="80" fill="#1a1a1a" fontSize="10" fontWeight="500" fontFamily="DM Sans, sans-serif">Monthly Subscription</text>
      <text x="220" y="80" textAnchor="end" fill="#1a1a1a" fontSize="10" fontWeight="600" fontFamily="DM Sans, sans-serif">$250/mo</text>
      <line x1="36" y1="94" x2="244" y2="94" stroke="#E8E4DE" strokeWidth="1" />
      <text x="36" y="118" fill="#245C3A" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">Promo Code</text>
      <rect x="36" y="126" width="148" height="30" rx="6" stroke="#245C3A" strokeWidth="1.5" fill="#FAFAF7" />
      <text x="48" y="146" fill="#245C3A" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">COACH-MIKE</text>
      <rect x="192" y="126" width="52" height="30" rx="6" fill="#245C3A" />
      <text x="218" y="146" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="500" fontFamily="DM Sans, sans-serif">Apply</text>
      <rect x="36" y="168" width="208" height="32" rx="6" fill="#EDF5EE" />
      <circle cx="52" cy="184" r="8" fill="#245C3A" opacity="0.15" />
      <path d="M48 184L51 187L57 181" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="66" y="182" fill="#245C3A" fontSize="9" fontWeight="600" fontFamily="DM Sans, sans-serif">10% lifetime discount applied</text>
      <text x="66" y="193" fill="#245C3A" fontSize="9" fontWeight="400" fontFamily="DM Sans, sans-serif" opacity="0.7">You pay $225/mo — every month</text>
      <line x1="36" y1="212" x2="244" y2="212" stroke="#E8E4DE" strokeWidth="1" />
      <text x="36" y="230" fill="#B5B0A6" fontSize="9" fontFamily="DM Sans, sans-serif">Total due today</text>
      <text x="220" y="230" textAnchor="end" fill="#1a1a1a" fontSize="12" fontWeight="700" fontFamily="DM Sans, sans-serif">$225.00</text>
    </svg>
  );
}

function TreatmentPlanIllustration() {
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
      <text x="196" y="46" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontFamily="DM Sans, sans-serif">Treatment Plan</text>
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

function DeliveryAndPayoutIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "280px" }}>
      {/* Package — left side */}
      <path d="M30 80L40 68H130L140 80Z" fill="#D9BA7A" />
      <path d="M30 80H140L136 200H34L30 80Z" fill="#CDA968" />
      <line x1="30" y1="80" x2="140" y2="80" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="50" y1="80" x2="48" y2="200" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <line x1="120" y1="80" x2="122" y2="200" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <rect x="58" y="115" width="54" height="40" rx="5" fill="#FFFBF5" opacity="0.9" />
      <text x="85" y="138" textAnchor="middle" fill="#245C3A" fontSize="13" fontWeight="600" fontFamily="Georgia, serif" fontStyle="italic">Athos</text>
      <rect x="68" y="145" width="34" height="3" rx="1.5" fill="#B8BBB8" />
      <rect x="78" y="60" width="14" height="30" rx="2" fill="#245C3A" opacity="0.85" />
      <circle cx="142" cy="64" r="14" fill="#245C3A" />
      <path d="M135 64L140 69L150 59" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Payout card — right side */}
      <rect x="154" y="56" width="116" height="152" rx="12" fill="#FFFFFF" />
      <rect x="158" y="60" width="108" height="144" rx="10" fill="#FAFAF7" />
      <text x="212" y="82" textAnchor="middle" fill="#1a1a1a" fontSize="9" fontWeight="600" fontFamily="DM Sans, sans-serif">Partner Payout</text>
      <line x1="168" y1="90" x2="256" y2="90" stroke="#E8E4DE" strokeWidth="1" />
      <circle cx="180" cy="108" r="10" fill="#245C3A" opacity="0.1" />
      <text x="180" y="112" textAnchor="middle" fill="#245C3A" fontSize="11" fontWeight="700" fontFamily="DM Sans, sans-serif">$</text>
      <text x="196" y="106" fill="#1a1a1a" fontSize="8" fontWeight="500" fontFamily="DM Sans, sans-serif">Commission</text>
      <text x="196" y="116" fill="#245C3A" fontSize="10" fontWeight="700" fontFamily="DM Sans, sans-serif">$45.00/mo</text>
      <line x1="168" y1="126" x2="256" y2="126" stroke="#E8E4DE" strokeWidth="1" />
      <text x="172" y="142" fill="#999" fontSize="7" fontFamily="DM Sans, sans-serif">Net revenue</text>
      <text x="252" y="142" textAnchor="end" fill="#1a1a1a" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">$150.00</text>
      <text x="172" y="156" fill="#999" fontSize="7" fontFamily="DM Sans, sans-serif">Your rate</text>
      <text x="252" y="156" textAnchor="end" fill="#245C3A" fontSize="7" fontWeight="600" fontFamily="DM Sans, sans-serif">30%</text>
      <text x="172" y="170" fill="#999" fontSize="7" fontFamily="DM Sans, sans-serif">Status</text>
      <rect x="226" y="164" width="30" height="12" rx="3" fill="#EDF5EE" />
      <text x="241" y="173" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="600" fontFamily="DM Sans, sans-serif">Paid</text>
      <rect x="168" y="182" width="88" height="14" rx="4" fill="rgba(36,92,58,0.06)" />
      <text x="212" y="192" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="500" fontFamily="DM Sans, sans-serif">Repeats every month</text>
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
  const sectionTitle = "How the Referral Works";

  const sectionSubtitle = "Your referral earns — every single month they stay subscribed.";

  const steps = [
      {
        title: "Customer Enters Your Promo Code",
        description: "Your unique code gives them 10% off for life — applied automatically at checkout",
      },
      {
        title: "Customer Gets a Personalized Treatment Plan",
        description: "A licensed provider reviews their intake and builds a protocol around their goals",
      },
      {
        title: "They Get Medication. You Get Paid.",
        description: "Medication ships to their door. You earn 20-30% of net revenue every month they stay active.",
      },
    ];

  const illustrations = [
    <PromoCodeIllustration key="promo" />,
    <TreatmentPlanIllustration key="treatment" />,
    <DeliveryAndPayoutIllustration key="payout" />,
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
