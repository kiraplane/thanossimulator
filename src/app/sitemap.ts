import { featuredUnitPageSlugs } from '@/data/animesquadron/calculators';
import { guides } from '@/data/animesquadron/guides';
import { localizedCoreRoutes } from '@/data/animesquadron/localized-routes';
import { unitRoleRankings } from '@/data/animesquadron/tier-list';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Codes,
  Routes.TierList,
  Routes.BestTeamCombo,
  Routes.ResourceCalculator,
  Routes.TraitRerollCalculator,
  Routes.WooPityCalculator,
  Routes.SecretUnitsTracker,
  Routes.Units,
  Routes.Traits,
  Routes.Reroll,
  Routes.GameModes,
  Routes.Discord,
  Routes.Guides,
  Routes.Updates,
  Routes.Download,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
const unitRoleRoutes = unitRoleRankings.map(
  (role) => `/units/roles/${role.slug}`
);
const featuredUnitRoutes = featuredUnitPageSlugs.map(
  (slug) => `/units/${slug}`
);
const stableLastModified = new Date('2026-06-25T00:00:00.000Z');

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
    const routes =
      locale === routing.defaultLocale
        ? [
            ...coreRoutes,
            ...guideRoutes,
            ...unitRoleRoutes,
            ...featuredUnitRoutes,
          ]
        : localizedCoreRoutes;

    routes.forEach((route) => {
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
                route === Routes.BestTeamCombo ||
                route === Routes.ResourceCalculator ||
                route === Routes.TraitRerollCalculator ||
                route === Routes.WooPityCalculator ||
                route === Routes.SecretUnitsTracker ||
                route === Routes.Download ||
                route === Routes.TierList
              ? 0.9
              : route.startsWith('/guides/') ||
                  route.startsWith('/units/roles/') ||
                  route.startsWith('/units/')
                ? 0.85
                : 0.8,
      });
    });
  });

  return sitemapList;
}
