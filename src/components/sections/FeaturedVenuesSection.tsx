import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { VENUES_DATA } from '../../data/venues';

export default function FeaturedVenuesSection() {
  return (
    <section className="py-20 sm:py-32 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="OUR KALYANA MANDAPAMS"
          title="Spaces Made For Your Special Moments."
          description="Explore our two signature Kalyana Mandapams — Aarna Banquets & Cuisines and Achyutha Banquets & Cuisines — crafted for grand weddings, receptions, and memorable family occasions."
          align="center"
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {VENUES_DATA.map((venue, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={venue.id}
                className="group relative bg-ivory-cream/30 border border-gold/40 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 p-6 sm:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Visual Image Container (Dominant 7 Cols) */}
                  <div className={`lg:col-span-7 relative h-[360px] sm:h-[460px] lg:h-[500px] overflow-hidden rounded-sm border border-gold/30 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-105"
                    />
                    
                    {/* Subtle dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-black/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500" />

                    {/* Venue Label Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-burgundy/90 text-gold px-4 py-1.5 rounded-sm border border-gold/40 text-xs font-semibold tracking-[0.2em]">
                      {venue.label}
                    </div>

                    {/* Capacity Indicator Placeholder */}
                    <div className="absolute bottom-4 right-4 z-10 bg-ivory/90 text-burgundy-deep px-4 py-2 rounded-sm border border-gold text-xs font-medium flex items-center gap-2 backdrop-blur-sm">
                      <Users className="w-4 h-4 text-gold" />
                      <span>{venue.capacityPlaceholder}</span>
                    </div>
                  </div>

                  {/* Text Content Container (5 Cols) */}
                  <div className={`lg:col-span-5 flex flex-col justify-center space-y-6 transform transition-transform duration-500 group-hover:-translate-y-1 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    
                    {/* Official Logo Banner */}
                    {venue.logo && (
                      <div className="mb-1 inline-block max-w-[280px]">
                        <img
                          src={venue.logo}
                          alt={`${venue.name} Logo`}
                          className="h-14 sm:h-16 object-contain rounded-lg shadow-md border border-gold/30 bg-white p-1"
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <span className="h-px w-6 bg-gold"></span>
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-dark">
                        ADITHYA CENTRAL VENUE
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-burgundy-deep tracking-tight group-hover:text-burgundy transition-colors">
                      {venue.name}
                    </h3>

                    <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                      {venue.description}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-2 pt-2">
                      {venue.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/70">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-4 border-t border-gold/30">
                      <Link
                        to={`/banquets/${venue.slug}`}
                        className="inline-flex items-center gap-3 font-semibold text-xs sm:text-sm uppercase tracking-widest text-burgundy group-hover:text-gold-dark transition-colors"
                      >
                        <span>EXPLORE VENUE</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-2 text-gold" />
                      </Link>
                    </div>
                  </div>

                </div>

                {/* Bottom subtle gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gold transition-colors duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
