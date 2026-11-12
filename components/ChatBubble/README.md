# ChatBubble

One turn in the chat with Bob. The two speakers must be told apart at a glance, in sun, without reading:

- **Bob:** left, his purple avatar and the name “Bob”, on a pale `muted` card with a hairline. The corner nearest the avatar is square, pointing at him. Consecutive Bob bubbles (`showName={false}`) keep the avatar's column but drop the avatar and name.
- Set `speaker="golfer"` for the golfer's turns (`speaker="bob"` is the default).
- **The golfer:** right, labelled “You” in grey, on solid purple, never closer than 64px to the left edge, so a golfer bubble never reaches Bob's column. The corner nearest the edge is square.
- A little extra space separates a change of speaker from two bubbles by the same speaker.
- One idea per bubble, 16px, at most four lines. Longer answers become an `AnswerCard`, which carries Bob's avatar and name too.
- Bob talks in the first person and uses the golfer's first name: “Welcome, Sam! You're on the 9:40 tee time.”
