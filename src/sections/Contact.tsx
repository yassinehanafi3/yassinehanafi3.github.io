import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="container">
      <h3 className="title">/{t('navigation.contact')}</h3>

      <div className={styles.contactLayout}>
        <div className={styles.contactCopy}>
          <h2 className={styles.contactTitle}>{t('contact.getInTouch')}</h2>
          <p className={styles.contactDescription}>{t('contact.description')}</p>
          <p className={styles.contactCta}>{t('contact.cta')}</p>

          <div className={styles.socialIcons}>
            <a
              href="https://github.com/yassinehanafi3"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/elhanafiyassine/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <aside className={styles.contactAside} aria-label={t('navigation.contact')}>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className={styles.contactText}>
                <h4>{t('contact.location')}</h4>
                <p>{t('personal.location')}</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={styles.contactText}>
                <h4>{t('contact.email')}</h4>
                <a href="mailto:elhanafiyassine21@gmail.com" className={styles.contactLink}>
                  {t('personal.email')}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={styles.contactText}>
                <h4>{t('contact.phone')}</h4>
                <a href="tel:+212708161260" className={styles.contactLink}>
                  {t('personal.phone')}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export { Contact };
