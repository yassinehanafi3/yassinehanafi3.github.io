import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './SideBar.module.css';

interface SideBarProps {
  intro: string;
  about: string;
  experience: string;
  projects: string;
  contact: string;
}

const SideBar: React.FC<SideBarProps> = ({ intro, about, experience, projects, contact }) => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('intro');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = [intro, about, experience, projects, contact];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intro, about, experience, projects, contact]);
  
  return (
    <div className={styles.sideNav}>
      <ul className={styles.navLinks}>
        <li>
          <a 
            href={`#${intro}`} 
            className={activeSection === intro ? styles.active : ''}
          >
            {t('navigation.intro')}
          </a>
        </li>
        <li>
          <a 
            href={`#${about}`} 
            className={activeSection === about ? styles.active : ''}
          >
            {t('navigation.about')}
          </a>
        </li>
        <li>
          <a 
            href={`#${experience}`} 
            className={activeSection === experience ? styles.active : ''}
          >
            {t('navigation.experience')}
          </a>
        </li>
        <li>
          <a 
            href={`#${projects}`} 
            className={activeSection === projects ? styles.active : ''}
          >
            {t('navigation.projects')}
          </a>
        </li>
        <li>
          <a 
            href={`#${contact}`} 
            className={activeSection === contact ? styles.active : ''}
          >
            {t('navigation.contact')}
          </a>
        </li>
      </ul>
      
      <ul className={styles.socialLinks}>
        <li>
          <a 
            href="https://github.com/yassinehanafi3" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/elhanafiyassine/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { SideBar }; 