"use client";

import React from "react";
import PropTypes from "prop-types";

export const modernMixedCTADefaultProps = {
  id: undefined,
  sectionBackground: "#ffffff",
  useSectionGradient: false,
  sectionGradientStart: "#ffffff",
  sectionGradientEnd: "#f1f5f9",
  sectionGradientAngle: 135,
  overlayColor: "transparent",
  overlayOpacity: 0.9,
  mainTitle: "Push your product to the next level",
  subtitle:
    "End-to-end payments and financial management in a single, modern solution.",
  description:
    "Meet the right platform to help realize your vision with confidence, transparency, and strategic insight.",
  accentPhrase: "next level",
  descriptionColor: "#4b5563",
  textColor: "#000000",
  cardBackground: "#ffffff",
  useCardGradient: false,
  cardGradientStart: "#ffffff",
  cardGradientEnd: "#f8fafc",
  cardGradientAngle: 135,
  cardBorder: "",
  cardBorderWidth: 1,
  cardBorderColor: "#e5e7eb",
  cardBorderRadius: "32px",
  cardPadding: "48px",
  cardMarginTop: "0px",
  cardMarginRight: "auto",
  cardMarginBottom: "0px",
  cardMarginLeft: "auto",
  cardMaxWidth: "1100px",
  cardShadowColor: "rgba(0,0,0,0.1)",
  cardShadowOffset: 10,
  cardShadowBlur: 30,
  cardShadowSpread: -5,
  sectionPaddingTop: "64px",
  sectionPaddingRight: "24px",
  sectionPaddingBottom: "64px",
  sectionPaddingLeft: "24px",
  sectionMarginTop: "0px",
  sectionMarginRight: "0px",
  sectionMarginBottom: "0px",
  sectionMarginLeft: "0px",
  sectionMinHeight: "520px",
  layoutMinColumnWidth: "260px",
  textColumnGap: "24px",
  textAlign: "left",
  titleFontSize: "38px",
  subtitleFontSize: "12px",
  descriptionFontSize: "16px",
  buttonText: "Get Started",
  buttonLink: "#",
  buttonTarget: "_self",
  buttonBackground: "#0f172a",
  useButtonGradient: false,
  buttonGradientStart: "#0f172a",
  buttonGradientEnd: "#334155",
  buttonGradientAngle: 135,
  buttonTextColor: "#ffffff",
  buttonBorder: "",
  buttonBorderWidth: 0,
  buttonBorderColor: "#0f172a",
  buttonSize: "16px",
  buttonRadius: "999px",
  buttonGap: "16px",
  buttonPaddingY: "16px",
  buttonPaddingX: "32px",
  buttonShadow: "none",
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
  imageHeight: "180px",
  imageCardRadius: "24px",
  imageCardBackground: "#0c1422",
  imageCaptionBackground: "rgba(15,23,42,0.6)",
  imageCaptionColor: "#f9fafb",
  imageCaptionFontSize: "14px",
  gridGap: "16px",
  enableContentImageAnimation: true,
  animationEffect: "content-left-image-right",
  animationDuration: "800ms",
  contentAnimationDelay: "0ms",
  imageAnimationDelay: "180ms",
  imageAnimationStagger: 120,
  animationEasing: "cubic-bezier(0.22, 1, 0.36, 1)",
  style: {},
  className: "",
  fullWidth: false,
  plainBackground: false,
};

