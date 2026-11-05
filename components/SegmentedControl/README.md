# SegmentedControl

Two to four mutually exclusive choices: pick-up or beverage cart, how to pay, yards or meters.

- Every option is at least 56px. The picked one is solid `primary` with white text, so it reads in direct sun (a white card on grey did not).
- `note` adds a second line (“Ready about 10:55”).
- A `group` of toggle buttons with `aria-pressed`; `label` names the group.
