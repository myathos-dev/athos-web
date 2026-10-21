
export default function Block() {
  const mainTitle = "Why Athos";

  const subtitle = "The same products you believe in — prescribed legally, dosed correctly, backed by clinical oversight.";

  const othersHeading = "Gray Market";

  const athosHeading = "Athos";

  const closingText = "Millions of people are already self-administering peptides with no licensed provider, no regulated pharmacy, and no purity verification. Athos is the clinical alternative that never existed — until now.";

  const ctaText = "Start Treatment";

  const ctaLink = {
      destination: "/",
      openIn: "SELF",
    };

  const othersItems = [
    "No licensed provider",
    "No purity COA from a regulated pharmacy",
    "No dosing protocol tailored to you",
    "No follow-up or clinical oversight",
    "No recourse if something goes wrong",
    "Unmarked packaging from overseas or unregulated labs",
  ];

  const athosItems = [
    "Licensed provider writes every script after a real intake",
    "503A or 503B compounding pharmacy fills it",
    "Third-party COA on every batch",
    "Ongoing clinical oversight and protocol adjustments",
    "Legal, compliant, covered by telehealth regulations",
    "A branded clinical experience — not a gray market transaction",
  ];

  return (
    <div className="w-full py-12 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div
          className="content max-w-6xl mx-auto rounded-[18px] p-8 md:p-16 lg:p-20"
          style={{ backgroundColor: "#16625F" }}
        >
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl text-center mb-4"
            style={{
              color: "#FFFFFF",
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 600,
            }}
          >
            {mainTitle}
          </h2>

          {/* Subtitle */}
          <p
            className="font-sans text-base md:text-lg text-center max-w-xl mx-auto mb-14 leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            {subtitle}
          </p>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14">
            {/* Others Column */}
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "linear-gradient(145deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.18) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "inset 0 2px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <p
                className="font-sans text-sm uppercase mb-6"
                style={{
                  color: "rgba(255, 255, 255, 0.4)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                }}
              >
                {othersHeading}
              </p>
              <ul className="space-y-4">
                {othersItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5"
                          stroke="rgba(255, 255, 255, 0.3)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span
                      className="font-sans text-sm md:text-base leading-relaxed"
                      style={{ color: "rgba(255, 255, 255, 0.5)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Athos Column */}
            <div
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Green top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: "linear-gradient(to right, #245C3A, #32594A)",
                }}
              />
              <p
                className="font-sans text-sm uppercase mb-6"
                style={{
                  color: "#245C3A",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                }}
              >
                {athosHeading}
              </p>
              <ul className="space-y-4">
                {athosItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(36, 92, 58, 0.1)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5.5L4 7.5L8 2.5"
                          stroke="#245C3A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className="font-sans text-sm md:text-base leading-relaxed"
                      style={{ color: "#1A3026" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Closing Text */}
          <p
            className="font-sans text-base md:text-lg text-center max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            {closingText}
          </p>

          {/* CTA */}
          <div className="text-center">
            <a href={ctaLink.destination} target={ctaLink.openIn === "NEW_TAB" ? "_blank" : undefined}
              className="inline-flex items-center justify-center px-8 py-6 text-base rounded-lg hover:opacity-90"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#16625F",
                fontWeight: 500,
              }}
            >
                {ctaText}
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}