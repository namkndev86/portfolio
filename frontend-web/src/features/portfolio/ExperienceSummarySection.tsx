import Link from 'next/link';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MOCK_EXPERIENCES } from '@/data/experiences';
import { FadeIn } from '@/components/animations/MotionComponents';
import { Card, CardContent } from '@/components/ui/card';

export function ExperienceSummarySection() {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <Container>
        <SectionHeader
          badge="Career Milestone Summary"
          title="Experience Highlights"
          subtitle="Proven leadership in delivering cloud systems, leading engineering teams, and modernizing legacy stacks."
        />

        <div className="max-w-4xl mx-auto space-y-6 mt-12">
          {MOCK_EXPERIENCES.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.1}>
              <Card className="hover:border-slate-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-indigo-400" />
                        {exp.position}
                      </h3>
                      <p className="text-indigo-300 font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                    {exp.technologiesUsed.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono rounded bg-indigo-500/10 text-indigo-300 px-2 py-0.5 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center space-x-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group"
          >
            <span>View Complete Interactive Career Timeline</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
