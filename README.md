# Jane Doe — Photography (placeholder portfolio)

A personal website for a photographer, built with [Next.js](https://nextjs.org) and
[shadcn/ui](https://ui.shadcn.com), scaffolded from the shadcn Next.js template
(`pnpm dlx shadcn@latest init --preset b5rR41Mtnc --template next --pointer`).

All names, copy, prices, and photographs on this site are **placeholders** — see
[Replacing the placeholder content](#replacing-the-placeholder-content) for the
checklist.

## Running the site

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

## Structure

| Path                    | What it is                                              |
| ----------------------- | ------------------------------------------------------- |
| `app/page.tsx`          | The whole portfolio page (single page: Intro, Work, Pricing, Contact) |
| `app/layout.tsx`        | Root layout, fonts, metadata                            |
| `app/globals.css`       | Theme tokens (shadcn base-lyra preset) and base styles  |
| `components/ui/button.tsx` | shadcn button component                              |
| `next.config.ts`        | Image domains (`picsum.photos`, `fastly.picsum.photos`, `images.unsplash.com`) |

## Design

- **Feel**: refined and understated — monochrome stone palette, generous spacing,
  thin rules, quiet typography, a single muted accent (the preset&apos;s orange) used sparingly.
- **Fonts** (the preset&apos;s choice, applied consistently):
  - **Outfit** — body text and most headings (`--font-sans`)
  - **Oxanium** — the wordmark, section headings, and small-caps labels (`--font-heading`)
  - **Geist Mono** — captions, labels, and meta text (`--font-mono`)
- **Sections**: Header (sticky) → Introduction (hero) → My work (gallery grid) →
  Pricing (a plain table — fits the understated style and scans well) → Contact
  (prominent email link) → Footer.
- Dark mode follows the system; toggle light/dark with the sun/moon button in the
  header (the `d` key works too).

## Replacing the placeholder content

Everything below is placeholder and should be swapped for real content before the
site goes live.

### 1. Name and email

In `app/page.tsx` (top of the file):

| Constant  | Current placeholder  | Replace with          |
| --------- | -------------------- | --------------------- |
| `NAME`    | `Jane Doe`           | Your name             |
| `EMAIL`   | `jane.doe@example.com` | Your email address  |
| `LOCATION`| `Portland, Oregon`   | Your location         |

The email is threaded through the header CTA and the Contact section, so a change
updates the whole site.

### 2. Copy

- `app/page.tsx` — the hero headline, intro paragraph, work captions (`WORK` array),
  pricing rows (`PRICING` array), and contact paragraph are all sample text written
  for the placeholder persona. Rewrite them in your own voice.
- `app/layout.tsx` — the `<title>` and `meta description` reference `Jane Doe`.

### 3. Photographs

Every photo on the page is a placeholder served from
[picsum.photos](https://picsum.photos) (stable per-seed URLs, no account needed).
Replace them with your own files:

| Current image (seed URL in `app/page.tsx`) | Where it appears            | Suggested size / crop |
| ------------------------------------------ | --------------------------- | --------------------- |
| `picsum.photos/seed/pw-hero-portrait/1000/1250` | Hero, right column    | Portrait, 4:5          |
| `picsum.photos/seed/pw-morning-light/1000/1250` | Work grid item 1      | 4:5                    |
| `picsum.photos/seed/pw-long-way-home/1000/1250` | Work grid item 2      | 4:5                    |
| `picsum.photos/seed/pw-sea-wall/1000/1250`      | Work grid item 3      | 4:5                    |
| `picsum.photos/seed/pw-sunday-market/1000/1250` | Work grid item 4      | 4:5                    |
| `picsum.photos/seed/pw-harbor/1000/1250`        | Work grid item 5      | 4:5                    |
| `picsum.photos/seed/pw-still/1000/1250`         | Work grid item 6      | 4:5                    |

To use local files: drop them in `public/` and change the matching `src` in the
`WORK` array (and the hero `<Image>`) to `/your-photo.jpg`. Add your own hosts to
`next.config.ts` → `images.remotePatterns` if you host images elsewhere.

### 4. Pricing

The three rates in the `PRICING` array are placeholders (`From $350` etc.). Set the
values, inclusions, and the deposit note you actually use.

### 5. Social / links

The site currently links only the email. Add your social profiles anytime — e.g. a
link beside the email in the Contact section.

## Fonts

Loaded via `next/font/google` in `app/layout.tsx` (Outfit, Oxanium, Geist Mono).
Downloaded at build time; if you remove them, also remove the corresponding
`--font-*` variables in `app/layout.tsx` and `app/globals.css`.
