"use client";

import React, { useMemo } from "react";
import PropTypes from "prop-types";

const defaultCategories = [
  { id: "cat-1", title: "Women's Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", link: "#", itemCount: "120 Products" },
  { id: "cat-2", title: "Men's Collection", image: "https://images.unsplash.com/photo-1490578474895-699bc4e3f39e?auto=format&fit=crop&w=800&q=80", link: "#", itemCount: "85 Products" },
  { id: "cat-3", title: "Accessories", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", link: "#", itemCount: "340 Products" },
  { id: "cat-4", title: "Footwear", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80", link: "#", itemCount: "64 Products" },
];

export const shopByCategoryV1DefaultProps = {
  title: "Shop by Category",
  subtitle: "Explore our wide range of collections curated just for you.",
  categoriesLayout: JSON.stringify(defaultCategories, null, 2),
  columns: 4,
  gap: "24px",
  sectionBackgroundColor: "#f9fafb",
  titleColor: "#111827",
  subtitleColor: "#4b5563",
  cardBackgroundColor: "#ffffff",
  cardTextColor: "#ffffff",
  cardSubTextColor: "rgba(255,255,255,0.8)",
  cardRadius: "16px",
  imageHeight: "360px",
  imageObjectFit: "cover",
  overlayColor: "#000000",
  overlayOpacity: 0.4,
  hoverScale: 1.05,
  style: {},
  className: "",
};

const ShopByCategoryV1 = (incomingProps) => {
  const props = { ...shopByCategoryV1DefaultProps, ...(incomingProps.props || incomingProps) };
  const { isPreviewing, isEditable } = incomingProps;

  const categories = useMemo(() => {
    try {
      return JSON.parse(props.categoriesLayout);
    } catch {
      return defaultCategories;
    }
  }, [props.categoriesLayout]);

  const preventClick = (e) => {
    if (isEditable && !isPreviewing) e.preventDefault();
  };

  return (
    <section
      style={{ backgroundColor: props.sectionBackgroundColor, padding: "64px 24px", ...props.style }}
      className={`w-full font-sans ${props.className}`}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          {props.title && (
            <h2 style={{ color: props.titleColor, fontSize: "2.5rem", fontWeight: 800, margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
              {props.title}
            </h2>
          )}
          {props.subtitle && (
            <p style={{ color: props.subtitleColor, fontSize: "1.125rem", margin: 0, maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              {props.subtitle}
            </p>
          )}
        </header>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${300 - (props.columns * 10)}px), 1fr))`,
            gap: props.gap,
          }}
        >
          {categories.map((cat, idx) => (
            <a
              key={cat.id || idx}
              href={cat.link || "#"}
              onClick={preventClick}
              className="group relative overflow-hidden block transition-shadow hover:shadow-xl"
              style={{ borderRadius: props.cardRadius, backgroundColor: props.cardBackgroundColor }}
              aria-label={`Shop ${cat.title}`}
            >
              <div style={{ height: props.imageHeight, overflow: "hidden" }}>
                <img
                  src={cat.image || "https://via.placeholder.com/800"}
                  alt={cat.title}
                  style={{ width: "100%", height: "100%", objectFit: props.imageObjectFit, transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" }}
                  className="group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: `linear-gradient(to top, ${props.overlayColor} 0%, transparent 60%)`, opacity: props.overlayOpacity + 0.3 }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 style={{ color: props.cardTextColor, fontSize: "1.5rem", fontWeight: 700, margin: 0, textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
                  {cat.title}
                </h3>
                {cat.itemCount && (
                  <p style={{ color: props.cardSubTextColor, margin: "6px 0 0 0", fontSize: "0.875rem", fontWeight: 500 }}>
                    {cat.itemCount}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

ShopByCategoryV1.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  categoriesLayout: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string,
  sectionBackgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardTextColor: PropTypes.string,
  cardSubTextColor: PropTypes.string,
  cardRadius: PropTypes.string,
  imageHeight: PropTypes.string,
  imageObjectFit: PropTypes.string,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  hoverScale: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  isEditable: PropTypes.bool,
  isPreviewing: PropTypes.bool,
};

export default ShopByCategoryV1;