import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import styles from './Timeline.module.css';

interface TimelineItemProps {
  data: {
    id: string;
    companyName: string;
    title: string;
    date: string;
    description: string;
    skills: string;
    link: string;
    isActive: boolean;
  };
  isActive: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data, isActive }) => {
  // Split description into bullet points (split by periods and filter out empty strings)
  const descriptionPoints = data.description
    .split('.')
    .map(point => point.trim())
    .filter(point => point.length > 0);

  return (
    <div className={`${styles.timelineItem} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.timelineDot} ${isActive ? styles.activeDot : ''}`}></div>
      <div className={styles.timelineContent}>
        <div className={styles.timelineDate}>{data.date}</div>
        <h3 className={styles.timelineTitle}>
          <a 
            href={data.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.companyLink}
          >
            {data.companyName}
          </a>
        </h3>
        <h4 className={styles.timelineSubtitle}>{data.title}</h4>
        <div className={styles.timelineDetails}>
          <ul className={styles.timelineDescription}>
            {descriptionPoints.map((point, index) => (
              <li key={index} className={styles.descriptionPoint}>
                {point}
              </li>
            ))}
          </ul>
          <p className={styles.timelineSkills}>{data.skills}</p>
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create experiences data from translations
  const experiences = [
    {
      id: "1",
      companyName: t('experience.inetum.company'),
      title: t('experience.inetum.title'),
      date: t('experience.inetum.date'),
      description: t('experience.inetum.description'),
      skills: "Spring Boot · Angular · RabbitMQ · PostgreSQL · SCRUM · GitLab · OpenFeign · Lua · Nginx",
      link: "https://www.linkedin.com/company/inetum/",
      isActive: true,
    },
    {
      id: "2",
      companyName: t('experience.orangeBusinessServices.company'),
      title: t('experience.orangeBusinessServices.title'),
      date: t('experience.orangeBusinessServices.date1'),
      description: t('experience.orangeBusinessServices.description1'),
      skills: "Microservices · Java · Spring Boot · Spring Cloud · Angular · MySQL · SCRUM · Git · Eureka · OpenFeign",
      link: "https://www.linkedin.com/company/orange-business-services-maroc",
      isActive: false,
    },
    {
      id: "3",
      companyName: t('experience.orangeBusinessServices.company'),
      title: t('experience.orangeBusinessServices.title'),
      date: t('experience.orangeBusinessServices.date2'),
      description: t('experience.orangeBusinessServices.description2'),
      skills: "Java · Spring Boot · Angular · Bootstrap · MySQL · SCRUM · Git · JHipster",
      link: "https://www.linkedin.com/company/orange-business-services-maroc",
      isActive: false,
    },
    {
      id: "4",
      companyName: t('experience.cegedim.company'),
      title: t('experience.cegedim.title'),
      date: t('experience.cegedim.date'),
      description: t('experience.cegedim.description'),
      skills: "Java · Spring Boot · React.js · Tailwind CSS · MySQL · SCRUM · Git",
      link: "https://www.linkedin.com/company/cegedim/",
      isActive: false,
    },
    {
      id: "5",
      companyName: t('experience.men.company'),
      title: t('experience.men.title'),
      date: t('experience.men.date'),
      description: t('experience.men.description'),
      skills: "Flask · HTML/CSS · JavaScript · Bootstrap · Firebase Realtime Database · Python",
      link: "https://www.men.gov.ma/",
      isActive: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && itemRefs.current.length > 0) {
        const scrollPosition = window.innerHeight * 0.3; // 30% from top of viewport

        // Find which timeline item is closest to the scroll position
        let closestIndex = 0;
        let minDistance = Infinity;

        itemRefs.current.forEach((itemRef, index) => {
          if (itemRef) {
            const itemTop = itemRef.getBoundingClientRect().top;
            const itemHeight = itemRef.offsetHeight;
            const itemCenter = itemTop + itemHeight / 2;
            const distance = Math.abs(itemCenter - scrollPosition);

            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          }
        });

        setActiveIndex(closestIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set the correct active index
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [experiences.length]);

  return (
    <Container className={styles.timelineContainer} ref={timelineRef}>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={styles.timelineItemWrapper}
          >
            <TimelineItem
              data={exp}
              isActive={index === activeIndex}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export { Timeline }; 