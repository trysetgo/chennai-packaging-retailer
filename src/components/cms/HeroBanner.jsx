"use client";

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const parsePx = (value, fallback) => {
  const match = String(value || "").match(/^(-?\d+(\.\d+)?)px$/i);
  return match ? Number(match[1]) : fallback;
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

const columnClass = (count = 3) => {
  const safe = Math.max(1, Math.min(4, Number(count) || 3));
  return {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[safe];
};

const buildCompatibleHeroProps = (rawProps = {}) => {
  const form = rawProps?.form && typeof rawProps.form === "object" ? rawProps.form : {};
  const info = rawProps?.info && typeof rawProps.info === "object" ? rawProps.info : {};
  const formInputs = Array.isArray(form.inputs) ? form.inputs : [];
  const formButtons = Array.isArray(form.buttons) ? form.buttons : [];
  const infoTexts = Array.isArray(info.texts) ? info.texts : [];

  const searchFields =
    Array.isArray(rawProps?.searchFields) && rawProps.searchFields.length > 0
      ? rawProps.searchFields
      : formInputs.map((input, index) => ({
          id: `field-${index + 1}`,
          label: input?.label || `Field ${index + 1}`,
          placeholder:
            input?.attributes?.placeholder ||
            input?.placeholder ||
            input?.label ||
            `Field ${index + 1}`,
        }));

  const stats =
    Array.isArray(rawProps?.stats) && rawProps.stats.length > 0
      ? rawProps.stats
      : infoTexts.map((item, index) => ({
          id: `stat-${index + 1}`,
          label: item?.label || item?.text || "",
          value: item?.value || "",
          icon: item?.icon || (index % 2 === 0 ? "*" : "+"),
        }));

  const primaryActionLabel =
    rawProps?.buttonText || formButtons?.[0]?.label || rawProps?.searchButtonText;
  const secondaryActionLabel =
    rawProps?.secondaryButtonText || formButtons?.[1]?.label || "";

  return {
    ...rawProps,
    heading: rawProps?.heading || rawProps?.header || rawProps?.title,
    subheading: rawProps?.subheading || rawProps?.subheader || rawProps?.subtitle,
    buttonText: primaryActionLabel,
    showSecondaryButton:
      rawProps?.showSecondaryButton !== undefined
        ? rawProps.showSecondaryButton
        : Boolean(secondaryActionLabel),
    secondaryButtonText: secondaryActionLabel,
    showSearch:
      rawProps?.showSearch !== undefined
        ? rawProps.showSearch
        : searchFields.length > 0,
    searchFields,
    searchPlaceholder:
      rawProps?.searchPlaceholder || searchFields?.[0]?.placeholder || "Search...",
    searchButtonText:
      rawProps?.searchButtonText ||
      (String(primaryActionLabel || "").toLowerCase().includes("search")
        ? "Search"
        : primaryActionLabel),
    showStats:
      rawProps?.showStats !== undefined ? rawProps.showStats : stats.length > 0,
    statsVariant: rawProps?.statsVariant || (stats.length > 0 ? "inline" : "cards"),
    stats,
    layoutMode:
      rawProps?.layoutMode ||
      (rawProps?.variant === "split"
        ? "split"
        : rawProps?.variant === "spotlight"
          ? "panel"
          : "centered"),
    seoHeadingTag: rawProps?.seoHeadingTag || "h1",
    lazyLoadMedia: rawProps?.lazyLoadMedia || false,
  };
};

const getButtonPresentation = ({
  styleType,
  backgroundColor,
  textColor,
  accentColor,
  radius,
}) => {
  const base = {
    borderRadius: radius,
    transition: "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, color 180ms ease",
  };

  if (styleType === "ghost") {
    return {
      ...base,
      background: "transparent",
      color: textColor,
      border: "none",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
      boxShadow: "none",
    };
  }

  if (styleType === "outline") {
    return {
      ...base,
      background: "transparent",
      color: textColor,
      border: `1px solid ${hexToRgba(textColor || accentColor, 0.22, "rgba(255,255,255,0.28)")}`,
      boxShadow: "none",
    };
  }

  if (styleType === "secondary") {
    return {
      ...base,
      background: "rgba(255,255,255,0.9)",
      color: "#0f172a",
      border: "1px solid rgba(255,255,255,0.3)",
      boxShadow: "0 16px 32px rgba(15, 23, 42, 0.12)",
    };
  }

  return {
    ...base,
    background: backgroundColor || accentColor,
    color: textColor,
    border: "1px solid transparent",
    boxShadow: `0 18px 36px ${hexToRgba(backgroundColor || accentColor, 0.22, "rgba(15,23,42,0.18)")}`,
  };
};

const renderFeatureCards = (items, textColor, accentColor) => (
  <div className={classNames("grid gap-4", columnClass(Math.min(4, items.length || 1)))}>
    {items.map((feature) => (
      <div
        key={feature.id || feature.title}
        className="rounded-2xl border border-white/18 bg-white/10 p-5 backdrop-blur-sm"
      >
        {feature.imageUrl ? (
          <img
            src={feature.imageUrl}
            alt={feature.title || "Feature"}
            className="mb-3 h-12 w-12 rounded-lg object-cover"
          />
        ) : (
          <div
            className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              background: hexToRgba(accentColor, 0.12, "rgba(236,48,128,0.12)"),
              color: accentColor,
            }}
          >
            {feature.icon || "*"}
          </div>
        )}
        <h3 className="mb-1 font-semibold" style={{ color: textColor }}>
          {feature.title}
        </h3>
        <p className="text-sm opacity-85" style={{ color: textColor }}>
          {feature.description}
        </p>
      </div>
    ))}
  </div>
);

