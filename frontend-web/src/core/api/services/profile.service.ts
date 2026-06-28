import { ApiClient } from '../client';
import { API_ENDPOINTS } from '../endpoints';

export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  url: string;
  github: string;
  linkedin: string;
  twitter: string;
  skills: any[];
}

export const profileService = {
  getProfile: async (): Promise<UserProfile> => {
    const response = await ApiClient.get<UserProfile>(API_ENDPOINTS.PROFILE);
    return response.data;
  },
};
