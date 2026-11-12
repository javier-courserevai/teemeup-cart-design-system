# HoleMap

The hole under the yardage: hazards with distances, the golfer's position, tap-for-distance, and every active restricted zone.

- **With a course's aerial photo** (`image`), the hole shows as it really is. The photo is rotated tee-to-green (green at the top) and cropped to 328:412; pass `pin`, `me`, `tapAt`, `zonePath` and `zoneLabelAt` in that 328 × 412 space, and `credit` for the source line. The pilot, Waterford Golf Club in Rock Hill, uses public-domain USGS NAIP imagery (0.6 m per pixel), so yardages can be measured straight off it (about 1 yard per map unit).
- **Without a photo**, it draws an aerial-style stand-in from the `map-*` tokens: textured rough, a first cut, a striped fairway, tree clumps with shadows, a cart path and the green with its collar. Use it for courses with no imagery yet.
- Position: a purple dot with a white ring for a cart; a walker figure (`walker`) for a walking device. On a course skin (`tmc-skin`) the dot takes the course colour, and the walker's figure its `course-on-accent`; the white ring stays so it reads on any aerial.
- `zone` draws the active zone hatched in `zone` orange with its label. Zones are always drawn, before any alert. Walkers never see cart-only zones.
- `zoneAlert` thickens the zone's edge and pulses it while the cart approaches (still under reduced motion: thick, not pulsing).
- `tap` shows the distance to a tapped point; tapping again clears it.
- Penalty areas keep a thin solid red edge; dashed lines are not used anywhere on the map.
- `dropZone` (`x`, `y`, optional `r` and `label`) marks where Bob says to drop: a green-tinted ring with a white edge and a “Drop here” pill. Shown when the golfer asks Bob “Show the drop zone”.
- Dusk dims the art to 82%; labels, zones and the dot stay full strength.
- Previous and next hole (‹ ›) can sit at the middle of the map's side edges, 56px, but the app hides them (`nav={false}`): the hole follows GPS and is fixed from Menu (`QuickActions`). Keep the cart's dot clear of `DriveControl`: bottom centre when held, top right in the cradle.
