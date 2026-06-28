import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseApiException extends HttpException {
  constructor(
    message: string | string[],
    status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    public readonly errorDetails?: any,
  ) {
    super(
      {
        statusCode: status,
        message,
        errorDetails,
        timestamp: new Date().toISOString(),
      },
      status,
    );
  }
}

export class DomainNotFoundException extends BaseApiException {
  constructor(entityName: string, identifier?: string | number) {
    const detail = identifier ? ` with identifier '${identifier}'` : '';
    super(`${entityName}${detail} not found`, HttpStatus.NOT_FOUND);
  }
}

export class DomainBadRequestException extends BaseApiException {
  constructor(message: string | string[]) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
