import React, { useId } from 'react';
import styles from './PortraitFrame.module.css';

interface PortraitFrameProps {
  src: string;
  alt: string;
}

// Taller cloud — extra vertical room for a portrait (viewBox 280 × 340)
const CLOUD =
  'M 140 295 C 88 295 54 274 48 236 C 22 224 10 188 22 154 C 4 132 12 92 44 78 C 36 44 76 28 112 44 C 136 14 184 12 214 36 C 252 20 286 54 278 98 C 304 122 300 168 274 196 C 290 236 258 272 216 284 C 186 308 138 310 140 295 Z';

const CLOUD_CLIP =
  'M 0.5 0.868 C 0.314 0.868 0.193 0.806 0.171 0.694 C 0.079 0.659 0.036 0.553 0.079 0.453 C 0.014 0.388 0.043 0.271 0.157 0.229 C 0.129 0.129 0.271 0.082 0.4 0.129 C 0.486 0.041 0.657 0.035 0.764 0.106 C 0.9 0.059 1.021 0.159 0.993 0.288 C 1.086 0.359 1.071 0.494 0.979 0.576 C 1.036 0.694 0.921 0.8 0.771 0.835 C 0.664 0.906 0.493 0.912 0.5 0.868 Z';

const PortraitFrame: React.FC<PortraitFrameProps> = ({ src, alt }) => {
  const clipId = useId().replace(/:/g, '');

  return (
    <figure className={styles.figure}>
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={CLOUD_CLIP} />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.frame}>
        <svg className={styles.cloudBg} viewBox="0 0 280 340" aria-hidden="true" focusable="false">
          <path className={styles.cloudFill} d={CLOUD} />
        </svg>

        <div className={styles.photoWrap}>
          <img
            src={src}
            alt={alt}
            className={styles.photo}
            style={{ clipPath: `url(#${clipId})` }}
            loading="eager"
          />
        </div>
      </div>
    </figure>
  );
};

export { PortraitFrame };
