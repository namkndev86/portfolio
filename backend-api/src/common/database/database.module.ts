import { Module, Global, Provider } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { RedisService } from './redis.service';
import * as mongoose from 'mongoose';

export const MONGO_CONNECTION = 'MONGO_CONNECTION';

const mongoProvider: Provider = {
  provide: MONGO_CONNECTION,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
    const uri = configService.get<string>('MONGO_URI', 'mongodb://localhost:27017/portfolio');
    console.log('🚀 ~ uri:', uri);
    return mongoose.connect(uri);
  },
};

@Global()
@Module({
  imports: [ConfigModule],
  providers: [PrismaService, RedisService, mongoProvider],
  exports: [PrismaService, RedisService, MONGO_CONNECTION],
})
export class DatabaseModule {}
