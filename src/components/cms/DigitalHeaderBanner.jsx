"use client";

import React from "react";
import PropTypes from "prop-types";

export const DIGITAL_HEADER_ICON_OPTIONS = ["✨", "🚀", "📈", "🎨", "💡", "⚡", "🎯", "🧭"];

export const digitalHeaderBannerDefaultProps = {
  sectionBackground: "#fdfbff",
  accentColor: "#ec307c",
  textColor: "#0f172a",
  secondaryTextColor: "#4b5563",
  heroAccentBarColor: "#ec307c",
  heroTitle: "We're a digital agency.",
  heroSubtitle: "Designing modern experiences for bold clients and growing brands.",
  logoText: "Digital Logo",
  logoHref: "#",
  logoImage: "",
  logoImageAlt: "Digital Logo",
  logoImageWidth: "auto",
  logoImageHeight: "40px",
  showLogoTextWithImage: false,
  logoFontFamily: "Inter, system-ui, sans-serif",
  logoFontSize: "24px",
  ctaText: "Get Started",
  ctaHref: "#",
  ctaTarget: "_self",
  ctaOutline: false,
  ctaShadow: "0 12px 30px rgba(236, 48, 124, 0.35)",
  ctaBackground: "#ec307c",
  ctaTextColor: "#ffffff",
  ctaBorderColor: "#ec307c",
  heroImage:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  heroImageAlt: "Digital creative leader",
  heroImageShadow: "0 25px 55px rgba(15, 23, 42, 0.18)",
  navLinkColor: "#4b5563",
  navLinkHoverColor: "#ec307c",
  navLinkActiveColor: "#ec307c",
  navLinks: [
    { id: "home", label: "Home", href: "#" },
    { id: "services", label: "Services", href: "#" },
    { id: "works", label: "Works", href: "#" },
    { id: "about", label: "About", href: "#" },
    { id: "blog", label: "Blog", href: "#" },
    { id: "contact", label: "Contact", href: "#" },
  ],
  cards: [
    {
      id: "card-1",
      title: "Future Vision",
      description: "Future-forward thinking to keep your brand ahead of the curve.",
      icon: "✨",
      highlight: "#ec307c",
      backgroundColor: "#ffffff",
      textColor: "#0f172a",
    },
    {
      id: "card-2",
      title: "Product Design",
      description: "Human-centric design that feels effortless across screens.",
      icon: "🚀",
      highlight: "#0f9ad3",
      backgroundColor: "#ffffff",
      textColor: "#0f172a",
    },
    {
      id: "card-3",
      title: "Innovative Solutions",
      description: "Engineering impact with scalable, thoughtful digital products.",
      icon: "📈",
      highlight: "#f2c742",
      backgroundColor: "#ffffff",
      textColor: "#0f172a",
    },
  ],
};

