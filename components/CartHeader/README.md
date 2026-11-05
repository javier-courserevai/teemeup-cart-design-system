# CartHeader

The 60px bar at the top of every screen: the course mark (or a back button), the screen title with its meta, and device status on the right.

- On the hole view and the welcome flow it leads with `CourseMark`, the course's one appearance in the frame. Inner screens (Talk to Bob, Help, booking lookup) lead with a 44px back button instead.
- Title is short, Title Case: “Hole 7”, “Talk to Bob”, “You're paired”. Facts go in `meta` after a middle dot: “Par 4”.
- Right side: signal and battery (`battery`), the device name (`device="Cart 12"`, or “Device 12” for a walker), or any node through `right`, such as a Walking tag.
- Below 25% the battery icon drops a bar; the warning itself is a `Banner`.
