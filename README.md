# Action Labs — Web Documentation

Static documentation site for every web view in the Action Labs Fieldproxy build.
Covers the Project Metrics billing dashboard, the Project Management module, and
the full Field Service Management suite (jobs, schedule, reports, customer screens).

## Folder layout

```
actionlabs/
├── index.html                         landing page (links to docs + videos)
├── documentation/
│   ├── index.html                     written docs — single page, 20 view sections
│   └── assets/
│       ├── style.css                  sidebar, typography, tables, badges
│       └── script.js                  smooth-scroll + active-section highlight
└── walkthrough_videos/
    └── videos.html                    one Loom embed slot per view
```

## Open it locally

```sh
open index.html
```

No build step, no dependencies. Pure HTML/CSS/JS.

## Publish to GitHub Pages

The simplest path is to push this `actionlabs/` folder as the **root** of a new
repo (e.g. `actionlabs-docs`) and turn on Pages.

```sh
cd actionlabs
git init
git add .
git commit -m "Initial Action Labs web documentation"
git branch -M main
git remote add origin git@github.com:<you>/actionlabs-docs.git
git push -u origin main
```

Then on GitHub:

1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `/ (root)`
4. Save. After ~30 seconds the site is live at
   `https://<you>.github.io/actionlabs-docs/`.

The landing page (`index.html`) takes you to **Read the Docs** or
**Walkthrough Videos**.

## Adding a Loom walkthrough

Open `walkthrough_videos/videos.html`, find the view you recorded
(each view is a `<section>` with a unique `id`), and replace the
`.loom-slot` placeholder with the embed iframe Loom gives you:

```html
<div class="loom-slot">
  <iframe src="https://www.loom.com/embed/<your-id>" allowfullscreen></iframe>
</div>
```

Styling is already wired — no other edits needed.

## Adding a new view

1. **Sidebar entry** — add an `<li><a href="#new-id">View name</a></li>` to the
   matching `<div class="nav-group">` in both `documentation/index.html` and
   `walkthrough_videos/videos.html`.
2. **Section block** — copy any existing `<section class="view-section">` and
   change the `id`, `<h2>`, `<p class="section-meta">` (file path), and the
   filters / sections / interactions content.
3. **Video slot** — copy any `<section>` block in `videos.html` for the same id.

The active-section highlighter picks up new ids automatically.

## Editing styles

Everything visual lives in `documentation/assets/style.css`. The colors are CSS
variables at the top of the file (`--accent`, `--sidebar-bg`, `--border`,
etc.) so a re-skin is mostly a few variable changes.

## Scope

Web views only. The following files are intentionally excluded:

- `location_tracking.json` — empty stub
- `detailed_view_activity.json` — empty stub
- `jobs_All_data_old.json` — superseded by `jobs_all_data.json`
- `entire.json` — scratch container

Mobile and admin documentation will live in their own folders later.
