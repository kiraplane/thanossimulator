import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import {
  ConfidenceBadge,
  UnitTierBadge,
} from '@/components/animesquadron/status-badge';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { featuredUnitPageSlugs } from '@/data/animesquadron/calculators';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { unitTierRankings } from '@/data/animesquadron/tier-list';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const trackerUnits = unitTierRankings.filter((unit) =>
  featuredUnitPageSlugs.includes(
    unit.slug as (typeof featuredUnitPageSlugs)[number]
  )
);

const faqs = [
  {
    question: 'Does this tracker prove every secret unit route?',
    answer:
      'No. It separates strong current guide signals from watch items and links back to unit pages, tier data, and route guides for cautious planning.',
  },
  {
    question: 'Which secret or premium unit should I chase first?',
    answer:
      'Chase the unit that fixes your current squad role. A premium carry is better than a rare unit that does not solve waves, bosses, or upgrade tempo.',
  },
  {
    question: 'Why are some units marked as utility or watch?',
    answer:
      'Not every high-value unit is a pure damage carry. Fastwagon, Falcon, and support-style units need a different investment rule than top DPS units.',
  },
];

function getTrackerStatus(unit: (typeof unitTierRankings)[number]) {
  if (unit.tier === 'S') {
    return 'Premium target';
  }

  if (unit.tier === 'Utility') {
    return 'Utility target';
  }

  return 'Watch target';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Secret Units Tracker - Premium Unit Watchlist',
    description:
      'Track Anime Squadron secret, premium, and high-value units including Gometa, Woo, Madora, Puppeteer, Berserker, Fastwagon, Falcon, and Shanron.',
    locale,
    pathname: '/secret-units-tracker',
    image: '/animesquadron/og-image.png',
  });
}

export default function SecretUnitsTrackerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Anime Squadron secret and premium unit tracker',
        itemListElement: trackerUnits.map((unit, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: unit.name,
          description: unit.reason,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Unit Tracker</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Secret Units Tracker
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Track premium unit targets, role fit, confidence, and investment
            cautions before spending Gems, evolution materials, or reroll items.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/units">Open units hub</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/best-team-combo">Check team fit</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/resource-calculator">
                Plan resources
              </LocaleLink>
            </Button>
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <section className="grid gap-4 lg:grid-cols-2">
          {trackerUnits.map((unit) => (
            <article
              key={unit.slug}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <div className="flex flex-wrap gap-2">
                <UnitTierBadge tier={unit.tier} />
                <ConfidenceBadge confidence={unit.sourceConfidence} />
                <Badge variant="outline" className="border-[#574033]">
                  {getTrackerStatus(unit)}
                </Badge>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {unit.name}
              </h2>
              <p className="mt-2 text-[#F3B23A] text-xs uppercase tracking-wide">
                {unit.aliases.join(', ')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {unit.roleFit.map((role) => (
                  <Badge
                    key={role}
                    variant="outline"
                    className="border-[#574033] text-[#FFF5EA]"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-[#D5C6B7] text-sm leading-7">
                {unit.reason}
              </p>
              <p className="mt-3 text-[#F3B23A] text-sm leading-7">
                Investment rule: {unit.investWhen}
              </p>
              <p className="mt-3 text-[#9F8C7B] text-xs leading-5">
                Caution: {unit.caution}
              </p>
              <Button asChild variant="outline" className="mt-5">
                <LocaleLink href={`/units/${unit.slug}`}>
                  Open unit page
                </LocaleLink>
              </Button>
            </article>
          ))}
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">Source boundary</h2>
          <p className="mt-3 max-w-3xl text-[#D5C6B7] text-sm leading-7">
            {officialGameFacts.name} is still early-access and public data moves
            quickly. This tracker uses cross-checked guide signals and avoids
            publishing exact obtain odds unless a stronger source confirms them.
          </p>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />
        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
