import type React from "react"
import { EventCard } from "@/components/events/event-card"

export const metadata = {
  title: "About | Club",
  description: "Learn about our club and upcoming events",
}

// Dummy upcoming events data
const upcomingEvents = [
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
]

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
            <p className="text-sm text-muted-foreground">// About Us</p>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              ABOUT OUR <span className="text-accent">CLUB</span>
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Building champions through dedication, teamwork, and excellence. Join our community of athletes, coaches,
              and supporters committed to achieving greatness.
            </p>
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
                  Founded in 1998, our club has been a cornerstone of athletic excellence in the community. We provide
                  world-class training facilities, expert coaching, and a supportive environment where athletes of all
                  levels can thrive.
                </p>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  Our mission is to develop not just skilled athletes, but well-rounded individuals who embody the
                  values of sportsmanship, perseverance, and teamwork. We believe in creating opportunities for everyone
                  to reach their full potential.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">25+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Expert Coaches</div>
                </div>
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">15</div>
                  <div className="mt-2 text-sm text-muted-foreground">Championships Won</div>
                </div>
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <div className="text-4xl font-bold text-accent">27</div>
                  <div className="mt-2 text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="border-t border-border bg-card/30 py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">// What's Next</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                UPCOMING <span className="text-accent">EVENTS</span>
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
                Stay connected with our community through competitions, training sessions, and social gatherings.
                Register early to secure your spot.
              </p>
            </div>

            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div> */}
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
                Become part of our winning tradition. Explore membership options and start your journey today.
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
