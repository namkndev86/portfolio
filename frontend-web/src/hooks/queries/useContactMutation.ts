import { useMutation } from '@tanstack/react-query';
import { contactService } from '@/core/api/services/contact.service';
import { ContactFormInput } from '@/types/contact';

export function useContactMutation() {
  return useMutation({
    mutationFn: (data: ContactFormInput) => contactService.submitContact(data),
  });
}
