# Candidate Directions: Muhammad Arifin Portfolio Redesign

> Methodology: `huashu-design` Phase 4a (6 candidate cards across 3 design logics).  
> Grounding input: `design-demos/brand-spec.md` and `docs/superpowers/specs/2026-11-05-portfolio-redesign-design-spec.md`.  
> Style roulette timestamp: S = `10` (`date +%S`). Web index: `10 % 20 + 1 = 11` (Dark Editorial). East index: `10 % 12 + 1 = 11` (Sato Minimal Symbol).

---

## Candidate 1: Best Designer A · Kenya Hara (原研哉)

- **逻辑与来源 (Logic & Source)**: Kenya Hara (原研哉), art director of MUJI, author of *White* (白). Logic: Emptiness (*Ma* / 間) as a receptive vessel; subtraction until only functional truth remains.
- **借的是什么 (Concrete Borrowed Rules)**:
  - Grid: Single ultra-wide column (680px max-width) floating within vast asymmetric whitespace; left margin fixed at 15vw desktop.
  - Type ratio: Strict 1.25 scale (body 16px, h2 20px, display 38px, caption 12px); extreme line-height 1.85; title font-weight light (300).
  - Color ratio: 92% paper warm-white (#F7F6F2), 7% deep sumi ink text (#181816), 1% vermilion cinnabar accent (#D9381E) applied only once as a 6px square seal next to the name.
  - Image-text relation: The authentic profile portrait is placed with generous whitespace framing like an exhibition catalogue print; text never overlaps image.
- **主角素材 (Lead Material)**: High-resolution authentic profile photo (`/images/profile.webp`) framed by wide negative space + quiet typographic whitespace.
- **骨架 (Layout Skeleton)**: One-column slow vertical scroll; hero holds only portrait, name, and single-sentence stance; projects and stack unfold like gallery catalogue captions.
- **胆量花在哪 (Boldest Move)**: 65% of the initial 1440×900 viewport is intentionally vacant negative space; zero borders, zero background boxes.
- **form 来自内容的哪里 (Form Grounded in Content)**: Student builder running Arch Linux by choice avoids clutter: the site exhibits code tools with the exact same unadorned discipline as his minimal Hyprland config.
- **Proposed Palette**:
  - Warm Paper: `#F7F6F2` (L 0.96, C 0.015, H 95)
  - Sumi Ink: `#181816` (L 0.16, C 0.005, H 80)
  - Cinnabar Vermilion: `#D9381E` (L 0.52, C 0.18, H 35, single focal seal)
  - *Justification*: Uncoated Japanese art paper tone reduces screen glare and anchors the calm editorial posture.
- **Font Pair**: `Source Serif 4` (display/titles, 300/400) + `Inter` (body/UI labels, 400).

---

## Candidate 2: Best Designer B · Experimental Jetset

- **逻辑与来源 (Logic & Source)**: Experimental Jetset (Amsterdam graphic design studio known for strict modernist grid logic, exposed structure, rule lines, and systematic typographic tension).
- **借的是什么 (Concrete Borrowed Rules)**:
  - Grid: Rigid 4-column modular Swiss grid split by continuous 1.5px black dividing lines (`border: 1.5px solid #000000`).
  - Type ratio: Pure Grotesque scale; heavy bold display (44px, 800 weight) slammed against 14px compact monospace metadata; no soft gradients.
  - Color ratio: 80% optical stark white (#FFFFFF), 18% dense black (#000000), 2% international signal blue (#0000EE) for raw hyperlinks.
  - Image-text relation: Profile photo is converted into high-contrast greyscale duotone, tightly cropped inside an exact grid module cell with a 1.5px black border.
- **主角素材 (Lead Material)**: Black structural rule lines and typographic scale contrast; real profile portrait treated as a monochrome halftone document artifact.
- **骨架 (Layout Skeleton)**: Rigid 4-quadrant screen blueprint with hairline grid divisions; hero, project index, environment manifest, and contact locked into visible grid coordinates.
- **胆量花在哪 (Boldest Move)**: Completely exposed structural grid with 1.5px solid black borders everywhere; zero border-radius, raw underlined default blue links.
- **form 来自内容的哪里 (Form Grounded in Content)**: Direct visual translation of tiling window managers (Hyprland): information slots into explicit, non-overlapping geometric tiles without ornamental padding.
- **Proposed Palette**:
  - Stark White: `#FFFFFF` (L 1.0, C 0.0)
  - Jet Black: `#0A0A0A` (L 0.12, C 0.0)
  - Hyperlink Blue: `#0022FF` (L 0.45, C 0.22, H 260)
  - *Justification*: High-contrast structural utility reflecting the strict geometry of code compilers and tiling workspaces.
- **Font Pair**: `Archivo` (display headings, 800) + `JetBrains Mono` (metadata & labels) + `Inter` (body text).

---

## Candidate 3: Real Reference A · Paco Coursey (`paco.me`)

- **逻辑与来源 (Logic & Source)**: Paco Coursey personal website (`https://paco.me/`, design engineer, creator of `cmdk`). Reference screenshot captured at `design-demos/refs/ref-paco.png`.
- **借的是什么 (Concrete Borrowed Rules)**:
  - Grid: Centered narrow column (580px desktop reading measure), ample balanced side gutters.
  - Type ratio: Subtle low-dramatic 1.2 scale (body 15px, headings 17px–20px); typographic hierarchy driven by color value and weight rather than oversized text.
  - Color ratio: 94% deep neutral charcoal background (#111111), 5% muted slate-grey typography (#888888), 1% crisp white foreground highlight (#EDEDED).
  - Image-text relation: Text is the absolute protagonist; portrait sits as a refined, small, perfectly circular or square inline marker alongside biographical prose.
- **骨架 (Layout Skeleton)**: Streamlined single-column chronological narrative feed; hero flows directly into project links formatted as year/title list items, followed by notes.
- **胆量花在哪 (Boldest Move)**: Extreme typographic restraint; entire page uses small, quiet text hierarchy with zero floating card containers or decorative drop shadows.
- **主角素材 (Lead Material)**: Precise micro-typography, subtle hover states, and authentic software utility descriptions.
- **form 来自内容的哪里 (Form Grounded in Content)**: Echoes the student's authentic preference for pure text search, keyboard workflows, and focused CLI tooling (`tik`, `sh`, `ani`).
- **Proposed Palette**:
  - Charcoal Background: `#121212` (L 0.14, C 0.0)
  - Muted Grey Text: `#8A8A8A` (L 0.60, C 0.0)
  - Highlight White: `#EEEEEE` (L 0.94, C 0.0)
  - *Justification*: Low ocular fatigue night-canvas prioritizing deep reading and calm technical craft.
- **Font Pair**: `Geist` (display & body, 400/500) + `Geist Mono` (code & metadata).

---

## Candidate 4: Real Reference B · Anthony Fu (`antfu.me`)

- **逻辑与来源 (Logic & Source)**: Anthony Fu personal website (`https://antfu.me/`, Vue/Vite core team developer). Reference screenshot captured at `design-demos/refs/ref-antfu.png`.
- **借的是什么 (Concrete Borrowed Rules)**:
  - Grid: 720px centered reading column with right-aligned metadata tags; clean open vertical rhythm.
  - Type ratio: Modular 1.33 ratio with prominent medium-weight display titles, airy paragraph spacing, and categorized list groups.
  - Color ratio: 90% soft warm-grey light mode (#FAF8F5) / muted dark canvas (#121212), 8% charcoal body (#333333), 2% muted sage/teal badge indicator (#4D9375).
  - Image-text relation: Visual avatar placed at header with playful interactive presence; projects organized by categorized groupings with subtle icon badges.
- **骨架 (Layout Skeleton)**: Clean developer index; prominent author intro header with avatar followed by sectioned listings (Projects categorized by purpose, hardware stack, dotfiles link).
- **胆量花在哪 (Boldest Move)**: Transparent listing layout where projects do not live inside closed cards; each project is an open row with title, live domain badge, and description.
- **主角素材 (Lead Material)**: Live domain badges (`tik.pylexia.fun`, `sh.pylexia.fun`) treated as technical proof alongside open-source GitHub stats.
- **form 来自内容的哪里 (Form Grounded in Content)**: Direct alignment with Arifin's active open-source footprint (4 live web apps + Arch Linux dotfiles on GitHub).
- **Proposed Palette**:
  - Off-White Canvas: `#FAFAF8` (L 0.97, C 0.008, H 90)
  - Deep Charcoal: `#222222` (L 0.20, C 0.0)
  - Pine Sage Accent: `#2E7D5E` (L 0.50, C 0.09, H 155)
  - *Justification*: Open-source ecosystem aesthetic: clean, friendly, readable, and documentation-inspired.
- **Font Pair**: `Inter` (body & display, 400/600) + `JetBrains Mono` (domain labels & paths).

---

## Candidate 5: Style Roulette Web · #11 Dark Editorial (Brittany Chiang style)

- **逻辑与来源 (Logic & Source)**: Seconds Roulette Web selection #11 (`S = 10`, `10 % 20 + 1 = 11` in `references/design-styles.md` Web section: **Dark Editorial**). Specimen inspected: `assets/style-specimens/web/11-dark-editorial.jpg` and verified live reference `design-demos/refs/ref-brittany.png`.
- **借的是什么 (Concrete Borrowed Rules)**:
  - Grid: Asymmetric 2-column layout desktop (fixed 40% width left sidebar, 60% scrollable right content column); single column on mobile.
  - Type ratio: High-contrast pairing of clean Grotesque titles with monospaced numbered index labels (`01. / 02. / 03.`); body 15px.
  - Color ratio: 88% deep navy slate (#0B132B / #0F172A), 9% slate grey body text (#94A3B8), 3% single electric mint/cyan accent (#64FFDA / #38BDF8).
  - Image-text relation: Left column holds permanent identity anchor (name, title, bio, navigation anchors); right column scrolls project cards that illuminate on hover with subtle radial highlight.
- **骨架 (Layout Skeleton)**: Fixed left sticky sidebar (identity, brief bio, nav anchors, social icons) + right flowing column (featured project cards with technology pill tags and live links).
- **胆量花在哪 (Boldest Move)**: Screen is split in two independent functional planes; left side stays anchored while right side delivers technical evidence.
- **主角素材 (Lead Material)**: Live interactive projects (`tik`, `sh`, `bot`, `ani`) rendered as interactive cards with monospace category markers and live URLs.
- **form 来自内容的哪里 (Form Grounded in Content)**: Dual nature of Arifin's profile: Information Systems academic identity remains anchored on the left while practical Linux tools scroll on the right.
- **Proposed Palette**:
  - Deep Navy Slate: `#0B132B` (L 0.16, C 0.035, H 245)
  - Slate Muted: `#8892B0` (L 0.62, C 0.025, H 245)
  - Mint Glow Accent: `#64FFDA` (L 0.88, C 0.14, H 175)
  - *Justification*: Industry-standard developer portfolio baseline providing instant developer credibility and high text contrast.
- **Font Pair**: `Inter` (display & body) + `Fira Code` (numbered labels & tags).

---

## Candidate 6: Style Roulette East · #11 Sato Minimal Symbol (佐藤可士和)

- **逻辑与来源 (Logic & Source)**: Seconds Roulette East selection #11 (`S = 10`, `10 % 12 + 1 = 11` in `references/design-styles.md` East section: **佐藤可士和极简符号 Sato Minimal Symbol**). Specimen inspected: `assets/style-specimens/east/11-sato-minimal-symbol.jpg`.
- **借的是什么 (Concrete Borrowed Rules)**:
  - Grid: 50/50 dual split-screen billboard; left half is a solid high-chroma field, right half is stark white.
  - Type ratio: Massive bold display typography (96px+ condensed grotesque) dominating one half of the viewport; clean 14px metric metadata on the opposing half.
  - Color ratio: 48% bold solid field (brand cadmium red or cobalt blue), 48% crisp white (#FFFFFF), 4% black typographic ink (#000000).
  - Image-text relation: Profile photo is either framed as an oversized poster crop in the solid field or replaced by a giant structural mark `A.` with the portrait anchored in an index strip below.
- **骨架 (Layout Skeleton)**: 50/50 split canvas hero; left screen is a giant graphic anchor (`ARIFIN.` / `ARCH.`), right screen is a high-density, cleanly ruled technical fact sheet.
- **胆量花在哪 (Boldest Move)**: Unapologetic graphic confidence; half the desktop viewport is a pure, unapologetic color block that commands attention in under 2 seconds.
- **主角素材 (Lead Material)**: Monumental typographic identity statement (`ARIFIN.` / `04 UTILITIES`) and stark black-on-white data rows.
- **form 来自内容的哪里 (Form Grounded in Content)**: Reflects Arifin's direct "Practical builder. Code as proof" philosophy: zero decorative gradients, pure functional impact.
- **Proposed Palette**:
  - Cadmium Vermilion: `#E60012` (L 0.52, C 0.22, H 30)
  - Crisp Pure White: `#FFFFFF` (L 1.0, C 0.0)
  - Solid Black: `#0A0A0A` (L 0.10, C 0.0)
  - Neutral Fog: `#F4F4F4` (L 0.96, C 0.0)
  - *Justification*: Sato Kashiwa's signature high-clarity brand grammar — memorable at first glance, completely non-generic.
- **Font Pair**: `Archivo Black` (display billboard) + `Inter` (structural content).

---

## Summary Matrix

| # | Candidate | Archetype | Dominant Mood | Skeleton Structure |
|---|---|---|---|---|
| 1 | Kenya Hara (原研哉) | Best Designer | Calm, literary, spacious | Asymmetric single-column, ample negative space |
| 2 | Experimental Jetset | Best Designer | Bold, structural, modular | 4-quadrant Swiss grid with 1.5px black borders |
| 3 | Paco Coursey (`paco.me`) | Real Reference | Quiet, crafted, dark | 580px centered minimal text stream |
| 4 | Anthony Fu (`antfu.me`) | Real Reference | Neutral, open-source dev | 720px categorized project index, open rows |
| 5 | Dark Editorial (#11 Web) | Style Roulette Web | Technical, engineering-led | Fixed 40% left sidebar + 60% scrollable right feed |
| 6 | Sato Minimal Symbol (#11 East) | Style Roulette East | Bold, graphic billboard | 50/50 split-screen color block & data sheet |
