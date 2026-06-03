'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  ClipboardList,
  Download,
  Sparkles,
  Swords,
  Trophy,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <ClipboardList className="size-4" />,
    },
    {
      title: t('tierList.title'),
      href: Routes.TierList,
      external: false,
      icon: <Trophy className="size-4" />,
    },
    {
      title: t('gameplay.title'),
      href: Routes.Gameplay,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: t('team.title'),
      href: Routes.BestTeam,
      external: false,
      icon: <Swords className="size-4" />,
    },
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
    },
  ];
}
