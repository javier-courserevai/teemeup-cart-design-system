# Composer

The chat bar at the foot of every Bob screen: type to Bob, or tap the mic to speak. Bob is never voice-only.

- One round 56px button on the right: the **mic** while the field is empty, **Send** as soon as there is text. Voice and chat share one bar, so nobody has to choose a mode first.
- The field is 56px tall with 17px text, labelled “Message Bob” for screen readers, with “Message Bob” as the visible hint.
- `locked`: only while the device sits in the cart's cradle and the cart moves (within the driver's reach). The field is disabled (“Lift the device to type”) and the mic stays live. Lifted out of the cradle, stopped, or walking, typing always works.
- **Two ways to talk, like a voice note:** tap the mic for hands-free (Send or Cancel when done), or press and hold, talk, and release to send; slide left cancels, slide up locks into hands-free. In the dock, Ask Bob: tap opens the chat, hold talks straight away the same way.
- `listening`: the mic gets a purple halo while Bob listens.
- Bob's replies are always written in the thread and, when sound is on, spoken too.
- While typing, the keyboard pushes the chat bar up and the starters hide; the field shows its focus ring and the round button is Send. `focused` draws that state in mock-ups.
