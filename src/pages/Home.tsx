import MetaSEO from '../components/ui/MetaSEO';
import HeroSection from '../components/sections/HeroSection';
import TrustStatsSection from '../components/sections/TrustStatsSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedVenuesSection from '../components/sections/FeaturedVenuesSection';
import CostEstimator from '../components/catering/CostEstimator';
import LiveCounterShowcase from '../components/catering/LiveCounterShowcase';
import VenueGallerySection from '../components/sections/VenueGallerySection';
import CateringFeatureSection from '../components/sections/CateringFeatureSection';
import RestaurantSection from '../components/sections/RestaurantSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import OccasionsSection from '../components/sections/OccasionsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PhotoStorySection from '../components/sections/PhotoStorySection';
import FinalCTASection from '../components/sections/FinalCTASection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <main className="w-full">
      <MetaSEO
        title="Hotel Adithya Central Eluru | Adhitya Central Banquets & Restaurant"
        description="Welcome to Hotel Adithya Central (Adhitya Central), Eluru. Luxury banquet halls (Aarna Banquets, Achuta Banquet), fine restaurant dining, and catering in Eluru, Andhra Pradesh."
      />

      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — TRUST STATISTICS */}
      <TrustStatsSection />

      {/* SECTION 3 — ABOUT */}
      <AboutSection />

      {/* SECTION 4 — SERVICES */}
      <ServicesSection />

      {/* SECTION 5 — FEATURED VENUES */}
      <FeaturedVenuesSection />

      {/* SA CATERERS STYLE INSTANT EVENT & CATERING COST ESTIMATOR */}
      <section className="py-16 bg-ivory text-charcoal border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostEstimator />
        </div>
      </section>

      {/* LIVE CULINARY COUNTERS SHOWCASE */}
      <LiveCounterShowcase />

      {/* SECTION 6 — VENUE GALLERY */}
      <VenueGallerySection />

      {/* SECTION 7 — CATERING */}
      <CateringFeatureSection />

      {/* SECTION 8 — RESTAURANT */}
      <RestaurantSection />

      {/* SECTION 9 — WHY ADITHYA CENTRAL */}
      <WhyChooseSection />

      {/* SECTION 10 — OCCASIONS */}
      <OccasionsSection />

      {/* SECTION 11 — TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 12 — PHOTO STORY */}
      <PhotoStorySection />

      {/* SECTION 13 — FINAL CTA */}
      <FinalCTASection />

      {/* SECTION 14 — CONTACT */}
      <ContactSection />
    </main>
  );
}
