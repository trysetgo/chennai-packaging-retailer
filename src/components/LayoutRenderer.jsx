import React from 'react';
import Heading from './cms/Heading.jsx';
import List from './cms/List.jsx';
import Paragraph from './cms/Paragraph.jsx';
import DigitalHeaderBanner from './cms/DigitalHeaderBanner.jsx';
import TrustCredibilityV1 from './cms/TrustCredibilityV1.jsx';
import WhyChooseOurBrand from './cms/WhyChooseOurBrand.jsx';
import ShopByCategoryV1 from './cms/ShopByCategoryV1.jsx';
import HowItWorksProcessSection from './cms/HowItWorksProcessSection.jsx';
import ModernMixedCta from './cms/ModernMixedCta.jsx';
import Footer from './cms/Footer.jsx';

const LayoutRendererInternalComponentMap = {
  'Heading': Heading,
  'List': List,
  'Paragraph': Paragraph,
  'Digital Header Banner': DigitalHeaderBanner,
  'TrustCredibilityV1': TrustCredibilityV1,
  'Why Choose Our Brand': WhyChooseOurBrand,
  'Shop By Category V1': ShopByCategoryV1,
  'How It Works (Process Section)': HowItWorksProcessSection,
  'Modern Mixed CTA': ModernMixedCta,
  'Footer': Footer,
};

// Forward declaration for recursive use
let RenderElementInternal;

const renderChildrenRecursive = (children) => {
if (!children || !Array.isArray(children)) return null;
return children.map((child, index) => <RenderElementInternal key={child.id || index} element={child} />);
};

const RenderElementInternalComponent = ({ element }) => {
if (!element?.type) return null;
const { type, props = {} } = element;

// Handle content components from the map
const Comp = LayoutRendererInternalComponentMap[type];
if (Comp) {
let childrenToRender = props.children;
// If props.children is an array of element objects (our internal structure), render them recursively
if (Array.isArray(props.children) && props.children.every(c => typeof c === 'object' && c !== null && c.type)) {
childrenToRender = renderChildrenRecursive(props.children);
}
// Otherwise, pass props.children as is (could be a string, number, or already JSX)
return <Comp {...props}>{childrenToRender}</Comp>;
}

// Fallback for unknown types (should ideally not be hit if generateJsx is comprehensive)
console.warn("[LayoutRenderer] Unknown component type encountered:", type, "with props:", props);
return <div>Unknown component type in LayoutRenderer: {type}</div>;
};

RenderElementInternal = RenderElementInternalComponent; // Assign after definition for recursion

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
boxSizing: 'border-box',
...(style || {}), 
};
const actualRows = rows || [];

return (
<div style={containerStyle}>
{actualRows.map((row, rowIndex) => (
<div
key={row.id || `row-${rowIndex}`}
className="flex"
style={{ gap: row.gap || gap || "0.5rem", marginBottom: rowIndex < actualRows.length - 1 ? (row.gap || gap || "0.5rem") : "0", boxSizing: 'border-box', width: '100%' }}
>
{(row.columns || []).map((col, colIndex) => (
<div
key={col.id || `col-${colIndex}`}
style={{ ...col.style, flexBasis: col.style?.flexBasis || 'auto', flexGrow: 1, boxSizing: 'border-box' }}
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
display: 'flex',
gap: gap || "0.5rem",
padding: padding || "0.5rem",
backgroundColor: backgroundColor || "transparent",
boxSizing: 'border-box',
...(style || {}),
};
return (
<div style={containerStyle}>
{(columnsData || []).map((col, index) => (
<div key={col.id || index} style={{ ...col.style, flex: col.style?.flex || 1, boxSizing: 'border-box' }}>
{renderChildrenRecursive(col.children)}
</div>
))}
</div>
);
}

if (props.element) { 
return <RenderElementInternal element={props.element} />;
}
console.warn("[LayoutRenderer] Invalid props or direct usage. layoutType:", layoutType, "Props:", props);
return <div>LayoutRenderer: Invalid props or direct usage. layoutType: {layoutType}</div>;
};

export default LayoutRenderer;
