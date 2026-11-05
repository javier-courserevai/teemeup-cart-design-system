# BottomBar

The dock at the foot of every round screen: Bob raised in the centre, the places a golfer goes either side, each an icon over a word.

- **Ask Bob**, centre, 68px purple circle cut out of the bar: tap to open the chat, press and hold to talk straight away from any screen. The small mic badge says holding works. Bob is always in the centre, in every phase.
- **Hole** (flag) brings the golfer back to the map from anywhere. **Help** (lifebuoy) is for calling the marshal or the pro shop and for units.
- MVP (`items="mvp"`): Hole · Ask Bob · Help. Phase 3 (`items="full"`): Hole · Food · Ask Bob · Music · Help.
- Every item is at least 64px tall with a 14px label: icons alone are not enough at arm's length in sun. `active` marks the current place with a purple pill behind its icon and a purple label.
- Hole arrows (‹ ›) live on the map's side edges, not here, so a gloved tap aimed at the dock never changes the hole.
- Screens where Bob is the content (the chat) replace the dock with the `Composer`; screens that end in one action replace it with a block `Button`.
