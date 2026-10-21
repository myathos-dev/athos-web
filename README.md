# athos-web

The Athos website, moved out of Softr into plain React. The pages form a single app with a single `package.json`. Planned work is in [ROADMAP.md](ROADMAP.md).

## Who it's for

- **Visitors and patients:** the home, product and guide pages, and the teleform intake flows.
- **Partners, clinics and enterprise buyers:** the partner program, clinic and enterprise pages.
- **The sales team:** the internal sales CRM at `/admin/sales`.

## Site layout

The pages are grouped into four folders by area of the site:

| Folder | Pages | What's in it |
|---|---|---|
| `core/` | 16 | Home, landing pages, product pages (GLP, semaglutide, tirzepatide, NAD+, MOTS-c, BPC-157, TB-500), peptide guides |
| `sales/` | 12 | Partner program and intake, clinic and enterprise pages, internal sales CRM (`/admin/sales`) |
| `legal/` | 19 | `/legal` with the patient policies, `/legal/partners` with the partner documents |
| `teleforms/` | 14 | `/getpeptides` intake flows (weight-loss, longevity, recovery) and `/peptides/shop` |

Other folders:

| Folder | What it's for |
|---|---|
| `templates/` | v0 proposal for onboarding clients from these pages. Start with its README. |
| `_softr-original/` | The exact code exported from Softr, for reference. Same page layout, no section folders. |
| `app/` | The viewer that serves every page |
| `scripts/` | The block check and the Softr → React converter |

## How pages map to URLs

Each page is a folder holding `block-01.jsx`, `block-02.jsx`, and so on, in page order. The section folder is **not** part of the URL:

```
core/men/block-01.jsx             ->  /men            (whole page)
                                  ->  /men/block-01   (one block)
sales/clinic/signup/block-01.jsx  ->  /clinic/signup
legal/legal/ccpa/block-01.jsx     ->  /legal/ccpa
```

## Run

```bash
npm install
npm run check   # runs every block on its own in Node and prints PASS/FAIL
npm run dev     # http://localhost:5173  (index of all pages, by section)
npm run build   # static build in dist/
```

Requires Node 18+. The blocks use Tailwind classes. The fonts (DM Sans, DM Serif Display) load from Google Fonts in `index.html`.

## Deploy notes

- **Checkout:** it leaves the site for MyOrbit (`onboard.myorbithealth.com/form/athos-wellness/...`).
- **Teleforms:** the teleform pages pass the patient's answers between pages through `sessionStorage`. That works because the whole app is served from one domain.

## Still pointing at Softr or other outside services

- **`sales/clinic/signup`:**
  - The logo loads from `assets.softr-files.com`. Download it and host it yourself before you close the Softr account.
  - The Calendly embed is independent of Softr and will keep working.
- **Product pages:** many images are on `replicate.delivery`, which is likely temporary, or on `assets.softr-files.com`.
- **`core/men` and the product page heroes:** Unsplash placeholder images, not Athos product photos.

## Known issues

The full list is in `templates/README.md`, under "Fix before templating". In short:
- placeholder phone numbers and addresses on the legal pages;
- `\$` showing up literally on the partner legal pages;
- broken links;
- a crash on `/getpeptides/recovery/product-info`.

## License

[GNU Affero General Public License v3.0](LICENSE).
