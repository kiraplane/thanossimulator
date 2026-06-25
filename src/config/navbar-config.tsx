'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  CircleDot,
  Download,
  Layers3,
  RadioTower,
  Search,
  Sparkles,
  SquareStack,
  Swords,
  Wrench,
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
          description: 'Beginner, decks, timelines, codes, and beta pages.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description: 'First route for rules, codes, and starter decks.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Priority Guide',
          description: 'Chain, timelines, shifting, and combat windows.',
          href: Routes.PriorityGuide,
          external: false,
          icon: <CircleDot className="size-4" />,
        },
        {
          title: 'Deckbuilding',
          description: 'Divers, syndicates, 40 cards, and list checks.',
          href: Routes.DeckbuildingGuide,
          external: false,
          icon: <Swords className="size-4" />,
        },
      ],
    },
    {
      title: t('rules.title'),
      href: Routes.Rules,
      external: false,
      icon: <CircleDot className="size-4" />,
      items: [
        {
          title: 'Rules Overview',
          description: 'Core, Agents, chain, shifting, and immortalization.',
          href: Routes.Rules,
          external: false,
          icon: <CircleDot className="size-4" />,
        },
        {
          title: 'Syndicates',
          description: 'Pick Lifeblood, Sungrace, Silence, and more.',
          href: Routes.Syndicates,
          external: false,
          icon: <Layers3 className="size-4" />,
        },
      ],
    },
    {
      title: t('cards.title'),
      href: Routes.Cards,
      external: false,
      icon: <SquareStack className="size-4" />,
      items: [
        {
          title: 'Card List',
          description: 'Internal card database and card detail pages.',
          href: Routes.Cards,
          external: false,
          icon: <SquareStack className="size-4" />,
        },
        {
          title: 'Card Finder',
          description: 'Search names, text, costs, types, and syndicates.',
          href: Routes.CardFinder,
          external: false,
          icon: <Search className="size-4" />,
        },
        {
          title: 'Card Guide',
          description: 'How cards differ from decks and tier lists.',
          href: '/guides/card-list-and-deck-builder-guide',
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: t('decks.title'),
      href: Routes.Decks,
      external: false,
      icon: <Swords className="size-4" />,
      items: [
        {
          title: 'Decks',
          description: 'Starter decks and Runeterra.AR deck browser.',
          href: Routes.Decks,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Meta Watch',
          description: 'Open beta tier-list demand without fake final ranks.',
          href: Routes.TierList,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Starter Decks',
          description: 'Sprouts, burn, bleed, control, and value routes.',
          href: Routes.StarterDecksGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
    {
      title: t('tools.title'),
      href: Routes.Tools,
      external: false,
      icon: <Wrench className="size-4" />,
      items: [
        {
          title: 'All Tools',
          description: 'Deck checker, card finder, and curve analyzer.',
          href: Routes.Tools,
          external: false,
          icon: <Wrench className="size-4" />,
        },
        {
          title: 'Deck Checker',
          description: 'Diver access, 40-card count, and copy limits.',
          href: Routes.DeckChecker,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Curve Analyzer',
          description: 'Energy costs, Agents, Actions, and average cost.',
          href: Routes.CurveAnalyzer,
          external: false,
          icon: <RadioTower className="size-4" />,
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
          description: 'Source-checked beta codes and creator-code notes.',
          href: Routes.Codes,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Redeem Guide',
          description: 'Use codes safely inside the official game.',
          href: Routes.CodesGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Updates',
          description: 'Patch 0.6.11, rewards, and no-wipe context.',
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
          title: 'Download',
          description: 'Safe Steam and Epic access.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'Discord',
          description: 'Official community and link safety.',
          href: Routes.Discord,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
  ];
}
