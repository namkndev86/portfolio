import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionComponents';
import { BIO_DATA } from '@/data/bio';
import { MOCK_SKILLS } from '@/data/skills';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SITE_CONFIG } from '@/lib/constants';
import {
  Award,
  BookOpen,
  CheckCircle,
  Code,
  Cpu,
  ShieldCheck,
  Layers,
  Zap,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: `About Me | ${SITE_CONFIG.name}`,
  description: BIO_DATA.shortIntroduction,
};

export default function AboutPage() {
  // Group skills by category
  const skillCategories = Array.from(new Set(MOCK_SKILLS.map((s) => s.category)));

  return (
    <div className="py-16 sm:py-24 bg-slate-950 min-h-screen">
      <Container>
        {/* Header */}
        <SectionHeader
          badge={BIO_DATA.sections.aboutHeader.badge}
          title={BIO_DATA.sections.aboutHeader.title}
          subtitle={BIO_DATA.sections.aboutHeader.subtitle}
        />

        {/* Personal Introduction & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <FadeIn className="lg:col-span-2 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Building Scalable Enterprise Web Platforms
            </h3>
            {BIO_DATA.fullBio.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-6">
            <Card className="border-indigo-500/30 bg-slate-900/80">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-indigo-400" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300">
                {BIO_DATA.keyAchievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                  Education & Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-300">
                {BIO_DATA.education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-xs text-slate-400">
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Core Engineering Philosophies */}
        <div className="mb-20">
          <SectionHeader
            badge={BIO_DATA.sections.corePhilosophies.badge}
            title={BIO_DATA.sections.corePhilosophies.title}
            subtitle={BIO_DATA.sections.corePhilosophies.subtitle}
            align="center"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {BIO_DATA.coreValues.map((value, idx) => {
              const icons = [
                <Layers key="0" className="h-5 w-5" />,
                <Zap key="1" className="h-5 w-5" />,
                <Users key="2" className="h-5 w-5" />,
              ];
              return (
                <StaggerItem key={idx}>
                  <Card className="h-full hover:border-indigo-500/40 transition-colors">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2">
                        {icons[idx % icons.length]}
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Technical Skills Overview Matrix */}
        <div>
          <SectionHeader
            badge={BIO_DATA.sections.technologyMatrix.badge}
            title={BIO_DATA.sections.technologyMatrix.title}
            subtitle={BIO_DATA.sections.technologyMatrix.subtitle}
            align="center"
          />

          <div className="space-y-10 mt-10">
            {skillCategories.map((category) => {
              const skillsInCategory = MOCK_SKILLS.filter((s) => s.category === category);
              return (
                <FadeIn
                  key={category}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillsInCategory.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                        </div>
                        <Badge variant={skill.featured ? 'default' : 'secondary'}>
                          {skill.proficiency}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
