# mrchinesehsk.github.io — MR CHINESE / مستر چاینیز

Trilingual website (Persian / English / Chinese) for the MR CHINESE Chinese-language school in Zanjan, Iran.

- **Live site:** https://mrchinesehsk.github.io
- Persian (RTL) at `/`, English at `/en/`, Chinese at `/zh/`

## Structure

| Path | What it is |
|---|---|
| `/website/` | Next.js source (App Router, Tailwind 4, static export) |
| `/website/content/fa.ts, en.ts, zh.ts` | **All site text** — edit these to change content |
| repo root (`index.html`, `en/`, `zh/`, `_next/`, …) | Built static output served by GitHub Pages |
| `CONTENT-TODO.md` | Information still missing or awaiting the founder's confirmation |

## How to update the site

1. Edit content in `website/content/*.ts` (or components in `website/components/`).
2. Build and copy the output to the repo root:

```
cd website
npm install
npm run build
cd ..
cp -r website/out/. .
```

3. Commit and push to `main`. GitHub Pages serves the repo root directly (`.nojekyll` disables Jekyll).
