import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { MOCK_PROJECTS } from '@/data/projects';
import { StaggerContainer, StaggerItem } from '@/components/animations/MotionComponents';

export function FeaturedProjectsSection() {
  const featuredProjects = MOCK_PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-20 bg-slate-950">
      <Container>
        <SectionHeader
          badge="Selected Architecture"
          title="Featured Engineering Projects"
          subtitle="A showcase of mission-critical platforms, fullstack ecosystems, and core design systems built for scale."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
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
            <span>View All Projects & System Architectures</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
