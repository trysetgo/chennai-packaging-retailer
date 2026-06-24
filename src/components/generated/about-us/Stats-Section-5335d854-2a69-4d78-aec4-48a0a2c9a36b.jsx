"use client";

import React from "react";
import PropTypes from "prop-types";
import {
  Globe,
  Package,
  MessageSquare,
  Award,
  Rocket,
  Lightbulb,
  Heart,
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  Building,
  Monitor,
  Lock,
  DollarSign,
  PieChart,
  Handshake,
  Home as HomeIcon,
} from "lucide-react";

export const statsPremiumTheme = {
  radius: {
    xs: "8px",
    sm: "14px",
    md: "20px",
    lg: "28px",
    xl: "36px",
    pill: "999px",
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "20px",
    lg: "32px",
    xl: "48px",
    xxl: "72px",
  },
  shadows: {
    soft: "0 10px 30px rgba(15,23,42,0.06)",
    medium: "0 18px 50px rgba(15,23,42,0.10)",
    luxury: "0 30px 80px rgba(15,23,42,0.16)",
  },
  typography: {
    heading: "clamp(2rem, 4vw, 4.25rem)",
    subheading: "clamp(1rem, 1.5vw, 1.22rem)",
    value: "clamp(2.1rem, 5vw, 4.8rem)",
    body: "clamp(0.92rem, 1vw, 1.05rem)",
  },
};

export const statsSectionIconLibrary = [
  "Global",
  "Box",
  "Chat",
  "Award",
  "Launch",
  "Idea",
  "Love",
  "Star",
  "Users",
  "Growth",
  "Check",
  "Office",
  "System",
  "Secure",
  "Revenue",
  "Chart",
  "Partner",
  "Home",
];

const iconMap = {
  Global: Globe,
  Box: Package,
  Chat: MessageSquare,
  Award: Award,
  Launch: Rocket,
  Idea: Lightbulb,
  Love: Heart,
  Star: Star,
  Users: Users,
  Growth: TrendingUp,
  Check: CheckCircle,
  Office: Building,
  System: Monitor,
  Secure: Lock,
  Revenue: DollarSign,
  Chart: PieChart,
  Partner: Handshake,
  Home: HomeIcon,
};

const normalizeHex = (value = "") => {
  const raw = String(value).trim();
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw)) return null;
  if (raw.length === 4) {
    return `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}`;
  }
  return raw;
};

