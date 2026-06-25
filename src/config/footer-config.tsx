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
          title: t('wiki.items.rules'),
          href: Routes.Rules,
          external: false,
        },
        {
          title: t('wiki.items.syndicates'),
          href: Routes.Syndicates,
          external: false,
        },
        {
          title: t('wiki.items.decks'),
          href: Routes.Decks,
          external: false,
        },
        {
          title: t('wiki.items.cards'),
          href: Routes.Cards,
          external: false,
        },
        {
          title: t('wiki.items.tools'),
          href: Routes.Tools,
          external: false,
        },
        {
          title: t('wiki.items.codes'),
          href: Routes.Codes,
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
          title: t('guides.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('guides.items.priority'),
          href: Routes.PriorityGuide,
          external: false,
        },
        {
          title: t('guides.items.deckbuilding'),
          href: Routes.DeckbuildingGuide,
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
