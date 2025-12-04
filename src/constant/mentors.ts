interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  expertise?: string;
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Dr. Madhvi Saxena',
    role: 'Faculty Mentor',
    image: '/dr-madhvi-saxena.png',
    bio: 'Guiding NextGenAI Club with expertise and dedication to foster innovation in artificial intelligence.',
    linkedin: 'https://www.linkedin.com/in/dr-madhvi-saxena-143b8257',
    expertise: 'Artificial Intelligence',
  },
];
