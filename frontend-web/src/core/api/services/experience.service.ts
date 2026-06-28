import { ApiClient } from '../client';
import { API_ENDPOINTS } from '../endpoints';
import { Experience } from '@/types/experience';

export const experienceService = {
  getExperiences: async (): Promise<Experience[]> => {
    const response = await ApiClient.get<Experience[]>(API_ENDPOINTS.EXPERIENCE);
    return response.data;
  },
};
