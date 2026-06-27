import { FadeIn } from '@/components/animations/MotionComponents';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ badge, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <FadeIn className={`flex flex-col mb-12 ${alignment}`}>
      {badge && (
        <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 mb-3 tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
