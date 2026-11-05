# MenuItem

One dish or drink on the food menu: photo, name, a short description, price, and a round add button. The whole card is one large target that adds the item.

- Tap adds one. Once in the order the add button turns purple and shows the count, and the card gets a purple outline. Removing and changing quantities happen on the review step with `QuantityStepper`, so a gloved tap on the menu can never take something out.
- Photos are square, 76px, `object-fit: cover`. A course without a photo for an item gets a drawn icon tile (`icon`, e.g. `droplet` for water) instead of a stock image.
- Descriptions are two or three words, two lines at most: “All-beef, mustard”, “Local lager, 16 oz”.
- `tag` (amber) marks a course's favourites (“Popular”) inside a category, not on the Popular tab itself.
- Menu, descriptions, prices and photos come from Drive per course.
