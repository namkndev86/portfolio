import { ApiClient } from '../client';
import { API_ENDPOINTS } from '../endpoints';
import { Project } from '@/types/project';

export const projectService = {
  getProjects: async (): Promise<Project[]> => {
    const response = await ApiClient.get<Project[]>(API_ENDPOINTS.PROJECTS.LIST);
    return response.data;
  },
  getProjectBySlug: async (slug: string): Promise<Project> => {
    const response = await ApiClient.get<Project>(API_ENDPOINTS.PROJECTS.DETAIL(slug));
    return response.data;
  },
};
