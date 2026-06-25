'use client';

import { Badge } from '@/components/ui/badge';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleDot,
  Compass,
  Download,
  Layers3,
  ListChecks,
  RadioTower,
  ShieldQuestion,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';

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
      { href: '/rules', label: 'Rules' },
      { href: '/download', label: 'Download' },
      { href: '/codes', label: 'Codes' },
    ],
  },
  {
    title: 'Core Wiki',
    icon: Layers3,
    links: [
      { href: '/syndicates', label: 'Syndicates' },
      { href: '/decks', label: 'Decks' },
      { href: '/cards', label: 'Card List' },
      { href: '/tier-list', label: 'Meta Watch' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    links: [
      { href: '/tools', label: 'All Tools' },
      { href: '/tools/card-finder', label: 'Card Finder' },
      { href: '/tools/deck-checker', label: 'Deck Checker' },
      { href: '/tools/curve-analyzer', label: 'Curve Analyzer' },
    ],
    activePrefixes: ['/tools'],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/syndicates-guide', label: 'Syndicates Guide' },
      { href: '/guides/diver-deckbuilding-guide', label: 'Diver Deckbuilding' },
      { href: '/guides/timeline-priority-guide', label: 'Priority Guide' },
      { href: '/guides/starter-decks-guide', label: 'Starter Decks' },
      { href: '/guides/codes-redeem-guide', label: 'Redeem Codes' },
    ],
    activePrefixes: ['/guides'],
  },
  {
    title: 'Live Beta',
    icon: RadioTower,
    links: [
      { href: '/updates', label: 'Updates' },
      { href: '/discord', label: 'Discord' },
      { href: '/guides/beta-update-rewards-guide', label: 'Beta Rewards' },
      { href: '/guides/steam-epic-download-guide', label: 'Steam / Epic' },
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
          ? 'border-[#63E6DD] bg-[#63E6DD] font-semibold text-[#051316]'
          : 'border-[#3B3128] bg-[#0A0D10] text-[#D8CDBA] hover:border-[#63E6DD] hover:bg-[#191612] hover:text-[#FFF5E1]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#051316]' : 'text-[#D9A84E]'
        )}
      />
    </LocaleLink>
  );
}

export function ChronoCcgMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#3B3128] bg-[#14100D] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#FFF5E1] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#63E6DD]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#D9A84E]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#D9A84E] text-xs uppercase">
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

export function ChronoCcgRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#FFF5E1] text-xl font-bold">
                Chrono CCG routes
              </h2>
            </div>
            <CircleDot className="size-5 shrink-0 text-[#D9A84E]" />
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
                      ? 'border-[#63E6DD]/60 bg-[#123436]/45'
                      : 'border-[#3B3128] bg-[#0A0D10]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#FFF5E1] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#D9A84E]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#3B3128] bg-[#14100D] px-1.5 py-0.5 text-[#D8CDBA] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#63E6DD] transition group-open:rotate-180" />
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
        <div className="rounded-lg border border-[#3B3128] bg-[#0A0D10] p-4 text-[#D8CDBA] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#FFF5E1]">
            <ShieldQuestion className="size-4 text-[#63E6DD]" />
            Beta reminder
          </div>
          Use official rules, Steam, Epic, Discord, and Runeterra.AR for live
          facts. Treat early tier lists as weekly signals.
        </div>
      </div>
    </aside>
  );
}

export function ChronoCcgPageShell({ children }: { children: ReactNode }) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#0A0D10]">
      <ChronoCcgMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <ChronoCcgRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}
