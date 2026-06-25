import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { updates } from '@/data/chronoccg/updates';
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
    title: 'Chrono CCG Updates - Beta Patch Notes and Rewards',
    description:
      'Track official Chrono CCG open beta updates, Patch 0.6.11, reward emails, creator codes, rules guidance, and Steam release context.',
    locale,
    pathname: '/updates',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function UpdatesPage() {
  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#63E6DD] text-[#051316]">Updates</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Updates
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Official beta and patch notes that change how new players should
            read rules, redeem rewards, test decks, and follow the early meta.
          </p>
          <Button asChild variant="outline">
            <LocaleLink href="/guides/beta-update-rewards-guide">
              Beta Rewards Guide
            </LocaleLink>
          </Button>
        </header>

        <section className="space-y-4">
          {updates.map((update) => (
            <article
              key={update.slug}
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className="border-[#3B3128] text-[#D8CDBA]"
                >
                  {update.publishedAt}
                </Badge>
                <Badge className="bg-[#D9A84E] text-[#151006]">
                  {update.source.type}
                </Badge>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {update.title}
              </h2>
              <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                {update.summary}
              </p>
              <a
                href={update.source.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex font-semibold text-[#63E6DD] text-sm underline underline-offset-4"
              >
                {update.source.label}
              </a>
            </article>
          ))}
        </section>

        <FaqSection
          items={[
            {
              question: 'What is the most important beta update?',
              answer:
                'Patch 0.6.11 opened beta, reset accounts and collections, and says there will be no further wipes.',
            },
            {
              question: 'Where should I check official updates?',
              answer:
                'Start with playchrono.com/news, Steam, Epic, official Discord, and official social channels.',
            },
            {
              question: 'Do updates affect deck guides?',
              answer:
                'Yes. Balance changes, card text changes, and bug fixes can change whether a deck guide is still accurate.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
