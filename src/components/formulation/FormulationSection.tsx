
import React, { useState, useEffect } from 'react';
import CategoryFilter from './CategoryFilter';
import IngredientList from './IngredientList';
import { formulationData } from '@/data/formulationData';

const FormulationSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(formulationData);
  
  useEffect(() => {
    // Update filtering logic
    if (selectedCategory === "All") {
      setFilteredItems(formulationData);
    } else {
      setFilteredItems(formulationData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-16 bg-white">
      <div className="maximally-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">Our Complete Probiotic & Prebiotic Formula</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Every ingredient in our formula is carefully selected based on scientific research, precisely dosed for effectiveness, and disclosed with complete transparency.
          </p>
        </div>
        
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        
        <IngredientList filteredItems={filteredItems} />
      </div>
    </section>
  );
};

export default FormulationSection;
