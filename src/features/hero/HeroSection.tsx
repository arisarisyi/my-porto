import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/profile';
import { Button } from '../../components/ui/Button';
import { IconLink } from '../../components/ui/IconLink';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { useScrollToSection } from '../../hooks/useScrollToSection';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="hero-decoration -top-20 -right-20" />
      <div className="hero-decoration -bottom-20 -left-20" style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' }} />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            {/* Photo and Social Links */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <div className="relative">
                <img
                  src={personalInfo.photo || '/me.jpeg'}
                  alt={personalInfo.name}
                  className="w-64 h-64 rounded-2xl object-cover shadow-2xl shadow-accent-500/20 border-4 border-slate-800"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder if image doesn't exist */}
                <div className="w-64 h-64 rounded-2xl bg-slate-800 flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-6xl text-slate-600">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-4 mt-6"
              >
                {socialLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconLink
                      href={link.url}
                      icon={link.icon}
                      size="lg"
                      className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="flex-1">
              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                {personalInfo.name}
              </motion.h1>

              {/* Title */}
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl text-accent-400 font-semibold mb-6"
              >
                {personalInfo.title}
              </motion.h2>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-8"
              >
                <IconLink
                  href={`https://maps.google.com/?q=${personalInfo.location}`}
                  icon="location"
                  label={personalInfo.location}
                  size="sm"
                  className="hover:text-slate-300"
                />
              </motion.div>

              {/* Summary */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed"
              >
                {personalInfo.summary}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href={personalInfo.cvUrl || "/cv.pdf"}
                  className="group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  View Resume
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('experience')}
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-400 hover:text-accent-400 transition-all duration-200"
              aria-label="Scroll down"
              whileHover={{ y: -2 }}
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}