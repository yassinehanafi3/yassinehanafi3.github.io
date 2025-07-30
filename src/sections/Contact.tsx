import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = subject || 'Portfolio Contact';
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
      <h3 className="title">/contact</h3>
      
      <div className="row">
        <div className="col-md-6">
          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>Let's Get in Touch</h2>
            <p className={styles.contactDescription}>
              I enjoy discussing new projects and design challenges. Please share
              as much info as possible so we can get the most out of our first
              catch-up.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className={styles.contactText}>
                  <h4>Location</h4>
                  <p>Casablanca, Morocco</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.contactText}>
                  <h4>Email</h4>
                  <a 
                    href="mailto:elhanafiyassine21@gmail.com" 
                    className={styles.contactLink}
                  >
                    elhanafiyassine21@gmail.com
                  </a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={styles.contactText}>
                  <h4>Phone</h4>
                  <a 
                    href="tel:+212708161260" 
                    className={styles.contactLink}
                  >
                    +212 708 161 260
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
            <h2 className={styles.contactTitle}>Send Me an Email</h2>
            <p className={styles.contactDescription}>
              Write your message below and click "Send" to open your email client.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={styles.input}
                  placeholder="Enter subject (optional)"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Message:</label>
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
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact }; 