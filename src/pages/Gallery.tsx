import { useState } from 'react';
import MetaSEO from '../components/ui/MetaSEO';
import SectionHeading from '../components/ui/SectionHeading';
import LightboxModal from '../components/ui/LightboxModal';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem } from '../types';
import { Eye } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'VENUES' | 'WEDDINGS' | 'CATERING' | 'FOOD' | 'RESTAURANT' | 'EVENTS'>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters: Array<'ALL' | 'VENUES' | 'WEDDINGS' | 'CATERING' | 'FOOD' | 'RESTAURANT' | 'EVENTS'> = [
    'ALL',
    'VENUES',
    'WEDDINGS',
    'CATERING',
    'FOOD',
    'RESTAURANT',
    'EVENTS',
  ];

  const filteredItems = activeFilter === 'ALL'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item: GalleryItem) => item.category === activeFilter);

  return (
    <main className="pt-24 pb-20 w-full">
      <MetaSEO
        title="Photo Gallery | Adithya Central - Venues, Weddings & Catering"
        description="Browse the photo gallery of Adithya Central featuring Aarna Banquets & Cuisines, Achyutha Banquets & Cuisines, traditional South Indian catering, and restaurant dining."
      />

      {/* Hero */}
      <section className="bg-[#120407] text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-gold/40 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/aarna/aarna-hall-stage-front.jpg"
            alt="Adithya Central Photo Gallery"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-block px-5 py-2 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 text-xs uppercase tracking-[0.22em] font-bold shadow-2xl backdrop-blur-md mb-2">
            VISUAL PORTFOLIO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Moments Worth <br />
            <span className="italic text-gold font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Remembering.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ivory-cream max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Explore high-resolution photography showcasing our banquet spaces, wedding setups, catering spreads, and dining experiences.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-16 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label="FILTER GALLERY"
            title="Browse By Category"
            align="center"
          />

          {/* Interactive Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-burgundy text-gold border border-gold shadow-md'
                    : 'bg-ivory-cream/80 text-burgundy hover:bg-gold/20 border border-gold/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item: GalleryItem) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative h-72 rounded-sm overflow-hidden border border-gold/40 shadow-md cursor-pointer bg-burgundy-dark"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-burgundy-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                  <div className="self-end">
                    <div className="w-9 h-9 rounded-full bg-gold text-burgundy flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-ivory mt-1 font-normal">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item: GalleryItem) => setSelectedItem(item)}
      />
    </main>
  );
}
