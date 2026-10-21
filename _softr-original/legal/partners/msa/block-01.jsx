import { useTextSetting, useLongTextSetting } from "@/lib/editable-settings";

export default function Block() {
  const pageTitle = useTextSetting({
    name: "page-title",
    label: "Page title",
    initialValue: "Marketing Services Agreement",
  });
  const lastUpdated = useTextSetting({
    name: "last-updated",
    label: "Last updated date",
    initialValue: "April 22, 2026",
  });
  const contactEmail = useTextSetting({
    name: "contact-email",
    label: "Legal contact email",
    initialValue: "legal@athoshealth.com",
  });
  const supportEmail = useTextSetting({
    name: "support-email",
    label: "Support contact email",
    initialValue: "support@athoshealth.com",
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
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Please read carefully</p>
            <p className="text-sm leading-relaxed text-muted-foreground">This Marketing Services Agreement ("Agreement") governs the relationship between Athos and each independent Marketing Partner. Review this Agreement in its entirety before signing. By executing this Agreement, you acknowledge that you have read, understood, and agree to be bound by its terms.</p>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Important note</p>
              <p className="text-sm leading-relaxed text-muted-foreground">This Agreement is structured as a best-practice compliance measure consistent with the personal services and management contracts safe harbor under 42 C.F.R. § 1001.952(d). Athos does not bill, submit claims to, or participate in Medicare, Medicaid, TRICARE, or any Federal health care program as defined in 42 U.S.C. § 1320a-7b(f). All patient services facilitated through the Athos platform are rendered on a cash-pay basis only.</p>
            </div>
          </div>

          {/* I — Parties */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Parties</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Agreement is entered into as of the date of electronic execution ("Effective Date") by and between:</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4"><strong style={{ color: "#1a1a1a" }}>Company:</strong> Symbiotix LLC, d/b/a Athos ("Company," "Athos," "we," or "us"), operating under the management services organization known as Dhruv Physician Assistant, A Professional Corporation P.C. ("MSO"). Athos provides administrative and technology services only. Athos does not provide medical services, employ healthcare providers, or store personal health data.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4"><strong style={{ color: "#1a1a1a" }}>Marketing Partner:</strong> The individual or entity identified in the Partner Application ("Partner," "you," or "your"), an independent marketing contractor engaged to perform the services described in this Agreement.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Company and Partner are each referred to as a "Party" and collectively as the "Parties."</p>
          </div>

          {/* II — Purpose and Scope of Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Purpose and Scope of Services</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Company engages Partner to perform marketing, promotional, and advertising services on behalf of the Athos platform. These services are exclusively commercial and promotional in nature. Partner is not a referral source, is not a licensed healthcare provider acting in a clinical capacity, and does not participate in, influence, or have knowledge of any clinical decision-making.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Marketing Deliverables</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Partner agrees to perform one or more of the following documented marketing deliverables:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Creation and distribution of original promotional content, including social media posts, blog articles, video content, email campaigns, and podcast mentions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Sharing Company-approved marketing materials, brand assets, and pre-written content templates with Partner's audience.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Hosting or participating in promotional events, webinars, or live demonstrations featuring the Athos platform.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Driving audience traffic to the Athos platform via Partner's unique tracking link.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Providing audience feedback and marketing performance data to Company for campaign optimization.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Services Expressly Excluded</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">This Agreement does not authorize Partner to perform, and Partner shall not engage in, any of the following:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Clinical referrals, patient intake, prescribing recommendations, or any activity requiring a professional healthcare license.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Communication with patients regarding clinical outcomes, diagnoses, treatment plans, or medication decisions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Access to, storage of, or transmission of protected health information ("PHI") as defined by HIPAA (45 C.F.R. Parts 160 and 164).</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Representation to any individual that Partner is an employee, agent, or clinical representative of Athos, the MSO, or any healthcare provider.</li>
            </ul>
          </div>

          {/* III — Clinical Firewall */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Clinical Firewall</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The Parties establish an explicit separation between marketing activities and clinical operations. This clinical firewall is a material term of this Agreement.</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner has zero involvement in, influence over, or access to any clinical evaluation, prescribing decision, or treatment plan.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">All clinical decisions are made independently by licensed providers within the MSO. Partner's marketing activities have no bearing on whether any individual receives clinical services, prescriptions, or any specific course of treatment.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner is not notified of clinical details of any individual. Partner receives only aggregated, de-identified conversion data (e.g., number of active patients attributed to Partner's tracking link).</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner shall not contact, communicate with, or attempt to influence any patient, provider, or clinical staff member regarding treatment decisions.</li>
            </ul>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>Even if no referrals, conversions, or new patients result from Partner's marketing activities, this Agreement is commercially reasonable on its own merits because the marketing deliverables described in Section II(A) provide independent promotional value to Company.</p>
            </div>
          </div>

          {/* IV — Term */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Term</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Agreement is effective as of the Effective Date and shall remain in effect for an initial term of one (1) year ("Initial Term"). Upon expiration of the Initial Term, this Agreement shall automatically renew for successive one (1) year periods ("Renewal Terms") unless either Party provides written notice of non-renewal at least thirty (30) days prior to the expiration of the then-current term.</p>
            <p className="text-base leading-relaxed text-muted-foreground">The Initial Term and any Renewal Terms are collectively referred to as the "Term." The minimum term of one year is a material condition of this Agreement, consistent with the personal services safe harbor at 42 C.F.R. § 1001.952(d).</p>
          </div>

          {/* V — Compensation */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Compensation</h2>
            </div>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Compensation Methodology</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The compensation methodology is established in advance and set forth in Exhibit A (Compensation Schedule), attached hereto and incorporated by reference. Compensation is determined solely based on the marketing services described in this Agreement. The methodology for determining compensation is specified in advance as required by the personal services safe harbor, although the aggregate amount may vary based on the volume of marketing deliverables and active patients attributed to Partner's tracking link.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Compensation Tiers</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Partner's compensation tier is designated at onboarding and specified in Exhibit A. Unless Partner's state of residence requires a flat-fee arrangement, the following default methodology applies:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Individual Tier:</strong> Twenty percent (20%) of net monthly revenue per active patient attributed to Partner's unique tracking link.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Partner Tier:</strong> Thirty percent (30%) of net monthly revenue per active patient attributed to Partner's unique tracking link.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>C. Flat-Fee Alternative</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">In states where percentage-based compensation is prohibited or subject to heightened scrutiny, the following flat-fee methodology applies as specified in the State-Specific Addendum:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Individual Tier:</strong> Thirty-seven dollars (\$37) per month per active patient attributed to Partner's unique tracking link.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Partner Tier:</strong> Fifty-five dollars (\$55) per month per active patient attributed to Partner's unique tracking link.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>D. Fair Market Value</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The compensation rates set forth in this Agreement have been determined by an independent third-party valuation firm to reflect fair market value ("FMV") for the marketing services described herein. The FMV Certification is attached as Exhibit B and incorporated by reference. The FMV assessment is updated annually.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>E. Compensation Safeguards</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Compensation under this Agreement is subject to the following conditions:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation is paid exclusively for marketing services. No portion of compensation is paid for, or intended to induce, clinical referrals, prescribing decisions, or the generation of business involving items or services payable by any Federal health care program.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation does not take into account the volume or value of any referrals or business generated between the Parties that is not covered by this Agreement.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The compensation methodology was established in advance of Partner performing any services and is not retroactively modified based on referral volume.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>F. Payment Terms</h3>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Payments are issued monthly via ACH direct deposit within thirty (30) days following the end of each calendar month.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner is responsible for all applicable taxes. Company will issue an IRS Form 1099 to Partner annually for compensation exceeding six hundred dollars (\$600) in a calendar year.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner must submit a completed IRS Form W-9 prior to receiving any payment.</li>
            </ul>
          </div>

          {/* VI — Independent Contractor Status */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Independent Contractor Status</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner is an independent contractor. Nothing in this Agreement creates an employment, partnership, joint venture, or agency relationship between the Parties. Partner is not entitled to employee benefits, workers' compensation, unemployment insurance, or any other employment-related benefits from Company.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner retains sole discretion over the manner, method, and means by which marketing services are performed, subject to the compliance requirements of this Agreement and the Acceptable Use Policy.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Partner shall not represent or hold themselves out as an employee, agent, or clinical representative of Athos, the MSO, or any affiliated healthcare provider.</p>
          </div>

          {/* VII — FTC Compliance and Disclosure */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>FTC Compliance and Disclosure</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner acknowledges that this arrangement constitutes a material connection under the Federal Trade Commission's Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 C.F.R. Part 255) and Section 5 of the FTC Act (15 U.S.C. § 45). Partner agrees to the following:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner shall include the Company-provided FTC Affiliate Disclosure on every page, post, video, story, live stream, or content of any format where Athos is promoted or a tracking link is shared.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The disclosure must appear before any link, call to action, or promotional claim. It must not be buried in a footer, hidden behind a click, or otherwise obscured.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner shall use only the pre-written disclosure language provided by Company. Partner may not modify, abbreviate, or substitute the approved disclosure text.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner shall not create or disseminate fake reviews, fabricated testimonials, or misleading endorsements.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner acknowledges that both Partner and Company may be liable for deceptive endorsements, and that FTC penalties may apply individually per violation.</li>
            </ul>
          </div>

          {/* VIII — Compliance and Acceptable Use */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Compliance and Acceptable Use</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner agrees to comply with the Partner Compliance Guidelines and Acceptable Use Policy, which is incorporated by reference into this Agreement. In addition to the terms of that policy, Partner agrees to the following:</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Permitted Claims</h3>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Describing Athos platform features, pricing, and general service offerings using Company-approved language.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Sharing personal wellness experiences in general terms without making specific medical claims.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Directing audience members to the Athos website for information.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Prohibited Claims</h3>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Claims about specific clinical outcomes, cure rates, or guaranteed health results.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Claims about specific medications, dosages, drug comparisons, or prescribing practices.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Claims implying FDA approval of compounded products.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Patient testimonials without written consent and a HIPAA-compliant authorization.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any content that constitutes medical advice, diagnosis, or treatment recommendations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any representation that payment guarantees prescribing or dispensing of any medication.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>C. Approved Materials</h3>
            <p className="text-base leading-relaxed text-muted-foreground">Partner shall use only Company-provided or Company-approved marketing materials, content templates, brand assets, and disclosure language. Custom content must be submitted to Company for written approval prior to publication.</p>
          </div>

          {/* IX — HIPAA Acknowledgment */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>HIPAA Acknowledgment</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner acknowledges and agrees that:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner will not access, receive, create, maintain, use, or disclose any protected health information ("PHI") as defined by the Health Insurance Portability and Accountability Act of 1996 ("HIPAA") (45 C.F.R. Parts 160 and 164).</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner is not a Business Associate of Company or the MSO under HIPAA, and this Agreement does not constitute a Business Associate Agreement.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">If Partner inadvertently receives PHI, Partner shall immediately notify Company at <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>, refrain from using or disclosing the information, and permanently delete or destroy all copies.</li>
            </ul>
          </div>

          {/* X — Cash-Pay Attestation */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>X</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Cash-Pay Attestation</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Company attests that Athos does not bill, submit claims to, or participate in Medicare, Medicaid, TRICARE, CHAMPVA, or any other Federal health care program as defined in 42 U.S.C. § 1320a-7b(f). All services facilitated through the Athos platform are provided on a cash-pay and self-pay basis only.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Partner acknowledges this attestation and agrees not to represent to any individual that Athos services are covered by, reimbursable under, or billable to any government health care program or private insurance plan.</p>
          </div>

          {/* XI — Intellectual Property */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Intellectual Property</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Company grants Partner a limited, non-exclusive, non-transferable, revocable license to use Company trademarks, logos, and approved brand assets solely for the purpose of performing the marketing services described in this Agreement. This license terminates immediately upon termination or expiration of this Agreement.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner shall not modify, alter, or create derivative works from Company brand assets without prior written approval. Partner shall comply with the Athos Brand Guidelines provided at onboarding.</p>
            <p className="text-base leading-relaxed text-muted-foreground">All original content created by Partner in connection with this Agreement remains Partner's intellectual property. Partner grants Company a perpetual, royalty-free license to use, reproduce, and distribute such content for marketing purposes.</p>
          </div>

          {/* XII — Data and Privacy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Data and Privacy</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner's unique tracking link uses cookies and similar tracking technologies to attribute conversions. Partner acknowledges that data collected via the tracking link is subject to the Athos Privacy Policy, which addresses data collection practices, cookie usage, and applicable state consumer privacy laws.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner shall not independently collect, store, or process personal data from individuals who interact with Partner's promotional content, except as required for Partner's own standard marketing operations and subject to all applicable privacy laws.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Where Partner operates in a state with specific consumer privacy legislation (including California CCPA/CPRA, Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, Texas TDPSA, Oregon OCPA, or Montana MCDPA), the applicable State Privacy Addendum is incorporated by reference.</p>
          </div>

          {/* XIII — Termination */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Termination</h2>
            </div>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Termination for Convenience</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Either Party may terminate this Agreement at the end of the then-current term by providing written notice at least thirty (30) days prior to expiration.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Termination for Cause</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Company may terminate this Agreement immediately and without notice upon:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any violation of the Acceptable Use Policy or Compliance Guidelines.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any breach of the Clinical Firewall provisions of this Agreement.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any failure to include the required FTC Affiliate Disclosure on promotional content.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any unauthorized access to or disclosure of PHI.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any conduct that exposes Company, the MSO, or any affiliated provider to regulatory, legal, or reputational risk.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any material misrepresentation in the Partner Application.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any change in applicable law that renders this arrangement non-compliant.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>C. Effect of Termination</h3>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Upon termination, Partner's tracking link is immediately deactivated.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner shall remove all Athos promotional content, brand assets, and tracking links within seven (7) days.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner forfeits all unpaid commissions if terminated for cause. If terminated for convenience, Partner receives payment for all earned commissions through the effective date of termination.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The intellectual property license granted in Section XI terminates immediately.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Sections III (Clinical Firewall), IX (HIPAA), XIV (Indemnification), XV (Limitation of Liability), XVI (Confidentiality), and XVIII (Governing Law) survive termination.</li>
            </ul>
          </div>

          {/* XIV — Indemnification */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Indemnification</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner shall indemnify, defend, and hold harmless Company, the MSO, their respective officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner's breach of this Agreement, the Acceptable Use Policy, or any applicable law.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner's marketing content, including any claim that such content is false, misleading, deceptive, or in violation of FTC regulations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any unauthorized use of Company intellectual property.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any claim arising from Partner's failure to comply with the clinical firewall, HIPAA acknowledgment, or FTC disclosure requirements.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">Company shall indemnify, defend, and hold harmless Partner from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to Company's breach of this Agreement or the negligence or willful misconduct of Company's employees or agents.</p>
          </div>

          {/* XV — Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Limitation of Liability</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">To the maximum extent permitted by applicable law, neither Party shall be liable to the other for any indirect, incidental, special, consequential, or punitive damages arising out of or related to this Agreement, regardless of the theory of liability.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Company's total aggregate liability under this Agreement shall not exceed the total compensation paid to Partner during the twelve (12) months immediately preceding the event giving rise to the claim.</p>
          </div>

          {/* XVI — Confidentiality */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XVI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Confidentiality</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Each Party agrees to maintain the confidentiality of all non-public information received from the other Party in connection with this Agreement, including compensation terms, business strategies, marketing data, and proprietary materials ("Confidential Information").</p>
            <p className="text-base leading-relaxed text-muted-foreground">Confidential Information does not include information that is publicly available, independently developed, or rightfully obtained from a third party without restriction. This obligation survives termination for a period of two (2) years.</p>
          </div>

          {/* XVII — State-Specific Addenda */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XVII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>State-Specific Addenda</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Depending on Partner's state of residence, one or more addenda may be incorporated into this Agreement. These addenda address state-specific anti-kickback statutes, fee-splitting prohibitions, consumer privacy laws, and enhanced compliance requirements. Any applicable addenda are identified during the Partner onboarding process and attached to this Agreement as Exhibit C (State-Specific Addenda).</p>
            <p className="text-base leading-relaxed text-muted-foreground">In the event of a conflict between this Agreement and any State-Specific Addendum, the terms of the State-Specific Addendum shall control to the extent of the conflict.</p>
          </div>

          {/* XVIII — Governing Law and Dispute Resolution */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XVIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Governing Law and Dispute Resolution</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Agreement shall be governed by and construed in accordance with the laws of the State of __________________, without regard to its conflict of laws principles. Any dispute arising out of or related to this Agreement shall be resolved by binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Each Party consents to the exclusive jurisdiction and venue of the state and federal courts located in __________________ for any proceedings ancillary to arbitration or for injunctive relief.</p>
          </div>

          {/* XIX — General Provisions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XIX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>General Provisions</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Entire Agreement.</strong> This Agreement, together with all Exhibits and Addenda, constitutes the entire agreement between the Parties and supersedes all prior negotiations, representations, warranties, commitments, offers, and agreements, whether written or oral.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Amendment.</strong> This Agreement may be amended only by a written instrument executed by both Parties. Company may update the Acceptable Use Policy and Compliance Guidelines at any time with thirty (30) days' written notice to Partner.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Severability.</strong> If any provision is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Waiver.</strong> The failure of either Party to enforce any right or provision shall not constitute a waiver of future enforcement.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Assignment.</strong> Partner may not assign this Agreement without Company's prior written consent. Company may assign this Agreement in connection with a merger, acquisition, or sale of substantially all of its assets.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Notices.</strong> All notices shall be in writing and delivered by email to the addresses provided in this Agreement or updated in writing by either Party.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Force Majeure.</strong> Neither Party shall be liable for delays caused by circumstances beyond its reasonable control, including natural disasters, government actions, pandemics, or internet service disruptions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Counterparts.</strong> This Agreement may be executed electronically and in counterparts, each of which shall be deemed an original.</li>
            </ul>
          </div>

          {/* XX — Ongoing Compliance */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Ongoing Compliance</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">During the Term, the Parties commit to the following compliance activities:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Quarterly audit of Partner content for compliance with this Agreement and the Acceptable Use Policy.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Annual FMV recertification by an independent third-party valuation firm.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Annual renewal of this Agreement and all applicable addenda.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Ongoing monitoring of applicable federal and state law for legislative or regulatory changes affecting this arrangement.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Immediate termination protocol for compliance violations, as described in Section XIII(B).</li>
            </ul>
          </div>

          {/* XXI — Exhibits */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XXI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Exhibits</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The following exhibits are attached to and incorporated by reference into this Agreement:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Exhibit A:</strong> Compensation Schedule (tier designation, methodology, payment terms)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Exhibit B:</strong> Fair Market Value Certification (independent third-party FMV assessment)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Exhibit C:</strong> State-Specific Addenda (if applicable, based on Partner's state of residence)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Exhibit D:</strong> Partner Compliance Guidelines and Acceptable Use Policy</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Exhibit E:</strong> FTC Affiliate Disclosure (pre-written disclosure language)</li>
            </ul>
          </div>

          {/* XXII — Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XXII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">For questions about this Agreement, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
            <p className="text-base leading-relaxed text-muted-foreground">For general support, contact <a href={"mailto:" + supportEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{supportEmail}</a>.</p>
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