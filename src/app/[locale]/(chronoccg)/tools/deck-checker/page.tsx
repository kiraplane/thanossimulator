import { ChronoCcgToolsPage } from '@/components/chronoccg/tools-page';
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
    title: 'Chrono CCG Deck Checker - Diver Syndicates and 40-Card Lists',
    description:
      'Check Chrono CCG deck lists for Diver syndicate access, 40-card main deck count, copy limits, tokens, and Immortalized card faces.',
    locale,
    pathname: '/tools/deck-checker',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function DeckCheckerPage() {
  return <ChronoCcgToolsPage initialTool="deck-checker" />;
}
