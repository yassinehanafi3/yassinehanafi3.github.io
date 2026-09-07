import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel } from '../ui';
import styles from './About.module.css';

const About: React.FC = () => {
  const { t } = useTranslation();

  const specs = [
    { label: t('about.spec.name'), value: t('personal.fullName') },
    { label: t('about.spec.role'), value: t('about.roleValue') },
    { label: t('about.spec.focus'), value: t('about.focusValue') },
    { label: t('about.spec.stack'), value: t('about.stackValue') },
    { label: t('about.spec.location'), value: t('personal.location') },
    { label: t('about.spec.current'), value: t('about.currentValue') },
  ];

  return (
    <Panel
      id="about"
      headingId="about-heading"
      index="01"
      label={t('navigation.about')}
      meta={t('about.systemMeta')}
    >
      <div className={styles.layout}>
        <dl className={styles.spec}>
          {specs.map((row) => (
            <div key={row.label} className="specRow">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.prose}>
          <p className={styles.body}>{t('about.description')}</p>
        </div>
      </div>
    </Panel>
  );
};

export { About };
