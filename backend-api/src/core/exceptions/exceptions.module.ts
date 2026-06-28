import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GlobalHttpExceptionFilter } from './http-exception.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionFilter,
    },
  ],
})
export class ExceptionsModule {}
