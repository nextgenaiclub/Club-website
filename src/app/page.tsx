"use client"

import { FeatureCards } from "@/components/feature-cards";
import GenAIClubHero from "@/components/hero";
import Hero from "@/components/hero";
import JoinClubSection from "@/components/join-sclub";
import { GenAIClubHeader } from "@/components/nav-bar";
import { Starfield } from "@/components/starfield";
import { StatsStrip } from "@/components/stats-strip";
// Import the main TeamSection component instead of TeamCard
import TeamSection from "@/components/team-section";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Page() {
  return (
    <main className="relative min-h-dvh bg-black text-foreground">
      {/* Decorative background */}
      
      {/* Content */}
      <GenAIClubHero />
      <FeatureCards />
      {/* Use TeamSection instead of TeamCard */}
      <TeamSection />
      <JoinClubSection />
      <StatsStrip />
    </main>
  )
}