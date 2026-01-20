
import React from 'react';
import { Image as ImageIcon, Video as VideoIcon, Play } from 'lucide-react';

const MediaGallery: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#003366]">Media Galereya</h2>
          <p className="text-gray-500 mt-2">Muhim tadbirlar foto va video lavhalari</p>
        </div>
        <button className="text-blue-600 font-bold hover:underline">Barchasini ko'rish</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
          <img src="https://picsum.photos/800/800?random=20" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Main" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
            <div className="flex items-center gap-2 text-white mb-2">
              <ImageIcon size={20} />
              <span className="text-sm font-medium">Foto</span>
            </div>
            <h4 className="text-white font-bold text-xl">Xalqaro konferensiya ochilish marosimi</h4>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-xl">
          <img src="https://picsum.photos/400/400?random=21" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="1" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="text-white fill-current" size={48} />
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl">
          <img src="https://picsum.photos/400/400?random=22" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="2" />
        </div>

        <div className="relative group overflow-hidden rounded-xl">
          <img src="https://picsum.photos/400/400?random=23" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="3" />
        </div>

        <div className="relative group overflow-hidden rounded-xl">
          <img src="https://picsum.photos/400/400?random=24" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="4" />
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
