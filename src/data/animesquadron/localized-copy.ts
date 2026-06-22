import type { GuideFaq } from './types';

export type AnimeSquadronLocale = 'en' | 'vi' | 'th' | 'pt-br' | 'id';
export { isLocalizedCoreRoute, localizedCoreRoutes } from './localized-routes';

export function getAnimeSquadronLocale(locale?: string): AnimeSquadronLocale {
  if (
    locale === 'vi' ||
    locale === 'th' ||
    locale === 'pt-br' ||
    locale === 'id'
  ) {
    return locale;
  }

  return 'en';
}

type LinkCopy = {
  title: string;
  body: string;
  href: string;
};

type CoreKeywordCopy = {
  keyword: string;
  href: string;
  intent: string;
};

type HomeCopy = {
  metadataTitle: string;
  metadataDescription: string;
  badge: string;
  h1: string;
  intro: string;
  codesCta: string;
  secondaryCta: string;
  robloxLabel: string;
  primaryLinks: LinkCopy[];
  topicLinks: LinkCopy[];
  launchEyebrow: string;
  launchHeading: string;
  launchBody: string;
  searchEyebrow: string;
  searchHeading: string;
  searchBody: string;
  corePagesHeading: string;
  coreKeywordLinks: CoreKeywordCopy[];
  guideKeywordsHeading: string;
  tierEyebrow: string;
  tierHeading: string;
  guidesEyebrow: string;
  guidesHeading: string;
  allGuides: string;
  siteStatus: string;
};

type CodesCopy = {
  metadataTitle: string;
  metadataDescription: string;
  badge: string;
  h1: string;
  intro: (checkedAt: string) => string;
  statusBody: string;
  checklistHeading: string;
  openRoblox: string;
  redeemGuide: string;
  tierListButton: string;
  rerollButton: string;
  traitsButton: string;
  summaryStatus: (count: number) => string;
  reviewNotes: string[];
  activeHeading: (count: number) => string;
  expiredHeading: string;
  expiredNone: string;
  expiredCount: (count: number) => string;
  watchHeading: string;
  watchIntro: string;
  sourcesHeading: string;
  sourcesIntro: string;
  table: {
    code: string;
    reward: string;
    lastChecked: string;
    status: string;
    notes: string;
    action: string;
  };
  copy: string;
  copied: string;
  faqTitle: string;
  faqs: GuideFaq[];
};

type DiscordCopy = {
  metadataTitle: string;
  metadataDescription: string;
  badge: string;
  h1: string;
  intro: string;
  cards: Array<{
    title: string;
    status: string;
    body: string;
  }>;
  sourceCheck: string;
  guideButton: string;
  downloadButton: string;
  codesButton: string;
  tierButton: string;
  usageHeading: string;
  usagePoints: Array<{
    label: string;
    body: string;
  }>;
  faqs: GuideFaq[];
};

type TierListCopy = {
  metadataTitle: string;
  metadataDescription: string;
  badge: string;
  h1: string;
  intro: string;
  rankingHeading: string;
  rankingPoints: Array<{
    label: string;
    body: string;
  }>;
  unitsButton: string;
  traitsButton: string;
  routeHeading: string;
  routePoints: Array<{
    label: string;
    body: string;
  }>;
  bestUnitsButton: string;
  secretUnitsButton: string;
  codesButton: string;
  unitWatchHeading: string;
  unitWatchIntro: string;
  consensusLabel: string;
  aliasesLabel: string;
  roleFitLabel: string;
  sourceLabel: string;
  tierLabels: {
    rolesSuffix: string;
    tableIntro: string;
    role: string;
    bestFor: string;
    decision: string;
    confidence: string;
    early: string;
    rerollCost: string;
    avoid: string;
  };
  faqs: GuideFaq[];
};

type PageCopy = {
  home: HomeCopy;
  codes: CodesCopy;
  discord: DiscordCopy;
  tierList: TierListCopy;
};

