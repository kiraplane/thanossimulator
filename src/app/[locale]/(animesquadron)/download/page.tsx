import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/animesquadron/sources';
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
    title: 'Anime Squadron Download - Official Roblox Link and Safety',
    description:
      'Play Anime Squadron safely through the official Roblox page by Komplex Studio. Avoid unsafe APKs, scripts, executors, and copied clients.',
    locale,
    pathname: '/download',
    image: '/animesquadron/og-image.png',
  });
}

export default function DownloadPage() {
  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Download</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Download
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Anime Squadron is a Roblox experience. The safe play route is the
            official Roblox game page, not APK mirrors, scripts, executors, or
            copied clients.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-300x250"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            Official Roblox link
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
            Verify the creator as {officialGameFacts.developer}, place id{' '}
            {officialGameFacts.rootPlaceId}, and universe id{' '}
            {officialGameFacts.universeId}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Anime Squadron on Roblox
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/safe-download-roblox-guide">
                Safety guide
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Do',
              body: 'Use Roblox, verify Komplex Studio, and redeem codes inside the game only.',
            },
            {
              title: 'Avoid',
              body: 'External APKs, modified clients, executors, scripts, and forms that ask for account details.',
            },
            {
              title: 'Check',
              body: 'Title, creator, place id, and whether the link matches the official Roblox page.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <h2 className="font-display text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <FaqSection
          items={[
            {
              question: 'Can I download Anime Squadron as an APK?',
              answer:
                'No safe standalone APK route is verified. Play through Roblox using the official game page.',
            },
            {
              question: 'Does this site provide Anime Squadron scripts?',
              answer:
                'No. This site does not provide scripts, exploits, executors, or modified clients.',
            },
            {
              question: 'Where do I redeem codes?',
              answer:
                'Redeem codes inside Anime Squadron after joining the official Roblox experience.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
