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
              style={{
                position: "relative",
                background: cardBackground,
                borderRadius: cardRadius,
                border: `1px solid ${borderColor}`,
                boxShadow: cardShadow,
                padding: "18px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                gridTemplateAreas:
                  (step.imagePosition || "right") === "left" ? '"media text"' : '"text media"',
                alignItems: "center",
                minHeight: step.cardHeight || cardHeight,
                width: step.cardWidth || cardWidth,
                minWidth: step.cardWidth || cardWidth,
                scrollSnapAlign: sliderMode ? "start" : "initial",
              }}
            >
              <div style={{ position: "absolute", top: "14px", left: "14px" }}>
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

              <div style={{ paddingLeft: "4px", gridArea: (step.imagePosition || "right") === "left" ? "text" : "text" }}>
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    color: "#111827",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {step.title || `Step ${index + 1}`}
                </h3>
                {step.description ? (
                  <p
                    style={{
                      margin: 0,
                      color: "#4b5563",
                      fontSize: "13px",
                      lineHeight: 1.5,
                    }}
                  >
                    {step.description}
                  </p>
                ) : null}
              </div>

              <div style={{ textAlign: (step.imagePosition || "right") === "left" ? "left" : "right", gridArea: "media" }}>
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
                      marginLeft: "auto",
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
        @media (max-width: 1024px) {
          .ihiw-grid {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)) !important;
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
  className: PropTypes.string,
  style: PropTypes.object,
};

IllustratedHowItWorks.defaultProps = illustratedHowItWorksDefaultProps;

export default IllustratedHowItWorks;
