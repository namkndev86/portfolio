import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/core/query/keys';
import { profileService, UserProfile } from '@/core/api/services/profile.service';
import { BIO_DATA } from '@/data/bio';
import { MOCK_SKILLS } from '@/data/skills';

export function useProfileQuery() {
  return useQuery({
    queryKey: queryKeys.profile(),
    queryFn: async (): Promise<UserProfile> => {
      try {
        const data = await profileService.getProfile();
        return data || {
          name: BIO_DATA.name,
          role: BIO_DATA.title,
          bio: BIO_DATA.shortIntroduction,
          url: 'https://namnguyen.dev',
          github: 'https://github.com/namkndev86',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          skills: MOCK_SKILLS,
        };
      } catch {
        return {
          name: BIO_DATA.name,
          role: BIO_DATA.title,
          bio: BIO_DATA.shortIntroduction,
          url: 'https://namnguyen.dev',
          github: 'https://github.com/namkndev86',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          skills: MOCK_SKILLS,
        };
      }
    },
  });
}
