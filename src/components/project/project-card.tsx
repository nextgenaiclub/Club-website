import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  category: string
  status: string
  image: string
  startDate: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors: Record<string, string> = {
    Active: "bg-accent/20 text-accent border-accent/30",
    "In Progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Upcoming: "bg-muted text-muted-foreground border-border",
  }

  return (
    <Link href={`/projects/${project.id}`} className="block">
      <Card className="group overflow-hidden border-border/60 bg-card/90 hover:border-accent/50 transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className={statusColors[project.status]}>
              {project.status}
            </Badge>
          </div>
        </div>

        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="bg-muted/60 text-foreground border-border/60">
              {project.category}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar size={14} aria-hidden="true" />
              <span>{project.startDate}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold leading-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </CardContent>

        <CardFooter>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:underline underline-offset-4">
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
