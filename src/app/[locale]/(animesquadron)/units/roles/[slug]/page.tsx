import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import {
  ConfidenceBadge,
  TierBadge,
  UnitTierBadge,
} from '@/components/animesquadron/status-badge';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/animesquadron/sources';
import {
  unitRoleRankings,
  unitTierRankings,
} from '@/data/animesquadron/tier-list';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

function getRole(slug: string) {
  return unitRoleRankings.find((role) => role.slug === slug);
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    unitRoleRankings.map((role) => ({ locale, slug: role.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const role = getRole(slug);

  if (!role) {
    return {};
  }

  return constructMetadata({
    title: `Anime Squadron ${role.role} Units - Role Guide`,
    description: `${role.decision} Compare Anime Squadron ${role.role.toLowerCase()} units, upgrade timing, reroll cost, and best modes.`,
    locale,
    pathname: `/units/roles/${slug}`,
    image: '/animesquadron/og-image.png',
  });
}

export default async function UnitRolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);

  if (!role) {
    notFound();
  }

  const matchingUnits = unitTierRankings.filter((unit) =>
    unit.roleFit.includes(role.role)
  );
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `Anime Squadron ${role.role} Units`,
        description: role.decision,
        dateModified: '2026-06-25',
        image: `${officialGameFacts.domain}/animesquadron/og-image.png`,
      },
      {
        '@type': 'ItemList',
        name: `Anime Squadron ${role.role} units`,
        itemListElement: matchingUnits.map((unit, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: unit.name,
          description: unit.reason,
        })),
      },
    ],
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#37D6D0] text-[#041414]">Unit Role</Badge>
            <TierBadge tier={role.tier} />
            <ConfidenceBadge confidence={role.sourceConfidence} />
          </div>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron {role.role} Units
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">{role.decision}</p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/best-team-combo">Use squad planner</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/units">Back to units</LocaleLink>
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

        <section className="grid gap-4 rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold">Early value</h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              {role.earlyValue}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Long-term value</h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              {role.longTermValue}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Reroll cost</h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              {role.rerollCost}
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">Build notes</h2>
          <ul className="mt-4 space-y-2 text-[#D5C6B7] text-sm leading-7">
            {role.buildNotes.map((note) => (
              <li key={note}>- {note}</li>
            ))}
          </ul>
          <p className="mt-4 text-[#F3B23A] text-sm leading-7">
            Avoid: {role.avoid}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl font-bold">
            Matching named units
          </h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {matchingUnits.map((unit) => (
              <article
                key={unit.slug}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
              >
                <div className="flex flex-wrap gap-2">
                  <UnitTierBadge tier={unit.tier} />
                  <ConfidenceBadge confidence={unit.sourceConfidence} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {unit.name}
                </h3>
                <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
                  {unit.reason}
                </p>
                <Button asChild variant="outline" className="mt-5">
                  <LocaleLink href={`/units/${unit.slug}`}>
                    Open unit page
                  </LocaleLink>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />
      </Container>
    </div>
  );
}