const DigitalHeaderBanner = ({
  sectionBackground = digitalHeaderBannerDefaultProps.sectionBackground,
  accentColor = digitalHeaderBannerDefaultProps.accentColor,
  textColor = digitalHeaderBannerDefaultProps.textColor,
  secondaryTextColor = digitalHeaderBannerDefaultProps.secondaryTextColor,
  heroAccentBarColor = digitalHeaderBannerDefaultProps.heroAccentBarColor,
  heroTitle = digitalHeaderBannerDefaultProps.heroTitle,
  heroSubtitle = digitalHeaderBannerDefaultProps.heroSubtitle,
  logoText = digitalHeaderBannerDefaultProps.logoText,
  logoHref = digitalHeaderBannerDefaultProps.logoHref,
  logoImage = digitalHeaderBannerDefaultProps.logoImage,
  logoImageAlt = digitalHeaderBannerDefaultProps.logoImageAlt,
  logoImageWidth = digitalHeaderBannerDefaultProps.logoImageWidth,
  logoImageHeight = digitalHeaderBannerDefaultProps.logoImageHeight,
  showLogoTextWithImage = digitalHeaderBannerDefaultProps.showLogoTextWithImage,
  logoFontFamily = digitalHeaderBannerDefaultProps.logoFontFamily,
  logoFontSize = digitalHeaderBannerDefaultProps.logoFontSize,
  ctaText = digitalHeaderBannerDefaultProps.ctaText,
  ctaHref = digitalHeaderBannerDefaultProps.ctaHref,
  ctaTarget = digitalHeaderBannerDefaultProps.ctaTarget,
  ctaOutline = digitalHeaderBannerDefaultProps.ctaOutline,
  ctaShadow = digitalHeaderBannerDefaultProps.ctaShadow,
  ctaBackground = digitalHeaderBannerDefaultProps.ctaBackground,
  ctaTextColor = digitalHeaderBannerDefaultProps.ctaTextColor,
  ctaBorderColor = digitalHeaderBannerDefaultProps.ctaBorderColor,
  heroImage = digitalHeaderBannerDefaultProps.heroImage,
  heroImageAlt = digitalHeaderBannerDefaultProps.heroImageAlt,
  heroImageShadow = digitalHeaderBannerDefaultProps.heroImageShadow,
  navLinkColor = digitalHeaderBannerDefaultProps.navLinkColor,
  navLinkHoverColor = digitalHeaderBannerDefaultProps.navLinkHoverColor,
  navLinkActiveColor = digitalHeaderBannerDefaultProps.navLinkActiveColor,
  navLinks = digitalHeaderBannerDefaultProps.navLinks,
  cards = digitalHeaderBannerDefaultProps.cards,
}) => {
  const safeCards = Array.isArray(cards) ? cards : [];
  const safeNavLinks = Array.isArray(navLinks) ? navLinks : [];

  const sectionStyle = {
    background: sectionBackground,
    color: textColor,
    padding: "32px 16px 48px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    fontSize: "14px",
    fontWeight: 600,
  };

  const logoLinkStyle = {
    fontSize: logoFontSize || "24px",
    fontFamily: logoFontFamily || "'Inter', system-ui, sans-serif",
    color: textColor,
    fontWeight: 700,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    minWidth: 0,
  };

  const logoImageStyle = {
    width: logoImageWidth || "auto",
    height: logoImageHeight || "40px",
    maxWidth: "220px",
    objectFit: "contain",
    display: "block",
  };

  const heroStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "52px",
    fontWeight: 800,
    margin: 0,
    lineHeight: 1.1,
  };

  const buttonStyle = ctaOutline
    ? {
        border: `2px solid ${ctaBorderColor || accentColor}`,
        color: ctaBorderColor || accentColor,
        background: "transparent",
        boxShadow: ctaShadow,
      }
    : {
        backgroundColor: ctaBackground || accentColor,
        color: ctaTextColor || "#fff",
        border: "none",
        boxShadow: ctaShadow,
      };

  const imageStyle = {
    width: "100%",
    borderRadius: "28px",
    objectFit: "cover",
    boxShadow: heroImageShadow,
    display: "block",
  };

  const cardsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  };

  const highlightStyle = (color) => ({
    width: "48px",
    height: "4px",
    backgroundColor: color || accentColor,
    borderRadius: "999px",
    marginTop: "10px",
  });

  return (
    <section style={sectionStyle}>
      <style>{`
        .digital-header-nav-link {
          color: ${navLinkColor};
          text-decoration: none;
          transition: color 180ms ease;
        }
        .digital-header-nav-link:hover {
          color: ${navLinkHoverColor};
        }
        .digital-header-nav-link[data-active="true"] {
          color: ${navLinkActiveColor};
        }
      `}</style>
      <div style={containerStyle}>
        <div style={navStyle}>
          <a href={logoHref || "#"} style={logoLinkStyle}>
            {logoImage ? (
              <img src={logoImage} alt={logoImageAlt || logoText || "Logo"} style={logoImageStyle} />
            ) : null}
            {(!logoImage || showLogoTextWithImage) && logoText ? <span>{logoText}</span> : null}
          </a>
          <div style={navLinksStyle}>
            {safeNavLinks.map((link) => (
              <a
                key={link.id || link.label}
                href={link.href || "#"}
                className="digital-header-nav-link"
                data-active={link.active || false}
                target={link.target || "_self"}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={heroStyle}>
          <div>
            <div
              style={{
                marginBottom: "12px",
                width: "60px",
                height: "4px",
                background: heroAccentBarColor,
              }}
            />
            <h1 style={titleStyle}>{heroTitle}</h1>
            <p style={{ color: secondaryTextColor, fontSize: "16px", marginTop: "16px" }}>{heroSubtitle}</p>
            <div style={{ marginTop: "24px" }}>
              <a
                href={ctaHref || "#"}
                target={ctaTarget}
                rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
                style={{
                  textDecoration: "none",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "opacity 180ms ease",
                  ...buttonStyle,
                }}
              >
                {ctaText}
              </a>
            </div>
          </div>

          <div>
            <img src={heroImage} alt={heroImageAlt} style={imageStyle} />
          </div>
        </div>

        <div style={cardsStyle}>
          {safeCards.map((card) => (
            <div
              key={card.id || card.title}
              style={{
                background: card.backgroundColor || "#fff",
                borderRadius: "20px",
                padding: "20px",
                minHeight: "180px",
                boxShadow: "0 20px 35px rgba(15, 23, 42, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                color: card.textColor || secondaryTextColor,
              }}
            >
              <div style={{ fontSize: "24px" }}>{card.icon || "✨"}</div>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>{card.title}</h3>
              <p style={{ margin: 0, fontSize: "14px" }}>{card.description}</p>
              <div style={highlightStyle(card.highlight || accentColor)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

DigitalHeaderBanner.propTypes = {
  sectionBackground: PropTypes.string,
  accentColor: PropTypes.string,
  textColor: PropTypes.string,
  secondaryTextColor: PropTypes.string,
  heroAccentBarColor: PropTypes.string,
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  logoText: PropTypes.string,
  logoHref: PropTypes.string,
  logoImage: PropTypes.string,
  logoImageAlt: PropTypes.string,
  logoImageWidth: PropTypes.string,
  logoImageHeight: PropTypes.string,
  showLogoTextWithImage: PropTypes.bool,
  logoFontFamily: PropTypes.string,
  logoFontSize: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  ctaTarget: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  ctaOutline: PropTypes.bool,
  ctaShadow: PropTypes.string,
  ctaBackground: PropTypes.string,
  ctaTextColor: PropTypes.string,
  ctaBorderColor: PropTypes.string,
  heroImage: PropTypes.string,
  heroImageAlt: PropTypes.string,
  heroImageShadow: PropTypes.string,
  navLinkColor: PropTypes.string,
  navLinkHoverColor: PropTypes.string,
  navLinkActiveColor: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      href: PropTypes.string,
      target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
      active: PropTypes.bool,
    }),
  ),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      highlight: PropTypes.string,
      backgroundColor: PropTypes.string,
      textColor: PropTypes.string,
    }),
  ),
};

DigitalHeaderBanner.defaultProps = digitalHeaderBannerDefaultProps;

export default DigitalHeaderBanner;