const en: PageCopy = {
  home: {
    metadataTitle: 'Anime Squadron Wiki - Codes, Tier List & Guides',
    metadataDescription:
      'Anime Squadron Wiki with active codes, unit-role tier list, traits, stat rerolls, game modes, Discord links, safe Roblox download notes, and beginner guides.',
    badge: 'Unofficial Roblox strategy wiki',
    h1: 'Anime Squadron Wiki',
    intro:
      'Codes, unit-role tier lists, trait reroll rules, launch spending priorities, game modes, and safe Roblox links for Anime Squadron.',
    codesCta: 'Copy active codes',
    secondaryCta: 'Open tier list',
    robloxLabel: 'Official Roblox page',
    primaryLinks: [
      {
        title: 'Codes',
        body: 'Active rewards, source checks, and redeem fixes',
        href: '/codes',
      },
      {
        title: 'Tier List',
        body: 'UPD 0.5 best units and role fit',
        href: '/tier-list',
      },
      {
        title: 'Discord',
        body: 'Official link checks and community safety notes',
        href: '/discord',
      },
      {
        title: 'Beginner Guide',
        body: 'Codes, summons, and first carry',
        href: '/guides/beginner-guide',
      },
    ],
    topicLinks: [
      {
        title: 'Units',
        body: 'Carry, boss damage, control, support, economy, and starter filler roles.',
        href: '/units',
      },
      {
        title: 'Reroll',
        body: 'Stat Rerolls, Reroll Cubes, and the one-carry-at-a-time rule.',
        href: '/reroll',
      },
      {
        title: 'Game Modes',
        body: 'Waves, bosses, co-op, and launch-stage rank pressure.',
        href: '/game-modes',
      },
      {
        title: 'Traits',
        body: 'Trait Shards and Perfect Cube rules.',
        href: '/traits',
      },
    ],
    launchEyebrow: 'Launch route',
    launchHeading: 'Redeem codes, build one carry, protect Perfect Cubes',
    launchBody:
      'Anime Squadron is still in early access, so the best launch plan is conservative: redeem the newest codes first, test your summons, upgrade one main damage unit, and wait before spending rare reroll materials on filler.',
    searchEyebrow: 'Quick paths',
    searchHeading: 'Choose your next Anime Squadron page',
    searchBody:
      'Jump from the homepage to codes, tier list picks, units, traits, rerolls, game modes, Discord, download, and current update guides.',
    corePagesHeading: 'Core Anime Squadron pages',
    coreKeywordLinks: [
      {
        keyword: 'Anime Squadron codes',
        href: '/codes',
        intent: 'Active rewards and redeem fixes',
      },
      {
        keyword: 'Anime Squadron tier list',
        href: '/tier-list',
        intent: 'Best unit roles and early meta',
      },
      {
        keyword: 'Anime Squadron Discord',
        href: '/discord',
        intent: 'Discord, Trello, official Wiki status',
      },
      {
        keyword: 'Anime Squadron beginner guide',
        href: '/guides/beginner-guide',
        intent: 'First carry, summons, and rewards',
      },
      {
        keyword: 'Anime Squadron units',
        href: '/units',
        intent: 'Carry, boss damage, control, support',
      },
      {
        keyword: 'Anime Squadron traits',
        href: '/traits',
        intent: 'Trait Shards and Perfect Cube rules',
      },
      {
        keyword: 'Anime Squadron reroll',
        href: '/reroll',
        intent: 'Stat Rerolls and Reroll Cubes',
      },
      {
        keyword: 'Anime Squadron download',
        href: '/download',
        intent: 'Official Roblox link and safety',
      },
    ],
    guideKeywordsHeading: 'Focused guides',
    tierEyebrow: 'Tier list snapshot',
    tierHeading: 'UPD 0.5 best units before you spend rerolls',
    guidesEyebrow: 'Latest guides',
    guidesHeading: 'Read the decision page before spending rewards',
    allGuides: 'All guides',
    siteStatus:
      'Site status: unofficial, source-tracked, and built for early-access decisions. It does not provide scripts, exploits, unsafe APKs, or fake official claims.',
  },
  codes: {
    metadataTitle: 'Anime Squadron Codes - Active Rewards and Redeem Guide',
    metadataDescription:
      'Copy new and active Anime Squadron codes for Gems, Trait Shards, Reroll Cubes, Perfect Cubes, Gold, redeem fixes, and reward spending advice.',
    badge: 'Codes',
    h1: 'Anime Squadron Codes',
    intro: (checkedAt) =>
      `Copy the newest Anime Squadron codes first, then use Gems, Trait Shards, Reroll Cubes, Perfect Cubes, and Gold on one clear upgrade plan. Current source check: ${checkedAt}.`,
    statusBody:
      'Rewards currently include Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes, and Perfect Cubes. Redeem the newest codes first, then decide which unit deserves your first real upgrade and reroll investment.',
    checklistHeading: 'Redeem checklist',
    openRoblox: 'Open Roblox game',
    redeemGuide: 'Redeem guide',
    tierListButton: 'Open tier list',
    rerollButton: 'Reroll plan',
    traitsButton: 'Traits plan',
    summaryStatus: (count) => `${count} active codes tracked`,
    reviewNotes: [
      'Anime Squadron codes are case-sensitive; copy them exactly, including punctuation.',
      'Redeem the newest cross-checked active codes before older milestone codes.',
      'Older launch codes were moved out of the active table because two current sources list them inactive.',
      'Use codes before rerolling traits or stats so the free shards, cubes, gems, and gold shape your first real spend.',
      'If a code fails, rejoin a fresh server and retry before assuming it is expired.',
    ],
    activeHeading: (count) => `Active codes (${count})`,
    expiredHeading: 'Expired codes',
    expiredNone: 'No expired Anime Squadron codes are tracked yet.',
    expiredCount: (count) => `${count} expired or inactive codes are tracked.`,
    watchHeading: 'Watchlist codes',
    watchIntro:
      'These codes need stronger confirmation before they should be treated as active.',
    sourcesHeading: 'Sources checked',
    sourcesIntro:
      'Active codes are kept conservative: official pages and multiple current code trackers are preferred, while conflicting entries are moved out of the active table.',
    table: {
      code: 'Code',
      reward: 'Reward',
      lastChecked: 'Last checked',
      status: 'Status',
      notes: 'Notes',
      action: 'Action',
    },
    copy: 'Copy',
    copied: 'Copied',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'What are the active Anime Squadron codes?',
        answer:
          'Use the active table above first. The list is checked against current code trackers and keeps conflicting older entries out of the active table.',
      },
      {
        question: 'Why is my Anime Squadron code not working?',
        answer:
          'Codes are case-sensitive and can expire quickly after updates. Copy the code exactly, keep punctuation, rejoin a fresh server, and try the newest codes first.',
      },
      {
        question: 'What should I spend code rewards on?',
        answer:
          'Use rewards to find and build one main carry first. Save Perfect Cubes and large reroll batches for keeper units.',
      },
      {
        question: 'Where should I check after redeeming codes?',
        answer:
          'Open the tier list and reroll pages before spending Gems, Trait Shards, Perfect Cubes, or reroll materials.',
      },
    ],
  },
  discord: {
    metadataTitle: 'Anime Squadron Discord, Trello and Wiki Links',
    metadataDescription:
      'Check Anime Squadron Discord, Trello, Wiki, official Roblox links, and safe community-link status without falling for fake code or download pages.',
    badge: 'Community',
    h1: 'Anime Squadron Discord, Trello and Wiki',
    intro:
      'Use Roblox as the anchor, treat invite links carefully, and keep codes, tier list decisions, and download steps on stable pages.',
    cards: [
      {
        title: 'Official Roblox',
        status: 'Verified',
        body: 'Use the Roblox game page by Komplex Studio as the primary official link.',
      },
      {
        title: 'Discord',
        status: 'Watch',
        body: 'Mentioned by launch coverage and community guides, but invite links can change. Prefer links surfaced from Roblox or developer channels.',
      },
      {
        title: 'Trello / Official Wiki',
        status: 'Not verified',
        body: 'No official Trello or official Wiki was verified during the latest source check.',
      },
    ],
    sourceCheck: 'Source check',
    guideButton: 'Read link guide',
    downloadButton: 'Safe play link',
    codesButton: 'Active codes',
    tierButton: 'Tier list',
    usageHeading: 'Best way to use Discord updates',
    usagePoints: [
      {
        label: 'Codes:',
        body: 'test new code claims inside the Roblox game before changing your reward plan.',
      },
      {
        label: 'Units:',
        body: 'wait for a role to become clear before spending Perfect Cubes or rare rerolls.',
      },
      {
        label: 'Links:',
        body: 'avoid external downloads, executors, forms, or pages that ask for account details.',
      },
    ],
    faqs: [
      {
        question: 'Is there an official Anime Squadron Trello?',
        answer:
          'No official Trello was verified during the latest source check.',
      },
      {
        question: 'Is this site official?',
        answer: 'No. Anime Squadron Wiki is an unofficial fan-made guide site.',
      },
      {
        question: 'Where should I get safe links?',
        answer:
          'Use the official Roblox page first, then stable codes, tier list, and guide pages for gameplay decisions.',
      },
    ],
  },
  tierList: {
    metadataTitle: 'Anime Squadron Tier List - Best Units and Role Priority',
    metadataDescription:
      'Early Anime Squadron tier list for main carry, boss damage, control, economy, support, and starter filler roles, with reroll and spending advice.',
    badge: 'Tier List',
    h1: 'Anime Squadron Tier List',
    intro:
      'A launch-stage priority list for the unit jobs that matter most: one carry first, then boss damage, control, economy, or support when the mode asks for it.',
    rankingHeading: 'Ranking rules',
    rankingPoints: [
      {
        label: 'Early value:',
        body: 'whether the role helps your first serious wave and boss clears.',
      },
      {
        label: 'Reroll cost:',
        body: 'whether the role deserves scarce reroll materials now or later.',
      },
      {
        label: 'Confidence:',
        body: 'whether the recommendation is official, cross-checked, or still pending launch data.',
      },
      {
        label: 'Search demand:',
        body: 'whether players are looking for a unit-name answer, a role answer, or a reroll decision before spending.',
      },
    ],
    unitsButton: 'Open units guide',
    traitsButton: 'Plan traits',
    routeHeading: 'Current build route',
    routePoints: [
      {
        label: 'Start with one carry.',
        body: 'Your first real unit investment should clear waves or bosses better than the rest of the account.',
      },
      {
        label: 'Delay luxury rerolls.',
        body: 'Perfect Cubes, Trait Shards, and Reroll Cubes are strongest after a keeper unit is obvious.',
      },
      {
        label: 'Patch the visible wall.',
        body: 'Add boss damage, control, support, or economy only when that role fixes the run you are losing.',
      },
      {
        label: 'Treat name lists as leads.',
        body: 'If another tier list ranks a specific anime unit highly, check whether it fills your missing role before replacing a working carry.',
      },
    ],
    bestUnitsButton: 'Read best units guide',
    secretUnitsButton: 'Secret units guide',
    codesButton: 'Redeem codes first',
    unitWatchHeading: 'Named-unit validation watchlist',
    unitWatchIntro:
      'These are the unit names currently supported by multiple competitor tier-list checks. Use them as spending leads, then compare the role to your account before rerolling.',
    consensusLabel: 'Consensus',
    aliasesLabel: 'Search aliases',
    roleFitLabel: 'Role fit',
    sourceLabel: 'Source check',
    tierLabels: {
      rolesSuffix: 'roles',
      tableIntro:
        'Early-access ranking by the job each unit type solves: wave-clear carry, boss damage, control, economy, support, or starter filler.',
      role: 'Role',
      bestFor: 'Best for',
      decision: 'Decision',
      confidence: 'Confidence',
      early: 'early',
      rerollCost: 'reroll cost',
      avoid: 'Avoid',
    },
    faqs: [
      {
        question: 'What is the best Anime Squadron unit?',
        answer:
          'Early data is still forming, so the safest answer is the unit that acts as your main carry and clears the next wave or boss wall.',
      },
      {
        question: 'Should I follow a name-only Anime Squadron tier list?',
        answer:
          'Use name rankings only after checking the role. A unit is worth building when it solves your current wave, boss, farm, or support problem.',
      },
      {
        question:
          'What should I do when two Anime Squadron tier lists disagree?',
        answer:
          'Keep the unit that solves your current clear first, then compare reroll cost, trait quality, and whether the disagreement is about early waves, bosses, or late scaling.',
      },
      {
        question: 'Should I chase a single Anime Squadron unit name first?',
        answer:
          'Only chase a named unit after it fits your route. If players are talking about Vegeta, Gogeta, Infinite, or another meta name, compare its role, reroll cost, and current stage value before spending.',
      },
      {
        question: 'Why does this tier list rank roles?',
        answer:
          'Role rankings avoid inventing unit-name data while Anime Squadron is still in early access. They still tell you where to spend first.',
      },
      {
        question: 'Should I reroll a support unit first?',
        answer:
          'Usually no. Build a carry first, then invest in support once you know exactly which clear it improves.',
      },
    ],
  },
};

