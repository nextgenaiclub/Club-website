import type React from "react"
import { Suspense } from "react"
import { ContactInfoCards } from "@/components/contact/contact-info-cards"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata = {
  title: "Contact | Club",
  description: "Get in touch with our club",
}

export default function ContactPage() {
  // Locally override semantic tokens for accent to a rich yellow and ensure readable foreground.
  // Wrapping in a .dark container applies the dark token set only to this page.
  return (
    <div
      className="dark"
      style={
        {
          ["--background" as any]: "oklch(0.12 0 0)", // near-black page background
          ["--foreground" as any]: "oklch(0.985 0 0)", // off-white text
          ["--card" as any]: "oklch(0.16 0 0)", // charcoal card
          ["--muted" as any]: "oklch(0.20 0 0)", // muted surfaces
          ["--border" as any]: "oklch(0.22 0 0)", // subtle borders
          ["--accent" as any]: "oklch(0.85 0.15 95)", // rich yellow
          ["--accent-foreground" as any]: "oklch(0.17 0 0)", // near-black on yellow
          ["--primary" as any]: "oklch(0.85 0.15 95)", // align primary with accent
          ["--primary-foreground" as any]: "oklch(0.17 0 0)",
        } as React.CSSProperties
      }
    >
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 pt-14 pb-8 md:pt-20 md:pb-10">
            <p className="text-sm text-muted-foreground">// Contact us</p>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              CONTACT <span className="text-accent">US</span>
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We’re here to help. Reach out for membership, events, or partnerships. Our team will get back to you
              promptly.
            </p>
          </div>

          {/* Decorative wave image (top) */}
          <div className="pointer-events-none select-none">
            <img src="/images/contact-hero.png" alt="" role="presentation" className="w-full opacity-80" />
          </div>
        </section>

        {/* Info band + GET IN TOUCH */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1fr,2fr] md:gap-10">
              <div className="flex items-start">
                <h2 className="text-4xl font-semibold leading-none tracking-tight md:text-5xl">
                  GET IN <span className="text-accent">TOUCH</span>
                </h2>
              </div>
              <Suspense fallback={<div className="h-24 rounded-lg bg-muted" />}>
                <ContactInfoCards />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Form + copy */}
        <section className="bg-card">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-2">
              <ContactForm />
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-semibold md:text-4xl">
                  CONTACT <span className="text-accent">US</span>
                </h3>
                <p className="mt-4 text-pretty text-muted-foreground">
                  Have questions about membership tiers, training schedules, or venue bookings? Send us a message and
                  we’ll respond within one business day.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li>
                    Preferred response time: <span className="text-foreground">Mon–Fri, 10am–6pm</span>
                  </li>
                  <li>
                    Urgent matters: <span className="text-foreground">Please call us directly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom strip: Let's talk */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-10 md:grid-cols-[1.5fr,1fr]">
              <div>
                <h3 className="text-balance text-4xl font-semibold md:text-5xl">
                  Let<span className="text-accent">&apos;</span>s talk
                </h3>
                <div className="mt-6 flex items-center gap-4">
                  {/* simple round icon links (placeholders) */}
                  <a
                    aria-label="LinkedIn"
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M6.94 8.5v10H3.88v-10h3.06zM5.41 3.5a1.77 1.77 0 1 1 0 3.53a1.77 1.77 0 0 1 0-3.53zM20.12 13.4v5.1h-3.05v-4.76c0-1.2-.43-2.02-1.52-2.02c-.83 0-1.32.56-1.54 1.1c-.08.2-.1.5-.1.79v4.88H10.8s.04-7.92 0-8.75h3.05v1.24c.4-.62 1.12-1.5 2.74-1.5c2 0 3.52 1.32 3.52 4.16z"
                      />
                    </svg>
                  </a>
                  <a
                    aria-label="Instagram"
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm11 2a1 1 0 0 1 1 1a1 1 0 1 1-1-1M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2.2A2.8 2.8 0 1 0 14.8 12A2.8 2.8 0 0 0 12 9.2"
                      />
                    </svg>
                  </a>
                  <a
                    aria-label="Twitter"
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M17.688 3H20.5l-6.15 7.031L21.5 21h-6.344l-4.957-6.094L4.5 21H1.688l6.586-7.52L2 3h6.469l4.473 5.688zM16.594 19h1.758L7.469 5h-1.91z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <address className="not-italic leading-6">
                  457 Waverly Ave, Manchester
                  <br />
                  Kentway 38495
                </address>
                <p className="mt-3">
                  support@yourclub.com
                  <br />
                  +123 456 7890
                </p>
                <div className="mt-5 flex gap-4 text-xs">
                  <a href="#" className="hover:text-accent underline underline-offset-4">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-accent underline underline-offset-4">
                    Terms &amp; Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
