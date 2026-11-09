# ScoreEntry

The sheet that asks for scores after a hole: “Hole 3 · Par 3 — How did hole 3 go?”, one row per golfer on this cart, each starting at par.

- Appears when the cart stops at the next tee, never while it moves. Holding Ask Bob and saying the scores works anytime.
- Each row: initials, name, the score against par for that hole (“-1 on this hole”), and a `QuantityStepper` with `min={1}`, so 1 is an ace, never a removal.
- **Later** keeps the hole open on the card; **Save** is primary. Only this cart's golfers are editable; the rest of the group enters scores on their own cart.
