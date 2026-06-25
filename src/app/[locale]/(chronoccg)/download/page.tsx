import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/chronoccg/sources';
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
    title: 'Chrono CCG Download - Play Free on Steam or Epic',
    description:
      'Download Chrono CCG safely through official Steam or Epic store pages. Learn open beta status and avoid fake mobile, APK, mod, or private-server links.',
    locale,
    pathname: '/download',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function DownloadPage() {
  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#63E6DD] text-[#051316]">Download</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Download
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Chrono CCG is free to play in open beta on official PC store pages.
            Use Steam or Epic and avoid APKs, mod clients, private servers, or
            unofficial launchers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
            >
              <a
                href={officialGameFacts.steamUrl}
                target="_blank"
                rel="noreferrer"
              >
                Steam
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={officialGameFacts.epicUrl}
                target="_blank"
                rel="noreferrer"
              >
                Epic Games
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/steam-epic-download-guide">
                Download Guide
              </LocaleLink>
            </Button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Steam',
              body: 'Steam lists Chrono CCG as released June 23, 2026 and free to play.',
              href: officialGameFacts.steamUrl,
            },
            {
              title: 'Epic Games',
              body: 'Epic lists the base game as free Early Access.',
              href: officialGameFacts.epicUrl,
            },
            {
              title: 'Official Website',
              body: 'The official site links Steam, Epic, rules, cards, decks, Discord, and news.',
              href: officialGameFacts.officialWebsite,
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5 hover:border-[#63E6DD]"
            >
              <h2 className="font-display text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                {item.body}
              </p>
            </a>
          ))}
        </section>

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
          <h2 className="font-display text-2xl font-bold">
            Mobile and APK searches
          </h2>
          <p className="mt-3 max-w-3xl text-[#D8CDBA] text-sm leading-7">
            Serper autocomplete shows mobile demand, but the official sources
            checked for this build focus on Steam and Epic. This wiki will not
            publish APK, hacked client, private server, or unofficial mobile
            workarounds.
          </p>
        </section>

        <FaqSection
          items={[
            {
              question: 'Is Chrono CCG free?',
              answer:
                'Yes. Steam lists it as free to play, and Epic lists the base game as free Early Access.',
            },
            {
              question: 'Does Chrono CCG have mobile?',
              answer:
                'Current official sources checked for this site focus on Steam and Epic. Mobile is a watch item, not a confirmed page.',
            },
            {
              question: 'Should I use a third-party installer?',
              answer:
                'No. Use Steam, Epic, or official links from playchrono.com.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