const renderInlineStats = (items, textColor) => (
  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
    {items.map((item) => {
      const itemText = item?.value
        ? `${item.value}${item.label ? ` ${item.label}` : ""}`
        : item?.label || "";
      return (
        <div
          key={item.id || item.label || item.value}
          className="flex items-center gap-2 text-sm sm:text-base"
          style={{ color: textColor }}
        >
          <span className="text-base font-semibold opacity-90">{item?.icon || "*"}</span>
          <span className="font-medium">{itemText}</span>
        </div>
      );
    })}
  </div>
);

const renderStatCards = (items, textColor, accentColor) => (
  <div className={classNames("grid gap-4", columnClass(Math.min(4, items.length || 1)))}>
    {items.map((item) => (
      <div
        key={item.id || item.label}
        className="rounded-2xl border border-white/18 bg-white/10 px-4 py-4 backdrop-blur-sm"
      >
        <div
          className="mb-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{
            color: accentColor,
            background: hexToRgba(accentColor, 0.08, "rgba(236,48,128,0.08)"),
            border: `1px solid ${hexToRgba(accentColor, 0.12, "rgba(236,48,128,0.12)")}`,
          }}
        >
          {item.icon || "Stat"}
        </div>
        <div className="text-2xl font-bold" style={{ color: textColor }}>
          {item.value}
        </div>
        <div className="text-sm opacity-80" style={{ color: textColor }}>
          {item.label}
        </div>
      </div>
    ))}
  </div>
);

const renderProductCards = (items) => (
  <div className={classNames("grid gap-4", columnClass(Math.min(4, items.length || 1)))}>
    {items
      .filter((grid) => grid?.showProduct !== false)
      .map((grid) => (
        <div
          key={grid.id}
          className="rounded-2xl border border-white/30 bg-white/90 p-4 shadow-sm"
        >
          {!!grid.imageUrl && (
            <img
              src={grid.imageUrl}
              alt={grid.name || "Product"}
              className="mb-3 h-44 w-full rounded-lg object-cover"
            />
          )}
          <h3
            className="font-semibold"
            style={{
              color: grid.productNameColor || "#0f172a",
              fontSize: grid.productNameFontSize || "1rem",
              marginBottom: grid.productNameMarginBottom || "0.5rem",
              padding: grid.productNamePadding || "0",
            }}
          >
            {grid.name}
          </h3>
          {!!grid.productDiscount && (
            <div
              style={{
                color: grid.productDiscountColor || "#16a34a",
                fontSize: grid.productDiscountFontSize || "0.875rem",
                marginBottom: grid.productDiscountMarginBottom || "0.5rem",
                padding: grid.productDiscountPadding || "0",
              }}
            >
              {grid.productDiscount}
            </div>
          )}
          <button
            className="font-semibold px-4 py-2"
            style={{
              borderRadius: grid.productButtonBorderRadius || "8px",
              backgroundColor: grid.productButtonBackgroundColor || "#4f46e5",
              color: grid.productButtonTextColor || "#ffffff",
            }}
          >
            {grid.productButtonText || "Buy Now"}
          </button>
        </div>
      ))}
  </div>
);

