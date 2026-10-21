import { useState } from "react";

export default function Block() {
  const [openIndex, setOpenIndex] = useState(null);

  const heading = "Partner Program FAQ";

  const faqs = [
      {
        question: "How much can I earn?",
        answer: "You earn 20-30% of net revenue for every patient you refer — every month they stay subscribed. Net revenue averages $150/patient/mo after processing fees. At 30%, that is $45/patient/mo. There is no cap on earnings.",
      },
      {
        question: "What does my referral get?",
        answer: "Every patient who uses your promo code receives 10% off their subscription for life. The discount is auto-applied at checkout and renews every billing cycle with no action required.",
      },
      {
        question: "How do I get paid?",
        answer: "Payouts are sent monthly via Venmo, Zelle, or ACH within 7 days of the billing cycle close. You receive a monthly earnings report with clicks, active patients, and payout breakdown.",
      },
      {
        question: "Is there a minimum referral volume?",
        answer: "No. There is no minimum number of referrals required. You earn from your first successful referral and every one after that.",
      },
      {
        question: "Do I need to be exclusive to Athos?",
        answer: "No. There is no exclusivity requirement. You can partner with other brands and programs simultaneously.",
      },
      {
        question: "Who qualifies as a partner?",
        answer: "Run clubs, Pilates studios, CrossFit boxes, personal trainers, chiropractors, med spas, influencers — anyone with an audience that invests in their health. There are no fees to join.",
      },
      {
        question: "What tools do I receive?",
        answer: "You receive a unique tracking link and promo code, a co-branded digital flyer ready for Instagram or email, a monthly earnings report, and a dedicated partner contact.",
      },
      {
        question: "How is commission calculated?",
        answer: "Commission is based on net revenue — gross subscription minus approximately 5% payment processing costs. For a $250/mo subscription, net is approximately $238. Your commission is 20-30% of that amount, recurring monthly.",
      },
      {
        question: "When does my commission start?",
        answer: "Commission activates on the first successful payment from a referred patient. It recurs automatically every month the patient remains subscribed with no action required from you.",
      },
    ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 md:py-20" style={{ backgroundColor: "#f5f2ed" }}>
      <div className="container">
        <div className="content max-w-3xl mx-auto">
          {heading && (
            <h2
              className="text-4xl md:text-5xl text-center mb-12 leading-tight"
              style={{
                color: "#1B3022",
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 600,
              }}
            >
              {heading}
            </h2>
          )}

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index}>
                {index > 0 && (
                  <div
                    className="h-px w-full"
                    style={{ backgroundColor: "#E5E7EB" }}
                  />
                )}

                <div>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between gap-4 py-6 md:py-7 text-left hover:opacity-80 transition-opacity"
                  >
                    <span
                      className="font-sans font-semibold text-base md:text-lg"
                      style={{ color: "#333333" }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className="flex-shrink-0 w-5 h-5 transition-transform duration-300"
                      style={{
                        transform:
                          openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        className="w-full h-full"
                        fill="none"
                        stroke="#333333"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14m-7-7h14" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openIndex === index ? "500px" : "0px",
                    }}
                  >
                    <div className="pb-6 pr-8">
                      <p
                        className="font-sans text-base leading-relaxed"
                        style={{ color: "#4B5563" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="h-px w-full"
              style={{ backgroundColor: "#E5E7EB" }}
            />
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/"
              className="relative px-8 py-4 rounded-full text-white font-sans font-semibold text-base md:text-lg transition-opacity hover:opacity-90 no-underline"
              style={{
                backgroundColor: "#16625F",
                boxShadow: "0 0 20px rgba(22, 98, 95, 0.4), 0 0 60px rgba(22, 98, 95, 0.2)",
              }}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
