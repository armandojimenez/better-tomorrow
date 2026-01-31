'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-primary/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="gradient-card rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/me.png"
                      alt="Creator of Better Tomorrow"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Heart badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Heart size={20} className="text-primary-foreground fill-primary-foreground" />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  {t('sectionTitle')}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('description')}
                </p>
                
                <p className="text-muted-foreground mb-4">
                  {t('experience')}
                </p>
                
                <p className="text-lg font-medium text-foreground mb-6">
                  {t('mission')}
                </p>

                <div className="flex items-center gap-2 justify-center md:justify-start text-primary">
                  <span className="text-sm font-medium">{t('signature')}</span>
                  <Heart size={16} className="fill-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
