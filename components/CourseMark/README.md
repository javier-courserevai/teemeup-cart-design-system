# CourseMark

The course's monogram in its own colour, the only place a course brands the frame outside the welcome band and the end-of-round screen.

- `accent` and `onAccent` come from the course's brand fields in Drive; without them the mark falls back to `course-accent` (Teemeup purple).
- A light course colour (Copper Canyon #F4B21A) needs `onAccent="#0A1E2C"`; Drive checks 4.5:1 before saving.
- When the course uploads a logo, the mark shows it cropped to the circle; until then, two letters.
- Tapping the mark five times on the welcome screen opens the staff PIN. It has no visible affordance.
