# Glarenergy — deploy notes

## Deploy

Drag the whole folder into Vercel, or:

```
npx vercel --prod
```

`vercel.json` sets `cleanUrls: true`, so `/technology` serves `technology.html`.
On Netlify or Cloudflare Pages, clean URLs are the default — no config needed.

On a plain Apache/nginx host, either keep the `.html` extensions in the nav
links or add a rewrite rule.

---

## Before it goes live — two things

### 1. Wire the form (5 minutes)

Open `assets/app.js`, find:

```js
var ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

Go to formspree.io, create a form pointed at `connect@glarenergy.com`, paste
the ID in. Done.

Until you do, the form does **not** fail silently — it falls back to opening
the visitor's mail client with every field pre-filled. No enquiry is lost
either way, but the endpoint is better: it captures submissions even when the
visitor has no mail client configured.

A hidden honeypot field (`website`) blocks basic spam bots. Leave it in.

### 2. Set the real domain

`SITE` is set to `https://www.glarenergy.com` in the canonical tags, sitemap
and robots.txt. If you deploy to a different domain, find-and-replace it
across `*.html`, `sitemap.xml` and `robots.txt`.

---

## What's in here

| File | Purpose |
|---|---|
| `index.html` | Home |
| `technology.html` | Technology |
| `product.html` | 2P-HSAT product page |
| `specifications.html` | Full datasheet |
| `contact.html` | Enquiry form |
| `404.html` | Not found |
| `assets/styles.css` | All styling — one file, cached across pages |
| `assets/app.js` | All behaviour — ~4KB, no dependencies |
| `sitemap.xml` | Submit to Google Search Console |
| `robots.txt` | Points crawlers at the sitemap |
| `vercel.json` | Clean URLs |

---

## What only Glarenergy can supply

The site is engineered as well as it can be. What holds its score down now is
content, not code. In rough order of how much each one is worth:

1. **One real project.** Name, location, capacity, what was installed, and one
   measurable result. A single case study is worth more to an EPC than every
   design decision in this repo.

2. **Photographs.** At minimum: an installed tracker in the ground, and a
   close shot of the drive assembly. The site has three labelled slots sized
   1600×1200 waiting for them. A tracker company with no photograph of its
   tracker reads as a company that hasn't installed one.

3. **The basis of the 15–25% claim.** Measured or modelled? Against what tilt
   angle, latitude and irradiance? Right now it's the central claim on the
   site and a technical buyer will discount it entirely without a baseline.

4. **Certifications and test reports.** IEC 62817 for tracker performance, a
   wind tunnel report supporting the 180 km/h figure. These are the first
   documents a procurement team asks for.

5. **Registered address, CIN and GST number.** For an Indian B2B purchase,
   absence of these is a trust problem before it's a marketing problem. They
   belong in the footer.

6. **LinkedIn URL.** Goes in the footer and in the `sameAs` field of the
   Organization schema in every page `<head>`.

7. **Installed capacity to date, warranty terms, lead time, O&M scope.**
   Standard questions on every tracker RFQ.

Items 1–3 change how the site performs commercially. The rest are table stakes.
