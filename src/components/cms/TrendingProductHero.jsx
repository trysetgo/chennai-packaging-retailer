"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export const defaultProps = {
  badgeText: "Trending Now",
  heading: "Custom Packaging That Drives Sales",
  description: "Get premium packaging solutions with fast turnaround, competitive pricing, and eco-friendly materials.",
  categories: [
    "Product Boxes",
    "Mailer Boxes",
    "Rigid Boxes",
    "Shipping Boxes",
    "Food Boxes",
    "Pizza Boxes"
  ],
  products: [
    {
      id: "prod-1",
      category: "Product Boxes",
      title: "Custom Product Boxes",
      description: "Perfect for retail and display. Fully customizable with premium finishes.",
      image: "https://images.unsplash.com/photo-1626244463486-136b8e390cc2?auto=format&fit=crop&q=80&w=600",
      ctaText: "Customize Now",
      ctaLink: "#"
    },
    {
      id: "prod-2",
      category: "Mailer Boxes",
      title: "Eco-Friendly Mailer Boxes",
      description: "Durable and stylish corrugated boxes for e-commerce shipments.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
      ctaText: "Design Yours",
      ctaLink: "#"
    },
    {
      id: "prod-3",
      category: "Rigid Boxes",
      title: "Luxury Rigid Boxes",
      description: "Premium unboxing experience for high-end products and gifts.",
      image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=600",
      ctaText: "Request Quote",
      ctaLink: "#"
    },
    {
      id: "prod-4",
      category: "Shipping Boxes",
      title: "Heavy-Duty Shipping Boxes",
      description: "Keep your products safe during transit with our sturdy shipping boxes.",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600",
      ctaText: "View Sizes",
      ctaLink: "#"
    },
    {
      id: "prod-5",
      category: "Food Boxes",
      title: "Food Safe Packaging",
      description: "FDA-approved custom boxes for bakeries, takeaways, and restaurants.",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600",
      ctaText: "Shop Food Boxes",
      ctaLink: "#"
    },
    {
      id: "prod-6",
      category: "Pizza Boxes",
      title: "Custom Pizza Boxes",
      description: "Keep pizzas hot and fresh. Custom printed with your brand logo.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
      ctaText: "Order Now",
      ctaLink: "#"
    }
  ],
  features: [
    { icon: "✨", text: "Premium Quality" },
    { icon: "🌱", text: "Eco-Friendly" },
    { icon: "⚡", text: "Fast Turnaround" }
  ],
  autoplay: true,
  autoplayInterval: 5000,
  styles: {
    backgroundColor: "#f8fafc",
    textColor: "#0f172a",
    primaryColor: "#4f46e5",
    cardBackgroundColor: "#ffffff",
    cardTextColor: "#1e293b",
    pillBackgroundColor: "#e2e8f0",
    pillActiveBackgroundColor: "#4f46e5",
    pillTextColor: "#475569",
    pillActiveTextColor: "#ffffff",
    padding: 64,
    margin: 0,
    borderRadius: 8
  }
};

