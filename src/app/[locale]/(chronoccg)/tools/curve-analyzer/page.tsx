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
    title: 'Chrono CCG Curve Analyzer - Energy Costs, Agents and Actions',
    description:
      'Analyze Chrono CCG deck curves by energy cost, Agent count, Action count, and average known card cost.',
    locale,
    pathname: '/tools/curve-analyzer',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function CurveAnalyzerPage() {
  return <ChronoCcgToolsPage initialTool="curve-analyzer" />;
}
