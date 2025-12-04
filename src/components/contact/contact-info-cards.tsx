import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react"

export function ContactInfoCards() {
  const items = [
    {
      title: "Office Location",
      body: "Vishwakarma University\nKondhwa Budruk, Pune, Maharashtra 411048",
      link: "Get Directions",
      href: "https://maps.google.com/?q=Vishwakarma+University+Kondhwa+Budruk+Pune+Maharashtra+411048",
      icon: MapPin,
      showLink: true,
    },
    {
      title: "Working Hours",
      body: "Sun–Fri: 10:00am–06:00pm\nSat: 10:00am–02:00pm",
      icon: Clock,
      showLink: false,
    },
    {
      title: "Communication",
      body: "+91 74478 67557\nnextgenai.club@vupune.ac.in",
      icon: Phone,
      showLink: false,
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Card key={item.title} className="bg-card/90 border-border/60 hover:border-accent/50 transition-colors">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted/60 text-accent">
                <Icon size={18} aria-hidden="true" />
              </div>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground whitespace-pre-line">
              {item.body}
              {item.showLink && (
                <a 
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-4 inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors cursor-pointer"
                >
                  <span className="text-sm">{item.link}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
