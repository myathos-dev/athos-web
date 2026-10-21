# template-for-clients — v0 proposal

**Goal:** onboard a new telehealth client by picking modules and filling in one config file, instead of copying 61 pages and editing them by hand.

This is a proposal for the dev, not a finished system. The inventory files are generated from the migrated pages, so they're accurate today. The build approach is open.

## What's in this folder

| File | What it is |
|---|---|
| `README.md` | This proposal |
| `modules.json` | All 61 migrated pages, each assigned to a module and a category |
| `client.example.json` | The per-client config shape, filled in with Athos's current values |
| `fields.json` | 540 editable fields across 42 pages, pulled from the Softr settings. This is the field inventory per page and block. |
| `audit.json` | Client-specific values that are hardcoded outside those fields |
| `scripts/extract_fields.py` | Regenerates `fields.json` from `_softr-original/` |
| `scripts/audit_hardcoded.py` | Regenerates `audit.json` from the converted pages |

To rerun them:

```bash
# from template-for-clients/
python3 scripts/extract_fields.py ../_softr-original > fields.json
python3 scripts/audit_hardcoded.py .. > audit.json
```

## Onboarding modules

| Module | Group | Pages | Who gets it |
|---|---|---|---|
| **base** | Teleforms: `/getpeptides/**` and `/peptides/shop` | 14 | Every client |
| **base** | Patient legal: `/legal` and its 8 pages | 9 | Every client |
| **sales** | Partner program: `/partners/**` | 4 | Optional |
| **sales** | Partner legal: `/legal/partners/**` | 10 | Only clients who turn on the partner program |
| **sales** | B2B: `/clinic/**` and `/enterprise/**` | 5 | Optional |
| **web** | Home | 1 | Optional (pick by category) |
| **web** | Landing: `/men`, `/glp-weight-management` | 2 | Optional |
| **web** | Product: semaglutide (injectable and oral), tirzepatide, NAD+, MOTS-c, BPC-157, TB-500 | 7 | Optional |
| **web** | Guide: `/peptides/guide` plus 5 guides | 6 | Optional |
| **ops** | Internal sales CRM: `/admin/sales/**` | 3 | Not part of client onboarding |

Partner legal sits under **sales**, not base. Those documents only apply if the client runs a partner program.

## What makes a page client-specific today

**1. Softr settings: 540 fields across 42 pages** (`fields.json`)

| Type | Count |
|---|---|
| Text | 296 |
| Image | 94 |
| Navigation | 64 |
| Long text | 55 |
| Array | 31 |

Softr had already separated these from the code. The migration replaced each one with its default value, and `fields.json` keeps the name, label and default for every block. That makes it a ready-made template field list.

**2. Hardcoded values** (`audit.json`, counted as hits across pages)

| Value | Hits | Pages |
|---|---|---|
| Brand name "Athos" | 558 | 60 |
| Brand colors `#245C3A` / `#16625F` / `#1a4d2e` / `#558E8D` | 1,925 | 48 |
| Fonts: DM Serif Display / DM Sans / Canela / Telegraf | 566 | 42 |
| MSO name (Dhruv…) | 63 | 19 |
| Parent entity "Symbiotix" | 41 | 19 |
| Emails at athoshealth.com | 24 | 18 |
| Domain myathos.com | 10 | 2 |
| Checkout: MyOrbit URL / `athos-wellness` slug | 24 | 4 |
| Images on replicate.delivery | 54 | 17 |
| Images on Unsplash (placeholders) | 40 | 11 |
| Images on softr-files | 6 | 6 |

The teleforms had no Softr settings, so everything in them is hardcoded.

## Proposed approach (the dev decides)

### Option A — config-driven React in one codebase (recommended)

