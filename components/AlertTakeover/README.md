# AlertTakeover

The whole screen for the alerts that stop play: lightning, being inside a restricted zone, and the all clear.

- **Lightning** (`lightning` red, flashing between two reds once a second): “Go to shelter.” Shows the nearest shelter and its distance. Two-tone siren; the golfer acknowledges with “I understand”, which leaves a `Banner` until the all clear.
- **Inside a zone** (`zone` orange, hatched): “Leave this area.” Shows the course's message, an arrow and the distance to the nearest exit, and the cart number. A looping alarm; no button, it ends when the golfer leaves. After the escalation time the footnote says the pro shop has been told.
- **All clear** (`clear` green): “Play may resume.” Rising tone; “Back to the hole”.
- Lightning covers a zone; a zone covers everything else. Never theme these colours, and keep the hatch on the zone so it never reads as lightning.
