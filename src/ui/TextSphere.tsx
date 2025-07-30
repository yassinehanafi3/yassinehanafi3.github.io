import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import styles from './TextSphere.module.css';

interface TextSphereProps {
  texts: string[];
}

const TextSphere: React.FC<TextSphereProps> = ({ texts }) => {
  useEffect(() => {
    const container = '.tagcloud';

    const options = {
      radius: 300,
      maxSpeed: 'normal' as const,
      initSpeed: 'normal' as const,
      keep: true,
    };

    TagCloud(container, texts, options);
  }, [texts]);

  return (
    <div className={styles.textSphere}>
      <span className="tagcloud"></span>
    </div>
  );
};

export { TextSphere }; 