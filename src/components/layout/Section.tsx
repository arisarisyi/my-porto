import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted';
}

export function Section({ id, children, className = '', background = 'default' }: SectionProps) {
  const backgroundClass = background === 'muted'
    ? 'bg-slate-900/50'
    : 'bg-slate-950';

  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${backgroundClass} ${className}`}
    >
      {children}
    </section>
  );
}