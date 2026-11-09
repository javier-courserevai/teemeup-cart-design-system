# MicButton

> Screens now use `VoiceBar` for listening, thinking and errors; keep `MicButton` only for a standalone mic outside the chat.

Talk to Bob: a 120px purple mic. Tap to talk, tap again to send (holding and releasing also works).

- Ready: “Tap to talk”. Listening: live bars above the mic, a purple halo, “Listening… tap to send”.
- While listening, music (phase 3) drops to 20% and the screen hides everything but the mic and the transcript.
- `thinking`: three pulsing dots in a pale mic, “Bob is thinking…”; the mic can't be pressed until the answer arrives.
- `error`: amber ring and “Didn’t catch that. Try again.”; the mic stays live.
- `disabled` with no signal; the label says why: “Bob needs signal to answer. Yardages still work.”
