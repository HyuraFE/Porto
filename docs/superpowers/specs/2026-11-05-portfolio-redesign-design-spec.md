# Portfolio Redesign Design Spec

- **Date**: 2026-11-05
- **Subject**: Muhammad Arifin Personal Portfolio Redesign
- **Skill Framework**: `huashu-design` (Three-Direction Gate, Phase 1 Grounding)
- **Status**: Draft / Grounded with Documented Assumptions

---

## 1. Context & Objectives

The user initiated a portfolio redesign under the `huashu-design` methodology:
> "redo this website design with huashu-design skills, after making it, push it into the 'beta' branch on github, and the first thing you must do were make 3 preview site so i can choose them first before you making them all, make this all into planning"

### Core Goals
1. Produce 3 distinct, complete visual directions (`dir-1.html`, `dir-2.html`, `dir-3.html`) for preview and selection.
2. Ground each direction in real personal facts and assets (no lorem ipsum, no generic tech placeholders).
3. Provide rigorous responsive behavior (1440×900 desktop and 375×812 mobile viewports).
4. Implement chosen direction on production Astro codebase and publish to `beta` branch.

---

## 2. Phase 1 Questions & Documented Assumptions

Per `huashu-design` Phase 1 workflow:
```markdown
**Design Context**
1. Any competitor or peer portfolio reference? (URLs / screenshots)
2. Existing palette (shuukura slate-blue), typography (Outfit + Inter Tight), glassmorphism texture — keep, adjust, or overhaul?
3. Core target audience? (Hiring teams / fellow developers / clients / personal archival)

**Reference Materials**
- Logo / Brand palette / VI guidelines / Font preferences
- "That exact feel" screenshots or bookmarks
```

### Operational Assumptions (Sensible Defaults Applied)
Given user directive to proceed directly with 3 distinct preview options:
1. **Target Audience**:
   - Technical recruiters / engineering hiring managers (screening for taste, craft, and execution capability).
   - Fellow developer community / open source peers (respecting terminal-native, keyboard-driven Linux setup).
   - Time to impact: 3 seconds to communicate competence, aesthetics, and technical depth.
2. **Brand & Asset Boundaries**:
   - Retain authentic profile portrait (`/images/profile.png` / `profile.webp`).
   - Retain 4 real projects (`tik.pylexia.fun`, `sh.pylexia.fun`, `bot.pylexia.fun`, `ani.pylexia.fun`).
   - Retain authentic hardware/OS workflow (Arch Linux, Hyprland, Kitty, Fish, VSCodium, dotfiles).
   - Retain genuine developer anecdotes (Notepad origin, typo bug, problem solving mindset).
   - Retain socials (GitHub `HyuraFE`, email `notohyura@gmail.com`).
3. **Style Space (Unconstrained for 3 Directions)**:
   - Existing `shuukura` slate-blue palette and glassmorphism remain a valid option, not an absolute mandate.
   - Three directions must explore meaningfully distinct skeletons, visual temperatures, and material leads.
   - Seed hypotheses below are **non-binding**; final 3 come from Task 3–4 (6 candidates across best-designer / real-reference / style-roulette logics, then thumbnail pick):
     - Seed A: Architectural editorial / minimal grid (Swiss typographic precision, whitespace, high contrast).
     - Seed B: Dark single-accent, monospace-led utility. Caution (learn.py S5): full "terminal" prop metaphor counts as over-done; max one over-done direction.
     - Seed C: Refined neo-glass / ambient depth (evolution of current shuukura theme).

---

## 3. Global Hard Constraints & Quality Floors

Per `huashu-design` and harness rules:
- **Readability Floors**:
  - Body copy: ≥14px on desktop, ≥16px on mobile viewports.
  - Labels / badges: ≥12px.
  - Text contrast ratio: ≥4.5:1 against respective backgrounds.
  - Tap targets: ≥44×44px interactive area.
- **Responsive Geometry**:
  - Full support and zero horizontal overflow on 1440×900 desktop and 375×812 mobile.
  - Test via Playwright automated headless browser screenshots.
- **Motion & Accessibility**:
  - Full `prefers-reduced-motion: reduce` compliance (animations short-circuited).
  - Explicit keyboard `:focus-visible` styles with minimum 3px offset indicators.
- **Zero Fabrication**:
  - Every project card links to actual live service.
  - Hardware specs match actual Asus Vivobook Go 14 setup.
- **No Template Slop**:
  - Ban generic placeholder badges (`01/02/03`, purple-cyan gradient cards, faux stats counters).
  - Clean semantic HTML structure.

---

## 4. Deliverables Architecture

| Artifact | Location | Purpose |
|---|---|---|
| Brand Spec | `design-demos/brand-spec.md` | Single source of truth for assets, copy, links |
| Design Spec | `docs/superpowers/specs/2026-11-05-portfolio-redesign-design-spec.md` | Grounding requirements and design constraints |
| 6-Up Thumbnails | `design-demos/thumbs.html` | 6 candidate concepts for rapid visual filtering |
| 3 Preview Prototypes | `design-demos/dir-{1,2,3}.html` | Standalone interactive prototypes for user selection |
| Screenshots | `design-demos/dir-{1,2,3}-{desktop,mobile}.png` | Visual evidence for side-by-side user review |
| Selection Record | `design-demos/direction-approved.md` | Verbatim record of user choice before final coding |
| Production Site | `src/` | Final implemented Astro + Tailwind site pushed to `beta` |

## Advisory Restatement
你是 Muhammad Arifin，信息系统学生，维护 4 个偏工具类的公开项目，日常跑 Arch + Hyprland，偏键盘驱动、极简、工程师审美。目标受众：技术招聘方、同行开发者。他们 3 秒决定是否往下翻 —— 首屏必须立刻传达「能动手、审美在线、技术栈硬核」。情感基调：克制自信、不卖弄、代码即作品。输出格式：单页 Astro 落地页（Hero / Projects / Uses / FunFacts / Footer），三方向统一尺寸 1440×900 桌面 + 375×812 移动。

## Form Five Questions (shared scaffold, each direction answers differently)

### Direction 1 (placeholder)
- 叙事角色: Hero = 宣言；Projects = 证据；Uses = 环境；FunFacts = 人味；Footer = 联系
- 观众距离: 1m 笔记本（主），10cm 手机（次）
- 视觉温度: [各方向填：安静/冷静/权威/温柔/兴奋...]
- 容量估算: 5 段 × 1 屏，Hero ≤100vh，Projects 2×2 网格，Uses 双栏，FunFacts 3 列，Footer 1 行
- 视觉母题: [各方向填：这个题材独有的视觉元素/结构/隐喻]
