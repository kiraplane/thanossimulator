import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/animesquadron/guides';
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
    title: 'Anime Squadron Guides - Codes, Units, Traits, Rerolls',
    description:
      'Read Anime Squadron guides for beginner progression, codes, unit tier list decisions, traits, stat rerolls, Gems, Gold, game modes, Discord, and safe Roblox links.',
    locale,
    pathname: '/guides',
    image: '/animesquadron/og-image.png',
  });
}

export default function GuidesPage() {
  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Guides
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Decision-first guides for UPD 0.5 units, Gogeta/Gometa, Falcon,
            Berserker, gear crafting, active codes, traits, rerolls, farming,
            game modes, Discord links, and safe Roblox access.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#3A2A24] bg-[#130D0B]"
            >
              <div className="relative aspect-video border-[#3A2A24] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090706]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#E03A22] text-[#FFF5EA]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#574033] text-white"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#574033] text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#D5C6B7]">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#37D6D0] text-[#041414] hover:bg-[#6DF2ED]"
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
              question: 'Which Anime Squadron guide should I read first?',
              answer:
                'Start with the beginner guide, then open codes, tier list, traits, and reroll pages before spending scarce launch rewards.',
            },
            {
              question: 'Do guides include verified unit names?',
              answer:
                'Only when source data supports them. Early pages use role-based recommendations to avoid fake unit rankings.',
            },
            {
              question: 'Do guides include walkthrough support?',
              answer:
                'Yes. Core guides include selected walkthrough embeds when they help explain progression, unit roles, codes, or account planning.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
