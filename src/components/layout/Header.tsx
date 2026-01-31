'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle both /en and /es patterns for static export
  const currentLocale = pathname.includes('/es') ? 'es' : 'en';
  const otherLocale = currentLocale === 'en' ? 'es' : 'en';
  const localePath = `/${currentLocale}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `${localePath}/#features`, label: t('features') },
    { href: `${localePath}/#insights`, label: t('insights') },
    { href: `${localePath}/#privacy`, label: t('privacy') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center gap-3">
            <Image
              src="/app_icon.png"
              alt="Better Tomorrow"
              width={44}
              height={44}
              className="rounded-xl"
            />
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold hidden sm:block">
              Better Tomorrow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}/`}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors uppercase tracking-wide"
            >
              {otherLocale === 'en' ? 'EN' : 'ES'}
            </Link>

            {/* CTA Button */}
            <Button
              asChild
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              <Link href={`${localePath}/#download`}>{t('download')}</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                <Link href={`${localePath}#download`}>{t('download')}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
