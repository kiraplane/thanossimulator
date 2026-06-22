import {
  AdsterraAdFrame,
  AdsterraNativeBanner,
} from '@/components/ads/adsterra-ad';
import { CodeCopyButton } from '@/components/animesquadron/code-copy-button';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes, codeCheckSummary } from '@/data/animesquadron/codes';
import { guides, siteDescription } from '@/data/animesquadron/guides';
import { getAnimeSquadronCopy } from '@/data/animesquadron/localized-copy';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { unitTierRankings } from '@/data/animesquadron/tier-list';
import type { UnitTierRank } from '@/data/animesquadron/types';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Gem,
  RadioTower,
  RotateCcw,
  Shield,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { LastUpdated } from './last-updated';

const primaryIcons = [ClipboardList, Trophy, Users, BookOpen];
const topicIcons = [Swords, RotateCcw, Shield, Sparkles];
const tierBadgeClassName: Record<UnitTierRank, string> = {
  S: 'border-[#37D6D0] bg-[#092B2B] text-[#A9FFFA]',
  A: 'border-[#7BD66F] bg-[#112A12] text-[#C9FFC6]',
  B: 'border-[#F3B23A] bg-[#38220D] text-[#FBD77B]',
  Utility: 'border-[#A97922] bg-[#38220D] text-[#FBD77B]',
  Watch: 'border-[#3A2A24] bg-[#201611] text-[#D5C6B7]',
};

const guideKeywordLinks = [
  {
    keyword: 'Anime Squadron beginner guide',
    href: '/guides/beginner-guide',
  },
  {
    keyword: 'Anime Squadron codes redeem guide',
    href: '/guides/codes-redeem-guide',
  },
  {
    keyword: 'Anime Squadron best units tier list',
    href: '/guides/best-units-tier-list',
  },
  {
    keyword: 'Anime Squadron 0.5 tier list',
    href: '/guides/update-0-5-tier-list',
  },
  {
    keyword: 'Anime Squadron Gogeta',
    href: '/guides/how-to-get-gogeta-gometa',
  },
  {
    keyword: 'Anime Squadron Falcon',
    href: '/guides/falcon-guide',
  },
  {
    keyword: 'Anime Squadron Berserker',
    href: '/guides/berserker-guide',
  },
  {
    keyword: 'Anime Squadron secret units guide',
    href: '/guides/secret-units-guide',
  },
  {
    keyword: 'Anime Squadron traits guide',
    href: '/guides/traits-reroll-guide',
  },
  {
    keyword: 'Anime Squadron stat reroll guide',
    href: '/guides/stat-reroll-guide',
  },
  {
    keyword: 'Anime Squadron Trait Shards farm',
    href: '/guides/trait-shards-reroll-cubes-farm',
  },
  {
    keyword: 'Anime Squadron Gems and Gold guide',
    href: '/guides/gems-gold-spending-guide',
  },
  {
    keyword: 'Anime Squadron game modes guide',
    href: '/guides/game-modes-rewards-guide',
  },
  {
    keyword: 'Anime Squadron Discord Trello Wiki',
    href: '/guides/discord-trello-wiki-guide',
  },
  {
    keyword: 'Anime Squadron Roblox download safety',
    href: '/guides/safe-download-roblox-guide',
  },
];

const updateHighlights = [
  {
    title: 'New UPD 0.5 codes',
    body: 'Copy the newest maintenance, Eclipse, and CCU reward codes before spending rerolls.',
    href: '/codes',
    icon: ClipboardList,
  },
  {
    title: 'Berserker enters S Tier',
    body: 'Treat Berserker as a 0.5 DPS target only after it beats your current carry test.',
    href: '/guides/berserker-guide',
    icon: Swords,
  },
  {
    title: 'Falcon is the utility watch',
    body: 'Falcon matters when Yen, support, or farm tempo changes a real run.',
    href: '/guides/falcon-guide',
    icon: Sparkles,
  },
  {
    title: 'Gogeta means Gometa',
    body: 'Use the route guide before committing evolution materials, Primal Core, or rare rerolls.',
    href: '/guides/how-to-get-gogeta-gometa',
    icon: Trophy,
  },
];

