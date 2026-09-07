import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Timeline.module.css';

const EXPERIENCES = [
  {
    id: '1',
    key: 'nexpublica',
    skills: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'RabbitMQ', 'OpenFeign', 'GitLab'],
    link: 'https://www.linkedin.com/company/nexpublica/',
    isCurrent: true,
  },
  {
    id: '2',
    key: 'orange1',
    skills: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'Angular', 'MySQL'],
    link: 'https://www.linkedin.com/company/orange-business-services-maroc',
    isCurrent: false,
  },
  {
    id: '3',
    key: 'orange2',
    skills: ['Java', 'Spring Boot', 'Angular', 'Bootstrap', 'MySQL', 'JHipster'],
    link: 'https://www.linkedin.com/company/orange-business-services-maroc',
    isCurrent: false,
  },
  {
    id: '4',
    key: 'cegedim',
    skills: ['Java', 'Spring Boot', 'STOMP', 'Angular', 'MySQL'],
    link: 'https://www.linkedin.com/company/cegedim/',
    isCurrent: false,
  },
];

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ol className={styles.list}>
      {EXPERIENCES.map((exp, index) => {
        const base = `experience.${exp.key}`;
        const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];

        return (
          <li key={exp.id} className={styles.item}>
            <div className={styles.head}>
              <div className={styles.meta}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <time dateTime={t(`${base}.dateIso`)}>[{t(`${base}.date`)}]</time>
                {exp.isCurrent && (
                  <span className={styles.now}>
                    <span className="statusDot" aria-hidden="true" />
                    {t('experience.current')}
                  </span>
                )}
              </div>
              <p className={styles.company}>
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  {t(`${base}.company`)}
                </a>
              </p>
              <h3 className={styles.role}>{t(`${base}.title`)}</h3>
              <p className={styles.place}>{t(`${base}.location`)}</p>
            </div>

            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <ul className="tagList" aria-label={t('experience.skillsLabel')}>
              {exp.skills.map((skill) => (
                <li key={skill} className="techTag">
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ol>
  );
};

export { Timeline };
