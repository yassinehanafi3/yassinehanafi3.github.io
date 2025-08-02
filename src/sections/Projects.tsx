import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../ui';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projectsSection}>
      <h3 className="title">/{t('navigation.projects')}</h3>
      <div className={styles.projectsContainer}>
        
        <div className={styles.projectsGrid}>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export { Projects }; 