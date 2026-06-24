"use client";

import React from "react";
import PropTypes from "prop-types";

const isHex = (value = "") => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
const parsePx = (value, fallback) => {
  const m = String(value || "").match(/^(-?\d+(\.\d+)?)px$/i);
  return m ? Number(m[1]) : fallback;
};

const SOCIAL_ICONS = {
  facebook: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  ),
  twitter: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  ),
  github: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
  youtube: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  instagram: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  linkedin: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const SocialIconPlaceholder = ({ platform, color, size }) => {
  const text = (platform || "L").charAt(0).toUpperCase();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size || "28px",
        height: size || "28px",
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
  size: PropTypes.string,
};

const SocialIcon = ({ platform, color, size }) => {
  const icon = SOCIAL_ICONS[platform?.toLowerCase()];
  if (icon) {
    return (
      <span
        style={{
          width: size || "28px",
          height: size || "28px",
          display: "inline-block",
          color,
        }}
      >
        {icon}
      </span>
    );
  }
  return (
    <SocialIconPlaceholder platform={platform} color={color} size={size} />
  );
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
  fullWidth: false,
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
  brandDescription:
    "Making the world a better place through constructed layouts.",
  brandDescriptionColor: "#9CA3AF",
  textAlign: "left",
  showNewsletter: false,
  newsletterTitle: "Subscribe to our newsletter",
  newsletterDescription:
    "The latest news, articles, and resources, sent to your inbox weekly.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterAction: "mailto:contact@example.com",
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
    fullWidth,
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
    showNewsletter,
    newsletterTitle,
    newsletterDescription,
    newsletterPlaceholder,
    newsletterButtonText,
    newsletterAction,
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
    socialIconShape === "square"
      ? "6px"
      : socialIconShape === "rounded"
        ? "10px"
        : "9999px";

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
          maxWidth: fullWidth ? "100%" : contentMaxWidth,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          fontSize: `${bodySize}px`,
          "--footer-link-hover-color": isHex(linkHoverColor)
            ? linkHoverColor
            : "#F9FAFB",
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  style={{ maxWidth: logoMaxWidth, marginBottom: "16px" }}
                />
              ) : null}
              {logoText ? (
                <div
                  style={{
                    color: logoTextColor,
                    fontSize: logoTextSize,
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  {logoText}
                </div>
              ) : null}
              {brandDescription ? (
                <p
                  style={{
                    color: brandDescriptionColor,
                    fontSize: `${bodySize}px`,
                    maxWidth: "500px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                  }}
                >
                  {brandDescription}
                </p>
              ) : null}
            </div>

            {showLinkSections && safeLinkSections.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "24px",
                }}
              >
                {safeLinkSections
                  .flatMap((section) => section.links || [])
                  .map((link) => (
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
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
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
                      <SocialIcon
                        platform={social.platform || "link"}
                        color={linkColor}
                        size={`${iconSize}px`}
                      />
                    </span>
                  </a>
                ))}
              </div>
            )}

            {showNewsletter && (
              <div
                style={{ marginTop: "24px", width: "100%", maxWidth: "400px" }}
              >
                <h3
                  style={{
                    color: sectionTitleColor,
                    fontWeight: 700,
                    marginBottom: "10px",
                    fontSize: `${titleSize}px`,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    textAlign: "center",
                  }}
                >
                  {newsletterTitle}
                </h3>
                {newsletterDescription && (
                  <p
                    style={{
                      color: brandDescriptionColor,
                      fontSize: `${bodySize}px`,
                      marginBottom: "16px",
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}
                  >
                    {newsletterDescription}
                  </p>
                )}
                <form
                  action={newsletterAction}
                  method="POST"
                  className="flex flex-col gap-2"
                  onSubmit={(e) => {
                    if (newsletterAction.startsWith("mailto:")) {
                      /* let mailto work */
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder={newsletterPlaceholder}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      border: `1px solid ${borderColor}`,
                      background: "transparent",
                      color: textColor,
                      fontSize: `${bodySize}px`,
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      background: linkColor,
                      color: backgroundColor,
                      border: "none",
                      fontWeight: 600,
                      fontSize: `${bodySize}px`,
                      cursor: "pointer",
                      transition: "opacity 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
                    onMouseLeave={(e) => (e.target.style.opacity = 1)}
                  >
                    {newsletterButtonText}
                  </button>
                </form>
              </div>
            )}

            <div
              style={{
                width: "100%",
                borderTop: showBottomBorder
                  ? `1px solid ${borderColor}`
                  : "none",
                paddingTop: "24px",
                marginTop: "8px",
              }}
            >
              <p style={{ margin: 0, color: textColor }}>{copyrightText}</p>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${showNewsletter ? columns + 1 : columns}, minmax(0, 1fr))`,
                gap,
                borderTop: showTopBorder ? `1px solid ${borderColor}` : "none",
                paddingTop: showTopBorder ? "24px" : "0px",
              }}
              className="footer-main-grid"
            >
              <div
                className="footer-brand-section"
                style={{
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    textAlign === "center"
                      ? "center"
                      : textAlign === "right"
                        ? "flex-end"
                        : "flex-start",
                }}
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={logoAlt}
                    style={{ maxWidth: logoMaxWidth, marginBottom: "12px" }}
                  />
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
                  <p
                    style={{
                      color: brandDescriptionColor,
                      fontSize: `${bodySize}px`,
                      marginTop: "8px",
                      marginBottom: 0,
                      lineHeight: 1.6,
                    }}
                  >
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

              {showNewsletter && (
                <div
                  className="footer-newsletter-section"
                  style={{ minWidth: 0 }}
                >
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
                    {newsletterTitle}
                  </h3>
                  {newsletterDescription && (
                    <p
                      style={{
                        color: brandDescriptionColor,
                        fontSize: `${bodySize}px`,
                        marginBottom: "16px",
                        lineHeight: 1.6,
                      }}
                    >
                      {newsletterDescription}
                    </p>
                  )}
                  <form
                    action={newsletterAction}
                    method="POST"
                    className="flex flex-col gap-2"
                    onSubmit={(e) => {
                      if (newsletterAction.startsWith("mailto:")) {
                        /* let mailto work */
                      } else {
                        e.preventDefault();
                      }
                    }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder={newsletterPlaceholder}
                      required
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: `1px solid ${borderColor}`,
                        background: "transparent",
                        color: textColor,
                        fontSize: `${bodySize}px`,
                        outline: "none",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        background: linkColor,
                        color: backgroundColor,
                        border: "none",
                        fontWeight: 600,
                        fontSize: `${bodySize}px`,
                        cursor: "pointer",
                        transition: "opacity 150ms ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
                      onMouseLeave={(e) => (e.target.style.opacity = 1)}
                    >
                      {newsletterButtonText}
                    </button>
                  </form>
                </div>
              )}
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
                borderTop: showBottomBorder
                  ? `1px solid ${borderColor}`
                  : "none",
              }}
            >
              {showSocialLinks && safeSocialLinks.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    flexWrap: "wrap",
                    justifyContent:
                      footerLayout === "stacked" ? "center" : "flex-start",
                  }}
                >
                  {safeSocialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social"
                      style={{
                        color: linkColor,
                        transition: "color 150ms ease",
                      }}
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
                        <SocialIcon
                          platform={social.platform || "link"}
                          color={linkColor}
                          size={`${iconSize}px`}
                        />
                      </span>
                    </a>
                  ))}
                </div>
              )}
              <p
                style={{
                  margin: 0,
                  color: textColor,
                  textAlign: footerLayout === "stacked" ? "center" : "right",
                }}
              >
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
  fullWidth: PropTypes.bool,
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
  showNewsletter: PropTypes.bool,
  newsletterTitle: PropTypes.string,
  newsletterDescription: PropTypes.string,
  newsletterPlaceholder: PropTypes.string,
  newsletterButtonText: PropTypes.string,
  newsletterAction: PropTypes.string,
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
