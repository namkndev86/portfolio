import Link from 'next/link';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { FadeIn } from '@/components/animations/MotionComponents';
import { SITE_CONFIG } from '@/lib/constants';

export function ContactCTASection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden text-foreground">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 lg:p-16 text-center shadow-lg backdrop-blur-xl max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Available for Strategic Consulting & Senior Roles</span>
          </div>

          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
            Have a Complex System to Build or Architect?
          </h2>

          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need to design an event-driven microservice system, optimize high-throughput web applications, or build a resilient cloud platform, let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-muted-foreground font-mono">
            Direct Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
