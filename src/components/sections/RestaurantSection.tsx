import Button from '../ui/Button';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_HIGHLIGHTS } from '../../data/restaurant';

export default function RestaurantSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Photography (2 Overlapping Images) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border border-gold/40 shadow-xl w-11/12 img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Adithya Central Restaurant Ambience"
                className="w-full h-[340px] sm:h-[420px] object-cover"
              />
            </div>
            
            {/* Overlapping Second Image (Food Detail) */}
            <div className="absolute -bottom-8 right-0 z-20 w-3/5 rounded-sm overflow-hidden border-2 border-gold shadow-2xl img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
                alt="Adithya Central Restaurant Signature Dishes"
                className="w-full h-[200px] sm:h-[250px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-gold"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-burgundy">
                ADITHYA CENTRAL RESTAURANT
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-burgundy-deep tracking-tight leading-[1.2]">
              Come For The Food. <br />
              <span className="italic font-light text-gold-dark">Stay For The Experience.</span>
            </h2>

            <div className="h-0.5 w-16 bg-gold/50 rounded-full my-4"></div>

            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
              Experience the flavours of Adithya Central beyond celebrations. Our restaurant brings together Indian favourites, comforting classics and carefully prepared dishes in a warm dining environment.
            </p>

            <div className="p-4 bg-ivory-cream/80 border border-gold/30 rounded-sm text-xs sm:text-sm text-charcoal/70 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                <span>Breakfast, Lunch & Dinner Dining • Pure Authentic Flavours</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Timings: <strong className="text-burgundy font-semibold">{RESTAURANT_HIGHLIGHTS.hours}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-charcoal/90 font-medium">Hotel Adithya Central: </span>
                  <span className="text-charcoal/70">{RESTAURANT_HIGHLIGHTS.shortAddress}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button to="/restaurant" variant="primary" size="md">
                EXPLORE RESTAURANT
              </Button>
              <a
                href={RESTAURANT_HIGHLIGHTS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-gold/60 text-burgundy-deep bg-ivory hover:bg-gold hover:text-burgundy-dark font-medium text-xs sm:text-sm transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span>LOCATION & MAP</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
