import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/database/prisma.service';
import { ExperienceResponseDto } from './dto/experience-response.dto';

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) {}

  async getExperiences(): Promise<ExperienceResponseDto[]> {
    const experiences = await this.prisma.experience.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return experiences as unknown as ExperienceResponseDto[];
  }
}
