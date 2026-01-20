
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Send, 
  Eye, 
  Search, 
  BookOpen, 
  HelpCircle, 
  FileText, 
  Globe, 
  Scale, 
  Users,
  Image,
  Video
} from 'lucide-react';

export const SOCIAL_LINKS = [
  { icon: <Send size={18} />, url: '#', label: 'Telegram' },
  { icon: <Facebook size={18} />, url: '#', label: 'Facebook' },
  { icon: <Instagram size={18} />, url: '#', label: 'Instagram' },
  { icon: <Youtube size={18} />, url: '#', label: 'Youtube' },
  { icon: <Twitter size={18} />, url: '#', label: 'X' },
];

export const NAV_MENU = [
  { label: 'Markaz haqida', sub: ['Tarix', 'Tuzilma', 'Rahbariyat'] },
  { label: 'Huquqiy asoslar', sub: ['Konstitutsiya', 'Qonunlar', 'Farmonlar'] },
  { label: 'Faoliyat', sub: ['Monitoring', 'Ta\'lim', 'Tahlil'] },
  { label: 'Xalqaro hamkorlik', sub: ['BMT', 'YXHT', 'Islom hamkorlik tashkiloti'] },
  { label: 'Murojaatlar', sub: ['Elektron murojaat', 'Qabul grafigi', 'Ishonch telefoni'] },
  { label: 'Media', sub: ['Yangiliklar', 'Foto galereya', 'Video galereya'] },
];

export const MOCK_NEWS = [
  {
    id: 1,
    date: '2024-05-20',
    title: 'Markaz tomonidan yangi o\'quv kursi tashkil etildi',
    category: 'center',
    image: 'https://picsum.photos/800/400?random=1',
    description: 'Inson huquqlari bo\'yicha milliy markazda xalqaro ekspertlar ishtirokida seminar bo\'lib o\'tdi.'
  },
  {
    id: 2,
    date: '2024-05-19',
    title: 'O\'zbekiston inson huquqlari reytingida ko\'tarildi',
    category: 'uzbekistan',
    image: 'https://picsum.photos/800/400?random=2',
    description: 'Xalqaro inson huquqlari tashkilotlari O\'zbekistondagi islohotlarni ijobiy baholamoqda.'
  },
  {
    id: 3,
    date: '2024-05-18',
    title: 'Jeneva: Inson huquqlari bo\'yicha kengash yig\'ilishi',
    category: 'world',
    image: 'https://picsum.photos/800/400?random=3',
    description: 'BMT Inson huquqlari bo\'yicha kengashining navbatdagi sessiyasi o\'z ishini boshladi.'
  }
];

export const PARTNERS = [
  { id: 1, name: 'Birlashgan Millatlar Tashkiloti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/1200px-UN_emblem_blue.svg.png', type: 'foreign' },
  { id: 2, name: 'YXHT', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/OSCE_Logo.svg/1200px-OSCE_Logo.svg.png', type: 'foreign' },
  { id: 3, name: 'Oliy Majlis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/1200px-Emblem_of_Uzbekistan.svg.png', type: 'national' },
  { id: 4, name: 'Adliya Vazirligi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/1200px-Emblem_of_Uzbekistan.svg.png', type: 'national' },
];
