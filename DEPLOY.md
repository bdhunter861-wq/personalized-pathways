# Sharing a live preview link (Vercel)

Goal: a shareable `https://<name>.vercel.app` link that **auto-updates every time
changes are pushed**, so partners can review the site before it's on the real
domain and request edits.

The project is already a git repo with a clean commit, so it's ready to connect.

---

## Recommended: GitHub + Vercel (auto-updates on every change)

This is the setup that makes the link "live." One-time setup, then every future
change redeploys automatically.

### 1. Put the code on GitHub (one time)

1. Go to <https://github.com/new> and create a **new, empty** repository
   (name it e.g. `personalized-pathways`). Do **not** add a README, .gitignore,
   or license — the project already has them.
2. Copy the repo URL GitHub shows you (looks like
   `https://github.com/<you>/personalized-pathways.git`).
3. In a terminal in this project folder, run:
   ```bash
   git remote add origin https://github.com/<you>/personalized-pathways.git
   git push -u origin main
   ```
   The first push opens a browser window to sign in to GitHub — that's expected.

### 2. Connect Vercel (one time)

1. Go to <https://vercel.com> and sign in (you can use "Continue with GitHub").
2. Click **Add New… → Project**, then **Import** the GitHub repo you just pushed.
3. Vercel auto-detects Next.js — the defaults are correct. Click **Deploy**.
4. After ~1 minute you get a link like `https://personalized-pathways.vercel.app`.
   **That's the link to share with partners.**

### 3. From now on, it's automatic

Every time changes are pushed to the `main` branch on GitHub, Vercel rebuilds and
the **same link updates** within a minute or two. Nothing else to do.

> Working with Claude Code? After it makes edits it can run
> `git add -A && git commit -m "..." && git push`, and Vercel redeploys on its own.

---

## Faster first link, manual updates: Vercel CLI

The Vercel CLI is already installed. This gets a link quickly but you (or Claude
Code) must re-run the deploy command after each change — it does **not** auto-update.

```bash
vercel login      # one time, opens a browser
vercel --prod     # deploys and prints the link; re-run after changes
```

---

## Access

The preview is **public** — anyone with the link can view it (there's no
password). The `*.vercel.app` URL is random and not linked from anywhere, so it
won't be found unless you share it.

Want to add a password later? A shared-password gate can be added back with a
small `middleware.ts` (Vercel's own password protection is a paid Pro feature).
Just ask.

## Notes

- The free **Hobby** plan is plenty for this preview site.
- Nothing here touches the real domain (`wideeyedlearning.com`). Connecting that
  domain is a separate, later step (see README.md) and should wait until any old
  Wayback Machine material is saved.
- Secrets/build output are git-ignored, so nothing sensitive gets published.
- Keep the GitHub repo **private** while it's a preview.
