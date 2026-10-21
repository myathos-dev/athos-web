import { ShieldCheck, FlaskConical, UserCheck } from "lucide-react";
import { useState } from "react";

export default function Block() {
  const [showSlider, setShowSlider] = useState(false);
  const [clientCount, setClientCount] = useState(500);

  const companyRate = 0.30;
  const individualRate = 0.20;
  const avgNet = 150;

  const companyEarnings = clientCount * avgNet * companyRate;
  const individualEarnings = clientCount * avgNet * individualRate;

  const formatMoney = (val) => {
    if (val >= 1000000) {
      return "$" + (val / 1000000).toFixed(1) + "M";
    }
    if (val >= 10000) {
      return "$" + (val / 1000).toFixed(0) + "K";
    }
    if (val >= 1000) {
      return "$" + (val / 1000).toFixed(1) + "K";
    }
    return "$" + val.toLocaleString();
  };

  const formatMoneyFull = (val) => {
    return "$" + val.toLocaleString();
  };

  const heading = "Your referrals earn. Every single month.";

  const subtitle = "Earn 20-30% of net revenue for every patient you refer — not once, but every month they stay subscribed. No cap. No exclusivity. No minimum volume.";

  const features = [
      {
        title: "20-30% Residual Commission",
        description:
          "Earn on every patient you refer — not a one-time payout, but recurring revenue every month they stay subscribed. Average net revenue per patient is $150/mo. At 30%, that is $45/patient/mo flowing to you.",
        icon: "shield",
      },
      {
        title: "10% Lifetime Discount for Your Community",
        description:
          "Every patient you refer gets 10% off their subscription for life — auto-applied at checkout with your partner code. You bring them real value, and they stay longer. Everyone wins.",
        icon: "flask",
      },
      {
        title: "Zero Barrier to Entry",
        description:
          "No fees. No minimums. No exclusivity. Run clubs, Pilates studios, CrossFit boxes, personal trainers, med spas — if you have an audience that cares about their health, you qualify.",
        icon: "user",
      },
    ];

  const getIcon = (iconType) => {
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

  const maxEarnings = 10000 * avgNet * companyRate;

  const barHeight = (val) => {
    const minH = 32;
    const maxH = 160;
    return minH + (val / maxEarnings) * (maxH - minH);
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container py-20 px-8 md:px-16">
        <div className="content grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Column - Earnings Visualization */}
          <div className="order-1 md:order-1">
            <div
              className="w-full rounded-[32px] overflow-hidden relative"
              style={{
                backgroundColor: "#FAFAF8",
                border: "1px solid rgba(36,92,58,0.08)",
                minHeight: "420px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}
            >
              {!showSlider && (
                <div className="flex flex-col items-center justify-center h-full min-h-[420px] p-10 text-center">
                  <div
                    className="rounded-2xl p-6 mb-6"
                    style={{ backgroundColor: "rgba(36,92,58,0.04)" }}
                  >
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                      <rect x="10" y="50" width="20" height="20" rx="4" fill="#245C3A" opacity="0.15" />
                      <rect x="40" y="30" width="20" height="40" rx="4" fill="#245C3A" opacity="0.3" />
                      <rect x="70" y="10" width="20" height="60" rx="4" fill="#245C3A" opacity="0.5" />
                      <path d="M15 48L50 28L80 8" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" opacity="0.4" />
                    </svg>
                  </div>
                  <p
                    className="text-lg mb-2"
                    style={{ color: "#1a4d2e", fontWeight: 600, fontFamily: "DM Sans, sans-serif" }}
                  >
                    See your earning potential
                  </p>
                  <p
                    className="text-sm mb-8"
                    style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Based on $150 avg. net revenue per patient
                  </p>
                  <button
                    onClick={() => setShowSlider(true)}
                    className="px-8 py-3 rounded-md text-white text-sm transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: "#245C3A",
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Calculate your earnings
                  </button>
                </div>
              )}

              {showSlider && (
                <div className="flex flex-col items-center p-6 sm:p-10 min-h-[420px]">
                  {/* Client count hero number */}
                  <p
                    style={{
                      fontFamily: "Canela, 'Noe Display', 'Saol Display', serif",
                      fontSize: "clamp(40px, 6vw, 72px)",
                      lineHeight: "1",
                      fontWeight: 400,
                      color: "#245C3A",
                      marginBottom: "4px",
                    }}
                  >
                    {clientCount.toLocaleString()}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif", fontWeight: 400, marginBottom: "32px" }}
                  >
                    active patients
                  </p>

                  {/* Bar chart area — fixed height container */}
                  <div
                    className="w-full flex items-end justify-center gap-8 sm:gap-16"
                    style={{ height: "220px", paddingTop: "40px" }}
                  >
                    {/* Individual bar */}
                    <div className="flex flex-col items-center" style={{ alignSelf: "flex-end" }}>
                      <p
                        className="text-xs sm:text-sm mb-3"
                        style={{
                          color: "#245C3A",
                          fontWeight: 600,
                          fontFamily: "DM Sans, sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatMoney(individualEarnings)}
                      </p>
                      <div
                        className="rounded-t-lg transition-all duration-500 ease-out"
                        style={{
                          width: "clamp(48px, 12vw, 72px)",
                          height: barHeight(individualEarnings) + "px",
                          background: "linear-gradient(to top, rgba(36,92,58,0.08), rgba(36,92,58,0.18))",
                          borderTop: "3px solid rgba(36,92,58,0.3)",
                        }}
                      />
                      <div className="mt-3 text-center">
                        <p
                          className="text-xs sm:text-sm"
                          style={{ color: "#1a4d2e", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}
                        >
                          Individual
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#999", fontFamily: "DM Sans, sans-serif", fontWeight: 400 }}
                        >
                          20%
                        </p>
                      </div>
                    </div>

                    {/* Company bar */}
                    <div className="flex flex-col items-center" style={{ alignSelf: "flex-end" }}>
                      <p
                        className="text-xs sm:text-sm mb-3"
                        style={{
                          color: "#245C3A",
                          fontWeight: 600,
                          fontFamily: "DM Sans, sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatMoney(companyEarnings)}
                      </p>
                      <div
                        className="rounded-t-lg transition-all duration-500 ease-out"
                        style={{
                          width: "clamp(48px, 12vw, 72px)",
                          height: barHeight(companyEarnings) + "px",
                          background: "linear-gradient(to top, #1a4d2e, #245C3A)",
                          borderTop: "3px solid rgb(36, 92, 58)",
                        }}
                      />
                      <div className="mt-3 text-center">
                        <p
                          className="text-xs sm:text-sm"
                          style={{ color: "#1a4d2e", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}
                        >
                          Company
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#999", fontFamily: "DM Sans, sans-serif", fontWeight: 400 }}
                        >
                          30%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="w-full px-2 mt-10">
                    <input
                      type="range"
                      min={100}
                      max={10000}
                      step={500}
                      value={clientCount}
                      onChange={(e) => setClientCount(Number(e.target.value))}
                      className="w-full"
                      style={{
                        accentColor: "#245C3A",
                        cursor: "pointer",
                      }}
                    />
                    <div className="flex justify-between mt-2">
                      <span
                        className="text-xs"
                        style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}
                      >
                        100
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}
                      >
                        10,000
                      </span>
                    </div>
                  </div>

                  {/* Monthly summary */}
                  <div
                    className="w-full mt-8 pt-6 grid grid-cols-2 gap-3 sm:gap-4"
                    style={{ borderTop: "1px solid rgba(36,92,58,0.08)" }}
                  >
                    <div
                      className="rounded-xl p-3 sm:p-4 text-center"
                      style={{ backgroundColor: "rgba(36,92,58,0.04)" }}
                    >
                      <p
                        className="text-xs mb-1"
                        style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}
                      >
                        Monthly (Individual)
                      </p>
                      <p
                        style={{
                          color: "#245C3A",
                          fontWeight: 600,
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "clamp(14px, 3vw, 20px)",
                          lineHeight: 1.3,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatMoneyFull(individualEarnings)}/mo
                      </p>
                    </div>
                    <div
                      className="rounded-xl p-3 sm:p-4 text-center"
                      style={{ backgroundColor: "rgba(36,92,58,0.04)" }}
                    >
                      <p
                        className="text-xs mb-1"
                        style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}
                      >
                        Monthly (Company)
                      </p>
                      <p
                        style={{
                          color: "#245C3A",
                          fontWeight: 600,
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "clamp(14px, 3vw, 20px)",
                          lineHeight: 1.3,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatMoneyFull(companyEarnings)}/mo
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
