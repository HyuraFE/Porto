# Portfolio Redesign with 3-Direction Preview Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the personal portfolio (Astro + Tailwind) using huashu-design three-direction gate — produce 3 distinct preview sites, let user choose, then implement final version and push to `beta` branch.

**Architecture:** Follow huashu-design `references/directions.md` Phase 1–7 strictly. Each direction is a complete standalone HTML (Astro component) in `design-demos/dir-{1,2,3}.html` with screenshots. After user selection, replace `src/pages/index.astro` + components with chosen direction's design system. Deploy to `beta` branch.

**Tech Stack:** Astro 5.8, Tailwind 3.4, Node/Playwright for screenshots, huashu-design skill scripts (`learn.py`, `design_lint.py`, `ref_board.py`, `capabilities.py`).

**Spec:** This plan + huashu-design skill + current site audit (`src/**/*.astro`, `src/styles/global.css`, `public/images/*`).

---

## Global Constraints

- **Huashu three-direction gate (mandatory):** No implementation before 3 direction drafts shown + `direction-approved.md` written.
- **Readability floors:** Body ≥14px (mobile 16px), labels ≥12px, contrast ≥4.5:1, tap targets ≥44×44px.
- **Responsive verification:** 1440×900 and 375×812 viewports via Playwright.
- **No fabricated content:** Use real profile photo, project data, hardware/software lists from current site.
- **Single-file demos for directions:** Images/logo base64-embedded or referenced via `/images/*`.
- **Zero console errors** on delivered pages.
- **Reduced motion** respected (`prefers-reduced-motion`).
- **Branch target:** `beta` (create if missing, push after final implementation).

---

## Review Focus

| Input / Failure Mode | Expected Behavior | Pinning Test |
|---|---|---|
| Missing profile image `/images/profile.png` | Graceful fallback (placeholder SVG) — no broken img icon | Visual check: no alt text visible on load |
| Theme toggle localStorage corrupted | Default to `prefers-color-scheme` | Toggle → reload → persists |
| Reduced motion enabled | All animations disabled, instant state | `prefers-reduced-motion: reduce` + Playwright |
| Viewport 375px (mobile) | No horizontal scroll, text readable, tap targets hit | Playwright 375×812 screenshot |
| Glassmorphism backdrop-filter unsupported (old Safari) | Fallback opaque background readable | Visual check on Safari 15- |

---

### Task 1: Clarify + Gather References (Huashu Phase 1)

**Files:**
- Create: `docs/superpowers/specs/2026-11-05-portfolio-redesign-design-spec.md`
- Create: `design-demos/` (directory)

**Interfaces:**
- Consumes: Current site audit, huashu-design skill
- Produces: `design-spec.md` (shared input for 3 directions), `brand-spec.md` (if brand assets exist)

- [ ] **Step 1.1: Ask Phase 1 questions (max 3) + request reference materials**

```markdown
一次列齐，批量回答：

**Design Context**
1. 有想参考的竞品/同类个人主页吗？（网址或截图）
2. 现有的 shuukura 配色、Inter Tight/Outfit 字体、glassmorphism 质感——想保留、微调、还是完全重来？
3. 作品集的核心受众是谁？（招聘方 / 同行开发者 / 客户 / 自己记录）

**参考材料**（都没有就说"看着办"）
- Logo / 品牌色 / VI 规范 / 字体规范
- "就要那种感觉" 的网站截图或网址
```

- [ ] **Step 1.2: Record answers + assumptions in `design-spec.md`**

If no response in 1 turn: proceed with assumptions (documented):
- Audience: hiring managers + fellow devs (technical, values clarity)
- Keep shuukura palette as *option* not mandate; font stack open
- No external brand assets beyond current repo (name, photo, project URLs)

- [ ] **Step 1.3: Write `brand-spec.md` (if applicable) — here minimal: name, photo, project links**

