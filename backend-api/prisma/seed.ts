import { PrismaClient, ProjectCategory, EmploymentType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Phase 1 portfolio data...');

  // Seed Profile
  await prisma.profile.deleteMany();
  await prisma.profile.create({
    data: {
      name: 'Nam K. Nguyen',
      title: 'Senior Software Architect & Fullstack Engineer',
      location: 'Ho Chi Minh City, Vietnam',
      yearsOfExperience: 8,
      shortIntroduction: 'I construct high-throughput digital systems, resilient microservices architectures, and fluid modern web platforms with uncompromising code quality.',
      fullBio: 'With over 8 years of experience building software at scale, I specialize in transforming complex technical problems into elegant, maintainable, and highly efficient systems.',
      email: 'namkndev86@gmail.com',
      githubUrl: 'https://github.com/namkndev86',
      linkedinUrl: 'https://linkedin.com/in/namkndev86',
      twitterUrl: 'https://twitter.com/namkndev86',
    },
  });

  // Seed Projects
  await prisma.project.deleteMany();
  await prisma.project.create({
    data: {
      slug: 'enterprise-cloud-platform',
      title: 'Enterprise Multi-Tenant Cloud Platform',
      tagline: 'High-throughput microservices ecosystem powering distributed corporate operations.',
      description: 'A resilient multi-tenant cloud SaaS infrastructure engineered to handle real-time financial telemetry, automated compliance reporting, and distributed workflow authorization across global offices.',
      category: ProjectCategory.Enterprise,
      featured: true,
      coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      galleryImages: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'],
      techStack: ['Next.js', 'TypeScript', 'Node.js', 'Go', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Redis'],
      role: 'Lead Software Architect',
      responsibilities: [
        'Architected micro-frontend decoupled client and scalable backend API gateways.',
        'Designed event-driven streaming pipelines processing over 50k events per second.'
      ],
      lessonsLearned: ['Decoupling domain logic from UI framework lifecycles greatly improved long-term maintainability.'],
      liveDemoUrl: 'https://example.com/cloud-demo',
      githubUrl: 'https://github.com/namkndev86/enterprise-cloud',
      startDate: '2023-01',
      endDate: '2024-03',
      order: 1,
    },
  });

  // Seed Experiences
  await prisma.experience.deleteMany();
  await prisma.experience.create({
    data: {
      company: 'TechCorp Global Solutions',
      companyUrl: 'https://example.com/techcorp',
      location: 'Ho Chi Minh City, Vietnam',
      position: 'Senior Software Architect & Lead',
      employmentType: EmploymentType.FullTime,
      startDate: '2022-03',
      endDate: 'Present',
      current: true,
      description: 'Leading the enterprise engineering division in delivering high-availability cloud platforms and microservices architecture.',
      achievements: [
        'Spearheaded architectural transformation from legacy monolith to event-driven Kubernetes microservices.',
        'Mentored a team of 14 senior and mid-level engineers.'
      ],
      technologiesUsed: ['Next.js', 'TypeScript', 'Go', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Redis'],
    },
  });

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
