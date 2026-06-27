import Link from 'next/link';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons/BrandIcons';
import { Container } from './Container';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-400 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio / Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-lg tracking-tight">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {SITE_CONFIG.bio}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href={SITE_CONFIG.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a 
                href={SITE_CONFIG.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a 
                href={SITE_CONFIG.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem (Future Readiness) */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Ecosystem</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center space-x-2">
                <span>Blog</span>
                <span className="text-[10px] bg-slate-900 text-slate-500 px-1.5 py-0.5 rounded border border-slate-800">Soon</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Resources</span>
                <span className="text-[10px] bg-slate-900 text-slate-500 px-1.5 py-0.5 rounded border border-slate-800">Soon</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Interactive Labs</span>
                <span className="text-[10px] bg-slate-900 text-slate-500 px-1.5 py-0.5 rounded border border-slate-800">Soon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
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
