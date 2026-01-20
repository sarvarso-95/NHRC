
import React, { useState } from 'react';
import { SOCIAL_LINKS, NAV_MENU } from '../constants';
import { Language, AccessibilitySettings } from '../types';
import { Search, Eye, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  settings: AccessibilitySettings;
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  lang: Language;
  setLang: (l: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ settings, setSettings, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleAccessibility = () => {
    setSettings(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  const toggleFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: prev.fontSize === 'normal' ? 'large' : 'normal'
    }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleAccessibility}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors border border-white/20 px-2 py-1 rounded"
              title="Imkoniyati cheklanganlar uchun"
            >
              <Eye size={18} />
              <span className="text-sm hidden sm:inline">Maxsus imkoniyatlar</span>
            </button>
            <button 
              onClick={toggleFontSize}
              className="text-sm font-bold border border-white/20 px-2 py-1 rounded hover:bg-white/10"
            >
              A+
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link, idx) => (
                <a key={idx} href={link.url} className="hover:text-blue-200 transition-colors" title={link.label}>
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="h-4 w-px bg-white/20"></div>

            <div className="flex items-center gap-2">
              {Object.values(Language).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs px-2 py-1 rounded transition-colors ${lang === l ? 'bg-white text-[#003366]' : 'hover:bg-white/10'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/1200px-Emblem_of_Uzbekistan.svg.png" 
              alt="Logo" 
              className="h-14 w-auto"
            />
            <div className="hidden lg:block">
              <h1 className="text-[#003366] font-bold text-lg leading-tight uppercase">
                Inson huquqlari bo'yicha <br /> O'zbekiston Respublikasi Milliy markazi
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_MENU.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => setActiveSubMenu(item.label)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                <button className="flex items-center gap-1 text-[#003366] font-semibold hover:text-blue-700 py-2">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeSubMenu === item.label ? 'rotate-180' : ''}`} />
                </button>
                {activeSubMenu === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#003366] min-w-[200px] py-2 animate-in fade-in slide-in-from-top-2">
                    {item.sub.map((subItem) => (
                      <a 
                        key={subItem} 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003366]"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="p-2 text-[#003366] hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-[#003366]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full left-0 top-full max-h-[80vh] overflow-y-auto">
          <div className="mb-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Qidirish..." 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          <div className="space-y-4">
            {NAV_MENU.map((item) => (
              <div key={item.label}>
                <button className="w-full text-left font-bold text-[#003366] mb-2 flex justify-between items-center">
                  {item.label}
                  <ChevronDown size={16} />
                </button>
                <div className="pl-4 space-y-2 border-l border-gray-100">
                  {item.sub.map((subItem) => (
                    <a key={subItem} href="#" className="block text-gray-600 hover:text-[#003366]">{subItem}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