const renderTrustItems = (items, trustStyle, accentColor, textColor) => {
  if (!items.length) return null;
  return (
    <div
      className={classNames("flex flex-wrap gap-3", {
        "justify-center": trustStyle !== "inline",
      })}
    >
      {items.map((item) => (
        <div
          key={item.id || item.label}
          className={classNames("inline-flex items-center gap-2", {
            "rounded-full px-3 py-2 border backdrop-blur-sm": trustStyle === "pill",
          })}
          style={
            trustStyle === "pill"
              ? {
                  color: textColor,
                  background: "rgba(255,255,255,0.12)",
                  borderColor: hexToRgba(accentColor, 0.12, "rgba(255,255,255,0.18)"),
                }
              : { color: textColor }
          }
        >
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.label || "Trust item"}
              className="h-6 w-6 rounded object-cover"
            />
          ) : (
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold"
              style={{
                background: hexToRgba(accentColor, 0.12, "rgba(236,48,128,0.12)"),
                color: accentColor,
              }}
            >
              {item.icon || item.label?.slice(0, 1) || "*"}
            </span>
          )}
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export const heroComponentDefaultProps = {
  heading: "Build something amazing",
  subheading: "Create beautiful, fast, and modern web applications with our intuitive drag-and-drop builder.",
  showEyebrow: false,
  eyebrowText: "New Release",
  eyebrowColor: "#4f46e5",
  eyebrowBackground: "rgba(79,70,229,0.1)",
  eyebrowBorderColor: "rgba(79,70,229,0.2)",
  badgeText: "v2.0",
  showBadge: false,
  textAlign: "left",
  height: "lg",
  layoutMode: "split",
  contentSplitRatio: 50,
  headingMaxWidth: "800px",
  contentMaxWidth: "100%",
  headingFontSize: "64px",
  subheadingFontSize: "20px",
  textColor: "#0f172a",
  sectionPaddingX: "24px",
  sectionPaddingY: "64px",
  gap: "32px",
  backgroundColor: "#ffffff",
  backgroundImage: "",
  overlayType: "none",
  overlayColor: "#000000",
  overlayOpacity: 0,
  showAmbientShapes: false,
  accentColor: "#4f46e5",
  secondaryAccentColor: "#6366f1",
  showHeadingGradient: false,
  headingGradientStart: "#4f46e5",
  headingGradientEnd: "#ec4899",
  showContentPanel: false,
  contentPanelBackground: "rgba(255,255,255,0.8)",
  contentPanelBorder: "1px solid rgba(226,232,240,0.8)",
  contentPanelRadius: "24px",
  contentPanelPadding: "32px",
  contentPanelShadow: "0 20px 40px rgba(0,0,0,0.05)",
  ctaLayout: "inline",
  buttonText: "Get Started",
  buttonUrl: "#",
  buttonStyle: "primary",
  buttonColor: "#4f46e5",
  buttonTextColor: "#ffffff",
  buttonBorderRadius: "999px",
  secondaryButtonText: "Learn More",
  secondaryButtonUrl: "#",
  showSecondaryButton: true,
  secondaryButtonStyle: "outline",
  secondaryButtonColor: "transparent",
  secondaryButtonTextColor: "#0f172a",
  showSearch: false,
  searchPlaceholder: "Search...",
  searchFields: [],
  searchButtonText: "Search",
  searchWidth: "lg",
  searchStyle: "default",
  searchButtonColor: "#4f46e5",
  searchButtonTextColor: "#ffffff",
  searchPanelBackground: "#ffffff",
  searchPanelBorderRadius: "16px",
  searchPanelPadding: "8px",
  searchPanelShadow: "0 10px 25px rgba(0,0,0,0.05)",
  searchFieldTextColor: "#0f172a",
  searchFieldDividerColor: "#e2e8f0",
  mediaType: "image",
  mediaImageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  mediaImageAlt: "Hero Image",
  mediaObjectFit: "cover",
  mediaAspectRatio: "4/3",
  mediaPanelBackground: "transparent",
  mediaPanelBorder: "none",
  mediaPanelRadius: "24px",
  mediaPanelPadding: "0px",
  mediaPanelShadow: "0 20px 40px rgba(0,0,0,0.1)",
  mediaCardEyebrow: "Highlights",
  mediaCardTitle: "Performance",
  mediaCardDescription: "Lightning fast load times and optimized delivery.",
  mediaCardValue: "100",
  mediaCardMeta: "Performance Score",
  mediaCardItems: [],
  mediaCardIsTransparent: false,
  mediaCardBackgroundColor: "rgba(255, 255, 255, 0.88)",
  mediaCardTextColor: "#0f172a",
  mediaCardEyebrowColor: "",
  mediaCardEyebrowFontSize: "11px",
  mediaCardTitleColor: "#0f172a",
  mediaCardTitleFontSize: "24px",
  mediaCardDescriptionColor: "#475569",
  mediaCardDescriptionFontSize: "14px",
  mediaCardValueColor: "#0f172a",
  mediaCardValueFontSize: "36px",
  mediaCardItemColor: "#475569",
  mediaCardItemFontSize: "14px",
  showTrustBar: false,
  trustStyle: "inline",
  trustItems: [],
  showFeatures: false,
  featuresGridColumns: { base: 1, sm: 2, lg: 3 },
  features: [],
  showStats: false,
  statsVariant: "inline",
  stats: [],
  showProductGrid: false,
  productGridColumns: 3,
  productGrids: [],
  seoHeadingTag: "h1",
  lazyLoadMedia: false,
};

const HeroComponent = (rawProps) => {
  const props = {
    ...heroComponentDefaultProps,
    ...buildCompatibleHeroProps(rawProps || {}),
  };
  const {
    heading,
    subheading,
    showEyebrow,
    eyebrowText,
    eyebrowColor,
    eyebrowBackground,
    eyebrowBorderColor,
    badgeText,
    showBadge,
    textAlign,
    height,
    layoutMode,
    contentSplitRatio,
    headingMaxWidth,
    contentMaxWidth,
    headingFontSize,
    subheadingFontSize,
    textColor,
    sectionPaddingX,
    sectionPaddingY,
    gap,
    backgroundColor,
    backgroundImage,
    overlayType,
    overlayColor,
    overlayOpacity,
    showAmbientShapes,
    accentColor,
    secondaryAccentColor,
    showHeadingGradient,
    headingGradientStart,
    headingGradientEnd,
    showContentPanel,
    contentPanelBackground,
    contentPanelBorder,
    contentPanelRadius,
    contentPanelPadding,
    contentPanelShadow,
    ctaLayout,
    buttonText,
    buttonUrl,
    buttonStyle,
    buttonColor,
    buttonTextColor,
    buttonBorderRadius,
    secondaryButtonText,
    secondaryButtonUrl,
    showSecondaryButton,
    secondaryButtonStyle,
    secondaryButtonColor,
    secondaryButtonTextColor,
    showSearch,
    searchPlaceholder,
    searchFields,
    searchButtonText,
    searchWidth,
    searchStyle,
    searchButtonColor,
    searchButtonTextColor,
    searchPanelBackground,
    searchPanelBorderRadius,
    searchPanelPadding,
    searchPanelShadow,
    searchFieldTextColor,
    searchFieldDividerColor,
    mediaType,
    mediaImageUrl,
    mediaImageAlt,
    mediaObjectFit,
    mediaAspectRatio,
    mediaPanelBackground,
    mediaPanelBorder,
    mediaPanelRadius,
    mediaPanelPadding,
    mediaPanelShadow,
    mediaCardEyebrow,
    mediaCardTitle,
    mediaCardDescription,
    mediaCardValue,
    mediaCardMeta,
    mediaCardItems,
    mediaCardIsTransparent,
    mediaCardBackgroundColor,
    mediaCardTextColor,
    mediaCardEyebrowColor,
    mediaCardEyebrowFontSize,
    mediaCardTitleColor,
    mediaCardTitleFontSize,
    mediaCardDescriptionColor,
    mediaCardDescriptionFontSize,
    mediaCardValueColor,
    mediaCardValueFontSize,
    mediaCardItemColor,
    mediaCardItemFontSize,
    showTrustBar,
    trustStyle,
    trustItems,
    showFeatures,
    featuresGridColumns,
    features,
    showStats,
    statsVariant,
    stats,
    showProductGrid,
    productGridColumns,
    productGrids,
    seoHeadingTag,
    lazyLoadMedia,
  } = props;

  const safeFeatures = Array.isArray(features) ? features.filter(Boolean) : [];
  const safeStats = Array.isArray(stats) ? stats.filter(Boolean) : [];
  const safeProductGrids = Array.isArray(productGrids)
    ? productGrids.filter((item) => item && item.showProduct !== false)
    : [];
  const safeSearchFields = Array.isArray(searchFields) ? searchFields.filter(Boolean) : [];
  const safeTrustItems = Array.isArray(trustItems) ? trustItems.filter(Boolean) : [];
  const safeMediaCardItems = Array.isArray(mediaCardItems) ? mediaCardItems.filter(Boolean) : [];
  const safeMediaType = mediaType || "none";
  const safeLayoutMode = layoutMode || "panel";
  const isSideBySide = ["split", "split-reverse", "panel", "immersive"].includes(safeLayoutMode);
  const isReverse = safeLayoutMode === "split-reverse";
  const isCentered = safeLayoutMode === "centered";
  const isStacked = safeLayoutMode === "stacked";
  const shouldShowContentPanel = showContentPanel || safeLayoutMode === "panel";

  const hasImageMedia = Boolean(mediaImageUrl);
  const hasFeatureMedia = safeFeatures.length > 0;
  const hasStatsMedia = safeStats.length > 0;
  const hasProductMedia = safeProductGrids.length > 0;
  const hasCustomMedia =
    Boolean(mediaCardTitle || mediaCardDescription || mediaCardValue || safeMediaCardItems.length);
  const showMediaPanel =
    safeMediaType !== "none" &&
    ((safeMediaType === "image" && hasImageMedia) ||
      (safeMediaType === "features" && hasFeatureMedia) ||
      (safeMediaType === "stats" && hasStatsMedia) ||
      (safeMediaType === "products" && hasProductMedia) ||
      (safeMediaType === "custom-card" && hasCustomMedia));

  const sectionHeights = {
    sm: "min-h-[480px]",
    md: "min-h-[620px]",
    lg: "min-h-[760px]",
    full: "min-h-screen",
  };
  const textAlignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };
  const searchWidthClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-3xl",
    full: "max-w-full",
  };

  const componentId = rawProps?.id || Math.random().toString(36).substr(2, 9);
  const ratio = Math.max(30, Math.min(70, Number(contentSplitRatio) || 56));
  const headingSize = parsePx(headingFontSize, 68);
  const bodySize = parsePx(subheadingFontSize, 20);

  const padY = parsePx(sectionPaddingY, 64);
  const padX = parsePx(sectionPaddingX, 24);

  const backgroundStyle = {
    background: backgroundColor,
    paddingLeft: `clamp(${Math.max(16, padX * 0.4)}px, 5vw, ${padX}px)`,
    paddingRight: `clamp(${Math.max(16, padX * 0.4)}px, 5vw, ${padX}px)`,
    paddingTop: `clamp(${Math.max(32, padY * 0.5)}px, 8vw, ${padY}px)`,
    paddingBottom: `clamp(${Math.max(32, padY * 0.5)}px, 8vw, ${padY}px)`,
  };

  if (backgroundImage) {
    backgroundStyle.backgroundImage =
      String(backgroundImage).includes("gradient(") || String(backgroundImage).includes("url(")
        ? backgroundImage
        : `url(${backgroundImage})`;
    backgroundStyle.backgroundSize = "cover";
    backgroundStyle.backgroundPosition = "center";
  }

  const safeOpacity = Math.max(0, Math.min(1, Number(overlayOpacity) || 0));
  const overlayStyle =
    overlayType === "none"
      ? null
      : overlayType === "solid"
        ? { background: hexToRgba(overlayColor, safeOpacity, `rgba(2,6,23,${safeOpacity})`) }
        : overlayType === "radial"
          ? {
              background: `radial-gradient(circle at 18% 18%, ${hexToRgba(overlayColor, Math.min(0.82, safeOpacity + 0.28), "rgba(2,6,23,0.68)")}, transparent 54%), linear-gradient(160deg, rgba(2,6,23,${Math.min(0.62, safeOpacity + 0.16)}) 0%, rgba(15,23,42,${Math.max(0.12, safeOpacity)}) 58%, transparent 100%)`,
            }
          : {
              background: `linear-gradient(135deg, ${hexToRgba(overlayColor, Math.min(0.84, safeOpacity + 0.24), "rgba(2,6,23,0.72)")}, transparent 62%), linear-gradient(180deg, rgba(2,6,23,${Math.max(0.08, safeOpacity - 0.08)}) 0%, rgba(2,6,23,${Math.max(0.16, safeOpacity)}) 100%)`,
            };

  const headingStyle = {
    maxWidth: headingMaxWidth,
    fontSize: `clamp(2.6rem, ${Math.max(4.2, headingSize / 15)}vw, ${headingSize}px)`,
    lineHeight: 1.05,
    letterSpacing: "-0.025em",
    color: textColor,
  };
  if (showHeadingGradient) {
    headingStyle.backgroundImage = `linear-gradient(135deg, ${headingGradientStart}, ${headingGradientEnd})`;
    headingStyle.WebkitBackgroundClip = "text";
    headingStyle.backgroundClip = "text";
    headingStyle.color = "transparent";
  }

  const subheadingStyle = {
    maxWidth: isCentered ? "860px" : "720px",
    fontSize: `clamp(1.125rem, ${Math.max(1.8, bodySize / 18)}vw, ${bodySize}px)`,
    lineHeight: 1.7,
    color: textColor,
    opacity: 0.9,
  };

  const contentSurfaceStyle = shouldShowContentPanel
    ? {
        background: contentPanelBackground,
        border: contentPanelBorder,
        borderRadius: contentPanelRadius,
        padding: contentPanelPadding,
        boxShadow: contentPanelShadow,
        backdropFilter: "blur(18px)",
      }
    : {};

  const mediaSurfaceStyle = {
    background: mediaPanelBackground,
    border: mediaPanelBorder,
    borderRadius: mediaPanelRadius,
    padding: mediaPanelPadding,
    boxShadow: mediaPanelShadow,
    backdropFilter: "blur(20px)",
    color: "#0f172a",
  };

  const searchSurfaceStyle = {
    background: searchPanelBackground,
    borderRadius: searchPanelBorderRadius,
    padding: searchPanelPadding,
    boxShadow: searchPanelShadow,
    border: "1px solid rgba(255,255,255,0.18)",
  };

  const primaryButtonStyle = getButtonPresentation({
    styleType: buttonStyle,
    backgroundColor: buttonStyle === "custom" ? buttonColor : buttonColor || accentColor,
    textColor: buttonTextColor,
    accentColor,
    radius: buttonBorderRadius,
  });

  const secondaryButtonPresentation = getButtonPresentation({
    styleType: secondaryButtonStyle,
    backgroundColor:
      secondaryButtonStyle === "custom"
        ? secondaryButtonColor
        : secondaryButtonColor || secondaryAccentColor,
    textColor: secondaryButtonTextColor,
    accentColor: secondaryAccentColor,
    radius: buttonBorderRadius,
  });

  const sharedButtonClass =
    "inline-flex min-h-[52px] items-center justify-center px-6 py-3 text-sm font-semibold sm:text-base";
  const contentAreaClass = classNames(
    "flex h-full flex-col",
    textAlignClasses[textAlign] || textAlignClasses.left,
  );
  const contentInnerClass = classNames("w-full", {
    "mx-auto": isCentered,
  });

  const renderSearch = () => {
    if (!showSearch) return null;
    if (safeSearchFields.length > 1) {
      return (
        <form
          className={classNames(
            "mt-8 w-full",
            searchWidthClasses[searchWidth] || searchWidthClasses.lg,
          )}
          onSubmit={(event) => event.preventDefault()}
        >
          <div
            className="flex flex-col gap-1 overflow-hidden lg:flex-row lg:items-stretch"
            style={searchSurfaceStyle}
          >
            {safeSearchFields.map((field, index) => (
              <div
                key={field.id || field.label || `field-${index + 1}`}
                className="flex-1"
                style={{
                  borderRight:
                    index < safeSearchFields.length - 1
                      ? `1px solid ${searchFieldDividerColor}`
                      : "none",
                }}
              >
                <input
                  type="search"
                  placeholder={field.placeholder || field.label || searchPlaceholder}
                  className="h-full w-full bg-transparent px-5 py-4 text-sm outline-none"
                  style={{ color: searchFieldTextColor }}
                />
              </div>
            ))}
            <button
              type="submit"
              className="m-1.5 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold"
              style={{
                background: searchButtonColor,
                color: searchButtonTextColor,
                borderRadius: "16px",
              }}
            >
              {searchButtonText}
            </button>
          </div>
        </form>
      );
    }

    const inputClass = classNames(
      "h-[60px] w-full bg-transparent px-5 text-sm outline-none",
      {
        "rounded-none border-b border-white/35": searchStyle === "underline",
      },
    );

    return (
      <form
        className={classNames(
          "mt-8 w-full",
          searchWidthClasses[searchWidth] || searchWidthClasses.md,
        )}
        onSubmit={(event) => event.preventDefault()}
      >
        <div
          className={classNames("relative overflow-hidden", {
            "rounded-[18px]": searchStyle === "default",
            "rounded-full": searchStyle === "pill",
            "rounded-[24px]": searchStyle === "underline",
          })}
          style={searchSurfaceStyle}
        >
          <input
            type="search"
            placeholder={searchPlaceholder}
            className={inputClass}
            style={{ color: searchFieldTextColor }}
          />
          <button
            type="submit"
            className={classNames(
              "absolute right-1.5 top-1.5 inline-flex min-h-[48px] items-center justify-center px-5 text-sm font-semibold",
              {
                "rounded-[14px]": searchStyle !== "pill",
                "rounded-full": searchStyle === "pill",
              },
            )}
            style={{
              background: searchButtonColor,
              color: searchButtonTextColor,
            }}
          >
            {searchButtonText}
          </button>
        </div>
      </form>
    );
  };

  const renderContentExtras = () => {
    const featureGridColumns = featuresGridColumns?.lg || 3;
    return (
      <>
        {showStats && safeStats.length > 0 && safeMediaType !== "stats" ? (
          statsVariant === "inline" ? (
            <div className="mt-8 w-full">{renderInlineStats(safeStats, textColor)}</div>
          ) : (
            <div className="mt-8 w-full">{renderStatCards(safeStats, textColor, accentColor)}</div>
          )
        ) : null}

        {showFeatures && safeFeatures.length > 0 && safeMediaType !== "features" ? (
          <div
            className={classNames("mt-8 grid w-full gap-4", columnClass(featureGridColumns))}
          >
            {safeFeatures.map((feature) => (
              <div
                key={feature.id || feature.title}
                className="rounded-[24px] border border-white/16 bg-white/10 p-5 backdrop-blur-sm"
              >
                {feature.imageUrl ? (
                  <img
                    src={feature.imageUrl}
                    alt={feature.title || "Feature"}
                    className="mb-4 h-12 w-12 rounded-2xl object-cover"
                  />
                ) : (
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold"
                    style={{
                      background: hexToRgba(accentColor, 0.12, "rgba(236,48,128,0.12)"),
                      color: accentColor,
                    }}
                  >
                    {feature.icon || "*"}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold" style={{ color: textColor }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-6" style={{ color: textColor, opacity: 0.82 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {showProductGrid && safeProductGrids.length > 0 && safeMediaType !== "products" ? (
          <div
            className={classNames(
              "mt-8 grid w-full gap-4",
              columnClass(productGridColumns || 3),
            )}
          >
            {safeProductGrids.map((grid) => (
              <div
                key={grid.id}
                className="rounded-[24px] border border-white/30 bg-white/92 p-4 shadow-sm"
              >
                {!!grid.imageUrl && (
                  <img
                    src={grid.imageUrl}
                    alt={grid.name || "Product"}
                    className="mb-4 h-48 w-full rounded-[18px] object-cover"
                  />
                )}
                <h3
                  className="font-semibold"
                  style={{
                    color: grid.productNameColor || "#0f172a",
                    fontSize: grid.productNameFontSize || "1rem",
                    marginBottom: grid.productNameMarginBottom || "0.5rem",
                    padding: grid.productNamePadding || "0",
                  }}
                >
                  {grid.name}
                </h3>
                {!!grid.productDiscount && (
                  <div
                    style={{
                      color: grid.productDiscountColor || "#16a34a",
                      fontSize: grid.productDiscountFontSize || "0.875rem",
                      marginBottom: grid.productDiscountMarginBottom || "0.5rem",
                      padding: grid.productDiscountPadding || "0",
                    }}
                  >
                    {grid.productDiscount}
                  </div>
                )}
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold"
                  style={{
                    borderRadius: grid.productButtonBorderRadius || "12px",
                    background: grid.productButtonBackgroundColor || accentColor,
                    color: grid.productButtonTextColor || "#ffffff",
                  }}
                >
                  {grid.productButtonText || "Buy now"}
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </>
    );
  };

  const renderMediaPanel = () => {
    if (!showMediaPanel) return null;

    if (safeMediaType === "image" && mediaImageUrl) {
      return (
        <div
          className="relative overflow-hidden"
          style={{ ...mediaSurfaceStyle, aspectRatio: mediaAspectRatio }}
        >
          <img
            src={mediaImageUrl}
            alt={mediaImageAlt}
            className="h-full w-full rounded-[18px]"
            style={{ objectFit: mediaObjectFit }}
            fetchpriority={lazyLoadMedia ? "auto" : "high"}
            loading={lazyLoadMedia ? "lazy" : "eager"}
            decoding="async"
          />
          {(mediaCardTitle || mediaCardDescription || safeMediaCardItems.length > 0) && (
            <div
              className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/60 p-4 backdrop-blur-md"
              style={{ backgroundColor: mediaCardIsTransparent ? "transparent" : mediaCardBackgroundColor, color: mediaCardTextColor }}
            >
              {mediaCardEyebrow ? (
                <p
                  className="mb-2 font-semibold uppercase tracking-[0.24em]"
                  style={{ color: mediaCardEyebrowColor || accentColor, fontSize: mediaCardEyebrowFontSize }}
                >
                  {mediaCardEyebrow}
                </p>
              ) : null}
              {mediaCardTitle ? (
                <h3 className="font-semibold" style={{ color: mediaCardTitleColor || mediaCardTextColor, fontSize: mediaCardTitleFontSize }}>
                  {mediaCardTitle}
                </h3>
              ) : null}
              {mediaCardDescription ? (
                <p className="mt-2 leading-6" style={{ color: mediaCardDescriptionColor, fontSize: mediaCardDescriptionFontSize }}>
                  {mediaCardDescription}
                </p>
              ) : null}
              {safeMediaCardItems.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {safeMediaCardItems.map((item) => (
                    <div
                      key={item.id || item.text}
                      className="flex items-center gap-2"
                      style={{ color: mediaCardItemColor, fontSize: mediaCardItemFontSize }}
                    >
                      <span
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                        style={{
                          background: hexToRgba(accentColor, 0.12, "rgba(236,48,128,0.12)"),
                          color: accentColor,
                        }}
                      >
                        {String(item.text || "").slice(0, 1) || "*"}
                      </span>
                      <span className="leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </div>
      );
    }

    if (safeMediaType === "features") {
      return (
        <div style={mediaSurfaceStyle}>
          {renderFeatureCards(safeFeatures, "#0f172a", accentColor)}
        </div>
      );
    }

    if (safeMediaType === "stats") {
      return (
        <div style={mediaSurfaceStyle}>
          {renderStatCards(safeStats, "#0f172a", accentColor)}
        </div>
      );
    }

    if (safeMediaType === "products") {
      return <div style={mediaSurfaceStyle}>{renderProductCards(safeProductGrids)}</div>;
    }

    return (
      <div className="relative overflow-hidden" style={mediaSurfaceStyle}>
        <div
          className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full blur-3xl"
          style={{ background: hexToRgba(accentColor, 0.24, "rgba(236,48,128,0.24)") }}
        />
        <div
          className="pointer-events-none absolute -bottom-12 left-0 h-44 w-44 rounded-full blur-3xl"
          style={{
            background: hexToRgba(secondaryAccentColor, 0.18, "rgba(99,102,241,0.18)"),
          }}
        />
        {mediaCardEyebrow ? (
          <p
            className="relative z-10 mb-3 font-semibold uppercase tracking-[0.26em]"
            style={{ color: mediaCardEyebrowColor || accentColor, fontSize: mediaCardEyebrowFontSize }}
          >
            {mediaCardEyebrow}
          </p>
        ) : null}
        {mediaCardTitle ? (
          <h3
            className="relative z-10 max-w-md font-semibold leading-tight"
            style={{ color: mediaCardTitleColor, fontSize: mediaCardTitleFontSize || "clamp(1.8rem,3vw,2.6rem)" }}
          >
            {mediaCardTitle}
          </h3>
        ) : null}
        {mediaCardDescription ? (
          <p
            className="relative z-10 mt-4 max-w-lg leading-7"
            style={{ color: mediaCardDescriptionColor, fontSize: mediaCardDescriptionFontSize }}
          >
            {mediaCardDescription}
          </p>
        ) : null}
        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="rounded-[24px] border border-slate-200/80 p-5 backdrop-blur-sm" style={{ backgroundColor: mediaCardIsTransparent ? "transparent" : mediaCardBackgroundColor }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              System signal
            </p>
            <div className="mt-3 font-semibold" style={{ color: mediaCardValueColor, fontSize: mediaCardValueFontSize }}>
              {mediaCardValue || "01"}
            </div>
            <p className="mt-2 text-sm text-slate-600">
              {mediaCardMeta || "Composed from props"}
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-200/80 px-5 py-4 text-sm backdrop-blur-sm" style={{ backgroundColor: mediaCardIsTransparent ? "transparent" : mediaCardBackgroundColor, color: mediaCardItemColor, fontSize: mediaCardItemFontSize }}>
            {safeLayoutMode}
          </div>
        </div>
        {safeMediaCardItems.length > 0 ? (
          <div className="relative z-10 mt-6 space-y-3">
            {safeMediaCardItems.map((item) => (
              <div
                key={item.id || item.text}
                className="flex items-center gap-3 rounded-[18px] border border-slate-200/80 px-4 py-3 backdrop-blur-sm"
                style={{ backgroundColor: mediaCardIsTransparent ? "transparent" : mediaCardBackgroundColor, color: mediaCardItemColor, fontSize: mediaCardItemFontSize }}
              >
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    background: hexToRgba(accentColor, 0.12, "rgba(236,48,128,0.12)"),
                    color: accentColor,
                  }}
                >
                  {String(item.text || "").slice(0, 1) || "*"}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  const mediaPanel = renderMediaPanel();
  const HeadingTag = seoHeadingTag || "h1";
  const contentBlock = (
    <div className={contentAreaClass}>
      <div className={contentInnerClass} style={contentSurfaceStyle}>
        {showEyebrow && eyebrowText ? (
          <div className="mb-5 flex w-full flex-wrap gap-3">
            <span
              className="inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{
                color: eyebrowColor,
                background: eyebrowBackground,
                border: `1px solid ${eyebrowBorderColor}`,
              }}
            >
              {eyebrowText}
            </span>
            {showBadge && badgeText ? (
              <span
                className="inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{
                  color: textColor,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.16)",
                }}
              >
                {badgeText}
              </span>
            ) : null}
          </div>
        ) : showBadge && badgeText ? (
          <span
            className="mb-5 inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{
              color: textColor,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            {badgeText}
          </span>
        ) : null}

        {heading ? (
          <HeadingTag className="font-bold tracking-tight" style={headingStyle}>
            {heading}
          </HeadingTag>
        ) : null}
        {subheading ? (
          <p className="mt-6" style={subheadingStyle}>
            {subheading}
          </p>
        ) : null}

        {(buttonText || (showSecondaryButton && secondaryButtonText)) && (
          <div
            className={classNames("mt-8 flex w-full gap-3", {
              "flex-col sm:flex-row": ctaLayout === "inline",
              "flex-col": ctaLayout === "stacked",
              "justify-center": textAlign === "center",
              "justify-end": textAlign === "right",
            })}
          >
            {buttonText ? (
              <a href={buttonUrl || "#"} className={sharedButtonClass} style={primaryButtonStyle} aria-label={buttonText}>
                {buttonText}
              </a>
            ) : null}
            {showSecondaryButton && secondaryButtonText ? (
              <a
                href={secondaryButtonUrl || "#"}
                className={sharedButtonClass}
                style={secondaryButtonPresentation}
                aria-label={secondaryButtonText}
              >
                {secondaryButtonText}
              </a>
            ) : null}
          </div>
        )}

        {renderSearch()}
        {showTrustBar && safeTrustItems.length > 0 ? (
          <div className="mt-8 w-full">
            {renderTrustItems(safeTrustItems, trustStyle, accentColor, textColor)}
          </div>
        ) : null}
        {renderContentExtras()}
      </div>
    </div>
  );

  const shellClassName = classNames("relative z-10 mx-auto w-full", {
    "max-w-7xl": safeLayoutMode !== "immersive" && contentMaxWidth !== "full",
    "max-w-[1400px]": safeLayoutMode === "immersive",
  });

  return (
    <section
      className={classNames(
        "relative isolate w-full overflow-hidden",
        {
          sm: "min-h-[320px] md:min-h-[480px]",
          md: "min-h-[420px] md:min-h-[620px]",
          lg: "min-h-[520px] md:min-h-[760px]",
          full: "min-h-[80vh] md:min-h-screen",
        }[height] || "min-h-[520px] md:min-h-[760px]",
      )}
      style={backgroundStyle}
      aria-label={heading || "Hero section"}
    >
      {overlayStyle ? (
        <div className="pointer-events-none absolute inset-0" style={overlayStyle} />
      ) : null}
      {showAmbientShapes ? (
        <>
          <div
            className="pointer-events-none absolute left-[-10%] top-[8%] h-64 w-64 rounded-full blur-3xl"
            style={{ background: hexToRgba(accentColor, 0.18, "rgba(236,48,128,0.18)") }}
          />
          <div
            className="pointer-events-none absolute right-[-6%] top-[12%] h-72 w-72 rounded-full blur-3xl"
            style={{
              background: hexToRgba(secondaryAccentColor, 0.16, "rgba(99,102,241,0.16)"),
            }}
          />
          <div
            className="pointer-events-none absolute bottom-[-10%] left-[18%] h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </>
      ) : null}

      <div className={shellClassName}>
        {isSideBySide && mediaPanel ? (
          <>
            <style>{`
              .hero-split-${componentId} {
                grid-template-columns: 1fr;
              }
              @media (min-width: 1024px) {
                .hero-split-${componentId} {
                  grid-template-columns: minmax(0, ${ratio}fr) minmax(0, ${100 - ratio}fr);
                }
              }
            `}</style>
            <div
              className={classNames(`hero-split-${componentId}`, "grid items-center gap-8 lg:gap-12", {
                "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1": isReverse,
                "lg:items-end": safeLayoutMode === "immersive",
              })}
              style={{ gap }}
            >
            {contentBlock}
            <div
              className={classNames("w-full", {
                "lg:translate-y-6": safeLayoutMode === "immersive",
              })}
            >
              {mediaPanel}
            </div>
            </div>
          </>
        ) : isStacked && mediaPanel ? (
          <div className="space-y-8">
            {contentBlock}
            <div className="w-full">{mediaPanel}</div>
          </div>
        ) : isCentered && mediaPanel ? (
          <div className="space-y-8">
            <div className="mx-auto max-w-5xl">{contentBlock}</div>
            <div className="mx-auto w-full max-w-4xl">{mediaPanel}</div>
          </div>
        ) : (
          <div className={classNames({ "mx-auto max-w-5xl": isCentered })}>{contentBlock}</div>
        )}
      </div>
    </section>
  );
};

HeroComponent.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  showEyebrow: PropTypes.bool,
  eyebrowText: PropTypes.string,
  eyebrowColor: PropTypes.string,
  eyebrowBackground: PropTypes.string,
  eyebrowBorderColor: PropTypes.string,
  badgeText: PropTypes.string,
  showBadge: PropTypes.bool,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  height: PropTypes.oneOf(["sm", "md", "lg", "full"]),
  variant: PropTypes.string,
  layoutMode: PropTypes.oneOf([
    "centered",
    "split",
    "split-reverse",
    "stacked",
    "panel",
    "immersive",
  ]),
  contentSplitRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  headingMaxWidth: PropTypes.string,
  contentMaxWidth: PropTypes.string,
  headingFontSize: PropTypes.string,
  subheadingFontSize: PropTypes.string,
  textColor: PropTypes.string,
  sectionPaddingX: PropTypes.string,
  sectionPaddingY: PropTypes.string,
  gap: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  overlayType: PropTypes.oneOf(["none", "solid", "gradient", "radial"]),
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showAmbientShapes: PropTypes.bool,
  accentColor: PropTypes.string,
  secondaryAccentColor: PropTypes.string,
  showHeadingGradient: PropTypes.bool,
  headingGradientStart: PropTypes.string,
  headingGradientEnd: PropTypes.string,
  showContentPanel: PropTypes.bool,
  contentPanelBackground: PropTypes.string,
  contentPanelBorder: PropTypes.string,
  contentPanelRadius: PropTypes.string,
  contentPanelPadding: PropTypes.string,
  contentPanelShadow: PropTypes.string,
  ctaLayout: PropTypes.oneOf(["inline", "stacked"]),
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonStyle: PropTypes.oneOf(["primary", "secondary", "outline", "ghost", "custom"]),
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBorderRadius: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  showSecondaryButton: PropTypes.bool,
  secondaryButtonStyle: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "custom",
  ]),
  secondaryButtonColor: PropTypes.string,
  secondaryButtonTextColor: PropTypes.string,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  searchFields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      placeholder: PropTypes.string,
    }),
  ),
  searchButtonText: PropTypes.string,
  searchWidth: PropTypes.oneOf(["sm", "md", "lg", "full"]),
  searchStyle: PropTypes.oneOf(["default", "pill", "underline"]),
  searchButtonColor: PropTypes.string,
  searchButtonTextColor: PropTypes.string,
  searchPanelBackground: PropTypes.string,
  searchPanelBorderRadius: PropTypes.string,
  searchPanelPadding: PropTypes.string,
  searchPanelShadow: PropTypes.string,
  searchFieldTextColor: PropTypes.string,
  searchFieldDividerColor: PropTypes.string,
  mediaType: PropTypes.oneOf(["none", "image", "features", "stats", "products", "custom-card"]),
  mediaImageUrl: PropTypes.string,
  mediaImageAlt: PropTypes.string,
  mediaObjectFit: PropTypes.string,
  mediaAspectRatio: PropTypes.string,
  mediaPanelBackground: PropTypes.string,
  mediaPanelBorder: PropTypes.string,
  mediaPanelRadius: PropTypes.string,
  mediaPanelPadding: PropTypes.string,
  mediaPanelShadow: PropTypes.string,
  mediaCardEyebrow: PropTypes.string,
  mediaCardTitle: PropTypes.string,
  mediaCardDescription: PropTypes.string,
  mediaCardValue: PropTypes.string,
  mediaCardMeta: PropTypes.string,
  mediaCardItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  mediaCardIsTransparent: PropTypes.bool,
  mediaCardBackgroundColor: PropTypes.string,
  mediaCardTextColor: PropTypes.string,
  mediaCardEyebrowColor: PropTypes.string,
  mediaCardEyebrowFontSize: PropTypes.string,
  mediaCardTitleColor: PropTypes.string,
  mediaCardTitleFontSize: PropTypes.string,
  mediaCardDescriptionColor: PropTypes.string,
  mediaCardDescriptionFontSize: PropTypes.string,
  mediaCardValueColor: PropTypes.string,
  mediaCardValueFontSize: PropTypes.string,
  mediaCardItemColor: PropTypes.string,
  mediaCardItemFontSize: PropTypes.string,
  showTrustBar: PropTypes.bool,
  trustStyle: PropTypes.oneOf(["pill", "inline"]),
  trustItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
  showFeatures: PropTypes.bool,
  featuresGridColumns: PropTypes.shape({
    base: PropTypes.number,
    sm: PropTypes.number,
    lg: PropTypes.number,
  }),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
  showStats: PropTypes.bool,
  statsVariant: PropTypes.oneOf(["cards", "inline"]),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  showProductGrid: PropTypes.bool,
  productGridColumns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  productGrids: PropTypes.arrayOf(PropTypes.object),
  seoHeadingTag: PropTypes.oneOf(["h1", "h2", "div"]),
  lazyLoadMedia: PropTypes.bool,
};

HeroComponent.defaultProps = heroComponentDefaultProps;

export default HeroComponent;
