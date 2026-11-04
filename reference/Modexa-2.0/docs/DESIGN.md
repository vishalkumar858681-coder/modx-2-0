# Modexa 2.0 — Design system (final, 3 Nov 2026)

Everything here is already built into `site/css/style.css`. Change a colour by editing the `:root` tokens at the top of that file, not by hunting for hex values.

## 1. Colour: the "Moon" theme (moon white + dark blue + dark yellow)

Chosen on 3 Nov 2026 after research on 20 agency homepages (see COLOUR-RESEARCH.md). It replaced the old navy + amber/orange palette.

| Token (in `:root`) | Hex | Used for |
|---|---|---|
| `--paper` | `#F5F7FA` | **Moon white** page background |
| `--surface` | `#FFFFFF` | Cards, forms, tables |
| `--ink` | `#13245E` | **Dark blue**: headings, dark sections (results, markets, "How we fix it" panels, services panel) |
| `--ink-deep` | `#0C1845` | Deepest blue: CTA section, footer, hero base |
| `--ink-raised` | `#1C3375` | Raised blue surfaces on dark |
| `--text` | `#1B2440` | Body text on light |
| `--muted` | `#4A5470` | Secondary text on light |
| `--subtle` | `#58627C` | Small labels on light |
| `--line` / `--line-soft` | `#E1E6EF` / `#EBEFF5` | Borders and dividers |
| `--amber` (name kept, now yellow) | `#F2B200` | **Dark yellow**: accents, active states, logo tile, table "Modexa" header, progress bars, journey dot |
| `--amber-hover` | `#FFC21A` | Yellow hover |
| `--amber-dark` | `#FFC93C` | Bright yellow **on dark blue** (numbers, labels, links) |
| `--amber-text` (name kept, now blue) | `#1E3FAE` | Text links on light backgrounds |
| `--tint` | `#FFF3C7` | Pale yellow chip / icon-tile background |
| `--on-dark-muted` | `#B4BFD6` | Body text on dark blue |
| Mustard (fixed value) | `#8A6500` | Yellow-family **text on white** (kickers, chip text, form "Step 1 of 4"); `#B07F00` for small icons |
| Heading ink (fixed value) | `#0F1A3D` | Text on yellow buttons |

Note: the token names `--amber*` were kept so nothing breaks. In 2.0 they hold yellow and blue values as listed above. Renaming them (e.g. `--accent`) is a safe clean-up for the developer.

**Contrast (WCAG, all pass):** text on yellow button 6.9 to 13.1; bright yellow on dark blue 9.5; white on dark blue 14.6; mustard on white 5.3; blue links on moon white 8.2.

**Hero:** dark blue gradient `#0A143C` → `#13245E` → `#1C3375`, with a soft yellow glow top right, a soft blue glow bottom left, the dot + grid pattern and a slowly drifting light (hero option A, locked).

**Yellow words in headings (added 3 Nov, style only, text unchanged):** the words below get class `hl`. On light backgrounds they use a gold gradient text (`#E9A800` → `#B07F00`); on dark backgrounds they are solid `#FFC93C`.

| Section | Highlighted words |
|---|---|
| Hero H1 | "Real growth." |
| 3 Intro | "full-service digital marketing agency" |
| 4 Problems | "we fix" |
| 5 Services | "all under one roof" |
| 6 Results | "Real results" |
| 6 Audit card | "free audit" |
| 7 Steps | "5 simple steps" |
| 8 Why | "different" |
| 9 Team | "your account" |
| 10 Tools | "Free tools" |
| 11 Industries | "know well" |
| 12 Markets | "around the world" |
| 13 Guides | "help you grow" |
| 15 CTA | "free growth plan." |

The FAQ heading (section 14) has no highlight, because that section is locked.

## 2. Buttons (all buttons are yellow in 2.0)

| Button | Size | Shape | Look |
|---|---|---|---|
| Main button `.btn.primary` | height **52px**, padding 0 24px, font Geist 600 16px/24px | radius 10px | Yellow gradient |
| Secondary `.btn.secondary` and `.btn.secondary.dark` | same as main | radius 10px | Same yellow gradient (2.0 rule: every button is yellow) |
| Buttons inside forms `.form .btn` | height **48px**, full width | radius 10px | Yellow gradient |
| Header pill `.ncta` "Get a free audit" | height **48px**, padding 0 6px 0 20px, font 600 15px | pill (999px) | Yellow gradient, plus a 36px dark-blue circle with ↗ that rotates 45° on hover |
| Header button on phone `.nav .btn` | height 44px, padding 0 12px, font 14px | | |
| Video play `.play` | **88px** circle (64px on smaller screens) | circle | Yellow gradient, dark play icon |

