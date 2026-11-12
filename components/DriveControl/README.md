# DriveControl

**Menu** and **Ask Bob** side by side in a white capsule, floating over the map: the app's one navigation control, the same in both layouts so golfers learn it once. There is no tab bar.

- **Held in the hand** (`placement="bottom"`): bottom centre, 12px above the edge, where the thumb rests. What it opens rises from the bottom. The map keeps the cart's dot clear of it; music's mini player sits centred just above it.
- **Docked in the cradle** (default, `placement="top"`): 12px below the yardage, 8px from the right edge, 156px wide. It stays narrow because maps are rotated tee-to-green, so the green is always top centre and must never be covered. What it opens drops from the top.
- **Menu** opens `QuickActions` in a `TopSheet` (`edge="bottom"` when held). `badge` puts a dot on Menu and names it for screen readers (“order in progress”, “a hole needs scores”).
- **Ask Bob is tap and talk in both layouts:** Bob listens in a `TopSheet` that covers the control and sends when the golfer stops talking (about 1.5 s of silence), or on Send. Held, the sheet has a close X and a keyboard button (`VoiceBar typeInstead`) to type in the chat instead; Bob answers in the same sheet with Open chat and Done. No hold to talk here: one gesture is easier to learn, and in the cradle a bump would cut the question.
- `state`: `idle` (Ask Bob) or `listening` (ring around Bob, label Listening).
- **Course skin:** `accent` and `onAccent` paint Ask Bob in the course colour, with `onAccent` for its label and icon (ink on a light colour such as Copper Canyon #F4B21A). Courses without a colour (the pilot) keep Teemeup purple. Menu always stays white.
- Only on the hole. Steps opened from Menu (Score, Food, Help, Your order) show a back button instead.
