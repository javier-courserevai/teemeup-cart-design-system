# AlertSheet

A sheet that rises over the bottom of the screen for an alert the golfer can dismiss: pace of play, a pro-shop message, an approaching zone, low battery.

- Tile, title, one or two sentences, one `OK`-style button. Spoken once through the speaker with a soft chime.
- Approaching a zone is no longer a sheet: it's a `zone` `Banner` at the top and the zone pulsing on the map, so nothing covers the dock or the cart. `autoDismiss` stays for other warnings shown while driving (order ready).
- `secondaryAction` adds a second button under the first (“Remind me later”), both full width.
- `pace`: polite and specific. `message`: overline “From the pro shop”.
- The other tones sit on `scrim` over the hole view; the yardage stays visible above it.
