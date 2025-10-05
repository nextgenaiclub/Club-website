import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  spotsAvailable: number
  image: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const categoryColors: Record<string, string> = {
    Competition: "bg-accent/20 text-accent border-accent/30",
    Training: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Community: "bg-green-500/20 text-green-400 border-green-500/30",
    Development: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Fundraiser: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  }

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <Card className="group overflow-hidden border-border/60 bg-card/90 hover:border-accent/50 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className={categoryColors[event.category]}>
            {event.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="space-y-2">
        <h3 className="text-xl font-semibold leading-tight group-hover:text-accent transition-colors">{event.title}</h3>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar size={14} aria-hidden="true" className="text-accent" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock size={14} aria-hidden="true" className="text-accent" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={14} aria-hidden="true" className="text-accent" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Users size={14} aria-hidden="true" className="text-accent" />
            <span>{event.spotsAvailable} spots available</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4 transition-all">
          Register Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14m-7-7l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </CardFooter>
    </Card>
  )
}
