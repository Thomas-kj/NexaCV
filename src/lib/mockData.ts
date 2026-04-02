// Mock data for templates and testimonials

export const templates = [
  {
    id: "template-1",
    name: "Modern Blue",
    description: "A clean, modern template with blue accents.",
    thumbnail: "/templates/modern-blue.png",
  },
  {
    id: "template-2",
    name: "Classic Gray",
    description: "A timeless, professional template in gray.",
    thumbnail: "/templates/classic-gray.png",
  },
  {
    id: "template-3",
    name: "Creative Green",
    description: "A creative template with green highlights.",
    thumbnail: "/templates/creative-green.png",
  },
];

export const testimonials = [
  {
    name: "Jane Doe",
    role: "Software Engineer",
    quote: "ResumeBuilder made it so easy to create a professional resume!",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    quote: "The templates are beautiful and the process is seamless.",
  },
  {
    name: "Emily Chen",
    role: "Designer",
    quote: "I landed my dream job thanks to my new resume!",
  },
];

export const mockResumeData = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/johndoe",
  summary: "Experienced full-stack developer with a passion for building scalable web applications.",
  experience: [
    {
      id: "1",
      company: "Tech Corp",
      position: "Senior Developer",
      duration: "2021 - Present",
      description: "Led development of core product features using React and Node.js.",
    },
    {
      id: "2",
      company: "StartUp Inc",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      description: "Built and maintained multiple client-facing web applications.",
    },
  ],
  education: [
    {
      id: "1",
      school: "University of California",
      degree: "B.S. Computer Science",
      year: "2019",
    },
  ],
  skills: ["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
};
