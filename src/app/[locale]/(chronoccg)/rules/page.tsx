import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/chronoccg/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const ruleCards = [
  {
    title: 'Core',
    body: 'Destroy the enemy Core to win. Cores start at 20 durability and can heal up to 50.',
  },
  {
    title: 'Divers',
    body: 'Your two Divers define what cards may go into the deck and can each be played from the Diver Zone once per game.',
  },
  {
    title: 'Agents',
    body: 'Agents stay on the board until destroyed, can attack or block, and non-token agents can Immortalize.',
  },
  {
    title: 'The Chain',
    body: 'Slow and Fast actions enter the chain. When both players pass, effects resolve from newest to oldest.',
  },
  {
    title: 'Shifting',
    body: 'Timeline effects can shift the active timeline. Only the top timeline in the timeline stack is active.',
  },
  {
    title: 'Immortalization',
    body: 'When an agent meets its condition, all copies of that agent for that player transform for the rest of the game.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Chrono CCG Rules - Timelines, Chain, Divers and Combat',
    description:
      'Learn Chrono CCG rules for Core durability, Divers, Agents, combat, priority, the chain, shifting timelines, keywords, and immortalization.',
    locale,
    pathname: '/rules',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function RulesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chrono CCG Rules',
    itemListElement: ruleCards.map((card, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: card.title,
    })),
  };

  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#63E6DD] text-[#051316]">Rules</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Rules
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Chrono CCG is easiest to learn when you connect every rule back to
            the board: protect your Core, develop agents, manage priority, and
            shift timelines when the active environment favors your plan.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
            >
              <a
                href={officialGameFacts.officialRules}
                target="_blank"
                rel="noreferrer"
              >
                Official Rules
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/timeline-priority-guide">
                Priority Guide
              </LocaleLink>
            </Button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ruleCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5"
            >
              <h2 className="font-display text-2xl font-bold">{card.title}</h2>
              <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                {card.body}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
          <h2 className="font-display text-2xl font-bold">
            The first rule route for new players
          </h2>
          <div className="mt-4 space-y-3 text-[#D8CDBA] text-sm leading-7">
            <p>
              Read Core, Agents, and combat first so every match has a goal.
              Then read the chain and priority rules because those determine
              whether your fast action actually answers the threat. After that,
              read shifting and immortalization because those are Chrono's most
              identity-defining systems.
            </p>
            <p>
              The official beta patch tells new players to use the website rules
              and tutorial videos because beta does not yet include a full
              in-game tutorial. That makes this page a routing layer, not a
              replacement for the official rules.
            </p>
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'What is the Core in Chrono CCG?',
              answer:
                'The Core is the durability target you protect. Destroying the enemy Core wins the game.',
            },
            {
              question: 'How does the chain resolve?',
              answer:
                'Slow and Fast actions enter the chain. When both players pass, effects resolve starting with the most recent effect.',
            },
            {
              question: 'What makes timelines special?',
              answer:
                'Timelines are not main-deck cards. Shift effects change the active timeline, and only the top timeline is active.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
