import { Project, Experience } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cliffford",
    description:
      "Chatbot with hand gesture control using computer vision and neural networks. Includes real-time data sync and user authentication.",
    tools: "Flask - CNN - LSTM - Firebase - Python - OpenCV",
    github: "https://github.com/yassinehanafi3/Cliffford",
  },
  {
    id: 2,
    title: "Poker Planning",
    description:
      "Web tool for team estimation with live voting and real-time updates. Supports interactive sessions for planning tasks.",
    tools: "Spring Boot - Angular - MySQL - WebSocket - REST API",
    github: "https://github.com/yassinehanafi3/pokerplanning-backend",
  },
  {
    id: 3,
    title: "Tawajooh",
    description:
      "Web app to manage student applications. Handles form submission, document tracking, and status updates.",
    tools: "Flask - HTML/CSS - JavaScript - Bootstrap - SQLite",
    github: "https://github.com/yassinehanafi3/Tawajooh",
  },
  {
    id: 4,
    title: "Hospital Management",
    description:
      "Desktop app for scheduling, patient records, and doctor availability. Includes data storage and caching.",
    tools: "JavaFX - MongoDB - Redis - Java - Scene Builder",
    github: "https://github.com/yassinehanafi3/Gestion_Hopital_ENSET",
  },
  {
    id: 5,
    title: "Blogger",
    description:
      "Platform for creating and managing blog posts. Includes user login, editing, and comment features.",
    tools: "Express.js - Prisma ORM - MySQL - REST API",
    github: "https://github.com/yassinehanafi3/blogger",
  },
  {
    id: 6,
    title: "ENSET Candidature",
    description:
      "Admissions management tool for schools. Supports application tracking, evaluation, and scoring.",
    tools: "Spring Boot - Angular - MySQL - Microservices - Docker",
    github: "https://github.com/ENSET-Candidature",
  },
  {
    id: 7,
    title: "AstreintEase",
    description:
      "Web app for managing on-call requests with approval workflows and calendar sync. Built using microservices.",
    tools: "Spring Cloud - Angular - Microservices - MySQL - Docker",
    github: "https://github.com/AstreintEase",
  },
  {
    id: 8,
    title: "Orange Staffing",
    description:
      "Tool for handling internal recruitment. Manages job listings, applications, and interview scheduling.",
    tools: "Spring Boot - Angular - MySQL - REST API",
    github: "https://github.com/Staffing-Orange",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    abbreviation: "INETUM",
    companyName: "Inetum",
    title: "Full Stack Engineer",
    link: "https://www.linkedin.com/company/inetum/",
    date: "JAN 2025 - PRESENT",
    description:
      "Worked on a financial system used by local authorities in France. Built and updated features, handled real-time data, and took part in team sprints.",
    skills:
      "Spring Boot · Angular · RabbitMQ · PostgreSQL · SCRUM · GitLab · OpenFeign · Lua · Nginx",
    isActive: true,
  },
  {
    id: "2",
    abbreviation: "OBS",
    companyName: "Orange Business Services",
    title: "Full Stack Engineer",
    link: "https://www.linkedin.com/company/orange-business-services-maroc",
    date: "FEB 2024 - AUG 2024",
    description:
      "Developed backend and frontend for a request validation tool. Set up microservices with service discovery, load balancing, and external config.",
    skills:
      "Microservices · Java · Spring Boot · Spring Cloud · Angular · MySQL · SCRUM · Git · Eureka · OpenFeign",
    isActive: false,
  },
  {
    id: "3",
    abbreviation: "OBS",
    companyName: "Orange Business Services",
    title: "Full Stack Engineer",
    link: "https://www.linkedin.com/company/orange-business-services-maroc",
    date: "JULY 2023 - SEPT 2023",
    description:
      "Created a tool for managing hiring steps from posting to selection. Used rapid development tools to speed up setup and deployment.",
    skills:
      "Java · Spring Boot · Angular · Bootstrap · MySQL · SCRUM · Git · JHipster",
    isActive: false,
  },
  {
    id: "4",
    abbreviation: "CEGEDIM",
    companyName: "CEGEDIM",
    title: "Full Stack Engineer",
    link: "https://www.linkedin.com/company/cegedim/",
    date: "JULY 2022 - SEPT 2022",
    description:
      "Built a real-time web app for team planning sessions. Used WebSockets for live updates and handled voting and interaction logic.",
    skills:
      "Java · Spring Boot · React.js · Tailwind CSS · MySQL · SCRUM · Git",
    isActive: false,
  },
  {
    id: "5",
    abbreviation: "MEN",
    companyName: "Direction Provinciale de l'Éducation Nationale",
    title: "Full Stack Engineer",
    link: "https://www.men.gov.ma/",
    date: "MARCH 2021 - MAY 2021",
    description: 'Developed "Tawajooh", a student application management system that streamlined administrative processes for students.',
    skills:
      "Flask · HTML/CSS · JavaScript · Bootstrap · Firebase Realtime Database · Python",
    isActive: false,
  },
];

export const PERSONAL_INFO = {
  name: "EL HANAFI",
  fullName: "EL HANAFI YASSINE",
  title: "Full Stack Engineer",
  location: "Casablanca, Morocco",
  description: "Welcome! I’m EL HANAFI, a passionate software engineer based in Casablanca, Morocco. I specialize in building innovative and scalable digital solutions that solve real-world problems. Let’s connect and bring your vision to life.",
  aboutDescription: "Full Stack Engineer with a passion for programming and problem-solving. Proficient in full-stack development with Spring and Angular, and experienced in delivering impactful solutions at leading companies. I thrive on crafting clean, efficient code and transforming complex ideas into real-world applications.",
  resumeUrl: "/Resume_Yassine_EL_HANAFI_2025.pdf"
}; 