import { Project, ProjectCategory } from '@/types/project';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export async function fetchProjects(category?: ProjectCategory | 'All', search?: string): Promise<Project[]> {
  const queryParams = new URLSearchParams();
  if (category && category !== 'All') queryParams.append('category', category);
  if (search) queryParams.append('search', search);

  const res = await fetch(`${API_BASE_URL}/projects?${queryParams.toString()}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch projects from API (${res.status})`);
  }
  const json = await res.json();
  return json.data || [];
}

export async function fetchProjectBySlug(slug: string): Promise<Project | undefined> {
  const res = await fetch(`${API_BASE_URL}/projects/${slug}`, { cache: 'no-store' });
  if (!res.ok) {
    if (res.status === 404) return undefined;
    throw new Error(`Failed to fetch project by slug from API (${res.status})`);
  }
  const json = await res.json();
  return json.data;
}

export async function fetchProfile() {
  const res = await fetch(`${API_BASE_URL}/profile`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch profile from API (${res.status})`);
  }
  const json = await res.json();
  return json.data;
}

export async function fetchExperiences() {
  const res = await fetch(`${API_BASE_URL}/experience`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch experiences from API (${res.status})`);
  }
  const json = await res.json();
  return json.data || [];
}
