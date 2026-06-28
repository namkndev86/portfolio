import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ChallengeSolutionDto {
  @ApiProperty({ example: 'High latency in cross-region queries' })
  challenge: string;

  @ApiProperty({ example: 'Implemented Redis cluster caching' })
  solution: string;
}

export class ArchitectureDto {
  @ApiProperty({ example: 'Event-driven microservices architecture' })
  summary: string;

  @ApiProperty({ example: ['API Gateway', 'Event Ingestion Cluster'] })
  keyComponents: string[];
}

export class ProjectResponseDto {
  @ApiProperty({ example: 'proj-1' })
  id: string;

  @ApiProperty({ example: 'enterprise-cloud-platform' })
  slug: string;

  @ApiProperty({ example: 'Enterprise Multi-Tenant Cloud Platform' })
  title: string;

  @ApiProperty({ example: 'High-throughput microservices ecosystem' })
  tagline: string;

  @ApiProperty({ example: 'A resilient multi-tenant cloud SaaS infrastructure...' })
  description: string;

  @ApiProperty({ example: 'Enterprise' })
  category: string;

  @ApiProperty({ example: true })
  featured: boolean;

  @ApiProperty({ example: 'https://images.unsplash.com/...' })
  coverImage: string;

  @ApiPropertyOptional({ example: ['https://images.unsplash.com/...'] })
  galleryImages?: string[];

  @ApiProperty({ example: ['Next.js', 'TypeScript', 'Node.js', 'Kubernetes'] })
  techStack: string[];

  @ApiProperty({ example: 'Lead Software Architect' })
  role: string;

  @ApiProperty({ example: ['Architected micro-frontend decoupled client...'] })
  responsibilities: string[];

  @ApiProperty({ type: [ChallengeSolutionDto] })
  challengesAndSolutions: ChallengeSolutionDto[];

  @ApiPropertyOptional({ type: ArchitectureDto })
  architecture?: ArchitectureDto;

  @ApiProperty({ example: ['Decoupling domain logic...'] })
  lessonsLearned: string[];

  @ApiPropertyOptional({ example: 'https://example.com/demo' })
  liveDemoUrl?: string;

  @ApiPropertyOptional({ example: 'https://github.com/namkndev86/demo' })
  githubUrl?: string;

  @ApiProperty({ example: '2023-01' })
  startDate: string;

  @ApiProperty({ example: '2024-03' })
  endDate: string;

  @ApiPropertyOptional({ example: 1 })
  order?: number;
}
