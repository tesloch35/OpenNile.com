# Deploying OpenNile to Vercel

## Prerequisites

- GitHub repository with this project pushed
- [Vercel](https://vercel.com) account
- [Formspree](https://formspree.io) form activated for production domain
- DNS access for `opennile.com`

## 1. Import project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository
3. Framework preset: **Next.js**
4. Root directory: repository root
5. Build command: `npm run build`
6. Install command: `npm install`

## 2. Environment variables

In Vercel → Project → Settings → Environment Variables, add:

| Variable | Required | Description |
|----------|----------|-------------|
| `FORMSPREE_URL` | Recommended | Shared Formspree endpoint (fallback) |
| `FORMSPREE_WAITLIST_URL` | Optional | Dedicated waitlist form URL |
| `FORMSPREE_CONTACT_URL` | Optional | Dedicated contact form URL |

Copy values from [`.env.example`](.env.example). Use separate Formspree forms for waitlist vs contact if you want easier inbox triage.

## 3. Deploy

Click **Deploy**. Vercel will build and host the site at a `*.vercel.app` URL.

## 4. Custom domain

1. Vercel → Project → Settings → Domains
2. Add `opennile.com` and `www.opennile.com`
3. Update DNS at your registrar per Vercel instructions (A record or CNAME)
4. Wait for SSL certificate provisioning (usually a few minutes)

## 5. Formspree production setup

1. Open your Formspree form dashboard
2. Confirm notification email goes to the right inbox
3. Add `opennile.com` to allowed domains if using domain restrictions
4. Submit test waitlist (customer + business) and contact forms on the live URL

## 6. Post-deploy checks

See [`docs/QA-CHECKLIST.md`](docs/QA-CHECKLIST.md) for the full checklist.

Quick smoke test:

- [ ] Homepage loads over HTTPS
- [ ] Waitlist modal submits successfully
- [ ] Contact form submits successfully
- [ ] `/privacy` and `/terms` load
- [ ] Footer anchor links scroll correctly
- [ ] Formspree emails arrive with correct fields

## 7. Google Search Console (post-launch)

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property `https://opennile.com`
3. Verify via DNS TXT record or HTML tag
4. Submit sitemap: `https://opennile.com/sitemap.xml`

## Local production test

```bash
npm run build
npm run start
# Visit http://localhost:3000
```

Run automated checks:

```bash
npm run test:links   # verify key routes return 200
npm run test:forms   # verify waitlist + contact API (server must be running)
```
