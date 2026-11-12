# OrderSummary

What Bob reads back before he sends a food order, so the golfer can check it: the lines (quantity, name, price, a `21+` tag where it applies), then label and value rows (`facts`: Pick up, Pay) and the total.

- **Bob never sends an order on his own.** The sheet or chat message around it always carries **Change** (secondary) and **Place order · $20** (primary). The golfer taps Place order or says “Send it” / “Yes, send it” while Bob listens for 8 s after reading it back; anything else keeps it open.
- Held: in a bottom `TopSheet` over the hole, under Bob's line (“One hot dog and two draft beers for the turn. Send it?”). In the chat: under Bob's bubble, with the two buttons below it. In the cradle: in a top `TopSheet`, with Place order right under Bob's line and the summary below, so the button stays in reach.
- **Change** opens the food menu with these items already in the order (Review order).
- Lines read like the menu: “1 × Hot dog  $6”, “2 × Draft beer 21+  $14”. Facts are short: “At the turn · ready about 11:50”, “Tee time tab”.
