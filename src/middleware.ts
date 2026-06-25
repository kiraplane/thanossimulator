import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { localizedCoreRoutes } from './data/animesquadron/localized-routes';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE_NAME,
  routing,
} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const hasSingleLocale = LOCALES.length === 1;
const defaultLocalePrefix = `/${DEFAULT_LOCALE}`;

const retiredPublicRouteRedirects: Array<{
  pattern: RegExp;
  target: string;
}> = [
  { pattern: /^\/pricing\/?$/, target: '/' },
  { pattern: /^\/ai(?:\/.*)?$/, target: '/' },
  { pattern: /^\/ai-prompts(?:\/.*)?$/, target: '/' },
  { pattern: /^\/blog(?:\/.*)?$/, target: '/guides' },
  { pattern: /^\/docs(?:\/.*)?$/, target: '/' },
  { pattern: /^\/about\/?$/, target: '/' },
  { pattern: /^\/contact\/?$/, target: '/' },
  { pattern: /^\/auth(?:\/.*)?$/, target: '/' },
  { pattern: /^\/dashboard(?:\/.*)?$/, target: '/' },
  { pattern: /^\/admin(?:\/.*)?$/, target: '/' },
  { pattern: /^\/settings(?:\/.*)?$/, target: '/' },
  { pattern: /^\/payment(?:\/.*)?$/, target: '/' },
  { pattern: /^\/heroes(?:\/.*)?$/, target: '/units' },
  { pattern: /^\/units-database\/?$/, target: '/units' },
  { pattern: /^\/traits-guide\/?$/, target: '/traits' },
  { pattern: /^\/skills\/?$/, target: '/traits' },
  { pattern: /^\/codes-list\/?$/, target: '/codes' },
  { pattern: /^\/anime-squadron-codes\/?$/, target: '/codes' },
  { pattern: /^\/anime-squadron-code\/?$/, target: '/codes' },
  { pattern: /^\/tierlist\/?$/, target: '/tier-list' },
  { pattern: /^\/anime-squadron-tier-list\/?$/, target: '/tier-list' },
  { pattern: /^\/best-team\/?$/, target: '/best-team-combo' },
  { pattern: /^\/team-combo\/?$/, target: '/best-team-combo' },
  { pattern: /^\/squad-planner\/?$/, target: '/best-team-combo' },
  { pattern: /^\/calculator\/?$/, target: '/resource-calculator' },
  {
    pattern: /^\/anime-squadron-resource-calculator\/?$/,
    target: '/resource-calculator',
  },
  {
    pattern: /^\/anime-squadron-trait-reroll-calculator\/?$/,
    target: '/trait-reroll-calculator',
  },
  { pattern: /^\/trait-calculator\/?$/, target: '/trait-reroll-calculator' },
  {
    pattern: /^\/anime-squadron-woo-pity-calculator\/?$/,
    target: '/woo-pity-calculator',
  },
  {
    pattern: /^\/(?:anime-squadron-)?banner-pity-calculator\/?$/,
    target: '/woo-pity-calculator',
  },
  {
    pattern: /^\/(?:anime-squadron-)?secret-units\/?$/,
    target: '/secret-units-tracker',
  },
  { pattern: /^\/units\/main-carry\/?$/, target: '/units/roles/main-carry' },
  {
    pattern: /^\/units\/boss-damage\/?$/,
    target: '/units/roles/boss-damage',
  },
  { pattern: /^\/units\/control\/?$/, target: '/units/roles/control' },
  { pattern: /^\/units\/economy\/?$/, target: '/units/roles/economy' },
  { pattern: /^\/units\/support\/?$/, target: '/units/roles/support' },
  {
    pattern: /^\/units\/starter-filler\/?$/,
    target: '/units/roles/starter-filler',
  },
  {
    pattern: /^\/anime-squadron-best-team(?:-combo)?\/?$/,
    target: '/best-team-combo',
  },
  {
    pattern: /^\/guides\/gear-crafting-recipes\/?$/,
    target: '/guides/gear-crafting-guide',
  },
  {
    pattern: /^\/(?:anime-squadron-)?infinite(?:-mode)?\/?$/,
    target: '/guides/infinite-mode-farming-guide',
  },
  {
    pattern: /^\/guides\/infinite-mode\/?$/,
    target: '/guides/infinite-mode-farming-guide',
  },
  { pattern: /^\/discord-server\/?$/, target: '/discord' },
  { pattern: /^\/anime-squadron-discord\/?$/, target: '/discord' },
];

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const hostHeader = req.headers.get('host');
  const hostname = hostHeader?.split(':')[0].toLowerCase();
  const forwardedProto = req.headers.get('x-forwarded-proto');
  const productionHosts = new Set([
    'animesquadron.wiki',
    'www.animesquadron.wiki',
  ]);
  const canonicalHost = 'www.animesquadron.wiki';

  if (
    hostname &&
    productionHosts.has(hostname) &&
    (hostname !== canonicalHost ||
      forwardedProto === 'http' ||
      nextUrl.protocol === 'http:')
  ) {
    const canonicalUrl = new URL(nextUrl);
    canonicalUrl.protocol = 'https:';
    canonicalUrl.hostname = canonicalHost;
    canonicalUrl.port = '';
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const isDefaultLocalePrefixedPath =
    nextUrl.pathname === defaultLocalePrefix ||
    nextUrl.pathname.startsWith(`${defaultLocalePrefix}/`);

  if (
    !hasSingleLocale &&
    (nextUrl.pathname.startsWith('/docs/') || nextUrl.pathname === '/docs')
  ) {
    const localeCookie = req.cookies.get(LOCALE_COOKIE_NAME);
    const preferredLocale = localeCookie?.value;

    if (
      preferredLocale &&
      preferredLocale !== DEFAULT_LOCALE &&
      LOCALES.includes(preferredLocale)
    ) {
      const localizedPath = `/${preferredLocale}${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
      return NextResponse.redirect(new URL(localizedPath, nextUrl));
    }
  }

  const pathnameWithoutLocale = getPathnameWithoutLocale(
    nextUrl.pathname,
    LOCALES
  );
  const normalizedPathnameWithoutLocale =
    pathnameWithoutLocale.length > 1
      ? pathnameWithoutLocale.replace(/\/$/, '')
      : pathnameWithoutLocale;

  const retiredRoute = retiredPublicRouteRedirects.find(({ pattern }) =>
    pattern.test(pathnameWithoutLocale)
  );

  if (retiredRoute) {
    const locale = getLocaleFromPathname(nextUrl.pathname, LOCALES);
    const localizedTarget =
      locale && locale !== DEFAULT_LOCALE
        ? `/${locale}${retiredRoute.target}`
        : retiredRoute.target;

    return NextResponse.redirect(
      new URL(`${localizedTarget}${nextUrl.search}`, nextUrl),
      308
    );
  }

  const locale = getLocaleFromPathname(nextUrl.pathname, LOCALES);
  const normalizedLocalizedPath =
    normalizedPathnameWithoutLocale.replace(/\/$/, '') || '/';

  if (
    locale &&
    locale !== DEFAULT_LOCALE &&
    !localizedCoreRoutes.includes(normalizedLocalizedPath)
  ) {
    return NextResponse.redirect(
      new URL(`${normalizedLocalizedPath}${nextUrl.search}`, nextUrl),
      308
    );
  }

  if (hasSingleLocale) {
    if (isDefaultLocalePrefixedPath) {
      return NextResponse.next();
    }

    const localizedPath =
      nextUrl.pathname === '/'
        ? defaultLocalePrefix
        : `${defaultLocalePrefix}${nextUrl.pathname}`;
    const localizedUrl = new URL(`${localizedPath}${nextUrl.search}`, nextUrl);

    return NextResponse.rewrite(localizedUrl);
  }

  return intlMiddleware(req);
}

function getPathnameWithoutLocale(pathname: string, locales: string[]): string {
  const localePattern = new RegExp(`^/(${locales.join('|')})(?:/|$)`);
  return pathname.replace(localePattern, '/');
}

function getLocaleFromPathname(
  pathname: string,
  locales: string[]
): string | undefined {
  const localePattern = new RegExp(`^/(${locales.join('|')})(?:/|$)`);
  return pathname.match(localePattern)?.[1];
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
