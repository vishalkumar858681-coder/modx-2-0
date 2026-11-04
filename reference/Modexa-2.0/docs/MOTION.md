# Modexa 2.0 — Motion and animation spec

**Watch first:** `previews/Modexa-2.0-motion-walkthrough.mp4`. It runs for about 100 seconds and scrolls the whole page. A caption at the bottom names each section and describes its motion. Everything below is that video written down, with timings.

**Tech:** all motion is **pure CSS** (no JavaScript, no libraries).
- Scroll-triggered motion uses CSS scroll-driven animations (`animation-timeline: view()`), container style queries and `@property`.
- These work in **Chrome and Edge**. Safari and Firefox show the finished page without scroll motion, and nothing breaks.
- With the OS setting "Reduce motion" on, scroll motion is switched off and the Services section falls back to clickable tabs.

If a developer wants motion in every browser, the same behaviour can be rebuilt with GSAP ScrollTrigger or IntersectionObserver. Keep these timings exactly.

---

## A. Global rules (apply to every section)

| What | Behaviour | Timing |
|---|---|---|
| **Trigger** | A section's animation starts when its top enters the screen (first 0–110px of entry). It resets when the section fully leaves the top (last 60px of exit). | Trigger is scroll position; the motion itself plays in real time |
| **Replay** | Scrolling back up replays every animation (headings, leads, cards, blocks). | Same as below |
| **Headings (all H2s + intro heading + CTA heading)** | Word-by-word reveal: each word slides up from behind a mask (`translateY(110%)` → 0). No blur. | 0.75s, `cubic-bezier(.2,.8,.2,1)`, 60ms delay per word |
| **Lead paragraph next to a heading** | Fades in and rises 18px | 0.6s opacity + 0.7s move, starts 0.3s after the heading |
| **Grid items (cards, columns, list items)** | Fade in and rise 32px, one after another | 0.6–0.7s, 90ms stagger per item (max 6 steps) |
| **Big single blocks** (audit card, comparison table, time-zone band, video, CTA form, intro photo) | Fade in and rise 40px | 0.7–0.8s, 0.15s delay |
| **Yellow highlighted words** | Same word-by-word reveal as the heading; only the colour differs | — |

## B. Hover and press (desktop cursor; nothing pops on click)

| Element | Hover effect | Timing |
|---|---|---|
| All buttons (yellow gradient) | Lift 3px + scale 1.04 (spring), richer colour, deeper yellow shadow, a 2px yellow ring appears 5px outside | 0.38s `cubic-bezier(.34,1.56,.64,1)`; press = scale .97 |
| Header pill "Get a free audit" | Lifts, scales 1.03, ↗ circle rotates 45° | 0.35s spring |
| Header nav links | Yellow underline grows from the left | 0.3s |
| Services ▾ | Mega menu opens on hover or focus (7 groups, 22 items with icon tiles); caret flips | 0.22s fade + 0.3s slide |
| Cards (problem rows, journey cards, team, tools, guides, industries) | Lift a few px with a deeper shadow | 0.3s `cubic-bezier(.2,.8,.2,1)` |
| Team photos | Grayscale → full colour, slight zoom | 0.5s filter, 0.6s transform |
| Intro team photo | Slow zoom-out (scale 1.04 → 1) | 1.2s |
| Content links ("Learn more…", "Read the full story", "See how we fix it") | A soft pill grows behind the link, arrow nudges right | 0.32s |
| Footer links | Slide right 5px, turn yellow | 0.25s |
| Footer wordmark "MODEXA DIGITAL" | The letter under the cursor turns yellow (colour only), then fades back slowly | In 0.08s, back 0.7s |
| Client logo strip | Loop pauses while hovered | — |

## C. Section by section

1. **Header:**
   - Floating white pill, stays on top while scrolling.
   - Mega menu on hover.
   - Phone: hamburger opens the full service list.
2. **Hero (on page load, not scroll):**
   - H1 words slide up from a mask one by one: 0.75s each, starting 0.15s, 70ms apart, with a small pause between lines. "Real growth." is in yellow.
   - Sub-heading slides in from the side at 0.75s.
   - Paragraph, button, trust line and badges slide in at 0.9s.
   - The form card drops in: 0.9s, 0.25s delay.
   - Background: the dot + grid pattern fades at the edges, and a soft light drifts slowly forever.
