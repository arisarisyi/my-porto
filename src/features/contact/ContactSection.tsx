import { useState } from 'react';
import { personalInfo, socialLinks } from '../../data/profile';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { IconLink } from '../../components/ui/IconLink';
import { Mail, Send, MapPin } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Client-side only - open email client with prefilled data
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      // Try to open email client
      window.open(mailtoLink, '_blank');

      // Reset form after delay
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    } catch (error) {
      console.error('Failed to open email client:', error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id="contact" background="muted">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-12 h-12 text-accent-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-400">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-4">
              <Card>
                <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <IconLink
                    href={`mailto:${personalInfo.email}`}
                    icon="mail"
                    label={personalInfo.email}
                    className="text-slate-300 hover:text-accent-400"
                  />

                  <IconLink
                    href={`tel:${personalInfo.phone}`}
                    icon="phone"
                    label={personalInfo.phone}
                    className="text-slate-300 hover:text-accent-400"
                  />

                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-5 h-5" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-sm font-medium text-slate-400 mb-3">Follow me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <IconLink
                        key={link.name}
                        href={link.url}
                        icon={link.icon}
                        size="lg"
                        className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700"
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Opening Email Client...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}