
export default function Block() {
  const pageTitle = "Privacy Policy";
  const lastUpdated = "April 19, 2026";
  const contactEmail = "privacy@athos.example";
  const supportEmail = "support@athos.example";
  const emergencyNotice = "Athos is limited to providing consultations for specific non-emergency medical conditions. If you believe you are experiencing a medical emergency, please dial 911 or contact your local medical provider immediately.";

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

      {/* Emergency Banner */}
      <div style={{ backgroundColor: "#558E8D" }}>
        <div className="container py-4">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm leading-relaxed text-center" style={{ color: "#FFFFFF" }}>{emergencyNotice}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Preamble */}
          <div className="rounded-xl p-6 mb-12" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Please read carefully</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Review this Privacy Policy before using our services, website, or associated applications.</p>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Important note</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Our Notice of Privacy Practices is a separate document governing how your protected health information ("PHI") may be used and disclosed by Dhruv Physician Assistant, A Professional Corporation in accordance with the Health Insurance Portability and Accountability Act ("HIPAA"). This Privacy Policy should be read alongside that notice.</p>
            </div>
          </div>

          {/* I — Introduction */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Introduction</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Privacy Policy describes how Athos, a licensed entity of Symbiotix-demo (collectively, "Athos," "we," "our," or "us"), operates its telehealth platform, including the Athos website and associated applications (the "Platform"). Athos provides administrative and technology services only. Athos does not provide medical services, employ healthcare providers, or store personal health data.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All clinical care, prescribing, and dispensing services are delivered by Dhruv Physician Assistant, A Professional Corporation ("MSO"), an independent Medical Services Organization operating a licensed pharmacy and physician network across all 50 states. The MSO is the sole entity responsible for collecting and storing your personal and health-related data, which occurs only at the point of checkout.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos does not collect or retain personal data. Information entered during your session on the Platform is stored at the session level only and is removed upon browser refresh. No personal data persists on Athos systems.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and our Terms of Service. If any provision is unacceptable to you, please discontinue use of the Platform.</p>
            <p className="text-base leading-relaxed text-muted-foreground">This Privacy Policy does not extend to information collected by third parties. We recommend reviewing the privacy policies of any third-party services you interact with, including the MSO's own privacy practices.</p>
          </div>

          {/* II — Information Collection */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Information Collection</h2>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">Because Athos does not store personal data, this section describes what is temporarily present during your session and what the MSO collects at checkout.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Session-Level Information (Athos)</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">While using the Platform, the following may exist temporarily in your browser session and is discarded on refresh:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Intake form responses such as state of residence, date of birth, gender, and health goals.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Weight, height, and other clinical intake data you enter.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Product selections and navigation state.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Collected at Checkout (Dhruv Physician Assistant, A Professional Corporation / MSO)</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">At the point of checkout, the MSO collects and stores the following for treatment, payment, and operational purposes:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Personal identifiers: name, email, phone number, mailing address, and date of birth.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Health-related information: clinical history, treatment records, and intake responses necessary for medical evaluation.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Payment and billing information, transmitted via encrypted connection to a third-party processor. Neither Athos nor the MSO stores full credit card details.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Communications exchanged between you and MSO providers via email, text, chat, or telephone.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>C. Automatic Technologies</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">The Platform may use cookies and similar technologies for basic functionality, analytics, and advertising. These may collect:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">IP address, browser type, operating system, and device information.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Pages visited, referral URLs, and general location data.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Session duration and interaction patterns.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">You can manage cookie preferences through your browser settings. Disabling cookies may affect Platform functionality. We do not currently respond to "do not track" browser signals.</p>
          </div>

          {/* III — How Information Is Used */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>How Information Is Used</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos uses session-level data solely to operate the Platform experience. The MSO uses collected data for the following purposes:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Treatment, payment, and healthcare operations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Processing registrations, transactions, and eligibility determinations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Communicating about healthcare services via phone, email, SMS, or in-platform notifications.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Account administration, order fulfillment, and payment processing.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Responding to inquiries and providing requested information.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Creating de-identified, aggregate data for analytics.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Improving safety, security, identity verification, and fraud prevention.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Compliance with applicable federal, state, and local laws.</li>
            </ul>
          </div>

          {/* IV — Disclosure */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Disclosure of Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO may disclose personal information under the following circumstances:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">For treatment, payment, or healthcare operations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To licensed medical providers, pharmacies, and laboratories delivering your care.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To service providers maintaining Platform infrastructure, security, and operations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To third-party payment processors via encrypted connection.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To comply with legal obligations or enforce Terms of Service.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To protect the rights, property, or safety of Athos, the MSO, users, or others.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">De-identified information may be disclosed without restriction.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">In connection with a sale, merger, or organizational restructuring.</li>
            </ul>
          </div>

          {/* V — Your Choices */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Your Choices</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You can configure your browser to refuse cookies or alert you when they are sent. Disabling cookies may affect Platform functionality.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">To opt out of promotional communications, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a> or use the unsubscribe link in any promotional email.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you opt into mobile alerts, you agree to receive transactional communications at the number you provide. Message and data rates may apply. For help, contact <a href={"mailto:" + supportEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{supportEmail}</a>.</p>
            <p className="text-base leading-relaxed text-muted-foreground">If you use a social media account to sign into the Platform, anyone with access to that account may also access your Platform account. The social media provider may transmit profile information to us.</p>
          </div>

          {/* VI — Data Security */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Data Security</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos does not store personal data. Session-level information exists only in your browser and is cleared on refresh.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO implements measures to secure personal information from accidental loss, unauthorized access, alteration, and disclosure. However, internet transmission is not completely secure. Any data transmission is at your own risk.</p>
            <p className="text-base leading-relaxed text-muted-foreground">You are responsible for maintaining the confidentiality of any passwords associated with your account.</p>
          </div>

          {/* VII — Third-Party Platforms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Third-Party Platforms</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The Platform may link to third-party websites outside our control. This Privacy Policy does not apply to those sites. Review their privacy policies independently.</p>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>Athos does not control and is not responsible for third-party data practices. Exercise caution and consult the privacy policies of each third-party website you visit.</p>
            </div>
          </div>

          {/* VIII — Age Restrictions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Age Restrictions</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">Athos and the MSO do not knowingly provide services to individuals under the age of 18.</p>
          </div>

          {/* IX — California Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>California Resident Privacy Rights</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">California residents may have rights under the California Consumer Privacy Act ("CCPA"). Because Athos does not store personal data, CCPA requests related to data access, deletion, or portability should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">The CCPA does not apply to PHI governed by HIPAA or medical information governed by the California Confidentiality of Medical Information Act ("CMIA").</p>
          </div>

          {/* X — Revisions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>X</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Revisions</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated date. Continued use of the Platform constitutes acceptance of any revisions.</p>
          </div>

          {/* XI — Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">For questions about this Privacy Policy, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
          </div>

          {/* Disclaimer */}
          <div className="pt-10" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix-demo, providing administrative and operational support to licensed physicians and healthcare practitioners. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making.</p>
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