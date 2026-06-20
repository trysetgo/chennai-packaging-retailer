"use client";

import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";

const defaultItems = [
  {
    id: "mailer-box",
    title: "Mailer Box",
    subtitle: "Delivered gallery",
    description: "Durable, customizable mailer boxes designed for modern eCommerce.",
    image:
      "https://images.unsplash.com/photo-1582719478215-2d52a23705c5?auto=format&fit=crop&w=800&q=80",
    badge: "Premium 3‑ply Board",
    features: ["Premium 3-ply board", "CMYK Print", "Gloss + Matte Lamination", "Eco-friendly Material"],
  },
  {
    id: "roll-labels",
    title: "Roll Labels",
    subtitle: "Delivered gallery",
    description: "High-adhesion roll labels with crisp print quality for smooth application.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    badge: "Smooth Peel",
    features: ["Water-resistant stock", "Full-color print", "Tight core wind", "Batch coded"],
  },
  {
    id: "circle-stickers",
    title: "Circle Stickers",
    subtitle: "Delivered gallery",
    description: "Bold, tactile stickers with satin finish and easy release backing.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    badge: "Satin Finish",
    features: ["Satin finish", "Kiss cut", "Premium adhesive", "Vibrant color"],
  },
  {
    id: "pouches",
    title: "Pouches",
    subtitle: "Delivered gallery",
    description: "Shelf-ready pouches with metallic accents and barrier protection.",
    image:
      "https://images.unsplash.com/photo-1582719478253-fbb4759c0caa?auto=format&fit=crop&w=800&q=80",
    badge: "Shelf Ready",
    features: ["Metallic accent", "Matte / gloss mix", "Heat seal", "Tear notch"],
  },
  {
    id: "business-cards",
    title: "Business Cards",
    subtitle: "Delivered gallery",
    description: "Textured cards with deep black ink and foil finishing for luxury brands.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    badge: "Foil Finish",
    features: ["Soft-touch", "Foil finish", "Edge painting", "Heavyweight stock"],
  },
];

