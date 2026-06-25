import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import { ResourceCalculatorTool } from '@/components/animesquadron/resource-calculator-tool';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  calculatorSourceNotes,
  resourceTotals,
} from '@/data/animesquadron/calculators';
import { activeCodes } from '@/data/animesquadron/codes';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'Is the Anime Squadron resource calculator exact?',
    answer:
      'No. It uses source-checked active code rewards and conservative planning defaults. Unknown or conflicting reward quantities are excluded until sources agree or the in-game popup is verified.',
  },
  {
    question: 'Why are some code rewards excluded from the totals?',
    answer:
      'Some active codes have reward wording that differs by tracker. The calculator keeps those rewards visible as notes but does not count unstable quantities in the base total.',
  },
  {
    question: 'What should beginners spend first?',
    answer:
      'Redeem active codes, use Gems to find one carry candidate, spend Gold on that unit, and keep rare reroll materials for a unit you expect to keep.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Resource Calculator - Gems, Gold and Cubes',
    description:
      'Plan Anime Squadron Gems, Gold, Trait Shards, Reroll Cubes, Perfect Cubes, Stat Cubes, and active code rewards with conservative spending advice.',
    locale,
    pathname: '/resource-calculator',
    image: '/animesquadron/og-image.png',
  });
}

export default function ResourceCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Anime Squadron Resource Calculator',
        operatingSystem: 'Web',
        applicationCategory: 'GameApplication',
        url: `${officialGameFacts.domain}/resource-calculator`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Free Anime Squadron resource planner for Gems, Gold, Trait Shards, reroll items, and Perfect Cubes.',
        featureList: [
          'Source-checked active code resource totals',
          'Gem-to-summon planning',
          'Reroll and Perfect Cube stop rules',
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Anime Squadron tracked resources',
        itemListElement: resourceTotals.map((resource, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: resource.label,
          description: resource.helper,
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
          <Badge className="bg-[#37D6D0] text-[#041414]">Resource Tool</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Resource Calculator
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Turn active code rewards and your own inventory into a conservative
            summon, upgrade, and reroll plan before spending rare materials.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/codes">Open active codes</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/trait-reroll-calculator">
                Trait reroll odds
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/best-team-combo">Plan squad first</LocaleLink>
            </Button>
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <ResourceCalculatorTool />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            What the calculator counts
          </h2>
          <p className="mt-3 max-w-3xl text-[#D5C6B7] text-sm leading-7">
            The base totals use {activeCodes.length} active codes checked on{' '}
            {calculatorSourceNotes.checkedAt}. Reward wording that is unstable
            across current sources stays visible as a note instead of being
            counted as guaranteed inventory.
          </p>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />
        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
