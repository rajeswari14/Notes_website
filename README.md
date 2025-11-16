# Training Notes (notes_website)

Overview
--------

This is a small static notes site that displays short training/reference notes on Linux, shell scripting, networking, Git, and related topics. It is implemented with plain HTML, CSS and JavaScript and is intended as a lightweight, easily editable reference.

What the site does (runtime behavior)
-----------------------------------

- Loads `notesData` from `notes.js` (an array of note objects with `id`, `title`, `date`, and `content`).
- Renders notes into the `#notesContainer` element on the page.
- Search: the search box filters notes by matching the search term against note `title` and `content` (case-insensitive, live as you type).
- Date filter: the date dropdown is populated from the available note dates and filters the list when selected.
- Dark Mode: a Dark Mode toggle sets a `dark-mode` CSS class on the `body` and persists the preference in `localStorage`.
- Last updated: the `#lastUpdated` value is set dynamically by `script.js` (it uses the newest note date when available, or today's date as a fallback).

How notes are stored
---------------------

- Notes live in `notes.js` as an array named `notesData`:

```js
{
  id: 1,
  title: "Linux Commands",
  date: "2025-10-27",
  content: `...`
}
```

- The `date` field is currently a string; for reliable date parsing in different environments use an ISO format (`YYYY-MM-DD`) if you plan to run programmatic comparisons.

How to edit or add notes
------------------------

- Open `notes.js` and add, edit, or remove objects from the `notesData` array. Each object should include `id`, `title`, `date`, and `content`.
- Keep `id` unique for each note.
- New notes will appear automatically after reloading the page.

Files of interest
-----------------

- `index.html` — main page and markup
- `styles.css` — styling (uses CSS variables for easy color tweaks and supports dark mode when `body.dark-mode` is present)
- `notes.js` — data source for notes
- `script.js` — UI logic: populates the date filter, handles search and filtering, renders notes, manages dark mode and `lastUpdated`

Accessibility & small UX details
--------------------------------

- Search input includes an `aria-label` for screen readers.
- Dark Mode button uses `type="button"` and updates `aria-pressed` to reflect state.
- Note content preserves whitespace (`white-space: pre-wrap`) so pasted code-snippets render sensibly.

Limitations & notes
-------------------

- This is a static site — notes are edited directly in `notes.js`. If you want an editor UI, converting `notes.js` to a JSON file and adding a small admin/editor page or backend would be recommended.
- Date parsing relies on the `Date` constructor — inconsistent date formats may cause parsing issues. Use ISO dates (`YYYY-MM-DD`) for better compatibility.

Local preview
-------------

You can preview the site by opening `index.html` directly in a browser, or serve it locally to avoid any static-file restrictions. Example (PowerShell):

```powershell
cd notes_website
python -m http.server 8000;
# then open http://localhost:8000 in your browser
```

Next steps / suggestions
------------------------

- Convert `notes.js` into `notes.json` and fetch it via `fetch()` to separate content from code.
- Add a small editor page (protected) or an admin process to allow note updates without editing source files.
- Add automated formatting/linting for `notes.js` if many contributors will edit it.

If you'd like, I can apply any of the suggestions above (convert to JSON + fetch, add an editor, or add a simple GitHub Actions deployment), or update the note date formats to ISO for more reliable behavior.
# Training Notes (notes_website)

A small static notes site containing quick reference notes on Linux, shell scripting, networking, Git, and related topics.

## What this is

- A lightweight static site built with plain HTML, CSS and JavaScript.
- Notes are stored in `notes.js` as an array (`notesData`). The UI provides search and date filtering, plus a Dark Mode toggle.

## Files

- `index.html` — main page and layout
- `styles.css` — styling and dark-mode variables
- `notes.js` — the notes content (array of note objects)
- `script.js` — rendering, filtering, and UI behavior

## Quick local preview

You can run the site locally without any build step. Options:

1) Open `index.html` in your browser (double-click or `File → Open`).

2) (Recommended) Serve with a simple HTTP server (helps with some browser behaviors):

   - Using Python 3 (PowerShell / terminal):

```
powershell
cd notes_website
python -m http.server 8000;
# then open http://localhost:8000 in your browser
```





