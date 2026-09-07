import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel, ProjectCard } from '../ui';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Panel
      id="projects"
      headingId="projects-heading"
      index="04"
      label={t('navigation.projects')}
      meta={t('projects.systemMeta')}
    >
      <p className="sectionIntro">{t('projects.intro')}</p>
      <ProjectCard />
    </Panel>
  );
};

export { Projects };
