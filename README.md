# Atharva Jadhav | Portfolio

Next.js App Router portfolio backed by Sanity, with a separate Sanity Studio in `sanity/`.

## Requirements

- Node.js 24 or newer
- npm 10 or newer
- Docker Desktop (optional)

Use the version in `.nvmrc` when using a Node version manager.

## Local Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Run the Sanity Studio separately:

```bash
npm --prefix sanity ci
npm --prefix sanity run dev
```

## Quality Checks

```bash
npm run check
npm run build
npm --prefix sanity run check
npm --prefix sanity run build
```

GitHub Actions runs these checks and production builds for pushes to `main` and pull requests.

## Docker

Build and run the production image:

```bash
docker build -t portfolio:latest .
docker run --rm -p 3000:3000 portfolio:latest
```

See [DOCKER_SETUP.md](DOCKER_SETUP.md) for development containers and deployment notes.

## Environment

Keep local values in `.env.local`; do not commit credentials. Public build-time values used by the browser should use the `NEXT_PUBLIC_` prefix. Sanity project and dataset configuration currently lives in `app/lib/sanity.ts` and `sanity/sanity.config.ts`.
