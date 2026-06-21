import React from 'react';
import DigitalHeaderBanner from '../components/cms/DigitalHeaderBanner.jsx';
import TrustCredibilityV1 from '../components/cms/TrustCredibilityV1.jsx';
import WhyChooseOurBrand from '../components/cms/WhyChooseOurBrand.jsx';
import ShopByCategoryV1 from '../components/cms/ShopByCategoryV1.jsx';
import HowItWorksProcessSection from '../components/cms/HowItWorksProcessSection.jsx';
import ModernMixedCta from '../components/cms/ModernMixedCta.jsx';
import Footer from '../components/cms/Footer.jsx';

export default function LandingPage() { // Standardized page component name
return (
<><DigitalHeaderBanner cards={JSON.parse(`[{"id":"card-1","icon":"✨","title":"Future Vision","highlight":"#121212","textColor":"#0f172a","description":"Future-forward thinking to keep your brand ahead of the curve.","backgroundColor":"#ffffff"},{"id":"card-2","icon":"🚀","title":"Product Design","highlight":"#0f9ad3","textColor":"#0f172a","description":"Human-centric design that feels effortless across screens.","backgroundColor":"#ffffff"},{"id":"card-3","icon":"📈","title":"Innovative Solutions","highlight":"#f2c742","textColor":"#0f172a","description":"Engineering impact with scalable, thoughtful digital products.","backgroundColor":"#ffffff"}]`)} logoText="Chennai Package Retailers" navLinks={JSON.parse(`[{"id":"home","href":"/categories","label":"Categories"},{"id":"services","href":"/food-boxes","label":"Food Boxes"},{"id":"works","href":"/product-boxes","label":"Product Boxes"},{"id":"about","href":"/shipping-boxes","label":"Shipping Boxes"},{"id":"blog","href":"/rigid-boxes","label":"Rigid Boxes"},{"id":"contact","href":"#","label":"Contact"},{"id":"c04f552d-0556-40fe-b51c-37faa558ffba","href":"/tent-card","label":"Tent Card"}]`)} heroImage="http://localhost:4105/api/assets/serve/204edfd1-6311-443c-8819-6b81d574e9b1/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase" logoImage="https://static.vecteezy.com/system/resources/previews/017/396/300/original/a-simple-and-minimalist-logo-design-that-can-be-remembered-and-become-the-identity-of-a-business-free-vector.jpg" heroImageAlt="Chennai Packaging Retailers" logoImageAlt="Chennai Package Retailers" ctaBackground="#d01f26" ctaBorderColor="#d62428" logoImageHeight="60px" navLinkHoverColor="#cb1d26" heroAccentBarColor="#d72428" showLogoTextWithImage={true}></DigitalHeaderBanner>
<TrustCredibilityV1 theme={JSON.parse(`{"mode":"light","accent":"#7C3AED","primary":"#2563EB","surface":"#F9FAFB","secondary":"#111827","background":"#ffffff"}`)} variant="minimal" enableAnimations={true}></TrustCredibilityV1>
<WhyChooseOurBrand gap="32px" style={JSON.parse(`{}`)} title="Why DPS" columns={4} subtitle="Discover what sets us apart from the rest." className="" imageSize="160px" hoverScale={1.28} imageShape="circle" titleColor="#111827" cardTextColor="#111827" subtitleColor="#4b5563" featuresLayout={`[
  {
    "id": "feat-1",
    "title": "Premium Quality",
    "image": "http://localhost:4105/api/assets/serve/204edfd1-6311-443c-8819-6b81d574e9b1/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "text": "Crafted with excellence."
  },
  {
    "id": "feat-2",
    "title": "Fast Delivery",
    "image": "http://localhost:4105/api/assets/serve/6c39877a-7300-4f79-9a75-baefaee4254b/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "text": "Shipped quickly to your door."
  },
  {
    "id": "feat-3",
    "title": "24/7 Support",
    "image": "http://localhost:4105/api/assets/serve/edb9b79a-8e47-4bbc-b05c-cce2562c8fa2/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "text": "Always here to help you."
  },
  {
    "id": "feat-4",
    "title": "Eco Friendly",
    "image": "http://localhost:4105/api/assets/serve/e3c40067-6aca-45fe-bd2e-ed19bcc74f4f/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "text": "Sustainable materials."
  }
]`} imageObjectFit="cover" cardSubTextColor="#6b7280" sectionBackgroundColor="#edeff2"></WhyChooseOurBrand>
<ShopByCategoryV1 gap="20px" columns={5} imageObjectFit="contain" showCardAccent={true} animationEffect="zoom-in" categoriesLayout={`[
  {
    "id": "cat-1",
    "title": "Butter Papers",
    "image": "http://localhost:4105/api/assets/serve/5716d276-9887-4e2d-b21e-97d0823babe0/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "",
    "description": "Best in class butter papers available for packaging",
    "price": "5.5/Piece"
  },
  {
    "id": "cat-2",
    "title": "Food Boxes",
    "image": "http://localhost:4105/api/assets/serve/95c60c08-74b3-4336-818d-b1a14433f54e/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": ""
  },
  {
    "id": "cat-3",
    "title": "Shipping Boxes",
    "image": "http://localhost:4105/api/assets/serve/ac3d552b-092f-4217-971e-5fc57891c27c/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "",
    "hidden": false,
    "badge": "12 Products",
    "useGlassContent": true
  },
  {
    "id": "cat-4",
    "title": "Premium Envelop",
    "image": "http://localhost:4105/api/assets/serve/7c58dfe2-d7a1-4850-8b49-b2cc4e4e7584/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "",
    "accentColor": "#ffffff",
    "cardBackgroundColor": "#ffffff",
    "titleColor": "#ffffff",
    "useGlassContent": false,
    "subTextColor": "#f7eeee",
    "badgeBackgroundColor": "#7ea1ec"
  },
  {
    "id": "cat-1782018474059",
    "title": "Premium Paper Bags",
    "image": "http://localhost:4105/api/assets/serve/0640aa95-2656-4fc8-8238-70538cb26634/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "0 Products",
    "description": "",
    "price": ""
  },
  {
    "id": "cat-1782018474673",
    "title": "Hang Tags",
    "image": "http://localhost:4105/api/assets/serve/189a49da-996e-4b52-9c02-f102c82a7a45/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "0 Products",
    "description": "",
    "price": ""
  },
  {
    "id": "cat-1782018475624",
    "title": "Mailer Boxes",
    "image": "http://localhost:4105/api/assets/serve/9166fc3e-f14c-4a53-b916-c5f5895630f0/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "0 Products",
    "description": "",
    "price": ""
  },
  {
    "id": "cat-1782018476443",
    "title": "Packaging Sleeves",
    "image": "http://localhost:4105/api/assets/serve/5349853b-9d9e-473c-89fa-155f9a709ff6/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "0 Products",
    "description": "",
    "price": ""
  },
  {
    "id": "cat-1782018480827",
    "title": "Rigid Boxes",
    "image": "http://localhost:4105/api/assets/serve/ec40f095-c642-48b5-aea7-5e391a19dd15/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "0 Products",
    "description": "",
    "price": ""
  },
  {
    "id": "cat-1782019873837",
    "title": "Tent Card",
    "image": "http://localhost:4105/api/assets/serve/662d56b7-ac5d-4e6d-9850-cf1b07b795f1/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase",
    "link": "#",
    "itemCount": "",
    "description": "",
    "price": ""
  }
]`} sectionBackgroundColor="#f5f3c2" enableEntranceAnimation={true}></ShopByCategoryV1>
<HowItWorksProcessSection gap="32px" steps={JSON.parse(`[]`)} style={JSON.parse(`{}`)} title="How It Works" columns={3} eyebrow="4 simple steps" subtitle="A simple process designed for speed and reliability." alignment="left" className="" marginTop="0px" cardBorder="1px solid #e2e8f0" cardShadow="0 14px 32px rgba(15,23,42,0.12)" marginLeft="0px" numberSize="31px" paddingTop="40px" titleColor="#0f172a" accentColor="#ebbf1e" cardPadding="26px" marginRight="0px" paddingLeft="16px" showNumbers={true} marginBottom="0px" minCardWidth="216px" paddingRight="16px" glassmorphism={true} paddingBottom="40px" showConnector={true} subtitleColor="#475569" cardHoverScale={1.1} connectorColor="#cbd5e1" stepTitleColor="#0f172a" headingFontSize="26px" numberTextColor="#ffffff" cardBorderRadius="14px" subtitleFontSize="15px" containerMaxWidth="1280px" headingFontWeight="700" stepTitleFontSize="16px" cardBackgroundColor="#ffffff" stepTitleFontWeight="600" stepDescriptionColor="#64748b" hideConnectorOnMobile={true} numberBackgroundColor="#0f172a" sectionBackgroundColor="#f3f2dd" stepDescriptionFontSize="13px"></HowItWorksProcessSection>
<ModernMixedCta gridGap="26px" fullWidth={false} buttonLink="/rfq" buttonText="Request for Quote" cardBorder="1px solid rgba(255,255,255,0.4)" imageCards={JSON.parse(`[{"id":"img-card-1","alt":"Business handshake","src":"http://localhost:4105/api/assets/serve/b8fa2b4b-70cd-4792-a5a5-64a4cfd35b14/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","caption":"Partner with confidence"},{"id":"img-card-2","alt":"Modern office exterior","src":"http://localhost:4105/api/assets/serve/48b66e30-f41c-4254-a7a5-31faa9210bfc/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","caption":"Designed for leaders"},{"id":"4b872d33-f499-452e-89b1-53f6371c162f","alt":"CTA image","src":"http://localhost:4105/api/assets/serve/7669448a-d848-4705-8cbe-1e128fe575ee/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","caption":"Caption text"}]`)} cardPadding="62px" cardBackground="#f0f344" overlayOpacity={0.4} plainBackground={false} cardBorderRadius="23px" cardShadowOffset={31} cardShadowSpread={0} sectionBackground="#231f1f" sectionPaddingTop="54px" sectionGradientEnd="#f5ec8f" useSectionGradient={true} sectionPaddingRight="22px" sectionGradientAngle={154} sectionGradientStart="#171616"></ModernMixedCta>
<Footer gap="32px" style={JSON.parse(`{}`)} logoAlt="Company Logo" logoSrc="" logoText="" paddingX="24px" paddingY="48px" linkColor="#D1D5DB" textAlign="left" textColor="#9CA3AF" borderColor="#374151" socialLinks={JSON.parse(`[{"id":"sm1","url":"#","platform":"facebook"},{"id":"sm2","url":"#","platform":"twitter"},{"id":"sm3","url":"#","platform":"instagram"}]`)} footerLayout="default" linkFontSize="14px" linkSections={JSON.parse(`[{"id":"s1","links":[{"id":"l1","url":"#","text":"About"},{"id":"l2","url":"#","text":"Careers"},{"id":"l3","url":"#","text":"Press"}],"title":"Company"},{"id":"s2","links":[{"id":"l4","url":"#","text":"Blog"},{"id":"l5","url":"#","text":"Help Center"},{"id":"l6","url":"#","text":"Contact"}],"title":"Resources"}]`)} logoMaxWidth="150px" logoTextSize="18px" textFontSize="14px" columnsMobile={1} columnsTablet={2} copyrightText="© 2026 YourBrand. All rights reserved." logoTextColor="#F9FAFB" showTopBorder={true} titleFontSize="14px" columnsDesktop={4} linkHoverColor="#F9FAFB" socialIconSize="28px" backgroundColor="#111827" contentMaxWidth="1200px" showSocialLinks={true} socialIconShape="circle" brandDescription="Making the world a better place through constructed layouts." showBottomBorder={true} showLinkSections={true} sectionTitleColor="#F3F4F6" brandDescriptionColor="#9CA3AF"></Footer></>
);
};
