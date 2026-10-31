
export default function Block() {
  const pageTitle = "Weight-Loss Consumer Bill of Rights";
  const lastUpdated = "April 19, 2026";
  const contactEmail = "support@athos.example";

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#16625F" }}>
        <div className="container py-20 md:py-28">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Legal — Florida Statute § 501.0575</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: "#FFFFFF" }}>{pageTitle}</h1>
            <p className="text-base mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div style={{ backgroundColor: "#558E8D" }}>
        <div className="container py-5">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm leading-relaxed text-center" style={{ color: "#FFFFFF" }}>Rapid weight loss may cause serious health problems. Consult your personal physician before starting any weight-loss program.</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">In accordance with Florida Statute § 501.0575, the following Weight-Loss Consumer Bill of Rights is provided to all consumers utilizing weight-loss services facilitated through the Athos platform.</p>

          {/* Warning */}
          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Warning</p>
            <p className="text-base leading-relaxed text-muted-foreground">Rapid weight loss may cause serious health problems. Rapid weight loss is weight loss of more than 1½ to 2 pounds per week or weight loss of more than 1 percent of body weight per week after the second week of participation in a weight-loss program.</p>
          </div>

          {/* Core Provisions */}
          <div className="mb-10">
            <ol className="space-y-4 pl-0">
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>1</span>
                <p className="text-base leading-relaxed text-muted-foreground">Consult your personal physician before starting any weight-loss program.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>2</span>
                <p className="text-base leading-relaxed text-muted-foreground">Only permanent lifestyle changes, such as making healthful food choices and increasing physical activity, promote long-term weight loss.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>3</span>
                <p className="text-base leading-relaxed text-muted-foreground">Qualifications of this provider are available upon request.</p>
              </li>
            </ol>
          </div>

          {/* Your Rights */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ color: "#1a1a1a" }}>Your Rights</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">As a consumer, you have a right to:</p>
            <ol className="space-y-4 pl-0">
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>1</span>
                <p className="text-base leading-relaxed text-muted-foreground">Ask questions about the potential health risks of this program and its nutritional content, psychological support, and educational components.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>2</span>
                <p className="text-base leading-relaxed text-muted-foreground">Receive an itemized statement of the actual or estimated price of the weight-loss program, including extra products, services, supplements, examinations, and laboratory tests.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>3</span>
                <p className="text-base leading-relaxed text-muted-foreground">Know the actual or estimated duration of the program.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>4</span>
                <p className="text-base leading-relaxed text-muted-foreground">Know the name, address, and qualifications of the dietitian or nutritionist who has reviewed and approved the weight-loss program in accordance with § 468.505(1)(j), Florida Statutes.</p>
              </li>
            </ol>
          </div>

          {/* Contact */}
          <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Questions or requests</p>
            <p className="text-sm leading-relaxed text-muted-foreground">To request provider qualifications, an itemized cost statement, or additional information about our weight-loss program, contact us at <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
          </div>

          {/* Statutory Reference */}
          <p className="text-xs leading-relaxed text-muted-foreground mb-2">This notice is provided in compliance with Florida Statute § 501.0575 and related provisions § 501.0573(5)–(6). Full statutory text is available at <a href="https://www.flsenate.gov/Laws/Statutes/2015/501.0575" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>flsenate.gov</a>.</p>

          {/* Disclaimer */}
          <div className="pt-10" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix-demo, providing administrative and operational support to licensed physicians and healthcare practitioners. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">All clinical services are delivered by Dhruv Physician Assistant, A Professional Corporation P.C., an independent Medical Services Organization operating licensed 503(A) compounding pharmacies and FDA-registered 503(B) outsourcing facilities, with a physician network across all 50 states.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Compounded medications are not FDA-approved. Compounded semaglutide is not equivalent to any FDA-approved product. Individual results may vary. Payment does not guarantee prescribing or dispensing of any medication. All treatment decisions are made by the prescribing provider.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. This website constitutes an advertisement for telehealth platform services.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}