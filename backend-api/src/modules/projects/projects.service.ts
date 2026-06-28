import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/database/prisma.service';
import { ProjectQueryDto } from './dto/project-query.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: ProjectQueryDto) {
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
    return { success: true, data: projects };
  }

  async findBySlug(slug: string) {
    const project = await this.prisma.project.findUnique({ where: { slug } });
    if (!project) {
      throw new NotFoundException(`Project with slug '${slug}' not found`);
    }
    return { success: true, data: project };
  }
}
