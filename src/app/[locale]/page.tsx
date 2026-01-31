import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Features } from '@/components/sections/Features';
import { Insights } from '@/components/sections/Insights';
import { Privacy } from '@/components/sections/Privacy';
import { About } from '@/components/sections/About';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Insights />
        <Privacy />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
