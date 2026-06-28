import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { CoreAuthModule } from './core/auth/auth.module';
import { LoggingModule } from './core/logging/logging.module';
import { ExceptionsModule } from './core/exceptions/exceptions.module';
import { EventsModule } from './core/events/events.module';
import { AuditModule } from './core/audit/audit.module';
import { HealthModule } from './health/health.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CoreAuthModule,
    LoggingModule,
    ExceptionsModule,
    EventsModule,
    AuditModule,
    HealthModule,
    ProjectsModule,
    ProfileModule,
    ExperienceModule,
    ContactModule,
  ],
})
export class AppModule {}

