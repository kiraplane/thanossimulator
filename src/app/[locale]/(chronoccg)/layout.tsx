import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { ChronoCcgPageShell } from '@/components/chronoccg/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function ChronoCcgLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0D10]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <ChronoCcgPageShell>{children}</ChronoCcgPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#3B3128] border-t bg-[#0A0D10]" />
      <Footer />
    </div>
  );
}
