'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  CircleHelp,
  Download,
  Map,
  RadioTower,
  Shield,
  Sparkles,
  TimerReset,
  Trophy,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description: 'Beginner, units, zones, luck, codes, and safety.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description: 'First route for rolls, units, zones, and income.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'How to Play',
          description: 'The core roll, defend, earn, and expand loop.',
          href: Routes.HowToPlayGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Offline Money',
          description: 'Prepare your best money setup before leaving Roblox.',
          href: Routes.OfflineIncomeGuide,
          external: false,
          icon: <TimerReset className="size-4" />,
        },
        {
          title: 'Scripts Warning',
          description: 'Avoid auto-roll scripts, fake keys, and reward traps.',
          href: Routes.FakeScriptsGuide,
          external: false,
          icon: <Shield className="size-4" />,
        },
      ],
    },
    {
      title: t('units.title'),
      href: Routes.Units,
      external: false,
      icon: <Trophy className="size-4" />,
      items: [
        {
          title: 'Units Wiki',
          description: 'Roles, ranking criteria, and source confidence.',
          href: Routes.Units,
          external: false,
          icon: <Trophy className="size-4" />,
        },
        {
          title: 'Best Units Watch',
          description: 'Safe tier-list alternative while data is thin.',
          href: Routes.BestUnitsGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Tier List Watch',
          description: 'Ranking criteria without invented unit stats.',
          href: Routes.TierList,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
    {
      title: t('zones.title'),
      href: Routes.Zones,
      external: false,
      icon: <Map className="size-4" />,
      items: [
        {
          title: 'Zones',
          description: 'Expansion timing and upgrade decisions.',
          href: Routes.Zones,
          external: false,
          icon: <Map className="size-4" />,
        },
        {
          title: 'Zones Guide',
          description: 'When to buy zones and when to upgrade first.',
          href: Routes.ZonesGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Luck',
          description: 'Friend luck, group bonus, and roll timing.',
          href: Routes.Luck,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Planner',
          description: 'Compare rolling, upgrading, zones, and waiting.',
          href: Routes.Planner,
          external: false,
          icon: <CircleHelp className="size-4" />,
        },
      ],
    },
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <Sparkles className="size-4" />,
      items: [
        {
          title: 'Codes',
          description: 'Current verified status and safe source checks.',
          href: Routes.Codes,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Redeem Guide',
          description: 'How to verify new codes before trusting lists.',
          href: Routes.CodesGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Updates',
          description: 'Roblox update signals and code freshness.',
          href: Routes.Updates,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
      items: [
        {
          title: 'Official Roblox',
          description: 'Open the correct Roll to Defend page.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'Discord',
          description: 'Discord, Trello, and source-check safety.',
          href: Routes.Discord,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
  ];
}
