import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import { TierListTable } from '@/components/animesquadron/tier-list-table';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { unitRoleRankings } from '@/data/animesquadron/tier-list';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'What is the best Anime Squadron unit?',
    answer:
      'Early data is still forming, so the safest answer is the unit that acts as your main carry and clears the next wave or boss wall.',
  },
  {
    question: 'Why does this tier list rank roles?',
    answer:
      'Role rankings avoid inventing unit-name data while Anime Squadron is still in early access. They still tell you where to spend first.',
  },
  {
    question: 'Should I reroll a support unit first?',
    answer:
      'Usually no. Build a carry first, then invest in support once you know exactly which clear it improves.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Tier List - Best Units and Role Priority',
    description:
      'Early Anime Squadron tier list for main carry, boss damage, control, economy, support, and starter filler roles, with reroll and spending advice.',
    locale,
    pathname: '/tier-list',
    image: '/animesquadron/og-image.png',
  });
}

export default function TierListPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: unitRoleRankings.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.role,
      description: entry.decision,
    })),
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={itemList} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Tier List</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Tier List
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            A launch-stage priority list for the unit jobs that matter most: one
            carry first, then boss damage, control, economy, or support when the
            mode asks for it.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">Ranking rules</h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            <p>
              <strong className="text-[#FFF5EA]">Early value:</strong> whether
              the role helps your first serious wave and boss clears.
            </p>
            <p>
              <strong className="text-[#FFF5EA]">Reroll cost:</strong> whether
              the role deserves scarce reroll materials now or later.
            </p>
            <p>
              <strong className="text-[#FFF5EA]">Confidence:</strong> whether
              the recommendation is official, cross-checked, or still pending
              launch data.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/units">Open units guide</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/traits">Plan traits</LocaleLink>
            </Button>
          </div>
        </section>

        <TierListTable />
        <AdsterraAdFrame slot="banner-300x250" label />

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
