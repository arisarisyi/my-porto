import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { SVGProps } from 'react';

interface IconLinkProps {
  href: string;
  icon: string;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Custom Medium icon component
const MediumIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12M20.96 12c0 3.54-1.51 6.55-3.76 7.93a6.8 6.8 0 0 0 3.76-7.93 6.8 6.8 0 0 0-3.76-7.93c2.25 1.38 3.76 4.39 3.76 7.93M24 12c0 3.81-1.89 7.03-4.47 8.15a6.8 6.8 0 0 0 4.47-8.15 6.8 6.8 0 0 0-4.47-8.15C22.11 5.97 24 9.19 24 12M14.54 12c0 3.17-2.13 5.78-4.8 5.78S4.93 15.17 4.93 12s2.14-5.78 4.8-5.78 4.8 2.61 4.8 5.78" />
    </svg>
  );
};

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  location: MapPin,
  external: ExternalLink,
  medium: MediumIcon,
};

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

export function IconLink({ href, icon, label, className = '', size = 'md' }: IconLinkProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-slate-400 hover:text-accent-400 transition-colors ${className}`}
      aria-label={label || icon}
    >
      <IconComponent className={sizeMap[size]} />
      {label && <span className="text-sm">{label}</span>}
    </a>
  );
}