const vi: PageCopy = {
  home: {
    ...en.home,
    metadataTitle: 'Anime Squadron Wiki - Code, Tier List và Discord',
    metadataDescription:
      'Anime Squadron Wiki tiếng Việt với code mới, tier list, Discord, hướng dẫn Roblox an toàn, trait, reroll và lộ trình cho người mới.',
    badge: 'Wiki chiến thuật Roblox không chính thức',
    intro:
      'Code, tier list theo vai trò, quy tắc reroll trait, ưu tiên dùng tài nguyên, game modes và liên kết Roblox an toàn cho Anime Squadron.',
    codesCta: 'Sao chép code đang hoạt động',
    secondaryCta: 'Mở tier list',
    robloxLabel: 'Trang Roblox chính thức',
    primaryLinks: [
      {
        title: 'Codes',
        body: 'Code đang hoạt động, nguồn kiểm tra và cách sửa lỗi đổi code',
        href: '/codes',
      },
      {
        title: 'Tier List',
        body: 'Unit mạnh UPD 0.5 và vai trò phù hợp',
        href: '/tier-list',
      },
      {
        title: 'Discord',
        body: 'Kiểm tra link cộng đồng và cảnh báo an toàn',
        href: '/discord',
      },
      {
        title: 'Beginner Guide',
        body: 'Code, summon và unit carry đầu tiên',
        href: '/guides/beginner-guide',
      },
    ],
    topicLinks: [
      {
        title: 'Units',
        body: 'Vai trò carry, boss damage, control, support, economy và starter filler.',
        href: '/units',
      },
      {
        title: 'Reroll',
        body: 'Stat Rerolls, Reroll Cubes và quy tắc chỉ đầu tư một carry.',
        href: '/reroll',
      },
      {
        title: 'Game Modes',
        body: 'Waves, boss, co-op và áp lực xếp hạng giai đoạn launch.',
        href: '/game-modes',
      },
      {
        title: 'Traits',
        body: 'Quy tắc dùng Trait Shards và Perfect Cube.',
        href: '/traits',
      },
    ],
    launchEyebrow: 'Lộ trình bắt đầu',
    launchHeading: 'Đổi code, xây một carry, giữ Perfect Cubes',
    launchBody:
      'Anime Squadron vẫn ở giai đoạn sớm, nên cách chơi an toàn là đổi code mới trước, thử summon, nâng một unit gây sát thương chính và chờ trước khi dùng nguyên liệu reroll hiếm.',
    searchEyebrow: 'Lối tắt nhanh',
    searchHeading: 'Chọn trang Anime Squadron bạn cần tiếp theo',
    searchBody:
      'Từ trang chủ, đi nhanh tới code, tier list, unit, trait, reroll, Discord, download và các hướng dẫn cập nhật hiện tại.',
    corePagesHeading: 'Trang Anime Squadron chính',
    coreKeywordLinks: [
      {
        keyword: 'Anime Squadron codes',
        href: '/codes',
        intent: 'Code đang hoạt động và cách sửa lỗi nhập code',
      },
      {
        keyword: 'Anime Squadron tier list',
        href: '/tier-list',
        intent: 'Vai trò unit mạnh và meta đầu game',
      },
      {
        keyword: 'Anime Squadron Discord',
        href: '/discord',
        intent: 'Discord, Trello và trạng thái Wiki chính thức',
      },
      {
        keyword: 'Anime Squadron beginner guide',
        href: '/guides/beginner-guide',
        intent: 'Carry đầu tiên, summon và phần thưởng',
      },
      {
        keyword: 'Anime Squadron units',
        href: '/units',
        intent: 'Carry, boss damage, control và support',
      },
      {
        keyword: 'Anime Squadron traits',
        href: '/traits',
        intent: 'Trait Shards và Perfect Cube',
      },
      {
        keyword: 'Anime Squadron reroll',
        href: '/reroll',
        intent: 'Stat Rerolls và Reroll Cubes',
      },
      {
        keyword: 'Anime Squadron download',
        href: '/download',
        intent: 'Link Roblox chính thức và an toàn',
      },
    ],
    guideKeywordsHeading: 'Hướng dẫn liên quan',
    tierEyebrow: 'Tóm tắt tier list',
    tierHeading: 'Unit mạnh UPD 0.5 trước khi tiêu reroll',
    guidesEyebrow: 'Hướng dẫn mới',
    guidesHeading: 'Đọc hướng dẫn trước khi tiêu tài nguyên',
    allGuides: 'Tất cả hướng dẫn',
    siteStatus:
      'Trạng thái site: không chính thức, có theo dõi nguồn và tập trung vào quyết định đầu game. Site không cung cấp script, exploit, APK không an toàn hoặc tuyên bố chính thức giả.',
  },
  codes: {
    ...en.codes,
    metadataTitle: 'Anime Squadron Codes - Code mới và cách nhập',
    metadataDescription:
      'Xem Anime Squadron codes mới nhất, phần thưởng Gems, Gold, Trait Shards, Reroll Cubes, Perfect Cubes và cách nhập code an toàn.',
    badge: 'Codes',
    h1: 'Anime Squadron Codes',
    intro: (checkedAt) =>
      `Sao chép code Anime Squadron mới nhất trước, rồi dùng Gems, Trait Shards, Reroll Cubes, Perfect Cubes và Gold theo một kế hoạch nâng cấp rõ ràng. Lần kiểm tra nguồn: ${checkedAt}.`,
    statusBody:
      'Phần thưởng hiện gồm Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes và Perfect Cubes. Hãy đổi code mới nhất trước rồi mới quyết định unit nào đáng nâng cấp và reroll.',
    checklistHeading: 'Checklist đổi code',
    openRoblox: 'Mở game Roblox',
    redeemGuide: 'Hướng dẫn nhập code',
    tierListButton: 'Mở tier list',
    rerollButton: 'Kế hoạch reroll',
    traitsButton: 'Kế hoạch trait',
    summaryStatus: (count) => `${count} code đang hoạt động được theo dõi`,
    reviewNotes: [
      'Code Anime Squadron phân biệt chữ hoa chữ thường; hãy sao chép đúng cả dấu câu.',
      'Đổi các code active mới nhất đã được nhiều nguồn xác nhận trước các code mốc cũ.',
      'Các code launch cũ đã được chuyển khỏi bảng active vì 2 nguồn hiện tại ghi nhận là không còn hoạt động.',
      'Hãy dùng code trước khi reroll trait hoặc stat để phần thưởng miễn phí định hướng lần tiêu tài nguyên đầu tiên.',
      'Nếu code lỗi, hãy vào server mới rồi thử lại trước khi xem là hết hạn.',
    ],
    activeHeading: (count) => `Code đang hoạt động (${count})`,
    expiredHeading: 'Code đã hết hạn',
    expiredNone: 'Chưa có code Anime Squadron hết hạn được ghi nhận.',
    expiredCount: (count) => `${count} code hết hạn hoặc không còn hoạt động.`,
    watchHeading: 'Code cần theo dõi',
    watchIntro:
      'Các code này cần nguồn mạnh hơn trước khi được xem là đang hoạt động.',
    sourcesHeading: 'Nguồn đã kiểm tra',
    sourcesIntro:
      'Danh sách active được giữ thận trọng: ưu tiên trang chính thức và nhiều nguồn code hiện tại; mục bị mâu thuẫn sẽ không để trong bảng active.',
    table: {
      code: 'Code',
      reward: 'Phần thưởng',
      lastChecked: 'Kiểm tra lần cuối',
      status: 'Trạng thái',
      notes: 'Ghi chú',
      action: 'Thao tác',
    },
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    faqTitle: 'Câu hỏi thường gặp',
    faqs: [
      {
        question: 'Code Anime Squadron nào đang hoạt động?',
        answer:
          'Hãy dùng bảng active ở trên trước. Danh sách được đối chiếu với các nguồn code hiện tại và không đưa các code cũ đang mâu thuẫn vào bảng active.',
      },
      {
        question: 'Vì sao code Anime Squadron không dùng được?',
        answer:
          'Code phân biệt chữ hoa chữ thường và có thể hết hạn nhanh sau update. Hãy sao chép đúng dấu câu, vào server mới rồi thử code mới nhất trước.',
      },
      {
        question: 'Nên dùng phần thưởng code vào đâu?',
        answer:
          'Ưu tiên tìm và xây một main carry trước. Giữ Perfect Cubes và các lượt reroll lớn cho unit bạn chắc chắn sẽ dùng lâu dài.',
      },
    ],
  },
  discord: {
    ...en.discord,
    metadataTitle: 'Anime Squadron Discord - Link cộng đồng và Wiki an toàn',
    metadataDescription:
      'Kiểm tra Anime Squadron Discord, Trello, Wiki, link Roblox chính thức và cách tránh link code hoặc download giả.',
    badge: 'Cộng đồng',
    h1: 'Anime Squadron Discord, Trello và Wiki',
    intro:
      'Lấy Roblox làm nguồn chính, cẩn thận với invite link, và dùng các trang ổn định để xem code, tier list và hướng dẫn download.',
    guideButton: 'Đọc hướng dẫn link',
    downloadButton: 'Link chơi an toàn',
    codesButton: 'Code đang hoạt động',
    tierButton: 'Tier list',
    usageHeading: 'Cách dùng cập nhật Discord tốt nhất',
    sourceCheck: 'Kiểm tra nguồn',
    cards: [
      {
        title: 'Roblox chính thức',
        status: 'Đã xác minh',
        body: 'Dùng trang game Roblox của Komplex Studio làm liên kết chính thức đầu tiên.',
      },
      {
        title: 'Discord',
        status: 'Theo dõi',
        body: 'Discord được nhắc trong coverage launch và guide cộng đồng, nhưng invite link có thể đổi. Ưu tiên link từ Roblox hoặc kênh developer.',
      },
      {
        title: 'Trello / Wiki chính thức',
        status: 'Chưa xác minh',
        body: 'Chưa xác minh được Trello hoặc Wiki chính thức trong lần kiểm tra nguồn mới nhất.',
      },
    ],
    usagePoints: [
      {
        label: 'Codes:',
        body: 'hãy thử claim trong game Roblox trước khi đổi kế hoạch dùng phần thưởng.',
      },
      {
        label: 'Units:',
        body: 'đợi vai trò unit rõ ràng trước khi dùng Perfect Cubes hoặc reroll hiếm.',
      },
      {
        label: 'Links:',
        body: 'tránh download ngoài, executor, form hoặc trang yêu cầu thông tin tài khoản.',
      },
    ],
    faqs: [
      {
        question: 'Anime Squadron có Trello chính thức không?',
        answer:
          'Chưa xác minh được Trello chính thức trong lần kiểm tra nguồn mới nhất.',
      },
      {
        question: 'Trang này có phải chính thức không?',
        answer: 'Không. Anime Squadron Wiki là site hướng dẫn do fan làm.',
      },
      {
        question: 'Nên lấy link an toàn ở đâu?',
        answer:
          'Dùng trang Roblox chính thức trước, sau đó dùng các trang code, tier list và guide ổn định để ra quyết định chơi.',
      },
    ],
  },
  tierList: {
    ...en.tierList,
    metadataTitle:
      'Anime Squadron Tier List - Đội hình và nhân vật nên ưu tiên',
    metadataDescription:
      'Anime Squadron tier list tiếng Việt cho main carry, boss damage, control, economy, support và cách dùng reroll đầu game.',
    badge: 'Tier List',
    h1: 'Anime Squadron Tier List',
    intro:
      'Danh sách ưu tiên cho các vai trò unit quan trọng nhất: một carry trước, sau đó mới thêm boss damage, control, economy hoặc support khi mode yêu cầu.',
    rankingHeading: 'Quy tắc xếp hạng',
    unitsButton: 'Mở hướng dẫn unit',
    traitsButton: 'Lên kế hoạch trait',
    routeHeading: 'Lộ trình build hiện tại',
    bestUnitsButton: 'Đọc hướng dẫn unit mạnh',
    secretUnitsButton: 'Hướng dẫn secret units',
    codesButton: 'Đổi code trước',
    rankingPoints: [
      {
        label: 'Giá trị đầu game:',
        body: 'vai trò đó có giúp vượt wave và boss đầu tiên hay không.',
      },
      {
        label: 'Chi phí reroll:',
        body: 'vai trò đó có đáng dùng nguyên liệu reroll hiếm ngay bây giờ không.',
      },
      {
        label: 'Độ tin cậy:',
        body: 'khuyến nghị đã được đối chiếu hay vẫn cần thêm dữ liệu sau launch.',
      },
    ],
    routePoints: [
      {
        label: 'Bắt đầu bằng một carry.',
        body: 'Khoản đầu tư unit đầu tiên nên giúp bạn vượt wave hoặc boss tốt hơn phần còn lại.',
      },
      {
        label: 'Trì hoãn reroll xa xỉ.',
        body: 'Perfect Cubes, Trait Shards và Reroll Cubes mạnh nhất khi bạn đã có keeper unit.',
      },
      {
        label: 'Vá đúng điểm đang kẹt.',
        body: 'Chỉ thêm boss damage, control, support hoặc economy khi vai trò đó sửa run bạn đang thua.',
      },
    ],
    tierLabels: {
      rolesSuffix: 'vai trò',
      tableIntro:
        'Xếp hạng early access theo công việc mỗi loại unit giải quyết: wave-clear carry, boss damage, control, economy, support hoặc starter filler.',
      role: 'Vai trò',
      bestFor: 'Tốt cho',
      decision: 'Quyết định',
      confidence: 'Độ tin cậy',
      early: 'đầu game',
      rerollCost: 'chi phí reroll',
      avoid: 'Tránh',
    },
    faqs: [
      {
        question: 'Unit Anime Squadron mạnh nhất là gì?',
        answer:
          'Dữ liệu đầu game vẫn đang hình thành, nên lựa chọn an toàn nhất là unit làm main carry và giúp bạn vượt wave hoặc boss đang kẹt.',
      },
      {
        question: 'Có nên tin tier list chỉ xếp theo tên unit không?',
        answer:
          'Chỉ dùng xếp hạng theo tên sau khi kiểm tra vai trò. Một unit đáng build khi nó giải quyết vấn đề wave, boss, farm hoặc support hiện tại.',
      },
      {
        question: 'Vì sao tier list này xếp theo vai trò?',
        answer:
          'Xếp theo vai trò giúp tránh bịa dữ liệu tên unit khi Anime Squadron còn early access, nhưng vẫn đủ để quyết định nên tiêu tài nguyên ở đâu.',
      },
      {
        question: 'Có nên reroll support unit trước không?',
        answer:
          'Thường là không. Hãy build carry trước, rồi đầu tư support khi bạn biết rõ nó cải thiện clear nào.',
      },
    ],
  },
};

