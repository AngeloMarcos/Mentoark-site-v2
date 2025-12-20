import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  duration?: number;
  decimals?: number;
}

export const useCountUp = (
  end: number,
  isVisible: boolean,
  options: UseCountUpOptions = {}
) => {
  const { duration = 2000, decimals = 0 } = options;
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const startTime = performance.now();
    const startValue = 0;

    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = startValue + (end - startValue) * easedProgress;

      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, decimals]);

  return count;
};
