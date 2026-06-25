# Chrono CCG Wiki 需求与实现文档

目标站点：Chrono CCG Wiki
目标域名：www.chronoccg.wiki
检查日期：2026-06-25

## 1. 项目目标

将当前旧 wiki 模板改造成只服务 Chrono CCG 的英文攻略站。首版重点不是堆满卡牌数据库，而是覆盖玩家已经在搜索的高意图问题：

- Chrono CCG / Chrono CCG wiki
- Chrono CCG codes / redeem codes
- Chrono CCG decks / deck builder
- Chrono CCG card list
- Chrono CCG syndicates
- Chrono CCG beginner guide
- Chrono CCG tier list / meta
- Chrono CCG Steam / Epic / mobile

Chrono CCG 仍处于 open beta / Early Access，卡牌文本、奖励、代码和 meta 都可能变化。因此首版采用“官方事实 + 官方 cards 静态快照 + deck/list 路由 + YouTube-supported 手写指南 + beta meta watch”的安全架构，卡库回链官方来源，不伪造固定 tier list。

## 2. 官方事实基线

| 项目 | 结论 | 来源 |
| --- | --- | --- |
| 官方站 | `https://playchrono.com/` | 官方首页 |
| Steam | `https://store.steampowered.com/app/4221310/Chrono_CCG/` | Steam release date: 2026-06-23, free to play |
| Epic | `https://store.epicgames.com/en-US/p/chrono-ccg-3d6383` | Early Access, free |
| Rules | `https://playchrono.com/rules` | Core, Agents, Chain, Shifting, Immortalization, keywords |
| Cards | `https://playchrono.com/collections/cards` | 官方 Cards 页在 `cardCatalogPage` 初始化数据内嵌 cards payload，可抽取为静态快照 |
| Decks | `https://runeterra.ar/chrono/decks` | 官方导航外链，作为 deck browser/builder 入口 |
| Beta patch | `https://playchrono.com/news/welcome-to-beta` | Patch 0.6.11, reward email, creator codes, no further wipes |

关键玩法：

- Chrono CCG 是 digital collectible card game。
- 玩家围绕两个 Divers 构筑牌组；Epic 描述为 two leaders, two syndicates, forty cards。
- Core 是胜负目标，Steam/Rules 均强调 Core durability。
- Timeline Shift 是特色系统，只有 timeline stack 顶层 timeline 生效。
- Agents 可以 Immortalize，触发后该玩家所有同名 copies 变成更强形态。
- 六个 Syndicates：Lifeblood、Sungrace、Silence、Singularity、Splintergleam、Phasetide。

## 3. Serper 长尾词发现

按 `wiki-site-builder` / `wiki-site-growth-iteration` 的 balanced 模式使用 Serper：每个 seed 做 1 次 autocomplete + 1 次 related/PAA，不对每个候选词做二次 SERP 验证。

| Seed | 发现词 / SERP 信号 | 动作 |
| --- | --- | --- |
| Chrono CCG | codes, Steam, redeem codes, decks, reddit, Kickstarter, review, mobile, Discord | 首页、codes、download、decks、discord |
| Chrono CCG wiki | card list, release date, review, decks, cards, gameplay, Early Access, Runeterra | 首页、cards、decks、updates |
| Chrono CCG beginner guide | beginner guide 2024/2023/pdf/reddit 旧年后缀混入 | 新建 `/guides/beginner-guide`，忽略旧年后缀 |
| Chrono CCG decks | deck builder, decks list, best decks, card list, Runeterra | 新建 `/decks` 和 deckbuilding guide |
| Chrono CCG syndicates | syndicates list, card list, guide, cards | 新建 `/syndicates` 和 syndicates guide |
| Chrono CCG codes | codes reddit, codes free, Discord, card list, decks | 新建 `/codes` 和 redeem guide |
| Chrono CCG tier list | Alpha tier list videos, TierMaker, Reddit | 新建 `/tier-list` 为 Meta Watch，不硬造最终排名 |

## 4. 关键词矩阵

