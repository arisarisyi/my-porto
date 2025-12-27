import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950',
  {
    variants: {
      variant: {
        primary: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500',
        secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 focus:ring-slate-600',
        outline: 'border border-slate-700 text-slate-300 hover:bg-slate-800 focus:ring-slate-600',
        ghost: 'text-slate-300 hover:bg-slate-800 hover:text-slate-200',
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'variant'>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  href?: string;
}

export function Button({ children, href, variant, size, className, ...props }: ButtonProps) {
  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        className={buttonVariants({ variant, size, className })}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}