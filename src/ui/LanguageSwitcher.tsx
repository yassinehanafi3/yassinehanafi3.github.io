import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
] as const;

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.slice(0, 2) || 'en';
  const activeIndex = Math.max(
    0,
    LANGUAGES.findIndex((lang) => lang.code === current)
  );

  return (
    <div className={styles.railWrap} role="group" aria-label={t('language.select')}>
      <div className={styles.segment}>
        <span
          className={styles.indicator}
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
          aria-hidden="true"
        />
        {LANGUAGES.map((lang) => {
          const active = current === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => i18n.changeLanguage(lang.code)}
              className={active ? styles.segmentActive : styles.segmentBtn}
              aria-pressed={active}
              aria-label={t(`language.${lang.code}`)}
              title={t(`language.${lang.code}`)}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { LanguageSwitcher };
