
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: 'https://picsum.photos/1600/600?random=10',
    title: 'Inson huquqlari — oliy qadriyat',
    desc: 'O\'zbekiston Respublikasi Inson huquqlari bo\'yicha Milliy strategiyasi ijrosi ta\'minlanmoqda.'
  },
  {
    image: 'https://picsum.photos/1600/600?random=11',
    title: 'Xalqaro hamkorlik rivojlanmoqda',
    desc: 'O\'zbekiston inson huquqlari sohasidagi xalqaro majburiyatlarini to\'liq bajarmoqda.'
  },
  {
    image: 'https://picsum.photos/1600/600?random=12',
    title: 'Huquqiy savodxonlikni oshirish',
    desc: 'Markaz tomonidan aholining huquqiy bilimlarini oshirishga qaratilgan tadbirlar o\'tkazilmoqda.'
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gray-900">
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
              <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">{slide.desc}</p>
              <button className="bg-[#003366] hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                Batafsil ma'lumot
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors">
        <ChevronLeft size={32} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
