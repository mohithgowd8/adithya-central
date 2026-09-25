import { useState } from 'react';
import MetaSEO from '../components/ui/MetaSEO';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/form/ContactForm';
import LightboxModal from '../components/ui/LightboxModal';
import { VENUES_DATA } from '../data/venues';
import { GalleryItem } from '../types';
import { Users, MapPin, CheckCircle2, Sparkles, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

export default function ArnaKalyanaVedhi() {
  const venue = VENUES_DATA.find((v) => v.id === 'arna-kalyana-vedhi') || VENUES_DATA[0];
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = venue.gallery.map((img, i) => ({
    id: `arna-g-${i}`,
    title: `Arna Kalyana Vedhi View ${i + 1}`,
    category: 'WEDDINGS',
    image: img,
    caption: 'Arna Kalyana Vedhi grand wedding hall',
  }));

  return (
    <main className="pt-24 pb-20 w-full">
      <MetaSEO
        title="Arna Kalyana Vedhi | Grand Wedding Hall - Adithya Central"
        description="Arna Kalyana Vedhi is Adithya Central's premier grand wedding venue accommodating up to 2,000 guests with central air conditioning, luxury dining, and opulent bridal suites."
      />

      {/* Hero */}
      <section className="bg-[#120407] text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-gold/40 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={venue.image} alt={venue.name} className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 flex flex-col items-center">
          {/* OFFICIAL VENUE LOGO */}
          <div className="mb-2 p-1 bg-white rounded-xl shadow-2xl border border-gold/50 max-w-[280px]">
            <img
              src="/images/aarna-logo.png"
              alt="Aarna Banquets & Cuisines Logo"
              className="h-16 sm:h-20 object-contain rounded-lg"
            />
          </div>

          <span className="inline-block px-5 py-2 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 text-xs uppercase tracking-[0.22em] font-bold shadow-2xl backdrop-blur-md">
            {venue.label}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            {venue.name}
          </h1>
          <p className="text-base sm:text-2xl text-gold-light italic font-serif max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            "{venue.tagline}"
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-[#1D060C]/90 text-ivory-cream px-4 py-2 rounded-full border border-gold/40 shadow-xl backdrop-blur-md">
              <Users className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">{venue.capacityPlaceholder}</span>
            </div>
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1D060C]/90 text-gold-light hover:text-gold px-4 py-2 rounded-full border border-gold/40 shadow-xl backdrop-blur-md transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">5th Fl., Central Plaza, Pathebada Rd, Eluru</span>
              <ExternalLink className="w-3 h-3 text-gold/70" />
            </a>
            <div className="flex items-center gap-2 bg-[#1D060C]/90 text-ivory-cream px-4 py-2 rounded-full border border-gold/40 shadow-xl backdrop-blur-md">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">9:00 AM – 11:00 PM</span>
            </div>
            <a
              href={`tel:${venue.contactPhone || '7997888869'}`}
              className="flex items-center gap-2 bg-[#1D060C]/90 text-gold px-4 py-2 rounded-full border border-gold/40 shadow-xl backdrop-blur-md hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">+91 79978 88869</span>
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
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-forest">
                  VENUE OVERVIEW
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-deep">
                Opulence & Elegance For Your Grand Muhurtham.
              </h2>
              <div className="h-0.5 w-16 bg-gold/50"></div>
              <p className="text-base text-charcoal/80 leading-relaxed font-light">
                {venue.longDescription}
              </p>

              <div className="pt-4">
                <h4 className="font-serif text-lg font-bold text-forest mb-3">Suitable For:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {venue.suitableEvents.map((evt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/80">
                      <Sparkles className="w-4 h-4 text-gold shrink-0" />
                      <span>{evt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-gold shadow-2xl img-zoom-container">
              <img src={venue.gallery[0] || venue.image} alt={venue.name} className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-ivory-warm border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="FACILITIES & AMENITIES" title="Designed For Grand Celebrations." align="center" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venue.features.map((feat, i) => (
              <div key={i} className="p-5 bg-white border border-gold/30 rounded-2xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-forest-deep">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="PHOTO GALLERY" title="Explore Arna Kalyana Vedhi" align="center" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="h-56 rounded-2xl overflow-hidden border border-gold/30 cursor-pointer img-zoom-container relative group"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-forest-deep/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs text-gold uppercase tracking-widest font-semibold">VIEW IMAGE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LightboxModal item={selectedImage} items={galleryItems} onClose={() => setSelectedImage(null)} onSelect={(item: GalleryItem) => setSelectedImage(item)} />
      </section>

      {/* Location, Timings & Directions Map Section */}
      <section className="py-20 bg-ivory-warm border-t border-gold/30 text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="VENUE LOCATION"
            title="Location, Timings & Directions"
            description="5th Floor, Central Plaza, Pathebada Road, Ramachandra Rao Pet, Eluru."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Info Column */}
            <div className="lg:col-span-5 bg-forest-deep text-ivory p-8 sm:p-10 rounded-2xl border border-gold/40 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-1">PART OF HOTEL ADITHYA CENTRAL</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Aarna Banquets</h3>
                <p className="text-xs text-gold-light mt-1">Air-Conditioned Event & Banquet Venue</p>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-ivory-cream/90 font-light">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest flex items-center justify-center text-gold border border-gold/30 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gold text-sm font-normal">Venue Address</h4>
                    <p className="mt-0.5 leading-relaxed">
                      {venue.address || venue.locationPlaceholder}
                    </p>
                    <span className="text-[11px] text-gold-light mt-1 inline-block">
                      Landmark: Central Plaza (5th Floor), Pathebada Road, Ramachandra Rao Pet
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest flex items-center justify-center text-gold border border-gold/30 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gold text-sm font-normal">Timings</h4>
                    <p className="mt-0.5">{venue.timings || '9:00 AM to 11:00 PM'}</p>
                    <span className="text-[11px] text-ivory-cream/70">Open 7 days for event site visits & bookings</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest flex items-center justify-center text-gold border border-gold/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gold text-sm font-normal">Contact & Booking</h4>
                    <p className="mt-0.5 font-medium">{venue.contactPhone || '+91 79978 88869'}</p>
                    <p className="text-[11px] text-ivory-cream/70">Multi-cuisine buffet catering by Hotel Adithya Central</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={venue.googleMapsUrl || 'https://www.google.com/maps/search/?api=1&query=Aarna+Banquets+Pathebada+Road+Ramachandra+Rao+Pet+Eluru'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-forest-deep font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-gold/40 shadow-xl min-h-[380px] bg-charcoal/10 relative">
              <iframe
                title="Aarna Banquets Google Map"
                src={venue.googleMapsEmbed || 'https://maps.google.com/maps?q=Central+Plaza,+Pathebada+Road,+Ramachandra+Rao+Pet,+Eluru&t=&z=16&ie=UTF8&iwloc=&output=embed'}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-forest-deep text-ivory border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-gold font-bold">Reserve Arna Kalyana Vedhi</h2>
            <p className="text-xs sm:text-sm text-ivory/80 mt-2">
              Fill in your event details to verify hall availability and request a custom quote.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
