import React from 'react';
import styles from './Panel.module.css';

interface PanelProps {
  id?: string;
  headingId?: string;
  index?: string;
  label: string;
  meta?: React.ReactNode;
  headingAs?: 'h1' | 'h2' | 'p';
  children: React.ReactNode;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({
  id,
  headingId,
  index,
  label,
  meta,
  headingAs = 'h2',
  children,
  className,
}) => {
  const HeadingTag = headingAs;

  return (
    <div id={id} className={`${styles.panel} ${className ?? ''}`.trim()}>
      <div className={styles.chrome}>
        <HeadingTag id={headingId} className={styles.chromeLabel}>
          {index ? (
            <>
              <span className={styles.index}>{index}</span>
              <span className={styles.slash} aria-hidden="true">
                /
              </span>
            </>
          ) : null}
          <span>{label}</span>
        </HeadingTag>
        {meta ? <div className={styles.chromeMeta}>{meta}</div> : null}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export { Panel };
