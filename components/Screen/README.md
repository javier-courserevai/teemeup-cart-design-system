# Screen

The frame every screen is built in: `header` (a `CartHeader`), an optional `banner`, a body that scrolls, `actions` (an `ActionBar` with the screen's main button) , and an optional `dock` slot at the foot (unused now that navigation is `DriveControl` over the hole).

- Fills its parent; inside a `DeviceFrame` it fills the device.
- The body is padded 16px with 12px between blocks, so screens stop hand-writing the same flex column.
- Rule: the hole shows the course mark and `DriveControl`; every other screen opened from Menu (Score, Food, Help, Your order) is a step with a back button and its main button in `actions`.
