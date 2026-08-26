# sentinel-ai.github.io

Marketing site for Sentinel AI, built as a bilingual (EN/ZH) Jekyll site for
GitHub Pages.

## Structure

```
en/            English pages (/en/, /en/product/, /en/aal/, /en/use-cases/, /en/team/, /en/company/, /en/contact/)
zh/            Chinese equivalents at the same paths under /zh/
_layouts/      Shared page layout (default.html)
_data/i18n.yml Nav labels and shared UI strings per language
assets/        CSS, JS
index.html     Root redirect → /en/ or /zh/ based on browser language
```

Every page's front matter sets `lang`, `nav` (for header highlighting) and
`permalink`. Add a new page by copying the closest existing one in `en/` or
`zh/` and updating its front matter + content.

## Before going live

- Contact forms and mailto links point to `sentinelai268@gmail.com`
  (set in `en/contact.html` and `zh/contact.html`) — update there if the
  inbox changes.
- Confirm `url` in `_config.yml` matches the actual GitHub Pages domain.
- Review `_data/i18n.yml` → `footer_note` — it mirrors the whitepaper's
  disclaimer that AAL, milestones and business model are unvalidated
  hypotheses. Keep it until claims are backed by real customer data.

## Local development

Requires Ruby + Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/en/.

## Deploying

Push to the `main` branch of a repo named `sentinel-ai.github.io` under the
`sentinel-ai-security` GitHub org/account. GitHub Pages will build the
Jekyll site automatically — no separate build step or `gh-pages` branch is
needed.
