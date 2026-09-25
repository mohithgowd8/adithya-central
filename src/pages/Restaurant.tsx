import { useState } from 'react';
import MetaSEO from '../components/ui/MetaSEO';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/form/ContactForm';
import LightboxModal from '../components/ui/LightboxModal';
import CateringMenuViewer from '../components/catering/CateringMenuViewer';
import { RESTAURANT_HIGHLIGHTS } from '../data/restaurant';
import { GalleryItem } from '../types';
import { Utensils, CheckCircle2, MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

export default function Restaurant() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = RESTAURANT_HIGHLIGHTS.gallery.map((img: string, i: number) => ({
    id: `rest-g-${i}`,
    title: `Restaurant Dish ${i + 1}`,
    category: 'RESTAURANT',
    image: img,
  }));

  return (
    <main className="pt-24 pb-20 w-full">
      <MetaSEO
        title="Restaurant Dining | Hotel Adhitya Central"
        description="Experience fine dining at Hotel Adhitya Central Restaurant featuring authentic Andhra thalis, biryanis, tandoori grills, and signature desserts."
      />

      {/* Hero */}
      <section className="bg-[#120407] text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-gold/40 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={RESTAURANT_HIGHLIGHTS.gallery[0]} alt="Hotel Adhitya Central Restaurant" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 flex flex-col items-center">
          {/* Logo Badge */}
          <div className="mb-1 p-1 rounded-full bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-2xl">
            <img
              src="/images/logo.png"
              alt="Hotel Adhitya Central Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full bg-white p-1"
            />
          </div>

          <span className="inline-block px-5 py-2 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 text-xs uppercase tracking-[0.22em] font-bold shadow-2xl backdrop-blur-md">
            HOTEL ADHITYA CENTRAL DINING
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Adithya Central Restaurant
          </h1>
          <p className="text-base sm:text-2xl text-gold-light italic font-serif max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            "{RESTAURANT_HIGHLIGHTS.heading}"
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-[#1D060C]/90 text-ivory-cream px-4 py-2 rounded-full border border-gold/40 shadow-xl backdrop-blur-md">
              <Utensils className="w-4 h-4 text-gold" />
              <span>Authentic Andhra & Multi-Cuisine</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1D060C]/90 text-ivory-cream px-4 py-2 rounded-full border border-gold/40 shadow-xl backdrop-blur-md">
              <Clock className="w-4 h-4 text-gold" />
              <span>{RESTAURANT_HIGHLIGHTS.hours}</span>
            </div>
            <a
              href={RESTAURANT_HIGHLIGHTS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1D060C]/90 text-gold-light hover:text-gold px-4 py-2 rounded-full border border-gold/40 shadow-xl backdrop-blur-md transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold" />
              <span>Beside Balaji Theater, Eluru</span>
              <ExternalLink className="w-3 h-3 text-gold/70" />
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-gold"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-burgundy">
                  CULINARY TRADITION
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-burgundy-deep">
                A Symphony of Rich Flavours & Warm Ambiance.
              </h2>
              <div className="h-0.5 w-16 bg-gold/50"></div>
              <p className="text-base text-charcoal/80 leading-relaxed font-light">
                {RESTAURANT_HIGHLIGHTS.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {RESTAURANT_HIGHLIGHTS.features.map((feat: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-burgundy-deep font-medium">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-sm overflow-hidden border-2 border-gold shadow-2xl img-zoom-container">
              <img src={RESTAURANT_HIGHLIGHTS.gallery[0]} alt="Adithya Central Dining" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-ivory-cream/50 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="CUISINE GALLERY" title="Artisanal Dishes & Ambiance" align="center" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item: GalleryItem) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="h-56 rounded-sm overflow-hidden border border-gold/30 cursor-pointer img-zoom-container relative group"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-burgundy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs text-gold uppercase tracking-widest font-semibold">VIEW DISH</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LightboxModal item={selectedImage} items={galleryItems} onClose={() => setSelectedImage(null)} onSelect={(item: GalleryItem) => setSelectedImage(item)} />
      </section>

      {/* MENU DISHES EXPLORER */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CateringMenuViewer />
        </div>
      </section>

      {/* Location & Directions Map Section */}
      <section className="py-20 bg-ivory-cream/60 border-t border-gold/30 text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="VISIT OUR RESTAURANT"
            title="Location & Dining Hours"
            description="Centrally located in Eluru, beside Balaji Theater on LIC Office Road."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Info Column */}
            <div className="lg:col-span-5 bg-burgundy-deep text-ivory p-8 sm:p-10 rounded-sm border border-gold/40 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-1">RESTAURANT & HOTEL</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Hotel Adithya Central</h3>
                <p className="text-xs text-gold-light mt-1">Multi-Cuisine Dining & Catering Hub</p>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-ivory-cream/90 font-light">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-burgundy flex items-center justify-center text-gold border border-gold/30 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gold text-sm font-normal">Address</h4>
                    <p className="mt-0.5 leading-relaxed">
                      {RESTAURANT_HIGHLIGHTS.address}
                    </p>
                    <span className="text-[11px] text-gold-light mt-1 inline-block">
                      Landmark: {RESTAURANT_HIGHLIGHTS.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-burgundy flex items-center justify-center text-gold border border-gold/30 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gold text-sm font-normal">Dining Hours</h4>
                    <p className="mt-0.5">{RESTAURANT_HIGHLIGHTS.hours}</p>
                    <span className="text-[11px] text-ivory-cream/70">Breakfast • Lunch • Dinner</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-burgundy flex items-center justify-center text-gold border border-gold/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gold text-sm font-normal">Contact Numbers</h4>
                    <p className="mt-0.5 font-medium">{RESTAURANT_HIGHLIGHTS.phone}</p>
                    <p className="text-[11px] text-ivory-cream/70">Catering: {RESTAURANT_HIGHLIGHTS.cateringPhone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_HIGHLIGHTS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-sm bg-gold hover:bg-gold-light text-burgundy-dark font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-sm overflow-hidden border border-gold/40 shadow-xl min-h-[380px] bg-charcoal/10 relative">
              <iframe
                title="Hotel Adithya Central Google Map"
                src={RESTAURANT_HIGHLIGHTS.googleMapsEmbed}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-burgundy-deep text-ivory border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-gold">Reserve A Table / Dining Enquiry</h2>
            <p className="text-xs sm:text-sm text-ivory-cream/80 mt-2">
              Submit your request to reserve dining tables or discuss private dining options.
            </p>
          </div>
          <ContactForm initialVenue="Adithya Central Restaurant" />
        </div>
      </section>
    </main>
  );
}
