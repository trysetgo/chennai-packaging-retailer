"use client";

import React from "react";
import PropTypes from "prop-types";

const ParagraphComponent = ({
  id,
  htmlTag = "div",
  text = "We craft bold stories for modern brands that move markets. Start by customizing the tone below.",
  color = "#111827",
  fontSize = "16px",
  fontWeight = "normal",
  fontStyle = "normal",
  textAlign = "left",
  lineHeight = "1.6",
  textDecoration = "none",
  marginTop = "0px",
  marginRight = "0px",
  marginBottom = "24px",
  marginLeft = "0px",
  padding = "16px",
  backgroundColor = "transparent",
  backgroundGradient = "",
  border = "none",
  borderRadius = "0px",
  textShadow = "none",
  letterSpacing = "normal",
  wordSpacing = "normal",
  textIndent = "0px",
  textTransform = "none",

  showEyebrow = true,
  eyebrowText = "Insight",
  eyebrowTag = "p",
  eyebrowColor = "#fb923c",
  eyebrowLetterSpacing = "0.3em",
  eyebrowMarginBottom = "0.5rem",
  showSubtitle = true,
  subtitle = "High-impact writing for visionary teams.",
  subtitleTag = "p",
  subtitleColor = "#94a3b8",
  subtitleFontSize = "18px",
  subtitleMarginBottom = "1rem",
  showHighlight = true,
  highlightColor = "#fb923c",
  highlightHeight = "4px",
  highlightWidth = "60px",
  highlightMarginTop = "8px",

  showHeading = true,
  headingText = "",
  headingLevel = "h2",
  headingColor,
  headingFontSize,
  headingFontWeight,
  headingFontStyle,
  headingTextAlign,

  headingMarginTop = "0px",
  headingMarginRight = "0px",
  headingMarginBottom = "0.5em",
  headingMarginLeft = "0px",

  headingPaddingTop = "0px",
  headingPaddingRight = "0px",
  headingPaddingBottom = "0px",
  headingPaddingLeft = "0px",

  headingBorderStyle = "none",
  headingBorderWidth = "0px",
  headingBorderColor = "transparent",
  headingBorderTop = false,
  headingBorderRight = false,
  headingBorderBottom = false,
  headingBorderLeft = false,
  headingFullBorder = false,
  headingBorderRadius = "0px",

  spacerBeforeHeight = "0px",
  spacerAfterHeight = "0px",
  spacerColor = "transparent",
  blockAlignment = "left",
  blockWidth = "100%",
  boxShadow = "none",
  style = {},
  className = "",

  enableLinkPopup = false,
  modalTargetId = "",
  onLinkClick,
}) => {
  const HeadingTag = headingLevel || "h2";
  const WrapperTag = htmlTag || "div";
  const EyebrowTag = eyebrowTag || "p";
  const SubtitleTag = subtitleTag || "p";

  const mainBlockStyle = {
    background: backgroundGradient || backgroundColor,
    border,
    borderRadius,
    padding,
    boxShadow,
    width: "100%",
    ...style,
  };

  const isAnyHeadingBorderSideActive =
    headingFullBorder ||
    headingBorderTop ||
    headingBorderRight ||
    headingBorderBottom ||
    headingBorderLeft;

  const finalHeadingBorderStyle =
    isAnyHeadingBorderSideActive &&
    (!headingBorderStyle || headingBorderStyle === "none")
      ? "solid"
      : headingBorderStyle;

  const finalHeadingBorderWidth =
    isAnyHeadingBorderSideActive &&
    (!headingBorderWidth || headingBorderWidth === "0px")
      ? "1px"
      : headingBorderWidth;

  const paragraphTextStyle = {
    color,
    fontSize,
    fontWeight,
    fontStyle,
    textAlign,
    lineHeight,
    textDecoration,
    textShadow,
    letterSpacing,
    wordSpacing,
    textIndent,
    textTransform,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",

    margin: "0",
    padding: "0",
  };

  const eyebrowStyle = {
    color: eyebrowColor,
    letterSpacing: eyebrowLetterSpacing,
    fontSize: "12px",
    textTransform: "uppercase",
    marginBottom: eyebrowMarginBottom,
    fontWeight: "600",
  };

  const subtitleStyle = {
    color: subtitleColor,
    fontSize: subtitleFontSize,
    marginBottom: subtitleMarginBottom,
  };

  const highlightStyle = {
    width: highlightWidth,
    height: highlightHeight,
    background: highlightColor,
    marginTop: highlightMarginTop,
    borderRadius: "999px",
  };

  const headingElementStyle = {
    color: headingColor || color,
    fontSize: headingFontSize,
    fontWeight: headingFontWeight,
    fontStyle: headingFontStyle,
    textAlign: headingTextAlign || textAlign,
    marginTop: headingMarginTop,
    marginRight: headingMarginRight,
    marginBottom: headingMarginBottom,
    marginLeft: headingMarginLeft,
    paddingTop: headingPaddingTop,
    paddingRight: headingPaddingRight,
    paddingBottom: headingPaddingBottom,
    paddingLeft: headingPaddingLeft,
    borderRadius: headingBorderRadius,

    borderTopStyle:
      headingFullBorder || headingBorderTop ? finalHeadingBorderStyle : "none",
    borderTopWidth:
      headingFullBorder || headingBorderTop ? finalHeadingBorderWidth : "0px",
    borderTopColor:
      headingFullBorder || headingBorderTop
        ? headingBorderColor
        : "transparent",

    borderRightStyle:
      headingFullBorder || headingBorderRight
        ? finalHeadingBorderStyle
        : "none",
    borderRightWidth:
      headingFullBorder || headingBorderRight ? finalHeadingBorderWidth : "0px",
    borderRightColor:
      headingFullBorder || headingBorderRight
        ? headingBorderColor
        : "transparent",

    borderBottomStyle:
      headingFullBorder || headingBorderBottom
        ? finalHeadingBorderStyle
        : "none",
    borderBottomWidth:
      headingFullBorder || headingBorderBottom
        ? finalHeadingBorderWidth
        : "0px",
    borderBottomColor:
      headingFullBorder || headingBorderBottom
        ? headingBorderColor
        : "transparent",

    borderLeftStyle:
      headingFullBorder || headingBorderLeft ? finalHeadingBorderStyle : "none",
    borderLeftWidth:
      headingFullBorder || headingBorderLeft ? finalHeadingBorderWidth : "0px",
    borderLeftColor:
      headingFullBorder || headingBorderLeft
        ? headingBorderColor
        : "transparent",
  };

  const spacerElementStyle = {
    height: "0px",
    backgroundColor: spacerColor,
    width: "100%",
  };

  const outerWrapperStyle = {
    width: blockWidth,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft:
      blockAlignment === "center" || blockAlignment === "right"
        ? "auto"
        : marginLeft,
    marginRight: blockAlignment === "center" ? "auto" : marginRight,
  };

  const handleParagraphClick = (e) => {
    if (enableLinkPopup && onLinkClick) {
      const linkElement = e.target.closest("a");
      if (linkElement && linkElement.href) {
        e.preventDefault();

        const href = linkElement.getAttribute("href");
        let targetId = "";

        if (href && href.startsWith("#") && href.length > 1) {
          targetId = href.substring(1);
        } else if (modalTargetId) {
          targetId = modalTargetId;
        }

        if (targetId) {
          onLinkClick(targetId);
        }
      }
    }
  };

  return (
    <WrapperTag style={outerWrapperStyle} className={className}>
      {spacerBeforeHeight && spacerBeforeHeight !== "0px" && (
        <div
          style={{ ...spacerElementStyle, height: spacerBeforeHeight }}
          aria-hidden="true"
        />
      )}
      <div style={mainBlockStyle}>
        {showHeading && headingText && (
          <HeadingTag
            style={headingElementStyle}
            dangerouslySetInnerHTML={{ __html: headingText }}
          />
        )}
        {showEyebrow && eyebrowText ? (
          <EyebrowTag style={eyebrowStyle}>{eyebrowText}</EyebrowTag>
        ) : null}
        {showSubtitle && subtitle ? (
          <SubtitleTag style={subtitleStyle}>{subtitle}</SubtitleTag>
        ) : null}
        {showHighlight && highlightColor ? (
          <div style={highlightStyle} aria-hidden="true" />
        ) : null}
        <div
          style={paragraphTextStyle}
          className="paragraph-content"
          dangerouslySetInnerHTML={{ __html: text }}
          onClick={handleParagraphClick}
        />
      </div>
      {spacerAfterHeight && spacerAfterHeight !== "0px" && (
        <div
          style={{ ...spacerElementStyle, height: spacerAfterHeight }}
          aria-hidden="true"
        />
      )}
    </WrapperTag>
  );
};

