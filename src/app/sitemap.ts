import { allCoreRoutes } from '@/data/thanos/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const stableLastModified = new Date('2026-07-14T00:00:00.000Z');

function getLocalizedRoute(locale: string, route: string) {
  if (locale === routing.defaultLocale) {
    return route;
  }

  return route === Routes.Root ? `/${locale}` : `/${locale}${route}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();

  routing.locales.forEach((locale) => {
    allCoreRoutes.forEach((route) => {
      const localizedRoute = getLocalizedRoute(locale, route);

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root || route === Routes.Codes ? 'daily' : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Codes ||
                route === Routes.Stones ||
                route === Routes.Weapons ||
                route === Routes.Bosses ||
                route === Routes.Map ||
                route === Routes.Controls ||
                route === Routes.Tools ||
                route === Routes.Database ||
                route === Routes.Download ||
                route === Routes.Updates
              ? 0.9
              : route.startsWith('/guides/')
                ? 0.85
                : 0.8,
      });
    });
  });

  return sitemapList;
}
