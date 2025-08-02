import React from 'react';
import { useTranslation } from 'react-i18next';
import { SkillsGrid } from '../ui/SkillsGrid';
import styles from './About.module.css';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="container">
      <h3 className="title">/{t('navigation.about')}</h3>
      
      <div className={styles.aboutContent}>
        <p className={styles.aboutDescription}>
          {t('about.description')}
        </p>
        <SkillsGrid />
        <div className={styles.interestsSection}>
          <p className={styles.interestsText}>
            {t('about.interests')}
          </p>
        </div>
      </div>
    </div>
  );
};

export { About }; 