import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#140407] text-ivory border-t border-gold/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="CLIENT FEEDBACK"
          title="Words From Our Guests & Hosts"
          align="center"
          theme="dark"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-[#21080E] border-2 border-gold/40 rounded-xl shadow-2xl flex flex-col justify-between relative group hover:border-gold hover:bg-[#2A0912] transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20 group-hover:text-gold/40 transition-colors" />
              
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-ivory-cream leading-relaxed font-normal mb-6 font-serif italic drop-shadow-sm">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gold/30">
                <h4 className="font-serif text-lg text-gold font-bold tracking-wide">{t.name}</h4>
                <p className="text-xs text-gold-light/80 mt-1 font-semibold">{t.eventType} • {t.venueOrService}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
