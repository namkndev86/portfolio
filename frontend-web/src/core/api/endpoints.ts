export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  PROFILE: '/profile',
  PROJECTS: {
    LIST: '/projects',
    DETAIL: (slug: string) => `/projects/${slug}`,
  },
  EXPERIENCE: '/experience',
  CONTACT: '/contact',
  HEALTH: '/health',
  MAINTENANCE: '/system/maintenance',
} as const;
