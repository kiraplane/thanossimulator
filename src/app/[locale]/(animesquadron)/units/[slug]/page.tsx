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
import { featuredUnitPageSlugs } from '@/data/animesquadron/calculators';
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

function getUnit(slug: string) {
  return unitTierRankings.find((unit) => unit.slug === slug);
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    featuredUnitPageSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const unit = getUnit(slug);

  if (!unit) {
    return {};
  }

  return constructMetadata({
    title: `Anime Squadron ${unit.name} - Unit Guide and Role Fit`,
    description: `${unit.reason} See Anime Squadron ${unit.name} roles, aliases, investment timing, cautions, and related squad planner links.`,
    locale,
    pathname: `/units/${slug}`,
    image: '/animesquadron/og-image.png',
  });
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unit = getUnit(slug);

  if (!unit) {
    notFound();
  }

  const matchingRoles = unitRoleRankings.filter((role) =>
    unit.roleFit.includes(role.role)
  );
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `Anime Squadron ${unit.name}`,
        description: unit.reason,
        dateModified: '2026-06-25',
        image: `${officialGameFacts.domain}/animesquadron/og-image.png`,
      },
      {
        '@type': 'ItemList',
        name: `${unit.name} role fit`,
        itemListElement: matchingRoles.map((role, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: role.role,
          description: role.decision,
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
            <Badge className="bg-[#37D6D0] text-[#041414]">Unit Guide</Badge>
            <UnitTierBadge tier={unit.tier} />
            <ConfidenceBadge confidence={unit.sourceConfidence} />
          </div>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron {unit.name}
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">{unit.reason}</p>
          <p className="text-[#F3B23A] text-sm uppercase tracking-wide">
            Also searched as: {unit.aliases.join(', ')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/best-team-combo">
                Test in team combo
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/secret-units-tracker">
                Secret unit tracker
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/trait-reroll-calculator">
                Trait odds
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
            <h2 className="font-display text-2xl font-bold">Role fit</h2>
            <div className="mt-3 flex flex-wrap gap-2">
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
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Best for</h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              {unit.bestFor.join(', ')}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Tier</h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              {unit.tier} with {unit.sourceConfidence} source confidence
            </p>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
            <h2 className="font-display text-2xl font-bold">When to invest</h2>
            <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
              {unit.investWhen}
            </p>
          </article>
          <article className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
            <h2 className="font-display text-2xl font-bold">What to avoid</h2>
            <p className="mt-3 text-[#F3B23A] text-sm leading-7">
              {unit.caution}
            </p>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl font-bold">
            Related role guides
          </h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {matchingRoles.map((role) => (
              <article
                key={role.slug}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
              >
                <div className="flex flex-wrap gap-2">
                  <TierBadge tier={role.tier} />
                  <ConfidenceBadge confidence={role.sourceConfidence} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {role.role}
                </h3>
                <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
                  {role.decision}
                </p>
                <Button asChild variant="outline" className="mt-5">
                  <LocaleLink href={`/units/roles/${role.slug}`}>
                    Open role page
                  </LocaleLink>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">Source labels</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {unit.sourceLabels.map((label) => (
              <Badge
                key={label}
                variant="outline"
                className="border-[#574033] text-[#FFF5EA]"
              >
                {label}
              </Badge>
            ))}
          </div>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />
      </Container>
    </div>
  );
}
