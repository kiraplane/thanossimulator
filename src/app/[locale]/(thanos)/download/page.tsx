import { TopicPage } from '@/components/thanos/topic-page';
import { ThanosLocalizedCorePage } from '@/components/thanos/localized-core-page';
import { getThanosLocalizedCoreCopy } from '@/data/thanos/localized-core';
import { getTopicPage } from '@/data/thanos/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('download');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localized = getThanosLocalizedCoreCopy(locale, 'download');
  return constructMetadata({
    title: localized?.title ?? topic.seoTitle,
    description: localized?.description ?? topic.seoDescription,
    locale,
    pathname: topic.route,
    image: '/thanos/og-image.png',
  });
}

export default async function DownloadPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (locale === 'ru') return <ThanosLocalizedCorePage locale={locale} pageKey="download" />;
  return <TopicPage topic={topic} />;
}