const th: PageCopy = {
  home: {
    ...en.home,
    metadataTitle: 'Anime Squadron Wiki - โค้ด Tier List และ Discord',
    metadataDescription:
      'Anime Squadron Wiki ภาษาไทยสำหรับโค้ดล่าสุด tier list Discord วิธีเล่น Roblox อย่างปลอดภัย trait reroll และไกด์เริ่มต้น.',
    badge: 'วิกิกลยุทธ์ Roblox แบบไม่เป็นทางการ',
    intro:
      'โค้ด, tier list ตามบทบาท, กฎการ reroll trait, การใช้ทรัพยากรช่วงเปิดเกม, game modes และลิงก์ Roblox ที่ปลอดภัยสำหรับ Anime Squadron.',
    codesCta: 'คัดลอกโค้ดที่ใช้ได้',
    secondaryCta: 'เปิด tier list',
    robloxLabel: 'หน้า Roblox ทางการ',
    primaryLinks: [
      {
        title: 'Codes',
        body: 'โค้ดที่ใช้ได้ แหล่งตรวจสอบ และวิธีแก้ปัญหาแลกโค้ด',
        href: '/codes',
      },
      {
        title: 'Tier List',
        body: 'ยูนิตเด่น UPD 0.5 และบทบาทที่เหมาะสม',
        href: '/tier-list',
      },
      {
        title: 'Discord',
        body: 'ตรวจสอบลิงก์ชุมชนและคำเตือนด้านความปลอดภัย',
        href: '/discord',
      },
      {
        title: 'Beginner Guide',
        body: 'โค้ด การสุ่ม และ carry ตัวแรก',
        href: '/guides/beginner-guide',
      },
    ],
    topicLinks: [
      {
        title: 'Units',
        body: 'บทบาท carry, boss damage, control, support, economy และ starter filler.',
        href: '/units',
      },
      {
        title: 'Reroll',
        body: 'Stat Rerolls, Reroll Cubes และกฎลงทุน carry ทีละตัว.',
        href: '/reroll',
      },
      {
        title: 'Game Modes',
        body: 'Waves, bosses, co-op และแรงกดดันอันดับช่วงเปิดเกม.',
        href: '/game-modes',
      },
      {
        title: 'Traits',
        body: 'กฎการใช้ Trait Shards และ Perfect Cube.',
        href: '/traits',
      },
    ],
    launchEyebrow: 'เส้นทางเริ่มต้น',
    launchHeading: 'แลกโค้ด ปั้น carry หนึ่งตัว และเก็บ Perfect Cubes',
    launchBody:
      'Anime Squadron ยังอยู่ในช่วงต้น ดังนั้นแผนที่ปลอดภัยคือแลกโค้ดใหม่ก่อน ทดลอง summon อัปเกรดยูนิตดาเมจหลักหนึ่งตัว และรอก่อนใช้วัตถุดิบ reroll ที่หายาก.',
    searchEyebrow: 'ทางลัด',
    searchHeading: 'เลือกหน้า Anime Squadron ที่ต้องใช้ต่อ',
    searchBody:
      'จากหน้าแรก ไปยังโค้ด tier list ยูนิต trait reroll Discord download และไกด์อัปเดตล่าสุดได้เร็วขึ้น.',
    corePagesHeading: 'หน้าหลักของ Anime Squadron',
    coreKeywordLinks: [
      {
        keyword: 'Anime Squadron codes',
        href: '/codes',
        intent: 'โค้ดที่ใช้ได้และวิธีแก้ปัญหาแลกโค้ด',
      },
      {
        keyword: 'Anime Squadron tier list',
        href: '/tier-list',
        intent: 'บทบาทยูนิตที่ดีที่สุดและ meta ช่วงต้น',
      },
      {
        keyword: 'Anime Squadron Discord',
        href: '/discord',
        intent: 'Discord, Trello และสถานะ Wiki ทางการ',
      },
      {
        keyword: 'Anime Squadron beginner guide',
        href: '/guides/beginner-guide',
        intent: 'carry ตัวแรก, summon และรางวัล',
      },
      {
        keyword: 'Anime Squadron units',
        href: '/units',
        intent: 'carry, boss damage, control และ support',
      },
      {
        keyword: 'Anime Squadron traits',
        href: '/traits',
        intent: 'Trait Shards และ Perfect Cube',
      },
      {
        keyword: 'Anime Squadron reroll',
        href: '/reroll',
        intent: 'Stat Rerolls และ Reroll Cubes',
      },
      {
        keyword: 'Anime Squadron download',
        href: '/download',
        intent: 'ลิงก์ Roblox ทางการและความปลอดภัย',
      },
    ],
    guideKeywordsHeading: 'ไกด์ที่เกี่ยวข้อง',
    tierEyebrow: 'สรุป tier list',
    tierHeading: 'ยูนิตเด่น UPD 0.5 ก่อนใช้ reroll',
    guidesEyebrow: 'ไกด์ล่าสุด',
    guidesHeading: 'อ่านไกด์ก่อนใช้ทรัพยากร',
    allGuides: 'ไกด์ทั้งหมด',
    siteStatus:
      'สถานะไซต์: ไม่เป็นทางการ มีการติดตามแหล่งข้อมูล และเน้นการตัดสินใจช่วง early access ไม่มี script, exploit, APK ไม่ปลอดภัย หรือการอ้างว่าเป็นทางการแบบปลอม.',
  },
  codes: {
    ...en.codes,
    metadataTitle: 'Anime Squadron Codes - โค้ดใหม่และวิธีแลกรางวัล',
    metadataDescription:
      'รวม Anime Squadron codes ล่าสุด พร้อม Gems, Gold, Trait Shards, Reroll Cubes, Perfect Cubes และวิธีแลกโค้ดอย่างปลอดภัย.',
    badge: 'Codes',
    h1: 'Anime Squadron Codes',
    intro: (checkedAt) =>
      `คัดลอกโค้ด Anime Squadron ใหม่ล่าสุดก่อน แล้วใช้ Gems, Trait Shards, Reroll Cubes, Perfect Cubes และ Gold ตามแผนอัปเกรดที่ชัดเจน ตรวจสอบแหล่งล่าสุด: ${checkedAt}.`,
    statusBody:
      'รางวัลตอนนี้มี Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes และ Perfect Cubes ควรแลกโค้ดใหม่ก่อนแล้วค่อยตัดสินใจว่ายูนิตไหนควรอัปเกรดหรือ reroll.',
    checklistHeading: 'เช็กลิสต์แลกโค้ด',
    openRoblox: 'เปิดเกม Roblox',
    redeemGuide: 'ไกด์แลกโค้ด',
    tierListButton: 'เปิด tier list',
    rerollButton: 'แผน reroll',
    traitsButton: 'แผน trait',
    summaryStatus: (count) => `ติดตามโค้ดที่ใช้ได้ ${count} โค้ด`,
    reviewNotes: [
      'โค้ด Anime Squadron แยกตัวพิมพ์เล็กใหญ่ ควรคัดลอกให้ตรงรวมถึงเครื่องหมาย.',
      'แลกโค้ด active ล่าสุดที่ตรวจสอบข้ามแหล่งแล้วก่อนโค้ด milestone เก่า.',
      'โค้ดเก่าช่วง launch ถูกย้ายออกจาก active เพราะ 2 แหล่งปัจจุบันระบุว่าไม่ทำงานแล้ว.',
      'ใช้โค้ดก่อน reroll trait หรือ stat เพื่อให้รางวัลฟรีช่วยกำหนดการใช้ทรัพยากรครั้งแรก.',
      'ถ้าโค้ดใช้ไม่ได้ ให้เข้า server ใหม่แล้วลองอีกครั้งก่อนถือว่าหมดอายุ.',
    ],
    activeHeading: (count) => `โค้ดที่ใช้ได้ (${count})`,
    expiredHeading: 'โค้ดหมดอายุ',
    expiredNone: 'ยังไม่มีโค้ด Anime Squadron ที่ยืนยันว่าหมดอายุ.',
    expiredCount: (count) => `มี ${count} โค้ดที่หมดอายุหรือไม่ทำงานแล้ว.`,
    watchHeading: 'โค้ดที่ต้องติดตาม',
    watchIntro: 'โค้ดเหล่านี้ต้องการแหล่งยืนยันที่ชัดเจนกว่านี้ก่อนนับว่าใช้ได้.',
    sourcesHeading: 'แหล่งที่ตรวจสอบ',
    sourcesIntro:
      'ตาราง active จะค่อนข้างเข้มงวด: ให้ความสำคัญกับแหล่งทางการและหลายเว็บโค้ดปัจจุบัน ส่วนรายการที่ขัดแย้งจะไม่อยู่ใน active.',
    table: {
      code: 'โค้ด',
      reward: 'รางวัล',
      lastChecked: 'ตรวจล่าสุด',
      status: 'สถานะ',
      notes: 'หมายเหตุ',
      action: 'การกระทำ',
    },
    copy: 'คัดลอก',
    copied: 'คัดลอกแล้ว',
    faqTitle: 'คำถามที่พบบ่อย',
    faqs: [
      {
        question: 'Anime Squadron codes ไหนยังใช้ได้?',
        answer:
          'ให้ใช้ตาราง active ด้านบนก่อน รายการนี้ตรวจเทียบกับแหล่งโค้ดปัจจุบันและไม่นำโค้ดเก่าที่ข้อมูลขัดแย้งมาไว้ในตาราง active.',
      },
      {
        question: 'ทำไมโค้ด Anime Squadron ใช้ไม่ได้?',
        answer:
          'โค้ดแยกตัวพิมพ์เล็กใหญ่และอาจหมดอายุเร็วหลังอัปเดต คัดลอกให้ตรง รวมเครื่องหมาย แล้วลองเข้า server ใหม่ก่อน.',
      },
      {
        question: 'ควรใช้รางวัลจากโค้ดกับอะไร?',
        answer:
          'เริ่มจากปั้น main carry หนึ่งตัวก่อน เก็บ Perfect Cubes และชุด reroll จำนวนมากไว้ให้ยูนิตที่แน่ใจว่าจะใช้ต่อ.',
      },
    ],
  },
  discord: {
    ...en.discord,
    metadataTitle: 'Anime Squadron Discord - ลิงก์ชุมชนและวิกิปลอดภัย',
    metadataDescription:
      'ตรวจสอบ Anime Squadron Discord, Trello, Wiki, ลิงก์ Roblox ทางการ และวิธีหลีกเลี่ยงหน้าโค้ดหรือดาวน์โหลดปลอม.',
    badge: 'ชุมชน',
    h1: 'Anime Squadron Discord, Trello และ Wiki',
    intro:
      'ใช้ Roblox เป็นแหล่งหลัก ระวัง invite link และใช้หน้าโค้ด tier list กับ download ที่เสถียรกว่าสำหรับการตัดสินใจ.',
    guideButton: 'อ่านไกด์ลิงก์',
    downloadButton: 'ลิงก์เล่นปลอดภัย',
    codesButton: 'โค้ดที่ใช้ได้',
    tierButton: 'Tier list',
    usageHeading: 'วิธีใช้ข่าวจาก Discord ให้ดีที่สุด',
    sourceCheck: 'ตรวจสอบแหล่ง',
    cards: [
      {
        title: 'Roblox ทางการ',
        status: 'ยืนยันแล้ว',
        body: 'ใช้หน้าเกม Roblox ของ Komplex Studio เป็นลิงก์ทางการหลัก.',
      },
      {
        title: 'Discord',
        status: 'ติดตาม',
        body: 'มีการกล่าวถึงใน coverage ช่วง launch และไกด์ชุมชน แต่ invite link เปลี่ยนได้ ควรใช้ลิงก์จาก Roblox หรือช่อง developer.',
      },
      {
        title: 'Trello / Wiki ทางการ',
        status: 'ยังไม่ยืนยัน',
        body: 'ยังไม่พบ Trello หรือ Wiki ทางการที่ยืนยันได้ในการตรวจแหล่งล่าสุด.',
      },
    ],
    usagePoints: [
      {
        label: 'Codes:',
        body: 'ทดสอบ claim ในเกม Roblox ก่อนเปลี่ยนแผนใช้รางวัล.',
      },
      {
        label: 'Units:',
        body: 'รอให้บทบาทยูนิตชัดเจนก่อนใช้ Perfect Cubes หรือ reroll หายาก.',
      },
      {
        label: 'Links:',
        body: 'หลีกเลี่ยง download ภายนอก executor form หรือหน้าที่ขอข้อมูลบัญชี.',
      },
    ],
    faqs: [
      {
        question: 'Anime Squadron มี Trello ทางการไหม?',
        answer: 'ยังไม่พบ Trello ทางการที่ยืนยันได้ในการตรวจแหล่งล่าสุด.',
      },
      {
        question: 'ไซต์นี้เป็นทางการไหม?',
        answer: 'ไม่ใช่ Anime Squadron Wiki เป็นไซต์ไกด์จากแฟนเกม.',
      },
      {
        question: 'ควรใช้ลิงก์ปลอดภัยจากที่ไหน?',
        answer:
          'ใช้หน้า Roblox ทางการก่อน แล้วใช้หน้า codes, tier list และ guide ที่เสถียรสำหรับการตัดสินใจ.',
      },
    ],
  },
  tierList: {
    ...en.tierList,
    metadataTitle: 'Anime Squadron Tier List - ตัวละครและบทบาทที่ควรปั้น',
    metadataDescription:
      'Anime Squadron tier list ภาษาไทยสำหรับ main carry, boss damage, control, economy, support และแผน reroll ช่วงต้นเกม.',
    badge: 'Tier List',
    h1: 'Anime Squadron Tier List',
    intro:
      'รายการลำดับความสำคัญของบทบาทยูนิตที่สำคัญ: เริ่มจาก carry หนึ่งตัว แล้วค่อยเพิ่ม boss damage, control, economy หรือ support เมื่อ mode ต้องการ.',
    rankingHeading: 'กฎการจัดอันดับ',
    unitsButton: 'เปิดไกด์ยูนิต',
    traitsButton: 'วางแผน trait',
    routeHeading: 'เส้นทาง build ปัจจุบัน',
    bestUnitsButton: 'อ่านไกด์ยูนิตที่ดีที่สุด',
    secretUnitsButton: 'ไกด์ secret units',
    codesButton: 'แลกโค้ดก่อน',
    rankingPoints: [
      {
        label: 'คุณค่าช่วงต้น:',
        body: 'บทบาทนั้นช่วยเคลียร์ wave และ boss ช่วงแรกจริงหรือไม่.',
      },
      {
        label: 'ต้นทุน reroll:',
        body: 'บทบาทนั้นคุ้มกับวัตถุดิบ reroll หายากตอนนี้หรือควรรอ.',
      },
      {
        label: 'ความมั่นใจ:',
        body: 'คำแนะนำผ่านการตรวจข้ามแหล่งแล้วหรือยังต้องรอข้อมูลหลัง launch.',
      },
    ],
    routePoints: [
      {
        label: 'เริ่มด้วย carry หนึ่งตัว.',
        body: 'การลงทุนยูนิตจริงครั้งแรกควรช่วยเคลียร์ wave หรือ boss ได้ดีกว่าส่วนอื่นของบัญชี.',
      },
      {
        label: 'เลื่อน reroll ฟุ่มเฟือย.',
        body: 'Perfect Cubes, Trait Shards และ Reroll Cubes คุ้มที่สุดหลังเห็น keeper unit ชัดเจน.',
      },
      {
        label: 'แก้จุดที่แพ้จริง.',
        body: 'เพิ่ม boss damage, control, support หรือ economy เฉพาะเมื่อบทบาทนั้นแก้ run ที่คุณแพ้.',
      },
    ],
    tierLabels: {
      rolesSuffix: 'roles',
      tableIntro:
        'จัดอันดับ early access ตามงานที่ยูนิตแต่ละชนิดแก้ได้: wave-clear carry, boss damage, control, economy, support หรือ starter filler.',
      role: 'บทบาท',
      bestFor: 'เหมาะกับ',
      decision: 'คำแนะนำ',
      confidence: 'ความมั่นใจ',
      early: 'ช่วงต้น',
      rerollCost: 'ต้นทุน reroll',
      avoid: 'หลีกเลี่ยง',
    },
    faqs: [
      {
        question: 'ยูนิต Anime Squadron ที่ดีที่สุดคืออะไร?',
        answer:
          'ข้อมูลช่วงต้นยังเปลี่ยนได้ คำตอบที่ปลอดภัยที่สุดคือยูนิตที่เป็น main carry และช่วยผ่าน wave หรือ boss ที่ติดอยู่.',
      },
      {
        question: 'ควรตาม tier list ที่จัดตามชื่อยูนิตเท่านั้นไหม?',
        answer:
          'ใช้รายชื่อยูนิตหลังตรวจบทบาทก่อน ยูนิตน่าปั้นเมื่อมันแก้ปัญหา wave, boss, farm หรือ support ตอนนี้.',
      },
      {
        question: 'ทำไม tier list นี้จัดตามบทบาท?',
        answer:
          'การจัดตามบทบาทช่วยเลี่ยงข้อมูลชื่อยูนิตที่ยังยืนยันไม่ได้ในช่วง early access แต่ยังบอกได้ว่าควรใช้ทรัพยากรที่ไหนก่อน.',
      },
      {
        question: 'ควร reroll support unit ก่อนหรือไม่?',
        answer:
          'โดยทั่วไปไม่ควร ปั้น carry ก่อน แล้วค่อยลงทุน support เมื่อรู้ชัดว่ามันช่วย clear ไหน.',
      },
    ],
  },
};

