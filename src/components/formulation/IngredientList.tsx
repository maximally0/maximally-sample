
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import FormulationItem from './FormulationItem';
import { FormulationIngredient } from '@/types/formulation';

interface IngredientListProps {
  filteredItems: FormulationIngredient[];
}

const IngredientList = ({ filteredItems }: IngredientListProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => <FormulationItem key={item.id} item={item} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No ingredients found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Disclaimer Section */}
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
  );
};

export default IngredientList;
