import Image from "next/image"
import type { ReactNode } from "react"

import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

/* ------------------------------------------------------------------ */
/* Placeholder content — see README.md → "Replacing the placeholder    */
/* content" for exactly what to swap for the real site.               */
/* ------------------------------------------------------------------ */

const NAME = "Jane Doe"
const EMAIL = "jane.doe@example.com"
const LOCATION = "Portland, Oregon"

const WORK = [
  {
    title: "Morning Light",
    category: "Portrait",
    src: "https://picsum.photos/seed/pw-morning-light/1000/1250",
    alt: "A portrait in soft morning light",
  },
  {
    title: "The Long Way Home",
    category: "Landscape",
    src: "https://picsum.photos/seed/pw-long-way-home/1000/1250",
    alt: "A quiet landscape at dusk",
  },
  {
    title: "Sea Wall",
    category: "Documentary",
    src: "https://picsum.photos/seed/pw-sea-wall/1000/1250",
    alt: "A documentary scene by the sea wall",
  },
  {
    title: "Sunday Market",
    category: "Documentary",
    src: "https://picsum.photos/seed/pw-sunday-market/1000/1250",
    alt: "Documentary photograph of a market",
  },
  {
    title: "Harbor",
    category: "Landscape",
    src: "https://picsum.photos/seed/pw-harbor/1000/1250",
    alt: "A still photograph of a harbor",
  },
  {
    title: "Still",
    category: "Portrait",
    src: "https://picsum.photos/seed/pw-still/1000/1250",
    alt: "A quiet studio portrait",
  },
]

const PRICING = [
  {
    session: "Portrait session",
    details:
      "Ninety minutes, one location, twenty final images delivered digitally.",
    rate: "From $350",
  },
  {
    session: "Editorial day",
    details: "Half-day or full-day coverage for print and digital publication.",
    rate: "From $1,200",
  },
  {
    session: "Documentary project",
    details:
      "Longer collaborations, shot over weeks or months, by arrangement.",
    rate: "On request",
  },
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a
            href="#main"
            className="font-heading text-sm font-semibold tracking-[0.2em] uppercase"
          >
            {NAME}
          </a>
          <nav className="flex items-center gap-6 text-sm" aria-label="Primary">
            <a
              href="#work"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
            <a
              href="#contact"
              className={
                buttonVariants({ variant: "outline", size: "sm" }) +
                " hidden sm:inline-flex"
              }
            >
              Get in touch
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Introduction */}
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pt-20 pb-24 md:grid-cols-12 md:pt-32 md:pb-32">
          <div className="flex flex-col justify-center gap-8 md:col-span-7">
            <SectionLabel>Nice to meet you</SectionLabel>
            <div className="flex flex-col gap-5">
              <h1 className="max-w-xl text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
                I photograph the quiet corners of everyday life.
              </h1>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                I&apos;m {NAME}, a photographer based in {LOCATION}. I work with
                natural light and unhurried sessions — portraits, landscape, and
                long-form documentary projects.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              <span>Portrait</span>
              <span aria-hidden="true">·</span>
              <span>Landscape</span>
              <span aria-hidden="true">·</span>
              <span>Documentary</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#work" className={buttonVariants()}>
                View my work
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className={buttonVariants({ variant: "ghost" })}
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <figure className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
              <Image
                src="https://picsum.photos/seed/pw-hero-portrait/1000/1250"
                alt="A portrait placeholder image"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <figcaption className="mt-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                Self portrait — 2026
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-24 border-t border-border/70">
          <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4 md:mb-16">
              <div className="flex flex-col gap-3">
                <SectionLabel>01 — Selected work</SectionLabel>
                <h2 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
                  A few recent photographs
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                A small selection from recent series. More to come as the
                archive grows.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {WORK.map((item) => (
                <figure key={item.title} className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium tracking-wide">
                      {item.title}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                      {item.category}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="scroll-mt-24 border-t border-border/70 bg-muted/40"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
            <div className="mb-12 flex flex-col gap-3 md:mb-16">
              <SectionLabel>02 — Sessions &amp; rates</SectionLabel>
              <h2 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
                Pricing
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Rates are a starting point — every project is different, so
                please ask. A thirty percent deposit confirms the date.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 pr-6 font-mono text-[11px] font-normal tracking-[0.25em] text-muted-foreground uppercase">
                      Session
                    </th>
                    <th className="hidden py-4 pr-6 font-mono text-[11px] font-normal tracking-[0.25em] text-muted-foreground uppercase sm:table-cell">
                      What&apos;s included
                    </th>
                    <th className="py-4 font-mono text-[11px] font-normal tracking-[0.25em] text-muted-foreground uppercase">
                      Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.map((row) => (
                    <tr
                      key={row.session}
                      className="border-b border-border/70 align-top last:border-b-0"
                    >
                      <td className="py-6 pr-6 text-base font-medium">
                        {row.session}
                        <span className="mt-2 block text-sm leading-relaxed font-normal text-muted-foreground sm:hidden">
                          {row.details}
                        </span>
                      </td>
                      <td className="hidden py-6 pr-6 text-sm leading-relaxed text-muted-foreground sm:table-cell">
                        {row.details}
                      </td>
                      <td className="py-6 text-right text-sm whitespace-nowrap text-muted-foreground sm:text-left sm:whitespace-normal">
                        {row.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Travel outside {LOCATION} is billed at cost.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-border/70"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-6 py-20 md:py-32">
            <SectionLabel>03 — Contact</SectionLabel>
            <div className="flex flex-col gap-6">
              <h2 className="max-w-2xl text-3xl leading-[1.08] font-medium tracking-tight text-balance md:text-5xl">
                Let&apos;s make photographs together.
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                I&apos;m available for portrait, editorial, and documentary
                work. Send an email and I&apos;ll get back to you within two
                working days.
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex flex-wrap items-center gap-3 border-b border-foreground/30 pb-1 text-xl font-medium tracking-tight transition-colors hover:border-foreground md:text-3xl"
            >
              {EMAIL}
              <span
                aria-hidden="true"
                className="text-base text-muted-foreground transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Based in {LOCATION} · Available worldwide
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {NAME} · Photography
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Placeholder images via picsum.photos
          </p>
        </div>
      </footer>
    </div>
  )
}
