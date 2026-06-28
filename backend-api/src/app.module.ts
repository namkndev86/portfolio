import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './common/database/database.module';
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
    HealthModule,
    ProjectsModule,
    ProfileModule,
    ExperienceModule,
    ContactModule,
  ],
})
export class AppModule {}
