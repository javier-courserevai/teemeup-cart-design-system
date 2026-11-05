# ListRow

One row in a `List`: icon tile, title, a description, then a value or a chevron. Rows are at least 64px.

- With `onClick`, `href` or `chevron` the whole row is one button; otherwise it is plain text (a setting's current value).
- `tone="danger"` for rows that end or remove something (“End round early”); they always open a `ConfirmSheet`.
- `List` wraps rows in a card with hairlines between them.