```markdown
# Brand Spec
- Name: Muhammad Arifin (display: "Arifin.")
- Role: Mahasiswa Sistem Informasi
- Photo: /images/profile.png (288×384)
- Projects: 4 items (TikTok Downloader, Shrtnr, Chatbot AI, Manga Tracker)
- Hardware: Asus Vivobook Go 14 (Arch/Hyprland/Kitty/Fish/VSCodium)
- Socials: GitHub (HyuraFE), Email (notohyura@gmail.com)
```

- [ ] **Step 1.4: Commit spec**

```bash
git add docs/superpowers/specs/2026-11-05-portfolio-redesign-design-spec.md design-demos/brand-spec.md
git commit -m "spec: portfolio redesign design spec + brand spec"
```

---

### Task 2: Advisory Restatement + Form Five Questions (Huashu Phase 2–3)

**Files:**
- Modify: `docs/superpowers/specs/2026-11-05-portfolio-redesign-design-spec.md` (append)

**Interfaces:**
- Consumes: `design-spec.md`, `brand-spec.md`
- Produces: Restatement + form answers in spec

- [ ] **Step 2.1: Write advisory restatement in spec**

```markdown
## Advisory Restatement
你是 Muhammad Arifin，信息系统学生，维护 4 个偏工具类的公开项目，日常跑 Arch + Hyprland，偏键盘驱动、极简、工程师审美。目标受众：技术招聘方、同行开发者。他们 3 秒决定是否往下翻 —— 首屏必须立刻传达「能动手、审美在线、技术栈硬核」。情感基调：克制自信、不卖弄、代码即作品。输出格式：单页 Astro 落地页（Hero / Projects / Uses / FunFacts / Footer），三方向统一尺寸 1440×900 桌面 + 375×812 移动。
```

- [ ] **Step 2.2: Answer Form Five Questions per direction (shared scaffold)**

```markdown
## Form Five Questions (shared scaffold, each direction answers differently)

### Direction 1 (placeholder)
- 叙事角色: Hero = 宣言；Projects = 证据；Uses = 环境；FunFacts = 人味；Footer = 联系
- 观众距离: 1m 笔记本（主），10cm 手机（次）
- 视觉温度: [各方向填：安静/冷静/权威/温柔/兴奋...]
- 容量估算: 5 段 × 1 屏，Hero ≤100vh，Projects 2×2 网格，Uses 双栏，FunFacts 3 列，Footer 1 行
- 视觉母题: [各方向填：这个题材独有的视觉元素/结构/隐喻]
```

- [ ] **Step 2.3: Commit updated spec**

```bash
git add docs/superpowers/specs/2026-11-05-portfolio-redesign-design-spec.md
git commit -m "spec: add restatement + form five questions scaffold"
```

---

### Task 3: Material Prep + Style Specimens Review (Huashu Phase 3.5 + 4a prep)

**Files:**
- Read: `public/images/profile.png`, `public/images/background.jpg`
- Read: `$HD/assets/style-specimens/sheet-web.jpg`, `$HD/references/design-styles.md` (web 20)

**Interfaces:**
- Consumes: `brand-spec.md`, huashu-design assets
- Produces: Material inventory, 6 candidate sources

- [ ] **Step 3.1: Verify assets exist + base64-encode profile for embedding**

```bash
ls -la public/images/
# profile.png, profile.webp, background.jpg, background.webp, favicon.svg
```

- [ ] **Step 3.2: Run learn + lint + capabilities for direction context**

```bash
HD=/home/pylexia/.agents/skills/huashu-design
python3 "$HD/scripts/learn.py" direction color portfolio personal developer
python3 "$HD/scripts/design_lint.py" ledger
python3 "$HD/scripts/capabilities.py"
```

- [ ] **Step 3.3: View style specimen sheet-web.jpg (via look tool or open file)**

- [ ] **Step 3.4: Generate 6 candidate sources (directions.md Phase 4a)**

Record in `design-demos/directions.md` (each candidate = 1 card):

