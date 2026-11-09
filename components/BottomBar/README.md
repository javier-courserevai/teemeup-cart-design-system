# BottomBar

The dock at the foot of every top-level screen: **Hole · Score · Ask Bob · Food · Help**, ordered by how often a golfer needs each in a round. Each is an icon over a 15px word.

- **Ask Bob**, centre, a 64px purple circle raised out of the bar: tap to open the chat, press and hold to talk straight away from any screen (the voice bar rises over the map). Bob never moves.
- **Hole** (flag) is home. **Score** (golf ball) opens the group scorecard; it's used after every hole, so it earns a slot. **Food** carries the current order. **Help** holds the emergency button, calls, messages, music and settings.
- **Music is not a tab.** It's connected once and then mostly controlled by voice; while it plays, a mini player sits over the map (title, pause) and opens Music. First connection: Help → Music, or ask Bob.
- **Badges** (`badges="score,food"`): a red dot on Score when a hole is waiting for scores, on Food while an order is in progress or ready. The dot is announced with the label.
- A course without food (`items="nofood"`) shows Messages in Food's slot, so there are always five and Bob stays centred.
- The dock reserves the 16px Ask Bob rises into, so screens never pad for it. `active` marks the current place with a purple pill behind a filled icon.
- **Navigation rule:** top-level places (Hole, Score, Food, Help) show the dock and no back button; steps inside a flow (Review order, Music, Staff PIN) show a back button and no dock; Bob opens full-screen with a back button.
