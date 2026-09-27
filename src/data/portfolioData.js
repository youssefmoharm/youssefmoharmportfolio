import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaJava,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiOpencv,
  SiJupyter,
  SiTailwindcss,
  SiFlask,
  SiMysql,
  SiCplusplus,
  SiJavascript,
  SiKeras,
} from "react-icons/si";
import { TbBrain, TbMail } from "react-icons/tb";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/youssefmoharm",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/youssefmoharm",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:youssefmoharm74@gmail.com",
    icon: TbMail,
  },
];

// Proficiency levels: Expert | Proficient | Familiar
export const SKILLS = [
  {
    category: "Languages & Core",
    items: [
      { name: "Python", icon: FaPython, level: "Expert" },
      { name: "Algorithms & DSA", icon: TbBrain, level: "Expert" },
      { name: "Java", icon: FaJava, level: "Proficient" },
      { name: "C++", icon: SiCplusplus, level: "Proficient" },
      { name: "JavaScript", icon: SiJavascript, level: "Familiar" },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Machine Learning", icon: TbBrain, level: "Expert" },
      { name: "Deep Learning", icon: TbBrain, level: "Proficient" },
      { name: "Scikit-learn", icon: SiScikitlearn, level: "Expert" },
      { name: "TensorFlow", icon: SiTensorflow, level: "Proficient" },
      { name: "Keras", icon: SiKeras, level: "Proficient" },
      { name: "PyTorch", icon: SiPytorch, level: "Proficient" },
    ],
  },
  {
    category: "Data Science & NLP",
    items: [
      { name: "Pandas", icon: SiPandas, level: "Expert" },
      { name: "NumPy", icon: SiNumpy, level: "Expert" },
      { name: "NLP", icon: TbBrain, level: "Proficient" },
      { name: "Jupyter", icon: SiJupyter, level: "Expert" },
      { name: "OpenCV", icon: SiOpencv, level: "Proficient" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Flask", icon: SiFlask, level: "Proficient" },
      { name: "MySQL", icon: SiMysql, level: "Proficient" },
      { name: "SQL", icon: FaDatabase, level: "Proficient" },
      { name: "RESTful APIs", icon: SiFlask, level: "Proficient" },
    ],
  },
  {
    category: "Tools & Frontend",
    items: [
      { name: "Streamlit", icon: SiStreamlit, level: "Expert" },
      { name: "React", icon: FaReact, level: "Familiar" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Familiar" },
      { name: "Git & GitHub", icon: FaGitAlt, level: "Proficient" },
    ],
  },
];

export const PROJECTS = [
  // ── AI / ML ───────────────────────────────────────────────
  {
    id: "misinformation",
    title: "Detecting Misinformation in News Articles",
    description:
      "Fake news detection using a hybrid RoBERTa and linguistic-feature model with gated fusion. NLP final project evaluated on the WELFake benchmark, combining transformer embeddings with handcrafted linguistic signals.",
    highlights: [
      "Fine-tuned RoBERTa with gated fusion of linguistic feature vectors",
      "Engineered stylometric and readability features alongside transformer embeddings",
      "Evaluated on WELFake with precision, recall, F1, and per-class analysis",
    ],
    tech: ["Python", "PyTorch", "RoBERTa", "NLP", "Scikit-learn"],
    impact:
      "The project reports 0.9733 accuracy, precision, recall, and F1 on WELFake; real-news recall improved from 0.97 to 0.99 against its RoBERTa baseline.",
    github: "https://github.com/youssefmoharm/Detecting-Misinformation-in-News-Articles",
    demo: null,
    accent: "primary",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description:
      "ML pipeline for fraud detection using anonymized European cardholder transactions. Covers preprocessing, SMOTE balancing, feature scaling, hyperparameter tuning, and multi-model benchmarking.",
    highlights: [
      "Incorporated SMOTE for class imbalance and hyperparameter tuning",
      "Trained and evaluated SVM, KNN, Naive Bayes, and Random Forest",
      "Evaluated with Precision, Recall, F1-score, and ROC-AUC metrics",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "SMOTE"],
    impact:
      "Provides a structured comparison of supervised classifiers for an imbalanced fraud-detection task.",
    github: "https://github.com/youssefmoharm/Credit-card-fraud-detector-",
    demo: null,
    accent: "accent",
  },
  {
    id: "image-enhancer",
    title: "Medical Image Enhancer",
    description:
      "Streamlit-based web app for enhancing medical images. Supports denoising, sharpening, histogram equalization, and contrast adjustment with real-time before/after preview.",
    highlights: [
      "Built for healthcare professionals to improve diagnostic image clarity",
      "Denoising, sharpening, and histogram equalization pipelines",
      "Real-time preview with download functionality via Streamlit",
    ],
    tech: ["Python", "Streamlit", "OpenCV", "NumPy", "Pillow"],
    impact:
      "A no-code medical image processing tool accessible directly in the browser without any installation.",
    github: "https://github.com/youssefmoharm/image-enhancer",
    demo: null,
    accent: "primary",
  },
  // ── Algorithms ────────────────────────────────────────────
  {
    id: "smart-city",
    title: "Smart City Transportation Network Optimization",
    description:
      "Comprehensive transportation management system for Greater Cairo using graph algorithms, dynamic programming, and greedy approaches to solve real-world urban mobility challenges.",
    highlights: [
      "Engineered Kruskal's/Prim's MST for cost-efficient road network design",
      "Implemented Dijkstra's & A* for emergency vehicle routing",
      "Dynamic programming for optimal public transit scheduling",
    ],
    tech: ["Python", "Graph Algorithms", "Dynamic Programming", "A*", "Dijkstra"],
    impact:
      "Full transportation optimizer covering road design, emergency routing, traffic signal control, and transit scheduling.",
    github: "https://github.com/youssefmoharm/Smart-City-Transportation-Network-Optimization-",
    demo: null,
    accent: "accent",
  },
  // ── Knowledge-Based / Expert Systems ──────────────────────
  {
    id: "medical-diagnosis",
    title: "Medical Diagnosis Knowledge Base System",
    description:
      "Clinical decision support system with forward-chaining inference engine, MYCIN-style confidence factors, and professional web UI covering disease symptoms and diagnostic procedures.",
    highlights: [
      "Forward chaining inference engine with MYCIN certainty factors",
      "Conflict resolution strategies: LEX, MEA, and Complexity",
      "Professional web UI for interactive diagnosis sessions",
    ],
    tech: ["Python", "HTML/CSS", "Expert Systems", "MYCIN", "Forward Chaining"],
    impact:
      "A working classical AI knowledge engineering system validated through rigorous testing with a usable web interface.",
    github: "https://github.com/youssefmoharm/medical-diagnosis-knowledge-base-system-",
    demo: null,
    accent: "primary",
  },
  {
    id: "text-to-sql-platform",
    title: "Multi-Tenant Text-to-SQL Platform",
    description:
      "A multi-tenant platform that connects PostgreSQL databases and uploaded documents to natural-language chat. It generates validated, read-only SQL and returns grounded database, document, and hybrid answers with citations.",
    highlights: [
      "Enforces tenant-scoped authentication, encrypted database credentials, and table, column, and row permissions",
      "Validates read-only SQL with SQLGlot and applies row filters, statement timeouts, and result limits",
      "Supports document retrieval and hybrid answers with citations and auditable query executions",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLGlot", "pgvector", "SQLAlchemy", "Docker"],
    impact:
      "Combines permission-aware database querying and document retrieval with traceable answers in one API.",
    github: "https://github.com/youssefmoharm/iti-text-to-sql-platform",
    demo: null,
    accent: "accent",
  },
  {
    id: "nerve",
    title: "NERVE",
    description:
      "NERVE is a modern fashion e-commerce platform focused on delivering a smooth, responsive, and professional online shopping experience, including product discovery, product details, cart functionality, checkout, and order management.",
    highlights: [
      "Built a full-stack shopping experience with product catalog, discovery, and filtering",
      "Integrated cart, checkout flow, and order management for a retail workflow",
      "Designed a polished, responsive storefront with modern UI/UX patterns",
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Authentication", "E-Commerce"],
    impact:
      "Provides a conversion-focused storefront experience with reliable product browsing and end-to-end shopping flows.",
    github: "https://github.com/youssefmoharm/Nervee.shop",
    demo: "https://www.nerveey.shop/",
    cover: "/project-covers/nerve-cover.svg",
    coverAlt: "NERVE brand logo",
    accent: "accent",
  },
  {
    id: "examly",
    title: "Examly",
    description:
      "Examly is an AI-powered online examination platform designed to simplify exam creation, management, and delivery. It provides educators and organizations with a modern platform for building and managing online exams efficiently.",
    highlights: [
      "Designed online assessment workflows for exam creation, question management, and delivery",
      "Focused on AI-assisted education tooling and modern web-based exam UX",
      "Built to support production-oriented educational technology workflows",
    ],
    tech: ["AI", "EdTech", "Web Platform", "Automation", "Assessment", "Modern UX"],
    impact:
      "A production-oriented platform for AI-powered education, delivery automation, and modern online assessment experiences.",
    github: "https://github.com/KerolosNader69/examly",
    demo: "https://examly.site/",
    cover: "/project-covers/examly-cover.svg",
    coverAlt: "Examly brand logo",
    accent: "primary",
  },
  // ── Web ───────────────────────────────────────────────────
  {
    id: "image-enhancement-web",
    title: "Image Enhancement Website",
    description:
      "Interactive image enhancement web app enabling users to apply filters (blur, sharpen, edge detection), adjust brightness/contrast with real-time preview and image download.",
    highlights: [
      "Blur, sharpen, and edge detection directly in the browser",
      "Real-time brightness/contrast adjustment with live preview",
      "Responsive HTML/CSS/JS frontend",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    impact:
      "Brings common image processing operations to the browser with zero dependencies.",
    github: "https://github.com/youssefmoharm/image-enhancement",
    demo: null,
    accent: "primary",
  },
  {
    id: "computer-network",
    title: "Enterprise Computer Network Design",
    description:
      "Real-world enterprise networking project emphasising reliability, security, performance, and scalability. Covers network topology, VLAN configuration, and routing protocols.",
    highlights: [
      "Designed enterprise topology with reliability and scalability in mind",
      "Implemented VLANs, routing protocols, and security policies",
      "Documented with focus on real-world deployment principles",
    ],
    tech: ["Networking", "Cisco", "VLANs", "Routing Protocols"],
    impact:
      "Practical enterprise network design applying real-world principles of security, redundancy, and performance optimisation.",
    github: "https://github.com/youssefmoharm/computer-network",
    demo: null,
    accent: "accent",
  },
];

export const EXPERIENCE = [
  {
    type: "work",
    title: "Freelance AI Consultant",
    org: "Outlier AI",
    period: "2024 — 2025",
    location: "Remote",
    description:
      "Analyzed and refined training datasets for ML model improvement, evaluated model outputs, and contributed to AI projects across computer vision, NLP, and reasoning domains.",
    points: [
      "Analyzed and refined 500+ training datasets focusing on data quality validation and edge case identification",
      "Evaluated model outputs and provided feedback across computer vision, NLP, and reasoning domains",
      "Collaborated on data annotation, model testing, and performance evaluation projects",
    ],
  },
  {
    type: "training",
    title: "AI and Machine Learning Trainee",
    org: "Information Technology Institute (ITI)",
    period: "Jan 2025 — Oct 2025",
    location: "Remote",
    description:
      "Intensive 6-month AI/ML bootcamp with 500+ hours of hands-on training in Python, machine learning, and backend development.",
    points: [
      "Built multilingual NLP chatbot handling 5+ languages with 92% accuracy",
      "Designed secure Java/Python backend systems with SOLID principles and design patterns",
      "Optimized MySQL database queries reducing latency by 40%",
    ],
  },
  {
    type: "community",
    title: "AI Member & Organizing Committee Member",
    org: "IEEE Community",
    period: "2025 — Present",
    location: "Alexandria, Egypt",
    description:
      "Active member of the IEEE AI department, organizing technical workshops and mentoring junior members in machine learning and software engineering.",
    points: [
      "Organized 8+ technical AI workshops and seminars reaching 150+ students and professionals",
      "Contributed to curriculum development and mentored 20+ junior members in ML and software engineering",
    ],
  },
  {
    type: "education",
    title: "B.Sc. in Computer Science",
    org: "Alamein International University (AIU)",
    period: "2023 — Expected 2027",
    location: "Alexandria, Egypt",
    description:
      "Focused coursework spanning AI, algorithms, and software engineering with a consistent emphasis on building deployable, tested systems.",
    points: [
      "Relevant coursework: Design & Analysis of Algorithms, Database Management, AI, Machine Learning, Data Structures, OOP",
      "Built production-grade projects in every major course, from expert systems to optimization algorithms",
    ],
  },
];

export const CERTIFICATIONS = [
   {
     id: "ml",
     title: "Machine Learning",
     issuer: "ITI — Information Technology Institute",
     date: "2025",
     category: "AI / ML",
     file: "/certs/Machine Learning.pdf",
   },
  {
    id: "neural",
    title: "Neural Networks",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "AI / ML",
    file: "/certs/Neural netwrok.pdf",
  },
  {
    id: "ibm-ai",
    title: "IBM Intro to AI",
    issuer: "IBM",
    date: "2025",
    category: "AI / ML",
    file: "/certs/IBM intro to AI.pdf",
  },
  {
    id: "kbs",
    title: "Building Multi-Agent Knowledge-Based Systems",
    issuer: "Microsoft",
    date: "2025",
    category: "AI / ML",
    file: "/certs/Microsoft Building Multi agents KBS.pdf",
  },
  {
    id: "image-processing",
    title: "Image Processing",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "AI / ML",
    file: "/certs/Image processing.pdf",
  },
  {
    id: "stats",
    title: "Statistics",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Data Science",
    file: "/certs/Statics.pdf",
  },
  {
    id: "ordered-ds",
    title: "Ordered Data Structures",
    issuer: "Coursera",
    date: "2025",
    category: "Programming",
    file: "/certs/Ordered Data Structures.pdf",
  },
  {
    id: "cpp",
    title: "C++ Programming",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Programming",
    file: "/certs/Course_Certificate_En C++.pdf",
  },
  {
    id: "java",
    title: "Java Programming",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Programming",
    file: "/certs/Course_Certificate_En JAVA FX.pdf",
  },
  {
    id: "java-coursera",
    title: "Guided Project: Java",
    issuer: "Coursera",
    date: "2025",
    category: "Programming",
    file: "/certs/Coursera.guided project JAVA proj.pdf",
  },
  {
    id: "selenium",
    title: "Automation with Selenium & Java",
    issuer: "Coursera",
    date: "2025",
    category: "Programming",
    file: "/certs/Create Your First Automation Script Using Selenium and Java.pdf",
  },
  {
    id: "db",
    title: "Database Management",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Data Science",
    file: "/certs/database_Course_Certificate_En.pdf",
  },
  {
    id: "db-ibm",
    title: "Databases (IBM)",
    issuer: "IBM",
    date: "2025",
    category: "Data Science",
    file: "/certs/DB IBM.pdf",
  },
  {
    id: "intro-db",
    title: "Introduction to Databases",
    issuer: "Coursera",
    date: "2025",
    category: "Data Science",
    file: "/certs/Introduction to Databases.pdf",
  },
  {
    id: "relational-db",
    title: "Relational Database Systems",
    issuer: "Coursera",
    date: "2025",
    category: "Data Science",
    file: "/certs/Relational DB Systems.pdf",
  },
  {
    id: "digital",
    title: "Digital Systems: Logic Gates to Processors",
    issuer: "Coursera",
    date: "2025",
    category: "Engineering",
    file: "/certs/Digital Systems From Logic Gates to Processors.pdf",
  },
  {
    id: "fpga",
    title: "Hardware Description Language for FPGA",
    issuer: "Coursera",
    date: "2025",
    category: "Engineering",
    file: "/certs/Hardware Description Language for FPGA.pdf",
  },
  {
    id: "network",
    title: "Computer Networks",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Engineering",
    file: "/certs/Course_Certificate_En network.pdf",
  },
  {
    id: "web",
    title: "Web Programming",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Programming",
    file: "/certs/web programming.pdf",
  },
  {
    id: "agile",
    title: "Introduction to Agile & Scrum",
    issuer: "Coursera",
    date: "2025",
    category: "Engineering",
    file: "/certs/Introduction to Agile Development and Scrum.pdf",
  },
  {
    id: "quality",
    title: "Engineering Practices for Building Quality Software",
    issuer: "Coursera",
    date: "2025",
    category: "Engineering",
    file: "/certs/Engineering Practices for Building Quality Software.pdf",
  },
];

export const NAV_LOGO = "Moharm";

export const HERO_ROLES = [
  "AI Engineer",
  "ML Practitioner",
  "Python Developer",
  "Data Scientist",
  "Software Engineer",
];
