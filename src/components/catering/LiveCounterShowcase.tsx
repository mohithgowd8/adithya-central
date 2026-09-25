import SectionHeading from '../ui/SectionHeading';
import { UtensilsCrossed, Flame, GlassWater, IceCream } from 'lucide-react';

export default function LiveCounterShowcase() {
  const counters = [
    {
      id: 'c1',
      title: 'Traditional Banana Leaf Feast',
      category: 'AUTHENTIC SOUTH INDIAN',
      icon: UtensilsCrossed,
      description: 'Elaborate multi-course traditional seating feast served on fresh banana leaves with heritage sambar, rasam, kootu, sweets & vadai.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'c2',
      title: 'Live Tandoor & Barbeque Counter',
      category: 'NORTH INDIAN & GRILL',
      icon: Flame,
      description: 'Freshly roasted paneer tikka, tandoori kebabs, butter naans, and stuffed kulchas prepared live before your guests.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'c3',
      title: 'Artisanal Mocktail & Drink Bar',
      category: 'WELCOME REFRESHMENTS',
      icon: GlassWater,
      description: 'Handcrafted fruit mocktails, coconut chillers, herbal welcome elixirs, and traditional spiced buttermilk (Majjiga).',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'c4',
      title: 'Live Dessert & Halwa Station',
      category: 'SWEETS & DESSERTS',
      icon: IceCream,
      description: 'Steaming hot Jalebi with Rabri, Elaneer Payasam, live Kulfi counters, and stone-rolled ice cream delights.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="LIVE CULINARY COUNTERS"
          title="Interactive Live Food Stations."
          description="Elevate your wedding or reception with custom live food counters, fresh tiffins, and artisanal dessert bars."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="bg-ivory border border-gold/40 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold">
                    {c.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-gold shrink-0" />
                    <h3 className="font-serif text-xl text-burgundy-deep font-normal">{c.title}</h3>
                  </div>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                    {c.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
