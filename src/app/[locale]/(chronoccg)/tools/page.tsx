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
    title: 'Chrono CCG Tools - Deck Checker, Card Finder and Curve Analyzer',
    description:
      'Use Chrono CCG Wiki tools to search cards, check Diver syndicate access, validate 40-card deck lists, and analyze energy curves.',
    locale,
    pathname: '/tools',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function ToolsPage() {
  return <ChronoCcgToolsPage initialTool="deck-checker" />;
}
