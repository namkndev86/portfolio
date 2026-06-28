export const queryKeys = {
  all: ['platform'] as const,
  profile: () => [...queryKeys.all, 'profile'] as const,
  projects: {
    all: () => [...queryKeys.all, 'projects'] as const,
    list: (filters?: Record<string, any>) => [...queryKeys.projects.all(), { filters }] as const,
    detail: (slug: string) => [...queryKeys.projects.all(), slug] as const,
  },
  experiences: () => [...queryKeys.all, 'experiences'] as const,
  skills: () => [...queryKeys.all, 'skills'] as const,
};
