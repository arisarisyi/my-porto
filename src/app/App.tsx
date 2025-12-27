import { useEffect, useState } from 'react';
import { navigationItems } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LoadingScreen } from '../components/effects/LoadingScreen';
import { HeroSection } from '../features/hero/HeroSection';
import { ExperienceSection } from '../features/experience/ExperienceSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { SkillsSection } from '../features/skills/SkillsSection';
import { CertificationsSection } from '../features/certifications/CertificationsSection';
import { EducationSection } from '../features/education/EducationSection';
import { ContactSection } from '../features/contact/ContactSection';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Get section IDs from navigation items
  const sectionIds = navigationItems.map(item => item.href.slice(1));
  const activeSection = useScrollSpy(sectionIds);

  // Set initial dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Hide loading screen after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300); // 2.3 seconds to match loading screen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />

        <main>
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}