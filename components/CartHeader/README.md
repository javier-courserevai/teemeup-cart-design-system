# CartHeader

The 64px bar at the top of every screen: the course mark (or a back button), the screen title with its meta, and signal and battery on the right.

- Top-level places (Hole, Food, Music, Help) and the welcome flow lead with `CourseMark`, the course's one appearance in the frame. Steps inside a flow (Review order, Staff PIN, Find your tee time) and Bob lead with a 56px back button instead.
- Title is short and in sentence case: “Hole 7”, “Talk to Bob”, “You’re paired”. Facts go in `meta` after a middle dot: “Par 4”.
- Right side: **always signal and battery** (`battery`), on every screen and for walkers too, who carry the device. `device` (“Cart 12”) shows only when there is no battery to show; the cart number belongs in Help. `right` replaces the whole slot for special cases.
- `charging`: the device sits in the cart's charging cradle, so a plug replaces the battery icon. It stays there all round; golfers can lift it out anytime.
- Below 25% the battery icon drops a bar; the warning itself is an `AlertSheet` at 15% and a `Banner` after it is dismissed.
