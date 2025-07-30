import React from 'react';
import { PERSONAL_INFO } from '../constants/data';
import { ResumeDownloadButton } from '../ui';
import myImage from '../assets/images/profile.png';
import styles from './Intro.module.css';

const Intro: React.FC = () => {
  return (
    <div id="intro" className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className={styles.introContent}>
            <h1 className={styles.introTitle}>
              Hi, <span style={{color: '#64ffda'}}>{PERSONAL_INFO.name}</span> here.
            </h1>
            <h2 className="section-title">
              {PERSONAL_INFO.title}
            </h2>
            <p className={styles.introDescription}>
              {PERSONAL_INFO.description}
            </p>
            <ResumeDownloadButton />
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className={styles.introImageWrapper}>
            <img 
              className={styles.introImage} 
              src={myImage} 
              alt={`${PERSONAL_INFO.fullName} profile`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Intro }; 