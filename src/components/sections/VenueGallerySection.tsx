import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import LightboxModal from '../ui/LightboxModal';
import { GALLERY_DATA } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { Eye } from 'lucide-react';
import Button from '../ui/Button';

export default function VenueGallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Display top 8 gallery items on home preview
  const homeGallery = GALLERY_DATA.slice(0, 8);

  return (
    <section className="py-20 sm:py-28 bg-ivory text-charcoal border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="VISUAL TOUR"
          title="Glance Through Our Venues & Culinary Creations"
          description="High-resolution moments captured at Aarna Banquets & Cuisines, Achyutha Banquets & Cuisines, and catering events."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {homeGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-64 rounded-sm overflow-hidden border border-gold/40 shadow-md cursor-pointer bg-burgundy-dark"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

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

        <div className="mt-12 text-center">
          <Button to="/gallery" variant="primary" size="md" showArrow>
            VIEW FULL PHOTO GALLERY
          </Button>
        </div>

      </div>

      <LightboxModal
        item={selectedItem}
        items={homeGallery}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
}
