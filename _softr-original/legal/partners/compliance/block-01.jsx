import { useTextSetting, useLongTextSetting } from "@/lib/editable-settings";

export default function Block() {
  const pageTitle = useTextSetting({
    name: "page-title",
    label: "Page title",
    initialValue: "Partner Compliance Guidelines & Acceptable Use Policy",
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
  const emergencyNotice = useLongTextSetting({
    name: "emergency-notice",
    label: "Emergency notice",
    initialValue:
      "Athos is limited to providing consultations for specific non-emergency medical conditions. If you believe you are experiencing a medical emergency, please dial 911 or contact your local medical provider immediately.",
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
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Binding policy</p>
            <p className="text-sm leading-relaxed text-muted-foreground">This document is incorporated by reference into your Marketing Services Agreement. Violation of any provision may result in immediate termination of your partnership and forfeiture of unpaid commissions. If you are unsure whether specific content complies with this policy, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a> before publishing.</p>
          </div>

          {/* I — Who This Applies To */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Who This Applies To</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This policy applies to every individual or entity participating in the Athos Partner Program, across all platforms and content formats, including social media, blogs, podcasts, video, email, live streams, print, and in-person events.</p>
            <p className="text-base leading-relaxed text-muted-foreground">You are responsible for all content you publish or cause to be published that references Athos, regardless of whether it contains your tracking link.</p>
          </div>

          {/* II — Approved Claims */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Approved Claims</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You may make the following types of statements when promoting Athos:</p>

            <div className="rounded-xl p-5 mb-3" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#245C3A" }}>✅ Permitted</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Describe Athos platform features, pricing, and general service offerings using Company-approved language.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Share your personal wellness experience in general terms (e.g., "I've been using Athos and I feel great about my progress").</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">State that Athos connects users with licensed providers for telehealth consultations.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Reference that Athos is a cash-pay platform with transparent pricing.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Direct your audience to the Athos website for more information.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Use Company-provided marketing materials, images, and content templates without modification.</li>
              </ul>
            </div>
          </div>

          {/* III — Prohibited Claims */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Prohibited Claims</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You may not make the following types of statements in any format, on any platform, at any time:</p>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#991B1B" }}>❌ Clinical outcome claims</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">"You will lose weight with Athos."</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">"Athos patients lose an average of X pounds."</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">"This treatment cures / reverses / eliminates [condition]."</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Any claim guaranteeing specific health results or implying a typical outcome.</li>
              </ul>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#991B1B" }}>❌ Medication and prescribing claims</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Naming specific medications or active ingredients (e.g., semaglutide, tirzepatide, or brand names).</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Referencing specific dosages, injection schedules, or titration protocols.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Comparing compounded products to FDA-approved drugs.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Stating or implying that signing up guarantees a prescription.</li>
              </ul>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#991B1B" }}>❌ FDA and regulatory claims</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Implying FDA approval of any compounded product.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Describing compounded products as "generic versions," "the same as," or "equivalent to" FDA-approved medications.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Claiming compounded products contain "the same active ingredient" as brand-name drugs.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Using the phrase "clinically proven" to describe compounded products.</li>
              </ul>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#991B1B" }}>❌ Medical advice</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Offering diagnosis, treatment recommendations, or medication suggestions.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Advising individuals on whether they are candidates for treatment.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Responding to health-related questions from your audience with clinical guidance.</li>
              </ul>
            </div>

            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#991B1B" }}>❌ Misrepresentation</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Representing yourself as a healthcare provider, Athos employee, or clinical representative.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Stating or implying that Athos accepts insurance, Medicare, Medicaid, or TRICARE.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Creating urgency through false scarcity claims (e.g., "only 10 spots left").</li>
              </ul>
            </div>
          </div>

          {/* IV — Compounded Product Rules */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Compounded Product Rules</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Compounded medications are not FDA-approved. The FDA does not verify the safety, effectiveness, or manufacturing quality of compounded drugs before they are marketed. Partners must understand and respect this distinction.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The FDA has issued warning letters to telehealth companies for advertising claims that imply compounded products are equivalent to FDA-approved drugs. Language such as "same active ingredient as Ozempic," "generic semaglutide," or "clinically proven weight loss treatments" has been specifically cited as false or misleading under 21 U.S.C. §§ 352(a) and 352(bb).</p>

            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Required understanding</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Do not reference specific compounded medications by name. Do not compare them to branded products. Do not use clinical trial data from branded products to support claims about compounded alternatives. If a member of your audience asks about specific medications, direct them to the Athos platform where a licensed provider can address their questions during a consultation.</p>
            </div>
          </div>

          {/* V — Testimonial and Review Rules */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Testimonial and Review Rules</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The FTC's Consumer Reviews and Testimonials Rule (16 C.F.R. Part 465), effective October 21, 2024, prohibits the creation, purchase, or dissemination of fake or false reviews and testimonials, including those generated by AI. Violations carry civil penalties of up to \$51,744 per instance.</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not create, fabricate, or commission fake reviews or testimonials about Athos.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not use AI tools to generate reviews that appear to be from real users.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not purchase or solicit reviews conditioned on expressing a particular sentiment.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not purchase fake followers, likes, shares, or other social media influence indicators.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Before/after photos are endorsements. They must reflect your actual experience and must not be fabricated, manipulated, or presented as typical results without substantiation.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Patient testimonials require written consent and a HIPAA-compliant authorization before publication. Contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a> for the required release form.</li>
            </ul>
          </div>

          {/* VI — Visual and Brand Rules */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Visual and Brand Rules</h2>
            </div>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Use only Company-provided logos, images, and brand assets. Do not modify, crop, recolor, or create derivative versions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not use white-coat imagery, stethoscope imagery, or clinical photography that implies you are a healthcare provider or that your content is a clinical endorsement.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not use the Athos brand name, logo, or likeness in your social media handle, username, or page name.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Custom content (graphics, videos, copy) must be submitted to <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a> for written approval before publication.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Refer to the Athos Brand Guidelines provided at onboarding for approved colors, typography, and tone.</li>
            </ul>
          </div>

          {/* VII — Platform-Specific Rules */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Platform-Specific Rules</h2>
            </div>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Blog / Website</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">FTC disclosure must appear above the fold, before any affiliate link. Do not bury disclosures in footers or sidebar widgets.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Instagram / TikTok / Reels / Stories</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Disclosure must appear as a visible text overlay for the full duration of the content. Using only "#ad" in a hashtag string is not sufficient. Spoken disclosure is required for any video content where Athos is promoted verbally.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>YouTube / Long-Form Video</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Spoken disclosure must occur within the first 30 seconds. A written disclosure must appear in the video description above the fold (before "show more"). Use platform-native paid promotion labels where available.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Podcast / Audio</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Spoken disclosure must precede the promotional segment. Include written disclosure in episode show notes.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Live Stream</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Disclosure must be spoken at the start and repeated at reasonable intervals. Display persistent on-screen text when possible. Do not provide real-time health advice in chat or comments.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Email / Newsletter</h3>
            <p className="text-base leading-relaxed text-muted-foreground">Disclosure must appear before any promotional link or CTA. Subject lines must not contain misleading health claims.</p>
          </div>

          {/* VIII — Clinical Firewall */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Clinical Firewall</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You have zero contact with clinical operations. This is not a guideline — it is a material term of your Marketing Services Agreement.</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not contact, message, or communicate with any patient regarding their treatment, medications, or clinical status.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not respond to DMs, comments, or emails asking for medication advice. Direct them to the Athos platform.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not contact Athos providers, clinical staff, or pharmacy personnel.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not request or access any patient information, clinical records, or prescription details.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Do not suggest, recommend, or imply that a specific treatment or medication is appropriate for any individual.</li>
            </ul>
          </div>

          {/* IX — Enforcement */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Enforcement</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos conducts quarterly audits of partner content across all platforms. We also monitor for compliance on an ongoing basis and investigate reports from the public.</p>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#991B1B" }}>Consequences of violation</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">First violation (minor, correctable): Written warning and 48-hour remediation window.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Second violation or first serious violation: Immediate suspension of tracking link and partner account pending review.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc">Material violation (prohibited clinical claims, HIPAA breach, fake reviews, FDA-triggering language): Immediate termination. Forfeiture of all unpaid commissions. Athos reserves the right to pursue indemnification under the Marketing Services Agreement.</li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">Athos determines, in its sole discretion, whether content violates this policy. Termination decisions are final.</p>
          </div>

          {/* X — Reporting */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>X</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Questions and Reporting</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you are unsure whether specific content complies with this policy, submit it for review before publishing. Pre-approval requests and compliance questions should be directed to <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To report a potential violation by another partner or any third party, email <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a> with the URL or screenshot of the content in question.</p>
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