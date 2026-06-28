import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { ApiError } from './errors';
import { tokenManager } from './tokens';
import { API_ENDPOINTS } from './endpoints';
import { ApiResponse, CustomApiRequestConfig, FileUploadOptions, FileUploadProgress } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api/v1';

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor: Attach bearer token and client metadata headers
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const customConfig = config as CustomApiRequestConfig;
    if (customConfig.requiresAuth !== false) {
      const token = tokenManager.getAccessToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor: Handle 401 token refresh queue and global errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomApiRequestConfig & { _retry?: boolean };

    // Handle 503 Maintenance Mode
    if (error.response?.status === 503) {
      return Promise.reject(
        new ApiError(
          {
            statusCode: 503,
            message: 'System is under scheduled maintenance. Please try again shortly.',
            path: originalRequest?.url,
            timestamp: new Date().toISOString(),
          },
          true,
        ),
      );
    }

    // Handle 401 Unauthorized - Refresh Token Queue Workflow
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      if (originalRequest.url?.includes(API_ENDPOINTS.AUTH.REFRESH)) {
        tokenManager.clearTokens();
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = tokenManager.getRefreshToken();
      if (!refreshToken) {
        tokenManager.clearTokens();
        return Promise.reject(
          new ApiError({
            statusCode: 401,
            message: 'Authentication session expired.',
            timestamp: new Date().toISOString(),
          }),
        );
      }

      try {
        const { data } = await axios.post(`${BASE_URL}${API_ENDPOINTS.AUTH.REFRESH}`, {
          refreshToken,
        });
        const newAccessToken = data.data.accessToken;
        tokenManager.setAccessToken(newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        processQueue(null, newAccessToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        tokenManager.clearTokens();
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    const payload = (error.response?.data as any) || {
      statusCode: error.response?.status || 500,
      message: error.message || 'Network error occurred',
      path: originalRequest?.url,
      timestamp: new Date().toISOString(),
    };

    return Promise.reject(new ApiError(payload));
  },
);

export class ApiClient {
  public static async get<T>(endpoint: string, config?: CustomApiRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.get<ApiResponse<T>>(endpoint, config);
    return response.data;
  }

  public static async post<T>(endpoint: string, data?: any, config?: CustomApiRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.post<ApiResponse<T>>(endpoint, data, config);
    return response.data;
  }

  public static async put<T>(endpoint: string, data?: any, config?: CustomApiRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.put<ApiResponse<T>>(endpoint, data, config);
    return response.data;
  }

  public static async patch<T>(endpoint: string, data?: any, config?: CustomApiRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.patch<ApiResponse<T>>(endpoint, data, config);
    return response.data;
  }

  public static async delete<T>(endpoint: string, config?: CustomApiRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.delete<ApiResponse<T>>(endpoint, config);
    return response.data;
  }

  public static async upload<T>(endpoint: string, formData: FormData, options?: FileUploadOptions): Promise<ApiResponse<T>> {
    const { onProgress, ...config } = options || {};
    const response = await axiosInstance.post<ApiResponse<T>>(endpoint, formData, {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress: FileUploadProgress = {
            loaded: progressEvent.loaded,
            total: progressEvent.total,
            percentage: Math.round((progressEvent.loaded * 100) / progressEvent.total),
          };
          onProgress(progress);
        }
      },
    });
    return response.data;
  }

  public static async download(endpoint: string, config?: CustomApiRequestConfig): Promise<Blob> {
    const response = await axiosInstance.get(endpoint, {
      ...config,
      responseType: 'blob',
    });
    return response.data;
  }
}
