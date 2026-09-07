import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel, Timeline } from '../ui';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Panel
      id="experience"
      headingId="experience-heading"
      index="03"
      label={t('navigation.experience')}
      meta={t('experience.systemMeta')}
    >
      <p className="sectionIntro">{t('experience.intro')}</p>
      <Timeline />
    </Panel>
  );
};

export { Experience };
