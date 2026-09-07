import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <ul className={styles.grid}>
      {PROJECTS.map((project, index) => {
        const base = `projects.${project.key}`;
        const open = openId === project.id;
        const role = t(`${base}.role`, { defaultValue: '' });
        const status = project.featured
          ? t('projects.statusFeatured')
          : t('projects.statusComplete');

        return (
          <li
            key={project.id}
            className={`${styles.module} ${open ? styles.open : ''}`}
          >
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={open}
              aria-controls={`project-${project.id}`}
              onClick={() => setOpenId(open ? null : project.id)}
            >
              <span className={styles.num} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.main}>
                <span className={styles.titleRow}>
                  <h3 className={styles.title}>{t(`${base}.title`)}</h3>
                  <span className={styles.status}>{status}</span>
                </span>
                <span className={styles.impact}>{t(`${base}.impact`)}</span>
              </span>
              <span className={styles.caret} aria-hidden="true">
                {open ? '–' : '+'}
              </span>
            </button>

            <div className={styles.meta}>
              <ul className="tagList">
                {project.tools.map((tool) => (
                  <li key={tool} className="techTag">
                    {tool}
                  </li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label={`${t('projects.viewCode')}: ${t(`${base}.title`)}`}
              >
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                {t('projects.source')}
              </a>
            </div>

            <div
              id={`project-${project.id}`}
              className={styles.detail}
              hidden={!open}
            >
              <p className={styles.summary}>{t(`${base}.summary`)}</p>
              {role ? <p className={styles.roleLine}>{role}</p> : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { ProjectCard };
