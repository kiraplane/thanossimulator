import { activeCodes } from './codes';
import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/animecardfarm/hero.jpg';

export const topicPages: Record<string, TopicPage> = {
  packs: {
    route: '/packs',
    label: 'Packs',
    eyebrow: 'Pack Route',
    title: 'Anime Card Farm Packs and Upgrades',
    seoTitle: 'Anime Card Farm Packs - Upgrade Cards and Buy Better Packs',
    seoDescription:
      'Use Anime Card Farm packs as an upgrade ladder: open packs, upgrade income cards, move into better packs, and save mutation decisions for keeper cards.',
    summary:
      'Packs are the main progress ladder in Anime Card Farm. Use them to replace weak cards, raise income, and reach the next pack tier without draining your account.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/packs-and-upgrades-guide',
      '/guides/offline-money-guide',
      '/guides/mutations-and-traits-guide',
    ],
    sections: [
      {
        heading: 'Use packs to improve income, not just collection size',
        paragraphs: [
          'The official Roblox page frames Anime Card Farm around opening packs, upgrading cards, buying more epic packs, and finding rare mutated cards. The best pack route turns each purchase into better money generation. If a pack tier stops replacing your current earners, pause and upgrade instead of forcing more pulls.',
          'A pack is most useful when it gives a new best earner, a card with a stronger upgrade path, or a mutation that changes the decision. If you only receive cards that sit below your current setup, your money is probably better spent strengthening the cards you already use.',
        ],
      },
      {
        heading: 'Move pack tiers when recovery is fast',
        paragraphs: [
          'A higher pack should not leave the account empty for a long time. Move up when your upgraded cards and offline money can recover the purchase quickly. Staying one tier too low is slower, but jumping too early can trap you with one expensive pull and no upgrade budget.',
          'Use codes and potions to support a pack session, then return to the income loop. Rewards are a boost, not a replacement for upgrade discipline.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best pack in Anime Card Farm?',
        answer:
          'The best pack is the highest pack your income can afford repeatedly while still leaving upgrade money for useful cards.',
      },
      {
        question: 'When should I stop opening the same pack?',
        answer:
          'Stop when several pulls no longer improve your earning setup, then upgrade current cards or save toward the next tier.',
      },
    ],
  },
  cards: {
    route: '/cards',
    label: 'Cards',
    eyebrow: 'Card Progress',
    title: 'Anime Card Farm Cards and Best Card Signals',
    seoTitle: 'Anime Card Farm Cards - Best Cards, Income and Upgrade Signals',
    seoDescription:
      'Evaluate Anime Card Farm cards by income, upgrade cost, mutation value, replacement risk, and current source confidence instead of copied tier lists.',
    summary:
      'Anime Card Farm does not yet have enough reliable public data for a complete card database, so this hub focuses on how to judge cards safely.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/best-cards-watch-guide',
      '/guides/mutations-and-traits-guide',
      '/guides/packs-and-upgrades-guide',
    ],
    sections: [
      {
        heading: 'Judge cards by what they do for your money loop',
        paragraphs: [
          'The public game description confirms that cards are upgraded to earn more money. That makes income the first card signal. A card that looks rare but does not move money, pack access, or mutation value should not automatically absorb all upgrades.',
          'Until official or in-game card tables are available, this site avoids a fake card database. Use the best-cards watch guide to compare income, mutation value, upgrade cost, and replacement risk.',
        ],
      },
      {
        heading: 'Why the site does not publish copied Anime Card Clash ranks',
        paragraphs: [
          'Current search results for Anime Card Farm tier list often show Anime Card Clash tier lists instead. Those cards and systems are not the same game. This hub keeps the route live for player intent but avoids presenting wrong-game ranks as facts.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Anime Card Farm Wiki have a full card list?',
        answer:
          'Not yet. A full card list needs reliable Anime Card Farm-specific data. The current page focuses on safe evaluation criteria.',
      },
      {
        question: 'What makes a card good?',
        answer:
          'Income gain, mutation or trait value, upgrade payback, and low replacement risk are the best early signals.',
      },
    ],
  },
  mutations: {
    route: '/mutations',
    label: 'Mutations',
    eyebrow: 'Boosted Cards',
    title: 'Anime Card Farm Mutations and Traits',
    seoTitle:
      'Anime Card Farm Mutations - Traits, Trait Gems and Boosted Cards',
    seoDescription:
      'Learn how to treat Anime Card Farm mutations, trait gems, boosted cards, and upgrade decisions while exact mutation tables are still thin.',
    summary:
      'Mutated cards can create strong boosts, but trait gems and upgrade money should follow cards that stay useful.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/mutations-and-traits-guide',
      '/guides/best-cards-watch-guide',
      '/codes',
    ],
    sections: [
      {
        heading: 'Mutation changes the question, not the whole plan',
        paragraphs: [
          'The Roblox page explicitly highlights rare mutated cards with big boosts. That makes mutation a priority topic, but not every mutated card should become your permanent investment. Compare the mutated card against current income, upgrade cost, and pack tier before spending deeper.',
        ],
      },
      {
        heading: 'Trait gems need source confidence',
        paragraphs: [
          `Current code sources list ${activeCodes.length} reported active Anime Card Farm codes, including rewards tied to potions and trait gems. Spend those resources after you know which card is worth keeping, not the moment the reward appears.`,
        ],
      },
    ],
    faq: [
      {
        question: 'Are mutation values listed here official?',
        answer:
          'No. The official page confirms rare mutated cards, but exact mutation tables are not published here until reliable game-specific data is available.',
      },
      {
        question: 'Should I spend trait gems on my first rare card?',
        answer:
          'Only if that card improves income and is not about to be replaced by your next pack tier.',
      },
    ],
  },
  download: {
    route: '/download',
    label: 'Roblox',
    eyebrow: 'Official Access',
    title: 'Anime Card Farm Roblox Page and Safe Play Links',
    seoTitle: 'Anime Card Farm Roblox - Official Game Page and Safe Links',
    seoDescription:
      'Open Anime Card Farm safely through the official Roblox page, check creator and place ID details, and avoid fake APKs, scripts, or wrong-game downloads.',
    summary:
      'Use the official Roblox experience for Anime Card Farm. The correct creator is dream without the vale and the place ID is 125039473548047.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/beginner-guide', '/codes', '/discord'],
    sections: [
      {
        heading: 'Use Roblox as the source of truth',
        paragraphs: [
          `The official game page is ${officialGameFacts.officialRobloxUrl}. It lists Anime Card Farm as a live Roblox experience by the group ${officialGameFacts.creatorName}, with Simulation/Tycoon genre data from the Roblox API.`,
          'Avoid APK mirrors, script executors, private-server pages, or downloads that claim to automate pack farming. Roblox account safety matters more than any shortcut.',
        ],
      },
      {
        heading: 'Check the name before following guides',
        paragraphs: [
          'The official description welcomes players to Anime Card Factory, while the Roblox URL and public title use Anime Card Farm. That is normal for this game. What is not safe is importing Anime Card Clash or Anime Card Collection codes just because the search result looks similar.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Anime Card Farm free?',
        answer:
          'It is a Roblox experience. Open it through the official Roblox page and follow Roblox account/payment prompts only inside Roblox.',
      },
      {
        question: 'Does this site provide APK or script links?',
        answer: 'No. This site only links official Roblox and community pages.',
      },
    ],
  },
  discord: {
    route: '/discord',
    label: 'Discord',
    eyebrow: 'Community Links',
    title: 'Anime Card Farm Discord, Group and Official Links',
    seoTitle: 'Anime Card Farm Discord - Roblox Group and Official Links',
    seoDescription:
      'Find safe Anime Card Farm community links, Roblox group context, Discord caution, and where to verify new codes or updates.',
    summary:
      'Use community links as update signals, but verify codes and mechanics against the official Roblox page and current in-game behavior.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/download', '/codes', '/updates'],
    sections: [
      {
        heading: 'Use community links for updates and code checks',
        paragraphs: [
          'The official Roblox page asks players to like the game and join the group for updates. Public code pages also point players toward Discord-style update checking. That makes community links useful, especially when code spellings conflict.',
          'Community posts are still signals, not final truth. If a code, mutation claim, or pack strategy appears only once with no current support, treat it as watch material until it is confirmed in-game or by multiple reliable sources.',
        ],
      },
      {
        heading: 'Avoid fake support and reward pages',
        paragraphs: [
          'A real community link should not ask for your Roblox password outside Roblox. Do not install browser extensions or executors for rewards, and do not join copycat servers that claim guaranteed pack farming.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where should I check new Anime Card Farm codes?',
        answer:
          'Check the official Roblox group or Discord first, then compare with current code pages before trusting reposted lists.',
      },
      {
        question: 'Is this site official?',
        answer:
          'No. It is an independent guide site and does not represent the Roblox developer group.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Live Status',
    title: 'Anime Card Farm Updates and Code Check Log',
    seoTitle: 'Anime Card Farm Updates - Roblox Version, Codes and Watchlist',
    seoDescription:
      'Track Anime Card Farm official Roblox update signals, code check dates, source conflicts, and guide changes without inventing patch notes.',
    summary:
      'Anime Card Farm is a live Roblox game, and the official page changed recently. This page records verified update signals and what they mean for the wiki.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/codes', '/guides/best-cards-watch-guide', '/discord'],
    sections: [
      {
        heading: 'Official Roblox update signal',
        paragraphs: [
          `Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports the experience was last updated at ${officialGameFacts.updatedAt}. The public title includes an update marker, but the game page does not expose detailed patch notes in the checked public data.`,
          'Because the official signal is thin, this site updates player-facing guides only when the mechanic or code evidence is strong enough. Large tools, exact card tables, and mutation values remain watch items until reliable data exists.',
        ],
      },
      {
        heading: 'Current code freshness result',
        paragraphs: [
          'Codes demand is active and supported by several current sources. POTIONS is high-confidence. TRAITS! is listed with medium confidence because a singular TRAIT! variant appears on some pages. The conflict is tracked instead of silently hidden.',
        ],
      },
    ],
    faq: [
      {
        question: 'Did the site find official patch notes?',
        answer:
          'No detailed official patch notes were found in public Roblox data during this pass. The page records the Roblox update timestamp instead.',
      },
      {
        question: 'Will guides change after updates?',
        answer:
          'Yes. Codes, mutation advice, pack strategy, and card evaluation should be refreshed when official or well-cross-checked sources change.',
      },
    ],
  },
};

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: keyof typeof topicPages) {
  return topicPages[key];
}
