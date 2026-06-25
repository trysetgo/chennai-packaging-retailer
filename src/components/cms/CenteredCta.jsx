"use client";

import React from "react";
import PropTypes from "prop-types";

const ctaTheme = {
  spacing: {
    section: "clamp(56px, 8vw, 112px)",
    compact: "clamp(40px, 6vw, 72px)",
  },
  typography: {
    headline: "clamp(2rem, 5vw, 4.75rem)",
    subtext: "clamp(1rem, 1.6vw, 1.25rem)",
  },
};

const CenteredCTA = ({
  id,
  headline = "Join Our Journey",
  subtext = "Be part of a growing family that values you.",
  buttons = [],
  background = "transparent",
  backgroundOverlay = "",
  overlayBlendMode = "normal",
  overlayOpacity = 0,
  textColor = "#0f172a",
  subtitleColor = "#475569",
  accentTagLabel = "प्रीमियम एक्सेस",
  accentTagColor = "#0f766e",
  accentTagBackground = "transparent",
  accentTagBorder = "none",
  audienceLabel = "साहसी टीमों के लिए",
  audienceColor = "#64748b",
  audienceBackground = "transparent",
  cardBackground = "transparent",
  cardBorder = "none",
  cardBorderRadius = "0px",
  cardPadding = "0px",
  cardShadow = "none",
  maxWidth = "980px",
  sectionPadding = ctaTheme.spacing.section,
  contentGap = "clamp(18px, 3vw, 28px)",
  headlineFontSize = ctaTheme.typography.headline,
  headlineFontWeight = "850",
  headlineLetterSpacing = "-0.04em",
  subtextFontSize = ctaTheme.typography.subtext,
  subtextLineHeight = "1.75",
  textAlign = "center",
  buttonGap = "12px",
  buttonMinWidth = "150px",
  buttonPaddingY = "13px",
  buttonPaddingX = "22px",
  buttonBorderRadius = "999px",
  buttonFontSize = "14px",
  buttonFontWeight = "800",
  primaryButtonBg = "#0f172a",
  primaryButtonColor = "#ffffff",
  primaryButtonBorder = "none",
  secondaryButtonBg = "#f1f5f9",
  secondaryButtonColor = "#0f172a",
  secondaryButtonBorder = "none",
  tertiaryButtonBg = "#0f766e",
  tertiaryButtonColor = "#ffffff",
  tertiaryButtonBorder = "none",
  floatingShapeColor = "transparent",
  floatingShapeSize = "0px",
  floatingShapeBlur = "0px",
  floatingShapeOffset = "0px",
  floatingShapePosition = "top-right",
  floatingShapeOpacity = 0,
  style = {},
  className = "",
}) => {
  const defaultButtons = [
  {
    id: "1",
    text: "अभी खरीदें",
    link: "#",
    style: "प्राथमिक",
    target: "_खुद"
  },
  {
    id: "2",
    text: "हमसे संपर्क करें",
    link: "#",
    style: "माध्यमिक",
    target: "_खुद"
  }
];

  const displayButtons = Array.isArray(buttons) && buttons.length ? buttons : defaultButtons;

  const getButtonStyles = (buttonStyle) => {
    switch (buttonStyle) {
      case "primary":
        return { backgroundColor: primaryButtonBg, color: primaryButtonColor, border: primaryButtonBorder || "कोई नहीं" };
      case "secondary":
        return { backgroundColor: secondaryButtonBg, color: secondaryButtonColor, border: secondaryButtonBorder || "कोई नहीं" };
      case "tertiary":
        return { backgroundColor: tertiaryButtonBg, color: tertiaryButtonColor, border: tertiaryButtonBorder || "कोई नहीं" };
      default:
        return { backgroundColor: "#e2e8f0", color: "#0f172a", border: "none" };
    }
  };

  const justifyContent = textAlign === "left" ? "flex-start" : textAlign === "right" ? "flex-end" : "center";
  const resolvedOverlayOpacity = Number(overlayOpacity) || 0;
  const resolvedShapeOpacity = Number(floatingShapeOpacity) || 0;
  const showOverlay = Boolean(backgroundOverlay) && resolvedOverlayOpacity > 0;
  const showShape = Boolean(floatingShapeColor && floatingShapeColor !== "transparent") && resolvedShapeOpacity > 0; वापस करना (
    <section
      id={id}
      className={`evo-centered-cta ${className}`.trim()}
      style={{
        "--cta-bg": background || "पारदर्शी",
        "--cta-max-width": maxWidth,
        "--cta-section-padding": sectionPadding,
        "--cta-content-gap": contentGap,
        "--cta-text-align": textAlign,
        "--cta-text-color": textColor,
        "--cta-subtitle-color": subtitleColor,
        "--cta-headline-size": headlineFontSize,
        "--cta-headline-weight": headlineFontWeight,
        "--cta-headline-tracking": headlineLetterSpacing,
        "--cta-subtext-size": subtextFontSize,
        "--cta-subtext-line-height": subtextLineHeight,
        "--cta-button-gap": buttonGap,
        "--cta-button-radius": buttonBorderRadius,
        "--cta-button-min-width": buttonMinWidth,
        "--cta-button-pad-y": buttonPaddingY,
        "--cta-button-pad-x": buttonPaddingX,
        "--cta-button-font-size": buttonFontSize,
        "--cta-button-weight": buttonFontWeight,
        ...style,
      }}
    >
      <style>{`
        .evo-centered-cta {
          position: relative;
          width: 100%;
          overflow: clip;
          background: var(--cta-bg);
          padding: var(--cta-section-padding) clamp(18px, 5vw, 72px);
          box-sizing: border-box;
        }

        .evo-centered-cta *,
        .evo-centered-cta *::before,
        .evo-centered-cta *::after {
          box-sizing: border-box;
        }

        .evo-centered-cta__inner {
          position: relative;
          z-index: 1;
          width: min(100%, var(--cta-max-width));
          margin-inline: auto;
          text-align: var(--cta-text-align);
          background: transparent;
          border: 0;
          box-shadow: none;
          border-radius: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: ${justifyContent === "flex-start" ? "flex-start" : justifyContent === "flex-end" ? "flex-end" : "center"};
          gap: var(--cta-content-gap);
        }

        .evo-centered-cta__kickerGroup {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: ${justifyContent};
          gap: 10px;
          max-width: 100%;
        }

        .evo-centered-cta__tag,
        .evo-centered-cta__audience {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          border: 0;
          box-shadow: none;
          line-height: 1.2;
          white-space: normal;
        }

        .evo-centered-cta__tag {
          padding: 0;
          border-radius: 0;
          background: var(--tag-bg);
          color: var(--tag-color);
          font-size: clamp(0.72rem, 1.4vw, 0.82rem);
          font-weight: 850;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .evo-centered-cta__audience {
          padding: 0;
          border-radius: 0;
          background: var(--audience-bg);
          color: var(--audience-color);
          font-size: clamp(0.78rem, 1.4vw, 0.92rem);
          font-weight: 700;
        }

        .evo-centered-cta__headline {
          margin: 0;
          max-width: 12.5em;
          color: var(--cta-text-color);
          font-size: var(--cta-headline-size);
          font-weight: var(--cta-headline-weight);
          letter-spacing: var(--cta-headline-tracking);
          line-height: 0.98;
          text-wrap: balance;
        }

        .evo-centered-cta__subtext {
          margin: 0;
          max-width: 68ch;
          color: var(--cta-subtitle-color);
          font-size: var(--cta-subtext-size);
          line-height: var(--cta-subtext-line-height);
          text-wrap: pretty;
        }

        .evo-centered-cta__buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: ${justifyContent};
          gap: var(--cta-button-gap);
          width: 100%;
          margin-top: clamp(4px, 1vw, 8px);
        }

        .evo-centered-cta__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: var(--cta-button-min-width);
          min-height: 48px;
          border-radius: var(--cta-button-radius);
          padding: var(--cta-button-pad-y) var(--cta-button-pad-x);
          font-size: var(--cta-button-font-size);
          font-weight: var(--cta-button-weight);
          text-decoration: none;
          text-align: center;
          line-height: 1.2;
          box-shadow: none;
          outline-offset: 3px;
          transition: transform 180ms ease, opacity 180ms ease, background-color 180ms ease, color 180ms ease;
          touch-action: manipulation;
        }

        .evo-centered-cta__button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .evo-centered-cta__button:focus-visible {
          outline: 3px solid rgba(20, 184, 166, 0.35);
        }

        @media (max-width: 760px) {
          .evo-centered-cta {
            padding: clamp(44px, 14vw, 72px) clamp(16px, 6vw, 28px);
          }

          .evo-centered-cta__inner {
            align-items: center;
            text-align: center;
          }

          .evo-centered-cta__kickerGroup,
          .evo-centered-cta__buttons {
            justify-content: center;
          }

          .evo-centered-cta__headline {
            line-height: 1.05;
          }

          .evo-centered-cta__button {
            width: min(100%, 340px);
          }
        }
      `}</style>

      {showOverlay ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: backgroundOverlay,
            mixBlendMode: overlayBlendMode,
            opacity: resolvedOverlayOpacity,
            pointerEvents: "none",
          }}
        />
      ) : null}

      {showShape ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: floatingShapeSize,
            height: floatingShapeSize,
            borderRadius: "999px",
            background: floatingShapeColor,
            filter: `blur(${floatingShapeBlur})`,
            opacity: resolvedShapeOpacity,
            pointerEvents: "none",
            boxShadow: "none",
            ...(String(floatingShapePosition).includes("top") ? { top: floatingShapeOffset } : { bottom: floatingShapeOffset }),
            ...(String(floatingShapePosition).includes("left") ? { left: floatingShapeOffset } : { right: floatingShapeOffset }),
          }}
        />
      ) : null}

      <div
        className="evo-centered-cta__inner"
        style={{
          background: "transparent",
          border: "none",
          borderRadius: 0,
          boxShadow: "none",
          padding: cardPadding === "0px" ? 0 : cardPadding,
        }}
      >
        {(accentTagLabel || audienceLabel) && (
          <div className="evo-centered-cta__kickerGroup">
            {accentTagLabel && (
              <span
                className="evo-centered-cta__tag"
                style={{
                  "--tag-bg": accentTagBackground || "पारदर्शी",
                  "--tag-color": accentTagColor,
                  border: "none",
                }}
              >
                {accentTagLabel}
              </span>
            )}
            {audienceLabel && (
              <span
                className="evo-centered-cta__audience"
                style={{
                  "--audience-bg": audienceBackground || "पारदर्शी",
                  "--audience-color": audienceColor,
                }}
              >
                {audienceLabel}
              </span>
            )}
          </div>
        )}

        {headline && <h2 className="evo-centered-cta__headline">{headline}</h2>}
        {subtext && <p className="evo-centered-cta__subtext">{subtext}</p>}

        <div className="evo-centered-cta__buttons">
          {displayButtons.map((button) => (
            <a
              key={button.id || `${button.text}-${button.link}`}
              className="evo-centered-cta__button"
              href={button.link || "#"}
              target={button.target || "_खुद"}
              rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
              style={getButtonStyles(button.style)}
            >
              {button.text || "बटन"}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

CenteredCTA.propTypes = {
  id: PropTypes.string,
  headline: PropTypes.string,
  subtext: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
      style: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
      target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
    }),
  ),
  background: PropTypes.string,
  backgroundOverlay: PropTypes.string,
  overlayBlendMode: PropTypes.string,
  overlayOpacity: PropTypes.number,
  textColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  accentTagLabel: PropTypes.string,
  accentTagColor: PropTypes.string,
  accentTagBackground: PropTypes.string,
  accentTagBorder: PropTypes.string,
  audienceLabel: PropTypes.string,
  audienceColor: PropTypes.string,
  audienceBackground: PropTypes.string,
  cardBackground: PropTypes.string,
  cardBorder: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardShadow: PropTypes.string,
  maxWidth: PropTypes.string,
  sectionPadding: PropTypes.string,
  contentGap: PropTypes.string,
  headlineFontSize: PropTypes.string,
  headlineFontWeight: PropTypes.string,
  headlineLetterSpacing: PropTypes.string,
  subtextFontSize: PropTypes.string,
  subtextLineHeight: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  buttonGap: PropTypes.string,
  buttonMinWidth: PropTypes.string,
  buttonPaddingY: PropTypes.string,
  buttonPaddingX: PropTypes.string,
  buttonBorderRadius: PropTypes.string,
  buttonFontSize: PropTypes.string,
  buttonFontWeight: PropTypes.string,
  primaryButtonBg: PropTypes.string,
  primaryButtonColor: PropTypes.string,
  primaryButtonBorder: PropTypes.string,
  secondaryButtonBg: PropTypes.string,
  secondaryButtonColor: PropTypes.string,
  secondaryButtonBorder: PropTypes.string,
  tertiaryButtonBg: PropTypes.string,
  tertiaryButtonColor: PropTypes.string,
  tertiaryButtonBorder: PropTypes.string,
  floatingShapeColor: PropTypes.string,
  floatingShapeSize: PropTypes.string,
  floatingShapeBlur: PropTypes.string,
  floatingShapeOffset: PropTypes.string,
  floatingShapePosition: PropTypes.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"]),
  floatingShapeOpacity: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

export const centeredCTADefaultProps = {
  headline: "Join Our Journey",
  subtext: "Be part of a growing family that values you.",
  buttons: [],
  background: "transparent",
  backgroundOverlay: "",
  overlayBlendMode: "normal",
  overlayOpacity: 0,
  textColor: "#0f172a",
  subtitleColor: "#475569",
  accentTagLabel: "Premium Access",
  accentTagColor: "#0f766e",
  accentTagBackground: "transparent",
  accentTagBorder: "none",
  audienceLabel: "For bold teams",
  audienceColor: "#64748b",
  audienceBackground: "transparent",
  cardBackground: "transparent",
  cardBorder: "none",
  cardBorderRadius: "0px",
  cardPadding: "0px",
  cardShadow: "none",
  maxWidth: "980px",
  sectionPadding: ctaTheme.spacing.section,
  contentGap: "clamp(18px, 3vw, 28px)",
  headlineFontSize: ctaTheme.typography.headline,
  headlineFontWeight: "850",
  headlineLetterSpacing: "-0.04em",
  subtextFontSize: ctaTheme.typography.subtext,
  subtextLineHeight: "1.75",
  textAlign: "center",
  buttonGap: "12px",
  buttonMinWidth: "150px",
  buttonPaddingY: "13px",
  buttonPaddingX: "22px",
  buttonBorderRadius: "999px",
  buttonFontSize: "14px",
  buttonFontWeight: "800",
  primaryButtonBg: "#0f172a",
  primaryButtonColor: "#ffffff",
  primaryButtonBorder: "none",
  secondaryButtonBg: "#f1f5f9",
  secondaryButtonColor: "#0f172a",
  secondaryButtonBorder: "none",
  tertiaryButtonBg: "#0f766e",
  tertiaryButtonColor: "#ffffff",
  tertiaryButtonBorder: "none",
  floatingShapeColor: "transparent",
  floatingShapeSize: "0px",
  floatingShapeBlur: "0px",
  floatingShapeOffset: "0px",
  floatingShapePosition: "top-right",
  floatingShapeOpacity: 0,
  style: {},
  className: "",
};

CenteredCTA.defaultProps = centeredCTADefaultProps;

export default CenteredCTA;