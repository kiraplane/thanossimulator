import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { syndicates } from '@/data/chronoccg/syndicates';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title:
      'Chrono CCG Syndicates Guide - Lifeblood, Sungrace, Silence and More',
    description:
      'Compare Chrono CCG syndicates by game plan: Lifeblood growth, Sungrace burn, Silence control, Singularity engines, Splintergleam combat, and Phasetide flow.',
    locale,
    pathname: '/syndicates',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function SyndicatesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chrono CCG Syndicates',
    itemListElement: syndicates.map((syndicate, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: syndicate.name,
    })),
  };

  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D9A84E] text-[#151006]">Syndicates</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Syndicates
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Chrono CCG has six syndicates. Pick by game plan first, then choose
            Divers that make the plan sharper instead of mixing identities just
            because the cards look strong.
          </p>
          <Button asChild variant="outline">
            <LocaleLink href="/guides/syndicates-guide">
              Which Syndicate Guide
            </LocaleLink>
          </Button>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {syndicates.map((syndicate) => (
            <article
              key={syndicate.slug}
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={syndicate.icon}
                  alt={`${syndicate.name} icon`}
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    {syndicate.name}
                  </h2>
                  <p className="text-[#D9A84E] text-sm">{syndicate.tagline}</p>
                </div>
              </div>
              <p className="mt-4 text-[#D8CDBA] text-sm leading-7">
                {syndicate.gamePlan}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {syndicate.goodFor.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-[#3B3128] text-[#D8CDBA]"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 rounded-md border border-[#3B3128] bg-[#0A0D10] p-4">
                <p className="font-semibold text-[#F7E7C9]">Caution</p>
                <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                  {syndicate.caution}
                </p>
              </div>
            </article>
          ))}
        </section>

        <FaqSection
          items={[
            {
              question: 'Which Chrono CCG syndicate should beginners play?',
              answer:
                'Lifeblood and Sungrace are the clearest starting points because their board-growth and pressure plans are easy to see.',
            },
            {
              question: 'Can a deck use two syndicates?',
              answer:
                'Yes. Your Divers define the syndicates available to the deck. The second syndicate should support the first plan.',
            },
            {
              question: 'Which syndicate is best for control players?',
              answer:
                'Silence and Phasetide fit control-minded players, but they reward priority and chain knowledge.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
