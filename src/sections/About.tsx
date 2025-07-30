import React from 'react';
import { PERSONAL_INFO } from '../constants/data';
import { SkillsGrid } from '../ui/SkillsGrid';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div id="about" className="container">
      <h3 className="title">/about</h3>
      
      <div className={styles.aboutContent}>
        <p className={styles.aboutDescription}>
          {PERSONAL_INFO.aboutDescription}
        </p>
        <SkillsGrid />
        <div className={styles.interestsSection}>
          <p className={styles.interestsText}>
            Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And watch series.
          </p>
        </div>
      </div>
    </div>
  );
};

export { About }; 