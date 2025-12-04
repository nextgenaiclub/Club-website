'use client';

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github, X } from "lucide-react";
import { teams } from "@/constant/team-memeber";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  github?: string;
}



const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        whileHover={{ y: -12, scale: 1.03 }}
        className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-3xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-yellow-400/10 w-full max-w-sm mx-auto"
        onClick={() => setSelectedMember(member)}
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-8 text-center min-h-[320px] flex flex-col">
          {/* Profile Image */}
          <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400/30 group-hover:border-yellow-400/70 transition-all duration-500 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="112px"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  member.name
                )}&size=112&background=1a1a1a&color=ffd700&bold=true`;
              }}
            />
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
            {member.name}
          </h3>

          {/* Role Badge */}
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-yellow-400/10 border border-yellow-400/30 group-hover:bg-yellow-400/20 group-hover:border-yellow-400/60 transition-all duration-300 shadow-sm">
            <p className="text-yellow-400 text-sm font-semibold tracking-wide">{member.role}</p>
          </div>

          {/* Bio Preview */}
          <div className="flex-1 flex items-center justify-center mb-6">
            {member.bio && (
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 px-2">
                {member.bio}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mt-auto">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                aria-label={`${member.name}'s LinkedIn`}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/20 hover:bg-gray-600 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                aria-label={`${member.name}'s GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl max-w-md w-full text-white border border-yellow-400/30 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400/50">
              <Image
                src={selectedMember.image}
                alt={`${selectedMember.name}, ${selectedMember.role}`}
                fill
                className="object-cover"
                sizes="128px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    selectedMember.name
                  )}&size=128&background=1a1a1a&color=ffd700&bold=true`;
                }}
              />
            </div>

            {/* Name and Role */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
              <div className="inline-block px-4 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40">
                <p className="text-yellow-400 text-sm font-semibold">{selectedMember.role}</p>
              </div>
            </div>

            {/* Bio */}
            {selectedMember.bio && (
              <p className="text-gray-300 text-center leading-relaxed mb-6">{selectedMember.bio}</p>
            )}

            {/* Social Links */}
            <div className="flex gap-3 justify-center">
              {selectedMember.linkedin && (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              {selectedMember.github && (
                <a
                  href={selectedMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-full text-white font-medium transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default function TeamsPage() {
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-muted-foreground">// Meet Our Team</p>
              <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                OUR <span className="text-accent">TEAM</span>
              </h1>
              <p className="mt-2 text-sm text-accent font-medium tracking-wider uppercase">
                Exploring Intelligence, Expanding Horizons
              </p>
              <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
                Meet the passionate individuals driving innovation in AI at Vishwakarma University. 
                Our diverse team of students, researchers, and enthusiasts work together to build the future of artificial intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            {Object.entries(teams).map(([category, members], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="mb-16 last:mb-0"
              >
                {/* Category Title */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-4">
                    {category}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full" />
                </div>

                {/* Team Grid */}
                <div className={`grid gap-10 ${
                  members.length === 1 
                    ? 'grid-cols-1 justify-items-center max-w-sm mx-auto'
                    : members.length === 2 
                    ? 'grid-cols-1 sm:grid-cols-2 justify-items-center max-w-3xl mx-auto gap-16'
                    : members.length === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-4xl mx-auto gap-12'
                    : members.length <= 6
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                }`}>
                  {members.map((member, index) => (
                    <TeamCard key={member.id} member={member} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold md:text-4xl mb-4">
                Want to <span className="text-accent">join us</span>?
              </h2>
              <p className="text-pretty text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of our growing AI community. Connect with like-minded individuals and contribute to cutting-edge projects.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/about"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}