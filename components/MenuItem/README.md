# MenuItem

One dish or drink on the food menu: photo, name, a short description, price, and a way to add it and change how many.

- **Not in the order yet:** the whole card is one big button with a round + on the right. One tap adds one.
- **In the order:** the card gets a purple outline and grows a quantity row underneath: − (✕ when there is one left, “Remove Hot dog”), “2 in your order”, +. All three are 56px, so the count can be changed right on the menu, with gloves, without opening the order.
- The review step repeats the same control (`QuantityStepper`) for a last check before ordering.
- `soldOut`: greyed card, grey photo and a “Sold out” pill instead of the + button; it can't be tapped. Drive marks items sold out from the kitchen.
- `disabled` when an item can't be ordered right now (no signal): the menu stays readable, but the + and the quantity buttons turn grey and do nothing; the screen's banner says why. Moving never disables ordering.
- Photos are square, 76px, `object-fit: cover`. An item without a photo gets a drawn icon tile (`icon`, e.g. `droplet` for water) instead of a stock image.
- Descriptions are two or three words, two lines at most: “All-beef, mustard”, “Local lager, 16 oz”.
- `tag` (amber) marks a course's favourites (“Popular”) inside a category, or an age limit (“21+”).
- Menu, descriptions, prices and photos come from Drive per course.
