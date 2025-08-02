import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = subject || t('contact.form.defaultSubject');
    const body = message;

    // Create mailto link
    const mailtoLink = `mailto:elhanafiyassine21@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setSubject('');
    setMessage('');
  };

  return (
    <div id="contact" className="container">
      <h3 className="title">/{t('navigation.contact')}</h3>
      
      <div className="row">
        <div className="col-md-6">
          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>{t('contact.getInTouch')}</h2>
            <p className={styles.contactDescription}>
              {t('contact.description')}
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className={styles.contactText}>
                  <h4>{t('contact.location')}</h4>
                  <p>{t('personal.location')}</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.contactText}>
                  <h4>{t('contact.email')}</h4>
                  <a 
                    href="mailto:elhanafiyassine21@gmail.com" 
                    className={styles.contactLink}
                  >
                    {t('personal.email')}
                  </a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={styles.contactText}>
                  <h4>{t('contact.phone')}</h4>
                  <a 
                    href="tel:+212708161260" 
                    className={styles.contactLink}
                  >
                    {t('personal.phone')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.socialIcons}>
              <a 
                href="https://github.com/yassinehanafi3" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
              </a>
              <a 
                href="https://www.linkedin.com/in/elhanafiyassine/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className={styles.contactForm}>
            <h2 className={styles.contactTitle}>{t('contact.form.sendEmailTitle')}</h2>
            <p className={styles.contactDescription}>
              {t('contact.form.sendEmailDescription')}
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{t('contact.form.subject')}:</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={styles.input}
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>{t('contact.form.messagePlaceholder')}</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={styles.textarea}
                  rows={4}
                  required
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                {t('contact.form.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact }; 