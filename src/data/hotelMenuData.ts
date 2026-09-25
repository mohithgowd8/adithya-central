export interface MenuItemData {
  id: string;
  name: string;
  category: string;
  type: 'veg' | 'non-veg';
  popular?: boolean;
}

export interface PackageData {
  id: string;
  title: string;
  itemsCount: number;
  description: string;
  inclusions: string[];
}

export const CATERING_MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'welcome', label: 'Welcome Drinks' },
  { id: 'sweets', label: 'Sweets & Desserts' },
  { id: 'starters_veg', label: 'Veg Starters & Snacks' },
  { id: 'starters_nonveg', label: 'Non-Veg Starters' },
  { id: 'breads', label: 'Indian Breads' },
  { id: 'rice_veg', label: 'Flavoured Rice & Veg Biryani' },
  { id: 'biryani_nonveg', label: 'Non-Veg Biryani & Curries' },
  { id: 'kurmas', label: 'Kurmas & North Indian' },
  { id: 'dal', label: 'Dal (Pappu)' },
  { id: 'fry', label: 'Oil Fry & Poriyals' },
  { id: 'curries_veg', label: 'South Indian Curries' },
  { id: 'icecream', label: 'Ice Creams' },
  { id: 'breakfast', label: 'Breakfast & Hi-Tea' },
];

