import { useCallback, useEffect, useState } from 'react';

export const SECTIONS = [
  'intro',
  'about',
  'stack',
  'experience',
  'projects',
  'contact',
] as const;

export type SectionId = (typeof SECTIONS)[number];

export function useActiveSection(initial: SectionId = 'intro'): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(initial);

  const handleScroll = useCallback(() => {
    const marker = 96;
    let current: SectionId = 'intro';

    for (const id of SECTIONS) {
      const element = document.getElementById(id);
      if (!element) continue;
      if (element.getBoundingClientRect().top <= marker) {
        current = id;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, [handleScroll]);

  return activeSection;
}
