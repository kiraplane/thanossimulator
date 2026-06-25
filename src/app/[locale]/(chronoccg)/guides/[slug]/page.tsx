import {
  AdsterraAdFrame,
  AdsterraSideRails,
} from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getGuide, guides, relatedRouteLabels } from '@/data/chronoccg/guides';
import { officialGameFacts } from '@/data/chronoccg/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
    image: '/chronoccg/og-image.jpg',
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
        image: `${officialGameFacts.domain}/chronoccg/og-image.jpg`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Chrono CCG Wiki',
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
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <JsonLd data={jsonLd} />
      <AdsterraSideRails />
      <Container className="grid gap-8 px-4 lg:grid-cols-[1fr_300px]">
        <article className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#B8442A] text-[#FFF5E1]">
              {guide.category}
            </Badge>
            <Badge
              variant="outline"
              className="border-[#3B3128] text-[#D8CDBA]"
            >
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#3B3128] text-[#D8CDBA]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-[#D8CDBA] text-lg leading-8">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-[#3B3128]">
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
            <div className="mt-8 overflow-hidden rounded-lg border border-[#3B3128] bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="bg-[#0A0D10] px-4 py-3 text-[#D8CDBA] text-sm">
                Walkthrough cross-check:{' '}
                <a
                  href={guide.video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#63E6DD] underline underline-offset-4"
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
                <div className="mt-3 space-y-4 text-[#D8CDBA] text-base leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-[#D8CDBA] text-sm leading-7">
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
          <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
            <h2 className="font-display text-xl font-bold">Related pages</h2>
            <div className="mt-4 grid gap-2">
              {guide.relatedRoutes.map((route) => (
                <Button
                  key={route}
                  asChild
                  variant="outline"
                  className="h-auto min-w-0 justify-start whitespace-normal text-left"
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
