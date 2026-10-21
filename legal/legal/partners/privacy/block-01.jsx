
export default function Block() {
  const pageTitle = "Privacy Policy";
  const lastUpdated = "April 22, 2026";
  const contactEmail = "privacy@athoshealth.com";
  const supportEmail = "support@athoshealth.com";
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
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Privacy Policy describes how Athos, a licensed entity of Symbiotix (collectively, "Athos," "we," "our," or "us"), operates its telehealth platform, including the Athos website and associated applications (the "Platform"). Athos provides administrative and technology services only. Athos does not provide medical services, employ healthcare providers, or store personal health data.</p>
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

          {/* IX — Affiliate Partner Tracking */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Affiliate Partner Tracking</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos operates an affiliate marketing program. When you access the Platform through a Marketing Partner's promotional link, a cookie or similar tracking technology may be placed on your device to attribute your visit and any subsequent membership to that partner.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This tracking data is limited to conversion attribution (click, signup, active membership status). It does not include clinical information, health data, prescriptions, or treatment details. Partners receive only aggregated, de-identified conversion metrics.</p>
            <p className="text-base leading-relaxed text-muted-foreground">For more information about our affiliate program and partner disclosures, visit our <a href="/affiliate-disclosure" style={{ color: "#245C3A", textDecoration: "underline" }}>Affiliate Disclosure</a> page.</p>
          </div>

          {/* X — Revisions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>X</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Revisions</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated date. Continued use of the Platform constitutes acceptance of any revisions.</p>
          </div>

          {/* XI — Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">For questions about this Privacy Policy, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
          </div>

          {/* State Privacy Addenda Divider */}
          <div className="py-10 mb-12" style={{ borderTop: "2px solid rgba(36,92,58,0.2)", borderBottom: "2px solid rgba(36,92,58,0.2)" }}>
            <p className="text-sm font-medium tracking-wider uppercase mb-2 text-center" style={{ color: "#245C3A" }}>State Privacy Addenda</p>
            <p className="text-sm leading-relaxed text-muted-foreground text-center">The following sections apply to residents of states with comprehensive consumer privacy legislation. These addenda supplement the Privacy Policy above. Each state law exempts protected health information governed by HIPAA and medical information governed by state medical privacy statutes. Requests related to clinical data held by the MSO should be directed to the MSO directly.</p>
          </div>

          {/* XII — California */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>California</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>CCPA / CPRA — Cal. Civ. Code § 1798.100 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are a California resident, you have the following rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Know.</strong> You may request disclosure of the categories and specific pieces of personal information collected, the sources, the business purpose, and the categories of third parties with whom it was shared, covering the preceding 12 months.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Delete.</strong> You may request deletion of personal information collected from you, subject to statutory exceptions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Correct.</strong> You may request correction of inaccurate personal information.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out of Sale or Sharing.</strong> You may direct us not to sell or share your personal information for cross-context behavioral advertising. Athos does not sell personal information. If affiliate tracking cookies constitute "sharing" under CPRA, you may opt out by contacting <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Limit Use of Sensitive Personal Information.</strong> You may limit the use of sensitive personal information to purposes necessary to perform the services.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Non-Discrimination.</strong> We will not discriminate against you for exercising any of these rights.</li>
            </ul>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">Because Athos does not store personal data, CCPA/CPRA requests related to data access, deletion, correction, or portability for clinical information should be directed to the MSO. The CCPA does not apply to PHI governed by HIPAA or medical information governed by the California Confidentiality of Medical Information Act ("CMIA").</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Categories of Information</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">In the preceding 12 months, the following categories may have been collected via the Platform's automatic technologies:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Identifiers (IP address, cookie identifiers).</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Internet or electronic network activity (browsing history, referral URL, interaction data).</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Geolocation data (approximate, derived from IP address).</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a verifiable consumer request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days. You may also designate an authorized agent to submit requests on your behalf.</p>
          </div>

          {/* XIII — Virginia */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Virginia</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>VCDPA — Va. Code § 59.1-575 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are a Virginia resident, you have the following rights under the Virginia Consumer Data Protection Act:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Access.</strong> Confirm whether we are processing your personal data and access that data.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Correct.</strong> Correct inaccuracies in your personal data.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Delete.</strong> Delete personal data you have provided or that we have obtained.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Data Portability.</strong> Obtain a copy of your personal data in a portable format.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out.</strong> Opt out of the processing of personal data for targeted advertising, sale, or profiling in furtherance of decisions that produce legal or similarly significant effects.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The VCDPA exempts data governed by HIPAA. Clinical data requests should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days. If we decline your request, you may appeal by contacting the same address. If the appeal is denied, you may file a complaint with the Virginia Attorney General.</p>
          </div>

          {/* XIV — Colorado */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Colorado</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>CPA — Colo. Rev. Stat. § 6-1-1301 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are a Colorado resident, you have the following rights under the Colorado Privacy Act:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Access, Correct, Delete,</strong> and <strong style={{ color: "#1a1a1a" }}>Data Portability</strong> — consistent with the rights described above.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out</strong> of targeted advertising, sale of personal data, or profiling.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Universal Opt-Out Mechanism.</strong> We recognize universal opt-out signals (e.g., Global Privacy Control) as valid opt-out requests for targeted advertising and sale of personal data.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The CPA exempts data governed by HIPAA. Clinical data requests should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days. If we decline your request, you may appeal. If denied, you may file a complaint with the Colorado Attorney General.</p>
          </div>

          {/* XV — Connecticut */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Connecticut</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>CTDPA — Conn. Gen. Stat. § 42-515 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are a Connecticut resident, you have the following rights under the Connecticut Data Privacy Act:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Access, Correct, Delete,</strong> and <strong style={{ color: "#1a1a1a" }}>Data Portability</strong> — consistent with the rights described above.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out</strong> of targeted advertising, sale of personal data, or profiling.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Global Opt-Out Signals.</strong> We recognize global opt-out preference signals as valid opt-out requests.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The CTDPA exempts data governed by HIPAA. Clinical data requests should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days. You may appeal a denial and subsequently file a complaint with the Connecticut Attorney General.</p>
          </div>

          {/* XVI — Utah */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XVI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Utah</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>UCPA — Utah Code § 13-61-101 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are a Utah resident, you have the following rights under the Utah Consumer Privacy Act:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Access</strong> and <strong style={{ color: "#1a1a1a" }}>Data Portability.</strong></li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Delete</strong> personal data you have provided directly.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out</strong> of the sale of personal data or targeted advertising.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The UCPA does not include a right to correct. The UCPA exempts data governed by HIPAA. Clinical data requests should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days.</p>
          </div>

          {/* XVII — Texas */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XVII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Texas</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>TDPSA — Tex. Bus. & Com. Code § 541 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are a Texas resident, you have the following rights under the Texas Data Privacy and Security Act:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Access, Correct, Delete,</strong> and <strong style={{ color: "#1a1a1a" }}>Data Portability</strong> — consistent with the rights described above.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out</strong> of targeted advertising, sale of personal data, or profiling.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The TDPSA applies regardless of company revenue threshold. The TDPSA exempts data governed by HIPAA. Clinical data requests should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days. You may appeal a denial and subsequently file a complaint with the Texas Attorney General.</p>
          </div>

          {/* XVIII — Oregon */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XVIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Oregon</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>OCPA — Or. Rev. Stat. § 646A.570 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are an Oregon resident, you have the following rights under the Oregon Consumer Privacy Act:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Access, Correct, Delete,</strong> and <strong style={{ color: "#1a1a1a" }}>Data Portability</strong> — consistent with the rights described above.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out</strong> of targeted advertising, sale of personal data, or profiling.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Obtain a List</strong> of third parties to whom your data has been disclosed.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The OCPA exempts data governed by HIPAA. Clinical data requests should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days. You may appeal a denial and subsequently file a complaint with the Oregon Attorney General.</p>
          </div>

          {/* XIX — Montana */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Montana</h2>
            </div>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>MCDPA — Mont. Code Ann. § 30-14-2801 et seq.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are a Montana resident, you have the following rights under the Montana Consumer Data Privacy Act:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Access, Correct, Delete,</strong> and <strong style={{ color: "#1a1a1a" }}>Data Portability</strong> — consistent with the rights described above.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Right to Opt-Out</strong> of targeted advertising, sale of personal data, or profiling.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MCDPA exempts data governed by HIPAA. Clinical data requests should be directed to the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To submit a request, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will respond within 45 days. You may appeal a denial and subsequently file a complaint with the Montana Attorney General.</p>
          </div>

          {/* XX — How to Exercise Your Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>How to Exercise Your Rights</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Regardless of your state of residence, you may submit a privacy request by emailing <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. Include your full name, state of residence, and the specific right you wish to exercise.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">We will verify your identity before processing any request. We will respond within 45 days of receipt. If additional time is required, we will notify you of the extension and the reason.</p>

            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Clinical data requests</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Because Athos does not store personal or clinical data, requests related to health information, treatment records, prescriptions, or communications with providers must be directed to Dhruv Physician Assistant, A Professional Corporation. All state privacy laws listed above exempt protected health information governed by HIPAA from their scope.</p>
            </div>
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