| keyword | intent | route | priority | status | evidence | notes |
| --- | --- | --- | --- | --- | --- | --- |
| Chrono CCG | head term | `/` | P0 | keep | 官方首页、Steam、Epic | H1 使用 Chrono CCG Wiki |
| Chrono CCG wiki | wiki intent | `/` + `/guides` | P0 | keep | Serper + search results | 独立攻略站，不冒充官方 |
| Chrono CCG beginner guide | first-session route | `/guides/beginner-guide` | P0 | keep | 官方教程视频 + YouTube results | 规则、codes、starter deck |
| Chrono CCG codes | redeem rewards | `/codes` | P0 | keep | Serper + official patch creator codes | source-checked, not game-tested |
| Chrono CCG redeem codes | redeem steps | `/guides/codes-redeem-guide` | P0 | keep | Serper | 安全兑换和失败排查 |
| Chrono CCG decks | deck lists | `/decks` | P0 | keep | deck/search demand + rules | 站内构筑 hub，解释牌组计划 |
| Chrono CCG deck builder | build/import | `/tools/deck-checker` + deckbuilding guide | P0 | keep | rules + cards payload | 站内检查 Diver 阵营、40 张主牌组、复制数、曲线 |
| Chrono CCG card list | card lookup | `/cards` + `/cards/[slug]` | P0 | keep | official Cards nav + Serper | 抽取官网 cards payload，生成站内卡牌页，不外跳 |
| Chrono CCG syndicates | faction choice | `/syndicates` | P0 | keep | official site + YouTube | 六 syndicate 页面 |
| Chrono CCG tier list | meta ranking | `/tier-list` | P1 | keep | Serper + Alpha/Beta videos | 命名为 Meta Watch |
| Chrono CCG Steam | download | `/download` | P1 | keep | Steam official | 安全下载页 |
| Chrono CCG Epic | download | `/download` | P1 | keep | Epic official | 合并 |
| Chrono CCG mobile | platform demand | `/download` | P1 | watch | Serper autocomplete | 未见官方 mobile，安全说明 |
| Chrono CCG Discord | community | `/discord` | P1 | keep | 官方首页链接 | 官方链接 safety |
| Chrono CCG review | evaluation | `/guides/beginner-guide` | P2 | watch | Serper + YouTube | 不单独建 review 页 |
| Chrono CCG Kickstarter | old/backer intent | `/updates` | P2 | watch | search result | 只作为 rewards/backer context |

## 5. 竞品与内容表面

### 官方/半官方表面

- Official site：主页集成 Steam、Epic、Rules、Cards、Decks、Discord、Reddit、Twitter。
- Runeterra.AR：官方导航外链，已有 `Decks / Builder / New Cards` 等产品面，属于最重要竞品/数据表面。
- Steam/Epic：提供官方玩法摘要、状态、系统需求、F2P/EA 信息。
- Reddit：`r/ChronoCCG` 暴露社区问题、codes、mobile/language/controller/download 等需求。

### 可以直接做

- 站内 hub：rules、cards、decks、tools、guides、updates；外部入口放到安全下载/社区页解释。
- 手写 guides：beginner、syndicates、deckbuilding、priority/timeline、starter decks、codes、download、beta update。
- Meta Watch：列 deck archetype 与 source confidence，不声明最终 card tier。

### 暂不做 / 需要确认

- 完整 card database：需要稳定 API 或官方数据许可，首版不复制。
- 自建 deck builder：Runeterra.AR 已存在，首版先链接和解释。
- live meta tracker：需要持续抓取/维护。
- mobile/APK/download mirrors：官方未确认，不能做 unsafe 路线。

## 6. YouTube guide decision table

