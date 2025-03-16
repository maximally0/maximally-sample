
import React from 'react';
import { CategoryType } from '@/types/formulation';
import { FileText, Microscope, BrainCircuit } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  // Categories with icons
  const categories: CategoryType[] = [
    {
      name: "All",
      icon: FileText
    }, 
    {
      name: "Probiotics",
      icon: Microscope
    }, 
    {
      name: "Prebiotics",
      icon: BrainCircuit
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map(category => (
        <button 
          key={category.name} 
          onClick={() => setSelectedCategory(category.name)} 
          className={`flex items-center px-4 py-2 rounded-full ${
            selectedCategory === category.name 
            ? "bg-[#00E5FF] text-white" 
            : "bg-[#F9FAFB] text-gray-700 hover:bg-[#00E5FF]/10"
          } transition-colors`}
        >
          <category.icon className="w-4 h-4 mr-2" />
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
