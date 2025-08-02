import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    
    // Show a subtle notification
    const notification = document.createElement('div');
    notification.textContent = `Language switched to ${newLang.toUpperCase()}`;
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
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

  const currentLang = i18n.language === 'en' ? 'EN' : 'FR';
  const nextLang = i18n.language === 'en' ? 'FR' : 'EN';

  return (
    <button
      onClick={toggleLanguage}
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
        gap: '8px'
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
      title={`Switch to ${nextLang}`}
    >
      <FontAwesomeIcon 
        icon={faGlobe} 
        style={{ 
          fontSize: '16px',
          animation: i18n.language === 'fr' ? 'spin 2s linear infinite' : 'none'
        }} 
      />
      <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
        {currentLang}
      </span>
      <span style={{ 
        fontSize: '12px', 
        opacity: 0.8,
        marginLeft: '2px',
        transition: 'transform 0.3s ease'
      }}>
        →
      </span>
    </button>
  );
};

export { LanguageSwitcher }; 