
export default function Block() {
  const pageTitle = "Notice of Privacy Practices";
  const lastUpdated = "April 19, 2026";
  const contactEmail = "privacy@athoshealth.com";
  const contactPhone = "(000) 000-0000";
  const postalAddress = "[Registered Agent Address]";

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

      {/* Alert Banner */}
      <div style={{ backgroundColor: "#558E8D" }}>
        <div className="container py-4">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm leading-relaxed text-center" style={{ color: "#FFFFFF" }}>This notice describes how medical information about you may be used and disclosed and how you can access this information. Please review it carefully.</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* I — Who We Are */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Who We Are</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Dhruv Physician Assistant, A Professional Corporation P.C. is an independent Medical Services Organization ("MSO") operating a licensed physician and pharmacy network across all 50 states. Dhruv Physician PC provides clinical care, prescribing, and dispensing services through its network of licensed healthcare professionals.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos, a licensed entity of Symbiotix, is a telehealth platform that facilitates the connection between patients and Dhruv Physician Assistant, A Professional Corporation P.C. by providing administrative and operational support, including the recruitment and onboarding of qualified healthcare professionals. Athos does not provide medical services, store personal health data, or influence clinical decision-making.</p>
            <p className="text-base leading-relaxed text-muted-foreground">This Notice of Privacy Practices ("Notice") describes the privacy practices of Dhruv Physician Assistant, A Professional Corporation P.C. and its physicians, healthcare practitioners, and other personnel, including those providing virtual or telemedicine services ("we," "us," or "our").</p>
          </div>

          {/* II — Our Privacy Obligations */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Our Privacy Obligations</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">We are required by law to maintain the privacy of your health information ("Protected Health Information" or "PHI") and to provide you with this Notice of our legal duties and privacy practices regarding your PHI.</p>
            <p className="text-base leading-relaxed text-muted-foreground">We are also obligated to notify you following a data breach involving unsecured PHI. When we use or disclose your PHI, we are required to abide by the terms of this Notice, or any subsequent notice in effect at the time of the use or disclosure.</p>
          </div>

          {/* III — Permissible Uses and Disclosures */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Permissible Uses and Disclosures Without Your Written Authorization</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">In certain situations described in Section IV, we must obtain your written authorization to use or disclose your PHI. However, no authorization is required for the following uses and disclosures:</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>A. Treatment, Payment, and Healthcare Operations</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">We may use and disclose your PHI, excluding your "Highly Confidential Information" (defined in Section IV.B), for the following purposes:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Treatment.</span> We may use and disclose your PHI to provide, coordinate, and manage your treatment, including diagnosis and care. We may also disclose PHI to other healthcare providers involved in your treatment, including those delivering telemedicine or remote healthcare services through the Athos platform.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Payment.</span> We may use and disclose your PHI to obtain payment for services provided to you, including payments processed through secure, compliant online billing platforms.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>Healthcare Operations.</span> We may use and disclose your PHI for operational purposes including internal administration, quality assessment, evaluating the competence of our healthcare practitioners, and resolving complaints.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may also disclose PHI to your other healthcare providers when necessary for their treatment of you, their receipt of payment for services rendered, or their healthcare operations such as quality assessment, competence review, or fraud detection and compliance.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>B. Relatives, Close Friends, and Caregivers</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">We may use or disclose your PHI to a family member, relative, close personal friend, or any person you identify when you are present for or available prior to the disclosure, provided we obtain your agreement, provide you the opportunity to object and you do not, or reasonably infer that you do not object.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">If you are not present or unable to agree or object due to incapacity or emergency, we may use professional judgment to determine whether disclosure is in your best interests. In such cases, we will disclose only the minimum necessary information directly relevant to that person's involvement with your care or payment. We may also disclose PHI to notify such persons of your location, general condition, or death.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>C. Public Health Activities</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">We may disclose your PHI for public health activities as required or authorized by law, including:</p>
            <ul className="space-y-2 pl-6 mb-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Reporting to public health authorities for disease prevention and control.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Reporting child abuse and neglect to authorized government authorities.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Reporting information about products and services under the jurisdiction of the U.S. Food and Drug Administration.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Alerting individuals who may have been exposed to a communicable disease or are at risk of contracting or spreading a disease or condition.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Reporting to employers as required under laws addressing work-related illness, injury, or workplace medical surveillance.</li>
            </ul>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>D. Victims of Abuse, Neglect, or Domestic Violence</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">If we reasonably believe you are a victim of abuse, neglect, or domestic violence, we may disclose your PHI to a governmental authority authorized by law to receive such reports, provided you agree or disclosure is required by law.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>E. Health Oversight Activities</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may disclose your PHI to a health oversight agency charged with ensuring compliance with the rules of government health programs, such as Medicare or Medicaid, state pharmacy boards, and the FDA, as applicable.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>F. Judicial and Administrative Proceedings</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may disclose your PHI in the course of a judicial or administrative proceeding in response to a legal order or other lawful process.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>G. Law Enforcement</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may disclose your PHI to law enforcement officials as required or permitted by law, or in compliance with a court order, grand jury subpoena, or administrative subpoena.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>H. Decedents</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may disclose your PHI to a coroner, medical examiner, or funeral director as authorized by law.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>I. Research</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may use or disclose your PHI without your consent or authorization if an Institutional Review Board or Privacy Board approves a waiver of authorization in accordance with HIPAA and applicable state law.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>J. Health or Safety</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may use or disclose your PHI to prevent or lessen a serious and imminent threat to a person's or the public's health or safety, in accordance with applicable law.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>K. Specialized Government Functions</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may use and disclose your PHI to government units with special functions, such as the U.S. military or the U.S. Department of State, under certain circumstances as authorized by applicable laws and regulations.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>L. Workers' Compensation</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We may disclose your PHI as authorized by and to the extent necessary to comply with state law relating to workers' compensation or similar programs.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>M. As Required by Law</h3>
            <p className="text-base leading-relaxed text-muted-foreground">We may use and disclose your PHI when required to do so by any federal, state, or local law not already addressed in the preceding categories.</p>
          </div>

          {/* IV — Uses Requiring Authorization */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Uses and Disclosures Requiring Your Written Authorization</h2>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>A. Use or Disclosure with Your Authorization</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">We must obtain your written authorization for uses and disclosures of PHI for marketing purposes (unless it involves communications about health-related products or services directly related to your treatment) and disclosures that constitute a sale of PHI. Other uses and disclosures not described in this Notice will be made only with your written permission on an authorization form ("Your Authorization"). For example, you will need to complete and sign an authorization form before we can transmit your PHI to a life insurance company or to opposing counsel in litigation involving you.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>B. Highly Confidential Information</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Federal and state law requires enhanced privacy protections for certain categories of highly confidential information ("Highly Confidential Information"). This may include the subset of your PHI relating to any of the following:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Mental health and developmental disabilities services.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Alcohol and drug abuse prevention, treatment, and referral.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">HIV/AIDS testing, diagnosis, or treatment.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Sexually transmitted diseases.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Genetic testing.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Child abuse and neglect.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Domestic abuse of an adult with a disability.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Sexual assault.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">In order for us to disclose your Highly Confidential Information for a purpose other than those permitted by law, we must have Your Authorization.</p>
          </div>

          {/* V — Revocation */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Revocation of Your Authorization</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You may withdraw (revoke) Your Authorization or any written authorization regarding your Highly Confidential Information at any time, except to the extent that we have already taken action in reliance upon it, by delivering a written statement to the Privacy Officer identified in Section VII.</p>
            <p className="text-base leading-relaxed text-muted-foreground">Revocation may not apply to disclosures already made or actions taken based on your previous authorization, including those related to ongoing treatment, claims processing, or legal proceedings. A written revocation form is available upon request from the Privacy Officer.</p>
          </div>

          {/* VI — Your Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Your Rights Regarding Your Protected Health Information</h2>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>A. Further Information and Complaints</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If you would like more information about your privacy rights, are concerned that your privacy rights have been violated, or disagree with a decision regarding access to your PHI, you may contact us by calling <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span> or emailing <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">You may also file a written complaint with the Director, Office for Civil Rights of the U.S. Department of Health and Human Services. Upon request, the Privacy Officer will provide you with the appropriate address. We will not retaliate against you for filing a complaint.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>B. Right to Request Additional Restrictions</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You have the right to request restrictions on the uses and disclosures of your PHI for treatment, payment, and healthcare operations, as well as to individuals involved in your care or payment. For example, you may request that we not disclose PHI to a health plan for payment or operations purposes if the information pertains solely to a healthcare item or service for which we have been involved and which has been paid out of pocket in full. We are required by law to comply with such a request.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">For all other restriction requests, we are not required to agree but will attempt to accommodate reasonable requests. To submit a restriction request, contact the Privacy Officer. We will respond in writing.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>C. Right to Receive Confidential Communications</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">You may request, and we will accommodate, any reasonable written request to receive your PHI through alternative means of communication or at alternative locations, such as secure email, a different telephone number, or a different postal address. Submit your request in writing to <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>D. Right to Inspect and Copy Your Health Information</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">You may request access to your medical record file and billing records maintained by us in order to inspect and obtain copies. Under limited circumstances, we may deny access to a portion of your records. To request access, submit a Release of Information Form to <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>E. Right to Request Amendment of Your Records</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">You have the right to request that we amend PHI in your medical record or billing records. To do so, obtain an Amendment Request Form from the Privacy Officer and submit it to <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>. We will comply with your request unless we determine the information is accurate and complete or other special circumstances apply.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>F. Right to Receive an Accounting of Disclosures</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">Upon request, you may obtain an accounting of certain disclosures of your PHI made during any period up to six years prior to the date of your request. If you request an accounting more than once within a twelve-month period, we may charge a reasonable fee and will inform you of the cost in advance to give you the opportunity to withdraw or modify your request.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>G. Right to Receive a Copy of This Notice</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">Upon request, you may obtain a copy of this Notice by email or in paper format. Submit your request to:</p>
            <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a", fontWeight: 500 }}>Dhruv Physician Assistant, A Professional Corporation P.C.</p>
              <p className="text-sm leading-relaxed text-muted-foreground">ATTN: Privacy</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{postalAddress}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Email: <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a></p>
            </div>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>H. Right to Change Terms of This Notice</h3>
            <p className="text-base leading-relaxed text-muted-foreground">We may change the terms of this Notice at any time. If we do, the new terms may apply to all PHI that we maintain, including information created or received prior to the new notice. Updated notices will be posted on the Athos platform. You may also obtain any updated notice by contacting <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
          </div>

          {/* VII — Privacy Officer */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Privacy Officer</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">You may contact the Privacy Officer at:</p>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a", fontWeight: 500 }}>Dhruv Physician Assistant, A Professional Corporation P.C.</p>
              <p className="text-sm leading-relaxed text-muted-foreground">ATTN: Privacy</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{postalAddress}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Email: <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a></p>
              <p className="text-sm leading-relaxed text-muted-foreground">Phone: <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span></p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-10" style={{ borderTop: "1px solid rgba(36,92,58,0.12)" }}>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "rgba(36,92,58,0.5)" }}>Platform Disclaimer</p>
            <div className="space-y-3">
              <p className="text-xs leading-relaxed text-muted-foreground">Athos is a telehealth platform licensed by Symbiotix, providing administrative and operational support to licensed physicians and healthcare practitioners. Athos does not provide medical or pharmacy services, employ healthcare providers, compound or manufacture medications, or influence clinical decision-making.</p>
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