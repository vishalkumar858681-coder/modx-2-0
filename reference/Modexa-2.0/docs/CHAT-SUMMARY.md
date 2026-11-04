# Modexa Digital homepage — full chat summary (Claude, 27 Oct to 3 Nov 2026) — Modexa 2.0

This document records everything decided and built in the Claude conversation, so another assistant (for example ChatGPT) can continue without losing context. Read together with START-HERE.md, DESIGN.md, MOTION.md, SECTION-STATUS.md and COLOUR-RESEARCH.md. Where this summary and DESIGN.md / MOTION.md differ, DESIGN.md and MOTION.md are newer and win.

---

## 1. Who and what

- **Owner:** Vishal, senior SEO expert, not a developer. Day-to-day work is writing and updating content.
- **How he works:**
  - Replies in **Hinglish (Roman script)**.
  - Prefers the assistant to do the work, not hand over code to copy-paste.
  - Works **section by section** using a numbered map (1 to 16).
  - Wants every finished section **remembered exactly**: "ek bhi mistake nahi chahta".
  - New work is shown first as **images or videos in chat**, and applied to the build only after approval.
  - Asks what text is original and what is new for every section.
  - Strongly dislikes **generic, text-heavy, AI-looking** design.
- **Business:**
  - **Modexa Digital**, a newly started full-service digital marketing agency in India.
  - Markets: India, USA, UK, UAE, Australia.
  - Goal: outrank competitors on Google and be named by AI assistants.
- **Services:**
  - SEO (local, technical, on-page, off-page), AEO and GEO
  - Performance marketing / PPC
  - Ecommerce (ecommerce SEO, listings, marketplaces, Shopping ads)
  - Web design and development, software and web apps
  - Content writing, social media, email, video editing, guest posting
  - Analytics / CRO, strategy
  - AI services: AI automation, AI chatbots (website + WhatsApp), workflow integration, AI consulting
- **Other context:** Vishal also works on ROI Hunt (roihunt.com / roi.in), a separate WordPress site. Its footer was used only as a *layout reference*. None of its real contact details were copied.

---

## 2. Design system (final)

- **Colours (changed 3 Nov to the Moon theme; full table in DESIGN.md):**
  - Moon white `#F5F7FA` page, white `#FFFFFF` cards
  - Dark blue `#13245E` (headings, dark sections), deepest `#0C1845` (CTA, footer, hero base), raised `#1C3375`
  - Dark yellow `#F2B200` accents; `#FFC93C` yellow on dark; mustard `#8A6500` yellow-family text on white; pale yellow `#FFF3C7` tiles
  - Blue text links `#1E3FAE`
  - **Every button is a yellow gradient** `#FFE07A` → `#F2B200` → `#D99A00` with dark text `#0F1A3D`
  - Before 3 Nov the palette was navy `#0B1F3A` + amber `#E8872B`; that is history now.
- **Fonts (changed 1 Nov from Schibsted Grotesk):**
  - **Clash Grotesk** (Fontshare, free ITF licence; self-host the woff2 files on the live site) for all headings, the logo, the MODEXA wordmark, big stats and step badges.
  - **Geist** for body text, buttons and inputs.
  - **Geist Mono** for small labels (kickers, "How we fix it", "The problem", timing chips, "Sample", copyright).
- **Shape:**
  - Radius: 6 for inputs, 10 for buttons, 16–24 for cards and panels; pill shapes for chips and the header.
  - Soft layered shadows on cards.
