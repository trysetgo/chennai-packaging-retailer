"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const responsivePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    base: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
]);

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const getResponsiveValue = (propValue, defaultValue, windowWidth) => {
  if (typeof propValue === "object" && propValue !== null) {
    const breakpoints = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    };

    let resolvedValue = propValue.base;

    if (windowWidth >= breakpoints.sm && propValue.sm) {
      resolvedValue = propValue.sm;
    }
    if (windowWidth >= breakpoints.md && propValue.md) {
      resolvedValue = propValue.md;
    }
    if (windowWidth >= breakpoints.lg && propValue.lg) {
      resolvedValue = propValue.lg;
    }
    if (windowWidth >= breakpoints.xl && propValue.xl) {
      resolvedValue = propValue.xl;
    }

    return resolvedValue !== undefined ? resolvedValue : defaultValue;
  }

  return propValue !== undefined ? propValue : defaultValue;
};

const SingleImageCard = ({
  imageUrl,
  imageAlt = "Card Image",
  title = "Card Title",
  description = "Card description goes here. Provide some engaging details.",
  imagePadding = "0px",
  buttonText,
  buttonLink = "#",
  backgroundColor = "#ffffff",
  contentBackgroundColor = "transparent",
  imageBackgroundColor = "transparent",
  contentMargin = "0px",
  contentPadding = "1rem",
  borderRadius = "4px",
  boxShadow = "0 2px 4px rgba(0,0,0,0.1)",
  width = { base: "auto" },
  textAlign = "left",
  imageObjectFit = "cover",
  imageHeight = "200px",
  buttonBackgroundColor = "#007bff",
  buttonTextColor = "#ffffff",
  buttonBorder = "none",
  buttonBoxShadow = "none",
  buttonFontSize = "0.95rem",
  buttonFontWeight = "600",
  titleColor = "#0f172a",
  descriptionColor = "#475569",
  titleFontSize = "1.25rem",
  titleFontWeight = "700",
  descriptionFontSize = "1rem",
  descriptionLineHeight = "1.6",
  borderColor = "#e2e8f0",
  buttonAlignment = "left",
  buttonBorderRadius = "8px",
  buttonPaddingY = "10px",
  buttonPaddingX = "16px",
  style = {},
  imageWidth = { base: "40%" },
  contentWidth = { base: "100%", md: "60%" },
  contentMaxWidth = "520px",
  titleMaxWidth = "none",
  descriptionMaxWidth = "none",
  layoutOrientation = { base: "vertical", md: "horizontal" },
  imagePosition = "left",
  contentAlignment = "center",
  cardVariant = "classic",
  enableSplitClip = false,
  splitClipSize = "72px",
  contentGap = "0.75rem",
  enableImageZoom = false,
  eyebrowText = "",
  eyebrowColor = "#64748b",
  eyebrowFontSize = "0.8rem",
  eyebrowFontWeight = "700",
  eyebrowLetterSpacing = "0.08em",
  marginTop = { base: "0px" },
  marginRight = { base: "0px" },
  marginBottom = { base: "0px" },
  marginLeft = { base: "0px" },
  enableHoverAnimation = false,
  hoverScale = 1.03,
  hoverShadow = "0px 10px 20px rgba(0,0,0,0.2)",
  hoverTransitionDuration = 0.3,
  showImage = true,
  cardHeight,
  imageCreditText = "",
}) => {
  const defaultImageUrl = "https://via.placeholder.com/1200x560.png?text=Image";
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const currentLayoutOrientation = getResponsiveValue(
    layoutOrientation,
    "vertical",
    windowWidth,
  );
  const currentImageWidth = getResponsiveValue(imageWidth, "100%", windowWidth);
  const currentContentWidth = getResponsiveValue(
    contentWidth,
    "100%",
    windowWidth,
  );
  const currentWidth = getResponsiveValue(width, "auto", windowWidth);
  const currentMarginTop = getResponsiveValue(marginTop, "0px", windowWidth);
  const currentMarginRight = getResponsiveValue(
    marginRight,
    "0px",
    windowWidth,
  );
  const currentMarginBottom = getResponsiveValue(
    marginBottom,
    "0px",
    windowWidth,
  );
  const currentMarginLeft = getResponsiveValue(marginLeft, "0px", windowWidth);
  const currentCardHeight = getResponsiveValue(cardHeight, "auto", windowWidth);
  const currentContentPadding = getResponsiveValue(
    contentPadding,
    "1rem",
    windowWidth,
  );
  const currentContentMargin = getResponsiveValue(
    contentMargin,
    "0px",
    windowWidth,
  );

  const isHorizontalLayout =
    currentLayoutOrientation === "horizontal" && showImage;
  const isSplitBannerVariant = cardVariant === "split-banner";
  const shouldUseSplitBanner =
    isHorizontalLayout &&
    (isSplitBannerVariant || Boolean(enableSplitClip));
  const effectiveSplitClipSize = shouldUseSplitBanner ? splitClipSize : "0px";
  const effectiveCardHeight =
    currentCardHeight !== "auto"
      ? currentCardHeight
      : isSplitBannerVariant
        ? "240px"
        : "auto";
  const effectiveContentPadding =
    currentContentPadding !== "1rem"
      ? currentContentPadding
      : isSplitBannerVariant
        ? "2rem 2.25rem"
        : "1rem";
  const effectiveContentGap =
    contentGap !== "0.75rem"
      ? contentGap
      : isSplitBannerVariant
        ? "0.6rem"
        : "0.75rem";
  const effectiveBorderRadius =
    borderRadius !== "4px"
      ? borderRadius
      : isSplitBannerVariant
        ? "0px"
        : "4px";
  const effectiveBoxShadow =
    boxShadow !== "0 2px 4px rgba(0,0,0,0.1)"
      ? boxShadow
      : isSplitBannerVariant
        ? "0 18px 40px rgba(15,23,42,0.08)"
        : boxShadow;

  const resolvedContentMaxWidth =
    contentMaxWidth && contentMaxWidth !== "none" ? contentMaxWidth : undefined;
  const resolvedTitleMaxWidth =
    titleMaxWidth && titleMaxWidth !== "none" ? titleMaxWidth : undefined;
  const resolvedDescriptionMaxWidth =
    descriptionMaxWidth && descriptionMaxWidth !== "none"
      ? descriptionMaxWidth
      : undefined;

  const cardStyle = {
    backgroundColor,
    border: `1px solid ${borderColor}`,
    borderRadius: effectiveBorderRadius,
    overflow: "hidden",
    width: currentWidth,
    height: effectiveCardHeight,
    display: "flex",
    flexDirection: isHorizontalLayout
      ? imagePosition === "left"
        ? "row"
        : "row-reverse"
      : "column",
    alignItems: "stretch",
    marginTop: currentMarginTop,
    marginRight: currentMarginRight,
    marginBottom: currentMarginBottom,
    marginLeft: currentMarginLeft,
    ...style,
  };

  const imageContainerStyle = {
    position: "relative",
    flexShrink: 0,
    flex: isHorizontalLayout ? `0 0 ${currentImageWidth}` : undefined,
    width: isHorizontalLayout ? currentImageWidth : "100%",
    backgroundColor: imageBackgroundColor,
    display: showImage ? "flex" : "none",
    alignSelf: isHorizontalLayout ? "stretch" : undefined,
    zIndex: shouldUseSplitBanner ? 2 : 1,
    overflow: "hidden",
  };

  const imageStyle = {
    display: "block",
    width: isHorizontalLayout ? "100%" : currentImageWidth,
    height: isHorizontalLayout ? "100%" : imageHeight,
    objectFit: imageObjectFit,
    cursor: enableImageZoom ? "zoom-in" : "default",
    flexShrink: 0,
  };

  const imageCreditStyle = {
    position: "absolute",
    bottom: "5px",
    right: "5px",
    padding: "3px 6px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    fontSize: "0.7rem",
    borderRadius: "3px",
    zIndex: 1,
    lineHeight: 1,
    pointerEvents: "none",
  };

  const contentPanelStyle = {
    padding: effectiveContentPadding,
    margin: currentContentMargin,
    textAlign,
    flexGrow: isHorizontalLayout ? 0 : 1,
    flex: isHorizontalLayout ? `0 0 ${currentContentWidth}` : "1 1 auto",
    width: isHorizontalLayout ? currentContentWidth : "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: contentAlignment,
    backgroundColor: contentBackgroundColor,
    alignSelf: isHorizontalLayout ? "stretch" : undefined,
    position: "relative",
    zIndex: 1,
  };

  const splitOverlayStyle = shouldUseSplitBanner
    ? {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: effectiveSplitClipSize,
        backgroundColor:
          contentBackgroundColor === "transparent"
            ? backgroundColor
            : contentBackgroundColor,
        boxShadow:
          imagePosition === "right"
            ? "-10px 0 24px rgba(15,23,42,0.08)"
            : "10px 0 24px rgba(15,23,42,0.08)",
        left: imagePosition === "right" ? "-1px" : undefined,
        right: imagePosition === "left" ? "-1px" : undefined,
        transform:
          imagePosition === "right"
            ? "translateX(-42%) skewX(-18deg)"
            : "translateX(42%) skewX(18deg)",
        transformOrigin:
          imagePosition === "right" ? "left center" : "right center",
        pointerEvents: "none",
        zIndex: 3,
      }
    : null;

  const contentInnerStyle = {
    width: "100%",
    maxWidth: resolvedContentMaxWidth,
    display: "flex",
    flexDirection: "column",
    gap: effectiveContentGap,
    margin:
      textAlign === "center"
        ? "0 auto"
        : textAlign === "right"
          ? "0 0 0 auto"
          : "0",
  };

  const buttonWrapperStyle = {
    textAlign: buttonAlignment,
  };

  const buttonStyle = {
    display: "inline-block",
    padding: `${buttonPaddingY} ${buttonPaddingX}`,
    backgroundColor: buttonBackgroundColor,
    color: buttonTextColor,
    textDecoration: "none",
    borderRadius: buttonBorderRadius,
    fontWeight: buttonFontWeight,
    fontSize: buttonFontSize,
    lineHeight: 1.2,
    border: buttonBorder,
    boxShadow: buttonBoxShadow,
  };

  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: effectiveBoxShadow,
    },
    hover: {
      scale: enableHoverAnimation ? hoverScale : 1,
      boxShadow: enableHoverAnimation ? hoverShadow : effectiveBoxShadow,
    },
  };

  const handleImageClick = () => {
    if (enableImageZoom && showImage) {
      setIsZoomModalOpen(true);
    }
  };

  const closeModal = (event) => {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("modal-close-button")
    ) {
      setIsZoomModalOpen(false);
    }
  };

  const zoomModalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    cursor: "zoom-out",
  };

  const zoomedImageStyle = {
    maxWidth: "90%",
    maxHeight: "90%",
    objectFit: "contain",
    border: "3px solid white",
    borderRadius: "4px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "30px",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    background: "none",
    border: "none",
  };

  return (
    <>
      <motion.div
        style={cardStyle}
        className={`image-card-${currentLayoutOrientation}`}
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: hoverTransitionDuration }}
      >
        {showImage && (
          <div style={imageContainerStyle} onClick={handleImageClick}>
            <div style={{ padding: imagePadding, width: "100%" }}>
              <img
                src={imageUrl || defaultImageUrl}
                alt={imageAlt}
                style={imageStyle}
              />
            </div>
            {splitOverlayStyle ? <div style={splitOverlayStyle} /> : null}
            {imageCreditText ? (
              <span style={imageCreditStyle}>{imageCreditText}</span>
            ) : null}
          </div>
        )}

        <div style={contentPanelStyle}>
          <div style={contentInnerStyle}>
            {eyebrowText ? (
              <span
                style={{
                  display: "inline-block",
                  color: eyebrowColor,
                  fontSize: eyebrowFontSize,
                  fontWeight: eyebrowFontWeight,
                  letterSpacing: eyebrowLetterSpacing,
                  textTransform: "uppercase",
                }}
              >
                {eyebrowText}
              </span>
            ) : null}

            {title ? (
              <h3
                style={{
                  margin: 0,
                  fontSize: titleFontSize,
                  fontWeight: titleFontWeight,
                  color: titleColor,
                  maxWidth: resolvedTitleMaxWidth,
                  lineHeight: 1.15,
                }}
              >
                {title}
              </h3>
            ) : null}

            {description ? (
              <p
                style={{
                  margin: 0,
                  color: descriptionColor,
                  fontSize: descriptionFontSize,
                  lineHeight: descriptionLineHeight,
                  maxWidth: resolvedDescriptionMaxWidth,
                }}
              >
                {description}
              </p>
            ) : null}

            {buttonText ? (
              <div style={buttonWrapperStyle}>
                <a href={buttonLink} style={buttonStyle}>
                  {buttonText}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>

      {isZoomModalOpen && showImage ? (
        <div style={zoomModalStyle} onClick={closeModal}>
          <button
            style={closeButtonStyle}
            className="modal-close-button"
            onClick={closeModal}
          >
            &times;
          </button>
          <img
            src={imageUrl || defaultImageUrl}
            alt={imageAlt}
            style={zoomedImageStyle}
          />
        </div>
      ) : null}
    </>
  );
};

