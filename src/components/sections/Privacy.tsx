'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Lock } from 'lucide-react';

const privacyFeatures = [
  {
    key: 'feature1',
    icon: Smartphone,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    key: 'feature2',
    icon: ShieldCheck,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    key: 'feature3',
    icon: Lock,
    gradient: 'from-violet-500 to-purple-500',
  },
];

export function Privacy() {
  const t = useTranslations('privacy');

  return (
    <section id="privacy" className="py-20 md:py-28 bg-foreground/[0.02] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.55 0.25 285 / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Lock size={16} />
            {t('badge')}
          </div>
          
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('sectionTitle')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('sectionSubtitle')}
          </p>
        </motion.div>

        {/* Privacy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <div className="glass rounded-3xl p-6 md:p-8 h-full text-center hover:shadow-lg transition-shadow duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3 text-foreground">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`${feature.key}.description`)}
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
