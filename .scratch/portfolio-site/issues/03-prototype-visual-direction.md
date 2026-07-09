# Prototype the bold/artistic visual direction

Type: prototype
Status: resolved
Blocked by:

## Question

Make a concrete, cheap artifact of the bold/artistic look (with motion) so the
human can react to it rather than approving a description.

- Use the `/prototype` skill (a canvas is a good fit).
- Explore: color/mood, typography, home layout, how a series grid and a render
  feel, and the motion/interaction character.
- Goal is a settled visual direction to build against — not production code.
- Link the prototype as an asset from this ticket.

HITL: the human drives the aesthetic call; do not self-approve a direction.

## Answer

**Chosen direction: "Earthen"** — a blend of brutalist and earthy elements the human shaped iteratively.

Characteristics locked in:
- **Palette**: near-black warm ground (`#16150f`), bone text, muted moss-green accent (`#8a9a63`), soft radial green/brown washes in the background.
- **Type**: huge uppercase Arial Black headline (brutalist shapes, not brutal color). Accent word in moss.
- **Grid**: clean, aligned, no offset or tilt. Cards lift straight up on hover with a subtle moss tint overlay. Hard square corners throughout.
- **Transparency**: frosted/blurred nav bar, semi-transparent chips, translucent backdrop-blur caption bars over renders.
- **Filter chips**: hard squares (no border-radius), four categories — ALL / LANDSCAPES / ABSTRACT / STILLS.
- **Stills**: third render category added (isolated-object/material studies); desaturated near-neutral placeholder art style.
- **Motion**: card lift on hover; slow scale drift on render art (Dream-direction keyframe carried over).

Prototype asset: `.scratch/portfolio-site/prototype/index.html` (served locally at http://127.0.0.1:8731)
