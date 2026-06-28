'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { Project } from '@/types/project';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/core/i18n/i18n-context';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="group hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full bg-card text-card-foreground border-border">
      {/* Image Container with hover zoom */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-background">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

        <div className="absolute top-3 left-3">
          <Badge variant={project.category === 'Enterprise' ? 'accent' : 'default'}>
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Card Header & Body */}
      <CardHeader className="flex-1 pb-3">
        <CardTitle className="text-xl group-hover:text-indigo-400 transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2 text-muted-foreground">
          {project.tagline}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col justify-end">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono rounded bg-accent px-2 py-0.5 text-foreground border border-border"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] font-mono rounded bg-accent/50 px-1.5 py-0.5 text-muted-foreground">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
        >
          {t('project.viewProject')}
          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
