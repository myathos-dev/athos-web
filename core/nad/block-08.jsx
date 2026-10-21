import { useState } from "react";

export default function Block() {
  const [openIndex, setOpenIndex] = useState(null);

  const heading = "Frequently Asked Questions";

  const faqs = [
      {
        question: "What is the NAD+ Injection?",
        answer: "It is a \"master coenzyme\" found in every cell of your body. NAD+ acts as the essential fuel for your mitochondria (the power plants of your cells) and powers the enzymes that repair your DNA. Since our natural levels drop as we age, this injection restores that vital energy source directly.",
      },
      {
        question: "How does it actually help me feel better?",
        answer: "Think of it as a cellular \"recharge.\" By boosting NAD+ levels, you improve how your body converts nutrients into energy. Users typically report a significant lift in mental clarity, sharper focus, better sleep quality, and much faster recovery after physical or mental exertion.",
      },
      {
        question: "Which route of administration is best for me?",
        answer: "It depends on your primary goal. Injectable is the most powerful for \"whole-body\" energy and metabolic health with 100% bioavailability. Nasal Spray is best for immediate mental performance, bypassing the blood-brain barrier to target \"brain fog\" directly. Oral is best for daily maintenance, helping keep your baseline levels steady after you've achieved a \"reset\" via other routes.",
      },
      {
        question: "Is it safe?",
        answer: "Yes. NAD+ is a molecule your body already produces naturally. Our formulations are produced in high-end, regulated pharmacies and tested for extreme purity. Because it is a natural coenzyme, it is very well-tolerated when administered under professional guidance.",
      },
      {
        question: "Will I have side effects?",
        answer: "NAD+ is very safe, but it is \"biologically active.\" If administered too quickly, you may feel a brief \"flush,\" mild nausea, or a slight pressure in the chest or stomach. These sensations are temporary and usually disappear within a few minutes as the coenzyme is absorbed by your cells.",
      },
      {
        question: "How soon will I see results?",
        answer: "Many people notice a \"lift\" in mental clarity and physical energy within hours of an injection or nasal spray. While the immediate energy boost is exciting, the deeper cellular benefits—like DNA repair and anti-aging effects—accumulate over 3 to 4 weeks of consistent use.",
      },
      {
        question: "Does the injection hurt?",
        answer: "Hardly. It uses a tiny, thin needle for a quick shot just under the skin (subcutaneous) or into the muscle. The process takes about 30 seconds once or twice a week, and most people find it nearly painless compared to the significant boost in well-being they receive.",
      },
      {
        question: "Can I use it with weight-loss peptides like Semaglutide?",
        answer: "Yes. In fact, many people use them together. While weight-loss peptides manage appetite, NAD+ supports the cellular energy and metabolic rate needed to feel your best during a body transformation.",
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
              href="/getpeptides/longevity"
              className="relative px-8 py-4 rounded-full text-white font-sans font-semibold text-base md:text-lg transition-opacity hover:opacity-90 no-underline"
              style={{
                backgroundColor: "#16625F",
                boxShadow: "0 0 20px rgba(22, 98, 95, 0.4), 0 0 60px rgba(22, 98, 95, 0.2)",
              }}
            >
              GET A FREE WELLNESS EVALUATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}