'use client';

import { Badge } from '@/components/ui/badge';
import { codeCheckSummary, watchCodes } from '@/data/thanos/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  type BookOpen,
  ChevronDown,
  CircleHelp,
  Compass,
  Database,
  Download,
  Gamepad2,
  Gem,
  Hammer,
  ListChecks,
  Map,
  RadioTower,
  ShieldQuestion,
  Swords,
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
      { href: '/download', label: 'Official Roblox' },
      { href: '/updates', label: 'Update 3.2' },
    ],
  },
  {
    title: 'Tools',
    icon: ListChecks,
    links: [
      { href: '/tools', label: 'Tools Hub' },
      { href: '/tools/boss-checklist', label: 'Boss Checklist' },
      { href: '/tools/weapon-planner', label: 'Weapon Planner' },
      { href: '/tools/infinity-stones-tracker', label: 'Stones Tracker' },
    ],
    activePrefixes: ['/tools'],
  },
  {
    title: 'Database',
    icon: Database,
    links: [
      { href: '/database', label: 'Database Hub' },
      { href: '/database/stones', label: 'Stones Data' },
      { href: '/database/weapons', label: 'Weapons Data' },
      { href: '/database/bosses', label: 'Bosses Data' },
      { href: '/database/zones', label: 'Zones Data' },
    ],
    activePrefixes: ['/database'],
  },
  {
    title: 'Stones',
    icon: Gem,
    links: [
      { href: '/stones', label: 'Stones Hub' },
      { href: '/guides/all-infinity-stones-guide', label: 'All Stones Guide' },
      { href: '/guides/tempad-route-guide', label: 'Tempad Route' },
      { href: '/guides/tesseract', label: 'Tesseract Guide' },
      { href: '/guides/gauntlet-controls-guide', label: 'Gauntlet Controls' },
      { href: '/map', label: 'Map Routes' },
    ],
  },
  {
    title: 'Weapons',
    icon: Hammer,
    links: [
      { href: '/weapons', label: 'Weapons Hub' },
      {
        href: '/guides/weapons-progression-guide',
        label: 'Weapon Progression',
      },
      { href: '/guides/stormbreaker-mjolnir-guide', label: 'Stormbreaker' },
      { href: '/guides/gungnir-fragments-guide', label: 'Gungnir' },
    ],
  },
  {
    title: 'Bosses',
    icon: Swords,
    links: [
      { href: '/bosses', label: 'Bosses Hub' },
      { href: '/guides/mechanical-gloves-doom-guide', label: 'Doom Gloves' },
      { href: '/guides/surtur-twilight-sword-guide', label: 'Surtur Sword' },
      { href: '/guides/heart-of-ymir-guide', label: 'Heart of Ymir' },
    ],
  },
  {
    title: 'Safety',
    icon: RadioTower,
    links: [
      { href: '/codes', label: 'Codes Status' },
      {
        href: '/guides/codes-and-scripts-safety-guide',
        label: 'Codes and Scripts Safety',
      },
      { href: '/controls', label: 'Controls Hub' },
      { href: '/guides', label: 'All Guides' },
    ],
    activePrefixes: ['/guides'],
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
          ? 'border-[#F6C453] bg-[#F6C453] font-semibold text-[#120C05]'
          : 'border-[#3A2D4E] bg-[#080611] text-[#C6BCD8] hover:border-[#F6C453] hover:bg-[#1D1530] hover:text-[#F8F1FF]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#120C05]' : 'text-[#57D68D]'
        )}
      />
    </LocaleLink>
  );
}

function CodesSidebarCard() {
  return (
    <div className="rounded-lg border border-[#3A2D4E] bg-[#080611] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-[#F8F1FF] text-lg">
          Codes Status
        </h2>
        <Badge className="bg-[#F6C453] text-[#120C05]">0 active</Badge>
      </div>
      <p className="text-[#C6BCD8] text-xs leading-5">
        {codeCheckSummary.status}
      </p>
      <div className="mt-4 space-y-3">
        {watchCodes.slice(0, 2).map((item) => (
          <div key={item.code} className="rounded-md bg-[#151024] p-3">
            <p className="break-words font-semibold text-[#F8F1FF] text-sm">
              {item.code}
            </p>
            <p className="mt-1 line-clamp-2 text-[#C6BCD8] text-xs leading-5">
              watch term, not verified code
            </p>
          </div>
        ))}
      </div>
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-[#3A2D4E] border-t pt-3 font-medium text-[#D9D3E8] text-sm transition hover:text-[#F6C453]"
      >
        View codes status
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function ThanosMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#3A2D4E] bg-[#151024] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#F8F1FF] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#F6C453]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#57D68D]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#57D68D] text-xs uppercase">
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

export function ThanosRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#57D68D] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#F8F1FF] text-xl font-bold">
                Route map
              </h2>
            </div>
            <Map className="size-5 shrink-0 text-[#F6C453]" />
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
                      ? 'border-[#F6C453]/70 bg-[#332615]/50'
                      : 'border-[#3A2D4E] bg-[#080611]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#F8F1FF] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#57D68D]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#3A2D4E] bg-[#151024] px-1.5 py-0.5 text-[#C6BCD8] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#F6C453] transition group-open:rotate-180" />
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
        <CodesSidebarCard />
        <div className="rounded-lg border border-[#3A2D4E] bg-[#080611] p-4 text-[#C6BCD8] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#F8F1FF]">
            <ShieldQuestion className="size-4 text-[#F6C453]" />
            Roblox reminder
          </div>
          Verify place ID 3261957210 before trusting codes, downloads, scripts,
          or location data. This site does not provide executors or auto-farm
          shortcuts.
        </div>
      </div>
    </aside>
  );
}

export function ThanosPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#080611]">
      <ThanosMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <ThanosRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  codes: RadioTower,
  stones: Gem,
  weapons: Hammer,
  bosses: Swords,
  map: Map,
  controls: Gamepad2,
  tools: ListChecks,
  database: Database,
  download: Download,
  safety: CircleHelp,
};
