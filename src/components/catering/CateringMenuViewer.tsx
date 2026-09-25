import { useState } from 'react';
import { Utensils, Search, Coffee, IceCream, ChefHat, CheckCircle2, PackageCheck, Flame, RotateCcw } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { HOTEL_ADITHYA_MENU_ITEMS, CATERING_MENU_CATEGORIES, CATERING_PACKAGES_DATA } from '../../data/hotelMenuData';

export default function CateringMenuViewer() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'items' | 'packages'>('items');

  // Handle Category click with auto-reset if selected filter has 0 items
  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setSearchQuery('');
    if (dietaryFilter !== 'all') {
      const matching = HOTEL_ADITHYA_MENU_ITEMS.filter((i) => {
        const matchCat = catId === 'all' || i.category === catId;
        const matchDiet = i.type === dietaryFilter;
        return matchCat && matchDiet;
      });
      if (matching.length === 0) {
        setDietaryFilter('all');
      }
    }
  };

  // Filtered items logic
  const filteredItems = HOTEL_ADITHYA_MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = dietaryFilter === 'all' || item.type === dietaryFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDiet && matchesSearch;
  });

  // Calculate counts for current category
  const categoryItems = HOTEL_ADITHYA_MENU_ITEMS.filter(
    (i) => activeCategory === 'all' || i.category === activeCategory
  );
  const vegCountInCat = categoryItems.filter((i) => i.type === 'veg').length;
  const nonVegCountInCat = categoryItems.filter((i) => i.type === 'non-veg').length;

  return (
    <div className="w-full bg-white border border-gold/40 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
      
      {/* TOP TOGGLE: INDIVIDUAL DISHES VS STANDARD PACKAGES */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold/30 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-wider mb-2">
            <Utensils className="w-3.5 h-3.5 text-gold-dark" />
            <span>OFFICIAL HOTEL ADITHYA CENTRAL MENU</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl text-burgundy-deep font-bold">
            Catering & Event Menu List
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
            Browse our complete list of traditional Veg, Non-Veg dishes, Biryanis & fixed Catering packages.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1.5 bg-ivory-cream rounded-xl border border-gold/40 shadow-sm shrink-0">
          <button
            onClick={() => setActiveTab('items')}
            className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all ${
              activeTab === 'items'
                ? 'bg-burgundy text-gold shadow-md'
                : 'text-charcoal/70 hover:text-burgundy'
            }`}
          >
            All Menu Items ({HOTEL_ADITHYA_MENU_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
              activeTab === 'packages'
                ? 'bg-burgundy text-gold shadow-md'
                : 'text-charcoal/70 hover:text-burgundy'
            }`}
          >
            <PackageCheck className="w-4 h-4 text-gold" />
            Standard Packages (20/22 Items)
          </button>
        </div>
      </div>

      {activeTab === 'items' ? (
        <>
          {/* CATEGORY BUTTONS & FILTERS */}
          <div className="space-y-4">
            {/* Category Scrollbar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATERING_MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const itemCount = cat.id === 'all'
                  ? HOTEL_ADITHYA_MENU_ITEMS.length
                  : HOTEL_ADITHYA_MENU_ITEMS.filter((i) => i.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                      isActive
                        ? 'bg-burgundy text-gold border-gold shadow-md'
                        : 'bg-ivory-cream/50 text-charcoal border-gold/30 hover:bg-gold/10 hover:border-gold'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-gold text-burgundy-dark font-extrabold' : 'bg-burgundy/10 text-burgundy'}`}>
                      {itemCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Filter controls bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              {/* Veg / Non-Veg Toggle */}
              <div className="flex items-center p-1 bg-ivory-cream rounded-xl border border-gold/40 text-xs">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-4 py-1.5 rounded-lg font-bold transition-all ${
                    dietaryFilter === 'all' ? 'bg-burgundy text-ivory shadow-sm' : 'text-charcoal/70'
                  }`}
                >
                  All Items ({categoryItems.length})
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  disabled={vegCountInCat === 0}
                  className={`px-4 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : vegCountInCat === 0
                      ? 'text-charcoal/30 cursor-not-allowed'
                      : 'text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${vegCountInCat > 0 ? 'bg-emerald-500' : 'bg-charcoal/30'}`}></span>
                  Veg Only ({vegCountInCat})
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  disabled={nonVegCountInCat === 0}
                  className={`px-4 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-rose-800 text-white shadow-sm'
                      : nonVegCountInCat === 0
                      ? 'text-charcoal/30 cursor-not-allowed opacity-60'
                      : 'text-rose-800 hover:bg-rose-100'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${nonVegCountInCat > 0 ? 'bg-rose-500' : 'bg-charcoal/30'}`}></span>
                  Non-Veg Only ({nonVegCountInCat})
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-charcoal/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search dish (e.g. Biryani, Paneer)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-white text-[#150407] font-semibold border border-gold/60 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* DISHES LIST GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-ivory-cream/30 border border-gold/30 hover:border-gold transition-all duration-300 hover:shadow-md flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-4 h-4 border flex items-center justify-center p-0.5 shrink-0 ${
                      item.type === 'veg' ? 'border-emerald-600' : 'border-rose-600'
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.type === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    ></span>
                  </span>
                  <div>
                    <h4 className="font-serif text-base font-bold text-burgundy-deep group-hover:text-burgundy transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-charcoal/60 uppercase tracking-wider font-semibold">
                      {item.category.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                {item.popular && (
                  <span className="text-[9px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-gold/20 text-gold-dark border border-gold/40 shrink-0 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-gold-dark fill-gold-dark" /> POPULAR
                  </span>
                )}
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-charcoal/70 space-y-3 bg-ivory-warm/40 border border-gold/30 rounded-2xl">
              <Utensils className="w-10 h-10 mx-auto text-gold opacity-60" />
              <p className="text-sm font-bold text-burgundy-deep">
                No items match your selected filter ({dietaryFilter.toUpperCase()}) in this category.
              </p>
              <button
                onClick={() => {
                  setDietaryFilter('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-burgundy text-gold text-xs font-bold uppercase tracking-wider shadow-md hover:bg-burgundy-deep transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                SHOW ALL ITEMS IN THIS CATEGORY ({categoryItems.length})
              </button>
            </div>
          )}
        </>
      ) : (
        /* STANDARD PACKAGES VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {CATERING_PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-ivory-warm/60 border-2 border-gold/50 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gold text-burgundy-dark text-xs font-extrabold px-4 py-1.5 rounded-bl-xl border-l border-b border-gold-dark shadow-md">
                {pkg.itemsCount} ITEMS SET MENU
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-burgundy font-bold block">
                  STANDARD CATERING PACKAGE
                </span>
                <h4 className="font-serif text-2xl font-bold text-burgundy-deep">
                  {pkg.title}
                </h4>
                <p className="text-xs text-charcoal/80 font-medium">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-gold/30">
                <h5 className="text-xs uppercase tracking-wider font-extrabold text-gold-dark">
                  Package Inclusions:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-charcoal/85">
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gold/20 text-center">
                <a
                  href={`https://wa.me/917997888869?text=Hello%20Hotel%20Adhitya%20Central,%20I%20am%20interested%20in%20${encodeURIComponent(pkg.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all hover:scale-105"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  ENQUIRE THIS PACKAGE VIA WHATSAPP (+91 79978 88869)
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER NOTE */}
      <div className="bg-ivory-cream/80 border border-gold/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-charcoal/80">
        <div>
          <strong className="text-burgundy-deep block">Includes in All Catering Spreads:</strong>
          <span>Plain Rice, Sambar, Rasam, Raitha, Pickle, Papad, Ghee, Curd, Curd Chillies, Mineral Water.</span>
        </div>
        <div className="text-right shrink-0">
          <span className="text-gold-dark font-bold block">HOTEL ADITHYA CENTRAL CATERING</span>
          <span className="text-charcoal/70 font-semibold">Call / WhatsApp: +91 79978 88869</span>
        </div>
      </div>

    </div>
  );
}
