import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function AnimeSquadronLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#090706]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">{children}</main>
      <AdsterraNativeBanner className="border-[#3A2A24] border-t bg-[#090706]" />
      <Footer />
    </div>
  );
}
