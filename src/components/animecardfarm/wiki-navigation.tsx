'use client';

import { Badge } from '@/components/ui/badge';
import { activeCodes } from '@/data/animecardfarm/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  Copy,
  Download,
  Layers3,
  ListChecks,
  RadioTower,
  ShieldQuestion,
  Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
  activePrefixes?: string[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/codes', label: 'Codes' },
      { href: '/download', label: 'Official Roblox' },
    ],
  },
  {
    title: 'Progression',
    icon: Layers3,
    links: [
      { href: '/packs', label: 'Packs' },
      { href: '/cards', label: 'Cards' },
      { href: '/mutations', label: 'Mutations' },
      { href: '/guides/best-cards-watch-guide', label: 'Best Cards Watch' },
    ],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/codes-redeem-guide', label: 'Redeem Codes' },
      { href: '/guides/packs-and-upgrades-guide', label: 'Packs & Upgrades' },
      { href: '/guides/offline-money-guide', label: 'Offline Money' },
      { href: '/guides/mutations-and-traits-guide', label: 'Traits Guide' },
      { href: '/guides/wrong-game-codes-guide', label: 'Wrong-Game Safety' },
    ],
    activePrefixes: ['/guides'],
  },
  {
    title: 'Live Status',
    icon: RadioTower,
    links: [
      { href: '/updates', label: 'Updates' },
      { href: '/discord', label: 'Discord & Group' },
      { href: '/guides/wrong-game-codes-guide', label: 'Name Confusion' },
    ],
  },
] as const;

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  if (!currentPath) {
    return false;
  }

  return (
    group.links.some((link) => isCurrentPath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#67F7D3] bg-[#67F7D3] font-semibold text-[#07101C]'
          : 'border-[#27415F] bg-[#080D17] text-[#B8C8D8] hover:border-[#67F7D3] hover:bg-[#14243A] hover:text-[#F6FBFF]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#07101C]' : 'text-[#FFD35C]'
        )}
      />
    </LocaleLink>
  );
}

function SidebarCodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Copy ${code}`}
      className="rounded-sm p-1 text-[#B8C8D8] transition hover:bg-[#14243A] hover:text-[#67F7D3]"
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      }}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}

function ActiveCodesSidebarCard() {
  return (
    <div className="rounded-lg border border-[#27415F] bg-[#080D17] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-[#F6FBFF] text-lg">
          Active Codes
        </h2>
        <Badge className="bg-[#FF4FD8] text-[#07101C]">
          {activeCodes.length}
        </Badge>
      </div>
      <div className="space-y-3">
        {activeCodes.slice(0, 5).map((item) => (
          <div
            key={item.code}
            className="flex items-start justify-between gap-3"
          >
            <div className="min-w-0">
              <p className="break-all font-mono font-semibold text-[#F6FBFF] text-sm">
                {item.code}
              </p>
              <p className="mt-1 line-clamp-2 text-[#B8C8D8] text-xs leading-5">
                {item.reward}
              </p>
            </div>
            <SidebarCodeCopyButton code={item.code} />
          </div>
        ))}
      </div>
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-[#27415F] border-t pt-3 font-medium text-[#D7E7F5] text-sm transition hover:text-[#67F7D3]"
      >
        View all codes
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function AnimeCardFarmMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#27415F] bg-[#101827] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#F6FBFF] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#67F7D3]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#FFD35C]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#FFD35C] text-xs uppercase">
              <group.icon className="size-4" />
              {group.title}
            </p>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function AnimeCardFarmRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#27415F] bg-[#101827] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#67F7D3] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#F6FBFF] text-xl font-bold">
                Farm routes
              </h2>
            </div>
            <Sparkles className="size-5 shrink-0 text-[#FFD35C]" />
          </div>

          <div className="mt-4 space-y-4">
            {wikiNavGroups.map((group) => {
              const isGroupActive = isGroupCurrentPath(currentPath, group);

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#67F7D3]/60 bg-[#123E45]/45'
                      : 'border-[#27415F] bg-[#080D17]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#F6FBFF] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#FFD35C]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#27415F] bg-[#101827] px-1.5 py-0.5 text-[#B8C8D8] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#67F7D3] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
        <ActiveCodesSidebarCard />
        <div className="rounded-lg border border-[#27415F] bg-[#080D17] p-4 text-[#B8C8D8] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#F6FBFF]">
            <ShieldQuestion className="size-4 text-[#67F7D3]" />
            Roblox reminder
          </div>
          Verify codes and card facts against Anime Card Farm by dream without
          the vale. Anime Card Clash and Anime Card Collection are different
          games.
        </div>
      </div>
    </aside>
  );
}

export function AnimeCardFarmPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#080D17]">
      <AnimeCardFarmMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <AnimeCardFarmRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  codes: Sparkles,
  packs: Boxes,
  cards: Layers3,
  download: Download,
  safety: CircleHelp,
};
