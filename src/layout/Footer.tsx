import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        Copyright &copy; {currentYear} <span className={styles.author}>Yassine EL HANAFI</span>. All Rights Reserved
      </div>
    </footer>
  );
};

export { Footer }; 