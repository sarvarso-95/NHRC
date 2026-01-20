
import React from 'react';
import { MOCK_NEWS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="bg-[#f0f4f8] border-y border-gray-200 py-2 marquee-container">
      <div className="marquee-content flex gap-8 items-center">
        {MOCK_NEWS.map((news) => (
          <div key={news.id} className="flex items-center gap-2 px-4 whitespace-nowrap">
            <span className="bg-[#003366] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Yangilik</span>
            <span className="text-gray-500 text-sm font-medium">{news.date}</span>
            <span className="text-[#003366] text-sm font-bold hover:underline cursor-pointer">
              {news.title}
            </span>
            <span className="text-gray-300 mx-4">•</span>
          </div>
        ))}
        {/* Repeat content for continuous scroll */}
        {MOCK_NEWS.map((news) => (
          <div key={`dup-${news.id}`} className="flex items-center gap-2 px-4 whitespace-nowrap">
            <span className="bg-[#003366] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Yangilik</span>
            <span className="text-gray-500 text-sm font-medium">{news.date}</span>
            <span className="text-[#003366] text-sm font-bold hover:underline cursor-pointer">
              {news.title}
            </span>
            <span className="text-gray-300 mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