const ptBr: PageCopy = {
  home: {
    ...en.home,
    metadataTitle: 'Anime Squadron Wiki - Códigos, Tier List e Discord',
    metadataDescription:
      'Anime Squadron Wiki em português do Brasil com códigos ativos, tier list, Discord, links seguros do Roblox, traits, rerolls e guias para iniciantes.',
    badge: 'Wiki não oficial de estratégia Roblox',
    intro:
      'Códigos, tier lists por função, regras de reroll de traits, prioridades de recursos, modos de jogo e links seguros do Roblox para Anime Squadron.',
    codesCta: 'Copiar códigos ativos',
    secondaryCta: 'Abrir tier list',
    robloxLabel: 'Página oficial no Roblox',
    primaryLinks: [
      {
        title: 'Códigos',
        body: 'Recompensas ativas, fontes verificadas e correções de resgate',
        href: '/codes',
      },
      {
        title: 'Tier List',
        body: 'Melhores unidades da UPD 0.5 e função ideal',
        href: '/tier-list',
      },
      {
        title: 'Discord',
        body: 'Links da comunidade e notas de segurança',
        href: '/discord',
      },
      {
        title: 'Guia para iniciantes',
        body: 'Códigos, summons e primeiro carry',
        href: '/guides/beginner-guide',
      },
    ],
    topicLinks: [
      {
        title: 'Unidades',
        body: 'Funções de carry, boss damage, control, support, economy e starter filler.',
        href: '/units',
      },
      {
        title: 'Reroll',
        body: 'Stat Rerolls, Reroll Cubes e a regra de investir em um carry por vez.',
        href: '/reroll',
      },
      {
        title: 'Modos de jogo',
        body: 'Waves, bosses, co-op e pressão de ranking no lançamento.',
        href: '/game-modes',
      },
      {
        title: 'Traits',
        body: 'Regras de Trait Shards e Perfect Cube.',
        href: '/traits',
      },
    ],
    launchEyebrow: 'Rota inicial',
    launchHeading: 'Resgate códigos, monte um carry e guarde Perfect Cubes',
    launchBody:
      'Anime Squadron ainda está em fase inicial, então o plano mais seguro é resgatar os códigos novos, testar seus summons, melhorar uma unidade principal e esperar antes de gastar materiais raros de reroll.',
    searchEyebrow: 'Atalhos',
    searchHeading: 'Escolha a próxima página de Anime Squadron',
    searchBody:
      'Saia da página inicial para códigos, tier list, unidades, traits, rerolls, Discord, download e guias da atualização atual.',
    corePagesHeading: 'Páginas principais de Anime Squadron',
    coreKeywordLinks: [
      {
        keyword: 'Anime Squadron codes',
        href: '/codes',
        intent: 'Códigos ativos e correções de resgate',
      },
      {
        keyword: 'Anime Squadron tier list',
        href: '/tier-list',
        intent: 'Melhores funções de unidades e meta inicial',
      },
      {
        keyword: 'Anime Squadron Discord',
        href: '/discord',
        intent: 'Discord, Trello e status de Wiki oficial',
      },
      {
        keyword: 'Anime Squadron beginner guide',
        href: '/guides/beginner-guide',
        intent: 'Primeiro carry, summons e recompensas',
      },
      {
        keyword: 'Anime Squadron units',
        href: '/units',
        intent: 'Carry, boss damage, control e support',
      },
      {
        keyword: 'Anime Squadron traits',
        href: '/traits',
        intent: 'Trait Shards e Perfect Cube',
      },
      {
        keyword: 'Anime Squadron reroll',
        href: '/reroll',
        intent: 'Stat Rerolls e Reroll Cubes',
      },
      {
        keyword: 'Anime Squadron download',
        href: '/download',
        intent: 'Link oficial do Roblox e segurança',
      },
    ],
    guideKeywordsHeading: 'Guias relacionados',
    tierEyebrow: 'Resumo da tier list',
    tierHeading: 'Melhores unidades da UPD 0.5 antes de gastar rerolls',
    guidesEyebrow: 'Guias recentes',
    guidesHeading: 'Leia o guia antes de gastar recompensas',
    allGuides: 'Todos os guias',
    siteStatus:
      'Status do site: não oficial, com fontes acompanhadas e focado em decisões de early access. Não oferece scripts, exploits, APKs inseguros ou falsas alegações oficiais.',
  },
  codes: {
    ...en.codes,
    metadataTitle: 'Anime Squadron Codes - Códigos ativos e como resgatar',
    metadataDescription:
      'Veja Anime Squadron codes ativos para Gems, Gold, Trait Shards, Reroll Cubes, Perfect Cubes e aprenda como resgatar códigos com segurança.',
    badge: 'Códigos',
    h1: 'Anime Squadron Codes',
    intro: (checkedAt) =>
      `Copie primeiro os códigos mais novos de Anime Squadron, depois use Gems, Trait Shards, Reroll Cubes, Perfect Cubes e Gold com um plano claro de upgrade. Fonte verificada em: ${checkedAt}.`,
    statusBody:
      'As recompensas incluem Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes e Perfect Cubes. Resgate os códigos mais novos antes de decidir qual unidade merece upgrade e reroll.',
    checklistHeading: 'Checklist de resgate',
    openRoblox: 'Abrir jogo no Roblox',
    redeemGuide: 'Guia de resgate',
    tierListButton: 'Abrir tier list',
    rerollButton: 'Plano de reroll',
    traitsButton: 'Plano de traits',
    summaryStatus: (count) => `${count} códigos ativos acompanhados`,
    reviewNotes: [
      'Anime Squadron codes diferenciam maiúsculas e minúsculas; copie exatamente, incluindo pontuação.',
      'Resgate primeiro os códigos ativos mais novos confirmados por múltiplas fontes.',
      'Códigos antigos de lançamento foram removidos da tabela active porque 2 fontes atuais os listam como inativos.',
      'Use códigos antes de rerollar traits ou stats para deixar gemas, shards, cubos e gold guiarem o primeiro gasto real.',
      'Se um código falhar, entre em um servidor novo e tente novamente antes de assumir que expirou.',
    ],
    activeHeading: (count) => `Códigos ativos (${count})`,
    expiredHeading: 'Códigos expirados',
    expiredNone:
      'Nenhum código expirado de Anime Squadron está registrado ainda.',
    expiredCount: (count) =>
      `${count} códigos expirados ou inativos registrados.`,
    watchHeading: 'Códigos em observação',
    watchIntro:
      'Estes códigos precisam de confirmação melhor antes de serem tratados como ativos.',
    sourcesHeading: 'Fontes verificadas',
    sourcesIntro:
      'A tabela active é conservadora: prioriza fontes oficiais e vários trackers atuais; entradas conflitantes ficam fora da tabela active.',
    table: {
      code: 'Código',
      reward: 'Recompensa',
      lastChecked: 'Verificado em',
      status: 'Status',
      notes: 'Notas',
      action: 'Ação',
    },
    copy: 'Copiar',
    copied: 'Copiado',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Quais Anime Squadron codes estão ativos?',
        answer:
          'Use primeiro a tabela active acima. A lista é comparada com trackers atuais e remove entradas antigas com fontes conflitantes.',
      },
      {
        question: 'Por que meu código de Anime Squadron não funciona?',
        answer:
          'Os códigos diferenciam maiúsculas e minúsculas e podem expirar rápido após updates. Copie exatamente, mantenha a pontuação, entre em um servidor novo e tente os códigos mais recentes primeiro.',
      },
      {
        question: 'Onde gastar as recompensas dos códigos?',
        answer:
          'Use as recompensas para montar um main carry primeiro. Guarde Perfect Cubes e grandes lotes de reroll para unidades que você pretende manter.',
      },
    ],
  },
  discord: {
    ...en.discord,
    metadataTitle: 'Anime Squadron Discord - Links da comunidade e Wiki',
    metadataDescription:
      'Confira Anime Squadron Discord, Trello, Wiki, links oficiais do Roblox e alertas contra páginas falsas de códigos ou download.',
    badge: 'Comunidade',
    h1: 'Anime Squadron Discord, Trello e Wiki',
    intro:
      'Use o Roblox como referência principal, trate convites com cuidado e mantenha decisões de códigos, tier list e download em páginas estáveis.',
    guideButton: 'Ler guia de links',
    downloadButton: 'Link seguro para jogar',
    codesButton: 'Códigos ativos',
    tierButton: 'Tier list',
    usageHeading: 'Melhor forma de usar atualizações do Discord',
    sourceCheck: 'Ver fonte',
    cards: [
      {
        title: 'Roblox oficial',
        status: 'Verificado',
        body: 'Use a página do jogo no Roblox da Komplex Studio como o link oficial principal.',
      },
      {
        title: 'Discord',
        status: 'Observar',
        body: 'O Discord aparece em cobertura de lançamento e guias da comunidade, mas convites podem mudar. Prefira links vindos do Roblox ou dos canais dos devs.',
      },
      {
        title: 'Trello / Wiki oficial',
        status: 'Não verificado',
        body: 'Nenhum Trello ou Wiki oficial foi verificado na checagem de fontes mais recente.',
      },
    ],
    usagePoints: [
      {
        label: 'Códigos:',
        body: 'teste novas alegações dentro do jogo no Roblox antes de mudar seu plano de recompensas.',
      },
      {
        label: 'Unidades:',
        body: 'espere a função ficar clara antes de gastar Perfect Cubes ou rerolls raros.',
      },
      {
        label: 'Links:',
        body: 'evite downloads externos, executores, formulários ou páginas que peçam dados da conta.',
      },
    ],
    faqs: [
      {
        question: 'Existe Trello oficial de Anime Squadron?',
        answer:
          'Nenhum Trello oficial foi verificado na checagem de fontes mais recente.',
      },
      {
        question: 'Este site é oficial?',
        answer: 'Não. Anime Squadron Wiki é um site de guias feito por fãs.',
      },
      {
        question: 'Onde pegar links seguros?',
        answer:
          'Use primeiro a página oficial do Roblox, depois páginas estáveis de códigos, tier list e guias para decisões de gameplay.',
      },
    ],
  },
  tierList: {
    ...en.tierList,
    metadataTitle: 'Anime Squadron Tier List - Melhores funções e unidades',
    metadataDescription:
      'Anime Squadron tier list em português para main carry, boss damage, control, economy, support e decisões de reroll no começo.',
    badge: 'Tier List',
    h1: 'Anime Squadron Tier List',
    intro:
      'Lista de prioridade para as funções de unidades mais importantes: um carry primeiro, depois boss damage, control, economy ou support quando o modo pedir.',
    rankingHeading: 'Regras de ranking',
    unitsButton: 'Abrir guia de unidades',
    traitsButton: 'Planejar traits',
    routeHeading: 'Rota de build atual',
    bestUnitsButton: 'Ler guia de melhores unidades',
    secretUnitsButton: 'Guia de secret units',
    codesButton: 'Resgatar códigos primeiro',
    rankingPoints: [
      {
        label: 'Valor inicial:',
        body: 'se a função ajuda nas primeiras clears de wave e boss.',
      },
      {
        label: 'Custo de reroll:',
        body: 'se a função merece materiais raros de reroll agora ou depois.',
      },
      {
        label: 'Confiança:',
        body: 'se a recomendação já foi cruzada com fontes ou ainda espera dados do lançamento.',
      },
    ],
    routePoints: [
      {
        label: 'Comece com um carry.',
        body: 'Seu primeiro investimento real deve limpar waves ou bosses melhor que o resto da conta.',
      },
      {
        label: 'Adie rerolls caros.',
        body: 'Perfect Cubes, Trait Shards e Reroll Cubes rendem mais depois que uma unidade keeper fica óbvia.',
      },
      {
        label: 'Corrija a parede visível.',
        body: 'Adicione boss damage, control, support ou economy só quando essa função resolver a run que você está perdendo.',
      },
    ],
    tierLabels: {
      rolesSuffix: 'funções',
      tableIntro:
        'Ranking de early access pelo problema que cada tipo de unidade resolve: wave-clear carry, boss damage, control, economy, support ou starter filler.',
      role: 'Função',
      bestFor: 'Melhor para',
      decision: 'Decisão',
      confidence: 'Confiança',
      early: 'início',
      rerollCost: 'custo de reroll',
      avoid: 'Evite',
    },
    faqs: [
      {
        question: 'Qual é a melhor unidade de Anime Squadron?',
        answer:
          'Os dados iniciais ainda estão se formando, então a resposta mais segura é a unidade que funciona como main carry e passa a wave ou boss que bloqueia você.',
      },
      {
        question: 'Devo seguir uma tier list só por nome de unidade?',
        answer:
          'Use rankings por nome só depois de checar a função. Uma unidade vale build quando resolve seu problema atual de wave, boss, farm ou support.',
      },
      {
        question: 'Por que esta tier list ranqueia funções?',
        answer:
          'Ranking por função evita inventar dados de nomes enquanto Anime Squadron está em early access, mas ainda mostra onde gastar primeiro.',
      },
      {
        question: 'Devo rerollar uma unidade support primeiro?',
        answer:
          'Geralmente não. Monte um carry primeiro, depois invista em support quando souber exatamente qual clear ele melhora.',
      },
    ],
  },
};