const TrendingProductHero = (props) => {
  const mergedProps = { ...defaultProps, ...props };
  const {
    badgeText,
    heading,
    description,
    categories,
    products,
    features,
    autoplay,
    autoplayInterval,
    styles
  } = mergedProps;

  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeCategoryName = activeCategory ? (typeof activeCategory === 'object' ? activeCategory.name : activeCategory) : "";
  const filteredProducts = (products || []).filter(p => p.category === activeCategoryName);
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : (products || []);

  useEffect(() => {
    // If activeCategory is not in the categories list, reset it to the first category
    const categoryNames = (categories || []).map(cat => typeof cat === 'object' ? cat.name : cat);
    if (categoryNames.length > 0 && !categoryNames.includes(activeCategoryName)) {
      setActiveCategory(categoryNames[0]);
    }
  }, [categories, activeCategoryName]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategoryName]);

  useEffect(() => {
    let interval;
    if (autoplay && displayProducts.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
      }, autoplayInterval);
    }
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, displayProducts.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProducts.length) % displayProducts.length);
  };

  const safeIndex = currentIndex >= displayProducts.length ? 0 : Math.max(0, currentIndex);
  const activeProduct = displayProducts[safeIndex];

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        backgroundColor: styles.backgroundColor, 
        color: styles.textColor,
        padding: styles.padding !== undefined ? `${styles.padding}px` : "64px 0",
        margin: styles.margin !== undefined ? `${styles.margin}px` : "0px",
        borderRadius: styles.borderRadius !== undefined ? `${styles.borderRadius}px` : "0px",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: styles.primaryColor }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-4">
              {badgeText && (
                <span 
                  className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full"
                  style={{ backgroundColor: `${styles.primaryColor}20`, color: styles.primaryColor }}
                >
                  {badgeText}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                {heading}
              </h1>
              <p className="text-lg md:text-xl opacity-80 max-w-2xl">
                {description}
              </p>
            </div>
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {features.map((feature, idx) => (
                  <div key={idx}>
                    {feature.link ? (
                      <a href={feature.link} className="flex items-center space-x-2 text-sm font-medium transition-opacity hover:opacity-80">
                        {feature.image ? <img src={feature.image} alt={feature.text} className="w-6 h-6 object-contain" /> : <span className="text-xl">{feature.icon}</span>}
                        <span>{feature.text}</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 text-sm font-medium">
                        {feature.image ? <img src={feature.image} alt={feature.text} className="w-6 h-6 object-contain" /> : <span className="text-xl">{feature.icon}</span>}
                        <span>{feature.text}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, idx) => {
                  const catObj = typeof cat === 'object' ? cat : { name: cat };
                  const catName = catObj.name;
                  const isActive = activeCategoryName === catName;
                  const Tag = catObj.link ? 'a' : 'button';
                  return (
                    <Tag
                      key={idx}
                      href={catObj.link || undefined}
                      onClick={(e) => {
                        if (!catObj.link) e.preventDefault();
                        setActiveCategory(catName);
                      }}
                      className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2"
                      style={{
                        backgroundColor: isActive ? styles.pillActiveBackgroundColor : styles.pillBackgroundColor,
                        color: isActive ? styles.pillActiveTextColor : styles.pillTextColor,
                      }}
                    >
                      {catObj.image && (
                        <img src={catObj.image} alt={catName} className="w-5 h-5 rounded-full object-cover" />
                      )}
                      {catName}
                    </Tag>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeProduct ? (
                <motion.div 
                  key={activeProduct.id || safeIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative bg-white"
                  style={{ backgroundColor: styles.cardBackgroundColor, color: styles.cardTextColor }}
                >
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100 flex items-center justify-center p-6">
                    <motion.img 
                      src={activeProduct.image} 
                      alt={activeProduct.title}
                      className="object-contain w-full h-full drop-shadow-xl"
                      initial={{ y: 10 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="p-6 md:p-8 space-y-4 relative z-10">
                    <h3 className="text-2xl font-bold">{activeProduct.title}</h3>
                    <p className="text-sm opacity-80">{activeProduct.description}</p>
                    <div className="pt-4 flex items-center justify-between">
                      <a 
                        href={activeProduct.ctaLink || "#"}
                        className="px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105"
                        style={{ backgroundColor: styles.primaryColor, color: "#ffffff" }}
                      >
                        {activeProduct.ctaText || "Shop Now"}
                      </a>
                      {displayProducts.length > 1 && (
                        <div className="flex space-x-2">
                          <button 
                            onClick={handlePrev}
                            className="p-2 rounded-full border hover:bg-gray-100 transition-colors"
                            style={{ borderColor: `${styles.textColor}30` }}
                            aria-label="Previous product"
                          >
                            <ChevronLeftIcon className="w-5 h-5" style={{ color: styles.textColor }} />
                          </button>
                          <button 
                            onClick={handleNext}
                            className="p-2 rounded-full border hover:bg-gray-100 transition-colors"
                            style={{ borderColor: `${styles.textColor}30` }}
                            aria-label="Next product"
                          >
                            <ChevronRightIcon className="w-5 h-5" style={{ color: styles.textColor }} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl relative bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center p-8 min-h-[400px] border border-dashed border-gray-300 dark:border-gray-700"
                >
                  <p className="text-gray-500 dark:text-gray-400 text-center font-medium">No products available.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductHero;