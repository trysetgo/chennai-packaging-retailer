"use client";

import React from "react";
import PropTypes from "prop-types";

export const twoColumnContentDefaultProps = {
  // Content
  eyebrowText: "Premium Capabilities",
  headline: "Crafted for Excellence",
  subheadline: "Empowering modern teams to deliver their best work.",
  description: "Experience a beautifully designed, meticulously engineered platform that helps you scale faster and manage content more intuitively than ever before.",
  richText: "",
  primaryCtaText: "Get Started",
  primaryCtaUrl: "#",
  secondaryCtaText: "Learn More",
  secondaryCtaUrl: "#",

  // Media
  mediaType: "image",
  mediaUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  mediaAltText: "Premium platform overview",
  mediaWidth: "100%",
  mediaHeight: "auto",
  objectFit: "cover",
  mediaBorderRadius: "24px",
  mediaShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

  // Layout
  contentPosition: "left",
  verticalAlignment: "center",
  columnRatio: "50/50",
  sectionMaxWidth: "1280px",

  // Feature List
  enableFeatureList: true,
  featureItems: [
    { id: "1", text: "Lightning fast performance" },
    { id: "2", text: "Enterprise-grade security" },
    { id: "3", text: "Seamless integrations" },
  ],
  featureIconColor: "#4f46e5",

  // Statistics
  enableStatistics: true,
  statisticsArray: [
    { id: "1", label: "Active Users", value: "10k+" },
    { id: "2", label: "Uptime", value: "99.9%" },
  ],

  // Quote Block
  enableQuote: true,
  quoteText: "This platform has completely transformed how our team collaborates and delivers projects globally.",
  authorName: "Sarah Jenkins",
  authorRole: "CTO, TechCorp",

  // Typography
  eyebrowSize: "14px",
  headlineSize: "48px",
  subheadlineSize: "20px",
  descriptionSize: "18px",
  headlineWeight: "800",

  // Colors
  sectionBackground: "#ffffff",
  contentBackground: "transparent",
  eyebrowColor: "#4f46e5",
  headlineColor: "#111827",
  subheadlineColor: "#4b5563",
  descriptionColor: "#6b7280",
  quoteTextColor: "#374151",
  primaryButtonBackground: "#111827",
  primaryButtonTextColor: "#ffffff",
  secondaryButtonBackground: "transparent",
  secondaryButtonTextColor: "#111827",
  secondaryButtonBorderColor: "#d1d5db",

  // Spacing
  paddingTop: "96px",
  paddingBottom: "96px",
  paddingLeft: "24px",
  paddingRight: "24px",
  columnGap: "64px",
  contentGap: "24px",

  // Toggles
  showEyebrow: true,
  showHeadline: true,
  showSubheadline: true,
  showDescription: true,
  showRichText: false,
  showPrimaryCta: true,
  showSecondaryCta: true,
  showMedia: true,
};

