import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/core/query/keys';
import { experienceService } from '@/core/api/services/experience.service';
import { MOCK_EXPERIENCES } from '@/data/experiences';

export function useExperienceQuery() {
  return useQuery({
    queryKey: queryKeys.experiences(),
    queryFn: async () => {
      try {
        const data = await experienceService.getExperiences();
        return data && data.length > 0 ? data : MOCK_EXPERIENCES;
      } catch {
        return MOCK_EXPERIENCES;
      }
    },
  });
}