ParagraphComponent.propTypes = {
  id: PropTypes.string,
  htmlTag: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  lineHeight: PropTypes.string,
  textDecoration: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  textShadow: PropTypes.string,
  letterSpacing: PropTypes.string,
  wordSpacing: PropTypes.string,
  textIndent: PropTypes.string,
  textTransform: PropTypes.string,
  backgroundGradient: PropTypes.string,

  showHeading: PropTypes.bool,
  headingText: PropTypes.string,
  headingLevel: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  headingColor: PropTypes.string,
  headingFontSize: PropTypes.string,
  headingFontWeight: PropTypes.string,
  headingFontStyle: PropTypes.string,
  headingTextAlign: PropTypes.string,
  headingMarginTop: PropTypes.string,
  headingMarginRight: PropTypes.string,
  headingMarginBottom: PropTypes.string,
  headingMarginLeft: PropTypes.string,
  headingPaddingTop: PropTypes.string,
  headingPaddingRight: PropTypes.string,
  headingPaddingBottom: PropTypes.string,
  headingPaddingLeft: PropTypes.string,
  headingBorderStyle: PropTypes.string,
  headingBorderWidth: PropTypes.string,
  headingBorderColor: PropTypes.string,
  headingBorderRadius: PropTypes.string,
  headingBorderTop: PropTypes.bool,
  headingBorderRight: PropTypes.bool,
  headingBorderBottom: PropTypes.bool,
  headingBorderLeft: PropTypes.bool,
  headingFullBorder: PropTypes.bool,

  showEyebrow: PropTypes.bool,
  eyebrowText: PropTypes.string,
  eyebrowTag: PropTypes.string,
  eyebrowColor: PropTypes.string,
  eyebrowLetterSpacing: PropTypes.string,
  eyebrowMarginBottom: PropTypes.string,

  showSubtitle: PropTypes.bool,
  subtitle: PropTypes.string,
  subtitleTag: PropTypes.string,
  subtitleColor: PropTypes.string,
  subtitleFontSize: PropTypes.string,
  subtitleMarginBottom: PropTypes.string,

  showHighlight: PropTypes.bool,
  highlightColor: PropTypes.string,
  highlightHeight: PropTypes.string,
  highlightWidth: PropTypes.string,
  highlightMarginTop: PropTypes.string,

  spacerBeforeHeight: PropTypes.string,
  spacerAfterHeight: PropTypes.string,
  spacerColor: PropTypes.string,
  blockAlignment: PropTypes.oneOf(["left", "center", "right"]),
  blockWidth: PropTypes.string,
  boxShadow: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,

  enableLinkPopup: PropTypes.bool,
  modalTargetId: PropTypes.string,
  onLinkClick: PropTypes.func,
};

