import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import { TraitRerollCalculatorTool } from '@/components/animesquadron/trait-reroll-calculator-tool';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  calculatorSourceNotes,
  traitRateDefaults,
} from '@/data/animesquadron/calculators';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'Are the Anime Squadron trait rates official?',
    answer:
      'No. The defaults are reported rates from guide-site coverage and should stay editable until the live game UI or an official source confirms exact rates.',
  },
  {
    question: 'What does the calculator output mean?',
    answer:
      'It estimates the chance of at least one hit after a chosen number of rolls. It does not guarantee that the next roll or the average roll count will happen on schedule.',
  },
  {
    question: 'When should I stop rerolling traits?',
    answer:
      'Stop when the unit is temporary, when the roll does not solve a current stage wall, or when Perfect Cubes would be better saved for a keeper carry.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Trait Reroll Calculator - Reported Rates',
    description:
      'Estimate Anime Squadron trait reroll odds for Superior, Cloner, Entrepreneur, Rebirth, and other reported trait rates with editable probability inputs.',
    locale,
    pathname: '/trait-reroll-calculator',
    image: '/animesquadron/og-image.png',
  });
}

export default function TraitRerollCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Anime Squadron Trait Reroll Calculator',
        operatingSystem: 'Web',
        applicationCategory: 'GameApplication',
        url: `${officialGameFacts.domain}/trait-reroll-calculator`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Free Anime Squadron trait probability estimator using reported, editable rates.',
        featureList: [
          'Reported trait rate defaults',
          'Editable probability input',
          'Chance and expected-roll calculations',
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Anime Squadron reported trait rates',
        itemListElement: traitRateDefaults.map((trait, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: trait.name,
          description: `${trait.tier} tier, reported ${trait.ratePercent}% rate. ${trait.keepRule}`,
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
          <Badge className="bg-[#37D6D0] text-[#041414]">Reroll Tool</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Trait Reroll Calculator
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Estimate the chance of rolling Superior, Cloner, and other reported
            traits before using Trait Shards, Reroll Cubes, Stat Cubes, or
            Perfect Cubes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/traits">Open traits guide</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/resource-calculator">
                Check resources
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/units">Choose a keeper unit</LocaleLink>
            </Button>
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <TraitRerollCalculatorTool />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            Why the rates are editable
          </h2>
          <p className="mt-3 max-w-3xl text-[#D5C6B7] text-sm leading-7">
            Competitor calculator pages list reported trait rates, but this site
            treats them as planning defaults. Sources checked:{' '}
            {calculatorSourceNotes.reportedRateSources
              .map((source) => source.label)
              .join(', ')}
            .
          </p>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />
        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
