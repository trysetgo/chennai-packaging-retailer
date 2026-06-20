import React from 'react';
import MinimalHeader from '../components/cms/MinimalHeader.jsx';
import BrandLogoCarousel from '../components/cms/BrandLogoCarousel.jsx';
import ShopByCategoryV2 from '../components/cms/ShopByCategoryV2.jsx';

export default function LandingPage() { // Standardized page component name
return (
<><MinimalHeader sticky={true} ctaHref="/rfq" ctaText="Request For Quote" logoAlt="CPR" logoText="Chennai Packaging Retailer" navLinks={JSON.parse(`[{"id":"home","href":"/food-boxes","text":"Food Boxes","target":"_self"},{"id":"work","href":"/product-boxes","text":"Product Boxes","target":"_self"},{"id":"services","href":"/shipping-boxes","text":"Shipping Boxes","target":"_self"},{"id":"contact","href":"/rigid-boxes","text":"Rigid Boxes","target":"_self"},{"id":"8322525d-0e45-4ff8-ae0c-d213440bc2c6","href":"/tent-card","text":"Tent Card","target":"_self"},{"id":"fb03329b-c4a9-49fc-9b61-0867fb321ba2","href":"/butter-papers","text":"Butter Papers","target":"_self"}]`)} heroTitle="Chennai's Best Packaging Retailers" headerMode="hero" menuLayout="stacked" glassEffect={true} headerHeight="71px" heroSubtitle="We provide high-quality packaging products for your business and future investment starts now!" logoFontSize="26px" navHoverStyle="underline" logoFontFamily={`"Playfair Display", serif`} heroGalleryImages={JSON.parse(`[{"id":"hero-1","alt":"Luxury house","src":"https://project.trysetgo.com/api/assets/serve/edb9b79a-8e47-4bbc-b05c-cce2562c8fa2/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","href":"#hero-1","price":"$2.45M","discountPrice":"$2.1M","flashSaleLabel":"Flash Sale","wishlistSymbol":"♡"},{"id":"hero-2","alt":"Modern estate","src":"https://project.trysetgo.com/api/assets/serve/e3c40067-6aca-45fe-bd2e-ed19bcc74f4f/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","href":"#hero-2","price":"$1.95M","discountPrice":"$1.75M","flashSaleLabel":"Limited Time","wishlistSymbol":"♡"},{"id":"hero-3","alt":"Apartment building","src":"https://project.trysetgo.com/api/assets/serve/a178ca10-0e1d-4e31-bcd6-af978bd5deb8/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase","href":"#hero-3","price":"$3.1M","discountPrice":"$2.85M","flashSaleLabel":"Flash Sale","wishlistSymbol":"♡"}]`)} heroBackgroundImage="https://project.trysetgo.com/api/assets/serve/204edfd1-6311-443c-8819-6b81d574e9b1/440e4625-7cb0-42ca-9bbf-81f85964ebfd/supabase" heroSearchButtonText="Search" heroSearchField1Placeholder="Categories" heroSearchField2Placeholder="Products"></MinimalHeader>
<BrandLogoCarousel gap="40px" title="Trusted by" slides={JSON.parse(`[{"id":"intel","name":"Intel","logoUrl":"https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg","category":"Semiconductors"},{"id":"nvidia","name":"NVIDIA","logoUrl":"https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg","category":"AI Infrastructure"},{"id":"github","name":"GitHub","logoUrl":"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg","category":"Developer Tools"},{"id":"cloudflare","name":"Cloudflare","logoUrl":"https://upload.wikimedia.org/wikipedia/commons/4/42/Cloudflare_logo.svg","category":"Performance"},{"id":"stripe","name":"Stripe","logoUrl":"https://upload.wikimedia.org/wikipedia/commons/7/76/Stripe_Logo%2C_revised_2016.svg","category":"Payments"},{"id":"figma","name":"Figma","logoUrl":"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg","category":"Design Systems"}]`)} ctaHref="#" eyebrow="Trusted by modern teams" showCta={false} autoplay={true} ctaLabel="View all" interval={3200} logoSize="56px" subtitle="A premium logo marquee for credibility bands, investor pages, and partner highlights." fullWidth={true} showCards={true} textColor="#111827" cardBorder="1px solid rgba(15,23,42,0.08)" cardShadow="0 14px 34px rgba(15,23,42,0.08)" layoutMode="marquee" showHeader={true} accentColor="#af7a3b" cardPadding="20px" headerAlign="center" logoOpacity={0.64} showEyebrow={false} cardMinWidth="160px" marqueeSpeed={40} pauseOnHover={true} showControls={true} showSubtitle={false} surfaceColor="rgba(255,255,255,0.74)" trackPadding="32px 20px" sectionBorder="1px solid rgba(15,23,42,0.08)" sectionRadius="28px" sectionShadow="0 28px 80px rgba(15, 23, 42, 0.12)" cardBackground="rgba(255,255,255,0.92)" mutedTextColor="#6b7280" showIndicators={false} backgroundColor="#ffffff" cardBorderColor="rgba(15,23,42,0.08)" cardBorderWidth={1} plainBackground={false} sectionMaxWidth="1240px" sectionPaddingX="24px" sectionPaddingY="56px" trackBackground="rgba(255,255,255,0.54)" activeCardBorder="1px solid rgba(175,122,59,0.28)" activeCardShadow="0 24px 54px rgba(15,23,42,0.14)" logoBorderRadius="18px" logoHoverOpacity={1} backgroundGradient="linear-gradient(135deg, #f9f4ec 0%, #f3ebdf 52%, #efe5d5 100%)" cardShadowStrength={8} sectionBorderColor="rgba(15,23,42,0.08)" sectionBorderWidth={1} showCategoryLabels={true} activeCardBackground="#ffffff" activeCardBorderColor="rgba(175,122,59,0.28)" activeCardBorderWidth={1} sectionShadowStrength={12} showBackgroundGradient={false} activeCardShadowStrength={14}></BrandLogoCarousel>
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
]`} sectionBackgroundColor="#ffffff"></ShopByCategoryV2></>
);
};