const ModernMixedCTA = ({
  id,
  sectionBackground,
  useSectionGradient,
  sectionGradientStart,
  sectionGradientEnd,
  sectionGradientAngle,
  overlayColor,
  overlayOpacity,
  mainTitle,
  accentPhrase,
  subtitle,
  description,
  descriptionColor,
  textColor,
  cardBackground,
  useCardGradient,
  cardGradientStart,
  cardGradientEnd,
  cardGradientAngle,
  cardBorder,
  cardBorderWidth,
  cardBorderColor,
  cardBorderRadius,
  cardPadding,
  cardMarginTop,
  cardMarginRight,
  cardMarginBottom,
  cardMarginLeft,
  cardMaxWidth,
  cardShadowColor,
  cardShadowOffset,
  cardShadowBlur,
  cardShadowSpread,
  sectionPaddingTop,
  sectionPaddingRight,
  sectionPaddingBottom,
  sectionPaddingLeft,
  sectionMarginTop,
  sectionMarginRight,
  sectionMarginBottom,
  sectionMarginLeft,
  sectionMinHeight,
  layoutMinColumnWidth,
  textColumnGap,
  textAlign,
  titleFontSize,
  subtitleFontSize,
  descriptionFontSize,
  buttonText,
  buttonLink,
  buttonTarget,
  buttonBackground,
  useButtonGradient,
  buttonGradientStart,
  buttonGradientEnd,
  buttonGradientAngle,
  buttonTextColor,
  buttonBorder,
  buttonBorderWidth,
  buttonBorderColor,
  buttonSize,
  buttonRadius,
  buttonPaddingY,
  buttonPaddingX,
  buttonShadow,
  imageCards,
  imageShadow,
  imageHeight,
  imageCardRadius,
  imageCardBackground,
  imageCaptionBackground,
  imageCaptionColor,
  imageCaptionFontSize,
  gridGap,
  enableContentImageAnimation,
  animationEffect,
  animationDuration,
  contentAnimationDelay,
  imageAnimationDelay,
  imageAnimationStagger,
  animationEasing,
  style,
  className,
  fullWidth,
  plainBackground,
}) => {
  const textAccent = accentPhrase ? (
    <span
      style={{ color: buttonBackground, fontWeight: 700 }}
    >{` ${accentPhrase}`}</span>
  ) : null;

  const sectionBackgroundValue = useSectionGradient
    ? `linear-gradient(${sectionGradientAngle}deg, ${sectionGradientStart}, ${sectionGradientEnd})`
    : sectionBackground;

  const cardBackgroundValue = useCardGradient
    ? `linear-gradient(${cardGradientAngle}deg, ${cardGradientStart}, ${cardGradientEnd})`
    : cardBackground;

  const buttonBackgroundValue = useButtonGradient
    ? `linear-gradient(${buttonGradientAngle}deg, ${buttonGradientStart}, ${buttonGradientEnd})`
    : buttonBackground;

  const resolvedCardBorder =
    cardBorder ||
    (Number(cardBorderWidth) > 0
      ? `${cardBorderWidth}px solid ${cardBorderColor}`
      : "none");

  const resolvedButtonBorder =
    buttonBorder ||
    (Number(buttonBorderWidth) > 0
      ? `${buttonBorderWidth}px solid ${buttonBorderColor}`
      : "none");

  const getContentAnimationName = () => {
    switch (animationEffect) {
      case "content-right-image-left":
        return "modernMixedCTAContentRight";
      case "fade-up":
        return "modernMixedCTAFadeUp";
      case "zoom-in":
        return "modernMixedCTAZoomIn";
      case "blur-in":
        return "modernMixedCTABlurIn";
      case "none":
        return "none";
      case "content-left-image-right":
      default:
        return "modernMixedCTAContentLeft";
    }
  };

  const getImageAnimationName = () => {
    switch (animationEffect) {
      case "content-right-image-left":
        return "modernMixedCTAImageLeft";
      case "fade-up":
        return "modernMixedCTAFadeUp";
      case "zoom-in":
        return "modernMixedCTAZoomIn";
      case "blur-in":
        return "modernMixedCTABlurIn";
      case "none":
        return "none";
      case "content-left-image-right":
      default:
        return "modernMixedCTAImageRight";
    }
  };

  const contentAnimationName = getContentAnimationName();
  const imageAnimationName = getImageAnimationName();
  const animationEnabled =
    enableContentImageAnimation && animationEffect !== "none";

  const containerStyle = {
    background: plainBackground ? "transparent" : sectionBackgroundValue,
    minHeight: sectionMinHeight,
    padding: `${sectionPaddingTop} ${sectionPaddingRight} ${sectionPaddingBottom} ${sectionPaddingLeft}`,
    margin: `${sectionMarginTop} ${sectionMarginRight} ${sectionMarginBottom} ${sectionMarginLeft}`,
    position: "relative",
    overflow: "hidden",
    ...style,
  };

  const overlayStyle =
    overlayColor && !plainBackground
      ? {
          position: "absolute",
          inset: 0,
          background: overlayColor,
          opacity: overlayOpacity,
        }
      : null;

  const computedCardShadow =
    cardShadowColor && !plainBackground
      ? `0 ${cardShadowOffset}px ${cardShadowBlur}px ${cardShadowSpread}px ${cardShadowColor}`
      : "none";

  const cardStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: fullWidth ? "100%" : cardMaxWidth,
    margin: `${cardMarginTop} ${cardMarginRight} ${cardMarginBottom} ${cardMarginLeft}`,
    background: plainBackground ? "transparent" : cardBackgroundValue,
    border: plainBackground ? "none" : resolvedCardBorder,
    borderRadius: fullWidth ? "0px" : cardBorderRadius,
    boxShadow: computedCardShadow,
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${layoutMinColumnWidth}), 1fr))`,
    gap: gridGap,
    padding: cardPadding,
    color: textColor,
    alignItems: "stretch",
  };

  const buttonStyle = {
    background: buttonBackgroundValue,
    border: resolvedButtonBorder,
    color: buttonTextColor,
    padding: `${buttonPaddingY} ${buttonPaddingX}`,
    borderRadius: buttonRadius,
    fontSize: buttonSize,
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: buttonShadow,
    transition: "transform 200ms ease, box-shadow 200ms ease",
  };

  const imageGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: gridGap,
  };

  const imageCardStyle = {
    borderRadius: imageCardRadius,
    overflow: "hidden",
    position: "relative",
    background: imageCardBackground,
    boxShadow: imageShadow,
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: textColumnGap,
    textAlign,
    animation:
      animationEnabled && contentAnimationName !== "none"
        ? `${contentAnimationName} ${animationDuration} ${animationEasing} both`
        : "none",
    animationDelay: contentAnimationDelay,
  };

  return (
    <section id={id} className={className} style={containerStyle}>
      <style>{`
        @keyframes modernMixedCTAContentLeft {
          from { opacity: 0; transform: translateX(-34px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes modernMixedCTAContentRight {
          from { opacity: 0; transform: translateX(34px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes modernMixedCTAImageRight {
          from { opacity: 0; transform: translateX(42px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes modernMixedCTAImageLeft {
          from { opacity: 0; transform: translateX(-42px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes modernMixedCTAFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modernMixedCTAZoomIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes modernMixedCTABlurIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
      `}</style>
      {overlayStyle && <div style={overlayStyle} aria-hidden />}
      <div style={cardStyle}>
        <div style={contentStyle}>
          <p
            style={{
              color: descriptionColor,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: subtitleFontSize,
            }}
          >
            {subtitle}
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: titleFontSize,
              lineHeight: 1.2,
              fontWeight: 800,
            }}
          >
            {mainTitle}
            {textAccent}
          </h2>
          <p
            style={{
              color: descriptionColor,
              fontSize: descriptionFontSize,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {description}
          </p>
          <a
            href={buttonLink}
            target={buttonTarget}
            rel={buttonTarget === "_blank" ? "noopener noreferrer" : undefined}
            style={buttonStyle}
          >
            {buttonText}
          </a>
        </div>
        <div style={imageGridStyle}>
          {Array.isArray(imageCards) &&
            imageCards.map((card, index) => {
              const stagger = Number(imageAnimationStagger) || 0;
              const baseDelay =
                Number.parseFloat(String(imageAnimationDelay || "0")) || 0;
              const delayUnit =
                String(imageAnimationDelay || "").includes("s") &&
                !String(imageAnimationDelay || "").includes("ms")
                  ? "s"
                  : "ms";
              const computedImageDelay =
                delayUnit === "s"
                  ? `${baseDelay + (index * stagger) / 1000}s`
                  : `${baseDelay + index * stagger}ms`;
              const animatedImageCardStyle = {
                ...imageCardStyle,
                animation:
                  animationEnabled && imageAnimationName !== "none"
                    ? `${imageAnimationName} ${animationDuration} ${animationEasing} both`
                    : "none",
                animationDelay: card.animationDelay || computedImageDelay,
              };

              return (
                <div key={card.id} style={animatedImageCardStyle}>
                  {card.src ? (
                    <img
                      src={card.src}
                      alt={card.alt || card.caption || ""}
                      style={{
                        width: "100%",
                        height: imageHeight,
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: imageHeight,
                        background: "#1f2937",
                      }}
                    />
                  )}
                  {card.caption ? (
                    <p
                      style={{
                        margin: 0,
                        padding: "12px 14px",
                        color: imageCaptionColor,
                        background: imageCaptionBackground,
                        fontSize: imageCaptionFontSize,
                      }}
                    >
                      {card.caption}
                    </p>
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

ModernMixedCTA.propTypes = {
  id: PropTypes.string,
  sectionBackground: PropTypes.string,
  useSectionGradient: PropTypes.bool,
  sectionGradientStart: PropTypes.string,
  sectionGradientEnd: PropTypes.string,
  sectionGradientAngle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mainTitle: PropTypes.string,
  accentPhrase: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  textColor: PropTypes.string,
  cardBackground: PropTypes.string,
  useCardGradient: PropTypes.bool,
  cardGradientStart: PropTypes.string,
  cardGradientEnd: PropTypes.string,
  cardGradientAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardBorder: PropTypes.string,
  cardBorderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardBorderColor: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardMarginTop: PropTypes.string,
  cardMarginRight: PropTypes.string,
  cardMarginBottom: PropTypes.string,
  cardMarginLeft: PropTypes.string,
  cardMaxWidth: PropTypes.string,
  cardShadowColor: PropTypes.string,
  cardShadowOffset: PropTypes.number,
  cardShadowBlur: PropTypes.number,
  cardShadowSpread: PropTypes.number,
  sectionPaddingTop: PropTypes.string,
  sectionPaddingRight: PropTypes.string,
  sectionPaddingBottom: PropTypes.string,
  sectionPaddingLeft: PropTypes.string,
  sectionMarginTop: PropTypes.string,
  sectionMarginRight: PropTypes.string,
  sectionMarginBottom: PropTypes.string,
  sectionMarginLeft: PropTypes.string,
  sectionMinHeight: PropTypes.string,
  layoutMinColumnWidth: PropTypes.string,
  textColumnGap: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  titleFontSize: PropTypes.string,
  subtitleFontSize: PropTypes.string,
  descriptionFontSize: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonTarget: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  buttonBackground: PropTypes.string,
  useButtonGradient: PropTypes.bool,
  buttonGradientStart: PropTypes.string,
  buttonGradientEnd: PropTypes.string,
  buttonGradientAngle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  buttonTextColor: PropTypes.string,
  buttonBorder: PropTypes.string,
  buttonBorderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  buttonBorderColor: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonRadius: PropTypes.string,
  buttonPaddingY: PropTypes.string,
  buttonPaddingX: PropTypes.string,
  buttonShadow: PropTypes.string,
  imageCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
      caption: PropTypes.string,
      animationDelay: PropTypes.string,
    }),
  ),
  imageShadow: PropTypes.string,
  imageHeight: PropTypes.string,
  imageCardRadius: PropTypes.string,
  imageCardBackground: PropTypes.string,
  imageCaptionBackground: PropTypes.string,
  imageCaptionColor: PropTypes.string,
  imageCaptionFontSize: PropTypes.string,
  gridGap: PropTypes.string,
  enableContentImageAnimation: PropTypes.bool,
  animationEffect: PropTypes.oneOf([
    "content-left-image-right",
    "content-right-image-left",
    "fade-up",
    "zoom-in",
    "blur-in",
    "none",
  ]),
  animationDuration: PropTypes.string,
  contentAnimationDelay: PropTypes.string,
  imageAnimationDelay: PropTypes.string,
  imageAnimationStagger: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  animationEasing: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  plainBackground: PropTypes.bool,
};

ModernMixedCTA.defaultProps = modernMixedCTADefaultProps;

export default ModernMixedCTA;
