'use client';

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, X } from "lucide-react";
import { mentors } from "@/constant/mentors";

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  expertise?: string;
}

const MentorCard = ({ mentor, index }: { mentor: Mentor; index: number }) => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        whileHover={{ y: -12, scale: 1.03 }}
        className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-3xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-yellow-400/10 w-full max-w-sm mx-auto"
        onClick={() => setSelectedMentor(mentor)}
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-8 text-center min-h-[360px] flex flex-col">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400/30 group-hover:border-yellow-400/70 transition-all duration-500 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src={mentor.image}
              alt={`${mentor.name}, ${mentor.role}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="128px"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  mentor.name
                )}&size=128&background=1a1a1a&color=ffd700&bold=true`;
              }}
            />
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
            {mentor.name}
          </h3>

          {/* Role Badge */}
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-yellow-400/10 border border-yellow-400/30 group-hover:bg-yellow-400/20 group-hover:border-yellow-400/60 transition-all duration-300 shadow-sm">
            <p className="text-yellow-400 text-sm font-semibold tracking-wide">{mentor.role}</p>
          </div>

          {/* Expertise */}
          {mentor.expertise && (
            <div className="mb-4">
              <p className="text-gray-500 text-xs font-medium mb-2">EXPERTISE</p>
              <p className="text-gray-300 text-sm">{mentor.expertise}</p>
            </div>
          )}

          {/* Bio Preview */}
          <div className="flex-1 flex items-center justify-center mb-6">
            {mentor.bio && (
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 px-2">
                {mentor.bio}
              </p>
            )}
          </div>

          {/* LinkedIn Link */}
          <div className="flex justify-center mt-auto">
            {mentor.linkedin && (
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                aria-label={`${mentor.name}'s LinkedIn`}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedMentor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMentor(null)}
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
              onClick={() => setSelectedMentor(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400/50">
              <Image
                src={selectedMentor.image}
                alt={`${selectedMentor.name}, ${selectedMentor.role}`}
                fill
                className="object-cover"
                sizes="128px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    selectedMentor.name
                  )}&size=128&background=1a1a1a&color=ffd700&bold=true`;
                }}
              />
            </div>

            {/* Name and Role */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMentor.name}</h3>
              <div className="inline-block px-4 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40">
                <p className="text-yellow-400 text-sm font-semibold">{selectedMentor.role}</p>
              </div>
            </div>

            {/* Expertise */}
            {selectedMentor.expertise && (
              <div className="mb-6 text-center">
                <p className="text-gray-500 text-xs font-medium mb-2">EXPERTISE</p>
                <p className="text-gray-300 text-sm">{selectedMentor.expertise}</p>
              </div>
            )}

            {/* Bio */}
            {selectedMentor.bio && (
              <p className="text-gray-300 text-center leading-relaxed mb-6">{selectedMentor.bio}</p>
            )}

            {/* LinkedIn Link */}
            <div className="flex justify-center">
              {selectedMentor.linkedin && (
                <a
                  href={selectedMentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default function MentorsPage() {
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
              <p className="text-sm text-muted-foreground">// Our Mentor</p>
              <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                OUR <span className="text-accent">MENTOR</span>
              </h1>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed">
                Meet the experienced professionals guiding our <span className="text-accent">AI</span> journey. 
                Our mentors bring industry expertise, research insights, and invaluable guidance to help shape the future of our club members.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              {/* Mentors Grid */}
              <div className={`grid gap-10 ${
                mentors.length === 1 
                  ? 'grid-cols-1 justify-items-center max-w-sm mx-auto'
                  : mentors.length === 2 
                  ? 'grid-cols-1 sm:grid-cols-2 justify-items-center max-w-3xl mx-auto gap-16'
                  : mentors.length === 3
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-4xl mx-auto gap-12'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'
              }`}>
                {mentors.map((mentor, index) => (
                  <MentorCard key={mentor.id} mentor={mentor} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold md:text-4xl mb-4">
                Want to <span className="text-accent">connect</span>?
              </h2>
              <p className="text-pretty mb-6 max-w-2xl mx-auto">
                Interested in mentoring or learning from our mentors? Reach out to us and become part of our growing <span className="text-accent">AI</span> community.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/teams"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
