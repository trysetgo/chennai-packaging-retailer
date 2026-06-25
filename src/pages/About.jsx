import React from 'react';
import HeroBanner from '../components/cms/HeroBanner.jsx';
import PageMeta from '../components/PageMeta.jsx';

const pageSettings = {
  "siteTitle": "Chennai Packaging Retailers Best In Industry",
  "faviconUrl": "",
  "siteLogoUrl": "http://localhost:5174/images/tsg-logo.webp",
  "primaryColor": "#1910d1",
  "textColor": "#111827",
  "defaultMetaDescription": "",
  "defaultMetaKeywords": "",
  "defaultLanguage": "en-US",
  "supportedLanguages": "en-US, hi-IN",
  "googleAnalyticsId": "",
  "enabled": true,
  "canonicalUrl": "",
  "robots": "index,follow",
  "ogTitle": "Chennai Packaging Retailers Best In Industry",
  "ogDescription": "",
  "ogImage": "",
  "ogType": "website",
  "twitterCard": "summary_large_image",
  "twitterTitle": "Chennai Packaging Retailers Best In Industry",
  "twitterDescription": "",
  "twitterImage": "",
  "structuredData": "",
  "backgroundColor": "",
  "linkColor": "#1910d1",
  "fontFamily": "",
  "maxWidth": "",
  "pagePadding": "",
  "bodyClassName": "",
  "customCss": ""
};
const pageWrapperStyle = {
  "color": "#111827",
  "--bwevo-primary-color": "#1910d1",
  "--bwevo-text-color": "#111827",
  "--bwevo-link-color": "#1910d1"
};

export default function AboutPage() {
  return (
    <div className="bwevo-page" style={pageWrapperStyle}>
      <PageMeta settings={pageSettings} />
      
      <HeroBanner ></HeroBanner>
    </div>
  );
}
