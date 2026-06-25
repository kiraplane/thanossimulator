'use client';

import { Badge } from '@/components/ui/badge';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ChevronDown,
  Compass,
  Gamepad2,
  Trophy,
  Users,
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
    title: 'Core Wiki',
    icon: Gamepad2,
    links: [
      { href: '/codes', label: 'Codes' },
      { href: '/tier-list', label: 'Tier List' },
      { href: '/units', label: 'Units Hub' },
      { href: '/traits', label: 'Traits' },
      { href: '/reroll', label: 'Reroll' },
      { href: '/game-modes', label: 'Game Modes' },
    ],
    activePrefixes: ['/codes', '/tier-list', '/traits', '/reroll'],
  },
  {
    title: 'Tools',
    icon: Calculator,
    links: [
      { href: '/best-team-combo', label: 'Best Team Combo' },
      { href: '/resource-calculator', label: 'Resource Calculator' },
      { href: '/trait-reroll-calculator', label: 'Trait Reroll Calculator' },
      { href: '/woo-pity-calculator', label: 'Woo Pity Calculator' },
      { href: '/secret-units-tracker', label: 'Secret Units Tracker' },
    ],
  },
  {
    title: 'Unit Roles',
    icon: Users,
    links: [
      { href: '/units/roles/main-carry', label: 'Main Carry' },
      { href: '/units/roles/boss-damage', label: 'Boss Damage' },
      { href: '/units/roles/control', label: 'Control' },
      { href: '/units/roles/economy', label: 'Economy' },
      { href: '/units/roles/support', label: 'Support' },
      { href: '/units/roles/starter-filler', label: 'Starter Filler' },
    ],
    activePrefixes: ['/units/roles'],
  },
  {
    title: 'Core Units',
    icon: Trophy,
    links: [
      { href: '/units/gometa-ssj4', label: 'Gometa (SSJ4)' },
      { href: '/units/woo-shadow', label: 'Woo (Shadow)' },
      { href: '/units/madora-gunbai', label: 'Madora (Gunbai)' },
      { href: '/units/berserker-enraged', label: 'Berserker' },
      { href: '/units/puppeteer-transcendent', label: 'Puppeteer' },
      { href: '/units/fastwagon', label: 'Fastwagon' },
      { href: '/units/falcon-dark', label: 'Falcon (Dark)' },
      { href: '/units/shanron-omega', label: 'Shanron (Omega)' },
    ],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/guides/codes-redeem-guide', label: 'Redeem Guide' },
      { href: '/guides/best-units-tier-list', label: 'Units Guide' },
      { href: '/guides/traits-reroll-guide', label: 'Traits Guide' },
      { href: '/guides/infinite-mode-farming-guide', label: 'Infinite Mode' },
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
          ? 'border-[#37D6D0] bg-[#37D6D0] font-semibold text-[#041414]'
          : 'border-[#3A2A24] bg-[#090706] text-[#D5C6B7] hover:border-[#37D6D0] hover:bg-[#1D1511] hover:text-[#FFF5EA]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#041414]' : 'text-[#37D6D0]'
        )}
      />
    </LocaleLink>
  );
}

function AnimeSquadronRouteSidebar({ currentPath }: { currentPath?: string }) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-[#FFF5EA]">
                Anime Squadron routes
              </h2>
            </div>
            <Compass className="size-5 shrink-0 text-[#F3B23A]" />
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
                      ? 'border-[#37D6D0]/60 bg-[#37D6D0]/10'
                      : 'border-[#3A2A24] bg-[#090706]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#FFF5EA] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#F3B23A]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#3A2A24] bg-[#130D0B] px-1.5 py-0.5 text-[#D5C6B7] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#37D6D0] transition group-open:rotate-180" />
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
      </div>
    </aside>
  );
}

export function AnimeSquadronPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#090706]">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <AnimeSquadronRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}
