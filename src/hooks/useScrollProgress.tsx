import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollProgressOptions {
  offset?: number; // Start tracking before element enters viewport
  threshold?: number;
}

interface ScrollProgressValues {
  progress: number; // 0 to 1
  isInView: boolean;
  scrollDirection: "up" | "down" | null;
}

export const useScrollProgress = ({
  offset = 0,
  threshold = 0,
}: UseScrollProgressOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [values, setValues] = useState<ScrollProgressValues>({
    progress: 0,
    isInView: false,
    scrollDirection: null,
  });

  const calculateProgress = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const currentScrollY = window.scrollY;
    
    // Determine scroll direction
    const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
    lastScrollY.current = currentScrollY;

    // Calculate when element is visible
    const elementTop = rect.top - offset;
    const elementBottom = rect.bottom + offset;
    
    const isInView = elementTop < windowHeight && elementBottom > 0;
    
    // Progress: 0 when entering viewport, 1 when leaving
    let progress = 0;
    
    if (isInView) {
      const totalDistance = windowHeight + rect.height + (offset * 2);
      const traveled = windowHeight - elementTop + offset;
      progress = Math.max(0, Math.min(1, traveled / totalDistance));
    } else if (elementTop >= windowHeight) {
      progress = 0;
    } else {
      progress = 1;
    }

    setValues({ progress, isInView, scrollDirection });
  }, [offset]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [calculateProgress]);

  return { ref, ...values };
};

// Utility hook for staggered animations
export const useStaggeredReveal = (itemCount: number, baseDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger reveal each item
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * baseDelay);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, baseDelay]);

  return { containerRef, visibleItems };
};
