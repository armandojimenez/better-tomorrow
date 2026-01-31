'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImagePath } from '@/lib/paths';

export function FinalCTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating emojis */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={getImagePath('/noto/happy.svg')} alt="" width={48} height={48} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Image src={getImagePath('/noto/great.svg')} alt="" width={56} height={56} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Image src={getImagePath('/noto/wonderful.svg')} alt="" width={48} height={48} />
            </motion.div>
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {t('title')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            {t('subtitle')}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-xl font-medium shadow-lg shadow-primary/25 mb-8"
          >
            <Link href="#download">{t('button')}</Link>
          </Button>

          {/* Store Badges */}
          <div className="flex gap-4 justify-center">
            <Link href="#" className="block transition-transform hover:scale-105">
              <Image
                src={getImagePath('/app-store-badge.svg')}
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
            <Link href="#" className="block transition-transform hover:scale-105">
              <Image
                src={getImagePath('/google-play-badge.svg')}
                alt="Get it on Google Play"
                width={168}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