SingleImageCard.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  imagePadding: PropTypes.string,
  backgroundColor: PropTypes.string,
  contentBackgroundColor: PropTypes.string,
  imageBackgroundColor: PropTypes.string,
  contentPadding: responsivePropType,
  contentMargin: responsivePropType,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  width: responsivePropType,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  imageObjectFit: PropTypes.oneOf([
    "cover",
    "contain",
    "fill",
    "none",
    "scale-down",
  ]),
  imageHeight: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBorder: PropTypes.string,
  buttonBoxShadow: PropTypes.string,
  buttonFontSize: PropTypes.string,
  buttonFontWeight: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  titleFontSize: PropTypes.string,
  titleFontWeight: PropTypes.string,
  descriptionFontSize: PropTypes.string,
  descriptionLineHeight: PropTypes.string,
  borderColor: PropTypes.string,
  buttonAlignment: PropTypes.oneOf(["left", "center", "right"]),
  buttonBorderRadius: PropTypes.string,
  buttonPaddingY: PropTypes.string,
  buttonPaddingX: PropTypes.string,
  layoutOrientation: responsivePropType,
  imagePosition: PropTypes.oneOf(["left", "right"]),
  imageWidth: responsivePropType,
  contentWidth: responsivePropType,
  contentMaxWidth: PropTypes.string,
  titleMaxWidth: PropTypes.string,
  descriptionMaxWidth: PropTypes.string,
  contentAlignment: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
  ]),
  cardVariant: PropTypes.oneOf(["classic", "split-banner"]),
  enableSplitClip: PropTypes.bool,
  splitClipSize: PropTypes.string,
  contentGap: PropTypes.string,
  enableImageZoom: PropTypes.bool,
  eyebrowText: PropTypes.string,
  eyebrowColor: PropTypes.string,
  eyebrowFontSize: PropTypes.string,
  eyebrowFontWeight: PropTypes.string,
  eyebrowLetterSpacing: PropTypes.string,
  marginTop: responsivePropType,
  marginRight: responsivePropType,
  marginBottom: responsivePropType,
  marginLeft: responsivePropType,
  enableHoverAnimation: PropTypes.bool,
  hoverScale: PropTypes.number,
  hoverShadow: PropTypes.string,
  hoverTransitionDuration: PropTypes.number,
  showImage: PropTypes.bool,
  style: PropTypes.object,
  cardHeight: responsivePropType,
  imageCreditText: PropTypes.string,
};

