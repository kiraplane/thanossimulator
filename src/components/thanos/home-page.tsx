import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import {
  ThanosMobileMenu,
  ThanosRouteSidebar,
} from '@/components/thanos/wiki-navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  bosses,
  databaseHubCards,
  stones,
  weapons,
  zones,
} from '@/data/thanos/database';
import { guides, siteDescription } from '@/data/thanos/guides';
import { officialGameFacts } from '@/data/thanos/sources';
import { topicPageList } from '@/data/thanos/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Clock3,
  Database,
  Download,
  ExternalLink,
  Gamepad2,
  Gem,
  Hammer,
  ListChecks,
  Map,
  Play,
  RadioTower,
  ShieldAlert,
  Swords,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'All Stones',
    body: 'Route Reality, Space, Time, Power, Mind, and Soul before chasing late weapons.',
    href: '/guides/all-infinity-stones-guide',
    icon: Gem,
  },
  {
    title: 'Controls',
    body: 'Learn focus, teleport, shield, charge, snap, and why keybinds need stone unlocks.',
    href: '/guides/gauntlet-controls-guide',
    icon: Gamepad2,
  },
  {
    title: 'Weapons',
    body: 'Plan Mjolnir, Stormbreaker, Gungnir, Surtur, Heart of Ymir, and Mechanical Gloves.',
    href: '/weapons',
    icon: Hammer,
  },
  {
    title: 'Bosses',
    body: 'Prepare for Doom, Surtur, Eson, Lazarus, Astra, and special NPC route checks.',
    href: '/bosses',
    icon: Swords,
  },
  {
    title: 'Codes Safety',
    body: 'No active redeem codes are verified; avoid script and executor pages.',
    href: '/codes',
    icon: ShieldAlert,
  },
  {
    title: 'Official Roblox',
    body: 'Open the verified place ID 3261957210 by Blg42598.',
    href: '/download',
    icon: Download,
  },
  {
    title: 'Tools',
    body: 'Use boss checklists, weapon planning, and the six-stone tracker.',
    href: '/tools',
    icon: Wrench,
  },
  {
    title: 'Database',
    body: 'Filter structured stones, weapons, bosses, and map route data.',
    href: '/database',
    icon: Database,
  },
];

const keywordLinks = [
  { keyword: 'thanos simulator', href: '/' },
  { keyword: 'thanos simulator wiki', href: '/' },
  { keyword: 'all stones', href: '/guides/all-infinity-stones-guide' },
  { keyword: 'tempad', href: '/guides/tempad-route-guide' },
  { keyword: 'controls', href: '/guides/gauntlet-controls-guide' },
  {
    keyword: 'mechanical gloves',
    href: '/guides/mechanical-gloves-doom-guide',
  },
  { keyword: 'surtur sword', href: '/guides/surtur-twilight-sword-guide' },
  { keyword: 'boss checklist', href: '/tools/boss-checklist' },
  { keyword: 'weapon planner', href: '/tools/weapon-planner' },
  { keyword: 'stones tracker', href: '/tools/infinity-stones-tracker' },
  { keyword: 'database', href: '/database' },
  { keyword: 'codes', href: '/codes' },
  { keyword: 'official roblox', href: '/download' },
];

const startSteps = [
  {
    title: 'Verify the official game',
    href: '/download',
    body: 'Use the Roblox page for [ Update ] Infinity Gauntlet | Thanos Simulator before trusting any guide link.',
  },
  {
    title: 'Collect the six stones',
    href: '/guides/all-infinity-stones-guide',
    body: 'Split obby stones from NPC/drop stones so you know whether the blocker is movement, combat, or patience.',
  },
  {
    title: 'Learn the gauntlet',
    href: '/guides/gauntlet-controls-guide',
    body: 'Keybinds become useful only after the right stone or charged state is available.',
  },
  {
    title: 'Pick one weapon route',
    href: '/guides/weapons-progression-guide',
    body: 'Choose the next realistic unlock instead of chasing every weapon or a thin tier list.',
  },
];