| Video / source | Search intent | Action | Target page | Reason |
| --- | --- | --- | --- | --- |
| `W9EqTQUNwrE` Beginner's Guide feat Alliestrasza | beginner guide | new_page | `/guides/beginner-guide` | 官方频道，适合首篇 |
| `2AGBPyxp0DI` Which Syndicate should you play | syndicates | new_page | `/guides/syndicates-guide` | 直接匹配 faction choice |
| `hbbC_AvUCcA` 9 Diver Tricks | deckbuilding / divers | new_page | `/guides/diver-deckbuilding-guide` | Diver 是核心构筑系统 |
| `NlEV2XHNeEA` Priority Explained | priority / chain | new_page | `/guides/timeline-priority-guide` | 新手高错误率系统 |
| `zfKaUzJNOT0` Starter Deck Guide | starter decks | new_page | `/guides/starter-decks-guide` | beta launch 语境新 |
| `7KwGukMAMDs` Sprouts Deck Guide | beginner deck / meta | expand | `/guides/starter-decks-guide` | 支撑 Sprouts 初始牌组建议 |
| `4Om2NnTdTOY` Introducing Chrono CCG | codes / intro | expand | `/guides/codes-redeem-guide` | search snippet 暴露 ALLIE code |

## 7. 页面架构

Core routes:

- `/`
- `/guides`
- `/rules`
- `/syndicates`
- `/decks`
- `/cards`
- `/cards/[slug]`
- `/tools`
- `/tools/card-finder`
- `/tools/deck-checker`
- `/tools/curve-analyzer`
- `/codes`
- `/tier-list`
- `/download`
- `/discord`
- `/updates`
- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

Guide routes:

- `/guides/beginner-guide`
- `/guides/syndicates-guide`
- `/guides/diver-deckbuilding-guide`
- `/guides/timeline-priority-guide`
- `/guides/starter-decks-guide`
- `/guides/codes-redeem-guide`
- `/guides/card-list-and-deck-builder-guide`
- `/guides/steam-epic-download-guide`
- `/guides/beta-update-rewards-guide`

## 8. 配色与视觉

官方视觉是暗色宇宙/时间线背景、金色装饰、青蓝能量、深红按钮。站点采用：

- background: `#0A0D10`
- panel: `#14100D`
- border: `#3B3128`
- text: `#FFF5E1`
- muted: `#D8CDBA`
- cyan accent: `#63E6DD`
- gold accent: `#D9A84E`
- action red: `#B8442A`

官方素材已下载至：

- `public/chronoccg/hero-bg.webp`
- `public/chronoccg/gameplay.webp`
- `public/chronoccg/logo.png`
- `public/chronoccg/chrono-banner.webp`
- `public/chronoccg/syndicates.jpg`
- `public/chronoccg/icons/*.png`

## 9. 实现清单

- 重命名/迁移数据目录：`src/data/chronoccg`
- 重命名/迁移组件目录：`src/components/chronoccg`
- 重命名 route group：`src/app/[locale]/(chronoccg)`
- 删除旧模板工具页：units、traits、reroll、resource calculator、pity calculator、secret tracker、game modes。
- 更新 config：website、navbar、footer、routes、sitemap、robots/manifest、middleware、canonical URL。
- 更新 README、env.example、wrangler、messages。
- 删除旧 public assets 和 PRD。
- 抽取官方 Cards payload：`src/data/chronoccg/cards.json` 包含 192 个官方顶层条目，展开 Immortalized counterpart 后为 294 个唯一 card faces。
- 新增站内卡牌详情：`/cards/[slug]`，卡牌列表、featured cards、相关卡牌全部走站内链接。
- 新增工具页：Card Finder、Deck Checker、Curve Analyzer，基于 cards snapshot 和 Diver/syndicate 规则做结构检查。
- 顶部导航新增 Cards 和 Tools 一级入口；Decks 负责构筑计划，Cards 负责单卡数据库，Tools 负责检查和分析。

## 10. 后续建议

- 等 GSC 数据出现后再决定是否扩展 card explainers、specific deck pages、localized pages。
- 每次官方 patch 后重抽 `https://playchrono.com/collections/cards` 的 cards payload，刷新 `/cards` 快照。
- 每次官方 patch 后优先检查 `/updates`、`/codes`、`/tier-list` 和 starter deck guide。