**Yellow gradient:** `linear-gradient(120deg, #FFE07A 0%, #F2B200 50%, #D99A00 100%)`, which runs light yellow to dark yellow, left to right.
- Text colour `#0F1A3D`.
- Shadow `0 12px 26px -12px rgba(217,154,0,.8)` plus a 1px light line on top: `inset 0 1px 0 rgba(255,255,255,.6)`.

**Hover:**
- The button lifts `translateY(-3px) scale(1.04)` with a spring: `.38s cubic-bezier(.34,1.56,.64,1)`.
- Colour gets richer: `filter: saturate(1.15) brightness(1.04)`.
- A 2px yellow ring (`#D99A00`) appears 5px outside the button.

**Press:** `scale(.97)`.

**Focus:** 3px outline in ink.

All section buttons are centred. The hero button stays left-aligned.

## 3. Typography

| Role | Font | Size / line height | Weight |
|---|---|---|---|
| H1 (hero) | **Clash Grotesk** | 72 / 76px (smaller on phone) | 700–800, letter-spacing −0.02em |
| H2 section headings | Clash Grotesk | 44 / 50px | 700, −0.015em |
| Intro heading `.ih` | Clash Grotesk | 36 / 46px | 700 |
| H3 card titles | Clash Grotesk | 22 / 30px | 700 |
| Lead paragraphs | Geist | 20 / 32px | 400 |
| Body | **Geist** | 17 / 28px | 400 |
| Small labels (kickers, "The problem", "How we fix it", timing chips, "Sample", copyright) | **Geist Mono** | 12–14px | 500–700 |
| Footer wordmark "MODEXA DIGITAL" | Clash Grotesk | 10.2cqw (fills full width, 16px edge gap) | 700 |

Fonts load from Fontshare (Clash Grotesk) and Google Fonts (Geist, Geist Mono). On the live site, download the woff2 files and self-host them. Clash Grotesk is free under the ITF licence.

## 4. Layout and spacing

- **Content width:** `.wrap` max **1360px**, side padding **48px**. That is padding 32px below 1100px and 20px on phone; at 1440px wide this leaves about an 88px gap on each side.
- **Header bar:** max 1264px, height 68px, floating white pill (93% white with blur), sticky.
- **Section spacing:** `.sec` padding **128px** top and bottom on desktop, **72px** on phone.
- **Radius:** 6px inputs, 10px buttons, 16px cards (`--r-lg`), 20–24px big cards and panels (`--r-xl`), 999px chips and pills.
- **Shadows:** cards `0 1px 2px rgba(19,36,94,.05), 0 18px 40px -22px rgba(19,36,94,.35)`; forms `--shadow`; hero form deeper.
- **Breakpoints used:** 1280px (journey snake vs. vertical list), 1100px (services pin vs. swipe, grids), 700px (phone).

## 5. Icons

- **Style:** line icons on a 24×24 grid, stroke 1.8, round caps and joins, `currentColor`. All are inline SVG with `aria-hidden="true"`.
- **Icon tiles:**
  - On dark blue: 48px tiles, radius 14px, background `rgba(242,178,0,.14)`, 1px yellow border, yellow icon.
  - On light: 34px (table) or 26px (guides) tiles in pale yellow `#FFF3C7` with a mustard icon.
- **Icons added in 2.0 (3 Nov):**
  - All 22 service cards: the same icon as that service in the header mega menu.
  - Results columns: trend up, location pin, trend down.
  - Comparison table rows: plan, chart, sparkle, layers, document, team, shield.
  - 5 market columns: location pin.
  - CTA boxes: WhatsApp chat and calendar.
  - Guide labels: chart (Research), book (Guide), pen (Blog).
- **Icons already there before 2.0:** mega menu (22), intro facts (3), journey steps (5), free tools (3), industries (6), badges, footer contact.

## 6. Photos and images

- `site/img/team-at-work.jpg`: Section 3 team photo (sample).
- `site/img/team-1.jpg` to `team-4.jpg`: Section 9 portraits (sample). These are grayscale and turn colour on hover.
- `site/img/video-poster.jpg`: Section 7 video poster (sample).
- All photos are **Unsplash samples**, credited in the footer and labelled "Sample". Replace them with real photos (same light and background for the team) before launch.
- Client logos (Section 2) are **invented placeholders** and must be replaced with real client logos (grayscale).
- Problem illustrations (Section 4), service visuals (Section 5), guide covers (Section 13), the audit report and the time-zone band are inline SVG drawn in brand colours.

## 7. Rules that stay

1. Never add new copy without asking Vishal. Original content-pack text stays word for word.
2. **FAQ section (14) is locked word for word.**
3. All text must be in the HTML on page load (no click-to-load text), for SEO and AI search.
4. Placeholders stay in [brackets] until real. No invented stats, clients or reviews. Stock photos are labelled "Sample".
5. Show changes as screenshots first, then edit after approval.
