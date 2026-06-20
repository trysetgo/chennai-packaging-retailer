"use client";

import React from "react";
import PropTypes from "prop-types";

const isHex = (value = "") => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
const parsePx = (value, fallback) => {
  const m = String(value || "").match(/^(-?\d+(\.\d+)?)px$/i);
  return m ? Number(m[1]) : fallback;
};

const SocialIconPlaceholder = ({ platform, color }) => {
  const text = (platform || "L").charAt(0).toUpperCase();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "28px",
        height: "28px",
        borderRadius: "9999px",
        fontSize: "12px",
        fontWeight: "700",
        color,
        border: `1px solid ${color}33`,
      }}
    >
      {text}
    </span>
  );
};

SocialIconPlaceholder.propTypes = {
  platform: PropTypes.string,
  color: PropTypes.string,
};

export const footerComponentDefaultProps = {
  backgroundColor: "#111827",
  textColor: "#9CA3AF",
  linkColor: "#D1D5DB",
  linkHoverColor: "#F9FAFB",
  sectionTitleColor: "#F3F4F6",
  borderColor: "#374151",
  paddingY: "48px",
  paddingX: "24px",
  contentMaxWidth: "1200px",
  gap: "32px",
  columnsDesktop: 4,
  columnsTablet: 2,
  columnsMobile: 1,
  titleFontSize: "14px",
  linkFontSize: "14px",
  textFontSize: "14px",
  socialIconSize: "28px",
  socialIconShape: "circle",
  logoSrc: "",
  logoAlt: "Company Logo",
  logoMaxWidth: "150px",
  logoText: "",
  logoTextColor: "#F9FAFB",
  logoTextSize: "18px",
  brandDescription: "Making the world a better place through constructed layouts.",
  brandDescriptionColor: "#9CA3AF",
  textAlign: "left",
  showLinkSections: true,
  showSocialLinks: true,
  showTopBorder: true,
  showBottomBorder: true,
  footerLayout: "default",
  linkSections: [
    {
      id: "s1",
      title: "Company",
      links: [
        { id: "l1", text: "About", url: "#" },
        { id: "l2", text: "Careers", url: "#" },
        { id: "l3", text: "Press", url: "#" },
      ],
    },
    {
      id: "s2",
      title: "Resources",
      links: [
        { id: "l4", text: "Blog", url: "#" },
        { id: "l5", text: "Help Center", url: "#" },
        { id: "l6", text: "Contact", url: "#" },
      ],
    },
  ],
  socialLinks: [
    { id: "sm1", platform: "facebook", url: "#" },
    { id: "sm2", platform: "twitter", url: "#" },
    { id: "sm3", platform: "instagram", url: "#" },
  ],
  copyrightText: `© ${new Date().getFullYear()} YourBrand. All rights reserved.`,
  style: {},
};

