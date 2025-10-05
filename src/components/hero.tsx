"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GenAIClubHero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video content array for Gen AI Club
  const videoContent = [
    {
      title: "AI INNOVATION",
      subtitle: "Future Forward",
      description: "Pioneering the next generation of AI solutions",
      videoUrl: "/ai-innovation-video.mp4", // Replace with actual AI-themed video URL
    },
    {
      title: "MACHINE LEARNING",
      subtitle: "Intelligent Systems",
      description: "Empowering machines to learn and evolve",
      videoUrl: "/ml-video.mp4", // Replace with actual AI-themed video URL
    },
    {
      title: "GENERATIVE AI",
      subtitle: "Creative Horizons",
      description: "Unleashing limitless creativity through AI",
      videoUrl: "/gen-ai-video.mp4", // Replace with actual AI-themed video URL
    }
  ];

  // Auto-advance video every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoContent.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Handle video playback with error catching
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn('Video playback interrupted:', error.message);
          });
        }
      }
    }
  }, [currentVideo]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentVideo((prev) => (prev - 1 + videoContent.length) % videoContent.length);
  };

  const goToNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videoContent.length);
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videoContent[currentVideo].videoUrl ? (
          <video
            ref={videoRef}
            key={currentVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoContent[currentVideo].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback placeholder if no video URL
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full"></div>
                </div>
                <p className="text-sm text-white/60 font-light tracking-wider">VIDEO PLACEHOLDER</p>
                <p className="text-xs text-white/40">Add your video URL to videoContent array</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Reduced Translucent Overlay for Premium Look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/30"></div>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header Space */}
        <div className="flex-1 flex items-end pb-20">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              
              {/* Main Content */}
              <div className="space-y-8">
                {/* Mobile-first minimal text */}
                <div className="md:hidden space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-sm font-light tracking-[0.3em] text-white/70 uppercase">
                      {videoContent[currentVideo].subtitle}
                    </h2>
                    <h1 className="text-4xl font-light tracking-[0.2em] text-white leading-tight">
                      {videoContent[currentVideo].title}
                    </h1>
                  </div>
                </div>

                {/* Desktop content */}
                <div className="hidden md:block space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-lg font-light tracking-[0.3em] text-white/70 uppercase">
                      {videoContent[currentVideo].subtitle}
                    </h2>
                    <h1 className="text-6xl lg:text-7xl font-light tracking-[0.2em] text-white leading-none max-w-4xl">
                      {videoContent[currentVideo].title}
                    </h1>
                  </div>
                  <p className="text-xl font-light text-white/80 tracking-wide max-w-2xl leading-relaxed">
                    {videoContent[currentVideo].description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <button className="w-full md:w-auto bg-white text-black border hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300 rounded-none py-4 px-12 text-xs tracking-wider font-medium uppercase">
                    Join the Club
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="pb-8 hidden md:block px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Video Navigation Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToPrevious}
                  className="p-3 border border-white/20 hover:border-white/40 transition-colors bg-black/80 backdrop-blur-sm"
                  aria-label="Previous Video"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="p-3 border border-white/20 hover:border-white/40 transition-colors bg-black/80 backdrop-blur-sm"
                  aria-label="Next Video"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="hidden md:flex items-center space-x-2">
                {videoContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`h-px transition-all duration-500 ${
                      index === currentVideo ? 'bg-white w-12' : 'bg-white/20 w-6'
                    }`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-xs font-light tracking-wider text-white/60">
                {String(currentVideo + 1).padStart(2, '0')} / {String(videoContent.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-20">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-xs font-light tracking-[0.2em] text-white/60 uppercase transform rotate-90 origin-center translate-y-6">
            GENAI
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>
      </div>
    </section>
  );
}