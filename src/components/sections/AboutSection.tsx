import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import LogoSlideshowCard from '../ui/LogoSlideshowCard';

export default function AboutSection() {
  return (
    <section id="about-preview" className="py-20 sm:py-28 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: 3 Logos Slow Slideshow Card */}
          <div>
            <LogoSlideshowCard />
          </div>

          {/* RIGHT: Story & Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-gold"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-burgundy">
                ABOUT ADITHYA CENTRAL
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-burgundy-deep leading-tight">
              A Legacy of Unmatched Flavour & Warm Hospitality.
            </h2>

            <div className="h-0.5 w-16 bg-gold/50"></div>

            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              Adithya Central has evolved into Eluru’s most trusted hospitality landmark. Over 12+ years and 20,000+ completed catering services, our dedication remains steadfast — authentic taste, hygienic preparation, and elegant venues.
            </p>

            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light">
              We proudly house <strong className="text-burgundy">Hotel Adhitya Central</strong> (offering fine restaurant dining & high-capacity catering) along with our two luxury Kalyana Mandapams — <strong className="text-burgundy">Aarna Banquets & Cuisines</strong> and <strong className="text-burgundy">Achyutha Banquets & Cuisines</strong>.
            </p>

            {/* Checkmark Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-burgundy-deep">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>2 Luxury Kalyana Mandapams</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-burgundy-deep">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Hotel Adhitya Central Catering</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-burgundy-deep">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Live Culinary Stalls & Counters</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-burgundy-deep">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Hotel Fine Dining Restaurant</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button to="/about" variant="primary" size="md" showArrow>
                READ OUR FULL STORY
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
