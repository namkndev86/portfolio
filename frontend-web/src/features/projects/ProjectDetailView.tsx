'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Layers, ShieldAlert, CheckCircle2, Cpu, Lightbulb, Calendar, UserCheck } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { Container } from '@/components/common/Container';
import { FadeIn } from '@/components/animations/MotionComponents';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProjectDetailQuery } from '@/hooks/queries/useProjectsQuery';
import { useTranslation } from '@/core/i18n/i18n-context';

export function ProjectDetailView({ slug }: { slug: string }) {
  const { data: project, isLoading } = useProjectDetailQuery(slug);
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="py-20 text-center text-muted-foreground">
        <p>{t('common.loading')}</p>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <Container>
      {/* Back Navigation */}
      <FadeIn direction="down" className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('common.back')}
        </Link>
      </FadeIn>

      {/* Hero Header */}
      <FadeIn className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="accent">{project.category}</Badge>
          <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {project.startDate} — {project.endDate}
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-foreground sm:text-5xl tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-indigo-300 font-medium max-w-3xl">
          {project.tagline}
        </p>

        {/* Action Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {project.liveDemoUrl && (
            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
              <Button variant="default" size="md">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" size="md">
                <GithubIcon className="mr-2 h-4 w-4" />
                {t('project.sourceCode')}
              </Button>
            </a>
          )}
        </div>
      </FadeIn>

      {/* Main Banner Image */}
      <FadeIn className="relative h-64 sm:h-96 md:h-[480px] w-full rounded-2xl overflow-hidden border border-border shadow-2xl mb-16 bg-background">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </FadeIn>

      {/* Grid Showcase Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Column (2 cols) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-indigo-400" />
              System Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {project.description}
            </p>
          </FadeIn>

          {/* Responsibilities */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-indigo-400" />
              Key Responsibilities & Deliverables
            </h2>
            <ul className="space-y-3">
              {project.responsibilities.map((resp: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Challenges & Solutions */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-purple-400" />
              Engineering Challenges & Solutions
            </h2>
            <div className="space-y-6">
              {project.challengesAndSolutions.map((cs: { challenge: string; solution: string }, idx: number) => (
                <Card key={idx} className="border-purple-500/20 bg-purple-950/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-purple-300 font-semibold flex items-center gap-2">
                      <span className="text-xs font-mono bg-purple-500/20 px-2 py-0.5 rounded text-purple-300">
                        Challenge #{idx + 1}
                      </span>
                      {cs.challenge}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground pt-2 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-foreground font-medium">Architectural Solution: </strong>
                      {cs.solution}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>

          {/* Architecture */}
          {project.architecture && (
            <FadeIn>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-indigo-400" />
                System Architecture
              </h2>
              <Card className="border-indigo-500/30 bg-card p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.architecture.summary}
                </p>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Core Components:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.keyComponents.map((comp: string) => (
                    <span
                      key={comp}
                      className="text-xs font-semibold bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-md border border-indigo-500/30"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          )}

          {/* Lessons Learned */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-400" />
              Lessons Learned & Key Takeaways
            </h2>
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground bg-card p-4 rounded-xl border border-border"
                >
                  <span className="text-indigo-400 font-bold font-mono">0{idx + 1}.</span>
                  <span className="leading-relaxed">{lesson}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Sidebar Column (1 col) */}
        <div className="space-y-6">
          {/* Tech Stack */}
          <FadeIn>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{t('project.technologies')}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs font-mono rounded-lg bg-accent px-3 py-1.5 text-indigo-300 border border-border font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </CardContent>
            </Card>
          </FadeIn>

          {/* Role Card */}
          <FadeIn delay={0.1}>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Engineering Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-indigo-400">{project.role}</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}
