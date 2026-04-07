# YogaBeauchef.github.io

Website for Yoga Beauchef.

## Local Development

Requirements:

- Node.js 22.12.0+ recommended
- npm

Install dependencies:

```bash
npm install
```

Start the Astro dev server:

```bash
npm run dev
```

Astro will print a local URL, typically `http://localhost:4321`.

## Production Build

Create the static site in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Repository Structure

Main Astro application files:

- `src/pages/`:
  Route entrypoints for pages.
  Includes the homepage, article index, and static content pages.
- `src/pages/posts/[year]/[month]/[day]/[slug].astro`:
  Dynamic route for blog/event posts using the same dated permalink structure as the old site.
- `src/content/posts/`:
  Markdown content for posts and event articles.
- `src/layouts/`:
  Shared Astro layouts.
- `src/components/`:
  Reusable UI pieces such as the navbar, header, footer, and post list.
- `src/utils/`:
  Site metadata and helpers like date formatting and post URL generation.
- `public/`:
  Static assets copied directly into the final site.
  Includes CSS, JavaScript, images, fonts, favicons, and standalone static files.

Project configuration:

- `package.json`:
  npm scripts and project dependencies.
- `astro.config.mjs`:
  Astro configuration.
- `.gitignore`:
  Ignores generated and dependency folders such as `node_modules/`, `.astro/`, and `dist/`.
