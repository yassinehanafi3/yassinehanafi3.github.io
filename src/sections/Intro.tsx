import React from 'react';
import { useTranslation } from 'react-i18next';
import { ResumeDownloadButton, PortraitFrame } from '../ui';
import myImage from '../assets/images/profile.png';
import styles from './Intro.module.css';

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="intro" className="container">
      <p className="sectionLabel">/intro</p>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.role}>{t('intro.roleLabel')}</p>

          <h1 id="intro-heading" className={styles.name}>
            {t('intro.headline')}
          </h1>

          <p className={styles.stack}>{t('intro.stackLine')}</p>

          <p className={styles.lede}>{t('intro.description')}</p>

          <p className={styles.availability}>{t('intro.availability')}</p>

          <div className={styles.actions}>
            <ResumeDownloadButton />
            <a href="#contact" className="btn-secondary">
              {t('intro.contactCta')}
            </a>
          </div>
        </div>

        <div className={styles.portraitSlot}>
          <PortraitFrame
            src={myImage}
            alt={t('intro.profileAlt', { fullName: t('personal.fullName') })}
          />
        </div>
      </div>

      <ul className={styles.points} aria-label={t('intro.trustLabel')}>
        <li>{t('intro.trust1')}</li>
        <li>{t('intro.trust2')}</li>
        <li>{t('intro.trust3')}</li>
      </ul>
    </div>
  );
};

export { Intro };
