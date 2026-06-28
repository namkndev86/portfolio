import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProfileService } from './profile.service';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: 'Get biographical details and technical skills taxonomy' })
  @ApiResponse({ status: 200, description: 'Return profile payload' })
  getProfile() {
    return this.profileService.getProfile();
  }
}
