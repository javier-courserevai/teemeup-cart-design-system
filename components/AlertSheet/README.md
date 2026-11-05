# AlertSheet

A sheet that rises over the bottom of the screen for an alert the golfer can dismiss: pace of play, a pro-shop message, an approaching zone, low battery.

- Tile, title, one or two sentences, one `OK`-style button. Spoken once through the speaker with a soft chime.
- `zone` (approaching): “Restricted area ahead” and the course's message with the distance. Short chime, one pulse. **No button and no scrim:** it is shown while driving, so it uses `autoDismiss` (“Closes when you turn away or stop”) and leaves the map undimmed so the zone it warns about stays visible.
- `pace`: polite and specific. `message`: overline “From the pro shop”.
- The other tones sit on `scrim` over the hole view; the yardage stays visible above it.
