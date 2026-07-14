import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { ThanosLocalizedCorePage } from '@/components/thanos/localized-core-page';
import { getThanosLocalizedCoreCopy } from '@/data/thanos/localized-core';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqSection } from '@/components/thanos/faq-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/thanos/guides';
import { officialGameFacts } from '@/data/thanos/sources';
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
  const localized = getThanosLocalizedCoreCopy(locale, 'guides');
  return constructMetadata({
    title:
      localized?.title ??
      'Thanos Simulator Guides - Stones, Weapons, Bosses and Controls',
    description:
      localized?.description ??
      'Read Thanos Simulator guides for all Infinity Stones, gauntlet controls, weapons, Doom, Surtur, Heart of Ymir, Gungnir, codes safety, and official Roblox links.',
    locale,
    pathname: '/guides',
    image: '/thanos/og-image.png',
  });
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (locale === 'ru') return <ThanosLocalizedCorePage locale={locale} pageKey="guides" />;
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Thanos Simulator Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Guides
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Decision-first Roblox guides for all Infinity Stones, gauntlet
            controls, weapon progression, Doom and Mechanical Gloves, Surtur,
            Heart of Ymir, Gungnir, code safety, and official access.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2D4E] bg-[#151024] py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#C6BCD8] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#3A2D4E] bg-[#151024]"
            >
              <div className="relative aspect-video border-[#3A2D4E] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080611]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#F6C453] text-[#120C05]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#3A2D4E] text-[#C6BCD8]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#3A2D4E] text-[#C6BCD8]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#C6BCD8] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
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
              question: 'Which Thanos Simulator guide should I read first?',
              answer:
                'Start with the beginner guide, then read the all Infinity Stones guide and the gauntlet controls guide.',
            },
            {
              question: 'Why is there no hard weapon tier list?',
              answer:
                'Search evidence exists, but current source confidence supports weapon progression routes more than fixed rankings.',
            },
            {
              question: 'Are guide facts official?',
              answer:
                'Official facts come from Roblox and Roblox API data. Routes are cross-checked from current public community and video sources and marked conservatively.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
