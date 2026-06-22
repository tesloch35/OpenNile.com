# Pre-Launch QA Checklist

Run through this list before and immediately after pointing `opennile.com` live.

## Mobile

- [ ] Hero loads without excessive scroll
- [ ] Mobile nav opens/closes; all links work
- [ ] Waitlist modal: customer vs business toggle, all fields, submit
- [ ] Contact form submits on mobile Safari/Chrome
- [ ] FAQ accordions expand/collapse

## Forms

- [ ] Waitlist — customer (no business name required)
- [ ] Waitlist — business (business name required)
- [ ] Contact — validation errors show for missing fields
- [ ] Success messages display after submit
- [ ] Formspree emails arrive with correct subject and fields
- [ ] Privacy/Terms links visible under submit buttons

## Links & pages

- [ ] Navbar: Home, About Us, Features, FAQ, Contact
- [ ] Footer nav mirrors main sections
- [ ] `/privacy` loads
- [ ] `/terms` loads
- [ ] Invalid URL shows branded 404
- [ ] `mailto:` and `tel:` links work

## SEO & sharing

- [ ] Page title and meta description in view source
- [ ] `https://opennile.com/sitemap.xml` accessible
- [ ] `https://opennile.com/robots.txt` accessible
- [ ] OG preview looks correct (iMessage, Slack, or [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Favicon and apple-touch-icon display in browser tab / home screen

## Analytics

- [ ] Vercel Analytics enabled in production (`NODE_ENV=production`)
- [ ] Test waitlist signup triggers `waitlist_signup` event
- [ ] Test contact submit triggers `contact_submit` event

## Performance

- [ ] Lighthouse mobile score acceptable (Performance, Accessibility)
- [ ] No broken images on Features section
- [ ] Hero app mockup loads quickly

## Post-launch

- [ ] Google Search Console property verified
- [ ] Sitemap submitted in Search Console
- [ ] Monitor Formspree for spam submissions first 48 hours
