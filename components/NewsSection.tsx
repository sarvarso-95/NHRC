
import React, { useState } from 'react';
import { MOCK_NEWS } from '../constants';

const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'center' | 'uzbekistan' | 'world'>('center');

  const filteredNews = MOCK_NEWS.filter(item => item.category === activeTab);

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-200 gap-4">
        <h2 className="text-2xl font-bold text-[#003366] uppercase tracking-wide">Yangiliklar</h2>
        <div className="flex gap-4">
          {(['center', 'uzbekistan', 'world'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold transition-all relative ${
                activeTab === tab 
                  ? 'text-[#003366]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab === 'center' ? 'Markaz' : tab === 'uzbekistan' ? 'O\'zbekiston' : 'Xorij'}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#003366] rounded-t-lg"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-[#003366] text-white text-[10px] font-bold px-2 py-1 rounded">
                {item.date}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#003366] mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                Batafsil o'qish &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="border-2 border-[#003366] text-[#003366] font-bold px-8 py-2 rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
          Barcha yangiliklar
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
