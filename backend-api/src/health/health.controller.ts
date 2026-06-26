import { Controller, Get, Inject } from '@nestjs/common';
import { PrismaService } from '../common/database/prisma.service';
import { RedisService } from '../common/database/redis.service';
import { MONGO_CONNECTION } from '../common/database/database.module';
import * as mongoose from 'mongoose';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    @Inject(MONGO_CONNECTION) private readonly mongo: typeof mongoose,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Run system health checks' })
  async getHealth() {
    let databaseStatus = 'UP';
    let mongoStatus = 'UP';
    let redisStatus = 'UP';

    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch {
      databaseStatus = 'DOWN';
    }

    try {
      if (this.mongo.connection.readyState !== 1) {
        mongoStatus = 'DOWN';
      }
    } catch {
      mongoStatus = 'DOWN';
    }

    try {
      await this.redis.get('health_ping');
    } catch {
      redisStatus = 'DOWN';
    }

    const overallStatus =
      databaseStatus === 'UP' && mongoStatus === 'UP' && redisStatus === 'UP' ? 'UP' : 'DOWN';

    return {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      services: {
        postgres: databaseStatus,
        mongodb: mongoStatus,
        redis: redisStatus,
      },
    };
  }
}