| # | Logic | Source | Notes |
|---|---|---|---|
| 1 | 最佳设计师 A | [e.g. 原研哉 / Kenya Hara] | 留白、素材本身做主角、极少的字 |
| 2 | 最佳设计师 B | [e.g. Experimental Jetset] | 系统化网格、规则线、信息密度 |
| 3 | 现实参照 A | [Awwwards SOTD / dev portfolio 实例 URL] | 用 `ref_board.py` 截参考板 |
| 4 | 现实参照 B | [另一个优秀个人主页 URL] | 同上 |
| 5 | 秒数轮盘 A | 秒数抽取 → web 分区第 N 种 | 看样张图再写卡 |
| 6 | 秒数轮盘 B | 秒数抽取 → east 分区第 N 种 | 中文/东亚风格池 |

- [ ] **Step 3.5: For each modern reference (3,4), run `ref_board.py` and view board**

```bash
python3 "$HD/scripts/ref_board.py" "https://example.com/ref1" "https://example.com/ref2" --out design-demos/refs/board.jpg
```

- [ ] **Step 3.6: Write 6 direction cards into `design-demos/directions.md`**

Each card: 逻辑与来源 / 借的是什么 / 主角素材 / 骨架 / 胆量花在哪 / form 来自内容的哪里

- [ ] **Step 3.7: Commit directions.md**

```bash
git add design-demos/directions.md design-demos/refs/
git commit -m "directions: 6 candidate cards + reference boards"
```

---

### Task 4: Six Thumbnails → Pick Three (Huashu Phase 4b–4d)

**Files:**
- Create: `design-demos/thumbs.html` (6-up grid, ~480×300 each)
- Create: `design-demos/dir-1.html`, `dir-2.html`, `dir-3.html` (selected 3 full pages)

**Interfaces:**
- Consumes: `directions.md`, `brand-spec.md`, `design-spec.md`
- Produces: 3 direction demos + screenshots

- [ ] **Step 4.1: Build `thumbs.html` — 6 thumbnails with real fonts/colors/skeleton**

Each thumb: key hero screen only, real typography, real palette, real layout skeleton.

- [ ] **Step 4.2: Screenshot thumbs + view**

```bash
npx playwright screenshot file:///.../design-demos/thumbs.html design-demos/thumbs.png --viewport-size=1440,900
# open thumbs.png to review
```

- [ ] **Step 4.3: Select 3 per criteria (directions.md 4d order):**
  1. 单看就够好
  2. 三张彼此不一样（骨架/气质/外观家族不撞）
  3. 不撞外观账本
  4. 最多一张用力过头（去掉手法信息更清楚则过头）

- [ ] **Step 4.4: Build 3 full direction demos (`dir-1.html`, `dir-2.html`, `dir-3.html`)**

Each: complete single-page Astro-equivalent HTML (Hero, Projects, Uses, FunFacts, Footer, Navbar), responsive, dark/light theme, glassmorphism or chosen style, real content, working interactions (theme toggle, smooth scroll, hover states).

- [ ] **Step 4.5: Self-check each with design_lint**

```bash
python3 "$HD/scripts/design_lint.py" check design-demos/dir-1.html design-demos/dir-2.html design-demos/dir-3.html
python3 "$HD/scripts/design_lint.py" compare design-demos/dir-1.html design-demos/dir-2.html design-demos/dir-3.html
python3 "$HD/scripts/design_lint.py" ledger check design-demos/dir-1.html design-demos/dir-2.html design-demos/dir-3.html
```
Fix red flags; delete yellow (template decorations).

- [ ] **Step 4.6: Screenshot 3 directions (1440×900 + 375×812 each)**

```bash
for i in 1 2 3; do
  npx playwright screenshot file:///.../design-demos/dir-$i.html design-demos/dir-$i-desktop.png --viewport-size=1440,900
  npx playwright screenshot file:///.../design-demos/dir-$i.html design-demos/dir-$i-mobile.png --viewport-size=375,812
done
```

- [ ] **Step 4.7: Present to user — stop and wait**

Show: 3 desktop screenshots + 3 mobile screenshots + each direction card summary + thumbs overview (6-up). Say: "另外三张是备选，看中哪张我做成完整版。"

- [ ] **Step 4.8: User picks → write `direction-approved.md`**

