import React from 'react';
import { useTranslation } from 'react-i18next';
import { GITHUB_URL, LINKEDIN_URL } from '../constants/urls';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        <span className={styles.ok}>{t('system.ok')}</span>
        <span aria-hidden="true">·</span>
        &copy; {currentYear} {t('personal.fullName')}
        <span aria-hidden="true">·</span>
        {t('footer.rights')}
      </p>
      <nav className={styles.nav} aria-label={t('footer.social')}>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
          LinkedIn
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub
        </a>
      </nav>
    </footer>
  );
};

export { Footer };
