import React from 'react';
import PageMeta from '../components/PageMeta.jsx';

const pageSettings = {
  "siteTitle": "परीक्षण पृष्ठ पैकेजिंग उत्पाद",
  "faviconUrl": "",
  "siteLogoUrl": "http://localhost:5174/images/tsg-logo.webp",
  "primaryColor": "#1910d1",
  "textColor": "#df1111",
  "defaultMetaDescription": "",
  "defaultMetaKeywords": "",
  "defaultLanguage": "hi-IN",
  "supportedLanguages": "en-US, hi-IN",
  "googleAnalyticsId": "",
  "enabled": true,
  "canonicalUrl": "",
  "robots": "index,follow",
  "ogTitle": "परीक्षण पृष्ठ पैकेजिंग उत्पाद",
  "ogDescription": "",
  "ogImage": "",
  "ogType": "website",
  "twitterCard": "summary_large_image",
  "twitterTitle": "परीक्षण पृष्ठ पैकेजिंग उत्पाद",
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

export default function TestPage() {
  return (
    <div className="bwevo-page" style={pageWrapperStyle}>
      <PageMeta settings={pageSettings} />
      
      <div>Empty Page Content</div>
    </div>
  );
}