```markdown
# Direction Approved
- 展示版本: dir-1, dir-2, dir-3
- 截图路径: design-demos/dir-{1,2,3}-desktop.png, dir-{1,2,3}-mobile.png
- 用户原话: "[verbatim user choice, e.g. '选第 2 个，但要把 Hero 的字再大一点，颜色换成深色模式那套']"
- 混合选择: [如 "A 的布局 + C 的颜色" → 记录具体列]
```

- [ ] **Step 4.9: Record preference with learn.py**

```bash
python3 "$HD/scripts/learn.py" add --kind preference --text "用户原话" --scope "portfolio redesign"
```

- [ ] **Step 4.10: Commit direction-approved + demos**

```bash
git add design-demos/direction-approved.md design-demos/dir-*.html design-demos/*.png
git commit -m "directions: 3 approved previews + user choice recorded"
```

---

### Task 5: Implement Chosen Direction as Production Astro Site (Huashu Phase 7)

**Files:**
- Modify: `src/pages/index.astro`, `src/components/*.astro`, `src/styles/global.css`, `src/layouts/Layout.astro`
- Create: new components if direction introduces new patterns

**Interfaces:**
- Consumes: `direction-approved.md`, chosen `dir-X.html` design system
- Produces: Production-ready Astro site

- [ ] **Step 5.1: Extract design tokens from chosen direction**

Colors (oklch), fonts (display/body), spacing scale, glass/border/shadow values, radius, motion tokens → write into `src/styles/design-tokens.css` + update `tailwind.config.mjs`.

- [ ] **Step 5.2: Rewrite global.css with new token system**

Replace shuukura variables with chosen direction's palette. Keep dark/light switching.

- [ ] **Step 5.3: Rebuild each component per chosen direction**

- `Hero.astro` — new layout, typography, visual motif
- `Projects.astro` — new card/interaction pattern
- `Uses.astro` — new hardware/software presentation
- `FunFacts.astro` — new fact card style
- `Navbar.astro` — new nav style (sticky? side? minimal?)
- `Footer.astro` — new footer style
- `Layout.astro` — update font imports, preloads

- [ ] **Step 5.4: Verify build + dev server**

```bash
npm run build
npm run dev &
# Playwright smoke test
npx playwright screenshot http://localhost:4321 design-demos/final-desktop.png --viewport-size=1440,900
npx playwright screenshot http://localhost:4321 design-demos/final-mobile.png --viewport-size=375,812
```

- [ ] **Step 5.5: Run design_lint on final build output**

```bash
python3 "$HD/scripts/design_lint.py" check dist/index.html
# fix reds
```

- [ ] **Step 5.6: Commit final implementation**

```bash
git add src/ tailwind.config.mjs astro.config.mjs
git commit -m "feat: implement chosen direction (dir-X) as production site"
```

---

### Task 6: Push to `beta` Branch

**Files:** (git operations)

**Interfaces:**
- Consumes: `main` branch with final commit
- Produces: `beta` branch on origin

- [ ] **Step 6.1: Create/switch to beta branch**

```bash
git checkout -b beta 2>/dev/null || git checkout beta
git merge main --ff-only
```

- [ ] **Step 6.2: Push beta to origin**

```bash
git push origin beta -u
```

- [ ] **Step 6.3: Verify remote beta exists**

```bash
git ls-remote --heads origin beta
```

- [ ] **Step 6.4: (Optional) Deploy preview via GitHub Pages / Netlify / Vercel if configured**

---

## Execution Handoff

**Plan complete and saved to `docs/superpowers/plans/2026-11-05-portfolio-redesign-three-directions.md`. Please review the plan. Which execution approach would you prefer?**

- **Subagent-driven** - A fresh subagent implements each task and a fresh reviewer checks it before the next one starts, then a whole-branch review at the end. Most thorough; costs a fresh context per task and per review.
- **Native** - I implement every task myself in this session, the way this harness runs work, then one fresh reviewer on the most capable model checks the whole branch. Cheapest and fastest; no independent review until the end.

**For this plan I recommend Subagent-driven, because Tasks 3–4 (6 candidates → 3 demos) are parallelizable and visually subjective — independent subagents per direction prevent cross-contamination and give genuine variety. Does the plan capture what you want, and which approach should we use?**