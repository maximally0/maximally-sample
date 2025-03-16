
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FormulationHero from '@/components/formulation/FormulationHero';
import FormulationSection from '@/components/formulation/FormulationSection';
import ResearchSection from '@/components/formulation/ResearchSection';
import DosageInstructions from '@/components/formulation/DosageInstructions';
import FormulationCta from '@/components/formulation/FormulationCta';

const Formulation = () => {
  // Added SEO-friendly title and description
  useEffect(() => {
    document.title = "Maximally Formulation | Best Probiotic Supplements in India";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f3f3]">
      <NavBar />
      
      <main className="flex-grow pt-20">
        <FormulationHero />
        <FormulationSection />
        <ResearchSection />
        <DosageInstructions />
        <FormulationCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Formulation;