- **Avoided on purpose (to not look AI-made):**
  - All-caps eyebrow labels above every heading
  - Arrows on every button
  - Middle-dot meta strings
  - Identical cards in every section
  - (Was: one coloured word in a headline. Changed 3 Nov at Vishal's request: key words in 14 headings are now yellow, style only.)
- **Honesty rules:**
  - Partner badges, client logos, numbers and team details stay `[placeholders]` until they are real.
  - Stock photos are marked "Sample".
  - No invented stats, clients or reviews.

---

## 3. Final homepage — section by section

1. **Header + Hero**
   - **Header:** a floating white pill bar, like Vishal's "updraft" reference.
     - Logo on the left.
     - Links: Services ▾, Work, Portfolio, About, Blog, Contact.
     - Yellow "Get a free audit" pill with a dark blue circle and ↗ arrow, which rotates on hover.
     - Services opens a **mega menu** with 7 groups. Each item has an icon tile, a title and a one-line description. AI has a "New" chip. A strip at the bottom repeats the free-audit line.
     - On phone, a hamburger opens the full list.
   - **Hero:**
     - H1 "Good ideas. Better digital. Real growth."
     - Subheading "Digital marketing agency in India for search, AI answers and paid growth."
     - Short paragraph and one "Get a free audit" button (the "See a sample audit" button was removed).
     - Trust line.
     - Badges under "Certified and listed with": [Google Partner] [Meta Business Partner] [Clutch] [GoodFirms] as placeholders.
     - Compact form on the right: Full name, Phone (+91), Work email, "Get my free audit", "Reply within [24 hours]. No spam."
     - **Background, option A (chosen over 4 others):** dark blue gradient, yellow and blue glows, a dot + grid pattern that fades at the edges, and a slowly drifting light.
     - Rejected background variants: topographic lines, orbit rings, perspective grid, mesh glow.
2. **Client logos:** an endless loop of 18 logos that pauses on hover with faded edges. These are currently **invented sample logos** and must be replaced with real client logos (grayscale).
3. **Intro: who we are**
   - Option A was chosen.
   - Large heading "Modexa Digital is a full-service digital marketing agency in [City], India."
   - Two short paragraphs, then 3 facts with icons, using the full original text: One plan, one report / Month-to-month / Five markets.
   - Team photo on the right (sample) with a dark card "Based in [City], India" and a rotating market name.
4. **Marketing problems we fix every day**
   - Layout C was chosen. Rejected: A (white cards) and B (photo tiles).
   - Each of the 4 rows has a brand-style illustration, "The problem" with the original title and the first part of the original paragraph, an arrow, and a dark blue "How we fix it" panel with the rest of the paragraph **word for word**, plus "See how we fix it".
   - Cards stack on scroll on desktop.
   - The 4 illustrations are SVGs made in brand style: falling traffic chart, AI chat with an empty "your brand?" slot, rising ad-cost bars, and visitors leaving with a muted phone.
5. **Digital marketing services, all under one roof**
   - Tab/scroll switcher with **7 groups**:
     - Get found (SEO services, Local SEO, AEO and GEO)
     - Paid growth (Performance marketing, PPC and Google Ads)
     - Engage and retain (Content, Social media, Email, Video editing)
     - Build and convert (Web design, Web development, Software and web apps)
     - Plan and scale (Analytics and CRO, Digital strategy)
     - **Automate with AI**, added 31 Oct (AI automation, AI chatbot development, Workflow integration, AI consulting and strategy)
     - **Grow ecommerce**, added 1 Nov (Ecommerce SEO, Product listing optimization, Marketplace management, Marketplace and Shopping ads). The old "Amazon marketing" and "Ecommerce marketing" cards were folded into this group.
   - Each panel has an answer-first line, an animated sample visual and cards with full SEO descriptions plus "Learn more about…" links.
   - **Desktop:** the section pins and the right panel changes by itself as you scroll.
   - Phone: swipe cards.
   - Page width: content max 1360px with 48px side padding (set 2 Nov after trying 1520px).
   - Lead text now says "seven ways" and lists "AI automation and chatbots".
   - Rejected layouts: plain index list, bento tiles, journey path.
6. **Real results for real businesses + What a free audit looks like:** kept as built. The result numbers are placeholders.
7. **From first call to growth in 5 simple steps**
   - Shown as a **user journey**.
   - 5 **square** white cards with shadows (3 on top, 2 below) on a **curvy snake path** that waves up and down.
   - A yellow dot travels the path, each step lights up when reached, and the cards float up and down.
   - Original text is unchanged. Icons and timing chips were added.
   - The video block below has a sample poster.
8. **What makes Modexa Digital different** (comparison table): kept as built. A white-text-on-white bug in the Modexa column was fixed.
9. **Meet the people:** 4 sample portraits in grayscale that turn colour on hover. Names, roles and details are placeholders.
10. **Free tools to check your marketing:** AI visibility checker, SEO ROI calculator, Ads budget planner.
11. **Industries we know well**
12. **Helping brands grow in India and around the world:** time-zone band.
13. **Guides and research:** 3 article cards with SVG covers.
14. **FAQ: LOCKED word for word.** This is Vishal's favourite section.
15. **Ready when you are. Get your free growth plan.**
   - The form was made **smaller**.
   - Fixed: the question "What do you need help with?" was invisible.
   - Added an "AI automation" chip.
16. **Footer**, laid out like Vishal's reference:
   - Brand row with logo and about line.
   - 4 columns:
     - COMPANY: About us, Contact us, Clients, Careers
     - OUR SERVICES: **7 main services only**, namely SEO services, Performance marketing, Ecommerce marketing, Web design and development, Content and social media, AI automation, Analytics and strategy
     - QUICK LINKS: Case studies, Website portfolio, Blog, FAQs, Free tools, Contact us
     - CONTACT US: phone, email, India address, hours and International office, with yellow icons; all placeholders
   - "Find us on…" line and Unsplash photo credit.
   - Giant **MODEXA DIGITAL** wordmark across the full width (16px edge gap). Letters rise in when the footer appears; on hover the letter under the cursor turns yellow (colour only, like Vishal's reference video).
   - Bottom bar with legal links.

---

## 4. Motion and interaction (all CSS, no JavaScript) — full spec in MOTION.md

- Motion v3 (2 Nov) copies Vishal's reference video: headings reveal **word by word** from a mask (0.75s, 60–70ms per word), leads fade up after 0.3s, grid items rise 32px staggered 90ms, big blocks rise 40px. Triggered when a section enters the screen, **replays when scrolling back up**, no blur.
- Hero animates on page load. Logos loop. Services section pins and switches 7 groups by itself. Journey: yellow dot travels the snake path, badges light up, cards float. FAQ topic list has scroll-spy. Footer letters rise in; hover = yellow colour only.
- Hover: buttons spring up with glow + ring; cards lift; team photos grey → colour; links get a pill; footer links slide; nav underline.
- Tests: 34/34 section triggers play on scroll down and replay on scroll up; no sideways scroll at 390/768/1100/1440px.
- Browser note: scroll motion works in Chrome and Edge; Safari/Firefox show the page without scroll motion; "reduce motion" turns it off and Services becomes tabs.
- Video of all motion: previews/Modexa-2.0-motion-walkthrough.mp4 (captions name each section and its motion).

---

## 4b. What changed on 2–3 Nov (Modexa 2.0)

1. **Spacing (2 Nov):** 1520px felt too wide; final content width 1360px + 48px padding.
2. **Footer wordmark:** full name MODEXA DIGITAL across the full width.
3. **Colour research:** 20 agency homepages studied live (10 Indian, 10 international) — see COLOUR-RESEARCH.md.
4. **Many palettes rejected** (earth, 15 more, light blue, mid blue, Royal Ink 'khali khali', R1–R5). R3 Royal + Yellow with yellow gradient buttons was OK'd, then Vishal chose the **Moon theme** (moon white + dark blue + dark yellow), inspired by the WildNet Technologies homepage.
5. **Icons added** to services cards, results, comparison rows, markets, CTA boxes, guide labels.
6. **Yellow key words** in 14 headings (no text changed; FAQ untouched).
7. Exported as Modexa 2.0: clean `site/index.html` + `site/css/style.css` + `site/img/`, local server for VS Code / localhost.

---

## 5. New copy written in this chat (everything else is from the original content pack)

- Hero short paragraph, badge row labels and form copy.
- Section 3 rotating "Now working with brands in …" card.
- Section 5 answer-first lines.
- AI group: answer-first line, description and 4 card texts.
- Ecommerce group: answer-first line, description and 4 card texts.
- Mega-menu one-line descriptions for all 22 services.
- Section 7 icons and chips. No text was changed.
- Footer v2 labels and Quick links.
- Labels: "How we fix it", "The problem", "Sample", "Sample photo".

---

## 6. Rejected or changed along the way

- Hero search-bar visual: replaced by the form.
- First form: too long, so it was made compact.
- Services: index list, bento tiles and journey path were rejected; the scroll switcher won.
- Section 4: options A and B were rejected; C won.
- Hero backgrounds B, C, D and E were rejected; A was kept.
- Footer first had all 22 services in two columns; changed to 7 main services only.
- Header links changed from Services / Work / Process / About / Insights / Contact to Services / Work / Portfolio / About / Blog / Contact.

---

## 7. Tools and files used in Claude (for reference)

- **Live preview:** a Claude Design artifact, private to Vishal, Version 32 (Modexa 2.0). It cannot be opened from ChatGPT; use `site/` in this pack instead.
- **Moda canvases:**
  - Section 3 options: cvs_26ZDHDKVWG8PFTJ5JTY6JZ5QVM
  - Section 4 options: cvs_4VS3Y2Y69E8BGR6JXN4NQB443R
  - Sample photos: cvs_7SMXA7Q2X29FFB7MF79JZ05GED and cvs_5D7SDYN43G9A5B2PNENY23EB4W
  - Brand kit: "Modexa Digital"
- **Figma:**
  - File key ohmPjbor8VzHGuFDtgRIX1, on the Starter plan with a View seat. The MCP tool limit was hit earlier.
  - On 1 Nov, uploading a code layer was blocked by the container's network (figma.com not on the allow list).
  - Recommended route for editable layers: **html.to.design** Chrome extension + Figma plugin, using site/index.html.
- **Ahrefs connector:** the plan does not include keyword data.

---

## 8. Open items / next steps

1. Fill all placeholders: [Name], [City], [X]%, results numbers, phone, email, addresses, partner badges, client logos.
2. Remove the two internal notes visible on the page.
3. Get real team photos and real client logos.
4. Optional: 60-second animated "How a Modexa audit works" video.
5. Bring the design into Figma as editable layers (html.to.design), desktop and phone.
6. Test on localhost (this pack: `node server.js`), then build the live site with Clash Grotesk self-hosted.
6b. Optional clean-up for a developer: rename the `--amber*` CSS tokens to `--accent*` (they hold yellow/blue now); add a meta description (ask Vishal for the text).
7. Later: service pages for each service and for AI/ecommerce keywords (AI automation agency, AI chatbot development company, WhatsApp chatbot, ecommerce SEO, etc.).
