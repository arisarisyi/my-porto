import { certifications } from '../../data/profile';
import { useMode } from '../../contexts/ModeContext';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  const { mode } = useMode();
  const isPentest = mode === 'PENTEST';

  return (
    <Section id="certifications" background="muted">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Award className={`w-12 h-12 ${isPentest ? 'text-red-400' : 'text-cyan-400'} mx-auto mb-4`} />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Certifications
            </h2>
            <p className="text-slate-400">
              Professional certifications that validate my expertise
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                variant={isPentest ? 'elevated-red' : 'elevated'}
                className={`group hover:scale-[1.02] ${
                  cert.link ? "cursor-pointer" : ""
                }`}
                onClick={() => cert.link && window.open(cert.link, "_blank")}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${isPentest ? 'bg-red-600/10 border border-red-600/20' : 'bg-cyan-600/10 border border-cyan-600/20'}`}>
                    <Award className={`w-6 h-6 ${isPentest ? 'text-red-400' : 'text-cyan-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold text-white mb-1 ${isPentest ? 'group-hover:text-red-400' : 'group-hover:text-cyan-400'} transition-colors`}>
                      {cert.title}
                    </h3>
                    <p className={`${isPentest ? 'text-red-400' : 'text-cyan-400'} font-medium mb-2`}>
                      {cert.issuer}
                    </p>
                    {cert.date && (
                      <Badge variant="secondary" size="sm">
                        {cert.date}
                      </Badge>
                    )}
                    {cert.credentialId && (
                      <p className="text-slate-500 text-sm mt-2">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
