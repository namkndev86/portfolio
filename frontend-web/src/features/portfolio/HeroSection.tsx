'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { FadeIn } from '@/components/animations/MotionComponents';
import { useProfileQuery } from '@/hooks/queries/useProfileQuery';
import { useTranslation } from '@/core/i18n/i18n-context';

export function HeroSection() {
  const { data: profile } = useProfileQuery();
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-background text-foreground transition-colors">
      {/* Subtle glowing mesh backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="down">
            <div className="inline-flex items-center space-x-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span>{profile?.role || t('pages.heroTitle')}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
              {t('pages.heroTitle')}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed">
              {profile?.bio || t('pages.heroSubtitle')}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-medium text-white shadow-xl shadow-indigo-500/25 hover:bg-indigo-700 active:scale-95 transition-all group"
            >
              {t('navigation.projects')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-accent px-6 py-3.5 text-base font-medium text-foreground hover:bg-accent/80 active:scale-95 transition-all backdrop-blur-sm"
            >
              {t('navigation.contact')}
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
