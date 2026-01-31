'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, TrendingUp, Sparkles, Lightbulb } from 'lucide-react';

const features = [
  { icon: TrendingUp, key: 'feature1' },
  { icon: Brain, key: 'feature2' },
  { icon: Sparkles, key: 'feature3' },
  { icon: Lightbulb, key: 'feature4' },
];

export function Insights() {
  const t = useTranslations('insights');

  return (
    <section id="insights" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-mood opacity-[0.03]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Phone Mockup */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="relative phone-shadow">
                <Image
                  src="/insight.png"
                  alt="AI Insights Screen"
                  width={320}
                  height={693}
                  className="w-[280px] sm:w-[320px] md:w-[340px] h-auto"
                />
              </div>

              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 sm:-right-8"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="glass rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
                  <Brain size={20} className="text-primary" />
                  <span className="text-sm font-medium">AI Powered</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            className="flex-1 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('sectionTitle')}
            </h2>
            <p className="text-lg text-primary font-medium mb-6">
              {t('sectionSubtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.li 
                    key={feature.key}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium">
                      {t(feature.key)}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            <p className="text-sm text-muted-foreground italic">
              {t('tone')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
