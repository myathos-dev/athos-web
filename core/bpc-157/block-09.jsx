import { useState } from "react";

export default function Block() {
  const [openIndex, setOpenIndex] = useState(null);

  const heading = "Frequently Asked Questions";

  const faqs = [
      {
        question: "What is BPC-157?",
        answer: "It is a \"Body Protection Compound\" modeled after a natural peptide found in human gastric juice. It acts as a universal repair signal, instructing your body to accelerate the healing of tendons, ligaments, muscles, and the gut lining.",
      },
      {
        question: "What is the best way to take BPC-157?",
        answer: "The \"best\" route depends entirely on your specific goals. Oral is the gold standard for gut health—because BPC-157 is acid-stable, capsules target the digestive lining directly to help with issues like \"Leaky Gut.\" Nasal spray is the preferred choice for cognitive support, bypassing the blood-brain barrier to target neuroinflammation and \"brain fog.\" Your provider will recommend the right route for you.",
      },
      {
        question: "How does it actually help me heal?",
        answer: "BPC-157 triggers \"angiogenesis,\" which is the formation of new blood vessels. By increasing blood flow to damaged areas—especially tissues like tendons that normally have poor circulation—it delivers the oxygen and nutrients needed to speed up the biological clock of recovery.",
      },
      {
        question: "Is it safe?",
        answer: "Yes. BPC-157 is a very stable molecule and is highly biocompatible because it mimics a compound your body already produces. We partner with top-tier, US-based pharmacies that test every batch for 99%+ purity to ensure maximum safety and effectiveness.",
      },
      {
        question: "Will I have side effects?",
        answer: "Side effects are rare and typically very mild. Unlike many other treatments, BPC-157 is not a hormone or a stimulant, so it doesn't cause jitters or hormonal imbalances. Most users find it exceptionally easy to tolerate.",
      },
      {
        question: "How soon will I see results?",
        answer: "For acute pain or minor strains, many users feel a noticeable improvement in mobility and a reduction in discomfort within the first 48 to 72 hours. For chronic structural repair or deep gut healing, the most significant changes usually occur over a 4 to 6-week consistent cycle.",
      },
      {
        question: "How do I take it?",
        answer: "Simply take your daily oral dose as directed by your provider—either as a capsule or sublingual liquid placed under the tongue for rapid absorption. No needles, no mixing, no guesswork. It fits seamlessly into your daily routine.",
      },
      {
        question: "Can I take BPC-157 with weight-loss peptides?",
        answer: "Absolutely. Many people use BPC-157 alongside metabolic peptides to ensure their joints and muscles stay healthy as they increase their activity levels. It helps prevent \"sidelining\" injuries, keeping you consistent on your transformation journey.",
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
              href="/getpeptides/recovery"
              className="relative px-8 py-4 rounded-full text-white font-sans font-semibold text-base md:text-lg transition-opacity hover:opacity-90 no-underline"
              style={{
                backgroundColor: "#16625F",
                boxShadow: "0 0 20px rgba(22, 98, 95, 0.4), 0 0 60px rgba(22, 98, 95, 0.2)",
              }}
            >
              FREE WELLNESS EVALUATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}