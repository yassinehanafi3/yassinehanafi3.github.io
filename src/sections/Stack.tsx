import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel, SkillsGrid } from '../ui';

const Stack: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Panel
      id="stack"
      headingId="stack-heading"
      index="02"
      label={t('navigation.stack')}
      meta={t('stack.systemMeta')}
    >
      <p className="sectionIntro">{t('stack.intro')}</p>
      <SkillsGrid />
    </Panel>
  );
};

export { Stack };
