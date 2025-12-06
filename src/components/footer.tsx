'use client';

import { Shield, Fingerprint, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function NextGenAIFooter() {
  return (
    <div className="relative p-4 md:p-6 m-2 md:m-4 bg-gradient-to-b from-yellow-900/30 to-black/80 text-white rounded-xl overflow-hidden">
      {/* Biometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 left-6 w-20 h-20 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute top-7 left-7 w-18 h-18 border border-yellow-400 rounded-full"></div>
        <div className="absolute top-8 left-8 w-16 h-16 border border-yellow-400 rounded-full"></div>
        
        <div className="absolute bottom-6 right-6 w-24 h-24 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-7 right-7 w-22 h-22 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 border border-yellow-400 rounded-full"></div>

        <div className="absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute bottom-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col space-y-6 md:space-y-8">
        {/* Top section with logo and contact */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image 
                  src="/logo.png"
                  alt="NextGenAI Club Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl md:text-2xl font-bold">
                NextGen<span className="text-yellow-400">AI</span> Club
              </h1>
            </div>
            <p className="text-yellow-400/80 text-xs font-medium tracking-wider uppercase mb-2">
              Exploring Intelligence, Expanding Horizons
            </p>
            <p className="text-gray-300 text-xs md:text-sm max-w-md leading-relaxed">
              Empowering students with AI innovation. Join labs, projects, and mentorship for a hands-on learning experience.
            </p>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-gray-300 text-xs">
                <Phone className="w-3 h-3 text-yellow-400" />
                <span>+91 74478 67557</span>
              </div>
              <div className="flex items-center gap-1 text-gray-300 text-xs">
                <Phone className="w-3 h-3 text-yellow-400" />
                <span>+91 77690 91195</span>
              </div>
              <div className="flex items-center gap-1 text-gray-300 text-xs">
                <Mail className="w-3 h-3 text-yellow-400" />
                <span>nextgenai.club@vupune.ac.in</span>
              </div>
              <div className="flex items-start gap-1 text-gray-300 text-xs">
                <MapPin className="w-3 h-3 text-yellow-400 mt-0.5" />
                <span>Vishwakarma University<br />Kondhwa Budruk, Pune, Maharashtra 411048</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              Community Values
            </h2>
            <div className="space-y-1 text-xs text-gray-300">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Collaboration</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Innovation</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle section with quick links */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-yellow-900/30">
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2 text-xs">Get Involved</h3>
            <div className="space-y-1 text-xs text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">Join Labs</a>
              <a href="#" className="block hover:text-white transition-colors">Projects</a>
              <a href="#" className="block hover:text-white transition-colors">Mentorship</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2 text-xs">Resources</h3>
            <div className="space-y-1 text-xs text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">Guides</a>
              <a href="#" className="block hover:text-white transition-colors">Tutorials</a>
              <a href="#" className="block hover:text-white transition-colors">Events</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2 text-xs">About</h3>
            <div className="space-y-1 text-xs text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">Our Mission</a>
              <a href="#" className="block hover:text-white transition-colors">Team</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2 text-xs">Connect</h3>
            <div className="space-y-1 text-xs text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">Discord</a>
              <a href="#" className="block hover:text-white transition-colors">Twitter</a>
              <a href="#" className="block hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div> */}

        {/* Bottom section with copyright and CTA */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <div className="text-xs md:text-sm text-gray-400">
            <p>© 2025 NextGenAI Club. All rights reserved.</p>
            <p className="mt-1">Building the future of AI, one student at a time.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="https://chat.whatsapp.com/L6LzenOpW8GG44q1fHjM4s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors text-xs font-medium text-center"
            >
              Join Now
            </a>
            <a
              href="/about"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-md transition-colors text-xs font-medium text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}