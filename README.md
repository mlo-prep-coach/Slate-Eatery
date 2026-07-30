# Cozy Diner Template

Build a complete restaurant website as a REUSABLE TEMPLATE for a

CASUAL, LAID-BACK family diner — a beloved neighborhood sit-down spot

where regulars come weekly. Warm, friendly, and welcoming. NOT upscale,

NOT fine dining, NOT minimalist or editorial. It should feel

comfortable and unpretentious, like the place itself.

=== TECHNICAL RULES ===

- Static site only. No backend, no database, no user accounts, no login.

- Do NOT enable Lovable Cloud or Supabase. Nothing requiring a server.

- Standard Vite + React, exportable to GitHub and hostable anywhere.

- Flawless on mobile. Design mobile-first, then scale up.

- Fast loading. Optimize images, no heavy libraries.

=== CODE STRUCTURE (very important) ===

- ALL colors, fonts, and spacing values in ONE central theme file as CSS

  variables. Changing the whole look must be possible from that one file.

- Every section is its own separate component file, clearly named

  (HeroSection, MenuSection, etc.), deletable without breaking anything.

- All text content in clearly marked, easy-to-find places.

=== PLACEHOLDERS ===

Reusable template. Use obvious generic placeholders, NOT a made-up name:

[RESTAURANT NAME], [PHONE], [EMAIL], [ADDRESS], [CUISINE TYPE]

Use placeholder photos of hearty comfort food and generic filler text.

=== TYPOGRAPHY ===

- Friendly and approachable. A warm rounded sans-serif or a slightly

  chunky friendly slab serif for headings, and a clean highly readable

  sans-serif for body text.

- Avoid thin elegant serifs and anything that reads as luxury.

- Comfortable sizes, not dramatic. Hero headline around 2.5rem mobile

  to 4rem desktop. Body text 1.125rem, line height 1.7.

- Headings can be bold and chunky. Warmth over elegance.

=== LAYOUT & SPACING ===

- Comfortable and welcoming, not sparse. Moderate section padding

  (around 4-5rem desktop) — inviting, not echoing with whitespace.

- Simple, easy-to-follow layouts. Straightforward two-column and

  stacked sections. Avoid dramatic asymmetry or magazine-style layouts.

- Rounded corners throughout — buttons, cards, images. Soft, friendly

  shapes, nothing sharp or severe.

- Max content width around 1150px.

=== COLOR ===

- Warm, bright, cheerful palette. Think cream, warm butter yellow, soft

  terracotta or brick red, friendly warm browns.

- Light and bright overall. Use at most one darker section, and keep it

  warm — never cold charcoal or black.

- Colors should feel homey and appetizing, like a family kitchen.

- Avoid: deep charcoal, stark black-and-white, cold grays, anything

  that reads as sleek or high-end.

=== IMAGERY ===

- Hearty, abundant, homey food photos. Generous portions, comfort food.

- Include photos with people and atmosphere — booths, families, a busy

  friendly dining room. Show it's a real neighborhood place.

- Rounded corners on images. Gentle hover effects.

- Gallery is a simple clean grid — easy to browse, not artsy or varied.

=== MOTION ===

- Gentle and minimal. Soft fade-in as sections scroll into view.

- Smooth 300ms hover transitions.

- Sticky nav with a solid background from the start — practical over

  dramatic.

- Respect prefers-reduced-motion.

=== SECTIONS (build all of them) ===

1. Sticky nav — logo area, smooth-scroll links, big friendly "Call Now"

   button. Clean mobile menu.

2. Hero — warm welcoming food photo (not full-screen, around 75vh),

   restaurant name, friendly tagline, buttons "See Our Menu" and "Get

   Directions". Show hours and phone right up top where regulars can

   find them fast.

3. Welcome / About — simple two-column with a photo. Warm neighborly

   copy about the family or how long they've been around.

4. Menu — the most important section. Categories (Appetizers,

   Sandwiches & Burgers, Entrees, Sides, Desserts, Drinks) with item

   name, description, price. Clean and easy to read like a real diner

   menu. Must be easy to add or remove items and categories.

5. Daily specials — a friendly section for weekly or daily specials.

6. Featured favorites — 3 popular dishes with big appetizing photos

   and a "customer favorite" style badge.

7. Gallery — simple grid of food and restaurant photos with a lightbox.

8. Reviews — titled "See What People Are Saying". Six review cards in

   a grid with reviewer name, star rating, review text, and a small

   Google logo. Must handle both very short and very long reviews

   without breaking.

9. Hours & Location — hours for each day, address, embedded map

   placeholder. Make hours big and obvious, highlight today if easy.

10. Contact — phone, email, address, prominent "Call to Order" button

    linking to the phone number.

11. Footer — social links, quick links, copyright. Warm, not stark.

=== AVOID THESE ===

- Anything that looks upscale, luxury, minimalist, or fine dining

- Thin elegant serif fonts

- Deep charcoal, black, or cold gray palettes

- Dramatic full-screen heroes and huge dramatic typography

- Magazine-style asymmetric editorial layouts

- Excessive whitespace that feels cold or empty

- Sharp corners and severe geometric shapes

- Default Bootstrap cards with heavy borders

- Purple/blue gradient buttons

- Emoji used as icons

- A menu that looks like a SaaS pricing table

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f6f27d9-136b-47cf-9e58-8a6b2a1e5b1d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
