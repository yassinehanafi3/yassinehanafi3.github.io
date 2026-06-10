import React from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline } from '../ui';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="experience" className="container">
      <p className="sectionLabel">/experience</p>
      <h2 id="experience-heading" className="title">
        {t('experience.heading')}
      </h2>
      <p className="sectionIntro">{t('experience.intro')}</p>
      <Timeline />
    </div>
  );
};

export { Experience };
