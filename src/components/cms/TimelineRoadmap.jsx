"use client";

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_ITEMS = [
  {
    id: "discover",
    eyebrow: "Phase 01",
    title: "Discovery",
    date: "Week 1",
    status: "done",
    icon: "01",
    imageUrl: "",
    description:
      "Align on goals, audience needs, constraints, and the core outcomes this work should create.",
    bullets: ["Stakeholder interviews", "Success metrics", "Initial scope"],
    ctaText: "",
    ctaHref: "#",
  },
  {
    id: "design",
    eyebrow: "Phase 02",
    title: "Design Direction",
    date: "Weeks 2-3",
    status: "active",
    icon: "02",
    imageUrl: "",
    description:
      "Turn the strategy into flows, content structure, and visual direction ready for feedback.",
    bullets: ["Wireframes", "Visual system", "Content model"],
    ctaText: "Review",
    ctaHref: "#",
  },
  {
    id: "build",
    eyebrow: "Phase 03",
    title: "Build & Integrate",
    date: "Weeks 4-6",
    status: "planned",
    icon: "03",
    imageUrl: "",
    description:
      "Develop the experience, connect data and services, and prepare it for real users.",
    bullets: ["Frontend build", "CMS/API setup", "QA pass"],
    ctaText: "",
    ctaHref: "#",
  },
  {
    id: "launch",
    eyebrow: "Phase 04",
    title: "Launch",
    date: "Week 7",
    status: "planned",
    icon: "04",
    imageUrl: "",
    description:
      "Ship the finished work, monitor early usage, and refine based on live feedback.",
    bullets: ["Production release", "Analytics review", "Iteration plan"],
    ctaText: "",
    ctaHref: "#",
  },
];

export const timelineRoadmapDefaultProps = {
  eyebrow: "Timeline / Roadmap",
  title: "A clear path from idea to launch",
  subtitle:
    "Map project phases, product milestones, application steps, or strategic priorities in one editable timeline.",
  showHeader: true,
  items: DEFAULT_ITEMS,
  layout: "alternating",
  markerStyle: "number",
  showDates: true,
  showStatus: true,
  showConnectors: true,
  showBullets: true,
  showCtas: true,
  showItemImages: false,
  visualStyle: "premium",
  cardStyle: "elevated",
  markerShape: "circle",
  connectorStyle: "solid",
  headerAlign: "left",
  timelinePosition: "center",
  enableHoverLift: true,
  sectionBackground: "#ffffff",
  surfaceBackground: "#ffffff",
  cardBackground: "#ffffff",
  alternateCardBackground: "#f7fbfa",
  textColor: "#111827",
  mutedTextColor: "#5b6472",
  accentColor: "#0f9f8f",
  activeColor: "#dc2626",
  doneColor: "#16a34a",
  plannedColor: "#9ca3af",
  connectorColor: "#c8d6d2",
  borderColor: "#d8e3df",
  badgeBackground: "#e7f8f5",
  badgeTextColor: "#0f766e",
  markerBackground: "#ffffff",
  ctaBackground: "#0f9f8f",
  ctaTextColor: "#ffffff",
  width: "100%",
  maxWidth: "1100px",
  headerMaxWidth: "760px",
  padding: "44px 16px",
  gap: "20px",
  cardPadding: "20px",
  cardRadius: "8px",
  markerSize: "42px",
  connectorWidth: "3px",
  boxShadow: "0 16px 34px rgba(17, 24, 39, 0.08)",
  fontSize: "14px",
  titleFontSize: "2rem",
  itemTitleFontSize: "1.25em",
  mobileBreakpoint: "760px",
  style: {},
  className: "",
};

const STATUS_LABELS = {
  done: "Done",
  active: "In progress",
  planned: "Planned",
};

const getStatusColor = (status, props) => {
  if (status === "done") return props.doneColor;
  if (status === "active") return props.activeColor;
  return props.plannedColor;
};