export const paragraphComponentDefaultProps = {
  htmlTag: "div",
  text: "This is a default paragraph. Click to edit its content and style.",
  color: "#333333",
  fontSize: "1rem",
  fontWeight: "normal",
  fontStyle: "normal",
  textAlign: "left",
  lineHeight: "1.6",
  textDecoration: "none",
  marginTop: "0px",
  marginRight: "0px",
  marginBottom: "24px",
  marginLeft: "0px",
  padding: "16px",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "0px",
  textShadow: "none",
  letterSpacing: "normal",
  wordSpacing: "normal",
  textIndent: "0px",
  textTransform: "none",
  backgroundGradient:
    "linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0))",

  showHeading: true,
  headingText: "",
  headingLevel: "h2",
  headingColor: "",
  headingFontSize: "1.5em",
  headingFontWeight: "bold",
  headingFontStyle: "normal",
  headingTextAlign: "left",
  headingMarginTop: "0px",
  headingMarginRight: "0px",
  headingMarginBottom: "0.5em",
  headingMarginLeft: "0px",
  headingPaddingTop: "0px",
  headingPaddingRight: "0px",
  headingPaddingBottom: "0px",
  headingPaddingLeft: "0px",
  headingBorderStyle: "none",
  headingBorderWidth: "1px",
  headingBorderColor: "#cccccc",
  headingBorderRadius: "0px",
  headingBorderTop: false,
  headingBorderRight: false,
  headingBorderBottom: false,
  headingBorderLeft: false,
  headingFullBorder: false,

  showEyebrow: true,
  eyebrowText: "Insight",
  eyebrowTag: "p",
  eyebrowColor: "#fb923c",
  eyebrowLetterSpacing: "0.3em",
  eyebrowMarginBottom: "0.5rem",

  showSubtitle: true,
  subtitle: "High-impact writing for visionary teams.",
  subtitleTag: "p",
  subtitleColor: "#94a3b8",
  subtitleFontSize: "18px",
  subtitleMarginBottom: "1rem",

  showHighlight: true,
  highlightColor: "#fb923c",
  highlightHeight: "4px",
  highlightWidth: "60px",
  highlightMarginTop: "8px",

  spacerBeforeHeight: "0px",
  spacerAfterHeight: "0px",
  spacerColor: "transparent",
  blockAlignment: "left",
  blockWidth: "100%",
  boxShadow: "none",
  style: {},
  className: "",

  enableLinkPopup: false,
  modalTargetId: "",
};

export default ParagraphComponent;
