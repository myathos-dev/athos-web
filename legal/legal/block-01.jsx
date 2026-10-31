
export default function Block() {
  const pageTitle = "Legal & Transparency";
  const lastUpdated = "April 19, 2026";
  const contactEmail = "legal@athos.example";

  const privacyPolicyLink = { action: "OPEN_PAGE", destination: "/legal/privacy-policy", openIn: "SELF" };
  const ccpaLink = { action: "OPEN_PAGE", destination: "/legal/ccpa", openIn: "SELF" };
  const tosLink = { action: "OPEN_PAGE", destination: "/legal/terms-of-service", openIn: "SELF" };
  const rrrLink = { action: "OPEN_PAGE", destination: "/legal/rrr-policy", openIn: "SELF" };
  const weightLossLink = { action: "OPEN_PAGE", destination: "/legal/medical-weight-loss-consumer-bill-of-rights", openIn: "SELF" };
  const adaLink = { action: "OPEN_PAGE", destination: "/legal/ada-compliance", openIn: "SELF" };
  const consentLink = { action: "OPEN_PAGE", destination: "/legal/medical-consent", openIn: "SELF" };
  const nppLink = { action: "OPEN_PAGE", destination: "/legal/pcmso", openIn: "SELF" };

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

          {/* Who Is Who */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ color: "#1a1a1a" }}>Who is who</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Athos — Platform Operator</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix-demo. Athos provides administrative and operational support to licensed physicians and healthcare practitioners who deliver clinical care through a secure telehealth platform. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making in any capacity. Athos does not collect or store personal data. All information entered on the Platform exists at the session level only and is cleared on browser refresh.</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Dhruv Physician Assistant, A Professional Corporation P.C. — Medical Services Organization</p>
                <p className="text-sm leading-relaxed text-muted-foreground">All clinical care, prescribing, dispensing, and data storage are performed by My Dhruv Physician Assistant, A Professional Corporation ("MSO"), an independent Medical Services Organization operating licensed 503(A) compounding pharmacies and FDA-registered 503(B) outsourcing facilities, with a physician network across all 50 states. The MSO is the sole entity that collects and stores your personal and health-related data, which occurs only at the point of checkout.</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Providers — Independent Licensed Clinicians</p>
                <p className="text-sm leading-relaxed text-muted-foreground">All treatment decisions are made solely by independent, licensed healthcare providers employed or contracted by the MSO. Providers exercise independent clinical judgment without the influence of Athos or the MSO. Payment for platform services does not guarantee the prescribing or dispensing of any medication.</p>
              </div>
            </div>
          </div>

          {/* Documents — Athos */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-2" style={{ color: "#1a1a1a" }}>Athos — Platform Policies</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">These documents govern your use of the Athos platform, including how we operate, your rights, and your responsibilities.</p>
            <div className="space-y-3">
              <a href={privacyPolicyLink.destination} target={privacyPolicyLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Privacy Policy</p>
                      <p className="text-sm text-muted-foreground mt-1">How Athos handles session-level data and how the MSO collects and stores your information at checkout.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
              <a href={ccpaLink.destination} target={ccpaLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>CCPA Notice</p>
                      <p className="text-sm text-muted-foreground mt-1">California-specific privacy rights, data categories collected by the MSO, and how to exercise your rights.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
              <a href={tosLink.destination} target={tosLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Terms of Service</p>
                      <p className="text-sm text-muted-foreground mt-1">The full agreement governing your use of the Platform, including arbitration, subscriptions, and liability.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
              <a href={rrrLink.destination} target={rrrLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Refunds, Returns & Replacements</p>
                      <p className="text-sm text-muted-foreground mt-1">No refunds, no returns. How to report issues, reorder fees, and our satisfaction guarantee.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
              <a href={adaLink.destination} target={adaLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>ADA Compliance</p>
                      <p className="text-sm text-muted-foreground mt-1">Our commitment to digital accessibility and WCAG 2.1 AA compliance.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Documents — MSO */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-2" style={{ color: "#1a1a1a" }}>Dhruv Physician Assistant, A Professional Corporation — Clinical & Medical Policies</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">These documents are issued by Dhruv Physician Assistant, A Professional Corporation P.C. and govern the clinical services, health data practices, and medical consent for care delivered through the Platform.</p>
            <div className="space-y-3">
              <a href={nppLink.destination} target={nppLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Notice of Privacy Practices</p>
                      <p className="text-sm text-muted-foreground mt-1">How the MSO uses and discloses your Protected Health Information (PHI) under HIPAA.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
              <a href={consentLink.destination} target={consentLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Telehealth Medical Consent</p>
                      <p className="text-sm text-muted-foreground mt-1">Informed consent for receiving healthcare services via telehealth, including risks, benefits, and patient acknowledgments.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Documents — Regulatory */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-2" style={{ color: "#1a1a1a" }}>Regulatory Compliance</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">State-mandated disclosures and statutory compliance notices.</p>
            <div className="space-y-3">
              <a href={weightLossLink.destination} target={weightLossLink.openIn === "NEW_TAB" ? "_blank" : undefined}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Weight-Loss Consumer Bill of Rights</p>
                      <p className="text-sm text-muted-foreground mt-1">Florida Statute § 501.0575 — your rights as a weight-loss program consumer.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Compounded Medications Disclosure */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-4" style={{ color: "#1a1a1a" }}>Compounded Medications Disclosure</h2>
            <div className="rounded-xl p-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">All compounded medications offered through this platform are prescribed by independent, licensed healthcare providers and compounded exclusively by Dhruv Physician Assistant, A Professional Corporation P.C., licensed 503(A) compounding pharmacies and/or FDA-registered 503(B) outsourcing facilities operating in the United States. Product imagery on this website is for illustrative purposes and reflects medications compounded by licensed pharmacy partners, not by Athos.</p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">Compounded medications are not FDA-approved and have not undergone pre-market review for safety, efficacy, or quality. Compounded semaglutide is not equivalent to, and should not be substituted for, any FDA-approved drug product. Individual results may vary. Data from clinical trials conducted on FDA-approved medications should not be used to assess compounded medications.</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Payment for platform services does not guarantee the prescribing or dispensing of any medication. All treatment decisions are made solely at the discretion of the prescribing provider based on individual medical assessment.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-4" style={{ color: "#1a1a1a" }}>Questions</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you have questions about any of our legal documents or need to request a copy in an alternative format, contact us at <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
          </div>

          {/* Full Disclaimer */}
          <div className="pt-10" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix-demo, providing administrative and operational support to licensed physicians and healthcare practitioners who deliver clinical care through a secure telehealth platform. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making in any capacity.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">All compounded medications offered through this platform are prescribed by independent, licensed healthcare providers and compounded exclusively by Dhruv Physician Assistant, A Professional Corporation P.C., licensed 503(A) compounding pharmacies and/or FDA-registered 503(B) outsourcing facilities operating in the United States. Product imagery on this website is for illustrative purposes and reflects medications compounded by licensed pharmacy partners, not by Athos.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Compounded medications are not FDA-approved and have not undergone pre-market review for safety, efficacy, or quality. Compounded semaglutide is not equivalent to, and should not be substituted for, any FDA-approved drug product. Individual results may vary. Data from clinical trials conducted on FDA-approved medications should not be used to assess compounded medications.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Payment for platform services does not guarantee the prescribing or dispensing of any medication. All treatment decisions are made solely at the discretion of the prescribing provider based on individual medical assessment.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">The information on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Consult a qualified healthcare professional regarding any medical condition or treatment.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">This website constitutes an advertisement for telehealth platform services.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}