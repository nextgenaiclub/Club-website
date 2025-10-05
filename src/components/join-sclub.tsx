'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Code, Brain } from 'lucide-react';

function JoinClubSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/genai-club-bg.png"
          alt="NEXTGenAI Club Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest text-yellow-400 mb-8 leading-none drop-shadow-lg">
          JOIN NEXTGenAI
        </h1>

        {/* Subheading */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-white mb-2">
            WELCOME TO THE <span className="font-bold italic text-yellow-400">NEXTGenAI</span> CLUB
          </p>
          <p className="text-lg md:text-xl font-light tracking-[0.2em] text-white/90">
            A COMMUNITY FOR AI INNOVATORS & ENTHUSIASTS
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <Button
            className="group bg-yellow-400 text-black hover:bg-yellow-300 px-10 py-5 text-base font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            JOIN THE COMMUNITY
            <ArrowRight
              className={`ml-3 w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}
            />
          </Button>
        </div>

        {/* Bottom Text */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl font-medium tracking-[0.3em] text-white/90">
            EXPLORE AI WORKSHOPS, HACKATHONS, NETWORKING & INNOVATION
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-12 mt-10">
            <div className="flex flex-col items-center gap-3 text-white/90">
              <Brain className="w-7 h-7 text-yellow-400" />
              <span className="text-xs tracking-wider font-medium">AI WORKSHOPS</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-white/90">
              <Code className="w-7 h-7 text-yellow-400" />
              <span className="text-xs tracking-wider font-medium">HACKATHONS</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-white/90">
              <Users className="w-7 h-7 text-yellow-400" />
              <span className="text-xs tracking-wider font-medium">NETWORKING</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-white/90">
              <Calendar className="w-7 h-7 text-yellow-400" />
              <span className="text-xs tracking-wider font-medium">EVENTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-yellow-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-yellow-400/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default JoinClubSection;