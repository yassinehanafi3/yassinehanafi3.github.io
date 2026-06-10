import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../ui';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="container">
      <p className="sectionLabel">/projects</p>
      <h2 id="projects-heading" className="title">
        {t('projects.heading')}
      </h2>
      <p className="sectionIntro">{t('projects.intro')}</p>
      <ProjectCard />
    </div>
  );
};

export { Projects };
