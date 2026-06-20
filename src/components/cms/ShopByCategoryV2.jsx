"use client";

import React, { useMemo } from "react";
import PropTypes from "prop-types";

const defaultCategories = [
  { id: "cat-1", title: "Sneakers", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80", link: "#", itemCount: "120 Products" },
  { id: "cat-2", title: "Handbags", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80", link: "#", itemCount: "85 Products" },
  { id: "cat-3", title: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80", link: "#", itemCount: "340 Products" },
  { id: "cat-4", title: "Eyewear", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80", link: "#", itemCount: "64 Products" },
  { id: "cat-5", title: "Hats", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=400&q=80", link: "#", itemCount: "42 Products" },
  { id: "cat-6", title: "Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80", link: "#", itemCount: "56 Products" },
];

export const shopByCategoryV2DefaultProps = {
  title: "Shop by Category",
  subtitle: "Explore our wide range of collections curated just for you.",
  categoriesLayout: JSON.stringify(defaultCategories, null, 2),
  columns: 6,
  gap: "24px",
  sectionBackgroundColor: "#ffffff",
  titleColor: "#111827",
  subtitleColor: "#4b5563",
  cardTextColor: "#111827",
  cardSubTextColor: "#6b7280",
  imageSize: "160px",
  imageObjectFit: "cover",
  hoverScale: 1.05,
  style: {},
  className: "",
};

const ShopByCategoryV2 = (incomingProps) => {
  const props = { ...shopByCategoryV2DefaultProps, ...(incomingProps.props || incomingProps) };
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
        <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(160px, 1fr))`, gap: props.gap, justifyItems: "center" }}>
          {categories.map((cat, idx) => (
            <a key={cat.id || idx} href={cat.link || "#"} onClick={preventClick} className="group block text-center transition-all" style={{ textDecoration: "none" }} aria-label={`Shop ${cat.title}`}>
              <div style={{ width: props.imageSize, height: props.imageSize, borderRadius: "50%", overflow: "hidden", margin: "0 auto 16px", backgroundColor: "#f3f4f6" }}>
                <img src={cat.image || "https://via.placeholder.com/400"} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: props.imageObjectFit, transition: "transform 0.5s ease" }} className="group-hover:scale-[1.08]" loading="lazy" />
              </div>
              <h3 style={{ color: props.cardTextColor, fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                {cat.title}
              </h3>
              {cat.itemCount && (
                <p style={{ color: props.cardSubTextColor, margin: "4px 0 0 0", fontSize: "0.875rem", fontWeight: 500 }}>
                  {cat.itemCount}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

ShopByCategoryV2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  categoriesLayout: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string,
  sectionBackgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  cardTextColor: PropTypes.string,
  cardSubTextColor: PropTypes.string,
  imageSize: PropTypes.string,
  imageObjectFit: PropTypes.string,
  hoverScale: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  isEditable: PropTypes.bool,
  isPreviewing: PropTypes.bool,
};

export default ShopByCategoryV2;