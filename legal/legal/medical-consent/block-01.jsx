
export default function Block() {
  const pageTitle = "Telehealth Medical Consent";
  const lastUpdated = "April 19, 2026";
  const contactEmail = "support@athos.example";
  const contactPhone = "(000) 000-0000";
  const supportHours = "Monday to Saturday, 5:00am – 5:00pm (Pacific Time)";

  return (
    <div style={{ backgroundColor: "#f5f2ed" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#16625F" }}>
        <div className="container py-20 md:py-28">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Dhruv Physician Assistant, A Professional Corporation P.C.</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: "#FFFFFF" }}>{pageTitle}</h1>
            <p className="text-base mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div style={{ backgroundColor: "#558E8D" }}>
        <div className="container py-5">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm leading-relaxed text-center mb-3" style={{ color: "#FFFFFF" }}>Our providers do not address medical emergencies. Do not proceed with clinical services if you believe you are having a medical emergency. If you believe you are experiencing a medical emergency, dial 9-1-1 and/or go to the nearest emergency room.</p>
            <p className="text-sm leading-relaxed text-center" style={{ color: "#FFFFFF" }}>If you are contemplating suicide, contact 911 or the National Suicide Prevention Lifeline: dial 1-800-273-TALK, dial or text 988, or visit 988Lifeline.org to chat live.</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* I — Introduction */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Introduction</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You are reviewing and acknowledging this Telehealth Informed Consent because you are seeking healthcare services utilizing telehealth technologies provided by Dhruv Physician Assistant, A Professional Corporation P.C. ("Dhruv Physician PC"), facilitated through the Athos website, mobile applications, or other telehealth technologies (collectively, the "Athos Platform"). Athos is a licensed entity of Symbiotix-demo that provides administrative and operational support only. Athos does not provide medical services, employ healthcare providers, or influence clinical decision-making.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Telehealth Informed Consent does not modify or supersede any Terms of Use, Privacy Policy, or Notice of Privacy Practices of Athos or Dhruv Physician PC. It supplements those terms and documents.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">By creating an account, starting a consultation, clicking "I consent to telehealth," checking a related acceptance box, or using any other acceptance protocol presented through the Athos Platform, you indicate that you have reviewed the risks described herein of receiving services utilizing telehealth technologies and consent to receiving those services.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">A record of this Telehealth Informed Consent is maintained in the files and records of the applicable provider delivering your services. Your ongoing participation in services by Dhruv Physician PC using telehealth technologies serves as an ongoing acknowledgment of your acceptance of this consent and any updates to the representations you provide herein.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Dhruv Physician Assistant, A Professional Corporation P.C. refers to an independent Medical Services Organization operating a licensed physician and pharmacy network across all 50 states, including its employed and contracted healthcare providers (the "Providers").</p>
          </div>

          {/* II — What is Telehealth */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>What is Telehealth</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Telehealth involves the delivery of health and wellness services using electronic communications, information technology, or other means between a licensed, certified, or registered healthcare professional at one location and a patient at another location regarding a clinical matter.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Telehealth may be used for diagnosis, treatment, follow-up, and patient education. These services may involve various modalities, including asynchronous interactions, real-time (synchronous) video and audio encounters, and interactive audio with store-and-forward technology. This consent informs you ("patient," "you," or "your") concerning the treatment methods, risks, and limitations of utilizing telehealth to meet your health and wellness needs.</p>
          </div>

          {/* III — Benefits */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Possible Benefits of Telehealth</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Benefits of telehealth include more convenient and efficient access to health and wellness services. You can obtain services at times that are convenient for you without the necessity of an in-office appointment, including follow-up care related to your treatment.</p>
            <p className="text-base leading-relaxed text-muted-foreground">If you need follow-up care, please contact us through the Athos Platform or by calling <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span>, {supportHours}.</p>
          </div>

          {/* IV — Risks */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Possible Risks of Telehealth</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Information transmitted to your healthcare professional may not be sufficient to allow for appropriate services to meet your particular needs. Some clinical needs may not be appropriate for a telehealth visit, and your Provider will make that determination.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The technology necessary to interact with your healthcare professional may fail and delay your services. If a technical failure prevents you from communicating with your Providers, contact us at <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span>, {supportHours}.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">In rare events, a lack of access to complete medical records and/or the quality of transmitted data could result in adverse drug interactions, allergic reactions, or other clinical judgment errors.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You may stop or decline any ongoing healthcare services provided by Dhruv Physician PC using telehealth technologies at any time, although you acknowledge that applicable fees may apply if a medical consultation has occurred prior to your request to cancel. Dhruv Physician PC has no obligation for your ongoing care or selection of separate healthcare services in such circumstances.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You understand that certain diagnostic testing services, including laboratory products and services offered through the Athos Platform to support the healthcare services of Providers, may contain defects that could limit functionality or produce erroneous results, any or all of which could impact the quality, accuracy, or effectiveness of the medical care you receive from your Provider(s).</p>

            <div className="rounded-xl p-5 mt-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Third-party laboratory products and services</p>
              <p className="text-sm leading-relaxed text-muted-foreground">To facilitate certain healthcare services, Providers may require that you complete diagnostic tests. These tests are provided by third-party laboratories. Neither Athos, Dhruv Physician PC, nor your Provider(s) can guarantee the accuracy or reliability of these tests. Laboratory tests can produce false negative, false positive, or inconclusive results that could impact your Provider's ability to correctly diagnose or treat your medical conditions.</p>
            </div>
          </div>

          {/* V — Patient Acknowledgments */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Patient Acknowledgments</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">By accepting this Telehealth Informed Consent, you acknowledge that you understand and consent to the following:</p>

            <ol className="space-y-4 pl-0">
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>1</span>
                <p className="text-base leading-relaxed text-muted-foreground">You have reviewed this Telehealth Informed Consent carefully and understand there are risks, limitations, and benefits of utilizing telehealth.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>2</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that the electronic nature of telehealth services means there is a greater risk to the privacy of your health information.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>3</span>
                <p className="text-base leading-relaxed text-muted-foreground">In some cases, your Provider may be a nurse practitioner or physician assistant and not a physician.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>4</span>
                <p className="text-base leading-relaxed text-muted-foreground">Persons may be present during the telehealth visit other than your Provider in order to operate telehealth technologies or for language translation assistance. If another person is present, you will be informed of the individual's presence and their role.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>5</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that information you provide as part of any telehealth offering is treated as accurate, true, and complete.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>6</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that in certain instances, and in compliance with applicable law, your Provider may determine it is appropriate to provide healthcare services asynchronously via store-and-forward technology. In such instances, you and your Provider will communicate electronically through the Athos Platform and not via telephone or video. You agree that if your Provider makes that determination, you consent to receiving healthcare services in this manner.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>7</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand there is no guarantee that you will be given a prescription and that the decision of whether a prescription is appropriate will be made in the professional judgment of your Provider. You understand that while the use of telehealth may provide benefits, no specific results can be guaranteed and your condition may not improve.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>8</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand there is a risk of technical failures during the telehealth encounter beyond the control of Dhruv Physician PC and your Provider(s). You agree to hold harmless Dhruv Physician Assistant, A Professional Corporation P.C. and its employees, contractors, agents, directors, members, managers, shareholders, officers, representatives, assigns, predecessors, and successors, including Athos and Symbiotix-demo and their respective employees, contractors, agents, directors, members, managers, shareholders, officers, representatives, assigns, parents, predecessors, and successors, for delays in evaluation or for information lost due to such technical failures.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>9</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that certain diagnostic testing services, including laboratory products and services offered through the Athos Platform to support the healthcare services of Providers, may contain defects that could limit functionality or produce erroneous results, any or all of which could impact the quality, accuracy, or effectiveness of the medical care you receive.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>10</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand the Athos Platform makes available a specific set of services and you may need to seek other resources for additional health needs. There is no guarantee you will be approved for treatment by a Provider. Your Provider reserves the right to deny care for any reason if, in their professional judgment, the provision of services — including when provided via telehealth — is not medically or ethically appropriate. You understand that Providers, and not Athos or Dhruv Physician PC, are responsible for the quality and appropriateness of care rendered and make all clinical decisions in their independent discretion without the influence of Athos or Dhruv Physician PC. You agree to seek relief only against the Provider for any liabilities pertaining to medical or clinical issues arising as a direct result of clinical services accessed through the Athos Platform.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>11</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that by using the Athos Platform you are not always communicating with your Provider in real-time, and there may be a delay before your messages or information is reviewed. You must check the Athos Platform for messages because this is how your Provider will communicate important information to you. If you do not check the Platform regularly, your services may be delayed.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>12</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that you have the opportunity to discuss the use of telehealth with your Provider(s), including the benefits, risks, and alternatives. You have the right to withdraw your consent to the use of telehealth at any time, without prejudice to any future care or treatment and without risking the loss or withdrawal of any health benefits. You understand that Providers who deliver healthcare services via the Athos Platform do not offer in-person treatment.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>13</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that you have access to your medical record pertaining to the healthcare services of Providers utilizing the Athos Platform in accordance with applicable laws and regulations, and that your primary care provider or other treating provider may obtain copies of your health and wellness information with your consent.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>14</span>
                <p className="text-base leading-relaxed text-muted-foreground">You understand that while the Athos Platform may make available access to pharmacy or diagnostic laboratory services coordinated with healthcare services, you are able to request any pharmacy or laboratory of your preference.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium mt-0.5" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>15</span>
                <p className="text-base leading-relaxed text-muted-foreground">You agree that Athos is a third-party beneficiary of this Telehealth Informed Consent and has the right to enforce it against you.</p>
              </li>
            </ol>
          </div>

          {/* VI — State-Specific Disclosures */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>State-Specific Disclosures</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">The following disclosures apply to users accessing the Athos Platform for the purposes of participating in a telehealth visit, as required by the states listed below:</p>

            <div className="space-y-6">
              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Iowa</p>
                <p className="text-sm leading-relaxed text-muted-foreground">To register a formal complaint about a provider, visit the Iowa Medical Board: <a href="https://medicalboard.iowa.gov/consumers/filing-complaint" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>medicalboard.iowa.gov</a></p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Kentucky</p>
                <p className="text-sm leading-relaxed text-muted-foreground">To register a formal complaint about a provider, visit the Kentucky Board of Medical Licensure: <a href="https://kbml.ky.gov/grievances/Pages/default.aspx" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>kbml.ky.gov</a></p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Maine</p>
                <p className="text-sm leading-relaxed text-muted-foreground">To register a formal complaint about a provider, visit the Maine Board of Licensure in Medicine: <a href="https://www.maine.gov/md/complaint/file-complaint" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>maine.gov</a></p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>New York</p>
                <p className="text-sm leading-relaxed text-muted-foreground">For information regarding your rights and how to report professional misconduct, visit: <a href="https://www.health.ny.gov/professionals/doctors/conduct" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>health.ny.gov</a></p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Oregon</p>
                <p className="text-sm leading-relaxed text-muted-foreground">To register a formal complaint about a provider, visit the Oregon Medical Board: <a href="https://www.oregon.gov/omb/investigations/pages/how-to-file-a-complaint.aspx" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>oregon.gov</a></p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Rhode Island</p>
                <p className="text-sm leading-relaxed text-muted-foreground">To register a formal complaint about a provider, visit: <a href="https://health.ri.gov/complaints/" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>health.ri.gov</a></p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Texas</p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">Complaints about physicians, as well as other licensees and registrants of the Texas Medical Board, including physician assistants, acupuncturists, and surgical assistants, may be reported for investigation at: Texas Medical Board, Attention: Investigations, 333 Guadalupe, Tower 3, Suite 610, P.O. Box 2018, MC-263, Austin, Texas 78768-2018. Assistance in filing a complaint is available by calling 1-800-201-9353. For more information, visit <a href="https://www.tmb.state.tx.us" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>tmb.state.tx.us</a>.</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Las quejas sobre médicos, así como sobre otros profesionales acreditados e inscritos del Consejo Médico de Tejas, incluyendo asistentes de médicos, practicantes de acupuntura y asistentes de cirugía, se pueden presentar en la siguiente dirección para ser investigadas: Texas Medical Board, Attention: Investigations, 333 Guadalupe, Tower 3, Suite 610, P.O. Box 2018, MC-263, Austin, Texas 78768-2018. Si necesita ayuda para presentar una queja, llame al 1-800-201-9353. Para obtener más información, visite <a href="https://www.tmb.state.tx.us" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>tmb.state.tx.us</a>.</p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Vermont</p>
                <p className="text-sm leading-relaxed text-muted-foreground">To register a formal complaint about a provider, visit the Vermont Board of Medical Practice: <a href="http://www.healthvermont.gov/health-professionals-systems/board-medical-practice/file-complaint" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>healthvermont.gov</a>. For the Board of Osteopathic Examiners: <a href="https://sos.vermont.gov/opr/complaints-conduct-discipline/" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>sos.vermont.gov</a></p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Wyoming</p>
                <p className="text-sm leading-relaxed text-muted-foreground">To register a formal complaint about a provider, visit the Wyoming Medical Board: <a href="http://wyomedboard.wyo.gov/consumers/file-a-complaint" target="_blank" rel="noopener noreferrer" style={{ color: "#245C3A", textDecoration: "underline" }}>wyomedboard.wyo.gov</a></p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-10" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix-demo, providing administrative and operational support to licensed physicians and healthcare practitioners. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">All clinical services are delivered by Dhruv Physician Assistant, A Professional Corporation P.C., an independent Medical Services Organization operating licensed 503(A) compounding pharmacies and FDA-registered 503(B) outsourcing facilities, with a physician network across all 50 states.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Compounded medications are not FDA-approved. Compounded semaglutide is not equivalent to any FDA-approved product. Individual results may vary. Payment does not guarantee prescribing or dispensing of any medication. All treatment decisions are made by the prescribing provider.</p>
              <p className="text-xs leading-relaxed text-muted-foreground">This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. This website constitutes an advertisement for telehealth platform services.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}