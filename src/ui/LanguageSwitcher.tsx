import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);

    const notification = document.createElement('div');
    notification.textContent = `Language switched to ${langCode.toUpperCase()}`;
    notification.style.cssText = `
      position: fixed;
      top: 1.75rem;
      right: 10rem;
      background: rgba(18, 18, 20, 0.92);
      color: var(--foreground, #fafafa);
      padding: 0.5rem 0.875rem;
      border-radius: 0.875rem;
      font-size: 0.75rem;
      font-weight: 500;
      z-index: 1001;
      opacity: 0;
      transform: translateY(-6px);
      transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    `;

    document.body.appendChild(notification);

    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-6px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 200);
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.trigger}
        title="Select Language"
      >
        <div className={styles.triggerInner}>
          <FontAwesomeIcon
            icon={faGlobe}
            style={{
              fontSize: '0.875rem',
              animation:
                i18n.language === 'fr' || i18n.language === 'de' ? 'spin 2s linear infinite' : 'none',
            }}
          />
          <span style={{ fontSize: '1rem', lineHeight: 1 }}>{currentLanguage.flag}</span>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.menu} role="listbox">
          {languages.map((language) => {
            const active = i18n.language === language.code;
            return (
              <button
                key={language.code}
                type="button"
                onClick={() => changeLanguage(language.code)}
                className={`${styles.menuItem} ${active ? styles.menuItemActive : ''}`}
                role="option"
                aria-selected={active}
              >
                <span style={{ fontSize: '1.125rem', lineHeight: 1 }}>{language.flag}</span>
                <span>{language.name}</span>
                {active && <span className={styles.indicator} aria-hidden />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { LanguageSwitcher };
