import React from 'react';
import MinimalHeader from '../components/cms/MinimalHeader.jsx';
import LayoutRenderer from '../components/LayoutRenderer.jsx';
import Heading from '../components/cms/Heading.jsx';
import List from '../components/cms/List.jsx';
import TimelineRoadmap from '../components/cms/TimelineRoadmap.jsx';
import Footer from '../components/cms/Footer.jsx';
import PageMeta from '../components/PageMeta.jsx';

const pageSettings = {
  "siteTitle": "चेन्नई पैकेजिंग रिटेलर्स उद्योग में सर्वश्रेष्ठ",
  "faviconUrl": "",
  "siteLogoUrl": "http://localhost:5174/images/tsg-logo.webp",
  "primaryColor": "#1910d1",
  "textColor": "#111827",
  "defaultMetaDescription": "",
  "defaultMetaKeywords": "",
  "defaultLanguage": "hi-IN",
  "supportedLanguages": "en-US, hi-IN",
  "googleAnalyticsId": "",
  "enabled": true,
  "canonicalUrl": "",
  "robots": "index,follow",
  "ogTitle": "चेन्नई पैकेजिंग रिटेलर्स उद्योग में सर्वश्रेष्ठ",
  "ogDescription": "",
  "ogImage": "",
  "ogType": "website",
  "twitterCard": "summary_large_image",
  "twitterTitle": "चेन्नई पैकेजिंग रिटेलर्स उद्योग में सर्वश्रेष्ठ",
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

export default function ContactPage() {
  return (
    <div className="bwevo-page" style={pageWrapperStyle}>
      <PageMeta settings={pageSettings} />
      
      <MinimalHeader sticky={true} ctaHref="/contact" ctaText="उद्धरण के लिए अनुरोध" logoSrc="http://localhost:5174/images/tsg-logo.webp" logoText="ट्राईसेटगो लोगो" headerMode="header" menuLayout="stacked" glassEffect={true} menuAlignment="center" navHoverStyle="underline" backgroundColor="#25dbf4"></MinimalHeader>
<LayoutRenderer gap="18px" rows={JSON.parse(`[{"id":"default-row-1","columns":[{"id":"default-row-1-col-1","style":{"flexBasis":"30%"},"children":[{"id":"78a5cb44-57eb-4e8d-8e1c-09516cd6a5e7","type":"Heading","props":{"text":"शीर्षक पाठ","color":"#111827","level":"2","style":{},"border":"none","zIndex":"auto","opacity":1,"fontSize":"2rem","boxShadow":"none","className":"","fontStyle":"normal","marginTop":"0px","textAlign":"left","boxShadowX":"0px","boxShadowY":"0px","fontWeight":"700","lineHeight":"1.2","marginLeft":"0px","paddingTop":"0px","styleProps":{},"borderColor":"#000000","borderStyle":"none","borderWidth":"0px","marginRight":"0px","paddingLeft":"0px","wordSpacing":"normal","borderRadius":"0px","marginBottom":"0.5em","paddingRight":"0px","boxShadowBlur":"0px","letterSpacing":"normal","paddingBottom":"0px","textTransform":"none","boxShadowColor":"#000000","textDecoration":"none","backgroundColor":"transparent","boxShadowSpread":"0px"}},{"id":"322394db-5bb5-4667-8545-c333cd4fa2ee","type":"List","props":{"items":[{"id":"item1","text":"डिफ़ॉल्ट आइटम 1"},{"id":"item2","text":"डिफ़ॉल्ट आइटम 2"},{"id":"item3","text":"डिफ़ॉल्ट आइटम 3"}],"style":{},"ordered":false,"boxShadow":"none","className":"","marginTop":"0px","listBorder":"none","marginLeft":"0px","paddingTop":"0px","itemPadding":"0.25rem 0","marginRight":"0px","markerColor":"#334155","paddingLeft":"2.5rem","dividerColor":"#e5e7eb","itemFontSize":"1rem","marginBottom":"0.5rem","paddingRight":"0px","itemFontStyle":"normal","itemTextColor":"#333333","listStyleType":"disc","paddingBottom":"0px","containerAlign":"left","itemFontWeight":"400","itemLineHeight":"1.6","itemBorderRadius":"0px","itemMarginBottom":"0.25rem","listBorderRadius":"0px","showItemDividers":false,"containerMaxWidth":"100%","listStylePosition":"outside","itemTextDecoration":"none","itemBackgroundColor":"transparent","listBackgroundColor":"transparent","itemHoverBackgroundColor":"transparent"}}]},{"id":"149d4c65-151a-4336-b7a5-7055dd9e54d3","style":{"flexGrow":1,"flexBasis":"50%","flexShrink":1},"children":[{"id":"f07e407e-b965-4496-bc5d-c2ea192019ae","type":"Timeline / Roadmap","props":{"gap":"20px","items":[{"id":"discover","date":"सप्ताह 1","title":"Discovery","status":"done","bullets":["हितधारक साक्षात्कार","सफलता के मेट्रिक्स","प्रारंभिक दायरा"],"ctaHref":"#","ctaText":"","eyebrow":"चरण 01","description":"लक्ष्यों, दर्शकों की ज़रूरतों, बाधाओं और इस कार्य से उत्पन्न होने वाले मुख्य परिणामों पर संरेखित करें।"},{"id":"design","date":"सप्ताह 2-3","title":"डिजाइन दिशा","status":"active","bullets":["Wireframes","दृश्य तंत्र","सामग्री मॉडल"],"ctaHref":"#","ctaText":"Review","eyebrow":"चरण 02","description":"रणनीति को प्रवाह, सामग्री संरचना और फीडबैक के लिए तैयार दृश्य दिशा में बदलें।"},{"id":"build","date":"सप्ताह 4-6","title":"बनाएं और एकीकृत करें","status":"planned","bullets":["फ्रंटएंड निर्माण","सीएमएस/एपीआई सेटअप","क्यूए पास"],"ctaHref":"#","ctaText":"","eyebrow":"चरण 03","description":"अनुभव विकसित करें, डेटा और सेवाओं को कनेक्ट करें और इसे वास्तविक उपयोगकर्ताओं के लिए तैयार करें।"},{"id":"launch","date":"सप्ताह 7","title":"Launch","status":"planned","bullets":["उत्पादन रिलीज","विश्लेषिकी समीक्षा","पुनरावृत्ति योजना"],"ctaHref":"#","ctaText":"","eyebrow":"चरण 04","description":"तैयार कार्य को शिप करें, शीघ्र उपयोग की निगरानी करें और लाइव फीडबैक के आधार पर परिष्कृत करें।"}],"style":{},"title":"विचार से प्रक्षेपण तक का स्पष्ट मार्ग","width":"100%","layout":"alternating","eyebrow":"समयरेखा / रोडमैप","padding":"44px 16px","fontSize":"14px","maxWidth":"1100px","subtitle":"एक संपादन योग्य समयरेखा में परियोजना चरणों, उत्पाद मील के पत्थर, आवेदन चरणों या रणनीतिक प्राथमिकताओं को मानचित्र करें।","boxShadow":"0 16px 34px rgba(17, 24, 39, 0.08)","className":"","doneColor":"#16a34a","showDates":true,"textColor":"#111827","cardRadius":"8px","markerSize":"42px","showHeader":true,"showStatus":true,"accentColor":"#0f9f8f","activeColor":"#dc2626","borderColor":"#d8e3df","cardPadding":"20px","markerStyle":"number","plannedColor":"#9ca3af","badgeTextColor":"#0f766e","cardBackground":"#ffffff","connectorColor":"#c8d6d2","connectorWidth":"3px","mutedTextColor":"#5b6472","showConnectors":true,"badgeBackground":"#e7f8f5","mobileBreakpoint":"760px","sectionBackground":"#ffffff","surfaceBackground":"#ffffff","alternateCardBackground":"#f7fbfa"}}]}],"numColumns":2}]`)} width="100%" border="1px solid rgba(226,232,240,0.9)" margin="0px auto" padding="18px" maxWidth="100%" boxShadow="none" minHeight="140px" rowBorder="1px solid rgba(226,232,240,0.9)" rowRadius="0px" rowShadow="none" rowPadding="14px" accentColor="#ec3080" borderRadius="0px" columnBorder="1px dashed rgba(203,213,225,0.9)" columnRadius="0px" columnShadow="none" columnPadding="14px" rowBackground="transparent" showRowLabels={true} stackOnMobile={false} backgroundColor="transparent" columnMinHeight="120px" columnBackground="transparent" mobileBreakpoint="768px" secondaryAccentColor="#6366f1" layoutType="Layout Selector" />
<LayoutRenderer gap="18px" rows={JSON.parse(`[{"id":"128d6aec-67b5-42b0-85ce-de0b5eac813b","columns":[{"id":"e64de0ed-4c0f-4bff-ab67-502b70d583a5","style":{"flexBasis":"100%"},"children":[]}],"numColumns":1}]`)} width="100%" border="1px solid rgba(226,232,240,0.9)" margin="0px auto" padding="18px" maxWidth="100%" boxShadow="none" minHeight="140px" rowBorder="1px solid rgba(226,232,240,0.9)" rowRadius="0px" rowShadow="none" rowPadding="14px" accentColor="#ec3080" borderRadius="0px" columnBorder="1px dashed rgba(203,213,225,0.9)" columnRadius="0px" columnShadow="none" columnPadding="14px" rowBackground="transparent" showRowLabels={true} stackOnMobile={false} backgroundColor="transparent" columnMinHeight="120px" columnBackground="transparent" mobileBreakpoint="768px" secondaryAccentColor="#6366f1" layoutType="Layout Selector" />
<Footer gap="32px" style={JSON.parse(`{}`)} logoAlt="कंपनी का लोगो" logoSrc="http://localhost:5174/images/tsg-logo.webp" logoText="" paddingX="24px" paddingY="48px" linkColor="#D1D5DB" textAlign="left" textColor="#9CA3AF" borderColor="#374151" socialLinks={JSON.parse(`[{"id":"sm1","url":"#","platform":"facebook"},{"id":"sm2","url":"#","platform":"twitter"},{"id":"sm3","url":"#","platform":"instagram"}]`)} footerLayout="default" linkFontSize="14px" linkSections={JSON.parse(`[{"id":"s1","links":[{"id":"l1","url":"#","text":"About"},{"id":"l2","url":"#","text":"Careers"},{"id":"l3","url":"#","text":"Press"}],"title":"Company"},{"id":"s2","links":[{"id":"l4","url":"#","text":"Blog"},{"id":"l5","url":"#","text":"सहायता केंद्र"},{"id":"l6","url":"#","text":"Contact"}],"title":"Resources"}]`)} logoMaxWidth="150px" logoTextSize="18px" textFontSize="14px" columnsMobile={1} columnsTablet={2} copyrightText="© 2026 योरब्रांड। सर्वाधिकार सुरक्षित।" logoTextColor="#F9FAFB" showTopBorder={true} titleFontSize="14px" columnsDesktop={4} linkHoverColor="#F9FAFB" socialIconSize="28px" backgroundColor="#111827" contentMaxWidth="1200px" showSocialLinks={true} socialIconShape="circle" brandDescription="निर्मित लेआउट के माध्यम से दुनिया को एक बेहतर जगह बनाना।" showBottomBorder={true} showLinkSections={true} sectionTitleColor="#F3F4F6" brandDescriptionColor="#9CA3AF"></Footer>
    </div>
  );
}
