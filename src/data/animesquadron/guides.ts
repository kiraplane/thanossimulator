import { CHECKED_AT } from './sources';
import type { Guide, GuideVideo } from './types';

const cover = '/animesquadron/hero.png';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  completeBeginner: {
    id: 'yCsTbYaV7Sc',
    title:
      "BEST COMPLETE BEGINNER'S GUIDE For Anime Squadron!! Gem, Gold, Rerolls Farm!! (Roblox)",
    channel: 'DomiBlox',
    url: 'https://www.youtube.com/watch?v=yCsTbYaV7Sc',
    thumbnailUrl: youtubeThumbnail('yCsTbYaV7Sc'),
    checkedAt: CHECKED_AT,
  },
  beginner: {
    id: 'gCohIPnuQ0U',
    title: "Best *BEGINNER'S* Guide To Anime Squadrons! (Roblox)",
    channel: 'Revex',
    url: 'https://www.youtube.com/watch?v=gCohIPnuQ0U',
    thumbnailUrl: youtubeThumbnail('gCohIPnuQ0U'),
    checkedAt: CHECKED_AT,
  },
  resourceGuide: {
    id: 'hxMWDwq7vI0',
    title: 'BEST Resource Guide in Anime Squadrons! (Gems, Gold & Rerolls)',
    channel: 'Revex',
    url: 'https://www.youtube.com/watch?v=hxMWDwq7vI0',
    thumbnailUrl: youtubeThumbnail('hxMWDwq7vI0'),
    publishedAt: '2026-06-11',
    checkedAt: '2026-06-11',
  },
  noobToPro: {
    id: 'x8-wUSgKliU',
    title: "The ONLY Anime Squadron Guide You'll Ever Need (Noob to Pro)",
    channel: 'NOTORIOSX',
    url: 'https://www.youtube.com/watch?v=x8-wUSgKliU',
    thumbnailUrl: youtubeThumbnail('x8-wUSgKliU'),
    checkedAt: CHECKED_AT,
  },
  everything: {
    id: '4P8lS2van0E',
    title: 'Everything you NEED to Know for Anime Squadron! (Roblox)',
    channel: 'Raging_Shinji',
    url: 'https://www.youtube.com/watch?v=4P8lS2van0E',
    thumbnailUrl: youtubeThumbnail('4P8lS2van0E'),
    checkedAt: CHECKED_AT,
  },
  completeSystems: {
    id: 'gYhjMOCRRVY',
    title:
      'Anime Squadron COMPLETE GUIDE! Every Secret Unit, Gems, gold, traits & Fast Progression',
    channel: 'MimoBlox',
    url: 'https://www.youtube.com/watch?v=gYhjMOCRRVY',
    thumbnailUrl: youtubeThumbnail('gYhjMOCRRVY'),
    checkedAt: CHECKED_AT,
  },
  noobToSecret: {
    id: 'FDkLlTguYn0',
    title:
      'GOING NOOB TO PRO GETTING THE BEST META UNIT SECRET SSJ4 GOGETA IN ANIME SQUADRON!! (Roblox)',
    channel: 'DomiBlox',
    url: 'https://www.youtube.com/watch?v=FDkLlTguYn0',
    thumbnailUrl: youtubeThumbnail('FDkLlTguYn0'),
    checkedAt: CHECKED_AT,
  },
  superiorShanron: {
    id: 'ykMqz-cCbDk',
    title: 'Evolved 0.1% Superior Shanron (Omega) in Anime Squadron',
    channel: 'Langris',
    url: 'https://www.youtube.com/watch?v=ykMqz-cCbDk',
    thumbnailUrl: youtubeThumbnail('ykMqz-cCbDk'),
    publishedAt: '2026-06-11',
    checkedAt: '2026-06-11',
  },
  latestTierList: {
    id: 'e963SPBbF_M',
    title: 'THE BEST Tier List For Anime Squadron!!! (Roblox)',
    channel: 'DomiBlox',
    url: 'https://www.youtube.com/watch?v=e963SPBbF_M',
    thumbnailUrl: youtubeThumbnail('e963SPBbF_M'),
    publishedAt: '2026-06-09',
    checkedAt: '2026-06-11',
  },
  fullClear: {
    id: '0eEvcVJxFio',
    title:
      'I 100% COMPLETED This NEW Anime Rangers X Replacement... And It Is PEAK! (Anime Squadron)',
    channel: 'NotScoobz',
    url: 'https://www.youtube.com/watch?v=0eEvcVJxFio',
    thumbnailUrl: youtubeThumbnail('0eEvcVJxFio'),
    checkedAt: CHECKED_AT,
  },
  gameplay: {
    id: 'vBrjJ6alV84',
    title: "Anime Squadron Just Released... And It's Actually GOOD!",
    channel: 'MimoBlox',
    url: 'https://www.youtube.com/watch?v=vBrjJ6alV84',
    thumbnailUrl: youtubeThumbnail('vBrjJ6alV84'),
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const videoCover = (video: GuideVideo) => video.thumbnailUrl ?? cover;

export const siteDescription =
  'Anime Squadron Wiki is an unofficial Roblox guide hub for codes, units, tier list decisions, traits, stat rerolls, game modes, Discord links, and early-access progression.';

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Anime Squadron Beginner Guide',
    seoTitle: 'Anime Squadron Beginner Guide - First Hour Progression',
    seoDescription:
      'Start Anime Squadron with a complete first-hour route: redeem codes, summon carefully, build one carry, farm Gems and Gold, save Perfect Cubes, and avoid wasted rerolls.',
    summary:
      'Your first hour should be a focused account setup: claim every code, use summons to find one real carry, farm enough Gems and Gold to test that carry, then hold rare reroll materials until a clear actually changes.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'June 2026 beginner-route checks focus on Gems, Gold, rerolls, and noob-to-pro progression.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Roblox beginner guide',
      'Anime Squadron Roblox codes',
      'Anime Squadron best units early game',
      'Anime Squadron noob to pro',
    ],
    tags: ['Beginner', 'First Hour', 'Progression'],
    relatedRoutes: [
      '/codes',
      '/tier-list',
      '/units',
      '/traits',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'Claim codes before you decide what your account is',
        paragraphs: [
          'The first real Anime Squadron decision happens after codes, not before them. Launch rewards include Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes, and Perfect Cubes, so a player who upgrades before redeeming is judging the account with half the starting tools missing.',
          'A cleaner route is to join the official Roblox experience, redeem every active code, rejoin if a code fails on an old server, then look at your summons and material stack. Only after that should you decide which unit is allowed to become the first project.',
        ],
        bullets: [
          'Redeem active codes first, including punctuation and capitalization.',
          'Use Gems to create options before committing Gold.',
          'Keep Perfect Cubes untouched until you identify a keeper unit.',
          'Do not reroll a unit just because it carried the tutorial waves.',
        ],
      },
      {
        heading: 'Find one carry and make every other slot justify itself',
        paragraphs: [
          'Anime Squadron is a lane battler, so the early squad needs a unit that can actually remove waves. That unit is the carry. It does not have to be the rarest unit on the account; it has to be the unit that changes the next wave, boss, or farm run.',
          'Once the carry is chosen, every other slot should answer one question: does this unit help the carry do its job? A control unit buys time, a support unit improves output, an economy unit pays for upgrades, and boss damage covers the bulky enemy that your wave clear cannot finish.',
        ],
      },
      {
        heading: 'Do not turn early rewards into nine small upgrades',
        paragraphs: [
          'The most common early mistake is spreading rewards evenly. Even leveling feels tidy, but a lane defense account usually gets stronger when one damage unit reaches the next breakpoint before the rest of the squad catches up.',
          'Spend Gold where it changes a run. If the carry reaches a higher wave, kills a boss in time, or lets you farm a better reward loop, the Gold had a purpose. If the upgrade only makes every menu look cleaner, it can wait.',
        ],
      },
      {
        heading: 'Use rerolls only after the unit proves itself',
        paragraphs: [
          'Trait Shards, Stat Rerolls, Reroll Cubes, and Perfect Cubes are not beginner cosmetics. They are breakpoint tools. Spend them when the target unit is already part of your plan and the possible result can change a clear.',
          'The practical stop rule is simple: reroll one keeper, test the run, and stop when the run improves. If the same stage still fails after better stats, your problem may be placement, game mode choice, boss damage, or support timing rather than more rerolls.',
        ],
      },
      {
        heading: 'A first-session checklist that matches player intent',
        paragraphs: [
          'Players searching for a beginner guide usually want a route, not theory. Use this order: redeem codes, summon enough to find a carry candidate, push waves until a real wall, upgrade the carry, test again, then decide whether traits or stat rerolls are justified.',
          'After that first wall, open the unit tier list and trait guide. Those pages keep the same rule alive: one useful decision at a time, no rare materials spent on a unit you already expect to replace.',
        ],
      },
      {
        heading: 'What to copy from real beginner routes',
        paragraphs: [
          'Beginner routes keep exposing the same early problems: players redeem codes late, split currency across too many units, and spend rerolls before they know which unit will stay.',
          'Copy the route shape, not the exact account state. If another account finds a carry faster than you do, copy the decision logic rather than chasing the same result. Your summons, codes, and early drops may be different.',
        ],
        bullets: [
          'Copy the order: codes, summons, first wall, focused upgrade, then reroll test.',
          'Pause before any rare-material spend and ask what stage it is meant to fix.',
          'Do not chase another account that pulled a better unit than you have.',
          'Return to farming when the route depends on resources you do not own yet.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Anime Squadron?',
        answer:
          'Redeem active codes, do your first summons, identify one main carry, then spend upgrades and rerolls only when that carry changes progression.',
      },
      {
        question: 'Should beginners reroll traits immediately?',
        answer:
          'No. Reroll after the unit has proven it will stay in your first serious squad. Perfect Cubes should be saved for confirmed keepers.',
      },
      {
        question: 'What is the biggest beginner mistake?',
        answer:
          'Spreading Gems, Gold, traits, and stat rerolls across too many temporary units instead of building one carry that opens better rewards.',
      },
      {
        question: 'Which guide should I read next?',
        answer:
          'Open the codes page first, then the tier list, units page, traits guide, and Gems/Gold spending guide.',
      },
    ],
  },
  {
    slug: 'codes-redeem-guide',
    title: 'Anime Squadron Codes Redeem Guide',
    seoTitle: 'Anime Squadron Codes Redeem Guide - Active Rewards and Fixes',
    seoDescription:
      'Redeem Anime Squadron codes correctly, fix failed code messages, and decide how to spend Gems, Gold, Trait Shards, Reroll Cubes, Stat Rerolls, and Perfect Cubes.',
    summary:
      'Codes are not just freebies. In Anime Squadron they set your first summon route, first carry upgrade, and first reroll stop rule.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: '2026-06-11',
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Code rewards were refreshed against current June 2026 code trackers and beginner-route checks.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Roblox codes',
      'Anime Squadron redeem codes',
      'Anime Squadron Gems Gold Rerolls farm',
      'Anime Squadron beginner guide codes',
    ],
    tags: ['Codes', 'Redeem', 'Rewards'],
    relatedRoutes: [
      '/codes',
      '/guides/beginner-guide',
      '/guides/gems-gold-spending-guide',
      '/traits',
      '/reroll',
    ],
    body: [
      {
        heading: 'Redeem before you spend anything scarce',
        paragraphs: [
          'The strongest launch codes affect almost every early decision because they give summon currency, upgrade currency, trait materials, reroll materials, and Perfect Cubes. That is why the redeem step belongs before serious account planning.',
          'If you spend Gold first, then redeem codes, you may discover that the better unit arrived after your Gold was already committed. If you spend Perfect Cubes before summoning, you may permanently improve a unit that should have been replaced within the hour.',
        ],
      },
      {
        heading: 'Use the exact code text and refresh old servers',
        paragraphs: [
          'Anime Squadron codes are case-sensitive and punctuation-sensitive. The exclamation mark is part of many launch codes. Copy the full code, paste it exactly, and avoid adding spaces before or after the text.',
          'If an active code fails, treat the server as the first suspect. Early-access Roblox games can have old servers running during updates. Rejoin a newer server, try the newest codes first, and only mark a code expired after repeated source checks agree.',
        ],
        bullets: [
          'Copy capitalization exactly.',
          'Keep exclamation marks and punctuation.',
          'Rejoin a fresh server if a code fails.',
          'Use the newest codes before older community milestone codes.',
        ],
      },
      {
        heading: 'Turn each reward type into a decision',
        paragraphs: [
          'Gems are option value, so they usually help you find the first real carry. Gold is momentum, so it belongs on the unit that changes the next clear. Trait Shards and Reroll Cubes are refinement, so they should wait until the target unit has a job.',
          'Perfect Cubes need the strictest rule. Use one only when the unit is not just good today, but likely to stay useful across waves, bosses, farming, or co-op.',
        ],
      },
      {
        heading: 'What to do after redeeming all active codes',
        paragraphs: [
          'Do not leave the code menu and immediately spend everything. First check your squad, then run a stage that tells you where the account fails. A wave leak points toward carry damage or placement. A boss timeout points toward boss damage. Slow upgrade timing points toward Gold use or economy planning.',
          'This turns codes into progression instead of clutter. The reward is not the code itself; the reward is reaching a better stage with fewer wasted materials.',
        ],
      },
      {
        heading: 'Why expired-code history still matters',
        paragraphs: [
          'Anime Squadron is new, so expired-code history is short. Still, tracking failed codes prevents duplicate rumors from cycling back into active tables.',
          'When a code expires, it should move out of the active list with the last checked date. Until then, a code that fails once should be treated as a troubleshooting case, not automatically as dead.',
        ],
      },
      {
        heading: 'A code routine for update days',
        paragraphs: [
          'On update days, run the same routine every time. Check the active-code table, open the official Roblox game, redeem the newest codes first, then retry older codes only after joining a fresh server.',
          'After redeeming, write down what changed: how many Gems you can spend, whether Gold is enough for the carry, and whether new reroll materials are worth using today. This turns codes into a progression plan instead of a short dopamine hit.',
          'If YouTube comments or community posts mention a fresh code before the main sources update, treat it as a lead. Test it in game, keep the exact spelling, and wait for repeat confirmation before making it part of your default spend route.',
        ],
        bullets: [
          'Use YouTube code videos as discovery signals, then verify the code inside the game.',
          'Do not trust videos that ask you to install tools, join unrelated servers, or enter account details.',
          'Keep failed codes separate from expired codes until multiple checks agree.',
          'Spend rewards only after checking the beginner, Gems, and reroll plans.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Anime Squadron codes case-sensitive?',
        answer:
          'Yes. Copy codes exactly, including punctuation such as exclamation marks.',
      },
      {
        question: 'Why does an active Anime Squadron code fail?',
        answer:
          'It may be typed incorrectly, expired, or blocked by an old server. Rejoin a fresh server and retry before assuming it is expired.',
      },
      {
        question: 'What should I spend code rewards on first?',
        answer:
          'Use Gems to find a carry, Gold to push that carry, and save rare reroll materials for a keeper unit.',
      },
      {
        question: 'Should I redeem codes before summoning?',
        answer:
          'Yes. Codes can change how many summons and rerolls you can afford, so they should come before serious spending.',
      },
    ],
  },
  {
    slug: 'best-units-tier-list',
    title: 'Anime Squadron Best Units Tier List',
    seoTitle: 'Anime Squadron Best Units Tier List - Early Role Priority',
    seoDescription:
      'Use the Anime Squadron tier list as an early role-priority guide for main carry, boss damage, control, support, economy, secret units, and starter filler decisions.',
    summary:
      'Anime Squadron tier list traffic is centered on fast decisions: which unit role to build first, when secret units are worth materials, and how to avoid wasting rerolls before the account has a real carry.',
    category: 'Tier List',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.latestTierList),
    publishedAt: CHECKED_AT,
    updatedAt: '2026-06-11',
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Updated after fresh tier-list traffic and current June 2026 Anime Squadron walkthrough checks.',
    video: videos.latestTierList,
    videoSearchQueries: [
      'Anime Squadron Roblox tier list',
      'Anime Squadron best units',
      'Anime Squadron secret unit',
      'Anime Squadron noob to pro meta unit',
    ],
    tags: ['Tier List', 'Units', 'Meta'],
    relatedRoutes: [
      '/tier-list',
      '/units',
      '/traits',
      '/reroll',
      '/guides/secret-units-guide',
      '/guides/stat-reroll-guide',
    ],
    body: [
      {
        heading: 'Start the tier list with the job, not the name',
        paragraphs: [
          'A rare unit can still be a bad first investment if it does not solve the stage that blocks you. A tier list should answer what the unit does: wave clear, boss damage, control, support, economy, or temporary filler.',
          'That is why the first Anime Squadron ranking is role-first. Early-access unit names and exact multipliers can change quickly, but the account problems stay familiar. You need a carry, then you need to patch the thing the carry cannot do alone.',
        ],
      },
      {
        heading: 'Main carry is still the first build',
        paragraphs: [
          'The main carry is the unit that turns rewards into more rewards. It clears waves, lets you farm better stages, and creates a reason to spend Gold, traits, and stat rerolls.',
          'A carry deserves investment when you can describe the next clear it unlocks. If the unit only looks impressive in the lobby but does not change the next run, wait.',
        ],
      },
      {
        heading: 'Secret units need a role before materials',
        paragraphs: [
          'Players are already chasing secret units and meta units, which makes sense for a Roblox anime defense game. The mistake is treating every secret pull as an automatic account plan.',
          'A secret unit becomes a priority when it has a real role and can use your materials better than the current carry. If it needs too much setup or only helps a later mode, it can be saved without draining rerolls today.',
        ],
      },
      {
        heading: 'Boss damage and control come after the carry test',
        paragraphs: [
          'Once waves stop being the problem, bosses expose weak single-target damage. That is when a boss-damage role can move up the tier list. If enemies reach the end before damage has time to work, control becomes more important.',
          'Support and economy are also real, but they are not first by default. They need a damage unit or mode structure to support, otherwise they become polished side projects.',
        ],
      },
      {
        heading: 'How to use this tier list after every summon',
        paragraphs: [
          'After a summon session, sort new units by job. Ask which unit can become the carry, which one solves bosses, which one buys time, and which one is only filler. Then compare those jobs to your current wall.',
          'The best unit is the one that changes the account today without ruining tomorrow. That may be a rare unit, a secret unit, or simply the first damage unit that lets you farm enough to chase better options.',
        ],
      },
      {
        heading: 'How to react when a unit becomes popular',
        paragraphs: [
          'Anime Squadron discussion is moving quickly around secret units, noob-to-pro routes, and complete progression claims. That is useful for spotting what players are testing, but it can also make every new pull feel mandatory.',
          'When a unit becomes popular, ask what role it played in the clear. Did it carry waves, delete bosses, enable faster upgrades, or simply look rare on the thumbnail? A role-first tier list keeps the page useful even when names and balance change.',
          'If several current clears keep using the same role to solve the same wall, that role deserves attention. If only one showcase uses a unit with unclear investment cost, wait before spending Perfect Cubes or rare rerolls.',
          'Recheck the tier list after patches, code waves, or banners because those moments change what players can realistically build. A role can stay important while the best name for that role shifts.',
        ],
        bullets: [
          'Treat showcase damage as a question to test, not a permanent ranking.',
          'Compare the unit against your current wall, not against a maxed creator account.',
          'Promote units when they improve farming, bosses, or co-op in repeatable ways.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best unit in Anime Squadron?',
        answer:
          'The best early unit is the one that acts as your main carry and changes your next clear. Exact unit-name rankings should be updated only after stable game data exists.',
      },
      {
        question: 'Are secret units always worth building?',
        answer:
          'No. Build a secret unit when its role is clear and it outperforms your current carry or boss-damage option.',
      },
      {
        question: 'Should I upgrade support first?',
        answer:
          'Usually no. Support becomes valuable after you know which carry, mode, or boss plan it improves.',
      },
      {
        question: 'Why rank roles instead of only unit names?',
        answer:
          'Early-access unit data changes quickly. Role rankings help players spend better without inventing unverified facts.',
      },
    ],
  },
  {
    slug: 'update-0-5-tier-list',
    title: 'Anime Squadron UPD 0.5 Tier List Guide',
    seoTitle: 'Anime Squadron 0.5 Tier List - Berserker, Falcon, Gogeta',
    seoDescription:
      'Read the Anime Squadron UPD 0.5 tier list guide for Berserker, Falcon, Gogeta/Gometa, Skeleton Knight, Caska, Fastwagon, and gear planning.',
    summary:
      'UPD 0.5 pushed the tier conversation toward Berserker, Falcon, Skeleton Knight, Caska, and the older premium names such as Gometa, Madora, Woo, and Puppeteer. Use this guide as the patch-specific layer on top of the main tier list.',
    category: 'Tier List',
    difficulty: 'Intermediate',
    coverImageUrl: cover,
    publishedAt: '2026-06-22',
    updatedAt: '2026-06-22',
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Built from June 22, 2026 checks of official UPD 0.5 title signals and multiple current tier-list competitors. Exact unit values should still be verified in-game after balance changes.',
    videoSearchQueries: [
      'Anime Squadron 0.5 tier list',
      'Anime Squadron Berserker tier list',
      'Anime Squadron Falcon unit',
      'Anime Squadron Gogeta Gometa tier list',
    ],
    tags: ['UPD 0.5', 'Tier List', 'Meta'],
    relatedRoutes: [
      '/tier-list',
      '/units',
      '/guides/falcon-guide',
      '/guides/how-to-get-gogeta-gometa',
      '/guides/berserker-guide',
      '/guides/gear-crafting-guide',
    ],
    body: [
      {
        heading: 'What changed in UPD 0.5',
        paragraphs: [
          'Anime Squadron UPD 0.5 changed the search demand from a generic tier list into a patch-specific question. Players are looking for Berserker, Falcon, Gogeta/Gometa, gear, and whether older premium carries still deserve rerolls.',
          'The safest read is that 0.5 added new targets without deleting the old rule: build a unit because it solves a role. A new name matters only if it changes wave clear, boss damage, farm tempo, support value, or hard-stage stability.',
        ],
      },
      {
        heading: 'Top damage targets to watch',
        paragraphs: [
          'Gometa/Gogeta still sits in the premium carry conversation because current lists keep it near the top and route guides describe it as a serious evolution target. Berserker is the new 0.5 pressure point because competitor updates place Berserker/Enraged with other top DPS units.',
          'Madora, Woo, and Puppeteer remain important comparison points. If a player already has one of those built, the question is not "is Berserker new?" but "does Berserker beat my current carry enough to justify rerolls and gear?"',
        ],
        bullets: [
          'Gometa/Gogeta: premium carry and boss-damage target with an expensive route.',
          'Berserker: new 0.5 DPS target that needs investment verification.',
          'Madora: strong boss/burn signal in several current tier lists.',
          'Woo and Puppeteer: still useful high-end reference points for carry value.',
        ],
      },
      {
        heading: 'Falcon is the 0.5 utility question',
        paragraphs: [
          'Falcon demand is different from pure DPS demand. Current source checks describe Falcon around damage, execute, farm, support, or Yen-style value, which means the unit is most interesting when economy or support changes the run.',
          'If your account already clears waves but reaches expensive upgrades too late, Falcon deserves testing. If your account cannot survive basic pressure, Falcon may not be the first place to spend rare rerolls.',
        ],
      },
      {
        heading: 'Skeleton Knight, Caska, and role caution',
        paragraphs: [
          'Skeleton Knight/Resonance appears as a stability pick in current 0.5 checks: tank, support, or hybrid value rather than a universal first carry. Caska/Resilience is worth covering because players search the new unit names, but current signals are not strong enough to treat it as a premium reroll target.',
          'Use these units to fill a role, not to chase a name. If Skeleton Knight keeps a hard stage stable, it has value. If Caska helps early or mid progression, use it while it works and avoid locking rare materials into it too early.',
        ],
      },
      {
        heading: 'How to spend after reading the 0.5 tier list',
        paragraphs: [
          'First, check whether your current wall is damage, economy, support, or survival. Second, match the new unit to that wall. Third, spend only the material that directly improves the test. A DPS unit may need traits and gear; Falcon may need a farm or support test; Skeleton Knight may need placement testing before rerolls.',
          'The main tier list page should stay role-first, while this 0.5 page explains the patch names. Use both together before moving Perfect Cubes, rare trait materials, or expensive gear recipes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is the best Anime Squadron UPD 0.5 unit?',
        answer:
          'Berserker and Gometa/Gogeta are the strongest current DPS signals, while Falcon is the most important utility-farm signal. The best unit for your account still depends on the role you are missing.',
      },
      {
        question: 'Is Falcon better than Berserker?',
        answer:
          'They solve different problems. Berserker is a damage target, while Falcon is more useful when farm/support value changes your clear or upgrade tempo.',
      },
      {
        question: 'Should I reroll for every new 0.5 unit?',
        answer:
          'No. Reroll only when the unit has a role in your current squad and the upgrade changes a real run.',
      },
    ],
  },
  {
    slug: 'falcon-guide',
    title: 'Anime Squadron Falcon Guide',
    seoTitle: 'Anime Squadron Falcon Guide - Dark Falcon Build and Value',
    seoDescription:
      'Use this Anime Squadron Falcon guide to decide when Falcon or Dark Falcon is worth building for Yen, support, execute value, gear, and UPD 0.5 progression.',
    summary:
      'Falcon is not just a name to chase. In the 0.5 meta, Falcon is most useful when its support, farm, or execute-style value changes your upgrade tempo or makes a harder run safer.',
    category: 'Units',
    difficulty: 'Intermediate',
    coverImageUrl: cover,
    publishedAt: '2026-06-22',
    updatedAt: '2026-06-22',
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Built from current 0.5 tier-list checks that describe Falcon/Dark Falcon as a farm, support, DPS, or execute-adjacent unit. Exact values should be verified in the live game UI.',
    videoSearchQueries: [
      'Anime Squadron Falcon guide',
      'Anime Squadron Dark Falcon',
      'Anime Squadron Falcon build',
      'Anime Squadron Falcon tier list',
    ],
    tags: ['Falcon', 'UPD 0.5', 'Farm'],
    relatedRoutes: [
      '/units',
      '/tier-list',
      '/guides/update-0-5-tier-list',
      '/guides/gear-crafting-guide',
      '/guides/trait-shards-reroll-cubes-farm',
    ],
    body: [
      {
        heading: 'What Falcon is for',
        paragraphs: [
          'Falcon search demand rose with UPD 0.5 because the unit sits in a useful middle space: it can be discussed as damage, support, and farm value rather than as a simple carry. That makes Falcon worth a separate guide.',
          'The practical question is whether Falcon changes the run. If extra Yen, support utility, execute-style value, or debuff resistance lets your squad upgrade faster or survive a harder stage, Falcon is doing a job.',
        ],
      },
      {
        heading: 'When Falcon is worth building',
        paragraphs: [
          'Build Falcon when your account already has a damage plan and needs better tempo. Falcon is strongest when the benefit converts into earlier placements, earlier upgrades, safer boss timing, or more repeatable farming.',
          'Do not build Falcon only because a tier list marks it high. If your current wall is raw wave clear and Falcon does not fix that wall faster than a carry upgrade, it can wait.',
        ],
        bullets: [
          'Good sign: Falcon makes expensive upgrades arrive earlier.',
          'Good sign: Falcon keeps value through long waves instead of only the opener.',
          'Bad sign: your account still lacks a real main carry.',
          'Bad sign: you are spending rare rerolls before testing Falcon in the target mode.',
        ],
      },
      {
        heading: 'Trait and gear direction',
        paragraphs: [
          'Falcon should not receive a random trait just because it is new. Choose the role first. If you use Falcon for farm tempo, economy or support logic matters. If you use Falcon as secondary damage, damage and cooldown logic matter more.',
          'Gear should follow the same rule. A farm-support Falcon does not need the same gear plan as a pure DPS unit. Use gear only after Falcon has proved which role it actually plays on your account.',
        ],
      },
      {
        heading: 'How to test Falcon safely',
        paragraphs: [
          'Run the same stage twice: once with your current team and once with Falcon in the slot it would replace. Watch upgrade timing, leak timing, boss health, and whether the clear becomes easier without over-upgrading Falcon.',
          'If the test improves, Falcon can move into the active squad plan. If the test does not improve, keep Falcon as a watch unit and spend materials on the role that is actually blocking progress.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Falcon good in Anime Squadron?',
        answer:
          'Falcon is a strong 0.5 watch unit when farm, support, or execute-style value changes your run. It is not automatically the first carry for every account.',
      },
      {
        question: 'Should Falcon get my first rare rerolls?',
        answer:
          'Only if Falcon has already improved a real clear or farm loop. Otherwise save rare rerolls for a confirmed carry or boss-damage unit.',
      },
      {
        question: 'What role does Dark Falcon play?',
        answer:
          'Current public data points to hybrid utility: support, farm tempo, and some damage value. Verify exact live values before committing expensive materials.',
      },
    ],
  },
  {
    slug: 'how-to-get-gogeta-gometa',
    title: 'How to Get Gogeta in Anime Squadron',
    seoTitle: 'How to Get Gogeta in Anime Squadron - Gometa Route Guide',
    seoDescription:
      'Learn how to get Gogeta in Anime Squadron, why the unit is called Gometa in-game, what prerequisites to expect, and how to avoid wasting evolution materials.',
    summary:
      'Players search for Gogeta, but Anime Squadron often refers to the unit as Gometa. Treat the route as a long evolution project: prepare prerequisite units, Infinite Mode and Raid milestones, Primal Core, and a material budget before committing.',
    category: 'Units',
    difficulty: 'Advanced',
    coverImageUrl: cover,
    publishedAt: '2026-06-22',
    updatedAt: '2026-06-22',
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Built from current Gogeta/Gometa route demand and a June 2026 route guide. Specific material counts can change, so the article frames them as checklist leads to verify in-game.',
    videoSearchQueries: [
      'how to get Gogeta in Anime Squadron',
      'Anime Squadron Gometa guide',
      'Anime Squadron SSJ4 Gogeta',
      'Anime Squadron Primal Core',
    ],
    tags: ['Gogeta', 'Gometa', 'Evolution'],
    relatedRoutes: [
      '/tier-list',
      '/units',
      '/guides/secret-units-guide',
      '/guides/update-0-5-tier-list',
      '/guides/gems-gold-spending-guide',
      '/guides/trait-shards-reroll-cubes-farm',
    ],
    body: [
      {
        heading: 'Gogeta search usually means Gometa',
        paragraphs: [
          'Anime Squadron players often search "Gogeta" because that is the familiar anime reference. In game and guide coverage, the target is commonly written as Gometa or Gometa (SSJ4). This page uses both names so players can connect the search term to the in-game route.',
          'Gometa is not a casual first-hour target. Current tier-list and route checks frame it as a premium carry or boss-damage project that needs prerequisite units, milestones, and evolution materials.',
        ],
      },
      {
        heading: 'Route checklist before spending',
        paragraphs: [
          'The route lead most current guides agree on starts with preparing Goki and Vegata style prerequisite units, then moving through SSJ4/evolution work, Infinite Mode progress, Raid stages, and a Primal Core style requirement before the final Gometa step.',
          'Use that as a checklist, not as a reason to empty the account immediately. Before spending, open the live game UI and confirm the material names, counts, and mode requirements because Anime Squadron is still updating quickly.',
        ],
        bullets: [
          'Confirm the in-game name: Gogeta search demand usually maps to Gometa.',
          'Prepare the prerequisite units before chasing final materials.',
          'Expect Infinite Mode and Raid progress to matter.',
          'Verify Primal Core and evolution material requirements in-game.',
          'Do not spend Perfect Cubes until Gometa is clearly part of your main plan.',
        ],
      },
      {
        heading: 'When Gometa is worth the chase',
        paragraphs: [
          'Gometa is worth chasing when your account can support a long premium carry route without freezing normal progress. If every material goes into a future unit while your current squad cannot farm, the chase becomes too expensive.',
          'A better route is to keep one active carry farming, then move extra resources into Gometa preparation. That way the account still earns Gems, Gold, rerolls, and mode rewards while the long evolution route comes together.',
        ],
      },
      {
        heading: 'How to build after unlocking',
        paragraphs: [
          'After unlocking Gometa, test the unit before rerolling heavily. If it improves wave clear, boss damage, or higher-value farming, then traits, stat rerolls, and gear have a clear purpose.',
          'If Gometa is not yet outperforming your current carry, the problem may be upgrade level, gear, support, or missing materials rather than the unit itself. Test one variable at a time before spending rare resources.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Gogeta called Gometa in Anime Squadron?',
        answer:
          'Yes, current public guide data and tier-list coverage commonly use Gometa for the Gogeta-style unit.',
      },
      {
        question: 'Is Gometa the best unit in Anime Squadron?',
        answer:
          'Gometa is one of the strongest current carry signals, but the best unit for your account depends on whether you can complete and support the route.',
      },
      {
        question: 'Should beginners chase Gogeta first?',
        answer:
          'Most beginners should keep farming with a stable carry while preparing the route, instead of draining all rewards into a long evolution project immediately.',
      },
    ],
  },
  {
    slug: 'berserker-guide',
    title: 'Anime Squadron Berserker Guide',
    seoTitle: 'Anime Squadron Berserker Guide - Enraged Build and Tier Value',
    seoDescription:
      'Plan Anime Squadron Berserker or Berserker Enraged after UPD 0.5 with DPS role checks, gear direction, reroll timing, and tier-list cautions.',
    summary:
      'Berserker became one of the clearest UPD 0.5 DPS search opportunities. Build it like a premium damage project: prove the role, then align traits, gear, and rerolls around the stage it improves.',
    category: 'Units',
    difficulty: 'Advanced',
    coverImageUrl: cover,
    publishedAt: '2026-06-22',
    updatedAt: '2026-06-22',
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Built from current 0.5 tier-list checks that place Berserker/Enraged among top damage targets. Exact banner and upgrade values should be checked in game.',
    videoSearchQueries: [
      'Anime Squadron Berserker guide',
      'Anime Squadron Berserker Enraged',
      'Anime Squadron Berserk update',
      'Anime Squadron 0.5 best units',
    ],
    tags: ['Berserker', 'UPD 0.5', 'DPS'],
    relatedRoutes: [
      '/tier-list',
      '/units',
      '/guides/update-0-5-tier-list',
      '/guides/gear-crafting-guide',
      '/guides/traits-reroll-guide',
    ],
    body: [
      {
        heading: 'Why Berserker matters in 0.5',
        paragraphs: [
          'Berserker is the new 0.5 unit name that belongs in the damage conversation. Current tier-list checks place Berserker/Enraged near other premium DPS options, so it deserves a clear upgrade route instead of a vague mention.',
          'That does not mean every player should instantly move all materials into Berserker. The right question is whether Berserker beats your current damage plan in the mode that matters.',
        ],
      },
      {
        heading: 'What to test first',
        paragraphs: [
          'Test Berserker as a main carry or boss-damage unit. Watch whether it clears waves earlier, removes bosses faster, or lets the squad reach a better reward loop with the same support structure.',
          'If the unit needs heavy investment before it changes anything, pause and compare it against Gometa, Madora, Woo, Puppeteer, or your current carry. A new patch unit can be excellent and still be too expensive for a young account.',
        ],
        bullets: [
          'Test the same stage before and after adding Berserker.',
          'Track boss health and leak timing, not just lobby damage.',
          'Upgrade only until the run changes, then reassess.',
          'Avoid rare rerolls before the role is proven.',
        ],
      },
      {
        heading: 'Trait and gear direction',
        paragraphs: [
          'Because Berserker is primarily a DPS signal, traits and gear should support damage, cooldown, range, or the specific stat that makes the target stage easier. Do not put economy logic on Berserker unless the build has a very clear reason.',
          'Gear crafting should wait until Berserker has a permanent or semi-permanent slot. If you are still deciding between Berserker and another carry, keep rare materials flexible.',
        ],
      },
      {
        heading: 'How Berserker compares to Gometa',
        paragraphs: [
          'Gometa/Gogeta is a long evolution project with strong premium-carry signals. Berserker is the new 0.5 DPS target with patch momentum. Which one is better depends on access, material cost, and what your account can build now.',
          'If Berserker is available and improves your current wall faster, it may be the better immediate project. If you are already deep into Gometa preparation, do not abandon the route only because a new unit is trending.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Berserker good in Anime Squadron?',
        answer:
          'Yes, current UPD 0.5 tier-list checks treat Berserker/Enraged as a top DPS signal, but you should still test whether it solves your current stage.',
      },
      {
        question: 'Should I gear Berserker first?',
        answer:
          'Gear Berserker after it proves a real DPS role. If the unit is still a test slot, save rare gear materials.',
      },
      {
        question: 'Is Berserker better than Gogeta?',
        answer:
          'It depends on access and cost. Berserker may be easier to test as a 0.5 DPS target, while Gometa/Gogeta is a longer premium evolution route.',
      },
    ],
  },
  {
    slug: 'gacha-bag-reroll-cubes-guide',
    title: 'Anime Squadron Gacha Bag and Reroll Cubes Guide',
    seoTitle: 'Anime Squadron Gacha Bag Guide - Reroll Cubes and Rewards',
    seoDescription:
      'Use the Anime Squadron Gacha Bag guide to plan Reroll Cubes, Infinite Mode reward checks, Gems, Gold, Trait Rerolls, and safe spending rules.',
    summary:
      'Gacha Bag demand is really resource demand: players want Reroll Cubes, Gems, Gold, and trait materials without wasting them. Treat Gacha Bags as a reward route, then spend only on a named unit and a named wall.',
    category: 'Rewards',
    difficulty: 'Intermediate',
    coverImageUrl: cover,
    publishedAt: '2026-06-22',
    updatedAt: '2026-06-22',
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Built from current Reroll Cubes and Gacha Bag search demand. Public data suggests Infinite Mode reward relevance, but reward odds and exact pools should be verified in game.',
    videoSearchQueries: [
      'Anime Squadron Gacha Bag',
      'Anime Squadron Reroll Cubes',
      'Anime Squadron Infinite Mode rewards',
      'Anime Squadron Trait Rerolls farm',
    ],
    tags: ['Gacha Bag', 'Reroll Cubes', 'Rewards'],
    relatedRoutes: [
      '/reroll',
      '/codes',
      '/game-modes',
      '/guides/trait-shards-reroll-cubes-farm',
      '/guides/stat-reroll-guide',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'What Gacha Bag demand means',
        paragraphs: [
          'When players search for Anime Squadron Gacha Bag, they are usually trying to answer a resource question. They want to know where Reroll Cubes, Gems, Gold, Trait Rerolls, and other upgrade materials come from, and whether the grind is worth it.',
          'Current public leads connect Gacha Bag style rewards with Infinite Mode and resource farming, but exact pools can change. Use this page as the spending plan and verify the live reward screen before counting on a specific drop.',
        ],
      },
      {
        heading: 'Farm with a spending target',
        paragraphs: [
          'Do not farm Gacha Bags just because the reward name sounds valuable. Farm them because one specific unit needs one specific improvement: a trait attempt, a stat reroll, or a resource push that changes a clear.',
          'The best resource loop is simple: choose the unit, choose the wall, farm the bag or mode, spend in a small batch, then test the same stage again. If the run does not improve, stop and reconsider the role.',
        ],
        bullets: [
          'Use codes first so you know how many resources are still missing.',
          'Farm Infinite Mode or reward routes only when they fund a target.',
          'Spend Reroll Cubes in small batches.',
          'Save premium materials for units that already have a role.',
        ],
      },
      {
        heading: 'Reroll Cubes are not free progress',
        paragraphs: [
          'Reroll Cubes feel like progress because they create new outcomes, but a reroll on the wrong unit can leave the account weaker than before. Pick a keeper unit before using them.',
          'If you are deciding between Berserker, Gometa, Falcon, or an older carry, wait until the role is clear. A Reroll Cube should make a confirmed unit better, not help you avoid choosing.',
        ],
      },
      {
        heading: 'When to stop farming bags',
        paragraphs: [
          'Stop when you have enough to test the next improvement. Endless farming can delay the actual decision: which unit is supposed to carry, support, farm, or control the next hard run.',
          'After each spending batch, test the stage. If the same problem remains, it may be a team-shape issue rather than a resource issue. Go back to units, tier list, and gear planning before farming more.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does Gacha Bag give in Anime Squadron?',
        answer:
          'Current public leads connect Gacha Bag style rewards with resources such as Gems, Gold, Trait Rerolls, and Reroll Cubes, but the exact live pool should be checked in game.',
      },
      {
        question: 'Where should I use Reroll Cubes?',
        answer:
          'Use Reroll Cubes on a keeper unit that already has a role, such as a carry, boss-damage unit, support, or farm unit that improves a real run.',
      },
      {
        question: 'Should I farm Gacha Bags before codes?',
        answer:
          'No. Redeem active codes first, then farm only the resources still needed for your next planned upgrade.',
      },
    ],
  },
  {
    slug: 'secret-units-guide',
    title: 'Anime Squadron Secret Units Guide',
    seoTitle: 'Anime Squadron Secret Units Guide - SSJ4 Gogeta, Shanron, Meta',
    seoDescription:
      'Plan Anime Squadron secret units with SSJ4 Gogeta, Shanron, rare trait, evolution, reroll, Gems, Gold, and carry-priority decisions.',
    summary:
      'Secret units can become the heart of an account, but they are not automatic spending targets. Chase them when they solve a real wall, then protect the resources needed to evolve and trait them correctly.',
    category: 'Units',
    difficulty: 'Advanced',
    coverImageUrl: videoCover(videos.noobToSecret),
    publishedAt: '2026-06-11',
    updatedAt: '2026-06-11',
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Built from June 2026 secret-unit videos, current tier-list coverage, and early-access progression checks around SSJ4 Gogeta, Shanron, traits, and evolution planning.',
    video: videos.noobToSecret,
    videoSearchQueries: [
      'Anime Squadron secret units',
      'Anime Squadron SSJ4 Gogeta',
      'Anime Squadron Shanron Omega',
      'Anime Squadron meta secret unit',
    ],
    tags: ['Secret Units', 'SSJ4 Gogeta', 'Meta'],
    relatedRoutes: [
      '/tier-list',
      '/units',
      '/traits',
      '/reroll',
      '/guides/best-units-tier-list',
      '/guides/trait-shards-reroll-cubes-farm',
    ],
    body: [
      {
        heading: 'Treat a secret pull as a project, not a trophy',
        paragraphs: [
          'Anime Squadron secret units attract attention because they can become account-defining carries. The mistake is spending as if every secret pull has already earned the account. A secret unit still needs a job, a resource plan, and a clear reason to replace or support your current carry.',
          'Use the same test you use for every unit: does it improve waves, bosses, farming, co-op, or evolution progress today? If the answer is unclear, save rare materials until the unit proves where it belongs.',
        ],
      },
      {
        heading: 'SSJ4 Gogeta demand points to carry planning',
        paragraphs: [
          'Current guide videos and tier-list coverage show heavy interest around SSJ4 Gogeta style secret-unit routes. That does not mean every player should drain Gems immediately. It means players need a carry plan that separates chasing the unit from building the unit.',
          'If your account does not already have the resources to support the secret unit, the first goal is preparation: codes redeemed, Gems protected, Gold reserved for the unit that actually clears, and reroll materials saved for the moment the target becomes a keeper.',
        ],
        bullets: [
          'Do not spend Perfect Cubes just because a unit is rare.',
          'Compare the secret unit against your current main carry in the same mode.',
          'Keep enough Gems or Gold to recover if the chase misses.',
          'Wait for a clear role before rolling expensive traits.',
        ],
      },
      {
        heading: 'Shanron and expensive secrets need economy support',
        paragraphs: [
          'Some top-end units are powerful but costly to deploy or evolve. A unit can be high tier and still feel bad on a young account if the run cannot afford it at the right time.',
          'Before committing to an expensive secret, check whether your economy and support structure can make it active soon enough. If the unit arrives too late to stop leaks or bosses, the better short-term spend may be carry upgrades, Gold farming, or economy support.',
        ],
      },
      {
        heading: 'Traits decide whether the secret becomes reliable',
        paragraphs: [
          'A secret unit with the wrong trait can still underperform, while a strong trait on a proven secret can turn it into the core of multiple modes. Current trait lists highlight rare outcomes such as Superior, Cloner, Rebirth, Entrepreneur, Lethal, and Sniper because they change damage, survival, deployment, or range in ways that are easy to feel.',
          'The safe route is to test the secret unit first, then trait it. If it already improves a run, a better trait can make the improvement repeatable. If it does not improve the run yet, rerolling may hide the real problem: the account needs more Gold, support, or a different mode target.',
        ],
      },
      {
        heading: 'Evolution should follow proof',
        paragraphs: [
          'Secret evolution is tempting because it looks like the final answer. In practice, evolution should follow proof. The unit should already solve a problem, and the evolution materials should push that solution further.',
          'If a secret unit only helps after a long setup, build the account that supports the setup first. A rushed evolution plan can freeze progression by moving every reward into a unit that is not yet changing clears.',
        ],
      },
      {
        heading: 'A secret-unit decision route',
        paragraphs: [
          'Start by writing down the wall you are trying to solve. If waves leak, the secret needs wave clear or enough presence to protect the lane. If bosses survive, it needs single-target damage, cooldown value, or support from another unit. If farming is slow, it needs to make a repeatable mode faster.',
          'Next, test the unit with normal upgrades before spending rare rerolls. If the run changes, choose one resource lane: Gold to raise the floor, traits to raise the ceiling, or stat rerolls to fix a specific weakness. Do not try to do all three at once unless the unit has already become the account center.',
          'Finally, keep a fallback carry. Secret-unit chases are volatile in a new Roblox game. If the target misses, your account should still progress through codes, farming, and a role-based tier plan instead of being stuck with empty currency.',
        ],
        bullets: [
          'Name the wall before starting a secret-unit chase.',
          'Test the unit before rare rerolls or Perfect Cubes.',
          'Spend Gold only when the unit changes a clear window.',
          'Use traits after the role is obvious.',
          'Keep farming routes alive while chasing rare units.',
          'Recheck the guide after major banners or balance changes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Anime Squadron secret units always the best units?',
        answer:
          'No. A secret unit is best when it solves your current wave, boss, farm, or support problem better than your existing carry.',
      },
      {
        question: 'Should I chase SSJ4 Gogeta as a beginner?',
        answer:
          'Only after redeeming codes and protecting enough resources to keep progressing if the chase fails.',
      },
      {
        question: 'What trait should a secret unit get first?',
        answer:
          'Use the trait that strengthens its role. Damage carries prefer damage or cooldown value, expensive units may benefit from economy, and fragile anchors need survival or range.',
      },
      {
        question: 'When should I evolve a secret unit?',
        answer:
          'Evolve after the unit has already proven it can improve a real clear or farming loop.',
      },
    ],
  },
  {
    slug: 'traits-reroll-guide',
    title: 'Anime Squadron Traits Guide',
    seoTitle: 'Anime Squadron Traits Guide - Trait Shards and Perfect Cubes',
    seoDescription:
      'Plan Anime Squadron traits with a carry-first reroll route, Perfect Cube stop rule, support timing, economy trait caution, and stat-reroll discipline.',
    summary:
      'Trait Shards should make one important unit better. The trap is rerolling every unit a little and ending with no clear improvement.',
    category: 'Traits',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.completeSystems),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Current complete-guide checks focus on secret units, Gems, Gold, traits, and fast progression.',
    video: videos.completeSystems,
    videoSearchQueries: [
      'Anime Squadron Roblox traits',
      'Anime Squadron trait shards',
      'Anime Squadron Perfect Cubes',
      'Anime Squadron fast progression traits',
    ],
    tags: ['Traits', 'Trait Shards', 'Perfect Cubes'],
    relatedRoutes: [
      '/traits',
      '/tier-list',
      '/reroll',
      '/codes',
      '/guides/stat-reroll-guide',
      '/guides/trait-shards-reroll-cubes-farm',
    ],
    body: [
      {
        heading: 'Trait the unit that already has a job',
        paragraphs: [
          'Trait materials are valuable because they can turn a useful unit into a reliable carry. They are weak when they make a replaceable unit slightly cleaner.',
          'Before rerolling, write the job in one sentence: this unit clears waves, kills bosses, controls lanes, supports my carry, or improves farm tempo. If the sentence feels forced, the trait attempt can wait.',
        ],
      },
      {
        heading: 'Use code rewards to choose, not to gamble',
        paragraphs: [
          'Launch codes give enough Trait Shards and reroll materials to tempt players into immediate gambling. That is the wrong mindset. The rewards are there to make your first good unit stronger, not to make every random unit look interesting.',
          'A carry-first trait route keeps the account readable. You know where the materials went, which run they should improve, and when the experiment has failed.',
        ],
      },
      {
        heading: 'Perfect Cubes need a hard stop rule',
        paragraphs: [
          'Perfect Cubes are the material to protect most carefully. Spend one only when the unit has already earned a permanent or semi-permanent slot across waves, bosses, farming, or co-op.',
          'If the target is still a maybe, use cheaper materials or wait. Perfect Cube spending should feel almost boring: the unit is good, the role is clear, and the upgrade changes a known problem.',
        ],
      },
      {
        heading: 'Support and economy traits are timing decisions',
        paragraphs: [
          'Support traits become strong when they improve a proven carry. Economy traits become strong when the extra resources convert into faster upgrades or better reward loops.',
          'Neither should be treated as default day-one priority. If damage is failing, support cannot carry the run by itself. If enemies leak, economy may be too slow for the stage you are attempting.',
        ],
      },
      {
        heading: 'When to stop trait rerolling',
        paragraphs: [
          'Stop when the unit can do the job you selected it for. Chasing a perfect result too early can leave you unable to respond to a better unit, a balance change, or a new mode.',
          'If a trait result is good enough to clear the next farm target, keep it and move to the next account bottleneck. Anime Squadron rewards momentum more than a beautiful reroll screen.',
        ],
      },
      {
        heading: 'A reroll budget you can actually follow',
        paragraphs: [
          'Before opening the trait screen, decide the maximum number of attempts and the minimum result you will keep. Without that rule, every near miss feels like proof that the next roll has to be better.',
          'A simple beginner budget is one serious target, one reason, and one stop point. The target is your keeper unit. The reason is the stage or boss you want to improve. The stop point is the first trait that makes that test easier.',
          'If YouTube walkthroughs show creators rerolling heavily, remember that they may be using a different account, more time, or more currency. Copy their stopping logic, not their spending volume.',
          'Review the result again after the next real update. If balance changes or a new mode raises a different problem, your old trait may still be good, but it may no longer be the next place to spend rare materials.',
        ],
        bullets: [
          'Set a maximum attempt count before rolling.',
          'Keep a useful trait if it changes the next farm target.',
          'Save Perfect Cubes for units that survive future summons.',
          'Leave support and economy rerolls for after the carry is stable.',
          'If the next update is close, keep enough materials to react.',
          'Compare the trait result against the role page before rolling again.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who should get my first Anime Squadron trait rerolls?',
        answer:
          'Your strongest keeper carry or boss-damage unit should usually get the first serious trait attempt.',
      },
      {
        question: 'Should I use Perfect Cubes early?',
        answer:
          'Only if the unit is clearly part of your main squad after codes and initial summons.',
      },
      {
        question: 'Are economy traits worth it?',
        answer:
          'They are worth it only when the extra tempo turns into better clears, faster upgrades, or a higher-value farm loop.',
      },
      {
        question: 'Should support get traits before damage?',
        answer:
          'Usually no. Support should improve a carry that is already worth building.',
      },
    ],
  },
  {
    slug: 'trait-shards-reroll-cubes-farm',
    title: 'Anime Squadron Trait Shards and Reroll Cubes Farm Guide',
    seoTitle: 'Anime Squadron Trait Shards and Reroll Cubes Farm Guide',
    seoDescription:
      'Farm Anime Squadron Trait Shards, Reroll Cubes, Stat Rerolls, Gems, Gold, and Perfect Cubes with a safe spending and stop-rule route.',
    summary:
      'Trait Shards and Reroll Cubes are strongest when they fund one clear improvement. Farm with a named target, spend on one keeper, test the result, and keep enough materials for the next real unit.',
    category: 'Reroll',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.resourceGuide),
    publishedAt: '2026-06-11',
    updatedAt: '2026-06-11',
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Built from current resource, beginner, complete-guide, and trait coverage around Gems, Gold, Trait Shards, Reroll Cubes, Stat Rerolls, Perfect Cubes, and farming decisions.',
    video: videos.resourceGuide,
    videoSearchQueries: [
      'Anime Squadron Trait Shards farm',
      'Anime Squadron Reroll Cubes farm',
      'Anime Squadron Gems Gold rerolls farm',
      'Anime Squadron Superior trait reroll',
    ],
    tags: ['Trait Shards', 'Reroll Cubes', 'Farming'],
    relatedRoutes: [
      '/codes',
      '/traits',
      '/reroll',
      '/guides/traits-reroll-guide',
      '/guides/stat-reroll-guide',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'Farm for the next roll you can explain',
        paragraphs: [
          'Anime Squadron farming gets messy when the target is simply more materials. A better target is a named roll: one trait attempt for the carry, one stat test for a boss unit, or one saved Perfect Cube for a secret unit that already proved itself.',
          'Before farming Trait Shards or Reroll Cubes, write the spend in one sentence. If the sentence is only "I want better stats," the account probably needs a clearer wall first.',
        ],
      },
      {
        heading: 'Codes are part of the farming route',
        paragraphs: [
          'Active codes can give Trait Shards, Reroll Cubes, Stat Rerolls, Perfect Cubes, Gems, and Gold, which means the first farm action is often redeeming, not grinding. Redeem codes before deciding how much more farming is actually needed.',
          'After redeeming, split rewards into two piles: materials you can spend today and materials you should protect. Trait Shards and normal reroll tools can test a keeper. Perfect Cubes should wait until the unit is already important.',
        ],
      },
      {
        heading: 'Trait Shards belong to proven roles',
        paragraphs: [
          'The best Trait Shard target is a unit with a stable role. That might be a main carry, boss damage unit, support anchor, economy unit, or rare secret that has already changed a clear.',
          'Do not spend Trait Shards just to make a temporary unit look cleaner. If a unit is likely to leave the squad after the next summon, the shards should usually stay in the account.',
        ],
      },
      {
        heading: 'Reroll Cubes need a stop point',
        paragraphs: [
          'Reroll Cubes are easy to burn because every result looks close to useful. Set the stop point before rolling. A good stop point is a trait or stat that changes the next run, not a perfect number on a menu.',
          'Roll, test, and stop if the clear improves. If the clear does not improve after a few attempts, change the question. The account may need Gold upgrades, a second role, or a different mode rather than more rerolls.',
        ],
      },
      {
        heading: 'Use repeatable raid farming only when it funds a target',
        paragraphs: [
          'For reroll materials, repeatable raid farming such as Act 3 normal routes can be useful when your account can clear the run consistently. Treat that kind of route as a funding method, not a reason to roll endlessly.',
          'If you farm a raid overnight or repeat it heavily, decide the target before spending the result. The best outcome is not a large material pile; it is a specific carry, secret unit, or trait target becoming stronger without draining every fallback option.',
        ],
      },
      {
        heading: 'Superior, Cloner, and rare traits change the budget',
        paragraphs: [
          'Current trait coverage makes rare traits look exciting for good reason. Superior, Cloner, Rebirth, Entrepreneur, Lethal, Sniper, and Wealthy can all change how a unit performs. The danger is chasing them on the wrong target.',
          'A rare trait is worth more on a unit that already matters. If a weak filler hits a flashy trait, the account still may not improve as much as a normal useful trait on the real carry.',
        ],
      },
      {
        heading: 'A simple farm and spend loop',
        paragraphs: [
          'Use a loop that forces a test after each spend. First, redeem codes and check the material count. Second, choose the unit and the wall. Third, farm until you can afford the next trait or stat attempt. Fourth, roll once or in a small batch. Fifth, test the exact stage or mode that mattered.',
          'If the test improves, stop and keep farming for the next account problem. If the test fails, do not automatically roll again. Ask whether the unit needs Gold, support, a different trait target, or a better role match.',
          'This loop keeps farming from becoming endless. You are not farming because resources exist; you are farming because one specific spend can move the account.',
        ],
        bullets: [
          'Redeem codes before grinding extra materials.',
          'Choose one unit and one wall before rolling.',
          'Use small reroll batches and test between them.',
          'Save Perfect Cubes for confirmed keepers.',
          'Stop when the run changes, even if the trait is not perfect.',
          'Return to farming only with the next spend already named.',
        ],
      },
    ],
    faq: [
      {
        question:
          'What is the best way to farm Trait Shards in Anime Squadron?',
        answer:
          'Start with active codes, then farm only until you can fund a specific trait attempt on a keeper unit.',
      },
      {
        question: 'Should I spend Reroll Cubes as soon as I get them?',
        answer:
          'No. Pick one target and one stop point before using Reroll Cubes.',
      },
      {
        question: 'Are Perfect Cubes part of reroll farming?',
        answer:
          'They are part of the same resource plan, but they should be protected for units that have already proven long-term value.',
      },
      {
        question: 'Should I chase Superior on every unit?',
        answer:
          'No. Superior is strongest on a unit that already has an important role in your squad.',
      },
    ],
  },
  {
    slug: 'stat-reroll-guide',
    title: 'Anime Squadron Stat Reroll Guide',
    seoTitle: 'Anime Squadron Stat Reroll Guide - When to Spend Rerolls',
    seoDescription:
      'Use Anime Squadron Stat Rerolls with a one-carry-at-a-time plan, clear stop rules, Reroll Cube discipline, and launch reward spending logic.',
    summary:
      'Stat rerolls should push a clear, not polish every unit. Focus one keeper, test the run, and stop when the result solves the current wall.',
    category: 'Reroll',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Beginner and complete-guide checks repeatedly mention Gems, Gold, rerolls, farming, and fast progression.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Roblox reroll',
      'Anime Squadron Stat Rerolls',
      'Anime Squadron Reroll Cubes',
      'Anime Squadron Gems Gold Rerolls farm',
    ],
    tags: ['Stat Rerolls', 'Reroll Cubes', 'Optimization'],
    relatedRoutes: [
      '/reroll',
      '/traits',
      '/codes',
      '/tier-list',
      '/guides/trait-shards-reroll-cubes-farm',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'Reroll one unit at a time',
        paragraphs: [
          'Launch codes can make reroll currency look abundant, but early-access materials disappear quickly. The clean plan is to improve one keeper until it changes a clear, then stop.',
          'Avoid the middle path where every unit gets one reroll. That creates a squad full of minor upgrades and no breakthrough. Rerolling should create a visible improvement in the run you are stuck on.',
        ],
      },
      {
        heading: 'Define the wall before you roll',
        paragraphs: [
          'A stat reroll is useful only if you know what problem it is supposed to solve. Are enemies leaking? Is the boss surviving? Are you missing a farm breakpoint? Are upgrades too slow because Gold is the bottleneck?',
          'If you cannot name the wall, do not reroll yet. Run the stage again, watch where the failure happens, and decide whether stats are actually the answer.',
        ],
      },
      {
        heading: 'Stop when the clear changes',
        paragraphs: [
          'A reroll is successful when the unit reaches the next wave, kills the boss in time, or lets you farm a better mode. If the reroll only improves a number you cannot feel, the account may not need more spending yet.',
          'Save the rest for the next keeper or a future balance change. Early games often shift quickly, and liquid reroll currency is a form of power.',
        ],
      },
      {
        heading: 'Use failed rerolls as information',
        paragraphs: [
          'If better stats still do not fix the run, your wall may be team shape, placement, mode choice, or missing support. At that point, more rerolls can become a tax on a bad plan.',
          'Go back to the units page and ask which role is missing. A control unit may buy time, boss damage may finish the wall, or economy may let your carry upgrade earlier.',
        ],
      },
      {
        heading: 'Reroll Cubes versus Perfect Cubes',
        paragraphs: [
          'Normal reroll tools can be used to test a promising unit. Perfect Cubes should be saved for a unit that has already proven itself. Treat the two materials differently.',
          'If you are unsure whether a unit belongs in your long-term squad, it is not a Perfect Cube target yet. Let gameplay prove the unit first.',
        ],
      },
      {
        heading: 'Read the run after each reroll',
        paragraphs: [
          'A reroll session should include testing, not just clicking. Roll, run the stage that blocked you, and watch the exact moment that changes. If the wave ends cleaner, the reroll worked. If the boss still survives with the same health, the account may need a different role.',
          'This is the part many short guides skip. Stats are only meaningful when they change timing: enemies die before the lane collapses, the boss falls before the timer, or farming becomes consistent enough to repeat.',
          'If a YouTube guide shows a fast progression route, notice how often the creator tests after upgrades. That test loop is more valuable than any single stat result because it tells you when to stop spending.',
          'When you cannot see a difference after two or three attempts, pause and change the question. The account may need better placement, a second damage role, or more Gold before another stat roll becomes useful.',
        ],
        bullets: [
          'Test the same stage before and after the reroll.',
          'Write down the failure point so you know whether it moved.',
          'Stop if the next improvement would cost too much for too little change.',
          'Move currency to another unit only when the first project has a clear result.',
          'Keep a few rerolls liquid for a better unit or balance patch.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many units should I stat reroll early?',
        answer:
          'Usually one. Start with your main carry and only move on when the result changes progression.',
      },
      {
        question: 'Should I reroll filler units?',
        answer:
          'No, unless the filler is unexpectedly carrying your current mode and will stay useful.',
      },
      {
        question: 'What if rerolls do not help?',
        answer:
          'Check team composition, placement, unit role, and mode choice before spending more.',
      },
      {
        question: 'Should I save some rerolls?',
        answer:
          'Yes. Saving rerolls keeps you flexible for better units, future banners, and balance changes.',
      },
    ],
  },
  {
    slug: 'gems-gold-spending-guide',
    title: 'Anime Squadron Gems and Gold Guide',
    seoTitle: 'Anime Squadron Gems and Gold Guide - Spending Priority',
    seoDescription:
      'Spend Anime Squadron Gems and Gold with a launch-stage priority ladder for summons, carry upgrades, trait support, farming, and reroll decisions.',
    summary:
      'Gems create options; Gold creates momentum. Spend enough to reach the next farm or clear breakpoint, but keep rare materials for units that prove their job.',
    category: 'Rewards',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Current beginner-guide checks strongly connect early progression with Gems, Gold, rerolls, farming, and fast progression.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Gems Gold guide',
      'Anime Squadron rerolls farm',
      'Anime Squadron fast progression',
      'Anime Squadron beginner Gems Gold',
    ],
    tags: ['Gems', 'Gold', 'Spending'],
    relatedRoutes: [
      '/codes',
      '/units',
      '/tier-list',
      '/traits',
      '/guides/stat-reroll-guide',
    ],
    body: [
      {
        heading: 'Gems are option value',
        paragraphs: [
          'Gems should help you find better unit options or respond to a useful banner. Spending every Gem immediately feels active, but it can leave you unable to react when a better target appears.',
          'After redeeming codes, decide whether your current squad already has a carry. If not, Gems should mostly serve summoning. If yes, keep some Gems for the next banner, update, or farming route that gives clearer value.',
        ],
      },
      {
        heading: 'Gold is momentum',
        paragraphs: [
          'Gold should go into the unit that improves your next clear. In a lane battler, one stronger carry usually does more than several small upgrades spread across filler units.',
          'When Gold runs low, stop upgrading sideways and test whether the carry actually needs levels, traits, better stats, or a different support role.',
        ],
      },
      {
        heading: 'Farm until the next decision, not forever',
        paragraphs: [
          'Players searching for Gems and Gold usually want a farm loop. The better question is what the farm is buying. Farm until you can do the next summon attempt, carry upgrade, trait attempt, or reroll test.',
          'If you keep farming without a target, the account can stall in a comfortable loop. Set the next decision first, then farm to fund it.',
        ],
      },
      {
        heading: 'Do not spend for the menu',
        paragraphs: [
          'A clean upgrade menu is not the same as a stronger account. Spend because the next run changes: earlier upgrades, safer boss timing, fewer leaks, or access to a better reward mode.',
          'If you cannot name the run that improves, hold the currency. Saving is not passivity; it is preserving the ability to act when the next real target appears.',
        ],
      },
      {
        heading: 'The simple launch priority ladder',
        paragraphs: [
          'First, use Gems to find one carry candidate. Second, use Gold to make that carry clear better. Third, use traits or stat rerolls only if the carry is a keeper. Fourth, add boss damage or control once the mode demands it.',
          'This ladder is intentionally conservative because Anime Squadron is new. It keeps low spenders and free players from turning launch gifts into scattered progress.',
        ],
      },
      {
        heading: 'A practical farming and spending rhythm',
        paragraphs: [
          'Use a loop that always ends in a decision. Farm until you can afford one summon target, one carry upgrade, one trait attempt, or one stat reroll test. Then spend, test, and return to farming only if the result points to the next clear step.',
          'This rhythm fits free players because it avoids emotional spending. You do not need to empty Gems because a banner exists, and you do not need to drain Gold because an upgrade button is available.',
          'Walkthrough videos are useful here because they reveal pacing. If creators repeatedly stop to farm before a major upgrade, that tells you the bottleneck is normal. If they clear with a focused carry instead of a full upgraded squad, that supports the one-project rule.',
          'Review your currency after every code wave or banner. Extra Gems may justify another summon attempt, while extra Gold may be better spent proving the carry you already own instead of chasing a cleaner roster screen.',
        ],
        bullets: [
          'Farm with a named purchase in mind.',
          'Hold part of your Gems when a banner or update is likely.',
          'Use Gold on the unit that changes the next run first.',
          'Do not convert every code reward into rerolls on the same day.',
          'Check whether farming time is buying progress or only delaying a decision.',
          'If a purchase does not unlock a test, leave the currency unspent.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I spend Gems on summons first?',
        answer:
          'If you do not have a clear carry, yes. If you already have one, keep some Gems for banners or updates.',
      },
      {
        question: 'What should Gold upgrade first?',
        answer:
          'Upgrade the unit that changes your next wave, boss, farm, or reward mode.',
      },
      {
        question: 'Should I save every reward?',
        answer:
          'No. Spend enough to progress, but avoid draining scarce rewards without a target.',
      },
      {
        question: 'When should I farm Gems and Gold?',
        answer:
          'Farm when you know the next purchase or upgrade you are trying to fund.',
      },
    ],
  },
  {
    slug: 'game-modes-rewards-guide',
    title: 'Anime Squadron Game Modes Guide',
    seoTitle: 'Anime Squadron Game Modes Guide - Waves, Bosses, Co-op, Ranks',
    seoDescription:
      'Understand Anime Squadron game modes, including story waves, boss challenges, co-op play, rank pressure, farming routes, and early reward priorities.',
    summary:
      'Anime Squadron modes test different problems. Waves test carry damage, bosses test burst, co-op rewards role splitting, and ranks should wait until your launch squad is stable.',
    category: 'Game Modes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.noobToPro),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Noob-to-pro and full-completion checks show demand for mode order, farming, and progression routing.',
    video: videos.noobToPro,
    videoSearchQueries: [
      'Anime Squadron Roblox gameplay',
      'Anime Squadron noob to pro',
      'Anime Squadron game modes',
      'Anime Squadron 100 completed',
    ],
    tags: ['Game Modes', 'Bosses', 'Co-op'],
    relatedRoutes: [
      '/game-modes',
      '/units',
      '/tier-list',
      '/guides/beginner-guide',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'Waves are the first account check',
        paragraphs: [
          'Normal waves reveal whether your carry is good enough and whether placement makes sense. If enemies leak before bosses matter, solve wave clear first.',
          'Use early waves to learn upgrade timing, lane pressure, and which units actually deal with crowds. This is where the first carry earns the right to receive Gold and rerolls.',
        ],
      },
      {
        heading: 'Bosses ask a different question',
        paragraphs: [
          'Boss pressure can make a wave-clear squad look weak. If normal enemies are handled but the boss survives too long, your issue is not more filler; it is boss damage, control timing, or stronger carry stats.',
          'This is where a second serious unit can make sense. Build it after the main carry is stable, not before.',
        ],
      },
      {
        heading: 'Co-op rewards clean role splitting',
        paragraphs: [
          'The official description mentions teaming up with friends, and Anime Squadron naturally rewards split jobs. One player can anchor damage while another brings control, support, or economy if the mode allows it.',
          'Co-op can hide a weak solo squad, so do not use it as the only measure of account strength. If you still need solo progression, keep checking whether your own carry can clear without being carried by another player.',
        ],
      },
      {
        heading: 'Rank push is not a day-one default',
        paragraphs: [
          'Ranks are attractive because they create visible progress, but early-access rank pressure can be expensive. You should push ranks only after the account has a stable carry, a boss plan, and enough reroll discipline to avoid panic spending.',
          'If a rank attempt drains Gems, Gold, and cubes without opening better rewards, step back and farm a stronger foundation.',
        ],
      },
      {
        heading: 'Choose the mode by the problem it solves',
        paragraphs: [
          'Play waves when you need basic progression, bosses when you need damage testing, co-op when role splitting creates a better clear, and farming loops when they fund a named decision.',
          'This turns mode selection into strategy instead of habit. The best mode is the one that gives the next useful material or teaches the next squad weakness.',
        ],
      },
      {
        heading: 'Keep a reward note after each mode',
        paragraphs: [
          'After a run, record two things: what reward you gained and what problem remained. If waves gave Gold but bosses still timed out, the next stop is boss damage. If co-op worked but solo failed, your personal carry or support structure still needs attention.',
          'This habit makes game modes easier to choose. Instead of asking which mode is best in general, you can ask which mode funds the next decision. That is the difference between progression and grinding out of habit.',
          'Noob-to-pro videos are especially useful for this page because they show mode order. Use them to compare when creators farm, when they push, and when they stop to upgrade before attempting harder content.',
          'Revisit the mode plan when an update adds rewards, codes, or balance changes. A mode that was inefficient on day one can become useful if it starts dropping the material your current account is missing.',
          'When two modes feel similar, choose the one with the clearer next purchase. Better rewards only matter if they become summons, upgrades, trait attempts, or reroll tests that change a real wall.',
        ],
        bullets: [
          'Use waves to test basic clear and placement.',
          'Use bosses to test single-target damage and control timing.',
          'Use co-op to learn role splits, then retest your solo account.',
          'Use farming loops only when the next purchase is already named.',
          'Stop pushing a mode when the reward no longer funds the current wall.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which Anime Squadron mode should beginners play first?',
        answer:
          'Start with wave or story-style progression so you can learn lanes, placement, and upgrade timing.',
      },
      {
        question: 'When should I prepare for bosses?',
        answer:
          'After normal waves are stable and bulky enemies become the real wall.',
      },
      {
        question: 'Should I push ranks early?',
        answer:
          'Wait until your carry, boss damage, and reroll plan are stable enough that rank attempts do not drain the account.',
      },
      {
        question: 'Is co-op worth playing?',
        answer:
          'Yes, especially when players split damage, control, support, and economy roles instead of duplicating the same weak setup.',
      },
    ],
  },
  {
    slug: 'discord-trello-wiki-guide',
    title: 'Anime Squadron Discord, Trello, and Wiki Guide',
    seoTitle: 'Anime Squadron Discord, Trello, Wiki - Official Links Status',
    seoDescription:
      'Check Anime Squadron Discord, Trello, and Wiki status, learn which links are official, and avoid fake code or download pages.',
    summary:
      'Players want Discord, Trello, and wiki links because early-access Roblox games change quickly. Use Roblox first, treat invite links carefully, and do not trust unofficial downloads.',
    category: 'Community',
    difficulty: 'Beginner',
    coverImageUrl: cover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Public code pages mention Discord as a place to watch for updates, while official Wiki/Trello status remains unverified in the checked sources.',
    videoSearchQueries: [
      'Anime Squadron Discord',
      'Anime Squadron Trello',
      'Anime Squadron Wiki',
      'Anime Squadron official links',
    ],
    tags: ['Discord', 'Trello', 'Wiki'],
    relatedRoutes: ['/discord', '/download', '/codes', '/updates'],
    body: [
      {
        heading: 'Use Roblox as the first official link',
        paragraphs: [
          'The safest official link is the Roblox game page by Komplex Studio. Use that page to play, favorite, follow, and check the live title state.',
          'If a site claims to be official but does not connect back to Roblox or the developer community, treat it as unverified. Early-access games attract copied pages quickly.',
        ],
      },
      {
        heading: 'Discord is useful, but invite links can drift',
        paragraphs: [
          'Code outlets mention the Anime Squadron Discord as a community location for codes and announcements. Discord can be useful for updates, but invite links can change or be copied by unrelated communities.',
          'Prefer links surfaced from Roblox, developer profiles, or trusted update posts. Do not download files, scripts, or modified clients from chat.',
        ],
      },
      {
        heading: 'Trello and official wiki status',
        paragraphs: [
          'During the June 2026 check, public coverage did not verify an official Wiki or Trello page. That may change after launch, so this page treats Trello claims as watch items until they can be tied to the developer.',
          'This site is an unofficial guide wiki. It does not claim to be the official Anime Squadron Wiki, and it does not present unverified community documents as official.',
        ],
      },
      {
        heading: 'How to judge a community source',
        paragraphs: [
          'A useful community source is specific, current, and connected to the game. A risky one asks for account information, pushes executors, or promises private codes that require external forms.',
          'For codes, the safest pattern is simple: find the code from a trusted source, redeem inside the Roblox game, and never paste credentials into a third-party page.',
        ],
      },
      {
        heading: 'When to update your bookmarks',
        paragraphs: [
          'Update bookmarks when Roblox, the developer group, or several trusted code pages point to the same official community link. Do not chase every repost.',
          'A stable bookmark set should include the official Roblox page, this codes page, the Discord status page, and the guide hub.',
        ],
      },
      {
        heading: 'What Discord is good for',
        paragraphs: [
          'A verified Discord is best for fast-moving information: maintenance notices, code drops, update timing, balance chatter, and player reports about bugs. It is not automatically the best place for permanent strategy because chat moves quickly and old advice can be hard to verify.',
          'Use Discord as a signal, then return to stable pages for decisions. If multiple players mention a new code, test it in game and wait for the codes page to mark the result. If players discuss a unit buff, check whether the tier-list role actually changes before spending rare materials.',
          'This separation keeps the wiki useful. Discord can be quick, while the guide site should be slower, cleaner, and easier to revisit.',
        ],
      },
      {
        heading: 'A safe verification checklist',
        paragraphs: [
          'Before trusting a community link, check who shared it, whether it appears on Roblox or a developer-controlled profile, and whether the destination asks for anything unusual. A normal Discord invite should not require your Roblox password, payment details, or a download.',
          'For Trello and wiki claims, look for ownership signals. Does the board identify the developer? Is it linked from an official place? Does it update alongside game changes? If those answers are missing, treat the page as a community note rather than an official source.',
          'This also applies to YouTube descriptions and pinned comments. A creator can be helpful for walkthrough context, but external links still need the same checks before you treat them as official.',
        ],
        bullets: [
          'Keep the official Roblox game page as the anchor link.',
          'Use this site for stable guide decisions and source-tracked code notes.',
          'Treat private code leaks, script servers, and account forms as unsafe.',
          'Update bookmarks only when several trustworthy signals agree.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this the official Anime Squadron Wiki?',
        answer:
          'No. This is an unofficial fan-made guide site for player decisions and source-tracked updates.',
      },
      {
        question: 'Is there an official Anime Squadron Trello?',
        answer:
          'No official Trello was verified during the June 9, 2026 check.',
      },
      {
        question: 'Where should I play Anime Squadron?',
        answer:
          'Use the official Roblox game page for Anime Squadron by Komplex Studio.',
      },
      {
        question: 'Can I trust Discord code leaks?',
        answer:
          'Trust codes only when they can be redeemed inside the game and are confirmed by reliable sources.',
      },
    ],
  },
  {
    slug: 'safe-download-roblox-guide',
    title: 'Anime Squadron Download and Roblox Safety Guide',
    seoTitle: 'Anime Squadron Download - Official Roblox Link and Safety',
    seoDescription:
      'Play Anime Squadron safely through Roblox, avoid unsafe APKs or scripts, and verify the official Komplex Studio game page before joining.',
    summary:
      'Anime Squadron is a Roblox experience. The safe download path is Roblox itself, not APK mirrors, scripts, executors, or copied clients.',
    category: 'Download',
    difficulty: 'Beginner',
    coverImageUrl: cover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Safe-download guidance is based on the official Roblox game page and standard Roblox account-safety rules.',
    videoSearchQueries: [
      'Anime Squadron Roblox download',
      'Anime Squadron official Roblox link',
      'Anime Squadron scripts',
      'Anime Squadron APK',
    ],
    tags: ['Download', 'Roblox', 'Safety'],
    relatedRoutes: [
      '/download',
      '/discord',
      '/codes',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'The official play route is Roblox',
        paragraphs: [
          'Anime Squadron lives on Roblox at place id 71132543521245. Use the official Roblox game page and check that the creator is Komplex Studio.',
          'Do not use third-party APKs, modified clients, executors, or scripts. They can put your Roblox account and device at risk, and they are not needed to redeem codes or play the game.',
        ],
      },
      {
        heading: 'How to verify you are on the right page',
        paragraphs: [
          'Check the game title, creator, and URL. The public Roblox API snapshot identifies the universe as 8356066619 and the root place as 71132543521245.',
          'If a link promises free Robux, secret codes, private exploit tools, or a download outside Roblox, leave it. A real code should work inside the game without installing anything extra.',
        ],
      },
      {
        heading: 'Why script searches need a safe answer',
        paragraphs: [
          'Roblox games often attract searches for scripts, executors, and hacked clients. This site does not provide them. The safe answer is to avoid tools that can compromise your account or violate platform rules.',
          'If you want faster progress, use legitimate codes, better spending order, improved unit roles, and stronger reroll discipline instead.',
        ],
      },
      {
        heading: 'Use codes safely after joining',
        paragraphs: [
          'Once you are in the real game, use the codes page to copy active codes. Avoid sites that require installing anything, joining unrelated servers, or entering account details to redeem a code.',
          'Codes should be typed into Anime Squadron, not into a random external form.',
        ],
      },
      {
        heading: 'What to bookmark',
        paragraphs: [
          'Bookmark the official Roblox page, the Anime Squadron codes page, and the beginner guide. That gives you a safe play link, current rewards, and a plan for spending them.',
          'If an official Discord or Trello becomes verified later, add it only after checking that it is connected to the developer or official game page.',
        ],
      },
      {
        heading: 'Search terms that should make you cautious',
        paragraphs: [
          'Players often search for Anime Squadron APK, script, executor, pastebin, auto farm, or free Robux because those terms appear around Roblox games. Those searches are risky. They usually lead away from the official experience and toward tools that can compromise accounts.',
          'A safe guide should answer those searches without providing the unsafe thing. The right answer is to play through Roblox, redeem legitimate codes inside the game, and improve progression through unit roles, farming order, and reroll discipline.',
          'If a website, social post, or upload claims that a download will unlock secret units, unlimited Gems, or private codes, assume it is unsafe unless the official developer has published it through Roblox-connected channels.',
        ],
      },
      {
        heading: 'A safe setup checklist',
        paragraphs: [
          'Use the Roblox app or browser experience you already trust, sign in through Roblox only, and open Anime Squadron from the official game page. Check the creator name before playing, especially if a reposted link came from comments or chat.',
          'After joining, keep account actions inside Roblox. Redeem codes in game, join communities only through verified links, and never install a file just to claim rewards.',
          'If you are helping a younger player, set up the bookmark once and teach them to use that route every time. A repeatable safe path prevents them from searching for random mirrors whenever a new code or update appears.',
        ],
        bullets: [
          'Official game page first, then codes, then beginner guide.',
          'No APK mirrors, executors, modified clients, or external code forms.',
          'No password sharing for giveaways, private servers, or fake support.',
          'Use guide pages for faster progress instead of unsafe automation.',
          'Leave any page that turns game progress into an external login requirement.',
          'Report suspicious links instead of testing them on your main account.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I download Anime Squadron as an APK?',
        answer:
          'No safe standalone APK route is verified. Play through Roblox using the official game page.',
      },
      {
        question: 'Are scripts or executors safe for Anime Squadron?',
        answer:
          'No. This site does not provide scripts, exploits, modified clients, or unsafe downloads.',
      },
      {
        question: 'How do I know it is the right game?',
        answer:
          'Verify the Roblox page title, place id 71132543521245, and creator Komplex Studio.',
      },
      {
        question: 'Where should I redeem codes?',
        answer:
          'Redeem codes inside the real Roblox experience, not on a third-party form.',
      },
    ],
  },
  {
    slug: 'gear-crafting-guide',
    title: 'Anime Squadron Gear Crafting Recipes Guide',
    seoTitle: 'Anime Squadron Gear Guide - Crafting Recipes and Unit Fit',
    seoDescription:
      'Plan Anime Squadron gear crafting recipes with material rarity routes, act farming, unit fit, reroll timing, and when to craft or wait.',
    summary:
      'Gear should support a unit that already has a job. Current recipe sources point to act-based material rarity routing, so craft after you know the unit role, missing material, and stage bottleneck.',
    category: 'Units',
    difficulty: 'Intermediate',
    coverImageUrl: cover,
    publishedAt: CHECKED_AT,
    updatedAt: '2026-06-22',
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Updated from June 22, 2026 gear recipe source checks. Recipe pages are used as leads for material routing and gear examples; exact values should still be verified in the live crafting UI.',
    videoSearchQueries: [
      'Anime Squadron gear guide',
      'Anime Squadron gear crafting recipes',
      'Anime Squadron best gear',
      'Anime Squadron crafting materials',
    ],
    tags: ['Gear', 'Crafting', 'Units'],
    relatedRoutes: [
      '/units',
      '/tier-list',
      '/traits',
      '/reroll',
      '/guides/best-units-tier-list',
    ],
    body: [
      {
        heading: 'Craft gear after the unit has a role',
        paragraphs: [
          'Gear is tempting because it looks like a direct power upgrade, but the best first question is still role fit. A main carry, boss-damage unit, control unit, and economy unit do not need the same gear priority.',
          'Before crafting, decide whether the target unit is staying in your squad for multiple clears. If the unit is a temporary story helper, save rare materials until the account has a clearer carry or support plan.',
        ],
      },
      {
        heading: 'Use act rarity as your first material route',
        paragraphs: [
          'Current gear recipe sources point to an act-based rarity pattern for farming materials. Treat it as a routing lead: early acts cover lower-rarity materials, later acts move into higher-rarity materials, and the exact item names should be confirmed in the crafting UI before spending.',
          'The useful planning pattern is Rare materials from Acts 1-2, Epic from Acts 3-4, Legendary from Acts 5-6, Mythic from Acts 7-8, and Secret-style materials from Acts 9-10. If the game updates a world or recipe, trust the live UI over any static guide.',
        ],
        bullets: [
          'Rare material route: check Acts 1-2 first.',
          'Epic material route: check Acts 3-4 first.',
          'Legendary material route: check Acts 5-6 first.',
          'Mythic material route: check Acts 7-8 first.',
          'Secret material route: check Acts 9-10 and late progression requirements.',
        ],
      },
      {
        heading: 'Use recipes as a spending plan',
        paragraphs: [
          'Current search demand around gear crafting recipes means players want exact tables, but exact recipe numbers can shift during early updates. Use recipes as a spending plan first: identify the missing material, the unit role it helps, and the run where the craft should matter.',
          'Do not craft every recipe just because it appears in a guide. Craft the item that changes your next wall, then test the run before spending again. This matters even more for Falcon, Berserker, Gometa, and other units where the role can be different from account to account.',
        ],
        bullets: [
          'Damage gear belongs on a unit that actually carries waves or bosses.',
          'Support gear belongs on a unit that stays relevant during the whole run.',
          'Control value matters when enemies leak before damage can finish.',
          'Hold rare materials when the unit may be replaced soon.',
        ],
      },
      {
        heading: 'Pair gear with traits and rerolls',
        paragraphs: [
          'Gear, traits, and stat rerolls should point in the same direction. A boss unit with damage gear but a weak trait may still underperform. A control unit with the wrong gear may survive but fail to change the wave.',
          'The practical order is: choose the unit, confirm the role, set a reroll stop rule, then craft gear that reinforces that role. If the role changes, pause before adding more materials.',
        ],
      },
      {
        heading: 'Gear examples to verify before committing',
        paragraphs: [
          'Public recipe sources repeatedly mention high-interest gear such as Hogyoku-style, Devil Sword or Devil Amulet-style, Ninja set, Monarch Daggers, and Money Maker-style economy gear. Use these names as search and crafting leads, not as permanent values.',
          'The best next site upgrade would be a structured gear database after enough recipe values stay stable across the live UI and multiple current sources. Until then, this page should help players choose the right target and avoid spending rare materials on a unit that may leave the team.',
        ],
      },
      {
        heading: 'When this should become a recipe database',
        paragraphs: [
          'A full gear database is worth building only after recipes, material names, and patch behavior are stable enough to maintain. Until then, this page should teach the crafting decision and link players to units, tier list, traits, and reroll planning.',
          'If gear search demand keeps growing and reliable recipe data stays consistent across the live game UI and high-confidence sources, the next step is a structured gear table with material, role, target unit type, act route, and confidence notes.',
        ],
      },
    ],
    faq: [
      {
        question: 'What gear should I craft first in Anime Squadron?',
        answer:
          'Craft gear for the unit that already solves your current wall. For most players that means the main carry or the support that keeps the carry working.',
      },
      {
        question: 'Where do Anime Squadron crafting materials come from?',
        answer:
          'Current recipe sources point to act-based material routing, with lower rarities in earlier acts and higher rarities in later acts. Always confirm the exact recipe in the live crafting UI.',
      },
      {
        question: 'Are Anime Squadron gear recipes final?',
        answer:
          'Treat recipe pages as current leads unless the game UI or official notes confirm them. Recipes can change during live updates.',
      },
      {
        question: 'Should I craft gear before rerolling traits?',
        answer:
          'Usually choose the unit and role first, set a practical reroll stop rule, then craft gear that supports the same role.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
