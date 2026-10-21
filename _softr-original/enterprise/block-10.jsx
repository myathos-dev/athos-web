import { useState } from "react";

var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var FAQS = [
  {
    q: "What is the difference between Black Label and White Label?",
    a: "Black Label is a revenue share model — you refer patients through Athos-branded flows, we handle everything, you keep 40–60% of revenue. White Label is a full platform — your brand, your domain, your Stripe, your patient relationship. You keep 100% of the margin above cost.",
  },
  {
    q: "Do I need a medical license?",
    a: "No. Our physician network handles every consultation and prescription in all 50 states. You never touch a clinical decision. You market and refer.",
  },
  {
    q: "How fast can I launch?",
    a: "Black Label partners go live same day with a tracking link and promo code. White Label partners launch within 72 hours with custom branding, intake forms, and checkout.",
  },
  {
    q: "What does it actually cost?",
    a: "Black Label: $0 upfront, $0/month. You earn 40–60% of revenue on every patient. White Label: $10,000 onboarding + $500/month for the physician network and platform. You set your own prices and keep the spread.",
  },
  {
    q: "What products can I sell?",
    a: "The full 503 compounding catalog: 1,884 SKUs across 12 clinical categories. Weight loss (semaglutide, tirzepatide, retatrutide, phentermine), peptides and longevity (BPC-157, NAD+, GHK-Cu, sermorelin, 17 proprietary blends), hormone therapy (testosterone, progesterone, DHEA, HCG), sexual health (sildenafil, tadalafil, PT-141, TriMix), dermatology, thyroid, neuro, vitamins, and more. 224 compounds across 503A and 503B compounding networks. You choose which categories to activate.",
  },
  {
    q: "Who handles prescribing?",
    a: "Licensed physicians in all 50 states. Async review with a 52-minute average response time. We operate the physician network — you never recruit, credential, or manage a single provider.",
  },
  {
    q: "Who handles fulfillment?",
    a: "Our 503A and 503B compounding network. Cold-chain shipping nationwide. Orders are auto-routed to the appropriate pharmacy based on the prescription.",
  },
  {
    q: "Can I set my own prices?",
    a: "Black Label partners can set prices above MSRP and keep the spread. White Label partners have full pricing control — you set the price, you collect the payment through your Stripe. Typical partner margins are 2.5–3x.",
  },
  {
    q: "Who owns the patient relationship?",
    a: "Black Label: shared — patients interact with Athos-branded flows. White Label: 100% yours — patients see your brand at every touchpoint and never see ours.",
  },
  {
    q: "Can I switch from Black Label to White Label later?",
    a: "Yes. Many partners start with Black Label to validate demand, then upgrade to White Label when they are ready to own the brand. The product catalog and physician network are the same on both tiers.",
  },
];

export default function Block() {
  var _open = useState(-1);
  var open = _open[0];
  var setOpen = _open[1];

  function toggle(i) {
    setOpen(open === i ? -1 : i);
  }

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      <div
        className="container"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Headline */}
        <h2
          style={{
            fontFamily: FB,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#0f0f0f",
            textAlign: "center",
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          Common{" "}
          <em
            style={{
              fontFamily: FH,
              fontStyle: "italic",
              fontWeight: 400,
              color: PR,
            }}
          >
            Questions
          </em>
        </h2>

        {/* Accordion */}
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {FAQS.map(function(faq, i) {
            var isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <button
                  onClick={function() { toggle(i); }}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 4px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: FB,
                      fontSize: "clamp(14px, 1.2vw, 15px)",
                      fontWeight: 600,
                      color: "#111",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontFamily: FB,
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#bbb",
                      flexShrink: 0,
                      width: 24,
                      textAlign: "center",
                      transition: "transform 200ms ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 400 : 0,
                    transition: "max-height 300ms ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: FB,
                      fontSize: 14,
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "#666",
                      padding: "0 4px 24px",
                      maxWidth: 680,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}