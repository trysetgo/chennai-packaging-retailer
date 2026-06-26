import React from 'react';
import BannerCarousel from '../components/cms/BannerCarousel.jsx';
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
  "supportedLanguages": "en-US, hi-IN",
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
  "backgroundColor": "#ffffff",
  "linkColor": "#1910d1",
  "fontFamily": "",
  "maxWidth": "",
  "pagePadding": "",
  "bodyClassName": "",
  "customCss": ""
};
const pageWrapperStyle = {
  "backgroundColor": "#ffffff",
  "color": "#df1111",
  "--bwevo-primary-color": "#1910d1",
  "--bwevo-text-color": "#df1111",
  "--bwevo-link-color": "#1910d1"
};

export default function TestPage() {
  return (
    <div className="bwevo-page" style={pageWrapperStyle}>
      <PageMeta settings={pageSettings} />
      
      <BannerCarousel style={JSON.parse(`{}`)} height="420px" slides={JSON.parse(`[{"id":"slide-1","link":"#","title":"Elevate Your Brand with Premium Packaging","altText":"Premium Packaging Printing","imageUrl":"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80","description":"Discover our stunning packaging solutions designed to make your products stand out."},{"id":"slide-2","link":"#","title":"Transform Your Packaging Experience","altText":"Creative Packaging Solutions","imageUrl":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80","description":"Join us in creating memorable unboxing experiences that captivate customers."}]`)} autoplay={true} interval={5000} className="" objectFit="cover" borderRadius="16px" controlColor="#000000" pauseOnHover={true} showControls={true} titleFontSize="24px" indicatorColor="rgba(0,0,0,0.5)" overlayPadding="12px 20px" showIndicators={true} overlayMaxWidth="76%" overlayPosition="bottom-center" titleFontWeight="700" overlayTextColor="#000000" controlBackground="rgba(255, 255, 255, 0.8)" descriptionFontSize="15px" activeIndicatorColor="#000000" descriptionLineHeight="1.6" overlayBackgroundColor="linear-gradient(90deg, rgba(211,235,279,0.8), rgba(255,215,0,0.8))" id="9b9f3d7b-afe7-417d-bcb9-ee9b21411416"></BannerCarousel>
    </div>
  );
}
