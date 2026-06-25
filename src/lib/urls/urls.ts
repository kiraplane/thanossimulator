import { routing } from '@/i18n/routing';
import type { Locale } from 'next-intl';

export const CANONICAL_BASE_URL = 'https://www.chronoccg.wiki';

function cleanBaseUrl(url: string) {
  return url.replace(/\/$/, '');
}

function isLocalBaseUrl(url?: string) {
  return !url || /localhost|127\.0\.0\.1|0\.0\.0\.0/.test(url);
}

function getChronoCcgBaseUrl(url?: string) {
  if (!url || isLocalBaseUrl(url)) {
    return undefined;
  }

  try {
    const parsedUrl = new URL(url);
    if (
      parsedUrl.hostname === 'chronoccg.wiki' ||
      parsedUrl.hostname === 'www.chronoccg.wiki'
    ) {
      parsedUrl.protocol = 'https:';
      parsedUrl.hostname = 'www.chronoccg.wiki';
      parsedUrl.port = '';
      parsedUrl.pathname = '';
      parsedUrl.search = '';
      parsedUrl.hash = '';
      return cleanBaseUrl(parsedUrl.toString());
    }
  } catch {
    return undefined;
  }

  return undefined;
}

export function getCanonicalBaseUrl(): string {
  return CANONICAL_BASE_URL;
}

/**
 * Get the base URL of the application.
 * In development, uses BETTER_AUTH_URL env var or falls back to localhost:3000.
 */
export function getBaseUrl(): string {
  if (process.env.NODE_ENV === 'development') {
    return cleanBaseUrl(
      process.env.BETTER_AUTH_URL ||
        process.env.NEXT_PUBLIC_BASE_URL ||
        'http://localhost:3000'
    );
  }

  const configuredBaseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || process.env.BETTER_AUTH_URL;

  const chronoBaseUrl = getChronoCcgBaseUrl(configuredBaseUrl);
  if (chronoBaseUrl) {
    return chronoBaseUrl;
  }

  return getCanonicalBaseUrl();
}

export function shouldAppendLocale(locale?: Locale | null): boolean {
  return !!locale && locale !== routing.defaultLocale && locale !== 'default';
}

export function getUrlWithLocale(url: string, locale?: Locale | null): string {
  return shouldAppendLocale(locale)
    ? `${getBaseUrl()}/${locale}${url}`
    : `${getBaseUrl()}${url}`;
}

export function getCanonicalUrlWithLocale(
  url: string,
  locale?: Locale | null
): string {
  return shouldAppendLocale(locale)
    ? `${getCanonicalBaseUrl()}/${locale}${url}`
    : `${getCanonicalBaseUrl()}${url}`;
}

export function getUrlWithLocaleInCallbackUrl(
  url: string,
  locale: Locale
): string {
  if (!shouldAppendLocale(locale)) {
    return url;
  }

  try {
    const urlObj = new URL(url);
    const callbackURL = urlObj.searchParams.get('callbackURL');

    if (callbackURL && !callbackURL.match(new RegExp(`^/${locale}(/|$)`))) {
      const localizedCallbackURL = callbackURL.startsWith('/')
        ? `/${locale}${callbackURL}`
        : `/${locale}/${callbackURL}`;

      urlObj.searchParams.set('callbackURL', localizedCallbackURL);
    }

    return urlObj.toString();
  } catch (error) {
    console.warn('Failed to parse URL for locale insertion:', url, error);
    return url;
  }
}

export function getImageUrl(image: string): string {
  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }
  if (image.startsWith('/')) {
    return `${getBaseUrl()}${image}`;
  }
  return `${getBaseUrl()}/${image}`;
}

export function getCanonicalImageUrl(image: string): string {
  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }
  if (image.startsWith('/')) {
    return `${getCanonicalBaseUrl()}${image}`;
  }
  return `${getCanonicalBaseUrl()}/${image}`;
}

export function getStripeDashboardCustomerUrl(customerId: string): string {
  if (process.env.NODE_ENV === 'development') {
    return `https://dashboard.stripe.com/test/customers/${customerId}`;
  }
  return `https://dashboard.stripe.com/customers/${customerId}`;
}
