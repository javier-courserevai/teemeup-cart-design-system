# Teemeup Cart

Teemeup Cart is the app on the course's own device, a 360 × 720 Android phone mounted on a golf cart or carried by a walker. The golfer pairs their phone, sees the yardage, talks to **Bob**, and gets safety alerts. This system covers that device only. It takes its palette, voice and shapes from the **Teemeup App** design system and adds what the cart needs: a bigger outdoor scale, fixed safety colours, restricted zones and a course skin.

Built from the Teemeup Cart prototype (13 core screens, 9 pairing steps, 6 alerts, the component sheet and two course skins), the Teemeup Cart design plan, and the Teemeup App tokens, 2026-11-05. This folder is an export of the **Teemeup Cart Design System** artifact on claude.ai.

## Using this system

### With Claude

Point Claude at this folder: “Build the Teemeup Cart screens using the design system in `teemeup-cart-design-system/`.” Claude should read this README first, then `tokens.json`, then the guidelines of each component it uses (`components/<Name>/README.md`).

### What is in the folder

| Path | What | Use it when |
| --- | --- | --- |
| `README.md` | This brand book: layers, voice, outdoor rules, alerts | Always, first |
| `tokens.json` | Every token with a usage note: colours for day and dusk, type scale, spacing, radii, shadows | Any stack. The source of truth |
| `tokens.css` | The same tokens as CSS variables; `[data-theme="dusk"]` switches the theme | Web or a WebView |
| `components/bundle.js` | 26 React 18 components as one script that sets `window.TeemeupCart` | Web prototypes and mock-ups |
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
      h(T.HoleMap, { zone: true }),
      h(T.BottomBar, null)));
