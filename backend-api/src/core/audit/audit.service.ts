import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventBusService } from '../events/event-bus.service';
import { PlatformEvent } from '../events/events.enum';

export interface AuditRecord {
  userId?: string;
  userEmail?: string;
  action: string;
  method: string;
  path: string;
  statusCode: number;
  ip?: string;
  userAgent?: string;
  timestamp: string;
}

@Injectable()
export class AuditService implements OnModuleInit {
  private readonly logger = new Logger(AuditService.name);

  constructor(private readonly eventBus: EventBusService) {}

  onModuleInit() {
    this.eventBus.subscribe<AuditRecord>(PlatformEvent.AUDIT_LOG_CREATED).subscribe((record) => {
      this.recordAudit(record);
    });
  }

  public recordAudit(record: AuditRecord): void {
    this.logger.log(`[AUDIT LOG] ${record.method} ${record.path} by User '${record.userId || 'ANONYMOUS'}' - Status: ${record.statusCode}`);
    // Future expansion: store to MongoDB audit logs collection or relational table
  }
}
