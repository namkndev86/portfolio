'use client';

import Link from 'next/link';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons/BrandIcons';
import { Container } from './Container';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { useTranslation } from '@/core/i18n/i18n-context';

export function Footer() {
  const { t } = useTranslation();

  const getNavLabel = (key: string, defaultName: string) => {
    const translationKey = `navigation.${key.toLowerCase()}`;
    const translated = t(translationKey);
    return translated !== translationKey ? translated : defaultName;
  };

  return (
    <footer className="w-full border-t border-border bg-background text-muted-foreground py-12 transition-colors" suppressHydrationWarning>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12" suppressHydrationWarning>
          {/* Col 1: Bio / Brand */}
          <div className="md:col-span-2 space-y-4" suppressHydrationWarning>
            <h3 className="text-foreground font-bold text-lg tracking-tight">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {SITE_CONFIG.bio}
            </p>
            <div className="flex items-center space-x-4 pt-2" suppressHydrationWarning>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-accent border border-border text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-accent border border-border text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-accent border border-border text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-2 rounded-lg bg-accent border border-border text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div suppressHydrationWarning>
            <h4 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {getNavLabel(link.name, link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem (Future Readiness) */}
          <div suppressHydrationWarning>
            <h4 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center space-x-2">
                <span>Blog</span>
                <span className="text-[10px] bg-accent text-slate-500 px-1.5 py-0.5 rounded border border-border">
                  Soon
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Resources</span>
                <span className="text-[10px] bg-accent text-slate-500 px-1.5 py-0.5 rounded border border-border">
                  Soon
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Interactive Labs</span>
                <span className="text-[10px] bg-accent text-slate-500 px-1.5 py-0.5 rounded border border-border">
                  Soon
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0" suppressHydrationWarning>
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Engineered with</span>
            <Heart className="h-3 w-3 text-red-500 inline fill-current" />
            <span>using Next.js App Router & TypeScript</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
