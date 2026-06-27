import Link from 'next/link';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { FadeIn } from '@/components/animations/MotionComponents';
import { SITE_CONFIG } from '@/lib/constants';

export function ContactCTASection() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-slate-900/40 pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 lg:p-16 text-center shadow-2xl backdrop-blur-xl max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Available for Strategic Consulting & Senior Roles</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
            Have a Complex System to Build or Architect?
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need to design an event-driven microservice system, optimize high-throughput web applications, or build a resilient cloud platform, let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/25 hover:bg-indigo-700 active:scale-95 transition-all group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-500 font-mono">
            Direct Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-indigo-400 hover:underline">{SITE_CONFIG.email}</a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
