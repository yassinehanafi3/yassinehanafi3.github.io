import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GITHUB_URL, LINKEDIN_URL } from '../constants/urls';
import { ResumeDownloadButton } from '../ui';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="container">
      <p className="sectionLabel">/contact</p>
      <h2 id="contact-heading" className="title">
        {t('contact.heading')}
      </h2>
      <p className="sectionIntro">{t('contact.description')}</p>

      <div className={styles.layout}>
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>{t('contact.getInTouch')}</p>
          <div className={styles.buttons}>
            <ResumeDownloadButton />
            <a href={`mailto:${t('personal.email')}`} className="btn-primary">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              {t('contact.emailCta')}
            </a>
          </div>
          <div className={styles.social}>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-link">
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              {t('contact.linkedinCta')}
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-link">
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              {t('contact.githubCta')}
            </a>
          </div>
        </div>

        <dl className={styles.details}>
          <div>
            <dt>{t('contact.location')}</dt>
            <dd>
              {t('personal.location')}
              <span className={styles.note}>{t('contact.relocation')}</span>
            </dd>
          </div>
          <div>
            <dt>{t('contact.email')}</dt>
            <dd>
              <a href={`mailto:${t('personal.email')}`}>{t('personal.email')}</a>
            </dd>
          </div>
          <div>
            <dt>{t('contact.phone')}</dt>
            <dd>
              <a href="tel:+212708161260">{t('personal.phone')}</a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export { Contact };
