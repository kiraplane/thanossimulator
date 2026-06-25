import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import { WooPityCalculatorTool } from '@/components/animesquadron/woo-pity-calculator-tool';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  bannerDefaults,
  bannerTargetDefaults,
} from '@/data/animesquadron/calculators';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'Is the Woo pity calculator official?',
    answer:
      'No. It uses reported banner defaults and user-editable fields. Always change the inputs if the live Anime Squadron banner UI shows different cost, pity, or rate values.',
  },
  {
    question: 'Does pity guarantee Woo?',
    answer:
      'Reported Mythic pity usually means a Mythic result, not necessarily the exact unit you want. Use the Woo rate as a separate estimate.',
  },
  {
    question: 'Should I spend all Gems on Woo?',
    answer:
      'Only if Woo is the unit that improves your current carry or boss plan. Otherwise, build a stable squad first and save enough resources for upgrades and rerolls.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Woo Pity Calculator - Banner Pull Planner',
    description:
      'Estimate Anime Squadron Woo banner pulls, Gem cost, reported Mythic pity, and target-unit chance with editable rate and pity inputs.',
    locale,
    pathname: '/woo-pity-calculator',
    image: '/animesquadron/og-image.png',
  });
}

export default function WooPityCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Anime Squadron Woo Pity Calculator',
        operatingSystem: 'Web',
        applicationCategory: 'GameApplication',
        url: `${officialGameFacts.domain}/woo-pity-calculator`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Free Anime Squadron banner pull and pity estimator for Woo and Mythic targets.',
        featureList: [
          'Editable Gems per pull',
          'Editable Mythic pity target',
          'Woo and Any Mythic reported-rate presets',
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Anime Squadron banner target presets',
        itemListElement: bannerTargetDefaults.map((target, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: target.label,
          description: `${target.ratePercent}% reported rate. ${target.helper}`,
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
          <Badge className="bg-[#37D6D0] text-[#041414]">Banner Tool</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Woo Pity Calculator
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Plan Gems, reported Mythic pity, and Woo pull odds before chasing a
            banner target. Every probability field is editable because public
            banner data can change.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/units/woo-shadow">Open Woo page</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/resource-calculator">
                Check Gem budget
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/best-team-combo">Plan team fit</LocaleLink>
            </Button>
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <WooPityCalculatorTool />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            Reported model defaults
          </h2>
          <p className="mt-3 max-w-3xl text-[#D5C6B7] text-sm leading-7">
            The default model starts at {bannerDefaults.gemCostPerPull} Gems per
            pull and {bannerDefaults.mythicPity} pulls for reported Mythic pity.
            These are planning defaults from {bannerDefaults.sourceLabel}, not
            official values.
          </p>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />
        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
