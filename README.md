# QBA Lighthouse

Automated nightly Lighthouse audits for [queerbadmintonamsterdam.nl](https://www.queerbadmintonamsterdam.nl), powered by [Unlighthouse](https://unlighthouse.dev).

## What it does

A GitHub Actions workflow runs every night at 3am UTC and crawls up to 20 pages of the site, scoring each against these budgets:

| Category | Minimum score |
|---|---|
| Performance | 65 |
| Accessibility | 90 |
| Best practices | 80 |
| SEO | 80 |

If any page falls below a budget, the workflow fails. Reports are uploaded as artifacts and kept for 30 days.

## Running locally

```bash
npx unlighthouse-ci --site https://www.queerbadmintonamsterdam.nl --config unlighthouse.config.ts
```

Results are written to `.unlighthouse/` (gitignored).
