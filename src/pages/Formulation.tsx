
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { FileText, ChevronDown, ChevronUp, Microscope, BrainCircuit, Heart, Activity, Eye, AlertTriangle } from 'lucide-react';

// Sample formulation data (in a real app this would be fetched from an API or markdown file)
const formulationData = [{
  id: 1,
  name: "Lactobacillus Acidophilus",
  amount: "10 Billion CFU",
  description: "A beneficial bacteria that supports digestive health and helps maintain the balance of microorganisms in the intestines.",
  benefits: ["Supports digestive health", "May help with lactose digestion", "Helps maintain vaginal health", "Supports immune system function"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Lactobacillus+Acidophilus",
  category: "Probiotics"
}, {
  id: 2,
  name: "Bifidobacterium Lactis",
  amount: "8 Billion CFU",
  description: "A powerful probiotic strain that supports digestive and immune health by helping to balance the gut microbiome.",
  benefits: ["Helps alleviate digestive discomfort", "Supports immune function", "Helps improve nutrient absorption", "Aids in reducing bloating"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Bifidobacterium+Lactis",
  category: "Probiotics"
}, {
  id: 3,
  name: "Lactobacillus Plantarum",
  amount: "7 Billion CFU",
  description: "A versatile probiotic strain that can survive the harsh conditions of the stomach to reach the intestines where it provides multiple health benefits.",
  benefits: ["Helps maintain intestinal barrier function", "Supports relief from IBS symptoms", "Helps reduce inflammation in the gut", "May help reduce antibiotic-associated side effects"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Lactobacillus+Plantarum",
  category: "Probiotics"
}, {
  id: 4,
  name: "Lactobacillus Rhamnosus",
  amount: "5 Billion CFU",
  description: "A well-researched probiotic strain known for its ability to survive stomach acid and support both digestive and immune health.",
  benefits: ["Supports healthy immune response", "Helps reduce allergic reactions", "May help prevent and treat diarrhea", "Supports women's health"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Lactobacillus+Rhamnosus",
  category: "Probiotics"
}, {
  id: 5,
  name: "Bifidobacterium Longum",
  amount: "5 Billion CFU",
  description: "One of the most significant and well-studied probiotic strains that helps maintain a healthy digestive tract and supports immune function.",
  benefits: ["Helps maintain intestinal health", "Supports brain health via the gut-brain axis", "Aids in reducing inflammation", "Helps improve lactose tolerance"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Bifidobacterium+Longum",
  category: "Probiotics"
}, {
  id: 6,
  name: "Lactobacillus Casei",
  amount: "5 Billion CFU",
  description: "A beneficial probiotic strain that supports digestive health and may help strengthen the body's natural defenses.",
  benefits: ["Supports healthy digestion", "May help with antibiotic-associated diarrhea", "Helps maintain oral health", "Supports immune system function"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Lactobacillus+Casei",
  category: "Probiotics"
}, {
  id: 7,
  name: "Fructooligosaccharides (FOS)",
  amount: "100mg",
  description: "A prebiotic fiber that feeds the beneficial bacteria in your gut, supporting the growth and activity of probiotic strains.",
  benefits: ["Supports the growth of beneficial bacteria", "Helps improve calcium absorption", "Supports healthy digestion", "Aids in maintaining regular bowel movements"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Fructooligosaccharides",
  category: "Prebiotics"
}, {
  id: 8,
  name: "Inulin",
  amount: "75mg",
  description: "A soluble fiber prebiotic that supports digestive health by feeding beneficial bacteria in the gut.",
  benefits: ["Promotes growth of beneficial gut bacteria", "Helps with regularity", "Supports healthy blood sugar levels", "Aids in calcium absorption"],
  researchUrl: "https://pubmed.ncbi.nlm.nih.gov/search?term=Inulin+prebiotic",
  category: "Prebiotics"
}];

// Categories with icons
const categories = [{
  name: "All",
  icon: FileText
}, {
  name: "Probiotics",
  icon: Microscope
}, {
  name: "Prebiotics",
  icon: BrainCircuit
}, {
  name: "Digestive Support",
  icon: Heart
}, {
  name: "Immunity",
  icon: Activity
}, {
  name: "Cognitive Health",
  icon: Eye
}];

const FormulationItem = ({
  item
}: {
  item: typeof formulationData[0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-all">
      <div className="p-6 cursor-pointer flex justify-between items-start" onClick={() => setIsExpanded(!isExpanded)}>
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-block px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-sm font-medium">
              {item.category}
            </span>
            <span className="text-[#4ADE80] font-bold">{item.amount}</span>
          </div>
          <h3 className="font-serif text-xl font-bold mt-3 text-maximally-900">{item.name}</h3>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </div>
      
      {isExpanded && <div className="px-6 pb-6 border-t border-gray-100 pt-4">
          <p className="text-gray-700 mb-4">{item.description}</p>
          
          <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Benefits</h4>
          <ul className="space-y-2 mb-6">
            {item.benefits.map((benefit, index) => <li key={index} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#4ADE80]/10 flex items-center justify-center mr-2 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#4ADE80]"></div>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </li>)}
          </ul>
          
          {/* View Research button has been removed */}
        </div>}
    </div>;
};

const Formulation = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(formulationData);
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(formulationData);
    } else {
      setFilteredItems(formulationData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return <div className="flex flex-col min-h-screen bg-[#f3f3f3]">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#00E5FF]/20 to-[#4ADE80]/20">
          <div className="maximally-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-maximally-900">
                100% Transparent Formulation
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                At Maximally, we believe you deserve to know exactly what goes into your supplements. Here's our complete formula with nothing hidden.
              </p>
              <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-md mb-6">
                <span className="font-medium text-maximally-800">Health on Max, Gimmicks on Zero.</span>
              </div>
              <div className="flex justify-center">
                
              </div>
            </div>
          </div>
        </section>
        
        {/* Formulation List Section */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Our Complete Formula</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Every ingredient in our formula is carefully selected based on scientific research, precisely dosed for effectiveness, and disclosed with complete transparency.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => <button key={category.name} onClick={() => setSelectedCategory(category.name)} className={`flex items-center px-4 py-2 rounded-full ${selectedCategory === category.name ? "bg-[#00E5FF] text-white" : "bg-[#F9FAFB] text-gray-700 hover:bg-[#00E5FF]/10"} transition-colors`}>
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>)}
            </div>
            
            {/* Formulation Items */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {filteredItems.length > 0 ? filteredItems.map(item => <FormulationItem key={item.id} item={item} />) : <div className="text-center py-12">
                    <p className="text-gray-500">No ingredients found in this category.</p>
                  </div>}
              </div>
            </div>
            
            {/* Disclaimer Section (Added) */}
            <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Disclaimer</h3>
                  <p className="text-gray-700">
                    While probiotics provide various health benefits, they may also cause mild digestive issues such as bloating, gas, or stomach discomfort in some individuals. Those with weakened immune systems or underlying health conditions should consult a healthcare professional before use. Individual results may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research Section */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="maximally-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#4ADE80] text-gray-800 text-sm font-medium mb-4 shadow-sm">
                  Science-Backed Formula
                </span>
                <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Backed by Research</h2>
                <p className="text-gray-700 mb-4">
                  Unlike many supplement companies, we don't hide behind proprietary blends or make exaggerated claims. Every ingredient in our formula is:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Scientifically Validated</h4>
                      <p className="text-gray-700">Backed by peer-reviewed research published in reputable journals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Precisely Dosed</h4>
                      <p className="text-gray-700">Included at levels shown to be effective in clinical studies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Fully Disclosed</h4>
                      <p className="text-gray-700">Every strain, every amount, every benefit is transparently shared</p>
                    </div>
                  </li>
                </ul>
                <CTAButton text="Buy on Amazon" href="https://amazon.com" variant="primary" size="lg" withArrow />
              </div>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1554178286-db408c69256a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Scientific Research" className="rounded-lg shadow-lg" />
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFD700] rounded-full opacity-20 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4ADE80] rounded-full opacity-20 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dosage Instructions */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Recommended Dosage</h2>
              <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00E5FF]/10 rounded-full mb-6">
                  <Activity className="w-8 h-8 text-[#00E5FF]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-maximally-900">Take two capsules daily</h3>
                <p className="text-gray-700 mb-6">
                  For optimal results, take one capsule before breakfast and one capsule before dinner. This timing helps maximize the colonization of beneficial bacteria throughout your digestive system.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="font-bold text-[#00E5FF]">Morning</div>
                    <p className="text-gray-700">1 capsule before breakfast</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="font-bold text-[#00E5FF]">Evening</div>
                    <p className="text-gray-700">1 capsule before dinner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white">
          <div className="maximally-container text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready for a Transparent Supplement Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Health on Max, Gimmicks on Zero. Just research-backed nutrition that works.
            </p>
            <CTAButton text="Buy on Amazon Today" href="https://amazon.com" variant="secondary" size="lg" withArrow className="text-white hover:brightness-110 border-white hover:bg-white/10" />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default Formulation;
