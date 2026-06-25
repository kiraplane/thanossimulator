import {
  ChronoCcgMobileMenu,
  ChronoCcgRouteSidebar,
} from '@/components/chronoccg/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { chronoCardStats } from '@/data/chronoccg/cards';
import { deckArchetypes, metaSignals } from '@/data/chronoccg/decks';
import { guides, siteDescription } from '@/data/chronoccg/guides';
import { officialGameFacts } from '@/data/chronoccg/sources';
import { syndicates } from '@/data/chronoccg/syndicates';
import { updates } from '@/data/chronoccg/updates';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  CircleDot,
  Layers3,
  RadioTower,
  Search,
  Sparkles,
  SquareStack,
  Swords,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Beginner Route',
    body: 'Learn rules, Divers, first deck choices, and safe beta habits.',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
  {
    title: 'Rules',
    body: 'Priority, chain, shifting, timelines, combat, and immortalization.',
    href: '/rules',
    icon: CircleDot,
  },
  {
    title: 'Decks',
    body: 'Starter archetypes, Diver access, and 42-card deck plans.',
    href: '/decks',
    icon: SquareStack,
  },
  {
    title: 'Cards',
    body: `${chronoCardStats.uniqueCardFaceCount} official card faces with names, costs, text, and links.`,
    href: '/cards',
    icon: Layers3,
  },
  {
    title: 'Codes',
    body: 'Source-checked beta codes and creator-code safety.',
    href: '/codes',
    icon: Sparkles,
  },
  {
    title: 'Tools',
    body: 'Search cards, check deck legality, and read your curve.',
    href: '/tools',
    icon: Wrench,
  },
];

const keywordLinks = [
  { keyword: 'Chrono CCG wiki', href: '/' },
  { keyword: 'Chrono CCG beginner guide', href: '/guides/beginner-guide' },
  { keyword: 'Chrono CCG codes', href: '/codes' },
  { keyword: 'Chrono CCG decks', href: '/decks' },
  { keyword: 'Chrono CCG deck builder', href: '/decks' },
  { keyword: 'Chrono CCG card list', href: '/cards' },
  { keyword: 'Chrono CCG syndicates', href: '/syndicates' },
  { keyword: 'Chrono CCG tier list', href: '/tier-list' },
  { keyword: 'Chrono CCG Steam', href: '/download' },
  { keyword: 'Chrono CCG Discord', href: '/discord' },
];

const homeTrailer = {
  id: '4Om2NnTdTOY',
  title: 'Introducing Chrono CCG',
  embedUrl: 'https://www.youtube.com/embed/4Om2NnTdTOY',
  thumbnailUrl: 'https://i.ytimg.com/vi/4Om2NnTdTOY/hqdefault.jpg',
};

const beginnerJourney = [
  {
    title: 'Read Core Rules',
    href: '/rules',
    body: 'Core Durability, priority, attack token, and the Chain.',
  },
  {
    title: 'Pick Diver Syndicates',
    href: '/guides/diver-deckbuilding-guide',
    body: 'Two Divers decide which syndicates your deck can use.',
  },
  {
    title: 'Scan Card Faces',
    href: '/cards',
    body: `${chronoCardStats.uniqueCardFaceCount} internal card pages for names and effects.`,
  },
  {
    title: 'Check Your Deck',
    href: '/tools/deck-checker',
    body: 'Validate 40 main-deck cards, copies, syndicates, and curve.',
  },
  {
    title: 'Watch Beta Meta',
    href: '/tier-list',
    body: 'Treat early rankings as signals, not final crafting orders.',
  },
];

const toolLinks = [
  {
    title: 'Card Finder',
    href: '/tools/card-finder',
    body: 'Search card names, effect text, syndicates, costs, and types.',
    icon: Search,
  },
  {
    title: 'Deck Checker',
    href: '/tools/deck-checker',
    body: 'Paste a list and check Diver access, main-deck count, and copies.',
    icon: Swords,
  },
  {
    title: 'Curve Analyzer',
    href: '/tools/curve-analyzer',
    body: 'Read cost buckets, Agent/Action balance, and average known cost.',
    icon: RadioTower,
  },
];

