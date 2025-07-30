import React from 'react';
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
  return (
    <div className={styles.sideNav}>
      <ul className={styles.navLinks}>
        <li><a href={`#${intro}`}>/home</a></li>
        <li><a href={`#${about}`}>/about</a></li>
        <li><a href={`#${experience}`}>/experience</a></li>
        <li><a href={`#${projects}`}>/projects</a></li>
        <li><a href={`#${contact}`}>/contact</a></li>
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