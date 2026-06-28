import { Global, Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { AuditLogInterceptor } from './audit.interceptor';

@Global()
@Module({
  providers: [AuditService, AuditLogInterceptor],
  exports: [AuditService, AuditLogInterceptor],
})
export class AuditModule {}
