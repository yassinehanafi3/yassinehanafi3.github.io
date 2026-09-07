import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { GITHUB_URL, LINKEDIN_URL } from '../constants/urls';
import { Panel, ResumeDownloadButton } from '../ui';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const email = t('personal.email');

  const channels = [
    {
      id: 'email',
      label: t('contact.email'),
      value: email,
      href: `mailto:${email}`,
      icon: faEnvelope,
      external: false,
    },
    {
      id: 'linkedin',
      label: t('contact.linkedinCta'),
      value: 'linkedin.com/in/elhanafiyassine',
      href: LINKEDIN_URL,
      icon: faLinkedin,
      external: true,
    },
    {
      id: 'github',
      label: t('contact.githubCta'),
      value: 'github.com/yassinehanafi3',
      href: GITHUB_URL,
      icon: faGithub,
      external: true,
    },
    {
      id: 'phone',
      label: t('contact.phone'),
      value: t('personal.phone'),
      href: 'tel:+212708161260',
      icon: faPhone,
      external: false,
    },
  ];

  return (
    <Panel
      id="contact"
      headingId="contact-heading"
      index="05"
      label={t('navigation.contact')}
      meta={t('contact.openChannel')}
    >
      <div className={styles.layout}>
        <div className={styles.prompt}>
          <p className={styles.cta}>{t('contact.getInTouch')}</p>
          <p className={styles.hint}>{t('contact.description')}</p>
          <div className={styles.actions}>
            <ResumeDownloadButton />
          </div>
        </div>

        <ul className={styles.channels}>
          {channels.map((channel) => (
            <li key={channel.id}>
              <a
                href={channel.href}
                className={styles.channel}
                {...(channel.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className={styles.channelLabel}>{channel.label}</span>
                <span className={styles.channelValue}>{channel.value}</span>
                <span className={styles.channelGo} aria-hidden="true">
                  <FontAwesomeIcon
                    icon={channel.external ? faArrowUpRightFromSquare : channel.icon}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.location}>
        <span className="monoLabel">{t('contact.location')}</span>
        <span>
          {t('personal.location')}
          <span className={styles.note}> — {t('contact.relocation')}</span>
        </span>
      </p>
    </Panel>
  );
};

export { Contact };
