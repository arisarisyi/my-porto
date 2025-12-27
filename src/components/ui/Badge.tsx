import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-slate-800 text-slate-200',
        primary: 'bg-accent-600/20 text-accent-400 border border-accent-600/30',
        secondary: 'bg-slate-700/50 text-slate-300',
        outline: 'border border-slate-600 text-slate-300',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, variant, size, className }: BadgeProps) {
  return (
    <span className={badgeVariants({ variant, size, className })}>
      {children}
    </span>
  );
}