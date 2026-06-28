import { IsOptional, IsEnum, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ProjectCategory } from '@prisma/client';

export class ProjectQueryDto {
  @ApiPropertyOptional({ enum: ProjectCategory, description: 'Filter by category' })
  @IsOptional()
  @IsEnum(ProjectCategory)
  category?: ProjectCategory;

  @ApiPropertyOptional({ type: String, description: 'Search term for title/techStack' })
  @IsOptional()
  @IsString()
  search?: string;
}
