import React from 'react';
import { useTranslation } from 'react-i18next';
import { SkillsGrid } from '../ui';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="container">
      <p className="sectionLabel">/about</p>
      <h2 id="about-heading" className="title">
        {t('about.heading')}
      </h2>
      <p className="sectionIntro">{t('about.description')}</p>
      <SkillsGrid />
    </div>
  );
};

export { About };
