# Teemeup Cart

Teemeup Cart is the app on the course's own device, a 360 × 720 Android phone mounted on a golf cart or carried by a walker. The golfer pairs their phone, sees the yardage, talks to **Bob**, and gets safety alerts. This system covers that device only. It takes its palette, voice and shapes from the **Teemeup App** design system and adds what the cart needs: a bigger outdoor scale, fixed safety colours, restricted zones and a course skin.

Built from the Teemeup Cart prototype (13 core screens, 9 pairing steps, 6 alerts, the component sheet and two course skins), the Teemeup Cart design plan, and the Teemeup App tokens, 2026-11-05. This folder is an export of the **Teemeup Cart Design System** artifact on claude.ai (updated 2026-11-12); the screens live on the Teemeup Cart canvas.

## Using this system

### With Claude

Point Claude at this folder: “Build the Teemeup Cart screens using the design system in `teemeup-cart-design-system/`.” Claude should read this README first, then `tokens.json`, then the guidelines of each component it uses (`components/<Name>/README.md`).

### What is in the folder

| Path | What | Use it when |
| --- | --- | --- |
| `README.md` | This brand book: layers, voice, outdoor rules, alerts | Always, first |
| `tokens.json` | Every token with a usage note: colours for day and dusk, type scale, spacing, radii, shadows | Any stack. The source of truth |
| `tokens.css` | The same tokens as CSS variables; `[data-theme="dusk"]` switches the theme | Web or a WebView |
| `components/bundle.js` | 40 React 18 components as one script that sets `window.TeemeupCart` | Web prototypes and mock-ups |
| `components/bundle.css` | Styles for those components, built only on the token variables | With `bundle.js` |
| `components/index.d.ts` | Props of every component | Reading the API |
| `components/<Name>/README.md` | When and how to use each component, with its copy | Before building any screen |
| `example.html` | A hole view, by day and at dusk, assembled from the components | To see the setup running |

