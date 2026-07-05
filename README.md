# Personalized Pathways College Consulting

Website for **Wide-Eyed Learning, LLC** dba **Personalized Pathways College Consulting**, served at **wideeyedlearning.com**.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. It is a mostly static site, so it is fast, cheap to host, and easy to maintain. No database, no logins, no admin panel, and no paid services are required.

---

## What Michelle can edit without touching layout code

All copy that changes often lives in plain data files under [`data/`](data):

- [`data/siteConfig.ts`](data/siteConfig.ts) — contact email, scheduling link, navigation, legal/disclaimer text.
- [`data/services.ts`](data/services.ts) — package names, prices, descriptions, and what each includes.
- [`data/faqs.ts`](data/faqs.ts) — FAQ questions and answers.
- [`data/resources.ts`](data/resources.ts) — resource/blog posts (titles, excerpts, full content).

Search the project for `TODO` to find every spot waiting on Michelle's input (email, scheduling link, photo, full bio, testimonials, book/publication references, social links, analytics).

---

## Run it locally

You need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open <http://localhost:3000>.

## Build for production

```bash
npm run build   # creates an optimized production build
npm start       # serves the production build locally
```

Run `npm run lint` to check for issues.

## Optional environment variables

Copy `.env.example` to `.env.local` if you need them.

- `NEXT_PUBLIC_CONTACT_ENDPOINT` — if set, the contact form POSTs inquiries to this URL as JSON. If left unset, the form opens the visitor's own email program with a prefilled message (the free default, no paid form service needed).

---

## Deploy to Vercel (free tier)

1. Push this project to a GitHub repository.
2. Go to <https://vercel.com>, sign in, and click **Add New… → Project**.
3. Import the GitHub repo. Vercel auto-detects Next.js; the defaults are correct.
4. Click **Deploy**. You'll get a free `*.vercel.app` URL to preview.

Every push to the main branch redeploys automatically. The free Hobby plan is enough for this site.

## Connect the domain wideeyedlearning.com

> **Before changing any DNS:** the domain currently points to old hosting, and there may be old material worth saving first. See the note below.

1. In Vercel, open the project → **Settings → Domains**.
2. Add `wideeyedlearning.com` (and `www.wideeyedlearning.com`).
3. Vercel shows the exact DNS records to set. You have two options:
   - **Easiest:** change the domain's nameservers at GoDaddy to Vercel's, and let Vercel manage DNS.
   - **Or:** keep DNS at GoDaddy and add the A / CNAME records Vercel lists.
4. DNS changes can take a little time to take effect. Vercel issues HTTPS automatically once the records are verified.

### Important context for the domain

- The domain is registered at **GoDaddy** and currently has **custom nameservers pointing to LunarPages** (old hosting).
- **Before changing DNS, finish saving any old [Wayback Machine](https://web.archive.org) archive materials Michelle wants to keep.** Once DNS is switched, the old site will no longer load from this domain.
- After archiving, the simplest path is to connect the Vercel project to `wideeyedlearning.com` and follow Vercel's DNS instructions above.
- **Do not** publish the GoDaddy Website Builder draft.
- **Renew the GoDaddy domain before its expiration date and keep auto-renew turned on** so the domain is never lost.

---

## A note on prior content

This site is for college consulting only, under Wide-Eyed Learning, LLC dba Personalized Pathways College Consulting. It intentionally does **not** include or republish any earlier Signing Smart curriculum, flashcards, DVDs, instructor materials, or product pages. That IP was sold and is not part of this business.

---

## Project structure

```
app/                 App Router pages and routes
  page.tsx           Home
  college-consulting/
  services/
  process/
  about/
  resources/         Index + [slug] detail pages
  faqs/
  contact/
  success-stories/   Build-ready, placeholder only (no invented testimonials)
  not-found.tsx      Custom 404
  sitemap.ts         Generated sitemap.xml
  robots.ts          Generated robots.txt
  icon.svg           Favicon placeholder
  globals.css        Tailwind + brand theme
components/           Reusable UI (Header, Footer, Button, cards, etc.)
data/                 Editable content (config, services, faqs, resources)
```

## Tech notes

- Next.js App Router + TypeScript + Tailwind CSS v4.
- Accessible: skip-to-content link, keyboard-friendly nav, semantic headings, focus styles, alt/aria where needed.
- SEO: per-page metadata, Open Graph, sitemap, robots, and ProfessionalService + FAQ structured data.
- Responsive, mobile-first design.
