export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Remote" | "Contract";
  category: string;
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  logo: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechNova Ghana",
    location: "Accra, Ghana",
    type: "Full-time",
    category: "Engineering",
    salary: "GHS 8,000 – 12,000/mo",
    postedDate: "2 days ago",
    description:
      "We are looking for a Senior Frontend Developer to join our rapidly growing team. You will lead the development of our customer-facing applications using modern web technologies.",
    requirements: [
      "5+ years of experience with React or Vue",
      "Strong TypeScript knowledge",
      "Experience with Next.js and SSR",
      "Familiarity with CI/CD pipelines",
      "Excellent communication skills",
    ],
    responsibilities: [
      "Lead frontend architecture decisions",
      "Mentor junior developers",
      "Collaborate with designers and backend engineers",
      "Optimize application performance",
      "Write and maintain unit/integration tests",
    ],
    logo: "🏢",
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "Finpact Africa",
    location: "Remote",
    type: "Remote",
    category: "Engineering",
    salary: "$3,000 – $5,000/mo",
    postedDate: "1 day ago",
    description:
      "Join our fintech startup building the next generation of payment infrastructure for Africa. You'll work across the full stack with a small but high-impact team.",
    requirements: [
      "3+ years full-stack experience",
      "Node.js and React proficiency",
      "PostgreSQL or MongoDB experience",
      "REST API design knowledge",
      "Understanding of payment systems is a plus",
    ],
    responsibilities: [
      "Build and maintain API endpoints",
      "Develop React frontend features",
      "Design database schemas",
      "Participate in code reviews",
      "Deploy and monitor production systems",
    ],
    logo: "💳",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "CreativeHub Accra",
    location: "Accra, Ghana",
    type: "Full-time",
    category: "Design",
    salary: "GHS 5,000 – 7,500/mo",
    postedDate: "3 days ago",
    description:
      "We seek a talented UI/UX Designer to create beautiful, user-centered designs for our digital products. You'll work closely with product and engineering teams.",
    requirements: [
      "Portfolio showcasing UI/UX projects",
      "Proficiency in Figma or Sketch",
      "Understanding of design systems",
      "Experience with user research",
      "Basic HTML/CSS knowledge preferred",
    ],
    responsibilities: [
      "Create wireframes and prototypes",
      "Conduct user research and usability tests",
      "Maintain and evolve the design system",
      "Collaborate with engineers on implementation",
      "Present designs to stakeholders",
    ],
    logo: "🎨",
  },
  {
    id: "4",
    title: "Backend Developer",
    company: "LogiChain Ltd",
    location: "Kumasi, Ghana",
    type: "Full-time",
    category: "Engineering",
    salary: "GHS 6,000 – 9,000/mo",
    postedDate: "1 week ago",
    description:
      "LogiChain is a logistics technology company seeking a Backend Developer to build scalable microservices for our supply chain platform.",
    requirements: [
      "3+ years backend development experience",
      "Node.js or Python proficiency",
      "Experience with microservices architecture",
      "Docker and Kubernetes knowledge",
      "Strong database skills (SQL and NoSQL)",
    ],
    responsibilities: [
      "Develop and maintain microservices",
      "Design and optimize database schemas",
      "Write comprehensive API documentation",
      "Implement security best practices",
      "Collaborate with frontend and DevOps teams",
    ],
    logo: "🚚",
  },
  {
    id: "5",
    title: "Product Manager",
    company: "Startify Ghana",
    location: "Accra, Ghana",
    type: "Full-time",
    category: "Product",
    salary: "GHS 10,000 – 15,000/mo",
    postedDate: "5 days ago",
    description:
      "Startify is looking for an experienced Product Manager to lead our flagship SaaS product. You'll define the product roadmap and work with cross-functional teams.",
    requirements: [
      "4+ years product management experience",
      "Strong analytical and data skills",
      "Experience with Agile/Scrum methodologies",
      "Excellent stakeholder management",
      "Technical background preferred",
    ],
    responsibilities: [
      "Define and prioritize product backlog",
      "Conduct market and user research",
      "Write detailed product requirements",
      "Work with design and engineering",
      "Track and report on product KPIs",
    ],
    logo: "📦",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudBase Systems",
    location: "Remote",
    type: "Remote",
    category: "Engineering",
    salary: "$2,500 – $4,000/mo",
    postedDate: "4 days ago",
    description:
      "CloudBase is hiring a DevOps Engineer to manage our cloud infrastructure, CI/CD pipelines, and deployment automation across multiple client projects.",
    requirements: [
      "Experience with AWS, GCP, or Azure",
      "Strong Docker and Kubernetes skills",
      "CI/CD pipeline setup experience",
      "Infrastructure as Code (Terraform)",
      "Linux administration skills",
    ],
    responsibilities: [
      "Manage cloud infrastructure",
      "Set up and maintain CI/CD pipelines",
      "Monitor system health and performance",
      "Implement security and compliance measures",
      "Automate deployment processes",
    ],
    logo: "☁️",
  },
  {
    id: "7",
    title: "Data Analyst",
    company: "InsightGH Analytics",
    location: "Accra, Ghana",
    type: "Full-time",
    category: "Data",
    salary: "GHS 7,000 – 10,000/mo",
    postedDate: "6 days ago",
    description:
      "InsightGH is seeking a Data Analyst to help our clients make data-driven decisions. You'll work with large datasets and build compelling visualizations and reports.",
    requirements: [
      "Proficiency in Python or R",
      "Strong SQL skills",
      "Experience with Tableau or Power BI",
      "Statistical analysis knowledge",
      "Excellent communication skills",
    ],
    responsibilities: [
      "Collect and clean data from various sources",
      "Build dashboards and reports",
      "Perform statistical analysis",
      "Present findings to stakeholders",
      "Collaborate with data engineering team",
    ],
    logo: "📊",
  },
  {
    id: "8",
    title: "Mobile Developer (React Native)",
    company: "AppWorks Africa",
    location: "Remote",
    type: "Contract",
    category: "Engineering",
    salary: "$2,000 – $3,500/mo",
    postedDate: "2 weeks ago",
    description:
      "AppWorks Africa is looking for a React Native developer to build cross-platform mobile applications for our portfolio of African tech startups.",
    requirements: [
      "3+ years React Native experience",
      "Strong JavaScript/TypeScript skills",
      "Experience publishing to App Store and Play Store",
      "Knowledge of mobile UI patterns",
      "REST API integration experience",
    ],
    responsibilities: [
      "Develop cross-platform mobile features",
      "Integrate with backend APIs",
      "Optimize app performance",
      "Write and maintain unit tests",
      "Participate in code reviews",
    ],
    logo: "📱",
  },
  {
    id: "9",
    title: "Cybersecurity Analyst",
    company: "SafeNet Ghana",
    location: "Accra, Ghana",
    type: "Full-time",
    category: "Security",
    salary: "GHS 9,000 – 13,000/mo",
    postedDate: "3 days ago",
    description:
      "SafeNet Ghana is expanding its security operations center and looking for a skilled Cybersecurity Analyst to protect our clients' digital assets.",
    requirements: [
      "3+ years cybersecurity experience",
      "CISSP, CEH, or Security+ certification",
      "Experience with SIEM tools",
      "Penetration testing knowledge",
      "Incident response experience",
    ],
    responsibilities: [
      "Monitor security alerts and incidents",
      "Conduct vulnerability assessments",
      "Perform penetration testing",
      "Develop security policies and procedures",
      "Train staff on security awareness",
    ],
    logo: "🔒",
  },
  {
    id: "10",
    title: "Technical Support Specialist",
    company: "TechServe Ghana",
    location: "Accra, Ghana",
    type: "Part-time",
    category: "Support",
    salary: "GHS 3,000 – 4,500/mo",
    postedDate: "1 week ago",
    description:
      "TechServe Ghana is looking for a Technical Support Specialist to provide excellent customer service and technical assistance to our growing client base.",
    requirements: [
      "Experience in IT support or help desk",
      "Strong troubleshooting skills",
      "Excellent communication skills",
      "Patience and empathy with customers",
      "Basic networking knowledge",
    ],
    responsibilities: [
      "Handle customer support inquiries",
      "Troubleshoot technical issues",
      "Document solutions in knowledge base",
      "Escalate complex issues to senior team",
      "Conduct follow-ups with customers",
    ],
    logo: "🛠️",
  },
  {
    id: "11",
    title: "Marketing Manager",
    company: "GrowthHub Digital",
    location: "Accra, Ghana",
    type: "Full-time",
    category: "Marketing",
    salary: "GHS 8,000 – 12,000/mo",
    postedDate: "4 days ago",
    description:
      "GrowthHub Digital is seeking a Marketing Manager to lead our digital marketing efforts, manage campaigns, and grow our brand presence across multiple channels.",
    requirements: [
      "5+ years digital marketing experience",
      "Experience with Google Ads and Meta Ads",
      "Strong content creation skills",
      "SEO/SEM expertise",
      "Data-driven mindset",
    ],
    responsibilities: [
      "Develop and execute marketing strategy",
      "Manage paid advertising campaigns",
      "Create and oversee content production",
      "Analyze campaign performance",
      "Manage marketing budget",
    ],
    logo: "📣",
  },
  {
    id: "12",
    title: "AI/ML Engineer",
    company: "DeepTech Accra",
    location: "Remote",
    type: "Full-time",
    category: "Engineering",
    salary: "$4,000 – $7,000/mo",
    postedDate: "1 day ago",
    description:
      "DeepTech Accra is at the forefront of AI development in West Africa. We are looking for an ML Engineer to build and deploy machine learning models at scale.",
    requirements: [
      "Strong Python and ML framework knowledge",
      "Experience with TensorFlow or PyTorch",
      "MLOps and model deployment experience",
      "Statistical and mathematical foundation",
      "Experience with large language models preferred",
    ],
    responsibilities: [
      "Design and train ML models",
      "Build data pipelines",
      "Deploy models to production",
      "Monitor model performance",
      "Collaborate with product and engineering teams",
    ],
    logo: "🤖",
  },
];

export const jobCategories = ["All", "Engineering", "Design", "Product", "Data", "Security", "Support", "Marketing"];
export const jobLocations = ["All", "Accra, Ghana", "Kumasi, Ghana", "Remote"];
export const jobTypes = ["All", "Full-time", "Part-time", "Remote", "Contract"];
