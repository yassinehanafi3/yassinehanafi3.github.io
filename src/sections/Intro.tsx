import React from 'react';
import { useTranslation } from 'react-i18next';
import { ResumeDownloadButton } from '../ui';
import myImage from '../assets/images/profile.png';
import styles from './Intro.module.css';

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="intro" className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className={styles.introContent}>
            <h1 
              className={styles.introTitle}
              dangerouslySetInnerHTML={{ 
                __html: t('intro.greeting', { name: t('personal.name') }) 
              }}
            />
            <h2 className="section-title">
              {t('intro.title')}
            </h2>
            <p className={styles.introDescription}>
              {t('intro.description')}
            </p>
            <ResumeDownloadButton />
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className={styles.introImageWrapper}>
            <img 
              className={styles.introImage} 
              src={myImage} 
              alt={t('intro.profileAlt', { fullName: t('personal.fullName') })} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Intro }; 