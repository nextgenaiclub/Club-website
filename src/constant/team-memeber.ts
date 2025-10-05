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