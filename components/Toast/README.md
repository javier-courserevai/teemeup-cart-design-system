# Toast

A one-line confirmation that needs no new screen: “Now on hole 8”, “Added to your order”, “Message sent to the pro shop”.

- Optional `action` is a real 56px button (“Back to 7”), never an instruction to tap something small elsewhere.
- The screen places it (over the map, under the header) and removes it after about 8 seconds. `role="status"`, so it is read out without stealing focus.
