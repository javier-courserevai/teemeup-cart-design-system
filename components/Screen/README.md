# Screen

The frame every screen is built in: `header` (a `CartHeader`), an optional `banner`, a body that scrolls, `actions` (an `ActionBar` with the screen's main button) and an optional `dock` (`BottomBar`).

- Fills its parent; inside a `DeviceFrame` it fills the device.
- The body is padded 16px with 12px between blocks, so screens stop hand-writing the same flex column.
- Rule from the audit: a top-level destination (Hole, Food, Music, Help) shows the dock and no back button; a step inside a flow (Review order, Staff PIN) shows the back button and no dock.
