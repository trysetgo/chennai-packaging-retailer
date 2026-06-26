import React from 'react';
import Header from './cms/Header.jsx';
import HeroBanner from './cms/HeroBanner.jsx';
import WhyChooseOurBrand from './cms/WhyChooseOurBrand.jsx';
import TrendingProductHero from './cms/TrendingProductHero.jsx';
import IllustratedHowItWorks from './cms/IllustratedHowItWorks.jsx';
import CenteredCta from './cms/CenteredCta.jsx';
import Footer from './cms/Footer.jsx';
import MinimalHeader from './cms/MinimalHeader.jsx';
import Paragraph from './cms/Paragraph.jsx';
import Image from './cms/Image.jsx';
import BannerCarousel from './cms/BannerCarousel.jsx';

const LayoutRendererInternalComponentMap = {
  "Header": Header,
  "Hero Banner": HeroBanner,
  "Why Choose Our Brand": WhyChooseOurBrand,
  "Trending Product Hero": TrendingProductHero,
  "Illustrated How It Works": IllustratedHowItWorks,
  "Centered CTA": CenteredCta,
  "Footer": Footer,
  "Minimal Header": MinimalHeader,
  "Paragraph": Paragraph,
  "Image": Image,
  "Banner Carousel": BannerCarousel,
};

let RenderElementInternal;

const renderChildrenRecursive = (children) => {
  if (!children || !Array.isArray(children)) return null;
  return children.map((child, index) => <RenderElementInternal key={child.id || index} element={child} />);
};

const RenderElementInternalComponent = ({ element }) => {
  if (!element?.type) return null;
  const { type, props = {} } = element;
  const Comp = LayoutRendererInternalComponentMap[type];

  if (Comp) {
    let childrenToRender = props.children;
    if (Array.isArray(props.children) && props.children.every((child) => typeof child === 'object' && child !== null && child.type)) {
      childrenToRender = renderChildrenRecursive(props.children);
    }
    return <Comp {...props}>{childrenToRender}</Comp>;
  }

  return <div>Unknown component type in LayoutRenderer: {type}</div>;
};

RenderElementInternal = RenderElementInternalComponent;

const LayoutRenderer = (props) => {
  const { layoutType, rows, columnsData, gap, padding, backgroundColor, style, ...restProps } = props;

  if (layoutType === "Layout Selector") {
    const containerStyle = {
      padding: padding || "0.5rem",
      backgroundColor: backgroundColor || "transparent",
      margin: restProps.margin || "0px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      ...(style || {}),
    };
    const actualRows = rows || [];

    return (
      <div style={containerStyle}>
        {actualRows.map((row, rowIndex) => (
          <div
            key={row.id || `row-${rowIndex}`}
            className="flex"
            style={{
              gap: row.gap || gap || "0.5rem",
              marginBottom: rowIndex < actualRows.length - 1 ? row.gap || gap || "0.5rem" : "0",
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            {(row.columns || []).map((col, colIndex) => (
              <div
                key={col.id || `col-${colIndex}`}
                style={{ ...col.style, flexBasis: col.style?.flexBasis || "auto", flexGrow: 1, boxSizing: "border-box" }}
              >
                {renderChildrenRecursive(col.children)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (layoutType === "Multi Column Layout") {
    const containerStyle = {
      display: "flex",
      gap: gap || "0.5rem",
      padding: padding || "0.5rem",
      backgroundColor: backgroundColor || "transparent",
      boxSizing: "border-box",
      ...(style || {}),
    };
    return (
      <div style={containerStyle}>
        {(columnsData || []).map((col, index) => (
          <div key={col.id || index} style={{ ...col.style, flex: col.style?.flex || 1, boxSizing: "border-box" }}>
            {renderChildrenRecursive(col.children)}
          </div>
        ))}
      </div>
    );
  }

  if (props.element) return <RenderElementInternal element={props.element} />;
  return <div>LayoutRenderer: Invalid props or direct usage. layoutType: {layoutType}</div>;
};

export default LayoutRenderer;
