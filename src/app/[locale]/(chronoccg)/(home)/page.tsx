import { ChronoCcgHomePage } from '@/components/chronoccg/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Chrono CCG Wiki - Guides, Codes, Decks and Rules',
    description:
      'Chrono CCG Wiki covers open beta rules, Divers, Timelines, syndicates, decks, card lists, codes, Steam and Epic access.',
    locale,
    pathname: '',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function HomePage() {
  return <ChronoCcgHomePage />;
}
