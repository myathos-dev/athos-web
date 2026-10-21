
export default function Block() {
  const bannerText = "Millions already use injectable peptides from unregulated sources without medical oversight. Athos doctor-backed platform provides verified purity, proper dosing, and safe access.";

  const vialImage = {
      src: "https://replicate.delivery/xezq/zVmDRGbSBFbuBdd6VzQEARA5nJAi0ulGKDK65px4SFZaF3lF/out-0.webp",
      alt: "Semaglutide vial",
    };

  return (
    <div className="w-full bg-white py-8">
      <div className="container">
        <div className="content mx-auto" style={{ maxWidth: "1100px" }}>
          <div
            className="rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 relative"
            style={{
              backgroundColor: "#16625f",
              padding: "36px 48px",
              paddingRight: "24px",
              overflow: "hidden",
              minHeight: "160px",
            }}
          >
            {/* Left column - Text */}
            <div className="flex-1" style={{ maxWidth: "600px", zIndex: 1 }}>
              <p
                className="font-sans m-0"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#FFFFFF",
                  fontWeight: 400,
                }}
              >
                {bannerText}
              </p>
            </div>

            {/* Right column - Vial image */}
            <div
              className="flex-shrink-0"
              style={{
                position: "relative",
                alignSelf: "stretch",
                display: "flex",
                alignItems: "flex-start",
                marginTop: "-36px",
                marginBottom: "-60px",
                marginRight: "16px",
              }}
            >
              <img
                src={vialImage.src}
                alt={vialImage.alt}
                style={{
                  width: "200px",
                  height: "auto",
                  objectFit: "contain",
                  transform: "rotate(-6deg) translateY(10px)",
                  filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.2))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
