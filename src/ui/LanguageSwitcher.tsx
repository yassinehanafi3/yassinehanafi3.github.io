import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    
         // Show a subtle notification
     const notification = document.createElement('div');
     notification.textContent = `Language switched to ${langCode.toUpperCase()}`;
     notification.style.cssText = `
       position: fixed;
       top: 30px;
       right: 160px;
       background: rgba(100, 255, 218, 0.9);
       color: #0a192f;
       padding: 8px 16px;
       border-radius: 20px;
       font-size: 12px;
       font-weight: 600;
       z-index: 1001;
       opacity: 0;
       transform: translateY(-10px);
       transition: all 0.3s ease;
       backdrop-filter: blur(10px);
       box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
     `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 2 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  };

  // Close dropdown when clicking outside
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
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-outline-primary btn-sm"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          borderRadius: '50px',
          padding: '10px 16px',
          fontSize: '14px',
          fontWeight: '600',
          border: '2px solid #64ffda',
          color: '#64ffda',
          backgroundColor: 'rgba(100, 255, 218, 0.1)',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px rgba(100, 255, 218, 0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          minWidth: '90px',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#64ffda';
          e.currentTarget.style.color = '#0a192f';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(100, 255, 218, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
          e.currentTarget.style.color = '#64ffda';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(100, 255, 218, 0.2)';
        }}
        title="Select Language"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon 
            icon={faGlobe} 
            style={{ 
              fontSize: '16px',
              animation: (i18n.language === 'fr' || i18n.language === 'de') ? 'spin 2s linear infinite' : 'none'
            }} 
          />
          <span style={{ fontSize: '18px' }}>{currentLanguage.flag}</span>
        </div>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          style={{ 
            fontSize: '12px',
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            zIndex: 999,
            backgroundColor: 'rgba(10, 25, 47, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '2px solid #64ffda',
            borderRadius: '15px',
            padding: '8px 0',
            minWidth: '120px',
            boxShadow: '0 8px 32px rgba(100, 255, 218, 0.3)',
            animation: 'slideDown 0.3s ease'
          }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'transparent',
                border: 'none',
                color: i18n.language === language.code ? '#64ffda' : '#8892b0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '14px',
                fontWeight: i18n.language === language.code ? '600' : '400',
                transition: 'all 0.2s ease',
                borderRadius: '0',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (i18n.language !== language.code) {
                  e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                  e.currentTarget.style.color = '#64ffda';
                }
              }}
              onMouseLeave={(e) => {
                if (i18n.language !== language.code) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#8892b0';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>{language.flag}</span>
              <span>{language.name}</span>
              {i18n.language === language.code && (
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#64ffda',
                  marginLeft: 'auto'
                }} />
              )}
            </button>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </div>
  );
};

export { LanguageSwitcher }; 