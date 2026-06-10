import React from 'react';
import { useTranslation } from 'react-i18next';
import { GITHUB_URL, LINKEDIN_URL } from '../constants/urls';
import styles from './Footer.module.css';

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
