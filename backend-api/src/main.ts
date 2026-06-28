import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { createValidationPipe } from './core/pipes/validation.pipe';
import { LoggingInterceptor } from './core/logging/logging.interceptor';
import { AuditLogInterceptor } from './core/audit/audit.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set Global Routing Prefix
  app.setGlobalPrefix('api/v1');

  // Configure Cors
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Configure Validation Pipeline
  app.useGlobalPipes(createValidationPipe());

  // Bind Global Interceptors
  const loggingInterceptor = app.get(LoggingInterceptor);
  const auditInterceptor = app.get(AuditLogInterceptor);
  app.useGlobalInterceptors(loggingInterceptor, auditInterceptor);

  // Setup OpenAPI Swagger Specs
  const config = new DocumentBuilder()
    .setTitle('Portfolio Platform API')
    .setDescription('Enterprise microservice endpoints supporting the portfolio client.')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Bind and Listen
  const port = process.env.PORT || 5000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api/v1`);
  console.log(`Swagger documentation is available at: http://localhost:${port}/docs`);
}
bootstrap();
