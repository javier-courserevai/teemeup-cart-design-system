# Icon

The cart's icons: **Phosphor** (MIT), drawn on a 256 grid in `currentColor`, in two weights. `TeemeupCart.iconNames` lists the cart's own names (`mic`, `lightning`, `food`…), which map to Phosphor glyphs inside the bundle, so screens never name a library icon directly.

- **Bold** is the default everywhere: its heavier strokes hold up in direct sun, where the old 2px line faded.
- **Fill** (`weight="fill"`) only where filling carries meaning: the active dock item, Bob's sparkle (avatar and dock), and safety icons on takeovers, banners, the zone and battery sheets, and lightning, zone and warning tags.
- Sizes: 16px in tags, 18px in header status, 20px in buttons, 24–28px in tiles and the dock, 56px on takeovers.
- Pass `label` when the icon is the only carrier of meaning; otherwise it is hidden from screen readers. Every safety icon appears with its word.
- Need another icon? Add it from `@phosphor-icons/core` (Bold and Fill) under a plain cart name; keep one icon per meaning across the app.
