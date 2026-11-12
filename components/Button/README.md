# Button

Block buttons for the one action a screen is for, 60px tall with a 16px radius; pills inside the bottom bar.

- `primary` (purple) once per screen: “Continue”, “Start round”, “Ask again”.
- `secondary` (`muted`) for the alternative: “Play as guest”, “Done”, “Cancel”, “OK”.
- `onalert` (white with ink) is the only button on a lightning or all-clear takeover: “I understand”, “Back to the hole”.
- Disabled is a solid `muted` button with `muted-foreground` text and a hairline (4.5:1, readable in sun, never faded), and says why in its label: “Sign to continue”, “Ordering needs signal”.
- `loading` keeps the label, adds a spinner and blocks a second tap: “Placing order…”.
- `danger` (lightning red) only inside a `ConfirmSheet`, for the action that ends or removes something.
- Labels are verbs in sentence case (“Place order”, “Back to the hole”), no icons except where the icon is the meaning (Call the marshal).
