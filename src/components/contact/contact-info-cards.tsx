import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react"

export function ContactInfoCards() {
  const items = [
    {
      title: "Office Location",
      body: "4800 Park Ave, Midtown,\nNew Mexico 3854",
      link: "Direction",
      icon: MapPin,
    },
    {
      title: "Working Hours",
      body: "Sun–Fri: 10:00am–06:00pm\nSat: 10:00am–02:00pm",
      link: "Learn more",
      icon: Clock,
    },
    {
      title: "Communication",
      body: "+123 456 7891\nclub@yourclub.com",
      link: "Support",
      icon: Phone,
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
              <div className="mt-4 inline-flex items-center gap-1 text-accent">
                <span className="text-sm">{item.link}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
