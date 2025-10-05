import { ProjectCard } from "@/components/project/project-card"
import type React from "react"

// Metadata for SEO
export const metadata = {
  title: "Projects | Club",
  description: "Explore our club projects and initiatives",
}

// Dummy project data
const projects = [
  // ... (unchanged, your project data is fine)
  {
    id: 1,
    title: "Youth Training Program",
    description:
      "Comprehensive training initiative for young athletes aged 12-18, focusing on skill development, teamwork, and competitive preparation.",
    category: "Training",
    status: "Active",
    image: "/youth-sports-training-program.jpg",
    startDate: "Jan 2025",
  },
  // ... rest of the projects
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
              CLUB <span className="text-accent">PROJECTS</span>
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Discover our ongoing initiatives, community programs, and facility improvements. Each project reflects our
              commitment to excellence and member development.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
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