'use client';

import { Badge } from '@/components/ui/badge';
import { activeCodes } from '@/data/rolltodefend/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  Copy,
  Download,
  ListChecks,
  Map,
  RadioTower,
  ShieldQuestion,
  Sparkles,
  Trophy,
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
    title: 'Units',
    icon: Trophy,
    links: [
      { href: '/units', label: 'Units Wiki' },
      { href: '/tier-list', label: 'Tier List Watch' },
      { href: '/guides/best-units-watch-guide', label: 'Best Units Watch' },
      { href: '/guides/luck-and-group-bonus-guide', label: 'Luck Guide' },
    ],
  },
  {
    title: 'Progression',
    icon: Map,
    links: [
      { href: '/zones', label: 'Zones' },
      { href: '/luck', label: 'Luck' },
      { href: '/planner', label: 'Roll Planner' },
      { href: '/guides/zones-and-upgrades-guide', label: 'Zones Guide' },
      { href: '/guides/offline-income-guide', label: 'Offline Income' },
    ],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/how-to-play', label: 'How to Play' },
      { href: '/guides/codes-status-guide', label: 'Codes Status' },
      { href: '/guides/fake-scripts-warning', label: 'Scripts Warning' },
      { href: '/guides/latest-update-checklist', label: 'Update Checklist' },
    ],
    activePrefixes: ['/guides'],
  },
  {
    title: 'Live Status',
    icon: RadioTower,
    links: [
      { href: '/updates', label: 'Updates' },
      { href: '/discord', label: 'Discord & Trello' },
      { href: '/download', label: 'Official Roblox' },
      { href: '/guides/discord-trello-safety-guide', label: 'Link Safety' },
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
          ? 'border-[#B7F44A] bg-[#B7F44A] font-semibold text-[#10140F]'
          : 'border-[#3A4F2D] bg-[#10140F] text-[#DCE9D2] hover:border-[#B7F44A] hover:bg-[#25351F] hover:text-[#F9FFF1]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#10140F]' : 'text-[#F5B642]'
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
      className="rounded-sm p-1 text-[#DCE9D2] transition hover:bg-[#25351F] hover:text-[#B7F44A]"
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
  const hasActiveCodes = activeCodes.length > 0;

  return (
    <div className="rounded-lg border border-[#3A4F2D] bg-[#10140F] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-[#F9FFF1] text-lg">
          Codes Status
        </h2>
        <Badge className="bg-[#74D4FF] text-[#10140F]">
          {hasActiveCodes ? activeCodes.length : 'Watch'}
        </Badge>
      </div>
      {hasActiveCodes ? (
        <div className="space-y-3">
          {activeCodes.slice(0, 5).map((item) => (
            <div
              key={item.code}
              className="flex items-start justify-between gap-3"
            >
              <div className="min-w-0">
                <p className="break-all font-mono font-semibold text-[#F9FFF1] text-sm">
                  {item.code}
                </p>
                <p className="mt-1 line-clamp-2 text-[#DCE9D2] text-xs leading-5">
                  {item.reward}
                </p>
              </div>
              <SidebarCodeCopyButton code={item.code} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#DCE9D2] text-sm leading-6">
          No verified working public codes yet. Check the status page before
          trusting reposted lists.
        </p>
      )}
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-[#3A4F2D] border-t pt-3 font-medium text-[#DCE9D2] text-sm transition hover:text-[#B7F44A]"
      >
        View all codes
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function RollToDefendMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#3A4F2D] bg-[#182215] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#F9FFF1] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#B7F44A]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#F5B642]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#F5B642] text-xs uppercase">
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

export function RollToDefendRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#B7F44A] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#F9FFF1] text-xl font-bold">
                Defense routes
              </h2>
            </div>
            <Sparkles className="size-5 shrink-0 text-[#F5B642]" />
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
                      ? 'border-[#B7F44A]/60 bg-[#263B20]/45'
                      : 'border-[#3A4F2D] bg-[#10140F]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#F9FFF1] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#F5B642]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#3A4F2D] bg-[#182215] px-1.5 py-0.5 text-[#DCE9D2] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#B7F44A] transition group-open:rotate-180" />
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
        <div className="rounded-lg border border-[#3A4F2D] bg-[#10140F] p-4 text-[#DCE9D2] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#F9FFF1]">
            <ShieldQuestion className="size-4 text-[#B7F44A]" />
            Roblox reminder
          </div>
          Verify codes and unit facts against Roll to Defend by D:/Drive. Script
          pages and copied Trello boards are not official sources.
        </div>
      </div>
    </aside>
  );
}

export function RollToDefendPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#10140F]">
      <RollToDefendMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <RollToDefendRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  codes: Sparkles,
  units: Trophy,
  zones: Map,
  luck: Sparkles,
  planner: CircleHelp,
  download: Download,
  safety: CircleHelp,
};
