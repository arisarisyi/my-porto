import { experiences } from '../../data/profile';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-center mb-12">
            My journey through various roles and companies
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-slate-950 transform -translate-x-1/2" />

                  {/* Experience Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card variant="elevated" className="group hover:scale-[1.02]">
                      <div className="flex flex-col space-y-3">
                        {/* Header */}
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-accent-400 font-medium">
                            {exp.company}
                          </p>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" size="sm">
                            {exp.period}
                          </Badge>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2 text-slate-300">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent-500 mt-1.5 flex-shrink-0">
                                •
                              </span>
                              <span className="text-sm leading-relaxed">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}