const TwoColumnContent = (props) => {
  const p = { ...twoColumnContentDefaultProps, ...props };

  const getColSpan = (position) => {
    if (p.columnRatio === "50/50") return "1fr";
    if (p.columnRatio === "60/40") return position === "content" ? "3fr" : "2fr";
    if (p.columnRatio === "40/60") return position === "content" ? "2fr" : "3fr";
    if (p.columnRatio === "70/30") return position === "content" ? "7fr" : "3fr";
    return "1fr";
  };

  const gridTemplateColumns = p.contentPosition === "left"
    ? `${getColSpan("content")} ${getColSpan("media")}`
    : `${getColSpan("media")} ${getColSpan("content")}`;

  const contentOrderDesktop = p.contentPosition === "left" ? 1 : 2;
  const mediaOrderDesktop = p.contentPosition === "left" ? 2 : 1;

  const handleClick = (e) => {
    if (p.isEditable || p.isPreviewing) {
      e.preventDefault();
    }
  };

  const instanceId = p.id || Math.random().toString(36).substr(2, 9);

  return (
    <section
      style={{
        backgroundColor: p.sectionBackground,
        paddingTop: p.paddingTop,
        paddingBottom: p.paddingBottom,
        paddingLeft: p.paddingLeft,
        paddingRight: p.paddingRight,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          .twocol-grid-${instanceId} {
            display: flex;
            flex-direction: column;
            gap: ${p.columnGap};
          }
          .twocol-content-${instanceId} {
            order: 2;
          }
          .twocol-media-${instanceId} {
            order: 1;
          }
          @media (min-width: 768px) {
            .twocol-grid-${instanceId} {
              display: grid;
              grid-template-columns: ${gridTemplateColumns};
              align-items: ${p.verticalAlignment};
            }
            .twocol-content-${instanceId} {
              order: ${contentOrderDesktop};
            }
            .twocol-media-${instanceId} {
              order: ${mediaOrderDesktop};
            }
          }
        `
      }} />
      <div
        style={{
          maxWidth: p.sectionMaxWidth,
          width: "100%",
        }}
        className={`twocol-grid-${instanceId}`}
      >
        <div
          className={`twocol-content-${instanceId}`}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: p.contentGap,
            backgroundColor: p.contentBackground,
            borderRadius: p.contentBackground !== "transparent" ? "24px" : "0",
            padding: p.contentBackground !== "transparent" ? "40px" : "0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {p.showEyebrow && p.eyebrowText && (
              <span
                style={{
                  color: p.eyebrowColor,
                  fontSize: p.eyebrowSize,
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {p.eyebrowText}
              </span>
            )}
            
            {p.showHeadline && p.headline && (
              <h2
                style={{
                  color: p.headlineColor,
                  fontSize: p.headlineSize,
                  fontWeight: p.headlineWeight,
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {p.headline}
              </h2>
            )}

            {p.showSubheadline && p.subheadline && (
              <h3
                style={{
                  color: p.subheadlineColor,
                  fontSize: p.subheadlineSize,
                  fontWeight: "500",
                  lineHeight: "1.3",
                  margin: 0,
                }}
              >
                {p.subheadline}
              </h3>
            )}
          </div>

          {p.showDescription && p.description && (
            <p
              style={{
                color: p.descriptionColor,
                fontSize: p.descriptionSize,
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {p.description}
            </p>
          )}

          {p.showRichText && p.richText && (
            <div
              dangerouslySetInnerHTML={{ __html: p.richText }}
              style={{
                color: p.descriptionColor,
                fontSize: p.descriptionSize,
                lineHeight: "1.6",
              }}
            />
          )}

          {p.enableFeatureList && p.featureItems && p.featureItems.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
              {p.featureItems.map((item, idx) => (
                <li key={item.id || idx} style={{ display: "flex", alignItems: "center", gap: "12px", color: p.descriptionColor, fontSize: p.descriptionSize }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M20 6L9 17L4 12" stroke={p.featureIconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          )}

          {p.enableQuote && p.quoteText && (
            <div style={{ borderLeft: `4px solid ${p.eyebrowColor}`, paddingLeft: "24px", marginTop: "8px", marginBottom: "8px" }}>
              <p style={{ color: p.quoteTextColor, fontSize: "18px", fontStyle: "italic", lineHeight: "1.6", margin: "0 0 12px 0" }}>
                "{p.quoteText}"
              </p>
              <div>
                <span style={{ display: "block", color: p.headlineColor, fontWeight: "600", fontSize: "15px" }}>{p.authorName}</span>
                <span style={{ display: "block", color: p.descriptionColor, fontSize: "14px" }}>{p.authorRole}</span>
              </div>
            </div>
          )}

          {p.enableStatistics && p.statisticsArray && p.statisticsArray.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "8px", marginBottom: "8px" }}>
              {p.statisticsArray.map((stat, idx) => (
                <div key={stat.id || idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ color: p.headlineColor, fontSize: "40px", fontWeight: "800", lineHeight: "1", letterSpacing: "-0.02em" }}>
                    {stat.value}
                  </span>
                  <span style={{ color: p.subheadlineColor, fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {(p.showPrimaryCta || p.showSecondaryCta) && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
              {p.showPrimaryCta && p.primaryCtaText && (
                <a
                  href={p.primaryCtaUrl}
                  onClick={handleClick}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px 28px",
                    backgroundColor: p.primaryButtonBackground,
                    color: p.primaryButtonTextColor,
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "transform 0.2s ease, opacity 0.2s ease",
                    border: "none",
                    cursor: p.isEditable ? "default" : "pointer",
                  }}
                  onMouseEnter={(e) => !p.isEditable && (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => !p.isEditable && (e.currentTarget.style.opacity = "1")}
                >
                  {p.primaryCtaText}
                </a>
              )}
              {p.showSecondaryCta && p.secondaryCtaText && (
                <a
                  href={p.secondaryCtaUrl}
                  onClick={handleClick}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px 28px",
                    backgroundColor: p.secondaryButtonBackground,
                    color: p.secondaryButtonTextColor,
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "background-color 0.2s ease",
                    border: `1px solid ${p.secondaryButtonBorderColor}`,
                    cursor: p.isEditable ? "default" : "pointer",
                  }}
                  onMouseEnter={(e) => !p.isEditable && (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)")}
                  onMouseLeave={(e) => !p.isEditable && (e.currentTarget.style.backgroundColor = p.secondaryButtonBackground)}
                >
                  {p.secondaryCtaText}
                </a>
              )}
            </div>
          )}
        </div>

        {p.showMedia && (
          <div
            className={`twocol-media-${instanceId}`}
            style={{
              width: p.mediaWidth,
              display: "flex",
              justifyContent: "center",
              alignItems: p.verticalAlignment,
            }}
          >
            {p.mediaType === "image" ? (
              <img
                src={p.mediaUrl}
                alt={p.mediaAltText}
                loading="lazy"
                style={{
                  width: "100%",
                  height: p.mediaHeight,
                  objectFit: p.objectFit,
                  borderRadius: p.mediaBorderRadius,
                  boxShadow: p.mediaShadow,
                  display: "block",
                }}
              />
            ) : (
              <video
                src={p.mediaUrl}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: p.mediaHeight,
                  objectFit: p.objectFit,
                  borderRadius: p.mediaBorderRadius,
                  boxShadow: p.mediaShadow,
                  display: "block",
                }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

TwoColumnContent.propTypes = {
  eyebrowText: PropTypes.string,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  description: PropTypes.string,
  richText: PropTypes.string,
  primaryCtaText: PropTypes.string,
  primaryCtaUrl: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaUrl: PropTypes.string,

  mediaType: PropTypes.oneOf(["image", "video"]),
  mediaUrl: PropTypes.string,
  mediaAltText: PropTypes.string,
  mediaWidth: PropTypes.string,
  mediaHeight: PropTypes.string,
  objectFit: PropTypes.string,
  mediaBorderRadius: PropTypes.string,
  mediaShadow: PropTypes.string,

  contentPosition: PropTypes.oneOf(["left", "right"]),
  verticalAlignment: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  columnRatio: PropTypes.oneOf(["50/50", "60/40", "40/60", "70/30"]),
  sectionMaxWidth: PropTypes.string,

  enableFeatureList: PropTypes.bool,
  featureItems: PropTypes.array,
  featureIconColor: PropTypes.string,

  enableStatistics: PropTypes.bool,
  statisticsArray: PropTypes.array,

  enableQuote: PropTypes.bool,
  quoteText: PropTypes.string,
  authorName: PropTypes.string,
  authorRole: PropTypes.string,

  eyebrowSize: PropTypes.string,
  headlineSize: PropTypes.string,
  subheadlineSize: PropTypes.string,
  descriptionSize: PropTypes.string,
  headlineWeight: PropTypes.string,

  sectionBackground: PropTypes.string,
  contentBackground: PropTypes.string,
  eyebrowColor: PropTypes.string,
  headlineColor: PropTypes.string,
  subheadlineColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  quoteTextColor: PropTypes.string,
  primaryButtonBackground: PropTypes.string,
  primaryButtonTextColor: PropTypes.string,
  secondaryButtonBackground: PropTypes.string,
  secondaryButtonTextColor: PropTypes.string,
  secondaryButtonBorderColor: PropTypes.string,

  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  columnGap: PropTypes.string,
  contentGap: PropTypes.string,

  showEyebrow: PropTypes.bool,
  showHeadline: PropTypes.bool,
  showSubheadline: PropTypes.bool,
  showDescription: PropTypes.bool,
  showRichText: PropTypes.bool,
  showPrimaryCta: PropTypes.bool,
  showSecondaryCta: PropTypes.bool,
  showMedia: PropTypes.bool,

  isEditable: PropTypes.bool,
  isPreviewing: PropTypes.bool,
  id: PropTypes.string,
};

export default TwoColumnContent;