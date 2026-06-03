'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('wiki.title'),
      items: [
        {
          title: t('wiki.items.codes'),
          href: Routes.Codes,
          external: false,
        },
        {
          title: t('wiki.items.tierList'),
          href: Routes.TierList,
          external: false,
        },
        {
          title: t('wiki.items.critters'),
          href: Routes.Critters,
          external: false,
        },
        {
          title: t('wiki.items.gameplay'),
          href: Routes.Gameplay,
          external: false,
        },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        {
          title: t('guides.items.all'),
          href: Routes.Guides,
          external: false,
        },
        {
          title: t('guides.items.bestTeam'),
          href: Routes.BestTeam,
          external: false,
        },
        {
          title: t('guides.items.bestTatari'),
          href: Routes.BestTatari,
          external: false,
        },
        {
          title: t('guides.items.updates'),
          href: Routes.Download,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
