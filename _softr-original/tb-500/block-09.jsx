import { useState } from "react";
import { useTextSetting, useArraySetting } from "@/lib/editable-settings";

export default function Block() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heading = useTextSetting({
    name: "heading",
    label: "Heading",
    initialValue: "Frequently Asked Questions",
  });

  const faqs = useArraySetting({
    name: "faqs",
    label: "FAQ Items",
    schema: {
      question: { type: "text", label: "Question" },
      answer: { type: "longText", label: "Answer" },
    },
    initialValue: [
      {
        question: "What is TB-500?",
        answer: "It is a synthetic version of a naturally occurring peptide your body uses to heal itself. It acts as a systemic repair signal, traveling through the bloodstream to find inflammation, rebuild damaged fibers, and restore flexibility to stiff joints.",
      },
      {
        question: "How is it different from BPC-157?",
        answer: "Think of BPC-157 as the \"local architect\" that rebuilds specific structures and heals the gut. TB-500 is the \"systemic manager\" that ensures cells can move freely through the body to reach the site of an injury. When used together, they provide both local and body-wide repair.",
      },
      {
        question: "Does my BMI or weight affect the dose?",
        answer: "Yes. Because the peptide must circulate through your entire system, those with higher body mass or a higher BMI generally require a larger \"Loading Phase\" dose to reach therapeutic saturation. A larger body requires more of the signaling molecule to ensure every area of inflammation is reached.",
      },
      {
        question: "Why is this only available as an injection?",
        answer: "TB-500 is a large peptide that would be destroyed by the digestive system if taken as a pill. To ensure 100% bioavailability and allow it to reach the deep tissues of your joints and tendons, it must be administered as a subcutaneous injection.",
      },
      {
        question: "Is it safe?",
        answer: "Yes. TB-500 is a bio-identical match for a compound your body already produces. We use only high-end, US-based pharmacies that test every batch for 99%+ purity. It is non-hormonal and does not interfere with other medications.",
      },
      {
        question: "Will I have side effects?",
        answer: "Side effects are rare. The most common is slight redness at the injection site. Because it does not affect heart rate or hormones, most users feel no different after the shot, though they notice improved joint comfort and faster recovery over time.",
      },
      {
        question: "How soon will I see results?",
        answer: "While the cellular repair starts immediately, most users report a noticeable decrease in joint stiffness and \"aching\" within the first 10 to 14 days. The most significant structural improvements typically manifest after a full 4-week loading cycle.",
      },
      {
        question: "Does the shot hurt?",
        answer: "Not really. It uses a tiny, hair-thin needle for a quick pinch just under the skin of the stomach. Since the peptide is systemic, you do not have to inject it into the painful area—it will find the injury on its own through your circulation.",
      },
      {
        question: "Can I take this even if I'm not currently injured?",
        answer: "Absolutely. Many people use TB-500 as a \"preventative\" to maintain joint flexibility and accelerate recovery from everyday exercise. It is particularly popular for those looking to stay active while managing the \"wear and tear\" that comes with age.",
      },
    ],
  });

  const toggleAccordion = (index: number) => {
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