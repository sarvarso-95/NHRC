
export enum Language {
  UZ = 'O\'z',
  UZ_CYR = 'Ўз',
  RU = 'Ru',
  EN = 'En'
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: 'center' | 'uzbekistan' | 'world';
  image?: string;
  description: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  type: 'national' | 'foreign';
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'normal' | 'large';
  grayscale: boolean;
}
