"use client";

import React from "react";
import PropTypes from "prop-types";

export const modernMixedCTADefaultProps = {
  id: undefined,
  sectionBackground: "#ffffff",
  overlayColor: "transparent",
  mainTitle: "Push your product to the next level",
  subtitle: "End-to-end payments and financial management in a single, modern solution.",
  description:
    "Meet the right platform to help realize your vision with confidence, transparency, and strategic insight.",
  accentPhrase: "next level",
  descriptionColor: "#4b5563",
  textColor: "#000000",
  cardBackground: "#ffffff",
  cardBorder: "1px solid #e5e7eb",
  cardBorderRadius: "32px",
  cardPadding: "48px",
  cardShadowColor: "rgba(0,0,0,0.1)",
  cardShadowOffset: 10,
  cardShadowBlur: 30,
  cardShadowSpread: -5,
  buttonText: "Get Started",
  buttonLink: "#",
  buttonTarget: "_self",
  buttonBackground: "#0f172a",
  buttonTextColor: "#ffffff",
  buttonBorder: "none",
  buttonSize: "16px",
  buttonRadius: "999px",
  buttonGap: "16px",
  imageCards: [
    {
      id: "img-card-1",
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      alt: "Business handshake",
      caption: "Partner with confidence",
    },
    {
      id: "img-card-2",
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      alt: "Modern office exterior",
      caption: "Designed for leaders",
    },
  ],
  imageShadow: "0 25px 50px rgba(15,23,42,0.4)",
  gridGap: "16px",
  style: {},
  className: "",
  fullWidth: false,
  plainBackground: false,
};

const ModernMixedCTA = ({
  id,
  sectionBackground,
  overlayColor,
  mainTitle,
  accentPhrase,
  subtitle,
  description,
  descriptionColor,
  textColor,
  cardBackground,
  cardBorder,
  cardBorderRadius,
  cardPadding,
  cardShadowColor,
  cardShadowOffset,
  cardShadowBlur,
  cardShadowSpread,
  buttonText,
  buttonLink,
  buttonTarget,
  buttonBackground,
  buttonTextColor,
  buttonBorder,
  buttonSize,
  buttonRadius,
  imageCards,
  imageShadow,
  gridGap,
  style,
  className,
  fullWidth,
  plainBackground,
}) => {
  const textAccent = accentPhrase ? (
    <span style={{ color: buttonBackground, fontWeight: 700 }}>{` ${accentPhrase}`}</span>
  ) : null;

  const containerStyle = {
    background: plainBackground ? "transparent" : sectionBackground,
    minHeight: "520px",
    padding: "64px 24px",
    position: "relative",
    overflow: "hidden",
    ...style,
  };

  const overlayStyle = overlayColor && !plainBackground
    ? {
        position: "absolute",
        inset: 0,
        background: overlayColor,
        opacity: 0.9,
      }
    : null;

  const computedCardShadow = cardShadowColor && !plainBackground
    ? `0 ${cardShadowOffset}px ${cardShadowBlur}px ${cardShadowSpread}px ${cardShadowColor}`
    : "none";

  const cardStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: fullWidth ? "100%" : "1100px",
    margin: "0 auto",
    background: plainBackground ? "transparent" : cardBackground,
    border: plainBackground ? "none" : cardBorder,
    borderRadius: fullWidth ? "0px" : cardBorderRadius,
    boxShadow: computedCardShadow,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: gridGap,
    padding: cardPadding,
    color: textColor,
    alignItems: "stretch",
  };

  const buttonStyle = {
    background: buttonBackground,
    border: buttonBorder,
    color: buttonTextColor,
    padding: "16px 32px",
    borderRadius: buttonRadius,
    fontSize: buttonSize,
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 200ms ease, box-shadow 200ms ease",
  };

  const imageGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: gridGap,
  };

  const imageCardStyle = {
    borderRadius: "24px",
    overflow: "hidden",
    position: "relative",
    background: "#0c1422",
    boxShadow: imageShadow,
  };

  return (
    <section id={id} className={className} style={containerStyle}>
      {overlayStyle && <div style={overlayStyle} aria-hidden />}
      <div style={cardStyle}>
        <div>
          <p style={{ color: descriptionColor, margin: 0, textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px" }}>
            {subtitle}
          </p>
          <h2 style={{ margin: "16px 0", fontSize: "38px", lineHeight: 1.2, fontWeight: 800 }}>
            {mainTitle}
            {textAccent}
          </h2>
          <p style={{ color: descriptionColor, fontSize: "16px", lineHeight: 1.6 }}>{description}</p>
          <a href={buttonLink} target={buttonTarget} rel={buttonTarget === "_blank" ? "noopener noreferrer" : undefined} style={buttonStyle}>
            {buttonText}
          </a>
        </div>
        <div style={imageGridStyle}>
          {Array.isArray(imageCards) &&
            imageCards.map((card) => (
              <div key={card.id} style={imageCardStyle}>
                {card.src ? (
                  <img src={card.src} alt={card.alt || card.caption || ""} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                ) : (
                  <div style={{ width: "100%", height: "180px", background: "#1f2937" }} />
                )}
                {card.caption ? (
                  <p
                    style={{
                      margin: 0,
                      padding: "12px 14px",
                      color: "#f9fafb",
                      background: "rgba(15,23,42,0.6)",
                      fontSize: "14px",
                    }}
                  >
                    {card.caption}
                  </p>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

ModernMixedCTA.propTypes = {
  id: PropTypes.string,
  sectionBackground: PropTypes.string,
  overlayColor: PropTypes.string,
  mainTitle: PropTypes.string,
  accentPhrase: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  textColor: PropTypes.string,
  cardBackground: PropTypes.string,
  cardBorder: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardShadowColor: PropTypes.string,
  cardShadowOffset: PropTypes.number,
  cardShadowBlur: PropTypes.number,
  cardShadowSpread: PropTypes.number,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonTarget: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  buttonBackground: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBorder: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonRadius: PropTypes.string,
  imageCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
      caption: PropTypes.string,
    }),
  ),
  imageShadow: PropTypes.string,
  gridGap: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

ModernMixedCTA.defaultProps = modernMixedCTADefaultProps;

export default ModernMixedCTA;
