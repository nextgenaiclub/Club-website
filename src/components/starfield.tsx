"use client"

import { useMemo } from "react"

export function Starfield() {
  // Generate a small set of stars for a subtle effect
  const stars = useMemo(() => {
    const arr = []
    for (let i = 0; i < 24; i++) {
      arr.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 1.8,
      })
    }
    return arr
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {stars.map((s) => (
        <span
          key={s.id}
          className="twinkle absolute rounded-full bg-primary/70"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  )
}
