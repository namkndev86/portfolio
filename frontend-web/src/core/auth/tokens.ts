const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export interface UserSession {
  id: string;
  email: string;
  name: string;
  roles: string[];
  permissions: string[];
}

export const tokenStorage = {
  getToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken: (token: string): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },
  removeToken: (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }
  },
  getUser: (): UserSession | null => {
    if (typeof window === "undefined") return null;
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },
  setUser: (user: UserSession): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  },
  removeUser: (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(USER_KEY);
    }
  },
  clearSession: (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  },
};
