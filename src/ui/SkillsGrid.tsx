import React from 'react';
import styles from './SkillsGrid.module.css';

// Import technology icons
import pythonIcon from '../assets/icons/python.png';
import springBootIcon from '../assets/icons/spring-boot.png';
import javaIcon from '../assets/icons/java.png';
import angularIcon from '../assets/icons/angular.png';

const SkillsGrid: React.FC = () => {
  const technologies = [
    { name: 'Java', icon: javaIcon, hasAsset: true },
    { name: 'Spring Boot', icon: springBootIcon, hasAsset: true },
    { name: 'Angular', icon: angularIcon, hasAsset: true },
    { name: 'Python', icon: pythonIcon, hasAsset: true }
  ];

  return (
    <div className={styles.skillsContainer}>
      <p className={styles.skillsIntro}>Here are some technologies I have been working with:</p>
      <div className={styles.technologiesList}>
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={styles.technologyItem}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            {tech.hasAsset ? (
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className={styles.techIcon}
              />
            ) : (
              <span className={styles.techIcon}>{tech.icon}</span>
            )}
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SkillsGrid }; 