import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactSubmissionResponseDto } from './dto/contact-submission-response.dto';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Submit collaboration or contact inquiry' })
  @ApiResponse({ status: 201, description: 'Inquiry successfully recorded', type: ContactSubmissionResponseDto })
  @ApiResponse({ status: 400, description: 'Payload validation failure' })
  create(@Body() dto: CreateContactDto): Promise<ContactSubmissionResponseDto> {
    return this.contactService.create(dto);
  }
}
