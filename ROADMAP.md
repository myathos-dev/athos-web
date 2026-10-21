# Roadmap

Website work ahead, taken from "Fix before templating" in [templates/README.md](templates/README.md) and "Still pointing at Softr" in the [README](README.md).

## Fix bugs
- [ ] `/getpeptides/recovery/product-info` crashes on "Continue to health intake" (hook order)
- [ ] Broken links: `/privacy`, `/affiliate-disclosure`, `/partner-compliance`, `/legal/medical-weight-loss-consumer-bill-of-rights`, `/getpeptides/cognitive`, `/getpeptides/fitness`
- [ ] Literal `\$` on `/legal/terms-of-service`, the partner legal pages and `/partners/intake`

## Fix content
- [ ] Replace placeholders: phone `(000) 000-0000` on 6 pages, `[Registered Agent Address]` on 3 pages, blank governing-law state and venue in `/legal/partners/terms` and `/legal/partners/msa`
- [ ] Settle the two conflicting partner contracts (`/legal/partners/agreement` vs `/legal/partners/msa`)
- [ ] Bring product page claims in line with `/legal/partners/compliance`
- [ ] Pick one domain (athoshealth.com or myathos.com)

## Move off Softr and temporary hosts
- [ ] Self-host the `sales/clinic/signup` logo (now on `assets.softr-files.com`)
- [ ] Self-host product images now on `replicate.delivery` and `assets.softr-files.com`
- [ ] Replace the Unsplash placeholders on `core/men` and the product page heroes with product photos

## Client template
- [ ] Choose an approach from `templates/README.md` (option A, B or C) and build it
