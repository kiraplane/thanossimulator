import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import {
  ConfidenceBadge,
  TierBadge,
} from '@/components/animesquadron/status-badge';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { unitRoleRankings } from '@/data/animesquadron/tier-list';
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
    title: 'Anime Squadron Units - Roles, Best Units and Upgrade Priority',
    description:
      'Plan Anime Squadron units by role: main carry, boss damage, control, economy, support, and starter filler, with early upgrade and reroll cautions.',
    locale,
    pathname: '/units',
    image: '/animesquadron/og-image.png',
  });
}

export default function UnitsPage() {
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
          <Badge className="bg-[#37D6D0] text-[#041414]">Units</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Units
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Until verified unit-name data is stable, use this page to decide
            which unit job deserves your first upgrades, traits, and stat
            rerolls.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {unitRoleRankings.map((entry) => (
            <article
              key={entry.slug}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <TierBadge tier={entry.tier} />
                <ConfidenceBadge confidence={entry.sourceConfidence} />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {entry.role}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                {entry.decision}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.bestFor.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-[#574033] text-[#FFF5EA]"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#D5C6B7]">
                {entry.buildNotes.map((note) => (
                  <li key={note}>- {note}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-7 text-[#F3B23A]">
                Avoid: {entry.avoid}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
          >
            <LocaleLink href="/tier-list">Open tier list</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/guides/best-units-tier-list">
              Read units guide
            </LocaleLink>
          </Button>
        </div>
        <AdsterraAdFrame slot="banner-300x250" label />

        <FaqSection
          items={[
            {
              question: 'Does Anime Squadron have verified unit rankings yet?',
              answer:
                'Public early-access data is still thin, so this site ranks unit roles until exact unit data can be verified.',
            },
            {
              question: 'Which role should I build first?',
              answer:
                'Build one main carry first because it improves wave clears, farming, and early reward access.',
            },
            {
              question: 'When do support units matter?',
              answer:
                'Support matters after you know which carry or mode it improves.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