3. **Client logos:** endless horizontal loop of 18 logos, edges fade out, pauses on hover.
4. **Intro (Section 3):**
   - Heading word reveal.
   - Two paragraphs fade up.
   - The 3 facts (One plan, one report / Month-to-month / Five markets) rise one after another.
   - Photo block rises.
   - The dark card "Based in [City], India" has a pulsing yellow dot. Its line "Now working with brands in …" rotates through India, USA, UK, UAE and Australia every 2 seconds (10s cycle).
5. **Problems (Section 4):**
   - Each problem row rises in.
   - On desktop the 4 cards are sticky (`top: 96px`), so they **stack on top of each other** as you scroll.
   - Small illustration motions play inside the image slots: a falling chart line, a blinking empty AI slot, growing ad-cost bars, a visitor leaving.
6. **Services (Section 5), the signature motion:**
   - On desktop (above 1100px) the section **pins** to the screen.
   - The right dark panel **switches through the 7 groups by itself** as you keep scrolling: Get found → Paid growth → Engage and retain → Build and convert → Plan and scale → Automate with AI → Grow ecommerce.
   - Each group gets one equal slice of the scroll (about 14%).
   - The active group name on the left turns dark and shifts 10px right, and a yellow bar fills over it.
   - The panel's 7 progress dashes turn yellow.
   - The new panel content fades up 18px (0.45s).
   - Inside each panel, the sample visual animates: a search query typing with a blinking caret, an AI answer appearing, bars growing, the WhatsApp chatbot messages, and so on.
   - Phone and tablet: horizontal swipe cards, no pin. Reduced motion: tabs.
7. **Results + audit (Section 6):**
   - Heading reveal.
   - The 3 result columns rise one by one (icon tile, yellow number, text).
   - The audit card rises as one block; its score ring and bars are drawn in yellow.
8. **5-step journey (Section 7):**
   - On desktop (1280px and up), the 5 square cards sit on a curvy **snake path**: 3 on top, 2 below, and the path loops down the right side.
   - A **yellow dot travels the path** on a 9-second loop. It moves for 78% of the loop, then rests.
   - Each numbered badge turns **yellow** when the dot reaches it, and the card's top line fills yellow.
   - The cards **float gently up and down** (`jfloat`, a few px, slow, alternating).
   - Below 1280px it becomes a vertical list with a dashed line, with no floating.
   - The video block below rises; its play button is yellow and pops on hover.
9. **Why Modexa (Section 8):** heading reveal, then the comparison table rises as one block. The Modexa column header is yellow.
10. **Team (Section 9):** cards rise one by one. Photos are grayscale and turn colour on hover.
11. **Free tools (Section 10):** the 3 cards rise in sequence (each has a yellow top border). Cards and buttons pop on hover.
12. **Industries (Section 11):** the 6 items rise in sequence.
13. **Markets (Section 12):** heading reveal, then the time-zone band rises, then the 5 market columns (with pin icons) rise one by one.
14. **Guides (Section 13):** the 3 article cards rise one by one and lift on hover.
15. **FAQ (Section 14, locked):**
    - Groups rise in.
    - **Scroll-spy:** the topic list on the left gets a dark pill on the group you are currently reading.
    - Answers open and close with the native details/summary element.
16. **CTA (Section 15):**
    - Heading reveal; "free growth plan." is in yellow.
    - Lead fades up, the two option boxes (WhatsApp / call) rise, and the form card rises.
    - Selected chips get a yellow outline and tick.
17. **Footer:**
    - The **MODEXA DIGITAL** letters rise in one after another when the footer appears: 0.8s, 45ms apart.
    - On hover only, a letter turns yellow. Nothing moves by itself after that.
    - Links slide on hover.

## D. Tested (Claude, 1–3 Nov 2026)
- 34/34 section triggers play on scroll down and replay on scroll up. Earlier version: 68/68 element check.
- No sideways scrolling at 390, 768, 1100 or 1440px.
- The 2.0 export (`site/`) renders the same as the approved preview images.
