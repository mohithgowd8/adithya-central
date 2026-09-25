import { OCCASIONS_DATA } from '../../data/occasions';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function OccasionsSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="EVENT SPECTRUM"
          title="Occasions We Host & Cater"
          description="From monumental wedding rituals to intimate family gatherings and corporate summits."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCCASIONS_DATA.map((occ) => (
            <div
              key={occ.id}
              className="group relative h-80 rounded-sm overflow-hidden border border-gold/30 shadow-md cursor-pointer img-zoom-container flex flex-col justify-end p-6"
            >
              <img
                src={occ.image}
                alt={occ.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-burgundy-dark/40 to-transparent"></div>

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">
                  {occ.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-ivory mt-1 font-normal group-hover:text-gold transition-colors">
                  {occ.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/contact" variant="primary" size="md">
            BOOK YOUR EVENT TODAY
          </Button>
        </div>

      </div>
    </section>
  );
}
