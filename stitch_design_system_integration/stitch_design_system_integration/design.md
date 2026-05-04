# RC Bombay West — Website Design System

## Overview

This document defines the visual language, layout system, and component rules for the RC Bombay West website. It is a working reference for designers and developers — not a mood board.

The website is content-driven with strong visual storytelling. It is not a corporate site, not an NGO template, and not a college project.

---

## Design Direction

### Theme
**Phoenix — Rise Above Yourself**

Abstract concept. Do not illustrate a phoenix literally. Express the idea through upward motion, gradient energy, layered depth, and directional flow.

### Resolved Design Decisions

These were previously listed as optional clarifications. They are now resolved:

- **Light mode first.** Dark sections are used as accent breaks, not the base experience.
- **Expressively minimal.** More visual than a corporate site. Less decorative than an editorial magazine. Think startup landing page with cultural warmth.
- **Editorial over interactive.** The site tells a story. Interaction supports navigation, not entertainment.
- **Bold but not loud.** Use scale and typography for impact. Reserve glows and gradients for moments, not entire pages.

---

## Color System

### Palette

| Role | Name | Hex |
|---|---|---|
| Primary | Royal Blue | `#123C8C` |
| Dark Base | Deep Navy | `#0B1F4D` |
| Accent | Saffron Gold | `#D9A441` |
| Highlight | Warm Gold | `#F3C969` |
| Background | Off White | `#F8FAFC` |
| Body Text | Dark Ink | `#1F2937` |
| Metadata | Muted Slate | `#64748B` |

### Usage Rules

- **Royal Blue** — primary CTA buttons, active nav states, section accents.
- **Deep Navy** — hero backgrounds, dark section breaks, footer.
- **Saffron Gold** — single high-impact accent per section. Tags, highlights, underlines on headings, icon fills.
- **Warm Gold** — gradient pair with Saffron Gold. Never use alone as a background.
- **Off White** — default page background. Do not use pure white.
- **Dark Ink** — all body copy.
- **Muted Slate** — dates, labels, captions, secondary metadata.

### Gradient Rule
Gold gradient: `linear-gradient(135deg, #D9A441, #F3C969)` — used on accent elements only (tags, dividers, highlights). Not on large backgrounds.

Blue gradient: `linear-gradient(180deg, #0B1F4D, #123C8C)` — used on hero and dark section backgrounds.

---

## Typography

### Font Stack

- **Headings** — `Clash Display` or `Plus Jakarta Sans` (Bold / Extrabold). Fallback: `Inter`.
- **Body** — `Inter` (Regular / Medium). Clean, readable at all sizes.
- **Labels / Metadata** — `Inter` (Medium, tracked slightly). Uppercase for short category labels.

If Clash Display is unavailable: use Plus Jakarta Sans Bold for all headings.

### Scale (Desktop)

| Label | Size | Weight | Usage |
|---|---|---|---|
| Hero H1 | 64–80px | 800 | Hero headline |
| Section H2 | 40–48px | 700 | Page section titles |
| Card H3 | 24–28px | 600 | Cards, sub-sections |
| Body | 16–18px | 400 | Body copy |
| Caption / Meta | 13–14px | 500 | Dates, labels, tags |

### Rules
- Line height: 1.15 for headings, 1.65 for body.
- Letter spacing: -0.02em on large headings. +0.05em on uppercase labels.
- No centered body text beyond two lines.
- No all-caps on headings above H3 level.

---

## Layout System

### Grid
- Desktop: 12-column, 80px gutter, 1280px max-width.
- Tablet: 8-column.
- Mobile: 4-column, 16px gutter.

### Spacing Scale
Base unit: 8px. Use multiples: 8, 16, 24, 32, 48, 64, 96, 128.

### Section Padding
- Large sections: 96–128px vertical.
- Card rows: 48–64px vertical.
- Tight blocks (stats, tags): 32px vertical.

---

## Pages

### 1. Home

| Block | Notes |
|---|---|
| Hero | Full-viewport. Headline + subline + 2 CTAs. Background: deep navy gradient. Gold accent on one word of headline. |
| About Snapshot | 2-column. Short copy left, key visual or stat right. |
| Flagship Preview | 3-card grid. Each card: cover image, category tag, name, short descriptor. |
| Impact Stats | Dark section break. 3–4 large numbers with labels. |
| Gallery Strip | Horizontal scroll or masonry. Real event photos only. |
| CTA Band | Full-width. Join Us prompt. Gold accent. |

### 2. About

| Block | Notes |
|---|---|
| Hero | Shorter than home. Club name, founding year, charter info. |
| Mission | Single column, large body text. No bullet lists. |
| Core Avenues | Icon + label cards in a row. Keep it tight. |
| Leadership | Photo + name + role grid. Clean, no bio paragraphs. |
| Numbers | Same stats component as Home, different copy. |

### 3. Flagships (Listing)

| Block | Notes |
|---|---|
| Intro | 2 lines max. No long copy. |
| Filter Bar | Category filters: Education, Sports, Culture, Community. |
| Project Grid | 3-column cards. Each card: category tag (gold), title, one-line descriptor, CTA link. |

Category accent colors within the gold/blue system — do not introduce new colors.

### 4–7. Flagship Detail Pages (Astra, Bollyween, Revive, Diwali Killa Utsav)

Each page follows this structure:

| Block | Notes |
|---|---|
| Hero | Full-viewport. Event name large. Date, edition, category tag. |
| Overview | 2-column: short copy + key visual. Max 100 words. |
| Story / Highlights | Alternating image + text rows. 2–3 blocks. |
| Gallery | Masonry or 3-column grid. Real photos only. |
| Stats (if applicable) | Participants, editions, impact numbers. |
| CTA | Next edition announcement or related flagship link. |

