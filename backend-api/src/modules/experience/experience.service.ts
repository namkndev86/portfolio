import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/database/prisma.service';

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) {}

  async getExperiences() {
    const experiences = await this.prisma.experience.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: experiences };
  }
}
