import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Timeline.module.css';

const EXPERIENCES = [
  {
    id: '1',
    key: 'nexpublica',
    skills: 'Java, Spring Boot, Angular, PostgreSQL, RabbitMQ, OpenFeign, GitLab, Lua, Nginx',
    link: 'https://www.linkedin.com/company/nexpublica/',
    isCurrent: true,
  },
  {
    id: '2',
    key: 'orange1',
    skills: 'Java, Spring Boot, Spring Cloud, Microservices, Angular, MySQL, SCRUM',
    link: 'https://www.linkedin.com/company/orange-business-services-maroc',
    isCurrent: false,
  },
  {
    id: '3',
    key: 'orange2',
    skills: 'Java, Spring Boot, Angular, Bootstrap, MySQL, JHipster, SCRUM',
    link: 'https://www.linkedin.com/company/orange-business-services-maroc',
    isCurrent: false,
  },
  {
    id: '4',
    key: 'cegedim',
    skills: 'Java, Spring Boot, STOMP, Angular, Bootstrap, MySQL, SCRUM',
    link: 'https://www.linkedin.com/company/cegedim/',
    isCurrent: false,
  },
];

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ol className={styles.list}>
      {EXPERIENCES.map((exp) => {
        const base = `experience.${exp.key}`;
        const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];

        return (
          <li key={exp.id} className={styles.item}>
            <div className={styles.meta}>
              <time dateTime={t(`${base}.dateIso`)}>{t(`${base}.date`)}</time>
              {exp.isCurrent && <span className={styles.now}>{t('experience.current')}</span>}
            </div>
            <h3 className={styles.role}>{t(`${base}.title`)}</h3>
            <p className={styles.company}>
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                {t(`${base}.company`)}
              </a>
              {' · '}
              {t(`${base}.location`)}
            </p>
            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className={styles.tech}>
              <span className={styles.techLabel}>{t('experience.skillsLabel')}:</span>{' '}
              {exp.skills}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

export { Timeline };
