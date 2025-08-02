import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {}

const ProjectCard: React.FC<ProjectCardProps> = () => {
  const { t } = useTranslation();

  // Create projects data from translations
  const projects = [
    {
      id: 1,
      title: t('projects.cliffford.title'),
      description: t('projects.cliffford.description'),
      tools: "Flask - CNN - LSTM - Firebase - Python - OpenCV",
      github: "https://github.com/yassinehanafi3/Cliffford",
    },
    {
      id: 2,
      title: t('projects.pokerPlanning.title'),
      description: t('projects.pokerPlanning.description'),
      tools: "Spring Boot - Angular - MySQL - WebSocket - REST API",
      github: "https://github.com/yassinehanafi3/pokerplanning-backend",
    },
    {
      id: 3,
      title: t('projects.tawajooh.title'),
      description: t('projects.tawajooh.description'),
      tools: "Flask - HTML/CSS - JavaScript - Bootstrap - SQLite",
      github: "https://github.com/yassinehanafi3/Tawajooh",
    },
    {
      id: 4,
      title: t('projects.hospitalManagement.title'),
      description: t('projects.hospitalManagement.description'),
      tools: "JavaFX - MongoDB - Redis - Java - Scene Builder",
      github: "https://github.com/yassinehanafi3/Gestion_Hopital_ENSET",
    },
    {
      id: 5,
      title: t('projects.blogger.title'),
      description: t('projects.blogger.description'),
      tools: "Express.js - Prisma ORM - MySQL - REST API",
      github: "https://github.com/yassinehanafi3/blogger",
    },
    {
      id: 6,
      title: t('projects.ensetCandidature.title'),
      description: t('projects.ensetCandidature.description'),
      tools: "Spring Boot - Angular - MySQL - Microservices - Docker",
      github: "https://github.com/ENSET-Candidature",
    },
    {
      id: 7,
      title: t('projects.astreintEase.title'),
      description: t('projects.astreintEase.description'),
      tools: "Spring Cloud - Angular - Microservices - MySQL - Docker",
      github: "https://github.com/AstreintEase",
    },
    {
      id: 8,
      title: t('projects.orangeStaffing.title'),
      description: t('projects.orangeStaffing.description'),
      tools: "Spring Boot - Angular - MySQL - REST API",
      github: "https://github.com/Staffing-Orange",
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectCard}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h5 className={styles.cardTitle}>{project.title}</h5>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
              </a>
            </div>
            
            <div className={styles.cardContent}>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectTools}>
                <strong>{t('projects.tools')}: {project.tools}</strong>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { ProjectCard }; 