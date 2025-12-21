import { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollProgress);
    };

    // Initial calculation
    updateProgress();

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-background/20 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-accent transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      >
        {/* Glow effect at the end */}
        <div 
          className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-accent/50 to-transparent blur-sm"
          style={{ opacity: progress > 5 ? 1 : 0 }}
        />
      </div>
    </div>
  );
};