export function ChronoCcgHomePage() {
  const latestGuides = guides.slice(0, 6);
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
        logo: `${officialGameFacts.domain}/chronoccg/logo.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['PC', 'Steam', 'Epic Games Store'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialWebsite,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.publisher,
        },
      },
      {
        '@type': 'VideoObject',
        name: homeTrailer.title,
        thumbnailUrl: homeTrailer.thumbnailUrl,
        embedUrl: homeTrailer.embedUrl,
        url: `https://www.youtube.com/watch?v=${homeTrailer.id}`,
        uploadDate: '2026-06-25',
      },
    ],
  };

  return (
    <div className="bg-[#0A0D10] text-[#FFF5E1]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#3B3128] border-b">
        <Image
          src="/chronoccg/hero-bg.webp"
          alt="Chrono CCG timeline battlefield art"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,13,16,0.98)_0%,rgba(10,13,16,0.88)_42%,rgba(10,13,16,0.52)_74%,rgba(10,13,16,0.84)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D10] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_430px] xl:grid-cols-[minmax(0,1fr)_500px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#63E6DD] text-[#051316]">
                  Open Beta Live
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#D9A84E] bg-[#14100D]/80 text-[#F7E7C9]"
                >
                  Steam + Epic
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Chrono CCG Wiki
              </h1>
              <p className="max-w-2xl text-[#D8CDBA] text-lg leading-8 md:text-xl">
                A compact guide hub for Chrono CCG rules, Divers, Timelines,
                syndicates, beta codes, starter decks, card list paths, and safe
                Steam or Epic access.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#63E6DD] bg-[#0A0D10]/55 text-[#FFF5E1] hover:bg-[#63E6DD] hover:text-[#051316]"
                >
                  <LocaleLink href="/rules">Read Rules</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#D9A84E] bg-[#0A0D10]/55 text-[#FFF5E1] hover:bg-[#D9A84E] hover:text-[#151006]"
                >
                  <LocaleLink href="/download">Download</LocaleLink>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywordLinks.slice(1, 7).map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#3B3128] bg-[#0A0D10]/65 px-3 py-2 font-medium text-[#D8CDBA] text-sm transition hover:border-[#63E6DD] hover:text-[#63E6DD]"
                  >
                    {item.keyword.replace('Chrono CCG ', '')}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="Chrono CCG introduction video"
              className="rounded-lg border border-[#3B3128] bg-[#0A0D10]/80 p-3 shadow-2xl"
            >
              <div className="aspect-video overflow-hidden rounded-md border border-[#3B3128] bg-black">
                <iframe
                  className="h-full w-full"
                  src={homeTrailer.embedUrl}
                  title={homeTrailer.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <LocaleLink
                  href="/decks"
                  className="rounded-md border border-[#3B3128] bg-[#14100D] px-3 py-2 text-[#F7E7C9] hover:border-[#63E6DD]"
                >
                  Deck Browser
                </LocaleLink>
                <LocaleLink
                  href="/syndicates"
                  className="rounded-md border border-[#3B3128] bg-[#14100D] px-3 py-2 text-[#F7E7C9] hover:border-[#63E6DD]"
                >
                  Six Syndicates
                </LocaleLink>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <ChronoCcgMobileMenu currentPath="/" />

      <Container className="px-4 py-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <div className="min-w-0 space-y-12">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-[#3B3128] bg-[#14100D] p-5 transition hover:border-[#63E6DD]"
                >
                  <item.icon className="size-5 text-[#D9A84E]" />
                  <h2 className="mt-4 font-display text-xl font-bold text-[#FFF5E1]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                    {item.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[#63E6DD] text-sm">
                    Open
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#3B3128] bg-[#1B102B] p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.28em]">
                      Latest game updates
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-black">
                      Beta pulse
                    </h2>
                  </div>
                  <LocaleLink
                    href="/updates"
                    className="inline-flex items-center gap-1 text-[#D8CDBA] text-sm hover:text-[#63E6DD]"
                  >
                    All updates <ArrowRight className="size-3.5" />
                  </LocaleLink>
                </div>
                <div className="mt-6 space-y-5">
                  {updates.slice(0, 3).map((update) => (
                    <LocaleLink
                      key={update.slug}
                      href="/updates"
                      className="group grid gap-3 rounded-md p-2 transition hover:bg-white/5 sm:grid-cols-[12px_minmax(0,1fr)_auto]"
                    >
                      <span className="mt-2 size-2 rounded-full bg-[#D9A84E] transition group-hover:bg-[#63E6DD]" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-[#FFF5E1] text-sm leading-6 group-hover:text-[#63E6DD]">
                          {update.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-[#D8CDBA] text-sm leading-6">
                          {update.summary}
                        </p>
                      </div>
                      <span className="text-[#B9A9C9] text-xs">
                        {update.publishedAt}
                      </span>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#3B3128] bg-[#1B102B] p-5">
                <div>
                  <p className="font-semibold text-[#D9A84E] text-xs uppercase tracking-[0.28em]">
                    Start here
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-black">
                    Your first Chrono shift
                  </h2>
                </div>
                <div className="mt-6 space-y-4">
                  {beginnerJourney.map((step, index) => (
                    <LocaleLink
                      key={step.href}
                      href={step.href}
                      className="group grid grid-cols-[32px_minmax(0,1fr)_24px] items-center gap-3 rounded-md p-2 transition hover:bg-white/5"
                    >
                      <span className="flex size-8 items-center justify-center rounded-full border border-[#6B5686] text-[#E9DDFE] text-sm">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-[#FFF5E1] text-sm group-hover:text-[#63E6DD]">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-[#D8CDBA] text-sm leading-5">
                          {step.body}
                        </span>
                      </span>
                      <ArrowRight className="size-4 text-[#63E6DD] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#D9A84E] text-[#151006]">
                    Six Syndicates
                  </Badge>
                  <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
                    Pick a game plan before a deck list
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/syndicates">View syndicates</LocaleLink>
                </Button>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {syndicates.map((syndicate) => (
                  <LocaleLink
                    key={syndicate.slug}
                    href="/syndicates"
                    className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5 transition hover:border-[#63E6DD]"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={syndicate.icon}
                        alt={`${syndicate.name} icon`}
                        width={38}
                        height={38}
                        className="size-10 object-contain"
                      />
                      <div>
                        <h3 className="font-display text-xl font-bold">
                          {syndicate.name}
                        </h3>
                        <p className="text-[#D9A84E] text-sm">
                          {syndicate.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 line-clamp-3 text-[#D8CDBA] text-sm leading-6">
                      {syndicate.gamePlan}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
                <div className="flex items-center gap-3">
                  <Swords className="size-5 text-[#B8442A]" />
                  <h2 className="font-display text-2xl font-bold">
                    Deck watchlist
                  </h2>
                </div>
                <div className="mt-5 space-y-3">
                  {deckArchetypes.slice(0, 5).map((deck) => (
                    <LocaleLink
                      key={deck.slug}
                      href="/decks"
                      className="block rounded-md border border-[#3B3128] bg-[#0A0D10] p-4 hover:border-[#D9A84E]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-semibold text-[#FFF5E1]">
                          {deck.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-[#3B3128] text-[#D8CDBA]"
                        >
                          {deck.difficulty}
                        </Badge>
                      </div>
                      <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                        {deck.plan}
                      </p>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
                <div className="flex items-center gap-3">
                  <RadioTower className="size-5 text-[#63E6DD]" />
                  <h2 className="font-display text-2xl font-bold">
                    Keyword hub
                  </h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {keywordLinks.map((item) => (
                    <LocaleLink
                      key={item.keyword}
                      href={item.href}
                      className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#D8CDBA] text-sm hover:border-[#63E6DD] hover:text-[#63E6DD]"
                    >
                      {item.keyword}
                    </LocaleLink>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {metaSignals.map((signal) => (
                    <LocaleLink
                      key={signal.label}
                      href={signal.route}
                      className="rounded-md border border-[#3B3128] bg-[#0A0D10] p-4 hover:border-[#D9A84E]"
                    >
                      <p className="font-semibold text-[#F7E7C9]">
                        {signal.label}
                      </p>
                      <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                        {signal.summary}
                      </p>
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#63E6DD] text-[#051316]">Guides</Badge>
                  <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
                    Latest Chrono CCG guides
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="overflow-hidden rounded-lg border border-[#3B3128] bg-[#14100D] transition hover:border-[#63E6DD]"
                  >
                    <div className="relative aspect-video border-[#3B3128] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <Badge
                        variant="outline"
                        className="border-[#3B3128] text-[#D8CDBA]"
                      >
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold text-[#FFF5E1]">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-[#D8CDBA] text-sm leading-6">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
              <div className="flex items-center gap-3">
                <Wrench className="size-5 text-[#D9A84E]" />
                <h2 className="font-display text-2xl font-bold">
                  Internal tools
                </h2>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {toolLinks.map((tool) => (
                  <LocaleLink
                    key={tool.href}
                    href={tool.href}
                    className="group rounded-md border border-[#3B3128] bg-[#0A0D10] p-4 transition hover:border-[#63E6DD]"
                  >
                    <tool.icon className="size-5 text-[#63E6DD]" />
                    <h3 className="mt-3 font-semibold text-[#FFF5E1] group-hover:text-[#63E6DD]">
                      {tool.title}
                    </h3>
                    <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                      {tool.body}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </div>

          <ChronoCcgRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
