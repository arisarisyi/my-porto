import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-xl border transition-all duration-200 relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'glass-card border-slate-800/50 hover:border-accent-600/50 hover:shadow-lg hover:shadow-accent-500/10',
        elevated: 'glass-card border-slate-700/50 shadow-lg hover:shadow-xl hover:border-accent-600/30',
        outlined: 'glass-card border-slate-700/50 hover:border-accent-600/50',
        glass: 'glass-card border-slate-800/30 hover:border-accent-600/30 hover:shadow-lg hover:shadow-accent-500/5',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, variant, padding, className, onClick }: CardProps) {
  return (
    <div
      className={cardVariants({ variant, padding, className })}
      onClick={onClick}
    >
      {/* Decorative gradient overlay */}
      <div className="card-decoration" />
      {children}
    </div>
  );
}