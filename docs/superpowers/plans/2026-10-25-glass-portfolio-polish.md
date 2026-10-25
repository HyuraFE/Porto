# Glass Portfolio Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish existing Astro portfolio into coherent cool-lilac glassmorphism and correct dotfiles repository URL.

**Architecture:** Preserve existing components and content. Establish page-wide glass tokens in global CSS, then apply same frosted surface treatment to navigation, cards, footer, and hero without changing hierarchy or navigation behavior.

**Tech Stack:** Astro 5, Tailwind CSS 3, local WebP imagery.

**Spec:** User-approved direction in chat: cool-lilac glass surfaces over current photography; preserve copy, sections, and behavior; use `https://github.com/HyuraFE/dotfiles` for dotfiles.

## Global Constraints

- Preserve existing Indonesian copy, section order, projects, and routes.
- Use existing Astro and Tailwind dependencies; add no packages.
- Keep all external links opening in new tab with `rel="noopener noreferrer"`.
- Dotfiles URL must be exactly `https://github.com/HyuraFE/dotfiles`.
- Respect reduced-motion user preference.

## Review Focus

- 320px viewport: nav and hero controls must fit without horizontal scrolling.
- Keyboard navigation: all anchors retain visible focus against translucent surfaces.
- Reduced-motion preference: visual transitions and entry motion cease.
- Hero fallback images: missing WebP source leaves valid JPG/PNG fallback.
- Long project and setup labels wrap while preserving card actions.

---

### Task 1: Establish global glass visual foundation

**Files:**
- Modify: `src/styles/global.css:7-70`
- Modify: `src/layouts/Layout.astro:33`

**Interfaces:**
- Consumes: existing `shuukura` Tailwind palette and Google font loading.
- Produces: shared page background, selection, scrollbar, focus ring, and motion behavior used by all components.

- [ ] **Step 1: Add a failing static check for global glass tokens and keyboard focus**

Create a temporary Node assertion or test that reads `src/styles/global.css` and asserts it contains `:focus-visible`, `::selection`, and `prefers-reduced-motion` coverage.

- [ ] **Step 2: Run check to verify it fails**

Run: `node <temporary-check>`
Expected: FAIL because at least focus or browser-surface rules are absent.

- [ ] **Step 3: Add minimum global tokens and browser-surface rules**

Update global CSS with a cool-lilac background using layered radial gradients, stronger readable foreground tokens, scoped `:focus-visible`, selection, scrollbar, and reduced-motion rules. Set layout body background to transparent so global background shows.

- [ ] **Step 4: Run check and production build**

Run: `node <temporary-check> && npm run build`
Expected: PASS; Astro exits 0.

### Task 2: Apply coherent glass surfaces across portfolio

**Files:**
- Modify: `src/components/Navbar.astro:10-26`
- Modify: `src/components/Hero.astro:9-85`
- Modify: `src/components/Projects.astro:32-81`
- Modify: `src/components/Uses.astro:43-191`
- Modify: `src/components/FunFacts.astro:30-61`
- Modify: `src/components/Footer.astro:23-47`

**Interfaces:**
- Consumes: global cool-lilac surface foundation from Task 1.
- Produces: consistent translucent panels, sharp enough borders, hover states, and accessible controls at each section.

- [ ] **Step 1: Add failing static check for consistent glass treatments**

Create a temporary Node assertion that requires `backdrop-blur` and translucent `bg-white/` surface classes in navigation, projects, uses, fun facts, and footer.

- [ ] **Step 2: Run check to verify it fails**

Run: `node <temporary-check>`
Expected: FAIL because one or more listed sections use opaque surfaces.

- [ ] **Step 3: Apply minimal visual changes to existing classes**

Replace opaque card and section surfaces with readable translucent cool-lilac glass layers, use thin white-tinted borders, retain current grid and copy, and add tactile hover/focus styles without adding components or dependencies. Hero keeps background image as reason for its stronger backdrop effect.

- [ ] **Step 4: Run check and production build**

Run: `node <temporary-check> && npm run build`
Expected: PASS; Astro exits 0.

### Task 3: Correct dotfiles repository URL

**Files:**
- Modify: `src/components/Uses.astro:43-44`

**Interfaces:**
- Consumes: existing `dotfilesUrl` constant.
- Produces: dotfiles button linking to user-specified repository.

- [ ] **Step 1: Add failing static check for repository URL**

Create a temporary Node assertion that reads `src/components/Uses.astro` and expects `const dotfilesUrl = "https://github.com/HyuraFE/dotfiles"`.

- [ ] **Step 2: Run check to verify it fails**

Run: `node <temporary-check>`
Expected: FAIL because current repository points to `caelestia-dots/shell`.

- [ ] **Step 3: Replace `dotfilesUrl` value**

Set existing constant to exact specified URL. Do not alter target or relationship attributes.

- [ ] **Step 4: Run check and production build**

Run: `node <temporary-check> && npm run build`
Expected: PASS; Astro exits 0.

### Task 4: Render and verify real layouts

**Files:**
- Verify: `src/pages/index.astro`

**Interfaces:**
- Consumes: Tasks 1–3 built portfolio.
- Produces: viewport evidence and final build result.

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: Astro static build completes with no errors.

- [ ] **Step 2: Inspect page at mobile and desktop sizes**

Use local dev server and browser screenshots at 375px and 1440px widths. Check section hierarchy, surface contrast, navigation, cards, and no horizontal overflow.

- [ ] **Step 3: Check keyboard focus and reduced-motion styling**

Use browser keyboard navigation and emulated `prefers-reduced-motion: reduce`; confirm usable focus and no entry animation.

- [ ] **Step 4: Remove temporary static checks**

Delete only task-local temporary check files after final verification; no test harness is required for this static Astro page.