export function AnimeSquadronHomePage({ locale }: { locale?: string }) {
  const copy = getAnimeSquadronCopy(locale);
  const latestGuides = guides;
  const homepageCodes = activeCodes.slice(0, 5);
  const tierSnapshot = unitTierRankings.filter(
    (entry) => entry.tier === 'S' || entry.slug === 'falcon-dark'
  );
  const primaryLinks = copy.home.primaryLinks.map((item, index) => ({
    ...item,
    body: index === 0 ? codeCheckSummary.status : item.body,
    icon: primaryIcons[index] ?? ClipboardList,
  }));
  const topicLinks = copy.home.topicLinks.map((item, index) => ({
    ...item,
    icon: topicIcons[index] ?? Swords,
  }));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${officialGameFacts.domain}/#website`,
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/logo.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['Roblox'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.publisher,
        },
      },
    ],
  };

  return (
    <div className="bg-[#090706] text-[#FFF5EA]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#3A2A24] border-b">
        <Image
          src="/animesquadron/hero.png"
          alt="Anime Squadron Roblox anime lane battler artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,7,6,0.96)_0%,rgba(9,7,6,0.84)_42%,rgba(9,7,6,0.44)_74%,rgba(9,7,6,0.76)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#090706] to-transparent" />

        <Container className="relative px-4 py-14 md:py-20 lg:min-h-[640px] lg:py-24">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#37D6D0] text-[#041414]">
              {copy.home.badge}
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              {copy.home.h1}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#F2D9C3] md:text-xl">
              {copy.home.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
              >
                <LocaleLink href="/codes">
                  {copy.home.codesCta}
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#37D6D0] bg-[#090706]/45 text-[#FFF5EA] hover:bg-[#37D6D0] hover:text-[#041414]"
              >
                <LocaleLink href="/tier-list">
                  {copy.home.secondaryCta}
                </LocaleLink>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <LastUpdated date={codeCheckSummary.checkedAt} />
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#3A2A24] bg-[#130D0B] px-3 py-2 text-xs font-medium text-[#D5C6B7] transition hover:border-[#37D6D0] hover:text-[#37D6D0]"
              >
                <RadioTower className="size-4" />
                {copy.home.robloxLabel}
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {primaryLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B]/90 p-4 backdrop-blur transition hover:border-[#37D6D0] hover:bg-[#1D1511]/95"
              >
                <item.icon className="size-6 text-[#37D6D0]" />
                <h2 className="mt-3 font-display text-lg font-bold">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#D5C6B7]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <AdsterraNativeBanner className="border-[#3A2A24] border-b bg-[#090706]" />

      <section className="border-[#3A2A24] border-b bg-[#100B09] py-12">
        <Container className="grid gap-6 px-4 xl:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
                  Active codes
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Copy the newest Anime Squadron codes first
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                  {codeCheckSummary.status}. Redeem the UPD 0.5 batch before
                  using Gems, Trait Shards, Reroll Cubes, Perfect Cubes, or Gold
                  on a unit.
                </p>
              </div>
              <LastUpdated date={codeCheckSummary.checkedAt} />
            </div>

            <div className="mt-5 grid gap-3">
              {homepageCodes.map((item) => (
                <article
                  key={item.code}
                  className="grid gap-3 rounded-lg border border-[#3A2A24] bg-[#090706] p-4 md:grid-cols-[minmax(150px,0.45fr)_1fr_auto] md:items-center"
                >
                  <div>
                    <p className="font-mono text-base font-bold text-[#FFF5EA]">
                      {item.code}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-[#F3B23A]">
                      Checked {item.lastChecked}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-[#D5C6B7]">
                    {item.reward}
                  </p>
                  <CodeCopyButton code={item.code} />
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
              >
                <LocaleLink href="/codes">Open all codes</LocaleLink>
              </Button>
              <Button asChild variant="outline">
                <LocaleLink href="/guides/codes-redeem-guide">
                  Redeem guide
                </LocaleLink>
              </Button>
            </div>
          </section>

          <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
              UPD 0.5
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              What's new in the current meta
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
              The update is mainly about new codes, Berserker damage checks,
              Falcon utility, and the Gogeta/Gometa route. Use these pages
              before moving rare rerolls or gear materials.
            </p>

            <div className="mt-5 grid gap-3">
              {updateHighlights.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="grid gap-3 rounded-lg border border-[#3A2A24] bg-[#090706] p-4 transition hover:border-[#37D6D0] md:grid-cols-[36px_1fr]"
                >
                  <item.icon className="size-7 text-[#F3B23A]" />
                  <span>
                    <span className="block font-display text-lg font-bold text-[#FFF5EA]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[#D5C6B7]">
                      {item.body}
                    </span>
                  </span>
                </LocaleLink>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <LocaleLink href="/guides/update-0-5-tier-list">
                  Read 0.5 tier guide
                </LocaleLink>
              </Button>
              <Button asChild variant="outline">
                <LocaleLink href="/tier-list">Open tier list</LocaleLink>
              </Button>
            </div>
          </section>
        </Container>
      </section>

      <section className="border-[#3A2A24] border-b bg-[#100B09] py-12">
        <Container className="grid gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
              {copy.home.launchEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {copy.home.launchHeading}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#D5C6B7]">
              {copy.home.launchBody}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {topicLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 transition hover:border-[#37D6D0]"
              >
                <item.icon className="size-7 text-[#E03A22]" />
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#D5C6B7]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
              {copy.home.searchEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {copy.home.searchHeading}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
              {copy.home.searchBody}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5">
              <h3 className="font-display text-2xl font-bold">
                {copy.home.corePagesHeading}
              </h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {copy.home.coreKeywordLinks.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="rounded-lg border border-[#3A2A24] bg-[#090706] p-4 transition hover:border-[#37D6D0]"
                  >
                    <span className="text-sm font-bold text-[#FFF5EA]">
                      {item.keyword}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-[#D5C6B7]">
                      {item.intent}
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5">
              <h3 className="font-display text-2xl font-bold">
                {copy.home.guideKeywordsHeading}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {guideKeywordLinks.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-sm font-medium text-[#D5C6B7] transition hover:border-[#37D6D0] hover:text-[#37D6D0]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      <AdsterraAdFrame
        slot="banner-300x250"
        className="border-[#3A2A24] border-b bg-[#090706] py-8"
        label
      />

      <section className="border-[#3A2A24] border-t py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
              {copy.home.tierEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {copy.home.tierHeading}
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {tierSnapshot.map((entry) => (
              <article
                key={entry.slug}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className={tierBadgeClassName[entry.tier]}
                  >
                    {entry.tier} Tier
                  </Badge>
                  {entry.roleFit.slice(0, 2).map((role) => (
                    <Badge
                      key={role}
                      variant="outline"
                      className="border-[#574033] text-[#FFF5EA]"
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {entry.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-[#F3B23A]">
                  {entry.aliases.join(', ')}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#D5C6B7]">
                  {entry.reason}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.bestFor.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-[#574033] text-[#D5C6B7]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/tier-list">Open full tier list</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/update-0-5-tier-list">
                Read UPD 0.5 guide
              </LocaleLink>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-[#3A2A24] border-y bg-[#100B09] py-12">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
                {copy.home.guidesEyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                {copy.home.guidesHeading}
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/guides">{copy.home.allGuides}</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {latestGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 transition hover:border-[#37D6D0]"
              >
                <Badge className="bg-[#E03A22] text-[#FFF5EA]">
                  {guide.category}
                </Badge>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {guide.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#D5C6B7]">
                  {guide.summary}
                </p>
              </LocaleLink>
            ))}
          </div>
          <div className="rounded-lg border border-[#3A2A24] bg-[#090706] p-5">
            <div className="flex flex-wrap items-center gap-3">
              <Gem className="size-6 text-[#F3B23A]" />
              <p className="text-sm leading-7 text-[#D5C6B7]">
                {copy.home.siteStatus}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
