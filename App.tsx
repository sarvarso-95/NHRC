
import React, { useState } from 'react';
import Header from './components/Header';
import Marquee from './components/Marquee';
import HeroSlider from './components/HeroSlider';
import NewsSection from './components/NewsSection';
import InfoCards from './components/InfoCards';
import MediaGallery from './components/MediaGallery';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { Language, AccessibilitySettings } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.UZ);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'normal',
    grayscale: false
  });

  return (
    <div className={`min-h-screen flex flex-col ${settings.highContrast ? 'high-contrast' : ''} ${settings.fontSize === 'large' ? 'font-large' : ''}`}>
      <Header settings={settings} setSettings={setSettings} lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        <Marquee />
        
        {/* Important Events / Hero */}
        <HeroSlider />
        
        {/* Information Grid */}
        <InfoCards />

        {/* News Section */}
        <NewsSection />

        {/* Media */}
        <MediaGallery />

        {/* Partners */}
        <Partners />
      </main>

      <Footer />
      
      {/* Floating Action Button for Contact */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-[#003366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group">
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
            Murojaat qilish
          </span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
