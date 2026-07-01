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
      "Fake news detection using a hybrid RoBERTa + linguistic features model with gated fusion. NLP Final Project — combines transformer embeddings with handcrafted linguistic signals for more robust classification.",
    highlights: [
      "Fine-tuned RoBERTa with gated fusion of linguistic feature vectors",
      "Engineered stylometric and readability features alongside transformer embeddings",
      "Evaluated on benchmark datasets with full precision/recall analysis",
    ],
    tech: ["Python", "PyTorch", "RoBERTa", "NLP", "Scikit-learn"],
    impact:
      "Demonstrated that combining transformer embeddings with linguistic signals outperforms a vanilla RoBERTa baseline.",
    github: "https://github.com/youssefmoharm/Detecting-Misinformation-in-News-Articles",
    demo: null,
    accent: "primary",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description:
      "End-to-end ML pipeline for fraud detection on 300K+ real European cardholder transactions. Covers preprocessing, SMOTE balancing, feature scaling, hyperparameter tuning, and multi-model benchmarking.",
    highlights: [
      "Incorporated SMOTE for class imbalance and hyperparameter tuning",
      "Trained and evaluated SVM, KNN, Naive Bayes, and Random Forest",
      "Evaluated with Precision, Recall, F1-score, and ROC-AUC metrics",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "SMOTE"],
    impact:
      "Achieved high precision and recall across multiple classifiers on a heavily imbalanced dataset.",
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
  // ── Java / OOP ────────────────────────────────────────────
  {
    id: "hospital-system",
    title: "Hospital Management System",
    description:
      "Java software streamlining hospital operations: patient management, appointment scheduling, billing, and reporting. Uses BSTs and queues with a GUI frontend.",
    highlights: [
      "BST for patient records, queue for appointment scheduling",
      "GUI interface for patient management and billing",
      "Reporting module for data-driven decision-making",
    ],
    tech: ["Java", "Data Structures", "BST", "GUI", "OOP"],
    impact:
      "Automates core hospital workflows — registration, appointment flow, and billing — in a single desktop application.",
    github: "https://github.com/youssefmoharm/Hospital-system",
    demo: null,
    accent: "primary",
  },
];

export const EXPERIENCE = [
  {
    type: "work",
    title: "Freelance AI Consultant",
    org: "Outlier AI",
    period: "2024 — Present",
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
    period: "2023 — Expected 2026",
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
    id: "oop",
    title: "Object-Oriented Programming",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Programming",
    file: "/certs/OOP.pdf",
  },
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
    id: "data-science",
    title: "Basics of Data Science",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Data Science",
    file: "/certs/Basics of Data Science.pdf",
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
    id: "python",
    title: "Basics of Python",
    issuer: "ITI — Information Technology Institute",
    date: "2025",
    category: "Programming",
    file: "/certs/Basics of Python.pdf",
  },
  {
    id: "python-coursera",
    title: "Programming for Everybody (Python)",
    issuer: "Coursera",
    date: "2025",
    category: "Programming",
    file: "/certs/Programming for Everybody python.pdf",
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
