'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '@/lib/paths';

export function Problem() {
  const t = useTranslations('problem');

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8 flex justify-center gap-4">
            <Image
              src={getImagePath('/noto/great.svg')}
              alt=""
              width={56}
              height={56}
              className="opacity-80"
            />
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {t('title')}
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            {t('subtitle')}
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
