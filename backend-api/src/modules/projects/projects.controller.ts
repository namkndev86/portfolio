import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectQueryDto } from './dto/project-query.dto';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all projects with optional filtering' })
  @ApiResponse({ status: 200, description: 'Return projects list' })
  findAll(@Query() query: ProjectQueryDto) {
    return this.projectsService.findAll(query);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get detailed project case study by slug' })
  @ApiResponse({ status: 200, description: 'Return single project' })
  @ApiResponse({ status: 404, description: 'Project not found' })
  findBySlug(@Param('slug') slug: string) {
    return this.projectsService.findBySlug(slug);
  }
}
