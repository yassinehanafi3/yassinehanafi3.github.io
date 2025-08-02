import React from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline } from '../ui';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="experience" className="container">
      <h3 className="title">/{t('navigation.experience')}</h3>
      <div className={styles.experienceContent}>
        <Timeline />
      </div>
    </div>
  );
};

export { Experience }; 