import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { GITHUB_URL, LINKEDIN_URL } from '../constants/urls';
import { LanguageSwitcher } from '../ui';
import styles from './SideBar.module.css';

const SECTIONS = ['intro', 'about', 'experience', 'projects', 'contact'] as const;

const SideBar: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>('intro');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const element = document.getElementById(SECTIONS[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(SECTIONS[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.sideRail}>
      <div className={styles.langAnchor}>
        <LanguageSwitcher />
      </div>

      <aside className={styles.sideNav} aria-label={t('navigation.main')}>
        <nav className={styles.navBlock}>
          <ul className={styles.navLinks}>
            {SECTIONS.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? styles.active : undefined}
                  aria-current={activeSection === section ? 'true' : undefined}
                  aria-label={t(`navigation.${section}`)}
                >
                  /{section}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.socialLinks} aria-label={t('footer.social')}>
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export { SideBar };
