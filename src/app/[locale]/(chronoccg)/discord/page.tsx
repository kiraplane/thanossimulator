import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/chronoccg/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Chrono CCG Discord, Reddit and Official Links',
    description:
      'Find safe Chrono CCG community links for Discord, Reddit, official news, rules, cards, decks, Steam, and Epic.',
    locale,
    pathname: '/discord',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function DiscordPage() {
  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D9A84E] text-[#151006]">Community</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Discord and Official Links
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Use official links for Discord, news, rules, cards, deck browsing,
            store pages, and beta support. Treat invite mirrors and unofficial
            downloads carefully.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
            >
              <a
                href={officialGameFacts.discordUrl}
                target="_blank"
                rel="noreferrer"
              >
                Join Discord
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={officialGameFacts.redditUrl}
                target="_blank"
                rel="noreferrer"
              >
                Reddit
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/updates">Updates</LocaleLink>
            </Button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Official site', officialGameFacts.officialWebsite],
            ['Official rules', officialGameFacts.officialRules],
            ['Official cards', officialGameFacts.officialCards],
            ['Runeterra.AR decks', officialGameFacts.officialDecks],
            ['Steam', officialGameFacts.steamUrl],
            ['Epic Games', officialGameFacts.epicUrl],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5 font-semibold text-[#F7E7C9] hover:border-[#63E6DD]"
            >
              {label}
            </a>
          ))}
        </section>

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
          <h2 className="font-display text-2xl font-bold">Link safety notes</h2>
          <p className="mt-3 max-w-3xl text-[#D8CDBA] text-sm leading-7">
            Chrono CCG is new enough that search results can mix official
            resources with unrelated Chrono games, old Kickstarter links, and
            reposted invite pages. Prefer links from playchrono.com, Steam,
            Epic, official Reddit, official Discord, and Runeterra.AR when
            browsing decks.
          </p>
        </section>

        <FaqSection
          items={[
            {
              question: 'Is this site the official Chrono CCG Discord?',
              answer:
                'No. This is an independent guide hub that links to official community destinations when available.',
            },
            {
              question: 'Where should I report bugs?',
              answer:
                'Use official channels such as the Steam discussion hub or official Discord, depending on what the developers request for the current issue.',
            },
            {
              question: 'Should I trust Discord screenshots as patch notes?',
              answer:
                'Use them as leads only. Publishable facts should be cross-checked against official news, store pages, or in-game text.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
