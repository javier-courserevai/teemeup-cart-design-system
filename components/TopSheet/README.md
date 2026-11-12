# TopSheet

The sheet for what **Menu · Ask Bob** opens, anchored to the edge the control sits on.

- **Held** (`edge="bottom"`): rises from the bottom with rounded top corners and covers Menu · Ask Bob: `QuickActions`; Ask Bob's `VoiceBar` (`typeInstead`) under an “Ask Bob” title with a close X, then his `AnswerCard` with Open chat and Done in the same sheet. A food order asked through Bob shows his read-back (`OrderSummary`) with Change and Place order, then the pick-up code.
- **Docked** (default, top): drops from the top with rounded bottom corners, because the bottom of the screen is hard to reach in the cradle: `QuickActions`, a `VoiceBar` (pass `docked`), an `AnswerCard` with Done and Ask again, `ScoreEntry`, or an `AlertSheet` (pace, pro shop message).
- `scrim` dims the map under it (Menu, scores, alerts). Bob's voice bar, his answer and the order placed go without a scrim so the hole stays visible; they close by themselves (Bob 8 s after he finishes, the order after 10 s).
- Closes itself when an alert arrives.
