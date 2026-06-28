import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/database/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile() {
    const profile = await this.prisma.profile.findFirst();
    if (!profile) {
      throw new NotFoundException('Profile record not found');
    }
    return { success: true, data: profile };
  }
}
