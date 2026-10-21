
export default function Block() {
  const pageTitle = "Affiliate Disclosure";
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
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Transparency commitment</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Athos believes in full transparency. This page explains the financial relationships between Athos and the independent Marketing Partners who promote our platform. We provide this disclosure in compliance with the Federal Trade Commission's Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 C.F.R. Part 255) and Section 5 of the FTC Act (15 U.S.C. § 45).</p>
          </div>

          {/* I — What This Means */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>What This Means</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Some of the links, content, and promotions that direct you to the Athos platform may come from independent Marketing Partners who earn compensation when you sign up for and maintain an active Athos membership.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">These Marketing Partners have a financial relationship with Athos. When a partner shares a link or promotes Athos, and you use that link to create an account, the partner may earn a commission or flat fee for as long as your membership remains active.</p>
            <p className="text-base leading-relaxed text-muted-foreground">This financial relationship constitutes a "material connection" under 16 C.F.R. § 255.5. We disclose it here so you can factor it into your evaluation of any Athos-related content you encounter.</p>
          </div>

          {/* II — What Partners Are */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>What Partners Are — and Are Not</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos Marketing Partners are independent contractors who perform marketing and promotional services. They are not healthcare providers, clinical staff, or employees of Athos or Dhruv Physician Assistant, A Professional Corporation.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partners have no involvement in clinical evaluations, prescribing decisions, or treatment plans. A complete clinical firewall separates marketing activities from medical operations. Partner content reflects the partner's own promotional efforts and personal experience — not clinical endorsements.</p>
            <p className="text-base leading-relaxed text-muted-foreground">No partner recommendation should be interpreted as medical advice, a guarantee of clinical outcomes, or a substitute for a consultation with a licensed healthcare provider.</p>
          </div>

          {/* III — How Partners Are Compensated */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>How Partners Are Compensated</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partners earn ongoing compensation when someone they refer becomes and remains an active Athos member. Depending on the partner's state of residence and applicable law, compensation may be structured as:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">A percentage of net monthly revenue attributable to the referred member.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">A flat monthly fee per active referred member.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">Compensation rates have been independently assessed at fair market value for the marketing services provided. This compensation is paid for promotional and advertising services, not for clinical referrals.</p>
          </div>

          {/* IV — How to Identify Partner Content */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>How to Identify Partner Content</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All Athos Marketing Partners are contractually required to include an affiliate disclosure on every page, post, video, story, live stream, email, or content of any format where Athos is promoted or a tracking link is shared. This disclosure must appear before any link or call to action.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partners use one of the following Company-provided disclosure statements:</p>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Standard disclosure — written content</p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>"I am a paid Athos Marketing Partner. If you sign up using my link, I earn compensation for as long as you remain an active member. All clinical decisions are made independently by licensed providers. This is not medical advice."</p>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Short-form disclosure — social media, stories, reels</p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>"Paid Athos partner. I earn compensation if you sign up through my link. Not medical advice."</p>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Video/audio disclosure — spoken at beginning of content</p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>"Quick disclosure — I'm a paid marketing partner for Athos. I earn compensation if you sign up using my link. All medical decisions are made by licensed providers, not by me. This is not medical advice."</p>
            </div>

            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Live stream disclosure — repeated periodically</p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>"Reminder — I'm a paid Athos marketing partner and earn compensation through my link. Not medical advice."</p>
            </div>
          </div>

          {/* V — Disclosure Placement Rules */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Disclosure Placement Rules</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos requires all partners to meet or exceed the FTC's "clear and conspicuous" standard. The following placement rules apply:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The disclosure must appear before any affiliate link, promotional claim, or call to action.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The disclosure must not be placed in a footer, sidebar, "about" page, or behind a "see more" fold.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The disclosure must use legible font size, sufficient contrast, and plain language.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">In video content, the disclosure must be spoken aloud at the beginning and displayed on screen.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">In live streams, the disclosure must be repeated periodically throughout the broadcast and displayed as persistent on-screen text when possible.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">In short-form video (stories, reels, TikTok), the disclosure must appear as visible text overlay for the duration of the content.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partners may not modify, abbreviate, or substitute the approved disclosure language without written authorization from Athos.</li>
            </ul>
          </div>

          {/* VI — Healthcare Content Limitations */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Healthcare Content Limitations</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Because Athos operates in the healthcare space, partner content is subject to heightened scrutiny. Partners are prohibited from making:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Claims about specific clinical outcomes, cure rates, or guaranteed health results.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Claims about specific medications, dosages, or drug comparisons.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Claims implying FDA approval of compounded products.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Statements that constitute medical advice, diagnosis, or treatment recommendations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Patient testimonials without written consent and HIPAA-compliant authorization.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">The only communications that constitute professional medical advice are personalized messages a licensed provider sends during a telehealth consultation. No partner content constitutes professional medical advice.</p>
          </div>

          {/* VII — Tracking Technologies */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Tracking Technologies</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">When you click a partner's link, a cookie or similar tracking technology may be placed on your device to attribute your visit and any subsequent membership to that partner. This data is used solely for commission attribution and does not include clinical or health information.</p>
            <p className="text-base leading-relaxed text-muted-foreground">For details on how tracking data is collected and managed, please review our <a href="/privacy" style={{ color: "#245C3A", textDecoration: "underline" }}>Privacy Policy</a>.</p>
          </div>

          {/* VIII — Our Compliance Obligations */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Our Compliance Obligations</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos maintains the following compliance practices in accordance with FTC guidance:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">All partners sign a Marketing Services Agreement requiring FTC-compliant disclosures as a condition of participation.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">All disclosure language is pre-written and provided to partners. Partners do not write their own disclosures.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner content is audited quarterly for disclosure compliance.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partners who fail to include required disclosures are subject to immediate termination.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partners receive training on FTC requirements and prohibited healthcare claims at onboarding.</li>
            </ul>
          </div>

          {/* IX — Report a Concern */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Report a Concern</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">If you encounter Athos promotional content that does not include a clear disclosure, or that makes medical claims, guaranteed outcome statements, or other content that appears misleading, please report it to <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
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