const id: PageCopy = {
  home: {
    ...en.home,
    metadataTitle: 'Anime Squadron Wiki - Kode, Tier List, dan Discord',
    metadataDescription:
      'Anime Squadron Wiki bahasa Indonesia untuk kode aktif, tier list, Discord, link Roblox aman, trait, reroll, dan panduan pemula.',
    badge: 'Wiki strategi Roblox tidak resmi',
    intro:
      'Kode, tier list berdasarkan role, aturan reroll trait, prioritas resource, game mode, dan link Roblox aman untuk Anime Squadron.',
    codesCta: 'Salin kode aktif',
    secondaryCta: 'Buka tier list',
    robloxLabel: 'Halaman Roblox resmi',
    primaryLinks: [
      {
        title: 'Codes',
        body: 'Reward aktif, pengecekan sumber, dan solusi gagal klaim',
        href: '/codes',
      },
      {
        title: 'Tier List',
        body: 'Prioritas role unit untuk awal game',
        href: '/tier-list',
      },
      {
        title: 'Discord',
        body: 'Cek link komunitas dan catatan keamanan',
        href: '/discord',
      },
      {
        title: 'Beginner Guide',
        body: 'Kode, summon, dan carry pertama',
        href: '/guides/beginner-guide',
      },
    ],
    topicLinks: [
      {
        title: 'Units',
        body: 'Role carry, boss damage, control, support, economy, dan starter filler.',
        href: '/units',
      },
      {
        title: 'Reroll',
        body: 'Stat Rerolls, Reroll Cubes, dan aturan satu carry lebih dulu.',
        href: '/reroll',
      },
      {
        title: 'Game Modes',
        body: 'Waves, bosses, co-op, dan tekanan rank saat launch.',
        href: '/game-modes',
      },
      {
        title: 'Traits',
        body: 'Aturan Trait Shards dan Perfect Cube.',
        href: '/traits',
      },
    ],
    launchEyebrow: 'Rute awal',
    launchHeading: 'Klaim kode, bangun satu carry, simpan Perfect Cubes',
    launchBody:
      'Anime Squadron masih di fase awal, jadi rute aman adalah klaim kode terbaru, coba summon, upgrade satu unit damage utama, dan tahan material reroll langka untuk unit yang benar-benar dipakai.',
    searchEyebrow: 'Jalur cepat',
    searchHeading: 'Pilih halaman Anime Squadron berikutnya',
    searchBody:
      'Dari homepage, buka cepat codes, tier list, units, traits, reroll, Discord, download, dan panduan update terbaru.',
    corePagesHeading: 'Halaman utama Anime Squadron',
    coreKeywordLinks: [
      {
        keyword: 'Anime Squadron codes',
        href: '/codes',
        intent: 'Kode aktif dan solusi gagal klaim',
      },
      {
        keyword: 'Anime Squadron tier list',
        href: '/tier-list',
        intent: 'Role unit terbaik dan meta awal',
      },
      {
        keyword: 'Anime Squadron Discord',
        href: '/discord',
        intent: 'Discord, Trello, dan status Wiki resmi',
      },
      {
        keyword: 'Anime Squadron beginner guide',
        href: '/guides/beginner-guide',
        intent: 'Carry pertama, summon, dan reward',
      },
      {
        keyword: 'Anime Squadron units',
        href: '/units',
        intent: 'Carry, boss damage, control, dan support',
      },
      {
        keyword: 'Anime Squadron traits',
        href: '/traits',
        intent: 'Trait Shards dan Perfect Cube',
      },
      {
        keyword: 'Anime Squadron reroll',
        href: '/reroll',
        intent: 'Stat Rerolls dan Reroll Cubes',
      },
      {
        keyword: 'Anime Squadron download',
        href: '/download',
        intent: 'Link Roblox resmi dan keamanan',
      },
    ],
    guideKeywordsHeading: 'Panduan terkait',
    tierEyebrow: 'Ringkasan tier list',
    tierHeading: 'Unit terbaik UPD 0.5 sebelum memakai reroll',
    guidesEyebrow: 'Panduan terbaru',
    guidesHeading: 'Baca panduan sebelum memakai reward',
    allGuides: 'Semua panduan',
    siteStatus:
      'Status site: tidak resmi, sumber dilacak, dan fokus pada keputusan early access. Site ini tidak menyediakan script, exploit, APK tidak aman, atau klaim resmi palsu.',
  },
  codes: {
    ...en.codes,
    metadataTitle: 'Anime Squadron Codes - Kode aktif dan cara klaim',
    metadataDescription:
      'Lihat Anime Squadron codes aktif untuk Gems, Gold, Trait Shards, Reroll Cubes, Perfect Cubes, serta cara klaim kode dengan aman.',
    badge: 'Codes',
    h1: 'Anime Squadron Codes',
    intro: (checkedAt) =>
      `Salin kode Anime Squadron terbaru dulu, lalu gunakan Gems, Trait Shards, Reroll Cubes, Perfect Cubes, dan Gold dengan rencana upgrade yang jelas. Sumber dicek pada: ${checkedAt}.`,
    statusBody:
      'Reward saat ini mencakup Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes, dan Perfect Cubes. Klaim kode terbaru dulu, lalu tentukan unit mana yang layak menerima upgrade dan reroll.',
    checklistHeading: 'Checklist klaim kode',
    openRoblox: 'Buka game Roblox',
    redeemGuide: 'Panduan klaim',
    tierListButton: 'Buka tier list',
    rerollButton: 'Rencana reroll',
    traitsButton: 'Rencana trait',
    summaryStatus: (count) => `${count} kode aktif dilacak`,
    reviewNotes: [
      'Kode Anime Squadron peka huruf besar/kecil; salin persis termasuk tanda baca.',
      'Klaim 6 kode rilis yang sudah dicek silang sebelum kode milestone lama.',
      'Kode launch lama dipindahkan dari tabel active karena 2 sumber terbaru menandainya tidak aktif.',
      'Gunakan kode sebelum reroll trait atau stat supaya shard, cube, gems, dan gold gratis mengarahkan belanja pertama.',
      'Jika kode gagal, masuk server baru dan coba lagi sebelum menganggapnya kedaluwarsa.',
    ],
    activeHeading: (count) => `Kode aktif (${count})`,
    expiredHeading: 'Kode kedaluwarsa',
    expiredNone: 'Belum ada kode Anime Squadron kedaluwarsa yang tercatat.',
    expiredCount: (count) =>
      `${count} kode kedaluwarsa atau tidak aktif tercatat.`,
    watchHeading: 'Kode pantauan',
    watchIntro: 'Kode ini butuh konfirmasi lebih kuat sebelum dianggap aktif.',
    sourcesHeading: 'Sumber yang dicek',
    sourcesIntro:
      'Daftar active dibuat konservatif: prioritas sumber resmi dan beberapa tracker terbaru; entri yang bertentangan tidak masuk tabel active.',
    table: {
      code: 'Kode',
      reward: 'Reward',
      lastChecked: 'Terakhir dicek',
      status: 'Status',
      notes: 'Catatan',
      action: 'Aksi',
    },
    copy: 'Salin',
    copied: 'Tersalin',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Kode Anime Squadron mana yang masih aktif?',
        answer:
          'Gunakan tabel active di atas terlebih dahulu. Daftar ini dibandingkan dengan tracker terbaru dan tidak memasukkan kode lama yang sumbernya bertentangan.',
      },
      {
        question: 'Kenapa kode Anime Squadron saya tidak berhasil?',
        answer:
          'Kode peka huruf besar/kecil dan bisa cepat kedaluwarsa setelah update. Salin persis termasuk tanda baca, masuk server baru, lalu coba kode terbaru dulu.',
      },
      {
        question: 'Reward kode sebaiknya dipakai untuk apa?',
        answer:
          'Gunakan reward untuk membangun satu main carry dulu. Simpan Perfect Cubes dan batch reroll besar untuk unit yang benar-benar akan dipakai.',
      },
    ],
  },
  discord: {
    ...en.discord,
    metadataTitle: 'Anime Squadron Discord - Link komunitas dan Wiki aman',
    metadataDescription:
      'Cek Anime Squadron Discord, Trello, Wiki, link Roblox resmi, dan cara menghindari halaman kode atau download palsu.',
    badge: 'Komunitas',
    h1: 'Anime Squadron Discord, Trello, dan Wiki',
    intro:
      'Gunakan Roblox sebagai sumber utama, hati-hati dengan invite link, dan pakai halaman stabil untuk codes, tier list, dan download.',
    guideButton: 'Baca panduan link',
    downloadButton: 'Link bermain aman',
    codesButton: 'Kode aktif',
    tierButton: 'Tier list',
    usageHeading: 'Cara terbaik memakai update Discord',
    sourceCheck: 'Cek sumber',
    cards: [
      {
        title: 'Roblox resmi',
        status: 'Terverifikasi',
        body: 'Gunakan halaman game Roblox dari Komplex Studio sebagai link resmi utama.',
      },
      {
        title: 'Discord',
        status: 'Pantau',
        body: 'Discord disebut oleh coverage launch dan guide komunitas, tetapi invite link bisa berubah. Prioritaskan link dari Roblox atau channel developer.',
      },
      {
        title: 'Trello / Wiki resmi',
        status: 'Belum terverifikasi',
        body: 'Belum ada Trello atau Wiki resmi yang terverifikasi pada pengecekan sumber terbaru.',
      },
    ],
    usagePoints: [
      {
        label: 'Codes:',
        body: 'uji klaim kode baru di dalam game Roblox sebelum mengubah rencana reward.',
      },
      {
        label: 'Units:',
        body: 'tunggu role unit jelas sebelum memakai Perfect Cubes atau reroll langka.',
      },
      {
        label: 'Links:',
        body: 'hindari download luar, executor, form, atau halaman yang meminta detail akun.',
      },
    ],
    faqs: [
      {
        question: 'Apakah ada Trello resmi Anime Squadron?',
        answer:
          'Belum ada Trello resmi yang terverifikasi pada pengecekan sumber terbaru.',
      },
      {
        question: 'Apakah site ini resmi?',
        answer: 'Tidak. Anime Squadron Wiki adalah site guide buatan fan.',
      },
      {
        question: 'Di mana mengambil link aman?',
        answer:
          'Gunakan halaman Roblox resmi terlebih dahulu, lalu halaman codes, tier list, dan guide yang stabil untuk keputusan gameplay.',
      },
    ],
  },
  tierList: {
    ...en.tierList,
    metadataTitle: 'Anime Squadron Tier List - Unit dan role terbaik',
    metadataDescription:
      'Anime Squadron tier list bahasa Indonesia untuk main carry, boss damage, control, economy, support, dan saran reroll awal game.',
    badge: 'Tier List',
    h1: 'Anime Squadron Tier List',
    intro:
      'Daftar prioritas role unit yang paling penting: satu carry dulu, lalu boss damage, control, economy, atau support saat mode membutuhkannya.',
    rankingHeading: 'Aturan ranking',
    unitsButton: 'Buka panduan unit',
    traitsButton: 'Rencanakan trait',
    routeHeading: 'Rute build saat ini',
    bestUnitsButton: 'Baca panduan unit terbaik',
    secretUnitsButton: 'Panduan secret units',
    codesButton: 'Klaim kode dulu',
    rankingPoints: [
      {
        label: 'Nilai awal:',
        body: 'apakah role membantu clear wave dan boss awal.',
      },
      {
        label: 'Biaya reroll:',
        body: 'apakah role layak memakai material reroll langka sekarang atau nanti.',
      },
      {
        label: 'Kepercayaan:',
        body: 'apakah rekomendasi sudah dicek silang atau masih menunggu data launch.',
      },
    ],
    routePoints: [
      {
        label: 'Mulai dengan satu carry.',
        body: 'Investasi unit pertama harus membantu clear wave atau boss lebih baik daripada sisa akun.',
      },
      {
        label: 'Tunda reroll mahal.',
        body: 'Perfect Cubes, Trait Shards, dan Reroll Cubes paling kuat setelah keeper unit sudah jelas.',
      },
      {
        label: 'Perbaiki tembok yang terlihat.',
        body: 'Tambahkan boss damage, control, support, atau economy hanya saat role itu memperbaiki run yang kalah.',
      },
    ],
    tierLabels: {
      rolesSuffix: 'role',
      tableIntro:
        'Ranking early access berdasarkan masalah yang diselesaikan tiap jenis unit: wave-clear carry, boss damage, control, economy, support, atau starter filler.',
      role: 'Role',
      bestFor: 'Terbaik untuk',
      decision: 'Keputusan',
      confidence: 'Kepercayaan',
      early: 'awal',
      rerollCost: 'biaya reroll',
      avoid: 'Hindari',
    },
    faqs: [
      {
        question: 'Unit Anime Squadron terbaik apa?',
        answer:
          'Data awal masih berubah, jadi jawaban paling aman adalah unit yang menjadi main carry dan membantu melewati wave atau boss yang menahan progres.',
      },
      {
        question:
          'Apakah harus mengikuti tier list berdasarkan nama unit saja?',
        answer:
          'Gunakan ranking nama hanya setelah mengecek role. Unit layak dibangun saat menyelesaikan masalah wave, boss, farm, atau support saat ini.',
      },
      {
        question: 'Kenapa tier list ini menilai role?',
        answer:
          'Ranking role menghindari data nama unit yang belum terverifikasi saat Anime Squadron masih early access, tetapi tetap membantu menentukan prioritas resource.',
      },
      {
        question: 'Apakah support unit harus di-reroll dulu?',
        answer:
          'Biasanya tidak. Bangun carry dulu, lalu invest support saat kamu tahu clear mana yang benar-benar membaik.',
      },
    ],
  },
};

const pageCopy: Record<AnimeSquadronLocale, PageCopy> = {
  en,
  vi,
  th,
  'pt-br': ptBr,
  id,
};

export function getAnimeSquadronCopy(locale?: string) {
  return pageCopy[getAnimeSquadronLocale(locale)];
}
