import React from "react";
import PropTypes from "prop-types";

const buildBorder = (style) => {
  if (style.border && style.border !== "none") return style.border;
  if (!style.borderStyle || style.borderStyle === "none") return "none";
  const width = style.borderWidth || "0px";
  const color = style.borderColor || "#000000";
  return `${width} ${style.borderStyle} ${color}`;
};

const buildBoxShadow = (style) => {
  if (style.boxShadow && style.boxShadow !== "none") return style.boxShadow;
  const hasParts = [
    style.boxShadowX,
    style.boxShadowY,
    style.boxShadowBlur,
    style.boxShadowSpread,
  ].some((value) => value !== undefined && value !== null && value !== "");
  if (!hasParts) return undefined;
  return `${style.boxShadowX || "0px"} ${style.boxShadowY || "0px"} ${
    style.boxShadowBlur || "0px"
  } ${style.boxShadowSpread || "0px"} ${style.boxShadowColor || "#000000"}`;
};

const HeadingComponent = (props) => {
  const {
    text,
    level,
    styleProps,
    color,
    fontSize,
    fontWeight,
    fontStyle,
    textAlign,
    textDecoration,
    textTransform,
    lineHeight,
    letterSpacing,
    wordSpacing,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    backgroundColor,
    borderRadius,
    opacity,
    zIndex,
    className,
    style,
  } = {
    ...headingComponentDefaultProps,
    ...props,
    styleProps: {
      ...(headingComponentDefaultProps.styleProps || {}),
      ...(props.styleProps || {}),
    },
  };

  const mergedStyle = {
    ...styleProps,
    color: color ?? styleProps.color,
    fontSize: fontSize ?? styleProps.fontSize,
    fontWeight: fontWeight ?? styleProps.fontWeight,
    fontStyle: fontStyle ?? styleProps.fontStyle,
    textAlign: textAlign ?? styleProps.textAlign,
    textDecoration: textDecoration ?? styleProps.textDecoration,
    textTransform: textTransform ?? styleProps.textTransform,
    lineHeight: lineHeight ?? styleProps.lineHeight,
    letterSpacing: letterSpacing ?? styleProps.letterSpacing,
    wordSpacing: wordSpacing ?? styleProps.wordSpacing,
    marginTop: marginTop ?? styleProps.marginTop,
    marginRight: marginRight ?? styleProps.marginRight,
    marginBottom: marginBottom ?? styleProps.marginBottom,
    marginLeft: marginLeft ?? styleProps.marginLeft,
    paddingTop: paddingTop ?? styleProps.paddingTop,
    paddingRight: paddingRight ?? styleProps.paddingRight,
    paddingBottom: paddingBottom ?? styleProps.paddingBottom,
    paddingLeft: paddingLeft ?? styleProps.paddingLeft,
    backgroundColor: backgroundColor ?? styleProps.backgroundColor,
    borderRadius: borderRadius ?? styleProps.borderRadius,
    opacity: opacity ?? styleProps.opacity,
    zIndex: zIndex ?? styleProps.zIndex,
  };

  const Tag = `h${String(level || "2")}`;
  const computedStyle = {
    border: buildBorder(mergedStyle),
    boxShadow: buildBoxShadow(mergedStyle),
    ...mergedStyle,
    ...style,
  };

  return (
    <Tag style={computedStyle} className={className}>
      {text || "Heading Text"}
    </Tag>
  );
};

HeadingComponent.propTypes = {
  text: PropTypes.string,
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6", 1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  style: PropTypes.object,
  styleProps: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  textDecoration: PropTypes.string,
  textTransform: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  wordSpacing: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const headingComponentDefaultProps = {
  text: "शीर्षक पाठ",
  level: "2",
  className: "",
  style: {},
  color: "#111827",
  fontSize: "2rem",
  fontWeight: "700",
  fontStyle: "normal",
  textAlign: "left",
  textDecoration: "none",
  textTransform: "none",
  lineHeight: "1.2",
  letterSpacing: "normal",
  wordSpacing: "normal",
  marginTop: "0px",
  marginRight: "0px",
  marginBottom: "0.5em",
  marginLeft: "0px",
  paddingTop: "0px",
  paddingRight: "0px",
  paddingBottom: "0px",
  paddingLeft: "0px",
  backgroundColor: "transparent",
  borderRadius: "0px",
  borderStyle: "none",
  borderWidth: "0px",
  borderColor: "#000000",
  border: "none",
  boxShadow: "none",
  boxShadowX: "0px",
  boxShadowY: "0px",
  boxShadowBlur: "0px",
  boxShadowSpread: "0px",
  boxShadowColor: "#000000",
  opacity: 1,
  zIndex: "auto",
  styleProps: {}
};

HeadingComponent.defaultProps = headingComponentDefaultProps;

export default HeadingComponent;
