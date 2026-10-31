# athos-web

A web platform for a mock telehealth brand, **Athos**, moved out of Softr into one React app. It is being built into three things in one codebase:

1. **An internal CRM** for the sales team: sales hub, lead queue and leads dashboard.
2. **A sales tool**: the partner program, clinic and enterprise pages, and their signup and intake flows.
3. **A patient education tool** that clients can use with their own patients: product pages, peptide guides, teleform intake flows and patient policies.

> **Everything here is mock.** Athos is not a real company. The brand, products, prices, partners, contacts, legal documents and links are sample content for development. There is no real patient or customer data, and nothing a visitor types is stored.

Planned work is in [ROADMAP.md](ROADMAP.md).

## Who it's for

| User | What they use |
|---|---|
| **The sales team** (internal) | The CRM at `/admin/sales` |
| **Clients** (clinics, partners, enterprise buyers) | The sales and partner pages, and later the client templates in `templates/` |
| **Clients' patients** | The education pages, guides and teleform intake flows |

## Plan

The work runs in two phases. Details and checkboxes are in [ROADMAP.md](ROADMAP.md).

**Phase 1: Migrate.** Move every page off Softr and make the site run on its own.
- Done: all 61 pages converted from Softr exports into React blocks, served by one app, with a block check that runs every block.
- Left: fix the known bugs and broken links, move images off Softr and temporary hosts, replace placeholders, and point outside links (checkout, booking) at mock pages.

**Phase 2: Expand each area.** Once the migration is clean, build each area out:
- **CRM:** the three CRM pages take their data as props and have no data source yet. Give them a backend with mock leads so the queue, assignments, notes and statuses work end to end.
- **Sales tool:** finish the partner, clinic and enterprise flows so a signup or intake goes somewhere, and build the client templates so a new client can be set up from one config.
- **Patient education:** grow the product pages and guides into an education library that clients can hand to their patients, and connect the teleform flows to it.

## Site map

Each page is a folder of `block-01.jsx`, `block-02.jsx` and so on, in page order. The section folder is **not** part of the URL.

### `core/`: education and product pages (16)

| URL | Page |
|---|---|
| `/home` | Home |
| `/men` | Men's landing page |
| `/glp-weight-management` | GLP weight management landing page |
| `/semaglutide-injectable`, `/semaglutide-oral`, `/tirzepatide-injectable` | GLP product pages |
| `/nad`, `/mots-c`, `/bpc-157`, `/tb-500` | Peptide product pages |
| `/peptides/guide` | Peptide guide hub |
| `/peptides/guide/cognitive`, `/fitness`, `/longevity`, `/recovery`, `/weightloss` | Guides by goal |

### `sales/`: CRM and sales pages (12)

| URL | Page |
|---|---|
| `/admin/sales` | Sales hub (internal CRM) |
| `/admin/sales/queue` | Lead queue (internal CRM) |
| `/admin/sales/leads` | Leads dashboard (internal CRM) |
| `/partners`, `/partners/intake`, `/partners/intake/category`, `/partners/intake/complete` | Partner program and intake |
| `/clinic`, `/clinic/signup` | Clinic page and signup |
| `/enterprise`, `/enterprise/signup`, `/enterprise/pharmacy-list` | Enterprise page, signup and pharmacy list |

### `teleforms/`: patient intake flows (14)

| URL | Page |
|---|---|
| `/getpeptides` | Start: pick a goal |
| `/getpeptides/weight-loss`, `/longevity`, `/recovery` | Each flow, with `/profile`, `/product` and `/product-info` steps |
| `/peptides/shop` | Shop |

The teleform pages pass answers between steps in the browser (`sessionStorage`) only.

### `legal/`: policies (19)

| URL | Page |
|---|---|
| `/legal` | Patient policies index |
| `/legal/terms-of-service`, `/privacy-policy`, `/ccpa`, `/ada-compliance`, `/medical-consent`, `/medical-weight-loss-bill-of-rights`, `/pcmso`, `/rrr-policy` | Patient policies |
| `/legal/partners` | Partner documents index |
| `/legal/partners/agreement`, `/msa`, `/terms`, `/privacy`, `/compliance`, `/disclosure`, `/cash-pay-policy`, `/fmv-certification`, `/addendum-1` | Partner documents |

## Project layout

```
app/              The viewer: serves every page and an index of all pages
core/ sales/ teleforms/ legal/
                  The 61 pages, one folder per page, block-XX.jsx in page order
templates/        v0 proposal for onboarding clients from these pages (start with its README)
_softr-original/  The original Softr export, for reference (same pages, no section folders)
scripts/          check.mjs (block check) and desoftr.py (Softr to React converter)
```

## Run

Requires Node 18 or newer.

```bash
git clone https://github.com/myathos-dev/athos-web.git
cd athos-web
npm install
npm run check   # runs every block on its own in Node and prints PASS/FAIL
npm run dev     # http://localhost:5173 : index of all pages, by section
npm run build   # static build in dist/
```

Open `/` for the index, a page URL such as `/men` for the whole page, or `/men/block-01` for one block.

The blocks use Tailwind classes. The fonts (DM Sans, DM Serif Display) load from Google Fonts in `index.html`.

## Client templates

`templates/` is a v0 proposal for setting up a new client by picking modules and filling in one config file, instead of copying pages by hand. It holds the page-to-module map (`modules.json`), 540 editable fields pulled from the Softr settings (`fields.json`), an audit of hardcoded client values (`audit.json`) and an example client config. The build approach is still open; its README lays out the options.

## Still pointing outside the app

These are placeholders to replace with mock pages or self-hosted files:

- **Checkout:** the product and shop pages link to a mock checkout at `checkout.athos.example`. Nothing is sold and no payment is taken.
- **Booking:** the clinic and enterprise signup pages embed a placeholder Calendly link.
- **Images:** many product images are on `replicate.delivery` (likely temporary) or `assets.softr-files.com`. `core/men` and the product heroes use Unsplash placeholders.
- **Logo:** `sales/clinic/signup` loads its logo from `assets.softr-files.com`.

## Known issues

The full list is in `templates/README.md`, under "Fix before templating":

- Placeholder phone numbers and addresses on the legal pages
- `\$` showing up literally on the partner legal pages and `/partners/intake`
- Broken links to pages that don't exist yet
- A crash on `/getpeptides/recovery/product-info`

## License

[GNU Affero General Public License v3.0](LICENSE).
