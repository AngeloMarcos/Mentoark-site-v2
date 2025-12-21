import { useCallback } from 'react';

interface NavigationOptions {
  offset?: number;
  duration?: number;
  onNavigate?: (targetId: string) => void;
  highlightDuration?: number;
}

export const useSmoothNavigation = (options: NavigationOptions = {}) => {
  const {
    offset = 80,
    highlightDuration = 1500,
    onNavigate
  } = options;

  const navigateTo = useCallback((href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (!element) return;

    // Add highlight class to target section
    element.classList.add('section-navigating');
    
    // Calculate position with offset
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    // Smooth scroll
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Callback
    onNavigate?.(targetId);

    // Remove highlight after duration
    setTimeout(() => {
      element.classList.remove('section-navigating');
      element.classList.add('section-highlight');
      
      setTimeout(() => {
        element.classList.remove('section-highlight');
      }, highlightDuration);
    }, 500);
  }, [offset, highlightDuration, onNavigate]);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  }, [navigateTo]);

  return { navigateTo, handleAnchorClick };
};
