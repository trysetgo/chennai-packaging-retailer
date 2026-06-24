"use client";

import React from "react";

const IconWrapper = ({ name, className }) => {
  switch (name) {
    case "zap":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "smartphone":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "activity":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
  }
};

export const productHeroDefaultProps = {
  eyebrowText: "Introducing the new standard",
  badgeText: "New Release",
  heading: "Elevate your product experience",
  description:
    "A premium, conversion-focused hero section designed for SaaS, apps, and modern digital products. Capture attention immediately.",
  primaryCtaText: "Get Started",
  primaryCtaUrl: "#",
  secondaryCtaText: "View Demo",
  secondaryCtaUrl: "#",
  productImageUrl:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  productImageAlt: "Product Dashboard Mockup",
  productImageWidth: "100%",
  productImageHeight: "auto",
  imageBorderRadius: "16px",
  imageShadowIntensity: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  customerCount: "10,000+",
  ratingValue: "4.9",
  reviewsCount: "2,500+",
  trustText: "Trusted by leading teams",
  features: [
    {
      id: "feat-1",
      icon: "zap",
      title: "Lightning Fast",
      description: "Built for speed and performance",
    },
    {
      id: "feat-2",
      icon: "shield",
      title: "Bank-grade Security",
      description: "Your data is always protected",
    },
    {
      id: "feat-3",
      icon: "smartphone",
      title: "Mobile Ready",
      description: "Looks great on any device",
    },
  ],
  logos: [
    {
      id: "logo-1",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
    {
      id: "logo-2",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      id: "logo-3",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      alt: "Tesla",
    },
    {
      id: "logo-4",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      alt: "IBM",
    },
  ],
  floatingCards: [
    {
      id: "card-1",
      label: "Active Users",
      value: "2M+",
      icon: "users",
      position: "top-left",
    },
    {
      id: "card-2",
      label: "Uptime",
      value: "99.99%",
      icon: "activity",
      position: "bottom-right",
    },
  ],
  layoutDirection: "row",
  contentAlignment: "left",
  verticalAlignment: "center",
  heroHeight: "auto",
  maxWidth: "1280px",
  contentWidth: "50%",
  imageWidth: "50%",
  sectionWidth: "100%",
  eyebrowSize: "14px",
  headingSize: "48px",
  descriptionSize: "18px",
  ctaSize: "16px",
  headingWeight: "800",
  descriptionWeight: "400",
  letterSpacing: "-0.02em",
  headingLineHeight: "1.1",
  descriptionLineHeight: "1.6",
  sectionBackground: "#ffffff",
  contentBackground: "transparent",
  cardBackground: "#ffffff",
  badgeBackground: "#f3f4f6",
  badgeTextColor: "#4f46e5",
  headingColor: "#111827",
  descriptionColor: "#4b5563",
  primaryButtonBackground: "#4f46e5",
  primaryButtonTextColor: "#ffffff",
  secondaryButtonBackground: "transparent",
  secondaryButtonTextColor: "#111827",
  borderColor: "#e5e7eb",
  accentColor: "#4f46e5",
  sectionPadding: "80px 24px",
  contentPadding: "0",
  imagePadding: "0",
  gridGap: "48px",
  elementGap: "24px",
  buttonGap: "16px",
  borderRadius: "8px",
  borderWidth: "1px",
  glassmorphismToggle: false,
  gradientBackgroundToggle: false,
  gradientStart: "#f8fafc",
  gradientEnd: "#f1f5f9",
  showBadge: true,
  showCtaButtons: true,
  showTrustIndicators: true,
  showFeatureHighlights: true,
  showBrandLogos: true,
  showFloatingCards: true,
  showProductImage: true,
  showBackgroundDecorations: true,
};

const ProductHero = ({ isPreviewing, isEditable, ...restProps }) => {
  const props = { ...productHeroDefaultProps, ...restProps };
  const isInteractive = !isEditable;

  const containerStyle = {
    background: props.gradientBackgroundToggle
      ? `linear-gradient(135deg, ${props.gradientStart}, ${props.gradientEnd})`
      : props.sectionBackground,
    padding: props.sectionPadding,
    width: props.sectionWidth,
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: props.verticalAlignment,
    minHeight: props.heroHeight,
  };

  const innerContainerStyle = {
    maxWidth: props.maxWidth,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: props.layoutDirection === "column" ? "column" : "row",
    alignItems:
      props.layoutDirection === "column"
        ? props.contentAlignment
        : props.verticalAlignment,
    justifyContent: "space-between",
    gap: props.gridGap,
    position: "relative",
    zIndex: 10,
    boxSizing: "border-box",
  };

  const decorationStyle = {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: 0.4,
    zIndex: 1,
    pointerEvents: "none",
  };

  return (
    <section style={containerStyle}>
      {props.showBackgroundDecorations && (
        <>
          <div
            style={{
              ...decorationStyle,
              top: "-10%",
              left: "-10%",
              width: "400px",
              height: "400px",
              backgroundColor: props.accentColor,
            }}
          ></div>
          <div
            style={{
              ...decorationStyle,
              bottom: "-10%",
              right: "-10%",
              width: "500px",
              height: "500px",
              backgroundColor: props.gradientStart || props.accentColor,
              opacity: 0.2,
            }}
          ></div>
        </>
      )}
      <div style={innerContainerStyle} className="flex-col lg:flex-row">
        <div
          style={{
            width:
              props.layoutDirection === "row" ? props.contentWidth : "100%",
            padding: props.contentPadding,
            display: "flex",
            flexDirection: "column",
            gap: props.elementGap,
            alignItems:
              props.contentAlignment === "center"
                ? "center"
                : props.contentAlignment === "right"
                  ? "flex-end"
                  : "flex-start",
            textAlign: props.contentAlignment,
            backgroundColor: props.contentBackground,
            boxSizing: "border-box",
          }}
          className="lg:!w-[50%]"
        >
          {props.showBadge && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                backgroundColor: props.badgeBackground,
                borderRadius: "9999px",
                border: `1px solid ${props.borderColor}`,
              }}
            >
              <span
                style={{
                  backgroundColor: props.accentColor,
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: "bold",
                  padding: "2px 6px",
                  borderRadius: "9999px",
                }}
              >
                {props.badgeText}
              </span>
              <span
                style={{
                  color: props.badgeTextColor,
                  fontSize: props.eyebrowSize,
                  fontWeight: "500",
                }}
              >
                {props.eyebrowText}
              </span>
            </div>
          )}
          <h1
            style={{
              color: props.headingColor,
              fontSize: props.headingSize,
              fontWeight: props.headingWeight,
              lineHeight: props.headingLineHeight,
              letterSpacing: props.letterSpacing,
              margin: 0,
            }}
          >
            {props.heading}
          </h1>
          <p
            style={{
              color: props.descriptionColor,
              fontSize: props.descriptionSize,
              fontWeight: props.descriptionWeight,
              lineHeight: props.descriptionLineHeight,
              margin: 0,
            }}
          >
            {props.description}
          </p>
          {props.showCtaButtons && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: props.buttonGap,
                alignItems: "center",
                justifyContent:
                  props.contentAlignment === "center"
                    ? "center"
                    : props.contentAlignment === "right"
                      ? "flex-end"
                      : "flex-start",
                marginTop: "8px",
              }}
            >
              <a
                href={isInteractive ? props.primaryCtaUrl : "#"}
                onClick={(e) => {
                  if (!isInteractive) e.preventDefault();
                }}
                style={{
                  backgroundColor: props.primaryButtonBackground,
                  color: props.primaryButtonTextColor,
                  fontSize: props.ctaSize,
                  fontWeight: "600",
                  padding: "12px 24px",
                  borderRadius: props.borderRadius,
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  transition: "all 0.2s",
                }}
              >
                {props.primaryCtaText}
              </a>
              <a
                href={isInteractive ? props.secondaryCtaUrl : "#"}
                onClick={(e) => {
                  if (!isInteractive) e.preventDefault();
                }}
                style={{
                  backgroundColor: props.secondaryButtonBackground,
                  color: props.secondaryButtonTextColor,
                  fontSize: props.ctaSize,
                  fontWeight: "600",
                  padding: "12px 24px",
                  borderRadius: props.borderRadius,
                  border: `1px solid ${props.borderColor}`,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s",
                }}
              >
                {props.secondaryCtaText}
              </a>
            </div>
          )}
          {props.showTrustIndicators && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "16px",
                flexWrap: "wrap",
                justifyContent:
                  props.contentAlignment === "center"
                    ? "center"
                    : props.contentAlignment === "right"
                      ? "flex-end"
                      : "flex-start",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    style={{ width: "16px", height: "16px", color: "#fbbf24" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: "14px", color: props.descriptionColor }}>
                <span style={{ fontWeight: "700", color: props.headingColor }}>
                  {props.ratingValue}
                </span>
                /5 rating from{" "}
                <span style={{ fontWeight: "600" }}>{props.reviewsCount}</span>{" "}
                reviews
              </div>
            </div>
          )}
          {props.showFeatureHighlights &&
            props.features &&
            props.features.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    props.contentAlignment === "center"
                      ? "repeat(auto-fit, minmax(120px, 1fr))"
                      : "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "24px",
                  marginTop: "32px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {props.features.map((feat) => (
                  <div
                    key={feat.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      alignItems:
                        props.contentAlignment === "center"
                          ? "center"
                          : props.contentAlignment === "right"
                            ? "flex-end"
                            : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        backgroundColor: `${props.accentColor}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: props.accentColor,
                      }}
                    >
                      <IconWrapper name={feat.icon} className="w-5 h-5" />
                    </div>
                    <h4
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: props.headingColor,
                        margin: 0,
                      }}
                    >
                      {feat.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        color: props.descriptionColor,
                        margin: 0,
                        lineHeight: "1.4",
                      }}
                    >
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
        </div>
        {props.showProductImage && (
          <div
            style={{
              width:
                props.layoutDirection === "row" ? props.imageWidth : "100%",
              padding: props.imagePadding,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
            className="lg:!w-[50%] mt-8 lg:mt-0"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                borderRadius: props.imageBorderRadius,
                boxShadow: props.imageShadowIntensity,
                backgroundColor: props.cardBackground,
                border: `${props.borderWidth} solid ${props.borderColor}`,
                overflow: "visible",
              }}
            >
              <img
                src={props.productImageUrl}
                alt={props.productImageAlt}
                style={{
                  width: props.productImageWidth,
                  height: props.productImageHeight,
                  display: "block",
                  borderRadius: `calc(${props.imageBorderRadius} - ${props.borderWidth})`,
                  objectFit: "cover",
                }}
              />
              {props.showFloatingCards &&
                props.floatingCards &&
                props.floatingCards.length > 0 && (
                  <>
                    {props.floatingCards.map((card) => {
                      let posStyles = {};
                      if (card.position === "top-left")
                        posStyles = { top: "-20px", left: "-20px" };
                      else if (card.position === "top-right")
                        posStyles = { top: "-20px", right: "-20px" };
                      else if (card.position === "bottom-left")
                        posStyles = { bottom: "-20px", left: "-20px" };
                      else if (card.position === "bottom-right")
                        posStyles = { bottom: "-20px", right: "-20px" };
                      else
                        posStyles = {
                          top: "50%",
                          left: "-30px",
                          transform: "translateY(-50%)",
                        };
                      const glassStyle = props.glassmorphismToggle
                        ? {
                            background: "rgba(255, 255, 255, 0.7)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                          }
                        : { background: props.cardBackground };
                      return (
                        <div
                          key={card.id}
                          className="hidden md:flex"
                          style={{
                            position: "absolute",
                            ...posStyles,
                            ...glassStyle,
                            padding: "12px 16px",
                            borderRadius: props.borderRadius,
                            boxShadow:
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                            border: `1px solid ${props.borderColor}`,
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            zIndex: 20,
                          }}
                        >
                          <div
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                              backgroundColor: `${props.accentColor}15`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: props.accentColor,
                            }}
                          >
                            <IconWrapper name={card.icon} className="w-5 h-5" />
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: props.headingColor,
                                lineHeight: "1.2",
                              }}
                            >
                              {card.value}
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: props.descriptionColor,
                                fontWeight: "500",
                              }}
                            >
                              {card.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
            </div>
          </div>
        )}
      </div>
      {props.showBrandLogos && props.logos && props.logos.length > 0 && (
        <div
          style={{
            width: "100%",
            maxWidth: props.maxWidth,
            margin: "0 auto",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: `1px solid ${props.borderColor}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: props.descriptionColor,
              marginBottom: "24px",
              fontWeight: "500",
            }}
          >
            {props.trustText}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "48px",
              alignItems: "center",
              opacity: 0.6,
            }}
          >
            {props.logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.url}
                alt={logo.alt}
                style={{
                  height: "32px",
                  maxWidth: "140px",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductHero;
