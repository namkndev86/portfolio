'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { useUIStore } from '@/store/useUIStore';
import { Container } from './Container';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/core/i18n/i18n-context';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from '@/core/theme/theme-toggle';

export function Navbar() {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const { t } = useTranslation();

  const getNavLabel = (key: string, defaultName: string) => {
    const translationKey = `navigation.${key.toLowerCase()}`;
    const translated = t(translationKey);
    return translated !== translationKey ? translated : defaultName;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 text-foreground backdrop-blur-xl transition-all">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center space-x-2 text-foreground font-bold text-lg tracking-tight group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Terminal className="h-5 w-5" />
            </div>
            <span>
              {SITE_CONFIG.brandName}
              <span className="text-indigo-400">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors relative',
                    isActive
                      ? 'text-foreground bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                  )}
                >
                  {getNavLabel(link.name, link.name)}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA, Theme, Language & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2.5">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition-colors"
            >
              {t('navigation.contact')}
            </Link>

            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-accent text-foreground hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-2 animate-in slide-in-from-top duration-200">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    'block px-4 py-2.5 rounded-lg text-base font-medium transition-colors',
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-400 font-semibold'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                  )}
                >
                  {getNavLabel(link.name, link.name)}
                </Link>
              );
            })}
            <div className="pt-2 px-4">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-base font-medium text-white shadow-md hover:bg-indigo-700 transition-colors"
              >
                {t('navigation.contact')}
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
