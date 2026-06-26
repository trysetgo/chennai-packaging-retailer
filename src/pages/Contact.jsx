import React from 'react';
import MinimalHeader from '../components/cms/MinimalHeader.jsx';
import LayoutRenderer from '../components/LayoutRenderer.jsx';
import RichTextContentBlock from '../components/cms/RichTextContentBlock.jsx';
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
<LayoutRenderer gap="2px" rows={JSON.parse(`[{"id":"default-row-1","columns":[{"id":"default-row-1-col-1","style":{"width":"50%","flexGrow":0,"flexBasis":"50%","flexShrink":1},"children":[{"id":"51b6f3da-ba5b-4cd2-888c-910ca831a1d4","type":"Rich Text Content Block","props":{"title":"What is Lorem Ipsum?","content":"What is Lorem Ipsum?\\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.","cardPadding":"24px","containerMaxWidth":"100%","cardBackgroundColor":"transparent"}}]},{"id":"149d4c65-151a-4336-b7a5-7055dd9e54d3","style":{"width":"50%","flexGrow":0,"flexBasis":"50%","flexShrink":1},"children":[{"id":"57aba513-96b6-4a88-954c-9424f8b9da31","type":"Rich Text Content Block","props":{"title":"Where does it come from?","content":"<b>What is Lorem Ipsum?</b>\\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.\\n</br>\\n</br>\\n\\n<b>Why do we use it?</b></br>\\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\\n</br></br>\\n\\n<b>Where does it come from?</b></br>\\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32.\\n\\nThe standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.","listIndent":"24px","cardPadding":"18px","containerMaxWidth":"100%","cardBackgroundColor":"transparent"}}]}],"numColumns":2}]`)} width="80%" border="1px solid rgba(226,232,240,0.9)" margin="0px auto" padding="17px" maxWidth="100%" boxShadow="0 18px 38px rgba(15,23,42,0.08)" minHeight="140px" rowBorder="1px solid rgba(226,232,240,0.9)" rowRadius="0px" rowShadow="none" rowPadding="14px" accentColor="#ec3080" borderRadius="0px" columnBorder="1px dashed rgba(203,213,225,0.9)" columnRadius="0px" columnShadow="none" columnPadding="14px" rowBackground="transparent" showRowLabels={true} stackOnMobile={false} backgroundColor="transparent" columnMinHeight="120px" columnBackground="transparent" mobileBreakpoint="768px" secondaryAccentColor="#6366f1" layoutType="Layout Selector" />
<LayoutRenderer gap="18px" rows={JSON.parse(`[{"id":"128d6aec-67b5-42b0-85ce-de0b5eac813b","columns":[{"id":"e64de0ed-4c0f-4bff-ab67-502b70d583a5","style":{"flexBasis":"100%"},"children":[]}],"numColumns":1}]`)} width="100%" border="1px solid rgba(226,232,240,0.9)" margin="0px auto" padding="18px" maxWidth="100%" boxShadow="none" minHeight="140px" rowBorder="1px solid rgba(226,232,240,0.9)" rowRadius="0px" rowShadow="none" rowPadding="14px" accentColor="#ec3080" borderRadius="0px" columnBorder="1px dashed rgba(203,213,225,0.9)" columnRadius="0px" columnShadow="none" columnPadding="14px" rowBackground="transparent" showRowLabels={true} stackOnMobile={false} backgroundColor="transparent" columnMinHeight="120px" columnBackground="transparent" mobileBreakpoint="768px" secondaryAccentColor="#6366f1" layoutType="Layout Selector" />
<Footer gap="32px" style={JSON.parse(`{}`)} logoAlt="Company Logo" logoSrc="http://localhost:5174/images/tsg-logo.webp" logoText="" paddingX="24px" paddingY="48px" linkColor="#D1D5DB" textAlign="left" textColor="#9CA3AF" borderColor="#374151" socialLinks={JSON.parse(`[{"id":"sm1","url":"#","platform":"facebook"},{"id":"sm2","url":"#","platform":"twitter"},{"id":"sm3","url":"#","platform":"instagram"}]`)} footerLayout="default" linkFontSize="14px" linkSections={JSON.parse(`[{"id":"s1","links":[{"id":"l1","url":"#","text":"About"},{"id":"l2","url":"#","text":"Careers"},{"id":"l3","url":"#","text":"Press"}],"title":"Company"},{"id":"s2","links":[{"id":"l4","url":"#","text":"Blog"},{"id":"l5","url":"#","text":"Help Center"},{"id":"l6","url":"#","text":"Contact"}],"title":"Resources"}]`)} logoMaxWidth="150px" logoTextSize="18px" textFontSize="14px" columnsMobile={1} columnsTablet={2} copyrightText="© 2026 YourBrand. All rights reserved." logoTextColor="#F9FAFB" showTopBorder={true} titleFontSize="14px" columnsDesktop={4} linkHoverColor="#F9FAFB" socialIconSize="28px" backgroundColor="#111827" contentMaxWidth="1200px" showSocialLinks={true} socialIconShape="circle" brandDescription="Making the world a better place through constructed layouts." showBottomBorder={true} showLinkSections={true} sectionTitleColor="#F3F4F6" brandDescriptionColor="#9CA3AF"></Footer>
    </div>
  );
}
