import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Project } from '../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.projectCard}>
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
            <strong>Tools: {project.tools}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard }; 