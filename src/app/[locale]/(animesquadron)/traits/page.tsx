import { FaqSection } from '@/components/animesquadron/faq-section';
import {
  ConfidenceBadge,
  TierBadge,
} from '@/components/animesquadron/status-badge';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { traitPlans } from '@/data/animesquadron/traits';
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
    title: 'Anime Squadron Traits Guide - Trait Shards and Perfect Cubes',
    description:
      'Plan Anime Squadron traits, Trait Shards, Perfect Cubes, support traits, economy traits, and stat reroll discipline without wasting launch rewards.',
    locale,
    pathname: '/traits',
    image: '/animesquadron/og-image.png',
  });
}

export default function TraitsPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: traitPlans.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.title,
      description: entry.useWhen,
    })),
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={itemList} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Traits</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Traits Guide
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Trait Shards and Perfect Cubes should improve a unit that already
            has a job. Use this page as a stop-rule checklist before rerolling.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {traitPlans.map((plan) => (
            <article
              key={plan.slug}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <div className="flex flex-wrap gap-2">
                <TierBadge tier={plan.priority} />
                <ConfidenceBadge confidence={plan.sourceConfidence} />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {plan.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                <strong className="text-[#FFF5EA]">Best target:</strong>{' '}
                {plan.bestTarget}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                {plan.useWhen}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#F3B23A]">
                Avoid: {plan.avoid}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
          >
            <LocaleLink href="/guides/traits-reroll-guide">
              Read trait guide
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/reroll">Open reroll plan</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/trait-reroll-calculator">
              Trait reroll calculator
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/tier-list">Check tier list first</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/guides/trait-shards-reroll-cubes-farm">
              Trait Shards farm
            </LocaleLink>
          </Button>
        </div>

        <FaqSection
          items={[
            {
              question: 'What should get my first Trait Shards?',
              answer:
                'Your strongest keeper carry or boss-damage unit should usually get the first serious trait attempt.',
            },
            {
              question: 'What are Perfect Cubes for?',
              answer:
                'Use Perfect Cubes only on a unit you expect to keep using across multiple modes.',
            },
            {
              question: 'Should I trait every unit?',
              answer:
                'No. Focus one unit until the trait changes a clear, then reassess.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
