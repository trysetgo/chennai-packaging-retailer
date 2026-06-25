"use client";

import React, { useMemo } from "react";
import PropTypes from "prop-types";

const defaultFeatures = [
  {
    id: "feat-1",
    title: "प्रीमियम गुणवत्ता",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    text: "उत्कृष्टता के साथ तैयार किया गया."
  },
  {
    id: "feat-2",
    title: "तेजी से वितरण",
    image: "https://images.unsplash.com/photo-1580828369019-2238b6d774d0?auto=format&fit=crop&w=400&q=80",
    text: "जल्दी से आपके दरवाजे पर भेज दिया गया।"
  },
  {
    id: "feat-3",
    title: "24/7 सहायता",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    text: "आपकी मदद के लिए हमेशा मौजूद हूं."
  },
  {
    id: "feat-4",
    title: "पर्यावरण के अनुकूल",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80",
    text: "टिकाऊ सामग्री."
  }
];

export const whyChooseOurBrandDefaultProps = {
  title: "Why Choose Our Brand",
  subtitle: "Discover what sets us apart from the rest.",
  featuresLayout: JSON.stringify(defaultFeatures, null, 2),
  columns: 4,
  gap: "32px",
  sectionBackgroundColor: "#ffffff",
  titleColor: "#111827",
  subtitleColor: "#4b5563",
  cardTextColor: "#111827",
  cardSubTextColor: "#6b7280",
  imageShape: "circle",
  imageSize: "160px",
  imageObjectFit: "cover",
  hoverScale: 1.05,
  style: {},
  className: "",
};

const WhyChooseOurBrand = (incomingProps) => {
  const props = { ...whyChooseOurBrandDefaultProps, ...(incomingProps.props || incomingProps) };
  const { isPreviewing, isEditable } = incomingProps;

  const features = useMemo(() => {
    try {
      return JSON.parse(props.featuresLayout);
    } catch {
      return defaultFeatures;
    }
  }, [props.featuresLayout]);

  return (
    <section
      style={{ backgroundColor: props.sectionBackgroundColor, padding: "64px 24px", ...props.style }}
      className={`w-full font-sans ${props.className}`}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          {props.title && (
            <h2 style={{ color: props.titleColor, fontSize: "2.5rem", fontWeight: 800, margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
              {props.title}
            </h2>
          )}
          {props.subtitle && (
            <p style={{ color: props.subtitleColor, fontSize: "1.125rem", margin: 0, maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              {props.subtitle}
            </p>
          )}
        </header>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`, gap: props.gap, justifyItems: "center" }}>
          {features.map((feat, idx) => (
            <div key={feat.id || idx} className="group block text-center transition-all">
              <div
                style={{
                  width: props.imageSize,
                  height: props.imageSize,
                  borderRadius: props.imageShape === "circle" ? "50%" : props.imageShape === "rounded" ? "1rem" : "0",
                  overflow: "hidden",
                  margin: "0 auto 20px",
                  backgroundColor: "#f3f4f6",
                }}
              >
                <img src={feat.image || "https://via.placeholder.com/400"} alt={feat.title} style={{ width: "100%", height: "100%", objectFit: props.imageObjectFit, transition: "transform 0.5s ease" }} className="group-hover:scale-[1.08]" loading="lazy" />
              </div>
              <h3 style={{ color: props.cardTextColor, fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>
                {feat.title}
              </h3>
              {feat.text && (
                <p style={{ color: props.cardSubTextColor, margin: "8px 0 0 0", fontSize: "1rem", fontWeight: 500, lineHeight: 1.5 }}>
                  {feat.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

WhyChooseOurBrand.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  featuresLayout: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string,
  sectionBackgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  cardTextColor: PropTypes.string,
  cardSubTextColor: PropTypes.string,
  imageShape: PropTypes.oneOf(["square", "rounded", "circle"]),
  imageSize: PropTypes.string,
  imageObjectFit: PropTypes.string,
  hoverScale: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  isEditable: PropTypes.bool,
  isPreviewing: PropTypes.bool,
};

export default WhyChooseOurBrand;