Rules for detail pages:
- No long text walls. If the copy runs over 150 words per block, cut it.
- Each page must have a visual anchor in the first two viewport heights.
- Maintain narrative flow — story > spec sheet.

### 8. Newsletter

| Block | Notes |
|---|---|
| Featured Issue | Large card. Cover image, edition name, date, short preview, download link. |
| Archive | Clean list. Issue name, date, short descriptor, link. No heavy card layout needed here. |

### 9. Join Us

| Block | Notes |
|---|---|
| Hero | Motivational headline. Short. No paragraphs. |
| Why Join | 3–4 reason cards. Icon + heading + 1-line reason. |
| Member Benefits | Short list or icon grid. Concrete, not vague. |
| Process | 3–4 numbered steps. Horizontal timeline on desktop, vertical on mobile. |
| Application Form | Name, email, college, avenue of interest, short motivation field. Submit CTA in gold. |
| FAQ | Accordion. 5–7 questions. |

---

## Component Rules

### Hero Section
- Always full-viewport height on desktop.
- Background: deep navy gradient or high-quality event photo with dark overlay.
- One gold accent element per hero (word highlight, divider, or tag).
- Maximum two CTAs: primary (filled, royal blue) + secondary (ghost, white border).

### Project Cards
- Fixed aspect ratio cover: 3:2.
- Category tag top-left: gold pill, uppercase, 12px.
- Title: H3, dark ink.
- One-line descriptor: muted slate.
- Hover: card lifts (box-shadow increase), cover image scales 1.03.

### Stats Block
- Dark background (navy) or off-white background.
- 3–4 stats per block.
- Number: 56–64px, extrabold, gold.
- Label: 14px, muted slate, uppercase.
- Never use icons in stats blocks — numbers are the visual.

### Timeline / Process Steps
- Numbered circles: gold fill, white number.
- Connector line: muted slate, 1px.
- Desktop: horizontal. Mobile: vertical.
- Step label: H3. Step description: 1–2 lines max.

### Gallery
- Masonry preferred for events with varied photo orientations.
- 3-column grid if all photos are landscape.
- No captions inside gallery — add them below if needed.
- Lightbox on click.

### CTA Band
- Full-width, dark navy background.
- One headline, one subline, one button.
- Gold button or gold-outlined button depending on background.

### Forms
- Input fields: off-white background, 1px royal blue border on focus.
- Labels above inputs, not inside (no placeholder-as-label pattern).
- Submit button: gold gradient fill, dark ink text.
- Error states: red border + small error message below field.

---

## Motion and Depth

### Principles
Motion implies energy and intentionality. Every animated element should feel like it chose to move, not like it was triggered by a script.

### Scroll Animations
- Fade-up on content blocks: `translateY(24px) → 0`, `opacity: 0 → 1`.
- Duration: 400–600ms. Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Stagger delay between sibling cards: 80ms.

### Hover States
- Cards: `box-shadow` increase + `transform: translateY(-4px)`. Duration: 200ms.
- Buttons: background shift or subtle glow. Duration: 150ms.
- Nav links: underline grows from left. Duration: 200ms.

### Page Transitions
- Fade between pages: 300ms opacity transition.
- No slide transitions — they break on fast navigation.

### Depth Cues (Static)
- Use overlapping elements intentionally: hero text that slightly overlaps the next section.
- Card shadows: `0 4px 24px rgba(0,0,0,0.08)` default, `0 12px 40px rgba(0,0,0,0.14)` on hover.
- Layered backgrounds: gradient behind an image behind a text block.

### Hard Limits
- No particle effects, no animated gradients on backgrounds.
- No scroll-jacking.
- No animation that blocks reading or navigation.
- Reduced-motion media query must be respected: all animations fade out, no transforms.

---

## Mobile Rules

- Hero headline: max 40px. Never sacrifice legibility for drama.
- Cards: single column stack. No horizontal scroll on card grids.
- Navigation: hamburger menu with slide-in drawer.
- Stats block: 2-column on mobile (2 stats per row).
- Timeline: vertical stack only.
- Forms: full-width inputs, large tap targets (min 48px height).
- Gallery: 2-column masonry or single column. Never 3-column on mobile.

---

## Anti-Patterns

Do not do any of the following:

- Hero with centered text + background image + generic tagline. It looks like every other club website.
- Cards with 3+ lines of body copy. Cut the copy, not the card.
- More than 2 gradients visible on the same screen.
- Gold used as a background color on large sections.
- All-blue color scheme with no gold — the accent is the identity.
- Placeholder photos or stock images in production.
- Padding inconsistencies between sections — it breaks visual rhythm.
- Full-width images without dark overlay when text sits on top.
- Hamburger menus that use slide-down — use slide-in from right.
- Accordions in non-FAQ contexts.

If a section feels generic when you look at it for three seconds without reading — redesign it. Structure first, decoration later.

---

## File and Asset Naming

- Images: `[page]-[block]-[descriptor].[ext]` — e.g., `home-hero-bg.jpg`, `astra-gallery-01.jpg`
- Components: PascalCase — `ProjectCard`, `StatsBlock`, `HeroSection`
- CSS tokens: kebab-case — `--color-primary`, `--spacing-lg`, `--font-heading`

---

## Reference Sites

Study these for layout and typography decisions. Do not copy them:

- Linear.app — spacing, dark mode depth, motion.
- Stripe.com — section rhythm, stats blocks, typography scale.
- Arc.net — modern youth brand feel, gradient use.
- Liveblocks.io — card design, dark/light balance.

None of these are Rotaract sites. That's the point.