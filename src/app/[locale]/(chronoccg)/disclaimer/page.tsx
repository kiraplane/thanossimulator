import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { officialGameFacts } from '@/data/chronoccg/sources';
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
    title: 'Chrono CCG Wiki Disclaimer',
    description:
      'Chrono CCG Wiki disclaimer covering independent guide status, source handling, beta uncertainty, codes, and official trademarks.',
    locale,
    pathname: '/disclaimer',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D9A84E] text-[#151006]">Legal</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Wiki Disclaimer
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Chrono CCG Wiki is an independent guide site for players. It is not
            affiliated with, endorsed by, or operated by{' '}
            {officialGameFacts.publisher}.
          </p>
        </header>

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6 text-[#D8CDBA] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#FFF5E1]">
            Source and beta notes
          </h2>
          <p className="mt-3">
            Public pages use official sources, store pages, the official rules,
            official news, community links, creator videos, and deck browser
            surfaces as reference signals. Chrono CCG is in active beta, so card
            text, deck strength, codes, reward flows, and patch details can
            change quickly.
          </p>
          <p className="mt-3">
            Codes are source-checked when listed, but this site does not claim
            they are game-tested unless explicitly stated. Deck and tier pages
            are player guidance, not official balance statements.
          </p>
          <p className="mt-3">
            Chrono CCG is a trademark of {officialGameFacts.publisher}. All
            trademarks, artwork, store assets, and game names belong to their
            respective owners.
          </p>
        </section>
      </Container>
    </div>
  );
}
