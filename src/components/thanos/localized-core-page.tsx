import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { databaseHubCards } from '@/data/thanos/database';
import { guides } from '@/data/thanos/guides';
import type { ThanosLocalizedCoreKey } from '@/data/thanos/localized-core';
import { getThanosLocalizedCoreCopy } from '@/data/thanos/localized-core';
import { getTopicPage } from '@/data/thanos/topics';
import { LocaleLink } from '@/i18n/navigation';

function rowsFor(key: ThanosLocalizedCoreKey) {
  if (key === 'database') {
    return databaseHubCards.map((card) => ({
      title: card.title,
      body: card.body,
      href: card.href,
    }));
  }
  if (key === 'guides') {
    return guides.slice(0, 12).map((guide) => ({
      title: guide.title,
      body: guide.summary,
      href: `/guides/${guide.slug}`,
    }));
  }
  if (key === 'home') {
    return [
      { title: 'Infinity Stones', body: 'Шесть камней, маршруты и способности Перчатки.', href: '/stones' },
      { title: 'Weapons', body: 'Оружие, prerequisites, боссы и фрагменты.', href: '/weapons' },
      { title: 'Database', body: 'Структурированные записи камней, оружия, боссов и зон.', href: '/database' },
      { title: 'Guides', body: 'Пошаговые маршруты и безопасные официальные ссылки.', href: '/guides' },
    ];
  }
  const topic = getTopicPage(key);
  return (topic?.sections ?? []).map((section, index) => ({
    title: section.heading,
    body: section.paragraphs.join(' '),
    href: topic?.featuredRoutes[index] ?? topic?.featuredRoutes[0] ?? '/guides',
  }));
}

export function ThanosLocalizedCorePage({
  locale,
  pageKey,
}: {
  locale: string;
  pageKey: ThanosLocalizedCoreKey;
}) {
  const copy = getThanosLocalizedCoreCopy(locale, pageKey);
  if (!copy) return null;
  const rows = rowsFor(pageKey);

  return (
    <div className="bg-[#080707] py-12 text-[#F7F1E8]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#7A4DD8] text-white">Русский</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">{copy.title}</h1>
          <p className="text-lg leading-8 text-[#D6CCC1]">{copy.description}</p>
        </header>
        <section className="rounded-lg border border-[#40313A] bg-[#171113] p-6">
          <ol className="grid gap-3 text-sm leading-7 text-[#D6CCC1] md:grid-cols-3">
            {copy.steps.map((step, index) => <li key={step}><strong className="text-[#D9B86C]">{index + 1}.</strong> {step}</li>)}
          </ol>
        </section>
        <section className="space-y-4">
          <div><h2 className="font-display text-3xl font-bold">{copy.sectionTitle}</h2><p className="mt-2 text-sm leading-7 text-[#D6CCC1]">{copy.sectionIntro}</p></div>
          <div className="grid gap-4 md:grid-cols-2">
            {rows.map((row) => (
              <article key={`${row.title}-${row.href}`} className="rounded-lg border border-[#40313A] bg-[#171113] p-5">
                <h3 className="font-display text-xl font-bold"><LocaleLink href={row.href}>{row.title}</LocaleLink></h3>
                <p className="mt-3 text-sm leading-7 text-[#D6CCC1]">{row.body}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-[#7A4DD8] text-white"><LocaleLink href="/stones">Камни</LocaleLink></Button>
          <Button asChild variant="outline"><LocaleLink href="/guides">Все гайды</LocaleLink></Button>
        </div>
      </Container>
    </div>
  );
}
