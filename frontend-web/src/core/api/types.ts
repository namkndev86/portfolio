import { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
  timestamp: string;
}

export interface ApiErrorPayload {
  statusCode: number;
  message: string | string[];
  error?: string;
  path?: string;
  timestamp: string;
}

export interface CustomApiRequestConfig extends AxiosRequestConfig {
  requiresAuth?: boolean;
  skipMaintenanceCheck?: boolean;
}

export interface FileUploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface FileUploadOptions extends CustomApiRequestConfig {
  onProgress?: (progress: FileUploadProgress) => void;
}
