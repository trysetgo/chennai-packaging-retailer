"use client";

import React from "react";
import PropTypes from "prop-types";
import {
  Clock3,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const ICON_MAP = {
  phone: Phone,
  mapPin: MapPin,
  clock: Clock3,
  mail: Mail,
  message: MessageCircle,
  globe: Globe,
};

const CONTACT_BLOCKS_DEFAULT = [
  {
    id: "call-us",
    iconName: "phone",
    title: "CALL US",
    value: "1 (234) 567-891, 1 (234) 987-654",
  },
  {
    id: "location",
    iconName: "mapPin",
    title: "LOCATION",
    value: "121 Rock Street, 21 Avenue, New York, NY 92103-9000",
  },
  {
    id: "business-hours",
    iconName: "clock",
    title: "BUSINESS HOURS",
    value: "Mon - Fri ..... 10 am - 8 pm, Sat, Sun ...... Closed",
  },
];

const WaveContactSplit = ({
  id,
  eyebrow = "CONTACT",
  title = "Get in touch",
  titleAccent = "today",
  description = "Tell us what you need and we’ll get back to you quickly.",
  sectionBackgroundColor = "#f7f7f7",
  useSectionGradient = true,
  sectionGradientStart = "#f7f7f7",
  sectionGradientEnd = "#ececec",
  sectionGradientAngle = "180deg",
  containerMaxWidth = "1280px",
  containerPaddingTop = "56px",
  containerPaddingRight = "24px",
  containerPaddingBottom = "56px",
  containerPaddingLeft = "24px",
  contentOffsetX = "0px",
  contentOffsetY = "0px",
  imageSrc = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  imageAlt = "Modern architecture illustration",
  imageWidth = "58%",
  imageHeight = "360px",
  imageObjectFit = "cover",
  imageObjectPosition = "center top",
  imageRadius = "0px",
  imageShadow = "0 30px 50px rgba(15, 23, 42, 0.18)",
  imageOffsetX = "0px",
  imageOffsetY = "0px",
  waveColor = "#f97316",
  waveOpacity = 1,
  waveTopOffset = "126px",
  waveHeight = "132px",
  waveWidth = "100%",
  waveRadius = "0 120px 120px 0",
  waveShadow = "none",
  waveOffsetX = "0px",
  waveOffsetY = "0px",
  infoCardBackground = "#ffffff",
  infoCardBorder = "none",
  infoCardRadius = "0px",
  infoCardPadding = "42px 36px",
  infoCardShadow = "0 16px 34px rgba(15,23,42,0.10)",
  infoCardWidth = "100%",
  infoCardOffsetX = "0px",
  infoCardOffsetY = "0px",
  formCardBackground = "#e7e7e7",
  formCardBorder = "none",
  formCardRadius = "0px",
  formCardPadding = "42px 36px",
  formCardShadow = "0 16px 34px rgba(15,23,42,0.12)",
  formCardWidth = "100%",
  formCardOffsetX = "0px",
  formCardOffsetY = "0px",
  contactBlocks = [],
  blockIconColor = "#ea580c",
  blockTitleColor = "#111827",
  blockValueColor = "#111827",
  blockTitleSize = "16px",
  blockValueSize = "15px",
  blockGap = "18px",
  formTitle = "CONTACT US",
  formTitleColor = "#111827",
  formTitleSize = "22px",
  formFieldBackground = "#ffffff",
  formFieldBorder = "1px solid #e5e7eb",
  formFieldTextColor = "#111827",
  formFieldPlaceholderColor = "#9ca3af",
  formFieldRadius = "0px",
  formFieldHeight = "44px",
  formFieldTextareaHeight = "120px",
  formFieldGap = "16px",
  submitLabel = "Submit",
  submitButtonBackground = "#f97316",
  submitButtonTextColor = "#ffffff",
  submitButtonBorder = "none",
  submitButtonRadius = "999px",
  submitButtonHeight = "46px",
  submitButtonFontSize = "14px",
  submitButtonShadow = "0 14px 28px rgba(249,115,22,0.28)",
  buttonHoverBackground = "#ea580c",
  buttonHoverTextColor = "#ffffff",
  sectionOverflow = "visible",
  eyebrowColor = "#ea580c",
  titleColor = "#111827",
  descriptionColor = "#111827",
  style = {},
  className = "",
}) => {
  const sectionBackground = useSectionGradient
    ? `linear-gradient(${sectionGradientAngle}, ${sectionGradientStart}, ${sectionGradientEnd})`
    : sectionBackgroundColor;

  const displayBlocks = Array.isArray(contactBlocks) && contactBlocks.length
    ? contactBlocks
    : CONTACT_BLOCKS_DEFAULT;

  const waveStyle = {
    position: "absolute",
    top: waveTopOffset,
    left: 0,
    width: waveWidth,
    height: waveHeight,
    background: waveColor,
    opacity: waveOpacity,
    borderTopRightRadius: "220px",
    borderBottomRightRadius: "220px",
    borderTopLeftRadius: waveRadius.split(" ")[0] || "0",
    borderBottomLeftRadius: waveRadius.split(" ")[3] || "0",
    boxShadow: waveShadow,
    transform: `translate(${waveOffsetX}, ${waveOffsetY})`,
  };

  const infoCardStyle = {
    background: infoCardBackground,
    border: infoCardBorder,
    borderRadius: infoCardRadius,
    padding: infoCardPadding,
    boxShadow: infoCardShadow,
    width: infoCardWidth,
    transform: `translate(${infoCardOffsetX}, ${infoCardOffsetY})`,
  };

  const formCardStyle = {
    background: formCardBackground,
    border: formCardBorder,
    borderRadius: formCardRadius,
    padding: formCardPadding,
    boxShadow: formCardShadow,
    width: formCardWidth,
    transform: `translate(${formCardOffsetX}, ${formCardOffsetY})`,
  };

  const fieldStyle = {
    width: "100%",
    height: formFieldHeight,
    background: formFieldBackground,
    color: formFieldTextColor,
    border: formFieldBorder,
    borderRadius: formFieldRadius,
    padding: "0 16px",
    outline: "none",
  };

  const textareaStyle = {
    ...fieldStyle,
    height: formFieldTextareaHeight,
    padding: "12px 16px",
    resize: "vertical",
  };

  const scopedClass = `wave-contact-split-${String(id || "default").replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <section
      id={id}
      className={`${scopedClass} ${className}`.trim()}
      style={{
        position: "relative",
        background: sectionBackground,
        overflow: sectionOverflow,
        paddingTop: containerPaddingTop,
        paddingRight: containerPaddingRight,
        paddingBottom: containerPaddingBottom,
        paddingLeft: containerPaddingLeft,
        ...style,
      }}
    >
      <style>{`
        .${scopedClass} input::placeholder,
        .${scopedClass} textarea::placeholder {
          color: ${formFieldPlaceholderColor};
          opacity: 1;
        }
      `}</style>
      <div style={{ maxWidth: containerMaxWidth, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            position: "relative",
            minHeight: "640px",
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              position: "absolute",
              top: imageOffsetY,
              right: imageOffsetX,
              width: imageWidth,
              height: imageHeight,
              objectFit: imageObjectFit,
              objectPosition: imageObjectPosition,
              borderRadius: imageRadius,
              boxShadow: imageShadow,
              zIndex: 0,
            }}
          />

          <div style={waveStyle} aria-hidden />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.05fr) minmax(320px, 0.95fr)",
              gap: "0px",
              alignItems: "start",
              paddingTop: "160px",
              transform: `translate(${contentOffsetX}, ${contentOffsetY})`,
            }}
          >
            <div style={infoCardStyle}>
              <p
                style={{
                  margin: 0,
                  color: eyebrowColor,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </p>
              <h2
                style={{
                  margin: "10px 0 6px",
                  color: titleColor,
                  fontSize: "34px",
                  lineHeight: 1.05,
                  fontWeight: 800,
                }}
              >
                {title}
                {titleAccent ? (
                  <span style={{ color: waveColor, display: "inline-block", marginLeft: "10px" }}>
                    {titleAccent}
                  </span>
                ) : null}
              </h2>
              {description ? (
                <p style={{ margin: "0 0 28px", color: descriptionColor, fontSize: "15px", lineHeight: 1.7 }}>
                  {description}
                </p>
              ) : null}

              <div style={{ display: "flex", flexDirection: "column", gap: blockGap }}>
                {displayBlocks.map((block) => {
                  const Icon = ICON_MAP[block.iconName] || Phone;
                  return (
                    <div key={block.id || block.title}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <span style={{ color: blockIconColor, display: "inline-flex" }}>
                          <Icon size={18} />
                        </span>
                        <span
                          style={{
                            color: blockTitleColor,
                            fontSize: blockTitleSize,
                            fontWeight: 800,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {block.title}
                        </span>
                      </div>
                      <p style={{ margin: 0, color: blockValueColor, fontSize: blockValueSize, lineHeight: 1.5 }}>
                        {block.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={formCardStyle}>
              <h3
                style={{
                  margin: "0 0 20px",
                  color: formTitleColor,
                  fontSize: formTitleSize,
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                }}
              >
                {formTitle}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: formFieldGap }}>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  aria-label="Your name"
                  style={fieldStyle}
                />
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  aria-label="Your email"
                  style={fieldStyle}
                />
                <textarea
                  placeholder="Write your message"
                  aria-label="Your message"
                  style={textareaStyle}
                />
                <button
                  type="button"
                  style={{
                    height: submitButtonHeight,
                    background: submitButtonBackground,
                    color: submitButtonTextColor,
                    border: submitButtonBorder,
                    borderRadius: submitButtonRadius,
                    fontSize: submitButtonFontSize,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    boxShadow: submitButtonShadow,
                    transition: "transform 160ms ease, background 160ms ease, color 160ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = buttonHoverBackground;
                    e.currentTarget.style.color = buttonHoverTextColor;
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = submitButtonBackground;
                    e.currentTarget.style.color = submitButtonTextColor;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {submitLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WaveContactSplit.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  titleAccent: PropTypes.string,
  description: PropTypes.string,
  sectionBackgroundColor: PropTypes.string,
  useSectionGradient: PropTypes.bool,
  sectionGradientStart: PropTypes.string,
  sectionGradientEnd: PropTypes.string,
  sectionGradientAngle: PropTypes.string,
  containerMaxWidth: PropTypes.string,
  containerPaddingTop: PropTypes.string,
  containerPaddingRight: PropTypes.string,
  containerPaddingBottom: PropTypes.string,
  containerPaddingLeft: PropTypes.string,
  contentOffsetX: PropTypes.string,
  contentOffsetY: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageObjectFit: PropTypes.oneOf(["cover", "contain", "fill", "none", "scale-down"]),
  imageObjectPosition: PropTypes.string,
  imageRadius: PropTypes.string,
  imageShadow: PropTypes.string,
  imageOffsetX: PropTypes.string,
  imageOffsetY: PropTypes.string,
  waveColor: PropTypes.string,
  waveOpacity: PropTypes.number,
  waveTopOffset: PropTypes.string,
  waveHeight: PropTypes.string,
  waveWidth: PropTypes.string,
  waveRadius: PropTypes.string,
  waveShadow: PropTypes.string,
  waveOffsetX: PropTypes.string,
  waveOffsetY: PropTypes.string,
  infoCardBackground: PropTypes.string,
  infoCardBorder: PropTypes.string,
  infoCardRadius: PropTypes.string,
  infoCardPadding: PropTypes.string,
  infoCardShadow: PropTypes.string,
  infoCardWidth: PropTypes.string,
  infoCardOffsetX: PropTypes.string,
  infoCardOffsetY: PropTypes.string,
  formCardBackground: PropTypes.string,
  formCardBorder: PropTypes.string,
  formCardRadius: PropTypes.string,
  formCardPadding: PropTypes.string,
  formCardShadow: PropTypes.string,
  formCardWidth: PropTypes.string,
  formCardOffsetX: PropTypes.string,
  formCardOffsetY: PropTypes.string,
  contactBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      iconName: PropTypes.string,
      title: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  blockIconColor: PropTypes.string,
  blockTitleColor: PropTypes.string,
  blockValueColor: PropTypes.string,
  blockTitleSize: PropTypes.string,
  blockValueSize: PropTypes.string,
  blockGap: PropTypes.string,
  formTitle: PropTypes.string,
  formTitleColor: PropTypes.string,
  formTitleSize: PropTypes.string,
  formFieldBackground: PropTypes.string,
  formFieldBorder: PropTypes.string,
  formFieldTextColor: PropTypes.string,
  formFieldPlaceholderColor: PropTypes.string,
  formFieldRadius: PropTypes.string,
  formFieldHeight: PropTypes.string,
  formFieldTextareaHeight: PropTypes.string,
  formFieldGap: PropTypes.string,
  submitLabel: PropTypes.string,
  submitButtonBackground: PropTypes.string,
  submitButtonTextColor: PropTypes.string,
  submitButtonBorder: PropTypes.string,
  submitButtonRadius: PropTypes.string,
  submitButtonHeight: PropTypes.string,
  submitButtonFontSize: PropTypes.string,
  submitButtonShadow: PropTypes.string,
  buttonHoverBackground: PropTypes.string,
  buttonHoverTextColor: PropTypes.string,
  sectionOverflow: PropTypes.string,
  eyebrowColor: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export const waveContactSplitDefaultProps = {
  eyebrow: "CONTACT",
  title: "Contact Us",
  titleAccent: "",
  description: "Reach out for project inquiries, support, or a quick hello.",
  sectionBackgroundColor: "#f7f7f7",
  useSectionGradient: true,
  sectionGradientStart: "#f7f7f7",
  sectionGradientEnd: "#ececec",
  sectionGradientAngle: "180deg",
  containerMaxWidth: "1280px",
  containerPaddingTop: "56px",
  containerPaddingRight: "24px",
  containerPaddingBottom: "56px",
  containerPaddingLeft: "24px",
  contentOffsetX: "0px",
  contentOffsetY: "0px",
  imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Modern architecture illustration",
  imageWidth: "58%",
  imageHeight: "360px",
  imageObjectFit: "cover",
  imageObjectPosition: "center top",
  imageRadius: "0px",
  imageShadow: "0 30px 50px rgba(15, 23, 42, 0.18)",
  imageOffsetX: "0px",
  imageOffsetY: "0px",
  waveColor: "#f97316",
  waveOpacity: 1,
  waveTopOffset: "126px",
  waveHeight: "132px",
  waveWidth: "100%",
  waveRadius: "0 120px 120px 0",
  waveShadow: "none",
  waveOffsetX: "0px",
  waveOffsetY: "0px",
  infoCardBackground: "#ffffff",
  infoCardBorder: "none",
  infoCardRadius: "0px",
  infoCardPadding: "42px 36px",
  infoCardShadow: "0 16px 34px rgba(15,23,42,0.10)",
  infoCardWidth: "100%",
  infoCardOffsetX: "0px",
  infoCardOffsetY: "0px",
  formCardBackground: "#e7e7e7",
  formCardBorder: "none",
  formCardRadius: "0px",
  formCardPadding: "42px 36px",
  formCardShadow: "0 16px 34px rgba(15,23,42,0.12)",
  formCardWidth: "100%",
  formCardOffsetX: "0px",
  formCardOffsetY: "0px",
  contactBlocks: CONTACT_BLOCKS_DEFAULT,
  blockIconColor: "#ea580c",
  blockTitleColor: "#111827",
  blockValueColor: "#111827",
  blockTitleSize: "16px",
  blockValueSize: "15px",
  blockGap: "18px",
  formTitle: "CONTACT US",
  formTitleColor: "#111827",
  formTitleSize: "22px",
  formFieldBackground: "#ffffff",
  formFieldBorder: "1px solid #e5e7eb",
  formFieldTextColor: "#111827",
  formFieldPlaceholderColor: "#9ca3af",
  formFieldRadius: "0px",
  formFieldHeight: "44px",
  formFieldTextareaHeight: "120px",
  formFieldGap: "16px",
  submitLabel: "Submit",
  submitButtonBackground: "#f97316",
  submitButtonTextColor: "#ffffff",
  submitButtonBorder: "none",
  submitButtonRadius: "999px",
  submitButtonHeight: "46px",
  submitButtonFontSize: "14px",
  submitButtonShadow: "0 14px 28px rgba(249,115,22,0.28)",
  buttonHoverBackground: "#ea580c",
  buttonHoverTextColor: "#ffffff",
  sectionOverflow: "visible",
  eyebrowColor: "#ea580c",
  titleColor: "#111827",
  descriptionColor: "#111827",
  style: {},
  className: "",
};

WaveContactSplit.defaultProps = waveContactSplitDefaultProps;

export default WaveContactSplit;
