"use client"

import { motion } from "framer-motion"

export function StatsStrip() {
  return (
    <section id="community" className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-secondary/40 p-5 md:grid-cols-4">
        {[
          ["Active Members", "27"],
          ["AI Projects", "Coming Soon"],
          ["Workshops", "Coming Soon"],
          ["Founded", "Sept 2025"],
        ].map(([label, value], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex flex-col items-start gap-1"
          >
            <div className="text-xs uppercase tracking-wide text-primary">{label}</div>
            <div className="text-xl font-semibold">{value}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
