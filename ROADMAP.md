# Roadmap

Two phases: finish migrating off Softr, then expand each area. Everything is mock data and mock content.

## Phase 1: Migrate

Taken from "Fix before templating" in [templates/README.md](templates/README.md) and "Still pointing outside the app" in the [README](README.md).

### Done
- [x] Convert all 61 pages from Softr exports into React blocks
- [x] Serve every page from one app, with an index of all pages
- [x] Block check that runs every block on its own

### Fix bugs
- [ ] `/getpeptides/recovery/product-info` crashes on "Continue to health intake" (hook order)
- [ ] Broken links: `/privacy`, `/affiliate-disclosure`, `/partner-compliance`, `/legal/medical-weight-loss-consumer-bill-of-rights`, `/getpeptides/cognitive`, `/getpeptides/fitness`
- [ ] Literal `\$` on `/legal/terms-of-service`, the partner legal pages and `/partners/intake`

### Fix content
- [ ] Replace placeholders: phone `(000) 000-0000` on 6 pages, `[Registered Agent Address]` on 3 pages, blank governing-law state and venue in `/legal/partners/terms` and `/legal/partners/msa`
- [ ] Settle the two conflicting partner contracts (`/legal/partners/agreement` vs `/legal/partners/msa`)
- [ ] Bring product page claims in line with `/legal/partners/compliance`
- [x] Use one demo domain for the mock brand (`athos.example`)

### Move off Softr and outside services
- [ ] Self-host the `sales/clinic/signup` logo (now on `assets.softr-files.com`)
- [ ] Self-host product images now on `replicate.delivery` and `assets.softr-files.com`
- [ ] Replace the Unsplash placeholders on `core/men` and the product page heroes
- [x] Point checkout and booking links at mock placeholders

## Phase 2: Expand each area

### Internal CRM (`/admin/sales`)
- [ ] Backend with mock leads for the sales hub, lead queue and leads dashboard (the pages take data as props and have no data source yet)
- [ ] Lead assignment, notes and statuses saved end to end
- [ ] Sign-in with rep and admin roles

### Sales tool (partners, clinic, enterprise)
- [ ] Partner intake, clinic signup and enterprise signup save their submissions
- [ ] Build the client templates: choose an approach from `templates/README.md` (option A, B or C), then set up a mock client from one config

### Patient education
- [ ] Grow the product pages and guides into an education library clients can give their patients
- [ ] Connect the teleform flows to the education pages
- [ ] Let each client choose which education pages their patients see

## Open decisions
- [ ] How clients and their patients sign in
- [ ] Where CRM and intake data are stored
