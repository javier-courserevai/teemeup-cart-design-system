# ConfirmSheet

A sheet that asks before anything that can't be undone: end the round, cancel an order, disconnect Spotify, exit kiosk mode, call the marshal.

- Title is the question; the body says what will happen.
- The confirm button is `primary`, or `danger` with `destructive`; the safe choice (“Keep playing”) is always present and always last.
- Sits on `scrim` like `AlertSheet`.
