
export default function Block() {
  const pageTitle = "Terms of Use";
  const lastUpdated = "April 22, 2026";
  const contactEmail = "legal@athoshealth.com";
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
            <p className="text-sm leading-relaxed text-muted-foreground">These Terms of Use constitute a legally binding agreement between you and Athos. By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, discontinue use immediately.</p>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Important note</p>
              <p className="text-sm leading-relaxed text-muted-foreground">These Terms contain an arbitration clause and class action waiver in Section XI. By agreeing to these Terms, you agree to resolve disputes through binding individual arbitration and waive your right to participate in class actions.</p>
            </div>
          </div>

          {/* I — Acceptance of Terms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Acceptance of Terms</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">These Terms of Use ("Terms") govern your access to and use of the website, applications, and services operated by Athos, a licensed entity of Symbiotix (collectively, "Athos," "we," "our," or "us"), including all content, functionality, and services offered on or through myathos.com (the "Platform").</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">By accessing the Platform, creating an account, or using any service, you accept and agree to be bound by these Terms, our <a href="/privacy" style={{ color: "#245C3A", textDecoration: "underline" }}>Privacy Policy</a>, and our <a href="/affiliate-disclosure" style={{ color: "#245C3A", textDecoration: "underline" }}>Affiliate Disclosure</a>, each of which is incorporated by reference.</p>
            <p className="text-base leading-relaxed text-muted-foreground">If you do not agree to these Terms, you must not access or use the Platform.</p>
          </div>

          {/* II — Platform Description */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Platform Description</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos provides administrative and technology services that facilitate access to telehealth consultations and related wellness services. Athos does not provide medical services, employ healthcare providers, compound or manufacture medications, operate a pharmacy, or influence clinical decision-making.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All clinical care, prescribing, dispensing, and related healthcare services are delivered by Dhruv Physician Assistant, A Professional Corporation ("MSO"), an independent Medical Services Organization. The MSO operates independently from Athos and maintains sole authority over all clinical decisions.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Athos does not guarantee that any user will receive a prescription, specific medication, or particular course of treatment. All clinical decisions are made by the MSO's licensed providers based on their independent medical judgment.</p>
          </div>

          {/* III — Medical Disclaimer */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Medical Disclaimer</h2>
            </div>

            <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#991B1B" }}>Not medical advice</p>
              <p className="text-sm leading-relaxed text-muted-foreground">The content on this Platform — including text, graphics, images, videos, and other materials — is provided for informational and educational purposes only. It does not constitute medical advice, diagnosis, or treatment and should not be relied upon as a substitute for professional medical judgment.</p>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">The only communications that constitute professional medical advice are the personalized messages a licensed provider sends to you directly and the medical guidance offered during a telehealth consultation conducted through the MSO. No other content on the Platform — including blog posts, FAQs, intake form descriptions, marketing materials, or partner promotions — constitutes professional medical advice.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you read on this Platform.</p>
            <p className="text-base leading-relaxed text-muted-foreground">If you believe you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately. Athos does not provide emergency medical services.</p>
          </div>

          {/* IV — Compounded Product Disclaimer */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Compounded Product Disclaimer</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Certain services facilitated through the Platform may involve compounded medications prepared by licensed pharmacies operating under Section 503A (21 U.S.C. § 353a) or Section 503B (21 U.S.C. § 353b) of the Federal Food, Drug, and Cosmetic Act.</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Compounded medications are not FDA-approved. The FDA does not verify the safety, effectiveness, or manufacturing quality of compounded drugs before they are marketed.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Compounded medications are not generic versions of, equivalent to, or interchangeable with any FDA-approved product.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Individual results vary. No specific outcome is promised or guaranteed.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Payment for a consultation or membership does not guarantee that a prescription will be written or that any medication will be dispensed. All prescribing decisions are made by the treating provider.</li>
            </ul>
          </div>

          {/* V — Partner Content Disclaimer */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Partner Content Disclaimer</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos operates an affiliate marketing program through which independent Marketing Partners promote the Platform. Partner promotions reflect the partner's own marketing efforts and personal experience. They are not clinical endorsements, medical recommendations, or statements made by Athos, the MSO, or any healthcare provider.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partners are independent contractors with no involvement in clinical operations. They do not have access to patient information, clinical records, or prescribing decisions. For details on partner relationships and compensation, see our <a href="/affiliate-disclosure" style={{ color: "#245C3A", textDecoration: "underline" }}>Affiliate Disclosure</a>.</p>
            <p className="text-base leading-relaxed text-muted-foreground">While Athos requires partners to comply with the <a href="/partner-compliance" style={{ color: "#245C3A", textDecoration: "underline" }}>Partner Compliance Guidelines</a>, Athos is not responsible for content created or published by partners that violates those guidelines. If you encounter partner content that appears misleading, please report it to <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
          </div>

          {/* VI — Eligibility */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Eligibility</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You must meet all of the following conditions to use the Platform:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">You are at least 18 years of age.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">You are a resident of the United States or its territories.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">You are accessing the Platform for your own personal use, not on behalf of a third party.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">All information you provide is accurate, current, and complete.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">You have the legal capacity to enter into a binding agreement.</li>
            </ul>
          </div>

          {/* VII — User Conduct */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>User Conduct</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You agree not to:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Provide false, misleading, or incomplete information during registration or intake.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Use the Platform for any unlawful purpose or in violation of any applicable law.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Attempt to obtain prescriptions for third parties, for resale, or for any purpose other than your own personal medical use.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Scrape, crawl, or use automated tools to extract data from the Platform.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Interfere with Platform infrastructure, security, or other users' access.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Reproduce, distribute, modify, or create derivative works from Platform content without written authorization.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Impersonate any person, entity, or Athos representative.</li>
            </ul>
          </div>

          {/* VIII — Intellectual Property */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Intellectual Property</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All content, features, functionality, design, text, graphics, logos, trademarks, and software on the Platform are the exclusive property of Athos or its licensors and are protected by United States and international copyright, trademark, trade secret, and other intellectual property laws.</p>
            <p className="text-base leading-relaxed text-muted-foreground">You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal, non-commercial purposes. This license does not include the right to copy, reproduce, distribute, modify, or create derivative works from any Platform content.</p>
          </div>

          {/* IX — Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Limitation of Liability</h2>
            </div>

            <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>As-is basis</p>
              <p className="text-sm leading-relaxed text-muted-foreground">The Platform and all content, services, and functionality are provided on an "as is" and "as available" basis without warranties of any kind, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</p>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">To the maximum extent permitted by applicable law, Athos, Symbiotix, the MSO, and their respective officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, arising out of or related to your access to or use of (or inability to access or use) the Platform.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos's total aggregate liability for all claims arising out of or related to these Terms or the Platform shall not exceed the amount you paid to Athos in the twelve (12) months immediately preceding the event giving rise to the claim, or one hundred dollars (\$100), whichever is greater.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Athos is not liable for any clinical decisions, treatment outcomes, prescribing decisions, or adverse events arising from care delivered by the MSO or its providers. Clinical liability rests solely with the MSO and the treating provider.</p>
          </div>

          {/* X — Indemnification */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>X</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Indemnification</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">You agree to indemnify, defend, and hold harmless Athos, Symbiotix, the MSO, and their respective officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to your violation of these Terms, your use of the Platform, any content you submit or transmit through the Platform, or your violation of any applicable law or the rights of any third party.</p>
          </div>

          {/* XI — Dispute Resolution */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Dispute Resolution</h2>
            </div>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Governing Law</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">These Terms shall be governed by and construed in accordance with the laws of the State of __________________, without regard to its conflict of laws principles.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Binding Arbitration</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Any dispute, claim, or controversy arising out of or related to these Terms or the Platform shall be resolved by binding arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules. Arbitration shall take place in __________________ or, at your election, by telephone or videoconference. The arbitrator's decision shall be final and binding.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>C. Class Action Waiver</h3>
            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>You agree that any dispute resolution proceedings will be conducted on an individual basis only, not as a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration against Athos.</p>
            </div>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>D. Exceptions</h3>
            <p className="text-base leading-relaxed text-muted-foreground">Either party may seek injunctive or equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement of intellectual property rights. Claims within small claims court jurisdiction may be filed in small claims court in lieu of arbitration.</p>
          </div>

          {/* XII — Termination */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Termination</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">We may suspend or terminate your access to the Platform at any time, with or without cause, with or without notice, at our sole discretion. Upon termination, your right to use the Platform ceases immediately.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Sections III (Medical Disclaimer), IV (Compounded Product Disclaimer), IX (Limitation of Liability), X (Indemnification), XI (Dispute Resolution), and this Section XII survive termination.</p>
          </div>

          {/* XIII — Modifications */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Modifications</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the Platform after any modification constitutes acceptance of the revised Terms. We encourage you to review this page periodically.</p>
          </div>

          {/* XIV — Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">For questions about these Terms, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
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