const ImageCardComponent = ({
  cards = [],
  layoutMode = "grid",
  minCardWidth = "280px",
  gap = "1rem",
  marginTop = "1rem",
  marginBottom = "1rem",
  marginLeft = "auto",
  marginRight = "auto",
  containerMaxWidth = "none",
  containerPadding = "0px",
  justifyContent = "center",
}) => {
  const gridContainerStyle = {
    display: layoutMode === "stack" ? "flex" : "grid",
    gridTemplateColumns:
      layoutMode === "grid"
        ? `repeat(auto-fit, minmax(${minCardWidth}, 1fr))`
        : undefined,
    flexDirection: layoutMode === "stack" ? "column" : undefined,
    gap,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width: "100%",
    maxWidth: containerMaxWidth === "none" ? undefined : containerMaxWidth,
    padding: containerPadding,
    justifyContent,
  };

  if (!cards || cards.length === 0) {
    return (
      <div style={{ padding: "1rem", textAlign: "center", color: "#9ca3af" }}>
        No image cards to display. Add some in the editor!
      </div>
    );
  }

  return (
    <div style={gridContainerStyle} className="image-card-grid-container">
      {cards.map((card, index) => (
        <SingleImageCard key={card.id || index} {...card} />
      ))}
    </div>
  );
};

