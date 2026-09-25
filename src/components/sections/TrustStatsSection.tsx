import { STATS_DATA } from '../../data/stats';

export default function TrustStatsSection() {
  return (
    <section className="bg-burgundy-dark text-ivory py-16 border-y border-gold/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-4">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gold tracking-tight">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-ivory-cream/80 mt-2">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
