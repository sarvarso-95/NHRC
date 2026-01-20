
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002244] text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/1200px-Emblem_of_Uzbekistan.svg.png" 
              alt="Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <h3 className="font-bold leading-tight">Inson huquqlari bo'yicha <br /> O'zbekiston Respublikasi <br /> Milliy markazi</h3>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mb-6">
            Inson huquqlari va erkinliklarini himoya qilish sohasida davlat siyosatining asosiy yo'nalishlarini amalga oshiruvchi tashkilot.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"><Send size={18} /></a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"><Facebook size={18} /></a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"><Instagram size={18} /></a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-4">Asosiy bo'limlar</h4>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Markaz haqida</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Huquqiy hujjatlar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Xalqaro hisobotlar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fuqarolar murojaati</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vakansiyalar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-4">Bog'lanish</h4>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 mt-1 shrink-0" />
              <span>Toshkent shahri, 100029, Islom Karimov ko'chasi, 15-uy</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <span>(+998 71) 239-47-22</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <span>info@nhrc.uz</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-blue-400 shrink-0" />
              <span>Dush-Jum: 09:00 - 18:00</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-4">Joylashuv</h4>
          <div className="rounded-xl overflow-hidden h-48 bg-gray-800 relative">
            <img src="https://picsum.photos/400/300?grayscale" alt="Map" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold shadow-lg">Xaritada ko'rish</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
        <p>© 2024 Inson huquqlari bo'yicha Milliy markaz. Barcha huquqlar himoyalangan.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Foydalanish shartlari</a>
          <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
