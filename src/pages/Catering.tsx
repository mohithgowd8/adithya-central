import MetaSEO from '../components/ui/MetaSEO';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import StatCard from '../components/ui/StatCard';
import CostEstimator from '../components/catering/CostEstimator';
import LiveCounterShowcase from '../components/catering/LiveCounterShowcase';
import CateringMenuViewer from '../components/catering/CateringMenuViewer';
import { CATERING_FEATURES, CATERING_SERVICES_LIST } from '../data/catering';
import { Utensils, CheckCircle } from 'lucide-react';

export default function Catering() {
  return (
    <main className="pt-24 pb-20 w-full">
      <MetaSEO
        title="Outdoor & Wedding Catering | Hotel Adhitya Central"
        description="Hotel Adhitya Central offers high-capacity outdoor catering, traditional wedding banana leaf feasts, corporate luncheons, and live food counter setups in Eluru."
      />

      {/* Hero */}
      <section className="bg-[#120407] text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-gold/40 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80"
            alt="Hotel Adhitya Central Catering Feast"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4 flex flex-col items-center">
          {/* Logo Badge */}
          <div className="mb-2 p-1 rounded-full bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-2xl">
            <img
              src="/images/logo.png"
              alt="Hotel Adhitya Central Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full bg-white p-1"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 shadow-2xl backdrop-blur-md">
            <Utensils className="w-4 h-4 text-gold shrink-0" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold">
              HOTEL ADHITYA CENTRAL CATERING
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Great Food. <br />
            <span className="italic text-gold font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Beautifully Served.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ivory-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            Over 20,000 celebrations catered with heritage flavours, fresh ingredients, and attentive service across weddings, corporate galas, and family milestones.
          </p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-10 max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 bg-ivory-cream/90 border border-gold/40 p-6 rounded-sm shadow-xl">
          <StatCard value={20000} suffix="+" sublabel="CATERINGS COMPLETED" />
          <StatCard value={12} suffix="+" sublabel="YEARS EXPERIENCE" />
        </div>
      </section>

      {/* CATERING MENU EXPLORER SHOWCASE */}
      <section className="py-16 bg-ivory-cream/30 text-charcoal border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CateringMenuViewer />
        </div>
      </section>

      {/* Interactive Cost & Package Estimator Widget */}
      <section className="py-16 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostEstimator />
        </div>
      </section>

      {/* Live Counter Showcase */}
      <LiveCounterShowcase />

      {/* Catering Services Grid */}
      <section className="py-20 bg-ivory-cream/40 border-y border-gold/20 text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR CATERING OFFERINGS"
            title="Catering Tailored To Every Scale & Taste."
            description="From elaborate multi-course traditional wedding leaf services to modern buffet setups with live counters."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {CATERING_SERVICES_LIST.map((service, idx) => (
              <div
                key={idx}
                className="bg-ivory border border-gold/30 rounded-sm overflow-hidden shadow-md flex flex-col group hover:border-gold transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 right-6 font-serif text-2xl text-ivory">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-sm text-charcoal/80 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="pt-2">
                    <Button to="/contact" variant="primary" size="sm" showArrow>
                      PLAN THIS CATERING
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-burgundy-deep text-ivory border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHY ADITHYA CATERING"
            title="Culinary Excellence In Every Detail."
            align="center"
            theme="dark"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATERING_FEATURES.map((feat) => (
              <div key={feat.id} className="p-6 bg-burgundy/80 border border-gold/30 rounded-sm space-y-3">
                <CheckCircle className="w-8 h-8 text-gold" />
                <h4 className="font-serif text-xl text-ivory">{feat.title}</h4>
                <p className="text-xs text-ivory-cream/70 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy-deep">
            Ready To Plan Your Event Menu?
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70">
            Contact our culinary team today to discuss custom menu tasting, dietary choices, and guest capacity quotes.
          </p>
          <div>
            <Button to="/contact" variant="gold" size="lg" showArrow>
              PLAN YOUR CATERING NOW
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
