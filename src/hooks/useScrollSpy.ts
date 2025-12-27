import { useState, useEffect } from 'react';

interface ScrollSpyOptions {
  offset?: number;
  threshold?: number;
}

export function useScrollSpy(ids: string[], options: ScrollSpyOptions = {}) {
  const { offset = 80 } = options;
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    let rafId: number;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + offset;
      let found = false;

      // Check each section to see if it's in view
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const element = document.getElementById(id);

        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        const sectionTop = offsetTop - 100; // Adjust for better detection
        const sectionBottom = offsetTop + offsetHeight;

        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveId(id);
          found = true;
          break;
        }
      }

      // If no section is found, set to the last one if scrolled to bottom
      if (!found && window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
        setActiveId(ids[ids.length - 1]);
      }
    };

    const handleScroll = () => {
      rafId = requestAnimationFrame(updateActiveSection);
    };

    // Initial check
    updateActiveSection();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [ids, offset]);

  return activeId;
}