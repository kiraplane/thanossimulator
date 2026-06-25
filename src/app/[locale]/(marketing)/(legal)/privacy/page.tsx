import Container from '@/components/layout/container';
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
    title: 'Privacy Policy | Chrono CCG Wiki',
    description:
      'Privacy policy for the unofficial Chrono CCG Wiki and guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0F1117] py-12 text-[#F8FAFC]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#CBD5E1]">
          Chrono CCG Wiki is an unofficial fan guide. We do not require accounts
          for browsing codes status, tier lists, dragon profiles, guides,
          campaign notes, resource pages, or alliance pages.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Local image assets are used for faster page loading. We do not sell
          asset files or provide downloads as standalone packs.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Privacy questions can be sent to hello@chronoccg.wiki.
        </p>
      </Container>
    </div>
  );
}
