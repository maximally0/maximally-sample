
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DosageInstructions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="maximally-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-maximally-900">How to Improve Gut Health Naturally</h2>
          <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00E5FF]/10 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-[#00E5FF]" />
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
  );
};

export default DosageInstructions;