const DeliveredGalleries = ({
  id,
  eyebrow,
  heading,
  subheading,
  cards,
  initialActiveId,
  background,
  gridGap,
  cardColumns,
  cardMinWidth,
  outerMinWidth,
  cardRadius,
  cardBorder,
  cardShadow,
  highlightBorder,
  highlightShadow,
  highlightBackground,
  previewBackground,
  previewRadius,
  previewShadow,
  textColor,
  mutedColor,
  badgeColor,
  ctaLabel,
  ctaHref,
  ctaBackground,
  ctaTextColor,
  ctaRadius,
  featureBulletColor,
  className = "",
  style = {},
}) => {
  const safeCards = useMemo(() => (Array.isArray(cards) && cards.length ? cards : defaultItems), [cards]);
  const [activeId, setActiveId] = useState(initialActiveId || safeCards[0]?.id);

  useEffect(() => {
    if (!safeCards.find((c) => c.id === activeId)) {
      setActiveId(safeCards[0]?.id);
    }
  }, [safeCards, activeId]);

  const activeCard = safeCards.find((c) => c.id === activeId) || safeCards[0];

  const renderFeature = (item, idx) => (
    <li key={`${item}-${idx}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: mutedColor, marginBottom: "8px" }}>
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          display: "inline-flex",
          background: featureBulletColor,
        }}
      />
      <span style={{ fontSize: "15px" }}>{item}</span>
    </li>
  );

  return (
    <section
      id={id}
      className={className}
      style={{
        background,
        padding: "48px 18px 56px",
        ...style,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          {eyebrow ? (
            <p
              style={{
                margin: "0 0 12px 0",
                letterSpacing: "0.24em",
                fontSize: "11px",
                color: mutedColor,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </p>
          ) : null}
          {heading ? (
            <h2
              style={{
                margin: 0,
                color: textColor,
                fontSize: "36px",
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              {heading}
            </h2>
          ) : null}
          {subheading ? (
            <p
              style={{
                margin: "10px auto 0",
                color: mutedColor,
                fontSize: "16px",
                maxWidth: "720px",
              }}
            >
              {subheading}
            </p>
          ) : null}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(${outerMinWidth}, 1fr))`,
            gap: gridGap,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                cardColumns && Number(cardColumns) > 0
                  ? `repeat(${cardColumns}, minmax(0, 1fr))`
                  : `repeat(auto-fill, minmax(${cardMinWidth}, 1fr))`,
              gap: gridGap,
              alignContent: "start",
            }}
          >
            {safeCards.map((card) => {
              const isActive = card.id === activeId;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveId(card.id)}
                  style={{
                    textAlign: "left",
                    borderRadius: cardRadius,
                    overflow: "hidden",
                    border: isActive ? highlightBorder : cardBorder,
                    boxShadow: isActive ? highlightShadow : cardShadow,
                    background: isActive ? highlightBackground : "#ffffff",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div style={{ width: "100%", aspectRatio: "4 / 3", overflow: "hidden" }}>
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        loading="lazy"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "#e5e7eb" }} />
                    )}
                  </div>
                  <div style={{ padding: "12px 12px 14px" }}>
                    <p style={{ margin: 0, color: textColor, fontWeight: 700, fontSize: "15px" }}>{card.title}</p>
                    <p style={{ margin: "4px 0 0", color: mutedColor, fontSize: "12px" }}>{card.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {activeCard ? (
            <div
              style={{
                background: previewBackground,
                borderRadius: previewRadius,
                boxShadow: previewShadow,
                padding: "22px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div>
                {activeCard.image ? (
                  <img
                    src={activeCard.image}
                    alt={activeCard.title}
                    style={{
                      width: "100%",
                      borderRadius: "18px",
                      objectFit: "cover",
                      display: "block",
                      boxShadow: "0 14px 34px rgba(0,0,0,0.14)",
                    }}
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px 0", color: textColor, fontSize: "26px", fontWeight: 800 }}>
                  {activeCard.title}
                </h3>
                <p style={{ margin: "0 0 14px 0", color: mutedColor, fontSize: "15px" }}>
                  {activeCard.description || activeCard.subtitle}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 18px 0",
                    columns: "2 180px",
                  }}
                >
                  {Array.isArray(activeCard.features) &&
                    activeCard.features.filter(Boolean).map((f, idx) => renderFeature(f, idx))}
                </ul>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  {activeCard.badge ? (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "6px 12px",
                        borderRadius: "999px",
                        background: `${badgeColor}22`,
                        color: badgeColor,
                        fontWeight: 600,
                        fontSize: "13px",
                      }}
                    >
                      {activeCard.badge}
                    </span>
                  ) : null}
                  {ctaLabel ? (
                    <a
                      href={ctaHref}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "11px 18px",
                        borderRadius: ctaRadius,
                        background: ctaBackground,
                        color: ctaTextColor,
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: "0 12px 28px rgba(0,0,0,0.14)",
                      }}
                    >
                      {ctaLabel}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

DeliveredGalleries.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      badge: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  initialActiveId: PropTypes.string,
  background: PropTypes.string,
  gridGap: PropTypes.string,
  cardRadius: PropTypes.string,
  cardBorder: PropTypes.string,
  cardShadow: PropTypes.string,
  highlightBorder: PropTypes.string,
  highlightShadow: PropTypes.string,
  highlightBackground: PropTypes.string,
  previewBackground: PropTypes.string,
  previewRadius: PropTypes.string,
  previewShadow: PropTypes.string,
  textColor: PropTypes.string,
  mutedColor: PropTypes.string,
  badgeColor: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaHref: PropTypes.string,
  ctaBackground: PropTypes.string,
  ctaTextColor: PropTypes.string,
  ctaRadius: PropTypes.string,
  featureBulletColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  cardColumns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardMinWidth: PropTypes.string,
  outerMinWidth: PropTypes.string,
};

export const deliveredGalleriesDefaultProps = {
  eyebrow: "Delivered Galleries",
  heading: "Packaging builds we have delivered for real brands.",
  subheading: "Browse finished projects and request a similar design tailored to your product, size, and finish.",
  cards: defaultItems,
  initialActiveId: defaultItems[0].id,
  background: "linear-gradient(180deg, #fbf7f1, #f7f2eb)",
  gridGap: "16px",
  cardColumns: 3,
  cardMinWidth: "140px",
  outerMinWidth: "320px",
  cardRadius: "18px",
  cardBorder: "1px solid #e5e7eb",
  cardShadow: "0 8px 18px rgba(0,0,0,0.06)",
  highlightBorder: "2px solid #f59e0b",
  highlightShadow: "0 16px 28px rgba(245, 158, 11, 0.16)",
  highlightBackground: "#fffbeb",
  previewBackground: "#ffffff",
  previewRadius: "20px",
  previewShadow: "0 16px 36px rgba(0,0,0,0.12)",
  textColor: "#0f172a",
  mutedColor: "#475569",
  badgeColor: "#f59e0b",
  ctaLabel: "Request a similar design",
  ctaHref: "#",
  ctaBackground: "linear-gradient(120deg, #f59e0b, #eab308)",
  ctaTextColor: "#0f172a",
  ctaRadius: "999px",
  featureBulletColor: "#f59e0b",
  className: "",
  style: {},
};

DeliveredGalleries.defaultProps = deliveredGalleriesDefaultProps;

export default DeliveredGalleries;
