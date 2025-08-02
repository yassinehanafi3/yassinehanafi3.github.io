import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './ResumeDownloadButton.module.css';

const ResumeDownloadButton: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <a 
      href="/Resume_Yassine_EL_HANAFI_2025.pdf" 
      download="Resume_Yassine_EL_HANAFI_2025.pdf"
      className={styles.resumeButton}
    >
      <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
      {t('resume.download')}
    </a>
  );
};

export default ResumeDownloadButton; 