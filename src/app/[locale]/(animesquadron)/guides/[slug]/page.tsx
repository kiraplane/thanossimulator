import {
  AdsterraAdFrame,
  AdsterraSideRails,
} from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getGuide, guides } from '@/data/animesquadron/guides';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const relatedRouteLabels: Record<string, string> = {
  '/codes': 'Codes',
  '/discord': 'Discord',
  '/download': 'Download',
  '/game-modes': 'Game Modes',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/berserker-guide': 'Berserker Guide',
  '/guides/falcon-guide': 'Falcon Guide',
  '/guides/gacha-bag-reroll-cubes-guide': 'Gacha Bag',
  '/guides/gear-crafting-guide': 'Gear Crafting',
  '/guides/how-to-get-gogeta-gometa': 'Gogeta / Gometa',
  '/guides/secret-units-guide': 'Secret Units',
  '/guides/trait-shards-reroll-cubes-farm': 'Trait Shards Farm',
  '/guides/update-0-5-tier-list': 'UPD 0.5 Tier List',
  '/reroll': 'Reroll',
  '/tier-list': 'Tier List',
  '/traits': 'Traits',
  '/units': 'Units',
  '/updates': 'Updates',
};

function getRelatedRouteLabel(route: string) {
  return (
    relatedRouteLabels[route] ??
    route
      .replace(/^\/+/, '')
      .split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(' ')
      )
      .join(' ')
  );
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
    image: '/animesquadron/og-image.png',
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: `${officialGameFacts.domain}/animesquadron/og-image.png`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Anime Squadron Wiki',
            item: officialGameFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${officialGameFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: `${officialGameFacts.domain}/guides/${guide.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={jsonLd} />
      <AdsterraSideRails />
      <Container className="grid gap-8 px-4 lg:grid-cols-[1fr_300px]">
        <article className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#E03A22] text-[#FFF5EA]">
              {guide.category}
            </Badge>
            <Badge variant="outline" className="border-[#574033] text-white">
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#574033] text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#D5C6B7]">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-[#3A2A24]">
            <Image
              src={guide.coverImageUrl}
              alt={`${guide.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-cover"
            />
          </div>

          {guide.video ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-[#3A2A24] bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="bg-[#090706] px-4 py-3 text-sm text-[#D5C6B7]">
                Walkthrough cross-check:{' '}
                <a
                  href={guide.video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#37D6D0] underline underline-offset-4"
                >
                  {guide.video.title}
                </a>{' '}
                by {guide.video.channel}
              </div>
            </div>
          ) : null}

          <div className="mt-8 space-y-8">
            <AdsterraAdFrame slot="banner-300x250" className="mt-8" label />

            {guide.body.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-base leading-8 text-[#D5C6B7]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-[#D5C6B7]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10">
            <FaqSection items={guide.faq} />
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5">
            <h2 className="font-display text-xl font-bold">Related pages</h2>
            <div className="mt-4 grid gap-2">
              {guide.relatedRoutes.map((route) => (
                <Button
                  key={route}
                  asChild
                  variant="outline"
                  className="justify-start"
                >
                  <LocaleLink href={route}>
                    {getRelatedRouteLabel(route)}
                  </LocaleLink>
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </Container>
    </div>
  );
}
