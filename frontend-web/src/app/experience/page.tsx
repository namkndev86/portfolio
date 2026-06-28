import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { FadeIn } from '@/components/animations/MotionComponents';
import { MOCK_EXPERIENCES } from '@/data/experiences';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SITE_CONFIG } from '@/lib/constants';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: `Career Experience | ${SITE_CONFIG.name}`,
  description: 'Detailed chronological timeline of software engineering roles, technical leadership, and system achievements.',
};

export default function ExperiencePage() {
  return (
    <div className="py-16 sm:py-24 bg-background min-h-screen text-foreground transition-colors">
      <Container>
        <SectionHeader
          badge="Career Journey"
          title="Professional Experience Timeline"
          subtitle="A chronological record of engineering leadership, scalable architecture implementations, and team contributions."
        />

        <div className="relative max-w-4xl mx-auto mt-16 pl-6 sm:pl-8 border-l-2 border-border space-y-12">
          {MOCK_EXPERIENCES.map((exp, idx) => (
            <FadeIn key={exp.id} delay={idx * 0.1} className="relative group">
              {/* Timeline dot marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary group-hover:scale-125 transition-all" />

              <Card className="hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {exp.employmentType}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-1 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-primary font-semibold text-lg">{exp.company}</span>
                        {exp.companyUrl && (
                          <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-lg border border-border">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-lg border border-border">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6 bg-muted/40 p-4 rounded-xl border border-border">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Key Achievements & Impact:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologiesUsed.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}
