# Design

## Identity

Dental & Aesthetic Hub by Dr. Romana uses a restrained clinical-luxury visual system. The physical scene is a private Islamabad clinic at early evening: cool operating light, polished mineral surfaces, soft charcoal textiles, quiet teal glass, and warm human care.

## Color

Use OKLCH tokens only. The palette is restrained, with clinical teal as the primary brand note and a muted plum accent for aesthetic medicine warmth.

```css
--background: oklch(1 0 0);
--foreground: oklch(0.18 0.018 210);
--surface: oklch(0.965 0.008 205);
--surface-strong: oklch(0.91 0.018 202);
--primary: oklch(0.46 0.086 198);
--primary-foreground: oklch(0.99 0 0);
--accent: oklch(0.42 0.075 335);
--accent-foreground: oklch(0.99 0 0);
--muted: oklch(0.44 0.024 210);
--line: oklch(0.86 0.014 205);
--dark: oklch(0.13 0.017 215);
```

## Typography

Geist Sans carries the whole site: precise enough for medical content, soft enough for a patient-facing clinic. Display headings use high contrast through size, weight, and line-height rather than decorative serif styling.

## Layout

The site uses wide editorial compositions, alternating dense service architecture with quieter trust sections. Cards are used only for repeatable service and pathway items. Hero and CTA sections are image-led, not decorative panels.

## Motion

Motion should be subtle and purposeful: short ease-out interactions, GSAP scroll treatment only for larger visual chapters, no bounce, no elastic. Reduced-motion users receive static readable content.

## Components

- Navigation: minimal, sticky, translucent only where it improves legibility.
- Buttons: filled primary, outlined secondary, subtle press scale.
- Service grid: dense 12-column layout with imagery and concise copy.
- Booking form: clear validation, calm error states, no dark patterns.
- Footer: clinic contact details, timings, address, and social references.
