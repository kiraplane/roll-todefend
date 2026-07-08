import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { RollToDefendPageShell } from '@/components/rolltodefend/wiki-navigation';
import type { ReactNode } from 'react';

export default function RollToDefendLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#10140F]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <RollToDefendPageShell>{children}</RollToDefendPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#3A4F2D] border-t bg-[#10140F]" />
      <Footer />
    </div>
  );
}
