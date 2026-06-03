import { websiteConfig } from '@/config/website';
import type { Locale } from 'next-intl';
import { getBaseUrl, getImageUrl, getUrlWithLocale } from './urls/urls';

type StructuredData = Record<string, unknown>;

export interface FaqStructuredDataItem {
  question: string;
  answer: string;
}

function getLocaleLanguage(locale: Locale): string {
  return websiteConfig.i18n.locales[locale]?.hreflang || locale;
}

function getOrganizationId(): string {
  return `${getBaseUrl()}#organization`;
}

function getOrganizationLogo() {
  const logo = websiteConfig.metadata.images?.logoLight;
  return logo
    ? {
        '@type': 'ImageObject',
        url: getImageUrl(logo),
      }
    : undefined;
}

function getOrganizationSameAs(): string[] | undefined {
  const sameAs = Object.values(websiteConfig.metadata.social ?? {}).filter(
    (value): value is string => Boolean(value)
  );

  return sameAs.length > 0 ? sameAs : undefined;
}

export function buildStructuredDataGraph(
  items: StructuredData[]
): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@graph': items,
  };
}

export function buildOrganizationStructuredData({
  name,
  description,
}: {
  name: string;
  description?: string;
}): StructuredData {
  const sameAs = getOrganizationSameAs();
  const logo = getOrganizationLogo();

  return {
    '@type': 'Organization',
    '@id': getOrganizationId(),
    name,
    url: getBaseUrl(),
    ...(description && { description }),
    ...(logo && { logo }),
    ...(sameAs && { sameAs }),
  };
}

export function buildWebsiteStructuredData({
  locale,
  name,
  description,
}: {
  locale: Locale;
  name: string;
  description?: string;
}): StructuredData {
  const url = getUrlWithLocale('', locale);

  return {
    '@type': 'WebSite',
    '@id': `${url}#website`,
    url,
    name,
    ...(description && { description }),
    inLanguage: getLocaleLanguage(locale),
    publisher: {
      '@id': getOrganizationId(),
    },
  };
}

export function buildSoftwareApplicationStructuredData({
  locale,
  pathname,
  name,
  description,
  organizationName,
  applicationCategory = 'EntertainmentApplication',
  image,
}: {
  locale: Locale;
  pathname: string;
  name: string;
  description: string;
  organizationName: string;
  applicationCategory?: string;
  image?: string;
}): StructuredData {
  const logo = getOrganizationLogo();
  const url = getUrlWithLocale(pathname, locale);

  return {
    '@type': 'SoftwareApplication',
    '@id': `${url}#software-application`,
    name,
    url,
    description,
    applicationCategory,
    operatingSystem: 'Web',
    inLanguage: getLocaleLanguage(locale),
    ...(image && { image: getImageUrl(image) }),
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description:
        'The browser experience is free to open. Store availability depends on Google Play and App Store regions.',
    },
    publisher: {
      '@type': 'Organization',
      name: organizationName,
      url: getBaseUrl(),
      ...(logo && { logo }),
    },
  };
}

export function buildFaqPageStructuredData({
  locale,
  pathname,
  faqs,
}: {
  locale: Locale;
  pathname: string;
  faqs: FaqStructuredDataItem[];
}): StructuredData {
  const url = getUrlWithLocale(pathname, locale);

  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}