</script>
```

React and ReactDOM must load before `bundle.js`. Any element with `data-theme="dusk"` switches everything inside it to the dusk values.

### Native Android

The components are web (React). For a native build (Kotlin, Flutter or React Native) treat them as the visual and behaviour spec: take the values from `tokens.json`, follow each component's README, and rebuild them natively. Text sizes in `tokens.json` are CSS pixels; on Android use the same numbers as dp/sp at the 360 × 720 design size.

### Components

Device: `DeviceFrame`, `CartHeader`, `CourseMark`, `BottomBar`. Actions: `Button`, `IconButton`. Course: `YardageReadout`, `HoleMap`, `StatusTag`. Bob: `BobAvatar`, `ChatBubble`, `MicButton`, `AnswerCard`, `PromptChip`, `Composer`. Alerts: `Banner`, `AlertSheet`, `AlertTakeover`. Check-in: `QRPanel`, `ChoiceCard`, `GolferRow`, `Keypad`. Food and music: `MenuItem`, `CategoryTabs`, `QuantityStepper`. Layout: `Screen`, `ActionBar`, `SectionLabel`. Inputs: `SegmentedControl`, `ListRow` (in a `List`). Feedback: `Toast`, `ConfirmSheet`, `ProgressSteps`, `EmptyState`, `Skeleton`. Foundations: `Icon` (`TeemeupCart.iconNames` lists the names).

## Three layers

| Layer | What it paints | Tokens |
| --- | --- | --- |
| Teemeup | Talk to Bob, every action, Bob, the splash, the frame | `primary`, `foreground`, `background`, `muted` |
| Course skin | The course mark, the welcome band, the end-of-round thank-you | `course-accent`, `course-on-accent` (set in Drive, falls back to `primary`) |
| Fixed safety | Lightning, restricted zones, no signal, all clear | `lightning`, `zone`, `caution`, `clear`. Never themed, never a course colour |

A course never colours a button, Bob, the map or an alert. A course colour too light for white text (Copper Canyon #F4B21A) sets `course-on-accent` to ink.

## Content fundamentals

- **Bob listens and reads.** Every Bob screen ends in the `Composer`: type a message or tap the mic. Replies are written in the thread and spoken when sound is on. Typing locks while the cart moves; voice never does.
- **Bob is a person.** “Talk to Bob”, never “Talk to Teemeup” or “the AI”. He greets by first name: “Welcome, Sam! You're on the 9:40 tee time.”
- **Short and concrete.** Numbers first: “Pin is 236 yards”, “Halfway house · 180 yds”, “Ready at the turn about 10:55”.
- **Alerts say what to do in their first two words.** Lightning: “Go to shelter.” Zone: “Leave this area.” All clear: “Play may resume.”
- **Zones are firm, not angry.** Most golfers drive in by accident and have paid to play: “No carts near the 7th green. The nearest exit is 25 yds behind you.” Never “Violation” or “Warning!”.
- **Pace is a polite request, spoken once:** “The group behind is close and the hole ahead is open. A little extra pace would be appreciated!”
- **The name is “Teemeup”**, or “Teemeup AI” on the splash. Never “TeemeupAI”.
- Title Case for buttons and screen titles, sentence case for everything else, 12-hour times, the middle dot ( · ) to join facts. No emoji on the device.

## Visual foundations

- **Outdoor first.** Critical text (yardages, alert titles and messages) holds **7:1**; everything else 4.5:1. Targets are at least `tap` (56px); the mic is `tap-xl` (120px). Every alert carries an icon **and** a word.
- **Type is the system font** (Roboto on the device) at an outdoor scale: `yardage-hero` 84px, `alert-title` 44px, `button` 18px, `body` 16px. **Nothing a golfer reads is smaller than 15px** (tags, overlines, labels, metadata). Tabular figures for every number. There is no condensed cut, so the hero yardage is 84px, not the mockup's 96px condensed.
- **Every screen** is a `CartHeader` (64px), the content, and a `BottomBar` (80px): a dock with **Ask Bob** raised in the centre (tap to chat, hold to talk) and Hole, Food, Music and Help either side, always all five, so Bob never moves.
- **Day and dusk.** Day is white with navy ink. Dusk is navy (`background` #0A1E2C, `card` #0F2B40), never black, and purple lifts to #7C4DFF. The map dims to 82%. Safety colours stay the same in both.
- **Shapes** follow the app: bottom-bar items, tags and round buttons are pills; cards and block buttons `radius-2xl`; fields and tiles `radius-lg`. One hairline, `border`.
- **The map** is a satellite tile of the course in production. The stand-in drawing uses the `map-*` tokens. Active restricted zones are always drawn, hatched in `zone`, so golfers avoid them before anything sounds. Penalty areas keep a thin solid `map-penalty` edge; dashes are not used.
- **Walking** devices show the position as a walker instead of a dot, say “Device 12” instead of “Cart 12”, and never show cart-only zones.

## Alerts

Higher covers lower; a covered sheet comes back when the higher alert ends. Each has its own sound and vibration so the golfer knows what happened without looking.

| Priority | Alert | Shape | Sound · vibration | Dismiss |
| --- | --- | --- | --- | --- |
| 1 | Lightning | `AlertTakeover` kind lightning | Two-tone siren · continuous | “I understand”, then a `Banner` until all clear |
| 2 | Inside a restricted zone | `AlertTakeover` kind zone (`escalated` once the pro shop is told) | Looping alarm · pulse every 2 s | No; ends when the golfer leaves |
| 3 | Approaching a zone | `AlertSheet` tone zone, `autoDismiss` | Short chime · 1 pulse | Closes itself when the cart turns away or stops |
| 4 | Play suspended | `Banner` suspended | — | Clears at the all clear |
| 5 | Critical battery | `AlertSheet` tone battery | Soft chime · 1 pulse | Yes |
| 6 | Left the course | Full screen (LeftCourse) | Soft chime | Clears when the cart is back |
| 7 | Pace of play | `AlertSheet` tone pace | Soft chime + voice once · 1 pulse | Yes |
| 8 | Pro shop message | `AlertSheet` tone message | Soft chime + voice once · 1 pulse | Yes |
| — | All clear | `AlertTakeover` kind clear | Rising tone · 2 pulses | Yes |
| — | No signal, low battery | `Banner` | None | Clears itself; never covers anything |

A zone covers everything except lightning: pace, messages, Bob and music.

## Rules every screen follows

- **Navigation.** Top-level places (Hole, Food, Music, Help) show the dock with their item active, the course mark in the header and no back button. Steps inside a flow (Review order, Staff PIN, Find your tee time) show a back button and no dock. Bob opens full-screen over wherever the golfer was, with a back button that returns there. The dock always has all five items.
- **Header.** The right side always shows signal and battery, on every screen and for walkers too. The cart number appears only in Help.
- **While the cart moves:** voice, the map and alerts only. Typing to Bob, ordering, signing and changing music wait until the cart stops; the screen says so in an `info` `Banner` with the `cart` icon, and Bob can still do it by voice. Walkers are never locked.
- **Talking to Bob.** In the dock, Ask Bob: tap opens the chat, hold talks straight away. Inside Bob, the mic is tap to talk, tap again to send. Every screen words it this way.

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

**Phosphor**, Bold by default and Fill for the active dock item, Bob and safety icons, in `currentColor`, carried in the bundle as `TeemeupCart.Icon` (see its card for names). Chosen over the earlier Lucide line set because Bold reads better in sun and Fill marks state without a second icon. 20px in buttons, 18px in status, 28px in the dock and choice tiles, 56px on takeovers. Bob is always the sparkle in a `primary` circle (`BobAvatar`). No emoji.

## Logos

The logo artwork lives in the **Teemeup App** design system: the white mark on the navy splash, the full-colour logo nowhere else on the device. This system has no copy; components show the name in type where a mock-up needs it.

## Building a screen

Wrap a mock-up in `DeviceFrame` (its `theme` sets day or dusk), then use `Screen`: `header` (`CartHeader`), the content, `actions` (`ActionBar`) and `dock` (`BottomBar`). Group content under `SectionLabel`s; use `SegmentedControl`, `ListRow`, `ProgressSteps`, `EmptyState`, `Skeleton`, `Toast` and `ConfirmSheet` instead of drawing them inline. No hex values in screens: every colour is a token, so dusk works. Overlays (`Banner`, `AlertSheet`, `AlertTakeover`) go inside the frame, in priority order, last on top.
