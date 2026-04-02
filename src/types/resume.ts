export type Resume = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: Array<{
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    startDate: string;
    endDate?: string;
  }>;
  skills: string[];
};
