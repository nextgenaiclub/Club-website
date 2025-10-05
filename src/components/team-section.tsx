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

const teams: Record<string, TeamMember[]> = {
  'President & Vice President': [
    {
      id: 1,
      name: 'Sufia Sayyed',
      role: 'President',
      image: '/president.jpg',
      bio: 'Leading NEXTGenAI to foster innovation and collaboration.',
      linkedin: 'https://linkedin.com/in/sufia-sayyed',
      github: 'https://github.com/sufia-sayyed',
    },
    {
      id: 2,
      name: 'Swapnil Birajdar',
      role: 'Vice President',
      image: '/president.jpg',
      bio: 'Passionate about building AI-first communities.',
      linkedin: 'https://linkedin.com/in/swapnil-birajdar',
      github: 'https://github.com/swapnil-birajdar',
    },
  ],
  'Technical Team': [
    {
      id: 3,
      name: 'Arham Boonlia',
      role: 'Head',
      image: '/arham_boonlia.png',
      bio: 'Head of Technical—loves ML, bots, and shipping cool stuff.',
      linkedin: 'https://linkedin.com/in/arham-boonlia',
      github: 'https://github.com/arham-boonlia',
    },
    {
      id: 4,
      name: 'Priyal Khunia',
      role: 'Member',
      image: '/priyal_khunia.png',
      linkedin: 'https://linkedin.com/in/priyal-khunia',
      github: 'https://github.com/priyal-khunia',
    },
    {
      id: 5,
      name: 'Tanish',
      role: 'Member',
      image: '/aditya_patil.png',
      linkedin: 'https://linkedin.com/in/tanish',
      github: 'https://github.com/tanish',
    },
    {
      id: 6,
      name: 'Kriya Khuniya',
      role: 'Member',
      image: '/kriya_khuniya.png',
      linkedin: 'https://linkedin.com/in/kriya-khuniya',
      github: 'https://github.com/kriya-khuniya',
    },
    {
      id: 7,
      name: 'Rohit Sharma',
      role: 'Member',
      image: '/rohit_sharma.png',
      linkedin: 'https://linkedin.com/in/rohit-sharma',
      github: 'https://github.com/rohit-sharma',
    },
  ],
  'Social Media Team': [
    {
      id: 8,
      name: 'Shubh Mali',
      role: 'Head',
      image: '/shubh_mali.png',
      linkedin: 'https://linkedin.com/in/shubh-mali',
      github: 'https://github.com/shubh-mali',
    },
    {
      id: 9,
      name: 'Aaroh Dharmadhikari',
      role: 'Member',
      image: '/aaroh_dharmadhikari.jpg',
      linkedin: 'https://linkedin.com/in/aaroh-dharmadhikari',
      github: 'https://github.com/aaroh-dharmadhikari',
    },
    {
      id: 10,
      name: 'Manali Maniyar',
      role: 'Member',
      image: '/manali_maniyar.jpg',
      linkedin: 'https://linkedin.com/in/manali-maniyar',
      github: 'https://github.com/manali-maniyar',
    },
    {
      id: 11,
      name: 'Ayan Kundlik',
      role: 'Member',
      image: '/ayan_kundlik.jpg',
      linkedin: 'https://linkedin.com/in/ayan-kundlik',
      github: 'https://github.com/ayan-kundlik',
    },
    {
      id: 12,
      name: 'Samruddi Lonkar',
      role: 'Member',
      image: '/samruddi_lonkar.png',
      linkedin: 'https://linkedin.com/in/samruddi-lonkar',
      github: 'https://github.com/samruddi-lonkar',
    },
  ],
  'Event Management Team': [
    {
      id: 13,
      name: 'Aditya Patil',
      role: 'Head',
      image: '/aditya_patil.png',
      linkedin: 'https://linkedin.com/in/aditya-patil',
      github: 'https://github.com/aditya-patil',
    },
    {
      id: 14,
      name: 'Saiprasad Patil',
      role: 'Member',
      image: '/saiprasad_patil.png',
      linkedin: 'https://linkedin.com/in/saiprasad-patil',
      github: 'https://github.com/saiprasad-patil',
    },
    {
      id: 15,
      name: 'Rajeshwari Nagare',
      role: 'Member',
      image: '/rajeshwari_nagare.png',
      linkedin: 'https://linkedin.com/in/rajeshwari-nagare',
      github: 'https://github.com/rajeshwari-nagare',
    },
    {
      id: 16,
      name: 'Ahmed Sayyed',
      role: 'Member',
      image: '/ahmed_sayyed.png',
      linkedin: 'https://linkedin.com/in/ahmed-sayyed',
      github: 'https://github.com/ahmed-sayyed',
    },
    {
      id: 17,
      name: 'Shreyansh Pokharna',
      role: 'Member',
      image: '/shreyansh_pokharna.png',
      linkedin: 'https://linkedin.com/in/shreyansh-pokharna',
      github: 'https://github.com/shreyansh-pokharna',
    },
    {
      id: 18,
      name: 'Pranav Sharma',
      role: 'Member',
      image: '/pranav_sharma.jpg',
      linkedin: 'https://linkedin.com/in/pranav-sharma',
      github: 'https://github.com/pranav-sharma',
    },
    {
      id: 19,
      name: 'Prarthana Dhage',
      role: 'Member',
      image: '/prarthana_dhage.jpg',
      linkedin: 'https://linkedin.com/in/prarthana-dhage',
      github: 'https://github.com/prarthana-dhage',
    },
  ],
  'Public Relations (PR) Team': [
    {
      id: 20,
      name: 'Justin Bardeskar',
      role: 'Head',
      image: '/aditya_patil.png',
      linkedin: 'https://linkedin.com/in/justin-bardeskar',
      github: 'https://github.com/justin-bardeskar',
    },
    {
      id: 21,
      name: 'Sarthak Pardeshi',
      role: 'Member',
      image: '/sarthak_pardeshi.png',
      linkedin: 'https://linkedin.com/in/sarthak-pardeshi',
      github: 'https://github.com/sarthak-pardeshi',
    },
  ],
  'Finance Team': [
    {
      id: 22,
      name: 'Ashish Purohit',
      role: 'Head',
      image: '/aditya_patil.png',
      linkedin: 'https://linkedin.com/in/ashish-purohit',
      github: 'https://github.com/ashish-purohit',
    },
    {
      id: 23,
      name: 'Abhay Wagh',
      role: 'Member',
      image: '/aditya_patil.png',
      linkedin: 'https://linkedin.com/in/abhay-wagh',
      github: 'https://github.com/abhay-wagh',
    },
  ],
};

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