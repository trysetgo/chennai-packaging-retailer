"use client";

import React from "react";
import PropTypes from "prop-types";
import { ArrowRight, Check } from "lucide-react";

const IconRenderer = ({ icon, className = "", style = {} }) => {
  if (!icon) return null;

  if (
    typeof icon === "string" &&
    (icon.startsWith("http") ||
      icon.startsWith("/") ||
      icon.startsWith("data:image"))
  ) {
    return (
      <img
        src={icon}
        alt="icon"
        className={`card-icon ${className}`}
        style={{
          ...style,
          width: "1.2em",
          height: "1.2em",
          objectFit: "contain",
        }}
      />
    );
  }

  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: `card-icon ${className}`,
      style,
    });
  }

  return (
    <span className={`card-icon ${className}`} style={style}>
      {icon}
    </span>
  );
};

IconRenderer.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const normalizePoints = (points, bodyText) => {
  if (Array.isArray(points)) return points.filter(Boolean);
  if (typeof points === "string" && points.trim()) {
    return points
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return bodyText
    ? []
    : [
        "Add feature bullet",
        "Highlight a value point",
        "Use this card for premium content blocks",
      ];
};

const CardComponent = ({
  headerText,
  bodyText,
  headerIconName,
  footerText,
  headerIcon,
  bodyIcon,
  footerIcon,
  headerTextColor,
  headerFontSize,
  headerFontWeight,
  headerBackgroundColor,
  bodyFontSize,
  bodyFontWeight,
  footerTextColor,
  footerFontSize,
  footerFontWeight,
  footerBackgroundColor,
  backgroundColor,
  textColor,
  padding,
  border,
  borderRadius,
  boxShadow,
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  style = {},
  variant = "feature",
  eyebrowText = "Spotlight",
  badgeText = "Featured",
  showBadge = true,
  accentColor = "#ec4899",
  secondaryAccentColor = "#6366f1",
  showImage = true,
  imageUrl = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Card visual",
  imagePosition = "top",
  imageHeight = "220px",
  imageBorderRadius = "20px",
  imageObjectFit = "cover",
  showCTA = true,
  ctaText = "Explore more",
  ctaHref = "#",
  ctaBackground = "#0f172a",
  ctaTextColor = "#ffffff",
  ctaBorderRadius = "999px",
  statValue = "24/7",
  statLabel = "availability",
  showStat = true,
  showPoints = false,
  points = [],
  contentAlign = "left",
  contentGap = "18px",
}) => {
  const iconRegistry = globalThis?.Icons || {};
  const HeaderIconComponent =
    headerIconName && typeof headerIconName === "string"
      ? iconRegistry[headerIconName]
      : null;
  const safePoints = normalizePoints(points, bodyText);
  const showMedia = showImage && imageUrl;
  const isImageBottom = imagePosition === "bottom";
  const isOverlay = imagePosition === "background";

  const cardStyle = {
    background: backgroundColor || "#ffffff",
    color: textColor || "#333333",
    padding: padding || "22px",
    border: border || "1px solid #ddd",
    borderRadius: borderRadius || "18px",
    boxShadow: boxShadow || "0 12px 34px rgba(0,0,0,0.1)",
    width: width || "100%",
    height: height || "auto",
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    display: "flex",
    flexDirection: "column",
    gap: contentGap || "18px",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    textAlign: contentAlign || "left",
    ...style,
  };

  const mediaNode = showMedia ? (
    <div
      style={{
        position: isOverlay ? "absolute" : "relative",
        inset: isOverlay ? 0 : "auto",
        height: isOverlay ? "100%" : imageHeight || "220px",
        minHeight: isOverlay ? "100%" : imageHeight || "220px",
        borderRadius: isOverlay ? "inherit" : imageBorderRadius || "20px",
        overflow: "hidden",
        zIndex: isOverlay ? 0 : 1,
      }}
    >
      <img
        src={imageUrl}
        alt={imageAlt || headerText || "Card image"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: imageObjectFit || "cover",
          display: "block",
        }}
      />
      {isOverlay ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.18) 0%, rgba(15,23,42,0.82) 100%)",
          }}
        />
      ) : null}
    </div>
  ) : null;

  return (
    <article style={cardStyle}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-40px",
          right: "-30px",
          width: "160px",
          height: "160px",
          borderRadius: "999px",
          background: `radial-gradient(circle, ${accentColor}22 0%, transparent 72%)`,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-30px",
          width: "170px",
          height: "170px",
          borderRadius: "999px",
          background: `radial-gradient(circle, ${secondaryAccentColor}20 0%, transparent 72%)`,
          pointerEvents: "none",
        }}
      />

      {!isImageBottom && !isOverlay ? mediaNode : null}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: contentGap || "18px",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {HeaderIconComponent || headerIcon ? (
              <span
                style={{
                  display: "inline-flex",
                  width: "38px",
                  height: "38px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "999px",
                  background: `${accentColor}14`,
                  color: accentColor,
                }}
              >
                <IconRenderer icon={HeaderIconComponent || headerIcon} />
              </span>
            ) : null}
            {eyebrowText ? (
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isOverlay ? "#fdf2f8" : accentColor,
                }}
              >
                {eyebrowText}
              </span>
            ) : null}
          </div>
          {showBadge && badgeText ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 12px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                background: isOverlay
                  ? "rgba(255,255,255,0.16)"
                  : `${accentColor}12`,
                color: isOverlay ? "#ffffff" : accentColor,
                border: isOverlay
                  ? "1px solid rgba(255,255,255,0.14)"
                  : `1px solid ${accentColor}22`,
              }}
            >
              {badgeText}
            </span>
          ) : null}
        </div>

        {headerText ? (
          <div
            style={{
              color: isOverlay ? "#ffffff" : headerTextColor || textColor,
              fontSize: headerFontSize || "1.8rem",
              fontWeight: headerFontWeight || "700",
              background: headerBackgroundColor || "transparent",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {headerText}
          </div>
        ) : null}

        {bodyText ? (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              color: isOverlay ? "rgba(255,255,255,0.9)" : textColor,
              fontSize: bodyFontSize || "1rem",
              fontWeight: bodyFontWeight || "400",
              lineHeight: 1.7,
            }}
          >
            {bodyIcon ? (
              <IconRenderer icon={bodyIcon} style={{ marginTop: "0.15em" }} />
            ) : null}
            <span>{bodyText}</span>
          </div>
        ) : null}

        {showPoints && safePoints.length ? (
          <div style={{ display: "grid", gap: "10px" }}>
            {safePoints.map((point, index) => (
              <div
                key={`${point}-${index}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: isOverlay ? "#ffffff" : textColor,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    width: "24px",
                    height: "24px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "999px",
                    background: isOverlay
                      ? "rgba(255,255,255,0.16)"
                      : "#ecfdf5",
                    color: isOverlay ? "#ffffff" : "#059669",
                    flexShrink: 0,
                  }}
                >
                  <Check size={14} />
                </span>
                <span
                  style={{ fontSize: bodyFontSize || "1rem", lineHeight: 1.6 }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        {showStat || footerText || showCTA ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px",
              flexWrap: "wrap",
              paddingTop: variant === "minimal" ? "0" : "6px",
              borderTop:
                footerText || showStat
                  ? isOverlay
                    ? "1px solid rgba(255,255,255,0.14)"
                    : "1px solid rgba(226,232,240,0.85)"
                  : "none",
              marginTop: footerText || showStat ? "4px" : "0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {showStat ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: isOverlay ? "#ffffff" : "#0f172a",
                    }}
                  >
                    {statValue}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: isOverlay ? "rgba(255,255,255,0.76)" : "#64748b",
                    }}
                  >
                    {statLabel}
                  </span>
                </div>
              ) : null}
              {footerText ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: isOverlay
                      ? "rgba(255,255,255,0.82)"
                      : footerTextColor || "#666",
                    fontSize: footerFontSize || "0.92rem",
                    fontWeight: footerFontWeight || "500",
                    background: footerBackgroundColor || "transparent",
                  }}
                >
                  {footerIcon ? <IconRenderer icon={footerIcon} /> : null}
                  <span>{footerText}</span>
                </div>
              ) : null}
            </div>

            {showCTA && ctaText ? (
              <a
                href={ctaHref || "#"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 16px",
                  borderRadius: ctaBorderRadius || "999px",
                  background: ctaBackground || "#0f172a",
                  color: ctaTextColor || "#ffffff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              >
                {ctaText}
                <ArrowRight size={16} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {isImageBottom && !isOverlay ? mediaNode : null}
    </article>
  );
};

CardComponent.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  footerText: PropTypes.string,
  headerIconName: PropTypes.string,
  headerIcon: PropTypes.node,
  bodyIcon: PropTypes.node,
  footerIcon: PropTypes.node,
  headerTextColor: PropTypes.string,
  headerFontSize: PropTypes.string,
  headerFontWeight: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  bodyFontSize: PropTypes.string,
  bodyFontWeight: PropTypes.string,
  footerTextColor: PropTypes.string,
  footerFontSize: PropTypes.string,
  footerFontWeight: PropTypes.string,
  footerBackgroundColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(["feature", "minimal", "overlay"]),
  eyebrowText: PropTypes.string,
  badgeText: PropTypes.string,
  showBadge: PropTypes.bool,
  accentColor: PropTypes.string,
  secondaryAccentColor: PropTypes.string,
  showImage: PropTypes.bool,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePosition: PropTypes.oneOf(["top", "bottom", "background"]),
  imageHeight: PropTypes.string,
  imageBorderRadius: PropTypes.string,
  imageObjectFit: PropTypes.oneOf([
    "cover",
    "contain",
    "fill",
    "scale-down",
    "none",
  ]),
  showCTA: PropTypes.bool,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  ctaBackground: PropTypes.string,
  ctaTextColor: PropTypes.string,
  ctaBorderRadius: PropTypes.string,
  statValue: PropTypes.string,
  statLabel: PropTypes.string,
  showStat: PropTypes.bool,
  showPoints: PropTypes.bool,
  points: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  contentAlign: PropTypes.oneOf(["left", "center"]),
  contentGap: PropTypes.string,
};

export const cardComponentDefaultProps = {
  headerText: "Premium Card Title",
  bodyText:
    "Use this card for concise highlights, feature previews, richer storytelling, and action-oriented callout sections.",
  footerText: "Updated for modern product sections",
  headerIconName: "",
  headerIcon: "",
  bodyIcon: "",
  footerIcon: "",
  headerTextColor: "#0f172a",
  headerFontSize: "2rem",
  headerFontWeight: "800",
  headerBackgroundColor: "transparent",
  bodyFontSize: "1rem",
  bodyFontWeight: "400",
  footerTextColor: "#475569",
  footerFontSize: "0.9rem",
  footerFontWeight: "500",
  footerBackgroundColor: "transparent",
  backgroundColor:
    "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.92) 100%)",
  textColor: "#1e293b",
  padding: "22px",
  border: "1px solid rgba(226,232,240,0.92)",
  borderRadius: "22px",
  boxShadow: "0 18px 42px rgba(15, 23, 42, 0.08)",
  width: "100%",
  height: "auto",
  marginTop: "0px",
  marginBottom: "0px",
  marginLeft: "0px",
  marginRight: "0px",
  style: {},
  variant: "feature",
  eyebrowText: "Spotlight",
  badgeText: "Featured",
  showBadge: true,
  accentColor: "#ec4899",
  secondaryAccentColor: "#6366f1",
  showImage: true,
  imageUrl:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Card visual",
  imagePosition: "top",
  imageHeight: "220px",
  imageBorderRadius: "20px",
  imageObjectFit: "cover",
  showCTA: true,
  ctaText: "Explore more",
  ctaHref: "#",
  ctaBackground: "#0f172a",
  ctaTextColor: "#ffffff",
  ctaBorderRadius: "999px",
  statValue: "24/7",
  statLabel: "availability",
  showStat: true,
  showPoints: false,
  points: [],
  contentAlign: "left",
  contentGap: "18px",
};

CardComponent.defaultProps = cardComponentDefaultProps;

export default CardComponent;
