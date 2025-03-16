
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FormulationIngredient } from '@/types/formulation';

interface FormulationItemProps {
  item: FormulationIngredient;
}

const FormulationItem = ({ item }: FormulationItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-all">
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
      
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
          <p className="text-gray-700 mb-4">{item.description}</p>
          
          <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Benefits</h4>
          <ul className="space-y-2 mb-6">
            {item.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#4ADE80]/10 flex items-center justify-center mr-2 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#4ADE80]"></div>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormulationItem;
