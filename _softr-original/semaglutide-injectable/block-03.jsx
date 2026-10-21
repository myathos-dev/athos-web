import { useTextSetting, useLongTextSetting, useImageSetting } from "@/lib/editable-settings";

export default function Block() {
  const heading = useTextSetting({
    name: "heading",
    label: "Heading",
    initialValue: "What are Compounded Peptides?",
  });
  const bodyText = useLongTextSetting({
    name: "body-text",
    label: "Body text",
    initialValue: "Semaglutide is a long-acting GLP-1 (Glucagon-Like Peptide-1) receptor agonist. It works by mimicking a natural hormone released in the gastrointestinal tract that targets areas of the brain that regulate appetite and food intake. By slowing gastric emptying and signaling satiety, it helps patients manage caloric intake and metabolic health. Compounded Semaglutide is a patient-specific medication prescribed by a licensed provider and prepared in a regulated 503A or 503B pharmacy. Every batch undergoes rigorous third-party verification, with a Certificate of Analysis (CoA) ensuring the purity and potency of the peptide delivered to your door.\n\nAthos exclusively works with licensed, FDA-registered compounding pharmacies in the United States.",
  });
  const productImage = useImageSetting({
    name: "product-image",
    label: "Product image",
    initialValue: {
      src: "https://replicate.delivery/xezq/F27bLNRR5FLfQ6Mzxy2nbyT3TnL6rkCXAfdMX73CFjZVvOXWA/out-0.webp",
      alt: "Compounded peptide vial",
    },
  });

  const paragraphs = bodyText.split('\n').filter(p => p.trim());

  return (
    <div className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
            {/* Left column - Image */}
            <div className="order-1 flex">
              <div
                className="overflow-hidden flex items-center justify-center w-full"
                style={{
                  borderRadius: '18px',
                  backgroundColor: '#E8E5DD',
                }}
              >
                <img
                  src={productImage.src}
                  alt={productImage.alt}
                  className="object-contain"
                  style={{ maxHeight: '480', width: 'auto' }}
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
