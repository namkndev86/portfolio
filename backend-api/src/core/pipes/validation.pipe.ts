import { ValidationPipe, BadRequestException } from '@nestjs/common';

export function createValidationPipe(): ValidationPipe {
  return new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    exceptionFactory: (errors) => {
      const messages = errors.map((err) => {
        const constraints = err.constraints ? Object.values(err.constraints) : [];
        return `${err.property}: ${constraints.join(', ')}`;
      });
      return new BadRequestException(messages);
    },
  });
}
