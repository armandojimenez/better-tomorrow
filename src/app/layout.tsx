import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1625' },
  ],
};

export const metadata: Metadata = {
  title: "Better Tomorrow - Your Mindful Mood Companion",
  description: "Track your mood, uncover patterns, and build a happier you.",
  icons: {
    icon: '/app_icon.png',
    apple: '/app_icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
