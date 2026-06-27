import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { FadeIn } from '@/components/animations/MotionComponents';
import { ContactForm } from '@/features/contact/ContactForm';
import { SITE_CONFIG } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons/BrandIcons';

export const metadata: Metadata = {
  title: `Contact & Collaboration | ${SITE_CONFIG.name}`,
  description: 'Get in touch for system architecture consulting, engineering leadership, and speaking opportunities.',
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-950 min-h-screen">
      <Container>
        <SectionHeader
          badge="Get in Touch"
          title="Contact & Strategic Collaboration"
          subtitle="Let&apos;s discuss system engineering, cloud architecture consulting, or technical leadership roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
          {/* Contact Info & Socials */}
          <FadeIn className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Connect Directly
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                I am currently open to high-impact software architecture challenges, technical leadership opportunities, and strategic platform consultations.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <Card className="border-slate-800 bg-slate-900/60">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase">Direct Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-900/60">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase">Location & Timezone</p>
                    <p className="text-sm font-semibold text-white">
                      {SITE_CONFIG.location} (UTC+7)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-900/60">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase">Availability</p>
                    <p className="text-sm font-semibold text-white">
                      Response time within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Platform Grid */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Social Platforms
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={SITE_CONFIG.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <TwitterIcon className="h-4 w-4 text-sky-400" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
