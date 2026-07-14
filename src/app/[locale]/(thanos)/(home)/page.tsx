import { ThanosHomePage } from '@/components/thanos/home-page';
import { ThanosLocalizedCorePage } from '@/components/thanos/localized-core-page';
import { getThanosLocalizedCoreCopy } from '@/data/thanos/localized-core';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const localized = getThanosLocalizedCoreCopy(locale, 'home');

  return constructMetadata({
    title:
      localized?.title ??
      'Thanos Simulator Wiki - Infinity Stones, Weapons and Guide',
    description:
      localized?.description ??
      'Thanos Simulator Wiki covers all Infinity Stones, controls, weapons, bosses, Update 3.2, codes safety, and the official Roblox page.',
    locale,
    pathname: '',
    image: '/thanos/og-image.png',
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (locale === 'ru') return <ThanosLocalizedCorePage locale={locale} pageKey="home" />;
  return <ThanosHomePage />;
}
