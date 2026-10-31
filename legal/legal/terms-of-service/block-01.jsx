
export default function Block() {
  const pageTitle = "Terms of Service";
  const lastUpdated = "April 19, 2026";
  const legalEmail = "legal@athos.example";
  const supportEmail = "support@athos.example";
  const securityEmail = "security@athos.example";
  const contactPhone = "(000) 000-0000";
  const postalAddress = "[Registered Agent Address]";

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
        <div className="container py-5">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm leading-relaxed text-center" style={{ color: "#FFFFFF" }}>Athos is limited to providing consultations for specific non-emergency medical conditions. If you believe you are experiencing a medical emergency, please dial 911 or contact your local medical provider immediately.</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Arbitration Notice */}
          <div className="rounded-xl p-6 mb-12" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Mandatory arbitration notice</p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">By clicking "I Agree," checking a box, using any feature of the Service, or otherwise affirmatively accepting these Terms, you confirm that you have read and accepted all of these Terms of Service ("Agreement"), including the mandatory arbitration provision. Unless you timely opt out as described in the Binding Arbitration section, you agree that any dispute will be resolved through binding individual arbitration rather than in court. You waive the right to a jury trial and the right to bring or participate in any class action.</p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">If you do not wish to arbitrate, you must opt out in writing within thirty (30) days after you first accept these Terms. If you timely opt out, arbitration will not apply to you. If you fail to opt out, arbitration applies automatically.</p>
            <p className="text-sm leading-relaxed text-muted-foreground">All arbitrations shall be administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules and Consumer Due Process Protocol. The arbitration will be conducted in the county of your residence or another mutually agreed location, and may be conducted by telephone, video conference, or other remote means if permitted by the arbitrator.</p>
          </div>

          {/* ═══ INTRODUCTION & SCOPE ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>1</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Introduction and Scope</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos, a licensed entity of Symbiotix-demo ("Athos," "we," "us," or "our"), owns and operates the Athos website and associated applications (collectively, the "Platform"). The Platform facilitates telehealth services coordinated by Athos on behalf of Dhruv Physician Assistant, A Professional Corporation P.C. ("MSO"), an independent Medical Services Organization that operates a licensed physician and pharmacy network across all 50 states. The MSO contracts with licensed medical providers, pharmacies, laboratories, and other vendors (collectively, "Providers") who deliver clinical care, prescription fulfillment, and related healthcare services (collectively, the "Services").</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos is not a medical provider or pharmacy and does not influence clinical decisions. Athos provides administrative, operational, and technological support to enable telehealth consultations, prescription fulfillment (where clinically appropriate and permitted by law), laboratory services, and related healthcare coordination. Athos does not collect or store personal data. All information entered on the Platform exists at the session level only and is cleared on browser refresh. Personal information is collected and stored solely by the MSO at the point of checkout.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">When you use the Services, you enter into this Agreement with Athos and the MSO's affiliated professional entities. Your consultations are conducted via telehealth by licensed medical providers in your state, where permitted by applicable law. Where medically appropriate and legally permitted, Providers may issue prescriptions, including for commercially available or compounded medications. You agree to comply with applicable state and federal laws concerning prescription medications.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You acknowledge that during your use of the Services you may receive communications from Providers through the Platform regarding your diagnosis, care, or treatment. It is your responsibility to read and respond to these communications and to follow treatment recommendations. Neither Athos nor any Provider will be liable for any loss or harm resulting from your failure to read or respond to communications or to follow medical advice.</p>
            <p className="text-base leading-relaxed text-muted-foreground">You may also purchase non-prescription products or non-medical services directly through the Platform; such purchases are subject to this Agreement and our Privacy Policy.</p>
          </div>

          {/* ═══ ACCEPTANCE & UPDATES ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>2</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Acceptance and Updates</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">By accessing, registering with, or using the Services, you agree to be bound by this Agreement and our Privacy Policy. This is a legally enforceable contract. If you do not accept all terms, you are not permitted to access, register for, or use the Services. Your use is subject to all applicable laws and regulations. If you disagree with any provision, your only remedy is to discontinue use immediately.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">We may change these Terms at any time. We will provide notice of proposed changes (via email, in-app banner, or push notification) at least ten (10) days before changes take effect. For material changes (such as pricing, refunds, or user rights), we may require affirmative consent before continuing service. Your continued use after changes are posted constitutes acceptance. Changes will not retroactively affect rights or obligations already accrued. We will maintain a version history of prior Terms accessible via the Platform or by request.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Eligibility</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The Services are available only to individuals physically located in states where we operate and who are at least eighteen (18) years old, or the age of majority in their state if higher. Where permitted by law, the MSO's affiliated providers may deliver Services to legally emancipated minors or "mature minors," but only within the boundaries of state law and at the provider's independent clinical and legal determination. Parents or guardians may not use their own accounts to obtain prescription medications for a minor.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Your physical location at the time of any telehealth consultation must match the state listed in your account profile and shipping address. Misrepresentation of your age, location, or eligibility may result in suspension, termination, denial of services, and other legal consequences. Not all products or services are available in all states, and some conditions may require an in-person evaluation.</p>
          </div>

          {/* ═══ ACCOUNT & RESPONSIBILITIES ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>3</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Your Account and Responsibilities</h2>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Telehealth Consent</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Clinical services are provided exclusively by licensed medical professionals affiliated with the MSO. Athos does not employ clinicians, practice medicine, or make clinical decisions. Some or all services may be delivered via telehealth. By using the Services, you agree to receive telehealth care from the MSO under the following conditions:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">You will provide accurate information about your identity and physical location at each telehealth encounter. Your Provider relies on this to confirm licensure and legal compliance.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">You must participate in telehealth sessions from a secure, private setting.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Telehealth does not include a full in-person examination. This may increase the possibility of incomplete assessments, delayed decisions, or missed diagnoses. Your Provider may refer you for in-person care.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Technology interruptions may delay or interfere with sessions. Your Provider will make reasonable efforts to reconnect.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Neither you nor your Provider may record the session without the other's written consent, unless required by law.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Telehealth is not appropriate for emergencies. If you believe you are experiencing a medical emergency, call 911 immediately.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">By using the Platform, you acknowledge that Athos is not a healthcare provider, you understand the risks, benefits, and limitations of telehealth, you will be truthful about your identity and location, and you understand that your Provider may determine telehealth is not appropriate and may recommend in-person care. Athos is a third-party facilitator and beneficiary of this consent for the limited purpose of enforcing its terms with respect to your use of the Platform.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Registration and Account Security</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You must register and provide accurate, complete, and current information, and promptly update it if it changes. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. If we reasonably believe your information is false, misleading, or that unauthorized access is occurring, we may suspend or terminate your account.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You must not share your password, and you must notify us immediately at <a href={"mailto:" + securityEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{securityEmail}</a> if you believe your credentials have been compromised. Athos is not liable for harm arising from your failure to secure your account. You are responsible for possessing and maintaining the hardware, software, and connectivity required to access the Services.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>User Data</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">When you submit User Data — which may include medical history, prescriptions, demographic details, or consultation responses — you understand that the MSO and its affiliated Providers, Pharmacies, Labs, or Vendors may use, store, display, analyze, and disclose that data to provide Services, fulfill prescriptions, coordinate care, process payments, and improve products, as permitted under this Agreement and our Privacy Policy. Athos does not store User Data; session-level information is cleared on browser refresh.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You acknowledge that incorrect, incomplete, or untimely information may result in misdiagnosis, delays, or other adverse outcomes, and that Athos shall not be responsible for outcomes resulting from such information.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO employs reasonable technical and organizational security measures, which may include encryption, secure protocols, and regular assessments. If a data security breach affecting your data is discovered, we will comply with all applicable breach notification laws without unreasonable delay.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Privacy and Data Use</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Your User Data will be used to operate and improve the Services, support treatment decisions, maintain security, and satisfy legal obligations. We may work with de-identified or aggregated data for analytics and development. We do not sell your identifiable health information to unrelated advertisers. We use cookies and tracking technologies and may share usage metadata with trusted third parties for analytics and performance. You may opt out of non-essential cookies. For sensitive data, we apply supplemental protections in accordance with applicable privacy laws (CCPA/CPRA, Virginia, Colorado, etc.). Details on exercising your rights are in our Privacy Policy. We retain User Data only as long as necessary and securely delete or de-identify it afterward.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Communications</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">By providing your mobile number and activating your account, you consent to receive service-related communications by SMS, email, or in-platform notification. SMS is the default for critical communications. You may opt out of SMS at any time; we will use alternative channels, but delivery of certain messages may be delayed. We comply with all applicable telecommunications laws, including the TCPA. Non-essential or promotional texts are always optional. Standard carrier rates may apply.</p>
            <p className="text-base leading-relaxed text-muted-foreground">You consent to conduct business electronically. Electronic communications have the same force and legal effect as written communications. You are responsible for maintaining accurate contact information and for monitoring and responding to communications. Athos is not liable for loss resulting from your failure to receive, read, or respond to communications.</p>
          </div>

          {/* ═══ SERVICES PROVIDED ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>4</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Services Provided</h2>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Prescription Medications</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Certain products require a valid prescription from a licensed Provider. You cannot receive a prescription product unless you complete a consultation, the Provider determines the product is clinically appropriate, and the Provider issues a prescription. Prescriptions may be filled through an affiliated pharmacy or a pharmacy of your choice. Enrollment does not guarantee any prescription. All prescribing decisions are made by the treating Provider in accordance with medical judgment and applicable law.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Some medications may be controlled substances subject to strict regulation, including the Ryan Haight Online Pharmacy Consumer Protection Act. Your Provider may require an in-person examination, check the state Prescription Drug Monitoring Program (PDMP), or decline to prescribe if doing so would not comply with law. Not all states allow controlled substances to be prescribed remotely.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Compounded Medications</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Some prescription products may be compounded medications prepared by the MSO's licensed compounding pharmacies in accordance with Section 503A of the Federal Food, Drug, and Cosmetic Act and applicable state pharmacy laws. Compounded medications are not reviewed or approved by the FDA for safety, effectiveness, or quality. Prescribing decisions are made solely by the treating Provider based on clinical judgment.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Laboratory Services</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO coordinates certain laboratory services, including at-home specimen collection and in-lab draws via CLIA-certified laboratories, which require a valid order from a licensed Provider. Fulfillment options may include in-facility collection, at-home self-collection devices, or hybrid solutions. The affiliated laboratory is responsible for processing, quality control, regulatory compliance, and result reporting. Lab costs are included in your subscription or total charges. You may arrange testing elsewhere at your own cost. All laboratory services are "Third-Party Goods and Services" under this Agreement.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Pharmacy Services</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All prescription fulfillment is provided by third-party pharmacies licensed in their respective jurisdictions. These pharmacies are solely responsible for dispensing, compliance, and professional standards of care. Athos does not control their clinical judgments. Pharmacy services — including dosage, labeling, drug interactions, and consultation — are under the exclusive domain of the licensed pharmacist. Athos is not liable for professional errors, adverse reactions, delays, or harm resulting from a pharmacy's actions.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Evaluation and Subscription Enrollment</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos may offer a complimentary evaluation to assess your eligibility for certain treatments. This evaluation does not guarantee treatment or enrollment. If a Provider determines treatment is appropriate and issues a prescription, you will be enrolled in a subscription plan. Your payment method will be charged upon enrollment. You will receive clear notice of all material terms — including price, billing frequency, refund policy, renewal terms, how to cancel, and any limitations — at or before the time you provide payment information.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Subscriptions renew automatically unless you cancel at least 48 hours before the end of your current term. Renewal reminders will be sent in advance as required by applicable law. Cancellation is designed to be no harder than signing up — available online 24/7, by email, or by phone. Cancellation takes effect at the end of the current billing period. No refunds are available for partially used periods, except where required by law. If you are not approved for treatment, no charges will be made.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Clinical Disclaimer</h3>
            <p className="text-base leading-relaxed text-muted-foreground">Athos is not a medical provider, is not licensed to practice medicine, and does not provide medical care, diagnosis, or treatment. All healthcare services are performed by licensed clinicians affiliated with the MSO who are solely responsible for their clinical judgments. The Platform is not a substitute for comprehensive medical advice or in-person examination. Athos is not liable for outcomes arising from medical advice, treatment decisions, or care provided by Providers, including adverse outcomes, delays, or inaccuracies. Remote medical services carry inherent limitations and risks, and you agree that Athos is not responsible for harm arising from these inherent limitations.</p>
          </div>

          {/* ═══ FINANCIAL RESPONSIBILITIES ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>5</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Financial Responsibilities</h2>
            </div>

            <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Summary</p>
              <ul className="space-y-1">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">Self-pay only. We do not participate in Medicare, Medicaid, or insurance.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">We do not submit insurance claims, and you agree not to do so.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">FSA/HSA use is not guaranteed — check with your plan administrator.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">By using our services, you authorize charges to your saved payment method.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">Prescription products are final sale and cannot be returned.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">Medical consultation fees ($19–$39) are non-refundable once a prescription is issued.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">You remain responsible for charges incurred up to the cancellation date.</li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">You are responsible for paying all fees associated with your use of the Services, including professional services, pharmacy charges, laboratory tests, processing fees, shipping, and applicable taxes, unless otherwise stated. All charges must be paid at the time of order using a valid payment method. By submitting payment information, you authorize Athos or its vendors to charge the full amount. If your payment fails or your card issuer updates your details, we may reprocess the transaction.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Medical Consultation Fee</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO charges a medical consultation fee for each provider evaluation that results in an approved prescription. This fee compensates the licensed provider for reviewing your health information and rendering a clinical judgment. The consultation fee is billed by the MSO at the time of prescription approval and is non-refundable once a prescription has been issued, even if you later choose not to fill or continue treatment.</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(36,92,58,0.15)" }}>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#245C3A" }}>Visit Type</th>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#245C3A" }}>Description</th>
                    <th className="text-right py-3 font-medium" style={{ color: "#245C3A" }}>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Asynchronous</span></td>
                    <td className="py-3 pr-4 text-muted-foreground">Store-and-forward provider review (non-controlled medications)</td>
                    <td className="py-3 text-right text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>$19.00</span></td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Video — Standard</span></td>
                    <td className="py-3 pr-4 text-muted-foreground">Live video consultation for non-controlled prescriptions</td>
                    <td className="py-3 text-right text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>$29.00</span></td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Video — Controlled</span></td>
                    <td className="py-3 pr-4 text-muted-foreground">Live video consultation for controlled substance prescriptions</td>
                    <td className="py-3 text-right text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>$39.00</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">A reasonable processing fee may also be deducted from any refund issued under this Agreement to cover administrative and transaction costs. All refunds, if approved, will be net of both the consultation fee (if applicable) and any processing fee.</p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">Prescription medications are final sale and may not be returned or refunded once shipped, in accordance with pharmacy law. If your prescription is mis-filled, damaged in transit, compromised by a temperature excursion, or subject to recall, your exclusive remedy is a replacement shipment at no additional cost. In exceptional circumstances, we may issue a credit or billing adjustment at our sole discretion. See our Refunds, Returns and Replacements Policy for details.</p>
            <p className="text-base leading-relaxed text-muted-foreground">You accept full financial responsibility for all services and products. Services are provided solely on a self-pay basis. You remain responsible for charges incurred through the effective date of any subscription cancellation. Payment for Services is generally not eligible for insurance reimbursement. FSA/HSA eligibility depends on your plan administrator's rules.</p>
          </div>

          {/* ═══ TERMS OF SALE & SHIPPING ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>6</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Terms of Sale and Shipping</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All products are subject to availability. We may limit quantities, correct pricing errors, or cancel orders before fulfillment. Prices, shipping, processing fees, and taxes may change at any time. Delivery dates are estimates and not guarantees. Once a product is delivered to the address you provided, risk of loss passes to you.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Temperature-sensitive products are packaged using cold-chain protocols. Shipments containing controlled substances or cold-chain items may require an adult signature. We are not responsible for delays caused by weather, carrier issues, or circumstances outside our control. If you believe your package was misdelivered or damaged, notify us within forty-eight (48) hours. If non-delivery was caused by our error, we will provide one courtesy reshipment at no additional cost.</p>
            <p className="text-base leading-relaxed text-muted-foreground">It is your responsibility to ensure your shipping address and contact information are accurate. If a shipment is delayed, returned, or misdelivered due to incorrect information you provided, you may be responsible for reshipment costs. Non-prescription products may be subject to different return or refund policies disclosed at the time of purchase.</p>
          </div>

          {/* ═══ CHARGEBACKS ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>7</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Chargebacks</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">If multiple chargebacks or payment disputes are initiated on your account, we reserve the right to suspend or permanently cancel your subscription and associated services. If you believe a chargeback has been opened in error, contact us promptly so we can review and resolve the matter before further action is taken.</p>
          </div>

          {/* ═══ THIRD-PARTY GOODS & SERVICES ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>8</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Third-Party Goods and Services</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos works with third-party Labs, Pharmacies, the MSO, Providers, and other vendors ("Third Parties") who provide or fulfill certain products or services via the Platform. In bundled arrangements, Athos may coordinate delivery, handle billing, and manage customer service, while the Third Party fulfills its operational obligations.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos does not control the quality, availability, or performance of Third-Party Goods and Services and is not liable for any loss, damage, or claim arising from their use. If a dispute arises between you and a Third Party, you release and indemnify Athos from all connected claims, losses, or damages.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Some Third Parties may be affiliated with or share ownership interests with Athos stakeholders. Athos may receive compensation related to your use of their services. If you are a California resident, you waive your rights under California Civil Code Section 1542 in connection with Third-Party Goods and Services, as permitted by law.</p>
          </div>

          {/* ═══ PROMOTIONS ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>9</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Promotions, Offers, and Rewards</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos may offer promotions, discounts, referral rewards, affiliate or influencer programs, or coupon codes ("Promotions"). All Promotions are subject to this Agreement and any additional program-specific terms.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">A "New Patient" means an individual who completes an initial medical intake, receives their first prescription, and has had no prior active prescription, consultation, or encounter with Athos or the MSO within the preceding twelve (12) months. Athos determines eligibility in its sole discretion based on internal records.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos reserves the right to refuse, revoke, or deduct rewards in cases of fraud, misrepresentation, cancellations, or non-qualifying actions. Affiliates and influencers must clearly disclose any material connection to Athos in compliance with FTC Endorsement Guides and applicable laws. Coupon codes may be subject to restrictions including expiration dates, product exclusions, and single-use limitations.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Athos reserves the right to modify, suspend, or terminate any Promotion at any time. Disputes arising from Promotions are governed by the Binding Arbitration provisions of this Agreement.</p>
          </div>

          {/* ═══ INTELLECTUAL PROPERTY ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>10</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Intellectual Property</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos (Symbiotix-demo) owns and retains all rights, title, and interest in the Platform, including all content, features, functionality, software, design, text, images, trademarks, and intellectual property ("Athos IP"). Subject to compliance with this Agreement, Athos grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial use. You may not copy, modify, distribute, reverse engineer, or create derivative works of any part of Athos IP. All rights not expressly granted are reserved.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Any suggestions, feedback, or contributions you provide to Athos are, upon provision, the exclusive property of Athos, and Athos may use, adapt, and incorporate them without obligation.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>User Submissions</h3>
            <p className="text-base leading-relaxed text-muted-foreground">By submitting comments, feedback, or other materials ("Submissions"), you grant Athos a non-exclusive, worldwide, royalty-free, perpetual, transferable, and sublicensable license to use, reproduce, adapt, distribute, and display those Submissions in connection with the Services. This license does not apply to Protected Health Information ("PHI"), which is governed exclusively by our Privacy Policy and the MSO's Notice of Privacy Practices.</p>
          </div>

          {/* ═══ RESTRICTIONS ON USE ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>11</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Restrictions on Use</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">You agree to use the Services lawfully and responsibly. You must not:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Transmit unlawful, harmful, harassing, defamatory, threatening, fraudulent, or otherwise objectionable content.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Misrepresent your identity or affiliation, or use another person's account.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Share personal information obtained through the Service without express consent.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Use automated systems (bots, scrapers, spiders) to access or extract content.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Reverse engineer, decompile, or probe the underlying structure of the Platform.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Share login credentials or allow multiple individuals to use your account.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Distribute malware, viruses, spam, phishing messages, or harmful code.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Remove, alter, or obscure any proprietary notices, trademarks, or copyright markings.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Record or share screenshots or video of the Service without written permission.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Circumvent or bypass security or technical controls.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Use the Service to create competing products or commercially exploit it without written permission.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">Any action that could damage, disable, disrupt, overburden, or compromise the Platform is strictly prohibited. If you become aware of misuse or unauthorized access, notify us promptly.</p>
          </div>

          {/* ═══ LIABILITY & INDEMNIFICATION ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>12</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Limitation of Liability, Disclaimers, and Indemnification</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">To the fullest extent permitted by law, Athos and its affiliates provide the Platform and Services on an "as is / as available" basis, without warranties of any kind (express or implied). We disclaim implied warranties of merchantability, fitness for a particular purpose, noninfringement, accuracy, completeness, reliability, and uninterrupted operation.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, even if advised of the possibility. Your sole remedy for any claim is limited to the greater of: (a) the total fees you paid to Athos in the twelve (12) months preceding the event, or (b) one thousand U.S. dollars (\$1,000). This limitation does not apply to breaches of confidentiality, violations of HIPAA or applicable data-protection statutes, or willful misconduct, gross negligence, or fraud.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Any claim must be brought within one (1) year of the event giving rise to it, unless a longer period is required by applicable law.</p>
            <p className="text-base leading-relaxed text-muted-foreground">You agree to indemnify, defend, and hold harmless Athos and its affiliates from all liabilities, losses, damages, claims, costs, and expenses (including reasonable attorneys' fees) arising from your breach of these Terms, misuse of the Platform, violation of laws or third-party rights, or content you submit. Your indemnification obligations are independent and not subject to the damage caps above (except where prohibited by law). These obligations survive termination of this Agreement.</p>
          </div>

          {/* ═══ MODIFICATION, SUSPENSION & TERMINATION ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>13</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Modification, Suspension, and Termination</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos reserves the right, at any time and for any reason, to modify, suspend, or terminate the Platform or Services. Your permission to use the Services is personal, limited, and revocable and will automatically terminate if you violate these Terms. Upon termination, Athos may maintain, delete, or destroy data in accordance with internal policies and applicable law.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Notwithstanding termination, you will retain access to your medical records as required by law. Athos will make reasonable efforts to ensure continuity of care where required by law or professional standards. Provisions intended to survive termination — including disclaimers, limitation of liability, indemnification, governing law, and arbitration — will survive.</p>
          </div>

          {/* ═══ DMCA ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>14</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Copyright and DMCA Policy</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos may remove or disable access to content at any time, including upon receipt of a compliant DMCA notice. Athos maintains a policy to terminate repeat infringers and to accommodate standard technical measures used by copyright owners.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">If you believe material on the Platform infringes your copyright, send a DMCA notice to our Designated Agent:</p>
            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed text-muted-foreground">Email: <a href={"mailto:" + legalEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{legalEmail}</a></p>
              <p className="text-sm leading-relaxed text-muted-foreground">Mail: Athos, Attn: DMCA Agent, {postalAddress}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Phone: <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span></p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Your notice must include: a signature of the rights owner or agent; identification of the copyrighted work; identification and location of the infringing material; your contact information; a good-faith belief statement; and a statement of accuracy under penalty of perjury. Upon receipt, Athos may remove the material and notify the user. Counter-notifications may be submitted under 17 U.S.C. § 512(g)(3). Material will be restored 10–14 business days after receipt of a valid counter-notice unless the complainant files a court action.</p>
          </div>

          {/* ═══ GOVERNING LAW ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>15</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Governing Law, Jurisdiction, and Venue</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">This Agreement shall be governed by the laws of the State of Delaware, without regard to its conflict of laws rules. Arbitration location and procedures will follow the AAA Consumer Arbitration Rules and occur in a reasonably convenient location for the consumer. Legal notices or service of process must be directed to the address listed in the Contact section.</p>
          </div>

          {/* ═══ ARBITRATION ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>16</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Binding Arbitration and Class Action Waiver</h2>
            </div>

            <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Summary</p>
              <ul className="space-y-1">
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">Disputes are resolved through binding arbitration, not court.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">You waive the right to a jury trial.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">Disputes must be handled individually — no class actions.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">California residents retain the right to seek public injunctive relief in court.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">Small-claims court is allowed for qualifying individual claims.</li>
                <li className="text-sm leading-relaxed text-muted-foreground list-disc ml-4">You may opt out within 30 days of first accepting these Terms.</li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">By agreeing to these Terms, you and Athos (Symbiotix-demo), together with the MSO, its affiliated Providers, Laboratories, and Pharmacies (the "Athos Parties"), mutually agree that any dispute arising out of or related to this Agreement, the Services, the Platform, or any goods or services provided through Athos will be resolved through confidential, binding arbitration rather than in court — unless the dispute qualifies for small-claims court or a specific law requires otherwise. Both you and the Athos Parties waive the right to a jury trial and to bring or participate in any class, collective, consolidated, or representative action. All claims must be brought individually.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The arbitration will be governed by the Federal Arbitration Act (FAA) and conducted under the AAA Consumer Arbitration Rules in the county where you live at the time the claim is filed. Before beginning arbitration, both parties must attempt informal resolution: the disputing party must provide written notice describing the claim, supporting facts, and relief sought. Within 45 days of receiving notice, the parties will confer in good faith. If the dispute remains unresolved within 30 days of the initial meeting, either party may proceed to arbitration.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you live in California, this agreement does not prevent you from seeking public injunctive relief in court as recognized in McGill v. Citibank, N.A.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">For mass arbitration (25 or more substantially similar demands filed within a 90-day period by the same counsel), the arbitration provider will use a bellwether system: a small number of claims will be resolved first while the rest are paused. Filing and administrative fees will be managed to ensure neither side bears unreasonable costs.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The arbitrator has sole authority to decide arbitrability, validity, and enforceability. Your share of fees will never exceed what you would pay to file in court. The arbitrator's decision is final and binding and may be entered as judgment in any court with proper jurisdiction. This agreement applies to disputes that arose before you accepted these Terms and survives termination of the Services.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>Opt-Out</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">To opt out of arbitration, send written notice within 30 days of first accepting these Terms. Include your full name, account email, mailing address, phone number, and a clear opt-out statement. Send to:</p>
            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a", fontWeight: 500 }}>Athos — Legal Department</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{postalAddress}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Email: <a href={"mailto:" + legalEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{legalEmail}</a></p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">If you opt out on time, you keep your right to bring claims in court and the class action waiver will not apply. If you do not opt out, arbitration applies automatically. Athos will provide the AAA with a copy of any revised arbitration clause at least thirty (30) days before its effective date, per AAA Rule R-12.</p>
          </div>

          {/* ═══ GENERAL PROVISIONS ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>17</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>General Provisions</h2>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Severability</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">If any provision of this Agreement is held invalid, unenforceable, or illegal, it shall be modified or severed to the minimum extent necessary. The remainder of this Agreement shall remain in full force and effect. Where state law (including California and New York) restricts severability of unconscionable or essential terms, courts may decline to sever more broadly. This provision survives termination.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>No Agency</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">Nothing in this Agreement creates any agency, partnership, joint venture, employment, or fiduciary relationship between you and Athos, the MSO, or any affiliated entity. Each party is an independent entity with no authority to act for, represent, or bind the other. Any unauthorized act purporting to bind Athos is void and you agree to indemnify Athos from resulting liability.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Assignment</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">You may not assign or transfer any rights or obligations under this Agreement. Athos may assign this Agreement, in whole or in part, without your prior consent, to any affiliate or to a third party in connection with a merger, sale, reorganization, or change of control. Assignment does not release either party from obligations accrued prior to the assignment. This provision survives termination.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Third-Party Beneficiaries</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">Except where this Agreement expressly states otherwise, no person or entity other than the named parties has any rights under this Agreement. Where a section expressly provides that the MSO, a Provider, Pharmacy, Lab, or other named third party is an intended beneficiary, that party may enforce those specific provisions. Incidental beneficiaries have no enforcement rights.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Third-Party Links</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">The Platform may link to third-party websites or resources ("Third-Party Sites"). We do not control, endorse, or accept responsibility for Third-Party Sites. Your use is at your own risk. When you leave the Platform, the third party's own terms and privacy policies apply. Athos is not liable for any claim, loss, or damage arising from Third-Party Sites.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Notices</h3>
            <p className="text-base leading-relaxed text-muted-foreground">Notices from Athos to you may be delivered by email, posted notice on the Platform, or U.S. mail. Email notice is deemed given when sent (provided no bounce-back). Posted notice is deemed given at the time of posting. Mail notice is deemed given three business days after deposit. You are responsible for maintaining valid contact information. For material changes to Terms, we will provide advance notice as required by law.</p>
          </div>

          {/* ═══ DISCLAIMER OF WARRANTIES ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>18</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Disclaimer of Warranties</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">To the fullest extent permitted by applicable law, Athos, the MSO, their affiliates, Providers, Pharmacies, Labs, and any third parties offering goods or services through the Platform disclaim all warranties, express, implied, statutory, or otherwise. The Service is provided "as is," "as available," and with all faults. Your use is at your sole risk.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Athos makes no warranty that the Service will be uninterrupted, error-free, secure, or free from viruses or harmful components, or that any information will be complete, accurate, timely, reliable, or suitable for your specific purposes. We specifically disclaim the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. Where state law prohibits certain disclaimers or requires minimum implied warranties, those minimum protections will apply.</p>
          </div>

          {/* ═══ CONTACT ═══ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>19</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Questions, feedback, or legal notices regarding these Terms should be directed to:</p>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a", fontWeight: 500 }}>Athos — Legal</p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Email: <a href={"mailto:" + legalEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{legalEmail}</a></p>
              <p className="text-sm leading-relaxed text-muted-foreground">Support: <a href={"mailto:" + supportEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{supportEmail}</a></p>
              <p className="text-sm leading-relaxed text-muted-foreground">Phone: <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span></p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">{postalAddress}</p>
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