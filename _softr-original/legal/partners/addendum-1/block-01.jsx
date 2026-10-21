import { useTextSetting, useLongTextSetting } from "@/lib/editable-settings";

export default function Block() {
  const pageTitle = useTextSetting({
    name: "page-title",
    label: "Page title",
    initialValue: "State Anti-Kickback & Fee-Splitting Addendum",
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
            <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Legal — Exhibit C</p>
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
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Exhibit C to the Marketing Services Agreement</p>
            <p className="text-sm leading-relaxed text-muted-foreground">This Addendum supplements and is incorporated into the Marketing Services Agreement ("MSA") between Symbiotix LLC, d/b/a Athos ("Company") and the undersigned Marketing Partner ("Partner"). In the event of a conflict between this Addendum and the MSA, the terms of this Addendum control to the extent of the conflict. Only the section corresponding to Partner's state of residence applies.</p>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Attorney review required</p>
              <p className="text-sm leading-relaxed text-muted-foreground">State anti-kickback and fee-splitting laws are complex, frequently amended, and subject to interpretation. This Addendum reflects a good-faith compliance posture but does not constitute legal advice. Attorney review is required before execution.</p>
            </div>
          </div>

          {/* I — Purpose */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Purpose</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Certain states maintain anti-kickback, patient brokering, or fee-splitting statutes that apply regardless of payer source — including cash-pay arrangements. These statutes impose additional requirements or prohibitions beyond the Federal Anti-Kickback Statute (42 U.S.C. § 1320a-7b(b)), which applies only to Federal health care programs.</p>
            <p className="text-base leading-relaxed text-muted-foreground">This Addendum layers state-specific compliance provisions on top of the safeguards already established in the MSA, including the clinical firewall (Section III), FMV compensation (Section V), cash-pay attestation (Section X), and the personal services safe harbor alignment (42 C.F.R. § 1001.952(d)).</p>
          </div>

          {/* II — State-Specific Provisions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>State-Specific Provisions</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">Only the subsection corresponding to Partner's state of residence is incorporated into the MSA. All other subsections are inapplicable and have no force or effect.</p>

            {/* II-A — Florida */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-A</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>Florida</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Patient Brokering Act — Fla. Stat. § 817.505</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">Florida's Patient Brokering Act prohibits any person from offering, paying, soliciting, or receiving a commission, bonus, rebate, kickback, or bribe, directly or indirectly, for the referral of patients to or from a health care provider or facility. Violation is a felony of the third degree, with penalties escalating to a first-degree felony for schemes involving 20 or more patients.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Safe harbor relied upon</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Section 817.505(3)(a) exempts any discount, payment, waiver of payment, or payment practice not prohibited by 42 U.S.C. § 1320a-7b(b) or any regulations promulgated thereunder. This arrangement is structured to satisfy the federal personal services safe harbor at 42 C.F.R. § 1001.952(d), and accordingly falls within the § 817.505(3)(a) exemption.</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for Florida partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation is set in advance at fair market value and is not based on the potential value of a patient or the volume of referrals.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner performs documented marketing deliverables with independent commercial value.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Clinical firewall provisions of the MSA (Section III) are strictly enforced.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Percentage-based compensation is permitted under this structure.</li>
              </ul>
            </div>

            {/* II-B — California */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-B</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>California</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Business and Professions Code § 650</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">California BPC § 650 prohibits the offer, delivery, receipt, or acceptance of any consideration as compensation or inducement for referring patients, clients, or customers, regardless of whether the person is licensed under the healing arts division. The prohibition applies irrespective of payer source.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Defenses relied upon</p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-2">BPC § 650(b): A percentage of gross revenue paid for services other than the referral of patients shall not be unlawful if the consideration is commensurate with the value of the services furnished.</p>
                <p className="text-sm leading-relaxed text-muted-foreground">BPC § 650(c): Payment for advertising or marketing through a third-party advertiser shall not constitute a referral when the advertiser does not recommend or endorse a specific licensee and the relationship is disclosed.</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for California partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation must be demonstrably commensurate with the marketing services furnished — not referral activity.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced FMV documentation is required. The FMV Certification (Exhibit B) must specifically address the BPC § 650(b) "commensurate with value" standard.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner does not recommend or endorse any specific licensed provider within the MSO network.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">The existence of the marketing relationship is disclosed via the FTC Affiliate Disclosure.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Percentage-based compensation is permitted under this structure.</li>
              </ul>
            </div>

            {/* II-C — Texas */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-C</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>Texas</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Occupations Code § 102.001</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">Texas Occupations Code § 102.001 makes it an offense to knowingly offer to pay or agree to accept, directly or indirectly, overtly or covertly, any remuneration in cash or in kind to or from another for securing or soliciting patients or patronage for or from a person licensed, certified, or registered to practice a healing art. This statute explicitly includes self-pay arrangements.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Safe harbor relied upon</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Section 102.003(a)(15) provides that § 102.001 does not apply to any payment, business arrangement, or payment practice permitted by 42 U.S.C. § 1320a-7b(b) or any regulation adopted under that law. This arrangement is structured to satisfy 42 C.F.R. § 1001.952(d).</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for Texas partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Marketing deliverables must be documented with granular specificity. Partner shall maintain records of all content created, distributed, or promoted.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Disclosure required under § 102.006: Partner must disclose the financial relationship in all marketing communications.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation is set in advance, consistent with FMV, and not determined by referral volume.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Percentage-based compensation is permitted under this structure.</li>
              </ul>
            </div>

            {/* II-D — Tennessee */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-D</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>Tennessee</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>T.C.A. § 63-6-602</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">Tennessee law subjects percentage-based fee-splitting arrangements with non-physicians to criminal penalties. There is no safe harbor for percentage-based compensation models in the marketing context.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#991B1B" }}>Compensation override — flat fee required</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Section V (Compensation) of the MSA is modified for Tennessee partners as follows: the percentage-based compensation methodology is replaced in its entirety with the flat-fee model. Partner shall receive thirty-seven dollars (\$37) per month per active patient (Individual Tier) or fifty-five dollars (\$55) per month per active patient (Partner Tier). All other compensation terms remain in effect.</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for Tennessee partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Flat-fee compensation only. No percentage-based arrangements.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Flat fee reflects FMV for marketing services as validated by independent assessment (Exhibit B).</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced clinical firewall documentation.</li>
              </ul>
            </div>

            {/* II-E — Virginia */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-E</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>Virginia</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Va. Code § 54.1-2962</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">Virginia law imposes criminal penalties for fee-splitting with unlicensed persons in the healthcare context. There is no safe harbor for percentage-based compensation models.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(153,27,27,0.04)", border: "1px solid rgba(153,27,27,0.15)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#991B1B" }}>Compensation override — flat fee required</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Section V (Compensation) of the MSA is modified for Virginia partners as follows: the percentage-based compensation methodology is replaced in its entirety with the flat-fee model. Partner shall receive thirty-seven dollars (\$37) per month per active patient (Individual Tier) or fifty-five dollars (\$55) per month per active patient (Partner Tier). All other compensation terms remain in effect.</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for Virginia partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Flat-fee compensation only. No percentage-based arrangements.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Flat fee reflects FMV for marketing services as validated by independent assessment (Exhibit B).</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced clinical firewall documentation.</li>
              </ul>
            </div>

            {/* II-F — New York */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-F</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>New York</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Education Law § 6509-a</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">New York Education Law § 6509-a prohibits fee-splitting arrangements in which a licensee shares fees with a non-licensee in exchange for the referral of patients. Percentage-based arrangements are specifically subject to heightened scrutiny.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(202,138,4,0.06)", border: "1px solid rgba(202,138,4,0.25)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#92400E" }}>Attorney confirmation required</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Percentage-based compensation may be available if structured as payment for bona fide marketing services (not patient referrals) with FMV documentation. However, given the heightened scrutiny of percentage arrangements, Company reserves the right to convert New York partners to the flat-fee model at any time. Attorney must confirm which model is appropriate before this Addendum is executed.</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for New York partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced FMV documentation specifically addressing the fee-splitting prohibition.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Marketing deliverables documented with granular specificity.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Company may convert to flat-fee model upon 30 days' written notice if regulatory guidance changes.</li>
              </ul>
            </div>

            {/* II-G — Illinois */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-G</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>Illinois</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Medical Practice Act — 225 ILCS 60/22</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">The Illinois Medical Practice Act broadly prohibits percentage-based compensation arrangements between physicians and non-physicians. However, an exception exists for fair market value payments for billing, administrative, or collection services.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(202,138,4,0.06)", border: "1px solid rgba(202,138,4,0.25)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#92400E" }}>Attorney confirmation required</p>
                <p className="text-sm leading-relaxed text-muted-foreground">This arrangement must be structured to fit within the administrative services exception. Marketing services must be characterized and documented as administrative promotional support — not referral-based compensation. Attorney must confirm that the marketing deliverables described in the MSA qualify under this exception. Company reserves the right to convert to flat-fee at any time.</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for Illinois partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Marketing services explicitly documented as administrative promotional support in partner records.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced FMV documentation addressing the administrative services exception.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Company may convert to flat-fee model upon 30 days' written notice if regulatory guidance changes.</li>
              </ul>
            </div>

            {/* II-H — Michigan */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-H</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>Michigan</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>MCL § 752.1004</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">Michigan law makes it a felony — punishable by up to four years' imprisonment and a \$50,000 fine — to knowingly or intentionally offer, pay, solicit, or receive any remuneration, directly or indirectly, for the referral of patients. The prohibition extends to private insurance arrangements and is not limited to government programs.</p>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for Michigan partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation is structured and documented exclusively as payment for marketing services — not patient referrals.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner shall maintain detailed records of all marketing deliverables, including dates, platforms, content descriptions, and audience reach metrics.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced FMV documentation required.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Quarterly compliance audit of partner content is mandatory.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Clinical firewall provisions of the MSA (Section III) are strictly enforced with enhanced documentation.</li>
              </ul>
            </div>

            {/* II-I — New Jersey */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-I</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>New Jersey</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>N.J.S.A. 2C:21-4.3</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">New Jersey's patient brokering statute prohibits offering, paying, soliciting, or receiving any benefit, directly or indirectly, for the referral of a person to a health care professional or health care facility. The statute has been recently amended to expand its scope.</p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(202,138,4,0.06)", border: "1px solid rgba(202,138,4,0.25)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#92400E" }}>Attorney review required</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Due to recent amendments expanding the scope of this statute, attorney must review the current statutory text and confirm that the marketing services structure described in the MSA falls outside the prohibition. This Addendum shall not be executed for New Jersey partners until attorney confirmation is received.</p>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for New Jersey partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced documentation of marketing deliverables.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced FMV documentation.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Quarterly compliance audit mandatory.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Attorney confirmation on file before execution.</li>
              </ul>
            </div>

            {/* II-J — North Carolina */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-J</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>North Carolina</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>N.C. Gen. Stat. § 90-401</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">North Carolina imposes professional liability for the payment or receipt of compensation for the referral of patients. The statute creates civil liability exposure for healthcare professionals who participate in referral-for-compensation arrangements.</p>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for North Carolina partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced clinical firewall language. Partner expressly acknowledges that no patient is "referred" within the meaning of § 90-401 — rather, Partner directs general audience traffic to the Platform through marketing activities.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation is demonstrably for marketing services, not referral activity, supported by FMV documentation.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner certifies that Partner is not a licensed healthcare provider acting in a clinical referral capacity.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Percentage-based compensation is permitted under this structure.</li>
              </ul>
            </div>

            {/* II-K — Delaware */}
            <div className="mb-8 rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium tracking-wider uppercase mb-1" style={{ color: "rgba(36,92,58,0.5)" }}>Section II-K</p>
              <h3 className="text-xl font-medium mb-4" style={{ color: "#1a1a1a" }}>Delaware</h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>24 Del. C. § 1731(b)(15)</p>

              <p className="text-base leading-relaxed text-muted-foreground mb-4">Delaware law explicitly prohibits referral fees across healthcare professions. The statute defines the payment or receipt of a fee for the referral of a patient as unprofessional conduct subject to disciplinary action.</p>

              <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Additional requirements for Delaware partners:</p>
              <ul className="space-y-2 pl-6">
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Compensation is structured and documented exclusively as payment for marketing services — not patient referrals.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Enhanced FMV documentation required.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner certifies that Partner is not a licensed healthcare professional subject to the disciplinary provisions of 24 Del. C. § 1731.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Detailed record-keeping of marketing deliverables required.</li>
                <li className="text-base leading-relaxed text-muted-foreground list-disc">Percentage-based compensation is permitted under this structure.</li>
              </ul>
            </div>
          </div>

          {/* III — Compensation Override */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Compensation Override</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">For partners in states where percentage-based compensation is prohibited or subject to criminal penalties, the MSA's compensation methodology (Section V) is modified as follows:</p>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#245C3A" }}>Flat-fee states (mandatory)</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Tennessee</strong> and <strong style={{ color: "#1a1a1a" }}>Virginia</strong>: flat-fee compensation is required. The percentage model is unavailable.</li>
              </ul>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(202,138,4,0.06)", border: "1px solid rgba(202,138,4,0.25)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "#92400E" }}>Flat-fee states (discretionary — pending attorney confirmation)</p>
              <ul className="space-y-2 pl-5">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>New York</strong> and <strong style={{ color: "#1a1a1a" }}>Illinois</strong>: Company reserves the right to require flat-fee compensation. Attorney must confirm which model is appropriate.</li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-2">Flat-fee rates:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Individual Tier:</strong> \$37 per month per active patient attributed to Partner's tracking link.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Partner Tier:</strong> \$55 per month per active patient attributed to Partner's tracking link.</li>
            </ul>
          </div>

          {/* IV — Enhanced Documentation */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Enhanced Documentation Requirements</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">In addition to the standard compliance obligations of the MSA, all partners subject to this Addendum shall maintain the following records:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">A log of all marketing deliverables created or distributed, including date, platform, content type, and description.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Screenshots or archived copies of all published promotional content.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Audience reach and engagement metrics where available.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Records of all FTC disclosures included with promotional content.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Records shall be retained for a minimum of three (3) years following the termination of the MSA and made available to Company upon request.</li>
            </ul>
          </div>

          {/* V — Representations and Warranties */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Representations and Warranties</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner represents and warrants that:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner is not a licensed healthcare provider acting in a clinical referral capacity under the laws of Partner's state of residence.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">No portion of the compensation received under the MSA is intended as, or constitutes, payment for the referral of patients.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The marketing services Partner performs under the MSA have independent commercial value and would be commercially reasonable even if no patient conversions resulted.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner has not been excluded from participation in any Federal or state health care program.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner has not been convicted of any criminal offense related to healthcare fraud, patient abuse, or controlled substances.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner will immediately notify Company if any of the foregoing representations become inaccurate during the Term.</li>
            </ul>
          </div>

          {/* VI — Severability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Severability</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If any provision of this Addendum is held to be invalid, illegal, or unenforceable under the laws of any applicable jurisdiction, such invalidity shall not affect the remaining provisions, which shall continue in full force and effect.</p>
            <p className="text-base leading-relaxed text-muted-foreground">If the compensation methodology applicable to Partner's state is found to be non-compliant, Company shall have the right to immediately convert Partner's compensation to the flat-fee model or terminate the MSA, at Company's sole discretion.</p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-muted-foreground">For questions about this Addendum, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
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