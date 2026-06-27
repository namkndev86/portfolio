'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { FadeIn } from '@/components/animations/MotionComponents';
import { SITE_CONFIG } from '@/lib/constants';
import { BIO_DATA } from '@/data/bio';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
      {/* Subtle glowing mesh backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="down">
            <div className="inline-flex items-center space-x-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span>Senior Architect & Software Engineer</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
              Engineering <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Scalable Platforms</span> & Cloud Ecosystems
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-slate-400 sm:text-xl leading-relaxed">
              Hi, I&apos;m <strong className="text-white font-semibold">{SITE_CONFIG.name}</strong>. {BIO_DATA.shortIntroduction}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-medium text-white shadow-xl shadow-indigo-500/25 hover:bg-indigo-700 active:scale-95 transition-all group"
            >
              Explore Featured Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white active:scale-95 transition-all backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </FadeIn>

          {/* Quick stats / metrics badge */}
          <FadeIn delay={0.4} className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 pt-8 border-t border-slate-800/80">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">8+</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-indigo-400">15+</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Enterprise Systems</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-purple-400">99.99%</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">SLA Uptime Delivered</span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
