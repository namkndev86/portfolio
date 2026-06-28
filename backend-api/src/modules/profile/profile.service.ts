import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/database/prisma.service';
import { UserProfileResponseDto } from './dto/user-profile-response.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(): Promise<UserProfileResponseDto> {
    const profile = await this.prisma.profile.findFirst();
    if (!profile) {
      throw new NotFoundException('Profile record not found');
    }
    return profile as unknown as UserProfileResponseDto;
  }
}
