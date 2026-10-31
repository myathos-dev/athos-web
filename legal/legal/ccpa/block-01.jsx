
export default function Block() {
  const pageTitle = "California Consumer Privacy Act (CCPA) Notice";
  const lastUpdated = "April 19, 2026";
  const contactEmail = "privacy@athos.example";
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

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Preamble */}
          <div className="rounded-xl p-6 mb-12" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-sm leading-relaxed text-muted-foreground">This notice applies exclusively to California residents ("consumers" or "you") and supplements the Athos Privacy Policy. Athos is a licensed entity of Symbiotix-demo. We adopt this notice to comply with the California Consumer Privacy Act of 2018 ("CCPA"), the California Privacy Rights Act ("CPRA"), and other applicable California privacy laws. Terms defined in the CCPA or CPRA carry the same meaning when used here.</p>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Important distinction</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Athos does not collect or store personal data. All information entered on the Platform exists at the session level only and is cleared on browser refresh. Personal information is collected and stored solely by Dhruv Physician Assistant, A Professional Corporation ("MSO"), an independent Medical Services Organization, at the point of checkout. This notice describes the MSO's data practices as they relate to California residents.</p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Information We Collect</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO collects information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("Personal Information").</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">The following categories of Personal Information have been collected from California consumers:</p>

            {/* Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(36,92,58,0.15)" }}>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#245C3A", width: "15%" }}>Category</th>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#245C3A", width: "70%" }}>Examples</th>
                    <th className="text-left py-3 font-medium" style={{ color: "#245C3A", width: "15%" }}>Collected</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">A</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Identifiers.</span> Name, address, email address, phone number, date of birth, account name, client reference number.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">B</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>California Customer Records (Cal. Civ. Code § 1798.80(e)).</span> Name, address, telephone number, medical information, health insurance information, payment and financial information. Some information in this category may overlap with other categories.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">C</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Protected classifications.</span> Gender, age, date of birth.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">D</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Commercial information.</span> Products or services purchased, payment information, transaction history.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">E</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Biometric information.</span> Health information, medical conditions, vital information collected during clinical intake.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">F</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Internet or network activity.</span> Browser type, device information, IP address, cookies, interaction with the Platform, chat and email transcripts.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">G</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Geolocation data.</span> General location derived from IP address or shipping address.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">H</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Sensory data.</span> Audio recordings of telehealth consultations or customer service calls, where applicable.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">I</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Professional or employment-related information.</span> Occupation, employer name, employment status.</td>
                    <td className="py-3 align-top text-muted-foreground">No</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">J</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Non-public education information.</span> Education records as defined by the Family Educational Rights and Privacy Act.</td>
                    <td className="py-3 align-top text-muted-foreground">No</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(36,92,58,0.08)" }}>
                    <td className="py-3 pr-4 align-top font-medium text-muted-foreground">K</td>
                    <td className="py-3 pr-4 align-top text-muted-foreground"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Inferences drawn from other personal information.</span> Consumer preferences, health-related treatment preferences, communication preferences.</td>
                    <td className="py-3 align-top text-muted-foreground">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-2">The MSO obtains Personal Information from the following sources:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Directly from you at the point of checkout, including information provided during clinical intake and account registration.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Indirectly through the course of providing healthcare services to you.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">From third-party providers who interact with us in connection with healthcare services, such as licensed physicians, pharmacies, and laboratories.</li>
            </ul>

            <p className="text-base leading-relaxed text-muted-foreground mb-2">Personal Information does not include:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Information lawfully available from federal, state, or local government records.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">De-identified or aggregate consumer information as defined by the CCPA.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Health or medical information covered by HIPAA and the California Confidentiality of Medical Information Act (CMIA).</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Personal information covered by sector-specific laws, including the Fair Credit Reporting Act (FCRA), Gramm-Leach-Bliley Act (GLBA), California Financial Information Privacy Act (FIPA), and Driver's Privacy Protection Act.</li>
            </ul>
          </div>

          {/* Sensitive Personal Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Sensitive Personal Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Sensitive personal information includes information that reveals:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Social security, driver's license, or passport numbers.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Account log-in credentials, financial account, debit, or credit card numbers in combination with security codes or passwords.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Precise geolocation.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Racial or ethnic origin, religious or philosophical beliefs, or union membership.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Contents of mail, email, or text messages unless Athos or the MSO is the intended recipient.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Genetic data.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Unless publicly available, sensitive personal information also includes:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Biometric information processed for the purpose of uniquely identifying you.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Personal information collected and analyzed concerning your health.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Personal information collected and analyzed concerning your sex life or sexual orientation.</li>
            </ul>
          </div>

          {/* Use of Personal Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Use of Personal Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO may use or disclose collected Personal Information for the following purposes:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To fulfill or meet the reason for which the information was provided, including treatment, payment, and healthcare operations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To provide you with information, products, or healthcare services.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To provide alerts, notifications, and communications concerning services or events that may be relevant to you.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To carry out obligations and enforce rights arising from contracts between you and us, including billing and collections.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To improve the Platform and present its contents to you.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">For testing, research, analysis, and service development.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">As reasonably necessary to protect the rights, property, or safety of Athos, the MSO, users, or others.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To respond to regulatory or law enforcement requests and comply with applicable law.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To third-party service providers who perform services on our behalf.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">To our affiliates and subsidiaries.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">As otherwise required or permitted by law.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">We will not collect additional categories of Personal Information or use collected information for materially different, unrelated, or incompatible purposes without providing you notice.</p>
          </div>

          {/* Sharing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Sharing Personal Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO may disclose your Personal Information to third parties for a business purpose. In the preceding twelve months, the following categories have been disclosed:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Category A: Identifiers</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Category B: California Customer Records</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Category C: Protected classifications</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Category D: Commercial information</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Category H: Sensory data</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Category K: Inferences</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Personal Information is disclosed to the following categories of third parties:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Affiliates of Athos and the MSO.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Service providers and vendors.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Third parties you authorize in connection with the services we provide.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Licensed healthcare providers, pharmacies, and laboratories within the MSO network.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Other third parties as required or permitted by law.</li>
            </ul>
          </div>

          {/* Sale of Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Sale of Personal Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">We do not sell your personal information.</p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Your Rights and Choices</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">The CCPA provides California residents with specific rights regarding their Personal Information.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Access and Data Portability</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">You have the right to request disclosure of our collection and use of your Personal Information. Upon verification, we will disclose:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The categories of Personal Information collected about you.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The categories of sources from which your Personal Information was collected.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The business or commercial purpose for collecting that information.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The categories of third parties with whom your information is shared.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The specific pieces of Personal Information collected, if specifically requested.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">If applicable, separate lists identifying categories disclosed for business purposes and any sold.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Correction Requests</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">You have the right to request correction of inaccurate personal information. After receiving and verifying your request, we will evaluate the correction and inform you of the actions taken.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Limiting Sensitive Personal Information</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">You have the right to request that we limit the use and disclosure of your Sensitive Personal Information to what is necessary to perform the services reasonably expected, ensure security, conduct non-personalized advertising, and improve our services.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>Deletion Requests</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">You have the right to request deletion of your Personal Information. We will comply and direct our service providers to delete your data, except where retention is necessary to:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Complete a transaction, provide a requested service, or perform our contract with you.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Detect or protect against malicious, deceptive, fraudulent, or illegal activity.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Debug products to identify and repair errors.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Exercise free speech or another right provided by law.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Comply with the California Electronic Communications Privacy Act.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Engage in public or peer-reviewed research in the public interest where deletion would impair the research.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Enable solely internal uses reasonably aligned with consumer expectations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Comply with a legal obligation.</li>
            </ul>
          </div>

          {/* Exercising Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Exercising Your Rights</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">To exercise access, portability, correction, or deletion rights, submit a verifiable consumer request by calling <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span> or emailing <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Only you, or a person registered with the California Secretary of State whom you authorize to act on your behalf, may make a verifiable request. We do not provide services to individuals under the age of 18.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">You may make an access or data portability request no more than twice within a twelve-month period. Your request must:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Provide sufficient information for us to reasonably verify your identity or authority.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Describe the request with sufficient detail for us to understand, evaluate, and respond.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">We cannot respond to your request if we cannot verify your identity or authority. Submitting a request does not require you to create an account. Information provided is used solely for verification purposes.</p>
          </div>

          {/* Response Timing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VIII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Response Timing and Format</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">We will respond to a verifiable consumer request within forty-five (45) days of receipt. If additional time is required (up to 90 days), we will notify you of the reason and extension period in writing.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Disclosures will cover the twelve-month period preceding receipt of the request. If we cannot comply, we will explain the reasons. For data portability requests, information will be provided in a readily usable format.</p>
            <p className="text-base leading-relaxed text-muted-foreground">We do not charge a fee to process requests unless they are excessive, repetitive, or manifestly unfounded. If a fee is warranted, we will provide a cost estimate before proceeding. We reserve the right to deny excessive, repetitive, or manifestly unfounded requests.</p>
          </div>

          {/* Non-Discrimination */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Non-Discrimination</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">We will not discriminate against you for exercising any CCPA rights. Unless permitted by the CCPA, we will not:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Deny you goods or services.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Charge different prices or rates, including through discounts, benefits, or penalties.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Provide a different level or quality of goods or services.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Suggest that you may receive a different price, rate, level, or quality of goods or services.</li>
            </ul>
          </div>

          {/* Changes */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>X</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Changes to This Notice</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">We reserve the right to amend this notice at any time. When changes are made, we will notify you by email or through a notice on the Platform.</p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>XI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you have questions about this notice, our Privacy Policy, or wish to exercise your rights under California law, contact us at:</p>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed text-muted-foreground">Phone: <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span></p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Email: <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a></p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Postal Address: <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{postalAddress}</span></p>
            </div>
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