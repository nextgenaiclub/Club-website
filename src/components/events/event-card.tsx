"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { memo, useMemo } from "react"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  spotsAvailable?: number
  participants?: number
  status?: string
  registrationLink?: string
  image: string
}

interface EventCardProps {
  event: Event
}

// Memoize category colors to prevent recreation on every render
const categoryColors: Record<string, string> = {
  Competition: "bg-accent/20 text-accent border-accent/30",
  Training: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Community: "bg-green-500/20 text-green-400 border-green-500/30",
  Development: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Fundraiser: "bg-pink-500/20 text-pink-400 border-pink-500/30",
}

export const EventCard = memo(function EventCard({ event }: EventCardProps) {
  // Memoize formatted date to prevent recalculation
  const formattedDate = useMemo(() => {
    const date = new Date(event.date)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }, [event.date])

  // Memoize participant/spots text
  const participantText = useMemo(() => {
    return event.status === "Completed" 
      ? `${event.participants} participants` 
      : `${event.spotsAvailable} spots available`
  }, [event.status, event.participants, event.spotsAvailable])

  // Handle image click to open full poster
  const handleImageClick = () => {
    if (event.image && event.image !== "/placeholder.svg") {
      window.open(event.image, '_blank');
    }
  }

  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-accent/50 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-background cursor-pointer" onClick={handleImageClick}>
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
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
            <span>{formattedDate}</span>
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
            <span>{participantText}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        {event.status === "Completed" ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-400 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Completed
          </span>
        ) : event.registrationLink ? (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4 transition-all"
          >
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
          </a>
        ) : (
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
        )}
      </CardFooter>
    </Card>
  )
})
