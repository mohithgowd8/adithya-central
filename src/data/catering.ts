export interface CateringFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const CATERING_FEATURES: CateringFeature[] = [
  {
    id: 'f1',
    title: 'Traditional Flavours',
    description: 'Heritage recipes preserved across generations, prepared using authentic spices and traditional slow-cooking methods.',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'f2',
    title: 'Freshly Prepared',
    description: '100% fresh, locally sourced ingredients prepared in hygienic state-of-the-art kitchen setups.',
    iconName: 'Sparkles'
  },
  {
    id: 'f3',
    title: 'Experienced Service',
    description: 'Uniformed, trained hospitality staff ensuring warm, courteous, and efficient table or buffet management.',
    iconName: 'Users'
  },
  {
    id: 'f4',
    title: 'Custom Menus',
    description: 'Tailored South Indian, North Indian, Tandoori, and Live Food Counter menus to match your exact celebration preferences.',
    iconName: 'ChefHat'
  }
];

export const CATERING_SERVICES_LIST = [
  {
    title: 'Wedding & Reception Catering',
    description: 'Elaborate traditional banana leaf feasts, multi-cuisine dinner buffets, welcome drink counters, and artisanal sweet live stations for high-capacity grand weddings.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Traditional Family Functions',
    description: 'Pure, authentic, and sacred food preparations for Housewarming (Gruhapravesam), Engagement (Nischayathartham), Seemantham, and Naming Ceremonies.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Corporate Events & Galas',
    description: 'Executive luncheons, high-tea spreads, conference buffets, and annual celebratory dinners crafted for corporate precision and taste.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Special Celebrations & Parties',
    description: 'Custom snack boxes, live chaat stalls, continental fusion stations, and dessert bars for birthdays, anniversaries, and reunions.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  }
];
