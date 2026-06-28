import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ example: 'John Doe', description: 'Sender name' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Sender email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Architecture Consultation', description: 'Subject' })
  @IsString()
  @MinLength(3)
  subject: string;

  @ApiProperty({ example: 'I would like to discuss a project...', description: 'Inquiry details' })
  @IsString()
  @MinLength(10)
  message: string;
}
