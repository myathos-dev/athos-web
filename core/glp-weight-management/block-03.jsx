
export default function Block() {
  const heading = "What are Compounded Peptides?";
  const bodyText = "Think of GLP (Glucagon-Like Peptide) medications as a way to reset the communication between your gut and your brain. Naturally, your body produces these hormones to tell you when you’re full and to keep your blood sugar steady. However, for many, those signals can get quiet over time. GLP medications amplify those signals, helping you feel satisfied sooner, reducing food noise (those constant cravings), and allowing your metabolism to work with you rather than against you. It isn’t about willpower; it’s about giving your body the right biological tools to find its balance.\n\nAthos exclusively works with licensed, FDA-registered compounding pharmacies in the United States.";
  const productImage = {
      src: "https://replicate.delivery/xezq/F27bLNRR5FLfQ6Mzxy2nbyT3TnL6rkCXAfdMX73CFjZVvOXWA/out-0.webp",
      alt: "Compounded peptide vial",
    };

  const paragraphs = bodyText.split('\n').filter(p => p.trim());

  return (
    <div className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
            {/* Left column - Image */}
            <div className="order-1 flex">
              <div
                className="overflow-hidden flex items-center justify-center w-full p-6 md:p-10"
                style={{
                  borderRadius: '18px',
                  backgroundColor: '#E8E5DD',
                }}
              >
                <img
                  src={productImage.src}
                  alt={productImage.alt}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right column - Text content */}
            <div className="order-2 flex flex-col justify-center">
              {heading && (
                <h2
                  className="font-heading text-[32px] md:text-[40px] leading-[1.15] mb-6"
                  style={{ color: '#1A2E1A' }}
                >
                  {heading}
                </h2>
              )}
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => {
                  const isLast = index === paragraphs.length - 1;

                  if (isLast) {
                    return (
                      <p
                        key={index}
                        className="text-[16px] md:text-[17px] leading-[1.6]"
                        style={{ color: '#1A2E1A', fontWeight: 600 }}
                      >
                        {paragraph}
                      </p>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="text-[16px] md:text-[17px] leading-[1.6]"
                      style={{ color: '#555555' }}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
