# Gautami Kharwar — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Structure

```
src/
  app/          Routes and pages (App Router)
  components/   Reusable UI components
  data/         Site content (resume.ts, projects.ts) — edit these to update copy
  lib/          Helper functions, utilities
  types/        Shared TypeScript types
public/
  images/       Photos, project screenshots
  resume/       Downloadable resume file(s)
```

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content

- Resume/bio/experience text lives in [`src/data/resume.ts`](src/data/resume.ts) — edit there rather than hardcoding in components.
- Case studies live in [`src/data/projects.ts`](src/data/projects.ts); put each project's images under `public/images/projects/<slug>/`.

## Deploy

Deploys cleanly to [Vercel](https://vercel.com/new) — connect the repo and it builds automatically on push.
