import { ApiClient } from '../client';
import { API_ENDPOINTS } from '../endpoints';
import { ContactFormInput } from '@/types/contact';

export const contactService = {
  submitContact: async (data: ContactFormInput): Promise<{ success: boolean; message: string }> => {
    const response = await ApiClient.post<{ success: boolean; message: string }>(
      API_ENDPOINTS.CONTACT,
      data,
    );
    return response.data;
  },
};
