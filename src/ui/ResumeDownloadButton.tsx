import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './ResumeDownloadButton.module.css';

const ResumeDownloadButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <a
      href="/Resume_Yassine_EL_HANAFI.pdf"
      download="Resume_Yassine_EL_HANAFI.pdf"
      className="btn-primary"
    >
      <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} aria-hidden />
      {t('resume.download')}
    </a>
  );
};

export default ResumeDownloadButton;
