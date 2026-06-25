"use client";

import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const illustratedHowItWorksDefaultProps = {
  heading: "How It Works",
  subheading: "Seamless collaboration with clear, transparent steps.",
  background: "#f6f7fb",
  cardBackground: "#ffffff",
  accentColor: "#7c5dfa",
  badgeBackground: "rgba(124,93,250,0.12)",
  badgeTextColor: "#7c5dfa",
  borderColor: "rgba(124,93,250,0.18)",
  cardRadius: "18px",
  cardShadow: "0 18px 36px rgba(15,23,42,0.12)",
  gap: "18px",
  columns: 2,
  cardWidth: "520px",
  cardHeight: "220px",
  sliderMode: false,
  slideGap: "18px",
  maxWidth: "1180px",
  steps: [
    {
      id: "step-1",
      title: "Create a Project",
      description: "Enter innovation’s realm with our visionary project.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=640",
      imageAlt: "Person working on a project on a laptop",
      imagePosition: "right",
      imageWidth: "160px",
      imageHeight: "120px",
    },
    {
      id: "step-2",
      title: "Invite Transactional Members",
      description: "Exclusive invitations await, sparking collaboration.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=640",
      imageAlt: "Two people shaking hands",
      imagePosition: "right",
      imageWidth: "160px",
      imageHeight: "120px",
    },
    {
      id: "step-3",
      title: "Begin Collaborating",
      description: "Unite for a journey of teamwork and innovation.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640",
      imageAlt: "Team collaborating around a table",
      imagePosition: "left",
      imageWidth: "140px",
      imageHeight: "110px",
    },
    {
      id: "step-4",
      title: "Close Deals",
      description: "Seal the path to success as deals unfold seamlessly.",
      image: "https://images.unsplash.com/photo-1521737604893-ffb90e06a0f3?w=640",
      imageAlt: "People high-fiving after a successful deal",
      imagePosition: "right",
      imageWidth: "170px",
      imageHeight: "130px",
    },
  ],
  titleColor: "#111827",
  titleFontSize: "16px",
  descriptionColor: "#4b5563",
  descriptionFontSize: "13px",
  className: "",
  style: {},
};

