# LocalLaunch (Astro)

Marketing site demo for **LocalLaunch**, showcasing local business website templates for a plumber, takeaway, and security company.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Pages

- `/` landing page
- `/plumber/` Leeds plumber demo (Netlify-ready form)
- `/takeaway/` Nonna's Italian Kitchen demo (Netlify-ready form)
- `/security/` SafeHome Alarms demo (Netlify-ready form)
- `/thanks/` post-submit thank you page

## GitHub Pages deployment

A workflow is provided in `.github/workflows/deploy.yml` that builds and deploys the generated `dist/` output to GitHub Pages on every push to `main`.

The Astro config sets `site` and `base` automatically from the `GITHUB_REPOSITORY` environment variable during CI so project-page deployments resolve correctly.

## Forms note

The HTML forms are configured with Netlify-compatible attributes (`data-netlify="true"`).

When hosted on GitHub Pages, forms will render but **will not submit to Netlify email handling**. To activate form processing/email notifications, migrate the deployed site to Netlify.
https://y2pm.github.io/locallaunch-demo/