ImageCardComponent.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(SingleImageCard.propTypes)),
  layoutMode: PropTypes.oneOf(["grid", "stack"]),
  minCardWidth: PropTypes.string,
  gap: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  containerMaxWidth: PropTypes.string,
  containerPadding: PropTypes.string,
  justifyContent: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
};

const defaultCard = {
  imagePadding: "0px",
  buttonLink: "#",
  contentMargin: "0px",
  backgroundColor: "#ffffff",
  contentBackgroundColor: "#ffffff",
  imageBackgroundColor: "#f8fafc",
  contentPadding: "1rem",
  borderRadius: "0.25rem",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  textAlign: "left",
  imageObjectFit: "cover",
  imageHeight: "180px",
  buttonBackgroundColor: "#007bff",
  buttonTextColor: "#ffffff",
  buttonBorder: "none",
  buttonBoxShadow: "none",
  buttonFontSize: "0.95rem",
  buttonFontWeight: "600",
  titleColor: "#0f172a",
  descriptionColor: "#475569",
  titleFontSize: "1.25rem",
  titleFontWeight: "700",
  descriptionFontSize: "1rem",
  descriptionLineHeight: "1.6",
  borderColor: "#e2e8f0",
  buttonAlignment: "left",
  buttonBorderRadius: "8px",
  buttonPaddingY: "10px",
  buttonPaddingX: "16px",
  layoutOrientation: { base: "vertical", md: "horizontal" },
  imagePosition: "left",
  imageWidth: { base: "100%", md: "40%" },
  contentWidth: { base: "100%", md: "60%" },
  contentMaxWidth: "520px",
  titleMaxWidth: "none",
  descriptionMaxWidth: "none",
  contentAlignment: "center",
  cardVariant: "classic",
  enableSplitClip: false,
  splitClipSize: "72px",
  contentGap: "0.75rem",
  enableImageZoom: false,
  eyebrowText: "",
  eyebrowColor: "#64748b",
  eyebrowFontSize: "0.8rem",
  eyebrowFontWeight: "700",
  eyebrowLetterSpacing: "0.08em",
  enableHoverAnimation: true,
  hoverScale: 1.03,
  hoverShadow: "0px 8px 16px rgba(0,0,0,0.15)",
  hoverTransitionDuration: 0.3,
  showImage: true,
  cardHeight: { base: "auto" },
  imageCreditText: "",
};

