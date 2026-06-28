import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventBusService } from '../events/event-bus.service';
import { PlatformEvent } from '../events/events.enum';
import { AuditRecord } from './audit.service';

@Injectable()
export class AuditLogInterceptor implements NestInterceptor {
  constructor(private readonly eventBus: EventBusService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;

    const mutatingMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];
    if (!mutatingMethods.includes(method)) {
      return next.handle();
    }

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const user = request.user;

        const auditRecord: AuditRecord = {
          userId: user?.id,
          userEmail: user?.email,
          action: `HTTP_${method}`,
          method,
          path: request.url,
          statusCode: response.statusCode,
          ip: request.ip,
          userAgent: request.headers['user-agent'],
          timestamp: new Date().toISOString(),
        };

        this.eventBus.publish(PlatformEvent.AUDIT_LOG_CREATED, auditRecord);
      }),
    );
  }
}
