import MetaSEO from '../components/ui/MetaSEO';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { VENUES_DATA } from '../data/venues';
import { Users, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Banquets() {
  return (
    <main className="pt-24 pb-20 w-full">
      <MetaSEO
        title="Kalyana Mandapams & Banquets | Adithya Central"
        description="Explore Adithya Central's luxury Kalyana Mandapams in Eluru: Aarna Banquets & Cuisines and Achyutha Banquets & Cuisines for grand weddings, receptions, and family celebrations."
      />

      {/* Hero */}
      <section className="bg-[#120407] text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-gold/40 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/aarna/aarna-hall-stage-front.jpg"
            alt="Adithya Central Banquets Showcase"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-block px-5 py-2 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 text-xs uppercase tracking-[0.22em] font-bold shadow-2xl backdrop-blur-md mb-2">
            OUR KALYANA MANDAPAMS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Find The Perfect <br />
            <span className="italic text-gold font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Space For Your Celebration.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ivory-cream max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Our two premier Kalyana Mandapams — Aarna Banquets & Cuisines and Achyutha Banquets & Cuisines — are thoughtfully designed for grand weddings, receptions, and family functions.
          </p>
        </div>
      </section>

      {/* Venues Showcase List */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="EXPLORE KALYANA MANDAPAMS"
            title="Designed For Lifelong Memories."
            align="center"
          />

          <div className="mt-16 space-y-16">
            {VENUES_DATA.map((venue) => (
              <div
                key={venue.id}
                className="bg-ivory-cream/40 border border-gold/40 rounded-sm overflow-hidden shadow-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
              >
                <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-sm overflow-hidden relative border border-gold/30">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-burgundy/90 text-gold px-4 py-1 rounded-sm text-xs font-semibold tracking-widest border border-gold/40">
                    {venue.label}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-ivory/90 text-burgundy-deep px-4 py-2 rounded-sm text-xs font-medium flex items-center gap-2 border border-gold">
                    <Users className="w-4 h-4 text-gold" />
                    <span>{venue.capacityPlaceholder}</span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  {venue.logo && (
                    <div className="mb-2">
                      <img
                        src={venue.logo}
                        alt={`${venue.name} Logo`}
                        className="h-14 sm:h-16 object-contain rounded-lg shadow-md border border-gold/30 bg-white p-1"
                      />
                    </div>
                  )}

                  <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
                    {venue.tagline}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-burgundy-deep">
                    {venue.name}
                  </h2>
                  <p className="text-sm text-charcoal/80 leading-relaxed font-light">
                    {venue.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {venue.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/70">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Button to={`/banquets/${venue.slug}`} variant="primary" showArrow size="md">
                      VIEW VENUE DETAILS
                    </Button>
                    <Link
                      to="/contact"
                      className="text-xs uppercase tracking-widest text-burgundy hover:text-gold-dark font-semibold"
                    >
                      CHECK AVAILABILITY
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
