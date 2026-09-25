import MetaSEO from '../components/ui/MetaSEO';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/form/ContactForm';
import { Phone, Mail, MapPin, Clock, ExternalLink, Navigation, Building2, Utensils } from 'lucide-react';
import { VENUES_DATA } from '../data/venues';
import { RESTAURANT_HIGHLIGHTS } from '../data/restaurant';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="pt-24 pb-20 w-full">
      <MetaSEO
        title="Contact Us & Book Enquiries | Adithya Central"
        description="Get in touch with Adithya Central for banquet hall availability, wedding catering menu quotes, restaurant table reservations, and venue tours."
      />

      {/* Hero */}
      <section className="bg-[#120407] text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-gold/40 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/achuta/achuta-glass-entrance-view.jpg"
            alt="Adithya Central Hospitality Contact"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-block px-5 py-2 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 text-xs uppercase tracking-[0.22em] font-bold shadow-2xl backdrop-blur-md mb-2">
            LET'S TALK
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Planning Something <br />
            <span className="italic text-gold font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Special?</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ivory-cream max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Our event planners and culinary directors are here to assist you with dates, menu customizations, and venue site visits.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label="DIRECT ENQUIRY"
            title="Start Your Celebration Journey."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Cards & Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-burgundy-deep text-ivory p-8 rounded-sm border border-gold/40 shadow-xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-1">CENTRAL CONTACT</span>
                  <h3 className="font-serif text-2xl text-gold">Adithya Central Hospitality</h3>
                  <p className="text-xs text-ivory-cream/80 mt-1 font-light">
                    Reach out directly or send an enquiry. Our event planners & managers respond promptly.
                  </p>
                </div>

                <div className="h-px w-full bg-gold/20"></div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-burgundy flex items-center justify-center text-gold border border-gold/30 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">Enquiries & Catering</span>
                      <strong className="text-base text-ivory font-normal">+91 79978 88869</strong>
                      <span className="block text-xs text-ivory-cream/70 mt-0.5">Hotel Direct: +91 93912 53999</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-burgundy flex items-center justify-center text-gold border border-gold/30 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">Email</span>
                      <strong className="text-base text-ivory font-normal">info@adithyacentral.com</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-burgundy flex items-center justify-center text-gold border border-gold/30 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">Service Hours</span>
                      <strong className="text-base text-ivory font-normal">Open 7 Days (9:00 AM - 9:00 PM)</strong>
                      <span className="block text-xs text-ivory-cream/70 mt-0.5">Restaurant: 7:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PRIMARY LOCATION: Hotel Adithya Central */}
              <div className="p-6 bg-ivory-cream/90 border-2 border-gold/60 rounded-sm space-y-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-burgundy flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-burgundy font-bold">HOTEL, RESTAURANT & CATERING HUB</span>
                    <h4 className="font-serif text-lg font-bold text-burgundy-deep">Hotel Adithya Central</h4>
                  </div>
                </div>
                <div className="p-3.5 bg-ivory border border-gold/30 rounded-sm text-xs text-charcoal/80 space-y-1">
                  <p className="font-medium text-burgundy-deep">{RESTAURANT_HIGHLIGHTS.address}</p>
                  <p className="text-[11px] text-charcoal/60">Landmark: {RESTAURANT_HIGHLIGHTS.landmark}</p>
                </div>
                <a
                  href={RESTAURANT_HIGHLIGHTS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-gold hover:bg-gold-light text-burgundy-dark font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>VIEW HOTEL LOCATION ON GOOGLE MAPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* SECONDARY LOCATION: Kalyana Mandapams */}
              <div className="p-6 bg-ivory-cream/70 border border-gold/30 rounded-sm space-y-3 shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-burgundy/80 flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-burgundy font-bold">KALYANA MANDAPAMS & BANQUET HALLS</span>
                    <h4 className="font-serif text-lg font-bold text-burgundy-deep">Aarna & Achyutha Banquets</h4>
                  </div>
                </div>
                <div className="p-3.5 bg-ivory border border-gold/20 rounded-sm text-xs text-charcoal/80 space-y-1">
                  <p className="font-medium text-burgundy-deep">Central Plaza, Pathebada Road, Ramachandra Rao Pet, Pathebada, Eluru - 534002</p>
                  <p className="text-[11px] text-charcoal/60">Aarna Banquets (5th Floor) • Achyutha Banquets (2nd Floor)</p>
                  <p className="text-[11px] text-burgundy font-medium pt-0.5">Timings: 9:00 AM – 11:00 PM (Closes 5:00 PM Sat)</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aarna+Banquets+Pathebada+Road+Ramachandra+Rao+Pet+Eluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm border border-gold/60 bg-ivory hover:bg-gold hover:text-burgundy-dark font-bold text-xs uppercase tracking-wider text-burgundy-deep transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>VIEW BANQUETS LOCATION ON GOOGLE MAPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="rounded-sm overflow-hidden border border-gold/40 shadow-lg h-[260px] bg-charcoal/10 relative">
                <iframe
                  title="Hotel Adithya Central Google Map"
                  src={RESTAURANT_HIGHLIGHTS.googleMapsEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: Contact Form (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* Quick Venue Cards Section */}
          <div className="mt-24">
            <SectionHeading
              label="OUR VENUES"
              title="Select Your Desired Venue"
              align="center"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {VENUES_DATA.map((venue) => (
                <Link
                  key={venue.id}
                  to={`/banquets/${venue.slug}`}
                  className="p-6 bg-ivory-cream/40 border border-gold/30 rounded-sm hover:border-gold transition-all duration-300 group block shadow-md"
                >
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">{venue.label}</span>
                  <h4 className="font-serif text-2xl text-burgundy-deep mt-1 group-hover:text-gold-dark transition-colors">{venue.name}</h4>
                  <p className="text-xs text-charcoal/70 mt-2 line-clamp-2">{venue.description}</p>
                  <div className="mt-4 pt-3 border-t border-gold/20 flex justify-between items-center text-xs font-semibold text-burgundy uppercase tracking-widest">
                    <span>VIEW VENUE</span>
                    <span className="text-gold font-bold">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
