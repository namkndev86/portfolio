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
    <div className="py-16 sm:py-24 bg-background min-h-screen text-foreground transition-colors">
      <Container>
        {/* Header */}
        <SectionHeader
          badge={BIO_DATA.sections.aboutHeader.badge}
          title={BIO_DATA.sections.aboutHeader.title}
          subtitle={BIO_DATA.sections.aboutHeader.subtitle}
        />

        {/* Personal Introduction & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <FadeIn className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              Building Scalable Enterprise Web Platforms
            </h3>
            {BIO_DATA.fullBio.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-6">
            <Card className="border-primary/20 bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {BIO_DATA.keyAchievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-500" />
                  Education & Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {BIO_DATA.education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">
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
                  <Card className="h-full hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                        {icons[idx % icons.length]}
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillsInCategory.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border hover:border-primary/40 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-semibold text-foreground">{skill.name}</span>
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
