
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#003366] text-center mb-12 uppercase tracking-widest">Hamkorlar</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer max-w-[150px] text-center">
              <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />
              <span className="text-xs font-bold text-gray-600">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
