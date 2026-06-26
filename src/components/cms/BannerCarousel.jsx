"use client";

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BannerCarouselComponent = ({
  id,
  slides = [],
  autoplay = false,
  interval = 3000,
  pauseOnHover = true,
  showIndicators = true,
  showControls = true,
  height = "400px",
  objectFit = "cover",
  borderRadius = "16px",
  overlayBackgroundColor = "rgba(2, 6, 23, 0.55)",
  overlayTextColor = "#ffffff",
  overlayPadding = "12px 20px",
  overlayMaxWidth = "76%",
  overlayPosition = "bottom-center",
  titleFontSize = "24px",
  titleFontWeight = "700",
  descriptionFontSize = "15px",
  descriptionLineHeight = "1.6",
  controlColor = "#ffffff",
  controlBackground = "rgba(2, 6, 23, 0.6)",
  indicatorColor = "rgba(255,255,255,0.5)",
  activeIndicatorColor = "#ffffff",
  style = {},
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const safeSlides = Array.isArray(slides) ? slides : [];
  const canSlide = safeSlides.length > 1;

  useEffect(() => {
    if (!autoplay || !canSlide || isPaused) return undefined;
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % safeSlides.length);
    }, Math.max(1200, Number(interval) || 3000));
    return () => clearTimeout(timer);
  }, [autoplay, canSlide, currentIndex, interval, isPaused, safeSlides.length]);

  useEffect(() => {
    if (currentIndex > safeSlides.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, safeSlides.length]);

  if (!safeSlides.length) {
    return (
      <div
        id={id}
        style={{
          ...style,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed #ccc",
          backgroundColor: "#f9f9f9",
          borderRadius,
        }}
      >
        <p>Banner Carousel: No slides configured.</p>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + safeSlides.length) % safeSlides.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % safeSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = safeSlides[currentIndex];

  const overlayPositionStyle = useMemo(() => {
    switch (overlayPosition) {
      case "top-left":
        return { top: "20px", left: "20px" };
      case "top-center":
        return { top: "20px", left: "50%", transform: "translateX(-50%)" };
      case "top-right":
        return { top: "20px", right: "20px" };
      case "bottom-left":
        return { bottom: "20px", left: "20px" };
      case "bottom-right":
        return { bottom: "20px", right: "20px" };
      case "bottom-center":
      default:
        return { bottom: "20px", left: "50%", transform: "translateX(-50%)" };
    }
  }, [overlayPosition]);

  const carouselStyle = {
    position: "relative",
    width: "100%",
    height,
    overflow: "hidden",
    backgroundColor: "#eee",
    borderRadius,
    ...style,
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: objectFit,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: currentSlide?.imageUrl
      ? `url(${currentSlide.imageUrl})`
      : "none",
  };

  const captionStyle = {
    position: "absolute",
    backgroundColor: overlayBackgroundColor,
    color: overlayTextColor,
    padding: overlayPadding,
    borderRadius: "12px",
    maxWidth: overlayMaxWidth,
    textAlign: "center",
    ...overlayPositionStyle,
  };

  return (
    <div
      id={id}
      style={carouselStyle}
      className={`banner-carousel ${className}`.trim()}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div style={slideStyle} className="banner-carousel-slide">
        {currentSlide?.imageUrl ? null : (
          <p>{currentSlide?.altText || "Slide Image"}</p>
        )}
        {(currentSlide?.title || currentSlide?.description) && (
          <div style={captionStyle} className="banner-carousel-caption">
            {currentSlide.title && (
              <h3 style={{ margin: "0 0 8px 0", fontSize: titleFontSize, fontWeight: titleFontWeight }}>
                {currentSlide.title}
              </h3>
            )}
            {currentSlide.description && (
              <p style={{ margin: 0, fontSize: descriptionFontSize, lineHeight: descriptionLineHeight }}>
                {currentSlide.description}
              </p>
            )}
            {currentSlide.link && (
              <a
                href={currentSlide.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a0deff" }}
              >
                Learn More
              </a>
            )}
          </div>
        )}
      </div>
      {showControls && canSlide && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPrevious}
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              zIndex: 5,
              border: "none",
              width: "38px",
              height: "38px",
              borderRadius: "999px",
              display: "grid",
              placeItems: "center",
              color: controlColor,
              backgroundColor: controlBackground,
              cursor: "pointer",
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "12px",
              transform: "translateY(-50%)",
              zIndex: 5,
              border: "none",
              width: "38px",
              height: "38px",
              borderRadius: "999px",
              display: "grid",
              placeItems: "center",
              color: controlColor,
              backgroundColor: controlBackground,
              cursor: "pointer",
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
      {showIndicators && canSlide && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "10px",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 6,
          }}
        >
          {safeSlides.map((slide, index) => (
            <button
              key={slide.id || index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: index === currentIndex ? activeIndicatorColor : indicatorColor,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const bannerCarouselComponentDefaultProps = {
  slides: [
    {
      id: "slide-1",
      imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
      altText: "Modern workspace",
      title: "Build Faster With Evo",
      description: "Drag, drop, and publish premium-looking pages in minutes.",
      link: "#",
    },
    {
      id: "slide-2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
      altText: "Team collaboration",
      title: "Teams Love The Workflow",
      description: "Reusable components and property panels keep your UI consistent.",
      link: "#",
    },
  ],
  autoplay: false,
  interval: 5000,
  pauseOnHover: true,
  showIndicators: true,
  showControls: true,
  height: "420px",
  objectFit: "cover",
  borderRadius: "16px",
  overlayBackgroundColor: "rgba(2, 6, 23, 0.55)",
  overlayTextColor: "#ffffff",
  overlayPadding: "12px 20px",
  overlayMaxWidth: "76%",
  overlayPosition: "bottom-center",
  titleFontSize: "24px",
  titleFontWeight: "700",
  descriptionFontSize: "15px",
  descriptionLineHeight: "1.6",
  controlColor: "#ffffff",
  controlBackground: "rgba(2, 6, 23, 0.6)",
  indicatorColor: "rgba(255,255,255,0.5)",
  activeIndicatorColor: "#ffffff",
  style: {},
  className: "",
};

BannerCarouselComponent.propTypes = {
  id: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      altText: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  autoplay: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pauseOnHover: PropTypes.bool,
  showIndicators: PropTypes.bool,
  showControls: PropTypes.bool,
  height: PropTypes.string,
  objectFit: PropTypes.oneOf(["cover", "contain", "fill", "none", "scale-down"]),
  borderRadius: PropTypes.string,
  overlayBackgroundColor: PropTypes.string,
  overlayTextColor: PropTypes.string,
  overlayPadding: PropTypes.string,
  overlayMaxWidth: PropTypes.string,
  overlayPosition: PropTypes.oneOf([
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ]),
  titleFontSize: PropTypes.string,
  titleFontWeight: PropTypes.string,
  descriptionFontSize: PropTypes.string,
  descriptionLineHeight: PropTypes.string,
  controlColor: PropTypes.string,
  controlBackground: PropTypes.string,
  indicatorColor: PropTypes.string,
  activeIndicatorColor: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

BannerCarouselComponent.defaultProps = bannerCarouselComponentDefaultProps;

export default BannerCarouselComponent;
