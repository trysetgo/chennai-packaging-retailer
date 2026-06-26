import React from 'react';
import MinimalHeader from '../components/cms/MinimalHeader.jsx';
import LayoutRenderer from '../components/LayoutRenderer.jsx';
import Paragraph from '../components/cms/Paragraph.jsx';
import Image from '../components/cms/Image.jsx';
import Footer from '../components/cms/Footer.jsx';
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

export default function ContactPage() {
  return (
    <div className="bwevo-page" style={pageWrapperStyle}>
      <PageMeta settings={pageSettings} />
      
      <MinimalHeader sticky={true} ctaHref="/contact" ctaText="Request for Quote" logoSrc="http://localhost:5174/images/tsg-logo.webp" logoText="trysetgo logo" headerMode="header" menuLayout="stacked" glassEffect={true} menuAlignment="center" navHoverStyle="underline" backgroundColor="#25dbf4"></MinimalHeader>
<LayoutRenderer gap="18px" rows={JSON.parse(`[{"id":"default-row-1","columns":[{"id":"default-row-1-col-1","style":{"width":"25%","flexGrow":0,"flexBasis":"25%","flexShrink":1},"children":[{"id":"3f5bad33-4923-47e5-a90a-568921286e36","type":"Paragraph","props":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."}}]},{"id":"f785951a-3bcd-41b1-9000-fa8c873b7150","style":{"width":"25%","flexGrow":0,"flexBasis":"25%","flexShrink":1},"children":[{"id":"9aa747fd-d637-4f22-aefd-68b4be488e32","type":"Paragraph","props":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."}}]},{"id":"492c1439-41c9-47a1-abd4-fb7b82334226","style":{"width":"50%","flexGrow":0,"flexBasis":"50%","flexShrink":1},"children":[{"id":"59622467-30ad-4f47-89ed-7107344b7281","type":"Image","props":{"alt":"Placeholder","src":"https://project.trysetgo.com/api/assets/serve/e16524f8-2864-4d80-8920-7112188858b1/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","width":"80%","variant":"spotlight","enableLightbox":true,"imageAlignment":"center","showOverlayPanel":true,"overlayDescription":"Lorem Ipsum is siake dummy text for Letraset's Body Type sheets."}}]}],"numColumns":3}]`)} width="100%" border="1px solid rgba(226,232,240,0.9)" margin="0px auto" padding="0px" maxWidth="100%" boxShadow="none" minHeight="0px" rowBorder="none" rowMargin="0px" rowRadius="0px" rowShadow="none" rowPadding="0px" accentColor="#ec3080" borderRadius="0px" columnBorder="none" columnMargin="0px" columnRadius="0px" columnShadow="none" columnPadding="0px" rowBackground="transparent" showRowLabels={false} stackOnMobile={true} backgroundColor="transparent" columnMinHeight="0px" columnBackground="transparent" mobileBreakpoint="768px" trimInnerSpacing={true} secondaryAccentColor="#6366f1" layoutType="Layout Selector" />
<Footer gap="32px" style={JSON.parse(`{}`)} logoAlt="Company Logo" logoSrc="http://localhost:5174/images/tsg-logo.webp" logoText="" paddingX="24px" paddingY="48px" linkColor="#D1D5DB" textAlign="left" textColor="#9CA3AF" borderColor="#374151" socialLinks={JSON.parse(`[{"id":"sm1","url":"#","platform":"facebook"},{"id":"sm2","url":"#","platform":"twitter"},{"id":"sm3","url":"#","platform":"instagram"}]`)} footerLayout="default" linkFontSize="14px" linkSections={JSON.parse(`[{"id":"s1","links":[{"id":"l1","url":"#","text":"About"},{"id":"l2","url":"#","text":"Careers"},{"id":"l3","url":"#","text":"Press"}],"title":"Company"},{"id":"s2","links":[{"id":"l4","url":"#","text":"Blog"},{"id":"l5","url":"#","text":"Help Center"},{"id":"l6","url":"#","text":"Contact"}],"title":"Resources"}]`)} logoMaxWidth="150px" logoTextSize="18px" textFontSize="14px" columnsMobile={1} columnsTablet={2} copyrightText="© 2026 YourBrand. All rights reserved." logoTextColor="#F9FAFB" showTopBorder={true} titleFontSize="14px" columnsDesktop={4} linkHoverColor="#F9FAFB" socialIconSize="28px" backgroundColor="#111827" contentMaxWidth="1200px" showSocialLinks={true} socialIconShape="circle" brandDescription="Making the world a better place through constructed layouts." showBottomBorder={true} showLinkSections={true} sectionTitleColor="#F3F4F6" brandDescriptionColor="#9CA3AF"></Footer>
    </div>
  );
}
