export interface Project {
  id: string;
  title: string;
  category: "ml" | "fullstack" | "research" | "frontend";
  shortDescription: string;
  problem: string;
  approach: string;
  impact: string;
  techStack: string[];
  github?: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  achievements: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; projects: string[]; achievement: string }[];
}

export const profileData = {
  name: "Urbana",
  title: "Machine Learning Engineer",
  bio: `I build ML systems that solve real business problems and full-stack products that people actually use. My work spans gradient-based machine unlearning, time-series forecasting, NLP classifiers, and real-time trading platforms.`,
  subtitle: " I care deeply about the intersection of elegant code, reproducible research, and production reliability. If you&apos;re looking for someone who ships.",
  stats: [
    { label: "ML Projects", value: "8+" },
    { label: "Models Built", value: "12+" },
    { label: "Full-Stack Apps", value: "6+" },
    { label: "Research Areas", value: "1" },
  ],
  email: "urbanajaman.orthee@gmail.com",
  linkedin: "https://www.linkedin.com/in/urbana-jaman",
  github: "https://github.com/Orth33",
};

export const projects: Project[] = [
  {
    id: "machine-unlearning",
    title: "Machine Unlearning Framework",
    category: "research",
    shortDescription: "A framework for selectively removing learned data from trained ML models.",
    problem: "Modern machine learning models retain information from all training data, including sensitive or legally removable records. This creates privacy, compliance, and ethical challenges when specific data must be erased post-training.",
    approach: "Developed two gradient-based unlearning algorithm that selectively removes data influence without full retraining. Benchmarked against Full-Retraining and fine-tuning baselines.",
    impact: "Achieved 99% unlearning efficacy with only 12% accuracy trade-off, reducing retraining time by 85% compared to full retraining.",
    techStack: ["PyTorch",
      "Python",
      "NumPy",
      "Matplotlib",
      "Deep Learning",
      "Model Pruning",],
    github: "https://github.com/urbana/machine-unlearning",
    image: "/Portfolio_Image.png",
  },
  {
    id: "walmart-forecast",
    title: "Walmart Sales Forecasting",
    category: "ml",
    shortDescription: "Time-series forecasting model for retail demand prediction. Built with XGBoost and Regression architectures.",
    problem: "Inaccurate demand forecasting led to overstocking and stockouts across 45 Walmart stores.",
    approach: "Built an ensemble of XGBoost and Regression models with feature engineering on holidays, markdown events, and economic indicators. Evaluated performance using RMSE and MAE metrics.",
    impact: "Reduced forecast error (WMAE) by 22% over baseline, enabling better inventory allocation across departments.",
    techStack: ["Python", "XGBoost", "Pandas", "Matplotlib"],
    github: "https://github.com/Orth33/walmart-sales-prediction",
    image: "/placeholder.svg",
  },
  {
    id: "trade-hub",
    title: "Trade Hub – Second-Hand Marketplace Platform",
    category: "fullstack",
    shortDescription: "Developed a full-stack marketplace platform with authentication, messaging, and admin controls.",
    problem: "Existing second-hand marketplaces often lack structured moderation tools and scalable backend design, leading to poor user experience and dispute handling inefficiencies.",
    approach: "Designed and implemented a full-stack application using a Node.js and Express backend with MongoDB for database management. Built a React + Tailwind frontend with structured state management. Implemented authentication, listing system, messaging functionality, dispute resolution modules, and role-based admin controls.",
    impact: "Delivered a scalable marketplace architecture with modular backend services. ",
    techStack: ["Node.js",
      "Express",
      "MongoDB",
      "React",
      "TailwindCSS",
      "REST API"],
    github: "https://github.com/Orth33/trade-hub",
    image: "/placeholder.svg",
  },
  {
    id: "vcms",
    title: "VCMS – Veterinary Clinic Management System",
    category: "fullstack",
    shortDescription: "A full-stack application for managing veterinary clinic operations and inventory.",
    problem: "Legacy veterinary clinic management systems were inefficient and lacked modern UI/UX design.",
    approach: "Built a responsive desktop application using Python and PyQt5 with MySQL backend. Implemented user authentication, inventory tracking, appointment management, and day     care center management features.",
    impact: "Improved clinic workflow efficiency by 40% and reduced manual data entry errors by 60%.",
    techStack: ["Python", "PyQt5", "MySQL"],
    github: "https://github.com/Orth33/Simple-VCMS",
    image: "/placeholder.svg",
  },
  {
    id: "polar-threads",
    title: "Polar Threads",
    category: "frontend",
    shortDescription: "A modular, responsive e-commerce frontend built with React and TailwindCSS.",
    problem: "Existing e-commerce platforms often lack modularity and maintainability in their frontend architecture.",
    approach: "Designed a modular frontend using React components and TailwindCSS utility classes. Implemented responsive design patterns, reusable UI components, and optimized performance through code splitting and lazy loading.",
    impact: "Delivered a scalable frontend architecture that can be easily integrated with various backend systems. Improved user experience with fast load times and responsive design.",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    github: "https://github.com/Orth33/Polar-Threads",
    image: "/placeholder.svg",
  },
  {
    id: "commanddeck",
    title: "CommandDeck Portfolio",
    category: "frontend",
    shortDescription: "This interactive terminal-driven portfolio you're using right now. Built with React, Zustand, and Framer Motion.",
    problem: "Traditional portfolios fail to demonstrate technical depth or leave a lasting impression on recruiters.",
    approach: "Built a command-driven interface with React, Zustand, and Framer Motion. Supports terminal commands, keyboard navigation, and animated visual sections.",
    impact: "Unique recruiter experience combining technical demonstration with portfolio presentation.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Zustand", "Framer Motion"],
    github: "https://github.com/urbana/commanddeck",
    image: "/placeholder.svg",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Machine Learning Research Intern",
    organization: "Elvvo Pathways, Cairo, Egypt",
    duration: "Feb 2026 – March 2026",
    achievements: [
      "Developed and deployed ML models using Random Forest, XGBoost, Logistic Regression, collaborative filtering(Funk SVD), and CNN-based deep learning architectures.",
      "Applied feature engineering, SMOTE, time-series analysis, transfer learning, and cross-validation to enhance model performance and generalization.",
      " Evaluated models using RMSE, accuracy, precision, recall, and F1-score; performed systematic hyperparameter tuning for optimal pipeline reproducibility.",
    ],
  },
  {
    id: "exp-2",
    role: "Full Stack Development Internship",
    organization: "CodeAlpha, Remote",
    duration: "March 2026 – Present",
    achievements: [
      "Designed and implemented a full-stack web application using React, Node.js, Express, and MongoDB.",
      "Implemented user authentication, real-time messaging, and role-based access control.",
    ],
  },
  {
    id: "exp-3",
    role: "Teaching Assistant",
    organization: "University of Liberal Arts Bangladesh",
    duration: "Sept 2025 – Present",
    achievements: [
      "Mentored 120+ students in programming fundamentals, data structures, and algorithms across multiple courses.",
      "Assisted faculty in lab/course sessions; supported students with course materials, assignments, and lab tasks.",
      "Managed course logistics, scheduled consultation sessions, and maintained grade records",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    skills: [
      { name: "PyTorch", projects: ["Machine Unlearning"], achievement: "Built custom unlearning algorithms" },
      { name: "TensorFlow", projects: ["Walmart Forecast"], achievement: "LSTM time-series models" },
      { name: "Scikit-learn", projects: ["Machine Unlearning", "ML Pipeline"], achievement: "Classical ML pipelines" },
      { name: "XGBoost", projects: ["Walmart Forecast"], achievement: "Ensemble forecasting models" },
      { name: "MLflow", projects: ["ML Pipeline"], achievement: "Model versioning & tracking" },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", projects: ["TradeHub", "CommandDeck"], achievement: "Production SPAs" },
      { name: "TypeScript", projects: ["TradeHub", "CommandDeck"], achievement: "Type-safe full-stack apps" },
      { name: "Node.js", projects: ["TradeHub"], achievement: "Real-time WebSocket server" },
      { name: "TailwindCSS", projects: ["TradeHub", "CommandDeck"], achievement: "Design system implementation" },
      { name: "MongoDB", projects: ["TradeHub"], achievement: "Complex query optimization" },
      {name: "Express", projects: ["TradeHub"], achievement: "RESTful API design"},
    ],
  },
  {
    name: "Data & Analytics",
    skills: [
      { name: "Python", projects: ["All ML Projects"], achievement: "Primary analysis language" },
      { name: "Pandas", projects: ["Walmart Forecast"], achievement: "Large-scale data processing" },
      { name: "NumPy", projects: ["Machine Unlearning"], achievement: "Matrix computations" },
      { name: "Matplotlib", projects: ["Machine Unlearning"], achievement: "Research visualizations" },
      { name: "Plotly", projects: ["Walmart Forecast"], achievement: "Interactive dashboards" },
    ],
  },
  {
    name: "Tools & Infrastructure",
    skills: [
      { name: "Git", projects: ["All Projects"], achievement: "Version control & collaboration" },
      { name: "Docker", projects: ["ML Pipeline"], achievement: "Containerized deployments" },
      { name: "Airflow", projects: ["ML Pipeline"], achievement: "Pipeline orchestration" },
      { name: "Linux", projects: ["All Projects"], achievement: "Development environment" },
      { name: "VS Code", projects: ["All Projects"], achievement: "Primary code editor" },
    ],
  },
];
