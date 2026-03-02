export interface Project {
  id: string;
  title: string;
  category: "ml" | "fullstack" | "research";
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
  title: "ML Engineer & Full-Stack Developer",
  bio: `Engineering student with a deep focus on Machine Learning, particularly Machine Unlearning research. Experienced in building production-grade full-stack applications and analytical ML pipelines. Strong communicator with a passion for teaching complex concepts clearly.`,
  stats: [
    { label: "ML Projects", value: "8+" },
    { label: "Models Built", value: "15+" },
    { label: "Full-Stack Apps", value: "6+" },
    { label: "Research Areas", value: "3" },
  ],
  email: "urbana@example.com",
  linkedin: "https://linkedin.com/in/urbana",
  github: "https://github.com/urbana",
};

export const projects: Project[] = [
  {
    id: "machine-unlearning",
    title: "Machine Unlearning Framework",
    category: "research",
    shortDescription: "A framework for selectively removing learned data from trained ML models.",
    problem: "ML models retain sensitive training data, creating privacy and compliance risks under regulations like GDPR's right to be forgotten.",
    approach: "Developed a gradient-based unlearning algorithm that selectively removes data influence without full retraining. Benchmarked against SISA and fine-tuning baselines.",
    impact: "Achieved 94% unlearning efficacy with only 12% accuracy trade-off, reducing retraining time by 85% compared to full retraining.",
    techStack: ["PyTorch", "NumPy", "Scikit-learn", "Matplotlib", "Python"],
    github: "https://github.com/urbana/machine-unlearning",
    image: "/placeholder.svg",
  },
  {
    id: "walmart-forecast",
    title: "Walmart Sales Forecasting",
    category: "ml",
    shortDescription: "Time-series forecasting model for retail demand prediction.",
    problem: "Inaccurate demand forecasting led to overstocking and stockouts across 45 Walmart stores.",
    approach: "Built an ensemble of ARIMA, XGBoost, and LSTM models with feature engineering on holidays, markdown events, and economic indicators.",
    impact: "Reduced forecast error (WMAE) by 22% over baseline, enabling better inventory allocation across departments.",
    techStack: ["Python", "XGBoost", "TensorFlow", "Pandas", "Plotly"],
    github: "https://github.com/urbana/walmart-forecast",
    image: "/placeholder.svg",
  },
  {
    id: "trade-hub",
    title: "TradeHub Platform",
    category: "fullstack",
    shortDescription: "Real-time commodity trading simulation platform.",
    problem: "Students lacked a safe, realistic environment to practice commodity trading strategies.",
    approach: "Built a full-stack platform with real-time WebSocket price feeds, portfolio tracking, and risk analytics dashboard using React and Node.js.",
    impact: "Onboarded 200+ users with 95% uptime. Average session duration of 18 minutes indicates strong engagement.",
    techStack: ["React", "Node.js", "PostgreSQL", "WebSocket", "TailwindCSS"],
    github: "https://github.com/urbana/trade-hub",
    image: "/placeholder.svg",
  },
  {
    id: "internship-ml",
    title: "ML Pipeline Optimization",
    category: "ml",
    shortDescription: "Production ML pipeline for predictive maintenance at scale.",
    problem: "Legacy ML pipelines had 40-minute retraining cycles with inconsistent feature engineering across teams.",
    approach: "Redesigned the pipeline architecture using feature stores, automated hyperparameter tuning, and model versioning with MLflow.",
    impact: "Reduced retraining time by 60% and improved model consistency (AUC variance <0.02) across quarterly retraining cycles.",
    techStack: ["Python", "MLflow", "Airflow", "Docker", "AWS"],
    github: "https://github.com/urbana/ml-pipeline",
    image: "/placeholder.svg",
  },
  {
    id: "commanddeck",
    title: "CommandDeck Portfolio",
    category: "fullstack",
    shortDescription: "This interactive terminal-driven portfolio you're using right now.",
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
    organization: "University AI Lab",
    duration: "Jun 2025 – Present",
    achievements: [
      "Researching Machine Unlearning techniques for privacy-preserving ML",
      "Published internal whitepaper on gradient-based unlearning methods",
      "Reduced model retraining overhead by 85% using selective forgetting",
    ],
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer Intern",
    organization: "Tech Startup Inc.",
    duration: "Jan 2025 – May 2025",
    achievements: [
      "Built and deployed 3 production microservices serving 10K+ daily requests",
      "Optimized database queries reducing P95 latency by 40%",
      "Implemented CI/CD pipeline reducing deployment time from 45 min to 8 min",
    ],
  },
  {
    id: "exp-3",
    role: "Teaching Assistant — Data Structures",
    organization: "University CS Department",
    duration: "Aug 2024 – Dec 2024",
    achievements: [
      "Mentored 120+ students in algorithms and data structures",
      "Created supplementary problem sets improving average exam scores by 15%",
      "Held weekly office hours with 90%+ student satisfaction rating",
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
      { name: "PostgreSQL", projects: ["TradeHub"], achievement: "Complex query optimization" },
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
      { name: "AWS", projects: ["ML Pipeline"], achievement: "Cloud infrastructure" },
      { name: "Airflow", projects: ["ML Pipeline"], achievement: "Pipeline orchestration" },
      { name: "Linux", projects: ["All Projects"], achievement: "Development environment" },
    ],
  },
];
