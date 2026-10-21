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
        question: "What are GLP-based weight loss medications?",
        answer: "GLP-based medications are a class of metabolic treatments—including Semaglutide, Tirzepatide, and Retatrutide—that mimic natural hormones in your body. They help regulate appetite, improve how your body processes sugar, and slow down digestion, making it easier to achieve sustainable weight loss by reducing 'food noise' and hunger.",
      },
      {
        question: "What is the difference between Semaglutide, Tirzepatide, and Retatrutide?",
        answer: "While all three target hunger, they use different pathways. Semaglutide mimics one hormone (GLP-1), Tirzepatide mimics two (GLP-1 and GIP) for added metabolic support, and Retatrutide is a 'triple-action' therapy targeting three hormones (GLP-1, GIP, and Glucagon) to potentially increase energy expenditure. Your provider will help determine which 'level' of support is right for your unique biology.",
      },
      {
        question: "How are these medications administered?",
        answer: "To fit your lifestyle and preferences, we offer these medications in several forms: traditional weekly subcutaneous injections, convenient oral options, and sublingual liquid formulations. During your consultation, you can discuss which delivery method—oral, injectable, or liquid—best matches your comfort level and health goals.",
      },
      {
        question: "How do compounded GLP medications differ from brand names?",
        answer: "Compounded medications are custom-prepared by licensed 503A or 503B pharmacies. They contain the same active ingredients as brand-name versions but allow for flexible dosing and alternative delivery methods (like liquids or orals) when commercial products are in short supply or don't meet a patient's specific needs. Every batch we provide is third-party tested for purity and potency.",
      },
      {
        question: "Are these medications safe?",
        answer: "GLP medications have been widely studied and are considered safe when prescribed by a licensed healthcare provider and sourced from regulated pharmacies. However, compounded versions are not FDA-approved and may carry different risks than brand-name drugs. We prioritize safety by only working with FDA-registered compounding facilities that provide a Certificate of Analysis for every medication.",
      },
      {
        question: "What are the common side effects?",
        answer: "The most common side effects are gastrointestinal, such as mild nausea, indigestion, or changes in bowel habits. These typically occur when first starting the medication or increasing a dose and usually subside as your body adjusts. Starting at a lower dose and following your provider's guidance helps minimize these effects.",
      },
      {
        question: "How long does it take to see weight loss results?",
        answer: "Many patients notice a decrease in appetite within the first few weeks, with visible weight loss usually beginning within the first month. Because these medications work best when your body acclimates slowly, results are typically most significant after 3 to 6 months of consistent use alongside healthy lifestyle choices.",
      },
      {
        question: "Can I switch between different GLP medications or delivery methods?",
        answer: "Yes, under medical supervision. Many patients start with one medication or delivery method (like an oral liquid) and may transition to another (like an injectable) based on their progress and how their body responds. Your healthcare provider will manage any transitions to ensure safety and continued results.",
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
