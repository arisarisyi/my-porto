import { certifications } from '../../data/profile';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  return (
    <Section id="certifications" background="muted">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-accent-400 mx-auto mb-4" />
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
                className={`group hover:scale-[1.02] ${
                  cert.link ? "cursor-pointer hover:shadow-accent-500/10" : ""
                }`}
                onClick={() => cert.link && window.open(cert.link, "_blank")}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-600/10 border border-accent-600/20">
                    <Award className="w-6 h-6 text-accent-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-accent-400 font-medium mb-2">
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