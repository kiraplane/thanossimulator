import { chronoCardRoutes } from './cards';
import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  beginner: {
    id: 'W9EqTQUNwrE',
    title: "Chrono CCG - Beginner's Guide feat Alliestrasza",
    channel: 'ChronoCCG',
    url: 'https://www.youtube.com/watch?v=W9EqTQUNwrE',
    thumbnailUrl: youtubeThumbnail('W9EqTQUNwrE'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  tips: {
    id: 'lmMB-9aG97c',
    title: '20 Things I Wish I Knew Before Starting Chrono CCG',
    channel: 'bjthebrave',
    url: 'https://www.youtube.com/watch?v=lmMB-9aG97c',
    thumbnailUrl: youtubeThumbnail('lmMB-9aG97c'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  syndicates: {
    id: '2AGBPyxp0DI',
    title: 'Which Syndicate should you play in Chrono CCG?',
    channel: 'bjthebrave',
    url: 'https://www.youtube.com/watch?v=2AGBPyxp0DI',
    thumbnailUrl: youtubeThumbnail('2AGBPyxp0DI'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  divers: {
    id: 'hbbC_AvUCcA',
    title: '9 Diver Tricks That Win Games in Chrono CCG',
    channel: 'bjthebrave',
    url: 'https://www.youtube.com/watch?v=hbbC_AvUCcA',
    thumbnailUrl: youtubeThumbnail('hbbC_AvUCcA'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  priority: {
    id: 'NlEV2XHNeEA',
    title: 'Chrono CCG - Priority Explained feat Alliestrasza',
    channel: 'ChronoCCG',
    url: 'https://www.youtube.com/watch?v=NlEV2XHNeEA',
    thumbnailUrl: youtubeThumbnail('NlEV2XHNeEA'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  timelines: {
    id: 'ndbNPk3U2wU',
    title: 'Chrono CCG - Syndicates & Timelines feat Alliestrasza',
    channel: 'ChronoCCG',
    url: 'https://www.youtube.com/watch?v=ndbNPk3U2wU',
    thumbnailUrl: youtubeThumbnail('ndbNPk3U2wU'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  starterDeck: {
    id: 'zfKaUzJNOT0',
    title: 'Starter Deck Guide for Beta Launch',
    channel: 'Chrono CCG creator',
    url: 'https://www.youtube.com/watch?v=zfKaUzJNOT0',
    thumbnailUrl: youtubeThumbnail('zfKaUzJNOT0'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  sprouts: {
    id: '7KwGukMAMDs',
    title: 'The BEST Beginner Deck Is Also Tier 1?! | Sprouts Deck Guide',
    channel: 'bjthebrave',
    url: 'https://www.youtube.com/watch?v=7KwGukMAMDs',
    thumbnailUrl: youtubeThumbnail('7KwGukMAMDs'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  introCode: {
    id: '4Om2NnTdTOY',
    title: 'Where Have I Been?! Introducing Chrono CCG',
    channel: 'Alliestrasza',
    url: 'https://www.youtube.com/watch?v=4Om2NnTdTOY',
    thumbnailUrl: youtubeThumbnail('4Om2NnTdTOY'),
    publishedAt: '2026-06-25',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro = {
  Beginner:
    'Start with basic rules, turn flow, resource planning, and the first decks that teach Chrono without overloading you.',
  Rules:
    'Learn the mechanics that decide games: priority, the chain, combat, shifting, timelines, and immortalization.',
  Decks:
    'Use deck guides as decision routes, then check live lists in the official-linked deck browser.',
  Syndicates: 'Pick your first identity by game plan, not by artwork alone.',
  Codes: 'Source-checked beta codes and redemption safety notes.',
  Meta: 'Early beta meta signals without pretending the card pool is solved.',
  Download: 'Safe Steam, Epic, and official-link guidance.',
  Updates: 'Official beta, patch, and economy changes that affect new players.',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Chrono CCG Beginner Guide',
    seoTitle: 'Chrono CCG Beginner Guide - Rules, First Deck and Beta Tips',
    seoDescription:
      'Start Chrono CCG with a practical beginner route for rules, Divers, timelines, combat, codes, starter decks, and early beta mistakes to avoid.',
    summary:
      'A first-session route for Chrono CCG open beta: learn what wins the game, pick a Diver pair with a plan, claim source-checked codes, play a forgiving starter deck, and study priority before chasing ranked decks.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.beginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Built from official rules, Steam/Epic descriptions, the official beginner video, and current Serper/YouTube beginner demand.',
    video: videos.beginner,
    videoSearchQueries: [
      'Chrono CCG beginner guide',
      'Chrono CCG how to play',
      'Chrono CCG open beta tips',
    ],
    tags: ['Open Beta', 'Rules', 'First Deck'],
    relatedRoutes: [
      '/rules',
      '/codes',
      '/decks',
      '/syndicates',
      '/guides/starter-decks-guide',
    ],
    body: [
      {
        heading: 'Win by respecting the core, not by collecting every card',
        paragraphs: [
          'Chrono CCG looks familiar if you come from other digital card games, but the match is not just about curving agents and attacking. Each player protects a Core, and the enemy Core starting at 20 durability is the number that gives every trade a purpose. If a play does not protect your Core, pressure theirs, or set up a future timeline swing, it needs a reason.',
          'The clean beginner mindset is to treat every round as a board question. Can you develop an agent that matters? Can you attack without losing your only stabilizer? Can you hold a fast action for the chain instead of spending it before the opponent commits? That framing makes the official rules easier because every keyword connects back to board space and core durability.',
        ],
        bullets: [
          'Read the official rules before ladder because beta does not have a full in-game tutorial yet.',
          'Build around two Divers and a real syndicate plan instead of mixing every cool card.',
          'Use codes first, then decide which starter deck or first craft deserves attention.',
          'Check the deck browser after learning the rules, not before.',
        ],
      },
      {
        heading: 'Pick Divers as your deck identity',
        paragraphs: [
          'Divers are not just powerful cards. The official rules define them as the two agents that decide what can go into your deck, and Epic frames the deck shell as two leaders, two syndicates, and forty cards. That makes your Diver pair the first real deck-building decision.',
          'A beginner should pick Divers that explain the game plan in plain language. Lifeblood teaches board growth, Sungrace teaches pressure, Silence teaches answers, Phasetide teaches defensive timing, Splintergleam teaches risky damage, and Singularity teaches sequencing. If you cannot explain how the pair wins, the deck is probably too ambitious for your first ladder session.',
        ],
      },
      {
        heading: 'Learn priority before chasing complicated control decks',
        paragraphs: [
          'Chrono uses a chain system for many slow and fast actions. When a card enters the chain, priority moves back and forth until both players pass, then the latest effect resolves first. That is a familiar structure for some card game players, but it punishes autopilot because the best answer may be saved for one window later.',
          'This is why the first few games should be about recognizing windows, not proving a meta opinion. Play a deck that creates visible board states, pause when the opponent receives priority, and ask what your next action is supposed to beat. If you can name the opposing threat, the chain becomes less scary.',
        ],
      },
      {
        heading: 'Use source-checked codes as a small launch boost',
        paragraphs: [
          'Open beta has code demand because the official beta patch says creators are distributing free-goodie codes and search results expose current beta codes. Codes are useful, but they should not define your whole plan. Treat packs as extra options, then return to deck identity and rules practice.',
          'The safest redemption habit is simple: use official game clients, never download a third-party code tool, and avoid sites that ask for account credentials. If a code fails, check spelling, server state, and whether it was a temporary creator drop before assuming the site is wrong.',
        ],
      },
      {
        heading: 'A first-hour route that keeps you moving',
        paragraphs: [
          'Start with the official rules page, then open the cards and deck browser in a second tab. Pick one forgiving deck idea, play games against the computer if available, then queue real matches once you know what your deck does with its attack token, fast actions, and first timeline shift.',
          'After three to five games, write down why you lost. If the answer is "I did not understand a timing window", read the priority guide. If the answer is "my deck had no plan", read the deck-building guide. If the answer is "I picked the wrong style", read the syndicates guide and switch before crafting deeper.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Chrono CCG free to play?',
        answer:
          'Yes. Steam lists Chrono CCG as free to play, with convenience and cosmetic purchases rather than an upfront price.',
      },
      {
        question: 'What should a new player learn first?',
        answer:
          'Learn Core durability, combat, priority, the chain, Divers, and timeline shifting before copying a ranked deck.',
      },
      {
        question: 'Should I start with a tier list?',
        answer:
          'Use the tier list page as a meta watch, not as a final command. Early beta balance can move quickly, so deck plan and rules comfort matter more.',
      },
    ],
  },
  {
    slug: 'syndicates-guide',
    title: 'Which Chrono CCG Syndicate Should You Play?',
    seoTitle:
      'Chrono CCG Syndicates Guide - Lifeblood, Sungrace, Silence and More',
    seoDescription:
      'Choose a Chrono CCG syndicate by game plan: Lifeblood growth, Sungrace burn, Silence control, Singularity engines, Splintergleam pressure, and Phasetide flow.',
    summary:
      'Chrono CCG has six syndicates. Pick one by the kind of decisions you enjoy, then pair it with a second syndicate only when the plan stays clear.',
    category: 'Syndicates',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.syndicates),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Cross-checked against official syndicate descriptions and current syndicate guide demand.',
    video: videos.syndicates,
    videoSearchQueries: [
      'Chrono CCG syndicates',
      'Chrono CCG which syndicate should you play',
      'Chrono CCG Lifeblood Sungrace Silence',
    ],
    tags: ['Syndicates', 'Deck Identity', 'Beginner Choice'],
    relatedRoutes: [
      '/syndicates',
      '/decks',
      '/guides/diver-deckbuilding-guide',
    ],
    body: [
      {
        heading: 'Choose a syndicate by decisions, not by color',
        paragraphs: [
          'The official Chrono site gives each syndicate a strong identity, but the practical choice is about decisions. Lifeblood asks whether you can grow a board without wasting slots. Sungrace asks whether you can turn energy and burn into a fast clock. Silence asks whether you can hold answers for the right priority window.',
          'A good first syndicate is one where the losing games still teach you something. If you enjoy proactive pressure, start with Lifeblood, Sungrace, or Splintergleam. If you enjoy timing and denial, try Silence or Phasetide after reading the priority guide. If you enjoy engine puzzles, Singularity is attractive, but it asks more from deck construction.',
        ],
      },
      {
        heading: 'Lifeblood and Sungrace are the clearest beginner lanes',
        paragraphs: [
          'Lifeblood is the easiest syndicate to understand from the board. It develops units, grows them, and pressures with a position that becomes harder to trade into. That makes it friendly for players who want to learn combat and six-agent board limits without every turn becoming a timing puzzle.',
          'Sungrace is the clean pressure choice. If you like forcing the opponent to answer you, its identity around energy and stellar burn gives you a simple question each round: did this turn push the enemy Core closer to zero? The risk is running out of cards or losing to one defensive swing, so save interaction for the turn that matters.',
        ],
      },
      {
        heading: 'Silence, Phasetide, and Singularity reward patience',
        paragraphs: [
          'Silence is appealing to control players because it quiets opposing plans with mute and removal-style pressure. It is also easy to misplay before you understand the chain. A Silence beginner should study priority, then play slow games with a clear threat map instead of answering the first thing that appears.',
          'Phasetide and Singularity are more about shape than brute force. Phasetide rewinds, heals, and phases around combat. Singularity rewards sequencing and engines. Both become stronger when you can predict the next round, not only the current board.',
        ],
      },
      {
        heading: 'Splintergleam is pressure with a price tag',
        paragraphs: [
          'Splintergleam wants growth through destruction. That can mean bleed, sacrifice, and harsh combat exchanges. It is strong when the payoff is immediate and awkward when you spend Core durability or units without a closing line.',
          'If you choose Splintergleam, count the race every turn. How much damage are you dealing? How much durability are you paying? What happens if the opponent heals or phases one key blocker? The syndicate rewards nerve, but it still requires math.',
        ],
      },
      {
        heading: 'When to combine syndicates',
        paragraphs: [
          'Chrono decks can combine syndicates through the Diver pair, but a second syndicate should make the first plan cleaner. Lifeblood plus Splintergleam can turn sticky boards into bleed pressure. Sungrace plus Silence can pair a clock with answers. Phasetide plus Singularity can build slower value turns.',
          'Avoid choosing two syndicates because both sound cool. A two-syndicate deck still needs one sentence: "I win by..." If that sentence has three different plans, simplify before crafting or importing lists.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best first Chrono CCG syndicate?',
        answer:
          'Lifeblood and Sungrace are the easiest starting points because their plans are visible: build a board or pressure the enemy Core.',
      },
      {
        question: 'Is Silence good for beginners?',
        answer:
          'Silence can be strong, but it is timing-heavy. Learn priority and the chain before making a full control deck your first serious ladder plan.',
      },
      {
        question: 'Can I mix syndicates?',
        answer:
          'Yes. Your Divers define the syndicates you can use. Mix them when the second syndicate improves the main plan.',
      },
    ],
  },
  {
    slug: 'diver-deckbuilding-guide',
    title: 'Chrono CCG Diver and Deck Building Guide',
    seoTitle:
      'Chrono CCG Deck Building Guide - Divers, Syndicates and 40 Cards',
    seoDescription:
      'Build better Chrono CCG decks by choosing Divers first, limiting your plan, using 40 cards with purpose, and checking Runeterra.AR deck lists safely.',
    summary:
      'Divers are your leaders and your deck-building lock. This guide explains how to choose a pair, avoid unfocused piles, and use the deck browser without copying blindly.',
    category: 'Decks',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.divers),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Uses current Diver trick demand, official deck construction framing, and the official-linked Runeterra.AR deck browser.',
    video: videos.divers,
    videoSearchQueries: [
      'Chrono CCG diver tricks',
      'Chrono CCG deck building',
      'Chrono CCG deck builder',
    ],
    tags: ['Divers', 'Deck Building', 'Runeterra.AR'],
    relatedRoutes: [
      '/decks',
      '/cards',
      '/syndicates',
      '/guides/starter-decks-guide',
    ],
    body: [
      {
        heading: 'Your Diver pair is the deck before the deck',
        paragraphs: [
          'In Chrono CCG, Divers are not decorative leaders. The rules define them as the two agents that decide what cards can enter your deck, and store copy frames the deck shell as two leaders, two syndicates, and forty cards. That means a list starts with a pair, not with a pile of favorite cards.',
          'A useful Diver pair answers three questions. What is my primary way to win? Which syndicate cards support that plan? Which cards become worse because the pair pulls me in another direction? If you cannot answer those questions, importing more cards will only hide the problem.',
        ],
      },
      {
        heading: 'Build around one pressure point',
        paragraphs: [
          'Most early deck failures come from trying to be aggro, value, and control at the same time. Chrono has enough timing and board texture that a mixed list can feel playable for several rounds, then suddenly fail because it never picked the turn it was supposed to win.',
          'Choose one pressure point first: Core damage, board growth, repeated value, timeline control, or answer density. Every card should either advance that pressure point, protect it, or buy time for it. Cards that are merely interesting belong in a later experiment.',
        ],
      },
      {
        heading: 'Use the deck browser as a lab notebook',
        paragraphs: [
          'Runeterra.AR is linked from the official Chrono navigation and already shows current Chrono deck lists. That makes it a valuable competitor and data surface, but a list is still a snapshot. Beta players upload experiments, tournament prep, comfort picks, and creator builds that may not match your card collection or skill level.',
          'When you import a list, identify the Diver pair, the first four turns, the intended timeline swing, and the backup plan when the opponent kills your first key agent. If those parts are not visible, do not craft around the list yet.',
        ],
      },
      {
        heading: 'Cut cards by asking what they fix',
        paragraphs: [
          'Deck trimming is not about removing the weakest-looking card. It is about removing the card that fixes no real matchup. If a card only wins when you are already ahead, it may be less important than a plain answer that stops the turn you always lose to.',
          'For a beginner list, keep the curve readable, keep fast interaction easy to hold, and avoid too many cards that require the same board slot. Chrono only allows six agents in play, so a deck full of agents can still run out of useful space.',
        ],
      },
      {
        heading: 'Track changes after each patch',
        paragraphs: [
          'The open beta patch notes already include card text changes and bug fixes. That is enough reason to treat every deck list as dated. A deck that works during one beta week can lose consistency when a key immortalization condition, reward flow, or bug fix changes.',
          'Add a habit: after every official patch, check whether your Diver pair, main payoff, or core defensive tool changed. If the answer is yes, test before climbing.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many cards are in a Chrono CCG deck?',
        answer:
          'Epic store copy describes the deck as two leaders, two syndicates, and forty cards.',
      },
      {
        question: 'Where can I find Chrono CCG decks?',
        answer:
          'Use the Runeterra.AR Chrono decks page linked from the official Chrono navigation, then read the plan before importing.',
      },
      {
        question: 'Should I copy the newest deck list exactly?',
        answer:
          'Copy the structure first. If you do not understand the Diver pair, win condition, and first turns, exact copying will not help much.',
      },
    ],
  },
  {
    slug: 'timeline-priority-guide',
    title: 'Chrono CCG Timeline, Chain and Priority Guide',
    seoTitle:
      'Chrono CCG Timeline and Priority Guide - Chain, Shifting and Combat',
    seoDescription:
      'Understand Chrono CCG timing with priority, the chain, fast actions, shifting timelines, combat resolution, and immortalization windows.',
    summary:
      'The timeline is the part of Chrono that makes games feel different. Learn when effects enter the chain, how shifting works, and why passing priority can be stronger than acting immediately.',
    category: 'Rules',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.priority),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Based on the official rules page and official tutorial videos for priority, syndicates, and timelines.',
    video: videos.priority,
    videoSearchQueries: [
      'Chrono CCG priority explained',
      'Chrono CCG timeline rules',
      'Chrono CCG chain guide',
    ],
    tags: ['Priority', 'Timeline', 'Rules'],
    relatedRoutes: [
      '/rules',
      '/guides/syndicates-guide',
      '/guides/diver-deckbuilding-guide',
    ],
    body: [
      {
        heading: 'Priority is the pause before the real decision',
        paragraphs: [
          'Chrono CCG passes priority when players play many actions or agents. That pause is where the game asks whether you have a better response, whether you should add to the chain, or whether passing creates a stronger resolution order.',
          'New players often spend interaction as soon as it is legal. Better players ask what the opponent is trying to make them do. If the first action is bait, waiting can protect your fast answer for the card that matters.',
        ],
      },
      {
        heading: 'The chain resolves from newest effect to oldest effect',
        paragraphs: [
          'The official rules explain that slow and fast actions enter the chain, then priority passes. When both players pass, the chain resolves beginning with the most recently played effect. This means the last response can change the meaning of everything below it.',
          'The beginner rule is to read the chain from top to bottom before confirming. What resolves first? Does that remove a target? Does it make damage lethal? Does it shift the timeline before a permanent effect matters? One careful read can save a match.',
        ],
      },
      {
        heading: 'Shifting changes the environment, not just one card',
        paragraphs: [
          'Timelines are not main-deck cards. Many effects shift to a timeline, and only one timeline is active at a time. When a new shift happens, the new timeline sits on top of the timeline stack and becomes the active one.',
          'That makes shift timing a deck-building and gameplay decision. A timeline that helps both players can still be correct if your board is ready to use it first. A timeline that hurts the opponent may be weak if you shift before they commit into it.',
        ],
      },
      {
        heading: 'Combat still follows board fundamentals',
        paragraphs: [
          'The timing system is deep, but combat is still about blockers, attackers, strikes, and core damage. When both players pass during combat, blocked and blocking agents strike each other, and unblocked attackers strike the enemy Core.',
          'Before using a fast action in combat, count the after-state. Which agents survive? Which Core takes damage? Which depleted agent cannot block later? If a flashy response does not change those answers, save it.',
        ],
      },
      {
        heading: 'Immortalization changes every future copy',
        paragraphs: [
          'Every non-token agent can Immortalize when its condition is met. Once it does, all copies of that agent for that player transform into the immortalized version for the rest of the game.',
          'This is why some agent trades are not really about the current body. A weak-looking unit may be worth protecting if it is close to immortalizing. A removal spell may be worth saving if killing the unit before that condition blocks the opponent from upgrading every copy.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does shifting do in Chrono CCG?',
        answer:
          'Shifting makes a timeline active. Only the top timeline in the timeline stack has its effects active.',
      },
      {
        question: 'Do fast actions always resolve immediately?',
        answer:
          'No. Fast actions enter the chain and can be answered before the chain resolves.',
      },
      {
        question: 'Why does immortalization matter?',
        answer:
          'When an agent immortalizes, all copies of that agent for that player become the stronger version for the rest of the game.',
      },
    ],
  },
  {
    slug: 'starter-decks-guide',
    title: 'Chrono CCG Starter Decks and First Meta Picks',
    seoTitle:
      'Chrono CCG Starter Deck Guide - Sprouts, Burn, Bleed and Control',
    seoDescription:
      'Choose a Chrono CCG starter deck for open beta with Sprouts, burn, bleed, control, and value options explained by skill level and game plan.',
    summary:
      'Use starter decks to learn the game, not to prove the final beta meta. Sprouts is the cleanest beginner lane, while burn, bleed, and control need sharper timing.',
    category: 'Decks',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.starterDeck),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Based on beta-launch starter deck coverage, Sprouts deck demand, official deck browser signals, and early meta watch queries.',
    video: videos.starterDeck,
    videoSearchQueries: [
      'Chrono CCG starter deck guide',
      'Chrono CCG best beginner deck',
      'Chrono CCG Sprouts deck guide',
    ],
    tags: ['Starter Decks', 'Open Beta', 'Meta Watch'],
    relatedRoutes: ['/decks', '/tier-list', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Pick a starter deck that teaches visible rules',
        paragraphs: [
          'The best first deck is not always the most powerful deck in a creator title. It is the deck that lets you see why you won or lost. For Chrono CCG, that usually means a deck with a clear board plan, a few timing decisions, and enough pressure to punish slow opponents.',
          'Sprouts-style Lifeblood decks are attractive because they teach board space, attack timing, growth, and the six-agent limit. You can see mistakes on the board. That makes the next game easier to improve.',
        ],
      },
      {
        heading: 'Sprouts is the cleanest first recommendation',
        paragraphs: [
          'Current creator coverage repeatedly highlights Sprouts as beginner-friendly. The reason is not only power. Sprouts forces you to learn when a small unit matters, when a wide board becomes a liability, and when growth should turn into attacks.',
          'If you start here, avoid the trap of playing every unit because you can. Board space is a resource. Leave room for the card that changes combat or turns a harmless board into pressure.',
        ],
      },
      {
        heading: 'Burn and bleed are better after you can count races',
        paragraphs: [
          'Sungrace burn and Splintergleam or Lifeblood bleed plans are appealing because they create fast wins. They also punish careless math. You need to know when the enemy Core is actually dead, when healing ruins the clock, and when a sacrifice payment puts you in danger.',
          'Choose these decks when you enjoy pressure and can review losses without blaming variance. A missed damage window is a deck lesson, not just a bad draw.',
        ],
      },
      {
        heading: 'Control is a rules test',
        paragraphs: [
          'Silence and Phasetide control plans can be powerful, but they are harsher first choices. They ask you to hold answers, understand the chain, and know which threat matters before it immortalizes.',
          'If you want to play control immediately, keep the list simple. Use fewer narrow answers, play enough win conditions, and review every lost priority window after the game.',
        ],
      },
      {
        heading: 'Use meta lists as weekly signals',
        paragraphs: [
          'The beta is new and patch notes are active. A deck that looks tier one today may become a matchup target tomorrow. That is why the site treats tier-list demand as a meta watch instead of a fixed ranking.',
          'After you learn one starter deck, open the deck browser and compare lists. If the same Diver pair, early curve, or payoff appears across many lists, that is a stronger signal than a single dramatic match result.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best beginner deck in Chrono CCG?',
        answer:
          'Sprouts-style Lifeblood decks are the safest first recommendation because they teach board growth and combat clearly.',
      },
      {
        question: 'Should I craft a tier one deck immediately?',
        answer:
          'Not before understanding the Diver pair and matchup plan. Import or craft after you know why the list wins.',
      },
      {
        question: 'Are control decks bad for beginners?',
        answer:
          'No, but they are timing-heavy. Read the priority guide before making Silence or Phasetide control your first ladder deck.',
      },
    ],
  },
  {
    slug: 'codes-redeem-guide',
    title: 'Chrono CCG Codes and Redeem Guide',
    seoTitle: 'Chrono CCG Codes - Redeem Beta Codes and Free Packs Safely',
    seoDescription:
      'Check current Chrono CCG beta codes, creator-code context, safe redemption steps, and what to do when a code fails.',
    summary:
      'Open beta has real code demand. Use source-checked codes inside the official game client, avoid third-party tools, and remember that creator drops may rotate quickly.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.introCode),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Official beta patch confirms creator codes, while current search results expose ALLIE and BETALAUNCH. Codes are source-checked, not game-tested.',
    video: videos.introCode,
    videoSearchQueries: [
      'Chrono CCG codes',
      'Chrono CCG redeem codes',
      'Chrono CCG free packs code',
    ],
    tags: ['Codes', 'Redeem', 'Free Packs'],
    relatedRoutes: [
      '/codes',
      '/download',
      '/updates',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Redeem only inside the official game',
        paragraphs: [
          'Chrono CCG codes should be redeemed through the game client or official surfaces, not through a random website that asks for your account. The official beta patch says creators are distributing codes for free goodies, so code demand is legitimate, but the safe path still matters.',
          'Use Steam or Epic to launch the game, sign in normally, then look for the in-game redeem path. If a creator gives a code on stream or in a video description, type it exactly and avoid browser extensions that promise auto-redemption.',
        ],
      },
      {
        heading: 'Try current source-checked codes first',
        paragraphs: [
          'The current codes page lists ALLIE and BETALAUNCH because they surfaced in current creator/search and subreddit signals during the June 25, 2026 pass. They are not game-tested by this site, so treat them as source-checked beta codes rather than guaranteed permanent rewards.',
          'Creator codes can expire, hit claim limits, or rotate during streams. If a code fails, do not keep retrying for an hour. Check spelling, check whether it was a stream-only drop, then move on to official Discord or creator announcements.',
        ],
      },
      {
        heading: 'Spend free packs like a deck builder',
        paragraphs: [
          'Free packs are useful because they widen your card options, but they do not replace a deck plan. Open packs, check which Divers and syndicate cards you actually own, then choose one list to learn. Building three half-decks usually slows progress.',
          'If a code gives draft or event value, use it when you can focus. Draft is a learning mode as much as a reward mode, and it is easier to notice card roles when you are not rushing.',
        ],
      },
      {
        heading: 'Avoid fake-code traps',
        paragraphs: [
          'Chrono CCG is new, which means low-quality code pages can appear quickly. Avoid pages that mix Chrono CCG with Chrono Trigger, Dragon Ball Legends Chrono Crystal, Chrono Core TCG, or unrelated mobile code searches.',
          'A trustworthy code page should show a checked date, source context, and uncertainty when a code was not game-tested. It should not ask for login details, downloads, scripts, APKs, or private-server access.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Chrono CCG codes real?',
        answer:
          'Yes, the official beta patch says content creators are distributing free-goodie codes, but individual code names can rotate or expire.',
      },
      {
        question: 'Are the codes game-tested?',
        answer:
          'No. The current list is source-checked from official, creator, and community signals, but it was not redeemed in-game by this site.',
      },
      {
        question: 'Where should I redeem Chrono CCG codes?',
        answer:
          'Redeem inside the official Chrono CCG game client. Do not enter account details into third-party code tools.',
      },
    ],
  },
  {
    slug: 'card-list-and-deck-builder-guide',
    title: 'Chrono CCG Card List and Deck Builder Guide',
    seoTitle:
      'Chrono CCG Card List and Deck Builder - Official Cards and Runeterra.AR',
    seoDescription:
      'Use the official Chrono CCG card list, Runeterra.AR deck browser, and deck builder without confusing old Chrono games or unrelated card databases.',
    summary:
      'Card list and deck builder searches are core Chrono CCG demand. Use official cards first, then Runeterra.AR decks to study live lists and card roles.',
    category: 'Decks',
    difficulty: 'Beginner',
    coverImageUrl: '/chronoccg/og-image.jpg',
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official Cards nav, official-linked Runeterra.AR deck surface, and Serper card list/decks signals.',
    tags: ['Cards', 'Deck Builder', 'Runeterra.AR'],
    relatedRoutes: ['/cards', '/decks', '/guides/diver-deckbuilding-guide'],
    body: [
      {
        heading: 'Start with official cards when possible',
        paragraphs: [
          'The official Chrono navigation includes a Cards page, and this wiki now keeps a source-checked snapshot of that catalog for quick scanning. Use it to confirm names, syndicates, costs, stats, and text, then open the official card link when live beta wording matters.',
          'Early beta games can change card text quickly, so old screenshots and copied tier lists can go stale fast. For deck building, jump from the card list into linked deck lists for context. Do not import names from unrelated Chrono games.',
        ],
      },
      {
        heading: 'Use Runeterra.AR to understand real deck context',
        paragraphs: [
          'Runeterra.AR is linked directly from the official Chrono site as the deck surface. Its deck browser and builder intent make it the best place to see which cards are appearing together, which Divers define lists, and how players are experimenting during beta.',
          'When reading a list, do not stop at card names. Look at the syndicates, curve, number of agents, number of fast actions, and whether the deck has a clear timeline plan. A card that is excellent in one Diver pair may be filler elsewhere.',
        ],
      },
      {
        heading: 'Separate card list demand from tier list demand',
        paragraphs: [
          'A card list answers "what exists and what does it do?" A tier list answers "what should I prioritize?" Those are different pages. New players often need the card list first because they are still learning names and rules.',
          'During open beta, the safest route is to use the card list for facts, the deck browser for live experiments, and the meta watch page for broad signals. That prevents a single outdated ranking from becoming the whole site.',
        ],
      },
      {
        heading: 'Avoid wrong-game results',
        paragraphs: [
          'Search results can confuse Chrono CCG with Chrono Trigger, Chrono Cross, Chrononauts, Chrono Core TCG, or unrelated mobile games using Chrono as a currency word. Those pages can rank for similar phrases but do not describe this game.',
          'A correct Chrono CCG card page should mention Divers, syndicates, timelines, agents, actions, cores, or Runeterra.AR Chrono decks. If it talks about Chrono Crystals, classic JRPG characters, or tabletop mech cores, it is not the right game.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Chrono CCG have an official card list?',
        answer:
          'Yes. The official Chrono site has a Cards page, and this wiki keeps a static snapshot extracted from that official catalog for quick scanning.',
      },
      {
        question: 'Where is the Chrono CCG deck builder?',
        answer:
          'The official site links to Runeterra.AR Chrono decks, which includes deck browsing and builder navigation.',
      },
      {
        question: 'Why can the wiki snapshot differ from a live card database?',
        answer:
          'The snapshot is useful for search and quick reading, but official beta text can change. Each row links back to the official card page for the live source.',
      },
    ],
  },
  {
    slug: 'steam-epic-download-guide',
    title: 'Chrono CCG Download Guide for Steam and Epic',
    seoTitle: 'Chrono CCG Download - Play Free on Steam or Epic Safely',
    seoDescription:
      'Download Chrono CCG safely through Steam or Epic, understand open beta status, and avoid fake mobile, APK, mod, or private-server links.',
    summary:
      'Chrono CCG is free to play on Steam and Epic during open beta. Use official store pages, ignore APK/mod shortcuts, and treat mobile demand as unconfirmed until official sources say otherwise.',
    category: 'Download',
    difficulty: 'Beginner',
    coverImageUrl: '/chronoccg/og-image.jpg',
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Steam, Epic, and official website links checked on June 25, 2026.',
    tags: ['Steam', 'Epic', 'Download'],
    relatedRoutes: ['/download', '/rules', '/codes', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Use Steam or Epic first',
        paragraphs: [
          'Chrono CCG is currently safest to install through Steam or Epic. Steam lists it as released on June 23, 2026 and free to play, while Epic lists the base game as Early Access and free. Both paths keep updates and account security inside trusted launchers.',
          'The official Chrono homepage links both stores near the top, so there is no reason to use a mirror, installer bundle, or third-party downloader.',
        ],
      },
      {
        heading: 'Open beta is still changing',
        paragraphs: [
          'Steam Early Access text says players can build decks, queue ladder or direct matches, test decks against the computer, and try draft mode. The beta patch also says there will be no further wipes after the launch reset, but bugs and balance updates are expected.',
          'If a feature is missing or a reward email is delayed, check official news and Discord before reinstalling. Patch 0.6.11 specifically told Early Access and Kickstarter players to check spam folders for reward emails.',
        ],
      },
      {
        heading: 'Do not chase fake mobile or APK pages',
        paragraphs: [
          'Serper autocomplete shows Chrono CCG mobile demand, but the official store links currently focus on Steam and Epic. Until official sources announce mobile support, any APK, mod, private server, or hacked-client page should be treated as unsafe.',
          'A safe download page should explain official access and stop there. It should not offer workarounds that risk credentials, malware, or broken clients.',
        ],
      },
      {
        heading: 'What to do after installing',
        paragraphs: [
          'After installing, read the rules page before queueing. Beta does not yet rely on a full in-game tutorial, and the official patch directs new players toward rules and tutorial videos.',
          'Then redeem source-checked codes, pick one starter deck, and use the deck browser to compare lists after you understand the basic turn flow.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Chrono CCG?',
        answer:
          'Use the official Steam or Epic Games Store pages linked from playchrono.com.',
      },
      {
        question: 'Is there a Chrono CCG mobile version?',
        answer:
          'Current official sources checked for this build focus on Steam and Epic. Mobile demand exists, but this site does not claim a mobile version until official sources confirm it.',
      },
      {
        question: 'Is Chrono CCG free?',
        answer:
          'Yes. Steam lists it as free to play, and Epic lists the base game as free Early Access.',
      },
    ],
  },
  {
    slug: 'beta-update-rewards-guide',
    title: 'Chrono CCG Beta Update and Rewards Guide',
    seoTitle:
      'Chrono CCG Beta Update - Patch 0.6.11, Rewards and No More Wipes',
    seoDescription:
      'Understand Chrono CCG Patch 0.6.11: open beta, account wipe reset, reward emails, creator codes, bug fixes, and what new players should check first.',
    summary:
      'Patch 0.6.11 opened beta, reset accounts and collections, says no further wipes are planned, changed Nameless Spirit, fixed bugs, and pointed players to reward emails, rules, tutorials, Discord, and creator codes.',
    category: 'Updates',
    difficulty: 'Beginner',
    coverImageUrl: '/chronoccg/chrono-banner.webp',
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Summarizes the official Patch 0.6.11 beta announcement without copying patch prose.',
    tags: ['Patch 0.6.11', 'Beta', 'Rewards'],
    relatedRoutes: [
      '/updates',
      '/codes',
      '/download',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'The beta patch reset the playing field',
        paragraphs: [
          'Patch 0.6.11 welcomed players into beta by wiping accounts, ELO, rank, collections, and related progress. The important player-facing note is that the official post says there will be no further wipes.',
          'That makes the current beta more meaningful for new players. You can learn decks, collect cards, and follow the meta without expecting another reset to erase the whole account state.',
        ],
      },
      {
        heading: 'Reward emails and creator codes matter',
        paragraphs: [
          'The official patch told Early Access and Kickstarter players to check spam folders for reward emails. It also told new players that content creators would be giving out codes for free goodies during streams and card reveals.',
          'If you bought Early Access or backed the project, check the email tied to that purchase before assuming rewards are missing. If you are a new player, use the codes page for source-checked public codes and follow official community channels for rotating drops.',
        ],
      },
      {
        heading: 'Nameless Spirit and bug fixes are early meta signals',
        paragraphs: [
          'The patch changed Nameless Spirit text and fixed several bugs around rewards, quests, inventory, Doctor Mirthram Remorah damage, mulligan behavior, and board flow. These are not just technical notes. They affect how reliable cards and reward loops feel during early beta.',
          "When a card text or bug fix changes a deck you use, do not assume yesterday's list is still correct. Test the deck again and watch whether the key turn still happens.",
        ],
      },
      {
        heading: 'New players should read rules before ladder',
        paragraphs: [
          'The official patch specifically tells new players to read the website rules and watch tutorial videos because beta does not yet include an in-game tutorial. That is unusually direct and worth following.',
          'Read the rules, play a starter deck, redeem codes, then use the deck browser. Skipping that order usually creates confusion when priority, shifting, or immortalization decides a match.',
        ],
      },
    ],
    faq: [
      {
        question: 'Did Chrono CCG wipe accounts for beta?',
        answer:
          'Yes. Patch 0.6.11 reset accounts and collections for beta, and the official post says there will be no further wipes.',
      },
      {
        question: 'Where are Early Access rewards?',
        answer:
          'The official patch told players to check the email tied to their Early Access or Kickstarter purchase, including spam folders.',
      },
      {
        question: 'Did Patch 0.6.11 change cards?',
        answer:
          'Yes. Nameless Spirit received a text change, and several bug fixes may affect reward flow, quests, inventory, mulligan, and card behavior.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);

export const allCoreRoutes = [
  '/',
  '/guides',
  '/rules',
  '/syndicates',
  '/decks',
  '/cards',
  '/tools',
  '/tools/card-finder',
  '/tools/deck-checker',
  '/tools/curve-analyzer',
  '/codes',
  '/tier-list',
  '/download',
  '/discord',
  '/updates',
  '/disclaimer',
  ...guideRoutes,
  ...chronoCardRoutes,
];

export const relatedRouteLabels: Record<string, string> = {
  '/cards': 'Card List',
  '/codes': 'Codes',
  '/decks': 'Decks',
  '/discord': 'Discord',
  '/download': 'Download',
  '/guides': 'All Guides',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/beta-update-rewards-guide': 'Beta Update',
  '/guides/card-list-and-deck-builder-guide': 'Card List Guide',
  '/guides/codes-redeem-guide': 'Redeem Codes',
  '/guides/diver-deckbuilding-guide': 'Diver Deckbuilding',
  '/guides/starter-decks-guide': 'Starter Decks',
  '/guides/steam-epic-download-guide': 'Steam / Epic',
  '/guides/syndicates-guide': 'Syndicates Guide',
  '/guides/timeline-priority-guide': 'Timeline Priority',
  '/rules': 'Rules',
  '/syndicates': 'Syndicates',
  '/tier-list': 'Meta Watch',
  '/tools': 'Tools',
  '/tools/card-finder': 'Card Finder',
  '/tools/curve-analyzer': 'Curve Analyzer',
  '/tools/deck-checker': 'Deck Checker',
  '/updates': 'Updates',
};

export { officialGameFacts };
