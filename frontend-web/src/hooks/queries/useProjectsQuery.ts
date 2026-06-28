import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/core/query/keys';
import { projectService } from '@/core/api/services/project.service';
import { MOCK_PROJECTS } from '@/data/projects';
import { Project } from '@/types/project';

export function useProjectsQuery(filters?: Record<string, any>) {
  return useQuery<Project[]>({
    queryKey: queryKeys.projects.list(filters),
    queryFn: async () => {
      try {
        const data = await projectService.getProjects();
        return data && data.length > 0 ? data : MOCK_PROJECTS;
      } catch {
        return MOCK_PROJECTS;
      }
    },
  });
}

export function useProjectDetailQuery(slug: string) {
  return useQuery<Project | undefined>({
    queryKey: queryKeys.projects.detail(slug),
    queryFn: async () => {
      try {
        const data = await projectService.getProjectBySlug(slug);
        return data || MOCK_PROJECTS.find((p: Project) => p.slug === slug);
      } catch {
        return MOCK_PROJECTS.find((p: Project) => p.slug === slug);
      }
    },
    enabled: !!slug,
  });
}
