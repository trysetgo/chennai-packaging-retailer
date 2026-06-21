"use client";

import React from "react";
import PropTypes from "prop-types";

const fallbackSteps = [
  {
    id: "step-1",
    title: "Tell us your requirements",
    description: "Share your goals, dimensions, quantities, and timeline.",
  },
  {
    id: "step-2",
    title: "Approve your proposal",
    description: "We prepare a tailored plan and align on scope and pricing.",
  },
  {
    id: "step-3",
    title: "Production and quality checks",
    description: "Your order moves through production with strict QA standards.",
  },
  {
    id: "step-4",
    title: "Delivery to your doorstep",
    description: "Receive your order on time with tracking and support.",
  },
];

const HowItWorksProcessSectionComponent = ({
  id,
  eyebrow = "4 simple steps",
  title = "How It Works",
  subtitle = "A simple process designed for speed and reliability.",
  steps = [],
  columns = 4,
  minCardWidth = "200px",
  gap = "16px",
  showConnector = true,
  showNumbers = true,
  alignment = "center",
  hideConnectorOnMobile = true,
  sectionBackgroundColor = "#f8fafc",
  cardBackgroundColor = "#ffffff",
  cardBorder = "1px solid #e2e8f0",
  cardBorderRadius = "14px",
  cardPadding = "18px",
  cardShadow = "0 14px 32px rgba(15,23,42,0.12)",
  cardHoverScale = 1.04,
  glassmorphism = true,
  connectorColor = "#cbd5e1",
  accentColor = "#6366f1",
  numberBackgroundColor = "#0f172a",
  numberTextColor = "#ffffff",
  numberSize = "32px",
  titleColor = "#0f172a",
  subtitleColor = "#475569",
  stepTitleColor = "#0f172a",
  stepDescriptionColor = "#64748b",
  headingFontSize = "30px",
  headingFontWeight = "700",
  subtitleFontSize = "15px",
  stepTitleFontSize = "16px",
  stepTitleFontWeight = "600",
  stepDescriptionFontSize = "13px",
  containerMaxWidth = "1280px",
  marginTop = "0px",
  marginRight = "0px",
  marginBottom = "0px",
  marginLeft = "0px",
  paddingTop = "40px",
  paddingRight = "16px",
  paddingBottom = "40px",
  paddingLeft = "16px",
  style = {},
  className = "",
}) => {
  const processSteps = Array.isArray(steps) && steps.length > 0 ? steps : fallbackSteps;
  const safeColumns = Math.max(1, Number(columns) || 4);
  const hasMultipleSteps = processSteps.length > 1;

  // Build a simple curved path that connects step centers horizontally.
  const buildConnectorPath = () => {
    const len = processSteps.length;
    if (len < 2) return "";
    const baseY = 60;
    const amp = 18;
    let d = `M 0 ${baseY}`;
    for (let i = 1; i < len; i += 1) {
      const xPrev = ((i - 1) / (len - 1)) * 100;
      const xCurr = (i / (len - 1)) * 100;
      const mid = (xPrev + xCurr) / 2;
      const wobble = ((i % 2) ? amp : -amp);
      d += ` C ${mid}% ${baseY + wobble}, ${mid}% ${baseY - wobble}, ${xCurr}% ${baseY}`;
    }
    return d;
  };

  return (
    <section
      id={id}
      className={className}
      style={{
        backgroundColor: sectionBackgroundColor,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        ...style,
      }}
    >
      <div style={{ maxWidth: containerMaxWidth, margin: "0 auto" }}>
      {title ? (
        <h2
          style={{
            margin: 0,
            color: titleColor,
            fontSize: headingFontSize,
            fontWeight: headingFontWeight,
            lineHeight: 1.2,
            textAlign: alignment,
          }}
        >
          {title}
        </h2>
      ) : null}
        {subtitle ? (
          <p
            style={{
              margin: "8px 0 24px 0",
              color: subtitleColor,
              fontSize: subtitleFontSize,
              textAlign: alignment,
            }}
          >
            {subtitle}
          </p>
        ) : null}
        {eyebrow ? (
          <div
            style={{
              textAlign: alignment,
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 10px",
                borderRadius: "999px",
                background: `${accentColor}12`,
                color: accentColor,
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: accentColor,
                  borderRadius: "999px",
                }}
              />
              {eyebrow}
            </span>
          </div>
        ) : null}

        <div style={{ position: "relative" }}>
          {showConnector && hasMultipleSteps ? (
            <svg
              className="how-it-works-curve"
              viewBox="0 0 100 140"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={buildConnectorPath()}
                fill="none"
                stroke={connectorColor}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              />
            </svg>
          ) : null}

          <div
            style={{
              display: "grid",
              gap,
              gridTemplateColumns: `repeat(${safeColumns}, minmax(min(${minCardWidth}, 100%), 1fr))`,
              "--hiw-gap": gap,
              "--hiw-min": minCardWidth,
              "--hiw-cols": safeColumns,
            }}
            className="how-it-works-grid"
          >
          {processSteps.map((step, index) => (
            <article
              key={step?.id || `process-step-${index}`}
              style={{
                position: "relative",
                backgroundColor: cardBackgroundColor,
                border: cardBorder,
                borderRadius: cardBorderRadius,
                padding: cardPadding,
                minHeight: "100%",
                boxShadow: cardShadow,
                backdropFilter: glassmorphism ? "blur(6px)" : "none",
                transform: "translateZ(0)",
                transition: "transform 180ms ease, box-shadow 180ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `scale(${cardHoverScale || 1.04}) translateZ(0)`;
                e.currentTarget.style.boxShadow = `0 16px 32px ${accentColor}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = cardShadow;
              }}
            >
              {showNumbers ? (
                <div
                  style={{
                    width: numberSize,
                    height: numberSize,
                    borderRadius: "999px",
                    backgroundColor: step?.accentColor || accentColor || numberBackgroundColor,
                    color: numberTextColor,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {index + 1}
                </div>
              ) : null}

              <h3
                style={{
                  margin: 0,
                  color: stepTitleColor,
                  fontSize: stepTitleFontSize,
                  fontWeight: stepTitleFontWeight,
                  lineHeight: 1.3,
                }}
              >
                {step?.title || `Step ${index + 1}`}
              </h3>

              {step?.description ? (
                <p
                  style={{
                    margin: "8px 0 0 0",
                    color: stepDescriptionColor,
                    fontSize: stepDescriptionFontSize,
                    lineHeight: 1.45,
                  }}
                >
                  {step.description}
                </p>
              ) : null}
            </article>
          ))}
          </div>
        </div>
      </div>
      <style>{`
        .how-it-works-grid {
          display: grid;
          gap: var(--hiw-gap, 16px);
          grid-template-columns: repeat(var(--hiw-cols, 3), minmax(min(var(--hiw-min, 200px), 1fr), 1fr));
          position: relative;
          z-index: 2;
        }
        @media (max-width: 1024px) {
          .how-it-works-grid {
            grid-template-columns: repeat(auto-fit, minmax(min(var(--hiw-min, 200px), 1fr), 1fr));
          }
        }
        @media (max-width: 640px) {
          .how-it-works-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }
          ${hideConnectorOnMobile ? ".how-it-works-curve { display: none !important; }" : ""}
        }
        .how-it-works-curve {
          position: absolute;
          top: 12px;
          left: 0;
          right: 0;
          height: 160px;
          width: 100%;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

HowItWorksProcessSectionComponent.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      accentColor: PropTypes.string,
    }),
  ),
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minCardWidth: PropTypes.string,
  gap: PropTypes.string,
  showConnector: PropTypes.bool,
  showNumbers: PropTypes.bool,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  hideConnectorOnMobile: PropTypes.bool,
  sectionBackgroundColor: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardBorder: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardShadow: PropTypes.string,
  cardHoverScale: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glassmorphism: PropTypes.bool,
  accentColor: PropTypes.string,
  connectorColor: PropTypes.string,
  numberBackgroundColor: PropTypes.string,
  numberTextColor: PropTypes.string,
  numberSize: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  stepTitleColor: PropTypes.string,
  stepDescriptionColor: PropTypes.string,
  headingFontSize: PropTypes.string,
  headingFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitleFontSize: PropTypes.string,
  stepTitleFontSize: PropTypes.string,
  stepTitleFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stepDescriptionFontSize: PropTypes.string,
  containerMaxWidth: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export const howItWorksProcessSectionDefaultProps = {
  eyebrow: "4 simple steps",
  title: "How It Works",
  subtitle: "A simple process designed for speed and reliability.",
  steps: [],
  columns: 4,
  minCardWidth: "200px",
  gap: "16px",
  showConnector: true,
  showNumbers: true,
  alignment: "center",
  hideConnectorOnMobile: true,
  sectionBackgroundColor: "#f8fafc",
  cardBackgroundColor: "#ffffff",
  cardBorder: "1px solid #e2e8f0",
  cardBorderRadius: "14px",
  cardPadding: "18px",
  cardShadow: "0 14px 32px rgba(15,23,42,0.12)",
  cardHoverScale: 1.04,
  glassmorphism: true,
  accentColor: "#6366f1",
  connectorColor: "#cbd5e1",
  numberBackgroundColor: "#0f172a",
  numberTextColor: "#ffffff",
  numberSize: "32px",
  titleColor: "#0f172a",
  subtitleColor: "#475569",
  stepTitleColor: "#0f172a",
  stepDescriptionColor: "#64748b",
  headingFontSize: "30px",
  headingFontWeight: "700",
  subtitleFontSize: "15px",
  stepTitleFontSize: "16px",
  stepTitleFontWeight: "600",
  stepDescriptionFontSize: "13px",
  containerMaxWidth: "1280px",
  marginTop: "0px",
  marginRight: "0px",
  marginBottom: "0px",
  marginLeft: "0px",
  paddingTop: "40px",
  paddingRight: "16px",
  paddingBottom: "40px",
  paddingLeft: "16px",
  style: {},
  className: "",
};

HowItWorksProcessSectionComponent.defaultProps = howItWorksProcessSectionDefaultProps;

export default HowItWorksProcessSectionComponent;
