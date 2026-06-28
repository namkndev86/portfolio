import { Metadata } from 'next';
import { ProjectsCatalog } from '@/features/projects/ProjectsCatalog';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Engineering Projects | ${SITE_CONFIG.name}`,
  description: 'Explore enterprise platforms, cloud architectures, and open-source fullstack projects.',
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24 bg-background min-h-screen text-foreground transition-colors">
      <ProjectsCatalog />
    </div>
  );
}
