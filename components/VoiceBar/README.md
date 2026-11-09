# VoiceBar

What the chat bar becomes while Bob listens. It replaces the old screen-filling mic and waveform: the golfer's own words matter more than a big button.

- **Listening:** a caption (“Listening… music is lowered”, or “voice only while moving”), the golfer's words live in 22px bold, then a row: **Cancel** (56px), a thin level meter, **Send** (56px, primary).
- **Holding** (press and hold the mic): caption “Recording · release to send”, the words live, “‹ Slide to cancel” on the left, a short meter, and the mic grown to 72px under the finger with a lock above it: slide up to lock into hands-free (the listening state). Releasing sends.
- **Thinking:** the caption says “Bob is thinking…”, the meter becomes three pulsing dots and Send waits. The question is already in the thread, so the bar doesn't repeat it.
- **Error:** amber caption (“Didn’t catch that. It’s windy out here.”) and the right button becomes the mic, to try again.
- Shown at the foot of the chat, or straight over the map when the golfer holds Ask Bob in the dock (caption “Holding Ask Bob · release to send”), so asking a quick question never leaves the hole.
- The meter stops moving under reduced motion. `MicButton` stays in the system for a standalone mic, but screens use `VoiceBar`.
