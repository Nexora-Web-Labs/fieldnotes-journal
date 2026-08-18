# Fieldnotes — Design & Code Journal

A blog built with React + Vite + React Router — real client-side routing,
not a hash-based simulation.

## Run it
```
npm install
npm run dev
```

## Features
- Real routes: `/` for the list, `/post/:slug` for each article
- Search and tag filtering on the post list
- Scroll-driven reading progress bar on post pages
- Related-posts module at the bottom of each article

## Deploying
Since this uses real routes (not hash routing), configure your host to
rewrite all paths to `index.html` (e.g. Netlify's `_redirects`, or
Vercel's default SPA handling) so deep links like `/post/some-slug`
resolve correctly.
