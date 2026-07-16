# Endura Fitness Studio — Landing UI Kit

The marketing landing page for **Endura Fitness Studio**, a premium unisex A/C gym in Dindigul (Suzuki Showroom). Rated 4.9/5 from reviews for friendly coaching, quality equipment, and a motivating community.

## Files

- `index.html` — interactive demo of the full page (navbar → hero → offerings → testimonials → location → footer).
- `Icons.jsx` — Lucide icons inlined as React components.
- `Button.jsx` — `<Button>` primary / secondary / ghost in sm / md / lg.
- `Navbar.jsx` — sticky glassmorphism navbar with mobile drawer.
- `Hero.jsx` — headline + dual CTAs + trust badge + stat row + placeholder image stack.
- `Offerings.jsx` — 4-card interactive grid with hover micro-interactions.
- `Testimonials.jsx` — multi-card carousel with arrow + dot paging.
- `LocationFooter.jsx` — split Location/Contact section and the site footer.

## Notes for a designer using this kit

- **Tokens come from `colors_and_type.css`** (one level up). Don't hard-code colors or font stacks.
- **Imagery** is rendered with `HatchedImage` placeholder boxes — see `Hero.jsx`. Swap with real photography when supplied.
- **Logo** is the red dumbbell in `Navbar.jsx`. The standalone marks live at `/assets/logo-mark.svg` and `/assets/logo-wordmark.svg`.
- **Icons** are Lucide-style 2px strokes. Add new ones inside `Icons.jsx` and expose them on `window.Icon_*`.
- **Responsiveness:** components use the `.mmm-hide-mobile`, `.mmm-hero-grid`, etc. helper classes from `index.html` for breakpoints under 880px.
