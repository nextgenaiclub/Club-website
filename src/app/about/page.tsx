import type React from "react"

export const metadata = {
  title: "About | Club",
  description: "Learn about our club and upcoming events",
}



export default function AboutPage() {
  return (
    <div
      className="dark"
      style={
        {
          ["--background" as any]: "oklch(0.12 0 0)",
          ["--foreground" as any]: "oklch(0.985 0 0)",
          ["--card" as any]: "oklch(0.16 0 0)",
          ["--muted" as any]: "oklch(0.20 0 0)",
          ["--border" as any]: "oklch(0.22 0 0)",
          ["--accent" as any]: "oklch(0.85 0.15 95)",
          ["--accent-foreground" as any]: "oklch(0.17 0 0)",
          ["--primary" as any]: "oklch(0.85 0.15 95)",
          ["--primary-foreground" as any]: "oklch(0.17 0 0)",
        } as React.CSSProperties
      }
    >
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
              <div>
                <p className="text-sm text-muted-foreground">// About Us</p>
                <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  ABOUT OUR <span className="text-accent">CLUB</span>
                </h1>

                <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
                  Building AI innovators through dedication, collaboration, and excellence. Join our community of students, researchers,
                  and AI enthusiasts committed to shaping the future of artificial intelligence.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl">
                  <img
                    src="/NextGen.png"
                    alt="NextGenAI Club Team Photo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-semibold">
                  Our <span className="text-accent">Mission</span>
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  Our club has been a cornerstone of AI innovation and excellence in the community. We provide
                  world-class learning opportunities, expert mentorship, and a supportive environment where AI enthusiasts of all
                  levels can thrive.
                </p>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  Our mission is to develop not just skilled AI practitioners, but well-rounded individuals who embody the
                  values of innovation, collaboration, and continuous learning. We believe in creating opportunities for everyone
                  to reach their full potential in the field of artificial intelligence.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">27</div>
                  <div className="mt-2 text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">Coming Soon</div>
                  <div className="mt-2 text-sm text-muted-foreground">AI Projects</div>
                </div>
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">Coming Soon</div>
                  <div className="mt-2 text-sm text-muted-foreground">Workshops Conducted</div>
                </div>
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">
                    {Math.max(0, (new Date().getFullYear() - 2025) * 12 + (new Date().getMonth() - 8))}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Months of Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Ready to <span className="text-accent">join us</span>?
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Become part of our AI innovation community. Explore membership options and start your journey in artificial intelligence today.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/projects"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium hover:bg-muted transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
