
var FB = "'DM Sans',system-ui,sans-serif";

export default function Block() {
  var logo = {
      src: "https://assets.softr-files.com/applications/9da2c9c4-100f-4a3e-bd8f-4c76ad65641a/assets/c62f37e0-e84b-4e99-8a52-6e2e1ebb3e27.png",
      alt: "Athos",
    };
  var pageLabel = "Enterprise Signup";
  var headline = "Book your onboarding call.";
  var subhead = "30 minutes. Learn how to acquire more patients and revenue through peptide telehealth — under your brand or ours.";

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="container"
        style={{
          paddingTop: "clamp(48px, 8vw, 80px)",
          paddingBottom: "clamp(48px, 8vw, 80px)",
        }}
      >
        {/* Logo | Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            style={{ height: 24, width: "auto" }}
          />
          <div
            style={{
              width: 1,
              height: 20,
              backgroundColor: "rgba(0,0,0,0.15)",
            }}
          />
          <span
            style={{
              fontFamily: FB,
              fontSize: 14,
              fontWeight: 500,
              color: "#6b7280",
            }}
          >
            {pageLabel}
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: FB,
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#0f0f0f",
            marginBottom: 12,
          }}
        >
          {headline}
        </h1>
        <p
          style={{
            fontFamily: FB,
            fontSize: 15,
            fontWeight: 400,
            color: "#555",
            marginBottom: 40,
            maxWidth: 500,
          }}
        >
          {subhead}
        </p>

        {/* Calendly Iframe */}
        <iframe
          src="https://calendly.com/your-booking-link/30min?primary_color=16625f&hide_gdpr_banner=1"
          style={{
            width: "100%",
            minWidth: 320,
            height: 700,
            border: "none",
            borderRadius: 12,
          }}
          title="Schedule onboarding call"
        />
      </div>
    </div>
  );
}
