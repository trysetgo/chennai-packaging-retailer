import React from "react";
import PropTypes from "prop-types";

const richTextContentBlockDefaultProps = {
  title: "उत्पाद वर्णन",
  content: "\u003cp>यह हल्की सूती-लिनन मिश्रित शर्ट गर्म दिनों के लिए बिल्कुल उपयुक्त है। सांस लेने योग्य बुनाई और साफ सुथरी फिनिश के साथ आराम के लिए डिज़ाइन किया गया।\u003c/p>\u003cp>समृद्ध विवरण, नीतियों, फीचर ब्रेकडाउन और संपादकीय अनुभागों के लिए इस ब्लॉक का उपयोग करें।\u003c/p>",
  showTitle: true,
  textAlign: "left",
  containerMaxWidth: "900px",
  sectionBackgroundColor: "transparent",
  cardBackgroundColor: "#ffffff",
  cardBorder: "1px solid #e5e7eb",
  cardRadius: "14px",
  cardPadding: "24px",
  cardShadow: "0 8px 24px rgba(15,23,42,0.06)",
  titleColor: "#111827",
  titleFontSize: "34px",
  titleFontWeight: "800",
  titleLineHeight: "1.2",
  titleMarginBottom: "14px",
  contentColor: "#374151",
  contentFontSize: "16px",
  contentLineHeight: "1.7",
  contentLetterSpacing: "0px",
  contentMaxWidth: "none",
  paragraphSpacing: "12px",
  headingSpacing: "14px",
  linkColor: "#2563eb",
  linkHoverColor: "#1d4ed8",
  headingColor: "#111827",
  listIndent: "24px",
  paddingTop: "24px",
  paddingRight: "24px",
  paddingBottom: "24px",
  paddingLeft: "24px",
  className: "",
  style: {},
  titleStyle: {},
  contentStyle: {}
};

const RichTextContentBlock = ({
  id,
  title,
  content,
  showTitle,
  textAlign,
  containerMaxWidth,
  sectionBackgroundColor,
  cardBackgroundColor,
  cardBorder,
  cardRadius,
  cardPadding,
  cardShadow,
  titleColor,
  titleFontSize,
  titleFontWeight,
  titleLineHeight,
  titleMarginBottom,
  contentColor,
  contentFontSize,
  contentLineHeight,
  contentLetterSpacing,
  contentMaxWidth,
  paragraphSpacing,
  headingSpacing,
  linkColor,
  linkHoverColor,
  headingColor,
  listIndent,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  className,
  style,
  titleStyle,
  contentStyle,
}) => {
  const rootStyle = {
    background: sectionBackgroundColor,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    ...style,
  };

  const cardStyle = {
    maxWidth: containerMaxWidth,
    margin: "0 auto",
    background: cardBackgroundColor,
    border: cardBorder,
    borderRadius: cardRadius,
    boxShadow: cardShadow,
    padding: cardPadding,
    textAlign,
  };

  const finalTitleStyle = {
    margin: 0,
    marginBottom: titleMarginBottom,
    color: titleColor,
    fontSize: titleFontSize,
    fontWeight: titleFontWeight,
    lineHeight: titleLineHeight,
    ...titleStyle,
  };

  const finalContentStyle = {
    color: contentColor,
    fontSize: contentFontSize,
    lineHeight: contentLineHeight,
    letterSpacing: contentLetterSpacing,
    maxWidth: contentMaxWidth,
    margin: textAlign === "center" ? "0 auto" : undefined,
    ...contentStyle,
  };

  return (
    <section id={id} style={rootStyle} className={className}>
      <div style={cardStyle} className="rich-text-content-block">
        {showTitle && title ? <h2 style={finalTitleStyle}>{title}</h2> : null}
        <div
          style={{
            ...finalContentStyle,
            ["--rt-link-color"]: linkColor,
            ["--rt-link-hover-color"]: linkHoverColor,
            ["--rt-heading-color"]: headingColor,
            ["--rt-p-spacing"]: paragraphSpacing,
            ["--rt-h-spacing"]: headingSpacing,
            ["--rt-list-indent"]: listIndent,
          }}
          className="rt-content max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <style>
        {`
          .rt-content p { margin: 0 0 var(--rt-p-spacing) 0; }
          .rt-content h1, .rt-content h2, .rt-content h3, .rt-content h4, .rt-content h5, .rt-content h6 {
            color: var(--rt-heading-color);
            margin: var(--rt-h-spacing) 0 calc(var(--rt-h-spacing) * 0.65) 0;
            line-height: 1.3;
          }
          .rt-content ul, .rt-content ol {
            margin: 0 0 var(--rt-p-spacing) 0;
            padding-left: var(--rt-list-indent);
          }
          .rt-content a {
            color: var(--rt-link-color);
            text-decoration: underline;
            text-underline-offset: 3px;
            transition: color 160ms ease;
          }
          .rt-content a:hover { color: var(--rt-link-hover-color); }
          .rt-content > *:last-child { margin-bottom: 0; }
        `}
      </style>
    </section>
  );
};

RichTextContentBlock.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  showTitle: PropTypes.bool,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  containerMaxWidth: PropTypes.string,
  sectionBackgroundColor: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardBorder: PropTypes.string,
  cardRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardShadow: PropTypes.string,
  titleColor: PropTypes.string,
  titleFontSize: PropTypes.string,
  titleFontWeight: PropTypes.string,
  titleLineHeight: PropTypes.string,
  titleMarginBottom: PropTypes.string,
  contentColor: PropTypes.string,
  contentFontSize: PropTypes.string,
  contentLineHeight: PropTypes.string,
  contentLetterSpacing: PropTypes.string,
  contentMaxWidth: PropTypes.string,
  paragraphSpacing: PropTypes.string,
  headingSpacing: PropTypes.string,
  linkColor: PropTypes.string,
  linkHoverColor: PropTypes.string,
  headingColor: PropTypes.string,
  listIndent: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

export { richTextContentBlockDefaultProps };
RichTextContentBlock.defaultProps = richTextContentBlockDefaultProps;

export default RichTextContentBlock;
