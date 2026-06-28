import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '@/lib/api-client';

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchProfile(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
