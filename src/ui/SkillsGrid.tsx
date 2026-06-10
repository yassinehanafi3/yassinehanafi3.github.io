import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './SkillsGrid.module.css';

const SKILL_GROUPS = [
  {
    category: 'backend' as const,
    skills: ['Java', 'Spring Boot', 'REST APIs', 'OpenFeign', 'RabbitMQ'],
  },
  {
    category: 'frontend' as const,
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS/SCSS'],
  },
  {
    category: 'database' as const,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'devops' as const,
    skills: ['GitLab', 'Docker', 'Nginx', 'Lua'],
  },
  {
    category: 'practices' as const,
    skills: ['Agile/SCRUM', 'API integration', 'Debugging', 'Documentation'],
  },
];

const SkillsGrid: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.grid}>
      {SKILL_GROUPS.map((group) => (
        <div key={group.category} className={styles.group}>
          <h4 className={styles.label}>{t(`skills.categories.${group.category}`)}</h4>
          <ul className={styles.skills}>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export { SkillsGrid };