1. **One config file per client.** `clients/<slug>.json`, in the shape of `client.example.json`.
2. **A shared client context.** Add `<ClientProvider>` and a `useClient()` hook. Blocks read brand, company, MSO and checkout values from it instead of literals. For each block that had Softr settings, every setting becomes a page-content value with its default taken from `fields.json`. This conversion is mechanical.
3. **Theme tokens.** Replace hex color literals with CSS variables (`var(--brand-primary)`) or Tailwind theme colors, and do the same for fonts. Four colors cover about 1,900 hits.
4. **A route manifest.** The build includes only pages whose module and category the client config turns on (`modules.json` plus the client file).
5. **One product page template.** Each product page has 9 sections:
   - 4 are identical on every product page: subscription, banner, how it works, why Athos.
   - 4–5 are unique: hero, explainer, product block, FAQ, and sometimes a roadblocks or blend section.

   Turn this into one template driven by product data. A new product then means new data, not a new page.
6. **Legal pages built from config.** Use one set of legal components and fill in entity, MSO, emails, phone, state and venue from the config. **The build should fail if any legal field is null or still a placeholder.**

### Option B — a CMS (Sanity, Payload or similar) with the same schema

This takes more setup. It's worth it if clients will edit their own copy.

### Option C — one copy of the repo per client, plus a find-and-replace script

This is the fastest to start and the worst to maintain: fixes don't carry over to clients already set up.

## Dependencies that must hold for every client

- **Teleforms must share one domain.** The teleform pages pass the patient's answers through `sessionStorage` under `tf_intake` (42 reads, 24 writes). `/peptides/shop` also writes to it, so all of these pages must run on the same domain.
- **Checkout URL comes from MyOrbit.** It's built as `checkout.baseUrl + clientSlug + "/<product>"`, and each client gets its own slug from MyOrbit. The product slugs in use now are: bpc-157, cjc-ipamorelin, glo, klow, mots-c, nad, sermorelin, tb-500, wolverine.
- **Guides must match teleform categories.** Each guide's button links to `/getpeptides/<category>`. Cognitive and fitness have no teleform today, so those links break. A client's guide list must be a subset of its `teleformCategories`, or the guides need a fallback link.
- **Storage keys are Athos-branded.** `athos_partner`, `athos_protocol`, `athos_qm`, `athos_sf` and `athos_dm_rr` should be renamed to neutral keys, or prefixed with the client slug.
- **Legal pages link to each other by path.** The documents the MSO issues (Notice of Privacy Practices, medical consent) must name the client's MSO.
- **The admin CRM needs a backend.** It's data-bound (props `items` and `onUpdate`), so it's out of scope for v0.

## Target onboarding flow

1. Copy `client.example.json` to `clients/<slug>.json`, then fill in brand, company, MSO and the checkout slug.
2. Turn modules and categories on or off.
3. Collect the client's assets: logo and product images.
4. Build. Validation checks that:
   - required fields are set;
   - no placeholders are left;
   - every internal link points to a page that's included.
5. Deploy to the client's domain.

## Fix before templating (otherwise these copy into every client)

- **Placeholders live on the site now.**
  - Phone `(000) 000-0000` on 6 pages.
  - `[Registered Agent Address]` on 3 pages.
  - Blank governing-law state and venue in `/legal/partners/terms` and `/legal/partners/msa`.
- **Stray backslashes.** `\$` shows as literal text on these pages:
  - `/legal/terms-of-service`
  - `/legal/partners/terms`, `/legal/partners/msa`, `/legal/partners/fmv-certification`, `/legal/partners/compliance`, `/legal/partners/addendum-1`
  - `/partners/intake`
- **Two conflicting partner contracts.** `/legal/partners/agreement` and `/legal/partners/msa` differ on term, exit rules and governing law.
- **Product pages break the site's own rules.** They use claims that `/legal/partners/compliance` bans: "same active ingredient", "clinically proven", and trial data from branded drugs.
- **Broken links.**
  - `/privacy`, `/affiliate-disclosure`, `/partner-compliance` (linked from the partner legal pages).
  - `/legal/medical-weight-loss-consumer-bill-of-rights` (linked from `/legal`).
  - `/getpeptides/cognitive` and `/getpeptides/fitness` (linked from the guides).
- **A crash.** `/getpeptides/recovery/product-info` crashes on "Continue to health intake" because of hook order.
- **Temporary and Softr-hosted images.** Images on replicate.delivery are likely temporary, and images on softr-files go away when Softr is shut off.
- **Two domains.** The pages use both athoshealth.com and myathos.com. Pick one before it becomes a config default.
