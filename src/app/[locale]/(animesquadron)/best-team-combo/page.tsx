import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { BestTeamComboTool } from '@/components/animesquadron/best-team-combo-tool';
import { FaqSection } from '@/components/animesquadron/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { unitTierRankings } from '@/data/animesquadron/tier-list';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'Is this Anime Squadron best team combo calculator exact?',
    answer:
      'No. It is a conservative squad planner that uses current role, tier, and confidence data. Exact damage, cooldown, evolution, and trait math should be checked in-game before spending rare materials.',
  },
  {
    question: 'Which team goal should beginners choose first?',
    answer:
      'Use Beginner clears until your account has one stable carry, then switch to Farm faster or Boss pressure depending on the stage that blocks you.',
  },
  {
    question: 'Should I reroll traits when the score is high?',
    answer:
      'Only reroll when the selected unit is a long-term carry or boss-damage target and the current stage wall is actually solved by better traits or stats.',
  },
  {
    question: 'Why can role-guide slots appear in the picker?',
    answer:
      'Role-guide slots are fallbacks for players who do not own the named unit yet. They keep the planning focused on squad jobs rather than forcing a fake exact lineup.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Best Team Combo - Squad Planner',
    description:
      'Build an Anime Squadron team combo or squad planner setup with carry, control, boss pressure, support, and farm slots using UPD 0.5 role guidance.',
    locale,
    pathname: '/best-team-combo',
    image: '/animesquadron/og-image.png',
  });
}

export default function BestTeamComboPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Anime Squadron Best Team Combo',
        operatingSystem: 'Web',
        applicationCategory: 'GameApplication',
        url: `${officialGameFacts.domain}/best-team-combo`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Free Anime Squadron squad planner for role coverage, synergy tags, and conservative team-building decisions.',
        featureList: [
          'Goal-based Anime Squadron squad scoring',
          'Carry, control, boss pressure, support, and farm slot planning',
          'Squad planner intent coverage without a duplicate URL',
          'UPD 0.5 unit and role guidance',
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Anime Squadron team combo candidates',
        itemListElement: unitTierRankings.map((entry, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: entry.name,
          description: entry.reason,
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
          <Badge className="bg-[#37D6D0] text-[#041414]">Team Tool</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Best Team Combo
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Build a practical squad by goal: early clears, farming, boss
            pressure, rank push, or trait investment. The planner rewards role
            coverage and source-checked unit fit instead of pretending exact
            damage math is already stable.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/tier-list">Open tier list</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/units">Unit roles</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/resource-calculator">
                Resource calculator
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/codes">Redeem codes first</LocaleLink>
            </Button>
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <BestTeamComboTool />

        <section className="grid gap-4 rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold">
              Use roles before names
            </h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              A strong lineup needs damage, stability, support, and the right
              flex slot. A rare unit still needs to solve the run in front of
              you.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">
              Treat the score as a checklist
            </h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              The score highlights missing jobs and tags. Test placement and
              upgrade order before spending Perfect Cubes, Trait Shards, or stat
              rerolls.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Switch by goal</h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              Farming teams can value Fastwagon-style economy. Boss and rank
              teams usually need more pressure, control, or survivability.
            </p>
          </div>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
