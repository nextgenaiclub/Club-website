"use client"

import type React from "react"
import { useState, useMemo, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter } from "lucide-react"
import { EventCard } from "@/components/events/event-card"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedStatus, setSelectedStatus] = useState<string>("All Events")

  // Events organized by status
  const pastEvents = [
    {
      id: 1,
      title: "Neural Canvas",
      description:
        "Successfully completed poster making competition. Students showcased their creativity and digital design skills using Figma, exploring the power of AI in creative innovation with the theme 'From Code to Creativity: The AI Journey'.",
      date: "2024-09-16",
      time: "1:00 PM - 3:00 PM",
      location: "SAP LAB, Vishwakarma University",
      category: "Competition",
      participants: 25,
      status: "Completed",
      image: "/neural-canvas-poster.jpg",
    },
  ]

  const upcomingEvents: typeof pastEvents = [
    // Events will be added as they are planned
  ]

  const activeEvents: typeof pastEvents = [
    // Currently no active events - will be added as needed
  ]

  // Combine all events for filtering
  const allEvents = [...pastEvents, ...upcomingEvents, ...activeEvents]

  const categories = ["All", "Competition", "Training", "Community", "Workshop", "Research"]
  const eventStatuses = ["All Events", "Upcoming", "Active", "Past"]

  // Memoize event collections for better performance
  const eventsByStatus = useMemo(() => ({
    "Upcoming": upcomingEvents,
    "Active": activeEvents,
    "Past": pastEvents,
    "All Events": allEvents
  }), [])

  // Memoize filtered events to prevent unnecessary recalculations
  const filteredEvents = useMemo(() => {
    const statusEvents = eventsByStatus[selectedStatus as keyof typeof eventsByStatus] || allEvents
    return selectedCategory === "All"
      ? statusEvents
      : statusEvents.filter(event => event.category === selectedCategory)
  }, [selectedStatus, selectedCategory, eventsByStatus, allEvents])



  // Optimize button click handlers
  const handleStatusChange = useCallback((status: string) => {
    setSelectedStatus(status)
    // Reset category to "All" when switching status for better UX
    if (selectedCategory !== "All") {
      setSelectedCategory("All")
    }
  }, [selectedCategory])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  return (
    <div
      className="dark min-h-screen"
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
            <p className="text-sm text-muted-foreground">// Events Calendar</p>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              UPCOMING <span className="text-accent">EVENTS</span>
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Join us for <span className="text-accent">AI</span> workshops, hackathons, community meetups, and research presentations. Register early to secure your
              spot at our exciting upcoming events.
            </p>
          </div>
        </section>



        {/* Status and Category Filters */}
        <section className="border-b border-border py-6">
          <div className="mx-auto max-w-6xl px-4">
            {/* Status Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {eventStatuses.map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusChange(status)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-150 ${selectedStatus === status
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-muted-foreground hover:bg-accent/20 border border-border"
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
            {/* Category Filter */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <Filter className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ${selectedCategory === category
                      ? "bg-accent/20 text-accent border border-accent"
                      : "bg-background text-muted-foreground hover:bg-accent/10 hover:text-foreground border border-border"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 min-h-[400px]">
                {filteredEvents.map((event) => (
                  <EventCard key={`${selectedStatus}-${event.id}`} event={event} />
                ))}
              </div>
            ) : selectedStatus === "Upcoming" ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Events Coming Soon</h3>
                  <p className="text-muted-foreground mb-6">
                    We're planning exciting <span className="text-accent">AI</span> events and workshops that will be announced here. Stay tuned for innovative learning opportunities and networking events.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/L6LzenOpW8GG44q1fHjM4s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Get Notified
                  </a>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-background p-12 text-center min-h-[400px] flex items-center justify-center">
                <p className="text-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Don't miss <span className="text-accent">out</span>
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Stay updated with our latest events and activities. Contact us to learn more about upcoming
                opportunities.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
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
