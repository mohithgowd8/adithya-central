import { UtensilsCrossed, Sparkles, Users, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function CateringFeatureSection() {
  return (
    <section className="py-24 bg-[#140407] text-ivory relative overflow-hidden border-y border-gold/40">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/50 text-gold mb-4 shadow-lg backdrop-blur-md">
                <UtensilsCrossed className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">
                  20,000+ CATERINGS EXCELLENCE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                20,000+ Celebrations. <br />
                <span className="italic font-light text-gold drop-shadow-md">One Passion — Great Food.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-ivory-cream leading-relaxed font-normal drop-shadow-sm">
              Every celebration has its own story. Our catering team brings together authentic flavours, carefully selected ingredients and experienced service to make every occasion memorable.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-6 bg-[#21080E] border-2 border-gold/40 rounded-xl shadow-2xl hover:border-gold transition-all">
                <UtensilsCrossed className="w-7 h-7 text-gold mb-3" />
                <h4 className="font-serif text-lg text-gold font-bold mb-1">Traditional Flavours</h4>
                <p className="text-xs sm:text-sm text-ivory-cream leading-relaxed">
                  Time-honored recipes preserved across generations.
                </p>
              </div>

              <div className="p-6 bg-[#21080E] border-2 border-gold/40 rounded-xl shadow-2xl hover:border-gold transition-all">
                <Sparkles className="w-7 h-7 text-gold mb-3" />
                <h4 className="font-serif text-lg text-gold font-bold mb-1">Freshly Prepared</h4>
                <p className="text-xs sm:text-sm text-ivory-cream leading-relaxed">
                  100% fresh, locally sourced ingredients prepared in hygiene setups.
                </p>
              </div>

              <div className="p-6 bg-[#21080E] border-2 border-gold/40 rounded-xl shadow-2xl hover:border-gold transition-all">
                <Users className="w-7 h-7 text-gold mb-3" />
                <h4 className="font-serif text-lg text-gold font-bold mb-1">Experienced Service</h4>
                <p className="text-xs sm:text-sm text-ivory-cream leading-relaxed">
                  Courteous, uniformed staff ensuring warm hospitality.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button to="/catering" variant="gold" showArrow size="md">
                EXPLORE CATERING
              </Button>
            </div>
          </div>

          {/* Right Column: Large Food Photography (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border-2 border-gold shadow-2xl img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85"
                alt="Adithya Central Authentic Indian Feast Catering"
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
            </div>
            
            {/* Background Decorative Gold Accent */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold/30 z-0 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
