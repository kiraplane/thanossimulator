import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/chronoccg/guides';
import { officialGameFacts } from '@/data/chronoccg/sources';
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
    title: 'Chrono CCG Guides - Beginner, Decks, Codes and Timelines',
    description:
      'Read Chrono CCG guides for beginner routes, syndicates, Diver deckbuilding, timeline priority, starter decks, beta codes, card lists, and safe downloads.',
    locale,
    pathname: '/guides',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chrono CCG Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#63E6DD] text-[#051316]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Guides
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Decision-first guides for open beta rules, Divers, Timelines,
            syndicates, starter decks, source-checked codes, card list paths,
            Steam and Epic access, and beta patch rewards.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3B3128] bg-[#14100D] py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#3B3128] bg-[#14100D]"
            >
              <div className="relative aspect-video border-[#3B3128] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D10]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#B8442A] text-[#FFF5E1]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#3B3128] text-[#D8CDBA]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#3B3128] text-[#D8CDBA]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#D8CDBA] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#63E6DD] text-[#051316] hover:bg-[#92FFF5]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which Chrono CCG guide should I read first?',
              answer:
                'Start with the beginner guide, then read rules, syndicates, starter decks, codes, and deckbuilding once you understand priority and timelines.',
            },
            {
              question: 'Do guides rely on official sources?',
              answer:
                'Core facts come from the official site, official rules, Steam, Epic, official news, and Runeterra.AR when it is linked from the official navigation.',
            },
            {
              question: 'Why is the tier list called Meta Watch?',
              answer:
                'The beta is fresh and balance can move quickly. The site tracks strong deck signals without pretending there is a final solved card ranking.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
