"use client"

import type React from "react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter } from "lucide-react"
import { EventCard } from "@/components/events/event-card"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Expanded dummy events data
  const allEvents = [
    {
      id: 1,
      title: "Regional Championship Finals",
      description:
        "Join us for the season finale as our top teams compete for the regional championship title. Spectators welcome.",
      date: "2025-04-15",
      time: "2:00 PM - 6:00 PM",
      location: "Main Arena",
      category: "Competition",
      spotsAvailable: 120,
      image: "/championship-trophy.png",
    },
    {
      id: 2,
      title: "Youth Skills Workshop",
      description:
        "Interactive training session for ages 10-16 focusing on fundamental techniques, strategy, and team coordination.",
      date: "2025-04-08",
      time: "10:00 AM - 12:00 PM",
      location: "Training Center",
      category: "Training",
      spotsAvailable: 30,
      image: "/youth-sports-training-program.jpg",
    },
    {
      id: 3,
      title: "Community Open Day",
      description:
        "Free event for families to tour our facilities, meet coaches, and learn about membership options. Refreshments provided.",
      date: "2025-04-20",
      time: "11:00 AM - 4:00 PM",
      location: "Club Grounds",
      category: "Community",
      spotsAvailable: 200,
      image: "/community-sports-event.jpg",
    },
    {
      id: 4,
      title: "Advanced Coaching Seminar",
      description:
        "Professional development session for coaches featuring guest speakers and hands-on tactical demonstrations.",
      date: "2025-04-12",
      time: "6:00 PM - 9:00 PM",
      location: "Conference Room",
      category: "Development",
      spotsAvailable: 25,
      image: "/sports-coach-training-session.jpg",
    },
    {
      id: 5,
      title: "Annual Fundraiser Gala",
      description:
        "Elegant evening event supporting our scholarship fund. Includes dinner, entertainment, and silent auction.",
      date: "2025-05-03",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom",
      category: "Fundraiser",
      spotsAvailable: 150,
      image: "/scholarship-award-ceremony.jpg",
    },
    {
      id: 6,
      title: "Summer Training Camp",
      description:
        "Intensive week-long program for serious athletes looking to elevate their game. Includes meals and training gear.",
      date: "2025-06-15",
      time: "9:00 AM - 5:00 PM",
      location: "Training Complex",
      category: "Training",
      spotsAvailable: 40,
      image: "/modern-sports-facility-interior.jpg",
    },
    {
      id: 7,
      title: "Inter-Club Tournament",
      description:
        "Competitive tournament featuring teams from neighboring clubs. Multiple divisions and age categories available.",
      date: "2025-04-25",
      time: "8:00 AM - 6:00 PM",
      location: "Main Arena",
      category: "Competition",
      spotsAvailable: 80,
      image: "/championship-trophy.png",
    },
    {
      id: 8,
      title: "Beginner's Bootcamp",
      description:
        "Perfect for newcomers! Learn the basics in a supportive environment with our experienced coaching staff.",
      date: "2025-04-18",
      time: "5:00 PM - 7:00 PM",
      location: "Training Center",
      category: "Training",
      spotsAvailable: 35,
      image: "/youth-sports-training-program.jpg",
    },
    {
      id: 9,
      title: "Family Fun Day",
      description:
        "Bring the whole family for games, activities, face painting, and BBQ. Free entry for all members and guests.",
      date: "2025-05-10",
      time: "12:00 PM - 5:00 PM",
      location: "Club Grounds",
      category: "Community",
      spotsAvailable: 300,
      image: "/community-sports-event.jpg",
    },
    {
      id: 10,
      title: "Leadership Development Workshop",
      description:
        "Build leadership skills for team captains and senior members. Focus on communication, motivation, and strategy.",
      date: "2025-04-22",
      time: "3:00 PM - 6:00 PM",
      location: "Conference Room",
      category: "Development",
      spotsAvailable: 20,
      image: "/sports-coach-training-session.jpg",
    },
    {
      id: 11,
      title: "Charity Marathon",
      description:
        "Run for a cause! All proceeds support local youth sports programs. Multiple distance options available.",
      date: "2025-05-18",
      time: "7:00 AM - 12:00 PM",
      location: "City Park",
      category: "Fundraiser",
      spotsAvailable: 250,
      image: "/scholarship-award-ceremony.jpg",
    },
    {
      id: 12,
      title: "Elite Performance Camp",
      description:
        "High-intensity training for competitive athletes. Guest coaches from professional teams. Limited spots.",
      date: "2025-06-22",
      time: "8:00 AM - 4:00 PM",
      location: "Training Complex",
      category: "Training",
      spotsAvailable: 15,
      image: "/modern-sports-facility-interior.jpg",
    },
  ]

  const categories = ["All", "Competition", "Training", "Community", "Development", "Fundraiser"]

  const filteredEvents =
    selectedCategory === "All" ? allEvents : allEvents.filter((event) => event.category === selectedCategory)

  // Get the next featured event (earliest date)
  const featuredEvent = allEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]

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
            <p className="text-sm text-muted-foreground">// Events Calendar</p>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              UPCOMING <span className="text-accent">EVENTS</span>
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Join us for competitions, training sessions, community gatherings, and more. Register early to secure your
              spot at our exciting upcoming events.
            </p>
          </div>
        </section>

        {/* Featured Event */}
        {featuredEvent && (
          <section className="border-b border-border bg-card/30 py-10 md:py-14">
            <div className="mx-auto max-w-6xl px-4">
              <div className="mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="text-sm font-medium text-accent">Next Event</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
                  <img
                    src={featuredEvent.image || "/placeholder.svg"}
                    alt={featuredEvent.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit bg-accent/20 text-accent border-accent/30">
                    {featuredEvent.category}
                  </Badge>
                  <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{featuredEvent.title}</h2>
                  <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">{featuredEvent.description}</p>

                  <div className="mt-6 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} className="text-accent" aria-hidden="true" />
                      <span>
                        {new Date(featuredEvent.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path
                          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>

                  <button className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="border-b border-border py-6">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <Filter className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-card/50 text-muted-foreground hover:bg-muted hover:text-foreground"
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
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card/50 p-12 text-center">
                <p className="text-muted-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-card/30">
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
