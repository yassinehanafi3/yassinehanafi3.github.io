import React from 'react';
import { EXPERIENCES } from '../constants/data';
import { Timeline } from '../ui';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <div id="experience" className="container">
      <h3 className="title">/experience</h3>
      <div className={styles.experienceContent}>
        <Timeline experiences={EXPERIENCES} />
      </div>
    </div>
  );
};

export { Experience }; 