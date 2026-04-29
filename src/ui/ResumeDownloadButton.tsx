import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './ResumeDownloadButton.module.css';

interface ResumeDownloadButtonProps {
  className?: string;
  size?: 'default' | 'hero';
}

const ResumeDownloadButton: React.FC<ResumeDownloadButtonProps> = ({ className, size = 'default' }) => {
  const { t } = useTranslation();

  return (
    <a
      href="/Resume_Yassine_EL_HANAFI.pdf"
      download="Resume_Yassine_EL_HANAFI.pdf"
      className={[styles.resumeButton, size === 'hero' && styles.resumeButtonHero, className]
        .filter(Boolean)
        .join(' ')}
    >
      <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
      {t('resume.download')}
    </a>
  );
};

export default ResumeDownloadButton; 