const FooterComponent = (rawProps) => {
  const props = { ...footerComponentDefaultProps, ...(rawProps || {}) };
  const {
    backgroundColor,
    textColor,
    linkColor,
    linkHoverColor,
    sectionTitleColor,
    borderColor,
    paddingY,
    paddingX,
    contentMaxWidth,
    gap,
    columnsDesktop,
    columnsTablet,
    columnsMobile,
    titleFontSize,
    linkFontSize,
    textFontSize,
    socialIconSize,
    socialIconShape,
    logoSrc,
    logoAlt,
    logoMaxWidth,
    logoText,
    logoTextColor,
    logoTextSize,
    brandDescription,
    brandDescriptionColor,
    textAlign,
    showLinkSections,
    showSocialLinks,
    showTopBorder,
    showBottomBorder,
    footerLayout,
    linkSections,
    socialLinks,
    copyrightText,
    style,
  } = props;

  const safeLinkSections = Array.isArray(linkSections) ? linkSections : [];
  const safeSocialLinks = Array.isArray(socialLinks) ? socialLinks : [];
  const columns = Math.max(1, Number(columnsDesktop) || 4);
  const tabletCols = Math.max(1, Number(columnsTablet) || 2);
  const mobileCols = Math.max(1, Number(columnsMobile) || 1);
  const titleSize = parsePx(titleFontSize, 14);
  const linkSize = parsePx(linkFontSize, 14);
  const bodySize = parsePx(textFontSize, 14);
  const iconSize = parsePx(socialIconSize, 28);

  const shapeRadius =
    socialIconShape === "square" ? "6px" : socialIconShape === "rounded" ? "10px" : "9999px";

  return (
    <footer
      className="footer-component"
      style={{
        backgroundColor,
        color: textColor,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        fontSize: `${bodySize}px`,
        ...style,
      }}
    >
      <style>{`
        .footer-link:hover { color: var(--footer-link-hover-color) !important; }
        .footer-social:hover { color: var(--footer-link-hover-color) !important; }
      `}</style>

      <div
        className="mx-auto flex flex-col"
        style={{
          maxWidth: contentMaxWidth,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          fontSize: `${bodySize}px`,
          "--footer-link-hover-color": isHex(linkHoverColor) ? linkHoverColor : "#F9FAFB",
        }}
      >
        {footerLayout === "minimal" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap,
              borderTop: showTopBorder ? `1px solid ${borderColor}` : "none",
              paddingTop: showTopBorder ? "24px" : "0px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {logoSrc ? (
                <img src={logoSrc} alt={logoAlt} style={{ maxWidth: logoMaxWidth, marginBottom: "16px" }} />
              ) : null}
              {logoText ? (
                <div style={{ color: logoTextColor, fontSize: logoTextSize, fontWeight: 700, marginBottom: "12px" }}>
                  {logoText}
                </div>
              ) : null}
              {brandDescription ? (
                <p style={{ color: brandDescriptionColor, fontSize: `${bodySize}px`, maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
                  {brandDescription}
                </p>
              ) : null}
            </div>

            {showLinkSections && safeLinkSections.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
                {safeLinkSections.flatMap((section) => section.links || []).map((link) => (
                  <a
                    key={link.id}
                    href={link.url || "#"}
                    className="footer-link"
                    style={{
                      color: linkColor,
                      textDecoration: "none",
                      fontSize: `${linkSize}px`,
                      transition: "color 150ms ease",
                    }}
                  >
                    {link.text || "Link"}
                  </a>
                ))}
              </div>
            )}

            {showSocialLinks && safeSocialLinks.length > 0 && (
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                {safeSocialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    style={{ color: linkColor, transition: "color 150ms ease" }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                        borderRadius: shapeRadius,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SocialIconPlaceholder platform={social.platform || "link"} color={linkColor} />
                    </span>
                  </a>
                ))}
              </div>
            )}

            <div style={{ width: "100%", borderTop: showBottomBorder ? `1px solid ${borderColor}` : "none", paddingTop: "24px", marginTop: "8px" }}>
              <p style={{ margin: 0, color: textColor }}>{copyrightText}</p>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap,
                borderTop: showTopBorder ? `1px solid ${borderColor}` : "none",
                paddingTop: showTopBorder ? "24px" : "0px",
              }}
              className="footer-main-grid"
            >
              <div className="footer-brand-section" style={{ minWidth: 0, display: "flex", flexDirection: "column", alignItems: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start' }}>
                {logoSrc ? (
                  <img src={logoSrc} alt={logoAlt} style={{ maxWidth: logoMaxWidth, marginBottom: "12px" }} />
                ) : null}
                {logoText ? (
                  <div
                    style={{
                      color: logoTextColor,
                      fontSize: logoTextSize,
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    {logoText}
                  </div>
                ) : null}
                {brandDescription ? (
                  <p style={{ color: brandDescriptionColor, fontSize: `${bodySize}px`, marginTop: "8px", marginBottom: 0, lineHeight: 1.6 }}>
                    {brandDescription}
                  </p>
                ) : null}
              </div>

              {showLinkSections &&
                safeLinkSections.map((section) => (
                  <div key={section.id} style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        color: sectionTitleColor,
                        fontWeight: 700,
                        marginBottom: "10px",
                        fontSize: `${titleSize}px`,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {section.title || "Links"}
                    </h3>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                      {(section.links || []).map((link) => (
                        <li key={link.id} style={{ marginBottom: "8px" }}>
                          <a
                            href={link.url || "#"}
                            className="footer-link"
                            style={{
                              color: linkColor,
                              textDecoration: "none",
                              fontSize: `${linkSize}px`,
                              transition: "color 150ms ease",
                            }}
                          >
                            {link.text || "Link"}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>

            <div
              className="footer-bottom"
              style={{
                display: "flex",
                flexDirection: footerLayout === "stacked" ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                marginTop: "24px",
                paddingTop: "16px",
                borderTop: showBottomBorder ? `1px solid ${borderColor}` : "none",
              }}
            >
              {showSocialLinks && safeSocialLinks.length > 0 && (
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: footerLayout === "stacked" ? "center" : "flex-start" }}>
                  {safeSocialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social"
                      style={{ color: linkColor, transition: "color 150ms ease" }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          width: `${iconSize}px`,
                          height: `${iconSize}px`,
                          borderRadius: shapeRadius,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SocialIconPlaceholder platform={social.platform || "link"} color={linkColor} />
                      </span>
                    </a>
                  ))}
                </div>
              )}
              <p style={{ margin: 0, color: textColor, textAlign: footerLayout === "stacked" ? "center" : "right" }}>
                {copyrightText}
              </p>
            </div>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-main-grid { grid-template-columns: repeat(${tabletCols}, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 640px) {
          .footer-main-grid { grid-template-columns: repeat(${mobileCols}, minmax(0, 1fr)) !important; }
          .footer-bottom { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
    </footer>
  );
};

FooterComponent.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  linkColor: PropTypes.string,
  linkHoverColor: PropTypes.string,
  sectionTitleColor: PropTypes.string,
  borderColor: PropTypes.string,
  paddingY: PropTypes.string,
  paddingX: PropTypes.string,
  contentMaxWidth: PropTypes.string,
  gap: PropTypes.string,
  columnsDesktop: PropTypes.number,
  columnsTablet: PropTypes.number,
  columnsMobile: PropTypes.number,
  titleFontSize: PropTypes.string,
  linkFontSize: PropTypes.string,
  textFontSize: PropTypes.string,
  socialIconSize: PropTypes.string,
  socialIconShape: PropTypes.oneOf(["circle", "rounded", "square"]),
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  logoMaxWidth: PropTypes.string,
  logoText: PropTypes.string,
  logoTextColor: PropTypes.string,
  logoTextSize: PropTypes.string,
  brandDescription: PropTypes.string,
  brandDescriptionColor: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  showLinkSections: PropTypes.bool,
  showSocialLinks: PropTypes.bool,
  showTopBorder: PropTypes.bool,
  showBottomBorder: PropTypes.bool,
  footerLayout: PropTypes.oneOf(["default", "stacked", "minimal"]),
  linkSections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }),
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      platform: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  copyrightText: PropTypes.string,
  style: PropTypes.object,
};

export default FooterComponent;
