import { useState } from "react";

export default function Block() {
  const [openIndex, setOpenIndex] = useState(null);

  const heading = "Frequently Asked Questions";

  const faqs = [
      {
        question: "What is compounded medication?",
        answer: "Compounded medications are personalized prescriptions created specifically for your unique needs, combining FDA-approved ingredients in custom formulations.",
      },
      {
        question: "How does the intake work?",
        answer: "Our intake process is simple and online. Complete a brief health questionnaire, and our medical team will review your information to determine the best treatment plan for you.",
      },
      {
        question: "Do I need labs?",
        answer: "Lab work may be required depending on your specific treatment plan. Our medical team will let you know if labs are necessary during your consultation.",
      },
      {
        question: "How quickly can I get started?",
        answer: "Most patients can get started within 24-48 hours after completing their intake and medical review. Medication typically ships within 3-5 business days.",
      },
      {
        question: "What's included in the subscription?",
        answer: "Your subscription includes ongoing medical support, medication refills, dosage adjustments as needed, and unlimited messaging with our care team.",
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes, you can cancel your subscription at any time with no penalties or fees. Simply contact our support team or manage your subscription in your account settings.",
      },
      {
        question: "Do you take insurance?",
        answer: "We currently do not accept insurance, but we can provide documentation for you to submit to your insurance provider for potential reimbursement.",
      },
      {
        question: "How is shipping handled?",
        answer: "All medications are shipped discreetly to your door via secure courier. Shipping is included in your subscription, and you can track your package every step of the way.",
      },
      {
        question: "Is my information private?",
        answer: "Absolutely. We are fully HIPAA compliant and use bank-level encryption to protect your personal health information. Your privacy is our top priority.",
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
              href="/getpeptides"
              className="relative px-8 py-4 rounded-full text-white font-sans font-semibold text-base md:text-lg transition-opacity hover:opacity-90 no-underline"
              style={{
                backgroundColor: "#16625F",
                boxShadow: "0 0 20px rgba(22, 98, 95, 0.4), 0 0 60px rgba(22, 98, 95, 0.2)",
              }}
            >
              FREE EVALUATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}