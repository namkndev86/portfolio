import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

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