const hexToRgba = (value, alpha, fallback = `rgba(15, 23, 42, ${alpha})`) => {
  const normalized = normalizeHex(value);
  if (!normalized) return fallback;
  const hex = normalized.slice(1);
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const resolveMediaToneColor = (mode, brandColor) =>
  mode === "black" ? "#111111" : brandColor;

const getAlignItems = (textAlign) => {
  if (textAlign === "left") return "flex-start";
  if (textAlign === "right") return "flex-end";
  return "center";
};

const statsSectionStyles = `
.evo-stats {
  box-sizing: border-box;
  color: var(--stats-label-color);
}

.evo-stats *,
.evo-stats *::before,
.evo-stats *::after {
  box-sizing: border-box;
}

.evo-stats__shell {
  width: min(100%, var(--stats-container-max));
  margin: 0 auto;
}

.evo-stats__panel {
  position: relative;
  overflow: hidden;
  border: var(--stats-section-border);
  border-radius: var(--stats-section-radius);
  background: var(--stats-section-bg);
  box-shadow: var(--stats-section-shadow);
  padding: clamp(22px, 4.8vw, var(--stats-section-padding));
}

.evo-stats__panel::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--stats-accent-soft), transparent);
  pointer-events: none;
}

.evo-stats__header {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: var(--stats-align-items);
  gap: clamp(10px, 1.8vw, 16px);
  max-width: var(--stats-header-max);
  margin: 0 var(--stats-header-margin-x) clamp(24px, 4vw, 42px);
  text-align: var(--stats-text-align);
}

.evo-stats__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  border: 1px solid var(--stats-accent-border);
  border-radius: 999px;
  padding: 0 14px;
  background: var(--stats-accent-tint);
  color: var(--stats-accent-color);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.evo-stats__title {
  margin: 0;
  color: var(--stats-title-color);
  font-size: var(--stats-title-size);
  font-weight: var(--stats-title-weight);
  line-height: 1.02;
  letter-spacing: 0;
  text-wrap: balance;
}

.evo-stats__subtitle {
  max-width: 720px;
  margin: 0;
  color: var(--stats-subtitle-color);
  font-size: var(--stats-subtitle-size);
  line-height: 1.72;
}

.evo-stats__grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(14px, 2.4vw, var(--stats-gap));
  grid-template-columns: repeat(auto-fit, minmax(min(var(--stats-min-card-width), 100%), 1fr));
}

.evo-stats__card {
  position: relative;
  min-width: 0;
  min-height: var(--stats-card-min-height);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: var(--stats-align-items);
  justify-content: space-between;
  gap: clamp(18px, 2.5vw, 28px);
  border: var(--stats-card-border);
  border-radius: var(--stats-card-radius);
  background: var(--stats-card-bg);
  box-shadow: var(--stats-card-shadow);
  padding: clamp(20px, 3vw, var(--stats-card-padding));
  text-align: var(--stats-text-align);
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease, background 260ms ease;
}

.evo-stats__card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255,255,255,0.62), transparent 42%);
  opacity: var(--stats-card-sheen);
}

.evo-stats__card::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 3px;
  background: linear-gradient(90deg, var(--stats-accent-color), var(--stats-accent-soft));
  opacity: 0.78;
}

.evo-stats__card:hover {
  transform: translateY(var(--stats-card-hover-y));
  box-shadow: var(--stats-card-hover-shadow);
}

.evo-stats__cardTop {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.evo-stats__media {
  width: var(--stats-icon-size);
  height: var(--stats-icon-size);
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--stats-media-border);
  border-radius: var(--stats-icon-radius);
  background: var(--stats-icon-bg);
  padding: var(--stats-icon-padding);
  color: var(--stats-media-color);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.64), 0 14px 30px var(--stats-media-shadow);
}

.evo-stats__media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: calc(var(--stats-icon-radius) - 6px);
}

.evo-stats__glyph {
  font-size: clamp(0.82rem, 1.1vw, 1rem);
  font-weight: 900;
  line-height: 1;
}

.evo-stats__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  min-height: 28px;
  border: 1px solid var(--stats-index-border);
  border-radius: 999px;
  background: var(--stats-index-bg);
  color: var(--stats-media-color);
  font-size: 0.72rem;
  font-weight: 850;
}

.evo-stats__body {
  position: relative;
  z-index: 1;
  width: 100%;
}

.evo-stats__value {
  color: var(--stats-value-color);
  font-size: var(--stats-value-size);
  font-weight: var(--stats-value-weight);
  line-height: 0.98;
  letter-spacing: 0;
  word-break: break-word;
}

.evo-stats__label {
  margin: 10px 0 0 0;
  color: var(--stats-label-color);
  font-size: var(--stats-label-size);
  font-weight: var(--stats-label-weight);
  line-height: 1.28;
}

.evo-stats__description {
  margin: 12px 0 0 0;
  color: var(--stats-description-color);
  font-size: var(--stats-description-size);
  line-height: 1.72;
}

.evo-stats__empty {
  grid-column: 1 / -1;
  border: 1px dashed var(--stats-accent-border);
  border-radius: var(--stats-card-radius);
  padding: 24px;
  color: var(--stats-description-color);
  text-align: center;
  background: rgba(255,255,255,0.6);
}

.evo-stats--strip .evo-stats__grid {
  grid-template-columns: repeat(auto-fit, minmax(min(var(--stats-min-card-width), 100%), 1fr));
}

.evo-stats--strip .evo-stats__card {
  min-height: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.evo-stats--strip .evo-stats__cardTop {
  width: auto;
}

.evo-stats--strip .evo-stats__index {
  display: none;
}

.evo-stats--minimal .evo-stats__panel {
  border-color: transparent;
  box-shadow: none;
}

.evo-stats--minimal .evo-stats__card::before,
.evo-stats--minimal .evo-stats__card::after {
  display: none;
}

.evo-stats--hide-index .evo-stats__index {
  display: none;
}

.evo-stats--glass .evo-stats__card {
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

@media (max-width: 1279px) {
  .evo-stats__grid,
  .evo-stats--strip .evo-stats__grid {
    grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  }
}

@media (max-width: 1023px) {
  .evo-stats__grid,
  .evo-stats--strip .evo-stats__grid {
    grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  }
}

@media (max-width: 639px) {
  .evo-stats__panel {
    border-radius: min(var(--stats-section-radius), 24px);
  }

  .evo-stats__grid,
  .evo-stats--strip .evo-stats__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .evo-stats--strip .evo-stats__card {
    align-items: flex-start;
  }

  .evo-stats__cardTop {
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .evo-stats *,
  .evo-stats *::before,
  .evo-stats *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
`;

const defaultStats = [
  {
    id: "1",
    mediaType: "icon",
    mediaTone: "color",
    icon: "Global",
    value: "50+",
    label: "Countries",
    description: "Global reach across fast-moving markets.",
  },
  {
    id: "2",
    mediaType: "icon",
    mediaTone: "black",
    icon: "Box",
    value: "1M+",
    label: "Orders Shipped",
    description: "Operational scale built for consistency.",
  },
  {
    id: "3",
    mediaType: "icon",
    mediaTone: "color",
    icon: "Star",
    value: "10K+",
    label: "5-Star Reviews",
    description: "Social proof that reinforces trust quickly.",
  },
  {
    id: "4",
    mediaType: "icon",
    mediaTone: "black",
    icon: "Award",
    value: "100+",
    label: "Team Members",
    description: "Specialists across production and support.",
  },
];

const StatMedia = ({
  stat,
  iconColor,
  iconSize,
  iconBackgroundColor,
  iconBorderRadius,
  iconPadding,
}) => {
  const mediaType = stat.mediaType || "icon";
  const mediaTone = stat.mediaTone || "color";
  const resolvedColor = resolveMediaToneColor(mediaTone, iconColor);
  const mediaStyle = {
    "--stats-icon-size": iconSize,
    "--stats-icon-bg": iconBackgroundColor,
    "--stats-icon-radius": iconBorderRadius,
    "--stats-icon-padding": iconPadding,
    "--stats-media-color": resolvedColor,
    "--stats-media-border": hexToRgba(
      resolvedColor,
      0.13,
      "rgba(15,23,42,0.12)",
    ),
    "--stats-media-shadow": hexToRgba(
      resolvedColor,
      0.14,
      "rgba(15,23,42,0.10)",
    ),
  };

  if (mediaType === "image" && stat.imageUrl) {
    return (
      <span className="evo-stats__media" style={mediaStyle}>
        <img
          src={stat.imageUrl}
          alt={stat.label || "Stat visual"}
          loading="lazy"
          style={{
            filter:
              mediaTone === "black" ? "grayscale(1) contrast(1.08)" : "none",
          }}
        />
      </span>
    );
  }

  const IconComponent = iconMap[stat.icon];

  return (
    <span className="evo-stats__media" style={mediaStyle} aria-hidden="true">
      {IconComponent ? (
        <IconComponent
          style={{ width: "55%", height: "55%" }}
          strokeWidth={2.5}
        />
      ) : (
        <span className="evo-stats__glyph">{stat.icon || "S"}</span>
      )}
    </span>
  );
};

const StatItem = ({
  stat,
  index,
  iconSize,
  iconColor,
  iconBackgroundColor,
  iconBorderRadius,
  iconPadding,
  valueColor,
  valueFontSize,
  valueFontWeight,
  labelColor,
  labelFontSize,
  labelFontWeight,
  showDescription,
  descriptionColor,
  descriptionFontSize,
  accentColor,
}) => {
  const mediaTone = stat.mediaTone || "color";
  const resolvedAccent = resolveMediaToneColor(mediaTone, accentColor);

  return (
    <article
      className="evo-stats__card"
      style={{
        "--stats-media-color": resolvedAccent,
        "--stats-index-bg": hexToRgba(
          resolvedAccent,
          0.08,
          "rgba(15,23,42,0.06)",
        ),
        "--stats-index-border": hexToRgba(
          resolvedAccent,
          0.13,
          "rgba(15,23,42,0.12)",
        ),
        "--stats-value-color": valueColor,
        "--stats-value-size": valueFontSize,
        "--stats-value-weight": valueFontWeight,
        "--stats-label-color": labelColor,
        "--stats-label-size": labelFontSize,
        "--stats-label-weight": labelFontWeight,
        "--stats-description-color": descriptionColor,
        "--stats-description-size": descriptionFontSize,
      }}
    >
      <div className="evo-stats__cardTop">
        <StatMedia
          stat={stat}
          iconColor={iconColor}
          iconSize={iconSize}
          iconBackgroundColor={iconBackgroundColor}
          iconBorderRadius={iconBorderRadius}
          iconPadding={iconPadding}
        />
        <span className="evo-stats__index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="evo-stats__body">
        <div className="evo-stats__value">{stat.value || "0"}</div>
        <h3 className="evo-stats__label">{stat.label || "Label"}</h3>
        {showDescription && stat.description ? (
          <p className="evo-stats__description">{stat.description}</p>
        ) : null}
      </div>
    </article>
  );
};

const StatsSection = ({
  id,
  title = "Proof In The Numbers",
  subtitle = "",
  eyebrow = "Stats",
  headingLevel = "h2",
  stats = [],
  columns = 4,
  minCardWidth = "180px",
  gap = "24px",
  sectionBackgroundColor = "#ffffff",
  sectionBorder = "1px solid rgba(226, 232, 240, 0.75)",
  sectionBorderRadius = "34px",
  sectionPadding = "44px",
  sectionShadow = "none",
  cardBackgroundColor = "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.94) 100%)",
  cardBorder = "1px solid rgba(226, 232, 240, 0.9)",
  cardBorderRadius = "26px",
  cardPadding = "28px",
  cardShadow = "0 18px 45px rgba(15,23,42,0.08)",
  cardHoverShadow = "0 30px 72px rgba(15,23,42,0.14)",
  cardHoverTranslateY = "-6px",
  titleColor = "#0f172a",
  titleFontSize = statsPremiumTheme.typography.heading,
  titleFontWeight = "850",
  subtitleColor = "#475569",
  subtitleFontSize = statsPremiumTheme.typography.subheading,
  iconSize = "58px",
  iconColor = "#0f766e",
  iconBackgroundColor = "linear-gradient(135deg, rgba(240,253,250,0.96) 0%, rgba(236,253,245,0.92) 100%)",
  iconBorderRadius = "18px",
  iconPadding = "12px",
  valueColor = "#0f172a",
  valueFontSize = statsPremiumTheme.typography.value,
  valueFontWeight = "900",
  labelColor = "#334155",
  labelFontSize = "clamp(1rem, 1.2vw, 1.16rem)",
  labelFontWeight = "760",
  showDescription = true,
  showEyebrow = true,
  showCardIndex = true,
  enableGlassmorphism = false,
  layoutVariant = "cards",
  cardMinHeight = "260px",
  headerMaxWidth = "820px",
  descriptionColor = "#64748b",
  descriptionFontSize = statsPremiumTheme.typography.body,
  textAlign = "center",
  containerMaxWidth = "1280px",
  marginTop = "0px",
  marginRight = "auto",
  marginBottom = "0px",
  marginLeft = "auto",
  paddingTop = "24px",
  paddingRight = "24px",
  paddingBottom = "24px",
  paddingLeft = "24px",
  style = {},
  className = "",
}) => {
  const displayStats =
    Array.isArray(stats) && stats.length ? stats : defaultStats;
  const alignItems = getAlignItems(textAlign);
  const headerMarginX =
    textAlign === "center" ? "auto" : textAlign === "right" ? "0" : "0";
  const variantClass = `evo-stats--${layoutVariant || "cards"}`;
  const glassClass = enableGlassmorphism ? "evo-stats--glass" : "";
  const HeadingTag = headingLevel || "h2";

  return (
    <div
      id={id}
      className={[
        "evo-stats",
        variantClass,
        glassClass,
        !showCardIndex ? "evo-stats--hide-index" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        "--stats-container-max": containerMaxWidth,
        "--stats-section-bg": sectionBackgroundColor,
        "--stats-section-border": sectionBorder,
        "--stats-section-radius": sectionBorderRadius,
        "--stats-section-padding": sectionPadding,
        "--stats-section-shadow": sectionShadow,
        "--stats-card-bg": cardBackgroundColor,
        "--stats-card-border": cardBorder,
        "--stats-card-radius": cardBorderRadius,
        "--stats-card-padding": cardPadding,
        "--stats-card-shadow": cardShadow,
        "--stats-card-hover-shadow": cardHoverShadow,
        "--stats-card-hover-y": cardHoverTranslateY,
        "--stats-card-min-height": cardMinHeight,
        "--stats-card-sheen": enableGlassmorphism ? 0.78 : 0.48,
        "--stats-columns": Math.max(1, Math.min(6, Number(columns) || 4)),
        "--stats-min-card-width": minCardWidth,
        "--stats-gap": gap,
        "--stats-title-color": titleColor,
        "--stats-title-size": titleFontSize,
        "--stats-title-weight": titleFontWeight,
        "--stats-subtitle-color": subtitleColor,
        "--stats-subtitle-size": subtitleFontSize,
        "--stats-accent-color": iconColor,
        "--stats-accent-soft": hexToRgba(
          iconColor,
          0.42,
          "rgba(15,118,110,0.42)",
        ),
        "--stats-accent-tint": hexToRgba(
          iconColor,
          0.08,
          "rgba(15,118,110,0.08)",
        ),
        "--stats-accent-border": hexToRgba(
          iconColor,
          0.14,
          "rgba(15,118,110,0.14)",
        ),
        "--stats-text-align": textAlign,
        "--stats-align-items": alignItems,
        "--stats-header-max": headerMaxWidth,
        "--stats-header-margin-x": headerMarginX,
        "--stats-label-color": labelColor,
        "--stats-description-color": descriptionColor,
        ...style,
      }}
    >
      <style>{statsSectionStyles}</style>
      <div className="evo-stats__shell">
        <section
          className="evo-stats__panel"
          aria-label={title || "Stats section"}
        >
          {title || subtitle || (showEyebrow && eyebrow) ? (
            <header className="evo-stats__header">
              {showEyebrow && eyebrow ? (
                <span className="evo-stats__eyebrow">{eyebrow}</span>
              ) : null}
              {title ? (
                <HeadingTag className="evo-stats__title">{title}</HeadingTag>
              ) : null}
              {subtitle ? (
                <p className="evo-stats__subtitle">{subtitle}</p>
              ) : null}
            </header>
          ) : null}

          <div className="evo-stats__grid">
            {displayStats.length ? (
              displayStats.map((stat, index) => (
                <StatItem
                  key={stat.id || stat.label || index}
                  stat={stat}
                  index={index}
                  iconSize={iconSize}
                  iconColor={iconColor}
                  iconBackgroundColor={iconBackgroundColor}
                  iconBorderRadius={iconBorderRadius}
                  iconPadding={iconPadding}
                  valueColor={valueColor}
                  valueFontSize={valueFontSize}
                  valueFontWeight={valueFontWeight}
                  labelColor={labelColor}
                  labelFontSize={labelFontSize}
                  labelFontWeight={labelFontWeight}
                  showDescription={showDescription}
                  descriptionColor={descriptionColor}
                  descriptionFontSize={descriptionFontSize}
                  accentColor={iconColor}
                />
              ))
            ) : (
              <div className="evo-stats__empty">
                Add stats in the builder to populate this section.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

StatsSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  eyebrow: PropTypes.string,
  headingLevel: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6"]),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      imageUrl: PropTypes.string,
      mediaType: PropTypes.oneOf(["icon", "image"]),
      mediaTone: PropTypes.oneOf(["color", "black"]),
      value: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minCardWidth: PropTypes.string,
  gap: PropTypes.string,
  sectionBackgroundColor: PropTypes.string,
  sectionBorder: PropTypes.string,
  sectionBorderRadius: PropTypes.string,
  sectionPadding: PropTypes.string,
  sectionShadow: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardBorder: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardShadow: PropTypes.string,
  cardHoverShadow: PropTypes.string,
  cardHoverTranslateY: PropTypes.string,
  titleColor: PropTypes.string,
  titleFontSize: PropTypes.string,
  titleFontWeight: PropTypes.string,
  subtitleColor: PropTypes.string,
  subtitleFontSize: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  iconBackgroundColor: PropTypes.string,
  iconBorderRadius: PropTypes.string,
  iconPadding: PropTypes.string,
  valueColor: PropTypes.string,
  valueFontSize: PropTypes.string,
  valueFontWeight: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelFontWeight: PropTypes.string,
  showDescription: PropTypes.bool,
  showEyebrow: PropTypes.bool,
  showCardIndex: PropTypes.bool,
  enableGlassmorphism: PropTypes.bool,
  layoutVariant: PropTypes.oneOf(["cards", "strip", "minimal"]),
  cardMinHeight: PropTypes.string,
  headerMaxWidth: PropTypes.string,
  descriptionColor: PropTypes.string,
  descriptionFontSize: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
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

export const statsSectionDefaultProps = {
  title: "Proof In The Numbers",
  subtitle: "A clear snapshot of reach, scale, and traction.",
  eyebrow: "Stats",
  headingLevel: "h2",
  stats: [],
  columns: 4,
  minCardWidth: "180px",
  gap: "24px",
  sectionBackgroundColor: "#ffffff",
  sectionBorder: "1px solid rgba(226, 232, 240, 0.75)",
  sectionBorderRadius: "34px",
  sectionPadding: "44px",
  sectionShadow: "none",
  cardBackgroundColor:
    "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.94) 100%)",
  cardBorder: "1px solid rgba(226, 232, 240, 0.9)",
  cardBorderRadius: "26px",
  cardPadding: "28px",
  cardShadow: "0 18px 45px rgba(15,23,42,0.08)",
  cardHoverShadow: "0 30px 72px rgba(15,23,42,0.14)",
  cardHoverTranslateY: "-6px",
  titleColor: "#0f172a",
  titleFontSize: statsPremiumTheme.typography.heading,
  titleFontWeight: "850",
  subtitleColor: "#475569",
  subtitleFontSize: statsPremiumTheme.typography.subheading,
  iconSize: "58px",
  iconColor: "#0f766e",
  iconBackgroundColor:
    "linear-gradient(135deg, rgba(240,253,250,0.96) 0%, rgba(236,253,245,0.92) 100%)",
  iconBorderRadius: "18px",
  iconPadding: "12px",
  valueColor: "#0f172a",
  valueFontSize: statsPremiumTheme.typography.value,
  valueFontWeight: "900",
  labelColor: "#334155",
  labelFontSize: "clamp(1rem, 1.2vw, 1.16rem)",
  labelFontWeight: "760",
  showDescription: true,
  showEyebrow: true,
  showCardIndex: true,
  enableGlassmorphism: false,
  layoutVariant: "cards",
  cardMinHeight: "260px",
  headerMaxWidth: "820px",
  descriptionColor: "#64748b",
  descriptionFontSize: statsPremiumTheme.typography.body,
  textAlign: "center",
  containerMaxWidth: "1280px",
  marginTop: "0px",
  marginRight: "auto",
  marginBottom: "0px",
  marginLeft: "auto",
  paddingTop: "24px",
  paddingRight: "24px",
  paddingBottom: "24px",
  paddingLeft: "24px",
  style: {},
  className: "",
};

StatMedia.propTypes = {
  stat: PropTypes.object.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconSize: PropTypes.string.isRequired,
  iconBackgroundColor: PropTypes.string.isRequired,
  iconBorderRadius: PropTypes.string.isRequired,
  iconPadding: PropTypes.string.isRequired,
};

StatItem.propTypes = {
  stat: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  iconSize: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconBackgroundColor: PropTypes.string.isRequired,
  iconBorderRadius: PropTypes.string.isRequired,
  iconPadding: PropTypes.string.isRequired,
  valueColor: PropTypes.string.isRequired,
  valueFontSize: PropTypes.string.isRequired,
  valueFontWeight: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  labelFontSize: PropTypes.string.isRequired,
  labelFontWeight: PropTypes.string.isRequired,
  showDescription: PropTypes.bool,
  descriptionColor: PropTypes.string.isRequired,
  descriptionFontSize: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
};

StatsSection.defaultProps = statsSectionDefaultProps;

export default StatsSection;
