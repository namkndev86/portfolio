import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/database/prisma.service';
import { ProjectQueryDto } from './dto/project-query.dto';
import { ProjectResponseDto } from './dto/project-response.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: ProjectQueryDto): Promise<ProjectResponseDto[]> {
    const { category, search } = query;
    const where: any = {};
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { tagline: { contains: search, mode: 'insensitive' } },
      ];
    }
    const projects = await this.prisma.project.findMany({
      where,
      orderBy: { order: 'asc' },
    });
    return projects as unknown as ProjectResponseDto[];
  }

  async findBySlug(slug: string): Promise<ProjectResponseDto> {
    const project = await this.prisma.project.findUnique({ where: { slug } });
    if (!project) {
      throw new NotFoundException(`Project with slug '${slug}' not found`);
    }
    return project as unknown as ProjectResponseDto;
  }
}
