import { useTextSetting, useLongTextSetting } from "@/lib/editable-settings";

export default function Block() {
    const pageTitle = useTextSetting({
        name: "page-title",
        label: "Page title",
        initialValue: "Fair Market Value Certification",
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

                    {/* ============================== */}
                    {/* PART 1: PUBLIC SUMMARY SECTION */}
                    {/* ============================== */}

                    <div className="rounded-xl p-6 mb-12" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                        <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Public summary</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">The following sections (I–III) provide a public summary of how Athos validates Marketing Partner compensation. The full FMV Certification report is an internal document maintained as Exhibit B to each Marketing Services Agreement and is available to regulatory authorities upon request.</p>
                    </div>

                    {/* I — What Fair Market Value Means */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>I</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>What Fair Market Value Means</h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">Fair market value ("FMV") is the compensation that would be agreed upon by a willing buyer and a willing seller, neither being under compulsion, and both having reasonable knowledge of the relevant facts.</p>
                        <p className="text-base leading-relaxed text-muted-foreground">In the context of the Athos Partner Program, FMV means that the compensation paid to Marketing Partners for their promotional and advertising services reflects the actual market rate for those services — not the volume or value of any patient referrals or clinical business generated.</p>
                    </div>

                    {/* II — How Compensation Is Validated */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>II</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>How Compensation Is Validated</h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">Athos engages a qualified, independent third-party valuation firm to assess whether Marketing Partner compensation is consistent with fair market value. The valuation firm:</p>
                        <ul className="space-y-2 pl-6 mb-4">
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Has no financial interest in Athos, the MSO, or the outcome of the assessment.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Evaluates the specific marketing deliverables partners perform.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Compares compensation against market data for comparable affiliate marketing, influencer marketing, and digital advertising arrangements.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Issues a written certification confirming whether compensation falls within the FMV range.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Recertifies annually.</li>
                        </ul>
                    </div>

                    {/* III — Why This Matters */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>III</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Why This Matters</h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">Independent FMV validation ensures that partner compensation is paid for legitimate marketing services and is not influenced by the volume or value of referrals. This is a cornerstone of healthcare marketing compliance and aligns with the personal services and management contracts safe harbor under federal law (42 C.F.R. § 1001.952(d)).</p>
                        <p className="text-base leading-relaxed text-muted-foreground">Although Athos operates on a cash-pay basis and does not participate in any Federal health care program, we maintain FMV certification as a best-practice compliance measure and as a protective safeguard under applicable state anti-kickback and fee-splitting statutes.</p>
                    </div>

                    {/* ================================= */}
                    {/* PART 2: INTERNAL EXHIBIT B TEMPLATE */}
                    {/* ================================= */}

                    <div className="py-10 mb-12" style={{ borderTop: "2px solid rgba(36,92,58,0.2)", borderBottom: "2px solid rgba(36,92,58,0.2)" }}>
                        <p className="text-sm font-medium tracking-wider uppercase mb-2 text-center" style={{ color: "#245C3A" }}>Exhibit B — Internal FMV Certification Template</p>
                        <p className="text-sm leading-relaxed text-muted-foreground text-center">The following sections (IV–X) constitute the internal FMV Certification template. This document is completed by the independent valuation firm and attached as Exhibit B to each Marketing Services Agreement. It is not published on the website.</p>
                    </div>

                    {/* IV — Purpose */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IV</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Purpose</h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">This Fair Market Value Certification ("Certification") has been prepared to support the Marketing Services Agreement ("MSA") between Symbiotix-demo LLC, d/b/a Athos ("Company"), and its independent Marketing Partners.</p>
                        <p className="text-base leading-relaxed text-muted-foreground">The purpose of this Certification is to document that the compensation methodology and rates set forth in the MSA reflect fair market value for the marketing services described, are commercially reasonable, and are not determined in a manner that takes into account the volume or value of referrals or business generated between the parties.</p>
                    </div>

                    {/* V — Engagement and Independence */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>V</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Engagement and Independence</h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">This Certification was prepared by:</p>
                        <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                            <p className="text-sm leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>Firm Name:</strong> ____________________________________</p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-2"><strong style={{ color: "#1a1a1a" }}>Lead Analyst:</strong> ____________________________________</p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-2"><strong style={{ color: "#1a1a1a" }}>Credentials:</strong> ____________________________________</p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-2"><strong style={{ color: "#1a1a1a" }}>Date of Engagement:</strong> ____________________________________</p>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">The undersigned valuator confirms:</p>
                        <ul className="space-y-2 pl-6">
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">The valuator has no financial interest, ownership stake, or compensation arrangement with Athos, Symbiotix-demo, or the MSO other than the fee for this engagement.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">The fee for this engagement is not contingent on the outcome of the valuation.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">The valuator is qualified to perform healthcare compensation valuation and holds relevant professional credentials.</li>
                        </ul>
                    </div>

                    {/* VI — Scope of Evaluation */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VI</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Scope of Evaluation</h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">The valuator evaluated the following compensation arrangements:</p>

                        <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Percentage-Based Model</h3>
                        <ul className="space-y-2 pl-6 mb-6">
                            <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Individual Tier:</strong> 20% of net monthly revenue per active patient attributed to the partner's tracking link.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Partner Tier:</strong> 30% of net monthly revenue per active patient attributed to the partner's tracking link.</li>
                        </ul>

                        <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Flat-Fee Model (State-Specific)</h3>
                        <ul className="space-y-2 pl-6 mb-6">
                            <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Individual Tier:</strong> \$37 per month per active patient attributed to the partner's tracking link.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc"><strong style={{ color: "#1a1a1a" }}>Partner Tier:</strong> \$55 per month per active patient attributed to the partner's tracking link.</li>
                        </ul>

                        <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>C. Marketing Deliverables Evaluated</h3>
                        <p className="text-base leading-relaxed text-muted-foreground mb-2">The valuator reviewed the specific services partners perform, including:</p>
                        <ul className="space-y-2 pl-6">
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Creation and distribution of original promotional content across social media, video, blog, podcast, and email.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Audience development, community engagement, and traffic generation.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Distribution of Company-approved marketing materials.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Hosting or participating in promotional events.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Performance reporting and marketing optimization data.</li>
                        </ul>
                    </div>

                    {/* VII — Methodology */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VII</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Methodology</h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">The valuator employed the following approaches to determine fair market value:</p>

                        <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>A. Market Comparables Approach</h3>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">Analysis of compensation rates in comparable affiliate marketing, influencer marketing, and digital advertising arrangements across the direct-to-consumer healthcare, wellness, and telehealth industries. Data sources include published industry benchmarks, affiliate network rate surveys, and publicly available program terms.</p>

                        <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>B. Deliverable-Based Approach</h3>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">Assessment of the time, effort, skill, and economic value of the specific marketing deliverables partners are expected to perform under the MSA, benchmarked against freelance and agency rates for equivalent services.</p>

                        <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: "#1a1a1a" }}>C. Commercial Reasonableness Test</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">Assessment of whether the arrangement would be commercially reasonable even if no referrals resulted — i.e., whether the marketing services alone justify the compensation paid.</p>
                    </div>

                    {/* VIII — Findings */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>VIII</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Findings</h2>
                        </div>
                        <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>To be completed by valuation firm</p>
                            <p className="text-sm leading-relaxed text-muted-foreground mb-4">Based on the analysis described above, it is the opinion of the undersigned that the compensation methodology and rates set forth in the Athos Marketing Services Agreement:</p>
                            <ul className="space-y-2 pl-5">
                                <li className="text-sm leading-relaxed text-muted-foreground list-disc">☐ Fall within the range of fair market value for the marketing services described.</li>
                                <li className="text-sm leading-relaxed text-muted-foreground list-disc">☐ Are commercially reasonable independent of any referral activity.</li>
                                <li className="text-sm leading-relaxed text-muted-foreground list-disc">☐ Are not determined in a manner that takes into account the volume or value of referrals or business generated.</li>
                                <li className="text-sm leading-relaxed text-muted-foreground list-disc">☐ Are consistent with compensation paid in arm's-length transactions for comparable marketing services.</li>
                            </ul>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>FMV Range Identified:</strong> ____________________________________</p>
                    </div>

                    {/* IX — Certification Statement */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>IX</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Certification Statement</h2>
                        </div>
                        <div className="rounded-xl p-6" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                            <p className="text-base leading-relaxed text-muted-foreground mb-6">I, the undersigned, certify that: (a) I am qualified to perform healthcare compensation valuations; (b) I have no financial interest in the outcome of this assessment; (c) the analysis was conducted using accepted valuation methodologies; and (d) the findings stated above represent my independent professional opinion.</p>
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>Signature:</strong> ____________________________________</p>
                                <p className="text-sm leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>Name:</strong> ____________________________________</p>
                                <p className="text-sm leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>Title:</strong> ____________________________________</p>
                                <p className="text-sm leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>Firm:</strong> ____________________________________</p>
                                <p className="text-sm leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>Date:</strong> ____________________________________</p>
                            </div>
                        </div>
                    </div>

                    {/* X — Validity and Recertification */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(36,92,58,0.08)", color: "#245C3A" }}>X</span>
                            <h2 className="text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>Validity and Recertification</h2>
                        </div>
                        <ul className="space-y-2 pl-6 mb-4">
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">This Certification is valid for twelve (12) months from the date of issuance.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">Athos shall commission a recertification annually, prior to expiration of the then-current Certification.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">If compensation rates or methodology are modified during the validity period, a supplemental assessment is required before the new rates take effect.</li>
                            <li className="text-base leading-relaxed text-muted-foreground list-disc">This Certification is maintained on file and available to regulatory authorities upon lawful request.</li>
                        </ul>

                        <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(36,92,58,0.06)", border: "1px solid rgba(36,92,58,0.12)" }}>
                            <p className="text-sm font-medium mb-2" style={{ color: "#245C3A" }}>Recertification schedule</p>
                            <p className="text-sm leading-relaxed text-muted-foreground"><strong style={{ color: "#1a1a1a" }}>Current Certification Date:</strong> ____________________________________</p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-2"><strong style={{ color: "#1a1a1a" }}>Next Recertification Due:</strong> ____________________________________</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mb-12">
                        <p className="text-base leading-relaxed text-muted-foreground">For questions about this Certification or Athos's FMV process, contact <a href={"mailto:" + contactEmail} style={{ color: "#245C3A", textDecoration: "underline" }}>{contactEmail}</a>.</p>
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