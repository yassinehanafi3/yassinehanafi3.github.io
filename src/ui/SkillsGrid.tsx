import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './SkillsGrid.module.css';

const SKILL_GROUPS = [
  {
    category: 'backend' as const,
    skills: ['Java', 'Spring Boot', 'Spring Cloud', 'REST APIs', 'OpenFeign', 'RabbitMQ', 'WebSockets/STOMP'],
  },
  {
    category: 'frontend' as const,
    skills: ['Angular', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Bootstrap'],
  },
  {
    category: 'database' as const,
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    category: 'devops' as const,
    skills: ['GitLab CI/CD', 'Jenkins', 'Docker', 'Nginx', 'Git', 'Agile', 'SCRUM'],
  },
];

const SkillsGrid: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.grid}>
      {SKILL_GROUPS.map((group) => (
        <div key={group.category} className={styles.group}>
          <h4 className={styles.label}>{t(`skills.categories.${group.category}`)}</h4>
          <p className={styles.skills}>{group.skills.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export { SkillsGrid };
