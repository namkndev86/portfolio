import { create } from 'zustand';
import { ProjectCategory } from '@/types/project';

interface UIState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: ProjectCategory | 'All';
  setSelectedCategory: (category: ProjectCategory | 'All') => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  selectedCategory: 'All',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
