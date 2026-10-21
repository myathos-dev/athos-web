import { useTextSetting, useLongTextSetting, useNavigationSetting } from "@/lib/editable-settings";
import { NavigationAction } from "@/components/navigation-action";

export default function Block() {
  const pageTitle = useTextSetting({
    name: "page-title",
    label: "Page title",
    initialValue: "Partner Legal & Compliance",
  });
  const lastUpdated = useTextSetting({
    name: "last-updated",
    label: "Last updated date",
    initialValue: "April 22, 2026",
  });
  const contactEmail = useTextSetting({
    name: "contact-email",
    label: "Compliance contact email",
    initialValue: "compliance@athoshealth.com",
  });

  const msaLink = useNavigationSetting({
    name: "msa-link",
    label: "Marketing Services Agreement link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/msa", openIn: "SELF" },
  });
  const disclosureLink = useNavigationSetting({
    name: "disclosure-link",
    label: "Affiliate Disclosure link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/disclosure", openIn: "SELF" },
  });
  const complianceLink = useNavigationSetting({
    name: "compliance-link",
    label: "Partner Compliance Guidelines link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/compliance", openIn: "SELF" },
  });
  const privacyLink = useNavigationSetting({
    name: "privacy-link",
    label: "Privacy Policy link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/privacy", openIn: "SELF" },
  });
  const termsLink = useNavigationSetting({
    name: "terms-link",
    label: "Terms of Use link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/terms", openIn: "SELF" },
  });
  const fmvLink = useNavigationSetting({
    name: "fmv-link",
    label: "FMV Certification link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/fmv-certification", openIn: "SELF" },
  });
  const cashPayLink = useNavigationSetting({
    name: "cash-pay-link",
    label: "Cash-Pay Policy link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/cash-pay-policy", openIn: "SELF" },
  });
  const agreementLink = useNavigationSetting({
    name: "agreement-link",
    label: "Partner Agreement link",
    initialValue: { action: "OPEN_PAGE", destination: "/legal/partners/agreement", openIn: "SELF" },
  });
  const applicationLink = useNavigationSetting({
    name: "application-link",
    label: "Partner Application link",
    initialValue: { action: "OPEN_PAGE", destination: "/partners/intake/category", openIn: "SELF" },
  });

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
                <p className="text-sm leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix. Athos provides administrative, operational, and technology services only. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making. The Athos Partner Program is a marketing program — not a clinical referral program.</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Dhruv Physician Assistant, A Professional Corporation P.C. — Medical Services Organization</p>
                <p className="text-sm leading-relaxed text-muted-foreground">All clinical care, prescribing, dispensing, and patient data storage are performed by Dhruv Physician Assistant, A Professional Corporation ("MSO"), an independent Medical Services Organization operating licensed 503(A) compounding pharmacies and FDA-registered 503(B) outsourcing facilities, with a physician network across all 50 states. Partners have no contact with or access to the MSO, its clinical staff, or any patient data.</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Marketing Partners — Independent Contractors</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Marketing Partners are independent contractors who perform promotional and advertising services on behalf of Athos. Partners are not healthcare providers, clinical referral sources, or employees of Athos or the MSO. A clinical firewall separates all marketing activities from clinical operations. Partners have zero involvement in patient evaluations, prescribing decisions, or treatment plans.</p>
              </div>
            </div>
          </div>

          {/* Partner Program Documents */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-2" style={{ color: "#1a1a1a" }}>Partner Program Documents</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">These documents govern the Athos Partner Program, including your rights, obligations, compensation, and compliance requirements.</p>
            <div className="space-y-3">
              <NavigationAction navigation={msaLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Marketing Services Agreement</p>
                      <p className="text-sm text-muted-foreground mt-1">The core agreement between Athos and each Marketing Partner. Covers scope of services, compensation, clinical firewall, term, and termination.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
              <NavigationAction navigation={disclosureLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Affiliate Disclosure</p>
                      <p className="text-sm text-muted-foreground mt-1">FTC-required disclosure of material connections between Athos and Marketing Partners. Includes pre-written disclosure language for all platforms.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
              <NavigationAction navigation={complianceLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Partner Compliance Guidelines & Acceptable Use Policy</p>
                      <p className="text-sm text-muted-foreground mt-1">What you can and cannot say when promoting Athos. Approved claims, prohibited claims, platform-specific rules, and enforcement.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
              <NavigationAction navigation={privacyLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Privacy Policy</p>
                      <p className="text-sm text-muted-foreground mt-1">How data is handled across the Platform, including affiliate tracking technologies and state-specific privacy addenda.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
              <NavigationAction navigation={termsLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Terms of Use & Medical Disclaimer</p>
                      <p className="text-sm text-muted-foreground mt-1">Platform terms, medical disclaimer, compounded product disclaimer, partner content disclaimer, and limitation of liability.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
            </div>
          </div>

          {/* Compliance & Transparency */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-2" style={{ color: "#1a1a1a" }}>Compliance & Transparency</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">These documents establish the regulatory safeguards underlying the Athos Partner Program.</p>
            <div className="space-y-3">
              <NavigationAction navigation={fmvLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Fair Market Value Certification</p>
                      <p className="text-sm text-muted-foreground mt-1">Independent third-party validation that partner compensation reflects fair market value for marketing services provided.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
              <NavigationAction navigation={cashPayLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Cash-Pay Policy</p>
                      <p className="text-sm text-muted-foreground mt-1">Attestation that Athos operates exclusively on a cash-pay basis and does not participate in any Federal or state health care program.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
            </div>
          </div>

          {/* Clinical Firewall */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-4" style={{ color: "#1a1a1a" }}>Clinical Firewall</h2>
            <div className="rounded-xl p-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">An explicit separation exists between marketing activities and clinical operations. This clinical firewall is a material term of every Marketing Services Agreement and is enforced without exception.</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Partners have zero involvement in clinical evaluations, prescribing decisions, or treatment plans.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Partners do not access, receive, or store protected health information.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Partners receive only aggregated, de-identified conversion data — never clinical details.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Partner compensation is paid for marketing services and is not influenced by the volume or value of referrals.</li>
              </ul>
            </div>
          </div>

          {/* Get Started */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-2" style={{ color: "#1a1a1a" }}>Get Started</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">Ready to join the Athos Partner Program? Start with the application or review your agreement.</p>
            <div className="space-y-3">
              <NavigationAction navigation={applicationLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#16625F", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#FFFFFF" }}>Apply to the Partner Program</p>
                      <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>Complete the intake form to begin the onboarding process. State-specific documents will be assigned automatically.</p>
                    </div>
                    <span className="ml-4" style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
              <NavigationAction navigation={agreementLink}>
                <div className="rounded-xl p-5 cursor-pointer transition-all hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>Partner Agreement</p>
                      <p className="text-sm text-muted-foreground mt-1">Review or sign your Partner Agreement, including any applicable state-specific addenda.</p>
                    </div>
                    <span className="text-muted-foreground ml-4" style={{ fontSize: "20px" }}>→</span>
                  </div>
                </div>
              </NavigationAction>
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
            <p className="text-base leading-relaxed text-muted-foreground">For compliance questions, content pre-approval requests, or to report a concern, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
          </div>

          {/* Disclaimer */}
          <div className="pt-10" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix, providing administrative and operational support to licensed physicians and healthcare practitioners. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">All clinical services are delivered by Dhruv Physician Assistant, A Professional Corporation, an independent Medical Services Organization operating licensed 503(A) compounding pharmacies and FDA-registered 503(B) outsourcing facilities, with a physician network across all 50 states.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Compounded medications are not FDA-approved. Compounded semaglutide is not equivalent to any FDA-approved product. Individual results may vary. Payment does not guarantee prescribing or dispensing of any medication. All treatment decisions are made by the prescribing provider.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. This website constitutes an advertisement for telehealth platform services.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}