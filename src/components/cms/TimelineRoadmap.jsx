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
  width: "100%",
  maxWidth: "1100px",
  padding: "44px 16px",
  gap: "20px",
  cardPadding: "20px",
  cardRadius: "8px",
  markerSize: "42px",
  connectorWidth: "3px",
  boxShadow: "0 16px 34px rgba(17, 24, 39, 0.08)",
  fontSize: "14px",
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
    width,
    maxWidth,
    padding,
    gap,
    cardPadding,
    cardRadius,
    markerSize,
    connectorWidth,
    boxShadow,
    fontSize,
    mobileBreakpoint,
    style,
    className,
  } = props;

  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (typeof window.matchMedia !== "function") return undefined;
    const mediaQuery = window.matchMedia(
      `(max-width: ${mobileBreakpoint || "760px"})`,
    );
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

  const sectionStyle = {
    width,
    background: sectionBackground,
    color: textColor,
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
    if (markerStyle === "status") {
      if (item.status === "done") return "OK";
      if (item.status === "active") return "NOW";
      return `${index + 1}`;
    }
    if (markerStyle === "dot") return "";
    return String(index + 1).padStart(2, "0");
  };

  const renderCard = (item, index) => {
    const status = item.status || "planned";
    const statusColor = getStatusColor(status, props);
    const bullets = Array.isArray(item.bullets) ? item.bullets : [];

    return (
      <article
        style={{
          background: index % 2 ? alternateCardBackground : cardBackground,
          border: `1px solid ${borderColor}`,
          borderRadius: cardRadius,
          boxShadow,
          padding: cardPadding,
          minHeight: "100%",
        }}
      >
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
            color: textColor,
            fontSize: "1.25em",
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
              color: mutedTextColor,
              lineHeight: 1.6,
            }}
          >
            {item.description}
          </p>
        ) : null}
        {bullets.length ? (
          <ul
            style={{
              margin: "12px 0 0",
              paddingLeft: "18px",
              color: mutedTextColor,
              lineHeight: 1.55,
            }}
          >
            {bullets.map((bullet, bulletIndex) => (
              <li key={`${item.id || index}-bullet-${bulletIndex}`}>
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
        {item.ctaText ? (
          <a
            href={item.ctaHref || "#"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: "14px",
              borderRadius: "8px",
              padding: "8px 12px",
              background: accentColor,
              color: "#ffffff",
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
            background: connectorColor,
            borderRadius: "999px",
          }}
        />
      ) : null}
      {safeItems.map((item, index) => {
        const statusColor = getStatusColor(item.status || "planned", props);
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
                borderRadius: "999px",
                background: surfaceBackground,
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
            background: connectorColor,
            borderRadius: "999px",
          }}
        />
      ) : null}
      {safeItems.map((item, index) => {
        const statusColor = getStatusColor(item.status || "planned", props);
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
                borderRadius: "999px",
                background: surfaceBackground,
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
              background: connectorColor,
              borderRadius: "999px",
            }}
          />
        ) : null}
        {safeItems.map((item, index) => {
          const statusColor = getStatusColor(item.status || "planned", props);
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
                  borderRadius: "999px",
                  background: surfaceBackground,
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
              border: `1px dashed ${borderColor}`,
              borderRadius: cardRadius,
              padding: "24px",
              color: mutedTextColor,
              background: surfaceBackground,
            }}
          >
            Add milestones to build your timeline.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={sectionStyle} className={className}>
      <div style={innerStyle}>
        {showHeader ? (
          <div style={{ marginBottom: "28px", maxWidth: "760px" }}>
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
                  color: textColor,
                  fontSize: "2rem",
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
                  color: mutedTextColor,
                  lineHeight: 1.6,
                  maxWidth: "700px",
                }}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}

        {isHorizontal
          ? renderHorizontal()
          : isAlternating
            ? renderAlternating()
            : renderVertical()}
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
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  gap: PropTypes.string,
  cardPadding: PropTypes.string,
  cardRadius: PropTypes.string,
  markerSize: PropTypes.string,
  connectorWidth: PropTypes.string,
  boxShadow: PropTypes.string,
  fontSize: PropTypes.string,
  mobileBreakpoint: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

TimelineRoadmapComponent.defaultProps = timelineRoadmapDefaultProps;

export default TimelineRoadmapComponent;
