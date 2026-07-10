import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  beginner: {
    id: '82KAKWuWysU',
    title: 'Starting OVER In Infinity Gauntlet Thanos Simulator...(EP 1)',
    channel: 'MartyZealous',
    url: 'https://www.youtube.com/watch?v=82KAKWuWysU',
    thumbnailUrl: youtubeThumbnail('82KAKWuWysU'),
    publishedAt: '2025',
    viewCountLabel: 'Popular progression series at discovery',
    checkedAt: CHECKED_AT,
  },
  stones2026: {
    id: 'EmS1GAj91SE',
    title:
      'How To Get ALL Infinity Stones in Thanos Simulator Roblox (Full Guide) 2026',
    channel: 'NeonShadeX',
    url: 'https://www.youtube.com/watch?v=EmS1GAj91SE',
    thumbnailUrl: youtubeThumbnail('EmS1GAj91SE'),
    publishedAt: '2026',
    viewCountLabel: 'Recent all-stones guide result',
    checkedAt: CHECKED_AT,
  },
  doom: {
    id: '7mxq-ImMj3g',
    title: 'Fighting Dr DOOM In Infinity Gauntlet Thanos Simulator...',
    channel: 'MartyZealous',
    url: 'https://www.youtube.com/watch?v=7mxq-ImMj3g',
    thumbnailUrl: youtubeThumbnail('7mxq-ImMj3g'),
    publishedAt: '2026-07',
    viewCountLabel: 'Fresh Update 3.2 guide result',
    checkedAt: CHECKED_AT,
  },
  upgrades: {
    id: 'kO-M2ytmDUg',
    title: 'Forging All New UPGRADES In Infinity Gauntlet Thanos Simulator...',
    channel: 'MartyZealous',
    url: 'https://www.youtube.com/watch?v=kO-M2ytmDUg',
    thumbnailUrl: youtubeThumbnail('kO-M2ytmDUg'),
    publishedAt: '2025',
    viewCountLabel: 'Upgrade/weapon route reference',
    checkedAt: CHECKED_AT,
  },
  gungnir: {
    id: 'VO2By5KIyrg',
    title:
      "Forging The All-Father's GUNGNIR In Infinity Gauntlet Thanos Simulator...",
    channel: 'MartyZealous',
    url: 'https://www.youtube.com/watch?v=VO2By5KIyrg',
    thumbnailUrl: youtubeThumbnail('VO2By5KIyrg'),
    publishedAt: '2026',
    viewCountLabel: 'Gungnir forging guide result',
    checkedAt: CHECKED_AT,
  },
  stormbreaker: {
    id: 'QofcwDoDYLE',
    title: 'Forging STORM BREAKER In Infinity Gauntlet Thanos Simulator...',
    channel: 'MartyZealous',
    url: 'https://www.youtube.com/watch?v=QofcwDoDYLE',
    thumbnailUrl: youtubeThumbnail('QofcwDoDYLE'),
    publishedAt: '2025',
    viewCountLabel: 'Stormbreaker progression reference',
    checkedAt: CHECKED_AT,
  },
  ymir: {
    id: 'Duci-XtxZt0',
    title:
      'Defeating The Celestial And Unlocking The Heart of Ymir In Infinity Gauntlet Thanos Simulator',
    channel: 'MartyZealous',
    url: 'https://www.youtube.com/watch?v=Duci-XtxZt0',
    thumbnailUrl: youtubeThumbnail('Duci-XtxZt0'),
    publishedAt: '2023',
    viewCountLabel: 'Legacy endgame route reference',
    checkedAt: CHECKED_AT,
  },
  surtur: {
    id: '1x1cpAJfsts',
    title:
      'How To Get Surturs Sword Full Tutorial In Infinity Gauntlet Simulator',
    channel: 'AlphaLux',
    url: 'https://www.youtube.com/watch?v=1x1cpAJfsts',
    thumbnailUrl: youtubeThumbnail('1x1cpAJfsts'),
    publishedAt: '2024',
    viewCountLabel: 'Twilight Sword route reference',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const localCover = '/thanos/hero.png';
const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start with stone collection, safe combat habits, and route discipline before chasing rare endgame weapons.',
  Stones:
    'Find the six Infinity Stones, understand which ones come from obbies, and which ones depend on NPC or drop progress.',
  Controls:
    'Map keybinds and ability combinations so the gauntlet feels intentional instead of random button mashing.',
  Weapons:
    'Plan weapon unlocks around real prerequisites, boss gates, fragments, and forge requirements.',
  Bosses:
    'Treat Surtur, Eson, Lazarus, Doom, and special NPCs as route checks with required gear, not raw DPS walls only.',
  Map: 'Use the main map, Catacombs, World5, Lunar World, Forge, trials, and temple routes without losing the next objective.',
  Codes:
    'Track code demand honestly while keeping unverified code lists and script pages away from player-safe advice.',
  Safety:
    'Avoid executors, account-risk shortcuts, fake download pages, and copied exploit snippets.',
  Updates:
    'Follow official update signals, especially Update 3.2 with Doom and Mechanical Glove.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Thanos Simulator Wiki',
  '/codes': 'Codes Status',
  '/guides': 'All Thanos Simulator Guides',
  '/stones': 'Infinity Stones Hub',
  '/weapons': 'Weapons Hub',
  '/bosses': 'Bosses Hub',
  '/map': 'Map Routes',
  '/controls': 'Controls Hub',
  '/download': 'Official Roblox Page',
  '/updates': 'Update 3.2 Tracker',
  '/tools': 'Tools Hub',
  '/tools/boss-checklist': 'Boss Checklist',
  '/tools/weapon-planner': 'Weapon Planner',
  '/tools/infinity-stones-tracker': 'Stones Tracker',
  '/database': 'Wiki Database',
  '/database/stones': 'Stones Database',
  '/database/weapons': 'Weapons Database',
  '/database/bosses': 'Bosses Database',
  '/database/zones': 'Zones Database',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/all-infinity-stones-guide': 'All Infinity Stones',
  '/guides/gauntlet-controls-guide': 'Gauntlet Controls',
  '/guides/mechanical-gloves-doom-guide': 'Mechanical Gloves and Doom',
  '/guides/weapons-progression-guide': 'Weapons Progression',
  '/guides/surtur-twilight-sword-guide': 'Surtur and Twilight Sword',
  '/guides/heart-of-ymir-guide': 'Heart of Ymir',
  '/guides/stormbreaker-mjolnir-guide': 'Stormbreaker and Mjolnir',
  '/guides/gungnir-fragments-guide': 'Gungnir and Fragments',
  '/guides/tempad-route-guide': 'Tempad Route',
  '/guides/codes-and-scripts-safety-guide': 'Codes and Script Safety',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Thanos Simulator Beginner Guide',
    seoTitle:
      'Thanos Simulator Beginner Guide - Stones, Controls and First Weapons',
    seoDescription:
      'Start Infinity Gauntlet Thanos Simulator with a safe route for stones, controls, early combat, weapon goals, bosses, and official Roblox access.',
    summary:
      'A first-session path for Roblox players who need to understand the official game name, collect early stones, learn gauntlet buttons, and avoid script shortcuts.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.beginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Built from the official Roblox page, Roblox API facts, Fandom topic breadth, Serper long-tail discovery, and a current YouTube progression series.',
    video: videos.beginner,
    videoSearchQueries: [
      'Infinity Gauntlet Thanos Simulator beginner guide',
      'Thanos Simulator Roblox guide',
      'Infinity Gauntlet Thanos Simulator starting over',
    ],
    tags: ['Roblox', 'Beginner', 'Stones'],
    relatedRoutes: [
      '/stones',
      '/controls',
      '/guides/all-infinity-stones-guide',
      '/weapons',
      '/codes',
    ],
    body: [
      {
        heading: 'Start by understanding the real game name',
        paragraphs: [
          'The Roblox page is currently titled "[ Update ] Infinity Gauntlet | Thanos Simulator", while players often search for Thanos Simulator, Thanos Simulator Roblox, or Infinity Gauntlet Thanos Simulator. They point to the same experience at place ID 3261957210 by Blg42598, so use the official Roblox page before trusting a guide or link.',
          'Your early goal is simple: collect stones, learn what each new ability does, and avoid fighting bosses before the route actually asks for it. The game is a power fantasy, but the power comes in layers. A player with one or two stones should not copy an endgame weapon route that assumes World5, Catacombs, special boss access, or high kill counts.',
        ],
        bullets: [
          'Open the official Roblox page, not a download mirror.',
          'Learn the gauntlet controls before chasing hard bosses.',
          'Collect the six Infinity Stones as the first major arc.',
          'Use weapon guides only when you meet their prerequisites.',
        ],
      },
      {
        heading: 'Build around stones before rare weapons',
        paragraphs: [
          'Fandom and guide results agree that the Infinity Gauntlet is the center of progression. Some stones are tied to obby routes, while others depend on NPCs or drops. That means early progress is part movement challenge, part combat check, and part patience check.',
          "Do not treat every weapon name as your next target. Weapons like Surtur's Sword, Heart of Ymir, Gungnir, Stormbreaker, and Mechanical Gloves sit behind later systems. If you jump ahead, the guide may be technically correct while still useless for your account.",
        ],
      },
      {
        heading: 'Ignore script pages even when search pushes them',
        paragraphs: [
          'Search demand includes scripts, executors, auto farm, and similar shortcuts. This site does not provide them. Roblox executors can put your account at risk, and script pages often reuse game names to capture traffic without caring whether the method is safe or current.',
          'The safe route is slower but stable: play through the official game, use current guide routes, and check Update 3.2 pages for new mechanics such as Doom and Mechanical Gloves.',
        ],
      },
    ],
    faq: [
      {
        question:
          'Is Thanos Simulator the same as Infinity Gauntlet Thanos Simulator?',
        answer:
          'Yes for this site. Roblox currently titles the official experience "[ Update ] Infinity Gauntlet | Thanos Simulator", while players shorten it to Thanos Simulator.',
      },
      {
        question: 'What should a new player do first?',
        answer:
          'Learn the gauntlet buttons, start collecting Infinity Stones, and read the all-stones route before targeting endgame weapons.',
      },
      {
        question: 'Does this wiki provide scripts?',
        answer:
          'No. It covers official gameplay routes and safety notes, not executors, auto farm, or modified clients.',
      },
    ],
  },
  {
    slug: 'all-infinity-stones-guide',
    title: 'How to Get All Infinity Stones in Thanos Simulator',
    seoTitle:
      'Thanos Simulator All Infinity Stones Guide - Locations, Drops and Order',
    seoDescription:
      'Find all six Infinity Stones in Roblox Thanos Simulator, including obby stones, NPC/drop stones, Soul Stone patience, and route order.',
    summary:
      'A route-first guide for the six Infinity Stones: when to do obbies, when to fight NPCs, and why Soul Stone should be treated as a drop grind.',
    category: 'Stones',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.stones2026),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Cross-checked Fandom Infinity Stones/Infinity Gauntlet pages and recent YouTube all-stones guide results. Exact map layout may change after updates.',
    video: videos.stones2026,
    videoSearchQueries: [
      'Infinity Gauntlet Thanos Simulator how to get all stones',
      'Thanos Simulator Roblox all stones',
      'Thanos Simulator soul stone',
    ],
    tags: ['Infinity Stones', 'Locations', 'Gauntlet'],
    relatedRoutes: [
      '/stones',
      '/controls',
      '/guides/gauntlet-controls-guide',
      '/map',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Separate obby stones from combat stones',
        paragraphs: [
          'The six stones are not all earned the same way. Fandom splits them into obby-style stones and NPC/drop stones. Reality, Space, and Time are route and movement checks; Power, Mind, and Soul are more tied to enemies, fighting, or drop patience.',
          'That distinction matters because a player who only trains combat can still fail movement routes, and a player who only watches location videos can still be underprepared for NPC stones. Read the stone route as a mixed checklist, not a single marker on a map.',
        ],
        bullets: [
          'Reality Stone: plan for an obby route with changing platforms.',
          'Space Stone: use the structure/meteor route carefully.',
          'Time Stone: treat it as another route objective, not a fight-only reward.',
          'Power and Mind Stones: prepare for NPC interactions and combat timing.',
          'Soul Stone: expect a drop grind from baseplate NPCs.',
        ],
      },
      {
        heading: 'Use abilities to make later stones easier',
        paragraphs: [
          'Each stone improves the Infinity Gauntlet instead of only checking a collection box. Health increases, melee damage improves, and specific abilities unlock. Once you gain an ability that changes movement, control, or burst damage, fold it back into the route instead of playing like you still have an empty glove.',
          'For example, search demand around controls is strong because players feel the difference once keybinds like teleport, shield, focus, time stop, charge, dash, disintegrate, and snap enter the rotation. If you get lost after a new stone, read the controls guide before grinding more enemies.',
        ],
      },
      {
        heading: 'Do not overstate Soul Stone certainty',
        paragraphs: [
          'The Soul Stone is the clearest patience check in the public community data because it is described as a low-chance NPC drop. That means the correct advice is not a magic coordinate. Farm eligible NPCs, avoid unsafe auto-farm pages, and stop when your session becomes sloppy.',
          'If an update changes the drop source or adds a better route, the update page should be refreshed first. Until then, treat Soul Stone as the stone that tests consistency more than navigation.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many Infinity Stones are in Thanos Simulator?',
        answer:
          'The core gauntlet route uses six stones: Reality, Space, Time, Power, Mind, and Soul.',
      },
      {
        question: 'Which stones are obby stones?',
        answer:
          'Community data groups Reality, Space, and Time as route/obby stones, while Power, Mind, and Soul are tied more to NPC or drop progress.',
      },
      {
        question: 'Why is Soul Stone hard to find?',
        answer:
          'It is commonly described as a low-chance NPC drop, so patience and safe farming matter more than a single fixed location.',
      },
    ],
  },
  {
    slug: 'gauntlet-controls-guide',
    title: 'Thanos Simulator Controls and Gauntlet Abilities',
    seoTitle:
      'Thanos Simulator Controls - Infinity Gauntlet Keybinds and Abilities',
    seoDescription:
      'Learn Thanos Simulator controls for punch, focus, teleport, time stop, shield, charge, super punch, dash, disintegrate, and snap.',
    summary:
      'A controls-focused guide for players who have stones but do not yet understand when to use single-stone and multi-stone abilities.',
    category: 'Controls',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on Fandom Infinity Gauntlet ability tables and Serper autocomplete demand for controls.',
    videoSearchQueries: [
      'Thanos Simulator controls',
      'Infinity Gauntlet Thanos Simulator controls',
      'Roblox Infinity Gauntlet Thanos Simulator controls',
    ],
    tags: ['Controls', 'Abilities', 'Gauntlet'],
    relatedRoutes: [
      '/controls',
      '/guides/all-infinity-stones-guide',
      '/stones',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Controls become useful only when the stone exists',
        paragraphs: [
          'A common new-player problem is pressing every key and assuming the game is broken. Many gauntlet moves require a specific stone or a charged state. The basic punch works immediately, but moves like Focus, Teleport, Time Stop, Shield, Charge, Super Punch, Super Dash, Disintegrate, and Snap depend on the stones and state you currently have.',
          'Think of controls as unlocks. After each new stone, spend a minute testing what changed in a safe area. That is faster than discovering a keybind for the first time during a boss fight.',
        ],
        bullets: [
          'Left-click is the basic punch and later becomes part of charged combos.',
          'R is associated with Focus after Mind Stone progress.',
          'F is associated with teleport after Space Stone progress.',
          'T is associated with Time Stop after Time Stone progress.',
          'C is associated with Shield after Space Stone progress.',
          'Q is important for charge and snap-style multi-stone actions.',
        ],
      },
      {
        heading: 'Charge changes the fight plan',
        paragraphs: [
          'The strongest gauntlet actions are not only button presses; they ask for a charged setup. If a guide says to use Super Punch, Super Dash, Disintegrate, or Snap, check whether you have the required stones and whether the gauntlet is charged first.',
          'This also explains why a pure location route can feel incomplete. Getting the stone is only the first half. Learning the ability window is the second half.',
        ],
      },
      {
        heading: 'Practice control moves before boss routes',
        paragraphs: [
          'Bosses and special NPCs punish confusion. Teleport can save time, shield can reduce incoming danger, time stop can create breathing room, and focus can change melee rhythm. But none of that helps if you are reading the keybind for the first time mid-fight.',
          'Use the controls hub as a short reset between stone collection and weapon routes. It is the boring page that quietly prevents the most wasted attempts.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why does a Thanos Simulator keybind do nothing?',
        answer:
          'You may not have the required stone, the gauntlet may not be charged, or the move may be on cooldown.',
      },
      {
        question: 'What key is used for snap-style actions?',
        answer:
          'Community ability tables point to Q for charged snap-style UI actions after the full stone set is available.',
      },
      {
        question: 'Should I learn controls before bosses?',
        answer:
          'Yes. Boss routes are much easier when teleport, shield, focus, and charged moves are already familiar.',
      },
    ],
  },
  {
    slug: 'mechanical-gloves-doom-guide',
    title: 'Mechanical Gloves and Doom Guide',
    seoTitle:
      'Thanos Simulator Mechanical Gloves Guide - Doom Update 3.2 Route',
    seoDescription:
      'Understand the Update 3.2 Doom route in Thanos Simulator, Mechanical Gloves prerequisites, Power Temple setup, and why this is not a beginner weapon.',
    summary:
      'A current Update 3.2 guide for players searching Mechanical Gloves, Doom, and the new official update route.',
    category: 'Updates',
    difficulty: 'Advanced',
    coverImageUrl: videoCover(videos.doom),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Roblox official description lists Update 3.2 with Doom and Mechanical Glove. Fandom Mechanical Gloves data and fresh YouTube results were used for route shape.',
    video: videos.doom,
    videoSearchQueries: [
      'Infinity Gauntlet Thanos Simulator Mechanical Gloves',
      'Thanos Simulator Doom guide',
      'Thanos Simulator Roblox new update',
    ],
    tags: ['Update 3.2', 'Doom', 'Mechanical Gloves'],
    relatedRoutes: [
      '/updates',
      '/bosses',
      '/weapons',
      '/guides/gauntlet-controls-guide',
      '/guides/all-infinity-stones-guide',
    ],
    body: [
      {
        heading: 'Update 3.2 is the current official signal',
        paragraphs: [
          'The Roblox game description checked on July 7, 2026 lists Update 3.2 and says Doom and Mechanical Glove were added. That makes Mechanical Gloves one of the highest-value current pages for the site, because it is both official-update backed and visible in fresh YouTube demand.',
          'Do not treat this as a starter weapon. The public community route references full-gauntlet behavior, Power Temple setup, and other weapon interactions. If you are still collecting stones, finish that arc before forcing the Doom route.',
        ],
      },
      {
        heading: 'The route is a setup puzzle before it is a boss fight',
        paragraphs: [
          'Community data describes a sequence around the Power Temple where Classic Snap reveals templates, then weapon-specific actions tied to Mjolnir and Hadron Enforcer interact with those templates. That is why the page belongs in both bosses and weapons: the unlock is not only "defeat Doom"; it is "prepare the correct route and then defeat Doom."',
          'If a video jumps straight into the fight, pause and confirm your prerequisites. A missing weapon or wrong location turns a hard fight into a dead route.',
        ],
      },
      {
        heading: 'Use this page as a current-update checklist',
        paragraphs: [
          'Because Doom and Mechanical Gloves are new relative to the long-running 2019 game, this is the page most likely to change after another update. The safest version of the guide is a checklist with source dates, prerequisites, and related pages rather than a claim that every detail is permanent.',
          'Read the gauntlet controls guide before attempting the route. Snap, charged actions, and weapon-specific moves matter here, and they are easier to learn before the boss pressure starts.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Mechanical Gloves part of Update 3.2?',
        answer:
          'Yes. The official Roblox description checked on July 7, 2026 lists Update 3.2 with Doom and Mechanical Glove.',
      },
      {
        question: 'Is Doom a beginner boss?',
        answer:
          'No. Public route data points to advanced prerequisites and weapon interactions before the fight.',
      },
      {
        question: 'Where should I go next if I cannot start the route?',
        answer:
          'Read the all-stones guide, controls guide, and weapons progression page to identify the missing prerequisite.',
      },
    ],
  },
  {
    slug: 'weapons-progression-guide',
    title: 'Thanos Simulator Weapons Progression Guide',
    seoTitle:
      'Thanos Simulator Weapons Guide - Best Progression Order and Unlocks',
    seoDescription:
      'Plan Thanos Simulator weapon progression through Infinity Gauntlet, Mjolnir, Stormbreaker, Hadron Enforcer, Surtur, Heart of Ymir, Gungnir, and Mechanical Gloves.',
    summary:
      'A progression-focused weapon guide that avoids fake tier certainty and instead explains when each major weapon route becomes realistic.',
    category: 'Weapons',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.upgrades),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Built from Fandom Weapons page breadth, TierMaker search demand, and YouTube upgrade/forging videos.',
    video: videos.upgrades,
    videoSearchQueries: [
      'Thanos Simulator weapons guide',
      'Infinity Gauntlet Thanos Simulator weapon tier list',
      'Thanos Simulator best weapons',
    ],
    tags: ['Weapons', 'Progression', 'Tier Watch'],
    relatedRoutes: [
      '/weapons',
      '/guides/stormbreaker-mjolnir-guide',
      '/guides/surtur-twilight-sword-guide',
      '/guides/gungnir-fragments-guide',
      '/guides/mechanical-gloves-doom-guide',
    ],
    body: [
      {
        heading: 'Use progression order before tier labels',
        paragraphs: [
          'Search results show some tier-list demand, but the public data is not strong enough for a hard ranked list at launch. Thanos Simulator weapons are better explained by prerequisites: what you can actually unlock now, which boss or map route gates it, and what the weapon helps you do next.',
          "The Infinity Gauntlet is the baseline. After that, major names include Mjolnir, Stormbreaker, Hadron Enforcer, Casket of Ancient Winters, Heart of Ymir, Universal Weapon/Cosmi-Rod, Gungnir, Surtur's Sword, and the newer Mechanical Gloves.",
        ],
      },
      {
        heading: 'Do not chase every weapon at once',
        paragraphs: [
          'A weapon route usually asks for one of four things: stones, boss access, fragments/crafting, or another weapon as a prerequisite. If your account is missing one category, reading a later route will feel impossible even if the guide is accurate.',
          'Pick the next unlock by what blocks the route. If you need movement or gauntlet power, finish stones and controls. If you need boss readiness, read the boss hub. If you need fragments or forge steps, read the Gungnir and map routes.',
        ],
        bullets: [
          'Early: Infinity Gauntlet and stones.',
          'Middle: Mjolnir, Stormbreaker, Hadron Enforcer, Casket routes.',
          'Endgame: Heart of Ymir, Surtur/Twilight Sword, Gungnir, Universal Weapon.',
          'Current update: Doom and Mechanical Gloves after prerequisites.',
        ],
      },
      {
        heading: 'Use named weapon searches as route shortcuts',
        paragraphs: [
          'Current long-tail demand includes names like Tempad, Surtur, Gungnir, and codes. Treat each named search as a shortcut to a route question: what prerequisite is missing, what boss or world gates it, and what the weapon changes after unlock.',
          'This keeps the weapons page useful without pretending there is one universal best weapon. A player who searches Gungnir usually needs fragments and forge direction. A player who searches Surtur usually needs endgame boss readiness. A player who searches Tempad usually needs movement or route context.',
        ],
      },
      {
        heading: 'Why this is not a fake best-weapon page',
        paragraphs: [
          'A copied tier list would be low-maintenance but not very useful. A new player asking for "best weapon" usually means "what can I get next without wasting time?" This page answers that job by putting weapons into route stages.',
          'If later search data shows stable demand for exact rankings and the community converges on a current meta, a tier page can be added. For launch, route order is more honest.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best weapon in Thanos Simulator?',
        answer:
          'It depends on your stage. The practical best weapon is the strongest route you can unlock with your current stones, boss access, and prerequisites.',
      },
      {
        question: 'Does this site have a weapon tier list?',
        answer:
          'Not as a hard ranked page at launch. Search evidence exists, but current source confidence favors progression guidance over fixed tiers.',
      },
      {
        question: 'What changed in the newest weapon update?',
        answer:
          'The official Roblox page currently lists Update 3.2 with Doom and Mechanical Glove.',
      },
    ],
  },
  {
    slug: 'surtur-twilight-sword-guide',
    title: "How to Get Surtur's Sword in Thanos Simulator",
    seoTitle:
      "Thanos Simulator Surtur's Sword Guide - Twilight Sword Requirements",
    seoDescription:
      "Get Surtur's Sword or Twilight Sword in Thanos Simulator with Heart of Ymir, Hadron Enforcer, Catacombs, boss prep, and upgrade notes.",
    summary:
      'A boss-gated weapon route for players searching Surtur, Twilight Sword, and the Catacombs endgame path.',
    category: 'Bosses',
    difficulty: 'Advanced',
    coverImageUrl: videoCover(videos.surtur),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      "Cross-checked Fandom Surtur's Sword and Bosses pages with a dedicated Surtur tutorial result.",
    video: videos.surtur,
    videoSearchQueries: [
      'Thanos Simulator Surtur Sword',
      'Infinity Gauntlet Thanos Simulator Twilight Sword',
      'Roblox Infinity Gauntlet how to get twilight sword',
    ],
    tags: ['Surtur', 'Twilight Sword', 'Bosses'],
    relatedRoutes: [
      '/bosses',
      '/weapons',
      '/guides/heart-of-ymir-guide',
      '/guides/weapons-progression-guide',
      '/map',
    ],
    body: [
      {
        heading: 'Surtur is an endgame route, not a random boss',
        paragraphs: [
          "Fandom describes Surtur as a Catacombs boss and frames Surtur's Sword, also called Twilight Sword, as a reward tied to defeating both phases. The same public data warns that Heart of Ymir and Hadron Enforcer are required or strongly expected for the route.",
          'That means the correct first question is not "where is Surtur?" It is "do I have the gear that makes the route valid?" If the answer is no, go back to Heart of Ymir, weapons progression, and map preparation.',
        ],
      },
      {
        heading: 'Prepare for two layers of failure',
        paragraphs: [
          'The first failure layer is access: Catacombs, summon requirements, and prerequisite weapons. The second layer is execution: understanding the fight, staying alive through phases, and keeping enough damage/control to finish the encounter.',
          'Players often search "surtur code" because the name appears in autocomplete. Treat that as a route question unless a real redeem code is verified. For now, Surtur belongs in bosses and weapons, not in active codes.',
        ],
      },
      {
        heading: 'Upgrade value comes after the first unlock',
        paragraphs: [
          "The public weapon page notes that Surtur's Sword can have an upgraded variant and that health value changes with progression. Do not over-focus on the upgraded version before you can consistently clear the base route.",
          'After unlocking the sword, review the weapons progression guide to decide whether your next goal is Gungnir, Universal Weapon, Mechanical Gloves, or another boss route.',
        ],
      },
    ],
    faq: [
      {
        question: "Is Surtur's Sword the same as Twilight Sword?",
        answer:
          "Community pages use Surtur's Sword and Twilight Sword as closely related naming for this boss reward route.",
      },
      {
        question: 'What do I need before Surtur?',
        answer:
          'Public route data points to Heart of Ymir, Hadron Enforcer, Catacombs access, and enough boss readiness for a multi-phase fight.',
      },
      {
        question: 'Is there a Surtur code?',
        answer:
          'No active Surtur redeem code is verified here. Current evidence treats it as a search phrase for the Surtur route.',
      },
    ],
  },
  {
    slug: 'heart-of-ymir-guide',
    title: 'Heart of Ymir Guide',
    seoTitle: 'Thanos Simulator Heart of Ymir Guide - Eson, World5 and Buffs',
    seoDescription:
      'Unlock Heart of Ymir in Thanos Simulator by preparing for Eson the Searcher, World5, Hadron Enforcer requirements, gauntlet buffs, and Casket synergy.',
    summary:
      'An endgame relic guide for players who need Heart of Ymir before harder routes like Surtur and later weapon progression.',
    category: 'Bosses',
    difficulty: 'Advanced',
    coverImageUrl: videoCover(videos.ymir),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Cross-checked Fandom Heart of Ymir/Bosses text and legacy YouTube guide coverage.',
    video: videos.ymir,
    videoSearchQueries: [
      'Thanos Simulator Heart of Ymir',
      'Infinity Gauntlet Thanos Simulator Eson',
      'Heart of Ymir without scepter Thanos Simulator',
    ],
    tags: ['Heart of Ymir', 'Eson', 'World5'],
    relatedRoutes: [
      '/bosses',
      '/weapons',
      '/guides/surtur-twilight-sword-guide',
      '/guides/weapons-progression-guide',
      '/map',
    ],
    body: [
      {
        heading: 'Heart of Ymir is a route enabler',
        paragraphs: [
          'Heart of Ymir is not only a badge-style trophy. Community data describes it as a relic that buffs the Infinity Gauntlet and Casket of Ancient Winters, while also becoming a prerequisite or key preparation item for later routes.',
          'That makes it a bridge between midgame weapon collection and deeper boss progression. If Surtur or Twilight Sword guides keep mentioning Heart of Ymir, do not skip this page.',
        ],
      },
      {
        heading: 'The public route points through Eson and World5',
        paragraphs: [
          'Fandom describes the Heart of Ymir route around defeating Eson the Searcher in World5 and notes Hadron Enforcer as important to the path. If you cannot reach World5 or do not understand the route into that zone, solve map access before attempting the boss.',
          'Because some older videos remain relevant but predate later updates, use them for route logic rather than assuming every number, UI label, or boss interaction is frozen forever.',
        ],
      },
      {
        heading: 'Why the buffs matter',
        paragraphs: [
          'The listed benefits include stronger gauntlet behavior and Casket synergy, such as extra health, improved melee value, and freezing interactions. The exact values can change, but the strategic point is stable: Heart of Ymir makes later fights and weapon routes less punishing.',
          'After the unlock, revisit Surtur, Gungnir, and weapon progression. That is where the relic starts paying back the effort.',
        ],
      },
    ],
    faq: [
      {
        question: 'What boss is tied to Heart of Ymir?',
        answer:
          'Public community data ties Heart of Ymir to defeating Eson the Searcher in World5.',
      },
      {
        question: 'Why do Surtur guides mention Heart of Ymir?',
        answer:
          'It is commonly listed as a prerequisite or major preparation item for the Surtur/Twilight Sword route.',
      },
      {
        question: 'Are old Heart of Ymir videos still useful?',
        answer:
          'They can be useful for route shape, but check current update notes because exact mechanics may shift over time.',
      },
    ],
  },
  {
    slug: 'stormbreaker-mjolnir-guide',
    title: 'Stormbreaker and Mjolnir Guide',
    seoTitle:
      'Thanos Simulator Stormbreaker and Mjolnir Guide - Weapon Route Tips',
    seoDescription:
      'Plan Stormbreaker and Mjolnir routes in Roblox Thanos Simulator, including weapon progression, boss readiness, and why Mjolnir matters for later Update 3.2 paths.',
    summary:
      'A practical weapon guide for players searching Stormbreaker, Mjolnir, and the route value of hammer weapons.',
    category: 'Weapons',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.stormbreaker),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from Fandom Weapons breadth and Stormbreaker/Mjolnir YouTube route demand.',
    video: videos.stormbreaker,
    videoSearchQueries: [
      'Thanos Simulator Stormbreaker',
      'Thanos Simulator how to get Stormbreaker',
      'Infinity Gauntlet Thanos Simulator Mjolnir',
    ],
    tags: ['Stormbreaker', 'Mjolnir', 'Weapons'],
    relatedRoutes: [
      '/weapons',
      '/guides/weapons-progression-guide',
      '/guides/mechanical-gloves-doom-guide',
      '/bosses',
      '/map',
    ],
    body: [
      {
        heading: 'Hammer weapons are more than collection slots',
        paragraphs: [
          'Mjolnir and Stormbreaker are visible weapon searches because they are recognizable and route-relevant. They should not be treated as random collectibles. Public Update 3.2 route data also references Mjolnir actions in the Mechanical Gloves setup, which gives it extra practical value.',
          "If your only goal is raw power, you may miss why a route asks for a specific hammer. A required move can matter more than the weapon's general combat feel.",
        ],
      },
      {
        heading: 'Read the weapon route as prerequisites first',
        paragraphs: [
          'Before chasing Stormbreaker, confirm where you are in overall progression: stones, map access, boss readiness, and prior weapon unlocks. Many Thanos Simulator routes are chained. Missing one link makes the next guide feel vague.',
          'Use this guide after the all-stones and controls pages. The hammer routes become much cleaner once you can move, survive, and understand charged gauntlet actions.',
        ],
      },
      {
        heading: 'Use Mjolnir knowledge for Doom prep',
        paragraphs: [
          'Mechanical Gloves public data mentions Mjolnir strike behavior as part of the route setup. Even if Stormbreaker is your immediate target, keep notes on Mjolnir because later update content may reuse it as a key, not only as a weapon.',
          'This is why the weapons hub links hammer routes, Doom, and overall progression together instead of isolating every weapon into a disconnected card.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Stormbreaker a beginner weapon?',
        answer:
          'No. Treat it as a mid-to-late route after you understand stones, controls, and map access.',
      },
      {
        question: 'Why does Mjolnir matter for Update 3.2?',
        answer:
          'Community Mechanical Gloves route data references Mjolnir actions during the Doom setup.',
      },
      {
        question: 'Should I get every weapon before bosses?',
        answer:
          'No. Get the weapon your next route actually requires, then move to the related boss or map page.',
      },
    ],
  },
  {
    slug: 'gungnir-fragments-guide',
    title: 'Gungnir and Fragments Guide',
    seoTitle:
      'Thanos Simulator Gungnir Guide - Fragments, Forge and Charge Route',
    seoDescription:
      'Get Gungnir in Thanos Simulator by understanding fragment requirements, Forge routing, charge behavior, and how it fits weapon progression.',
    summary:
      'A forge-focused guide for players searching Gungnir, fragments, and the All-Father weapon route.',
    category: 'Weapons',
    difficulty: 'Advanced',
    coverImageUrl: videoCover(videos.gungnir),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Cross-checked Fandom Gungnir details and a dedicated Gungnir forging video.',
    video: videos.gungnir,
    videoSearchQueries: [
      'Thanos Simulator Gungnir',
      'Infinity Gauntlet Thanos Simulator fragments',
      'Thanos Simulator forge Gungnir',
    ],
    tags: ['Gungnir', 'Fragments', 'Forge'],
    relatedRoutes: [
      '/weapons',
      '/map',
      '/guides/weapons-progression-guide',
      '/guides/heart-of-ymir-guide',
      '/guides/mechanical-gloves-doom-guide',
    ],
    body: [
      {
        heading: 'Gungnir is a forge and fragment objective',
        paragraphs: [
          'Fandom data describes Gungnir as a badge weapon route involving fragments and the Forge. That makes it different from a simple boss drop or location pickup. You need the route, the currency/progress requirement, and the patience to execute it cleanly.',
          'Because it has changed history in public notes, including being re-added and tied to later systems, use checked-date information and do not assume every old claim is still current.',
        ],
      },
      {
        heading: 'Charge behavior affects how it plays',
        paragraphs: [
          'Gungnir route notes mention charge gained from defeating different NPC types. That means the weapon is not just unlocked and forgotten; it has a rhythm tied to combat choices. If you are farming charge poorly, the weapon can feel weaker than it should.',
          'Pair this route with the bosses hub and map hub. Knowing where to fight and what enemies matter is part of making the weapon useful.',
        ],
      },
      {
        heading: 'Do not start if your map route is shaky',
        paragraphs: [
          'Forge-based goals punish players who cannot navigate the map. Before investing in a fragment route, make sure you understand the main map, World5, Catacombs, and related access paths well enough to repeat them without a video open every second.',
          'If your route knowledge is weak, read the map hub first and return here when the path feels repeatable.',
        ],
      },
    ],
    faq: [
      {
        question: 'How is Gungnir obtained?',
        answer:
          'Community data points to a fragments and Forge route. Exact requirements should be checked against the current game version before a long grind.',
      },
      {
        question: 'Why does Gungnir use charge?',
        answer:
          'Public notes describe charge gained from defeating NPCs, which makes enemy choice part of the weapon plan.',
      },
      {
        question: 'Is Gungnir needed before Mechanical Gloves?',
        answer:
          'Not as the main public prerequisite. Mechanical Gloves route data focuses more on Doom setup and other specific weapon interactions.',
      },
    ],
  },
  {
    slug: 'tempad-route-guide',
    title: 'Thanos Simulator Tempad Route Guide',
    seoTitle: 'Thanos Simulator Tempad Guide - Route, Stones and Safety',
    seoDescription:
      'Use this Thanos Simulator Tempad route guide to check map progress, stone gates, controls, boss goals, and safe unlock intent without scripts.',
    summary:
      'A route-first answer for players searching Tempad, movement unlocks, map gates, and item shortcuts in Thanos Simulator.',
    category: 'Map',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.stones2026),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Added after July 10 long-tail checks surfaced Tempad intent beside all-stones and map-route searches. Public videos are used as route context, not copied as exact unlock claims.',
    video: videos.stones2026,
    videoSearchQueries: [
      'Thanos Simulator Tempad',
      'Infinity Gauntlet Thanos Simulator Tempad',
      'Thanos Simulator all stones route',
    ],
    tags: ['Tempad', 'Map', 'Stones'],
    relatedRoutes: [
      '/map',
      '/controls',
      '/guides/all-infinity-stones-guide',
      '/tools/infinity-stones-tracker',
      '/guides/codes-and-scripts-safety-guide',
    ],
    body: [
      {
        heading: 'Treat Tempad as a route question first',
        paragraphs: [
          'Tempad searches usually mean the player is stuck on movement, map access, or a shortcut-sounding item name. Start by checking the route, not by searching for a code. Open the map hub, confirm the world or zone you are trying to reach, then compare that blocker with your current stones and controls.',
          'If the next step is unclear, write the blocker in one sentence: missing stone, missing boss clear, missing weapon route, or missing movement control. That keeps the Tempad search from turning into random script pages.',
        ],
        bullets: [
          'Map blocker: check the route hub before changing goals.',
          'Stone blocker: use the all-stones guide and tracker.',
          'Control blocker: practice movement and gauntlet inputs.',
          'Unsafe blocker: avoid executor or auto-farm pages.',
        ],
      },
      {
        heading: 'Check stones before chasing shortcuts',
        paragraphs: [
          'Most Thanos Simulator progression still runs through stones, bosses, weapons, and route gates. If a Tempad mention appears beside a guide or video, treat it as a lead that points back to the current progression chain. A shortcut only matters when the prerequisites behind it are solved.',
          'Use the stones tracker to mark what is actually done. If a stone route is missing, solve that first. If all key stones are done, move to map routes, controls, or the weapon and boss objective tied to your current stage.',
        ],
      },
      {
        heading: 'Use Tempad with a boss or weapon goal',
        paragraphs: [
          'A movement item is useful when it supports a goal: reaching the next zone, repeating a boss route, checking a weapon prerequisite, or reducing travel after a failed attempt. It is less useful when you do not know what you are traveling toward.',
          'Before farming for a named item, pick the next boss or weapon target. That target tells you whether the Tempad search should connect to map routes, controls, weapons, or all-stones cleanup.',
        ],
      },
      {
        heading: 'Do not confuse Tempad with a script',
        paragraphs: [
          'Some search results mix named items with scripts, executors, fake downloads, or account-risk shortcuts. This guide does not provide those. If a page asks for an executor, third-party login, APK, or off-platform reward, close it and return to the official Roblox route.',
          'The safe path is slower but durable: route guides, controls practice, stone checks, and boss preparation.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Tempad a Thanos Simulator code?',
        answer:
          'No verified code is listed here. Treat Tempad as a route or item-search intent unless the official game or a strong source confirms a redeem code.',
      },
      {
        question: 'What should I check before searching Tempad again?',
        answer:
          'Check map route, controls, all-stones progress, and the boss or weapon target that made you search Tempad.',
      },
      {
        question: 'Should I use a Tempad script?',
        answer:
          'No. Avoid executors, APK mirrors, and script pages. Use the official Roblox game and safe route guides.',
      },
    ],
  },
  {
    slug: 'codes-and-scripts-safety-guide',
    title: 'Thanos Simulator Codes and Scripts Safety Guide',
    seoTitle: 'Thanos Simulator Codes and Scripts - Safe Status, No Exploits',
    seoDescription:
      'Check Thanos Simulator codes safely, understand why no active redeem codes are verified, and avoid Roblox script, executor, APK, and account-risk pages.',
    summary:
      'A safety-first answer for players searching codes, scripts, auto farm, executors, and unofficial download shortcuts.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Created because Serper and SERP results show both codes demand and unsafe script demand around the game.',
    videoSearchQueries: [
      'Thanos Simulator codes',
      'Infinity Gauntlet Thanos Simulator codes',
      'Thanos Simulator script',
    ],
    tags: ['Codes', 'Safety', 'Roblox'],
    relatedRoutes: [
      '/codes',
      '/download',
      '/updates',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'The honest code status is no verified active list',
        paragraphs: [
          'As of the July 7, 2026 check, this site does not list any active Thanos Simulator redeem code as verified. Codes demand exists in autocomplete, but the reliable sources checked support gameplay guides and safety notes more than live code rewards.',
          'If a future update adds a clear in-game code panel and an official or strongly verified code source, the codes page should change. Until then, copying low-confidence lists would waste player time.',
        ],
      },
      {
        heading: 'Scripts are not a shortcut this wiki will provide',
        paragraphs: [
          'Some search results pair Thanos Simulator with auto farm scripts, executors, speed hacks, ESP, or copied Lua snippets. This site does not publish those instructions. They can violate Roblox rules, put accounts at risk, and age badly after updates.',
          'A guide site should help you understand the route, not push you toward an executor. Use the official Roblox page, stone routes, controls guide, and boss pages instead.',
        ],
      },
      {
        heading: 'Safe checking routine',
        paragraphs: [
          'When you see a claimed code, first verify that the page names this exact Roblox experience and not a generic "Infinity" game. Then check whether the claim points to official Roblox text, a developer post, or a visible in-game redeem UI. If it only appears beside scripts or download buttons, treat it as unsafe.',
          'Never enter your Roblox password into a third-party code site. Real Roblox gameplay rewards should be handled inside Roblox, not through an external login form.',
        ],
      },
      {
        heading: 'Surtur-code and Tempad searches need safe answers',
        paragraphs: [
          'Players may search for Surtur code or Tempad because those names sound like unlock shortcuts. Do not treat that wording as proof of a redeem code. Answer the intent safely: check whether the goal is a weapon route, a boss route, or a movement/control question.',
          'If a future official code exists, it belongs on the codes page. Until then, named-item searches should point players toward weapon prerequisites and controls, not external script pages.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are there working Thanos Simulator codes?',
        answer: 'No active redeem codes are verified here as of July 7, 2026.',
      },
      {
        question: 'Why not include scripts if players search for them?',
        answer:
          'Because executors and auto-farm scripts can violate Roblox rules and risk accounts. This site covers safe gameplay routes only.',
      },
      {
        question: 'Where should I play safely?',
        answer:
          'Use the official Roblox page linked from this wiki and avoid APK mirrors, executors, and third-party login forms.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const allCoreRoutes = [
  '/',
  '/codes',
  '/guides',
  '/stones',
  '/weapons',
  '/bosses',
  '/map',
  '/controls',
  '/download',
  '/updates',
  '/tools',
  '/tools/boss-checklist',
  '/tools/weapon-planner',
  '/tools/infinity-stones-tracker',
  '/database',
  '/database/stones',
  '/database/weapons',
  '/database/bosses',
  '/database/zones',
  '/disclaimer',
  ...guides.map((guide) => `/guides/${guide.slug}`),
];
