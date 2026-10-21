
export default function Block() {
  const pageTitle = "ADA Compliance";
  const lastUpdated = "April 19, 2026";
  const accessibilityEmail = "accessibility@athoshealth.com";
  const accessibilityPhone = "(000) 000-0000";

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#16625F" }}>
        <div className="container py-20 md:py-28">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: "#FFFFFF" }}>{pageTitle}</h1>
            <p className="text-base mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p className="text-lg leading-relaxed mb-6" style={{ color: "#1a1a1a", fontWeight: 500 }}>Athos is committed to digital accessibility.</p>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">We strive to ensure our website and platform are accessible to individuals of all abilities, including those using assistive technologies such as screen readers, voice recognition software, or text-to-speech tools.</p>

          <p className="text-base leading-relaxed text-muted-foreground mb-4">If you encounter any difficulty accessing content or using any part of our site, please contact us:</p>

          <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-sm leading-relaxed text-muted-foreground">Email: <a href={"mailto:" + accessibilityEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{accessibilityEmail}</a></p>
            <p className="text-sm leading-relaxed text-muted-foreground mt-1">Phone: <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{accessibilityPhone}</span></p>
          </div>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">We welcome your feedback and will work diligently to address any barriers. Athos is actively working toward full compliance with the Web Content Accessibility Guidelines (WCAG) 2.1 AA and regularly reviews our digital properties to improve usability for all users.</p>

          {/* Disclaimer */}
          <div className="pt-10" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix, providing administrative and operational support to licensed physicians and healthcare practitioners. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">All clinical services are delivered by Dhruv Physician Assistant, A Professional Corporation P.C., an independent Medical Services Organization operating licensed 503(A) compounding pharmacies and FDA-registered 503(B) outsourcing facilities, with a physician network across all 50 states.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. This website constitutes an advertisement for telehealth platform services.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}