import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ExperienceResponseDto {
  @ApiProperty({ example: 'exp-1' })
  id: string;

  @ApiProperty({ example: 'TechCorp Global Solutions' })
  company: string;

  @ApiPropertyOptional({ example: 'https://example.com' })
  companyUrl?: string;

  @ApiProperty({ example: 'Ho Chi Minh City, Vietnam' })
  location: string;

  @ApiProperty({ example: 'Senior Software Architect & Lead' })
  position: string;

  @ApiProperty({ example: 'Full-time' })
  employmentType: string;

  @ApiProperty({ example: '2022-03' })
  startDate: string;

  @ApiProperty({ example: 'Present' })
  endDate: string;

  @ApiProperty({ example: true })
  current: boolean;

  @ApiProperty({ example: 'Leading the enterprise engineering division...' })
  description: string;

  @ApiProperty({ example: ['Spearheaded architectural transformation...'] })
  achievements: string[];

  @ApiProperty({ example: ['Next.js', 'TypeScript', 'Kubernetes'] })
  technologiesUsed: string[];
}
