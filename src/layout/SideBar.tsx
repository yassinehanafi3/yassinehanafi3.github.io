import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { GITHUB_URL, LINKEDIN_URL } from '../constants/urls';
import { LanguageSwitcher } from '../ui';
import { SECTIONS, useActiveSection } from '../hooks/useActiveSection';
import styles from './SideBar.module.css';

const SideBar: React.FC = () => {
  const { t } = useTranslation();
  const activeSection = useActiveSection();

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
