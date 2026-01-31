'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';
import { getImagePath } from '@/lib/paths';

export function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const currentLocale = pathname.includes('/es') ? 'es' : 'en';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/[0.03] border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href={`/${currentLocale}`} className="flex items-center gap-3 mb-4">
              <Image
                src={getImagePath('/app_icon.png')}
                alt="Better Tomorrow"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="font-[family-name:var(--font-display)] text-xl font-semibold">
                Better Tomorrow
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <div className="flex gap-3">
              <Link href="#" className="block">
                <Image
                  src={getImagePath('/app-store-badge.svg')}
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src={getImagePath('/google-play-badge.svg')}
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#insights" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  AI Insights
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t('copyright')}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            {t('madeWith')} <Heart size={14} className="text-primary fill-primary" /> {t('from')}
          </p>
        </div>
      </div>
    </footer>
  );
}
