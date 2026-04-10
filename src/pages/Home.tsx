import Hero from '../components/Hero';
import TrustedBrands from '../components/TrustedBrands';
import Features from '../components/Features';
import ResultsBanner from '../components/ResultsBanner';
import SolutionSelector from '../components/SolutionSelector';
import Testimonials from '../components/Testimonials';
import ClientShowcase from '../components/ClientShowcase';
import OfficialPartners from '../components/OfficialPartners';
import StatsBanner from '../components/StatsBanner';
import BottomCTA from '../components/BottomCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <Features />
      <ResultsBanner />
      <SolutionSelector />
      <Testimonials />
      <ClientShowcase />
      <OfficialPartners />
      <StatsBanner />
      <BottomCTA />
    </>
  );
}
