import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '@/lib/api-client';
import { ProjectCategory } from '@/types/project';

export function useProjects(category?: ProjectCategory | 'All', search?: string) {
  return useQuery({
    queryKey: ['projects', category, search],
    queryFn: () => fetchProjects(category, search),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
