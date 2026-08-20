# Her Birthday Website 🎀

A 3-page pink birthday greeting site: **Cover → Birthday Message → Her Gallery**.
Works best in landscape — visitors on a portrait phone see a "Please rotate
your phone" screen until they turn the device.

## Files
```
birthday-website/
├── index.html      ← page structure & text
├── style.css        ← pink theme, fonts, animations
├── script.js         ← page navigation, confetti, music, floating balloons
├── images/           ← put her photos here
└── music/            ← put the background song here
```

## 1. Add the cover photo
Put an image at `images/cover.jpg` (any name works, just also update the
`src="images/cover.jpg"` in `index.html` under `<!-- PAGE 0 — COVER -->`).
Until a real file is there, a placeholder frame shows instead — nothing breaks.

## 2. Write your message
Open `index.html`, find the comment `✏️ EDIT YOUR MESSAGE HERE` inside the
`message-page` section, and replace the placeholder paragraph(s) with your
own words. Also swap `Her Name` in the cover section and `Your Name` in the
message sign-off.

## 3. Add gallery photos
Put up to 6 photos in `images/` named `gallery1.jpg` … `gallery6.jpg` (or
edit the filenames in `index.html` under `<!-- PAGE 2 — HER GALLERY -->`).
Update each `<figcaption>caption here</figcaption>` with your own captions.
Want more or fewer than 6? Copy or delete a `<figure class="polaroid ...">`
block — the grid re-flows automatically.

## 4. Add music
Drop the song file at `music/song.mp3` (the `<audio>` tag in `index.html`
already points there). Tap the pink circular button, top-right, to play or
pause — it animates with little music notes while playing.

## 5. Preview it
Just open `index.html` in a browser, or for the smoothest experience run a
tiny local server from this folder, e.g.:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Customizing further
- Colors live as CSS variables at the top of `style.css` (`:root { ... }`) —
  change `--pink-strong`, `--rose-deep`, `--gold`, etc.
- Balloon/sparkle frequency: `setInterval(spawnBalloon, 2600)` and
  `setInterval(spawnSparkle, 500)` near the bottom of `script.js`.
- Fonts are pulled from Google Fonts in the `<head>` of `index.html`
  (Pacifico for headings, Caveat for the handwritten message, Quicksand
  for body text).
