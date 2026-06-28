'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { StaggerContainer, StaggerItem } from '@/components/animations/MotionComponents';
import { useProjectsQuery } from '@/hooks/queries/useProjectsQuery';
import { useTranslation } from '@/core/i18n/i18n-context';
import { Project } from '@/types/project';

export function FeaturedProjectsSection() {
  const { data: projects = [] } = useProjectsQuery();
  const { t } = useTranslation();
  const featuredProjects = projects.filter((p: Project) => p.featured);

  return (
    <section className="py-20 bg-background text-foreground transition-colors">
      <Container>
        <SectionHeader
          badge="Selected Architecture"
          title={t('pages.projectsTitle')}
          subtitle="Mission-critical platforms, fullstack ecosystems, and core design systems built for scale."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project: Project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group"
          >
            <span>{t('navigation.projects')}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