const latestUpdateItems = [
  {
    title: 'Roblox API snapshot',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: `${officialGameFacts.shortName} is verified at place ${officialGameFacts.robloxPlaceId}, universe ${officialGameFacts.robloxUniverseId}, by ${officialGameFacts.creatorName}.`,
  },
  {
    title: 'Update 3.2 priority',
    date: '2026-07-07',
    body: 'The official description lists Doom and Mechanical Glove, so the launch wiki gives that route a current guide.',
  },
  {
    title: 'Codes remain conservative',
    date: '2026-07-07',
    body: 'Search demand exists, but no active redeem code is verified. Script demand is handled as safety intent.',
  },
];

const coreDataModules = [
  {
    title: 'Infinity Stones Data',
    count: stones.length,
    body: 'Reality, Space, Time, Power, Mind, and Soul split by route type, ability focus, and safe checklist tasks.',
    href: '/database/stones',
    toolHref: '/tools/infinity-stones-tracker',
    toolLabel: 'Track stones',
    guideHref: '/guides/all-infinity-stones-guide',
    samples: ['Reality Stone', 'Space Stone', 'Soul Stone'],
    icon: Gem,
  },
  {
    title: 'Weapon Route Data',
    count: weapons.length,
    body: 'Gauntlet, Mjolnir, Stormbreaker, Gungnir, Heart of Ymir, Surtur Sword, and Mechanical Gloves prerequisites.',
    href: '/database/weapons',
    toolHref: '/tools/weapon-planner',
    toolLabel: 'Plan unlocks',
    guideHref: '/guides/weapons-progression-guide',
    samples: ['Mechanical Gloves', 'Gungnir', 'Heart of Ymir'],
    icon: Hammer,
  },
  {
    title: 'Boss Prerequisites',
    count: bosses.length,
    body: 'Doom, Surtur, Eson, Lazarus, Astra, and stone NPC checks with prep steps and route gates.',
    href: '/database/bosses',
    toolHref: '/tools/boss-checklist',
    toolLabel: 'Check prep',
    guideHref: '/bosses',
    samples: ['Doom', 'Surtur', 'Eson'],
    icon: Swords,
  },
  {
    title: 'Map and Zone Data',
    count: zones.length,
    body: 'Main Map, Catacombs, World5, Forge, Power Temple, stone obbies, Lunar World, and trials as route gates.',
    href: '/database/zones',
    toolHref: '/map',
    toolLabel: 'Open map hub',
    guideHref: '/guides/gungnir-fragments-guide',
    samples: ['Catacombs', 'World5', 'Forge'],
    icon: Map,
  },
];

const toolWorkflow = [
  {
    title: 'Track all six stones',
    body: 'Mark collected stones, see the next route focus, and jump back to the full all-stones guide.',
    href: '/tools/infinity-stones-tracker',
    databaseHref: '/database/stones',
    icon: Gem,
  },
  {
    title: 'Plan the next weapon',
    body: 'Pick a target such as Gungnir, Heart of Ymir, Surtur Sword, or Mechanical Gloves and follow prerequisites.',
    href: '/tools/weapon-planner',
    databaseHref: '/database/weapons',
    icon: Hammer,
  },
  {
    title: 'Check boss readiness',
    body: 'Choose Doom, Surtur, Eson, Lazarus, Astra, or Power Stone NPC before starting a long attempt.',
    href: '/tools/boss-checklist',
    databaseHref: '/database/bosses',
    icon: ListChecks,
  },
];

