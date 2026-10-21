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
        question: "What is the Semaglutide Injection?",
        answer: "It is a once-weekly shot that helps you manage your weight by mimicking a natural hormone in your body. Our version is 'compounded,' meaning it is custom-made for you in a high-end, regulated pharmacy. It contains the same active ingredient as the famous brand-name shots but allows for more flexible dosing and a reliable supply.",
      },
      {
        question: "How does the shot actually help me lose weight?",
        answer: "Think of it as a 'reset' for your appetite. It slows down how quickly your stomach empties and tells your brain that you're full. Most people notice that 'food noise'—those constant cravings and thoughts about your next meal—simply disappears, making it much easier to stick to healthy portions.",
      },
      {
        question: "Is this injection safe for me?",
        answer: "Yes, when used under the care of a licensed doctor. We only work with top-tier, US-based pharmacies that test every single batch for purity. While these custom mixes aren't pre-approved by the FDA, we ensure they meet strict quality standards so you know exactly what you're putting into your body.",
      },
      {
        question: "Does the injection hurt?",
        answer: "Not really! It uses a very tiny, thin needle designed to go just under the skin (usually in your stomach or thigh). It's a quick, once-a-week process that takes about 30 seconds. Most of our members are surprised by how easy and painless it actually is.",
      },
      {
        question: "Will I have side effects?",
        answer: "Some people feel a bit of nausea or an upset stomach at first, especially in the first few weeks. To prevent this, we start you on a very low dose and slowly increase it as your body gets used to the medication. Most side effects are mild and fade away quickly.",
      },
      {
        question: "How much weight can I expect to lose?",
        answer: "Everyone is different, but the results with Semaglutide are typically very impressive compared to diet and exercise alone. You'll work with your doctor to set a goal that feels right for your body and lifestyle. The key is staying consistent with your weekly shots.",
      },
      {
        question: "How soon will I see the 'food noise' stop?",
        answer: "Many people feel the 'quieting' of their appetite within just a few days of their first shot. While the scale will start moving in the first month, the most exciting body changes usually happen after about 2 or 3 months when you've reached your full strength dose.",
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