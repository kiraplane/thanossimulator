import {
  AdsterraAdFrame,
  AdsterraNativeBanner,
} from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { codeCheckSummary } from '@/data/animesquadron/codes';
import { guides, siteDescription } from '@/data/animesquadron/guides';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { unitRoleRankings } from '@/data/animesquadron/tier-list';
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
import { TierBadge } from './status-badge';

const primaryLinks = [
  {
    title: 'Codes',
    body: codeCheckSummary.status,
    href: '/codes',
    icon: ClipboardList,
  },
  {
    title: 'Tier List',
    body: 'Early unit-role priority',
    href: '/tier-list',
    icon: Trophy,
  },
  {
    title: 'Beginner Guide',
    body: 'Codes, summons, and first carry',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
  {
    title: 'Traits',
    body: 'Trait Shards and Perfect Cube rules',
    href: '/traits',
    icon: Sparkles,
  },
];

const topicLinks = [
  {
    title: 'Units',
    body: 'Carry, boss damage, control, support, economy, and starter filler roles.',
    href: '/units',
    icon: Swords,
  },
  {
    title: 'Reroll',
    body: 'Stat Rerolls, Reroll Cubes, and the one-carry-at-a-time rule.',
    href: '/reroll',
    icon: RotateCcw,
  },
  {
    title: 'Game Modes',
    body: 'Waves, bosses, co-op, and launch-stage rank pressure.',
    href: '/game-modes',
    icon: Shield,
  },
  {
    title: 'Discord',
    body: 'Official link checks, Trello status, and community safety notes.',
    href: '/discord',
    icon: Users,
  },
];

const coreKeywordLinks = [
  {
    keyword: 'Anime Squadron codes',
    href: '/codes',
    intent: 'Active rewards and redeem fixes',
  },
  {
    keyword: 'Anime Squadron tier list',
    href: '/tier-list',
    intent: 'Best unit roles and early meta',
  },
  {
    keyword: 'Anime Squadron units',
    href: '/units',
    intent: 'Carry, boss damage, control, support',
  },
  {
    keyword: 'Anime Squadron traits',
    href: '/traits',
    intent: 'Trait Shards and Perfect Cube rules',
  },
  {
    keyword: 'Anime Squadron reroll',
    href: '/reroll',
    intent: 'Stat Rerolls and Reroll Cubes',
  },
  {
    keyword: 'Anime Squadron game modes',
    href: '/game-modes',
    intent: 'Waves, bosses, co-op, ranks',
  },
  {
    keyword: 'Anime Squadron Discord',
    href: '/discord',
    intent: 'Discord, Trello, official Wiki status',
  },
  {
    keyword: 'Anime Squadron download',
    href: '/download',
    intent: 'Official Roblox link and safety',
  },
  {
    keyword: 'Anime Squadron updates',
    href: '/updates',
    intent: 'Early-access source changes',
  },
];

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
    keyword: 'Anime Squadron traits guide',
    href: '/guides/traits-reroll-guide',
  },
  {
    keyword: 'Anime Squadron stat reroll guide',
    href: '/guides/stat-reroll-guide',
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

export function AnimeSquadronHomePage() {
  const latestGuides = guides;
  const recommendedRoles = unitRoleRankings.filter(
    (entry) => entry.tier === 'Recommended'
  );
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
              Unofficial Roblox strategy wiki
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Anime Squadron Wiki
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#F2D9C3] md:text-xl">
              Codes, unit-role tier lists, trait reroll rules, launch spending
              priorities, game modes, and safe Roblox links for Anime Squadron.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
              >
                <LocaleLink href="/codes">
                  Copy active codes
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#37D6D0] bg-[#090706]/45 text-[#FFF5EA] hover:bg-[#37D6D0] hover:text-[#041414]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  Start beginner guide
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
                Official Roblox page
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
        <Container className="grid gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
              Quick answer
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Redeem codes, build one carry, protect Perfect Cubes
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#D5C6B7]">
              Anime Squadron is still in early access, so the best launch plan
              is conservative: use codes first, test your summons, upgrade one
              main damage unit, and wait before spending rare reroll materials
              on filler.
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
              Search hub
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Every Anime Squadron keyword has a page to continue from
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
              Use the homepage as the index for the full guide set: codes, tier
              list, units, traits, rerolls, game modes, Discord, download, and
              the long-tail guides players search for after launch.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5">
              <h3 className="font-display text-2xl font-bold">
                Core Anime Squadron pages
              </h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {coreKeywordLinks.map((item) => (
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
                Guide long-tail keywords
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
              Tier list snapshot
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Rank unit jobs before chasing unit names
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {recommendedRoles.map((entry) => (
              <article
                key={entry.slug}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <TierBadge tier={entry.tier} />
                  <Badge className="bg-[#E03A22] text-[#FFF5EA]">
                    {entry.role}
                  </Badge>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {entry.decision}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#D5C6B7]">
                  {entry.buildNotes.map((note) => (
                    <li key={note}>- {note}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#3A2A24] border-y bg-[#100B09] py-12">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#37D6D0]">
                Latest guides
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Read the decision page before spending rewards
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/guides">All guides</LocaleLink>
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
                Site status: unofficial, source-tracked, and built for
                early-access decisions. It does not provide scripts, exploits,
                unsafe APKs, or fake official claims.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
