import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel, ResumeDownloadButton, PortraitFrame } from '../ui';
import myImage from '../assets/images/profile.png';
import styles from './Intro.module.css';

const STACK_TAGS = ['Java', 'Spring Boot', 'Angular', 'Microservices'];

const Intro: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t('intro.meta.location'), value: t('personal.location') },
    { label: t('intro.meta.role'), value: t('intro.roleLabel') },
    { label: t('intro.meta.experience'), value: t('intro.experienceValue') },
    { label: t('intro.meta.current'), value: t('intro.currentProject') },
    { label: t('intro.meta.status'), value: t('system.status') },
  ];

  const highlights = [
    t('intro.trust1'),
    t('intro.trust2'),
    t('intro.trust3'),
  ];

  return (
    <Panel
      id="intro"
      headingAs="p"
      label={t('intro.systemLabel')}
      meta={t('system.ok')}
    >
      <div className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.role}>{t('intro.roleLabel')}</p>
          <h1 id="intro-heading" className={styles.name}>
            {t('intro.headline')}
          </h1>
          <p className={styles.lede}>{t('intro.description')}</p>

          <ul className="tagList" aria-label={t('intro.stackLine')}>
            {STACK_TAGS.map((tag) => (
              <li key={tag} className="techTag">
                {tag}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ResumeDownloadButton />
            <a href="#contact" className="btn-link">
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

      <dl className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <ul className={styles.points} aria-label={t('intro.trustLabel')}>
        {highlights.map((item, index) => (
          <li key={item}>
            <span className={styles.pointIndex} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
};

export { Intro };
