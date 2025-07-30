import React from 'react';
import { PROJECTS } from '../constants/data';
import { ProjectCard } from '../ui';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h3 className="title">/projects</h3>
      <div className={styles.projectsContainer}>
        
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects }; 