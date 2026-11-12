# QuickActions

What **Menu** opens, inside a `TopSheet` with `scrim`: from the bottom when the device is held (`edge="bottom"`), from the top in the cradle, where it fits in the top 300px.

- Order, most used first: music controls (`music`: title, source, playing), then up to **three** tiles (`items`: Score, Food, Help), then the hole picked by GPS with arrows to fix it (`hole`). The map has no hole arrows of its own.
- **Music has three states** (`music.status`), and the row is always there so music stays findable: playing or paused shows the song with play/pause and next; `off` (Spotify not connected) shows “Music · Play your Spotify on the cart” with **Connect**, which opens Connect Spotify; `error` (connected but not responding: the golfer's phone left, Spotify closed, no signal) shows “Spotify isn’t responding · Check Spotify on your phone” in warning colours with **Try again**. While music is off or failing there is no mini player on the map.
- Tiles carry live detail: “Hole 3 to enter”, “Ready · A12” (`tone: 'ready'` and `badge`), “Pro shop, emergency”. Score, Food and Help open as steps with a back button.
- Nothing waits while the cart moves: music, Food and everything else work at any speed. Pass `disabled` on a tile only when it truly can't work (Food without signal).
- Every action closes the sheet.
