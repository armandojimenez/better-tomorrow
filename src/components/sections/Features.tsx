'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, BarChart3, Wind, Trophy } from 'lucide-react';
import { getImagePath } from '@/lib/paths';

const features = [
  {
    key: 'moodTracking',
    icon: Sparkles,
    gradient: 'from-amber-400 via-orange-400 to-rose-400',
  },
  {
    key: 'patterns',
    icon: BarChart3,
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
  },
  {
    key: 'breathing',
    icon: Wind,
    gradient: 'from-sky-400 via-blue-400 to-indigo-400',
  },
  {
    key: 'streaks',
    icon: Trophy,
    gradient: 'from-violet-400 via-purple-400 to-fuchsia-400',
  },
];

export function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('sectionTitle')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('sectionSubtitle')}
          </p>
        </motion.div>

        {/* Screenshot Showcase */}
        <motion.div 
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center items-end gap-4 md:gap-8 overflow-x-auto pb-4">
            {/* Mood Entry Screenshot */}
            <div className="flex-shrink-0 relative phone-shadow transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <Image
                src={getImagePath('/mood_entry.png')}
                alt="Mood Entry Screen"
                width={240}
                height={520}
                className="w-[200px] sm:w-[240px] md:w-[280px] h-auto"
              />
            </div>

            {/* Home Screenshot (Center, larger) */}
            <div className="flex-shrink-0 relative phone-shadow z-10">
              <Image
                src={getImagePath('/home.png')}
                alt="Home Screen"
                width={280}
                height={607}
                className="w-[240px] sm:w-[280px] md:w-[320px] h-auto"
              />
            </div>

            {/* Insight Screenshot */}
            <div className="flex-shrink-0 relative phone-shadow transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <Image
                src={getImagePath('/insight.png')}
                alt="Insights Screen"
                width={240}
                height={520}
                className="w-[200px] sm:w-[240px] md:w-[280px] h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <div className="gradient-card rounded-3xl p-6 md:p-8 h-full border border-white/20 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-5`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t(`${feature.key}.description`)}
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    {t(`${feature.key}.detail`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
