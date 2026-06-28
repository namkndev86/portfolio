import { ApiErrorPayload } from './types';

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors: string[];
  public readonly path?: string;
  public readonly timestamp: string;
  public readonly isMaintenance?: boolean;

  constructor(payload: ApiErrorPayload, isMaintenance = false) {
    const message = Array.isArray(payload.message)
      ? payload.message.join(', ')
      : payload.message || 'An unexpected API error occurred';
    super(message);
    this.name = 'ApiError';
    this.statusCode = payload.statusCode || 500;
    this.errors = Array.isArray(payload.message) ? payload.message : [message];
    this.path = payload.path;
    this.timestamp = payload.timestamp || new Date().toISOString();
    this.isMaintenance = isMaintenance;
  }
}