### Loading the web components

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const T = window.TeemeupCart, h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h(T.DeviceFrame, { theme: 'day' },
      h(T.CartHeader, { monogram: 'PR', accent: '#0F5B3A', title: 'Hole 7', meta: 'Par 4', battery: 82 }),
      h(T.YardageReadout, { front: 398, middle: 412, back: 427 }),
      h('div', { style: { position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' } },
        h(T.HoleMap, { zone: true, nav: false }),
        h(T.DriveControl, { placement: 'bottom' }))));
</script>
```

React and ReactDOM must load before `bundle.js`. Any element with `data-theme="dusk"` switches everything inside it to the dusk values.

### Native Android

The components are web (React). For a native build (Kotlin, Flutter or React Native) treat them as the visual and behaviour spec: take the values from `tokens.json`, follow each component's README, and rebuild them natively. Text sizes in `tokens.json` are CSS pixels; on Android use the same numbers as dp/sp at the 360 × 720 design size.

### Components

Device: `DeviceFrame`, `CartHeader`, `CourseMark`. Navigation: `DriveControl` (Menu · Ask Bob), `TopSheet`, `QuickActions`. Actions: `Button`, `IconButton`. Course: `YardageReadout`, `HoleMap`, `StatusTag`. Bob: `BobAvatar`, `ChatBubble`, `AnswerCard`, `PromptChip`, `Composer`. Alerts: `Banner`, `AlertSheet`, `AlertTakeover`. Check-in: `QRPanel`, `ChoiceCard`, `GolferRow`, `Keypad`. Food and music: `MenuItem`, `CategoryTabs`, `QuantityStepper`, `OrderSummary`. Layout: `Screen`, `ActionBar`, `SectionLabel`. Inputs: `SegmentedControl`, `ListRow` (in a `List`). Feedback: `Toast`, `ConfirmSheet`, `ProgressSteps`, `EmptyState`, `Skeleton`, `VoiceBar`. Scorecard: `ScoreEntry`, `ScoreCard`. Foundations: `Icon` (`TeemeupCart.iconNames` lists the names).

## Three layers

| Layer | What it paints | Tokens |
| --- | --- | --- |
| Teemeup | Talk to Bob, every action, Bob, the splash, the frame | `primary`, `foreground`, `background`, `muted` |
| Course skin | The course mark, the welcome band, the end-of-round thank-you, the Ask Bob button, icons where Teemeup would use purple, and the cart's dot on the map | `course-accent`, `course-on-accent`, `course-text`, `course-tint` (set in Drive, fall back to the `primary` family) |
| Fixed safety | Lightning, restricted zones, no signal, all clear | `lightning`, `zone`, `caution`, `clear`. Never themed, never a course colour |

Besides those, a course never colours a button, Bob's avatar and answers, the rest of the map (zones, hazards, labels) or an alert. A course colour too light for white text (Copper Canyon #F4B21A) sets `course-on-accent` to ink, which Ask Bob and the music tile then use for their label and icon.

**Applying a skin:** put `tmc-skin` on the screen root and set `--course-accent`, `--course-on-accent`, `--course-text` (the course colour dark enough for 4.5:1 on white; Copper Canyon #8C5E00) and `--course-tint` (the course colour at about 18%). Then Ask Bob and the `QuickActions` music tile fill with the accent, and icon tiles (`QuickActions`, `ListRow`, `PromptChip`) and any icon marked `tmc-skin-icon` (the mini player's note) take `course-text` on `course-tint`; the position dot on `HoleMap` fills with the accent, keeping its white ring. Courses without a colour (the pilot) skip it and stay purple. In dusk, use a lighter `course-text` that holds 4.5:1 on navy.

## Content fundamentals

- **Bob listens and reads.** Every Bob screen ends in the `Composer`: type a message or tap the mic. Replies are written in the thread and spoken when sound is on.
- **Bob is a person.** “Talk to Bob”, never “Talk to Teemeup” or “the AI”. He greets by first name: “Welcome, Sam! You're on the 9:40 tee time.”
- **Short and concrete.** Numbers first: “Pin is 236 yards”, “Halfway house · 180 yds”, “Ready at the turn about 10:55”.
- **Alerts say what to do in their first two words.** Lightning: “Go to shelter.” Zone: “Leave this area.” All clear: “Play may resume.”
- **Zones are firm, not angry.** Most golfers drive in by accident and have paid to play: “No carts near the 7th green. The nearest exit is 15 yds behind you.” Never “Violation” or “Warning!”.
- **Pace is a polite request, spoken once:** “The group behind is close and the hole ahead is open. A little extra pace would be appreciated!”
- **The name is “Teemeup”**, or “Teemeup AI” on the splash. Never “TeemeupAI”.
- **Screens carry only what golfers and staff read.** Notes for the team (why something works the way it does, placeholders, data sources) go next to the board on the canvas as a “Dev note”, never inside the screen, so none of it reaches the product.
- Sentence case for everything, buttons and screen titles included (“Start round”, “Find your tee time”); only alert titles are uppercase. 12-hour times, the middle dot ( · ) to join facts. No emoji on the device.

## Visual foundations

- **Outdoor first.** Critical text (yardages, alert titles and messages) holds **7:1**; everything else 4.5:1. Targets are at least `tap` (56px). Every alert carries an icon **and** a word.
- **Type is the system font** (Roboto on the device) at an outdoor scale: `yardage-hero` 84px, `alert-title` 44px, `button` 18px, `body` 16px. **Nothing a golfer reads is smaller than 15px** (tags, overlines, labels, metadata). Tabular figures for every number. There is no condensed cut, so the hero yardage is 84px, not the mockup's 96px condensed.
- **The hole screen** is a `CartHeader` (64px), the `YardageReadout` and the map, with one `DriveControl` (**Menu · Ask Bob**) floating over it: bottom centre when the device is held, top right in the cradle (see Drive view). There is no tab bar. Everything else is a step opened from Menu, with a back button.
- **Day and dusk.** Day is white with navy ink. Dusk is navy (`background` #0A1E2C, `card` #0F2B40), never black, and purple lifts to #7C4DFF. The map dims to 82%. Safety colours stay the same in both.
- **Shapes** follow the app: tags and round buttons are pills; cards and block buttons `radius-2xl`; fields and tiles `radius-lg`. One hairline, `border`.
- **The map** is a satellite tile of the course in production. The stand-in drawing uses the `map-*` tokens. Active restricted zones are always drawn, hatched in `zone`, so golfers avoid them before anything sounds. Penalty areas keep a thin solid `map-penalty` edge; dashes are not used.
- **Walking** devices show the position with the same dot as a cart, say “Device 12” instead of “Cart 12”, and never show cart-only zones.

## Alerts

Higher covers lower; a covered sheet comes back when the higher alert ends. Each has its own sound and vibration so the golfer knows what happened without looking.

| Priority | Alert | Shape | Sound · vibration | Dismiss |
| --- | --- | --- | --- | --- |
| 1 | Lightning | `AlertTakeover` kind lightning | Two-tone siren · continuous | “I understand”, then a `Banner` until all clear |
| 2 | Inside a restricted zone or a closed area | `AlertTakeover` kind zone with `exit` (`escalated` once the pro shop is told) | Looping alarm · pulse every 2 s | No; ends when the golfer leaves |
| 3 | Approaching a zone | `Banner` tone zone at the top + the zone pulsing on the map | Short chime · 1 pulse | Clears when the cart turns away or stops |
| 4 | Play suspended | `Banner` suspended | — | Clears at the all clear |
| 5 | Battery 15% and 5% (only once the device is out of its cradle) | `AlertSheet` tone battery, once at each level, then a `Banner` | Soft chime · 1 pulse | Yes |
| 6 | Left the course | Full screen (LeftCourse) | Soft chime | Clears when the cart is back |
| 7 | Pace of play | `AlertSheet` tone pace | Soft chime + voice once · 1 pulse | Yes |
| 8 | Pro shop message | `AlertSheet` tone message | Soft chime + voice once · 1 pulse | Yes; kept in Messages |
| 9 | Order ready | `AlertSheet` tone message, `autoDismiss`, no scrim | Soft chime | Closes itself after 10 s |
| — | All clear | `AlertTakeover` kind clear | Rising tone · 2 pulses | Yes |
| — | No signal; battery after its sheet | `Banner` | None | Clears itself; never covers anything |

A zone covers everything except lightning: pace, messages, Bob and music. In the cradle, sheets drop from the top instead (see Drive view).

## Rules every screen follows

- **Navigation.** One place, the hole, and one control, `DriveControl` (Menu · Ask Bob), the same in both layouts so golfers learn it once. Held in the hand it sits bottom centre (`placement="bottom"`) and what it opens rises from the bottom; in the cradle it sits top right and everything drops from the top (see Drive view). **Menu** opens `QuickActions` in a `TopSheet` (`edge="bottom"` when held): music controls, Score, Food and Help tiles, and the hole picked by GPS. Score, Food, Help and Your order are steps opened from there: back button, no control, the main button at the foot (in the cradle, pinned under the header). The Menu button carries a dot (`badge`) while an order is in progress or a hole is waiting for scores. Music has no screen of its own on the hole: a mini player sits centred above the control while it plays, and Help → Music connects. **Ask Bob** is tap and talk in both layouts: Bob listens in a `TopSheet` over the hole that covers the control (`edge="bottom"` when held, with a close X and a keyboard button to type instead), sends when the golfer stops talking, and answers in the same sheet, spoken aloud, with Open chat and Done. The chat (history and typing) opens full-screen from the keyboard or Open chat, with a back button that returns to the hole. The map has no hole arrows; the hole is fixed from Menu.
- **Header.** The right side always shows signal and battery, on every screen with a header and for walkers too. The splash, the charger, welcome, flyover and the end of round are full-screen moments without a header. The cart number is named in Help and wherever a golfer must pick or quote this device (Spotify's device list, zone footnotes); nowhere else.
- **Nothing locks while the cart moves.** Typing, ordering, signing and music work at any speed. The device lives in a charging cradle fixed in the cart (Ulefone Rugking 2 Pro): docked, the drive view keeps every control in reach and puts voice first; lifted out, the same Menu · Ask Bob control moves to the bottom centre.
- **Ordering food through Bob, always confirmed.** “Get me a hot dog and two beers at the turn” works from Ask Bob or the chat. Bob builds the order from the course menu, reads it back in an `OrderSummary` with **Change** and **Place order · $20**, and sends nothing until the golfer taps Place order or says “Send it”. Held, it all happens in the same bottom sheet over the hole (Bob's read-back, then the pick-up code); in the chat, as a message with the two buttons; in the cradle, from the top with Place order right under Bob's line. Change opens the food menu with the items already in the order. Items not on the menu or sold out: Bob asks or offers the closest, never guesses.
- **In the chat, the mic works two ways, like a voice note:** **tap** to talk hands-free, then Send or Cancel; or **press and hold**, talk, and **release to send** (slide left to cancel, slide up to lock into hands-free). While Bob listens the chat bar becomes the `VoiceBar`. Hold to talk exists only there; Ask Bob on the hole is tap and talk.

## Drive view (in the cart's cradle)

The device lives in a charging cradle fixed in the cart. From the seat the bottom of the screen is hard to reach, so docked the app switches to the **drive view**; lifted out, the same control moves to the bottom centre at once.

- **Reach.** Buttons only in the top 300px. 300–470px for rare controls; nothing tappable below 470px: the map and the cart's dot are there to look at.
- **One screen: the hole.** `CartHeader` (with `charging`), `YardageReadout`, the map, and one `DriveControl` (Menu · Ask Bob) floating top right. No hole arrows on the map.
- **Everything opens from the top** in a `TopSheet` and returns to the hole by itself: `QuickActions` (Menu), the `VoiceBar` and Bob's `AnswerCard`, `ScoreEntry` after the green. Alert takeovers put their button right under the title.
- **Alerts with an OK** (pace of play, pro shop message) drop from the top too: the `AlertSheet` inside a `TopSheet` with `scrim`, OK right under the text, spoken aloud, and `autoDismiss` so no tap is needed while driving (pace closes after 15 s; a message after 20 s and stays in Messages). Battery sheets never show docked (the device is charging), and order ready already closes by itself.
- **Steps that need room** (the food menu, Your order, and before the round the waiver) open full screen as steps: back at the top left, the main button pinned right under the header (“Review order · 3 items · $20”, “Place order · $20”, “Sign to continue · 1 of 2” then “Start round”), choices next, and lists last, ending with 320px of space so any row scrolls up into reach. The waiver keeps the golfers' names right under its button, inside the top 300px, and the text to read below them; signing still waits until the text has been scrolled to the end. Placing an order goes straight back to the hole with the pick-up code in a `TopSheet` that closes after 10 s; the Food tile in `QuickActions` then shows the order's progress.
- **Ask Bob first, tap only.** Tap Ask Bob and talk; Bob sends by himself when the golfer stops talking (about 1.5 s of silence, 15 s at most), or with Send in the `VoiceBar` or a second tap on Ask Bob. No hold to talk while docked: it keeps a hand on the screen while driving, and a bump would cancel or cut the question. The question shows only its last two lines, so the sheet never grows. Bob answers on top of the hole, spoken aloud, and the sheet closes 8 s after he finishes. Chat history and typing are for when the device is lifted.
- **First time docked in a round,** a `Toast` under the control for 6 s: “In the cradle, Menu and Ask Bob live up here. Lift the device for the full app.”
- Docked is detected from charging in the cart (the cradle's charger or an NFC tag in the cradle, plus GPS on the course), with a 1 s debounce so a bump doesn't flip layouts.

## Glossary

| Say | Not | Meaning |
| --- | --- | --- |
| the turn | halfway window, the halfway | Where golfers pick up food between the 9th and 10th holes (“Pick up at the turn”) |
| Halfway house | — | The building at the turn, named as a lightning shelter |
| tee time tab | your tee time, the tab | Food charged to the booking and paid at the end |
| Play as guest | Start without the app | Playing without a booking or the Teemeup app |
| Cart 12 / Device 12 | Unit, Tablet | The device; “Device” when walking |
| Pro shop | Clubhouse, front desk | Who sends messages and gets zone escalations |
| marshal | ranger | The on-course staff member Bob can call |

Sentence case everywhere (“Booking confirmed”), except alert titles, which are uppercase.

## Iconography

**Phosphor**, Bold by default and Fill for Bob, active states and safety icons, in `currentColor`, carried in the bundle as `TeemeupCart.Icon` (see its card for names). Bold reads well in sun and Fill marks state without a second icon. 20px in buttons, 18px in status, 24px in Menu · Ask Bob, 28px in choice tiles, 56px on takeovers. Bob is always the sparkle in a `primary` circle (`BobAvatar`). No emoji.

## Logos

The logo artwork lives in the **Teemeup App** design system: the white mark on the navy splash, the full-colour logo nowhere else on the device. This system has no copy; components show the name in type where a mock-up needs it.

## Building a screen

Wrap a mock-up in `DeviceFrame` (its `theme` sets day or dusk), then use `Screen`: `header` (`CartHeader`), the content and `actions` (`ActionBar`). Group content under `SectionLabel`s; use `SegmentedControl`, `ListRow`, `ProgressSteps`, `EmptyState`, `Skeleton`, `Toast`, `ConfirmSheet` and `VoiceBar` instead of drawing them inline. On the hole, navigation is `DriveControl` (`placement="bottom"` held, default top in the cradle), with `TopSheet` (`edge="bottom"` held) and `QuickActions` for what it opens. No hex values in screens: every colour is a token, so dusk works. Overlays (`Banner`, `AlertSheet`, `AlertTakeover`) go inside the frame, in priority order, last on top.