const getVisualTreatment = (props) => {
  if (props.visualStyle === "dark") {
    return {
      sectionBackground: props.sectionBackground || "#07111f",
      surfaceBackground: props.surfaceBackground || "#0f172a",
      cardBackground: props.cardBackground || "#111827",
      alternateCardBackground: props.alternateCardBackground || "#0f172a",
      textColor: props.textColor || "#f8fafc",
      mutedTextColor: props.mutedTextColor || "#cbd5e1",
      borderColor: props.borderColor || "आरजीबीए(148, 163, 184, 0.28)",
      connectorColor: props.connectorColor || "आरजीबीए(45, 212, 191, 0.35)",
    };
  }

  if (props.visualStyle === "soft") {
    return {
      sectionBackground: props.sectionBackground || "#f8fafc",
      surfaceBackground: props.surfaceBackground || "#ffffff",
      cardBackground: props.cardBackground || "#ffffff",
      alternateCardBackground: props.alternateCardBackground || "#f0fdfa",
      textColor: props.textColor || "#0f172a",
      mutedTextColor: props.mutedTextColor || "#475569",
      borderColor: props.borderColor || "#dbe7e4",
      connectorColor: props.connectorColor || "#b8d8d2",
    };
  }

  return {
    sectionBackground: props.sectionBackground,
    surfaceBackground: props.surfaceBackground,
    cardBackground: props.cardBackground,
    alternateCardBackground: props.alternateCardBackground,
    textColor: props.textColor,
    mutedTextColor: props.mutedTextColor,
    borderColor: props.borderColor,
    connectorColor: props.connectorColor,
  };
};

