import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { PERSONAL_INFO } from '../constants/data';
import styles from './ResumeDownloadButton.module.css';

const ResumeDownloadButton: React.FC = () => {
  return (
    <a 
      href={PERSONAL_INFO.resumeUrl} 
      download="Resume_Yassine_EL_HANAFI_2025.pdf"
      className={styles.resumeButton}
    >
      <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
      Download Resume
    </a>
  );
};

export default ResumeDownloadButton; 