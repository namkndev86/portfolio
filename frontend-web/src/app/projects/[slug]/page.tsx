import { Metadata } from 'next';
import { ProjectDetailView } from '@/features/projects/ProjectDetailView';
import { MOCK_PROJECTS } from '@/data/projects';
import { SITE_CONFIG } from '@/lib/constants';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = MOCK_PROJECTS.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | ${SITE_CONFIG.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  return (
    <div className="py-12 sm:py-20 bg-background min-h-screen text-foreground transition-colors">
      <ProjectDetailView slug={resolvedParams.slug} />
    </div>
  );
}