export const HOTEL_ADITHYA_MENU_ITEMS: MenuItemData[] = [
  // Welcome Drinks
  { id: 'w1', name: 'Soft Drinks', category: 'welcome', type: 'veg' },
  { id: 'w2', name: 'Strawberry Stresh', category: 'welcome', type: 'veg' },
  { id: 'w3', name: 'Lemonade', category: 'welcome', type: 'veg' },
  { id: 'w4', name: 'Orange Lemonade', category: 'welcome', type: 'veg' },
  { id: 'w5', name: 'Grape Juice', category: 'welcome', type: 'veg' },
  { id: 'w6', name: 'Mango Juice', category: 'welcome', type: 'veg' },
  { id: 'w7', name: 'Watermelon Juice', category: 'welcome', type: 'veg', popular: true },
  { id: 'w8', name: 'Vanilla Milkshake', category: 'welcome', type: 'veg' },
  { id: 'w9', name: 'Banana Milkshake', category: 'welcome', type: 'veg' },
  { id: 'w10', name: 'Fruit Punch', category: 'welcome', type: 'veg', popular: true },
  { id: 'w11', name: 'Badam Milk', category: 'welcome', type: 'veg', popular: true },
  { id: 'w12', name: 'Kharbuja Juice', category: 'welcome', type: 'veg' },
  { id: 'w13', name: 'Mocktails Bar', category: 'welcome', type: 'veg', popular: true },

  // Sweets
  { id: 'sw1', name: 'Gulab Jamun', category: 'sweets', type: 'veg', popular: true },
  { id: 'sw2', name: 'Bread Halwa', category: 'sweets', type: 'veg' },
  { id: 'sw3', name: 'Carrot Halwa', category: 'sweets', type: 'veg' },
  { id: 'sw4', name: 'Halwa (Papaya / Sorakaya)', category: 'sweets', type: 'veg' },
  { id: 'sw5', name: 'Chakrapongali', category: 'sweets', type: 'veg', popular: true },
  { id: 'sw6', name: 'Moong Dal Halwa', category: 'sweets', type: 'veg' },
  { id: 'sw7', name: 'Poornam (Boorelu)', category: 'sweets', type: 'veg', popular: true },
  { id: 'sw8', name: 'Bobbatlu (Bhakshalu)', category: 'sweets', type: 'veg', popular: true },
  { id: 'sw9', name: 'Double Ka Meetha', category: 'sweets', type: 'veg', popular: true },
  { id: 'sw10', name: 'Rice Kheer', category: 'sweets', type: 'veg' },
  { id: 'sw11', name: 'Mango Payasam', category: 'sweets', type: 'veg' },
  { id: 'sw12', name: 'Semiya Payasam', category: 'sweets', type: 'veg' },
  { id: 'sw13', name: 'Agra Sweet', category: 'sweets', type: 'veg' },
  { id: 'sw14', name: 'Bengali Sweet', category: 'sweets', type: 'veg' },
  { id: 'sw15', name: 'Cashewnut Burfi (Kaju Katli)', category: 'sweets', type: 'veg', popular: true },
  { id: 'sw16', name: 'Ragi Halwa', category: 'sweets', type: 'veg' },
  { id: 'sw17', name: 'Green Apple Halwa', category: 'sweets', type: 'veg' },
  { id: 'sw18', name: 'Neredu Halwa', category: 'sweets', type: 'veg' },
  { id: 'sw19', name: 'Mango Halwa', category: 'sweets', type: 'veg' },

  // Veg Starters & Hot Items
  { id: 'st1', name: 'Crispy Baby Corn 65', category: 'starters_veg', type: 'veg', popular: true },
  { id: 'st2', name: 'Veg. Gold Coins', category: 'starters_veg', type: 'veg' },
  { id: 'st3', name: 'Masala Wada', category: 'starters_veg', type: 'veg' },
  { id: 'st4', name: 'Cut Mirchi', category: 'starters_veg', type: 'veg', popular: true },
  { id: 'st5', name: 'Mirchi Bajji', category: 'starters_veg', type: 'veg', popular: true },
  { id: 'st6', name: 'Veg. Spring Rolls', category: 'starters_veg', type: 'veg' },
  { id: 'st7', name: 'Shanghai Rolls', category: 'starters_veg', type: 'veg' },
  { id: 'st8', name: 'Veg. Manchurian Dry', category: 'starters_veg', type: 'veg', popular: true },
  { id: 'st9', name: 'Crispy Fried Vegetables', category: 'starters_veg', type: 'veg' },
  { id: 'st10', name: 'Veg. Cutlet', category: 'starters_veg', type: 'veg' },
  { id: 'st11', name: 'Veg. Bullets', category: 'starters_veg', type: 'veg' },
  { id: 'st12', name: 'Bhutan Veg', category: 'starters_veg', type: 'veg' },
  { id: 'st13', name: 'Garden Green Salad', category: 'starters_veg', type: 'veg' },
  { id: 'st14', name: 'Yogurt Cucumber Salad', category: 'starters_veg', type: 'veg' },
  { id: 'st15', name: 'Raw Papaya Salad', category: 'starters_veg', type: 'veg' },
  { id: 'st16', name: 'Aloo Chaat & Chana Chaat', category: 'starters_veg', type: 'veg' },

  // Non-Veg Starters
  { id: 'nst1', name: 'Hong Kong Chicken', category: 'starters_nonveg', type: 'non-veg', popular: true },
  { id: 'nst2', name: 'Murgh Mirchi Kabab', category: 'starters_nonveg', type: 'non-veg', popular: true },
  { id: 'nst3', name: 'Chicken 65', category: 'starters_nonveg', type: 'non-veg', popular: true },
  { id: 'nst4', name: 'R. R. Chicken', category: 'starters_nonveg', type: 'non-veg' },
  { id: 'nst5', name: 'Andhra Fried Chicken', category: 'starters_nonveg', type: 'non-veg', popular: true },
  { id: 'nst6', name: 'Crispy Fried Fish', category: 'starters_nonveg', type: 'non-veg' },
  { id: 'nst7', name: 'Andhra Fried Prawns', category: 'starters_nonveg', type: 'non-veg', popular: true },
  { id: 'nst8', name: 'Apollo Fish', category: 'starters_nonveg', type: 'non-veg', popular: true },
  { id: 'nst9', name: 'Fish Roast / Fish Fry (Boneless)', category: 'starters_nonveg', type: 'non-veg' },
  { id: 'nst10', name: 'Prawns Fry & Prawns Chettinadu', category: 'starters_nonveg', type: 'non-veg' },

  // Indian Breads
  { id: 'br1', name: 'Tandoori Roti', category: 'breads', type: 'veg' },
  { id: 'br2', name: 'Plain Naan', category: 'breads', type: 'veg' },
  { id: 'br3', name: 'Butter Naan', category: 'breads', type: 'veg', popular: true },
  { id: 'br4', name: 'Plain Kulcha', category: 'breads', type: 'veg' },
  { id: 'br5', name: 'Stuffed Kulcha', category: 'breads', type: 'veg' },
  { id: 'br6', name: 'Masala Kulcha', category: 'breads', type: 'veg' },
  { id: 'br7', name: 'Methi Paratha', category: 'breads', type: 'veg' },
  { id: 'br8', name: 'Pudina Paratha', category: 'breads', type: 'veg' },
  { id: 'br9', name: 'Rumali Roti', category: 'breads', type: 'veg', popular: true },
  { id: 'br10', name: 'Aloo Paratha', category: 'breads', type: 'veg' },

  // Flavoured Rice & Veg Biryanis
  { id: 'rv1', name: 'Traditional Tamarind Rice (Pulihora)', category: 'rice_veg', type: 'veg', popular: true },
  { id: 'rv2', name: 'Lemon Rice', category: 'rice_veg', type: 'veg' },
  { id: 'rv3', name: 'Coconut Rice / Coconut Pulav', category: 'rice_veg', type: 'veg' },
  { id: 'rv4', name: 'Jeera Fried Rice', category: 'rice_veg', type: 'veg' },
  { id: 'rv5', name: 'Curry Leaves Rice (Karithvepaku Sadam)', category: 'rice_veg', type: 'veg' },
  { id: 'rv6', name: 'Methi Rice', category: 'rice_veg', type: 'veg' },
  { id: 'rv7', name: 'Veg. Pulav', category: 'rice_veg', type: 'veg' },
  { id: 'rv8', name: 'Special Veg. Dum Biryani', category: 'rice_veg', type: 'veg', popular: true },
  { id: 'rv9', name: 'Veg. Fried Rice', category: 'rice_veg', type: 'veg' },
  { id: 'rv10', name: 'Veg. Manchurian Fried Rice', category: 'rice_veg', type: 'veg' },
  { id: 'rv11', name: 'Garlic Mushroom Fried Rice', category: 'rice_veg', type: 'veg' },
  { id: 'rv12', name: 'Mushroom Biryani', category: 'rice_veg', type: 'veg', popular: true },
  { id: 'rv13', name: 'Panasa (Jack Fruit) Biryani', category: 'rice_veg', type: 'veg', popular: true },
  { id: 'rv14', name: 'Corn Capsicum Biryani', category: 'rice_veg', type: 'veg' },
  { id: 'rv15', name: 'Corn Mint Pulav', category: 'rice_veg', type: 'veg' },

  // Non-Veg Biryani & Curries
  { id: 'nvb1', name: 'Mutton Dum Biryani', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb2', name: 'Mutton Kheema Biryani', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb3', name: 'Mutton Curry & Gongura Mutton', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb4', name: 'Mutton Rogan Josh', category: 'biryani_nonveg', type: 'non-veg' },
  { id: 'nvb5', name: 'Special Chicken Dum Biryani', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb6', name: 'Chicken Fry Biryani', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb7', name: 'Chicken Bhuna Biryani', category: 'biryani_nonveg', type: 'non-veg' },
  { id: 'nvb8', name: 'Traditional Chicken Curry (Bone / Fry)', category: 'biryani_nonveg', type: 'non-veg' },
  { id: 'nvb9', name: 'Gongura Chicken Curry', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb10', name: 'Authentic Ulavacharu Kodi Kura', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb11', name: 'Chepala Pulusu (Traditional Fish Curry)', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb12', name: 'Prawns Curry & Prawns Iguru', category: 'biryani_nonveg', type: 'non-veg', popular: true },
  { id: 'nvb13', name: 'Prawns Gongura & Prawns Biryani', category: 'biryani_nonveg', type: 'non-veg', popular: true },

  // Kurmas & North Indian Veg
  { id: 'km1', name: 'Mix Veg Kurma', category: 'kurmas', type: 'veg' },
  { id: 'km2', name: 'Paneer Veg. Kurma', category: 'kurmas', type: 'veg' },
  { id: 'km3', name: 'Phool Makhani Kurma', category: 'kurmas', type: 'veg' },
  { id: 'km4', name: 'Veg Kofta Korma', category: 'kurmas', type: 'veg' },
  { id: 'km5', name: 'Alu Paneer Khorma', category: 'kurmas', type: 'veg' },
  { id: 'km6', name: 'Paneer Butter Masala', category: 'kurmas', type: 'veg', popular: true },
  { id: 'km7', name: 'Veg. Kolhapuri', category: 'kurmas', type: 'veg' },
  { id: 'km8', name: 'Paneer Capsicum Masala', category: 'kurmas', type: 'veg' },
  { id: 'km9', name: 'Mushroom Masala', category: 'kurmas', type: 'veg' },
  { id: 'km10', name: 'Babycorn Capsicum Masala', category: 'kurmas', type: 'veg' },
  { id: 'km11', name: 'Kadai Veg', category: 'kurmas', type: 'veg' },

  // Dal (Pappu)
  { id: 'dl1', name: 'Tomato Pappu', category: 'dal', type: 'veg', popular: true },
  { id: 'dl2', name: 'Mamidikaya (Mango) Pappu', category: 'dal', type: 'veg', popular: true },
  { id: 'dl3', name: 'Pappu Dosakaya', category: 'dal', type: 'veg' },
  { id: 'dl4', name: 'Pappu Anabakaya', category: 'dal', type: 'veg' },
  { id: 'dl5', name: 'Pappu Beerakaya', category: 'dal', type: 'veg' },
  { id: 'dl6', name: 'Dhaba Style Dal Fry', category: 'dal', type: 'veg' },
  { id: 'dl7', name: 'Authentic Mudda Pappu & Ghee', category: 'dal', type: 'veg', popular: true },
  { id: 'dl8', name: 'Green Leaves Dal (Thotakura Pappu)', category: 'dal', type: 'veg' },

  // Oil Fry & Poriyals
  { id: 'fry1', name: 'Bhindi Peanut Fry', category: 'fry', type: 'veg', popular: true },
  { id: 'fry2', name: 'Bhindi Jaipuri', category: 'fry', type: 'veg' },
  { id: 'fry3', name: 'Chemadumpa Fry', category: 'fry', type: 'veg' },
  { id: 'fry4', name: 'Brinjal Pakoda Fry', category: 'fry', type: 'veg' },
  { id: 'fry5', name: 'Kanda Karapu Pusa', category: 'fry', type: 'veg' },
  { id: 'fry6', name: 'Tindly (Dondakaya) Pakoda Fry', category: 'fry', type: 'veg' },
  { id: 'fry7', name: 'Thotakura Fry & Thotakura Pakoda', category: 'fry', type: 'veg' },
  { id: 'fry8', name: 'Alu 65 & Gobi 65 & Cabbage 65', category: 'fry', type: 'veg' },
  { id: 'fry9', name: 'Potato Turumu & Vankaya Fry', category: 'fry', type: 'veg' },
  { id: 'fry10', name: 'Cabbage Peanut & Sesame (Til) Fry', category: 'fry', type: 'veg' },
  { id: 'fry11', name: 'Alu Gobi & Sorakaya Kobbari Porial', category: 'fry', type: 'veg' },
  { id: 'fry12', name: 'Mixed Veg. Porial & Aratikaya Fry', category: 'fry', type: 'veg' },
  { id: 'fry13', name: 'Goruchikkudu & Chikkudu Senagapodi Fry', category: 'fry', type: 'veg', popular: true },
  { id: 'fry14', name: 'Dondakai Coconut & Carrot Beans Porial', category: 'fry', type: 'veg' },
  { id: 'fry15', name: 'Meal Maker Sweetcorn & Mushroom Fry', category: 'fry', type: 'veg' },

  // South Indian Curries
  { id: 'sc1', name: 'Tomato Drumstick Curry', category: 'curries_veg', type: 'veg' },
  { id: 'sc2', name: 'Sorakaya Masala & Sorakaya Pulusu', category: 'curries_veg', type: 'veg' },
  { id: 'sc3', name: 'Stuffed Brinjal Curry (Gutti Vankaya)', category: 'curries_veg', type: 'veg', popular: true },
  { id: 'sc4', name: 'Chemadumpa Pulusu & Kanda Pulusu', category: 'curries_veg', type: 'veg' },
  { id: 'sc5', name: 'Stuffed Tindly Curry', category: 'curries_veg', type: 'veg' },
  { id: 'sc6', name: 'Sweet Gummadikaya Curry', category: 'curries_veg', type: 'veg' },
  { id: 'sc7', name: 'Country Beans (Chikkudukaya) Curry', category: 'curries_veg', type: 'veg' },
  { id: 'sc8', name: 'Senaga Pappu Beerakaya', category: 'curries_veg', type: 'veg' },
  { id: 'sc9', name: 'Gongura Meal Maker Curry', category: 'curries_veg', type: 'veg', popular: true },
  { id: 'sc10', name: 'Mealmaker Batani Curry', category: 'curries_veg', type: 'veg' },
  { id: 'sc11', name: 'Beerakaya Vadiyalu', category: 'curries_veg', type: 'veg' },
  { id: 'sc12', name: 'Dosakaya Paneer & Vankaya Batani', category: 'curries_veg', type: 'veg' },
  { id: 'sc13', name: 'Gongura Phool Makhani', category: 'curries_veg', type: 'veg' },
  { id: 'sc14', name: 'Special Ulavacharu Mushroom Curry', category: 'curries_veg', type: 'veg', popular: true },
  { id: 'sc15', name: 'Aratikaya Chapa Pulusu (Raw Banana Fish Style Curry)', category: 'curries_veg', type: 'veg', popular: true },
  { id: 'sc16', name: 'Tomato Kothimeera & Gongura Onion', category: 'curries_veg', type: 'veg' },
  { id: 'sc17', name: 'Dosakaya Mukkala & Dondakaya Mukkala', category: 'curries_veg', type: 'veg' },
  { id: 'sc18', name: 'Kobbari Mamidikaya Curry', category: 'curries_veg', type: 'veg', popular: true },

  // Ice Creams
  { id: 'ic1', name: 'Gourmet Vanilla Ice Cream', category: 'icecream', type: 'veg' },
  { id: 'ic2', name: 'Fresh Strawberry Ice Cream', category: 'icecream', type: 'veg' },
  { id: 'ic3', name: 'Butter Scotch Ice Cream', category: 'icecream', type: 'veg', popular: true },
  { id: 'ic4', name: 'Rich Mango Ice Cream', category: 'icecream', type: 'veg' },
  { id: 'ic5', name: 'Pista Kulfi & Ice Cream', category: 'icecream', type: 'veg', popular: true },

  // Breakfast & Hi-Tea
  { id: 'bf1', name: 'Hot Steamed Idli & Chutneys', category: 'breakfast', type: 'veg', popular: true },
  { id: 'bf2', name: 'Crispy Gaari (Medu Vada)', category: 'breakfast', type: 'veg', popular: true },
  { id: 'bf3', name: 'Rava Upma & Semiya Upma', category: 'breakfast', type: 'veg' },
  { id: 'bf4', name: 'Tomato Bath & Semiya Bath', category: 'breakfast', type: 'veg' },
  { id: 'bf5', name: 'Mysore Bajji', category: 'breakfast', type: 'veg', popular: true },
  { id: 'bf6', name: 'Ven Pongal & Ghee', category: 'breakfast', type: 'veg' },
  { id: 'bf7', name: 'South Indian Filter Coffee', category: 'breakfast', type: 'veg', popular: true },
  { id: 'bf8', name: 'Spiced Masala Tea & Irani Chai', category: 'breakfast', type: 'veg' },
  { id: 'bf9', name: 'Assorted Bakery Biscuits & Hot Snacks', category: 'breakfast', type: 'veg' }
];

export const CATERING_PACKAGES_DATA: PackageData[] = [
  {
    id: 'pkg-1',
    title: 'MENU - 1 (20 Items Package)',
    itemsCount: 20,
    description: 'Complete Traditional Wedding / Banquet Feast Spread',
    inclusions: [
      'Welcome Drink (1 Soft Drink)',
      'Garden Green Salad (1)',
      'Traditional Sweet (1)',
      'Veg. Starter (1)',
      'Flavoured Rice / Veg Biryani / Coconut Rice (1)',
      'Raitha',
      'Mixed Veg. Korma (1)',
      'Dal (Pappu) (1)',
      'Veg. Curry (1)',
      'Veg. Oil Fry (1)',
      'Authentic Sambar & Rasam',
      'Plain Rice, Curd & Ghee',
      'Roti Chutney & Pickle (1)',
      'Papad, Pan & Ice Cream (Vanilla/Strawberry)'
    ]
  },
  {
    id: 'pkg-2',
    title: 'MENU - 2 (22 Items Grand Package)',
    itemsCount: 22,
    description: 'Grand Multi-Course Royal Celebration Feast Spread',
    inclusions: [
      'Welcome Drink (2 Soft Drinks / Juice / Soup)',
      'Fresh Salads (1)',
      'Deluxe Sweets (2 Varieties)',
      'Veg. Starter (1)',
      'Hot Indian Bread (Roti / Naan / Paratha) (1)',
      'Flavoured Rice (1)',
      'Biryani / Fried Rice (1) with Raitha',
      'Korma Item (1) & Dal (1)',
      'Veg. Curries (2 Varieties)',
      'Boiled Fry / Porial (1) & Veg. Fry (2)',
      'Sambar, Rasam, Pachi Pulusu / Majjiga Pulusu & Ulavacharu Cream (2)',
      'Plain Rice, Curd, Ghee, Frymes & Curd Chillies',
      'Pickle (1) & Roti Chutney (1)',
      'Papad, Pan, Mineral Water Bottles',
      'Premium Ice Cream (Vanilla / Strawberry / Butter Scotch / Pista)'
    ]
  }
];
