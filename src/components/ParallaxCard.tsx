import React, { useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  parallaxSpeed?: number;
  direction?: "up" | "down" | "left" | "right";
  enableHover3D?: boolean;
  glowColor?: string;
  delay?: number;
}

export const ParallaxCard = ({
  children,
  className = "",
  parallaxSpeed = 0.1,
  direction = "up",
  enableHover3D = true,
  glowColor = "hsl(var(--primary))",
  delay = 0,
}: ParallaxCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const { ref: parallaxRef, style: parallaxStyle } = useParallax({
    speed: parallaxSpeed,
    direction,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableHover3D || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const hover3DStyle = enableHover3D && isHovered ? {
    transform: `perspective(1000px) rotateX(${-mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) scale3d(1.02, 1.02, 1.02)`,
  } : {};

  return (
    <div
      ref={parallaxRef}
      style={{
        ...parallaxStyle,
        animationDelay: `${delay}ms`,
      }}
      className="parallax-container"
    >
      <div
        ref={cardRef}
        className={cn(
          "relative rounded-2xl transition-all duration-300 ease-out",
          "bg-card/80 backdrop-blur-sm border border-border/50",
          "hover:border-primary/30",
          enableHover3D && "card-3d-hover",
          className
        )}
        style={{
          ...hover3DStyle,
          boxShadow: isHovered 
            ? `0 25px 50px -12px ${glowColor}20, 0 0 30px ${glowColor}10`
            : "0 10px 30px -10px hsl(var(--primary) / 0.1)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow effect */}
        <div 
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none",
            isHovered && "opacity-100"
          )}
          style={{
            background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${glowColor}15 0%, transparent 50%)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

// Floating icon component with continuous animation
interface FloatingIconProps {
  children: React.ReactNode;
  className?: string;
  floatIntensity?: "subtle" | "medium" | "strong";
  delay?: number;
}

export const FloatingIcon = ({
  children,
  className = "",
  floatIntensity = "medium",
  delay = 0,
}: FloatingIconProps) => {
  const intensityMap = {
    subtle: "animate-float-subtle",
    medium: "animate-float",
    strong: "animate-float-strong",
  };

  return (
    <div 
      className={cn(intensityMap[floatIntensity], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Stagger container for child animations
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 100,
}: StaggerContainerProps) => {
  return (
    <div className={cn("stagger-container", className)}>
      {React.Children.map(children, (child, index) => (
        <div 
          className="stagger-item"
          style={{ 
            animationDelay: `${index * staggerDelay}ms`,
            "--stagger-delay": `${index * staggerDelay}ms`,
          } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
