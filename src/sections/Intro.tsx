import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ResumeDownloadButton } from '../ui';
import myImage from '../assets/images/profile.png';
import styles from './Intro.module.css';

const Intro: React.FC = () => {
  const { t } = useTranslation();

  const trustItems = [t('intro.trust1'), t('intro.trust2'), t('intro.trust3')];

  return (
    <div id="intro" className="container">
      <div className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <h1
              className={styles.introTitle}
              dangerouslySetInnerHTML={{
                __html: t('intro.greeting', { name: t('personal.name') }),
              }}
            />

            <div className={styles.availabilityBadge}>
              <span className={styles.availabilityDot} aria-hidden />
              <span>{t('intro.availability')}</span>
            </div>

            <h2 className={styles.heroSubtitle}>{t('intro.title')}</h2>

            <p className={styles.introDescription}>{t('intro.description')}</p>

            <ul className={styles.trustList}>
              {trustItems.map((item, index) => (
                <li key={`trust-${index}`} className={styles.trustItem}>
                  <FontAwesomeIcon icon={faCheck} className={styles.trustIcon} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.heroActions}>
              <ResumeDownloadButton size="hero" />
              <a href="#contact" className={styles.heroSecondaryBtn}>
                {t('intro.secondaryCta')}
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
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
    </div>
  );
};

export { Intro };
