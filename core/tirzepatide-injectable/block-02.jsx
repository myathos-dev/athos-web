import { useRef, useCallback, useState } from "react";

const StethoscopeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16625F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A2 2 0 0 0 3 4.5v3a5 5 0 0 0 5 5 1 1 0 0 0 1-1V4.5A2 2 0 0 0 6.8 2.3" />
    <path d="M8 15a6 6 0 0 0 12 0v-3" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const BoxIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16625F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

const HomeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16625F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const CreditCardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16625F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h2" />
    <path d="M12 15h2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B8BBB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B8BBB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
  </svg>
);

const FlaskIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B8BBB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" /><path d="M10 3v7.4L4.7 19a1.5 1.5 0 0 0 1.3 2h12a1.5 1.5 0 0 0 1.3-2L14 10.4V3" />
    <path d="M8.5 14h7" />
  </svg>
);

const RefreshIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B8BBB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" />
  </svg>
);

const NoVideoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B8BBB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="13" height="12" rx="2" />
    <path d="m15 10 5-3v10l-5-3" />
    <line x1="2" y1="2" x2="22" y2="22" stroke="#B8BBB8" strokeWidth="2" />
  </svg>
);

const DropletPlusIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B8BBB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.7c0 0-7 6.3-7 11.3a7 7 0 0 0 14 0c0-5-7-11.3-7-11.3Z" />
    <path d="M10 13h4" />
    <path d="M12 11v4" />
  </svg>
);

const InfoTooltip = ({ text }) => {
  const [show, setShow] = useState(false);
  return (
    <span
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 30,
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
      {show && (
        <span
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: "0",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#FFFFFF",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: 1.5,
            padding: "10px 14px",
            borderRadius: "10px",
            width: "220px",
            whiteSpace: "normal",
            zIndex: 50,
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: "100%",
              right: "4px",
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderBottom: "5px solid rgba(255,255,255,0.12)",
            }}
          />
          {text}
        </span>
      )}
    </span>
  );
};

const iconMap = {
  stethoscope: StethoscopeIcon,
  box: BoxIcon,
  home: HomeIcon,
  creditcard: CreditCardIcon,
};

function DifferentiatorCard({ item }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const borderGlowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "1";
    if (borderGlowRef.current) borderGlowRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
    if (borderGlowRef.current) borderGlowRef.current.style.opacity = "0";
  }, []);

  const Icon = item.icon;

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {/* Border glow */}
      <div
        ref={borderGlowRef}
        style={{
          position: "absolute",
          inset: "-1px",
          borderRadius: "16px",
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          background:
            "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(61, 189, 209, 0.3), transparent 40%)",
          zIndex: 0,
        }}
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl p-6"
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Glow layer — clipped independently */}
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            opacity: 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
            overflow: "hidden",
            background:
              "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(103, 217, 203, 0.15), transparent 40%)",
            zIndex: 0,
          }}
        />

        {/* Tooltip — lives outside overflow clip */}
        {item.tooltip && <InfoTooltip text={item.tooltip} />}

        {/* Content */}
        <div
          style={{ position: "relative", zIndex: 10, flex: 1 }}
          className="flex flex-col gap-4"
        >
          <div className="flex-shrink-0">
            <Icon />
          </div>
          <h3
            style={{
              fontFamily: "'Telegraf', sans-serif",
              fontSize: "17px",
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.3,
              paddingRight: item.tooltip ? "28px" : "0",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
              flex: 1,
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Block() {
  const heading = "If prescribed, your subscription includes:";

  const benefits = [
    { icon: "stethoscope", title: "Personalized\nTreatment Plans" },
    { icon: "box", title: "Medication\nand Supplies" },
    { icon: "home", title: "Shipping\nto Your Door" },
    { icon: "creditcard", title: "Purchase\nOptions" },
  ];

  const differentiators = [
    {
      icon: NoVideoIcon,
      title: "No Telehealth Visit Required",
      description:
        "Fill out a form. A licensed physician reviews it asynchronously. No awkward video call — unless you want one.",
    },
    {
      icon: DropletPlusIcon,
      title: "Compounded Add-ons Included",
      tooltip: "Available with select GLP-1 medications. Your provider will confirm eligibility.",
      description:
        "B12 · B6 · NAD+ · Glycine — compounded directly into your medication at no extra cost.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Pharmaceutical-Grade Purity",
      description:
        'Every compound is verified and tested. No "for research purposes only" labels. No guesswork.',
    },
    {
      icon: ClipboardIcon,
      title: "Real Medical Oversight",
      description:
        "Licensed providers manage your protocol — not Reddit threads or YouTube reconstitution tutorials.",
    },
    {
      icon: FlaskIcon,
      title: "Precise, Personalized Dosing",
      description:
        "Your dosing is set by a physician based on your bloodwork and health profile. Not a forum post.",
    },
    {
      icon: RefreshIcon,
      title: "Seamless Reordering",
      description:
        "Continue your protocol without repeating intake. Your physician stays on file. Refills ship automatically.",
    },
  ];

  return (
    <>
      {/* SUBSCRIPTION INCLUDES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-[960px] mx-auto">
          <p
            className="text-center mb-10"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "rgba(0,0,0,0.6)",
              letterSpacing: "0.01em",
            }}
          >
            {heading}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div
                  key={i}
                  className="rounded-2xl flex items-center gap-4 px-5 py-6"
                  style={{ backgroundColor: "#EDE9FE" }}
                >
                  <div className="flex-shrink-0">
                    <Icon />
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "1.3",
                      color: "#1a1a1a",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {benefit.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-20 px-4" style={{ backgroundColor: "#16625F" }}>
        <div className="max-w-[960px] mx-auto">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Canela', 'Noe Display', 'Saol Display', serif",
              fontSize: "36px",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            What makes us different.
          </h2>
          <p
            className="text-center mb-14 max-w-[520px] mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
            }}
          >
            People are already spending $200–$700/month on unverified peptides
            with zero medical oversight.
            <br />
            <span style={{ color: "#FFFFFF" }}>
              We built the legitimate alternative.
            </span>
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            style={{ alignItems: "stretch" }}
          >
            {differentiators.map((item, i) => (
              <DifferentiatorCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}