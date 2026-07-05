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
      <main className="flex-1">
        <RollToDefendPageShell>{children}</RollToDefendPageShell>
      </main>
      <Footer />
    </div>
  );
}
