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

  return (
    <div className={styles.group} role="group" aria-label={t('language.select')}>
      {LANGUAGES.map((lang) => {
        const active = current === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={active ? styles.active : styles.btn}
            aria-pressed={active}
            aria-label={t(`language.${lang.code}`)}
            title={t(`language.${lang.code}`)}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

export { LanguageSwitcher };
