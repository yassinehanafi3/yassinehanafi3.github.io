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
    abbreviation: "NEXPUBLICA",
    companyName: "Nexpublica",
    title: "Full Stack Engineer",
    link: "https://www.linkedin.com/company/nexpublica/",
    date: "JAN 2025 - PRESENT",
    description:
      "Worked on end-to-end financial workflow features for a platform used by local government authorities. Built and integrated backend services using RabbitMQ and OpenFeign.",
    skills:
      "Java · Spring Boot · Angular · PostgreSQL · RabbitMQ · OpenFeign · GitLab · Lua · Nginx",
    isActive: true,
  },
  {
    id: "2",
    abbreviation: "OBS",
    companyName: "Orange Business",
    title: "Full Stack Engineer Intern",
    link: "https://www.linkedin.com/company/orange-business-services-maroc",
    date: "FEB 2024 - AUG 2024",
    description:
      "Designed and developed an on-call request management application based on a microservices architecture with Spring Boot and Spring Cloud.",
    skills:
      "Java · Spring Boot · Spring Cloud · Microservices · Angular · MySQL · SCRUM",
    isActive: false,
  },
  {
    id: "3",
    abbreviation: "OBS",
    companyName: "Orange Business",
    title: "Full Stack Developer Intern",
    link: "https://www.linkedin.com/company/orange-business-services-maroc",
    date: "JULY 2023 - SEPT 2023",
    description:
      "Designed and developed an internal recruitment management application to automate candidate tracking and recruitment workflow follow-up.",
    skills:
      "Java · Spring Boot · Angular · Bootstrap · MySQL · JHipster · SCRUM",
    isActive: false,
  },
  {
    id: "4",
    abbreviation: "CEGEDIM",
    companyName: "Cegedim",
    title: "Full Stack Developer Intern",
    link: "https://www.linkedin.com/company/cegedim/",
    date: "JULY 2022 - SEPT 2022",
    description:
      "Developed a Poker Planning application with real-time WebSockets/STOMP communication for Agile/SCRUM estimation sessions.",
    skills:
      "Java · Spring Boot · STOMP · Angular · Bootstrap · MySQL · SCRUM",
    isActive: false,
  },
];

export const PERSONAL_INFO = {
  name: "EL HANAFI",
  fullName: "Yassine EL HANAFI",
  title: "Full Stack Software Engineer | Java / Spring Boot / Angular",
  location: "Casablanca, Morocco",
  description:
    "Full Stack Software Engineer specialized in Java, Spring Boot, and Angular, with experience building financial and workflow-based applications in Agile environments.",
  aboutDescription:
    "Full Stack Software Engineer specialized in Java, Spring Boot, and Angular. Focused on clean code, maintainability, and production-ready delivery across backend services, REST APIs, databases, and frontend integration.",
  resumeUrl: "/Resume_Yassine_EL_HANAFI.pdf",
};
