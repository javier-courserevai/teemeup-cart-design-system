# YardageReadout

Front, middle and back of the green, with the middle at 84px: the number the golfer reads from the seat.

- Labels are ink, not grey: every character here must hold 7:1 in full sun.
- `unit` follows the Help setting: “yds” or “m”. Numbers are whole, tabular.
- It sits directly under the header on the hole view, 112px tall (`yardage-height`), and nowhere else.
- With no GPS fix, show “—” in each slot and a `Banner`; never a stale number.
