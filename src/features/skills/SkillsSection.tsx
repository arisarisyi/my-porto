import { skills } from '../../data/profile';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => (
              <Card
                key={category.category}
                variant="glass"
                padding="md"
                className="group hover:scale-[1.02] relative z-10"
              >
                <h3 className="text-lg font-semibold text-accent-400 mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="primary"
                      size="sm"
                      className="hover:scale-105 transition-transform"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}