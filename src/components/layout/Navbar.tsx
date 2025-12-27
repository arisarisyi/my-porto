import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { navigationItems } from '../../data/profile';
import type { NavigationItem } from '../../types/profile';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="text-xl font-bold text-accent-400 hover:text-accent-300 transition-colors"
          >
            IA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item: NavigationItem) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-accent-400 ${
                  activeSection === item.href.slice(1)
                    ? 'text-accent-400'
                    : 'text-slate-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-accent-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            {navigationItems.map((item: NavigationItem) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block py-2 text-sm font-medium transition-colors hover:text-accent-400 ${
                  activeSection === item.href.slice(1)
                    ? 'text-accent-400'
                    : 'text-slate-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}