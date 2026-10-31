import { useTextSetting } from "@/lib/editable-settings";

export default function Block() {
  const pageTitle = useTextSetting({
    name: "page-title",
    label: "Page title",
    initialValue: "Refunds, Returns & Replacements",
  });
  const lastUpdated = useTextSetting({
    name: "last-updated",
    label: "Last updated date",
    initialValue: "April 19, 2026",
  });
  const contactEmail = useTextSetting({
    name: "contact-email",
    label: "Contact email",
    initialValue: "support@athos.example",
  });
  const contactPhone = useTextSetting({
    name: "contact-phone",
    label: "Contact phone number",
    initialValue: "(000) 000-0000",
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

      {/* Key Points Banner */}
      <div style={{ backgroundColor: "#558E8D" }}>
        <div className="container py-5">
          <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="text-sm leading-relaxed text-center" style={{ color: "#FFFFFF" }}>All prescription medications are final sale. Do not return medications — dispose of them safely. Your satisfaction is guaranteed and we will work to make it right.</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="content" style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* 1 — Purpose and Scope */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>1</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Purpose, Scope, and Governing Authority</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Refunds, Returns & Replacements Policy ("Policy") governs the conditions under which Athos, a licensed entity of Symbiotix-demo ("Athos," "we," "our," or "us"), and Dhruv Physician Assistant, A Professional Corporation P.C. ("MSO") may issue refunds or authorize replacement shipments.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This Policy applies to all prescription medications, non-prescription products, subscription services, and any related goods or services purchased or obtained through the Athos website, mobile applications, telehealth platform, or affiliated pharmacies operated by the MSO (collectively, the "Services").</p>
            <p className="text-base leading-relaxed text-muted-foreground">This Policy is issued pursuant to and interpreted in harmony with all applicable federal, state, and local laws, including pharmacy practice acts, consumer protection statutes, and shipping regulations. Where any mandatory legal requirement conflicts with this Policy, the requirement of law shall prevail.</p>
          </div>

          {/* 2 — Definitions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>2</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Definitions</h2>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Final Sale</p>
                <p className="text-sm leading-relaxed text-muted-foreground">A transaction where the product, once dispensed and shipped, may not be returned, refunded, or resold.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Replacement</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Issuance of a newly dispensed unit of the same medication, or a functionally equivalent item, shipped to remedy a verified error, defect, or confirmed compromise in transit.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Temperature Excursion</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Exposure of a product to environmental conditions outside its manufacturer-approved or pharmacy-validated storage range prior to confirmed delivery.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Chain of Custody</p>
                <p className="text-sm leading-relaxed text-muted-foreground">The transfer of responsibility for the product from the pharmacy to the common carrier, and from the carrier to the recipient at the designated delivery address. Once the carrier confirms delivery, chain of custody shifts to the patient.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#245C3A" }}>Reorder Fee</p>
                <p className="text-sm leading-relaxed text-muted-foreground">A charge applied to replacement shipments requested under circumstances not attributable to Athos or the MSO. The reorder fee may be up to the full cost of the original item, including medication, shipping, and handling.</p>
              </div>
            </div>
          </div>

          {/* 3 — Final Sale */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>3</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>All Prescription Medications Are Final Sale</h2>
            </div>
            <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>No refunds. No returns.</p>
              <p className="text-sm leading-relaxed text-muted-foreground">All prescription medications dispensed through the MSO's licensed pharmacy partners are final sale upon shipment. They cannot be returned, reused, or resold under state and federal law. Except as expressly stated in this Policy or as required by law, no refunds, returns, or credits are available for prescription products.</p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Do not return medications</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Under no circumstances should you mail or ship medication back to Athos, the MSO, or any pharmacy. If you have unused or unwanted medication, dispose of it safely in accordance with FDA guidelines or through a local drug take-back program. Consult your physician if you have questions about discontinuing any medication.</p>
            </div>
          </div>

          {/* 4 — Eligible for Remedy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>4</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Circumstances Eligible for Remedy</h2>
            </div>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>4.1 Pharmacy or Dispensing Error</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If a prescription is dispensed incorrectly — such as the wrong medication, strength, formulation, or an insufficient quantity compared to the prescriber's valid order — the MSO will coordinate with the dispensing pharmacy to provide a no-cost replacement, as required by law.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">This remedy applies only to verified pharmacy dispensing errors. It does not apply to prescriber errors, patient ordering mistakes, mishandling or loss of medication, shipping issues outside the pharmacy's control, or cases where an over-supply was dispensed.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">Do not return the medication. You may be required to provide photographic or written documentation to confirm the error before a replacement is issued. Dispose of the incorrect medication safely.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>4.2 Damaged Shipments</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">If a product is visibly damaged in transit, you must notify us within forty-eight (48) hours of delivery. You may be required to provide photographic or written documentation of the damage. Upon confirmation, a replacement will be issued. Do not return the damaged product — dispose of it safely.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>4.3 Temperature Excursions</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">The MSO uses pharmacies with validated cold-chain packaging engineered to maintain stability for the carrier's standard delivery window. Some shipments may include temperature monitoring devices.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">If you suspect a temperature excursion, report it within forty-eight (48) hours of delivery. We will conduct an investigation, which may include:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Review of packaging validation data and specifications.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Analysis of carrier logs, time-in-transit data, and delivery confirmations.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Retrieval of data from any included temperature monitoring devices.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Assessment of photographic or testimonial evidence you provide.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">If the investigation establishes that the product was likely compromised prior to confirmed delivery, a replacement will be provided at no cost unless permitted by law to recover costs.</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">If the investigation determines that the product remained within validated parameters through delivery, or that compromise occurred after confirmed delivery (e.g., package left unretrieved, exposed to heat, or stored improperly), the request may be denied or a reorder fee may apply.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>4.4 Recalls</h3>
            <p className="text-base leading-relaxed text-muted-foreground">In the event of a manufacturer or pharmacy recall, the MSO will coordinate the legally mandated remedy, which may include replacement or credit, at no cost to the patient.</p>
          </div>

          {/* 5 — Not Eligible */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>5</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Circumstances Not Eligible for Remedy</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">No refund, replacement, or credit will be provided if:</p>
            <ul className="space-y-2 pl-6">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The shipping address provided was inaccurate, incomplete, or outdated.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">You failed to accept delivery or retrieve the package following carrier delivery attempts.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The package was left unattended after confirmed delivery and was subsequently lost, stolen, or damaged.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The report of damage, defect, or excursion was submitted more than forty-eight (48) hours after delivery.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">The product was compromised due to mishandling, delayed retrieval, or improper storage after delivery was confirmed.</li>
            </ul>
          </div>

          {/* 6 — Reorder Fees */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>6</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Reorder Fees</h2>
            </div>
            <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Reorder fee applies</p>
              <p className="text-sm leading-relaxed text-muted-foreground">If a replacement is requested under circumstances not attributable to Athos or the MSO — including but not limited to incorrect addresses, delayed retrieval, or patient-caused damage — a reorder fee of up to the full cost of the original item will apply, including medication, shipping, and handling, unless state law requires otherwise.</p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4"><span style={{ color: "#1a1a1a", fontWeight: 500 }}>No-cost replacement:</span> One no-cost replacement will be provided if the error is attributable to Athos or the MSO.</p>
            <p className="text-base leading-relaxed text-muted-foreground">To prevent misuse and ensure timely access for all patients, we may limit replacements to no more than one within any 90-day period and reserve the right to deny additional shipments beyond that limit.</p>
          </div>

          {/* 7 — Subscription Fees */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>7</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Subscription Fees</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Subscription fees are billed under the terms accepted at enrollment and are generally non-refundable. If a billing error occurs, such as a duplicate charge, we will correct the error through a credit or adjustment.</p>

            <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>7.1 Medical Discontinuation Exception</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-2">If you are enrolled in a multi-month subscription and are medically required to discontinue therapy, a prorated refund of prepaid subscription fees may be granted. Eligibility requires:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Documentation from a licensed healthcare provider (MD, DO, NP, or PA) stating that continuation of therapy is medically contraindicated.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Review and approval by the MSO's clinical team, which reserves the right to verify provider credentials, confirm documentation authenticity, or request additional information.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">Refunds under this section are prorated to cover only the unused portion of the subscription period. Medication already dispensed remains ineligible for refund, return, or credit. Consult your physician before making any changes to your treatment plan.</p>

            <h3 className="text-lg font-medium mb-2" style={{ color: "#1a1a1a" }}>7.2 Medical Consultation Fee and Processing Costs</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">As part of its service structure, the MSO collects a medical consultation fee for each provider evaluation that results in a prescription. This fee compensates the licensed provider for reviewing patient health information and rendering a clinical judgment and is non-refundable once a prescription has been issued.</p>
            <p className="text-base leading-relaxed text-muted-foreground">A reasonable processing fee may be deducted from any refund issued under this Policy to cover administrative, payment platform, and transaction costs. This processing fee applies regardless of whether a prescription was issued. All refunds will be net of both the consultation fee (if applicable) and any processing fee.</p>
          </div>

          {/* 8 — Satisfaction Guarantee */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>8</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Satisfaction Guarantee</h2>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>We will work to make it right</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Your satisfaction is guaranteed. If you experience an issue with your order, contact us and we will work with you to find a resolution. In cases where replacement is not feasible, or where fairness strongly favors additional action, we may issue a credit or billing adjustment at our sole discretion. Any such resolution applies only to the specific transaction in question and does not create an obligation to grant similar relief in the future.</p>
            </div>
          </div>

          {/* 9 — Compliance */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>9</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Compliance with Law</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">This Policy is subject to and shall be interpreted in accordance with applicable federal and state law. Where a state's pharmacy practice act or consumer protection law mandates remedies beyond those described here, Athos and the MSO will comply.</p>
          </div>

          {/* 10 — Reporting */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>10</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Reporting Requirements</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">Requests for replacement, credit, or resolution must be submitted through your Athos account or by emailing <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a> within the timeframes set forth in this Policy. Each request must include:</p>
            <ul className="space-y-2 pl-6 mb-4">
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Your full name and order number.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">A description of the alleged defect, damage, or excursion.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Supporting documentation, which may include photographs, carrier notices, or written testimony.</li>
              <li className="text-base leading-relaxed text-muted-foreground list-disc">Cooperation with any reasonable requests during the investigation.</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">Failure to submit timely notice or provide adequate supporting evidence may result in denial of the request.</p>
          </div>

          {/* 11 — Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>11</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Exclusive Remedy and Limitation of Liability</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">Except where expressly required by law, the remedies described in this Policy constitute the sole and exclusive remedies available to patients. Athos and the MSO disclaim liability for any indirect, incidental, consequential, or punitive damages, including but not limited to lost profits, emotional distress, or secondary health impacts, arising from or related to the purchase, shipment, or handling of products.</p>
          </div>

          {/* 12 — Contact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>12</span>
              <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Contact</h2>
            </div>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a", fontWeight: 500 }}>Athos — Customer Support</p>
              <p className="text-sm leading-relaxed text-muted-foreground mt-1">Email: <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a></p>
              <p className="text-sm leading-relaxed text-muted-foreground">Phone: <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{contactPhone}</span></p>
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