'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline */}
            <p className="text-lg md:text-xl text-foreground/70 mb-4 font-medium">
              {t('tagline')}{' '}
              <span className="gradient-text font-[family-name:var(--font-display)] font-semibold">
                {t('taglineHighlight')}
              </span>
            </p>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
              {t('headline')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {t('subtitle')}
            </p>

            {/* Store Badges */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8" id="download">
              <Link href="#" className="block transition-transform hover:scale-105">
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={47}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="block transition-transform hover:scale-105">
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={157}
                  height={47}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t('rating')}</span> {t('ratingText')}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              {t('trustBadge')}
            </p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Main Phone */}
              <div className="relative phone-shadow animate-float">
                <Image
                  src="/home.png"
                  alt="Better Tomorrow App Home Screen"
                  width={320}
                  height={693}
                  className="w-[280px] sm:w-[320px] md:w-[360px] h-auto"
                  priority
                />
              </div>

              {/* Floating Emoji Cards */}
              <motion.div 
                className="absolute -top-4 -right-8 sm:-right-12"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="glass rounded-2xl p-3 shadow-lg">
                  <Image
                    src="/noto/amazing.svg"
                    alt="Amazing emoji"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/3 -left-10 sm:-left-16"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="glass rounded-2xl p-3 shadow-lg">
                  <Image
                    src="/noto/wonderful.svg"
                    alt="Wonderful emoji"
                    width={40}
                    height={40}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-20 -right-6 sm:-right-10"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="glass rounded-2xl p-3 shadow-lg">
                  <Image
                    src="/noto/happy.svg"
                    alt="Happy emoji"
                    width={36}
                    height={36}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
