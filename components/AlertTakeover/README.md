# AlertTakeover

The whole screen for the alerts that stop play: lightning, being inside a restricted zone, and the all clear.

- **Lightning** (`lightning` red, flashing between two reds once a second): “Go to shelter.” Shows the nearest shelter and its distance. Two-tone siren; the golfer acknowledges with “I understand”, which leaves a `Banner` until the all clear.
- **Inside a zone** (`zone` orange, hatched): “Leave this area.” The title sits on a dark plate and the course's message and the exit sit on white panels, so nothing is read off the stripes. The exit arrow points the way to go: `arrowDown` for “behind you”, which is the default. A looping alarm; no button, it ends when the golfer leaves.
- **The way out is the hero** (`exit`: distance, direction, arrow icon): a dark panel with an 88px orange arrow tile, the distance at 44px and the direction (“15 yds behind you”), the biggest thing after the title.
- **Area closed** (zone kind, title “Area closed”): for areas closed to everyone, walkers included (ground under repair), with the way around.
- **Escalated** (`escalated`, `escalatedDetail`): once the golfer has stayed past the course's limit, a red panel right under the title says “Pro shop notified” and how long they have been inside, and the badge turns dark. It must look different from the first warning at a glance, not only in the footnote.
- **All clear** (`clear` green): “Play may resume.” Rising tone; “Back to the hole”.
- Lightning covers a zone; a zone covers everything else. Never theme these colours, and keep the hatch on the zone so it never reads as lightning.
