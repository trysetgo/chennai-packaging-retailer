import React from 'react';
import PageMeta from '../components/PageMeta.jsx';

const pageSettings = {
  "siteTitle": "Test Page Packaging Products",
  "faviconUrl": "",
  "siteLogoUrl": "http://localhost:5174/images/tsg-logo.webp",
  "primaryColor": "#1910d1",
  "textColor": "#df1111",
  "defaultMetaDescription": "",
  "defaultMetaKeywords": "",
  "defaultLanguage": "en-US",
  "googleAnalyticsId": "",
  "enabled": true,
  "canonicalUrl": "",
  "robots": "index,follow",
  "ogTitle": "Test Page Packaging Products",
  "ogDescription": "",
  "ogImage": "",
  "ogType": "website",
  "twitterCard": "summary_large_image",
  "twitterTitle": "Test Page Packaging Products",
  "twitterDescription": "",
  "twitterImage": "",
  "structuredData": "",
  "backgroundColor": "#f35858",
  "linkColor": "#1910d1",
  "fontFamily": "",
  "maxWidth": "",
  "pagePadding": "",
  "bodyClassName": "",
  "customCss": ""
};
const pageWrapperStyle = {
  "backgroundColor": "#f35858",
  "color": "#df1111",
  "--bwevo-primary-color": "#1910d1",
  "--bwevo-text-color": "#df1111",
  "--bwevo-link-color": "#1910d1"
};

export default function TestPage() { // Standardized page component name
return (
<div className="bwevo-page" style={pageWrapperStyle}>
<PageMeta settings={pageSettings} />

<div>Empty Page Content</div>
</div>
);
};
