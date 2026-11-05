# HoleMap

The hole under the yardage: hazards with distances, the golfer's position, tap-for-distance, and every active restricted zone.

- In production the art is a satellite tile of the course; this drawing in the `map-*` tokens is the stand-in for mock-ups.
- Position: a purple dot with a white ring for a cart; a walker figure (`walker`) for a walking device.
- `zone` draws the active zone hatched in `zone` orange with its label. Zones are always drawn, before any alert. Walkers never see cart-only zones.
- `tap` shows the distance to a tapped point; tapping again clears it.
- Penalty areas keep a thin solid red edge; dashed lines are not used anywhere on the map.
- Dusk dims the art to 82%; labels, zones and the dot stay full strength.
