import type React from "react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Target, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Extended dummy project data with full details


export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  const statusColors: Record<string, string> = {
    Active: "bg-accent/20 text-accent border-accent/30",
    "In Progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Upcoming: "bg-muted text-muted-foreground border-border",
  }

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
      <main className="bg-background text-foreground min-h-screen">
        {/* Back Navigation */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Hero Section with Image */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-[21/9] overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 md:pb-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className={statusColors[project.status]}>
                    {project.status}
                  </Badge>
                  <Badge variant="secondary" className="bg-muted/60 text-foreground border-border/60">
                    {project.category}
                  </Badge>
                </div>
                <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                  <Calendar size={24} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <p className="text-lg font-semibold">{project.startDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                  <Users size={24} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Participants</p>
                  <p className="text-lg font-semibold">{project.participants}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                  <Target size={24} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-lg font-semibold">{project.status}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-3">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Project <span className="text-accent">Overview</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </div>

                {/* Goals */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Project <span className="text-accent">Goals</span>
                  </h2>
                  <ul className="space-y-3">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                        <span className="text-muted-foreground leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Milestones */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Project <span className="text-accent">Milestones</span>
                  </h2>
                  <div className="space-y-4">
                    {project.milestones.map((milestone, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-accent/30 transition-colors"
                      >
                        <div
                          className={`mt-1 h-5 w-5 rounded-full border-2 flex-shrink-0 ${
                            milestone.completed ? "bg-accent border-accent" : "border-border bg-background"
                          }`}
                          aria-hidden="true"
                        >
                          {milestone.completed && (
                            <svg viewBox="0 0 20 20" fill="none" className="h-full w-full">
                              <path
                                d="M6 10l2 2 6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-accent-foreground"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{milestone.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Get Involved Card */}
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Get <span className="text-accent">Involved</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Interested in contributing to this project? We welcome volunteers, sponsors, and partners.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Quick Info Card */}
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium mt-1">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="font-medium mt-1">{project.status}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Started</dt>
                      <dd className="font-medium mt-1">{project.startDate}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Team Size</dt>
                      <dd className="font-medium mt-1">{project.participants} members</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-card/50">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Explore More <span className="text-accent">Projects</span>
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Check out our other initiatives and see how you can get involved.
              </p>
              <div className="mt-6">
                <Link
                  href="/projects"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium hover:bg-muted hover:border-accent/50 transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
