# Hi-Fi Cooks

A responsive cooking discovery website with recipe search, cuisine browsing, detailed recipe cards, a pantry ingredient finder, favorites, cooking history, and a chef recipe workspace.

## Run locally

Open `index.html` in a browser, or serve the folder with a local static server:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` publishes the static site whenever code is pushed to `main`, or when manually triggered from the Actions tab. Before the first deployment, enable Pages in **Settings → Pages → Build and deployment → Source → GitHub Actions**. GitHub rejected automatic Pages activation for this repository, so the owner must enable it once in Settings.

1. Add these files to a GitHub repository and push the default branch as `main`.
2. In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Open **Actions**, select **Deploy Hi-Fi Cooks to GitHub Pages**, and choose **Run workflow** (or push a new commit).
4. Find the published address in **Settings → Pages** or in the completed workflow's deployment environment.

The workflow validates the app JavaScript and publishes the static files from the repository root. A Content Security Policy restricts scripts to the site itself and limits image, font, and stylesheet requests to the site and the disclosed image/font hosts.

## Pre-release checks

Before announcing the site, confirm the Pages workflow has a successful run and open the deployed URL in a private/incognito window. The current preview has been checked for JavaScript syntax, responsive layouts from 360 px through desktop, cuisine filters, recipe detail and serving adjustments, favorites/history, local recipe creation and persistence, stored-input escaping, image-load fallback, and keyboard focus in dialogs.

The smoke checks do not replace a formal accessibility audit, professional food/allergen review, privacy/legal review, or real multi-user/backend testing.

## Current scope and production requirements

This is a browser-only public preview. The included kitchen guide gives predefined demo responses; it is not connected to a live AI model or food-safety expert. Starter recipe details and nutrition have not been professionally reviewed. Saved recipes, cooking history, and locally added recipes are stored in the current browser's local storage; they are not shared with other visitors. Recipe imagery and fonts load from Unsplash and Google Fonts.

For a real multi-user service, add:

- Secure sign-up, sign-in, and role-based chef access.
- A backend API and shared database for accounts, recipe publishing, favorites, and cooking history.
- A server-side AI integration; keep model/API credentials out of browser code.
- Chef review and moderation, recipe validation, and protected image uploads.
- Production food-safety review, privacy and data-retention policies, monitoring, and automated tests.

GitHub Pages hosts static front-end files only; it does not provide these backend services.
