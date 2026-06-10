import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const GITHUB_URL = 'https://github.com/yassinehanafi3';
const LINKEDIN_URL = 'https://www.linkedin.com/in/elhanafiyassine/';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerCopy}>
          &copy; {currentYear}{' '}
          <span className={styles.author}>{t('personal.fullName')}</span>
          . {t('footer.rights')}
        </p>
        <nav className={styles.footerNav} aria-label={t('footer.social')}>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
