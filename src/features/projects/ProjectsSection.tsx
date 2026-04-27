import { useState, useMemo } from 'react';
import { useModeData } from '../../hooks/useModeData';
import { useMode } from '../../contexts/ModeContext';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import type { Project } from '../../types/profile';

const allCategories = ['All', 'Security', 'Observability', 'Backend', 'Infrastructure'] as const;

export function ProjectsSection() {
  const { mode } = useMode();
  const { projects: allProjects } = useModeData();
  const [selectedCategory, setSelectedCategory] = useState<typeof allCategories[number]>('All');

  // Get available categories based on current mode's projects
  const availableCategories = useMemo(() => {
    const categories = new Set(allProjects.map(p => p.category));
    return ['All', ...Array.from(categories)] as typeof allCategories;
  }, [allProjects]);

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <Section id="projects">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-center mb-12">
            A selection of my notable work and contributions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {availableCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`min-w-[100px] ${
                  selectedCategory === category
                    ? mode === 'SE'
                      ? 'bg-cyan-600 hover:bg-cyan-700'
                      : 'bg-red-600 hover:bg-red-700'
                    : ''
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isPentest={mode === 'PENTEST'} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400">
                No projects found in the {selectedCategory.toLowerCase()} category.
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

interface ProjectCardProps {
  project: Project;
  isPentest: boolean;
}

function ProjectCard({ project, isPentest }: ProjectCardProps) {
  return (
    <Card variant={isPentest ? 'elevated-red' : 'elevated'} className="group hover:scale-[1.02] h-full">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <h3 className={`text-xl font-semibold text-white mb-2 ${isPentest ? 'group-hover:text-red-400' : 'group-hover:text-cyan-400'} transition-colors`}>
            {project.title}
          </h3>
          <Badge variant={isPentest ? 'primary-red' : 'primary'} size="sm">
            {project.category}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${isPentest ? 'text-red-400 hover:text-red-300' : 'text-cyan-400 hover:text-cyan-300'} font-medium text-sm transition-colors`}
          >
            View Project
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </Card>
  );
}