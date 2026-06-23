"use client";

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, Menu, Search, X } from "lucide-react";

const normalizeHex = (value = "") => {
  const raw = String(value).trim();
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw)) return null;
  if (raw.length === 4) {
    return `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}`;
  }
  return raw;
};

const hexToRgba = (value, alpha, fallback = `rgba(15, 23, 42, ${alpha})`) => {
  const normalized = normalizeHex(value);
  if (!normalized) return fallback;
  const hex = normalized.slice(1);
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const sizeToPx = (value, fallback) => {
  const raw = String(value || "").trim();
  if (!raw) return fallback;
  if (raw.endsWith("rem") || raw.endsWith("em")) {
    const parsed = Number.parseFloat(raw.replace(/rem|em/g, ""));
    return Number.isFinite(parsed) ? parsed * 16 : fallback;
  }
  const parsed = Number.parseFloat(raw.replace("px", ""));
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const headerComponentDefaultProps = {
  variant: "solid",
  showTopStrip: false,
  topStripText: "Now booking launch partners for this quarter",
  topStripBackground: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
  topStripTextColor: "#ffffff",
  logoSrc: "",
  logoAlt: "Company Logo",
  logoText: "Brand Studio",
  logoTextColor: "#0f172a",
  logoFontSize: "1.25rem",
  logoFontWeight: 700,
  logoLetterSpacing: "-0.02em",
  logoFontFamily: "inherit",
  logoTextTransform: "none",
  logoWidth: "auto",
  logoHeight: "32px",
  showLogoBadge: false,
  logoBadgeText: "Beta",
  logoBadgeBackground: "rgba(15,23,42,0.05)",
  logoBadgeTextColor: "#0f172a",
  navLinks: [
    { id: "nav1", text: "Features", href: "#" },
    { id: "nav2", text: "Solutions", href: "#" },
    { id: "nav3", text: "Pricing", href: "#" },
  ],
  navGap: "0.25rem",
  navDropdownBg:
    "rgba(255,255,255,0.98)",
  navDropdownTextColor: "#0f172a",
  navDropdownBorder: "1px solid rgba(226,232,240,0.8)",
  navDropdownShadow: "0 10px 40px -10px rgba(15,23,42,0.1)",
  textColor: "#334155",
  showSearch: false,
  searchPlaceholder: "Search...",
  searchWidth: "200px",
  searchBg: "rgba(241,245,249,0.8)",
  searchBorderColor: "transparent",
  searchTextColor: "#0f172a",
  searchBorderRadius: "999px",
  searchShadow: "none",
  headerHeight: "72px",
  maxWidth: "100%",
  backgroundColor: "transparent",
  innerBackground:
    "rgba(255,255,255,0.85)",
  innerBorder: "1px solid rgba(255,255,255,0.4)",
  innerRadius: "0px",
  innerShadow: "0 4px 24px -6px rgba(15,23,42,0.05)",
  containerPaddingX: "24px",
  containerPaddingY: "12px",
  backdropBlur: "20px",
  sticky: true,
  topOffset: "16px",
  zIndex: 50,
  showAuth: true,
  isLoggedIn: false,
  loginText: "Log in",
  registerText: "Sign up",
  welcomeText: "Welcome",
  logoutText: "Log out",
  alignItems: "center",
  style: {},
  linkStyle: {
    color: "#475569",
    hoverColor: "#0f172a",
    hoverBg: "rgba(15,23,42,0.04)",
    fontSize: "0.875rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "999px",
  },
  showPrimaryAction: true,
  primaryActionText: "Get Started",
  primaryActionHref: "#",
  primaryActionBg: "#0f172a",
  primaryActionTextColor: "#ffffff",
  primaryActionBorderColor: "transparent",
  primaryActionBorderWidth: "0px",
  primaryActionBorderRadius: "999px",
  mobileMenuBg:
    "rgba(255,255,255,0.98)",
  mobileMenuTextColor: "#0f172a",
  mobileMenuBorderColor: "rgba(226,232,240,0.8)",
  mobileMenuShadow: "0 20px 40px -10px rgba(15,23,42,0.15)",
  mobileBreakpoint: "900px",
  menuLayout: "inline",
  menuAlignment: "left",
};

const buildCompatibleHeaderProps = (rawProps = {}) => ({
  ...rawProps,
  variant: rawProps.variant || "solid",
  linkStyle: {
    ...headerComponentDefaultProps.linkStyle,
    ...(rawProps.linkStyle || {}),
  },
  innerBackground:
    rawProps.innerBackground ||
    rawProps.backgroundColor ||
    headerComponentDefaultProps.innerBackground,
  innerBorder:
    rawProps.innerBorder ||
    (rawProps.borderBottomStyle && rawProps.borderBottomStyle !== "none"
      ? `${rawProps.borderBottomWidth || "1px"} ${rawProps.borderBottomStyle} ${
          rawProps.borderBottomColor || "rgba(226,232,240,0.88)"
        }`
      : headerComponentDefaultProps.innerBorder),
  innerRadius: rawProps.innerRadius || rawProps.borderRadius || headerComponentDefaultProps.innerRadius,
  innerShadow: rawProps.innerShadow || rawProps.boxShadow || headerComponentDefaultProps.innerShadow,
  navDropdownBorder:
    rawProps.navDropdownBorder ||
    `1px solid ${rawProps.borderBottomColor || "rgba(226,232,240,0.9)"}`,
  searchShadow: rawProps.searchShadow || headerComponentDefaultProps.searchShadow,
  mobileMenuBorderColor:
    rawProps.mobileMenuBorderColor ||
    rawProps.borderBottomColor ||
    headerComponentDefaultProps.mobileMenuBorderColor,
  mobileMenuShadow: rawProps.mobileMenuShadow || rawProps.boxShadow || headerComponentDefaultProps.mobileMenuShadow,
});

const HeaderComponent = (rawProps) => {
  const props = {
    ...headerComponentDefaultProps,
    ...buildCompatibleHeaderProps(rawProps || {}),
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState(null);
  const [hoveredAction, setHoveredAction] = useState(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [isDrawerViewport, setIsDrawerViewport] = useState(false);

  const {
    variant,
    showTopStrip,
    topStripText,
    topStripBackground,
    topStripTextColor,
    logoSrc,
    logoAlt,
    logoText,
    logoTextColor,
    logoFontSize,
    logoFontWeight,
    logoLetterSpacing,
    logoFontFamily,
    logoTextTransform,
    logoWidth,
    logoHeight,
    showLogoBadge,
    logoBadgeText,
    logoBadgeBackground,
    logoBadgeTextColor,
    navLinks,
    navGap,
    navDropdownBg,
    navDropdownTextColor,
    navDropdownBorder,
    navDropdownShadow,
    textColor,
    showSearch,
    searchPlaceholder,
    searchWidth,
    searchBg,
    searchBorderColor,
    searchTextColor,
    searchBorderRadius,
    searchShadow,
    headerHeight,
    maxWidth,
    backgroundColor,
    innerBackground,
    innerBorder,
    innerRadius,
    innerShadow,
    containerPaddingX,
    containerPaddingY,
    backdropBlur,
    sticky,
    topOffset,
    zIndex,
    showAuth,
    isLoggedIn,
    loginText,
    registerText,
    welcomeText,
    logoutText,
    alignItems,
    style,
    linkStyle,
    showPrimaryAction,
    primaryActionText,
    primaryActionHref,
    primaryActionBg,
    primaryActionTextColor,
    primaryActionBorderColor,
    primaryActionBorderWidth,
    primaryActionBorderRadius,
    mobileMenuBg,
    mobileMenuTextColor,
    mobileMenuBorderColor,
    mobileMenuShadow,
    mobileBreakpoint,
    viewport,
    menuLayout,
    menuAlignment,
  } = props;

  const navItems = Array.isArray(navLinks) ? navLinks : [];
  const defaultLogo = "https://via.placeholder.com/120x50.png?text=Your+Logo";

  useEffect(() => {
    if (viewport === "mobile" || viewport === "tablet" || viewport === "desktop") {
      const forcedMobile = viewport === "mobile";
      const forcedDrawer = viewport === "mobile" || viewport === "tablet";
      setIsMobileViewport(forcedMobile);
      setIsDrawerViewport(forcedDrawer);
      if (!forcedDrawer) setMobileOpen(false);
      return undefined;
    }

    if (typeof window === "undefined") return undefined;
    const mobilePx = sizeToPx(mobileBreakpoint || "900px", 900);
    const drawerPx = mobilePx + 180;
    const mobileQuery = window.matchMedia(`(max-width: ${mobilePx}px)`);
    const drawerQuery = window.matchMedia(`(max-width: ${drawerPx}px)`);
    const syncViewport = () => {
      const nextMobile = Boolean(mobileQuery.matches);
      const nextDrawer = Boolean(drawerQuery.matches);
      setIsMobileViewport(nextMobile);
      setIsDrawerViewport(nextDrawer);
      if (!nextDrawer) setMobileOpen(false);
    };
    syncViewport();
    if (
      typeof mobileQuery.addEventListener === "function" &&
      typeof drawerQuery.addEventListener === "function"
    ) {
      mobileQuery.addEventListener("change", syncViewport);
      drawerQuery.addEventListener("change", syncViewport);
      return () => {
        mobileQuery.removeEventListener("change", syncViewport);
        drawerQuery.removeEventListener("change", syncViewport);
      };
    }
    mobileQuery.addListener(syncViewport);
    drawerQuery.addListener(syncViewport);
    return () => {
      mobileQuery.removeListener(syncViewport);
      drawerQuery.removeListener(syncViewport);
    };
  }, [mobileBreakpoint, viewport]);

  const isResponsiveViewport = isDrawerViewport;

  const baseLinkStyle = useMemo(
    () => ({
      textDecoration: "none",
      color: linkStyle.color || textColor || "#0f172a",
      fontSize: linkStyle.fontSize || "15px",
      fontWeight: linkStyle.fontWeight || "600",
      padding: linkStyle.padding || "0.6rem 0.95rem",
      borderRadius: linkStyle.borderRadius || "999px",
      transition:
        "transform 180ms ease, background-color 180ms ease, color 180ms ease, box-shadow 180ms ease",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.45rem",
      whiteSpace: "nowrap",
    }),
    [linkStyle, textColor],
  );

  const getDesktopLinkStyle = (linkId) => {
    const isHovered = hoveredNavId === linkId;
    return {
      ...baseLinkStyle,
      color: isHovered
        ? linkStyle.hoverColor || linkStyle.color || textColor || "#0f172a"
        : linkStyle.color || textColor || "#475569",
      background:
        isHovered
          ? linkStyle.hoverBg || "rgba(15,23,42,0.04)"
          : "transparent",
      boxShadow: "none",
      transform: "none",
    };
  };

  const getActionLinkStyle = (key) => {
    const isHovered = hoveredAction === key;
    return {
      ...baseLinkStyle,
      color: isHovered
        ? linkStyle.hoverColor || linkStyle.color || textColor || "#0f172a"
        : linkStyle.color || textColor || "#475569",
      background:
        isHovered
          ? linkStyle.hoverBg || "rgba(15,23,42,0.04)"
          : "transparent",
    };
  };

  const outerStyle = {
    position: sticky ? "sticky" : "relative",
    top: sticky ? topOffset : undefined,
    zIndex,
    width: "100%",
    background: variant === "solid" ? backgroundColor || innerBackground : "transparent",
    color: textColor,
    padding: variant === "floating" ? (isResponsiveViewport ? "10px 12px 0" : "14px 16px 0") : isResponsiveViewport ? "0 12px" : "0 16px",
    ...style,
  };

  const shellStyle = {
    maxWidth,
    margin: "0 auto",
    padding: `${containerPaddingY} ${containerPaddingX}`,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    background: variant === "minimal" ? "transparent" : innerBackground,
    border: variant === "minimal" ? "none" : innerBorder,
    borderRadius: variant === "minimal" ? "0px" : innerRadius,
    boxShadow: variant === "minimal" ? "none" : innerShadow,
    backdropFilter: backdropBlur !== "none" ? `blur(${backdropBlur})` : undefined,
    WebkitBackdropFilter: backdropBlur !== "none" ? `blur(${backdropBlur})` : undefined,
    overflow: "visible",
  };

  const topRowStyle = {
    minHeight: headerHeight,
    display: "grid",
    gridTemplateColumns: isResponsiveViewport ? "minmax(0,1fr) auto" : "auto minmax(0,1fr) auto",
    alignItems: alignItems,
    gap: "1rem",
  };

  const navWrapStyle = {
    display: isResponsiveViewport ? "none" : "flex",
    justifyContent: "center",
    minWidth: 0,
  };

  const searchInputStyle = {
    width: searchWidth,
    maxWidth: "100%",
    padding: "0.75rem 1rem 0.75rem 2.5rem",
    border: `1px solid ${searchBorderColor}`,
    borderRadius: searchBorderRadius,
    background: searchBg,
    color: searchTextColor,
    boxShadow: searchShadow,
    outline: "none",
  };

  const primaryActionStyle = {
    ...baseLinkStyle,
    background: primaryActionBg,
    color: primaryActionTextColor,
    border: primaryActionBorderWidth && primaryActionBorderWidth !== "0px" ? `${primaryActionBorderWidth} solid ${primaryActionBorderColor}` : "none",
    borderRadius: primaryActionBorderRadius,
    boxShadow: "none",
    fontWeight: 500,
  };

  const renderNavLinks = (links, isMobile = false) => (
    <ul
      style={{
        display: isMobile ? "block" : "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
        gap: isMobile ? undefined : navGap,
      }}
    >
      {links.map((link) => {
        const hasChildren = Array.isArray(link.children) && link.children.length > 0;
        const linkStyleForMode = isMobile
          ? {
              ...baseLinkStyle,
              color: mobileMenuTextColor || textColor || "#0f172a",
              width: "100%",
              justifyContent: "space-between",
              padding: "0.85rem 0.25rem",
              borderRadius: "14px",
            }
          : getDesktopLinkStyle(link.id);

        return (
          <li
            key={link.id}
            style={{ marginBottom: isMobile ? "0.4rem" : 0, position: "relative" }}
            onMouseEnter={() => !isMobile && setHoveredNavId(link.id)}
            onMouseLeave={() => !isMobile && setHoveredNavId(null)}
          >
            <a href={link.href} style={linkStyleForMode}>
              <span>{link.text}</span>
              {hasChildren ? <ChevronDown size={15} strokeWidth={2.2} /> : null}
            </a>

            {hasChildren && isMobile ? (
              <ul style={{ listStyle: "none", marginTop: "0.25rem", paddingLeft: "0.75rem" }}>
                {link.children.map((child) => (
                  <li key={child.id} style={{ marginBottom: "0.25rem" }}>
                    <a
                      href={child.href}
                      style={{
                        ...baseLinkStyle,
                        display: "flex",
                        justifyContent: "flex-start",
                        color: mobileMenuTextColor || textColor || "#0f172a",
                        opacity: 0.88,
                        padding: "0.7rem 0.25rem",
                      }}
                    >
                      {child.text}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            {hasChildren && !isMobile && hoveredNavId === link.id ? (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: 0,
                  minWidth: "220px",
                  background: navDropdownBg,
                  color: navDropdownTextColor,
                  border: navDropdownBorder,
                  borderRadius: "20px",
                  boxShadow: navDropdownShadow,
                  padding: "0.7rem",
                  zIndex: 70,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {link.children.map((child) => (
                  <a
                    key={child.id}
                    href={child.href}
                    style={{
                      ...baseLinkStyle,
                      display: "flex",
                      justifyContent: "space-between",
                      color: navDropdownTextColor,
                      borderRadius: "14px",
                      padding: "0.8rem 0.9rem",
                    }}
                  >
                    <span>{child.text}</span>
                    <span style={{ opacity: 0.4 }}>+</span>
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );

  const renderAuthArea = (isMobile = false) => {
    if (!showAuth) return null;
    const linkProps = (key) => ({
      style: isMobile
        ? {
            ...baseLinkStyle,
            justifyContent: "flex-start",
            color: mobileMenuTextColor || textColor || "#0f172a",
            padding: "0.8rem 0.25rem",
          }
        : getActionLinkStyle(key),
      onMouseEnter: () => !isMobile && setHoveredAction(key),
      onMouseLeave: () => !isMobile && setHoveredAction(null),
    });

    if (isLoggedIn) {
      return (
        <>
          <span
            style={{
              fontSize: "0.92rem",
              color: isMobile ? mobileMenuTextColor || textColor : textColor,
              opacity: 0.82,
            }}
          >
            {welcomeText}
          </span>
          <a href="#logout" {...linkProps("logout")}>
            {logoutText}
          </a>
        </>
      );
    }

    return (
      <>
        <a href="#login" {...linkProps("login")}>
          {loginText}
        </a>
        <a href="#register" {...linkProps("register")}>
          {registerText}
        </a>
      </>
    );
  };

  return (
    <header style={outerStyle}>
      {showTopStrip && topStripText ? (
        <div
          style={{
            background: topStripBackground,
            color: topStripTextColor,
            textAlign: "center",
            padding: "0.55rem 1rem",
            fontSize: isResponsiveViewport ? "0.72rem" : "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {topStripText}
        </div>
      ) : null}

      <div style={shellStyle}>
        <div style={topRowStyle}>
        <div style={{ display: "flex", alignItems: "center", minWidth: 0, gap: "0.75rem", position: "relative", zIndex: 1 }}>
          {logoSrc ? (
            <img
              src={logoSrc || defaultLogo}
              alt={logoAlt}
              style={{ width: logoWidth, height: logoHeight, objectFit: "contain" }}
            />
          ) : (
            <span
              style={{
                color: logoTextColor || textColor,
                fontWeight: logoFontWeight,
                fontSize: logoFontSize,
                letterSpacing: logoLetterSpacing,
                fontFamily: logoFontFamily,
                textTransform: logoTextTransform,
                whiteSpace: "nowrap",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {logoText}
            </span>
          )}
          {showLogoBadge && logoBadgeText && !isResponsiveViewport ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.35rem 0.65rem",
                borderRadius: "999px",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: logoBadgeTextColor,
                background: logoBadgeBackground,
                border: "none",
              }}
            >
              {logoBadgeText}
            </span>
          ) : null}
        </div>

        {menuLayout !== "stacked" ? (
          <nav style={navWrapStyle}>{renderNavLinks(navItems)}</nav>
        ) : (
          <div style={{ display: isResponsiveViewport ? "none" : "block" }} />
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.65rem",
            minWidth: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {showSearch && !isResponsiveViewport ? (
            <div style={{ position: "relative" }}>
              <Search
                size={16}
                style={{
                  position: "absolute",
                  left: "0.9rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: searchTextColor,
                  opacity: 0.55,
                }}
              />
              <input type="search" placeholder={searchPlaceholder} style={searchInputStyle} />
            </div>
          ) : null}

          {!isResponsiveViewport ? (
            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              {renderAuthArea()}
              {showPrimaryAction ? (
                <a href={primaryActionHref} style={primaryActionStyle}>
                  {primaryActionText}
                </a>
              ) : null}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              style={{
                border: "1px solid rgba(226,232,240,0.8)",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.5)",
                color: textColor,
                width: "40px",
                height: "40px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(15,23,42,0.05)",
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
        </div>

        {!isResponsiveViewport && menuLayout === "stacked" && (
          <div
            style={{
              display: "flex",
              justifyContent:
                menuAlignment === "center" ? "center" : menuAlignment === "right" ? "flex-end" : "flex-start",
              paddingTop: "0.75rem",
              paddingBottom: "0.5rem",
              borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            }}
          >
            {renderNavLinks(navItems)}
          </div>
        )}
      </div>

      {isResponsiveViewport && mobileOpen ? (
        <div style={{ padding: variant === "floating" ? "10px 0 0" : "8px 0 0" }}>
          <div
            style={{
              maxWidth,
              margin: "0 auto",
              background: mobileMenuBg,
              color: mobileMenuTextColor,
              border: `1px solid ${mobileMenuBorderColor}`,
              borderRadius: "24px",
              boxShadow: mobileMenuShadow,
              padding: "1rem",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            {showSearch ? (
              <div style={{ position: "relative", marginBottom: "0.9rem" }}>
                <Search
                  size={16}
                  style={{
                    position: "absolute",
                    left: "0.9rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: searchTextColor,
                    opacity: 0.55,
                  }}
                />
                <input
                  type="search"
                  placeholder={searchPlaceholder}
                  style={{ ...searchInputStyle, width: "100%" }}
                />
              </div>
            ) : null}

            {renderNavLinks(navItems, true)}
            <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {renderAuthArea(true)}
              {showPrimaryAction ? (
                <a
                  href={primaryActionHref}
                  style={{
                    ...primaryActionStyle,
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "0.35rem",
                  }}
                >
                  {primaryActionText}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

HeaderComponent.propTypes = {
  variant: PropTypes.oneOf(["floating", "solid", "minimal"]),
  showTopStrip: PropTypes.bool,
  topStripText: PropTypes.string,
  topStripBackground: PropTypes.string,
  topStripTextColor: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  logoText: PropTypes.string,
  logoTextColor: PropTypes.string,
  logoFontSize: PropTypes.string,
  logoFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  logoLetterSpacing: PropTypes.string,
  logoFontFamily: PropTypes.string,
  logoTextTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  logoWidth: PropTypes.string,
  logoHeight: PropTypes.string,
  showLogoBadge: PropTypes.bool,
  logoBadgeText: PropTypes.string,
  logoBadgeBackground: PropTypes.string,
  logoBadgeTextColor: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      children: PropTypes.array,
    }),
  ),
  navGap: PropTypes.string,
  navDropdownBg: PropTypes.string,
  navDropdownTextColor: PropTypes.string,
  navDropdownBorder: PropTypes.string,
  navDropdownShadow: PropTypes.string,
  textColor: PropTypes.string,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  searchWidth: PropTypes.string,
  searchBg: PropTypes.string,
  searchBorderColor: PropTypes.string,
  searchTextColor: PropTypes.string,
  searchBorderRadius: PropTypes.string,
  searchShadow: PropTypes.string,
  headerHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  backgroundColor: PropTypes.string,
  innerBackground: PropTypes.string,
  innerBorder: PropTypes.string,
  innerRadius: PropTypes.string,
  innerShadow: PropTypes.string,
  containerPaddingX: PropTypes.string,
  containerPaddingY: PropTypes.string,
  backdropBlur: PropTypes.string,
  sticky: PropTypes.bool,
  topOffset: PropTypes.string,
  zIndex: PropTypes.number,
  showAuth: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  loginText: PropTypes.string,
  registerText: PropTypes.string,
  welcomeText: PropTypes.string,
  logoutText: PropTypes.string,
  alignItems: PropTypes.string,
  style: PropTypes.object,
  linkStyle: PropTypes.object,
  showPrimaryAction: PropTypes.bool,
  primaryActionText: PropTypes.string,
  primaryActionHref: PropTypes.string,
  primaryActionBg: PropTypes.string,
  primaryActionTextColor: PropTypes.string,
  primaryActionBorderColor: PropTypes.string,
  primaryActionBorderWidth: PropTypes.string,
  primaryActionBorderRadius: PropTypes.string,
  mobileMenuBg: PropTypes.string,
  mobileMenuTextColor: PropTypes.string,
  mobileMenuBorderColor: PropTypes.string,
  mobileMenuShadow: PropTypes.string,
  mobileBreakpoint: PropTypes.string,
  viewport: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  menuLayout: PropTypes.oneOf(["inline", "stacked"]),
  menuAlignment: PropTypes.oneOf(["left", "center", "right"]),
};

HeaderComponent.defaultProps = headerComponentDefaultProps;

export default HeaderComponent;
