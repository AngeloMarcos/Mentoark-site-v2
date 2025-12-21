import { useEffect, useRef, useState, useCallback } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  easing?: "linear" | "ease-out" | "ease-in-out";
}

interface ParallaxValues {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotate: number;
}

export const useParallax = ({
  speed = 0.5,
  direction = "up",
  easing = "ease-out",
}: UseParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<ParallaxValues>({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
  });

  const calculateValues = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    
    // Progress: -1 (above viewport) to 1 (below viewport), 0 at center
    const progress = (elementCenter - viewportCenter) / windowHeight;
    
    // Clamp to reasonable range
    const clampedProgress = Math.max(-1, Math.min(1, progress));
    
    let x = 0;
    let y = 0;
    
    const offset = clampedProgress * speed * 100;
    
    switch (direction) {
      case "up":
        y = offset;
        break;
      case "down":
        y = -offset;
        break;
      case "left":
        x = offset;
        break;
      case "right":
        x = -offset;
        break;
    }

    // Calculate opacity based on visibility
    const visibilityProgress = 1 - Math.abs(clampedProgress);
    const opacity = Math.max(0.3, visibilityProgress);
    
    // Subtle scale effect
    const scale = 0.95 + (visibilityProgress * 0.05);
    
    // Subtle rotation
    const rotate = clampedProgress * speed * 2;

    setValues({ x, y, scale, opacity, rotate });
  }, [speed, direction]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateValues();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [calculateValues]);

  const style = {
    transform: `translate3d(${values.x}px, ${values.y}px, 0) scale(${values.scale}) rotate(${values.rotate}deg)`,
    opacity: values.opacity,
    transition: easing === "linear" ? "none" : `transform 0.1s ${easing}`,
    willChange: "transform, opacity",
  };

  return { ref, style, values };
};
