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
    title: 'Chrono CCG Card Finder - Search Cards by Name, Text and Syndicate',
    description:
      'Search Chrono CCG card names, effect text, card types, costs, rarities, and syndicates using the wiki card database.',
    locale,
    pathname: '/tools/card-finder',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function CardFinderPage() {
  return <ChronoCcgToolsPage initialTool="card-finder" />;
}
