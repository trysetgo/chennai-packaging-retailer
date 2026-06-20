"use client";

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const FALLBACK_LOGOS = [
  { id: "intel", name: "Intel", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg", category: "Semiconductors" },
  { id: "nvidia", name: "NVIDIA", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", category: "AI Infrastructure" },
  { id: "github", name: "GitHub", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", category: "Developer Tools" },
  { id: "cloudflare", name: "Cloudflare", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Cloudflare_logo.svg", category: "Performance" },
  { id: "stripe", name: "Stripe", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Stripe_Logo%2C_revised_2016.svg", category: "Payments" },
  { id: "figma", name: "Figma", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", category: "Design Systems" },
];

const parsePx = (value, fallback) => {
  const raw = String(value || "").trim();
  if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
  const match = raw.match(/^(-?\d+(?:\.\d+)?)px$/i);
  return match ? Number(match[1]) : fallback;
};

const toPx = (value, fallback) => `${parsePx(value, fallback)}px`;
const toBorder = (width, color, fallback) =>
  color ? `${Math.max(0, Number(width) || 0)}px solid ${color}` : fallback;
const toShadow = (strength, fallback, y = 28, blur = 80) => {
  if (strength == null || strength === "") return fallback;
  const opacity = Math.max(0, Math.min(0.35, Number(strength) / 100));
  return `0 ${Math.round((Number(y) * Number(strength || 0)) / 12)}px ${Math.round((Number(blur) * Number(strength || 0)) / 12)}px rgba(15, 23, 42, ${opacity.toFixed(3)})`;
};

const BrandLogoCarouselComponent = (incomingProps) => {
  const props = incomingProps.props || incomingProps;
  const { isPreviewing, isEditable } = incomingProps;
  const config = {
    ...brandLogoCarouselDefaultProps,
    ...props,
  };

  const {
    id,
    slides,
    layoutMode,
    marqueeSpeed,
    showCards,
    fullWidth,
    plainBackground,
    eyebrow,
    title,
    subtitle,
    ctaLabel,
    ctaHref,
    showHeader,
    showEyebrow,
    showSubtitle,
    showCta,
    showControls,
    showIndicators,
    showCategoryLabels,
    autoplay,
    interval,
    pauseOnHover,
    sectionMaxWidth,
    sectionPaddingY,
    sectionPaddingX,
    sectionRadius,
    sectionBorder,
    sectionShadow,
    showBackgroundGradient,
    backgroundColor,
    backgroundGradient,
    surfaceColor,
    accentColor,
    textColor,
    mutedTextColor,
    trackBackground,
    cardBackground,
    activeCardBackground,
    cardBorder,
    activeCardBorder,
    cardShadow,
    activeCardShadow,
    sectionBorderWidth,
    sectionBorderColor,
    cardBorderWidth,
    cardBorderColor,
    activeCardBorderWidth,
    activeCardBorderColor,
    sectionShadowStrength,
    cardShadowStrength,
    activeCardShadowStrength,
    logoSize,
    logoOpacity,
    logoHoverOpacity,
    logoBorderRadius,
    gap,
    cardMinWidth,
    cardPadding,
    headerAlign,
    trackPadding,
    style,
    className,
  } = config;

  const interactionsEnabled = isPreviewing || !isEditable;
  const safeSlides = Array.isArray(slides) && slides.length ? slides : FALLBACK_LOGOS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const canSlide = safeSlides.length > 1;
  const uniqueId = id || "brand-carousel";

  useEffect(() => {
    if (!autoplay || isPaused || !canSlide || layoutMode === "marquee") return undefined;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeSlides.length);
    }, Math.max(1800, Number(interval) || 3200));
    return () => clearInterval(timer);
  }, [autoplay, canSlide, interval, isPaused, safeSlides.length, layoutMode]);

  useEffect(() => {
    if (layoutMode === "marquee") return;
    const track = trackRef.current;
    if (!track) return;
    const nodes = track.children;
    if (nodes[currentIndex]) {
      nodes[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex, layoutMode]);

  const justifyContent =
    headerAlign === "center" ? "center" : headerAlign === "left" ? "flex-start" : "space-between";
  const resolvedSectionBorder = toBorder(sectionBorderWidth, sectionBorderColor, sectionBorder);
  const resolvedCardBorder = toBorder(cardBorderWidth, cardBorderColor, cardBorder);
  const resolvedActiveCardBorder = toBorder(activeCardBorderWidth, activeCardBorderColor, activeCardBorder);
  const resolvedSectionShadow = toShadow(sectionShadowStrength, sectionShadow, 28, 80);
  const resolvedCardShadow = toShadow(cardShadowStrength, cardShadow, 14, 34);
  const resolvedActiveCardShadow = toShadow(activeCardShadowStrength, activeCardShadow, 24, 54);
  const gapValue = parsePx(gap, 20);

  const renderSlide = (slide, index, isDuplicate = false) => {
    const isActive = layoutMode === "slider" ? index === currentIndex : false;
    const card = (
      <div
        className={`group flex shrink-0 flex-col items-center justify-center text-center transition-all duration-300 ${!showCards ? "py-4 px-2" : ""}`}
        style={{
          minWidth: cardMinWidth,
          minHeight: showCards ? parsePx(logoSize, 72) + (showCategoryLabels ? 86 : 58) : "auto",
          padding: showCards ? cardPadding : 0,
          borderRadius: showCards ? logoBorderRadius : 0,
          border: showCards ? (isActive ? resolvedActiveCardBorder : resolvedCardBorder) : "none",
          background: showCards ? (isActive ? activeCardBackground : cardBackground) : "transparent",
          boxShadow: showCards ? (isActive ? resolvedActiveCardShadow : resolvedCardShadow) : "none",
          scrollSnapAlign: "center",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            height: logoSize,
            width: showCards ? logoSize : "auto",
          }}
        >
          <img
            src={slide.logoUrl || "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"}
            alt={slide.name}
            loading="lazy"
            draggable={false}
            className={`evo-logo-item-${uniqueId} max-w-full max-h-full object-contain transition-all duration-300`}
          />
        </div>
        {showCards && (
          <div className="mt-4">
            <p className="text-sm font-semibold" style={{ color: textColor }}>
              {slide.name}
            </p>
            {showCategoryLabels && slide.category ? (
              <p className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: accentColor }}>
                {slide.category}
              </p>
            ) : null}
          </div>
        )}
      </div>
    );

    return slide.linkUrl && !isDuplicate ? (
      <a
        key={isDuplicate ? `dup-${index}` : slide.id || index}
        href={slide.linkUrl}
        onClick={(event) => {
          if (!interactionsEnabled) event.preventDefault();
        }}
        onMouseEnter={() => layoutMode === "slider" && setCurrentIndex(index)}
        className={`block shrink-0 ${isActive && showCards ? "evo-logo-card-active" : ""}`}
      >
        {card}
      </a>
    ) : (
      <div key={isDuplicate ? `dup-${index}` : slide.id || index} className={`block shrink-0 ${isActive && showCards ? "evo-logo-card-active" : ""}`}>
        {card}
      </div>
    );
  };

  return (
    <section
      id={uniqueId}
      className={`w-full ${className}`.trim()}
      style={{
        padding: fullWidth ? `${toPx(sectionPaddingY, 56)} 0` : `${toPx(sectionPaddingY, 56)} ${toPx(sectionPaddingX, 24)}`,
        backgroundColor,
        backgroundImage: (showBackgroundGradient && backgroundGradient && !plainBackground) ? backgroundGradient : "none",
        ...style,
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <style>{`
        .evo-logo-track-${uniqueId}::-webkit-scrollbar { display: none; }
        .evo-logo-track-${uniqueId} { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes evo-marquee-${uniqueId} {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - ${gapValue / 2}px)); }
        }
        .evo-marquee-content-${uniqueId} {
          display: flex;
          width: max-content;
          animation: evo-marquee-${uniqueId} ${marqueeSpeed}s linear infinite;
        }
        ${pauseOnHover ? `.evo-marquee-content-${uniqueId}:hover { animation-play-state: paused; }` : ""}

        .evo-logo-item-${uniqueId} {
          opacity: ${logoOpacity};
          filter: grayscale(100%);
        }
        .evo-logo-card-active .evo-logo-item-${uniqueId}, 
        .group:hover .evo-logo-item-${uniqueId} {
          opacity: ${logoHoverOpacity};
          filter: grayscale(0%);
        }
      `}</style>
      <div
        className="mx-auto overflow-hidden"
        style={{
          maxWidth: fullWidth ? "100%" : sectionMaxWidth,
          borderRadius: fullWidth || plainBackground ? 0 : sectionRadius,
          border: plainBackground ? "none" : resolvedSectionBorder,
          boxShadow: plainBackground ? "none" : resolvedSectionShadow,
          background: plainBackground ? "transparent" : surfaceColor,
          backdropFilter: plainBackground ? "none" : "blur(12px)",
        }}
      >
        {showHeader ? (
          <div
            className="flex flex-col gap-5 border-b px-6 py-6 lg:flex-row lg:items-end"
            style={{
              justifyContent,
              borderColor: "rgba(15,23,42,0.08)",
            }}
          >
            <div className="max-w-2xl">
              {showEyebrow ? (
                <p
                  className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: accentColor }}
                >
                  {eyebrow}
                </p>
              ) : null}
              <h2
                className="text-2xl font-semibold leading-tight md:text-[2rem]"
                style={{ color: textColor }}
              >
                {title}
              </h2>
              {showSubtitle ? (
                <p className="mt-3 max-w-xl text-sm leading-6" style={{ color: mutedTextColor }}>
                  {subtitle}
                </p>
              ) : null}
            </div>
            {showCta ? (
              <a
                href={ctaHref}
                onClick={(event) => {
                  if (!interactionsEnabled) event.preventDefault();
                }}
                className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: textColor, color: "#ffffff" }}
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}

        {layoutMode === "marquee" ? (
          <div className="relative overflow-hidden px-4 py-5 md:px-6">
            <div className="overflow-hidden rounded-[24px]" style={{ background: plainBackground ? "transparent" : trackBackground, padding: trackPadding }}>
              <div className={`evo-marquee-content-${uniqueId}`} style={{ gap }}>
                {[...safeSlides, ...safeSlides].map((slide, index) => renderSlide(slide, index % safeSlides.length, index >= safeSlides.length))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative px-4 py-5 md:px-6">
            <div
              className={`evo-logo-track-${uniqueId} overflow-x-auto rounded-[24px]`}
              ref={trackRef}
              style={{
                display: "flex",
                gap,
                padding: trackPadding,
                scrollSnapType: "x mandatory",
                background: plainBackground ? "transparent" : trackBackground,
              }}
            >
              {safeSlides.map((slide, index) => renderSlide(slide, index))}
            </div>

            {(showControls || showIndicators) && canSlide ? (
            <div className="mt-5 flex items-center justify-between gap-4">
              {showIndicators ? (
                <div className="flex items-center gap-2">
                  {safeSlides.map((slide, index) => (
                    <button
                      key={`${slide.id || index}-indicator`}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to ${slide.name}`}
                      className="rounded-full transition-all"
                      style={{
                        width: index === currentIndex ? "22px" : "8px",
                        height: "8px",
                        background: index === currentIndex ? accentColor : "rgba(107,114,128,0.28)",
                      }}
                    />
                  ))}
                </div>
              ) : (
                <span />
              )}
              {showControls ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + safeSlides.length) % safeSlides.length)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: textColor, color: "#ffffff" }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % safeSlides.length)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: textColor, color: "#ffffff" }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        )}
      </div>
    </section>
  );
};

BrandLogoCarouselComponent.propTypes = {
  id: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      logoUrl: PropTypes.string,
      linkUrl: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  layoutMode: PropTypes.oneOf(["slider", "marquee"]),
  marqueeSpeed: PropTypes.number,
  showCards: PropTypes.bool,
  fullWidth: PropTypes.bool,
  plainBackground: PropTypes.bool,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaHref: PropTypes.string,
  showHeader: PropTypes.bool,
  showEyebrow: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  showCta: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  showCategoryLabels: PropTypes.bool,
  autoplay: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pauseOnHover: PropTypes.bool,
  sectionMaxWidth: PropTypes.string,
  sectionPaddingY: PropTypes.string,
  sectionPaddingX: PropTypes.string,
  sectionRadius: PropTypes.string,
  sectionBorder: PropTypes.string,
  sectionShadow: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundGradient: PropTypes.string,
  surfaceColor: PropTypes.string,
  accentColor: PropTypes.string,
  textColor: PropTypes.string,
  mutedTextColor: PropTypes.string,
  trackBackground: PropTypes.string,
  cardBackground: PropTypes.string,
  activeCardBackground: PropTypes.string,
  cardBorder: PropTypes.string,
  activeCardBorder: PropTypes.string,
  cardShadow: PropTypes.string,
  activeCardShadow: PropTypes.string,
  logoSize: PropTypes.string,
  logoOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  logoHoverOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  logoBorderRadius: PropTypes.string,
  gap: PropTypes.string,
  cardMinWidth: PropTypes.string,
  cardPadding: PropTypes.string,
  headerAlign: PropTypes.string,
  trackPadding: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export const brandLogoCarouselDefaultProps = {
  slides: FALLBACK_LOGOS,
  layoutMode: "marquee",
  marqueeSpeed: 40,
  showCards: false,
  fullWidth: false,
  plainBackground: false,
  eyebrow: "Trusted by modern teams",
  title: "Selected brands building with us.",
  subtitle: "A premium logo marquee for credibility bands, investor pages, and partner highlights.",
  ctaLabel: "View all",
  ctaHref: "#",
  showHeader: true,
  showEyebrow: true,
  showSubtitle: true,
  showCta: false,
  showControls: true,
  showIndicators: false,
  showCategoryLabels: true,
  autoplay: true,
  interval: 3200,
  pauseOnHover: true,
  showBackgroundGradient: true,
  sectionMaxWidth: "1240px",
  sectionPaddingY: "56px",
  sectionPaddingX: "24px",
  sectionRadius: "28px",
  sectionBorder: "1px solid rgba(15,23,42,0.08)",
  sectionShadow: "0 28px 80px rgba(15, 23, 42, 0.12)",
  backgroundColor: "#f7f1e8",
  backgroundGradient: "linear-gradient(135deg, #f9f4ec 0%, #f3ebdf 52%, #efe5d5 100%)",
  surfaceColor: "rgba(255,255,255,0.74)",
  accentColor: "#af7a3b",
  textColor: "#111827",
  mutedTextColor: "#6b7280",
  trackBackground: "rgba(255,255,255,0.54)",
  cardBackground: "rgba(255,255,255,0.92)",
  activeCardBackground: "#ffffff",
  cardBorder: "1px solid rgba(15,23,42,0.08)",
  activeCardBorder: "1px solid rgba(175,122,59,0.28)",
  cardShadow: "0 14px 34px rgba(15,23,42,0.08)",
  activeCardShadow: "0 24px 54px rgba(15,23,42,0.14)",
  sectionBorderWidth: 1,
  sectionBorderColor: "rgba(15,23,42,0.08)",
  cardBorderWidth: 1,
  cardBorderColor: "rgba(15,23,42,0.08)",
  activeCardBorderWidth: 1,
  activeCardBorderColor: "rgba(175,122,59,0.28)",
  sectionShadowStrength: 12,
  cardShadowStrength: 8,
  activeCardShadowStrength: 14,
  logoSize: "56px",
  logoOpacity: 0.64,
  logoHoverOpacity: 1,
  logoBorderRadius: "18px",
  gap: "40px",
  cardMinWidth: "160px",
  cardPadding: "20px",
  headerAlign: "space-between",
  trackPadding: "32px 20px",
};

BrandLogoCarouselComponent.defaultProps = brandLogoCarouselDefaultProps;

export default BrandLogoCarouselComponent;
