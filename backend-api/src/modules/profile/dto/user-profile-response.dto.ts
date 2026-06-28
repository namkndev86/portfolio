import { ApiProperty } from '@nestjs/swagger';

export class SkillDto {
  @ApiProperty({ example: 'sk-1' })
  id: string;

  @ApiProperty({ example: 'React & React 19' })
  name: string;

  @ApiProperty({ example: 'Frontend' })
  category: string;

  @ApiProperty({ example: 'Code2' })
  iconName: string;

  @ApiProperty({ example: 98 })
  proficiency: number;

  @ApiProperty({ example: true })
  featured: boolean;
}

export class UserProfileResponseDto {
  @ApiProperty({ example: 'Nam K. Nguyen' })
  name: string;

  @ApiProperty({ example: 'Senior Software Architect & Fullstack Engineer' })
  role: string;

  @ApiProperty({ example: 'I construct high-throughput digital systems...' })
  bio: string;

  @ApiProperty({ example: 'https://namnguyen.dev' })
  url: string;

  @ApiProperty({ example: 'https://github.com/namkndev86' })
  github: string;

  @ApiProperty({ example: 'https://linkedin.com' })
  linkedin: string;

  @ApiProperty({ example: 'https://twitter.com' })
  twitter: string;

  @ApiProperty({ type: [SkillDto] })
  skills: SkillDto[];
}