export function ThanosHomePage() {
  const latestGuides = guides.slice(0, 6);
  const featuredVideo =
    guides.find((guide) => guide.slug === 'mechanical-gloves-doom-guide')
      ?.video ??
    guides.find((guide) => guide.video)?.video;
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
        logo: `${officialGameFacts.domain}/thanos/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.shortName,
        alternateName: officialGameFacts.commonName,
        gamePlatform: ['Roblox'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Person',
          name: officialGameFacts.creatorName,
        },
      },
      featuredVideo
        ? {
            '@type': 'VideoObject',
            name: featuredVideo.title,
            thumbnailUrl: featuredVideo.thumbnailUrl,
            embedUrl: `https://www.youtube.com/embed/${featuredVideo.id}`,
            uploadDate: featuredVideo.publishedAt,
          }
        : undefined,
    ].filter(Boolean),
  };

  return (
    <div className="bg-[#080611] text-[#F8F1FF]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#3A2D4E] border-b">
        <Image
          src="/thanos/hero.png"
          alt="Infinity Gauntlet Thanos Simulator Roblox thumbnail"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,17,0.98)_0%,rgba(8,6,17,0.86)_42%,rgba(8,6,17,0.42)_72%,rgba(8,6,17,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080611] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#F6C453] text-[#120C05]">
                  Roblox Fighting
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#8D7CFF] bg-[#080611]/80 text-[#D8D2FF]"
                >
                  Infinity Gauntlet
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Thanos Simulator Wiki
              </h1>
              <p className="max-w-2xl text-[#D9D3E8] text-lg leading-8 md:text-xl">
                Find all Infinity Stones, learn gauntlet controls, route major
                weapons, prepare for Doom and Surtur, and use the official
                Roblox page without falling for script or fake code shortcuts.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
                >
                  <LocaleLink href="/guides/all-infinity-stones-guide">
                    Start Stones
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#57D68D] bg-[#080611]/70 text-[#F8F1FF] hover:bg-[#57D68D] hover:text-[#07110B]"
                >
                  <LocaleLink href="/guides/mechanical-gloves-doom-guide">
                    Update 3.2
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8D7CFF] bg-[#080611]/70 text-[#D8D2FF] hover:bg-[#8D7CFF] hover:text-[#080611]"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywordLinks.map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#3A2D4E] bg-[#080611]/75 px-3 py-2 font-medium text-[#C6BCD8] text-sm transition hover:border-[#F6C453] hover:text-[#F6C453]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="Thanos Simulator guide video"
              className="rounded-lg border border-[#3A2D4E] bg-[#080611]/85 p-4 shadow-2xl"
            >
              {featuredVideo ? (
                <div className="overflow-hidden rounded-md border border-[#3A2D4E] bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                    title={featuredVideo.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <a
                    href={featuredVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 bg-[#151024] px-3 py-2 text-[#C6BCD8] text-xs transition hover:text-[#F6C453]"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <Play className="size-3 shrink-0 text-[#57D68D]" />
                      <span className="min-w-0 truncate">
                        All-stones walkthrough reference
                      </span>
                    </span>
                    <ExternalLink className="size-3 shrink-0" />
                  </a>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <ThanosMobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#3A2D4E] bg-[#151024] p-5 transition hover:border-[#F6C453]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F6C453] text-[#120C05]">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FFE7A8] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#C6BCD8] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#57D68D] text-xs uppercase tracking-[0.18em]">
                      Latest Game Updates
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Source-checked pulse
                    </h2>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#D9D3E8] hover:text-[#F6C453]"
                  >
                    <LocaleLink href="/updates">
                      All updates
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </div>

                <div className="mt-6 space-y-5">
                  {latestUpdateItems.map((item) => (
                    <LocaleLink
                      key={item.title}
                      href="/updates"
                      className="group grid gap-3 rounded-md border border-transparent p-2 transition hover:border-[#3A2D4E] hover:bg-[#080611]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-[#FFE7A8]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[#C6BCD8] text-sm leading-6">
                            {item.body}
                          </p>
                        </div>
                        <time className="shrink-0 text-[#C6BCD8] text-xs">
                          {item.date}
                        </time>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#F6C453] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      First route checklist
                    </h2>
                  </div>
                  <Clock3 className="size-8 text-[#F6C453]" />
                </div>
                <div className="mt-6 space-y-4">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#3A2D4E] hover:bg-[#080611]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#57D68D] text-[#D9D3E8]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#F8F1FF]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#C6BCD8] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#F6C453] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#57D68D] text-xs uppercase tracking-[0.18em]">
                    Topic Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Core Thanos Simulator routes
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="group rounded-lg border border-[#3A2D4E] bg-[#151024] p-5 transition hover:border-[#F6C453]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FFE7A8] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#F6C453] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#C6BCD8] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#57D68D] text-xs uppercase tracking-[0.18em]">
                    Core Data and Tools
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Route data you can act on
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#3A2D4E] text-[#F8F1FF] hover:border-[#F6C453]"
                  >
                    <LocaleLink href="/database">Database</LocaleLink>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
                  >
                    <LocaleLink href="/tools">
                      Tools
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {coreDataModules.map((module) => (
                  <article
                    key={module.title}
                    className="rounded-lg border border-[#3A2D4E] bg-[#080611] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F6C453] text-[#120C05]">
                        <module.icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display font-bold text-[#FFE7A8] text-xl">
                            {module.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className="border-[#3A2D4E] text-[#C6BCD8]"
                          >
                            {module.count} entries
                          </Badge>
                        </div>
                        <p className="mt-2 text-[#C6BCD8] text-sm leading-6">
                          {module.body}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {module.samples.map((sample) => (
                        <span
                          key={sample}
                          className="rounded-md border border-[#3A2D4E] px-2.5 py-1 text-[#C6BCD8] text-xs"
                        >
                          {sample}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-2 sm:grid-cols-3">
                      <LocaleLink
                        href={module.href}
                        className="rounded-md border border-[#3A2D4E] bg-[#151024] px-3 py-2 text-[#F8F1FF] text-sm transition hover:border-[#F6C453]"
                      >
                        Data table
                      </LocaleLink>
                      <LocaleLink
                        href={module.toolHref}
                        className="rounded-md border border-[#3A2D4E] bg-[#151024] px-3 py-2 text-[#F8F1FF] text-sm transition hover:border-[#F6C453]"
                      >
                        {module.toolLabel}
                      </LocaleLink>
                      <LocaleLink
                        href={module.guideHref}
                        className="rounded-md border border-[#3A2D4E] bg-[#151024] px-3 py-2 text-[#F8F1FF] text-sm transition hover:border-[#F6C453]"
                      >
                        Related guide
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="grid gap-3 md:grid-cols-3">
                  {toolWorkflow.map((tool) => (
                    <LocaleLink
                      key={tool.href}
                      href={tool.href}
                      className="group rounded-lg border border-[#3A2D4E] bg-[#080611] p-4 transition hover:border-[#F6C453]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-[#3A2D4E] text-[#57D68D]">
                          <tool.icon className="size-4" />
                        </span>
                        <h3 className="font-display font-bold text-[#FFE7A8]">
                          {tool.title}
                        </h3>
                      </div>
                      <p className="mt-3 line-clamp-3 text-[#C6BCD8] text-sm leading-6">
                        {tool.body}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-[#57D68D] text-sm">
                        Open tool
                        <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </LocaleLink>
                  ))}
                </div>

                <div className="rounded-lg border border-[#3A2D4E] bg-[#080611] p-5">
                  <p className="font-semibold text-[#F6C453] text-xs uppercase tracking-[0.18em]">
                    Database Index
                  </p>
                  <div className="mt-4 grid gap-2">
                    {databaseHubCards.map((card) => (
                      <LocaleLink
                        key={card.href}
                        href={card.href}
                        className="flex items-start justify-between gap-3 rounded-md border border-[#3A2D4E] bg-[#151024] p-3 transition hover:border-[#F6C453]"
                      >
                        <span className="min-w-0">
                          <span className="block font-display font-bold text-[#FFE7A8]">
                            {card.title}
                          </span>
                          <span className="mt-1 block text-[#C6BCD8] text-xs leading-5">
                            {card.count} entries
                          </span>
                        </span>
                        <ArrowRight className="mt-1 size-4 shrink-0 text-[#57D68D]" />
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#57D68D] text-xs uppercase tracking-[0.18em]">
                  Latest Guides
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Player decisions covered
                </h2>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-lg border border-[#3A2D4E] bg-[#151024] p-5 transition hover:border-[#F6C453]"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#F6C453] text-[#120C05]">
                        {guide.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#3A2D4E] text-[#C6BCD8]"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-display text-[#FFE7A8] text-2xl font-bold">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-[#C6BCD8] text-sm leading-6">
                      {guide.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </main>

          <ThanosRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
