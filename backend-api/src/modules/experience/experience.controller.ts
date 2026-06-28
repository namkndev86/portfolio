import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExperienceService } from './experience.service';

@ApiTags('experience')
@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  @ApiOperation({ summary: 'Get chronological career timeline and positions' })
  @ApiResponse({ status: 200, description: 'Return career timeline' })
  getExperiences() {
    return this.experienceService.getExperiences();
  }
}
