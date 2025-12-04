import { ProjectCard } from "@/components/project/project-card"
import type React from "react"

// Metadata for SEO
export const metadata = {
  title: "Projects | Club",
  description: "Explore our club projects and initiatives",
}

// AI Projects data - Coming Soon
const projects = [
  // Projects will be added as they are developed
  // Neural Canvas was an event, not a project
]

export default function ProjectsPage() {
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
            <p className="text-sm text-muted-foreground">// Our Projects</p>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-accent">PROJECTS</span>
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Discover our cutting-edge projects, research initiatives, and hands-on workshops. Each project reflects our
              commitment to advancing technology and developing practical skills.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            {projects.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Projects Coming Soon</h3>
                  <p className="text-muted-foreground mb-6">
                    We're working on exciting AI projects that will be showcased here. Stay tuned for innovative solutions and research initiatives from our talented team.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Get Notified
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-card/50">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Want to <span className="text-accent">contribute</span>?
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                We're always looking for passionate members to join our project teams. Get involved and make an impact.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}