"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Hands-on Labs",
    desc: "Weekly, project-first workshops using real datasets and modern AI tools.",
  },
  {
    title: "Project Squads",
    desc: "Small teams ship demos in 2–4 weeks with mentor guidance.",
  },
  {
    title: "Career Mentors",
    desc: "Resume reviews, mock interviews, and referral-ready portfolios.",
  },
]

const domains = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Internet of Things",
  "Robotics",
  "Computer Vision",
  "Natural Language Processing",
  "Deep Learning",
]

export function FeatureCards() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
      {/* Feature Cards Section */}
      <section id="tracks" role="region" aria-labelledby="tracks-heading">
        <h2 id="tracks-heading" className="mb-6 text-2xl font-bold">Features</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={cn(
                "rounded-lg border border-border bg-secondary/40 p-5",
                "hover:border-primary/50 hover:shadow-[0_0_0_1px_var(--color-border)] transition-colors",
              )}
            >
              <h3 className="mb-2 text-lg font-semibold">{it.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{it.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* AI Domains Section */}
      <section id="domains" role="region" aria-labelledby="domains-heading" className="mt-12">
        <h2 id="domains-heading" className="mb-6 text-2xl font-bold">AI Domains</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {domains.map((domain, i) => (
            <motion.div
              key={domain}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={cn(
                "rounded-lg border border-border bg-secondary/40 p-4 text-center",
                "hover:border-primary/50 hover:shadow-[0_0_0_1px_var(--color-border)] transition-colors",
              )}
            >
              <p className="text-sm font-medium">{domain}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}