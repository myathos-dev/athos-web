
export default function Block() {
  const pageTitle = "Referral Partner Agreement";
  const lastUpdated = "April 19, 2026";
  const contactEmail = "partners@athos.example";
  const legalEmail = "legal@athos.example";

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#16625F" }}>
        <div className="container py-20 md:py-28">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Legal — Referral Partners</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: "#FFFFFF" }}>{pageTitle}</h1>
            <p className="text-base mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Preamble */}
          <div className="rounded-xl p-6 mb-12" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">This Referral Partner Agreement ("Agreement") is entered into between Athos, a licensed entity of Symbiotix-demo ("Athos," "we," "our," or "us"), and the individual or entity enrolling as a referral partner ("Partner," "you," or "your"). By enrolling in the Athos Referral Partner Program, you agree to the terms set forth herein.</p>
            <p className="text-sm leading-relaxed text-muted-foreground">This Agreement governs the marketing relationship between Athos and Partner only. All clinical care, prescribing, dispensing, and patient data are owned and controlled exclusively by Dhruv Physician Assistant, A Professional Corporation P.C. ("MSO"), an independent Medical Services Organization. Athos does not provide medical services, employ healthcare providers, or influence clinical decision-making.</p>
          </div>

          {/* 1 — Definitions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>1</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Definitions</h2>
            </div>
            <ul className="space-y-3 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>"Referral Code"</span> means a unique, trackable alphanumeric code or URL assigned to Partner by Athos for the purpose of attributing customer acquisitions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>"Referred Customer"</span> means a new customer who (a) uses Partner's Referral Code at the time of enrollment, (b) completes a medical intake and receives a prescription from a licensed Provider, and (c) purchases a subscription through the Athos Platform.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>"Subscription Revenue"</span> means the gross amount charged to a Referred Customer for a subscription period.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>"Net Revenue"</span> means Subscription Revenue less: (i) customer promotional discounts, (ii) medication cost, (iii) medical consultation fee, and (iv) fulfillment, shipping, and processing fees.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>"Marketing Fee"</span> means the percentage of Net Revenue paid to Partner as compensation for customer acquisition, as set forth in Section 3.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>"Individual Partner"</span> means a natural person enrolling as a referral partner in their personal capacity.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>"Company Partner"</span> means a business entity (including gyms, wellness centers, clinics, and similar organizations) enrolling as a referral partner.</li>
            </ul>
          </div>

          {/* 2 — Program Structure */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>2</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Program Structure</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Upon approval, Partner will be assigned a unique Referral Code. All affiliate sales are tracked exclusively through this code. Partner must use only the assigned Referral Code in connection with promotional activities. Referral Codes may not be transferred, sold, or shared with third parties without prior written consent from Athos.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Each Referral Code includes a built-in customer promotional discount of 10% off the Referred Customer's first subscription. This discount is applied automatically at checkout and is deducted from Subscription Revenue before calculating Net Revenue.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Athos reserves the right to modify, suspend, or terminate the Referral Partner Program, including commission rates, discount structures, and eligibility criteria, at any time with thirty (30) days' written notice to Partner.</p>
          </div>

          {/* 3 — Compensation */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>3</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Compensation</h2>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>3.1 Marketing Fee Rates</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos shall pay Partner a Marketing Fee calculated as a percentage of Net Revenue generated by each Referred Customer's subscription, for the duration of that customer's active subscription.</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(36,92,58,0.15)" }}>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#245C3A" }}>Partner Type</th>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#245C3A" }}>Marketing Fee</th>
                    <th className="text-left py-3 font-medium" style={{ color: "#245C3A" }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Individual Partner</span></td>
                    <td className="py-3 pr-4 text-muted-foreground">20% of Net Revenue</td>
                    <td className="py-3 text-muted-foreground">Duration of Referred Customer's subscription</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Company Partner</span></td>
                    <td className="py-3 pr-4 text-muted-foreground">30% of Net Revenue</td>
                    <td className="py-3 text-muted-foreground">Duration of Referred Customer's subscription</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>3.2 Sample Payout Calculation</h3>
            <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                      <td className="py-2 pr-4 text-muted-foreground">Subscription price</td>
                      <td className="py-2 text-right" style={{ color: "#1a1a1a", fontWeight: 500 }}>$250.00</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                      <td className="py-2 pr-4 text-muted-foreground">Less: 10% customer promo discount</td>
                      <td className="py-2 text-right text-muted-foreground">−$25.00</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                      <td className="py-2 pr-4 text-muted-foreground">Discounted price</td>
                      <td className="py-2 text-right text-muted-foreground">$225.00</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                      <td className="py-2 pr-4 text-muted-foreground">Less: medication, provider fee, fulfillment</td>
                      <td className="py-2 text-right text-muted-foreground">−$110.00</td>
                    </tr>
                    <tr style={{ borderBottom: "2px solid rgba(36,92,58,0.15)" }}>
                      <td className="py-2 pr-4 font-medium" style={{ color: "#245C3A" }}>Net Revenue</td>
                      <td className="py-2 text-right font-medium" style={{ color: "#245C3A" }}>$115.00</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                      <td className="py-2 pr-4 text-muted-foreground">Individual Partner payout (20%)</td>
                      <td className="py-2 text-right" style={{ color: "#1a1a1a", fontWeight: 500 }}>$23.00/period</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-muted-foreground">Company Partner payout (30%)</td>
                      <td className="py-2 text-right" style={{ color: "#1a1a1a", fontWeight: 500 }}>$34.50/period</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Illustrative example only. Actual Net Revenue varies by subscription plan, medication, and applicable fees. Marketing Fees are paid for each billing period the Referred Customer maintains an active subscription.</p>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>3.3 Payment Terms</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Marketing Fees are calculated monthly and paid within thirty (30) days following the close of each calendar month. Athos will provide Partner with a statement of Referred Customer activity and Marketing Fees earned. Minimum payout threshold is $50.00; fees below threshold will be carried forward to the following period.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>3.4 Fair Market Value</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Compensation under this Agreement reflects fair market value for marketing and customer acquisition services and is not determined based on:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Volume or value of referrals to healthcare providers.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Number of prescriptions written or filled.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Revenue generated from patient healthcare services.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">The parties intend full compliance with the Federal Anti-Kickback Statute (42 U.S.C. § 1320a-7b), applicable state anti-kickback laws, fee-splitting prohibitions, and the Stark Law (where applicable). Marketing Fees are paid solely for customer acquisition and promotional services, not for referrals for medical services.</p>
          </div>

          {/* 4 — No Practice of Medicine */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>4</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>No Practice of Medicine</h2>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>4.1 Clinical Control</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">The MSO and its licensed Providers retain sole and exclusive authority over:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Diagnosis and treatment decisions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Prescribing decisions, including dosing and medication selection.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Clinical protocols and patient eligibility determinations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Medical record documentation and maintenance.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>4.2 Partner Restrictions</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Partner shall not:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Direct or influence prescribing decisions.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Recommend specific dosing, medications, or treatment plans to prospective or current patients.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Market to patients in a manner constituting or implying medical advice.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Exercise control over clinical services or patient care.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Represent themselves as a healthcare provider, agent, or employee of Athos or the MSO.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Make claims about medication efficacy, outcomes, or guarantees.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">Nothing in this Agreement authorizes Partner to practice medicine. Any violation of this section constitutes grounds for immediate termination.</p>
          </div>

          {/* 5 — Marketing Obligations */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>5</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Marketing Obligations and Disclosures</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Partner agrees to:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Use only Athos-approved marketing materials, messaging, and branding, or obtain prior written approval for custom content.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Clearly and conspicuously disclose the material financial relationship with Athos in all promotional content, consistent with FTC Endorsement Guides (16 CFR Part 255) and applicable state laws.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Avoid misleading, deceptive, false, or unsubstantiated claims about Athos, the MSO, medications, treatments, or outcomes.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Not use spam, unsolicited communications, or any deceptive marketing practices.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Comply with all applicable advertising, telemarketing, healthcare-marketing, and privacy laws in all jurisdictions where Partner promotes the Platform.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">Athos reserves the right to review, approve, modify, or require removal of any marketing content at any time. Failure to comply with this section constitutes grounds for immediate termination and forfeiture of unpaid Marketing Fees.</p>
          </div>

          {/* 6 — Data and Privacy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>6</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Data, Privacy, and Patient Ownership</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All patients, patient data, medical records, and Protected Health Information ("PHI") belong exclusively to the MSO. Partner has no right to access, use, store, or disclose any patient data or PHI. Partner will receive only aggregate, de-identified referral performance data (e.g., number of conversions, total Marketing Fees earned).</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">To the extent Partner inadvertently receives any PHI, Partner shall immediately notify Athos and return or destroy such information. If the scope of Partner's activities requires access to PHI, the parties shall execute a separate Business Associate Agreement before any such access occurs.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Partner shall comply with all applicable privacy laws, including but not limited to HIPAA, CCPA/CPRA, and any state-specific health privacy statutes.</p>
          </div>

          {/* 7 — Independent Contractor */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>7</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Independent Contractor</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">The parties are independent contractors. Nothing in this Agreement creates:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">A partnership, joint venture, or agency relationship.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">An employment relationship.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">A fiduciary or patient-provider relationship.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">Partner has no authority to act for, represent, bind, or incur liability on behalf of Athos, the MSO, or any affiliated entity. Partner is solely responsible for their own taxes, insurance, and compliance obligations.</p>
          </div>

          {/* 8 — Confidentiality */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>8</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Confidentiality</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All proprietary, operational, pricing, commission structure, technology, and business information disclosed by Athos to Partner is confidential ("Confidential Information"). Partner shall not disclose Confidential Information to any third party without prior written consent from Athos, except as required by law.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Confidentiality obligations survive termination of this Agreement for a period of two (2) years.</p>
          </div>

          {/* 9 — Term, Termination, and Forfeiture */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>9</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Term, Termination, and Forfeiture</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Agreement is effective upon Partner's enrollment and continues until terminated by either party. Either party may terminate this Agreement for any reason with thirty (30) days' written notice. Athos may terminate immediately and without notice for cause, including fraud, misrepresentation, violation of Section 4 (No Practice of Medicine), violation of Section 5 (Marketing Obligations), breach of confidentiality, or violation of applicable law.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Upon termination:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Partner must immediately cease all use of Athos branding, Referral Codes, and marketing materials.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Marketing Fees earned and accrued prior to the effective date of termination will be paid in the next regular payment cycle, provided termination was not for cause.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">If terminated for cause, Athos reserves the right to withhold all unpaid Marketing Fees.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">No Marketing Fees will accrue for subscription periods beginning after the effective date of termination.</li>
            </ul>
          </div>

          {/* 10 — Indemnification and Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>10</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Indemnification and Limitation of Liability</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner agrees to indemnify, defend, and hold harmless Athos, Symbiotix-demo, the MSO, and their respective officers, directors, employees, agents, and affiliates from any claims, losses, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from Partner's breach of this Agreement, marketing activities, violation of applicable law, or misrepresentation.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">To the fullest extent permitted by law, Athos's total liability to Partner under this Agreement shall not exceed the total Marketing Fees paid to Partner in the twelve (12) months preceding the event giving rise to the claim. Athos shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Athos makes no guarantee of any minimum number of referrals, conversions, or Marketing Fee earnings. The Platform, Services, and Referral Partner Program are provided "as is" without warranties of any kind.</p>
          </div>

          {/* 11 — Dispute Resolution */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>11</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Governing Law and Dispute Resolution</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Agreement shall be governed by the laws of the State of Delaware. Any dispute arising out of or relating to this Agreement shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration shall be conducted in the county of the respondent's principal place of business or another mutually agreed location. The arbitrator's decision is final and binding and may be entered as judgment in any court of competent jurisdiction.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Both parties waive the right to a jury trial and the right to bring or participate in any class, collective, or representative action.</p>
          </div>

          {/* 12 — General */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>12</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>General Provisions</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous understandings. Athos may amend this Agreement with thirty (30) days' written notice; continued participation constitutes acceptance. If any provision is found invalid or unenforceable, the remainder shall continue in full force and effect.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Partner may not assign or transfer this Agreement without prior written consent from Athos. Athos may assign this Agreement in connection with a merger, acquisition, reorganization, or sale of assets. The failure of either party to enforce a provision is not a waiver of that provision.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Sections 4, 6, 8, 10, and 11 survive termination of this Agreement.</p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>13</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact</h2>
            </div>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed text-muted-foreground">Partnership inquiries: <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a></p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Legal: <a href={"mailto:" + legalEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{legalEmail}</a></p>
            </div>
          </div>

          {/* Disclaimer */}
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