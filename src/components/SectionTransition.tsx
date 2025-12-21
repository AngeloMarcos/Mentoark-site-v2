import { ReactNode } from 'react';

interface SectionTransitionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const SectionTransition = ({ id, children, className = '' }: SectionTransitionProps) => {
  return (
    <section
      id={id}
      className={`section-transition ${className}`}
    >
      {children}
    </section>
  );
};
