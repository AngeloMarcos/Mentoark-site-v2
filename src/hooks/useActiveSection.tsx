import { useState, useEffect, useRef } from 'react';

interface UseActiveSectionOptions {
  sectionIds: string[];
  offset?: number;
  threshold?: number;
}

export const useActiveSection = (options: UseActiveSectionOptions) => {
  const { sectionIds, offset = 100, threshold = 0.3 } = options;
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the most visible section
      let maxRatio = 0;
      let mostVisible = '';

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisible = entry.target.id;
        }
      });

      // If we have a visible section, update
      if (mostVisible) {
        setActiveSection(mostVisible);
      }
    };

    // Create observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, offset, threshold]);

  return activeSection;
};
