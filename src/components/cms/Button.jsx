"use client";

import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

const PRESET_VARIANTS = {
  primary: {
    bg: "#4f46e5",
    text: "#ffffff",
    borderColor: "#4f46e5",
    hoverBg: "#4338ca",
    hoverText: "#ffffff",
    hoverBorder: "#4338ca",
  },
  secondary: {
    bg: "#e2e8f0",
    text: "#1f2937",
    borderColor: "#e2e8f0",
    hoverBg: "#cbd5e1",
    hoverText: "#111827",
    hoverBorder: "#cbd5e1",
  },
  outline: {
    bg: "transparent",
    text: "#4f46e5",
    borderColor: "#4f46e5",
    hoverBg: "#4f46e5",
    hoverText: "#ffffff",
    hoverBorder: "#4f46e5",
  },
  ghost: {
    bg: "transparent",
    text: "#0f172a",
    borderColor: "transparent",
    hoverBg: "rgba(15,23,42,0.06)",
    hoverText: "#0f172a",
    hoverBorder: "transparent",
  },
  success: {
    bg: "#10b981",
    text: "#ffffff",
    borderColor: "#10b981",
    hoverBg: "#0f9a6b",
    hoverText: "#ffffff",
    hoverBorder: "#0f9a6b",
  },
  danger: {
    bg: "#ef4444",
    text: "#ffffff",
    borderColor: "#ef4444",
    hoverBg: "#dc2626",
    hoverText: "#ffffff",
    hoverBorder: "#dc2626",
  },
  gradient: {
    bg: "linear-gradient(120deg, #6366f1, #22d3ee)",
    text: "#ffffff",
    borderColor: "transparent",
    hoverBg: "linear-gradient(120deg, #4f46e5, #0ea5e9)",
    hoverText: "#ffffff",
    hoverBorder: "transparent",
  },
};

const ButtonComponent = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    label,
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    letterSpacing,
    textTransform,
    padding,
    borderRadius,
    linkUrl,
    newTab,
    borderWidth,
    borderStyle,
    borderColor,
    hoverBackgroundColor,
    hoverTextColor,
    hoverBorderColor,
    fullWidth,
    boxShadow,
    textAlign,
    buttonAlignment,
    buttonStyleType,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    minHeight,
    style,
    className,
    icon,
    iconPosition,
    iconGap,
    iconSize,
    iconColor,
    useGradient,
    gradientFrom,
    gradientTo,
    gradientAngle,
    isLoading,
    loadingLabel,
    frosted,
  } = { ...buttonComponentDefaultProps, ...props };

  const preset = PRESET_VARIANTS[buttonStyleType] || PRESET_VARIANTS.primary;
  const isCustom = buttonStyleType === "custom";
  const isGradientPreset = buttonStyleType === "gradient";

  const customGradient = useMemo(() => {
    if (!useGradient && !isGradientPreset) return null;
    return `linear-gradient(${gradientAngle}, ${gradientFrom}, ${gradientTo})`;
  }, [useGradient, isGradientPreset, gradientAngle, gradientFrom, gradientTo]);

  const resolvedBase = {
    backgroundColor: customGradient || (isCustom ? backgroundColor : preset.bg),
    textColor: isCustom ? textColor : preset.text,
    borderColor: isCustom ? borderColor : preset.borderColor,
  };
  const resolvedHover = {
    backgroundColor:
      hoverBackgroundColor ||
      customGradient ||
      (isCustom ? backgroundColor : preset.hoverBg),
    textColor: hoverTextColor || (isCustom ? textColor : preset.hoverText),
    borderColor: hoverBorderColor || (isCustom ? borderColor : preset.hoverBorder),
  };

  const current = isHovered ? resolvedHover : resolvedBase;

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent:
      textAlign === "left" ? "flex-start" : textAlign === "right" ? "flex-end" : "center",
    gap: icon ? iconGap : 0,
    width: fullWidth ? "100%" : "auto",
    minHeight,
    padding,
    borderRadius,
    borderWidth,
    borderStyle,
    borderColor: current.borderColor,
    background: current.backgroundColor,
    color: current.textColor,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecoration: "none",
    cursor: "pointer",
    boxShadow,
    textAlign,
    transition: "all 0.22s ease",
    backdropFilter: frosted ? "blur(10px)" : undefined,
    WebkitBackdropFilter: frosted ? "blur(10px)" : undefined,
    borderImage: !borderStyle || borderStyle === "none" ? undefined : undefined,
    ...style,
  };

  const wrapperStyle = {
    width: "100%",
    textAlign: fullWidth ? "left" : buttonAlignment,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  const sharedProps = {
    style: buttonStyle,
    className,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const renderIcon = (pos) => {
    if (!icon || iconPosition !== pos) return null;
    return (
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: iconSize,
          color: iconColor || current.textColor,
          lineHeight: 1,
        }}
      >
        {icon}
      </span>
    );
  };

  const contentLabel = isLoading ? loadingLabel || "Working..." : label;

  const buttonElement = linkUrl ? (
    <a
      href={linkUrl}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      {...sharedProps}
    >
      {renderIcon("left")}
      <span>{contentLabel}</span>
      {renderIcon("right")}
    </a>
  ) : (
    <button type="button" {...sharedProps}>
      {renderIcon("left")}
      <span>{contentLabel}</span>
      {renderIcon("right")}
    </button>
  );

  return <div style={wrapperStyle}>{buttonElement}</div>;
};

ButtonComponent.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textTransform: PropTypes.oneOf(["none", "uppercase", "lowercase", "capitalize"]),
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  linkUrl: PropTypes.string,
  newTab: PropTypes.bool,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.oneOf(["none", "solid", "dashed", "dotted", "double"]),
  borderColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  fullWidth: PropTypes.bool,
  boxShadow: PropTypes.string,
  buttonAlignment: PropTypes.oneOf(["left", "center", "right"]),
  buttonStyleType: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "success",
    "danger",
    "gradient",
    "custom",
  ]),
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  minHeight: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  iconGap: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  useGradient: PropTypes.bool,
  gradientFrom: PropTypes.string,
  gradientTo: PropTypes.string,
  gradientAngle: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingLabel: PropTypes.string,
  frosted: PropTypes.bool,
};

export const buttonComponentDefaultProps = {
  label: "Click Me",
  backgroundColor: "#007bff",
  textColor: "#ffffff",
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: "600",
  fontFamily: "inherit",
  lineHeight: "1.2",
  letterSpacing: "normal",
  textTransform: "none",
  padding: "0.55rem 1rem",
  borderRadius: "8px",
  linkUrl: "",
  newTab: false,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  hoverBackgroundColor: "",
  hoverTextColor: "",
  hoverBorderColor: "",
  fullWidth: false,
  boxShadow: "none",
  buttonAlignment: "left",
  buttonStyleType: "primary",
  marginTop: "0px",
  marginRight: "0px",
  marginBottom: "0px",
  marginLeft: "0px",
  minHeight: "auto",
  style: {},
  className: "",
  icon: "",
  iconPosition: "left",
  iconGap: "8px",
  iconSize: "1rem",
  iconColor: "",
  useGradient: false,
  gradientFrom: "#6366f1",
  gradientTo: "#22d3ee",
  gradientAngle: "120deg",
  isLoading: false,
  loadingLabel: "Working...",
  frosted: false,
};

ButtonComponent.defaultProps = buttonComponentDefaultProps;

export default ButtonComponent;
