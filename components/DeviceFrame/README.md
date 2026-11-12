# DeviceFrame

The 360 × 720 cart device for mock-ups, drawn at 340 × 680 inside a 6px bezel; its `theme` switches the whole screen between day and dusk.

- Stack inside it, top to bottom: `CartHeader`, the content (`.tmc-body` gives the 16px gutter and 12px rhythm) and, on a step, an `ActionBar`. On the hole, `DriveControl` floats over the map instead of any bar.
- Overlays (`Banner`, `AlertSheet`, `AlertTakeover`) also go inside, in priority order, last on top.
- `theme="dusk"` sets `data-theme` on the frame, so every token inside it takes its dusk value. Safety colours do not change.
- The bezel is for mock-ups only; the app itself fills the real screen.
