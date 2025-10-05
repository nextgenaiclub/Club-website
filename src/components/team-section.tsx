'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  github?: string;
}


const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
}: {
  items: TeamMember[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = { fast: '20s', normal: '35s', slow: '50s' };
      containerRef.current.style.setProperty('--animation-duration', durations[speed]);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      style={
        {
          '--animation-direction': 'forwards',
          '--animation-duration': '35s',
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration) var(--animation-direction) linear infinite;
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .team-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(145deg, #1a1a1a, #252525);
          border: 1px solid rgba(255, 215, 0, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
        }
        .team-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 215, 0, 0.2);
          border-color: rgba(255, 215, 0, 0.4);
          background: linear-gradient(145deg, #202020, #2a2a2a);
        }
        .image-wrapper {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        .team-card:hover .image-wrapper::before {
          opacity: 1;
        }
        .team-card:hover .image-wrapper {
          transform: scale(1.1);
        }
        .social-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
        }
      `}</style>
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-8 w-max flex-nowrap ${
          start ? 'animate-scroll' : ''
        }`}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.id}-${idx}`}
            className="team-card relative w-[360px] max-w-full rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center text-center p-8 relative">
              <div className="image-wrapper relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-yellow-400/30 shadow-2xl">
                <Image
                  src={item.image}
                  alt={`${item.name}, ${item.role}`}
                  fill
                  className="object-cover"
                  sizes="144px"
                  quality={95}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      item.name
                    )}&size=144&background=1a1a1a&color=ffd700&bold=true`;
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{item.name}</h3>
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-yellow-400/10 border border-yellow-400/30">
                <p className="text-yellow-400 text-sm font-semibold">{item.role}</p>
              </div>
              {item.bio && (
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 px-2">
                  {item.bio}
                </p>
              )}
              <div className="flex gap-3 mt-auto">
                {item.linkedin && (
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50"
                    aria-label={`${item.name}'s LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-gray-700/50"
                    aria-label={`${item.name}'s GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeamCard = ({ member, onClick }: { member: TeamMember; onClick: (member: TeamMember) => void }) => (
  <div
    className="team-card relative w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden cursor-pointer group"
    onClick={() => onClick(member)}
  >
    <div className="flex flex-col items-center text-center p-8 relative">
      <div className="image-wrapper relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-yellow-400/30 shadow-2xl">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="144px"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIrwN3Y7UcEQAAAABJRU5ErkJggg=="
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              member.name
            )}&size=144&background=1a1a1a&color=ffd700&bold=true`;
          }}
        />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h3>
      <div className="inline-block px-4 py-1 mb-4 rounded-full bg-yellow-400/10 border border-yellow-400/30">
        <p className="text-yellow-400 text-sm font-semibold">{member.role}</p>
      </div>
      {member.bio && (
        <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 px-2">{member.bio}</p>
      )}
      <div className="flex gap-3 mt-auto">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50"
            aria-label={`${member.name}'s LinkedIn`}
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-gray-700/50"
            aria-label={`${member.name}'s GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5 text-white" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black">
      {Object.entries(teams).map(([category, members]) => (
        <div key={category} className="mb-28 last:mb-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-16 text-center tracking-tight drop-shadow-lg">
            {category}
          </h2>
          {members.length > 2 ? (
            <InfiniteMovingCards items={members} direction="left" speed="normal" />
          ) : (
            <div className="flex justify-center gap-10 flex-wrap">
              {members.map((member) => (
                <TeamCard key={member.id} member={member} onClick={setSelectedMember} />
              ))}
            </div>
          )}
        </div>
      ))}

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl max-w-lg w-full text-white border-2 border-yellow-400/30 shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-2xl">
                <Image
                  src={selectedMember.image}
                  alt={`${selectedMember.name}, ${selectedMember.role}`}
                  fill
                  className="object-cover"
                  sizes="112px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIrwN3Y7UcEQAAAABJRU5ErkJggg=="
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      selectedMember.name
                    )}&size=112&background=1a1a1a&color=ffd700&bold=true`;
                  }}
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight mb-1">
                  {selectedMember.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40">
                  <p className="text-yellow-400 text-sm font-semibold">{selectedMember.role}</p>
                </div>
              </div>
            </div>
            {selectedMember.bio && (
              <p className="text-gray-200 text-base leading-relaxed mb-8 pl-1">{selectedMember.bio}</p>
            )}
            <div className="flex gap-4 mb-6">
              {selectedMember.linkedin && (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {selectedMember.github && (
                <a
                  href={selectedMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-700/50 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
            <button
              className="w-full py-3 text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-105"
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}