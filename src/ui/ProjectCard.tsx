import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css';

interface ProjectData {
  id: number;
  key: string;
  tools: string[];
  github: string;
  featured?: boolean;
}

const PROJECTS: ProjectData[] = [
  { id: 7, key: 'astreintEase', tools: ['Spring Cloud', 'Angular', 'Docker', 'MySQL'], github: 'https://github.com/AstreintEase', featured: true },
  { id: 8, key: 'orangeStaffing', tools: ['Spring Boot', 'Angular', 'MySQL'], github: 'https://github.com/Staffing-Orange', featured: true },
  { id: 6, key: 'ensetCandidature', tools: ['Spring Boot', 'Angular', 'Docker', 'MySQL'], github: 'https://github.com/ENSET-Candidature', featured: true },
  { id: 2, key: 'pokerPlanning', tools: ['Spring Boot', 'Angular', 'WebSocket'], github: 'https://github.com/yassinehanafi3/pokerplanning-backend' },
  { id: 1, key: 'cliffford', tools: ['Python', 'Flask', 'OpenCV'], github: 'https://github.com/yassinehanafi3/Cliffford' },
  { id: 3, key: 'tawajooh', tools: ['Flask', 'JavaScript', 'SQLite'], github: 'https://github.com/yassinehanafi3/Tawajooh' },
  { id: 4, key: 'hospitalManagement', tools: ['JavaFX', 'MongoDB', 'Redis'], github: 'https://github.com/yassinehanafi3/Gestion_Hopital_ENSET' },
  { id: 5, key: 'blogger', tools: ['Express.js', 'Prisma', 'MySQL'], github: 'https://github.com/yassinehanafi3/blogger' },
];

const ProjectCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.list}>
      {PROJECTS.map((project) => {
        const base = `projects.${project.key}`;
        return (
          <li key={project.id}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.row}
              aria-label={`${t('projects.viewCode')}: ${t(`${base}.title`)}`}
            >
              <div className={styles.main}>
                <div className={styles.titleRow}>
                  <h3 className={styles.title}>{t(`${base}.title`)}</h3>
                  {project.featured && (
                    <span className={styles.tag}>{t('projects.featured')}</span>
                  )}
                </div>
                <p className={styles.impact}>{t(`${base}.impact`)}</p>
                <p className={styles.summary}>{t(`${base}.summary`)}</p>
                {t(`${base}.role`, { defaultValue: '' }) && (
                  <p className={styles.roleLine}>{t(`${base}.role`)}</p>
                )}
                <p className={styles.tools}>{project.tools.join(' · ')}</p>
              </div>
              <span className={styles.arrow} aria-hidden="true">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { ProjectCard };
