import React from 'react';
import DigitalHeaderBanner from '../components/cms/DigitalHeaderBanner.jsx';
import TrustCredibilityV1 from '../components/cms/TrustCredibilityV1.jsx';
import WhyChooseOurBrand from '../components/cms/WhyChooseOurBrand.jsx';
import ShopByCategoryV1 from '../components/cms/ShopByCategoryV1.jsx';

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
]`} imageObjectFit="cover" cardSubTextColor="#6b7280" sectionBackgroundColor="#ffffff"></WhyChooseOurBrand>
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
]`} sectionBackgroundColor="#ffffff" enableEntranceAnimation={true}></ShopByCategoryV1></>
);
};
