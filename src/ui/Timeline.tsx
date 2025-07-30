import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Experience } from '../types';
import styles from './Timeline.module.css';

interface TimelineItemProps {
  data: Experience;
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

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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