const IllustratedHowItWorks = ({
  id,
  heading,
  subheading,
  background,
  cardBackground,
  accentColor,
  badgeBackground,
  badgeTextColor,
  borderColor,
  cardRadius,
  cardShadow,
  gap,
  columns,
  cardWidth,
  cardHeight,
  sliderMode,
  slideGap,
  maxWidth,
  steps,
  titleColor,
  titleFontSize,
  descriptionColor,
  descriptionFontSize,
  className,
  style,
}) => {
  const safeSteps = Array.isArray(steps) ? steps.slice(0, 6) : [];
  const columnCount = Math.max(1, Number(columns) || 2);
  const sliderRef = useRef(null);
  const headingId = heading ? `ihiw-heading-${id || "default"}` : undefined;
  const toPx = (v, fallback = 0) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : fallback;
  };

  const scrollByCard = (dir = 1) => {
    const node = sliderRef.current;
    if (!node) return;
    const delta = (toPx(cardWidth, 320) + toPx(slideGap, 16)) * dir;
    node.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      id={id}
      className={classNames("illustrated-how-it-works", className)}
      style={{ background, padding: "32px 18px", ...style }}
    >
      <div style={{ maxWidth, margin: "0 auto" }}>
        {(heading || subheading) && (
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            {heading ? (
              <h2
                style={{
                  margin: 0,
                  color: "#0f172a",
                  fontSize: "32px",
                  fontWeight: 800,
                  lineHeight: 1.2,
                }}
              >
                {heading}
              </h2>
            ) : null}
            {subheading ? (
              <p
                style={{
                  margin: "10px 0 0 0",
                  color: "#475569",
                  fontSize: "15px",
                }}
              >
                {subheading}
              </p>
            ) : null}
          </div>
        )}

        <div
          className={classNames("ihiw-grid", { "ihiw-slider": sliderMode })}
          style={
            sliderMode
              ? {
                  display: "flex",
                  gap: slideGap,
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  paddingBottom: "6px",
                }
              : {
                  display: "grid",
                  gap,
                  gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                }
          }
          ref={sliderMode ? sliderRef : undefined}
        >
          {safeSteps.map((step, index) => (
            <article
              key={step.id || `ihiw-${index}`}
              className={classNames("ihiw-card", { "ihiw-slide": sliderMode })}
              style={{
                position: "relative",
                background: cardBackground,
                borderRadius: cardRadius,
                border: `1px solid ${borderColor}`,
                boxShadow: cardShadow,
                padding: "18px",
                alignItems: "center",
                scrollSnapAlign: sliderMode ? "start" : "initial",
                "--card-min-height": step.cardHeight || cardHeight,
                "--card-width": step.cardWidth || cardWidth,
                "--card-grid-areas": (step.imagePosition || "right") === "left" ? '"media text"' : '"text media"',
                "--card-media-align": (step.imagePosition || "right") === "left" ? "left" : "right",
              }}
            >
              <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 10 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "999px",
                    background: badgeBackground,
                    color: badgeTextColor,
                    fontWeight: 700,
                    fontSize: "13px",
                  }}
                >
                  {index + 1}
                </span>
              </div>

              <div className="ihiw-card-text" style={{ paddingLeft: "4px", gridArea: "text" }}>
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    color: titleColor || "#111827",
                    fontSize: titleFontSize || "16px",
                    fontWeight: 700,
                  }}
                >
                  {step.title || `Step ${index + 1}`}
                </h3>
                {step.description ? (
                  <p
                    style={{
                      margin: 0,
                      color: descriptionColor || "#4b5563",
                      fontSize: descriptionFontSize || "13px",
                      lineHeight: 1.5,
                    }}
                  >
                    {step.description}
                  </p>
                ) : null}
              </div>

              <div className="ihiw-card-media" style={{ gridArea: "media" }}>
                {step.image ? (
                  <img
                    src={step.image}
                    alt={step.title || "Step illustration"}
                    style={{
                      width: step.imageWidth || "160px",
                      height: step.imageHeight || "auto",
                      maxWidth: "100%",
                      maxHeight: "160px",
                      borderRadius: "14px",
                      objectFit: "cover",
                      boxShadow: `0 10px 24px ${accentColor}1f`,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "140px",
                      height: "96px",
                      borderRadius: "12px",
                      background: `${accentColor}12`,
                      border: `1px dashed ${accentColor}66`,
                      marginLeft: (step.imagePosition || "right") === "left" ? "0" : "auto",
                      marginRight: (step.imagePosition || "right") === "left" ? "auto" : "0",
                    }}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
        {sliderMode ? (
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            >
              ‹ Prev
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            >
              Next ›
            </button>
          </div>
        ) : null}
      </div>

      <style>{`
        .ihiw-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          grid-template-areas: var(--card-grid-areas);
          min-height: var(--card-min-height);
          width: 100%;
        }
        .ihiw-slide {
          width: var(--card-width) !important;
          min-width: var(--card-width) !important;
        }
        .ihiw-card-media {
          text-align: var(--card-media-align);
        }
        @media (max-width: 1024px) {
          .ihiw-grid:not(.ihiw-slider) {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)) !important;
          }
          .ihiw-slide {
            width: min(85vw, var(--card-width)) !important;
            min-width: min(85vw, var(--card-width)) !important;
          }
        }
        @media (max-width: 640px) {
          .ihiw-card {
            grid-template-columns: 1fr !important;
            grid-template-areas: "media" "text" !important;
            padding: 32px 16px 24px 16px !important;
          }
          .ihiw-card-media {
            text-align: center !important;
            display: flex;
            justify-content: center;
          }
          .ihiw-card-media > div {
             margin: 0 auto !important;
          }
          .ihiw-card-text {
            text-align: center !important;
            padding-left: 0 !important;
            margin-top: 8px;
          }
        }
        .ihiw-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .ihiw-hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

IllustratedHowItWorks.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  background: PropTypes.string,
  cardBackground: PropTypes.string,
  accentColor: PropTypes.string,
  badgeBackground: PropTypes.string,
  badgeTextColor: PropTypes.string,
  borderColor: PropTypes.string,
  cardRadius: PropTypes.string,
  cardShadow: PropTypes.string,
  gap: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  sliderMode: PropTypes.bool,
  slideGap: PropTypes.string,
  maxWidth: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      imageAlt: PropTypes.string,
      imagePosition: PropTypes.oneOf(["left", "right"]),
      imageWidth: PropTypes.string,
      imageHeight: PropTypes.string,
      cardWidth: PropTypes.string,
      cardHeight: PropTypes.string,
    }),
  ),
  titleColor: PropTypes.string,
  titleFontSize: PropTypes.string,
  descriptionColor: PropTypes.string,
  descriptionFontSize: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

IllustratedHowItWorks.defaultProps = illustratedHowItWorksDefaultProps;

export default IllustratedHowItWorks;
