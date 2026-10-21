import { useTextSetting } from "@/lib/editable-settings";

var FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
var FB = "'DM Sans',system-ui,sans-serif";
var PR = "#245C3A";

var PAIN_POINTS = [
  {
    num: "01",
    label: "FRAGMENTATION",
    title: "More vendors. More logins.\nSame delays.",
    body: "You added pharmacies to fix backorders. Now you are juggling 9 vendor relationships, checking availability manually, and still getting surprised by stockouts.",
  },
  {
    num: "02",
    label: "NO ROUTING",
    title: "Nobody is optimizing\nwhich pharmacy fills what.",
    body: "When one source is out, someone on your team has to call around, check stock, re-send the script. There is no system deciding the fastest path. It is manual every time.",
  },
  {
    num: "03",
    label: "PATIENT IMPACT",
    title: "Patients do not care\nhow many pharmacies you have.",
    body: "They care that their medication arrived on time. Every delay is a patient who searches for another provider. Complexity behind the scenes does not fix the experience.",
  },
  {
    num: "04",
    label: "COLD CHAIN",
    title: "Medications arriving warm.\nEfficacy compromised.",
    body: "Not every pharmacy cold-ships by default. You find out when a patient reports a warm package — after the compound is already degraded. No recourse. No replacement protocol.",
  },
  {
    num: "05",
    label: "ZERO VISIBILITY",
    title: "No tracking. No status.\nJust phone calls.",
    body: "Where is the order? Was it shipped? Which pharmacy has it? You are calling vendors to get answers your portal should provide automatically.",
  },
  {
    num: "06",
    label: "NO LEVERAGE",
    title: "Paying retail\nwith no buying power.",
    body: "Your volume alone does not unlock better pricing. Every vendor quotes you independently. No consolidated buying power. No price matching. No leverage.",
  },
];

function FragmentationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="12" cy="12" r="5" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="36" cy="10" r="4" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4" />
      <circle cx="10" cy="36" r="4" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4" />
      <circle cx="38" cy="34" r="5" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="24" cy="24" r="3" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
      <path d="M16 15L21 21" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
      <path d="M33 13L27 21" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
      <path d="M13 33L21 27" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
      <path d="M35 31L27 27" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
      <path d="M20 20L28 28" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M28 20L20 28" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function NoRoutingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M8 24H16" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M20 24H28" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" opacity="0.3" />
      <path d="M32 24H40" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="18" cy="24" r="3" stroke="#dc2626" strokeWidth="1.5" opacity="0.5" />
      <circle cx="30" cy="24" r="3" stroke="#dc2626" strokeWidth="1.5" opacity="0.5" />
      <text x="24" y="14" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="700" opacity="0.5">?</text>
      <text x="24" y="40" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="700" opacity="0.5">?</text>
    </svg>
  );
}

function PatientImpactIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M8 14L16 18L24 16L32 28L40 36" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="40" cy="36" r="3" fill="#dc2626" opacity="0.2" />
      <path d="M36 40L40 36L44 40" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M8 40H42" stroke="#dc2626" strokeWidth="1" opacity="0.15" />
    </svg>
  );
}

function ColdChainIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="12" y="10" width="24" height="28" rx="4" stroke="#dc2626" strokeWidth="1.5" opacity="0.4" />
      <path d="M18 22H30" stroke="#dc2626" strokeWidth="1" opacity="0.2" />
      <path d="M24 14V18" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M20 16L24 18L28 16" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M18 30L24 26L30 30" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M18 34L24 30L30 34" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
      <circle cx="36" cy="12" r="6" stroke="#dc2626" strokeWidth="1.5" opacity="0.5" />
      <path d="M36 9V12L38 14" stroke="#dc2626" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function ZeroVisibilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="12" width="32" height="24" rx="4" stroke="#dc2626" strokeWidth="1.5" opacity="0.4" />
      <path d="M14 22H22" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M14 28H18" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
      <path d="M26 22H34" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" opacity="0.15" />
      <path d="M26 28H34" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" opacity="0.15" />
      <circle cx="24" cy="25" r="8" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
      <path d="M20 21L28 29" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function NoLeverageIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M14 36V26" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" opacity="0.2" />
      <path d="M24 36V20" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" opacity="0.25" />
      <path d="M34 36V14" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <path d="M10 36H38" stroke="#dc2626" strokeWidth="1" opacity="0.15" />
      <path d="M12 12L36 12" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <text x="24" y="11" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="700" opacity="0.4">RETAIL</text>
    </svg>
  );
}

var PAIN_ICONS = [FragmentationIcon, NoRoutingIcon, PatientImpactIcon, ColdChainIcon, ZeroVisibilityIcon, NoLeverageIcon];

export default function Block() {
  var body = useTextSetting({
    name: "body",
    label: "Body Text",
    initialValue: "You tried to fix it. Added more pharmacies. Switched EMRs. Built workarounds. Now you are managing 9 vendor relationships across 3 systems — and patients are still waiting. The problem was never the number of pharmacies. It is that nothing is coordinated.",
  });

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container" style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(48px, 8vw, 64px)" }}>
        <div style={{ maxWidth: 700, marginBottom: 48 }}>
          <p style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#dc2626", textTransform: "uppercase", marginBottom: 20 }}>THE PROBLEM</p>
          <h2 style={{ fontFamily: FB, fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0f0f0f", marginBottom: 20 }}>
            9 pharmacies. 3 EMRs.
            <br />
            Still getting{" "}
            <em style={{ fontFamily: FH, fontStyle: "italic", fontWeight: 400, color: "#dc2626" }}>delays.</em>
          </h2>
          <p style={{ fontFamily: FB, fontSize: "clamp(15px, 1.3vw, 17px)", fontWeight: 400, lineHeight: 1.65, color: "#555" }}>{body}</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#f5f2ed" }}>
        <div style={{ paddingTop: "clamp(48px, 8vw, 64px)", paddingBottom: "clamp(64px, 10vw, 96px)" }}>
          <style>{`
            @keyframes clinic-pain-scroll {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }
            .clinic-pain-track:hover {
              animation-play-state: paused !important;
            }
          `}</style>
          <div
            style={{
              overflow: "hidden",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
              maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            }}
          >
            <div
              className="clinic-pain-track"
              style={{
                display: "flex",
                width: "max-content",
                animation: "clinic-pain-scroll 40s linear infinite",
              }}
            >
              {[0, 1].map(function(dup) {
                return (
                  <div key={dup} style={{ display: "flex", gap: 16, paddingRight: 16 }}>
                    {PAIN_POINTS.map(function(p, i) {
                      var Icon = PAIN_ICONS[i];
                      return (
                        <div key={i} style={{ flex: "0 0 auto", width: 300, backgroundColor: "#fff", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", padding: "clamp(24px, 3vw, 32px)", display: "flex", flexDirection: "column", gap: 14 }}>
                          <div><Icon /></div>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                            <span style={{ fontFamily: FB, fontSize: 12, color: "#bbb" }}>{p.num}</span>
                            <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", color: "#dc2626", textTransform: "uppercase" }}>{p.label}</span>
                          </div>
                          <h3 style={{ fontFamily: FB, fontSize: 18, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#111", whiteSpace: "pre-line" }}>{p.title}</h3>
                          <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, lineHeight: 1.6, color: "#666" }}>{p.body}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}