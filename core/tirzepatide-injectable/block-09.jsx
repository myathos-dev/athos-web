import { useState } from "react";

export default function Block() {
  const [openIndex, setOpenIndex] = useState(null);

  const heading = "Frequently Asked Questions";

  const faqs = [
      {
        question: "What is the Tirzepatide Injection?",
        answer: "It is a once-weekly shot that mimics two natural hormones (GLP-1 and GIP) to manage weight. Our version is \"compounded,\" meaning it's custom-made in a high-end, regulated pharmacy. It contains the same active ingredient as brand-name versions but offers more flexible dosing and a steady supply.",
      },
      {
        question: "How is it different from other weight loss shots?",
        answer: "While older shots target one hormone, Tirzepatide targets two. This \"dual-action\" approach provides a more powerful reset for your metabolism and appetite, making it highly effective at quieting \"food noise\" and curbing intense cravings.",
      },
      {
        question: "Is the injection safe?",
        answer: "Yes, when used under a licensed doctor's care. We work only with top-tier, US-based pharmacies that test every batch for purity. While custom mixes aren't pre-approved by the FDA, they are produced in regulated facilities to ensure they meet strict quality and safety standards.",
      },
      {
        question: "Does the shot hurt?",
        answer: "Hardly. It uses a tiny, thin needle designed for a quick injection just under the skin (usually the stomach or thigh). The process takes about 30 seconds once a week, and most people find it much easier and more painless than they expected.",
      },
      {
        question: "Will I have side effects?",
        answer: "Some people feel mild nausea or an upset stomach initially. To prevent this, we start you on a very low dose and gradually increase it as your body adapts. Most side effects are temporary and fade quickly as you adjust to the medication.",
      },
      {
        question: "How much weight can I expect to lose?",
        answer: "Clinical results for Tirzepatide are among the highest ever recorded for weight loss medication. While everyone is different, most people see significant changes compared to diet alone. You'll work with your doctor to set and reach goals that fit your lifestyle.",
      },
      {
        question: "How soon will the \"food noise\" stop?",
        answer: "Many feel their appetite \"quiet\" within just a few days of the first shot. While the most dramatic physical transformations usually happen after 2 or 3 months at a full dose, the freedom from constant cravings often starts almost immediately.",
      },
    ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
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
              href="/getpeptides/weight-loss"
              className="relative px-8 py-4 rounded-full text-white font-sans font-semibold text-base md:text-lg transition-opacity hover:opacity-90 no-underline"
              style={{
                backgroundColor: "#16625F",
                boxShadow: "0 0 20px rgba(22, 98, 95, 0.4), 0 0 60px rgba(22, 98, 95, 0.2)",
              }}
            >
              GET A FREE WEIGHTLOSS EVALUATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}