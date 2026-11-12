# VoiceBar

What the chat bar becomes while Bob listens. It replaces the old screen-filling mic and waveform: the golfer's own words matter more than a big button.

- **Listening:** a caption (“Listening… music is lowered”), the golfer's words live in 22px bold, then a row: **Cancel** (56px), a thin level meter, **Send** (56px, primary).
- **Holding** (press and hold the mic): caption “Recording · release to send”, the words live, “‹ Slide to cancel” on the left, a short meter, and the mic grown to 72px under the finger with a lock above it: slide up to lock into hands-free (the listening state). Releasing sends.
- **Thinking:** the caption says “Bob is thinking…”, the meter becomes three pulsing dots and Send waits. The question is already in the thread, so the bar doesn't repeat it.
- **Error:** amber caption (“Didn’t catch that. It’s windy out here.”) and the right button becomes the mic, to try again.
- Shown at the foot of the chat, or on the hole when the golfer taps Ask Bob: held, in a bottom `TopSheet` titled “Ask Bob” with a close X, caption “Listening… sends when you stop talking”, so asking a quick question never leaves the hole.
- `typeInstead` (held, on the hole): the left button becomes a keyboard that opens the chat to type, since the sheet's X already cancels.
- **Docked** (`docked`, drive view): the bar sits in a `TopSheet` at the top of the screen, listening only (no hold to talk in the cradle). A long question shows just its last words (about two lines, “…the left, how far is the carry over the river”), so the sheet keeps its height. Caption: “Listening… sends when you stop talking”.
- The meter stops moving under reduced motion.