export const imageCardComponentDefaultProps = {
  cards: [
    {
      ...defaultCard,
      id: "default-card-1",
      imageUrl: "https://via.placeholder.com/400x200.png?text=Card+1",
      imageAlt: "Placeholder image 1",
      title: "First Card",
      description: "This is the first default image card in the grid.",
      buttonText: "View",
    },
    {
      ...defaultCard,
      id: "default-card-2",
      imageUrl: "https://via.placeholder.com/400x200.png?text=Card+2",
      imageAlt: "Placeholder image 2",
      title: "Second Card",
      description: "This is the second default image card in the grid.",
      buttonText: "Details",
      buttonBackgroundColor: "#28a745",
      textAlign: "center",
      buttonAlignment: "center",
    },
    {
      ...defaultCard,
      id: "default-card-3",
      imageUrl: "https://via.placeholder.com/400x200.png?text=Card+3",
      imageAlt: "Placeholder image 3",
      title: "Third Card",
      description: "This is the third default image card in the grid.",
      buttonText: "More Info",
      buttonBackgroundColor: "#ffc107",
      buttonTextColor: "#333333",
      textAlign: "right",
      buttonAlignment: "right",
    },
  ],
  layoutMode: "grid",
  minCardWidth: "280px",
  gap: "1.5rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  marginLeft: "auto",
  marginRight: "auto",
  containerMaxWidth: "none",
  containerPadding: "0px",
  justifyContent: "center",
};

ImageCardComponent.defaultProps = imageCardComponentDefaultProps;

export default ImageCardComponent;
