import MetaSEO from '../components/ui/MetaSEO';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import Button from '../components/ui/Button';
import LogoSlideshowCard from '../components/ui/LogoSlideshowCard';
import { STATS_DATA } from '../data/stats';
import { ShieldCheck, HeartHandshake, Utensils, Award } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24 pb-20 w-full">
      <MetaSEO
        title="About Us | Adithya Central - 12+ Years of Hospitality"
        description="Learn about Adithya Central's 12+ years heritage, 20,000+ completed caterings, 3 signature venues, and unwavering dedication to authentic South Indian culinary hospitality."
      />

      {/* Hero */}
      <section className="bg-[#120407] text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-gold/40 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/aarna/aarna-hall-stage-front.jpg"
            alt="Adithya Central Heritage"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-block px-5 py-2 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 text-xs uppercase tracking-[0.22em] font-bold shadow-2xl backdrop-blur-md mb-2">
            ABOUT ADITHYA CENTRAL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            12+ Years Of <br />
            <span className="italic text-gold font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Creating Memorable Experiences.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ivory-cream max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            From humble beginnings to a celebrated hospitality destination, Adithya Central combines culinary artistry with warm Indian hospitality.
          </p>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-ivory-cream/90 border border-gold/40 p-6 rounded-sm shadow-xl">
          {STATS_DATA.map((s) => (
            <StatCard key={s.id} value={s.value} suffix={s.suffix} sublabel={s.sublabel} />
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-gold"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-burgundy">
                  OUR HERITAGE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-burgundy-deep">
                A Legacy Built On Taste & Trust.
              </h2>
              <div className="h-0.5 w-16 bg-gold/50"></div>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Founded with a passion for bringing families and communities together over exceptional food, Adithya Central has grown into Eluru's premier hospitality group — encompassing <strong className="text-burgundy">Hotel Adhitya Central</strong> (Restaurant & Catering) and our two luxury Kalyana Mandapams: <strong className="text-burgundy">Aarna Banquets & Cuisines</strong> and <strong className="text-burgundy">Achyutha Banquets & Cuisines</strong>.
              </p>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Over the past 12+ years, we have had the honor of serving over 20,000 celebrations. Whether catering a traditional wedding for thousands or hosting an intimate family dinner, our commitment to fresh ingredients, authentic spice blends, and gracious service remains absolute.
              </p>
            </div>

            <div>
              <LogoSlideshowCard />
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-ivory-cream/50 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR CORE ETHOS"
            title="Guiding Values That Define Us."
            description="Every dish we serve and venue we maintain reflects our pledge to quality and respect for tradition."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-ivory border border-gold/30 rounded-sm text-center">
              <Utensils className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-burgundy-deep mb-2">Culinary Integrity</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Only authentic recipes, non-negotiable freshness, and zero compromise on flavour.
              </p>
            </div>

            <div className="p-6 bg-ivory border border-gold/30 rounded-sm text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-burgundy-deep mb-2">Warm Hospitality</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Treating every guest like family with attentive, gracious, and courteous service.
              </p>
            </div>

            <div className="p-6 bg-ivory border border-gold/30 rounded-sm text-center">
              <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-burgundy-deep mb-2">High Standards</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Strict hygiene protocols across all kitchens, storage, and banquet facilities.
              </p>
            </div>

            <div className="p-6 bg-ivory border border-gold/30 rounded-sm text-center">
              <Award className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-burgundy-deep mb-2">Execution Excellence</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Punctual delivery, flawless table management, and seamless event coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-burgundy text-ivory text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-4">
            Experience Adithya Central Hospitality
          </h2>
          <p className="text-sm sm:text-base text-ivory-cream/80 mb-8 font-light">
            Plan your next wedding, banquet, or catering service with our experienced event managers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="gold" size="md">
              PLAN YOUR EVENT NOW
            </Button>
            <Button to="/banquets" variant="secondary" size="md">
              EXPLORE OUR VENUES
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
