# Composer

The chat bar at the foot of every Bob screen: type to Bob, or tap the mic to speak. Bob is never voice-only.

- One round 56px button on the right: the **mic** while the field is empty, **Send** as soon as there is text. Voice and chat share one bar, so nobody has to choose a mode first.
- The field is 56px tall with 17px text, labelled “Message Bob” for screen readers, with “Message Bob” as the visible hint.
- `locked`: while the cart is moving the field is disabled (“Voice only while moving”) and the mic stays live. Typing is for when the cart is stopped or the golfer is walking.
- **One rule for voice:** the mic is tap to talk, tap again to send (holding also works). The dock's Ask Bob is the only place where tap and hold differ: tap opens the chat, hold talks straight away.
- `listening`: the mic gets a purple halo while Bob listens.
- Bob's replies are always written in the thread and, when sound is on, spoken too.
- While typing, the keyboard pushes the chat bar up and the starters hide; the field shows its focus ring and the round button is Send. `focused` draws that state in mock-ups.
