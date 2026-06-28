import { Injectable, LoggerService, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLoggerService implements LoggerService {
  private context?: string;

  setContext(context: string) {
    this.context = context;
  }

  private formatMessage(level: string, message: any, context?: string) {
    const timestamp = new Date().toISOString();
    const ctx = context || this.context || 'Application';
    const logObject = {
      timestamp,
      level,
      context: ctx,
      message: typeof message === 'object' ? JSON.stringify(message) : message,
    };
    return JSON.stringify(logObject);
  }

  log(message: any, context?: string) {
    console.log(this.formatMessage('INFO', message, context));
  }

  error(message: any, trace?: string, context?: string) {
    const timestamp = new Date().toISOString();
    const ctx = context || this.context || 'Application';
    const logObject = {
      timestamp,
      level: 'ERROR',
      context: ctx,
      message: typeof message === 'object' ? JSON.stringify(message) : message,
      trace: trace || undefined,
    };
    console.error(JSON.stringify(logObject));
  }

  warn(message: any, context?: string) {
    console.warn(this.formatMessage('WARN', message, context));
  }

  debug(message: any, context?: string) {
    console.debug(this.formatMessage('DEBUG', message, context));
  }

  verbose(message: any, context?: string) {
    console.log(this.formatMessage('VERBOSE', message, context));
  }
}
