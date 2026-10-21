import { useState } from "react";

export default function Block() {
  const [openIndex, setOpenIndex] = useState(null);

  const heading = "Frequently Asked Questions";

  const faqs = [
      {
        question: "What are these peptide blends?",
        answer: "These are \"synergistic stacks\" that combine multiple high-end peptides into a single oral formulation. Instead of targeting just one biological pathway, these blends are engineered to hit several targets at once—such as fat mobilization, tissue repair, and cognitive clarity—making your regimen much more efficient.",
      },
      {
        question: "Why should I choose a blend over a single peptide?",
        answer: "Efficiency and synergy. A blend combines compounds that move fat out of storage with peptides that help your body actually \"burn\" that fat. It's the difference between having a map and having a map plus a professional guide; the results are typically faster and more comprehensive.",
      },
      {
        question: "How do I know which blend is right for me?",
        answer: "It depends on your primary goal. Some blends are best for aggressive fat loss and body composition, targeting stubborn visceral fat. Others are best for recovery, cellular healing, and metabolic \"resets\" including skin, joints, and NAD+ support. And others are designed specifically for mental performance, focus, and eliminating \"brain fog.\"",
      },
      {
        question: "Are these blends safe?",
        answer: "Yes, when used under medical supervision. We only use ingredients from top-tier, US-based pharmacies that test for extreme purity. By combining these at specific, balanced ratios, we can often achieve better results with lower individual doses of each compound, which can actually improve the overall safety profile.",
      },
      {
        question: "Will I have side effects?",
        answer: "Because these blends are potent, you might notice mild effects like temporary digestive discomfort or a brief \"flush.\" Blends containing growth hormone secretagogues may cause slight water retention or tingling in the fingers as your body adjusts. These are usually mild and fade quickly.",
      },
      {
        question: "How soon will I see results?",
        answer: "Most users report an immediate \"feeling\" of improved energy or mental clarity within the first week. For physical body changes and fat loss, you'll typically notice significant visual progress and improved clothing fit within 3 to 5 weeks of consistent use.",
      },
      {
        question: "How do I take them?",
        answer: "Simply take your daily oral dose as directed by your provider—either as a tablet or sublingual liquid placed under the tongue for rapid absorption. No needles, no mixing, no guesswork. It fits seamlessly into your morning routine.",
      },
      {
        question: "Can I switch between blends?",
        answer: "Many people do. You might start with one blend to kickstart a transformation and then move to another for maintenance and repair. Your doctor can help you design a \"rotation\" that prevents your body from plateauing and keeps your results moving forward.",
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
              FREE WELLNESS EVALUATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}