import React from 'react';
import MinimalHeader from './cms/MinimalHeader.jsx';
import Heading from './cms/Heading.jsx';
import List from './cms/List.jsx';
import TimelineRoadmap from './cms/TimelineRoadmap.jsx';
import Footer from './cms/Footer.jsx';
import Header from './cms/Header.jsx';
import HeroBanner from './cms/HeroBanner.jsx';
import WhyChooseOurBrand from './cms/WhyChooseOurBrand.jsx';
import TrendingProductHero from './cms/TrendingProductHero.jsx';
import IllustratedHowItWorks from './cms/IllustratedHowItWorks.jsx';
import RichTextContentBlock from './cms/RichTextContentBlock.jsx';
import CenteredCta from './cms/CenteredCta.jsx';
import Paragraph from './cms/Paragraph.jsx';

const LayoutRendererInternalComponentMap = {
  'Minimal Header': MinimalHeader,
  'Heading': Heading,
  'List': List,
  'Timeline / Roadmap': TimelineRoadmap,
  'Footer': Footer,
  'Header': Header,
  'Hero Banner': HeroBanner,
  'Why Choose Our Brand': WhyChooseOurBrand,
  'Trending Product Hero': TrendingProductHero,
  'Illustrated How It Works': IllustratedHowItWorks,
  'Rich Text Content Block': RichTextContentBlock,
  'Centered CTA': CenteredCta,
  'Paragraph': Paragraph,
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
