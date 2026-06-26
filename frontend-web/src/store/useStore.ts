import { create } from 'zustand';

interface PlatformState {
  theme: 'dark' | 'light';
  sidebarOpen: boolean;
  activeProjectSlug: string | null;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  setActiveProjectSlug: (slug: string | null) => void;
}

export const useStore = create<PlatformState>((set) => ({
  theme: 'dark',
  sidebarOpen: false,
  activeProjectSlug: null,
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setActiveProjectSlug: (slug) => set({ activeProjectSlug: slug }),
}));
