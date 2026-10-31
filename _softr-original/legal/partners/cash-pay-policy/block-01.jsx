import { useTextSetting, useLongTextSetting } from "@/lib/editable-settings";

export default function Block() {
  const pageTitle = useTextSetting({
    name: "page-title",
    label: "Page title",
    initialValue: "Cash-Pay Policy",
  });
  const lastUpdated = useTextSetting({
    name: "last-updated",
    label: "Last updated date",
    initialValue: "April 22, 2026",
  });
  const contactEmail = useTextSetting({
    name: "contact-email",
    label: "Legal contact email",
    initialValue: "legal@athos.example",
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
            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Cash-pay attestation</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Athos and Dhruv Physician Assistant, A Professional Corporation operate exclusively on a cash-pay and self-pay basis. We do not bill, submit claims to, or participate in any Federal or state health care program. This page documents that policy.</p>
          </div>

          {/* I — Attestation */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Attestation</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Symbiotix-demo LLC, d/b/a Athos ("Athos"), and Dhruv Physician Assistant, A Professional Corporation ("MSO"), hereby attest that:</p>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <ul className="space-y-3 pl-5">
                <li className="text-base leading-relaxed" style={{ color: "#1a1a1a" }}>Athos and the MSO do not bill, submit claims to, seek reimbursement from, or participate in any Federal health care program as defined in 42 U.S.C. § 1320a-7b(f).</li>
                <li className="text-base leading-relaxed" style={{ color: "#1a1a1a" }}>Athos and the MSO do not bill, submit claims to, or seek reimbursement from any state health care program.</li>
                <li className="text-base leading-relaxed" style={{ color: "#1a1a1a" }}>Athos and the MSO do not bill, submit claims to, or seek reimbursement from any private health insurance plan.</li>
                <li className="text-base leading-relaxed" style={{ color: "#1a1a1a" }}>All services facilitated through the Athos platform are provided on a cash-pay and self-pay basis only.</li>
              </ul>
            </div>
          </div>

          {/* II — Programs Excluded */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Programs Excluded</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos and the MSO do not participate in, and will not submit claims to, any of the following:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Medicare (Parts A, B, C, and D)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Medicaid (including state-administered managed care plans)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">TRICARE</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">CHAMPVA (Civilian Health and Medical Program of the Department of Veterans Affairs)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Veterans Affairs (VA) health programs</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Children's Health Insurance Program (CHIP)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Indian Health Service (IHS)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Federal Employees Health Benefits Program (FEHBP)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any other Federal health care program as defined in 42 U.S.C. § 1320a-7b(f)</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any state health care program</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Any private or commercial health insurance plan</li>
            </ul>
          </div>

          {/* III — Payment Model */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Payment Model</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All services facilitated through the Athos platform are paid for directly by the patient at the time of service or through a recurring membership. Payment is collected by the MSO via secure third-party payment processing.</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Athos does not generate, submit, or facilitate insurance claims of any kind.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Athos does not provide superbills, CPT-coded receipts, or documentation intended for insurance reimbursement.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Patients are responsible for the full cost of services. Pricing is disclosed transparently on the Platform before purchase.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Athos does not verify insurance eligibility, benefits, or coverage for any patient.</li>
            </ul>
          </div>

          {/* IV — Why This Matters */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Why This Matters</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The Federal Anti-Kickback Statute (42 U.S.C. § 1320a-7b(b)) prohibits the knowing and willful offer, payment, solicitation, or receipt of remuneration to induce or reward referrals for items or services payable by a Federal health care program. Because Athos and the MSO operate exclusively on a cash-pay basis and do not participate in any Federal health care program, the services facilitated through the Athos platform are not "payable by" a Federal health care program within the meaning of the statute.</p>
            <p className="text-base leading-relaxed text-muted-foreground">This cash-pay structure is the foundational compliance safeguard underlying the Athos Partner Program and all associated marketing arrangements. Notwithstanding this structure, Athos voluntarily aligns its marketing compensation practices with the personal services safe harbor (42 C.F.R. § 1001.952(d)) as a best-practice measure.</p>
          </div>

          {/* V — Partner Implications */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Partner Implications</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">All Marketing Partners acknowledge this cash-pay attestation as part of the Marketing Services Agreement. Partners are prohibited from:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Representing that Athos services are covered by, reimbursable under, or billable to any government health care program.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Representing that Athos services are covered by or billable to any private insurance plan.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Advising prospective patients to seek insurance reimbursement for Athos services.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Using language that implies Athos "accepts" insurance or government benefits.</li>
            </ul>
          </div>

          {/* VI — Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact Information</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">For questions about this policy, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
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