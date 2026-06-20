import React from 'react';
import MinimalHeader from '../components/cms/MinimalHeader.jsx';
import ShopByCategoryV2 from '../components/cms/ShopByCategoryV2.jsx';
import DeliveredGalleries from '../components/cms/DeliveredGalleries.jsx';
import WhyChooseOurBrand from '../components/cms/WhyChooseOurBrand.jsx';
import HowItWorksProcessSection from '../components/cms/HowItWorksProcessSection.jsx';
import ModernMixedCta from '../components/cms/ModernMixedCta.jsx';
import Footer from '../components/cms/Footer.jsx';

export default function LandingPage() { // Standardized page component name
return (
<><MinimalHeader sticky={true} ctaHref="/rfq" ctaText="Request For Quote" logoAlt="CPR" logoText="Chennai Packaging Retailer" navLinks={JSON.parse(`[{"id":"home","href":"/food-boxes","text":"Food Boxes","target":"_self"},{"id":"work","href":"/product-boxes","text":"Product Boxes","target":"_self"},{"id":"services","href":"/shipping-boxes","text":"Shipping Boxes","target":"_self"},{"id":"contact","href":"/rigid-boxes","text":"Rigid Boxes","target":"_self"},{"id":"8322525d-0e45-4ff8-ae0c-d213440bc2c6","href":"/tent-card","text":"Tent Card","target":"_self"},{"id":"fb03329b-c4a9-49fc-9b61-0867fb321ba2","href":"/butter-papers","text":"Butter Papers","target":"_self"}]`)} heroTitle="Chennai's Best Packaging Retailers" headerMode="hero" menuLayout="stacked" glassEffect={true} headerHeight="71px" heroSubtitle="We provide high-quality packaging products for your business and future investment starts now!" logoFontSize="26px" navHoverStyle="underline" logoFontFamily={`"Playfair Display", serif`} heroGalleryImages={JSON.parse(`[{"id":"hero-1","alt":"Luxury house","src":"https://project.trysetgo.com/api/assets/serve/edb9b79a-8e47-4bbc-b05c-cce2562c8fa2/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","href":"#hero-1","price":"$2.45M","discountPrice":"$2.1M","flashSaleLabel":"Flash Sale","wishlistSymbol":"♡"},{"id":"hero-2","alt":"Modern estate","src":"https://project.trysetgo.com/api/assets/serve/e3c40067-6aca-45fe-bd2e-ed19bcc74f4f/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","href":"#hero-2","price":"$1.95M","discountPrice":"$1.75M","flashSaleLabel":"Limited Time","wishlistSymbol":"♡"},{"id":"hero-3","alt":"Apartment building","src":"https://project.trysetgo.com/api/assets/serve/a178ca10-0e1d-4e31-bcd6-af978bd5deb8/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","href":"#hero-3","price":"$3.1M","discountPrice":"$2.85M","flashSaleLabel":"Flash Sale","wishlistSymbol":"♡"}]`)} heroBackgroundImage="https://project.trysetgo.com/api/assets/serve/204edfd1-6311-443c-8819-6b81d574e9b1/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase" heroSearchButtonText="Search" heroSearchField1Placeholder="Categories" heroSearchField2Placeholder="Products"></MinimalHeader>
<ShopByCategoryV2 gap="24px" style={JSON.parse(`{}`)} title="Shop by Category" columns={6} subtitle="Explore our wide range of collections curated just for you." className="" imageSize="160px" hoverScale={1.05} titleColor="#111827" cardTextColor="#111827" subtitleColor="#4b5563" imageObjectFit="cover" cardSubTextColor="#6b7280" categoriesLayout={`[
  {
    "id": "cat-1",
    "title": "Sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80",
    "link": "#",
    "itemCount": "120 Products"
  },
  {
    "id": "cat-2",
    "title": "Handbags",
    "image": "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80",
    "link": "#",
    "itemCount": "85 Products"
  },
  {
    "id": "cat-3",
    "title": "Watches",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    "link": "#",
    "itemCount": "340 Products"
  },
  {
    "id": "cat-4",
    "title": "Eyewear",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80",
    "link": "#",
    "itemCount": "64 Products"
  },
  {
    "id": "cat-5",
    "title": "Hats",
    "image": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=400&q=80",
    "link": "#",
    "itemCount": "42 Products"
  },
  {
    "id": "cat-6",
    "title": "Perfumes",
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80",
    "link": "#",
    "itemCount": "56 Products"
  }
]`} sectionBackgroundColor="#ffffff"></ShopByCategoryV2>
<DeliveredGalleries cards={JSON.parse(`[{"id":"mailer-box","badge":"Premium 3‑ply Board","image":"https://images.unsplash.com/photo-1582719478215-2d52a23705c5?auto=format&fit=crop&w=800&q=80","title":"Mailer Box","features":["Premium 3-ply board","CMYK Print","Gloss + Matte Lamination","Eco-friendly Material"],"subtitle":"Delivered gallery","description":"Durable, customizable mailer boxes designed for modern eCommerce."},{"id":"roll-labels","badge":"Smooth Peel","image":"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80","title":"Roll Labels","features":["Water-resistant stock","Full-color print","Tight core wind","Batch coded"],"subtitle":"Delivered gallery","description":"High-adhesion roll labels with crisp print quality for smooth application."},{"id":"circle-stickers","badge":"Satin Finish","image":"https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80","title":"Circle Stickers","features":["Satin finish","Kiss cut","Premium adhesive","Vibrant color"],"subtitle":"Delivered gallery","description":"Bold, tactile stickers with satin finish and easy release backing."},{"id":"pouches","badge":"Shelf Ready","image":"https://images.unsplash.com/photo-1582719478253-fbb4759c0caa?auto=format&fit=crop&w=800&q=80","title":"Pouches","features":["Metallic accent","Matte / gloss mix","Heat seal","Tear notch"],"subtitle":"Delivered gallery","description":"Shelf-ready pouches with metallic accents and barrier protection."},{"id":"business-cards","badge":"Foil Finish","image":"https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80","title":"Business Cards","features":["Soft-touch","Foil finish","Edge painting","Heavyweight stock"],"subtitle":"Delivered gallery","description":"Textured cards with deep black ink and foil finishing for luxury brands."}]`)} style={JSON.parse(`{}`)} ctaHref="#" eyebrow="Delivered Galleries" gridGap="16px" heading="Packaging builds we have delivered for real brands." ctaLabel="Request a similar design" className="" ctaRadius="999px" textColor="#0f172a" background="linear-gradient(180deg, #fbf7f1, #f7f2eb)" badgeColor="#f59e0b" cardBorder="1px solid #e5e7eb" cardRadius="18px" cardShadow="0 8px 18px rgba(0,0,0,0.06)" mutedColor="#475569" subheading="Browse finished projects and request a similar design tailored to your product, size, and finish." cardColumns={3} cardMinWidth="140px" ctaTextColor="#0f172a" ctaBackground="linear-gradient(120deg, #f59e0b, #eab308)" outerMinWidth="320px" previewRadius="20px" previewShadow="0 16px 36px rgba(0,0,0,0.12)" highlightBorder="2px solid #f59e0b" highlightShadow="0 16px 28px rgba(245, 158, 11, 0.16)" initialActiveId="mailer-box" previewBackground="#ffffff" featureBulletColor="#f59e0b" highlightBackground="#fffbeb"></DeliveredGalleries>
<WhyChooseOurBrand gap="32px" style={JSON.parse(`{}`)} title="Why Choose Our Brand" columns={4} subtitle="Discover what sets us apart from the rest." className="" imageSize="160px" hoverScale={1.05} imageShape="circle" titleColor="#111827" cardTextColor="#111827" subtitleColor="#4b5563" featuresLayout={`[
  {
    "id": "feat-1",
    "title": "Premium Quality",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    "text": "Crafted with excellence."
  },
  {
    "id": "feat-2",
    "title": "Fast Delivery",
    "image": "https://images.unsplash.com/photo-1580828369019-2238b6d774d0?auto=format&fit=crop&w=400&q=80",
    "text": "Shipped quickly to your door."
  },
  {
    "id": "feat-3",
    "title": "24/7 Support",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    "text": "Always here to help you."
  },
  {
    "id": "feat-4",
    "title": "Eco Friendly",
    "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80",
    "text": "Sustainable materials."
  }
]`} imageObjectFit="cover" cardSubTextColor="#6b7280" sectionBackgroundColor="#ffffff"></WhyChooseOurBrand>
<HowItWorksProcessSection gap="16px" steps={JSON.parse(`[]`)} style={JSON.parse(`{}`)} title="How It Works" columns={4} eyebrow="4 simple steps" subtitle="A simple process designed for speed and reliability." alignment="center" className="" marginTop="0px" cardBorder="1px solid #e2e8f0" cardShadow="0 14px 32px rgba(15,23,42,0.12)" marginLeft="0px" numberSize="32px" paddingTop="40px" titleColor="#0f172a" accentColor="#f26464" cardPadding="18px" marginRight="0px" paddingLeft="16px" showNumbers={true} marginBottom="0px" minCardWidth="200px" paddingRight="16px" glassmorphism={true} paddingBottom="40px" showConnector={true} subtitleColor="#475569" cardHoverScale={1.04} connectorColor="#cbd5e1" stepTitleColor="#0f172a" headingFontSize="30px" numberTextColor="#ffffff" cardBorderRadius="14px" subtitleFontSize="15px" containerMaxWidth="1280px" headingFontWeight="700" stepTitleFontSize="16px" cardBackgroundColor="#ffffff" stepTitleFontWeight="600" stepDescriptionColor="#64748b" hideConnectorOnMobile={true} numberBackgroundColor="#0f172a" sectionBackgroundColor="#f8fafc" stepDescriptionFontSize="13px"></HowItWorksProcessSection>
<ModernMixedCta ></ModernMixedCta>
<Footer gap="32px" style={JSON.parse(`{}`)} logoAlt="Company Logo" logoSrc="" logoText="" paddingX="24px" paddingY="48px" linkColor="#D1D5DB" textAlign="left" textColor="#9CA3AF" borderColor="#374151" socialLinks={JSON.parse(`[{"id":"sm1","url":"#","platform":"facebook"},{"id":"sm2","url":"#","platform":"twitter"},{"id":"sm3","url":"#","platform":"instagram"}]`)} footerLayout="default" linkFontSize="14px" linkSections={JSON.parse(`[{"id":"s1","links":[{"id":"l1","url":"#","text":"About"},{"id":"l2","url":"#","text":"Careers"},{"id":"l3","url":"#","text":"Press"}],"title":"Company"},{"id":"s2","links":[{"id":"l4","url":"#","text":"Blog"},{"id":"l5","url":"#","text":"Help Center"},{"id":"l6","url":"#","text":"Contact"}],"title":"Resources"}]`)} logoMaxWidth="150px" logoTextSize="18px" textFontSize="14px" columnsMobile={1} columnsTablet={2} copyrightText="© 2026 YourBrand. All rights reserved." logoTextColor="#F9FAFB" showTopBorder={true} titleFontSize="14px" columnsDesktop={4} linkHoverColor="#F9FAFB" socialIconSize="28px" backgroundColor="#111827" contentMaxWidth="1200px" showSocialLinks={true} socialIconShape="circle" brandDescription="Making the world a better place through constructed layouts." showBottomBorder={true} showLinkSections={true} sectionTitleColor="#F3F4F6" brandDescriptionColor="#9CA3AF"></Footer></>
);
};
