# AlertSheet

A sheet that rises over the bottom of the screen for an alert the golfer can dismiss: pace of play, a pro-shop message, low battery, an order that's ready. Tones: `pace`, `message`, `battery`.

- Tile, title, one or two sentences, one `OK`-style button. Spoken once through the speaker with a soft chime.
- Approaching a zone is not a sheet: it's a `zone` `Banner` at the top and the zone pulsing on the map. Leaving one is a `clear` `Banner`. `autoDismiss` is for warnings shown while driving (order ready).
- `secondaryAction` adds a second button under the first (“Remind me later”), both full width.
- `pace`: polite and specific. `message`: overline “From the pro shop”.
- The other tones sit on `scrim` over the hole view; the yardage stays visible above it.
- **In the cradle** (drive view) the same sheet drops from the top inside a `TopSheet`, OK right under the text, with `autoDismiss` (“Spoken aloud · closes by itself in 15 s”), because the bottom of the screen is out of reach from the seat.
