import { ApiProperty } from '@nestjs/swagger';

export class ContactSubmissionResponseDto {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Contact inquiry received successfully.' })
  message: string;
}
