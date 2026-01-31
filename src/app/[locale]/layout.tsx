import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  // Import messages directly for metadata
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.metadata as { title: string; description: string };

  return {
    title: t.title,
    description: t.description,
    keywords: locale === 'es' 
      ? ['app de ánimo', 'diario emocional', 'bienestar mental', 'registro de emociones', 'mindfulness']
      : ['mood tracker', 'mood journal', 'mental wellness', 'emotional health', 'mindfulness app'],
    authors: [{ name: 'Better Tomorrow' }],
    openGraph: {
      title: t.title,
      description: t.description,
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_ES',
      siteName: 'Better Tomorrow',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Better Tomorrow App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://bettertomorrow.app/${locale === 'en' ? '' : locale}`,
      languages: {
        'en': 'https://bettertomorrow.app/',
        'es': 'https://bettertomorrow.app/es',
        'x-default': 'https://bettertomorrow.app/',
      },
    },
    icons: {
      icon: '/app_icon.png',
      apple: '/app_icon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
