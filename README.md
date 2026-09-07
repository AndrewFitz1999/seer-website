# SEER Health

Marketing site for SEER Health's Metabolic Digital Twin (MDT+) platform. Next.js (App Router) + Tailwind CSS v4, statically exported.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a static export to `out/`, ready to deploy to any static host.

## Structure

- `app/` — root layout, global styles, the single page (`page.tsx`) that assembles every section
- `components/` — one component per site section (Hero, Problem, DigitalTwin, Mission, Team, Support, Contact), plus shared bits (`Header`, `Footer`, `Mark`, `RevealSection`)
