import React from 'react';
import styles from './PortraitFrame.module.css';

interface PortraitFrameProps {
  src: string;
  alt: string;
}

const PortraitFrame: React.FC<PortraitFrameProps> = ({ src, alt }) => {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <img src={src} alt={alt} className={styles.photo} loading="eager" />
      </div>
      <figcaption className={styles.caption}>IMG / 01</figcaption>
    </figure>
  );
};

export { PortraitFrame };
