import { useEffect } from 'react';

const upsertMeta = (selector, attrs) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (value) element.setAttribute(key, value);
  });
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

export default function PageMeta({ settings = {} }) {
  useEffect(() => {
    if (!settings.enabled) return;
    if (settings.siteTitle) document.title = settings.siteTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: settings.defaultMetaDescription });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: settings.defaultMetaKeywords });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: settings.robots });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: settings.ogTitle || settings.siteTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: settings.ogDescription || settings.defaultMetaDescription });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: settings.ogType });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: settings.ogImage });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: settings.twitterCard });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: settings.twitterTitle || settings.ogTitle || settings.siteTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: settings.twitterDescription || settings.ogDescription || settings.defaultMetaDescription });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: settings.twitterImage || settings.ogImage });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: settings.primaryColor });
    upsertLink('canonical', settings.canonicalUrl);

    const existingSchema = document.head.querySelector('script[data-bwevo-page-schema="true"]');
    if (existingSchema) existingSchema.remove();
    if (settings.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.bwevoPageSchema = 'true';
      script.textContent = settings.structuredData;
      document.head.appendChild(script);
    }
  }, [settings]);

  return null;
}
