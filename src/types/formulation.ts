
import { LucideIcon } from 'lucide-react';

export interface FormulationIngredient {
  id: number;
  name: string;
  amount: string;
  description: string;
  benefits: string[];
  researchUrl: string;
  category: string;
}

export interface CategoryType {
  name: string;
  icon: LucideIcon;
}
