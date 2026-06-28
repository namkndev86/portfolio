'use client';

import { useState } from 'react';
import { Search, Layers } from 'lucide-react';
import { Project, ProjectCategory } from '@/types/project';
import { ProjectCard } from './ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/animations/MotionComponents';
import { useProjectsQuery } from '@/hooks/queries/useProjectsQuery';
import { useTranslation } from '@/core/i18n/i18n-context';

const CATEGORIES: (ProjectCategory | 'All')[] = ['All', 'Enterprise', 'Fullstack', 'Frontend', 'Personal'];

export function ProjectsCatalog() {
  const { data: projects = [] } = useProjectsQuery();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredProjects = projects.filter((project: Project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech: string) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <Container>
      <SectionHeader
        badge="Portfolio Catalog"
        title={t('pages.projectsTitle')}
        subtitle="Explore detailed software architectures, enterprise platforms, and open-source contributions."
      />

      {/* Controls Bar: Search & Category Filters */}
      <div className="mt-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border backdrop-blur-md">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by title or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-background border-border text-foreground focus-visible:ring-indigo-500 text-sm"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-lg text-xs font-semibold"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="py-20 text-center rounded-2xl border border-dashed border-border bg-card/50">
          <Layers className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">No Projects Found</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
            We couldn&apos;t find any projects matching &quot;{searchQuery}&quot; in the {selectedCategory} category.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </Container>
  );
}
