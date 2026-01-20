
import React from 'react';
import { BookOpen, HelpCircle, FileText, Globe, Scale, Users, FileQuestion, MessageSquare } from 'lucide-react';

const CARDS = [
  { icon: <Scale className="text-blue-600" />, title: 'Inson huquqlari to\'g\'risida', desc: 'Asosiy tushunchalar va xalqaro hujjatlar.' },
  { icon: <FileText className="text-red-600" />, title: 'Murojaat qilish tartibi', desc: 'Fuqarolar murojaatlarini ko\'rib chiqish bosqichlari.' },
  { icon: <HelpCircle className="text-green-600" />, title: 'Tez-tez beriladigan savollar', desc: 'Huquqiy masalalar bo\'yicha eng ko\'p so\'raladigan savollar.' },
  { icon: <Globe className="text-purple-600" />, title: 'Xalqaro majburiyatlar', desc: 'O\'zbekistonning konvensiyalar doirasidagi hisobotlari.' },
  { icon: <BookOpen className="text-orange-600" />, title: 'Adabiyotlar', desc: 'Inson huquqlariga doir kutubxona va nashrlar.' },
  { icon: <Users className="text-cyan-600" />, title: 'Asosiy muammolar', desc: 'Sohadagi tizimli muammolar va ularning yechimlari.' },
  { icon: <FileQuestion className="text-yellow-600" />, title: 'Onlayn so\'rovnomalar', desc: 'Sizning fikringiz biz uchun muhim.' },
  { icon: <MessageSquare className="text-indigo-600" />, title: 'Interaktiv xizmatlar', desc: 'Online ariza topshirish va huquqiy maslahat.' },
];

const InfoCards: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Muhim Ma'lumotlar</h2>
          <div className="w-24 h-1 bg-[#003366] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-blue-100 cursor-pointer group">
              <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-bold text-[#003366] mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