const parseSize = (value, fallback) => {
  const parsed = Number.parseInt(String(value || ""), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const TimelineRoadmapComponent = (incomingProps = {}) => {
  const props = { ...timelineRoadmapDefaultProps, ...incomingProps };
  const {
    eyebrow,
    title,
    subtitle,
    showHeader,
    items,
    layout,
    markerStyle,
    showDates,
    showStatus,
    showConnectors,
    showBullets,
    showCtas,
    showItemImages,
    visualStyle,
    cardStyle,
    markerShape,
    connectorStyle,
    headerAlign,
    timelinePosition,
    enableHoverLift,
    sectionBackground,
    surfaceBackground,
    cardBackground,
    alternateCardBackground,
    textColor,
    mutedTextColor,
    accentColor,
    connectorColor,
    borderColor,
    badgeBackground,
    badgeTextColor,
    markerBackground,
    ctaBackground,
    ctaTextColor,
    width,
    maxWidth,
    headerMaxWidth,
    padding,
    gap,
    cardPadding,
    cardRadius,
    markerSize,
    connectorWidth,
    boxShadow,
    fontSize,
    titleFontSize,
    itemTitleFontSize,
    mobileBreakpoint,
    style,
    className,
  } = props;

  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (typeof window.matchMedia !== "function") return undefined;
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint || "760px"})`);
    const sync = (event) =>
      setIsMobileViewport(Boolean(event?.matches ?? mediaQuery.matches));
    sync();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", sync);
      return () => mediaQuery.removeEventListener("change", sync);
    }
    mediaQuery.addListener(sync);
    return () => mediaQuery.removeListener(sync);
  }, [mobileBreakpoint]);

  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const isHorizontal = layout === "horizontal" && !isMobileViewport;
  const isAlternating = layout === "alternating" && !isMobileViewport;
  const markerSizePx = Math.max(28, parseSize(markerSize, 42));
  const connectorWidthPx = Math.max(1, parseSize(connectorWidth, 3));
  const treatment = getVisualTreatment({
    visualStyle,
    sectionBackground,
    surfaceBackground,
    cardBackground,
    alternateCardBackground,
    textColor,
    mutedTextColor,
    borderColor,
    connectorColor,
  });

  const sectionStyle = {
    width,
    background: treatment.sectionBackground,
    color: treatment.textColor,
    padding,
    fontSize,
    boxSizing: "border-box",
    ...style,
  };

  const innerStyle = {
    maxWidth,
    margin: "0 auto",
  };

  const renderMarkerContent = (item, index) => {
    if (item.icon) return item.icon;
    if (markerStyle === "status") {
      if (item.status === "done") return "✓";
      if (item.status === "active") return "NOW";
      return `${index + 1}`;
    }
    if (markerStyle === "dot") return "";
    return String(index + 1).padStart(2, "0");
  };

  const renderCard = (item, index) => {
    const status = item.status || "की योजना बनाई";
    const statusColor = getStatusColor(status, props);
    const bullets = Array.isArray(item.bullets) ? item.bullets : [];
    const isHovered = hoveredItemId === (item.id || index);
    const useGlass = cardStyle === "glass";
    const isMinimal = cardStyle === "minimal";

    return (
      <article
        onMouseEnter={() => setHoveredItemId(item.id || index)}
        onMouseLeave={() => setHoveredItemId(null)}
        style={{
          background: useGlass
            ? `linear-gradient(145deg, ${index % 2 ? treatment.alternateCardBackground : treatment.cardBackground}ee, ${treatment.surfaceBackground}cc)`
            : index % 2
              ? treatment.alternateCardBackground
              : treatment.cardBackground,
          border: isMinimal ? `1px solid transparent` : `1px solid ${treatment.borderColor}`,
          borderRadius: cardRadius,
          boxShadow: isMinimal ? "none" : boxShadow,
          padding: cardPadding,
          minHeight: "100%",
          position: "relative",
          overflow: "hidden",
          transform: enableHoverLift && isHovered ? "translateY(-4px)" : "translateY(0)",
          transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
          backdropFilter: useGlass ? "blur(14px)" : undefined,
        }}
      >
        {visualStyle === "premium" ? (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              width: "4px",
              background: `linear-gradient(180deg, ${statusColor}, ${accentColor})`,
            }}
          />
        ) : null}

        {showItemImages && item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt=""
            style={{
              width: "100%",
              height: "140px",
              objectFit: "cover",
              borderRadius: `calc(${cardRadius} - 2px)`,
              marginBottom: "14px",
              display: "block",
            }}
          />
        ) : null}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "10px",
          }}
        >
          {item.eyebrow ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "999px",
                padding: "5px 9px",
                background: badgeBackground,
                color: badgeTextColor,
                fontSize: "0.78em",
                fontWeight: 800,
                letterSpacing: 0,
                textTransform: "uppercase",
              }}
            >
              {item.eyebrow}
            </span>
          ) : null}
          {showStatus ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: statusColor,
                fontSize: "0.82em",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background: statusColor,
                }}
              />
              {STATUS_LABELS[status] || status}
            </span>
          ) : null}
        </div>

        {showDates && item.date ? (
          <p style={{ margin: "0 0 6px", color: accentColor, fontWeight: 800 }}>
            {item.date}
          </p>
        ) : null}
        <h3
          style={{
            margin: 0,
            color: treatment.textColor,
            fontSize: itemTitleFontSize,
            lineHeight: 1.25,
            fontWeight: 800,
          }}
        >
          {item.title || `Milestone ${index + 1}`}
        </h3>
        {item.description ? (
          <p
            style={{
              margin: "10px 0 0",
              color: treatment.mutedTextColor,
              lineHeight: 1.6,
            }}
          >
            {item.description}
          </p>
        ) : null}
        {showBullets && bullets.length ? (
          <ul
            style={{
              margin: "12px 0 0",
              paddingLeft: "18px",
              color: treatment.mutedTextColor,
              lineHeight: 1.55,
            }}
          >
            {bullets.map((bullet, bulletIndex) => (
              <li key={`${item.id || index}-bullet-${bulletIndex}`}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {showCtas && item.ctaText ? (
          <a
            href={item.ctaHref || "#"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: "14px",
              borderRadius: "8px",
              padding: "8px 12px",
              background: ctaBackground || accentColor,
              color: ctaTextColor,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            {item.ctaText}
          </a>
        ) : null}
      </article>
    );
  };

  const renderVertical = () => (
    <div style={{ position: "relative", display: "grid", gap }}>
      {showConnectors ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: markerSizePx / 2,
            bottom: markerSizePx / 2,
            left: markerSizePx / 2 - connectorWidthPx / 2,
            width: connectorWidth,
            background:
              connectorStyle === "dashed"
                ? `repeating-linear-gradient(180deg, ${treatment.connectorColor} 0 12px, transparent 12px 20px)`
                : connectorStyle === "gradient"
                  ? `linear-gradient(180deg, ${accentColor}, ${treatment.connectorColor})`
                  : treatment.connectorColor,
            borderRadius: "999px",
            opacity: connectorStyle === "dashed" ? 0.8 : 1,
          }}
        />
      ) : null}
      {safeItems.map((item, index) => {
        const statusColor = getStatusColor(item.status || "की योजना बनाई", props);
        return (
          <div
            key={item.id || index}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: `${markerSizePx}px minmax(0, 1fr)`,
              gap: "16px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: markerSize,
                height: markerSize,
                borderRadius: markerShape === "square" ? cardRadius : "999px",
                background: markerBackground || treatment.surfaceBackground,
                border: `${connectorWidthPx}px solid ${statusColor}`,
                color: statusColor,
                display: "grid",
                placeItems: "center",
                fontWeight: 900,
                fontSize: markerStyle === "status" ? "0.68em" : "0.86em",
                boxShadow: "0 10px 22px rgba(17, 24, 39, 0.12)",
              }}
            >
              {renderMarkerContent(item, index)}
            </div>
            {renderCard(item, index)}
          </div>
        );
      })}
    </div>
  );

  const renderAlternating = () => (
    <div style={{ position: "relative", display: "grid", gap }}>
      {showConnectors ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: markerSizePx / 2,
            bottom: markerSizePx / 2,
            left: "50%",
            width: connectorWidth,
            transform: "translateX(-50%)",
            background:
              connectorStyle === "dashed"
                ? `repeating-linear-gradient(180deg, ${treatment.connectorColor} 0 12px, transparent 12px 20px)`
                : connectorStyle === "gradient"
                  ? `linear-gradient(180deg, ${accentColor}, ${treatment.connectorColor})`
                  : treatment.connectorColor,
            borderRadius: "999px",
          }}
        />
      ) : null}
      {safeItems.map((item, index) => {
        const statusColor = getStatusColor(item.status || "की योजना बनाई", props);
        const isLeft = index % 2 === 0;
        return (
          <div
            key={item.id || index}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
              gap: "18px",
              alignItems: "start",
            }}
          >
            <div>{isLeft ? renderCard(item, index) : null}</div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: markerSize,
                height: markerSize,
                borderRadius: markerShape === "square" ? cardRadius : "999px",
                background: markerBackground || treatment.surfaceBackground,
                border: `${connectorWidthPx}px solid ${statusColor}`,
                color: statusColor,
                display: "grid",
                placeItems: "center",
                fontWeight: 900,
                fontSize: markerStyle === "status" ? "0.68em" : "0.86em",
                boxShadow: "0 10px 22px rgba(17, 24, 39, 0.12)",
              }}
            >
              {renderMarkerContent(item, index)}
            </div>
            <div>{!isLeft ? renderCard(item, index) : null}</div>
          </div>
        );
      })}
    </div>
  );

  const renderHorizontal = () => (
    <div style={{ overflowX: "auto", paddingBottom: "4px" }}>
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: `repeat(${safeItems.length}, minmax(260px, 1fr))`,
          gap,
          minWidth: Math.max(720, safeItems.length * 280),
        }}
      >
        {showConnectors ? (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: markerSizePx / 2,
              left: markerSizePx / 2,
              right: markerSizePx / 2,
              height: connectorWidth,
              background:
                connectorStyle === "dashed"
                  ? `repeating-linear-gradient(90deg, ${treatment.connectorColor} 0 12px, transparent 12px 20px)`
                  : connectorStyle === "gradient"
                    ? `linear-gradient(90deg, ${accentColor}, ${treatment.connectorColor})`
                    : treatment.connectorColor,
              borderRadius: "999px",
            }}
          />
        ) : null}
        {safeItems.map((item, index) => {
          const statusColor = getStatusColor(item.status || "की योजना बनाई", props);
          return (
            <div
              key={item.id || index}
              style={{
                position: "relative",
                display: "grid",
                gap: "14px",
                alignContent: "start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: markerSize,
                  height: markerSize,
                  borderRadius: markerShape === "square" ? cardRadius : "999px",
                  background: markerBackground || treatment.surfaceBackground,
                  border: `${connectorWidthPx}px solid ${statusColor}`,
                  color: statusColor,
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 900,
                  fontSize: markerStyle === "status" ? "0.68em" : "0.86em",
                  boxShadow: "0 10px 22px rgba(17, 24, 39, 0.12)",
                }}
              >
                {renderMarkerContent(item, index)}
              </div>
              {renderCard(item, index)}
            </div>
          );
        })}
      </div>
    </div>
  );

  if (!safeItems.length) {
    return (
      <section style={sectionStyle} className={className}>
        <div style={innerStyle}>
          <div
            style={{
              border: `1px dashed ${treatment.borderColor}`,
              borderRadius: cardRadius,
              padding: "24px",
              color: treatment.mutedTextColor,
              background: treatment.surfaceBackground,
            }}
          >
            अपनी टाइमलाइन बनाने के लिए मील के पत्थर जोड़ें।
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={sectionStyle} className={className}>
      <div style={innerStyle}>
        {showHeader ? (
          <div
            style={{
              marginBottom: "28px",
              maxWidth: headerMaxWidth,
              textAlign: headerAlign,
              marginLeft: headerAlign === "center" ? "auto" : undefined,
              marginRight: headerAlign === "center" ? "auto" : undefined,
            }}
          >
            {eyebrow ? (
              <p
                style={{
                  margin: 0,
                  color: accentColor,
                  fontWeight: 900,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  fontSize: "0.82em",
                }}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                style={{
                  margin: "8px 0 0",
                  color: treatment.textColor,
                  fontSize: titleFontSize,
                  lineHeight: 1.14,
                  fontWeight: 900,
                }}
              >
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p
                style={{
                  margin: "10px 0 0",
                  color: treatment.mutedTextColor,
                  lineHeight: 1.6,
                  maxWidth: "700px",
                  marginLeft: headerAlign === "center" ? "auto" : undefined,
                  marginRight: headerAlign === "center" ? "auto" : undefined,
                }}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}

        {isHorizontal ? renderHorizontal() : isAlternating && timelinePosition === "center" ? renderAlternating() : renderVertical()}
      </div>
    </section>
  );
};

TimelineRoadmapComponent.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showHeader: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      eyebrow: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      status: PropTypes.oneOf(["done", "active", "planned"]),
      icon: PropTypes.string,
      imageUrl: PropTypes.string,
      description: PropTypes.string,
      bullets: PropTypes.arrayOf(PropTypes.string),
      ctaText: PropTypes.string,
      ctaHref: PropTypes.string,
    }),
  ),
  layout: PropTypes.oneOf(["vertical", "alternating", "horizontal"]),
  markerStyle: PropTypes.oneOf(["number", "status", "dot"]),
  showDates: PropTypes.bool,
  showStatus: PropTypes.bool,
  showConnectors: PropTypes.bool,
  showBullets: PropTypes.bool,
  showCtas: PropTypes.bool,
  showItemImages: PropTypes.bool,
  visualStyle: PropTypes.oneOf(["premium", "soft", "dark", "plain"]),
  cardStyle: PropTypes.oneOf(["elevated", "glass", "minimal"]),
  markerShape: PropTypes.oneOf(["circle", "square"]),
  connectorStyle: PropTypes.oneOf(["solid", "gradient", "dashed"]),
  headerAlign: PropTypes.oneOf(["left", "center"]),
  timelinePosition: PropTypes.oneOf(["center", "left"]),
  enableHoverLift: PropTypes.bool,
  sectionBackground: PropTypes.string,
  surfaceBackground: PropTypes.string,
  cardBackground: PropTypes.string,
  alternateCardBackground: PropTypes.string,
  textColor: PropTypes.string,
  mutedTextColor: PropTypes.string,
  accentColor: PropTypes.string,
  activeColor: PropTypes.string,
  doneColor: PropTypes.string,
  plannedColor: PropTypes.string,
  connectorColor: PropTypes.string,
  borderColor: PropTypes.string,
  badgeBackground: PropTypes.string,
  badgeTextColor: PropTypes.string,
  markerBackground: PropTypes.string,
  ctaBackground: PropTypes.string,
  ctaTextColor: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  headerMaxWidth: PropTypes.string,
  padding: PropTypes.string,
  gap: PropTypes.string,
  cardPadding: PropTypes.string,
  cardRadius: PropTypes.string,
  markerSize: PropTypes.string,
  connectorWidth: PropTypes.string,
  boxShadow: PropTypes.string,
  fontSize: PropTypes.string,
  titleFontSize: PropTypes.string,
  itemTitleFontSize: PropTypes.string,
  mobileBreakpoint: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

TimelineRoadmapComponent.defaultProps = timelineRoadmapDefaultProps;

export default TimelineRoadmapComponent;
