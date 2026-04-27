import { education } from '../../data/profile';
import { useMode } from '../../contexts/ModeContext';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  const { mode } = useMode();
  const isPentest = mode === 'PENTEST';

  return (
    <Section id="education">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className={`w-12 h-12 ${isPentest ? 'text-red-400' : 'text-cyan-400'} mx-auto mb-4`} />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Education
            </h2>
            <p className="text-slate-400">
              Academic background and foundation
            </p>
          </div>

          <Card variant={isPentest ? 'elevated-red' : 'elevated'} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className={`p-4 rounded-lg ${isPentest ? 'bg-red-600/10 border border-red-600/20' : 'bg-cyan-600/10 border border-cyan-600/20'}`}>
                  <GraduationCap className={`w-8 h-8 ${isPentest ? 'text-red-400' : 'text-cyan-400'}`} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {education.degree}
                </h3>
                <p className={`${isPentest ? 'text-red-400' : 'text-cyan-400'} font-medium mb-4`}>
                  {education.university}
                </p>
                <Badge variant="secondary">
                  {education.period}
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}